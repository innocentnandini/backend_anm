import React, { useEffect } from 'react';
import Header from "./Header";
import Category4 from './Category4';

import Footer2 from "./Footer2"; 

const Category4Page = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    },[])

    return (
        <>
            <Header /> {/* Add Header at the top */}
     
           <Category4 />
            <Footer2 /> {/* Use Footer2 instead of Footer */}
        </>
    );
};

export default Category4Page;
