import { useSocketContext } from "../../context/SocketContext";
import useConveration from "../../zustand/useConveration";

const Conversation = ({ conversation, lastIndex }) => {
  const { selectedConversation, setSelectedConversation } = useConveration();
  const { onlineUsers } = useSocketContext();
  const isSelected = conversation?._id === selectedConversation?._id;
  const isOnline = onlineUsers.includes(conversation._id);
  return (
    <>
      <div
        onClick={() => {
          setSelectedConversation(conversation);
        }}
        className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer ${
          isSelected ? "bg-sky-500" : ""
        }`}
      >
        <div className={`avatar ${isOnline ? "online" : ""}`}>
          <div className="w-12 rounded-full">
            <img src={conversation?.profilePic} alt="user avatar" />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-200">{conversation?.fullName}</p>
            {/* <span className="text-xl">🎃</span> */}
          </div>
        </div>
      </div>

      {!lastIndex && <div className="divider my-0 py-0 h-1" />}
    </>
  );
};
export default Conversation;
