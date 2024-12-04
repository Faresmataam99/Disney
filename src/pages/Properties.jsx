import { useLocation } from "react-router-dom";

export default function TrailerPage(props) {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const trailerUrl = queryParams.get("https://www.youtube.com/watch?v=TbQm5doF_Uc&pp=ygUOZnJvemVuIHRyYWlsZXI%3D");

  if (!trailerUrl) {
    return <h1 className="text-2xl text-white">No trailer available</h1>;
  }
  return (
    <>
    <Cards trailer=""/>
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-6">
      <div className="aspect-video w-full max-w-4xl">
        <iframe
          src={props.trailerUrl}
          title="Movie Traile"
          className="w-full h-full rounded-lg"
        ></iframe>
      </div>
    </div>
    </>
  );
}