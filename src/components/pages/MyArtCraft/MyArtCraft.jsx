import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../firebase/FirebaseProvider";
import CustomizedDataCard from "../CustomizedDataCard/CustomizedDataCard";

const MyArtCraft = () => {
  const [myData,setMyData]=useState([])
  const [customization,setCustomization]=useState('')
  const {user}=useContext(AuthContext)
  // console.log('user in cc',user?.email)
  const email=user?.email
  useEffect(() => {
    fetch(`https://safias-creative-art-server.vercel.app/user/${email}`)
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
    setMyData(data)
    })
  }, []);

  useEffect(()=>{
    fetch(`https://safias-creative-art-server.vercel.app/user/${email}/${customization}`)
    .then(res=>res.json())
    .then(data=>{console.log(data)
      setMyData(data)
    })
  },[customization])

  
  console.log('custom',customization)
  return (
    <div className="w-full md:max-w-6xl mx-auto">
      <div className="text-center my-12 ">
        <h2 className="text-center text-5xl font-bold font-rancho">My Art and Craft List</h2>
      </div>
      <div className="flex justify-center mt-5">
        <select onChange={e=>setCustomization(e.target.value)} className="select select-bordered w-full max-w-xs">
          <option selected disabled>Select an option</option>
          <option value='yes'>Yes</option>
          <option value='no'>No</option>
        </select>
      </div>
      <div className="grid md:grid-cols-3 gap-5 mt-12">
       {
        myData.map(singleData=><CustomizedDataCard
          myData={myData}
          setMyData={setMyData}
          key={singleData._id} singleData={singleData}></CustomizedDataCard>)
       }
      </div>
    </div>
  );
};

export default MyArtCraft;
