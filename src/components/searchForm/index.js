import React from 'react';
import "./index.css"
export const SearchForm = ({ }) => {

  return (
    <div className="searchPanel py-2 px-4 border-bottom">
      <div className='row'>
        <div className='col-5 col-md-1 col-sm-2 col-xs-6 text-end'>
          <div className="text-end">
            <button type="button" className="btn btn-bg">Sort by...</button>
          </div>
        </div>
        <div className='col-7 col-md-11 col-sm-10 col-xs-6 px-0'>
          <div className="input-group">
            <span className="input-group-text searchIcon pe-0" id="basic-addon1">@</span>
            <input type="text"
              className="form-control inputElement ps-0"
              placeholder="Type to search" aria-label=""
              aria-describedby="basic-addon1"
              data-testid="searchElement"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
