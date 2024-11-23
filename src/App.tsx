import { useState } from "react";

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
    coverUrl: '/soleil.jpg',
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

  const [currentSong, setCurrentSong] = useState(songs[0]);

  const  handlePrevious = () => {
    setCurrentSong(songs[0]);
  };

  const handleNext = () => {
    setCurrentSong(songs[1]);
  };

  return (
    <>
      <div>
        <div>
          <img src={currentSong.coverUrl} alt="cover"/>
        </div>
        <div>
          <h2>{currentSong.title}</h2>
          <p>{currentSong.artist}</p>
        </div>
        <div>
          <button onClick={handlePrevious}>戻る</ button>
          <button onClick={handleNext}>次へ</ button>
        </div>
      </div>
    </>
  )
}

export default App
