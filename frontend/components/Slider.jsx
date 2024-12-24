import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker, DateRange } from "react-date-range";
// import { addDays } from "date-fns";
import { useEffect, useState } from "react";
import { useDateStore } from "../src/store/dateStore";
import { useSeverityStore } from "../src/store/severityStore";
import { ArrowLeft, ArrowRight } from "./IconSvg";
export default function Slider() {
  const { setDate } = useDateStore();

  const [open, setOpen] = useState(false);
  const { setSeverity } = useSeverityStore();
  const [severityFilter, setSeverityFilter] = useState(null);

  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  function handleCloseCalendar() {
    setOpen(!open);
  }

  useEffect(() => {
    // console.log("STATE", state);
    setDate({
      startDate: state[0].startDate,
      endDate: state[0].endDate,
    });
  }, [state]);

  // Same colors as feed cards
  const severityConfigs = {
    0: {
      pinColor: "#22C55E",
      buttonBg: "bg-green-100",
      buttonText: "text-green-800",
      label: "Low Severity"
    },
    1: {
      pinColor: "#EAB308",
      buttonBg: "bg-yellow-100",
      buttonText: "text-yellow-800",
      label: "Medium Severity"
    },
    2: {
      pinColor: "#EF4444",
      buttonBg: "bg-red-100",
      buttonText: "text-red-800",
      label: "High Severity"
    }
  };

  return (
    <div className={`${open ? '-translate-x-[346.4px]' : '-translate-x-0'} transition-all ease-in-out absolute top-1/2 -translate-y-1/2 z-40 `}>
      <div className="flex flex-row w-[500px]">
        <DateRange
          editableDateInputs={true}
          onChange={(item) => setState([item.selection])}
          moveRangeOnFirstSelection={false}
          minDate={new Date("November 1 2024")}
          maxDate={new Date()}
          direction="vertical"
          scroll={{ enabled: true }}
          ranges={state}
        />

        <div className="border-t border-gray-200 p-4">
          <h3 className="text-sm font-medium text-gray-600 mb-3">Filter by Severity</h3>
          <div className="space-y-2">
            {Object.entries(severityConfigs).map(([severity, config]) => (
              <button
                key={severity}
                className={`w-full px-3 py-2 rounded-md text-sm font-medium transition-colors ${severityFilter === parseInt(severity) ? config.buttonBg + ' ' + config.buttonText : 'bg-gray-50 hover:bg-gray-100'}`}
                onClick={() => {
                  const severityNum = parseInt(severity);
                  const newSeverity = severityFilter === severityNum ? null : severityNum;
                  setSeverityFilter(newSeverity);
                  setSeverity(newSeverity);        
                }}
              >
                {config.label}
              </button>
            ))}
            {severityFilter !== null && (
              <button
                className="w-full px-3 py-2 rounded-md text-sm font-medium bg-gray-100 hover:bg-gray-200 transition-colors"
                onClick={() => {
                  setSeverityFilter(null);  
                  setSeverity(null);        
                }}
              >
                Show All Severities
              </button>
            )}
          </div>
        </div>

        <div
          className="w-auto h-fit bg-gray-200 p-2 rounded-md cursor-pointer"
          onClick={handleCloseCalendar}
        >
          {open ? <ArrowRight size={20} color={'rgb(100,100,100)'} /> : <ArrowLeft size={20} />}
        </div>
      </div>
    </div>
  );
}

// export default function Slider() {
//     const [state, setState] = useState([
//       {
//         startDate: new Date(),
//         endDate: null,
//         key: "selection",
//       },
//     ]);

//     return (
//       <div className="absolute top-1/2 -translate-y-1/2 z-40">
//         <DateRange
//           editableDateInputs={true}
//           onChange={(item) => setState([item.selection])}
//           moveRangeOnFirstSelection={false}
//           minDate={new Date("September 1 2024")}
//           maxDate={new Date()}
//           ranges={state}
//         />
//       </div>
//     );
//   }
