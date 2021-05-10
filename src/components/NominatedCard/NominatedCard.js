import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
const NominatedCard = ({ movie }) => {
    const { removeMovieFromNominate } = useContext(GlobalContext);
    return (
        <div className="nominatedcard">
            {movie.Poster ? (
                <img
                    className="card__pic"
                    src={movie.Poster}
                    alt={movie.Title}
                />
            ) : (
                <div className="card__empty"></div>
            )}
            <div className="card__info">
                <p className="card__info__title">{movie.Title}</p>
                {movie.Year ? (
                    <p className="card__info__year">Year: {movie.Year}</p>
                ) : (
                    <p className="card__info__year__not">Not Available</p>
                )}
            </div>
            <div className="card__controls">
                <button
                    className="btn remove"
                    onClick={() => removeMovieFromNominate(movie.imdbID)}
                >
                    Remove
                </button>
            </div>
        </div>
    );
};

export default NominatedCard;
