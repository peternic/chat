import React from 'react';
import { Chat, User } from '../types';
import classNames from 'classnames';

interface Props {
  chats: Array<Chat>;
  activeChat: string;
  setActiveChat: Function;
}

const ChatSelector: React.FC<Props> = ({
  chats,
  activeChat,
  setActiveChat,
}) => {
  return (
    <ul className='list-group'>
      {chats.map((chat) => {
        return (
          <li
            onClick={() => setActiveChat(chat.id)}
            key={chat.id}
            data-testid={`chatter-${chat.id}`}
            className={classNames({
              'list-group-item': true,
              active: chat.id === activeChat,
            })}
          >
            {chat.chatters.map((chatter) => chatter.name).join(' ')}
          </li>
        );
      })}
    </ul>
  );
};

export default ChatSelector;
