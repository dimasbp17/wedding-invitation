import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <div className="w-full p-5 shadow-sm bg-netral font-montaga">
                <div></div>
                <ul className="flex flex-col items-center justify-center lg:flex lg:flex-row lg:gap-10">
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li>Our Story</li>
                    <li>Gallery</li>
                    <li>About</li>
                </ul>
            </div>
        </>
    );
};

export default Navbar;
