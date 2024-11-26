import axios from 'axios';
import './App.css';
import { Layout, SearchForm, MovieList, MoviesCard } from './components';
import { app } from './utils/appConstant'
axios.defaults.baseURL = app.BASE_URL;

function App () {
  return (
    <div className="container-fluid">
      <header className="App-header">
        Front-end assignment Movies @ Etraveli Group
      </header>
      <Layout>
        <div className="py-1">
          <SearchForm />
        </div>
        <div className="col-sm-6 border-end vh-100">
          <MovieList />
        </div>
        <div className="col-sm-6">
          <MoviesCard />
        </div>
      </Layout>
    </div>
  );
}

export default App;
