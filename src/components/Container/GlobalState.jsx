import React, { useRef, useState } from 'react';
import SiteContext from '../Context/WebSiteContext.js';
const GlobalState = props => {

  const [test, setTest] = useState("iman");
    return (

        <SiteContext.Provider
            value={{
                test: test,
                setTest: setTest

            }}

        >
            {props.children}
        </SiteContext.Provider>
    );
}

export default GlobalState;