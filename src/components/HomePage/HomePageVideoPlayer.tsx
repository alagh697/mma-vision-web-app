"use client"
import React, { useRef, useState } from 'react'
import { PlayIcon, PauseIcon, SpeakerXMarkIcon, SpeakerWaveIcon } from '@heroicons/react/24/solid'

function HomePageVideoPlayer({src = 'https://file-examples.com/storage/fed5266c9966708dcaeaea6/2017/04/file_example_MP4_480_1_5MG.mp4', poster = '/kongo.jpg'}:any) {
    const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

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
        controls={false}
        onClick={handlePlayPause}
      ></video>
      <span
      className='absolute top-3 left-3 text-xs bg-black/60 px-2 py-1 rounded-lg'
      >
        {`Highlight`}
      </span>
      <div className="absolute bottom-0 left-0 w-full pl-4 bg-gradient-to-t from-black/50 to-transparent flex space-x-4">
        <button onClick={handlePlayPause} className="bg-gray-800 p-2 rounded-full text-white">
          {isPlaying ? <PauseIcon className="w-6 h-6" /> : <PlayIcon className="w-6 h-6" />}
        </button>
        <button onClick={handleMuteUnmute} className="bg-gray-800 p-2 rounded-full text-white">
          {isMuted ? <SpeakerXMarkIcon className="w-6 h-6" /> : <SpeakerWaveIcon className="w-6 h-6" />}
        </button>
      </div>
    </div>
  )
}

export default HomePageVideoPlayer
