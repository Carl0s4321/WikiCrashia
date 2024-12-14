import { useState, useEffect, useRef } from "react";
import * as Plot from "@observablehq/plot";

const calgaryBounds = {
    northeast: { lat: 51.2130, lng: -113.3064 },  // NE corner
    southwest: { lat: 50.8000, lng: -114.0714 }   // SW corner
};

export function Statistics() {
  const [crashData, setCrashData] = useState([]);
  const [tweetData, setTweetData] = useState([]);
  const [timeFilter, setTimeFilter] = useState("all");

  // 0.02 is extra padding just in case
  const [view, setView] = useState({
    x: [calgaryBounds.southwest.lng - 0.02, calgaryBounds.northeast.lng + 0.02], 
    y: [calgaryBounds.southwest.lat - 0.02, calgaryBounds.northeast.lat + 0.02]    
  });  

  const [zoomFactor, setZoomFactor] = useState(1.05); 
  const [isDragging, setIsDragging] = useState(false); 
  const [dragStart, setDragStart] = useState(null); 
  const mapRef = useRef(null);
  const timelineRef = useRef(null);
  const reportersRef = useRef(null);
  const hourlyDistRef = useRef(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const [crashResp, tweetResp] = await Promise.all([
          fetch("http://localhost:3000/crashes"),
          fetch("http://localhost:3000/tweets")
        ]);
        const crashes = await crashResp.json();
        const tweets = await tweetResp.json();

        const validCrashes = crashes.filter(crash => 
          crash.location && 
          crash.location.lat !== null && 
          crash.location.lng !== null && 
          crash.location.lat !== undefined && 
          crash.location.lng !== undefined
        );

        console.log('Total crashes:', crashes.length);
        console.log('Valid crashes:', validCrashes.length);

        setCrashData(validCrashes);  
        setTweetData(tweets);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  const filterDataByTime = (data) => {
    const now = new Date();
    switch (timeFilter) {
      case "week":
        const weekAgo = new Date(now.setDate(now.getDate() - 7));
        return data.filter(d => new Date(d.dateTime) >= weekAgo);
      case "month":
        const monthAgo = new Date(now.setMonth(now.getMonth() - 1));
        return data.filter(d => new Date(d.dateTime) >= monthAgo);
      default:
        return data;
    }
  };

  useEffect(() => {
    if (crashData.length > 0 && mapRef.current) {
      const filteredData = filterDataByTime(crashData);

      
      
      const chart = Plot.plot({
        height: 500,
        width: 600,
        marginTop: 20,
        marginLeft: 80,
        marginBottom: 70,
        grid: true,
        fontSize: "13px",
        fontFamily: "system-ui",
        x: {
          label: "Longitude →",
          tickRotate: -45,
          tickFormat: ".4f",
          domain: view.x,
          clamp: true
        },
        y: {
          label: "↑ Latitude",
          tickFormat: ".4f",
          domain: view.y,
          clamp: true
        },
        color: {
          type: "linear",
          scheme: "YlOrRd"
        },
        marks: [
          Plot.density(filteredData, {
            x: d => Math.max(calgaryBounds.southwest.lng, Math.min(calgaryBounds.northeast.lng, d.location.lng)),
            y: d => Math.max(calgaryBounds.southwest.lat, Math.min(calgaryBounds.northeast.lat, d.location.lat)),
            fill: "density",
            bandwidth: 0.01,
            opacity: 0.5
          }),
          Plot.dot(filteredData, {
            x: d => Math.max(calgaryBounds.southwest.lng, Math.min(calgaryBounds.northeast.lng, d.location.lng)),
            y: d => Math.max(calgaryBounds.southwest.lat, Math.min(calgaryBounds.northeast.lat, d.location.lat)),
            fill: "blue",
            opacity: 0.6,
            r: 3,
            tip:true,
            title: d => `${d.date} - ${d.time}`
          })
        ],


      });
      
      mapRef.current.innerHTML = '';
      mapRef.current.appendChild(chart);
      return () => chart.remove();
    }
  }, [crashData, view]);

  const handleScroll = (event) => {
    if (!mapRef.current) {
        return;
    }
    event.preventDefault();
    event.stopPropagation();
    const { offsetX, offsetY } = event.nativeEvent;
    const rect = mapRef.current.getBoundingClientRect();

    let xRatio = offsetX / rect.width; 
    let yRatio = offsetY / rect.height; 

    let [xMin, xMax] = view.x;
    let [yMin, yMax] = view.y;

    let xRange = xMax - xMin;
    let yRange = yMax - yMin;

    let zoomDirection = event.deltaY > 0 ? zoomFactor : 1 / zoomFactor; 

    let newXRange = xRange * zoomDirection;
    let newYRange = yRange * zoomDirection;

    let newXMin = xMin + xRange * xRatio * (1 - zoomDirection);
    let newXMax = newXMin + newXRange;
    let newYMin = yMin + yRange * yRatio * (1 - zoomDirection);
    let newYMax = newYMin + newYRange;

    // Max zoom
    if (newXMax - newXMin > calgaryBounds.northeast.lng - calgaryBounds.southwest.lng + 0.04) {
        newXMin = calgaryBounds.southwest.lng - 0.02;
        newXMax = calgaryBounds.northeast.lng + 0.02;
    }
    
    if (newYMax - newYMin > calgaryBounds.northeast.lat - calgaryBounds.southwest.lat + 0.04) {
        newYMin = calgaryBounds.southwest.lat - 0.02;
        newYMax = calgaryBounds.southwest.lat + 0.02;
    }

    // Minimum zoom
    const minZoom = 0.02;
    if (newXMax - newXMin < minZoom) {
      const centerX = (newXMax + newXMin) / 2;
      newXMin = centerX - minZoom / 2;
      newXMax = centerX + minZoom / 2;
    }
    if (newYMax - newYMin < minZoom) {
      const centerY = (newYMax + newYMin) / 2;
      newYMin = centerY - minZoom / 2;
      newYMax = centerY + minZoom / 2;
    }

    if (newXMin < calgaryBounds.southwest.lng - 0.02) {
        const shift = calgaryBounds.southwest.lng - 0.02 - newXMin;
        newXMin += shift;
        newXMax += shift;
    }

    if (newXMax > calgaryBounds.northeast.lng + 0.02) {
        const shift = newXMax - (calgaryBounds.northeast.lng + 0.02);
        newXMin += shift;
        newXMax += shift;
    }

    if (newYMin < calgaryBounds.southwest.lat - 0.02) {
        const shift = calgaryBounds.southwest.lat - 0.02 - newYMin;
        newYMin += shift;
        newYMax += shift;
    }

    if (newYMax > calgaryBounds.northeast.lat + 0.02) {
        const shift = newYMax - (calgaryBounds.northeast.lat + 0.02);
        newYMin += shift;
        newYMax += shift;
    }


    setView({
      x: [newXMin, newXMax],
      y: [newYMin, newYMax]
    });
  };

  const handleMouseDown = (event) => {
    setIsDragging(true);
    setDragStart({ x: event.clientX, y: event.clientY });
  };
  
  const handleMouseMove = (event) => {
    if (!isDragging || !dragStart) return;

    const deltaX = event.clientX - dragStart.x; 
    const deltaY = event.clientY - dragStart.y; 

    const [xMin, xMax] = view.x;
    const [yMin, yMax] = view.y;

    const xRange = xMax - xMin;
    const yRange = yMax - yMin;

    const newXMin = xMin - deltaX * (xRange / 600); 
    const newXMax = xMax - deltaX * (xRange / 600);
    const newYMin = yMin + deltaY * (yRange / 500); 
    const newYMax = yMax + deltaY * (yRange / 500);

    if (newXMin < calgaryBounds.southwest.lng - 0.02) {
        newXMin = calgaryBounds.southwest.lng - 0.02;
        newXMax = newXMin + xRange;
    }
    if (newXMax > calgaryBounds.northeast.lng + 0.02) {
        newXMax = calgaryBounds.northeast.lng + 0.02;
        newXMin = newXMax - xRange;
    }
    if (newYMin < calgaryBounds.southwest.lat - 0.02) {
        newYMin = calgaryBounds.southwest.lat - 0.02;
        newYMax = newYMin + yRange;
    }
    if (newYMax > calgaryBounds.northeast.lat + 0.02) {
        newYMax = calgaryBounds.northeast.lat + 0.02;
        newYMin = newYMax - yRange;
    }

    setView({ x: [newXMin, newXMax], y: [newYMin, newYMax] });
    setDragStart({ x: event.clientX, y: event.clientY }); 
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setDragStart(null);
  };

  const zoom = (factor) => {
    const [xMin, xMax] = view.x;
    const [yMin, yMax] = view.y;

    const xCenter = (xMax + xMin) / 2;
    const yCenter = (yMax + yMin) / 2;

    const xRange = (xMax - xMin) / factor;
    const yRange = (yMax - yMin) / factor;

    setView({
      x: [xCenter - xRange / 2, xCenter + xRange / 2],
      y: [yCenter - yRange / 2, yCenter + yRange / 2]
    });
  };

//   const resetZoom = () => {
//     setView({ x: [-180, 180], y: [-90, 90] }); 
//   };

  useEffect(() => {
    if (crashData.length > 0 && timelineRef.current) {
      const filteredData = filterDataByTime(crashData);
      
      // Instead of sorting by the string date, use the new dateTime field I added
      const timelineData = Object.entries(
        filteredData.reduce((acc, crash) => {
          const date = new Date(crash.dateTime);
          const dateKey = date.toISOString().split('T')[0];
          acc[dateKey] = (acc[dateKey] || 0) + 1;
          return acc;
        }, {})
      ).map(([date, count]) => 
        ({ date, count, dateObj: new Date(date)}))
        .sort((a, b) => a.dateObj - b.dateObj); 

      const chart = Plot.plot({
        height: 500,
        margin: 40,
        marginBottom:70,
        grid: true,
        fontSize: "13px",
        fontFamily: "system-ui",
        x: {
          label: "Date →",
          tickRotate: -45,
          type: "time",
          tickFormat: "%b %d"
        },
        y: {
          label: "↑ Number of Crashes",
          zero: true
        },
        marks: [
          Plot.areaY(timelineData, {
            x: "dateObj",
            y: "count",
            fill: "lightblue",
            opacity: 0.3
          }),
          Plot.line(timelineData, {
            x: "dateObj",
            y: "count",
            stroke: "blue",
            strokeWidth: 2
          }),
          Plot.dot(timelineData, {
            x: "dateObj",
            y: "count",
            fill: "blue",
            tip:true,
            r: 3,
            title: d => `${d.date}: ${d.count} crashes`
          })
        ]
      });
      
      timelineRef.current.innerHTML = '';
      timelineRef.current.appendChild(chart);
      return () => chart.remove();
    }
  }, [crashData, timeFilter]);

  // Top crash reporters
  useEffect(() => {
    if (tweetData.length > 0 && reportersRef.current) {
      const filteredData = filterDataByTime(tweetData);
      
      const reporterData = Object.entries(
        filteredData.reduce((acc, tweet) => {
          acc[tweet.author_name] = (acc[tweet.author_name] || 0) + 1;
          return acc;
        }, {})
      )
        .map(([author, count]) => ({ author, count }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 10);

      const chart = Plot.plot({
        height: 400,
        marginBottom: 50,
        marginTop: 40,
        marginRight: 40,
        marginLeft: 120,
        fontSize: "13px",
        fontFamily: "system-ui",
        x: {
          label: "Number of Reports →",
          grid: true
        },
        y: {
          label: "Reporter →"
        },
        marks: [
          Plot.barX(reporterData, {
            x: "count",
            y: "author",
            fill: "steelblue",
            sort: { y: "-x" }
          }),
          Plot.text(reporterData, {
            x: "count",
            y: "author",
            text: d => d.count,
            dx: 5,
            dy: 0,
            fontSize: 13
          })
        ]
      });
      
      reportersRef.current.innerHTML = '';
      reportersRef.current.appendChild(chart);
      return () => chart.remove();
    }
  }, [tweetData, timeFilter]);

  //by the hour
  useEffect(() => {
        if (crashData.length > 0 && hourlyDistRef.current) {
        const filteredData = filterDataByTime(crashData);
        
        const hourlyData = filteredData.reduce((acc, crash) => {
            try {
            if (!crash.time || typeof crash.time !== 'string') {
                console.warn('Invalid time format:', crash);
                return acc;
            }

            const timeParts = crash.time.trim().split(' ');
            if (timeParts.length < 2) {
                console.warn('Invalid time format:', crash.time);
                return acc;
            }

            const [time, period] = timeParts;
            let [hours, minutes] = time.split(':');
            hours = parseInt(hours);

            if (isNaN(hours) || hours < 1 || hours > 12) {
                console.warn('Invalid hour:', crash.time);
                return acc;
            }

            if (period && period.toLowerCase().includes('p') && hours !== 12) {
                hours += 12;
            } else if (period && period.toLowerCase().includes('a') && hours === 12) {
                hours = 0;
            }
            
            acc[hours] = (acc[hours] || 0) + 1;
            return acc;
            } catch (error) {
            console.warn('Error processing time:', crash.time, error);
            return acc;
            }
        }, {});

        const hourlyArray = Array.from({ length: 24 }, (_, i) => ({
            hour: i,  
            count: hourlyData[i] || 0,
            label: formatHourLabel(i)  
        }));

        const chart = Plot.plot({
            height: 400,
            marginBottom: 60,
            marginTop: 40,
            marginRight: 40,
            marginLeft: 40,

            grid: true,
            style: {
            fontSize: "13px",
            fontFamily: "system-ui"
            },
            x: {
                type: "band",  
                domain: hourlyArray.map(d => d.hour),
                label: "Hour of Day →",
                tickFormat: d => formatHourLabel(d),
                tickRotate: -45,
                labelOffset: 70, 
                labelAnchor: "center" 
                },
                y: {
                label: "↑ Number of Crashes",
                zero: true,
                grid: true
                },
                color: {
                scheme: "purple"
                },
            marks: [
                Plot.areaY(hourlyArray, {
                    x: "hour",
                    y: "count",
                    fill: "purple",
                    fillOpacity: 0.2
                }),
                Plot.line(hourlyArray, {
                    x: "hour",
                    y: "count",
                    stroke: "purple",
                    strokeWidth: 2
                }),
                Plot.dot(hourlyArray, {
                    x: "hour",
                    y: "count",
                    fill: "purple",
                    tip:true,
                    r: 3,
                    title: d => `${formatHourLabel(d.hour)} - ${d.count} crashes`
                }),
                Plot.ruleX([new Date().getHours()], {
                    stroke: "red",
                    strokeDasharray: "4,4"
                })
            ]
      });
      
      hourlyDistRef.current.innerHTML = '';
      hourlyDistRef.current.appendChild(chart);
      return () => chart.remove();
    }
  }, [crashData, timeFilter]);

  const formatHourLabel = (hour) => {
    const hourNum = parseInt(hour);
    if (hourNum === 0) return "12:00 AM";
    if (hourNum === 12) return "12:00 PM";
    if (hourNum < 12) return `${hourNum}:00 AM`;
    return `${hourNum - 12}:00 PM`;
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Crash Statistics Dashboard</h1>
        <select
          value={timeFilter}
          onChange={(e) => setTimeFilter(e.target.value)}
          className="px-4 py-2 border rounded"
        >
          <option value="all">All Time</option>
          <option value="week">Past Week</option>
          <option value="month">Past Month</option>
        </select>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-6 text-center ">Crash Density Map</h2>
        <div className="overflow-hidden">
            <div
            ref={mapRef}
            className="border border-gray-300 rounded-lg"
            onWheelCapture={(e) => {
                e.preventDefault();
                e.stopPropagation();
                e.nativeEvent.stopImmediatePropagation();
                handleScroll(e);
            }}
            onWheel={handleScroll} 
            onMouseDown={handleMouseDown} 
            onMouseMove={handleMouseMove} 
            onMouseUp={handleMouseUp} 
            onMouseLeave={handleMouseUp} 
            style={{
                height: "500px", 
                width: "100%", 
                overflow: "hidden",
                cursor: isDragging ? "grabbing" : "grab",
                touchAction: "none",
                position: "relative",
                isolation: "isolate"
            }}
            onTouchStart={(e) => e.preventDefault()}
            onTouchMove={(e) => e.preventDefault()}
            ></div>

        </div>
      </div>



        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-6">Crashes Over Time</h2>
          <div ref={timelineRef}></div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-6">Top Crash Reporters</h2>
          <div ref={reportersRef}></div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-6">Hourly Crash Distribution</h2>
          <div ref={hourlyDistRef}></div>
        </div>
      </div>
    </div>
  );
}