import React from 'react';
import '../css/List.css'

function List(props) {
    return (
        <section>
            <ul>
                {props.children}
            </ul>
        </section>
    );
}

export {List};