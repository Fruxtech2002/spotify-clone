import { useNavigate } from "react-router-dom";
import fetchSong from "../../data/FetchSong";
import { usePlaylist } from "../../domain/PlaylistContext";
import { formatDuration, getSongInfo } from "../../domain/Song";
import PlayButton from "./PlayButton";
import AddedToPlaylist from "./AddedToPlaylist";

const SongLists = () => {
  const navigate = useNavigate();
  const { AddSongToPlaylist,addedtoplaylist,RemoveFromPlaylist,hoveredsong, sethoveredsong, query, setloading, setsongplayingid, songplayingid } = usePlaylist();
  console.log(songplayingid);
  
  function MouseHover(id) {
    sethoveredsong(id);
  }

  function MouseLeave() {
    sethoveredsong(null);
  }

  function Songplaying(songid) {
    setsongplayingid(songid)
    setTimeout(()=> {
    navigate('/songplaying');
  }, 300);
  };

  const songs = fetchSong();

  const filtered = songs.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
 <div className="flex flex-row min-h-[100] overflow-scroll scrollbar-none gap-4 p-4">
      {filtered.map((song, index) => (
       <div
  onClick={()=>Songplaying(song.id)}
  onMouseEnter={() => MouseHover(song.id)}
  onMouseLeave={() => MouseLeave()}
  key={index}
 className="relative grid grid-rows-[150px_24px_24px_24px_24px_24px] min-w-[160px] max-w-[160px] md:min-w-[185px] md:max-w-[185px] lg:min-w-[208px] lg:max-w-[208px] overflow-hidden p-2 bg-[#2A2A2A] hover:bg-[#1F1F1F] transition-all duration-300"
>
  <img className="w-full h-full object-cover rounded" src={song.coverUrl} alt={song.title} />
  <p className="text-amber-50 text-xs font-semibold">{song.title}</p>
  <p className="text-amber-50 text-xs ">{song.artist}</p>
  <p className="text-amber-50 text-xs">{formatDuration(song.duration)}</p>
  
  <p className="text-amber-50 text-xs truncate">{getSongInfo(song)}</p>
  <div className="absolute right-4 bottom-[140px]">
    <PlayButton song={song}/>
  </div>

  {songplayingid === song.id && addedtoplaylist ?  <button
    className="h-[30px] bg-red-500 hover:bg-green-600 text-white text-xs rounded-3xl"
    onClick={(e) => RemoveFromPlaylist(song.id, e)}
  >
    Remove From Playlist
  </button> : <button
    className="h-[30px] bg-[#3E3E3E] hover:bg-green-600 text-white text-xs rounded-3xl"
    onClick={(e) => AddSongToPlaylist(song,song.id, e)}
  >
    Add To Playlist
  </button> }
</div>
      ))}
    </div>
  );
};

export default SongLists;