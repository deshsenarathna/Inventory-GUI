import React from "react";
import './HOME.css';
import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <div className="header">
                <a href="#">Login</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
                <Link to="/productTable" className="btn btn-add">Add Product</Link>
            </div>
            <div className="banner">
                <div className="homePageContainer">
                    <div className="bannerHeader">
                        <h1>IMS</h1>
                        <p>Inventory Management System</p>
                    </div>
                    <p className="bannerTagLine">
                        Track your goods throughout your entire supply chain, from purchasing
                        to production to end sales.
                    </p>
                </div>
            </div>
            <div className="footer"></div>
        </div>
    );
}

export default Home;
