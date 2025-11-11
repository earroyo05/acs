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
            <a href="#contacto" className="hover:text-verde-camposanto transition">Contáctanos</a>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative h-[92vh] flex items-center justify-center text-center bg-[url('/images/hero.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-[#4A765A]/50 mix-blend-multiply" />
        <div className="relative z-10 px-6">
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-4 drop-shadow-md">La paz comienza hoy</h1>
          <p className="text-white/95 max-w-3xl mx-auto mb-8 text-base md:text-lg leading-relaxed drop-shadow">
            Honramos la vida en un entorno natural y sereno. Un lugar de reflexión, belleza y legado.
          </p>
          <a href="#contacto" className="inline-block bg-verde-camposanto text-white px-6 py-3 rounded-2xl hover:bg-[#3b5f4c] transition">
            Contáctanos
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

      {/* FORMULARIO DE CONTACTO */}
      <section id="contacto" className="py-24 px-6 lg:px-8 bg-verde-lino/25">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-serif text-verde-camposanto mb-6">Contáctanos</h2>
          <p className="text-gris-piedra/80 mb-8">
            Si deseas más información o agendar una visita, déjanos tus datos y nos pondremos en contacto contigo.
          </p>
          <form action="https://getform.io/f/bolzprza" method="POST" className="grid gap-4 text-left">
            <input type="text" name="nombre" placeholder="Nombre completo" required
              className="p-3 rounded-lg border border-gris-piedra/20 focus:outline-none focus:ring-2 focus:ring-verde-camposanto"/>
            <input type="email" name="email" placeholder="Correo electrónico" required
              className="p-3 rounded-lg border border-gris-piedra/20 focus:outline-none focus:ring-2 focus:ring-verde-camposanto"/>
            <textarea name="mensaje" rows="4" placeholder="Escribe tu mensaje..."
              className="p-3 rounded-lg border border-gris-piedra/20 focus:outline-none focus:ring-2 focus:ring-verde-camposanto"></textarea>
            <button type="submit"
              className="bg-verde-camposanto text-white py-3 rounded-2xl hover:bg-[#3b5f4c] transition">
              Enviar mensaje
            </button>
          </form>
        </div>
      </section>

      {/* MAPA */}
      <section className="py-20 px-6 lg:px-8 bg-blanco-lino">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-2xl font-serif text-verde-camposanto mb-4">Cómo llegar</h2>
          <p className="text-gris-piedra/80 mb-6">Alturas Camposanto · San Antonio de Desamparados, Costa Rica</p>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15736.871991614947!2d-84.0523853!3d9.8777002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0fcb5dfe02b3f%3A0x8f3dc1a592ebc839!2sAlturas%20Camposanto!5e0!3m2!1ses!2scr!4v1731360625002!5m2!1ses!2scr"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Alturas Camposanto Ubicación"
            ></iframe>
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

      {/* BOTÓN FLOTANTE DE WHATSAPP */}
      <a href="https://wa.me/50672375003"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white rounded-full p-4 shadow-lg hover:scale-105 transition"
        target="_blank" rel="noopener noreferrer"
        title="Contáctanos por WhatsApp">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
          <path d="M20.52 3.48A11.75 11.75 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.12.55 4.17 1.6 6.01L0 24l6.16-1.6A11.96 11.96 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.22-3.48-8.52zM12 22.1c-1.76 0-3.48-.46-5.01-1.34l-.36-.2-3.64.95.97-3.55-.23-.37A9.82 9.82 0 0 1 2.1 12c0-5.46 4.44-9.9 9.9-9.9 2.64 0 5.12 1.03 7 2.9a9.8 9.8 0 0 1 2.9 7c0 5.46-4.44 9.9-9.9 9.9zm4.94-7.2c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.6.14-.17.27-.69.88-.84 1.06-.15.17-.31.2-.58.07-.27-.14-1.12-.41-2.13-1.31-.79-.7-1.31-1.56-1.47-1.83-.15-.27-.02-.41.12-.55.12-.12.27-.31.4-.46.13-.15.17-.27.25-.46.08-.17.04-.34-.02-.48-.06-.14-.6-1.44-.82-1.97-.22-.52-.44-.45-.6-.46h-.51c-.17 0-.48.07-.73.34s-.95.93-.95 2.28.98 2.64 1.12 2.82c.14.17 1.92 2.92 4.64 4.09.65.28 1.16.45 1.55.58.65.21 1.24.18 1.7.11.52-.08 1.6-.66 1.82-1.3.22-.64.22-1.19.15-1.3-.07-.11-.25-.18-.52-.32z"/>
        </svg>
      </a>
    </main>
  )
}
