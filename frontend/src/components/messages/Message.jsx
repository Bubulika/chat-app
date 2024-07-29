import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utils/extractTime";
import useConveration from "../../zustand/useConveration";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConveration();

  const fromMe = authUser._id === message.senderId;
  const profilePic = fromMe
    ? authUser.profilePic
    : selectedConversation.profilePic;
  const shakeClass = message.shouldShake ? "shake" : "";

  return (
    <div className={`chat ${fromMe ? "chat-end" : "chat-start"}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src={profilePic} alt="Tailwind CSS chat bubble component" />
        </div>
      </div>
      <div
        className={`chat-bubble text-white pb-2 ${
          fromMe ? "bg-sky-500" : ""
        } ${shakeClass}`}
      >
        {message.message}
      </div>
      <div className="chat-footer opacity-50 text-white text-xs flex gap-1 items-center">
        {extractTime(message.createdAt)}
      </div>
    </div>
  );
};
export default Message;
