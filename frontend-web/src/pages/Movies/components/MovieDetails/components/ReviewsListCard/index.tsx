import { Review } from 'core/types/Movie';
import React from 'react';
import './styles.scss';
import { ReactComponent as Star } from 'core/assets/images/star.svg';

type Props = {
    reviews: Review[];
}

const ReviewsListCard = ({ reviews }: Props) => {

    return (
        <div className="card-base reviews-list-container">
            {
                reviews.map(review => (
                    <div key={review.id} className="reviews-list-content">
                        <div className="reviews-list-header">
                            <Star />
                            <h5 className="reviews-list-title">{review.user.name}</h5>
                        </div>
                        <div className="reviews-list-body">
                            <span className="reviews-list-body-text">{review.text}</span>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default ReviewsListCard;