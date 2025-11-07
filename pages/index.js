import Image from 'next/image';

export default function Home() {
  return (
    <main className="bg-[#f9f8f6] text-[#2e3d34] font-sans">
      <section className="relative h-[90vh] flex flex-col items-center justify-center text-center bg-[url('/images/hero.jpg')] bg-cover bg-center">
        <div className="bg-black/40 absolute inset-0" />
        <div className="relative z-10 px-4">
          <h1 className="text-5xl font-serif text-white mb-4">La paz comienza hoy</h1>
          <p className="text-white max-w-2xl mx-auto mb-8 text-lg">
            En Alturas Camposanto honramos la vida en un entorno natural, moderno y sereno. Un lugar de reflexión, belleza y legado para quienes amamos.
          </p>
          <a href="#sobre-nosotros" className="bg-[#4a5d4e] text-white px-6 py-3 rounded-2xl hover:bg-[#3b4d40] transition">
            Conoce nuestro Camposanto
          </a>
        </div>
      </section>
    </main>
  );
}
