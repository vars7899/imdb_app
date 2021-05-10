import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { AiFillCalendar } from "react-icons/ai";
const Card = ({ movie }) => {
    const { addMovieToNominate, nominate } = useContext(GlobalContext);

    let storedMovie = nominate.find((o) => o.imdbID === movie.imdbID);

    const nominateDisabled = storedMovie ? true : false;

    return (
        <div className="card">
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
                <p className="card__info__title">
                    {movie.Title.substring(0, 45)}
                </p>
                {movie.Year ? (
                    <p className="card__info__year">
                        <AiFillCalendar style={{ marginRight: "5px" }} />
                        {movie.Year}
                    </p>
                ) : (
                    <p className="card__info__year__not">Not Available</p>
                )}
            </div>
            {nominate.length === 5 ? (
                <div className="card__controls">
                    <button disabled={true} className="btn nominate">
                        Nominate
                    </button>
                </div>
            ) : (
                <div className="card__controls">
                    <button
                        disabled={nominateDisabled}
                        className="btn nominate"
                        onClick={() => addMovieToNominate(movie)}
                    >
                        Nominate
                    </button>
                </div>
            )}
        </div>
    );
};

export default Card;
