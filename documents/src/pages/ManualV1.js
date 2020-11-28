import React, { useState } from 'react';

import Hero from './Hero.js';
import Tabs from './Tabs.js';
import Overview from './Overview.js';
import BoltTransportLayer from './BoltTransportLayer.js';
import MessagingLayer from './MessagingLayer.js';
import MessageSerialization from './MessageSerialization.js';
import Examples from './Examples.js';

const selectedTab = (location, tabs) => {
    const params = new URLSearchParams(location.search);

    const tab_code = params.get('tab');

    const tab = tabs.find(d => d.code===tab_code);

    return tab || tabs[0];
};

function ManualV1 (props) {
    const [tabs] = useState([
        { code: 'overview',      label: 'Overview'              },
        { code: 'transport',     label: 'Bolt Transport Layer'  },
        { code: 'messaging',     label: 'Messaging layer'       },
        { code: 'serialization', label: 'Message Serialization' },
        { code: 'examples',      label: 'Examples'              },
    ]);

    const clickTab = (code) => {
        props.history.push({ search: `tab=${code}` });
    };

    const tab = selectedTab(props.location, tabs);
    const tab_code = tab.code;
    return (
        <div>
          <Hero />

          <Tabs source={tabs} selected={tab} callback={clickTab} />

          <div style={{width:1111, marginLeft: 'auto', marginRight: 'auto'}}>
            {tab_code==='overview' && <Overview />}
            {tab_code==='transport' && <BoltTransportLayer />}
            {tab_code==='messaging' && <MessagingLayer />}
            {tab_code==='serialization' && <MessageSerialization />}
            {tab_code==='examples' && <Examples />}
          </div>
        </div>
    );
}

export default ManualV1;
