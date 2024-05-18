import React from 'react'
import Logo from "../../public/assets/google-1-1.svg"

const SearchPage = () => {
  return (
    <div className='searchPage'>
        <div className="searchPage__header">
            <Link to = "/">
            <img src={Logo} alt="" />
            </Link>
        </div>
        SearchPage
    </div>
  )
}

export default SearchPage