import { Link, Navigate } from "react-router-dom";
import { usePlaylist } from "../../../domain/PlaylistContext";
import NavigationButton from "../../ui/NavigationButton";

const Searchbar = () => {

  const {setquery, query} = usePlaylist();

  return (
    <div className="grid grid-cols-[auto_1fr_auto] bg-[#000000] h-16 min-w-[760px]">

      <div className="flex gap-2 items-center">
       <Link className="shrink-0" to="/"><img src="/coverUrl/Spotify Butons/Spotify_Full_Logo_RGB_White.png" alt="" className="h-10 bg-[#000000]"/></Link>
       <div className="shrink-0">
       <NavigationButton/>
       </div>
       </div>

      <div className="flex justify-center items-center gap-2 min-w-0">
       <button className="justify-items-center h-12 bg-[#1F1F1F] w-12 rounded-full shrink-0"><img src="public/coverUrl/Spotify Butons/white_home_button-removebg-preview.png" alt="" className="h-7"/></button>
        <input
          className="rounded-full h-12 bg-[#1F1F1F] text-[#A0A0A0] w-52 sm:w-64 lg:w-[450px] pl-2"
          type="text"
          placeholder="What do you want to play?"
          value={query}
          onChange={(e)=>setquery(e.target.value)}
        />
        </div>

        <div className="flex mr-6 gap-4 items-center shrink-0">
        <Link className="text-[#8B8B8B] font-medium whitespace-nowrap" to="/install">Install App</Link>
        <button className="text-amber-50 bg-green-400 w-[70px] h-[40px] rounded-2xl whitespace-nowrap" onClick={()=>Navigate("/login")}>Log in</button>
        </div>

    </div>
  );
};

export default Searchbar;