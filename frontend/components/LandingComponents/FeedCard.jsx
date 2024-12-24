import "./landing.css";

export function FeedCard(props) {
  const { img, username, userAt, post, time, date, miniVer, severity } = props;
  console.log(severity);
  const today = new Date(date) === new Date();

  const severityConfig = {
    0: {
      border: "border-l-4 border-green-500",
      color: "bg-green-100 text-green-800",
      label: "Low Severity"
    },
    1: {
      border: "border-l-4 border-yellow-500",
      color: "bg-yellow-100 text-yellow-800",
      label: "Medium Severity"
    },
    2: {
      border: "border-l-4 border-red-500",
      color: "bg-red-100 text-red-800",
      label: "High Severity"
    }
  }

  const config = severity !== undefined ? severityConfig[severity] : {};

  const SeveritySymbol = ({ severity }) => {
    if (severity === undefined) return null;

    return (
      <div className={`px-2 py-1 rounded-full text-xs font-semibold ${config.color}`}>
        {severityConfig[severity].label}
      </div>
    );
  }


  return (
    <>
      {miniVer ? (
        <>
            <div className={`bg-white p-2 font-proxima text-black rounded-lg ${config.border}`}>
              <div className="flex flex-row space-x-2 text-gray-500 sm:text-lg">
                <strong>
                  <p className="sm:text-lg font-proximaBold text-gray-700">
                    @{userAt}
                  </p>
                </strong>
                {today ? (
                  <>
                    <p alt="time" className="subscript text-[15px]">
                      <sub>{time}</sub>
                    </p>
                  </>
                ) : (
                  <>
                    <p alt="date" className="subscript text-[15px]">
                      <sub>{date}</sub>
                    </p>
                  </>
                )}
              </div>
              <SeveritySymbol severity={severity} />
              <div className="flex flex-row">
                <h1 className="text-md flex-grow">{post}</h1>
              </div>
            </div>
        </>
      ) : (
        <>
          <div className={`flex flex-col space-y-6 bg-white p-6 font-proxima text-black rounded-lg ${config.border}`}>
            <div className="flex flex-row space-x-4">
              <img className="sm:w-14 sm:h-14 rounded-full" src={img} />
              <div className="flex flex-col items-start">
                <h1 className="sm:text-lg">{username}</h1>
                <p className="sm:text-lg text-gray-500">@{userAt}</p>
              </div>
            </div>
            <SeveritySymbol severity={severity} />
            <h1 className="sm:text-xl">{post}</h1>
            <div className="flex flex-row space-x-2 text-gray-500 sm:text-lg">
              <p alt="time">{time}</p>
              <p>·</p>
              <p alt="date">{date}</p>
            </div>
          </div>
        </>
      )}
    </>
  );
}
