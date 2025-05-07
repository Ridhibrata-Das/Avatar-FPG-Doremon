"use client";

import { useState, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CameraPreview from '@/components/CameraPreview';
import AIAvatar from '@/components/AIAvatar';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Settings, Share2, Shield, Wifi } from 'lucide-react';

export default function OrionAI() {
  const [isConnected, setIsConnected] = useState(true);
  const [isModelSpeaking, setIsModelSpeaking] = useState(false);
  const [audioLevel, setAudioLevel] = useState(0);

  const handleTranscription = useCallback((text: string) => {
    console.log("Transcription:", text);
  }, []);

  const handleAudioLevel = useCallback((level: number) => {
    setAudioLevel(level);
  }, []);

  const handleModelSpeaking = useCallback((speaking: boolean) => {
    setIsModelSpeaking(speaking);
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-gray-900 via-indigo-900/30 to-black text-white">
      {/* Header */}
      <div className="border-b border-indigo-500/20 bg-black/60 backdrop-blur-md sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-4">
              <Link href="/dashboard" className="transition hover:opacity-80">
                <Image
                  src="/images/FPG Doraemon-logo.png"
                  alt="FPG Doraemon Logo"
                  width={120}
                  height={32}
                  className="h-8 w-auto brightness-150"
                />
              </Link>
              <div className="h-6 w-px bg-indigo-500/30" />
              <h1 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-500">
                AI Video Chat
              </h1>
              <Badge variant="secondary" className="font-medium bg-indigo-900/60 text-indigo-300 hover:bg-indigo-800/60 border border-indigo-500/20">
                Beta
              </Badge>
            </div>
            <div className="flex items-center gap-4">
              <Badge 
                variant={isConnected ? "default" : "destructive"} 
                className={`flex items-center gap-1.5 transition-all ${
                  isConnected ? 'bg-emerald-900/40 text-emerald-400 hover:bg-emerald-800/40 border border-emerald-500/20' : ''
                }`}
              >
                <Wifi className="h-3.5 w-3.5" />
                {isConnected ? "Connected" : "Offline"}
              </Badge>
              <Button variant="ghost" size="icon" className="text-indigo-300 hover:text-indigo-100 hover:bg-indigo-900/40">
                <Settings className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-10">
        {/* Glowing elements for visual interest */}
        <div className="fixed top-1/3 left-1/3 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="fixed bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="relative">
          {/* Session title with futuristic look */}
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-blue-300">Neural Conversation Interface</h2>
            <p className="text-indigo-300/70 max-w-lg mx-auto">Advanced neural model interaction with real-time visual feedback</p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-center">
            {/* Left Column - Camera Preview */}
            <div className="w-full lg:w-1/2 lg:sticky lg:top-24 flex flex-col">
              <div className="rounded-2xl shadow-xl border border-indigo-500/20 overflow-hidden relative h-full">
                {/* We're retaining the original content but adding a fancy border */}
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-blue-500/20 z-0"></div>
                <div className="absolute inset-0 rounded-2xl shadow-inner pointer-events-none border border-indigo-500/30 z-10"></div>
                
                {/* Original content - keep this part unchanged */}
                <div className="rounded-2xl bg-white/50 backdrop-blur-sm shadow-lg border border-gray-100 p-4 space-y-6 relative z-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Badge variant="outline" className="flex items-center gap-1.5 bg-white">
                        <Clock className="h-3.5 w-3.5" />
                        Live Session
                      </Badge>
                      <Badge variant="outline" className="flex items-center gap-1.5 bg-white">
                        <Shield className="h-3.5 w-3.5" />
                        Secure
                      </Badge>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex items-center gap-1.5 bg-white hover:bg-gray-50 transition-colors"
                    >
                      <Share2 className="h-4 w-4" />
                      Share
                    </Button>
                  </div>
                  
                  <CameraPreview 
                    onTranscription={handleTranscription} 
                    onAudioLevel={handleAudioLevel}
                    onModelSpeaking={handleModelSpeaking}
                  />
                </div>
              </div>
            </div>

            {/* Right Column - AI Avatar, adjusted to align with left */}
            <div className="w-full lg:w-1/2 lg:sticky lg:top-24 flex flex-col">
              <div className="rounded-2xl shadow-xl border border-indigo-500/20 overflow-hidden relative h-full flex flex-col justify-center">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-violet-500/20 z-0"></div>
                <div className="absolute inset-0 rounded-2xl shadow-inner pointer-events-none border border-indigo-500/30 z-10"></div>
                
                {/* Original content - keep this part unchanged but add padding to align */}
                <div className="rounded-2xl bg-white/50 backdrop-blur-sm shadow-lg border border-gray-100 p-4 relative z-5">
                  <AIAvatar 
                    isModelSpeaking={isModelSpeaking}
                    audioLevel={audioLevel}
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Additional futuristic controls */}
          <div className="mt-10 flex justify-center">
            <div className="bg-black/40 backdrop-blur-md border border-indigo-500/20 rounded-full px-6 py-3 flex items-center gap-4">
              <Button className="rounded-full bg-indigo-800 hover:bg-indigo-700 text-white border-none">
                New Session
              </Button>
              <div className="h-8 w-px bg-indigo-500/20"></div>
              <Button variant="ghost" className="text-indigo-300 hover:text-indigo-100 hover:bg-indigo-900/40 rounded-full">
                Voice Settings
              </Button>
              <Button variant="ghost" className="text-indigo-300 hover:text-indigo-100 hover:bg-indigo-900/40 rounded-full">
                Advanced Options
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 