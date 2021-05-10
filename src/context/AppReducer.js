export default (state, action) => {
    switch (action.type) {
        case "ADD_MOVIE_TO_NOMINATE":
            return {
                ...state,
                nominate: [action.payload, ...state.nominate],
            };
        case "REMOVE_MOVIE_FROM_NOMINATE":
            return {
                ...state,
                nominate: state.nominate.filter(
                    (movie) => movie.imdbID !== action.payload
                ),
            };

        default:
            return state;
    }
};
