import React from 'react';
import { render } from 'enzyme';
import Foo from './foo';

describe('Foo', function () {
    it('should render without erroring', function () {
        render(<Foo />);
    });
});