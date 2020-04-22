import React, { useEffect, useRef, useState, ChangeEvent } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface Props {
  sendMessage: Function;
  activeChat?: string;
}

const ChatForm: React.FC<Props> = ({ sendMessage, activeChat = '1' }) => {
  const formRef = useRef<HTMLFormElement>(null);

  const [text, setText] = useState<{ [id: string]: string }>({
    '1': 'Hello',
  });

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
    updateText('');
  };

  const updateText = (value: string) => {
    setText((previousState) => ({
      ...previousState,
      [activeChat]: value,
    }));
  };

  useEffect(() => {
    console.log('active', activeChat);

    formRef.current?.reset();
  }, [activeChat]);

  const storeTextOnChat = (event: any) => {
    const value = event.target.value;
    updateText(value);
  };

  return (
    <>
      <form onSubmit={submitMessage} ref={formRef}>
        <input
          data-testid='messageContent'
          type='text'
          name='message'
          required
          autoComplete='off'
          className='mr-3'
          value={text[activeChat] || ''}
          onChange={storeTextOnChat}
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
