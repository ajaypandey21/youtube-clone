import { useDispatch } from "react-redux";
import { hamNAV } from "../utils/NavSlice";


function Header() {
    const dispatch = useDispatch(); 
    const collapse=()=>{
        dispatch(hamNAV())
}
  return (
<div className="grid grid-flow-col p-3 shadow-lg">
    <div className="flex col-span-2 ">
        <img className="h-8 cursor-pointer" src="https://static.thenounproject.com/png/2832810-200.png" alt="icon" onClick={()=>collapse()}/>
        <a href="/">
        <img className="h-6 cursor-pointer mt-1 ml-5" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1024px-YouTube_Logo_2017.svg.png" alt="Youtube"/>
        </a>
    </div>
    <div className="col-span-11">
        <input className="border border-gray-400 rounded-l-full p-1 w-1/2" type="text"></input>
        <button className="border border-gray-400 px-4 py-1 rounded-r-full bg-gray-300">Search</button>

    </div>
    <div className="col-span-1">
        <img className="h-8 "src="https://cdn-icons-png.flaticon.com/512/666/666201.png" alt="user" />  
    </div>

</div>


  )
}

export default Header;