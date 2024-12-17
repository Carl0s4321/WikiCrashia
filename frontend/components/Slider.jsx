import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker, DateRange } from "react-date-range";
import { addDays } from "date-fns";
import { useEffect, useState } from "react";
import { useDateStore } from "../src/store/dateStore";

export default function Slider() {
  const { setDate } = useDateStore();

  const [state, setState] = useState({
    selection: {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  });

  useEffect(() => {
    setDate({
        startDate: state.startDate,
        endDate: state.endDate,
      });
  }, [state]);

  return (
    <div className="absolute top-1/2 -translate-y-1/2 z-40">
      <DateRange
        editableDateInputs={true}
        onChange={(item) => setState({ ...state.selection, ...item.selection })}
        moveRangeOnFirstSelection={false}
        minDate={new Date("November 1 2024")}
        maxDate={new Date()}
        direction="vertical"
        scroll={{ enabled: true }}
        ranges={[state]}
      />
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
