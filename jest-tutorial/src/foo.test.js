import React from 'react';
import { mount } from 'enzyme';
import Foo from './foo';

describe("Sample", function() {
    it("should pass", function() {
      expect(true).toBe(true);
    });
});

describe("React", function() {
    it("should render without failing", function() {
        mount(<Foo />);
    });
});