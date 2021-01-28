import React from 'react';
import { Movie } from 'core/types/Movie';
import './styles.scss';

type Props = {
    movie: Movie | undefined;
}

const BasicInfoCard = ({ movie }: Props) => {

    return (
        <div className="card-base basic-info-card-container">
            <img src={movie?.imgUrl} alt={movie?.title} className="basic-info-card-image"/>
            <div className="basic-info-card-infos">
                <h3 className="basic-info-card-title">{movie?.title}</h3>
                <h4 className="basic-info-card-year">{movie?.year}</h4>
                <h4 className="basic-info-card-subtitle">{movie?.subTitle}</h4>
                <p className="basic-info-card-synopsis">{movie?.synopsis}</p>
            </div>
        </div>
    );
};

export default BasicInfoCard;