import React from 'react'
import './Results.scss'
import Pagination from 'react-pagination-library'
import './pagination.scss'
import './Menu.css'
import { slide as Menu } from 'react-burger-menu'
import { Accordion, Card} from 'react-bootstrap'
import ResItem from '../ResItem/ResItem'


const Results = ({carMakes, searchParams, checkNumValue, onFormSubmit, onPageChange, searchResults, saveToLocal, removeFromLocal }) => {
    // const searchParams = {...searchParams }
    
    const numOfPages = Math.ceil( searchResults.num_of_results / searchParams.rows ) < 1000 / searchParams.rows ? Math.ceil( searchResults.num_of_results / searchParams.rows ) : 1000 / searchParams.rows
    const changePage = (numPage) => {
        const e = {
            preventDefault: () => {console.log('preventDefault')},
            target: {
                name: 'pageChange',
                value: numPage - 1
            }
        }
        onPageChange(e)
    }

    const car_year = []
    for(let i = 2019; i >=1900; i--) {
        car_year.push(<option value={i} key={`car__year-${i}`}>{i}</option>)
    }

    const FORM = (
        <form onSubmit={(e) => onFormSubmit(e)} className='text-dark text-left' name="results-form">     
            <Accordion defaultActiveKey="0">
                
                <Card>
                    <Accordion.Toggle className="text-center" as={Card.Header} eventKey="0">
                        <strong className="text-info">Location</strong>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <div className="form-group">
                                <label htmlFor="input-radius"> <strong>Radius</strong> </label>
                                <select className="form-control" id="input-radius" name="radius" defaultValue={searchParams.radius} >
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
                                <label htmlFor="input-zip"> <strong>ZIP Code</strong> </label>
                                <input className="form-control" id="input-zip" name="zip" type="text" defaultValue={searchParams.zip}minLength='5' maxLength="5" onInput={(e) => checkNumValue(e)} />
                            </div>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card>
                    <Accordion.Toggle className="text-center" as={Card.Header} eventKey="1">
                        <strong className="text-info">Price</strong>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>
                        <div className="form-group">
                            <label htmlFor="input-min-price"> <strong>Min Price</strong> </label>
                            <input className="form-control" id="min_price" name="min_price" type="text" defaultValue={searchParams.min_price} maxLength="6" onInput={(e) => checkNumValue(e)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="input-max-price"> <strong>Max Price</strong> </label>
                            <input className="form-control" id="max_price" name="max_price" type="text" defaultValue={searchParams.max_price} maxLength="6" onInput={(e) => checkNumValue(e)} />
                        </div>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card>
                    <Accordion.Toggle className="text-center" as={Card.Header} eventKey="2">
                        <strong className="text-info">Condition</strong>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                        <Card.Body>
                            <div className="form-group form-check mb-1">
                                <input type="radio" className="form-check-input" name='condition' value='new' defaultChecked={searchParams.condition === 'new'}/>
                                <label className="form-check-label">New</label>
                            </div>

                            <div className="form-group form-check mb-1">
                                <input type="radio" className="form-check-input" name='condition' value='used' defaultChecked={searchParams.condition === 'used'}/>
                                <label className="form-check-label">Used</label>
                            </div>

                            <div className="form-group form-check mb-1">
                                <input type="radio" className="form-check-input" name='condition' value='certified' defaultChecked={searchParams.condition === 'certified'}/>
                                <label className="form-check-label">Certified</label>
                            </div>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card>
                    <Accordion.Toggle className="text-center" as={Card.Header} eventKey="3">
                        <strong className="text-info">Year</strong>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="3">
                        <Card.Body>
                        <div className="form-group">
                            <select className="form-control" id="input-year" name="year" defaultValue={searchParams.year}>
                                <option value="">Any</option>
                                {car_year}
                            </select>
                        </div>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card>
                    <Accordion.Toggle className="text-center" as={Card.Header} eventKey="4">
                        <strong className="text-info">Mileage</strong>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="4">
                        <Card.Body>
                            <div className="form-group">
                                <select className="form-control" name="mileage" defaultValue={searchParams.mileage}>
                                    <option value="">Any</option>
                                    <option value="0-15000">Under 15,000</option>
                                    <option value="0-30000">Under 30,000</option>
                                    <option value="0-45000">Under 45,000</option>
                                    <option value="0-60000">Under 60,000</option>
                                    <option value="0-75000">Under 75,000</option>
                                    <option value="0-100000">Under 100,000</option>
                                    <option value="0-150000">Under 150,000</option>
                                    <option value="0-200000">Under 200,000</option>
                                    <option value="200000-999999">Over 200,000</option>
                                </select>
                            </div>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                
                <Card>
                    <Accordion.Toggle className="text-center" as={Card.Header} eventKey="5">
                        <strong className="text-info">Make</strong>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="5">
                        <Card.Body>
                            {carMakes.map(make => (
                                <div className="form-group form-check mb-1" key={make}>
                                    <input type="checkbox" className="form-check-input" name='make' value={make} defaultChecked={searchParams.make.includes(make)}/>
                                    <label className="form-check-label">{make}</label>
                                </div>
                            ))}
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                
                <Card>
                    <Accordion.Toggle className="text-center" as={Card.Header} eventKey="6">
                        <strong className="text-info">Body Style</strong>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="6">
                        <Card.Body>
                            {['SUV', 'Sedan', 'Pickup', 'Hatchback', 'Coupe', 'Wagon'].map(bodyType => (
                                <div className="form-group form-check mb-1" key={bodyType}>
                                    <input type="checkbox" className="form-check-input" name='body_style' value={bodyType.toLowerCase()} defaultChecked={searchParams.body_style.includes(bodyType.toLowerCase())}/>
                                    <label className="form-check-label">{bodyType}</label>
                                </div>
                            ))}
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                
                <Card>
                    <Accordion.Toggle className="text-center" as={Card.Header} eventKey="7">
                        <strong className="text-info">Exterior Color</strong>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="7">
                        <Card.Body>
                            {['Beige', 'Black', 'Blue', 'Brown', 'Charcoal', 'Gold', 'Gray', 'Green', 'White', 'Orange', 'Pink', 'Purple', 'Red', 'Silver', 'Tan', 
                            'Turquoise', 'Yellow'].map(extColor => (
                                <div className="form-group form-check mb-1" key={extColor}>
                                    <input type="checkbox" className="form-check-input" name='ext_color' value={extColor.toLowerCase()} defaultChecked={searchParams.ext_color.includes(extColor.toLowerCase())}/>
                                    <label className="form-check-label">{extColor}</label>
                                </div>
                            ))}
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                
                <Card>
                    <Accordion.Toggle className="text-center" as={Card.Header} eventKey="8">
                        <strong className="text-info">Interior Color</strong>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="8">
                        <Card.Body>
                            {['Beige', 'Black', 'Blue', 'Brown', 'Charcoal', 'Gold', 'Gray', 'Green', 'White', 'Orange', 'Pink', 'Purple', 'Red', 'Silver', 'Tan', 
                            'Turquoise', 'Yellow'].map(intColor => (
                                <div className="form-group form-check mb-1" key={intColor}>
                                    <input type="checkbox" className="form-check-input" name='int_color' value={intColor.toLowerCase()} defaultChecked={searchParams.int_color.includes(intColor.toLowerCase())}/>
                                    <label className="form-check-label">{intColor}</label>
                                </div>
                            ))}
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                
                <Card>
                    <Accordion.Toggle className="text-center" as={Card.Header} eventKey="9">
                        <strong className="text-info">Transmission</strong>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="9">
                        <Card.Body>
                            <div className="form-group form-check mb-1">
                                <input type="radio" className="form-check-input" name='transmission' value='automatic' defaultChecked={searchParams.transmission === 'automatic'}/>
                                <label className="form-check-label">Automatic</label>
                            </div>

                            <div className="form-group form-check mb-1">
                                <input type="radio" className="form-check-input" name='transmission' value='manual' defaultChecked={searchParams.transmission === 'manual'}/>
                                <label className="form-check-label">Manual</label>
                            </div>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card>
                    <Accordion.Toggle className="text-center" as={Card.Header} eventKey="10">
                        <strong className="text-info">Doors</strong>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="10">
                        <Card.Body>
                            <div className="form-group form-check mb-1">
                                <input type="checkbox" className="form-check-input" name='doors' value='2' defaultChecked={searchParams.doors.includes('2')}/>
                                <label className="form-check-label">2 Doors</label>
                            </div>
                            
                            <div className="form-group form-check mb-1">
                                <input type="checkbox" className="form-check-input" name='doors' value='3' defaultChecked={searchParams.doors.includes('3')}/>
                                <label className="form-check-label">3 Doors</label>
                            </div>
                            <div className="form-group form-check mb-1">
                                <input type="checkbox" className="form-check-input" name='doors' value='4' defaultChecked={searchParams.doors.includes('4')}/>
                                <label className="form-check-label">4 Doors</label>
                            </div>
                            <div className="form-group form-check mb-1">
                                <input type="checkbox" className="form-check-input" name='doors' value='5' defaultChecked={searchParams.doors.includes('5')}/>
                                <label className="form-check-label">5 Doors</label>
                            </div>

                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                
            </Accordion>

            <div className="text-right">
                <button type="submit" className="Results__form-btn btn btn-info m-3">APPLY</button>
            </div>

        </form>    
    )

    const ResultElements = searchResults.listings.map(listing => <ResItem key={listing.id} data={listing} saveToLocal={saveToLocal} removeFromLocal={removeFromLocal} />)


    return (
        <div className="Results">
            <div className="Results__bar shadow-sm">
                <div className="container py-2">
                    <div className="row">
                    
                        <div className="col-12 col-sm-6 text-center text-sm-left">
                            <p className="Results__information mt-2">
                                <span className="Results__number">{ searchResults.num_of_results }</span> Results
                                {
                                    searchParams.zip 
                                        ?   <span> in <span className="Results__zip"> <i className="fas fa-map-marker-alt"></i> {searchParams.zip} </span> </span>
                                        : ''
                                }
                            </p>
                        </div>

                        <div className="col-12 col-sm-6 d-flex justify-content-center justify-content-sm-end">
                            <select className="form-control" name="sort_by" defaultValue={searchParams.sort_by} onChange={(e) => onFormSubmit(e)}>
                                <option value="">Sort by: Relevance</option>
                                <option value="sort_by=price&sort_order=asc">Sort by: Price - Lowest</option>
                                <option value="sort_by=price&sort_order=desc">Sort by: Price - Highest</option>
                                <option value="sort_by=miles&sort_order=asc">Sort by: Mileage - Lowest</option>
                                <option value="sort_by=miles&sort_order=desc">Sort by: Mileage - Highest</option>
                                <option value="sort_by=year&sort_order=asc">Sort by: Year - Lowest</option>
                                <option value="sort_by=year&sort_order=desc">Sort by: Year - Highest</option>
                            </select>
                        </div>
                    
                    </div>
                </div>
            </div>

            <div className="Results__body container pt-2">

                {/* Mobile elements */}
                <div className="d-md-none">
                    <div className="Results__filter-btn btn btn-info ">
                        <i className="fas fa-sliders-h"></i> Filter
                        <Menu className="">
                            <h4 className="text-center bg-info text-light py-3 m-0">Filter</h4>        
                            {FORM}
                        </Menu>
                    </div>
                </div>
                    
                <div className='row'>
            
                    <div className="Results__form-container d-none col-md-4 pl-0 d-md-inline-block">
                        <div className="Results__form border border-info">
                            <h4 className="text-center bg-info text-light py-2 m-0">Filter</h4>

                            {FORM}

                        </div>
                    </div>

                    <div className="Results__list col-12 col-md-8 pt-2 pt-md-0">

                        {ResultElements.length <= 0 ? 'No Results Found' : ResultElements}

                    </div>

                    <div className='w-100 d-flex justify-content-center'>
                        <Pagination 
                            currentPage={(searchParams.start / searchParams.rows) + 1}
                            totalPages={numOfPages}
                            changeCurrentPage={changePage}
                            theme='square-fill'
                        />
                    </div>

                </div>

            </div>

        </div>
    )
}


export default Results