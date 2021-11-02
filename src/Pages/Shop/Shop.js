import React from 'react';
import product1 from '../../images/shop/shop1 (1).jpg'
import product2 from '../../images/shop/shop1 (2).jpg'
import product3 from '../../images/shop/shop1 (3).jpg'
import product4 from '../../images/shop/shop1 (4).jpg'
import product5 from '../../images/shop/shop1 (5).jpg'
import product6 from '../../images/shop/shop1 (6).jpg'
import './Shop.css'

const Shop = () => {

    return (
        <div id="shop"  style={{ backgroundColor: "rgb(247, 248, 249)" }}>
            <div className="container shop-img ">
                <h2 style={{ textAlign: "start", marginLeft: "2rem", fontWeight: "900" }}>Shop</h2>
                <p style={{ textAlign: "start", marginLeft: "2rem", fontStyle: "italic" }}>features equipment</p>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card h-100 border-0">
                            <img src={product1} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Comfort Scan</h5>
                                <p className="card-text">$12</p>
                            </div>
                            <div className="card-footer bg-dark">
                                <small className="  text-white ">Add To Cart</small>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 border-0">
                            <img src={product2} class="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Thermometer</h5>
                                <p className="card-text">$09</p>
                            </div>
                            <div className="card-footer bg-dark">
                                <small className="  text-white ">Add To Cart</small>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 border-0">
                            <img src={product3} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Fitbit Charge</h5>
                                <p className="card-text">$10</p>
                            </div>
                            <div className="card-footer bg-dark">
                                <small className="text-white ">Add To Cart</small>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 border-0">
                            <img src={product4} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Body Lotion</h5>
                                <p className="card-text">$10</p>
                            </div>
                            <div className="card-footer bg-dark">
                                <small className="  text-white ">Add To Cart</small>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 border-0">
                            <img src={product5} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Cold Syrup</h5>
                                <p className="card-text">$10</p>
                            </div>
                            <div className="card-footer bg-dark">
                                <small className="  text-white ">Add To Cart</small>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 border-0">
                            <img src={product6} className="card-img-top img-fluid" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Relife Drops</h5>
                                <p className="card-text">$10</p>
                            </div>
                            <div className="card-footer bg-dark">
                                <small className="  text-white ">Add To Cart</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;