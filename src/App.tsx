import { Volume2,SkipForward, SkipBack,Play, Pause } from "lucide-react";
import { useRef, useState } from "react";
import { Slider } from "./components/ui/slider";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";


const songs = [
  {
    id: 1,
    title: 'シャイニングスター',
    artist: '詩歩',
    coverUrl: '/シャイニングスター.jpg',
    musicUrl: '/シャイニングスター.mp3',
  },
  {
    id: 2,
    title: 'kokoroblossom',
    artist: '森田爻一',
    coverUrl: '/kokoroblossom.jpg',
    musicUrl: '/kokoroblossom.mp3',
  },
  {
    id: 3,
    title: '煉獄セレナーデ',
    artist: 'Rosukey',
    coverUrl: '/煉獄セレナーデ.jpg',
    musicUrl: '/煉獄セレナーデ.mp3',
  },
  {
    id: 4,
    title: 'soleil',
    artist: 'KEI',
    coverUrl: '/soleil.png',
    musicUrl: '/soleil.mp3',
  },
  {
    id: 5,
    title: 'ベガロスト',
    artist: 'KEI',
    coverUrl: '/ベガロスト.jpg',
    musicUrl: '/ベガロスト.mp3',
  },
  {
    id: 6,
    title: '彩を失くしたアメジスト',
    artist: 'Mary',
    coverUrl: '/彩を失くしたアメジスト.jpg',
    musicUrl: '/彩を失くしたアメジスト.mp3',
  },
];

function App() {

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);
  const audioRef = useRef<HTMLAudioElement>(null)
  const currentSong = songs[currentSongIndex]

  const  handlePrevious = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex -1 + songs.length) % songs.length);
    setIsPlaying(false);
  };

  const handleNext = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
    setIsPlaying(false);
  };

  const togglePlayPause = () => {
    if(!audioRef.current) return;

    if(isPlaying){
      audioRef.current.pause();
    }else{
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  }

  const handleVolumeChange = (value: number[]) => {
    setVolume(value[0]);
    if (audioRef.current) {
      audioRef.current.volume = value[0] / 100;
    }
  }
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-900 to-gray-900">
      <Card className="w-full max-w-md bg-gradient-to-br from-gray-900 to-gray-800 text-white shadow-xl">
      <CardContent className="p-6">
        <div className="relative aspect-square mb-6 overflow-hidden rounded-lg shadow-2xl">
          <img src={currentSong.coverUrl} alt="Cover" 
          className="w-full h-full object-cover transition-transform duration-500 ease-out hover:scale-110"
          />
        </div>
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-white mb-1">{currentSong.title}</h2>
          <p className="text-gray-400">{currentSong.artist}</p>
        </div>
        <div className="flex justify-between items-center mb-6">
          <Button variant="ghost" size="icon" onClick={handlePrevious}
          className="text-white hover:text-gray-300 transition-colors">
            <SkipBack className="h-6 w-6" /></ Button>
          <Button variant="ghost" size="icon" onClick={togglePlayPause}
          className="text-white hover:text-gray-300 transition-colors">
            {isPlaying ? (<Pause className="h-8 w-8" />) : (<Play className="h-8 w-8" />) }</ Button>
          <Button variant="ghost" size="icon" onClick={handleNext}
          className="text-white hover:text-gray-300 transition-colors">
            <SkipForward className="h-6 w-6" /></ Button>
        </div>
        <div className="mt-6 flex items-center">
          <Volume2 className="h-4 w-4 text-gray-400 mr-2"/>
          <Slider value={[volume]} max={100} step={1} className="w-full" onValueChange={handleVolumeChange} />

        </div>
        <audio src={currentSong.musicUrl} ref={audioRef} onEnded={handleNext} />
        </CardContent>
      </Card>
      </div>
    </>
  )
}

export default App
