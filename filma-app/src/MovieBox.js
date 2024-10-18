import React from 'react'

const API_IMG="https://image.tmdb.org/t/p/w600_and_h900_bestv2/npOnzAbLh6VOIu3naU5QaEcTepo.jpg";

const MovieBox =({title, poster_path,vote_average, release_date,overview,image, producer})=>{
    return (
        <div>
            <h1>{title}</h1>
            <img src={image}></img>
            <p>{overview}</p>
            <p>Producer: {producer}</p>
        </div>
    )
}

export default MovieBox;