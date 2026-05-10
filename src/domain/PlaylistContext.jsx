import { createContext, useContext } from "react";

export const PlaylistContext = createContext();

export function usePlaylist() {
    return useContext(PlaylistContext)
};