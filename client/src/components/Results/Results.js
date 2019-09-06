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
                                                <label htmlFor="input-radius"> <strong>Radius</strong> </label>
                                                <select className="form-control" id="input-radius">
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
                                                <input className="form-control" id="input-zip" type="text" maxLength="5" onInput={(e) => checkNumValue(e)} />
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
                                            <input className="form-control" id="input-min-price" type="text" maxLength="7" onInput={(e) => checkNumValue(e)} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="input-max-price"> <strong>Max Price</strong> </label>
                                            <input className="form-control" id="input-max-price" type="text" maxLength="7" onInput={(e) => checkNumValue(e)} />
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
                                                <input className="form-check-input" type="checkbox" value="" id="checkbox-new" />
                                                <label className="form-check-label" htmlFor="checkbox-new">
                                                    New
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="checkbox-used" />
                                                <label className="form-check-label" htmlFor="checkbox-used">
                                                    Used
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="checkbox-certified" />
                                                <label className="form-check-label" htmlFor="checkbox-certified">
                                                    Certified
                                                </label>
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
                                            <label htmlFor="input-year"><strong>Year</strong></label>
                                            <select className="form-control" id="input-year" defaultValue="">
                
                                                <option value="">Any</option>

                                                <option value="2019">2019</option>
                                                <option value="2018">2018</option>
                                                <option value="2017">2017</option>
                                                <option value="2016">2016</option>
                                                <option value="2015">2015</option>
                                                <option value="2014">2014</option>
                                                <option value="2013">2013</option>
                                                <option value="2012">2012</option>
                                                <option value="2011">2011</option>
                                                <option value="2010">2010</option>

                                                <option value="2009">2009</option>
                                                <option value="2008">2008</option>
                                                <option value="2007">2007</option>
                                                <option value="2006">2006</option>
                                                <option value="2005">2005</option>
                                                <option value="2004">2004</option>
                                                <option value="2003">2003</option>
                                                <option value="2002">2002</option>
                                                <option value="2001">2001</option>
                                                <option value="2000">2000</option>
                                                
                                                <option value="1999">1999</option>
                                                <option value="1998">1998</option>
                                                <option value="1997">1997</option>
                                                <option value="1996">1996</option>
                                                <option value="1995">1995</option>
                                                <option value="1994">1994</option>
                                                <option value="1993">1993</option>
                                                <option value="1992">1992</option>
                                                <option value="1991">1991</option>
                                                <option value="1990">1990</option>

                                                <option value="1989">1989</option>
                                                <option value="1988">1988</option>
                                                <option value="1987">1987</option>
                                                <option value="1986">1986</option>
                                                <option value="1985">1985</option>
                                                <option value="1984">1984</option>
                                                <option value="1983">1983</option>
                                                <option value="1982">1982</option>
                                                <option value="1981">1981</option>
                                                <option value="1980">1980</option>
                                                
                                                <option value="1979">1979</option>
                                                <option value="1978">1978</option>
                                                <option value="1977">1977</option>
                                                <option value="1976">1976</option>
                                                <option value="1975">1975</option>
                                                <option value="1974">1974</option>
                                                <option value="1973">1973</option>
                                                <option value="1972">1972</option>
                                                <option value="1971">1971</option>
                                                <option value="1970">1970</option>
                                                
                                                <option value="1969">1969</option>
                                                <option value="1968">1968</option>
                                                <option value="1967">1967</option>
                                                <option value="1966">1966</option>
                                                <option value="1965">1965</option>
                                                <option value="1964">1964</option>
                                                <option value="1963">1963</option>
                                                <option value="1962">1962</option>
                                                <option value="1961">1961</option>
                                                <option value="1960">1960</option>
                                                
                                                <option value="1959">1959</option>
                                                <option value="1958">1958</option>
                                                <option value="1957">1957</option>
                                                <option value="1956">1956</option>
                                                <option value="1955">1955</option>
                                                <option value="1954">1954</option>
                                                <option value="1953">1953</option>
                                                <option value="1952">1952</option>
                                                <option value="1951">1951</option>
                                                <option value="1950">1950</option>
                                                
                                                <option value="1949">1949</option>
                                                <option value="1948">1948</option>
                                                <option value="1947">1947</option>
                                                <option value="1946">1946</option>
                                                <option value="1945">1945</option>
                                                <option value="1944">1944</option>
                                                <option value="1943">1943</option>
                                                <option value="1942">1942</option>
                                                <option value="1941">1941</option>
                                                <option value="1940">1940</option>
                                                
                                                <option value="1939">1939</option>
                                                <option value="1938">1938</option>
                                                <option value="1937">1937</option>
                                                <option value="1936">1936</option>
                                                <option value="1935">1935</option>
                                                <option value="1934">1934</option>
                                                <option value="1933">1933</option>
                                                <option value="1932">1932</option>
                                                <option value="1931">1931</option>
                                                <option value="1930">1930</option>
                                                
                                                <option value="1929">1929</option>
                                                <option value="1928">1928</option>
                                                <option value="1927">1927</option>
                                                <option value="1926">1926</option>
                                                <option value="1925">1925</option>
                                                <option value="1924">1924</option>
                                                <option value="1923">1923</option>
                                                <option value="1922">1922</option>
                                                <option value="1921">1921</option>
                                                <option value="1920">1920</option>
                                                
                                                <option value="1919">1919</option>
                                                <option value="1918">1918</option>
                                                <option value="1917">1917</option>
                                                <option value="1916">1916</option>
                                                <option value="1915">1915</option>
                                                <option value="1914">1914</option>
                                                <option value="1913">1913</option>
                                                <option value="1912">1912</option>
                                                <option value="1911">1911</option>
                                                <option value="1910">1910</option>
                                                
                                                <option value="1909">1909</option>
                                                <option value="1908">1908</option>
                                                <option value="1907">1907</option>
                                                <option value="1906">1906</option>
                                                <option value="1905">1905</option>
                                                <option value="1904">1904</option>
                                                <option value="1903">1903</option>
                                                <option value="1902">1902</option>
                                                <option value="1901">1901</option>
                                                <option value="1900">1900</option>
                                                
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
                                                <select className="form-control">
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