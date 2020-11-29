import React, { useState } from 'react';

import Index, { INDEX_CORE } from './Index.js';

import * as Sections from './serialization/Sections.js';

function MessageSerialization () {
    const [menus, setMenus] = useState([
        { code:  '1', label: 'Overview',             active: true },
        { code:  '2', label: 'Markers',              active: true },
        { code:  '3', label: 'SizedValues',          active: true },
        { code:  '4', label: 'Null',                 active: true },
        { code:  '5', label: 'Booleans',             active: true },
        { code:  '6', label: 'Integers',             active: true },
        { code:  '7', label: 'FloatingPointNumbers', active: true },
        { code:  '8', label: 'String',               active: true },
        { code:  '9', label: 'Lists',                active: true },
        { code: '10', label: 'Maps',                 active: true },
        { code: '11', label: 'Structures',           active: true },
        { code: '12', label: 'GraphTypeStructures',  active: true },
        { code: '13', label: 'MarkerTable',          active: true },
    ]);

    const callbacks = INDEX_CORE.callbacks(menus, setMenus);
    const isActive = (code) => INDEX_CORE.isActive (code, menus);
    return <div style={{display:'flex'}}>
             <div>
               <Index source={menus}
                      original_url="https://boltprotocol.org/v1/#serialization"
                      callbacks={callbacks} />
             </div>

             <div>
               {isActive('1')  && <Sections.Overview />}
               {isActive('2')  && <Sections.Markers />}
               {isActive('3')  && <Sections.SizedValues />}
               {isActive('4')  && <Sections.Null />}
               {isActive('5')  && <Sections.Booleans />}
               {isActive('6')  && <Sections.Integers />}
               {isActive('7')  && <Sections.FloatingPointNumbers />}
               {isActive('8')  && <Sections.String />}
               {isActive('9')  && <Sections.Lists />}
               {isActive('10') && <Sections.Maps />}
               {isActive('11') && <Sections.Structures />}
               {isActive('12') && <Sections.GraphTypeStructures />}
               {isActive('13') && <Sections.MarkerTable />}
             </div>
           </div>;
}

export default MessageSerialization;
