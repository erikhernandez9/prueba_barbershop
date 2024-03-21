import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
        <Image src="/barber_background.jpeg" alt="Descripción de la imagen" layout="responsive" width={300} height={200} />
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: '#fff' }}>
          <h1>Texto encima de la imagen</h1>
          <button style={{ padding: '12px 24px', backgroundColor: '#4CAF50', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', marginTop: '16px' }}>Agéndate</button>
        </div>
      </div>
    </main>
  );
}
