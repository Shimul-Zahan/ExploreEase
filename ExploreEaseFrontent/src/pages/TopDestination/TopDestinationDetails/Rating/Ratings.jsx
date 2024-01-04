import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { useState } from 'react';

const Ratings = () => {

    const [rating, setRating] = useState(0);

    return (
        <Rating
            style={{ maxWidth: 100}}
            value={rating}
            onChange={setRating}
            isRequired
        />
    )
}

export default Ratings