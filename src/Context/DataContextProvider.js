import React, { useState } from 'react';
import DataContext from './DataContext';

const DataContextProvider = (props) => {
    const [cart, setCart] = useState({});
    const [compare,setCompare] = useState({});

    return(
        <DataContext.Provider values={{cart, setCart,compare,setCompare}}>
            {props.children}
        </DataContext.Provider>
    )
}

export default DataContextProvider;