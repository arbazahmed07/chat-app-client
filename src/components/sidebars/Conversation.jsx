import { useSocketContext } from "../../context/SocketContext";
import useConversation from "../../zustand/useConversation"

function Conversation({convo,emoji,lastIdx}) {
  const {selectedConversation,setSelectedConversation}=useConversation();
  const isSelected=selectedConversation?._id === convo._id;

const {onlineUsers}=useSocketContext();
const isOnline=onlineUsers.includes(convo._id);







  return (
    <>
    <div className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 cursor-pointer 
      ${isSelected ? "bg-sky-500" : ""}`} 
      onClick={()=>setSelectedConversation(convo)}>
      {/* avatar  */}
      <div className={`avatar ${isOnline ? "online" : " "}`}>
        <div className="w-12 rounded-full">
          <img src={convo.profilePic} alt="user avatar" />
        </div>
      </div>
      <div className="flex flex-col flex-1">
        <div>
          <p className="font-bold text-gray-200">{convo.fullName}</p>
          <span className="text-xl justify-between">{emoji}</span>
        </div>
      </div>

    </div>
   {!lastIdx &&  <div className="divider my-0 py-0 h-1"></div>}
    </>
  )
}

export default Conversation





// function Conversation() {
//   return (
//     <>
//     <div className="flex gap-2 items-center hover:bg-sky-500 rounded p-2 cursor-pointer">
//       {/* avatar  */}
//       <div className="avatar online">
//         <div className="w-12 rounded-full">
//           <img src="https://avatar.iran.liara.run/public/boy?" alt="user avatar" />
//         </div>
//       </div>
//       <div className="flex flex-col flex-1">
//         <div>
//           <p className="font-bold text-gray-200">John Doe</p>
//           <span className="text-xl justify-between">😁</span>
//         </div>
//       </div>
      
//     </div>
//     <div className="divider my-0 py-0 h-1"></div>
//     </>
//   )
// }

// export default Conversation