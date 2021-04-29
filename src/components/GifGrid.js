import React from 'react'
// import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

   // const [gifs, setGifs] = useState([]);

   // useEffect(() => {
   //    getGifs(category,setGifs);

   // }, [category])

   // console.log(gifs);

   const {data:gifs,loading} = useFetchGifs(category);

   
   
   return (
      <div >
         <h3>{category}</h3>
         <div className="gif-grid">
            { loading && <p className="animate__animated animate__hinge">Loading...</p>}
            {
               gifs.map( gif=> (
                  <GifGridItem key={gif.id} {...gif} className="animate__animated animate__fadeIn"/>
               ))
            }
         </div>
      </div>
   )
}
