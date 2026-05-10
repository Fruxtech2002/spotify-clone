import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "../src/Presentation/pages/Login/Login";
import Signup from "../src/Presentation/pages/Signup/Signup";
import Download from "../src/Presentation/pages/Download/Download";
import Applayout from "./Presentation/ui/Applayout";
import Home from "./Presentation/pages/Home/Home";
import { AddToPlaylist } from "./domain/Playlist";
import { PlaylistProvider } from "./domain/PlaylistProvider";
import { ToastContainer } from "react-toastify";


const App = () => {

  const route = createBrowserRouter([
    {
      element: <Applayout/>, 
      children: [
    {
      path: '/',
      element: <Home/>
    },
    {
      path: '/login',
      element: <Login/>
    },
    {
      path: '/signup',
      element: <Signup/>
    },
    {
      path: '/playlist',
      element: <AddToPlaylist/>
    },
    {
      path: '/signup',
      element: <Signup/>
    },
      ]   
    } 
  ])

  return (
    <PlaylistProvider>
      <RouterProvider router={route}/>
      <ToastContainer/>
    </PlaylistProvider>
  );
};

export default App;