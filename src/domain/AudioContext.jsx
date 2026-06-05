import { useEffect, useRef, useState } from "react";
import fetchSongs from "../data/FetchSong";
import { usePlaylist } from "./PlaylistContext";
import { Audiocontext } from "./AudioProvider";

const AudioContext = ({children}) => {

  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState("0:00");
  const [duration, setDuration] = useState("0:00");
  const [volume, setVolume] = useState(1);

  const songs = fetchSongs();
  const { addedtoplaylist, songplayingid, setsongplayingid } = usePlaylist();

  const song = songs.find((s) => s.id === songplayingid);

  const fmt = (s) => `${Math.floor(s / 60)}:${Math.floor(s % 60).toString().padStart(2, "0")}`;

  useEffect(() => {
    if (audioRef.current && song) {
      audioRef.current.load();
      audioRef.current.play();
      setPlaying(true);
    }
  }, [songplayingid]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (audioRef.current.paused) { audioRef.current.play(); setPlaying(true); }
    else { audioRef.current.pause(); setPlaying(false); }
  };

  const onTimeUpdate = () => {
    const a = audioRef.current;
    if (!a) return;
    setProgress((a.currentTime / a.duration) * 100 || 0);
    setCurrentTime(fmt(a.currentTime));
  };

  const seek = (e) => {
    if (!audioRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    audioRef.current.currentTime = ((e.clientX - rect.left) / rect.width) * audioRef.current.duration;
  };

  const prevSong = () => {
    const index = songs.findIndex((s) => s.id === songplayingid);
    setsongplayingid(songs[(index - 1 + songs.length) % songs.length].id);
  };

  const nextSong = () => {
    const index = songs.findIndex((s) => s.id === songplayingid);
    setsongplayingid(songs[(index + 1) % songs.length].id);
  };

  return (
    <Audiocontext.Provider value={{nextSong, prevSong, seek, onTimeUpdate, togglePlay, playing, progress, currentTime, duration, setDuration, volume, setVolume, fmt, audioRef}}>
      <audio
        ref={audioRef}
        src={song?.song ?? ""}
        onTimeUpdate={onTimeUpdate}
        onLoadedMetadata={() => setDuration(fmt(audioRef.current?.duration ?? 0))}
      />
      {children}
    </Audiocontext.Provider>
  );
};

export default AudioContext;