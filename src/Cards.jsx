import { useState } from "react";


const App = () => {
    const [movies, setMovies] = useState([]);
    const [filterTitle, setFilterTitle] = useState("");
    const [filterRating, setFilterRating] = useState("");
    const [newMovie, setNewMovie] = useState({
      title: "",
      description: "",
      posterURL: "",
      rating: "",
    });
  
    const handleAddMovie = () => {
      if (
        newMovie.title &&
        newMovie.description &&
        newMovie.posterURL &&
        newMovie.rating
      ) {
        setMovies([...movies, { ...newMovie, id: movies.length + 1 }]);
        setNewMovie({ title: "", description: "", posterURL: "", rating: "" });
      }
    };
  
    const filteredMovies = movies.filter((movie) => {
      return (
        movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
        (filterRating === "" || movie.rating >= parseFloat(filterRating))
      );
    });
  
    return (
      <div className="p-4  bg-[url(wall.jpg)] bg-cover h-screen w-screen">
        <h1 className="text-2xl font-bold text-center">Movie App</h1>
  
       
        <div className="flex flex-col items-center space-y-2">
          <input
            className="p-2 text-xl border rounded"
            type="text"
            placeholder="Filter by title"
            value={filterTitle}
            onChange={(e) => setFilterTitle(e.target.value)}
          />
          <input
            className="p-2 text-xl border rounded"
            type="number"
            placeholder="Filter by rating"
            value={filterRating}
            onChange={(e) => setFilterRating(e.target.value)}
          />
        </div>
  
       
        <div className="space-y-2 mt-4 flex items-center justify-center flex-col ">
          <input
            className="p-2 text-xl border rounded"
            type="text"
            placeholder="Movie Title"
            value={newMovie.title}
            onChange={(e) =>
              setNewMovie({ ...newMovie, title: e.target.value })
            }
          />
          <input
            className="p-2 text-xl border rounded"
            type="text"
            placeholder="Movie Description"
            value={newMovie.description}
            onChange={(e) =>
              setNewMovie({ ...newMovie, description: e.target.value })
            }
          />
          <input
            className="p-2 text-xl border rounded"
            type="text"
            placeholder="Poster URL"
            value={newMovie.posterURL}
            onChange={(e) =>
              setNewMovie({ ...newMovie, posterURL: e.target.value })
            }
          />
          <input
            className="p-2 text-xl border rounded"
            type="number"
            placeholder="Rating"
            value={newMovie.rating}
            onChange={(e) =>
              setNewMovie({ ...newMovie, rating: e.target.value })
            }
          />
          <button
            className="px-4 py-2 bg-orange-600 hover:bg-orange-500 duration-200 transition-all  text-white rounded"
            onClick={handleAddMovie}
          >
            Add Movie
          </button>
        </div>
  
      
        <div className="grid grid-cols-1 gap-4 mt-4">
          {filteredMovies.length > 0 ? (
            filteredMovies.map((movie) => (
              <div
                key={movie.id}
                className="p-4 border rounded-lg hover:shadow-lg bg-black text-white font-bold hover:scale-110 transition-all duration-200 flex flex-col items-center"
              >
                <h1 className="text-xl font-bold">{movie.title}</h1>
                <h2 className="text-lg">Rating: {movie.rating}</h2>
                <p>{movie.description}</p>
                <img
                  src={movie.posterURL}
                  alt={movie.title}
                  className="w-32 h-32"
                />
              </div>
            ))
          ) : (
            <p className="text-center text-lg">No movies found.</p>
          )}
        </div>
      </div>
    );
  };
  export default App

  

