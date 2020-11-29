import React from 'react';

function Messages () {
    return <section className="section">
             <div className="container">
               <h1 className="title">Messages</h1>
               {/* <h2 className="subtitle"></h2> */}

               <section className="section">
                 <div className="container">
                   <h1 className="title is-4">INIT</h1>
                   {/* <h2 className="subtitle"></h2> */}
                 </div>
               </section>

               <section className="section">
                 <div className="container">
                   <h1 className="title is-4">RUN</h1>
                   {/* <h2 className="subtitle"></h2> */}
                 </div>
               </section>

               <section className="section">
                 <div className="container">
                   <h1 className="title is-4">DISCARD_ALL</h1>
                   {/* <h2 className="subtitle"></h2> */}
                 </div>
               </section>

               <section className="section">
                 <div className="container">
                   <h1 className="title is-4">PULL_ALL</h1>
                   {/* <h2 className="subtitle"></h2> */}
                 </div>
               </section>

               <section className="section">
                 <div className="container">
                   <h1 className="title is-4">ACK_FAILURE</h1>
                   {/* <h2 className="subtitle"></h2> */}
                 </div>
               </section>

               <section className="section">
                 <div className="container">
                   <h1 className="title is-4">RESET</h1>
                   {/* <h2 className="subtitle"></h2> */}
                 </div>
               </section>

               <section className="section">
                 <div className="container">
                   <h1 className="title is-4">RECORD</h1>
                   {/* <h2 className="subtitle"></h2> */}
                 </div>
               </section>

               <section className="section">
                 <div className="container">
                   <h1 className="title is-4">SUCCESS</h1>
                   {/* <h2 className="subtitle"></h2> */}
                 </div>
               </section>

               <section className="section">
                 <div className="container">
                   <h1 className="title is-4">FAILURE</h1>
                   {/* <h2 className="subtitle"></h2> */}
                 </div>
               </section>

               <section className="section">
                 <div className="container">
                   <h1 className="title is-4">IGNORED</h1>
                   {/* <h2 className="subtitle"></h2> */}
                 </div>
               </section>
             </div>
           </section>;
}

export default Messages;
