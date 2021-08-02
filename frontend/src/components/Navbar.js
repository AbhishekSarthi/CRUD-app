import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <h1>CRUD app</h1>
                <Link to="/">
                    <h3 className="small-box">Home </h3>
                </Link>
                <Link to="/create">
                    <h3 className="small-box">Create </h3>
                </Link>
                <Link to="/read">
                    <h3 className="small-box">Read </h3>
                </Link>
                <Link to="/update">
                    <h3 className="small-box">Update </h3>
                </Link>
                <Link to="/delete">
                    <h3 className="small-box">Delete </h3>
                </Link>
            </div>
        </>
    );
};

export default Navbar;
