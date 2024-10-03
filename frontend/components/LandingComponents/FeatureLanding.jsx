import './landing.css';
import laptopGlobe from '../../assets/images/laptopglobe.svg';
import carCrash from '../../assets/images/carcrash.svg';
import socialMedia from '../../assets/images/socialmedia.svg';
export function FeatureLanding() {
  return (
    <>
      <h1 className='font-proxima text-5xl font-bold mt-24 mb-16 px-14 text-center'>How it works</h1>

      <div className='flex flex-row items-center justify-between space-x-2 px-14 font-proxima text-neutral-500'>
        <div className='flex justify-start w-full md:w-6/12'>
          <img className='image-features' src={socialMedia} />
        </div>
        <div className='w-full md:w-6/12 '>
          <p className='text-2xl'>
          Real-time threat detection powered by social media mining. Our system leverages Twitter data to provide early alerts on transit incidents and emergencies.
          </p>  
        </div>
      </div>

      <div className='flex flex-row items-center justify-between space-x-2 px-14 font-proxima text-neutral-500'>
        <div>
          <p className='text-2xl'>Dynamic incident tracking with geo-tagging. We pinpoint event locations and provides up-to-date information on accidents and emergencies across the transit network.
          </p>
        </div>
        <div className='flex justify-end w-full'>
          <img className='image-features' src={carCrash} />
        </div>
      </div>

      <div className='flex flex-row items-center justify-between space-x-2 px-14 font-proxima text-neutral-500'>
        <div className='flex justify-start w-full'>
          <img className='image-features' src={laptopGlobe} />
        </div>
        <div clssName='w-full'>
          <p className='text-2xl'>
          User-friendly web interface with global reach (maybe). Access real-time incident reports, alerts, and interactive maps from anywhere, on any device.
          </p>
        </div>
      </div>
    </>
  )
};