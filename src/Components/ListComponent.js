import React from 'react'

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