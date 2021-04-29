

export const getGifs = async(category)=>{
      
   const url = `http://api.giphy.com/v1/gifs/search?api_key=bRWSlDNKQ3bI7tNLcHIv9rqI5kAwGtjr&q=${encodeURI(category)}&limit=10`;

   const resp = await fetch(url);

   const {data} = await resp.json();

   const images = data.map( img=>(
      {
         id: img.id,
         title: img.title,
         url: img.images.downsized_medium.url
      }
   ))

   return images;
   
}

