import React from 'react';

import Sessions from './transport/Sessions.js';
import Connecting from './transport/Connecting.js';
import Handshake from './transport/Handshake.js';
import MessageTransferEncoding from './transport/MessageTransferEncoding.js';
import Disconnecting from './transport/Disconnecting.js';

function BoltTransportLayer () {
    return (
        <>
          <section className="section">
            <div className="container">
              {/* <h1 className="title"></h1> */}
              <h2 className="subtitle">
                <a href="https://boltprotocol.org/v1/#transport">本家サイト</a>
              </h2>
            </div>
          </section>

          <Sessions />
          <Connecting />
          <Handshake />
          <MessageTransferEncoding />
          <Disconnecting />
        </>
    );
}

export default BoltTransportLayer;
