import React from 'react'
import "./style.css"

const Temp = () => {
  return (
    <>
        {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
        </form> */}

        <div className="wrap">
            <div className="search">
                <input type="search" 
                        placeholder='search'
                        autoFocus
                        id='search'
                        className='searchCity'/>
                <button className="searchButton" type='button'>
                    Search
                </button>

            </div>
        </div>
    </>
  )
}

export default Temp
