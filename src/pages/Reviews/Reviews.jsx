import { getMovieReviews } from "API/movieAPI";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Div, P } from "components/Wrappers/Wrappers";

const Reviews = () => {
    const {movieId} = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(()=>{getMovieReviews(movieId).then(setReviews)},[movieId])

    if (!reviews) return 

    return (
      <Div>
        <Div as='ul'  display="flex" width="1/1" p='0' flexWrap='wrap'>
          {reviews.length > 0 ? reviews.map(review=><Div mx='4' as='li' key={review.id}>
            <P fontWeight="bold">{review.author}</P>
            <P>{review.content}</P>
          </Div>): <P> No Reviews</P>}
        </Div>
      </Div>
    );
}

export default Reviews;