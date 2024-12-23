import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker, DateRange } from "react-date-range";
// import { addDays } from "date-fns";
import { useEffect, useState } from "react";
import { useDateStore } from "../src/store/dateStore";
import { ArrowLeft, ArrowRight } from "./IconSvg";
export default function Slider() {
  const { setDate } = useDateStore();

  const [open, setOpen] = useState(false);

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

  return (
    <div className={`${open? '-translate-x-[346.4px]' : '-translate-x-0' } transition-all ease-in-out absolute top-1/2 -translate-y-1/2 z-40 `}>
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
        <div
          className="w-auto h-fit bg-gray-200 p-2 rounded-md cursor-pointer"
          onClick={handleCloseCalendar}
        >
          {open ? <ArrowRight size={20} color={'rgb(100,100,100)'}/> : <ArrowLeft size={20} />}
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
