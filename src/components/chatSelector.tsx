import React from 'react';
import { Chat, User } from '../types';
import classNames from 'classnames';

interface Props {
  chats: Array<Chat>;
  activeUser: User;
  setActiveUser: Function;
}

const ChatSelector: React.FC<Props> = ({
  chats,
  activeUser,
  setActiveUser,
}) => {
  return (
    <ul className='list-group'>
      {chats.map((chat) => {
        return (
          <li
            onClick={() => setActiveUser(chat.chatter)}
            key={chat.chatter.id}
            data-testid={`chatter-${chat.chatter.id}`}
            className={classNames({
              'list-group-item': true,
              active: chat.chatter.id === activeUser.id,
            })}
          >
            {chat.chatter.name}
          </li>
        );
      })}
    </ul>
  );
};

export default ChatSelector;
