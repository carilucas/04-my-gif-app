import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = (category) => {
   const [data, setData] = useState({
      data: [],
      loading: true
   });

   useEffect(() => {
      getGifs(category)
      .then(img=>
         
            setData({
               data: img,
               loading:false
            })
         )

   }, [category])

   return data;
}
