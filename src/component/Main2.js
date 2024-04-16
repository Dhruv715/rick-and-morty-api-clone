import { useEffect, useState } from "react";
import "./Main.css";
import Video from "./Video";
import axios from "axios";

function Main2() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then(function (response) {
        // handle success
        setData(response.data.results);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);
  
  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      <main>
        {data.slice(0, 6).map((character, index) => (
          <Video
            key={index}
            url={character.image}
            name={character.name}
            location={character.location.name}
            status={character.status}
            seen={character.location.name}
          />
        ))}
      </main>
    </>
  );
}

export default Main2;
