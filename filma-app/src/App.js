import React,{useState,useEffect} from "react"
import './App.css';
import MovieBox from "./MovieBox";


const API_URL="https://ghibliapi.vercel.app/films";

function App() {

  const [movies,setMovies]=useState([]);
  
  useEffect(() => {
    fetch(API_URL)
    .then((res)=>res.json())
    .then(data=>{
      setMovies(data);
    })
  },[])
    
  return (
    <div>
      {movies.map((movie)=>
      <MovieBox key={movie.id}{...movie}/>)}
    </div>
  );
}

export default App;
