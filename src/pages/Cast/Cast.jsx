import { getMovieCredits } from "API/movieAPI";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Div, P } from "components/Wrappers/Wrappers";

const Cast = () => {
    const {movieId} = useParams();
    const [cast, setCast] = useState([]);

    useEffect(()=>{getMovieCredits(movieId).then(setCast)},[movieId])

    if (!cast) return

    return (
      <Div>
        <Div as='ul' display="flex" width="1/1" p='0' flexWrap='wrap'>
          {cast.map(actor => (
            <Div as='li' m='2' key={actor.id} width={138}>
              <img
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w138_and_h175_face${actor.profile_path}`
                    : 'https://via.placeholder.com/138x175.png'
                }
                alt={actor.name}
              />
              <P fontWeight="bold">{actor.name}</P>
              <P>{actor.character}</P>
            </Div>
          ))}
        </Div>
      </Div>
    );
}

export default Cast;