import { Link } from "react-router-dom"

export default ()=>{
    return (
        <>
        <header>
            <nav className="flex bg-black p-4">
                <img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_828/v1710482648/feature/rebranding/disney-plus-logo.svg" alt="" height={100} width={100} />
            </nav>
        </header>
        <div className="flex items-center justify-center bg-[url(castle.jpg)] bg-cover h-screen w-screen">
          
        <div className="flex items-center justify-center gap-4 flex-col">
                <input className="text-xl rounded-lg p-4" type="name" id="name" name="name" placeholder="user name..." />
                <input className="text-xl rounded-lg p-4" type="Age" id="age" name="Age" placeholder="Enter age.." /> 
                <input className="text-xl rounded-lg p-4" type="text" id="text" name="text" placeholder="text" />
                <Link to="/details"><button className="flex p-4 bg-blue-950 hover:bg-gradient-to-r from-blue-950 transition-all duration-200 text-white rounded">Subscribe</button></Link> 
        </div>
        </div>
        </>
    )
}