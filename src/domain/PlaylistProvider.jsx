import { useState } from "react";
import { PlaylistContext } from "./PlaylistContext.jsx";
import { toast } from "react-toastify";

export function PlaylistProvider({children}) {
  
const [playlist, setplaylist] = useState([]);
const [query, setquery] = useState("");
const [hoveredsong, sethoveredsong] = useState("");
const [songplayingid, setsongplayingid] = useState(0);
const [addedtoplaylist, setaddedtoplaylist] = useState(false);

function AddSongToPlaylist(song,id,e) {
  console.log(`iddd ${id}`)
  e.stopPropagation();
  setsongplayingid(id)
  setaddedtoplaylist(true)
  setplaylist(prev=>[...prev, song]);
  toast.success("This song has been added to your playlist successfully")
};

function RemoveFromPlaylist(id,e) {
   e.stopPropagation();
   setaddedtoplaylist(false)
  setplaylist(prev=> prev.filter(item => item.id !== id))
  toast.success("Song removed succesfully")
};

    return (
        <PlaylistContext.Provider value={{playlist, setplaylist, AddSongToPlaylist, RemoveFromPlaylist,addedtoplaylist,query, setquery, sethoveredsong, hoveredsong, setsongplayingid, songplayingid}}>
            {children}
        </PlaylistContext.Provider>
    )
};

