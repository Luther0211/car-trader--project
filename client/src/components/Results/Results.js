import React from 'react'
import './Results.scss'

import { Accordion, Card} from 'react-bootstrap'

const Results = () => {

    const checkNumValue = e => {
        e.target.value = e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')
    }

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
                        <i className="fas fa-sliders-h"></i> Filter
                    </button>
                </div>
            
                <div className="col-md-4 pl-0 d-none d-md-inline-block">
                    <div className="Results__form border border-info">
                        <h4 className="text-center bg-info text-light py-2 m-0">Filter</h4>

                        <form>     
                            <Accordion defaultActiveKey="0">
                                
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="0">
                                        <strong className="text-info">Location</strong>
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body>
                                            <div className="form-group">
                                                <label htmlFor="radius-input"> <strong>Radius</strong> </label>
                                                <select className="form-control" id="radius-input">
                                                    <option value='' >Any</option>
                                                    <option value='10' >10 Miles</option>
                                                    <option value='25' >25 Miles</option>
                                                    <option value='50' >50 Miles</option>
                                                    <option value='75' >75 Miles</option>
                                                    <option value='100' >100 Miles</option>
                                                    <option value='200' >200 Miles</option>
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="zip-input"> <strong>ZIP Code</strong> </label>
                                                <input className="form-control" type="text" maxLength="5" onInput={(e) => checkNumValue(e)} />
                                            </div>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>

                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="1">
                                        <strong className="text-info">Price</strong>
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="1">
                                        <Card.Body>

                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>

                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="2">
                                        <strong className="text-info">Condition</strong>
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="2">
                                        <Card.Body>

                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>

                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="3">
                                        <strong className="text-info">Year</strong>
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="3">
                                        <Card.Body>

                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>

                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="4">
                                        <strong className="text-info">Mileage</strong>
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="4">
                                        <Card.Body>

                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="5">
                                        <strong className="text-info">Make</strong>
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="5">
                                        <Card.Body>

                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="6">
                                        <strong className="text-info">Body Style</strong>
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="6">
                                        <Card.Body>

                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="7">
                                        <strong className="text-info">Exterior Color</strong>
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="7">
                                        <Card.Body>

                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="8">
                                        <strong className="text-info">Interior Color</strong>
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="8">
                                        <Card.Body>

                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="9">
                                        <strong className="text-info">Transmission</strong>
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="9">
                                        <Card.Body>

                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>

                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="10">
                                        <strong className="text-info">Doors</strong>
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="10">
                                        <Card.Body>
                                            
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>

                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="11">
                                        <strong className="text-info">Seller Type</strong>
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="11">
                                        <Card.Body>

                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                
                            </Accordion>

                            <div className="text-right">
                                <button type="submit" className="Results__form-btn btn btn-info m-3">APPLY</button>
                            </div>

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