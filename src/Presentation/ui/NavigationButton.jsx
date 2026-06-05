import { useNavigate } from "react-router-dom";

const NavigationButton = () => {

const navigate = useNavigate();
  return (
    <div className="flex gap-2" >
      <button onClick={()=>navigate(-1)} className="text-amber-50 bg-transparent w-5 rounded-2xl">
        <img src="/coverUrl/Spotify Butons/spot_backward-removebg-preview.png" alt=""/>
      </button>

      <button onClick={()=>navigate(+1)} className="text-amber-50 bg-transparent w-5 rounded-2xl">
        <img src="public/coverUrl/Spotify Butons/spot_forwardddd-removebg-preview.png" alt="forward"/>
      </button>
    </div>
  );
};

export default NavigationButton;