import React from 'react';
import { render } from '@testing-library/react';
import SimpleComponent from './SimpleComponent'; 

describe('SimpleComponent', () => {
    test('should render wrapped in a RemixStub', () => {
        render(<SimpleComponent />);
    })
});