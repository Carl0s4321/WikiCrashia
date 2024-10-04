import { FeedCardLanding } from './FeedCardLanding'
export function FeedsLanding() {
  return (
    <>
      <div className='bg-zinc-50 mt-60 px-14 font-proxima'>
        <h1 className='text-center text-5xl font-bold pt-60 pb-12'> Feeds </h1>

        <div className='flex sm:flex-col sm:space-y-4 md:flex-row justify-center items-center'>
          <div className='w-full md:w-2/6'>
            <h className='sm:text-4xl md:text-6xl'> Get real time feeds and posts on events!</h>
          </div>
          <div className='flex flex-col space-y-3 w-full md:w-4/6'>
            <FeedCardLanding/>
          </div>

        </div>
        
      </div>
    </>
  );
};