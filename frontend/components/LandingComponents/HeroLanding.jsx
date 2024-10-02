import './herolanding.css';
import globe from '../../assets/images/globe.svg';
export function HeroLanding() {
  return (
    <>
      <div className='bg-white text-black font-proxima'>
        <div className='flex flex-col md:flex-row items-center justify-between md:justify-center'>
        <div className='w-full md:w-6/12'>
              <div className='flex flex-col space-y-4 px-12 py-10'>
                <h1 className='font-proximaBold text-7xl md:text-start sm:text-center'>Wiki</h1>
                <h1 className='font-proximaBold text-7xl md:text-start sm:text-center'>Crashia</h1>
                <p> We believe social media provides a dependable resource for real-time data, as users frequently post about accidents they witness or are involved in, offering an opportunity to respond to incidents faster.</p>
                <button className='button-hero mx-auto' >
                  View map
                </button>
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