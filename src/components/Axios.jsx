import React from "react"
import axios from "axios";
const axiosInstance = axios.create({
    baseURL:"https://dummyjson.com",
});

const Axios = () => {
  const getData = async () => {
      const {data} =await  axiosInstance("/products");
      console.log(data);
      
  };
  getData()
  const getRecipes = async ()=>{
 const {data} = await axiosInstance("/recipes");
 console.log(data);
 
  }
  return <div> Axios Example</div>;
};

export default Axios;