import React, { useEffect } from 'react';
import Header from "./Header";
import Category5 from './Category5';

import Footer2 from "./Footer2"; 

const Category5Page = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    },[])

    return (
        <>
            <Header /> {/* Add Header at the top */}
     
           <Category5 />
            <Footer2 /> {/* Use Footer2 instead of Footer */}
        </>
    );
};

export default Category5Page;
