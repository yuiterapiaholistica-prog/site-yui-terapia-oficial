import Image from "next/image"

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center pt-20"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 lg:gap-20">
        {/* Image */}
        <div className="relative order-2 md:order-1">
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl">
            <Image
              src="/images/hero.jpg"
              alt="Adriana Yui em sessão de terapia holística"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          {/* Decorative gold line */}
          <div className="absolute -bottom-4 -right-4 h-full w-full rounded-2xl border border-gold/30" />
        </div>

        {/* Text */}
        <div className="order-1 flex flex-col gap-8 md:order-2">
          <div className="flex flex-col gap-4">
            <p className="text-sm uppercase tracking-[0.3em] text-gold">
              Terapia Holística
            </p>
            <h1 className="font-serif text-5xl leading-tight text-foreground lg:text-7xl">
              Adriana
              <br />
              <span className="text-gold">Yui</span>
            </h1>
          </div>
          <p className="max-w-md text-lg leading-relaxed text-muted-foreground">
            Sabedoria e Discernimento para viver a Verdade da sua alma.
          </p>
          <div>
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-gold px-8 py-4 text-sm font-medium uppercase tracking-[0.2em] text-primary-foreground transition-all duration-300 hover:bg-gold-dark hover:shadow-lg"
            >
              Agendar Sessão
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
