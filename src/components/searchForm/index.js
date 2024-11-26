import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useDebounce } from '../../hooks/debounce';
import { setFilterData, setSortByAction } from '../../store/slices/movies';
import "./index.css"
export const SearchForm = () => {
  const [searchVal, setSearchVal] = useState("");
  const [isOpenDropdown, setIsOpenDropdown] = useState({})
  const debounceValue = useDebounce(searchVal, 500);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setFilterData({ searchVal }))
  }, [debounceValue]);

  const handleChange = (e) => {
    setSearchVal(e.target.value);
  }

  const openDropdown = () => {
    setIsOpenDropdown({ display: "block", marginTop: 40 })
  }

  const handleClick = (option) => {
    dispatch(setSortByAction({ action: option }))
    setIsOpenDropdown({})
  }

  return (
    <div className="searchPanel py-2 px-1 border-bottom">
      <div className='row'>
        <div className='d-flex col-xs-6'>

          <div className="btn-group">
            <button type="button"
              className="btn btn-bg dropdown-toggle"
              data-toggle="dropdown"
              onClick={openDropdown}
            >
              Sort by...
            </button>
            <div className="dropdown-menu" style={{ ...isOpenDropdown }}>
              <div onClick={() => handleClick("Episode")} className="dropdown-item pointer">Episode</div>
              <div onClick={() => handleClick("Year")} className="dropdown-item pointer">Year</div>
            </div>
          </div>
          <div className="input-group mx-1">
            <span className="input-group-text searchIcon pe-1" id="basic-addon1">
              <i className="bi bi-search"></i>
            </span>
            <input type="text"
              className="form-control inputElement ps-0"
              placeholder="Type to search" aria-label=""
              aria-describedby="basic-addon1"
              data-testid="searchElement"
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </div >
  );
};
