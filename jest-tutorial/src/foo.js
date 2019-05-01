import React from 'react';

export class Foo extends React.Component {
    render() {
        return(
            <button onClick='alert("hi")'>Hello World</button>
        );
    }
}

export default Foo;