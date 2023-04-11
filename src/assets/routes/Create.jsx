import { useState } from "react";
import { supabase } from "../../client";

const Create = () => {
  const [mate, setMate] = useState({ name: "", speed: "", color: "" });

  const updateAttribute = (event) => {
    const { name, value } = event.target;
    console.log("Name: ", name, " value: ", value);
    setMate((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const createMate = async (event) => {
    event.preventDefault();
    console.log(mate.name, mate.speed, mate.color);
    if (mate.name != "" && mate.speed != "" && mate.color != "") {
      await supabase
        .from("CrewMates")
        .insert({
          name: mate.name,
          speed: mate.speed,
          color: mate.color,
        })
        .select();

      const temp = { name: "", speed: "", color: "" };
      setMate(temp);
    }
  };

  return (
    <div>
      <h1 className="create-title">Create a New Crewmate</h1>
      <img
        className="create-title-img"
        src="	https://shimmering-stardust-c75334.netlify.app/assets/crewmates.43d07b24.png"
        alt="crewmates image"
      />
      <div className="create-attributes">
        <div className="attribute-name">
          <h3 className="attribute-title">Name:</h3>
          <input
            type="text"
            value={mate.name}
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
            value={mate.speed}
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
                checked={mate.color !== ""}
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
                checked={mate.color !== ""}
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
                checked={mate.color !== ""}
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
                checked={mate.color !== ""}
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
                checked={mate.color !== ""}
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
                checked={mate.color !== ""}
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
                checked={mate.color !== ""}
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
                checked={mate.color !== ""}
              />
              Rainbow
            </li>
          </ul>
        </div>
      </div>
      <button className="create-btn" onClick={createMate}>
        Create Crewmate
      </button>
    </div>
  );
};

export default Create;
