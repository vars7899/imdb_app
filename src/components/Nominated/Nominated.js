import React, { useContext } from "react";
import NominatedCard from "../NominatedCard/NominatedCard";
import TypeHeading from "../TypeHeading/TypeHeading";
import { GlobalContext } from "../../context/GlobalState";
const Nominated = () => {
    const { nominate } = useContext(GlobalContext);

    return (
        <div>
            <TypeHeading heading={"Nominated"} />
            {nominate.length > 0 ? (
                <div className="nominated row">
                    {nominate.map((movie) => (
                        <NominatedCard key={movie.imdbID} movie={movie} />
                    ))}
                </div>
            ) : (
                <p className="color">No movie Nominated</p>
            )}
        </div>
    );
};

export default Nominated;
