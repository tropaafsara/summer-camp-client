import { GiGrandPiano, GiDrumKit, GiSaxophone, GiViolin, GiTrumpet, GiPanFlute} from 'react-icons/gi';
import { PiGuitar } from 'react-icons/pi';
import { CiMicrophoneOn } from 'react-icons/ci';
import React from 'react';
const MusicInstruments = () => {
    return (
        <div >
            <h1 className='title'>Musical Instruments</h1>
            <hr></hr>
            <div className='text-8xl text-blue-900 grid lg:grid-cols-4 md:grid-cols-2 ms-10 gap-6 hover:transition-transform mt-8'>
            <div className='musicIns '>
            <GiGrandPiano></GiGrandPiano>
            <p className='text-xl text-black '>Piano</p>
            <p className='text-sm text-black text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>
            <div className='musicIns'>
            <PiGuitar></PiGuitar>
            <p className='text-xl text-black '>Guitar</p>
            <p className='text-sm text-black text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>
            <div className='musicIns'>
            <GiDrumKit></GiDrumKit>
            <p className='text-xl text-black '>Drums</p>
            <p className='text-sm text-black text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit.whgedhjw </p>
            </div>
            <div className='musicIns'>
            <GiSaxophone></GiSaxophone>
            <p className='text-xl text-black '>Saxophone</p>
            <p className='text-sm text-black text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>
            <div className='musicIns'>
            <GiViolin></GiViolin>
            <p className='text-xl text-black '>Violin</p>
            <p className='text-sm text-black text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit.ewuygd </p>
            </div>
            <div className='musicIns'>
            <GiTrumpet></GiTrumpet>
            <p className='text-xl text-black '>Trumpet</p>
            <p className='text-sm text-black text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>
            <div className='musicIns'>
            <GiPanFlute></GiPanFlute>
            <p className='text-xl text-black '>Flute</p>
            <p className='text-sm text-black text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit.ewghejude </p>
            </div>
            <div className='musicIns'>
            <CiMicrophoneOn></CiMicrophoneOn>
            <p className='text-xl text-black '>Vocal</p>
            <p className='text-sm text-black text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit.rydehsuwh3g </p>
            </div>
            
            
            
            
            
            
            
            </div>

            
        </div>
    );
};

export default MusicInstruments;