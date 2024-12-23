import { InfoWindow } from "@vis.gl/react-google-maps";
import { fetchCrashTweets } from "../../src/api";
import { useEffect, useState } from "react";
import { FeedCard } from "../LandingComponents/FeedCard";

function SmallFeed({ tweets }) {
  return (
    <>
      {tweets.map((tweet, index) => {
        return (
          <FeedCard
            key={index}
            img={tweet.profilePic}
            username={tweet.author_name}
            userAt={tweet.author_username}
            post={tweet.text}
            time={tweet.time}
            date={tweet.date}
            miniVer={true}
          />
        );
      })}
    </>
  );
}

export function FeedFloat({ selectedCrash, setSelectedCrash }) {
  const [selectedCrashTweets, setSelectedCrashTweets] = useState([]);

  useEffect(() => {
    async function getTweet() {
      const response = await fetchCrashTweets(selectedCrash._id);
      if (response.status === 200) {
        setSelectedCrashTweets(response.data);
      }
    }

    getTweet();
  }, [selectedCrash]);

  return (
    <InfoWindow
      position={{
        lat: selectedCrash.location.lat,
        lng: selectedCrash.location.lng,
      }}
      onCloseClick={() => {
        setSelectedCrash(null);
      }}
    >
      <div className="max-w-xs max-h-[125px] overflow-y-scroll">
        <div className="flex flex-row w-full justify-around text-lg">
          <p>{selectedCrash.date}</p>
          <p>{selectedCrash.time}</p>
        </div>
        <p className="font-semibold text-center pb-2 text-lg border-b-black border-b-2">
          {selectedCrash.location.formattedAddress
            .split(",")
            .map((line, index) => (
              <span key={index}>
                {/* no need "Calgary" and "Canada" */}
                {!(index === 1 || index === 3) && (
                  <>
                    {line.trim()} <br />
                  </>
                )}
              </span>
            ))}
        </p>
        <SmallFeed tweets={selectedCrashTweets} />
      </div>
    </InfoWindow>
  );
}
