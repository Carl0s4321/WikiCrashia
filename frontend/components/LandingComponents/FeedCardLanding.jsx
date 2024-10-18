import './landing.css';
import person1 from '../../assets/images/person1.svg';

export function FeedCardLanding(props) {
  const {img, username, userAt, post, time, date} = props;
  return (
    <>
      <div className='flex flex-col space-y-6 bg-black p-10 font-proxima text-white rounded-lg'>
        <div className='flex flex-row space-x-4'>
          <img className='sm:w-14 sm:h-14 md:w-20 md:h-20 rounded-full' src={img}/>
          <div className='flex flex-col items-start'>
            <h1 className='sm:text-lg md:text-4xl'>{username}</h1>
            <p className='sm:text-lg md:text-4xl text-gray-500'>@{userAt}</p>
          </div>
        </div>
        <h1 className='sm:text-xl md:text-5xl'>{post}</h1>
        <div className='flex flex-row space-x-2 text-gray-500 sm:text-lg md:text-4xl'>
          <p alt='time'>{time}</p>
          <p>·</p>
          <p alt='date'>{date}</p>
        </div>

        
      </div>
    </>
  );
};