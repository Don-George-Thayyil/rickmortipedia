import React from "react";
import { useParams } from "react-router-dom";
import useEpisode from "../../hooks/useEpisode";
import "./episode.css";
import { Link } from "react-router-dom";

const Episode = () => {
  const { id } = useParams();

  const { error, data, loading } = useEpisode(id);

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
        <div className="characters-container episodes-div">
          <div>
            <span className="l-name">Name :</span>
            <h1 className="character-name">{data?.episode.name}</h1>
          </div>
          <div>
            <span className="l-name">Aired Date :</span>
            <h2 className="aired">{data?.episode.air_date}</h2>
          </div>
          <div >
            <span className="l-name">Characters :</span>
            <div className="char-div">
              {data?.episode.characters.map((item, index) => {
                return (
                  <Link
                    to={`/character/${item.id}`}
                    style={{
                      textDecoration: "none",
                      color: "white",
                      fontSize: "1.3rem",
                    }}
                  >
                    <h3 key={index}>{item.name}</h3>
                  </Link>
                );
              })}
            </div>
            ;
          </div>
        </div>
      </div>
    </div>
  );
};

export default Episode;
