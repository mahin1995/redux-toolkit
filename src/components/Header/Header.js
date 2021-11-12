import React from 'react'
import {Link} from 'react-router-dom';
import demoUserPic from '../../images/user.png'
import "./Header.scss"
import {fetchAsynctoMovies,fetchAsynctoShows} from '../../features/Movies/movieSlice';
import {useDispatch} from 'react-redux';


function Header() {
    const dispatch = useDispatch();

    const [term, setTerm] = React.useState("")
    const submitHandaler=(e)=>{
        e.preventDefault();
        console.log(term)
        dispatch(fetchAsynctoMovies(term))
        dispatch(fetchAsynctoShows(term))
        setTerm("")
    }
    return (
        <div className="header">
                <div className="logo">
            <Link to="/">
                   Movie App
            </Link>
                </div>
                <div className="search-bar">
                        <form onSubmit={submitHandaler}>
                            <input type="text" value={term} placeholder="Search Movies and shows" onChange={(e)=>{setTerm(e.target.value)}}   ></input>
                            <button type="submit">
                            <i className="fas fa-search"></i>
                            </button>
                        </form>
                </div>
            <div className="user-image">
            <img src={demoUserPic} alt="user" />
            </div>            
        </div>
    )
}

export default Header
