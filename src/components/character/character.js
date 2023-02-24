import React from "react";
import { useParams } from "react-router-dom";
import useCharacter from "../../hooks/useCharacter";
import "./character.css";
import { Link } from "react-router-dom";

const Character = () => {
  const { id } = useParams();

  const { error, data, loading } = useCharacter(id);

  return (
    <div>
      <div className="navbar">
        <div className="goback">
          <Link style={{ color: "white", textDecoration: "none" }} to={"/"}>
            Home
          </Link>
        </div>
      </div>
      <div className="container">
        <div className="character-container" style={{borderRadius:"1rem"}}>
          <img className="character-image" src={data?.character.image}></img>
          <div className="details">
            <div className="sub-div">
              <div className="name-div">
                <span className="label-name">Name :</span>
                <h2 className="character-name">{data?.character.name}</h2>
              </div>
              <div className="name-div">
                <span className="label-name">Gender :</span>
                <h2 className="character-name">{data?.character.gender}</h2>
              </div>
              <div className="name-div">
                <span className="label-name">Species :</span>
                <h2 className="character-name">{data?.character.species}</h2>
              </div>
              <div className="name-div">
                <span className="label-name">Origin :</span>
                <h2 className="character-name">
                  {data?.character.origin.name}
                </h2>
              </div>
              <div className="name-div">
                <span className="label-name">Locations :</span>
                <h2 className="character-name">
                  {data?.character.location.name}
                </h2>
              </div>
            </div>
            <span className="label-name">Episodes :</span>
            <div className="episode-div">
              {data?.character.episode.map((item, index) => {
                return (
                  <Link
                    style={{ textDecoration: "none", color: "white" }}
                    to={`/episode/${item.id}`}
                  >
                    <h3 key={index}>{item.name}</h3>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Character;
