import { Link } from "react-router-dom";

function Movie({ loading, movies }) {
  return (
    <>
      {loading ? (
        <h1>Loading...⏰</h1>
      ) : (
        <>
          {movies.map((movie) => {
            const {
              id,
              title,
              medium_cover_image,
              genres,
              rating,
              description_full,
            } = movie;
            return (
              <div key={id}>
                <h3>{title}</h3>
                <Link to={"/movie"}>
                  <img src={medium_cover_image} alt={title} />
                </Link>
                <p>{genres.join(", ")}</p>
                <p>{rating}/10</p>
                <p>
                  {description_full.length > 100
                    ? description_full.substr(0, 100) + "..."
                    : description_full}
                </p>
              </div>
            );
          })}
        </>
      )}
    </>
  );
}

export default Movie;
