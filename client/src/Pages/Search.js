import React, { useState } from "react";
import axios from "axios";
import M from "materialize-css/dist/js/materialize.min.js";
import { Link } from "react-router-dom";

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);

  const onSearchSubmit = async e => {
    e.preventDefault();

    if (searchText.trim()) {
      setLoading(true);

      let res = await axios.post("/questions/search", { search: searchText });

      
      if (res.data.error) {
        M.toast({ html: "no such result found", classes: "rounded red" });
        setLoading(false);
      }

      if (res.data.msg) {
        setSearchResult(res.data.questions);
        setLoading(false);
      }
    }
  };

  return (
    <div className="container">
      <nav>
        <div className="nav-wrapper blue accent-2 p4">
          <form onSubmit={onSearchSubmit}>
            <div className="input-field">
              <input
                id="search"
                type="search"
                required
                value={searchText}
                onChange={e => setSearchText(e.target.value)}
              />
              <label className="label-icon" htmlFor="search">
                <i className="fas fa-search"></i>
              </label>
              <i className="material-icons">X</i>
            </div>
          </form>

          {searchResult.length
            ? searchResult.map(singleResult => {
                return (
                  <div className="row" key={singleResult._id}>
                    <div className="col s12">
                      <div className="card black-text">
                        <div className="card-content">
                          <h5>{singleResult.question}</h5>
                          <br />
                          <hr className="blue-text" />
                          <em>
                           asked by : <b>{singleResult._author.name}</b>
                          </em>
                        </div>
                        <div className="card-action">
                          <Link
                            to={`/view/questions/${singleResult._id}`}
                            className="blue-text"
                          >
                            View
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            : null}

          {loading ? (
            <div className="container center-align">
              <div className="preloader-wrapper big active">
                <div className="spinner-layer spinner-blue-only">
                  <div className="circle-clipper left">
                    <div className="circle"></div>
                  </div>
                  <div className="gap-patch">
                    <div className="circle"></div>
                  </div>
                  <div className="circle-clipper right">
                    <div className="circle"></div>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </nav>
    </div>
  );
};

export default Search;
