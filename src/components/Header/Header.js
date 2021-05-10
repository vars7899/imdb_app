import React, { useState, useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import Loader from "react-loader-spinner";
import { BiSearch } from "react-icons/bi";
import Card from "../Card/Card";
import Complete from "../Complete/Complete";
import TypeHeading from "../TypeHeading/TypeHeading";
import Confetti from "react-confetti";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
    const [checkLoading, setCheckLoading] = useState();
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const [confetti, setConfetti] = useState(true);
    const { nominate } = useContext(GlobalContext);
    const onChange = (e) => {
        e.preventDefault();
        setQuery(e.target.value);
        setCheckLoading(true);
        fetch(
            `https://www.omdbapi.com/?s=${e.target.value}&apikey=${process.env.REACT_APP_IMDB_KEY}`
        )
            .then((response) => response.json())
            .then((responseData) => {
                if (!responseData.Error) {
                    setResults(responseData.Search);
                    setCheckLoading(false);
                } else {
                    setResults([]);
                }
            })
            .catch((err) => {
                setCheckLoading(false);
                console.log(err);
            });
    };
    setTimeout(() => setConfetti(false), 3000);
    return (
        <div className="header container-fluid">
            <div className="header__container">
                <p className="header__container__brand">IMDB</p>
                <div className="header__container__control">
                    <span className="header__container__icon">
                        <BiSearch />
                    </span>
                    <input
                        className="header__container__input"
                        type="text"
                        value={query}
                        onChange={onChange}
                        placeholder="Search Movie"
                    />
                </div>
            </div>

            {nominate.length === 5 && (
                <>
                    <Complete />
                    {confetti && (
                        <div className="confetti">
                            <Confetti
                                width={"300"}
                                height={"400"}
                                numberOfPieces="50"
                            />
                        </div>
                    )}
                </>
            )}
            {checkLoading && query.length > 0 ? (
                <div>
                    <TypeHeading heading={"Search result"} />
                    <div className="loading">
                        <Loader
                            type="ThreeDots"
                            color="#FFF"
                            height={100}
                            width={100}
                        />
                    </div>
                </div>
            ) : (
                results.length > 0 && (
                    <>
                        <TypeHeading heading={"Search result"} />
                        <ul className="header__movielist row">
                            {results.map((movie) => (
                                <li className="element" key={movie.imdbID}>
                                    <Card movie={movie} />
                                </li>
                            ))}
                        </ul>
                    </>
                )
            )}
        </div>
    );
};

export default Header;
