import { Link, Outlet, useNavigate } from "react-router-dom";

const Applayout = () => {
const navigate = useNavigate();

  return (
    <div>
        <Link to="/">Home</Link>
        <input/>
        <Link to="/install">Install App</Link>
        <Link to="/signup">Sign up</Link>
        <button onClick={()=>navigate("/login")}>Log in</button>
      <Outlet/>
    </div>
  );
};

export default Applayout;