import React, { useRef } from 'react';
import { Message } from '../types';
import classNames from 'classnames';

interface Props {
  messages: Array<Message>;
}

const ChatMessages: React.FC<Props> = ({ messages }) => {
  const messagesBox = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesBox?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  React.useEffect(scrollToBottom, [messages]);

  return (
    <>
      {!messages.length ? (
        <h6 data-testid='no-messages' className='text-black-50 my-3'>
          This is the first time you text
        </h6>
      ) : (
        messages
          .sort(
            (msgOne: Message, msgTwo: Message) =>
              msgOne.timestamp - msgTwo.timestamp
          )
          .map((message: Message) => {
            const isUser = message.user === '0';
            return (
              <div
                data-testid='message'
                key={message.id}
                className={classNames('my-3', { 'text-right': isUser })}
              >
                <span
                  className={classNames('bg-success py-2 px-2', {
                    'bg-warning': isUser,
                    'bg-light': !isUser,
                  })}
                >
                  {message.text}
                </span>
              </div>
            );
          })
      )}
      <div ref={messagesBox} />
    </>
  );
};

export default ChatMessages;
