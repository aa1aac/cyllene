import React, { useState } from "react";
import axios from "axios";
import M from "materialize-css/dist/js/materialize.min.js";

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);

  const onSearchSubmit = async e => {
    e.preventDefault();

    if (searchText.trim()) {
      setLoading(true);

      let res = await axios.post("/questions/search", { search: searchText });

      console.log(res.data);
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

          {searchResult.length ? (
            <div className="black-text">has result</div>
          ) : null}

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
