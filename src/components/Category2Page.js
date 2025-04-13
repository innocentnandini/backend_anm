import React, { useEffect } from 'react';
import Header from "./Header";
import Category2 from './Category2';

import Footer2 from "./Footer2"; 

const Category2Page = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    },[])

    return (
        <>
            <Header /> {/* Add Header at the top */}
     
           <Category2 />
            <Footer2 /> {/* Use Footer2 instead of Footer */}
        </>
    );
};

export default Category2Page;
