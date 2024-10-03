import './landing.css';
import { React, useState } from 'react';
import laptopGlobe from '../../assets/images/laptopglobe.svg';
import carCrash from '../../assets/images/carcrash.svg';
import socialMedia from '../../assets/images/socialmedia.svg';

const whatWeDo = [
  {
    title:  "Leveraging Social Media for Real-Time Threat Detection",
    desc: "Real-time threat detection powered by social media mining. Our system leverages Twitter data to provide early alerts on transit incidents and emergencies.",
    img: socialMedia
  },
  {
    title: "Dynamic Incident Tracking",
    desc: "Dynamic incident tracking with geo-tagging. We pinpoint event locations and provides up-to-date information on accidents and emergencies across the transit network.",
    img: carCrash
  },
  {
    title: "User-friendly Web Interface",
    desc: "User-friendly web interface with global reach (maybe). Access real-time incident reports, alerts, and interactive maps from anywhere, on any device.",
    img: laptopGlobe
  }
]

export function FeatureLanding() {

  const [step, setStep] = useState(1);
  const totalSteps = 3;

  const handleNextButton = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    }
  }

  const handlePrevButton = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  }

  return (
    <>
      <h1 className='font-proxima text-5xl font-bold mt-60 mb-6 px-14 text-center'>How it works</h1>

      <div className='font-proxima px-14'>
        <h1>Step {step} of 3</h1>
        <div className='mb-8 bg-slate-300 h-2 rounded-full'>
          <div
            className="bg-black h-2 rounded-full transition-all progress-bar" 
            style={{ width: `${(step / totalSteps) * 100}%` }}
          ></div>
        </div>
      </div>

      <div className='flex sm:flex-col md:flex-row items-center justify-between space-x-2 px-14 space-y-5 font-proxima text-neutral-500'>
        <div className="w-full max-w-md aspect-square relative image-features">
              <img 
                className='absolute inset-0 w-full h-full object-contain' 
                src={whatWeDo[step - 1].img} 
              />
          </div>
        <div className='flex flex-col w-full md:w-6/12 space-y-10'>
          <div>
            <h1 className='font-proximaBold text-black text-2xl'>{whatWeDo[step - 1].title}</h1>
            <p className='text-2xl'>
            {whatWeDo[step - 1].desc}
            </p>  
          </div>
          <div className='flex items-center justify-between'>
            <button className='progress-button disabled:opacity-50'
              onClick={handlePrevButton}
              disabled={step === 1}
              >
              Previous
            </button>
            <button className='progress-button disabled:opacity-50' 
              onClick={handleNextButton}
              disabled={step === totalSteps}
              >
              Next
              </button>
          </div>
        </div>
      </div>

    </>
  )
};