import React from 'react';
import ChildComponent from '../../routes/child';
import { render } from '@testing-library/react'
import { json } from '@remix-run/node';
import { createRemixStub } from '@remix-run/testing';


describe('SimpleComponent', () => {
    test('should render wrapped in a RemixStub', async () => {
        const RemixStub = createRemixStub([
            {
              path: "/",
              Component: ChildComponent,
              loader() {
                return json({ child: true });
              },
            },
          ]);
        await render(<RemixStub />);
    })
});