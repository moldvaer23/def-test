import { FC, useEffect, useRef, useState } from "react";

import "./style.css";

export const CONFIG_WEBSOCKET_URL = "wss://echo.websocket.org";

export const PageWebsocket: FC = () => {
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [receivedMessages, setReceivedMessages] = useState<string[]>([]);
  const [ws, setWs] = useState<WebSocket | null>(null);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const message = "Hello webSocket";

  const onClickSend = () => {
    if (ws) ws.send(message);
  };

  /* При первом рендере создаем websocket соединение */
  useEffect(() => {
    /* Создаем WebSocket соединение */
    const websocket = new WebSocket(CONFIG_WEBSOCKET_URL);

    /* Обработчик открытия соединения */
    websocket.onopen = () => {
      setWs(websocket);
      setIsConnected(true);
    };

    /* Обработчик получения сообщений */
    websocket.onmessage = (event) => {
      setReceivedMessages((prev) => [...prev, event.data]);
    };

    /* Обработчик закрытия соединения */
    websocket.onclose = () => {
      console.log("WebSocket соединение закрыто");
      setIsConnected(false);
      setWs(null);
    };

    /* Очистка соединения при размонтировании компонента */
    return () => {
      websocket.close();
    };
  }, []);

  /* При изменении массива сообщений скролим список в низ */
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [receivedMessages]);

  return (
    <div className="websocket__wrapper">
      <div className="websocket__header">
        <h2 className="title">WebSocket подключение</h2>

        {/* Если нету подключения говорим о том что выполняем его */}
        {!isConnected && <span>Подключаемся...</span>}

        <button
          className="button"
          disabled={!isConnected}
          onClick={onClickSend}>
          Отправить {message}
        </button>
      </div>

      <div className="websocket__messages">
        <h3>Полученные сообщения:</h3>

        <ul className="messages__list">
          {receivedMessages.map((data, index) => (
            <li key={index}>Received message: {data};</li>
          ))}
          <div ref={messagesEndRef} />
        </ul>
      </div>
    </div>
  );
};
