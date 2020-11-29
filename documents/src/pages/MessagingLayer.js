import React, { useState } from 'react';

import Index, { INDEX_CORE } from './Index.js';

import * as Sections from './messaging/Sections.js';

function MessagingLayer () {
    const [menus, setMenus] = useState([
        { code:  '1', label: 'Initialization',   active: true },
        { code:  '2', label: 'Pipelining',       active: true },
        { code:  '3', label: 'Failure Handling', active: true },
        { code:  '4', label: 'Messages',         active: true },
    ]);

    const callbacks = INDEX_CORE.callbacks(menus, setMenus);
    const isActive = (code) => INDEX_CORE.isActive (code, menus);
    return <div style={{display:'flex'}}>
             <div>
               <Index source={menus}
                      original_url="https://boltprotocol.org/v1/#messaging"
                      callbacks={callbacks} />
             </div>

             <div>
               {isActive('1')  && <Sections.Initialization />}
               {isActive('2')  && <Sections.Pipelining />}
               {isActive('3')  && <Sections.FailureHandling />}
               {isActive('4')  && <Sections.Messages />}
             </div>
           </div>;
}

export default MessagingLayer;
