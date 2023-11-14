import { useLocation, useNavigate } from "react-router-dom";
import queryString from 'query-string'

import { useForm } from "../../hooks/useForm"
import { HeroCard } from "../components/HeroCard"
import { getHeroesByName } from "../helpers/getHeroesByName";

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const {q = ''} = queryString.parse(location.search);
  const heroes = getHeroesByName(q);

  const showSearch = (q.length === 0);
  const showError = (q.length > 0) && heroes.length === 0;
  
  const {searchText, onInputChange} = useForm({
    searchText: q,
  });

  const onSearchSubmit = (event) => {
    event.preventDefault();
    navigate(`?q=${searchText}`)
  }

  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Searching...</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input type="text" name="searchText" id="" autoComplete="off" className="form-control" placeholder="Search a Hero" value={searchText} onChange={onInputChange}/>
            <button className="btn btn-outline-primary mt-2">Search</button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />
          <div className="alert alert-primary" style={{display: showSearch ? '' : 'none'}}>
            Search a Hero
          </div>
          <div className="alert alert-danger" style={{display: showError ? '' : 'none'}}>
            No Heroes founded with <b>{q}</b>
          </div>
          {
            heroes.map( hero => (
              <HeroCard key={hero.id} {...hero}/>
            ))
          }
        </div>
      </div>
    </>
  )
}
