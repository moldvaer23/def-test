import { FC, useEffect, useRef, useState } from "react";
import { PageWebsocketUi } from "../ui";
import { CONFIG_WEBSOCKET_URL } from "../config";

export const PageWebsocket: FC = () => {
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [isConnecting, setIsConnecting] = useState<boolean>(false);
  const [receivedMessages, setReceivedMessages] = useState<string[]>([]);
  const [ws, setWs] = useState<WebSocket | null>(null);
  const message = "Hello webSocket";
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const onClickSend = () => {
    if (ws) ws.send(message);
  };

  /* При первом рендере создаем websocket соединение */
  useEffect(() => {
    /* Создаем WebSocket соединение */
    const websocket = new WebSocket(CONFIG_WEBSOCKET_URL);
    setIsConnecting(true);

    /* Обработчик открытия соединения */
    websocket.onopen = () => {
      setWs(websocket);
      setIsConnecting(false);
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
    <PageWebsocketUi
      message={message}
      onClickSend={onClickSend}
      receivedMessages={receivedMessages}
      isConnected={isConnected}
      isConnecting={isConnecting}
      ref={messagesEndRef}
    />
  );
};
