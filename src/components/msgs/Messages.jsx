import { useEffect,useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../../skeletons/MessageSkeleton";
import Message from "./Message";
import useListenMessages from "../../hooks/useListenMessages";
function Messages() {
  const {messages,loading}=useGetMessages();
  useListenMessages();
  const lastMessageRef=useRef()

  // console.log("msgs",messages)
  useEffect(()=>{
    setTimeout(()=>{
      lastMessageRef.current?.scrollIntoView({behavior:"smooth"})
    },100)

  },[messages])



  return (
    <div className="px-4 flex-1 overflow-auto">
     {!loading &&
				messages.length > 0 &&
				messages.map((message) => (
					<div key={message._id} ref={lastMessageRef}>
						<Message message={message} />
					</div>
				))}

    {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)
    }
    {
      !loading && messages.length===0 && (
        <p className="text-center">Send a Message to start the conversation</p>
      )

    }

    </div>
  )
}

export default Messages;





// import useGetMessages from "../../hooks/useGetMessages";
// import Message from "./Message";
// function Messages() {
//   const {messages,loading}=useGetMessages();

//   console.log("msgs",messages)



//   return (
//     <div className="px-4 flex-1 overflow-auto">
//       <Message/>
//       <Message/>
//       <Message/>
//       <Message/>
//       <Message/>
//       <Message/>
//       <Message/>
//       <Message/>
//     </div>
//   )
// }

// export default Messages;