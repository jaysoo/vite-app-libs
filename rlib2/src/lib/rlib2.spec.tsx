import { render } from '@testing-library/react';

import Rlib2 from './rlib2';

describe('Rlib2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Rlib2 />);
    expect(baseElement).toBeTruthy();
  });
});
