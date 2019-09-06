import React from 'react'
import './Results.scss'

import { Accordion, Card} from 'react-bootstrap'

const Results = () => {

    return (
        <div className="Results">
            <div className="Results__bar shadow-sm">
                <div className="container py-2">
                    <div className="row">
                    
                        <div className="col-12 col-sm-6 text-center text-sm-left">
                            <p className="Results__information mt-2">
                                <span className="Results__number">123567</span> results in <span className="Results__zip"> <i className="fas fa-map-marker-alt"></i> 91911</span>
                            </p>
                        </div>

                        <div className="col-12 col-sm-6 d-flex justify-content-center justify-content-sm-end">
                            <select className="form-control">
                                <option value="relevance">Sort by: Relevance</option>
                                <option value="price-lowest">Sort by: Price - Lowest</option>
                                <option value="price-highest">Sort by: Price - Highest</option>
                                <option value="mile-lowest">Sort by: Mileage - Lowest</option>
                                <option value="mile-highest">Sort by: Mileage - Highest</option>
                                <option value="year-lowest">Sort by: Year - Lowest</option>
                                <option value="year-highest">Sort by: Year - Highest</option>
                            </select>
                        </div>
                    
                    </div>
                </div>
            </div>

            <div className="Results__body container pt-4">

                <div className="d-md-none">
                    <button className="Results__filter-btn btn btn-info">
                        <i className="fas fa-filter"></i> Filter
                    </button>
                </div>
            
                <div className="col-md-4 pl-0 d-none d-md-inline-block">
                    <div className="Results__form border border-info">
                        <h5 className="text-center bg-info text-light py-2">Filter</h5>

                        <form>
                            <Accordion defaultActiveKey="0">
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="0">
                                        Click me!
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body>Hello! I'm the body</Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="1">
                                        Click me!
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="1">
                                        <Card.Body>Hello! I'm another body</Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                        </form>    

                    </div>
                </div>

                <div className="Results__list col-12 col-md-8 pr-0">

                </div>


            </div>

        </div>
    )
}


export default Results