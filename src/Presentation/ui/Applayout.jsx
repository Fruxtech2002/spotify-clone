import { Link, Outlet, useNavigate, useNavigation } from "react-router-dom";
import fetchSongs from "../../data/FetchSong";
import { usePlaylist } from "../../domain/PlaylistContext";
import Searchbar from "../pages/Home/Searchbar";
import Loading from "./Loading";


const Applayout = () => {

  const {state} = useNavigation();
  
  return (
    <div>
      <Searchbar/>
      {state === "loading" ? <Loading/> : <Outlet/> }
    </div>
  );
};

export default Applayout;