import { createContext, useContext } from "react";

export const Audiocontext = createContext()

const useAudioProvider = () => {

  return (useContext(Audiocontext));
};

export default useAudioProvider;