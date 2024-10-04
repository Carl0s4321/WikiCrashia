import './landing.css';
import person1 from '../../assets/images/person1.svg';
export function FeedCardLanding(props) {
  return (
    <>
      <div className='flex flex-col space-y-6 bg-black p-10 font-proxima text-white rounded-lg'>
        <div className='flex flex-row space-x-4'>
          <img className='sm:w-14 sm:h-14 md:w-20 md:h-20 rounded-full' src={person1}/>
          <div className='flex flex-col items-start'>
            <h1 className='sm:text-lg md:text-4xl'>Jessica Smith</h1>
            <p1 className='sm:text-lg md:text-4xl text-gray-500'>@Jessica123</p1>
          </div>
        </div>
        <h1 className='sm:text-xl md:text-5xl'> Car crash happened in Tokyo at 23 Avenue!</h1>
        <div className='flex flex-row space-x-2'>
          <p alt='time'>1:14 AM</p>
          <p>·</p>
          <p alt='date'> Oct 3, 2024</p>
        </div>

        
      </div>
    </>
  );
};