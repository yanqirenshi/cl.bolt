import React, { useState } from 'react';

import Index, { INDEX_CORE } from './Index.js';

import * as Sections from './examples/Sections.js';

function Examples () {
    const [menus, setMenus] = useState([
        { code:  '1', label: 'Running a Cypher query',           active: true },
        { code:  '2', label: 'Pipelining',                       active: true },
        { code:  '3', label: 'Error handling with RESET',        active: true },
        { code:  '4', label: 'Error handling with ACK_FAILURE',  active: true },
        { code:  '5', label: 'Accessing basic result metadata',  active: true },
        { code:  '6', label: 'Explaining and profiling a query', active: true },
        { code:  '7', label: 'Accessing notifications',          active: true },
        { code:  '8', label: 'Resetting the session',            active: true },
    ]);

    const callbacks = INDEX_CORE.callbacks(menus, setMenus);
    const isActive = (code) => INDEX_CORE.isActive (code, menus);
    return <div style={{display:'flex'}}>
             <div>
               <Index source={menus}
                      original_url="https://boltprotocol.org/v1/#examples"
                      callbacks={callbacks} />
             </div>

             <div>
               {isActive('1')  && <Sections.RunningACypherQuery />}
               {isActive('2')  && <Sections.Pipelining />}
               {isActive('3')  && <Sections.ErrorHandlingWithRESET />}
               {isActive('4')  && <Sections.ErrorHandlingWithACK_FAILURE />}
               {isActive('5')  && <Sections.AccessingBasicResultMetadata />}
               {isActive('6')  && <Sections.ExplainingAndProfilingAQuery />}
               {isActive('7')  && <Sections.AccessingNotifications />}
               {isActive('8')  && <Sections.ResettingTheSession />}
             </div>
           </div>;
}

export default Examples;
