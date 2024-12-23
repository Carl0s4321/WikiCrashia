import "./landing.css";

export function FeedCard(props) {
  const { img, username, userAt, post, time, date, miniVer } = props;
  const today = new Date(date) === new Date();

  return (
    <>
      {miniVer ? (
        <>
          <div className="bg-white p-2 font-proxima text-black rounded-lg">
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
            <div className="flex flex-row">
              <h1 className="text-md flex-grow">{post}</h1>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col space-y-6 bg-white p-6 font-proxima text-black rounded-lg">
            <div className="flex flex-row space-x-4">
              <img className="sm:w-14 sm:h-14 rounded-full" src={img} />
              <div className="flex flex-col items-start">
                <h1 className="sm:text-lg">{username}</h1>
                <p className="sm:text-lg text-gray-500">@{userAt}</p>
              </div>
            </div>
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
