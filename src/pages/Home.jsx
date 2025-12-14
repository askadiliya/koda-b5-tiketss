import React from "react";
import FetchMovies from "../components/FetchMovies";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";
import Heading from "../components/Heading";




function Home() {
  return (
    <>
        <header>
            <Heading/>
        </header>
      <section className="mt-10 px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* TEXT */}
        <div className="text-center md:text-left">
          <h1 className="mb-4 text-blue-600 font-semibold">
            MOVIE TICKET PURCHASES #1 IN INDONESIA
          </h1>

          <h2 className="text-xl md:text-4xl lg:text-5xl leading-tight">
            Experience the Magic of Cinema: Book Your Tickets Today
          </h2>

          <p className="mt-4">
            Sign up and get the ticket with a lot of <br /> discount
          </p>
        </div>

        {/* IMAGES */}
        <div className="grid grid-cols-2 gap-4 justify-center">
          <div className="flex flex-col gap-4">
            <img src="/src/assets/Rectangle35.svg" alt="john wicked" />
            <img src="/src/assets/Rectangle37.svg" alt="spiderman" />
          </div>

          <div className="flex flex-col gap-4">
            <img src="/src/assets/Rectangle36.svg" alt="lion king" />
            <img src="/src/assets/Rectangle38.svg" alt="roblox" />
          </div>
        </div>
      </section>

      <section className="flex flex-col justify-center items-center mb-8">
        <h3 className="text-[#1D4ED8] font-semibold uppercase tracking-wider text-sm">
          MOVIES
        </h3>
        <p className="text-2xl md:text-3xl text-center font-semibold text-gray-900 mt-2">
          Exciting Movies That Should Be <br /> Watched Today
        </p>
      </section>

      <section className="flex flex-col justify-center items-center">
        <FetchMovies />
        <button className="w-[90vw] flex justify-center text-[#1D4ED8] py-12 cursor-pointer">
          View All 
        </button>
      </section>

      <section className="grid grid-cols-2 pt-2 px-10">
        <div>
          <p className="text-[#1D4ED8] py-4">UPCOMING MOVIES</p>
          <p className="text-2xl mb-4">Exciting Movie Coming Soon</p>
        </div>

        <div className="absolute right-10">
          <button className="bg-slate-400 rounded-full w-10 h-10 text-white mr-1">{`<-`}</button>
          <button className="bg-slate-400 rounded-full w-10 h-10 text-white">{`->`}</button>
        </div>
      </section>

      <section className="flex flex-col justify-center items-center">
        <FetchMovies />
      </section>
      <Subscribe/>

      <footer>
        <Footer/>
      </footer>
    </>
  );
}

export default Home;
