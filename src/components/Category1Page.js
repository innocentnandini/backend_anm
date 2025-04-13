import React, { useEffect } from 'react';
import Header from "./Header";
import Category1 from './Category1';

import Footer2 from "./Footer2"; 

const Category1Page = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    },[])

    return (
        <>
            <Header /> {/* Add Header at the top */}
     
           <Category1 />
            <Footer2 /> {/* Use Footer2 instead of Footer */}
        </>
    );
};

export default Category1Page;
