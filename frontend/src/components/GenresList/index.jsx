import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { genresFetcher } from "../../utils/axiosTools";

function GenresList() {
  const [genres, setGenres] = useState(null);

  useEffect(() => {
    genresFetcher.getAll().then((result) => setGenres(result));
  }, []);

  if (!genres) return <div>Loading ...</div>;

  return (
    <div className="grid grid-cols-4">
      {genres.map((genre) => (
        <Link to={`/genres/${genre.name}`}>{genre.name}</Link>
      ))}
    </div>
  );
}

export default GenresList;
