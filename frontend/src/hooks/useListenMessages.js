import { useEffect } from "react";
import useConveration from "../zustand/useConveration";
import { useSocketContext } from "../context/SocketContext";
import notificationSound from "../assets/sounds/notification.mp3";

function useListenMessages() {
  const { socket } = useSocketContext();
  const { messages, setMessages } = useConveration();
  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      newMessage.shouldShake = true;
      const sound = new Audio(notificationSound);
      sound.play();
      setMessages([...messages, newMessage]);
    });
    return () => socket?.off("newMessage");
  }, [socket, setMessages, messages]);
}

export default useListenMessages;
