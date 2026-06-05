import fetchSongs from "../../data/FetchSong";
import { usePlaylist } from "../../domain/PlaylistContext";
import AddedToPlaylist from "./AddedToPlaylist";
import useAudioProvider from "../../domain/AudioProvider";
import { AddToPlaylist } from "../../domain/Playlist";
import AddSongToPlaylist from "./AddSongToPlaylist";

export default function AudioPlayer() {
  const { prevSong, togglePlay, playing, nextSong, duration, volume, setVolume, seek, progress, audioRef, onTimeUpdate, setDuration, currentTime, fmt } = useAudioProvider();
  const { addedtoplaylist, songplayingid } = usePlaylist();

  const songs = fetchSongs();
  const song = songs.find((s) => s.id === songplayingid);

  if (!song) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#181818] border-t border-[#282828] px-4 py-2 flex items-center gap-4">

      {/* Left: track info */}
      <div className="flex items-center gap-3 w-[30%] min-w-0">
        <img className="w-[52px] h-[52px] rounded object-cover shrink-0" src={song.coverUrl} alt={song.title} />
        <div className="min-w-0">
          <p className="text-white text-sm font-medium truncate">{song.title}</p>
          <p className="text-[#a7a7a7] text-xs truncate">{song.artist}</p>
        </div>
        {songplayingid === songs.id && addedtoplaylist  ? <AddedToPlaylist /> : <AddSongToPlaylist/>}
      </div>

      {/* Center: controls + progress */}
      <div className="flex flex-col items-center flex-1 gap-1">
        <div className="flex items-center gap-4">
          <button onClick={prevSong} className="text-[#a7a7a7] hover:text-white transition-colors">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 6h2v12H6zm3.5 6 8.5 6V6z"/>
            </svg>
          </button>
          <button onClick={togglePlay} className="bg-white text-black w-8 h-8 rounded-full flex items-center justify-center hover:scale-105 transition-transform">
            {playing ? (
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
              </svg>
            ) : (
              <svg className="w-4 h-4 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            )}
          </button>
          <button onClick={nextSong} className="text-[#a7a7a7] hover:text-white transition-colors">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 18l8.5-6L6 6v12zm2-8.14L11.03 12 8 14.14V9.86zM16 6h2v12h-2z"/>
            </svg>
          </button>
        </div>

        {/* Progress */}
        <div className="flex items-center gap-2 w-full max-w-md">
          <span className="text-[#a7a7a7] text-[11px] w-8 text-right">{currentTime}</span>
          <div className="flex-1 h-1 bg-[#535353] rounded-full cursor-pointer group" onClick={seek}>
            <div className="h-full bg-white rounded-full group-hover:bg-[#1db954] transition-colors" style={{ width: `${progress}%` }} />
          </div>
          <span className="text-[#a7a7a7] text-[11px] w-8">{duration}</span>
        </div>
      </div>

      {/* Right: volume */}
      <div className="flex items-center gap-2 w-[30%] justify-end">
        <svg className="w-4 h-4 text-[#a7a7a7]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/>
        </svg>
        <input type="range" min="0" max="1" step="0.01" value={volume}
          onChange={(e) => { setVolume(+e.target.value); if (audioRef.current) audioRef.current.volume = +e.target.value; }}
          className="w-24 accent-white"
        />
      </div>

    </div>
  );
}