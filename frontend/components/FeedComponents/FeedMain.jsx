import React, { useState, useEffect } from 'react';
import './feed.css';
import { FeedCard } from '../LandingComponents/FeedCard';
import { processTweetBatch } from '../../src/api';
import { socketStore } from '../../src/store/socketStore';
import { filter } from '@observablehq/plot';

export function FeedMain() {

  const [data, setData] = useState([]);
  const [hashTagFilter, setHashTagFilter] = useState();
  const [severityFilter, setSeverityFilter] = useState();
  const [hashtags, setHashtags] = useState({});
  const [filteredData, setFilteredData] = useState([]);

  const { socket } = socketStore();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/twitter/incidents');
        if (response.ok) {
          const result = await response.json();
          setData(result);
          setFilteredData(result);
          console.log(result);
          const res = await processTweetBatch(result);
          console.log(res.data.message)
        }
  
      } catch (error) {
        console.log("Nothing bruh")
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);
  
  
  useEffect(() => {
    if (!socket) return;

    socket.on('newTweets', async (newTweets) => {
      console.log("Received new tweets");
      setData(prevTweets => {
        const updatedTweets = [...newTweets, ...prevTweets];
        updatedTweets.sort((a, b) => 
          new Date(b.createdAt) - new Date(a.createdAt)
        );
        processTweetBatch({tweets: newTweets});
        return updatedTweets;
      })
    });
  }, [socket]);

  const toggleHashtagFilter = (tag) => {
    setHashTagFilter(currentTag => currentTag === tag ? null : tag);
  }

  const toggleSeverityFilter = (severity) => {
    setSeverityFilter(currentSeverity => currentSeverity === severity ? null : severity);
  }


  useEffect(() => {
    let newHashtags = {};
    filteredData.forEach((tweet) => {
      const tagsArray = tweet.entities.hashtags;
      for (let index = 0; index < tagsArray.length; index++) {
        if (!newHashtags.hasOwnProperty(tagsArray[index])) {
          newHashtags[tagsArray[index]] = { tag: tagsArray[index], count: 1 };
        }
        else {
          newHashtags[tagsArray[index]].count += 1;
        }
      }
    });
    setHashtags(newHashtags);
  }, [filteredData]);

  // useEffect(() => {
  //   console.log(hashtags);
  // }, [hashtags]);

  // useEffect(() => {
  //   console.log(data);
  // }, [data]);

  useEffect(() => {
    let filtered = [...data];

    if (severityFilter) {
        filtered = filtered.filter(tweet => {
            if (severityFilter == "Low") return tweet.severity == 0;
            else if (severityFilter == "Medium") return tweet.severity == 1;
            else if (severityFilter == "High") return tweet.severity == 2;
            return false;
        });
    }

    if (hashTagFilter) {
        filtered = filtered.filter(tweet => 
            tweet.entities.hashtags.includes(hashTagFilter)
        );
    }

    setFilteredData(filtered);
  }, [data, severityFilter, hashTagFilter]);

  return (
    <>
      <div className='grid grid-cols-12 font-proxima'>
        <div className='hidden lg:block lg:col-span-3 px-4'>

        </div>

        <div className='sm:col-span-12 lg:col-span-6 border border-inherit '>
          <div className='flex flex-col space-y-4 py'>
            {filteredData.length === 0 ? (
              <p>No recent incidents reported.</p>
            ) : (
              filteredData.map((item, index) => (
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
                      miniVer={false}
                      severity={item.severity}
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