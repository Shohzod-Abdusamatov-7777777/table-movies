import React from 'react'

const MovieForm = ({match,history}) => {
    return (
        <div className="mt-2">
            <h2 className="display-5">Movie id - {match.params.id}</h2>
            <button className="btn btn-primary" onClick={()=>{history.replace("/movies")}}>Save</button>
        </div>
    )
}

export default MovieForm
