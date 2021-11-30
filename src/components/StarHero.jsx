export default function StarHero({ item }) {
  // Constants
  const { name, gender, birth_year, height, mass } = item;

  return (
    <li className="hero-card">
      <h2>{name}</h2>
      <p className="hero-info">
        <b>Gender:</b> {gender}
      </p>
      <p className="hero-info">
        <b>Born:</b> {birth_year}
      </p>
      <p className="hero-info">
        <b>Height in cm:</b> {height}
      </p>
      <p className="hero-info">
        <b>Weight in kg:</b> {mass}
      </p>
    </li>
  );
}
