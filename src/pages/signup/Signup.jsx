import { Link } from "react-router-dom"
import GenderCheckbox from "./GenderCheckbox"
import { useState } from "react"
import useSignup from "../../hooks/useSignup"
function Signup() {
const [inputs,setInputs]=useState({
  fullName:"",
  username:"",
  password:"",
  confirmPassword:"",
  gender:"",
})

const {loading,signup}=useSignup();
const handleCheckBoxChange=async(gender)=>{
  setInputs({...inputs,gender})
}

const handleSubmit=async(e)=>{
  e.preventDefault();
  // console.log(inputs)
 await signup (inputs);
}


  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
      <h1 className='text-3xl font-semibold text-center text-gray-300'>SignUp
      <span className='text-blue-500'>ChatApp</span>
      </h1>
      <form onSubmit={handleSubmit}>
        {/* fullname */}
        <div >
          <label className='label p-2'><span className='text-base label-text'>
          Full Name</span></label>
          <input className='w-full input input-bordered h-10' type="text"placeholder='John Doe' value={inputs.fullName} onChange={(e)=> setInputs({...inputs,fullName:e.target.value})}/>
        </div>
        {/* username */}
        <div >
          <label className='label p-2'><span className='text-base label-text'>
         Username</span></label>
          <input className='w-full input input-bordered h-10' type="text"placeholder='Enter Username'  value={inputs.username} onChange={(e)=> setInputs({...inputs,username:e.target.value})}/>
        </div>
        {/* password */}
        <div >
          <label className='label p-2'><span className='text-base label-text'>
          Password</span></label>
          <input className='w-full input input-bordered h-10' type="password"placeholder='Enter Password'  value={inputs.password} onChange={(e)=> setInputs({...inputs,password:e.target.value})}/>
        </div>
          {/* confirm password */}
          <div >
          <label className='label p-2'><span className='text-base label-text'>
          Confirm Password</span></label>
          <input className='w-full input input-bordered h-10' type="password"placeholder='Enter Password'  value={inputs.confirmPassword} onChange={(e)=> setInputs({...inputs,confirmPassword:e.target.value})}/>
        </div>
        {/* gender checkbox */}
      <GenderCheckbox onCheckboxChange={handleCheckBoxChange} selectedGender={inputs.gender}/>


        <Link to="/login" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>Already have an accout?</Link>

         {/* button to submit */}
      <div>
        <button className='btn btn-block btn-sm mt-2' disabled={loading}>
          {loading ? <span className="loading loading-spinner"></span> : 'SignUp'}
        </button>
      </div>

      </form>

      </div>
      
    </div>
  )
}

export default Signup








// import GenderCheckbox from "./GenderCheckbox"
// function Signup() {
//   return (
//     <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//       <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
//       <h1 className='text-3xl font-semibold text-center text-gray-300'>SignUp
//       <span className='text-blue-500'>ChatApp</span>
//       </h1>
//       <form>
//         {/* fullname */}
//         <div >
//           <label className='label p-2'><span className='text-base label-text'>
//           Full Name</span></label>
//           <input className='w-full input input-bordered h-10' type="text"placeholder='John Doe'/>
//         </div>
//         {/* username */}
//         <div >
//           <label className='label p-2'><span className='text-base label-text'>
//          Username</span></label>
//           <input className='w-full input input-bordered h-10' type="text"placeholder='Enter Username'/>
//         </div>
//         {/* password */}
//         <div >
//           <label className='label p-2'><span className='text-base label-text'>
//           Password</span></label>
//           <input className='w-full input input-bordered h-10' type="password"placeholder='Enter Password'/>
//         </div>
//           {/* confirm password */}
//           <div >
//           <label className='label p-2'><span className='text-base label-text'>
//           Confirm Password</span></label>
//           <input className='w-full input input-bordered h-10' type="password"placeholder='Enter Password'/>
//         </div>
//         {/* gender checkbox */}
//       <GenderCheckbox/>


//         <a href="#" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>Already have an accout?</a>

//          {/* button to submit */}
//       <div>
//         <button className='btn btn-block btn-sm mt-2'>SignUp</button>
//       </div>

//       </form>

//       </div>
      
//     </div>
//   )
// }

// export default Signup