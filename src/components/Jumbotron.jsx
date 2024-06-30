import React from 'react';
import dl from '../../public/images/dl.jpg';

const Jumbotron = () => {
    return (
        <>
            <div className="w-full">
                <div className="flex flex-col items-center justify-center gap-5 my-5 font-montaga">
                    <span className="text-[#C6754D] md:text-2xl">Please join us to celebrate</span>
                    <span className="text-3xl md:text-7xl">Dimas & Lutfiana</span>
                    <span className="md:text-xl text-[#C6754D]">28 Oktober 2024</span>
                </div>
                <div className="mx-32">
                    <img
                        src={dl}
                        alt="Dimas & Lutfiana"
                    />
                </div>
            </div>
        </>
    );
};

export default Jumbotron;
