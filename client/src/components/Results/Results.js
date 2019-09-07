import React from 'react'
import './Results.scss'

import { Accordion, Card, Form} from 'react-bootstrap'

const Results = ({carMakes, formValues, checkNumValue }) => {
    const params = {...formValues }

    const onChange = e => {
        params[e.target.name] = e.target.value
        console.log(params)
    }
    const onCheckboxChange = e => {
        if(params[e.target.name].includes(e.target.value)) params[e.target.name] = params[e.target.name].filter(val => val !== e.target.value)
        else params[e.target.name].push(e.target.value)
        console.log(params)
    }

    const car_year = []
    for(let i = 2019; i >=1900; i--) {
        car_year.push(<option value={i} key={`car__year-${i}`}>{i}</option>)
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
                            <select className="form-control" name="sort_by">
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

                        <form >     
                            <Accordion defaultActiveKey="0">
                                
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="0">
                                        <strong className="text-info">Location</strong>
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body>
                                            <div className="form-group">
                                                <label htmlFor="input-radius"> <strong>Radius</strong> </label>
                                                <select className="form-control" id="input-radius" name="radius" defaultValue={params.radius} onChange={(e) => onChange(e)}>
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
                                                <input className="form-control" id="input-zip" name="zip" type="text" defaultValue={params.zip}minLength='5' maxLength="5" onChange={(e => onChange(e))} onInput={(e) => checkNumValue(e)} />
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
                                        <div className="form-group">
                                            <label htmlFor="input-min-price"> <strong>Min Price</strong> </label>
                                            <input className="form-control" id="min_price" name="min_price" type="text" maxLength="6" onChange={(e) => onChange(e)} onInput={(e) => checkNumValue(e)} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="input-max-price"> <strong>Max Price</strong> </label>
                                            <input className="form-control" id="max_price" name="max_price" type="text" maxLength="6" onChange={(e) => onChange(e)} onInput={(e) => checkNumValue(e)} />
                                        </div>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>

                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="2">
                                        <strong className="text-info">Condition</strong>
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="2">
                                        <Card.Body>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" name="condition" value="new" id="condition-new" defaultChecked={params.condition.includes('new')} onChange={(e) => onCheckboxChange(e)}/>
                                                <label className="form-check-label" htmlFor="condition-new">New</label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" name="condition" value="used" id="condition-used" defaultChecked={params.condition.includes('used')} onChange={(e) => onCheckboxChange(e)}/>
                                                <label className="form-check-label" htmlFor="condition-used">Used</label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" name="condition" value="certified" id="condition-certified" defaultChecked={params.condition.includes('certified')} onChange={(e) => onCheckboxChange(e)}/>
                                                <label className="form-check-label" htmlFor="condition-certified">Certified</label>
                                            </div>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>

                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="3">
                                        <strong className="text-info">Year</strong>
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="3">
                                        <Card.Body>
                                        <div className="form-group">
                                            <select className="form-control" id="input-year" name="year" defaultValue={params.year} onChange={(e) => onChange(e)}>
                                                <option value="">Any</option>
                                                {car_year}
                                            </select>
                                        </div>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>

                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="4">
                                        <strong className="text-info">Mileage</strong>
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="4">
                                        <Card.Body>
                                            <div className="form-group">
                                                <select className="form-control" name="mileage" defaultValue={params.mileage} onChange={(e) => onChange(e)}>
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
                                    <Accordion.Toggle as={Card.Header} eventKey="5">
                                        <strong className="text-info">Make</strong>
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="5">
                                        <Card.Body>
                                            {carMakes.map(make => (
                                                <Form.Check 
                                                    type='checkbox'
                                                    value={make}
                                                    name='make'
                                                    id={`checkbox-make-${make}`}
                                                    label={make}
                                                    key={make}
                                                    defaultChecked={formValues.make.includes(make)}
                                                    onChange={(e) => onCheckboxChange(e)}
                                                />
                                            ))}
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="6">
                                        <strong className="text-info">Body Style</strong>
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="6">
                                        <Card.Body>
                                            {['SUV', 'Sedan', 'Pickup', 'Hatchback', 'Coupe', 'Wagon'].map(bodyType => (
                                                <Form.Check 
                                                    type='checkbox'
                                                    value={bodyType.toLowerCase()}
                                                    name="body_style"
                                                    id={`checkbox-bodyType-${bodyType.toLowerCase()}`}
                                                    label={bodyType}
                                                    key={bodyType}
                                                    onChange={(e) => onCheckboxChange(e)}
                                                />  
                                            ))}
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="7">
                                        <strong className="text-info">Exterior Color</strong>
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="7">
                                        <Card.Body>
                                            {['Beige', 'Black', 'Blue', 'Brown', 'Charcoal', 'Gold', 'Gray', 'Green', 'White', 'Orange', 'Pink', 'Purple', 'Red', 'Silver', 'Tan', 
                                            'Turquoise', 'Yellow'].map(extColor => (
                                                <Form.Check 
                                                    type='checkbox'
                                                    value={extColor.toLowerCase()}
                                                    name='ext_color'
                                                    id={`checkbox-extColor-${extColor.toLowerCase()}`}
                                                    label={extColor}
                                                    key={extColor}
                                                    onChange={(e) => onCheckboxChange(e)}
                                                />  
                                            ))}
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="8">
                                        <strong className="text-info">Interior Color</strong>
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="8">
                                        <Card.Body>
                                            {['Beige', 'Black', 'Blue', 'Brown', 'Charcoal', 'Gold', 'Gray', 'Green', 'White', 'Orange', 'Pink', 'Purple', 'Red', 'Silver', 'Tan', 
                                            'Turquoise', 'Yellow'].map(intColor => (
                                                <Form.Check 
                                                    type='checkbox'
                                                    value={intColor.toLowerCase()}
                                                    name='int_color'
                                                    id={`checkbox-intColor-${intColor.toLowerCase()}`}
                                                    label={intColor}
                                                    key={intColor}
                                                    onChange={(e) => onCheckboxChange(e)}
                                                />  
                                            ))}
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="9">
                                        <strong className="text-info">Transmission</strong>
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="9">
                                        <Card.Body>
                                            <Form.Check 
                                                type='radio'
                                                value="automatic"
                                                name="transmission"
                                                id='checkbox-transmission-automatic'
                                                label='Automatic'
                                                onChange={(e) => onChange(e)}
                                            /> 
                                            <Form.Check 
                                                type='radio'
                                                value='manual'
                                                name="transmission"
                                                id='checkbox-transmission-manual'
                                                label='Manual'
                                                onChange={(e) => onChange(e)}
                                            /> 
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>

                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="10">
                                        <strong className="text-info">Doors</strong>
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="10">
                                        <Card.Body>
                                            <Form.Check 
                                                type='checkbox'
                                                value='2'
                                                name="doors"
                                                id='checkbox-doors-2'
                                                label='2 Doors'
                                                onChange={(e) => onCheckboxChange(e)}
                                            />
                                            <Form.Check 
                                                type='checkbox'
                                                value='3'
                                                name="doors"
                                                id='checkbox-doors-3'
                                                label='3 Doors'
                                                onChange={(e) => onCheckboxChange(e)}
                                            />
                                            <Form.Check 
                                                type='checkbox'
                                                value='4'
                                                name="doors"
                                                id='checkbox-doors-4'
                                                label='4 Doors'
                                                onChange={(e) => onCheckboxChange(e)}
                                            />
                                            <Form.Check 
                                                type='checkbox'
                                                value='5'
                                                name="doors"
                                                id='checkbox-doors-5'
                                                label='5 Doors'
                                                onChange={(e) => onCheckboxChange(e)}
                                            />
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