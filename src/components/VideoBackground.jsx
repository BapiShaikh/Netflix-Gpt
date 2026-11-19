
import { useSelector } from "react-redux";
import useMoviesTrailer from "../hooks/useMoviesTrailer";

const VideoBackground = ({ movieId }) => {
  useMoviesTrailer(movieId);

  const trailerVideo = useSelector(
    (store) => store.movies?.trailerVideo
  );

  if (!trailerVideo?.key) return null;

  return (
    <div className="w-screen aspect-video">
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1&controls=0&showinfo=0&autohide=1&loop=1&playlist=${trailerVideo.key}`}
        title="YouTube video player"
        allow="autoplay; encrypted-media; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default VideoBackground;
