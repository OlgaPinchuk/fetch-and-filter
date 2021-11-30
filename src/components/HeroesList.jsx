// Project files
import StarHero from "components/StarHero";

export default function HeroesList({ data }) {
  return (
    <ul className="grid-cards">
      {data.map((hero) => (
        <StarHero key={hero.created} item={hero} />
      ))}
    </ul>
  );
}
