import SearchInput from "./SearchInput";
import Conversations from "./Conversations"
import LogoutButton from "./LogoutButton"
function Sidebar (){
	return (
		<div className='border-r border-slate-500 p-4 flex flex-col'>
			<SearchInput />
			<div className='divider px-3'></div>
			<Conversations />
			<LogoutButton />
		</div>
	);
};
export default Sidebar;




// import SearchInput from "./SearchInput";
// import Conversations from "D:/Chat-App/client/src/components/sidebar/Conversations.jsx"
// function Sidebar (){
// 	return (
// 		<div className='border-r border-slate-500 p-4 flex flex-col'>
// 			<SearchInput />
// 			<div className='divider px-3'></div>
// 			<Conversations />
// 			{/* <LogoutButton /> */}
// 		</div>
// 	);
// };
// export default Sidebar;


