import React from 'react';
import { v4 as uuidv4 } from 'uuid';

interface Props {
  sendMessage: Function;
  activeChat?: string;
}

const ChatForm: React.FC<Props> = ({ sendMessage, activeChat }) => {
  const submitMessage = (event: any) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const message = data.get('message')?.toString();
    if (message) {
      sendMessage({
        id: uuidv4(),
        chat: activeChat,
        user: '0',
        text: message,
        timestamp: new Date().getTime(),
      });
    }
    event.target.reset();
  };

  return (
    <>
      <form onSubmit={submitMessage}>
        <input
          data-testid='messageContent'
          type='text'
          name='message'
          required
          autoComplete='off'
          className='mr-3'
        />
        <button
          type='submit'
          className='btn btn-primary'
          data-testid='submitMessage'
          disabled={!activeChat}
        >
          Send
        </button>
      </form>
    </>
  );
};

export default ChatForm;
