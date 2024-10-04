import React, { useState, useEffect } from 'react';
import './landing.css';
import { FeedCardLanding } from './FeedCardLanding'
import person1 from '../../assets/images/person1.svg';
import person2 from '../../assets/images/person2.svg';
import person3 from '../../assets/images/person3.svg';


const testPosts = [
  {
    img: person1,
    username: 'Jessica Smith',
    userAt: 'Jessica123',
    post: 'Car crash happened in Calgary at 23 Avenue!',
    time: '1:14 PM',
    date: 'Oct 3, 2024'
  },
  {
    img: person2,
    username: 'Richard Sanchez',
    userAt: 'RichardSanchez',
    post: 'Collision on highway 2 roundabout. Alot of traffic.',
    time: '1:14 PM',
    date: 'Oct 3, 2024'
  },
  {
    img: person3,
    username: 'Sia',
    userAt: 'NotSia',
    post: 'I just witnessed a semi-truck flip over on West Bound 407. TRAFFIC!',
    time: '1:14 PM',
    date: 'Oct 3, 2024'
  }
]

export function FeedsLanding() {

  const [currentPost, setCurrentPost] = useState(0);

  useEffect(() => {
    const timerForPost = setInterval(() => {
      setCurrentPost(prevPost => (prevPost + 1) % testPosts.length);
    }, 3000);
    return () => clearInterval(timerForPost);
  }, []);;

  const style = (index) => {
    const value = (index - currentPost + testPosts.length) % testPosts.length;
    if (value == 0) {
      return 'z-30 scale-100 opacity-100 translate-y-0 translate-x-0';
    } else if (value == 1) {
      return 'z-20 scale-90 opacity-70 translate-y-8 translate-x-4';
    } else if (value == 2) {
      return 'z-10 scale-80 opacity-50 -translate-y-8 translate-x-2';
    }
  };


  return (
    <>
      <div className='bg-zinc-50'>
      <div className='px-14 font-proxima'>
        <div className='pt-60'>
          <h1 className='text-center text-5xl font-bold md:pb-40 sm:pb-20'>Feeds</h1>

          <div className='flex flex-col md:flex-row justify-center pb-20'>
            <div className='flex flex-col w-full md:w-2/6 mb-24 md:mb-0'>
              <h2 className='text-4xl md:text-6xl text-center md:text-start'>
                See real time feeds and posts on events!
              </h2>
              <div className='flex sm:justify-center md:justify-start align-center mt-5'>
                <button className='button-hero2 p-2 w-5/12'>
                  View Feed
                </button>
              </div>
            </div>
            <div className='relative w-full md:w-4/6 h-[500px]'>
              {testPosts.map((post, index) => (
                <div
                  key={index}  
                  className={`absolute top-0 left-0 w-full transition-all duration-500 ${style(index)}`}
                >
                  <FeedCardLanding {...post} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};