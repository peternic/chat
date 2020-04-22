import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { User } from '../types';

interface Props {
  friends: Array<User>;
  createChat: Function;
}

const NewChat: React.FC<Props> = ({ friends, createChat }) => {
  const [hidden, setHidden] = useState(true);

  const submitNewChat = (event: any) => {
    event.preventDefault();
  };

  return (
    <>
      <button className='btn btn-primary' onClick={() => setHidden(false)}>
        New chat
      </button>
      <form onSubmit={submitNewChat}>
        <select name='friends' id='friendSelect'>
          {friends.map((friend) => (
            <option value={friend.id}>{friend.name}</option>
          ))}
          <option value='cat'>Cat</option>
        </select>
        <button>Go!</button>
      </form>
      <button onClick={() => setHidden(true)}>Cancel</button>
    </>
  );
};

export default NewChat;
