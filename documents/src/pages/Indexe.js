import React from 'react';

import INDEX_CORE from './IndexCore.js';

export { INDEX_CORE };

function Indexe (props) {
    const onChanged = (e) =>
          props.callbacks.changeCheck(e.target.getAttribute('code'));
    const clickClearAll = () => props.callbacks.clearAll();
    const clickCheckAll = () => props.callbacks.checkAll();

    return <section className="section">
             <div className="container">
               <h1 className="title">Index</h1>
               {/* <h2 className="subtitle"></h2> */}

               <div className="contents">
                 {props.source.map(d => {
                     return <div key={d.code}>
                        <label className="checkbox">
                          <input type="checkbox"
                                 checked={d.active}
                                 code={d.code}
                                 onChange={onChanged} />
                          <span style={{marginLeft: 8}}>
                            {d.label}
                          </span>
                        </label>
                      </div>;
                 })}
               </div>

               <div className="contents" style={{marginTop: 22}}>
                 <button className="button" onClick={clickClearAll}>
                   All Clear
                 </button>
                 <button className="button" onClick={clickCheckAll}>
                   All Check
                 </button>
               </div>

               <div className="contents" style={{marginTop: 22}}>
                 <a href={props.original_url}>本家サイト</a>
               </div>
            </div>
          </section>;
}

export default Indexe;
