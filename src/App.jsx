// Project files
import Header from "components/shared/Header";
import StatusLoading from "screens/StatusLoading";
import StatusLoaded from "screens/StatusLoaded";
import StatusError from "screens/StatusError";
import useFetch from "hooks/useFetch";

export default function App() {
  // Constants
  const HEROES_URL = " https://swapi.py4e.com/api/people/";
  const FILMS_URL = " https://swapi.py4e.com/api/films";

  // Fetching data
  const { data: heroes, status: heroStatus } = useFetch(HEROES_URL, "swHeroes");
  const { data: films, status: filmStatus } = useFetch(FILMS_URL, "swFilms");

  // Derived state
  const status =
    heroStatus === 2 || filmStatus === 2
      ? 2
      : heroStatus === 0 || filmStatus === 0
      ? 0
      : 1;

  return (
    <div className="App">
      <Header />
      <main className="main-content">
        {status === 0 && <StatusLoading />}
        {status === 1 && <StatusLoaded heroes={heroes} films={films} />}
        {status === 2 && <StatusError />}
      </main>
    </div>
  );
}
