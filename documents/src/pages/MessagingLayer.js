import React from 'react';

import Initialization from './messaging/Initialization.js';
import Pipelining from './messaging/Pipelining.js';
import FailureHandling from './messaging/FailureHandling.js';
import Messages from './messaging/Messages.js';

function MessagingLayer () {
    return (
        <>
          <section className="section">
            <div className="container">
              {/* <h1 className="title">Messaging Layer</h1> */}
              <h2 className="subtitle">
                <a href="https://boltprotocol.org/v1/#messaging">本家サイト</a>
              </h2>
            </div>
          </section>

          <Initialization />
          <Pipelining />
          <FailureHandling />
          <Messages />
        </>
    );
}

export default MessagingLayer;
