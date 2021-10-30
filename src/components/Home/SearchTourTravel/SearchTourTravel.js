import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import './SearchTourTravel.css'

const SearchTourTravel = () => {
    return (
        <section>
            <div className="search-area">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-lg-3">
                            <div className="form-area">
                            <h3>Where you want to go?</h3>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="search-box">
                                <form className="search-form d-flex justify-content-between" action="#">
                                    <div className="input-field">
                                        <input type="text" placeholder="Where to go?" />
                                    </div>
                                    <div className="input-field">
                                        <div className="input-date">
                                            <input id="date" placeholder="Date" type="date" />
                                            {/* <span>
                                                <FontAwesomeIcon icon={faCaretDown} />
                                            </span> */}
                                        </div>
                                    </div>
                                    <div className="input-field">
                                        <select className="input-select">
                                            <option data-display="Travel type">Travel type</option>
                                            <option value="1">Some option</option>
                                            <option value="2">Another option</option>
                                        </select>
                                    </div>
                                    <div className="search-btn">
                                        <button className="boxed-btn " type="submit">Search</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SearchTourTravel;