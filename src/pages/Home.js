import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
 const Home=()=> {
  let history = useHistory();
  useEffect(() => {
    const timer = setTimeout(() => {
      history.push("/findjobs");
    }, 2000);
    return () => clearTimeout(timer);
  }, [history]);
  return (
    <div className=" bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-xl border shadow-lg p-24">
          <p className="w-full md:text-3xl">Welcome To Eridium</p>
        </div>
      </div>
    </div>
  );
}
export default Home