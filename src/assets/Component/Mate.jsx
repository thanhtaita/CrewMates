import { Link } from "react-router-dom";

const Mate = ({ attribute, id }) => {
  return (
    <div className="mate">
      <img
        className="mate-img"
        src="https://shimmering-stardust-c75334.netlify.app/assets/crewmate.ce385016.png"
        alt="crew shadow"
      />
      <span>
        Name of Crewmate:{" "}
        <span className="attribute-input">{attribute.name}</span>
      </span>
      <span>
        Speed of Crewmate:{" "}
        <span className="attribute-input">{attribute.speed} mph</span>
      </span>
      <span>
        Name of Crewmate:{" "}
        <span className="attribute-input">{attribute.color}</span>
      </span>
      <Link to={`/${id}`} className="edit-mate">
        Edit Crewmate
      </Link>
    </div>
  );
};
export default Mate;
