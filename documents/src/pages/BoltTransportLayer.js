import React, { useState } from 'react';

import Index, { INDEX_CORE } from './Index.js';

import * as Sections from './transport/Sections.js';

function BoltTransportLayer () {
    const [menus, setMenus] = useState([
        { code:  '1', label: 'Sessions',                  active: true },
        { code:  '2', label: 'Connecting',                active: true },
        { code:  '3', label: 'Handshake',                 active: true },
        { code:  '4', label: 'Message Transfer Encoding', active: true },
        { code:  '5', label: 'Disconnecting',             active: true },
    ]);

    const callbacks = INDEX_CORE.callbacks(menus, setMenus);
    const isActive = (code) => INDEX_CORE.isActive (code, menus);
    return (
        <div style={{display:'flex'}}>
          <div>
            <Index source={menus}
                   original_url="https://boltprotocol.org/v1/#transport"
                   callbacks={callbacks} />
          </div>

          <div>
            {isActive('1')  && <Sections.Sessions />}
            {isActive('2')  && <Sections.Connecting />}
            {isActive('3')  && <Sections.Handshake />}
            {isActive('4')  && <Sections.MessageTransferEncoding />}
            {isActive('5')  && <Sections.Disconnecting />}
          </div>
        </div>
    );
}

export default BoltTransportLayer;
