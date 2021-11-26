import classNames from 'classnames';
import { useEffect, useRef, useState } from 'react';
import { getChat } from '../server/getFromServer';
import { postChat } from '../server/postToServer';

export const ChatBoard = ({ selectedChat }) => {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState(getChat() || []);

  const sendMessage = async (from, text) => {
    if (!text) {
      return;
    }

    setMessage('');

    const fromUser = {
      uid: from,
      from: 'user',
      time: new Date().toLocaleTimeString(),
      text,
    };

    const fromBot = {
      uid: from,
      from: 'bot',
      time: new Date().toLocaleTimeString(),
      text: '',
    };

    await fetch(
      `https://acobot-brainshop-ai-v1.p.rapidapi.com/get?bid=178&key=sX5A2PcYZbsN5EY6&uid=${from}&msg=${text}`,
      {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'acobot-brainshop-ai-v1.p.rapidapi.com',
          'x-rapidapi-key':
            'c07d60815dmsh74b28067c3f1e0dp109a4ajsn64c2d0a5b6c0',
        },
      }
    )
      .then((response) => response.text())
      .then((response) => (fromBot.text = JSON.parse(response).cnt));

    const data = [...chat, fromUser, fromBot];

    postChat(data);
    setChat(getChat());
  };

  const botttom = useRef(null);

  const scrollToBottom = () => {
    botttom.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [chat])

  return (
    <>
      {selectedChat.hasOwnProperty('email') ? (
        <div className="chat-board">
          <div className="chat-area">
            {chat
              .filter((item) => item.uid === selectedChat.email)
              .map((mess) => (
                <div
                  // key={mess.email}
                  className={classNames('chat-area__text', {
                    'chat-area__text--user': mess.from === 'user',
                    'chat-area__text--bot': mess.from === 'bot',
                  })}
                >
                  <p className="chat-area__text-mess">{mess.text}</p>
                  <p className="chat-area__text-time">{mess.time}</p>
                </div>
              ))}
          </div>

          <div ref={botttom} className="chat-area__send-message">
            <input
              onKeyPress={(event) =>
                event.key === 'Enter' &&
                sendMessage(selectedChat.email, message)
              }
              autoFocus
              className="chat-area__message"
              type="text"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Message"
            />

            <button
              onClick={() => sendMessage(selectedChat.email, message)}
              className="chat-area__button"
            ></button>
          </div>
        </div>
      ) : (
        <h2>Select chat</h2>
      )}
    </>
  );
};
