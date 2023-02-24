import React from "react";
import useEpisodes from "../../hooks/useEpisodes";
import "./episodes.css";
import { Link } from "react-router-dom";

const Episodes = () => {
  const [name, setName] = React.useState("");
  const [page, setPage] = React.useState(1);
  const [pagination, setPagination] = React.useState([]);

  const { error, data, loading } = useEpisodes(name, page);

  React.useEffect(() => {
    if (data) {
      Pagination(page);
    }
  }, [data]);

  const Pagination = (page) => {
    setPagination([2]);
  };

  return (
    <div className="outer-wrapper">
      <div className="filter-bar">
        <div className="filter-item">
          <label className="labels">Episode Name</label>
          <input
            className="inputField"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="eg:Pilot"
          />
        </div>
      </div>
      <div className="episodes-container">
        <div className={data?.episodes.info.pages ? "hidden" : "showup"}>
          Nothing to show :(
        </div>
        {data?.episodes.results.map((item, index) => {
          return (
            <div
              className="episodes-element"
              style={{ color: "white", textAlign: "center", padding: "1rem" }}
              key={index}
            >
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to={`episode/${item.id}`}
              >
                <div style={{ fontSize: "1.5rem" }}>{item.name}</div>
              </Link>
              <br></br>
              <div style={{ color: "#c7c7c7", fontWeight: "bold" }}>
                {item.air_date}
              </div>
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
          {pagination.map((item, index) => {
            return (
              <div
                className={item == page ? "coloredNum" : "pageHover"}
                onClick={() => setPage(item)}
                key={index}
              >
                {item}
              </div>
            );
          })}
          <div
            className={
              page == data?.episodes.info.pages ? "coloredNum" : "pageHover"
            }
            onClick={() => setPage(data?.episodes.info.pages)}
          >
            {data?.episodes.info.pages}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Episodes;
