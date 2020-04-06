import React from 'react';
import { render } from '@testing-library/react';
import ChatMessages from './chatMessages';

describe('chat', () => {
  it('shall render chat messages in chat window', () => {
    jest.spyOn(React, 'useEffect').mockReturnValueOnce();
    const mockMessage = {
      id: '1',
      chat: '1',
      text: 'Hi',
      user: '0',
      timestamp: 1586157468923,
    };
    const { getByTestId } = render(<ChatMessages messages={[mockMessage]} />);
    const messageElement = getByTestId('message');
    expect(messageElement.textContent).toBe('Hi');
  });
});
