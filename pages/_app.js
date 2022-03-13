import React, { useState } from "react";
import '../styles/globals.css';
import '../components/HorizontalNav/styles.css';
import FilterContext from '../FilterContext';
import "prismjs/themes/prism-tomorrow.css";

function MyApp({ Component, pageProps }) {
  const checkboxStatus = {
    tutorials: true,
    reviews: true,
  };
  const [filterStatus, setFilterStatus] = useState(checkboxStatus);
  const value = { filterStatus, setFilterStatus };

  return (
    <FilterContext.Provider value={value}>
      <Component {...pageProps} />
    </FilterContext.Provider>
  );
}

export default MyApp
