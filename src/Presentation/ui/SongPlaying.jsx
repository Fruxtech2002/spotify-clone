import { useNavigate, useNavigation } from "react-router-dom";
import { usePlaylist } from "../../domain/PlaylistContext";
import Loading from "./Loading";
import fetchSongs from "../../data/FetchSong";
import { formatDuration, getSongInfo } from "../../domain/Song";

const SongPlaying = () => {
  const navigate = useNavigate();
  const {songplayingid} = usePlaylist();
  const songs = fetchSongs();

  return (
    <div>
      <button onClick={()=>navigate(-1)} className="text-amber-50 bg-green-400">
        <img src="public/coverUrl/Spotify Butons/spot_back_button-removebg-preview.png" alt=""/>
        </button>
    <div>{songs.map(song=><div key={song.id}>
     {songplayingid === song.id && <div>
         <img className="min-w-[700px] min-h-[] w-auto h-auto object-cover rounded" src={song.coverUrl} alt={song.title} />
          <p className="text-amber-50 text-xs font-semibold">{song.title}</p>
          <p className="text-amber-50 text-xs ">{song.artist}</p>
          <p className="text-amber-50 text-xs">{formatDuration(song.duration)}</p>
          <p className="text-amber-50 text-xs truncate">{getSongInfo(song)}</p>
      </div>}
    </div>)}
    </div>
    </div>
  );
};

export default SongPlaying;