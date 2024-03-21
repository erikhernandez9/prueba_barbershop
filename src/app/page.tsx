import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div style={{ position: 'relative', width: '100%' }}>
        <Image src="/barber_background.jpeg" alt="Descripción de la imagen" layout="responsive" width={1920} height={1080} />
        <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}></div>
        <div style={{ width: '100%', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: '#fff' }}>
          <h1 className="text-2xl md:text-5xl lg:10xl font-bold md:mb-5">Tu estilo, nuestra pasión</h1>
          <button className="px-6 py-3 text-white rounded-lg cursor-pointer mt-4 sm:mt-6">Agéndate</button>
        </div>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="bg-200 p-10 md:p-20">
          <h2 className="text-xl md:text-5xl font-bold mb-5">¿Qué hacemos?</h2>
          <p className=" md:text-3xl">En nuestra barbería ofrecemos una amplia gama de servicios, desde cortes de cabello hasta afeitados y tratamientos capilares. Nuestro objetivo es que te sientas bien y luzcas mejor.</p>
        </div>
        <div className="bg-300 p-4 relative">
          <Image src="/cut1.jpg" alt="Descripción de la imagen" layout="fill" objectFit="cover" className="absolute inset-0 w-full h-full aspect-w-1"/>
        </div>
      </section>
    </main>
  );
}
