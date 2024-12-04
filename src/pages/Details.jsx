export default ()=>{
    return( 
        <>
        <div className="grid grid-cols-3 gap-4 ">
<div className="flex items-center justify-center border-2 border-blue-700 hover:shadow-white hover:shadow-lg hover:scale-110 transition-all duration-200 flex-col gap-4 bg-black  p-4 text-center bg-clip-border ">
<img width={100} height={100} src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_828/v1710482648/feature/rebranding/disney-plus-logo.svg" alt="" />
<p className="text-white text-center">Thousands of movies and shows from disney <br /> pixar marvel starwars,
and national geographic
</p>
<div className="flex items-center jsuitfy-center text-white flex-col text-4xl">
<h1 className="text-4xl"><span>£</span>7,99/mo</h1>
    <button className="bg-blue-700 flex items-center rounded-lg text-white tracking-widest p-4">Get disney +</button>
</div>
</div>
<div className="bg-black flex items-center justify-center p-10 flex-col text-white gap-10 text-center border-blue-700 border-2">
<img height={100} width={100} src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_828/v1710482648/feature/rebranding/disney-plus-logo.svg" alt="" />
<p>
    12 months included of award winning classics and <br />
    exclusive new hits for the price of  10 months
</p>
<div className="flex items-center justify-center flex-col gap-10">
    <h1 className="text-4xl"> <span>£</span>79.99/yr</h1>
    <button className="bg-blue-700 text-white rounded-lg tracking-widest hover:to-blue-500 transition-all duration-200 p-4 ">Get disney +</button>
</div>
</div>

<div  className="bg-black flex items-center justify-center p-10 border-2 hover:scale-110 transition-all duration-200 flex-col text-white text-center border-blue-700 ">
<img height={100} width={100} src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_828/v1710482648/feature/rebranding/disney-plus-logo.svg" alt="" />
<p className="text-center">
includes hulu (no ads) along with everything <br /> you love with Disney 
bundle
</p>
<h1 className="text-4xl"><span>£</span> 19,99 /mo</h1>
<button className="bg-blue-700 items-center p-4 rounded-lg text-white  tracking-widest ">Get the disney bundle</button>
</div>
        </div>
        </>
    )
}