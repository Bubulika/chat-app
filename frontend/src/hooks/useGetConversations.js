import { useEffect, useState } from "react";
import toast from "react-hot-toast";

function useGetConversations() {
  const [conversations, setConversations] = useState([]);

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function getUsers() {
      setLoading(true);

      try {
        const res = await fetch("/api/user");
        const data = await res.json();
        if (data.error) {
          throw new Error(data.error);
        }

        setConversations(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    }

    getUsers();
  }, []);

  return { loading, conversations };
}

export default useGetConversations;
