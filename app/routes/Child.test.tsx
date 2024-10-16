import React from 'react';
import { render } from '@testing-library/react';
import ChildComponent from './child';


describe('SimpleComponent', () => {
    test('should render wrapped in a RemixStub', () => {
        render(<ChildComponent />);
    })
});