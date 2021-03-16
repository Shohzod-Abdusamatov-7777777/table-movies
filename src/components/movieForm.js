import React from 'react'

const MovieForm = ({match,history}) => {
    return (
        <div style={{paddingTop:"60px"}}>
            <h2 className="display-5">Movie id - {match.params.id}</h2>
            <button className="btn btn-primary" onClick={()=>{history.replace("/movies")}}>Save</button>
        </div>
    )
}

export default MovieForm
