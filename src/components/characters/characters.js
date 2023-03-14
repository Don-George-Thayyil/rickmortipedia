import React from "react";
import useCharacters from "../../hooks/useCharacters";
import "./characters.css";
import { Link } from "react-router-dom";

const Characters = () => {
  const [name, setName] = React.useState("");
  const [species, setSpecies] = React.useState("");
  const [page, setPage] = React.useState(1);
  const [gender, setGender] = React.useState("");
  const [status, setStatus] = React.useState("");
  const [pages, setPages] = React.useState(0);
  const [pagination, setPagination] = React.useState([]);

  const { error, data, loading } = useCharacters(
    name,
    page,
    gender,
    status,
    species
  );

  React.useEffect(() => {
    if (data) {
      Pagination(page);
      setPages(data.characters.info.pages);
      console.log(data.characters.info.pages)
    }
  }, [data]);

  const Pagination = (page) => {
    let prevTwice = 0
    let prevOnce = 0
    let forOnce = 0
    let forTwice = 0
    let current = page;
    prevTwice = page - 2 
    prevOnce = page - 1 
    forTwice = page + 2 
    forOnce = page + 1 

    if (prevTwice)

      setPagination([prevTwice, prevOnce, current, forOnce, forTwice])

    // if (page < 4) setPagination([2, 3, 4, 5]);
    // else if (page > 39) setPagination([38, 39, 40, 41]);
    // else {
    //   setPagination([page - 2, page - 1, page, page + 1, page + 2]);
    // }
  };

  return (
    <div className="outer-wrapper">
      <div className="filter-bar">
        <div className="filter-item">
          <label className="labels">Name</label>
          <input
            className="inputField"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="eg:Summer Smith"
          />
        </div>
        <div className="filter-item">
          <label className="labels">Species</label>
          <input
            className="inputField"
            value={species}
            onChange={(e) => {
              setSpecies(e.target.value);
            }}
            placeholder="eg:Humanoid"
          />
        </div>
        <div className="filter-item">
          <label>Gender</label>
          <select
            value={gender} // ...force the select's value to match the state variable...
            onChange={(e) => setGender(e.target.value)} // ... and update the state variable on any change!
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="unknown">Unknown</option>
            <option value="">None</option>
          </select>
        </div>
        <div className="filter-item">
          <label>Status</label>
          <select
            value={status} // ...force the select's value to match the state variable...
            onChange={(e) => setStatus(e.target.value)} // ... and update the state variable on any change!
          >
            <option value="alive">Alive</option>
            <option value="dead">Dead</option>
            <option value="unknown">Unknown</option>
            <option value="">None</option>
          </select>
        </div>
      </div>
      <div className="characters-container">
        <div className={data?.characters.info.pages ? "hidden" : "showup"}>
          Nothing to show :(
        </div>
        {data?.characters.results.map((item, index) => {
          return (
            <div className="character-element" key={index}>
              <Link style={{ textDecoration: "none" }} to={`character/${item.id}`}>
                <img className="image" src={item.image} />
                <div className="name">{item.name}</div>
              </Link>
            </div>
          );
        })}
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="pagination">
          <div
            className={page == 1 ? "coloredNum" : "pageHover"}
            onClick={() => setPage(1)}
          >
            1
          </div>
          <div className={page > 4 ? null : "hidden"}>...</div>
          {pagination.map((item, index) => {
            return (
              (item>1 && item<pages) && <div
                className={item == page ? "coloredNum" : "pageHover"}
                onClick={() => setPage(item)}
                key={index}
              >
                {item}
              </div>
            );
          })}
          <div className={page > pages-4 ? "hidden" : null}>...</div>
          <div
            className={page == pages ? "coloredNum" : "pageHover"}
            onClick={() => setPage(pages)}
          >
            {data?.characters.info.pages}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Characters;
