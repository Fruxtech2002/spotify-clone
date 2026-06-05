import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "../src/Presentation/pages/Login/Login";
import Signup from "../src/Presentation/pages/Signup/Signup";
import Download from "../src/Presentation/pages/Download/Download";
import Applayout from "./Presentation/ui/Applayout";
import Home from "./Presentation/pages/Home/Home";
import { AddToPlaylist } from "./domain/Playlist";
import { PlaylistProvider } from "./domain/PlaylistProvider";
import { ToastContainer } from "react-toastify";
import SongPlaying from "./Presentation/ui/SongPlaying";
import ErrorElement from "./Presentation/ui/ErrorElement";
import AudioContext from "./domain/AudioContext";


const App = () => {

  const route = createBrowserRouter([
    {
      element: <Applayout/>, 
      children: [
    {
      path: '/',
      element: <Home/>,
      loader: async ()=> null,
      errorElement: <ErrorElement/>
    },
    {
      path: '/login',
      element: <Login/>,
      loader: async ()=> null,
      errorElement: <ErrorElement/>
    },
    {
      path: '/signup',
      element: <Signup/>,
      loader: async ()=> null,
      errorElement: <ErrorElement/>
    },
    {
      path: '/playlist',
      element: <AddToPlaylist/>,
      loader: async ()=> null,
      errorElement: <ErrorElement/>
    },
    {
      path: '/songplaying',
      element: <SongPlaying/>,
      loader: async ()=> null,
      errorElement: <ErrorElement/>
    },
      ]   
    } 
  ]);

  return (
    
    <PlaylistProvider>
      <AudioContext>
      <RouterProvider router={route}/>
      <ToastContainer/>
      </AudioContext>
    </PlaylistProvider>
    
  );
};

export default App;