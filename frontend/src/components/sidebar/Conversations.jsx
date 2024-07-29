import useGetConversations from "../../hooks/useGetConversations.js";
import Conversation from "./Conversation";

const Conversations = ({ filteredConversations }) => {
  const { loading, conversations } = useGetConversations();

  return (
    <div className="py-2 flex flex-col overflow-auto">
      {filteredConversations?.length > 0
        ? filteredConversations.map((item, i) => {
            return (
              <Conversation
                conversation={item}
                key={item._id}
                lastIndex={conversations.length - 1 === i}
              />
            );
          })
        : conversations.map((item, i) => {
            return (
              <Conversation
                conversation={item}
                key={item._id}
                lastIndex={conversations.length - 1 === i}
              />
            );
          })}
      {loading && <span className="loading loading-spinner"></span>}
    </div>
  );
};
export default Conversations;
