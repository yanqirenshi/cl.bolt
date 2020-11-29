import React, { useState } from 'react';

import Indexe, { INDEX_CORE } from './Indexe.js';

import * as section from './serialization/Sections.js';

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

    const callbacks = {
        changeCheck: (menu_code) => setMenus(INDEX_CORE.changeCheck(menu_code, menus)),
        clearAll: () => setMenus(INDEX_CORE.clearAll(menus)),
        checkAll: () => setMenus(INDEX_CORE.checkAll(menus)),
    };

    const isActive = (code) => menus.find(d=>d.code===code).active;
    return (
        <>
          <div style={{display:'flex'}}>
            <div>
              <Indexe source={menus}
                      original_url="https://boltprotocol.org/v1/#serialization"
                      callbacks={callbacks} />
            </div>

            <div>
              {isActive('1')  && <section.Overview />}
              {isActive('2')  && <section.Markers />}
              {isActive('3')  && <section.SizedValues />}
              {isActive('4')  && <section.Null />}
              {isActive('5')  && <section.Booleans />}
              {isActive('6')  && <section.Integers />}
              {isActive('7')  && <section.FloatingPointNumbers />}
              {isActive('8')  && <section.String />}
              {isActive('9')  && <section.Lists />}
              {isActive('10') && <section.Maps />}
              {isActive('11') && <section.Structures />}
              {isActive('12') && <section.GraphTypeStructures />}
              {isActive('13') && <section.MarkerTable />}
            </div>
          </div>
        </>
    );
}

export default MessageSerialization;
