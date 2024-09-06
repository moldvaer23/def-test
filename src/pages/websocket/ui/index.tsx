import { forwardRef } from "react";

import "./style.css";

type TProps = {
  message: string;
  onClickSend: () => void;
  receivedMessages: string[];
  isConnected: boolean;
  isConnecting: boolean;
};

export const PageWebsocketUi = forwardRef<HTMLDivElement, TProps>(
  function PageWebsocketUi(props, ref) {
    const {
      message,
      onClickSend,
      receivedMessages,
      isConnected,
      isConnecting,
    } = props;

    return (
      <div className="websocket__wrapper">
        <div className="websocket__wrapper-header">
          <h2 className="title">WebSocket подключение</h2>
          {isConnecting && <span>Подключаемся...</span>}
          <button
            className="button"
            disabled={!isConnected}
            onClick={onClickSend}>
            Отправить {message}
          </button>
        </div>
        <div className="websocket__wrapper-messages">
          <h3>Полученные сообщения:</h3>
          <ul className="messages__list">
            {receivedMessages.map((data, index) => (
              <li key={index}>Received message: {data};</li>
            ))}
            <div ref={ref} />
          </ul>
        </div>
      </div>
    );
  }
);
