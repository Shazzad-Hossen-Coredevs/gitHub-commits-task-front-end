import { useState } from "react";
import { useEffect } from "react";


const App = () => {
  const [commits,setCommits]=useState([]);
  useEffect(()=>{

    fetch('http://localhost:4000/commits').then(res=>res.json()).then(data=>{
      
      setCommits(data);
    })


  },[])
  return (
    <div className="w-full">
     <div className="w-full p-5">
      <table className="table-auto border-collapse border border-gray-400">
        <thead>
          <tr>
            <th className="border border-gray-400 p-2">SL.</th>
            <th className="border border-gray-400 p-2">Author</th>
            <th className="border border-gray-400 p-2">Commit</th>
            <th className="border border-gray-400 p-2">Hash</th>
            <th className="border border-gray-400 p-2">Date</th>
          </tr>
        </thead>
        <tbody>
         {
          commits.map((item,index)=> {
           
            return <tr key={index} className={`${!isNaN(item?.sha.slice(-1))? 'bg-[#E6F1F6]':''}`}>
            <td className="border border-gray-400 p-2">{index+1}</td>
            <td className="border border-gray-400 p-2">{item?.commit?.author?.name}</td>
            <td className="border border-gray-400 p-2">{item?.commit?.message}</td>
            <td className="border border-gray-400 p-2">{item?.sha}</td>
            <td className="border border-gray-400 p-2">{new Date(item?.commit?.committer?.date).toLocaleDateString()}</td>
            
          </tr>
          })
         }
         
        </tbody>
      </table>
    </div>
      
    </div>
  );
};

export default App;