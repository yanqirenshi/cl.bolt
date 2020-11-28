import React from 'react';

const isActive = (d, props) => {
    return d.code===props.selected.code ? "is-active" : null;
};

function Tabs (props) {
    const clickTab = (e) => {
        let tag = e.target;

        while (tag.nodeName!=='LI')
            tag = tag.parentNode;

        props.callback(tag.getAttribute('tab_code'));
    };

    return (
        <div className="tabs is-boxed is-centered">
          <ul>
            {props.source.map((d) => {
                return <li key={d.code}
                           className={isActive(d, props)}
                           tab_code={d.code}
                           onClick={clickTab} >
                         <a>
                           <span>{d.label}</span>
                         </a>
                       </li>;
            })}
          </ul>
        </div>
    );
}

export default Tabs;
