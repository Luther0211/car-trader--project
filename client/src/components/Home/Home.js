import React from 'react'
import './Home.scss'



const Home = () => {

    return (
        <div className="Home">
            <div className="Home__main-section jumbotron rounded-0">

                <div className="container">
                    <h1 className="d-none d-md-block display-4 text-light">Search cars for sale</h1>
                    <h1 className="d-block d-md-none">Search cars for sale</h1>
                    
                    <hr className="my-4 border-light" />
                    
                    
                </div>

            </div>

        </div>
    )
}

export default Home