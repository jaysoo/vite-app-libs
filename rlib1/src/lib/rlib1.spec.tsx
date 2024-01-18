import { render } from '@testing-library/react';

import Rlib1 from './rlib1';

describe('Rlib1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Rlib1 />);
    expect(baseElement).toBeTruthy();
  });
});
