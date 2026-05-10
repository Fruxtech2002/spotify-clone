import { useState } from "react";
import { PlaylistContext } from "./PlaylistContext.jsx";
import { toast } from "react-toastify";

export function PlaylistProvider({children}) {
  
const [playlist, setplaylist] = useState([]);

function AddSongToPlaylist(song) {
  setplaylist(prev=>[...prev, song])
  toast.success("This song has been added to your playlist successfully")
}
    return (
        <PlaylistContext.Provider value={{playlist, setplaylist, AddSongToPlaylist}}>
            {children}
        </PlaylistContext.Provider>
    )
}

