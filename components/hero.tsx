import Image from "next/image"

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center pt-20"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 lg:gap-20">
        {/* Imagem */}
        <div className="relative order-2 md:order-1">
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl">
            <Image
              src="/images/home.png"
              alt="Atendimento de Terapia Holística Online - Adriana Yui"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          {/* Linha dourada decorativa */}
          <div className="absolute -bottom-4 -right-4 h-full w-full rounded-2xl border border-gold/30" />
        </div>

        {/* Texto */}
        <div className="order-1 flex flex-col gap-8 md:order-2">
          <div className="flex flex-col gap-4 md:gap-6">
            <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-gold font-medium">
              Mapeamento Energético e Estratégico
            </p>
            <h1 className="font-serif text-3xl leading-tight text-foreground md:text-4xl lg:text-5xl">
              Terapia Holística Online: Acolhimento e discernimento para superar seus bloqueios.
            </h1>
            <h2 className="text-base md:text-lg font-serif text-gold leading-snug">
              Equilíbrio mental e sabedoria ancestral para trazer lucidez e direcionamento imediato às suas decisões.
            </h2>
          </div>
          
          <div className="flex flex-col gap-4">
            <p className="max-w-md text-base md:text-lg leading-relaxed text-muted-foreground">
              Um espaço seguro de <strong>escuta ativa</strong> para identificar padrões ocultos, ansiedade e travas emocionais. Uma abordagem direta que une a visão espiritual à realidade prática, ajudando você a organizar pensamentos e recuperar a segurança para agir.
            </p>
            <p className="text-sm font-medium text-foreground uppercase tracking-wider">
              Atendimento acolhedor online até as 00h30.
            </p>
          </div>

          <div className="pt-2">
            <a
              href="https://wa.me/5511914051714?text=Ol%C3%A1%20Yui%2C%20vim%20pelo%20seu%20site%20e%20busco%20direcionamento%20para%20o%20meu%20momento."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-gold px-8 py-4 text-sm font-medium uppercase tracking-[0.15em] text-white transition-all hover:bg-gold/90 hover:shadow-lg"
            >
              Agendar Sessão
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}