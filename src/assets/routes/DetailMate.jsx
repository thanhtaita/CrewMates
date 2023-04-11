import { useEffect, useState } from "react";
import { supabase } from "../../client";
import { useParams } from "react-router-dom";

const DetailMate = () => {
  const { id } = useParams();
  const [mate, setMate] = useState({
    name: "",
    speed: "",
    color: "",
  });

  const [tempMate, setTempMate] = useState({
    name: "",
    speed: "",
    color: "",
  });

  useEffect(() => {
    const fetchMate = async () => {
      const { data } = await supabase
        .from("CrewMates")
        .select("*")
        .eq("id", id);

      // set state of posts

      setMate(data[0]);
      setTempMate(data[0]);
    };
    // console.log(mate);
    fetchMate();
  }, []);

  const updateAttribute = (event) => {
    const { name, value } = event.target;
    console.log("Name: ", name, " value: ", value);
    setTempMate((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  // UPDATE post
  const updateMate = async (event) => {
    event.preventDefault();
    if (tempMate.name != "" && tempMate.speed != "" && tempMate.color != "") {
      console.log({ tempMate });
      await supabase
        .from("CrewMates")
        .update({
          name: tempMate.name,
          speed: tempMate.speed,
          color: tempMate.color,
        })
        .eq("id", id);
      window.location = `/${id}`;
    }
  };

  const deleteMate = async (event) => {
    event.preventDefault();

    await supabase.from("CrewMates").delete().eq("id", id);

    window.location = "/home";
  };

  return (
    <div>
      <h1>Update Your Crewmate</h1>
      <img
        className="detail-mate-img"
        src="	https://shimmering-stardust-c75334.netlify.app/assets/crewmates.43d07b24.png"
        alt="crewmates image"
      />
      <h3>Current Crewmate Info</h3>
      <span className="detail-mate-info">
        Name: {mate.name}, Speed: {mate.speed}, Color: {mate.color}
      </span>
      <div className="create-attributes">
        <div className="attribute-name">
          <h3 className="attribute-title">Name:</h3>
          <input
            type="text"
            placeholder="Enter crewmate's name"
            className="attribute-name-input"
            name="name"
            onChange={updateAttribute}
          />
        </div>
        <div className="attribute-speed">
          <h3 className="attribute-title">Speed:</h3>
          <input
            type="text"
            placeholder="Enter crewmate's name"
            className="attribute-speed-input"
            name="speed"
            onChange={updateAttribute}
          />
        </div>
        <div className="attribute-color">
          <h3 className="attribute-title">Color:</h3>
          <ul className="colors-choice-list">
            <li className="colors-choice">
              <input
                type="radio"
                id="Red"
                name="color"
                value="Red"
                onChange={updateAttribute}
              />
              Red
            </li>
            <li className="colors-choice">
              <input
                type="radio"
                id="Green"
                name="color"
                value="Green"
                onChange={updateAttribute}
              />
              Green
            </li>
            <li className="colors">
              <input
                type="radio"
                id="Blue"
                name="color"
                value="Blue"
                onChange={updateAttribute}
              />
              Blue
            </li>
            <li className="colors-choice">
              <input
                type="radio"
                id="Purple"
                name="color"
                value="Purple"
                onChange={updateAttribute}
              />
              Purple
            </li>
            <li className="colors-choice">
              <input
                type="radio"
                id="Yellow"
                name="color"
                value="Yellow"
                onChange={updateAttribute}
              />
              Yellow
            </li>
            <li className="colors-choice">
              <input
                type="radio"
                id="Orange"
                name="color"
                value="Orange"
                onChange={updateAttribute}
              />
              Orange
            </li>
            <li className="colors-choice">
              <input
                type="radio"
                id="Pink"
                name="color"
                value="Pink"
                onChange={updateAttribute}
              />
              Pink
            </li>
            <li className="colors-choice">
              <input
                type="radio"
                id="Rainbow"
                name="color"
                value="Rainbow"
                onChange={updateAttribute}
              />
              Rainbow
            </li>
          </ul>
        </div>
      </div>
      <button className="create-btn" onClick={updateMate}>
        Update Mate
      </button>
      <button className="create-btn" onClick={deleteMate}>
        Delete Mate
      </button>
    </div>
  );
};

export default DetailMate;
