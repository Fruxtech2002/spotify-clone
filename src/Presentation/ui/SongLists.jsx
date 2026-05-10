
import fetchSong from "../../data/FetchSong";
import { usePlaylist } from "../../domain/PlaylistContext";


import { formatDuration, getSongInfo } from "../../domain/Song";

const SongLists = () => {
  const {AddSongToPlaylist, playlist} = usePlaylist();

  const songs = fetchSong();
  return (
    <div>
      {songs.map((song, index) => (
        <div key={index}>
          <img
            src={song.coverUrl}
            alt={song.title}
            style={{  
              height: "160px",
              objectFit: "cover",
              borderRadius: "4px",
              display: "block",
              marginBottom: "12px",
              boxShadow: "0 8px 24px rgba(0,0,0,0.5)",
            }}
          />
          <p>
            {song.title}
          </p>
          <p>
            {song.artist}
          </p>
          <p>
            {formatDuration(song.duration)}
          </p>
          <p>
            {getSongInfo(song)}
          </p>
          <button onClick={()=>AddSongToPlaylist(song)}>Add To Playlist</button>
          <audio controls>
            <source src={song.song} type="audio/mpeg"/>
          </audio>
        </div> 
      ))}
    </div>
  );
};

export default SongLists;