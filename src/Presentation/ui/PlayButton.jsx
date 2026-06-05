/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import useAudioProvider from "../../domain/AudioProvider";
import { usePlaylist } from "../../domain/PlaylistContext";

const PlayButton = ({ song, e }) => {
  const {hoveredsong,setsongplayingid,songplayingid } = usePlaylist();
  const { togglePlay, playing } = useAudioProvider();
  console.log(playing);

  const isThisSongPlaying = songplayingid === song?.id && playing;

  const handleClick = (e) => {
    e.stopPropagation()
    if (songplayingid !== song.id) {
      // different song — set it, AudioContext's useEffect will auto-play it
      setsongplayingid(song.id);
    } else {
      // same song — just toggle pause/resume
      togglePlay();
    }
  };

  return (
    <div>
   {hoveredsong === song.id && <button onClick={handleClick} className="bg-green-400 text-black w-10 h-10 rounded-full flex items-center justify-center hover:scale-105 transition-transform">
        {isThisSongPlaying ? (
          <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
          </svg>
        ) : (
          <svg className="w-8 h-8 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z"/>
          </svg>
        )}
      </button> }
    </div>
  );
};

export default PlayButton;