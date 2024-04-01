import Image from "next/image";
import { montserrat } from "./ui/fonts";

export default function Home() {
  return (
    <main>
      <div className="relative w-full h-screen overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/barber_background.jpeg" alt="Descripción de la imagen" layout="fill" className="object-cover" />
        </div>
        <div className="bg-black bg-opacity-50 absolute inset-0"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white w-full p-12 md:p-32">
          <h1 className="text-7xl md:text-8xl lg:text-8xl font-bold">TU ESTILO,<br />NUESTRA PASIÓN</h1>
          <hr />
          <button className="px-6 py-3 text-white rounded-lg cursor-pointer mt-2">Agéndate</button>
        </div>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="bg-200 p-10 md:p-20">
          <h2 className="text-xl md:text-5xl font-bold mb-5">¿Qué hacemos?</h2>
          <p className=" md:text-2xl">En nuestra barbería ofrecemos una amplia gama de servicios, desde cortes de cabello hasta afeitados y tratamientos capilares. Nuestro objetivo es que te sientas bien y luzcas mejor.</p>
        </div>
        <div className="bg-300 p-4 relative">
          <Image src="/cut1.jpg" alt="Descripción de la imagen" layout="fill" objectFit="cover" className="absolute inset-0 w-full h-full aspect-w-1" />
        </div>
      </section>
      <div className="mx-auto text-center p-20">
        <h2 className="text-7xl pb-10 font-bold">SERVICIOS</h2>
        <div className="flex">
          <div className="w-[340px] h-[450px] m-4 relative flex flex-col justify-center items-center bg-[#1C1C1C] rounded-lg">
            <h3 className="text-3xl py-3">Cortes</h3>
            <div className="w-full h-full relative">
              <Image src="/cut2.webp" alt="Descripción de la imagen" layout="fill" className="object-cover" />
            </div>
            <button className="px-6 py-3 text-white rounded-b-lg cursor-pointer w-full">Agendarme</button>
          </div>

          <div className="w-[340px] h-[450px] m-4 relative flex flex-col justify-center items-center bg-[#1C1C1C] rounded-lg">
            <h3 className="text-3xl py-3">Colores</h3>
            <div className="w-full h-full relative">
              <Image src="/cut3.jpg" alt="Descripción de la imagen" layout="fill" className="object-cover" />
            </div>
            <button className="px-6 py-3 text-white rounded-b-lg cursor-pointer w-full">Agendarme</button>
          </div>
          <div className="w-[340px] h-[450px] m-4 relative flex flex-col justify-center items-center bg-[#1C1C1C] rounded-lg">
            <h3 className="text-3xl py-3">Cursos</h3>
            <div className="w-full h-full relative">
              <Image src="/cut4.jpg" alt="Descripción de la imagen" layout="fill" className="object-cover" />
            </div>
            <button className="px-6 py-3 text-white rounded-b-lg cursor-pointer w-full">Agendarme</button>
          </div>
        </div>
      </div>
    </main>
  );
}
