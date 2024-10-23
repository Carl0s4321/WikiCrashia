import React, { useState, useEffect } from 'react';
import './feed.css';
import { FeedCard } from '../LandingComponents/FeedCard';

export function FeedMain() {
  const [data, setData] = useState([]);
  const [forYou, setForYou] = useState("forYou");
  const [hashTagFilter, setHashTagFilter] = useState();
  const [severityFilter, setSeverityFilter] = useState();
  const [hashtags, setHashtags] = useState({});

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3000/twitter/incidents');
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.log("Nothing bruh")
    }
  }

  const toggleHashtagFilter = (tag) => {
    setHashTagFilter(currentTag => currentTag === tag ? null : tag);
  }
  
  const toggleSeverityFilter = (severity) => {
    setSeverityFilter(currentSeverity => currentSeverity === severity ? null : severity);
  }


  useEffect(() => {
    let newHashtags = {};
    data.forEach((tweet) => {
      const tagsArray = tweet.entities.hashtags;
      for (let index = 0; index < tagsArray.length; index++) {
        if (!newHashtags.hasOwnProperty(tagsArray[index])) {
          newHashtags[tagsArray[index]] = {tag: tagsArray[index], count: 1};
        }
        else {
          newHashtags[tagsArray[index]].count += 1;
        }
      }
    });
    setHashtags(newHashtags);
  }, [data]);

  useEffect(() => {
    console.log(hashtags);
  }, [hashtags]);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      <div className='grid grid-cols-12 font-proxima'>
        <div className='hidden lg:block lg:col-span-3 px-4'>
          
        </div>

        <div className='sm:col-span-12 lg:col-span-6 border border-inherit '>
          <div className=' flex flex-row items-center'>
            <div className='top-buttons-div w-6/12 text-center border-b border-inherit'>
              <button className={`w-full ${forYou === "forYou" ? 'top-buttons-selected' : 'top-buttons'}`}
                onClick={() => setForYou("forYou")}
              >For you
              </button>
            </div>
            <div className='top-buttons-div w-6/12 text-center border-b border-inherited'>
              <button className={`w-full ${forYou === "following" ? 'top-buttons-selected' : 'top-buttons'}`}
                onClick={() => setForYou("following")}
              >Following</button>
            </div>
          </div>
          <div className='flex flex-col space-y-4 py'>
            {data.length === 0 ? (
              <p>No recent incidents reported.</p>
            ) : (
              data.map((item, index) => (
                <>
                  <div className='border-b border-inherit'>
                    <FeedCard
                      key={index}
                      img={item.profilePic}
                      username={item.tweetBy.fullName}
                      userAt={item.tweetBy.userName}
                      post={item.fullText}
                      time={item.localTime}
                      date={item.localDate}
                    />
                  </div>
                </>
              ))
            )}

          </div>
        </div>

        <div className='hidden lg:block lg:col-span-3 px-4'>
          <div className='flex flex-col space-y-4 sticky top-4 px-4'>
            <div className='flex flex-col border border-inherit py-2 rounded-xl'>
              <p className='font-proximaBold text-xl px-4'>Hashtags</p>
              {Object.entries(hashtags).map(([key, value]) => ((
                <>
                  <div className={`flex flex-col justify-center px-4 py-6 ${hashTagFilter === value.tag ? 'filter-button-selected' : 'filter-button'}`}>
                    <div>
                      <button
                        className={`text-start w-full font-semibold`}
                        onClick={() => toggleHashtagFilter(value.tag)}
                      >#{value.tag}</button>
                    </div>
                    <p className='text-xs text-inherit'>{value.count} {value.count > 1 ? 'posts' : 'post'}</p>
                  </div>
                </>
              )))}
            

            </div>

            <div className='flex flex-col border border-inherit py-2 rounded-xl'>
              <p className='font-proximaBold text-xl  px-4'>Severity</p>
              <div>
                <button
                  className={`w-full text-start px-4
                ${severityFilter === "Low" ? 'filter-button-selected' : 'filter-button'}`}
                  onClick={() => toggleSeverityFilter("Low")}
                >Low</button>
              </div>
              <div>
                <button
                  className={`w-full text-start px-4
                ${severityFilter === "Medium" ? 'filter-button-selected' : 'filter-button'}`}
                  onClick={() => toggleSeverityFilter("Medium")}
                >Medium</button>
              </div>
              <div>
                <button
                  className={`w-full text-start px-4
                ${severityFilter === "High" ? 'filter-button-selected' : 'filter-button'}`}
                  onClick={() => toggleSeverityFilter("High")}
                >High</button>
              </div>
              <div>
              </div>
            </div>
          </div>
        </div>

      </div>


    </>
  );
};