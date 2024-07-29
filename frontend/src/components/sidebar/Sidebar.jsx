import toast from "react-hot-toast";
import useGetConversations from "../../hooks/useGetConversations";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";
import { useEffect, useState } from "react";

const Sidebar = () => {
  const { conversations } = useGetConversations();
  const [search, setSearch] = useState("");
  const [filteredConversations, setFilteredConversations] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    filter(search);
  };
  const filter = (str) => {
    if (str?.length < 3) {
      return toast.error("Search input must have min 3 characters");
    }
    const filteredconv = conversations.filter((el) => {
      return el.fullName.toLowerCase().includes(str.toLowerCase());
    });
    setFilteredConversations(filteredconv);
    console.log(filteredconv);
  };

  useEffect(() => {
    if (search.length < 3) {
      setFilteredConversations([]);
    }
  }, [search]);
  return (
    <div className="border-r border-slate-500 p-4 flex flex-col">
      <SearchInput
        handleSubmit={handleSubmit}
        search={search}
        setSearch={setSearch}
      />
      <div className="divider px-3"></div>
      <Conversations filteredConversations={filteredConversations} />
      <LogoutButton />
    </div>
  );
};
export default Sidebar;
