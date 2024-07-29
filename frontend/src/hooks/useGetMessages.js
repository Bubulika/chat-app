import { useEffect, useState } from "react";
import useConveration from "../zustand/useConveration";
import toast from "react-hot-toast";

function useGetMessages() {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConveration();

  useEffect(() => {
    async function getMessages() {
      setLoading(true);

      try {
        const res = await fetch(`/api/messages/${selectedConversation?._id}`);
        const data = await res.json();
        if (data.error) throw new Error(data.error);
        setMessages(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    }
    if (selectedConversation._id) {
      getMessages();
    }
  }, [setMessages, selectedConversation?._id]);

  return { loading, messages };
}

export default useGetMessages;
