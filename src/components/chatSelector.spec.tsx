import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ChatSelector from './chatSelector';

describe('chat', () => {
  it('shall show that the active user chat', () => {
    const { getByTestId } = render(
      <ChatSelector
        chats={[
          { id: '1', chatter: { id: '1', name: 'Jane' } },
          { id: '2', chatter: { id: '2', name: 'Tarzan' } },
        ]}
        activeUser={{ id: '1', name: 'Jane' }}
        setActiveUser={jest.fn()}
      />
    );
    const activeUserElement = getByTestId('chatter-1');
    expect(activeUserElement).toHaveClass('active');
  });

  it('shall show the none active users', () => {
    const { getByTestId } = render(
      <ChatSelector
        chats={[
          { id: '1', chatter: { id: '1', name: 'Jane' } },
          { id: '2', chatter: { id: '2', name: 'Tarzan' } },
        ]}
        activeUser={{ id: '1', name: 'Jane' }}
        setActiveUser={jest.fn()}
      />
    );
    const nonActiveUserElement = getByTestId('chatter-2');
    expect(nonActiveUserElement).not.toHaveClass('active');
  });

  it('shall be able to switch chats', () => {
    const setActiveUserSpy = jest.fn();
    const { getByTestId } = render(
      <ChatSelector
        chats={[
          { id: '1', chatter: { id: '1', name: 'Jane' } },
          { id: '2', chatter: { id: '2', name: 'Tarzan' } },
        ]}
        activeUser={{ id: '1', name: 'Jane' }}
        setActiveUser={setActiveUserSpy}
      />
    );
    fireEvent.click(getByTestId('chatter-2'));
    expect(setActiveUserSpy).toBeCalledWith({ id: '2', name: 'Tarzan' });
  });
});
