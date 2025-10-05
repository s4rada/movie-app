import {React, useState} from 'react'
import MovieCard from '../components/MovieCard'

export const Home = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const movies  = [
        {id:1, title:'John Wick', release_date:'2020'},
        {id:2, title:'Dog ', release_date:'2021'},
        {id:3, title:'Cat Wick wick', release_date:'2022'},
        {id:4, title:'Wick ', release_date:'2023'}
    ];
    const handleSearch =(e) =>{
        e.preventDefault()
        // alert(searchQuery)
        setSearchQuery("")
    };
  return (
    <div className='home'>
        <form action="" className='search-form' onSubmit={handleSearch}>
            <input type="text" placeholder='Search for movies...' className='search-input' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
            <button type='submit' > search </button>
        </form>
        <div className='movies-grid'>
            {movies.map(movie => movie.title.toLowerCase().startsWith(searchQuery) && (<MovieCard movie={movie} key={movie.id}/>))}
        </div>
    </div>
  )
}
