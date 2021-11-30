// NPM packages
import { useState } from "react";

// Project files
import Filter from "components/Filter";
import HeroesList from "components/HeroesList";

export default function StatusLoaded({ heroes, films }) {
  // Local state
  const [options, setOptions] = useState(() => {
    return films.map((item) => ({
      id: item.episode_id,
      label: item.title,
      value: item.url,
      selected: false,
    }));
  });

  // Methods
  function handleFilter(id) {
    const newIndex = options.findIndex((item) => item.id === id);
    if (newIndex !== -1) {
      const newOptions = [...options];
      newOptions[newIndex] = {
        ...newOptions[newIndex],
        selected: !newOptions[newIndex].selected,
      };
      setOptions(newOptions);
    }
  }

  function findHeroesInFilms(queryItems) {
    const matchingPeople = [];

    queryItems.forEach((url) => {
      heroes.forEach((hero) => {
        const isMatching = hero.url === url;
        if (isMatching) {
          matchingPeople.push(hero);
        }
      });
    });
    return matchingPeople;
  }

  // Derived state
  const query = options
    .filter((option) => option.selected)
    .map((item) => item.id);

  let matchingHeroes = [];
  query.forEach((item) => {
    const characters = films.find((el) => el.episode_id === item).characters;
    matchingHeroes = [...matchingHeroes, ...characters];
  });
  const foundCharacters = [...new Set(matchingHeroes)];

  const heroesToShow = query.length
    ? findHeroesInFilms(foundCharacters)
    : heroes;

  return (
    <>
      <Filter options={options} onSelect={handleFilter} />
      <div className="heroes">
        {query.length ? (
          <h2> We found {heroesToShow.length} Star Heroes in these films</h2>
        ) : null}
        <HeroesList data={heroesToShow} />
      </div>
    </>
  );
}
