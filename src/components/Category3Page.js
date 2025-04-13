import React, { useEffect } from 'react';
import Header from "./Header";
import Category3 from './Category3';

import Footer2 from "./Footer2"; 

const Category3Page = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    },[])

    return (
        <>
            <Header /> {/* Add Header at the top */}
     
           <Category3 />
            <Footer2 /> {/* Use Footer2 instead of Footer */}
        </>
    );
};

export default Category3Page;
