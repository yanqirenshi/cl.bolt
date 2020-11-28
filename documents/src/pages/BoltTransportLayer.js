import React from 'react';

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

          <section className="section">
            <div className="container">
              <h1 className="title">Sessions</h1>
              {/* <h2 className="subtitle"></h2> */}
            </div>
          </section>

          <section className="section">
            <div className="container">
              <h1 className="title">Connecting</h1>
              {/* <h2 className="subtitle"></h2> */}
            </div>
          </section>

          <section className="section">
            <div className="container">
              <h1 className="title">Handshake</h1>
              {/* <h2 className="subtitle"></h2> */}
            </div>
          </section>

          <section className="section">
            <div className="container">
              <h1 className="title">Message transfer encoding</h1>
              {/* <h2 className="subtitle"></h2> */}
            </div>
          </section>

          <section className="section">
            <div className="container">
              <h1 className="title">Disconnecting</h1>
              {/* <h2 className="subtitle"></h2> */}
            </div>
          </section>
        </>
    );
}

export default BoltTransportLayer;
