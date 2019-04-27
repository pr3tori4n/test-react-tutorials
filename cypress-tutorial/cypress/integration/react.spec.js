import React from 'react';
import { mount } from 'enzyme';

class Foo extends React.Component {
    render() {
        return(
            <button onClick='alert("hi")'>Hello World</button>
        );
    }
}

describe('Foo', function () {
    it('should render without erroring', function () {
        mount(<Foo />);
    });
});
