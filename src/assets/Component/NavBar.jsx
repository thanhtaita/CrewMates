import { Outlet, Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div>
      <nav className="sidenav">
        <Link to="/home" className="sidenav-title">
          Home
        </Link>
        <Link to="/new" className="sidenav-new-mate">
          Create a CrewMate
        </Link>
        <Link to="/gallery" className="sidenav-gallery">
          Crewmate Gallery
        </Link>
        <img
          className="sidenav-img"
          src="https://shimmering-stardust-c75334.netlify.app/assets/peeking.7c0ab599.png"
          alt="a moving gif"
        />
      </nav>
      <Outlet />
    </div>
  );
};

export default NavBar;
