import { useNavigate, useNavigation } from "react-router-dom";
import { usePlaylist } from "./PlaylistContext";
import PlayButton from "../Presentation/ui/PlayButton";
import { formatDuration, getSongInfo } from "./Song";


export function AddToPlaylist() {
  const {playlist,setplaylist, RemoveFromPlaylist } = usePlaylist();
  const navigate = useNavigate();

  return (
    <div>       
      <p className="text-amber-50 text-3xl ml-4">Your Playlist</p> 

      <div className="grid grid-cols-6 items-center justify-center font-bold gap-4 mt-5 min-w-[700px] w-full">
      <p className="text-amber-50 ">#</p>
      <p className="text-amber-50 ">Title</p>
      <p className="text-amber-50">Album</p>
      <p className="text-amber-50">Date Added</p>
      <p className="text-amber-50">Duration</p>
      <p className="text-amber-50">X</p>
      </div>
       <hr className="w-full border-t-2 mt-2 border-gray-400"/>

       <div onClick={()=>navigate('/songplaying')}>
        {playlist.map((song)=>
        <div className="grid grid-cols-6 hover:bg-[#1F1F1F] items-center justify-center min-w-[700px]" key={song.id}>
          <p className="text-amber-50">#</p>
          <div className="flex flex-row gap-2">
          <img className="w-[42px] h-[42px] rounded object-cover" src={song.coverUrl} alt={song.title}/>  
           <div className="flex flex-col">    
            <p className="text-amber-50 text-[14px] truncate">{song.title}</p>
            <p className="text-amber-50 text-[14px] truncate">{song.artist}</p>
          </div>
          </div> 
           <p className="text-amber-50 text-[14px] ml-10">{song.album}</p>
           <p className="text-amber-50 text-[14px]">now</p>
           <p className="text-amber-50 text-[14px]">{song.duration}</p>
           <button className="className=text-amber-50 bg-green-400 w-52 h-[40px] rounded-2xl whitespace-nowrap text-amber-50" onClick={(e)=>RemoveFromPlaylist(song.id, e)}>Remove from Playlist</button>
        </div>)};
       </div>
    </div>
  );
};