import React from 'react';

export class Foo extends React.Component {
    sayHi() {
        alert('hi');
    }
    render() {
        return(
            <button onClick={this.sayHi}>Hello World</button>
            // <button onClick='alert("hi")'>Hello World</button>
        );
    }
}

export default Foo;