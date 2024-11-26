import React, { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { init, setError, setMovies } from "../../store/slices/movies";
import "./index.css"
import { setMovie } from "../../store/slices/movie";
import axios from "axios";

export const MovieList = memo(() => {
  const movies = useSelector((state) => state.movies)
  const dispatch = useDispatch();
  useEffect(() => {
    const getData = async () => {
      try {
        dispatch(init({ isLoading: true }))
        const result = await axios.get(`/api/films/?format=json`);
        dispatch(setMovies({ data: result?.data?.results }))
      } catch (error) {
        dispatch(setError({ error }))
      }
    }

    getData()

  }, [dispatch]);

  const selectedMovie = (id) => dispatch(setMovie({ data: movies?.data?.find(d => d.episode_id === id) }))

  if (movies?.isLoading) {
    return (<>
      <div className="spinner-border" role="status">
      </div>
      <div>
        Loading...
      </div>
    </>)
  }

  if (!movies) {
    return <div data-testid="no-data">No data found.</div>
  }

  return (
    <ul className="list-group moveis">
      {movies?.error && <h4 data-testid="error" className="mt-3 alert alert-danger">Something happened wrong!</h4>}
      {movies?.data && movies?.data?.map((mv) => (
        <li key={mv.episode_id}
          className="list-group-item d-flex justify-content-between align-items-center"
          onClick={() => {
            selectedMovie(mv.episode_id)
          }}
          data-testid="movie"
        >
          <div className="pointer">
            <span className="fw-lighter me-4">
              EPISODE {mv.episode_id}
            </span>
            <span className="fw-light">{mv.title}</span></div>
          {/* adding for next development */}
          <div className="fw-lighter">
            <span>
              <span className="bi bi-star"></span>
              <span className="bi bi-star"></span>
              <span className="bi bi-star"></span>
              <span className="bi bi-star"></span>
              <span className="bi bi-star"></span>
            </span>
            <span className="ps-2">{mv.release_date}</span>
          </div>
        </li>))}

    </ul>
  )
})