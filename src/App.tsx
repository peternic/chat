import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Message } from './types';
import ChatMessages from './components/chatMessages';
import ChatForm from './components/chatForm';
import ChatSelector from './components/chatSelector';

const App = () => {
  const [activeChat, setActiveChat] = useState('1');

  const [chats] = useState([
    {
      id: '1',
      chatters: [
        { id: '1', name: 'Peter' },
        { id: '2', name: 'John' },
      ],
    },
    { id: '2', chatters: [{ id: '2', name: 'John' }] },
  ]);

  const [messages, setMessages] = useState([
    {
      id: uuidv4(),
      chat: '1',
      user: '0',
      text: 'Hi, how are you?',
      timestamp: 1586157368923,
    },
    {
      id: uuidv4(),
      chat: '1',
      user: '1',
      text: 'Hi, I am good, thanks!',
      timestamp: 1586157468923,
    },
    {
      id: uuidv4(),
      chat: '1',
      user: '2',
      text: 'Hi, all!',
      timestamp: 1586157468923,
    },
    {
      id: uuidv4(),
      chat: '1',
      user: '1',
      text: 'How are you?',
      timestamp: 1586157468923,
    },
  ]);

  const sendMessage = (message: Message) => {
    setMessages((previousState) => [...previousState, message]);
  };

  return (
    <div className='container bg-white mt-5 pb-5 border border-dark'>
      <div className='row'>
        <div className='col'>
          <h2>Chatty</h2>
        </div>
      </div>
      <div className='row'>
        <div className='col-3'>
          <div className='container'>
            <div className='row'>
              <div className='col-sm'>
                <ChatSelector
                  chats={chats}
                  activeChat={activeChat}
                  setActiveChat={setActiveChat}
                />
              </div>
            </div>
          </div>
        </div>
        <div className='col-6'>
          <div className='row'>
            <div className='container'>
              <div className='row'>
                <div
                  className='col overflow-auto border border-secondary'
                  style={{ height: '500px' }}
                >
                  <ChatMessages
                    messages={messages.filter(
                      (message) => message.chat === activeChat
                    )}
                  />
                </div>
              </div>
              <div className='row align-items-end'>
                <div className='col pl-0 mt-2'>
                  <ChatForm activeChat={activeChat} sendMessage={sendMessage} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='row'></div>
    </div>
  );
};

export default App;
