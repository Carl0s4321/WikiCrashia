import { useState, useEffect } from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";
import Slider from "../components/Slider";
import { useDateStore } from "../src/store/dateStore";

export function Home() {
  const { date } = useDateStore();
  const [crashes, setCrashes] = useState([]);
  const [filteredCrashes, setFilteredCrashes] = useState([]);
  const [selectedCrash, setSelectedCrash] = useState(null);

  const googleMapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  const mapID = import.meta.env.VITE_MAP_ID;

  useEffect(() => {
    async function fetchCrashData() {
      try {
        const response = await fetch("http://localhost:3000/crashes");
        const data = await response.json();
        // console.log("Fetched crash data:", data);
        setCrashes(data);
      } catch (error) {
        console.error("Error fetching crash data:", error);
      }
    }

    fetchCrashData();
  }, []);

  useEffect(() => {
    console.log("DATE", date);
    if (date.startDate || date.endDate) {
      const filtered = crashes.filter((crash) => {
        const crashDate = new Date(crash.date);
        return crashDate >= date.startDate && crashDate <= date.endDate;
      });
      setFilteredCrashes(filtered);
    } else {
      setFilteredCrashes(crashes);
    }
  }, [date]);

  return (
    <APIProvider apiKey={googleMapsApiKey}>
      <div className="font-proxima" style={{ height: "100vh", width: "100%" }}>
        <Map
          defaultZoom={11}
          defaultCenter={{ lat: 51.049999, lng: -114.066666 }}
          mapId={mapID}
          options={{
            draggable: true,
            scrollwheel: true,
            zoomControl: true,
            disableDoubleClickZoom: false,
          }}
        >
          {filteredCrashes.map((crash) => {
            const { location } = crash;

            // Validate location object
            if (
              !location ||
              typeof location.lat !== "number" ||
              typeof location.lng !== "number"
            ) {
              console.error("Invalid crash data:", crash);
              return null; // Skip invalid markers
            }

            return (
              <AdvancedMarker
                key={crash._id}
                position={{ lat: location.lat, lng: location.lng }}
                onClick={() => {
                    
                  setSelectedCrash(crash);
                }}
              >
                <Pin
                  background={"red"}
                  borderColor={"grey"}
                  glyphColor={"purple"}
                />
              </AdvancedMarker>
            );
          })}

          {selectedCrash && (
            <InfoWindow
              position={{
                lat: selectedCrash.location.lat,
                lng: selectedCrash.location.lng,
              }}
              onCloseClick={() => {
                console.log('SELECTED CRASH', selectedCrash)
                setSelectedCrash(null)}}
            >
              <div>
                <p>
                  <strong>Address:</strong>{" "}
                  {selectedCrash.location.formattedAddress}
                </p>
                <p>
                  <strong>Date:</strong> {selectedCrash.date}
                </p>
                <p>
                  <strong>Time:</strong> {selectedCrash.time}
                </p>
              </div>
            </InfoWindow>
          )}
        </Map>
        <Slider />
      </div>
    </APIProvider>
  );
}
