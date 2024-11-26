import React from "react";
import { useSelector } from "react-redux";
import "./index.css"
export const MoviesCard = () => {
  const movieData = useSelector((state) => state?.movie?.data);
  return (
    <div className="mt-3">
      {movieData ? <div>
        <h5>
          {movieData?.title}
        </h5>
        <div className="discription">
          {movieData?.opening_crawl}
        </div>
        <div className="discription mt-3 fw-light">
          Directed By:  {movieData?.director}
        </div>
      </div> : <div className="text-center">
        No movie selected.
      </div>}

    </div >
  )
}