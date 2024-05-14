'use client';

import { useRef, useState } from 'react';

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const vidRef = useRef<HTMLVideoElement>(null);

  const handleVideoClick = () => {
    setIsPlaying((isPrevPlaying) => !isPrevPlaying);

    if (isPlaying) {
      vidRef.current?.pause();
    } else {
      vidRef.current?.play();
    }
  };

  return (
    <>
      <main className="relative">
        <video ref={vidRef} muted loop src={'/people.mp4'} />

        <button
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          onClick={handleVideoClick}
        >
          {isPlaying ? (
            <span className="bg-black text-white p-4">Pause</span>
          ) : (
            <span className="bg-black text-white p-4">Play</span>
          )}
        </button>
      </main>
    </>
  );
}
