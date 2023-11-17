
import Image from "next/image";
import React from "react"
const Featured = () => {
  
  return (
    <div className="mt-8 p-2">
      <h1 className="text-7xl font-normal md:text-8xl  text-gray-800 dark:text-white/80">
        <b className=" bg-gradient-to-r from-blue-400 to-cyan-900 bg-clip-text text-transparent  font-bold  dark:bg-gradient-to-r dark:from-blue-400 dark:to-cyan-900 dark:bg-clip-text dark:text-transparent  transition hover:scale-105">Hey, Blogger!</b> Descrubre nuevas y brillantes ideas.
      </h1>
      <div className="mt-16  md:flex items-center justify-center gap-6 md:gap-12 p-4">
        <div className="flex-1 relative h-96 ">
            <Image src="/coding.png" alt="post" fill className="object-cover w-max rounded-md transition hover:scale-110" />
        </div>
        <div className=" flex-1 flex-col gap-5">
          <h1 className="text-4xl"></h1>
          <p className="text-xl font-normal">
            No te pierdas de las últimas noticias. Aquí, cada día es una nueva oportunidad para aprender y crecer. Ya sea que estés buscando mejorar tus habilidades de programación, descubrir nuevas recetas de cocina, mantenerte al día con las últimas tendencias de moda o simplemente quieras estar informado, este es el lugar para ti. Nuestro equipo de expertos se dedica a proporcionar contenido de alta calidad que sea relevante, informativo y atractivo. ¡Únete a nuestra comunidad y descubre un mundo de conocimientos a tu alcance!
          </p>
          {/* <button className=" mt-3 py-4 px-5 rounded-md w-max bg-sky-700 text-base text-yellow-200 font-bold transition hover:scale-110 hover:bg-sky-900">Leer mas</button> */}
        </div>
      </div>
    </div>
  );
};

export default Featured;
