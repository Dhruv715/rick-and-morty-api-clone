import { useEffect, useState } from "react";
import "./Main.css";
import Video from "./Video";
import axios from "axios";

function Main() {
  // const [data,setData]  =useState();
  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then(function (response) {
        // handle success
        console.log(response.data.results);
        // console.log(response.data.results.name);
        // setData(response.data.results);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);
  let arr = [
    {
      url: "https://rickandmortyapi.com/api/character/avatar/93.jpeg",
      name: "Dioblo Vrebe",
      location: "Dead : Mythological Creatute ",
      position: "Earth(Replacement)",
      seen: "Edge of Tommegdle: Rick",
    },
    {
      url: "https://rickandmortyapi.com/api/character/avatar/101.jpeg",
      name: "E.coil",
      location: "Dead : Doesie",
      position: "Anatomy Park",
      seen: "Anatomy park",
    },
    {
      url: "https://rickandmortyapi.com/api/character/avatar/103.jpeg",
      name: "Dofus Rick",
      location: "Unknow:Human",
      position: "Earth(Replacement Direction) ",
      seen: "Close Rick Counter Rick Kids",
    },
    {
      url: "https://rickandmortyapi.com/api/character/avatar/247.jpeg",
      name: "Amy Pooppinsfun",
      location: "Alive-Poopliters",
      position: "unknowns",
      seen: "The RickChiuircan Montrydate",
    },
    {
      url: "https://rickandmortyapi.com/api/character/avatar/505.jpeg",
      name: "Dofus Rick",
      location: "Unknow:Human",
      position: "Earth(Replacement Direction) ",
      seen: "Close Rick Counter Rick Kids",
    },
    {
      url: "https://rickandmortyapi.com/api/character/avatar/544.jpeg",
      name: "Amy Pooppinsfun",
      location: "Alive-Poopliters",
      position: "unknowns",
      seen: "The RickChiuircan Montrydate",
    },
  ];
  return (
    <>
      <main>
        {arr.map((ele) => {
          return (
            <Video
              url={ele.url}
              name={ele.name}
              location={ele.location}
              pos={ele.position}
              seen={ele.seen}
            />
          );
        })}
      </main>
    </>
  );
}
export default Main;
