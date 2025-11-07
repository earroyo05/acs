import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="bg-[#f9f8f6] text-[#2e3d34] font-sans">
      <Head>
        <title>Alturas Camposanto</title>
        <meta name="description" content="Un camposanto moderno, sereno y rodeado de naturaleza en San Antonio de Desamparados." />
        <meta property="og:title" content="Alturas Camposanto" />
        <meta property="og:description" content="Un lugar de reflexión, belleza y legado para quienes amamos." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/hero.jpg" />
      </Head>

      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-20 bg-white/60 backdrop-blur border-b border-[#2e3d34]/10">
        <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/images/logo.png" alt="Alturas Camposanto" width={34} height={34} />
            <span className="font-serif text-lg">Alturas Camposanto</span>
          </div>
          <div className="hidden md:flex gap-6 text-sm">
            <a href="#sobre-nosotros" className="hover:opacity-80">Nosotros</a>
            <a href="#servicios" className="hover:opacity-80">Espacios</a>
            <a href="#como-comprar" className="hover:opacity-80">Cómo comprar</a>
            <a href="#galeria" className="hover:opacity-80">Galería</a>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative h-[92vh] flex items-center justify-center text-center bg-[url('/images/hero.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 px-6">
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-4">La paz comienza hoy</h1>
          <p className="text-white/95 max-w-3xl mx-auto mb-8 text-base md:text-lg leading-relaxed">
            En Alturas Camposanto honramos la vida en un entorno natural, moderno y sereno.
            Un lugar de reflexión, belleza y legado para quienes amamos.
          </p>
          <a
            href="#sobre-nosotros"
            className="inline-block bg-[#4a5d4e] text-white px-6 py-3 rounded-2xl hover:bg-[#3b4d40] transition"
          >
            Conoce nuestro Camposanto
          </a>
        </div>
      </section>

      {/* SOBRE NOSOTROS */}
      <section id="sobre-nosotros" className="py-20 px-6 lg:px-8">
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-serif mb-4">Un lugar donde la memoria florece</h2>
            <p className="mb-5">
              Alturas Camposanto nació del deseo de ofrecer un entorno humano, digno y natural para honrar a quienes amamos.
              Acompañamos a las familias con calidez y claridad en decisiones importantes.
            </p>
            <ul className="space-y-2 text-sm">
              <li><span className="font-semibold">Visión:</span> ser el referente de serenidad y respeto en San Antonio.</li>
              <li><span className="font-semibold">Misión:</span> acompañar con cercanía, empatía y transparencia.</li>
              <li><span className="font-semibold">Valores:</span> respeto, dignidad, armonía con la naturaleza.</li>
            </ul>
          </div>
          <div className="rounded-2xl overflow-hidden shadow">
            <Image
              src="/images/about.jpg"
              alt="Vista panorámica del camposanto"
              width={900}
              height={600}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* ESPACIOS */}
      <section id="servicios" className="bg-[#e6e2d3] py-20 px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-serif mb-10 text-center">Nuestros espacios</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Nichos sencillos y dobles',
                img: '/images/nichos.jpg',
                text: 'Espacios íntimos rodeados de jardines, diseñados para ofrecer tranquilidad y permanencia.',
              },
              {
                title: 'Columbarios',
                img: '/images/columbarios.jpg',
                text: 'Estructuras sobrias para conservar urnas con cenizas, en áreas ajardinadas y tranquilas.',
              },
              {
                title: 'Árboles de Vida',
                img: '/images/arboles.jpg',
                text: 'Una opción ecológica y simbólica: las cenizas descansan bajo un árbol que crece como homenaje vivo.',
              },
            ].map((s) => (
              <div key={s.title} className="bg-white rounded-xl shadow overflow-hidden">
                <Image src={s.img} alt={s.title} width={700} height={460} className="h-56 w-full object-cover" />
                <div className="p-5">
                  <h3 className="font-serif text-lg mb-1">{s.title}</h3>
                  <p className="text-sm text-[#2e3d34]/80">{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CÓMO COMPRAR (solo texto e imágenes; sin formulario ni precios) */}
      <section id="como-comprar" className="py-20 px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-serif mb-6">Cómo comprar</h2>
          <p className="text-[#2e3d34]/85 max-w-3xl mx-auto mb-10">
            Te guiamos con amabilidad y claridad: agenda una visita, elige el espacio ideal y formaliza tu reserva.
            Recibirás la documentación de propiedad y confirmación de tu espacio.
          </p>
          <div className="grid md:grid-cols-4 gap-6 text-left max-w-4xl mx-auto">
            {[
              'Escríbenos o llámanos.',
              'Agenda una visita.',
              'Elige tu espacio.',
              'Recibe tu documento de propiedad.',
            ].map((t, i) => (
              <div key={i} className="bg-white rounded-xl shadow p-5">
                <div className="h-8 w-8 rounded-full bg-[#4a5d4e] text-white flex items-center justify-center font-bold mb-3">
                  {i + 1}
                </div>
                <p className="text-sm">{t}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <a href="#galeria" className="inline-block bg-[#4a5d4e] text-white px-6 py-3 rounded-2xl hover:bg-[#3b4d40] transition">
              Ver imágenes del lugar
            </a>
          </div>
        </div>
      </section>

      {/* GALERÍA */}
      <section id="galeria" className="bg-[#f4f3f0] py-20 px-6 lg:px-8">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-serif mb-6">La serenidad en cada detalle</h2>
          <p className="max-w-3xl mx-auto mb-10 text-[#2e3d34]/80">
            Nuestros jardines, senderos y áreas de descanso fueron concebidos para ofrecer paz y belleza natural.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1,2,3,4,5,6].map((i) => (
              <div key={i} className="rounded-xl overflow-hidden shadow">
                <Image
                  src={`/images/gallery${i}.jpg`}
                  alt={`Vista ${i}`}
                  width={800}
                  height={600}
                  className="w-full h-64 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER simple */}
      <footer className="py-10 px-6 border-t border-[#2e3d34]/10">
        <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Image src="/images/logo.png" alt="Alturas Camposanto" width={28} height={28} />
            <span className="text-sm">Alturas Camposanto · San Antonio de Desamparados</span>
          </div>
          <span className="text-xs text-[#2e3d34]/60">© {new Date().getFullYear()} Alturas Camposanto. Todos los derechos reservados.</span>
        </div>
      </footer>
    </main>
  );
}
