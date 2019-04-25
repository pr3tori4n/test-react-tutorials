import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import Foo from './foo';

describe('Foo', function () {
    it('should render without erroring', function () {
        render(<Foo />);
    });
});