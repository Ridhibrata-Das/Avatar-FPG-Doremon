"use client";

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

interface AIAvatarProps {
  isModelSpeaking: boolean;
  audioLevel: number;
}

type AvatarType = 'roya' | 'timmy';

// Frame file names for Roya
const royaTalkingFrames = [
  '00001.jpg', '00003.jpg', '00009.jpg', '00010.jpg', '00022.jpg',
  '00029.jpg', '00036.jpg', '00069.jpg', '00071.jpg', '00078.jpg',
  '00080.jpg', '00081.jpg', '00082.jpg', '00083.jpg', '00153.jpg'
];

// Frame file names for timmy
const timmyTalkingFrames = Array.from({ length: 105 }, (_, i) => 
  `ezgif-frame-${String(i + 1).padStart(3, '0')}.png`
);

export default function AIAvatar({ isModelSpeaking, audioLevel }: AIAvatarProps) {
  const [currentAvatar, setCurrentAvatar] = useState<AvatarType>('roya');
  const [currentFrame, setCurrentFrame] = useState<string>(
    currentAvatar === 'roya' ? royaTalkingFrames[0] : timmyTalkingFrames[0]
  );
  const frameIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Function to get a random frame based on current avatar
  const getRandomFrame = () => {
    const frames = currentAvatar === 'roya' ? royaTalkingFrames : timmyTalkingFrames;
    const randomIndex = Math.floor(Math.random() * frames.length);
    return frames[randomIndex];
  };

  useEffect(() => {
    if (isModelSpeaking) {
      // Start rapid frame changes when speaking
      if (!frameIntervalRef.current) {
        frameIntervalRef.current = setInterval(() => {
          setCurrentFrame(getRandomFrame());
        }, 200); // Change frame every 333ms for talking animation (3 frames per second)
      }
    } else {
      // Clear interval when not speaking
      if (frameIntervalRef.current) {
        clearInterval(frameIntervalRef.current);
        frameIntervalRef.current = null;
      }
      // Set to a default frame when not speaking
      setCurrentFrame(currentAvatar === 'roya' ? royaTalkingFrames[0] : timmyTalkingFrames[0]);
    }

    return () => {
      if (frameIntervalRef.current) {
        clearInterval(frameIntervalRef.current);
        frameIntervalRef.current = null;
      }
    };
  }, [isModelSpeaking, currentAvatar]);

  const handleAvatarChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentAvatar(e.target.value as AvatarType);
  };

  return (
    <div className="relative w-full rounded-xl overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Avatar Selection Dropdown */}
      <div className="absolute top-4 right-4 z-10">
        <select
          value={currentAvatar}
          onChange={handleAvatarChange}
          className="bg-gray-800/80 text-white px-3 py-2 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 backdrop-blur-sm transition-colors hover:bg-gray-800"
          aria-label="Select AI Avatar"
        >
          <option value="roya">Roya</option>
          <option value="timmy">timmy</option>
        </select>
      </div>

      {/* Frame Display */}
      <div className="relative h-[480px] flex items-center justify-center">
        <div className="relative w-[400px] h-[400px] transition-transform duration-300 transform">
          <Image
            src={`/frames/${currentAvatar === 'roya' ? 'talking' : currentAvatar}/${currentFrame}`}
            alt={`${currentAvatar} AI Avatar`}
            width={400}
            height={400}
            style={{ objectFit: 'contain' }}
            priority
            className="transition-opacity duration-300"
          />
        </div>
      </div>

      {/* Status Text */}
      <div className="absolute bottom-8 left-0 right-0 text-center">
        <p className="text-white/90 text-lg font-medium">
          {isModelSpeaking ? "Speaking..." : "Listening..."}
        </p>
        <div className="mt-2 flex justify-center gap-1.5">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                isModelSpeaking
                  ? "bg-blue-400 animate-bounce shadow-lg shadow-blue-400/20"
                  : "bg-white/40"
              }`}
              style={{
                animationDelay: `${i * 150}ms`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
} 