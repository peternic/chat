import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Chat from './chatForm';

describe('chat', () => {
  it('shall send message', () => {
    const sendMessageMock = jest.fn();
    const { getByTestId } = render(
      <Chat activeChat='1' sendMessage={sendMessageMock} />
    );
    fireEvent.change(getByTestId('messageContent'), {
      target: { value: 'Hi there' },
    });

    fireEvent.click(getByTestId('submitMessage'));
    expect(sendMessageMock).toBeCalledWith(
      expect.objectContaining({
        chat: '1',
        user: '0',
        text: 'Hi there',
      })
    );
  });
});
