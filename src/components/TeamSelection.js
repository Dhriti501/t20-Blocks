import React, { useState } from "react";
import { readString } from 'react-papaparse';
import siteListCSV from '../data/t20_data_rating.csv';
import Content from "./Content";
import Header from "./header/Header";
import { useEffect } from "react";
import Navbar from "./Navbar";


const Team_Selection = () => {

    const [activeCategory, setActiveCategory] = useState("BATSMAN");
    const [batsmanData, setBatsmanData] = useState([]);

    //displaying csv data
    useEffect(() =>{
        const papaConfig = {
            complete: (results, file) => {
            //   console.log('Parsing complete:', results, file);
                
                // const slicedArray = originalArray.slice(0, 100);
              setBatsmanData(results.data.slice(1,101));
              console.log(results.data)
              console.log(results.data.slice(1,101));
                
            },
            download: true,
            error: (error, file) => {
              console.log('Error while parsing:', error, file);
            },
          };
          readString(siteListCSV, papaConfig);
    },[]);



    const handleCategoryClick = (category) => {
        setActiveCategory(category);
    };

    return (
        <div>
            <Header />
            <Navbar
                activeCategory={activeCategory}
                onCategoryClick={handleCategoryClick}
            />
            <Content activeCategory={activeCategory} batsmanData={batsmanData} />
        </div>
    );
};

export default Team_Selection;
