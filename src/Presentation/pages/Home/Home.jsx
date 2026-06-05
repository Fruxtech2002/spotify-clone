
import SongLists from "../../ui/SongLists";
import { AddToPlaylist } from "../../../domain/Playlist";
import { Link } from "react-router-dom";
import { usePlaylist } from "../../../domain/PlaylistContext";
import Loading from "../../ui/Loading";
import { useEffect, useState } from "react";
import Searchbar from "./Searchbar";
import AudioPlayer from "../../ui/AudioPlayer";

const Home = () => {

 const {playlist} = usePlaylist();
 const [loading, setloading] = useState(false);

 useEffect(()=>{
   setloading(true)
  setTimeout(()=>{
    setloading(false)
  }, 300);
 },[]);

  return (
    <div>   
      <p className="text-amber-50 text-2xl ml-3 font-medium md:text-3xl md:font-semibold">Home page</p>
      {playlist.length > 0 && <Link className="text-amber-50 hover:underline text-2xl ml-3 font-medium md:text-2xl md:font-semibold" to={'/playlist'}>Go to your Playlist</Link>}
       {loading === true ? <Loading/> : <SongLists/>}
       { <AudioPlayer/>}
    </div>
  );
};

export default Home;