import Conversation from "./Conversation"
import useGetConversations from "../../hooks/useGetConversations"
import getRandomEmoji from "../../utils/emoji"
function Conversations() {
 const {loading,conversations} =useGetConversations();
console.log("convos",conversations)

  return (
    <div className="py-2 flex flex-col overflow-auto">
      {
        conversations.map((convo,idx)=>(
          <Conversation key={convo._id} convo={convo} 
          emoji={getRandomEmoji()} 
          lastIdx={idx===conversations.length-1}/>
        ))
      }


      {loading ? <span className="loading loading-spinner"></span> : null}
    </div>
  )
}

export default Conversations;











// import Conversation from "./Conversation"
// import useGetConversations from "../../hooks/useGetConversations"
// function Conversations() {
//  const {loading,conversations} =useGetConversations();
// console.log("convos",conversations)

//   return (
//     <div className="py-2 flex flex-col overflow-auto">
//       <Conversation />
//       <Conversation />
//       <Conversation />
//       <Conversation />
//       <Conversation />
//       <Conversation />
//       <Conversation />
//     </div>
//   )
// }

// export default Conversations