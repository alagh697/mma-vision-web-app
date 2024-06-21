"use client"
import React, { useRef, useState } from 'react'
import { PlayIcon, PauseIcon, SpeakerXMarkIcon, SpeakerWaveIcon } from '@heroicons/react/24/solid'

function HomePageVideoPlayer({src = '/Kongo.mp4', poster = '/kongo.jpg'}:any) {
    const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [initialPlay, setInitialPlay] = useState(false);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleInitialPlay = () => {
    if (videoRef.current) {
      setInitialPlay(true)
      videoRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const handleMuteUnmute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };
  return (
    <div
    className='relative w-1/2 aspect-video bg-white/10'
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        className="w-full h-full"
        controls={initialPlay}
        onClick={handlePlayPause}
      ></video>
      <span
      className='absolute top-3 left-3 text-xs bg-black/60 px-2 py-1 rounded-lg'
      >
        {`Highlight`}
      </span>
     {initialPlay == false &&
     <button onClick={handleInitialPlay} 
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
      shadow-xl shadow-white/50 hover-effect
      bg-blue-600 p-3 rounded-full text-white">
          {isPlaying ? <PauseIcon className="w-8 h-8" /> : <PlayIcon className="w-8 h-8" />}
        </button>}

      {/* <div className="absolute bottom-0 left-0 w-full pl-4 bg-gradient-to-t from-black/50 to-transparent flex space-x-4">
        
        <button onClick={handleMuteUnmute} className="bg-gray-800 p-2 rounded-full text-white">
          {isMuted ? <SpeakerXMarkIcon className="w-6 h-6" /> : <SpeakerWaveIcon className="w-6 h-6" />}
        </button>
      </div> */}
    </div>
  )
}

export default HomePageVideoPlayer
