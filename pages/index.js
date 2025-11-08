import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="bg-blanco-lino text-gris-piedra font-sans">
      <Head>
        <title>Alturas Camposanto</title>
        <meta name="description" content="Camposanto moderno, natural y sereno en San Antonio de Desamparados, Costa Rica." />
      </Head>

      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-20 bg-blanco-lino/90 backdrop-blur-md border-b border-gris-piedra/10">
        <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/images/logo.png" alt="Alturas Camposanto" width={34} height={34} />
            <span className="font-serif text-verde-camposanto text-lg tracking-wide">Alturas Camposanto</span>
          </div>
          <div className="hidden md:flex gap-6 text-sm">
            <a href="#sobre-nosotros" className="hover:text-verde-camposanto transition">Nosotros</a>
            <a href="#servicios" className="hover:text-verde-camposanto transition">Espacios</a>
            <a href="#como-comprar" className="hover:text-verde-camposanto transition">Cómo comprar</a>
            <a href="#galeria" className="hover:text-verde-camposanto transition">Galería</a>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative min-h-[764px] max-h-[90vh] flex items-center justify-center text-center bg-[url('/images/hero.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-[#4A765A]/50 mix-blend-multiply" />
        <div className="relative z-10 px-6">
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-4 drop-shadow-md">La paz comienza hoy</h1>
          <p className="text-white/95 max-w-3xl mx-auto mb-8 text-base md:text-lg leading-relaxed drop-shadow">
            Honramos la vida en un entorno natural y sereno. Un lugar de reflexión, belleza y legado.
          </p>
          <a href="#sobre-nosotros" className="inline-block bg-verde-camposanto text-white px-6 py-3 rounded-2xl hover:bg-[#3b5f4c] transition">
            Conoce nuestro Camposanto
          </a>
        </div>
      </section>

      {/* SOBRE NOSOTROS */}
      <section id="sobre-nosotros" className="py-24 px-6 lg:px-8 bg-verde-lino/30">
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-serif text-verde-camposanto mb-4">Un lugar donde la memoria florece</h2>
            <p className="mb-5 text-gris-piedra">
              Alturas Camposanto nació para ofrecer un entorno humano, digno y natural. Nuestra misión es acompañar con
              empatía y claridad a las familias que buscan tranquilidad y respeto.
            </p>
            <ul className="space-y-2 text-sm">
              <li><span className="font-semibold text-verde-camposanto">Visión:</span> ser el referente de serenidad y respeto.</li>
              <li><span className="font-semibold text-verde-camposanto">Misión:</span> acompañar con cercanía y dignidad.</li>
              <li><span className="font-semibold text-verde-camposanto">Valores:</span> respeto, armonía, humanidad.</li>
            </ul>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <Image src="/images/about.jpg" alt="Vista panorámica" width={900} height={600} className="object-cover w-full h-full" />
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="bg-[#EDEFEA] py-24 px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-serif text-center text-verde-camposanto mb-12">Nuestros espacios</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Nichos sencillos y dobles', img: '/images/nichos.jpg', text: 'Espacios íntimos rodeados de jardines para ofrecer tranquilidad y permanencia.' },
              { title: 'Columbarios', img: '/images/columbarios.jpg', text: 'Estructuras sobrias para conservar urnas con cenizas, rodeadas de áreas verdes.' },
              { title: 'Árboles de Vida', img: '/images/arboles.jpg', text: 'Opción ecológica: las cenizas descansan bajo un árbol, símbolo de continuidad.' },
            ].map((s) => (
              <div key={s.title} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
                <Image src={s.img} alt={s.title} width={700} height={460} className="h-56 w-full object-cover" />
                <div className="p-5">
                  <h3 className="font-serif text-lg text-verde-camposanto mb-1">{s.title}</h3>
                  <p className="text-sm text-gris-piedra/90">{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CÓMO COMPRAR */}
      <section id="como-comprar" className="py-24 px-6 lg:px-8 bg-blanco-lino">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-serif text-verde-camposanto mb-6">Cómo comprar</h2>
          <p className="text-gris-piedra/85 max-w-3xl mx-auto mb-10">
            Te guiamos con amabilidad y claridad. Agenda una visita, elige el espacio ideal y formaliza tu reserva. 
            Recibirás tu documentación y la tranquilidad de un espacio eterno.
          </p>
          <div className="grid md:grid-cols-4 gap-6 text-left">
            {['Escríbenos o llámanos', 'Agenda una visita', 'Elige tu espacio', 'Recibe tu documento'].map((t, i) => (
              <div key={i} className="bg-verde-lino/60 rounded-xl shadow p-5">
                <div className="h-8 w-8 rounded-full bg-verde-camposanto text-white flex items-center justify-center font-bold mb-3">
                  {i + 1}
                </div>
                <p className="text-sm">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALERÍA */}
      <section id="galeria" className="bg-verde-lino/25 py-24 px-6 lg:px-8">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-serif text-verde-camposanto mb-8">La serenidad en cada detalle</h2>
          <p className="max-w-3xl mx-auto mb-12 text-gris-piedra/80">
            Nuestros jardines y senderos fueron concebidos para ofrecer paz y belleza natural.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1,2,3,4,5,6].map((i) => (
              <div key={i} className="rounded-xl overflow-hidden shadow">
                <Image src={`/images/gallery${i}.jpg`} alt={`Vista ${i}`} width={800} height={600} className="w-full h-64 object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 px-6 border-t border-gris-piedra/10 bg-white">
        <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <div className="flex items-center gap-3">
            <Image src="/images/logo.png" alt="Alturas Camposanto" width={28} height={28} />
            <span className="font-serif text-verde-camposanto">Alturas Camposanto</span>
          </div>
          <span className="text-xs text-gris-piedra/70">© {new Date().getFullYear()} Alturas Camposanto · San Antonio de Desamparados</span>
        </div>
      </footer>
    </main>
  )
}
