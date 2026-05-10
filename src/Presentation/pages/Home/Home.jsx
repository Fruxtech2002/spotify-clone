
import SongLists from "../../ui/SongLists";
import { AddToPlaylist } from "../../../domain/Playlist";
import { Link } from "react-router-dom";
import { usePlaylist } from "../../../domain/PlaylistContext";

const Home = () => {

 const {playlist} = usePlaylist();
 console.log(`playlist ${playlist}`)

  return (
    <div>
      Home page
      {playlist.length > 0 && <Link to={'/playlist'}>Go to your Playlist</Link>}
      <SongLists/>
    </div>
  );
};


export default Home;