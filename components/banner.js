import React from 'react'

export default function Banner({ movies }) {
     
  return (
    <>
        <section className='w-full h-[600px] bg' style={{backgroundImage: "url(" + `https://image.tmdb.org/t/p/original${movies.backdrop_path}` + ")"}} >
            <div className='w-full h-full bg-gradient-to-tr from-[#111111] to-[#1111114d] grid grid-col-1 lg:grid-cols-2'>
                <div className=' p-5 md:p-10 lg:p-0 mt-20 md:ml-40 '>
                  <h1 className='font-mono text-xl md:text-2xl lg:text-4xl text-white underline uppercase'><span className='font-extrabold'>Netflix</span> Originals</h1>
                  <h1 className='mt-4 mb-3 font-serif text-2xl md:text-4xl lg:text-6xl font-extrabold text-white uppercase '>{movies.original_title}</h1>
                  <h2><span className='px-3 py-1 whitespace-nowrap text-black bg-gray-300 text-bold'>IMDB {movies.vote_average}</span><span className='ml-5 font-bold text-red-600'>{movies.release_date}</span></h2>
                  <p className='mt-4 tracking-wider text-white'>{movies.overview}</p>
                </div>
                <div></div>
            </div>
        </section>
    </>
  )
}
