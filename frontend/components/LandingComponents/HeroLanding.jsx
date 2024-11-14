import './landing.css';
import globe from '../../assets/images/globe.svg';
import { useNavigate } from 'react-router-dom';
import EarthCanvas from '../Canvas/Earth';
import StarsCanvas from '../Canvas/Stars';
// import { motion } from 'framer-motion'
// import { slideIn, textVariant } from '../../utils/motion';

export function HeroLanding() {
  const navigate = useNavigate();

  return (
    <>
      <div className='bg-zinc-50 text-black font-proxima'>
        <div className='flex flex-col md:flex-row items-center justify-between md:justify-center'>
        <div className='w-full md:w-6/12'>
              <div className='flex flex-col space-y-12 px-14 py-10'>
                <div>
                  <h1 className='font-proximaBold text-7xl sm:text-center md:text-start'>Wiki</h1>
                  <h1 className='font-proximaBold text-7xl sm:text-center md:text-start'>Crashia</h1>
                  <p className='pt-4'> We believe social media provides a dependable resource for <strong>real-time data</strong>, as users frequently post about <strong>accidents</strong> they witness or are involved in, offering an opportunity to <strong>respond to incidents faster</strong>.</p>
                </div>
                <div className='flex flex-row sm:justify-center md:justify-start space-x-3 justify-start'>
                  <button className='button-hero' onClick={()=>{navigate("auth")}} >
                    Get Started
                  </button>
                  {/* <button className='button-hero2' onClick={()=>{navigate("feeds")}}>
                    View Feeds 
                  </button> */}
                </div>
              </div>
            </div>
            <div className='relative z-0 second-div-hero w-full md:w-6/12 bg-black flex items-center justify-center'>
                <EarthCanvas/>
                <StarsCanvas/>
            </div>
        </div>

      </div>
    </>
  )
};