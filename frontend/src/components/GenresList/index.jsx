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
    <div className="grid grid-cols-4 p-5">
      {genres.map((genre) => (
        <Link
          className=" bg-gray opacity-90 rounded-md my-1 text-white items-center text-center p-1 m-1 "
          to={`/genres/${genre.name}`}
        >
          {genre.name}
        </Link>
      ))}
    </div>
  );
}

export default GenresList;
