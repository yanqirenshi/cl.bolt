import React from 'react';

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

          <section className="section">
            <div className="container">
              <h1 className="title">Initialization</h1>
              {/* <h2 className="subtitle"></h2> */}
            </div>
          </section>

          <section className="section">
            <div className="container">
              <h1 className="title">Pipelining</h1>
              {/* <h2 className="subtitle"></h2> */}
            </div>
          </section>

          <section className="section">
            <div className="container">
              <h1 className="title">Failure handling</h1>
              {/* <h2 className="subtitle"></h2> */}
            </div>
          </section>

          <section className="section">
            <div className="container">
              <h1 className="title">Messages</h1>
              {/* <h2 className="subtitle"></h2> */}
            </div>
          </section>
        </>
    );
}

export default MessagingLayer;
