import React from 'react'
import './Home.scss'



const Home = () => {

    return (
        <div className="Home">
            <div className="Home__main-section jumbotron rounded-0">

                <div className="container">
                    <h1 className="d-none d-md-block display-4 m-0 text-light">Search cars for sale</h1>
                    <h1 className="d-block d-md-none text-light m-0">Search cars for sale</h1>
                    
                    <hr className="mt-4 mb-5 border-light" />
                    
                    <form className="mb-5">
                        <div className="form-row">
                            <div className="col-4">
                                <select className="form-control" defaultValue="any">
                                    <option value="any">Any Make</option>
                                </select>
                            </div>
                            <div className="col-3">
                                <select className="form-control">
                                    <option value="any">Any Condition</option>
                                    <option value="new">New</option>
                                    <option value="used">Used</option>
                                </select>
                            </div>
                            <div className="col-3">
                                <input className="form-control" type="text" placeholder="ZIP Code (0-9)" name="zip" pattern="[0-9]*" />
                            </div>
                            <div className="col-2">
                                <button className="btn btn-info w-100" type="submit">Search</button>
                            </div>
                        </div>
                    </form>
                    
                </div>

            </div>

        </div>
    )
}

export default Home