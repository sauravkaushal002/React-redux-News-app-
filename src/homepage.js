import axios from "axios"
 import { useEffect,useState  } from "react"
import { useDispatch } from "react-redux";
 import { Fetchnews } from "./newsRedux/action";
 import { useSelector } from "react-redux";


 const News=()=>{
   const news =useSelector((state)=>state.user.news)
console.log(news?.data?.articles)
const dispatch = useDispatch();
 useEffect(()=>{
dispatch(Fetchnews())
// setNews(res.data.articles)

 },[])


    return(
      <>
   
      <div className="flex justify-center text-4xl font-bold pb-2 bg-black  ">
      <h1 className="text-white">Top 20 Latest headlines</h1>
      </div>
      <div className="flex py-8 bg-blue-200 flex-wrap justify-center gap-28 shadow-lg">
       
      {news?.data?.articles?.map((value) => (
      <div className="max-w-sm rounded-2xl   hover:bg-pink-200 min-gap-10 overflow-hidden shadow-lg bg-white py-4 px-4">
        <img className="w-[300px] h-[200px]" src={value.urlToImage} alt="Sunset in the mountains"/>
       <div className="">
    <div className="font-bold text-xl mb-2">source</div>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{value.author}</span>
      <div className="font-bold text-xl mb-2">title</div>
      <h1 className="text-gray-700 w-[30ch] text-base"><>{value.title} </>
      <div className="font-bold text-xl mb-2">description</div>
      <p  className="text-gray-700 w-[30ch]">{value.description}</p>
      <div className="font-bold text-xl mb-2">click for full news⬇️</div>
      <a href={value.url} className="text-gray-700 w-[30ch]"><span 
      className="inline-block hover:bg-cyan-600 bg-orange-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 ml-[130px] mb-2">Get news</span></a>

      
      </h1>
    </div>
 

     </div>
     
      ))}
 
     </div>
     <div className="flex justify-center text-4xl font-bold  bg-black ">
      <h1 className="text-white">Thank you for visiting 🙏</h1>
      </div>
     </>
    )
 }

export default  News
