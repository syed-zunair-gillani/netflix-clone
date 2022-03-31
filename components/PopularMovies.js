import Image from 'next/image'
import React, {useState, useEffect} from 'react' 
import YouTube from 'react-youtube' 

export default function PopularMovies({ movies, heading }) {

  const [open, setOpen] = useState(false);
  const [videid, setVideoId] = useState([])


  const fetchData = async (id) => {
    const req = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=35d6a47198da92d498e31c93be7257ed&language=en-US`);
    const data = await req.json();
    setVideoId(data.results[0].key);
    setOpen(true);
  };
  const videoid = (event) => {
    fetchData(event);
  };

  const opts =() => {
      
      width: '240'
  }

  return (
    <>
      <h1 className="mb-5 ml-20 font-sans text-2xl font-bold text-white">{heading}</h1>
       <div className="container flex float-right mb-10 overflow-x-scroll scrollbar-hide">
          {movies.map((movie, index) => (
            <div className='h-[150px] min-w-[250px] cursor-pointer  border-2 border-transparent hover:border-gray-800 hover:z-40 transition-all ease-in-out' onClick={()=>videoid(movie.id)} >
              <Image src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} height={150} width={250} className="border-2 min-w-[250px] border-gray-500"/>
            </div>
          ))}
          
       </div> 
       <dir className={open ? 'true' : 'hidden'}>
          <div className='my-10 md:mr-10 p-5 md:p-0 lg:ml-[70px] max-w-full'>
            <p className='text-xl font-bold text-white cursor-pointer' onClick={()=>setOpen(false)}>x</p>
            <YouTube  videoId={videid} className="w-full"/>
          </div>
        </dir>

    </>
  )
}


