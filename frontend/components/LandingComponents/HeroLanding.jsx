import './landing.css';
import globe from '../../assets/images/globe.svg';
export function HeroLanding() {
  return (
    <>
      <div className='bg-white text-black font-proxima'>
        <div className='flex flex-col md:flex-row items-center justify-between md:justify-center'>
        <div className='w-full md:w-6/12'>
              <div className='flex flex-col space-y-12 px-14 py-10'>
                <div>
                  <h1 className='font-proximaBold text-7xl sm:text-center md:text-start'>Wiki</h1>
                  <h1 className='font-proximaBold text-7xl sm:text-center md:text-start'>Crashia</h1>
                  <p className='pt-4'> We believe social media provides a dependable resource for real-time data, as users frequently post about accidents they witness or are involved in, offering an opportunity to respond to incidents faster.</p>
                </div>

                <div className='flex flex-row sm:justify-center md:justify-start space-x-3 justify-start'>
                  <button className='button-hero' >
                    View Map
                  </button>
                  <button className='button-hero2'>
                    View Feeds
                  </button>
                </div>
              </div>
            </div>
            <div className='relative second-div-hero w-full md:w-6/12 bg-black flex items-center justify-center'>
              <div>
                <img src={globe} alt="Globe" className="max-w-full max-h-full object-contain" />
              </div>
            </div>
        </div>

      </div>
    </>
  )
};