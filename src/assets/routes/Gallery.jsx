import { supabase } from "../../client";
import { useState, useEffect } from "react";
import Mate from "../Component/Mate";
const Gallery = () => {
  const [mates, setMates] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await supabase
        .from("CrewMates")
        .select()
        .order("id", { ascending: false });

      // set state of posts
      setMates(data);
    };
    fetchPosts();
  });

  return (
    <div className="ReadMates">
      {mates && mates.length > 0 ? (
        mates.map((mate, index) => (
          <Mate
            attribute={{
              name: mate.name,
              speed: mate.speed,
              color: mate.color,
            }}
            id={mate.id}
          />
        ))
      ) : (
        <h2>{"No Challenges Yet 😞"}</h2>
      )}
    </div>
  );
};
export default Gallery;
