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
              src="/images/Home-new.png"
              alt="Atendimento de Terapia Holística Online"
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
              Terapia Holística Online
            </h1>
            <h2 className="text-base md:text-lg font-serif text-gold leading-snug">
              Acolhimento e discernimento para a sua evolução consciente
            </h2>
          </div>
          
          <div className="flex flex-col gap-4">
            <p className="max-w-md text-base md:text-lg leading-relaxed text-muted-foreground">
              Uma abordagem que integra os fundamentos da neurociência, práticas de mindfulness e ferramentas vibracionais para apresentar um panorama lúcido das suas dinâmicas internas e de seus padrões.
              Através da escuta ativa, este espaço apoia a identificação de inquietações e travas emocionais. Um processo estruturado para organizar o cenário mental, deixando a tomada de decisão sob seu comando consciente.
            </p>
            <p className="text-sm font-medium text-foreground uppercase tracking-wider">
              Atendimento online pós-horário comercial e finais de semana
            </p>
          </div>

          <div className="pt-2">
            <a
              href="https://wa.me/5511914051714?text=Ol%C3%A1%20Yui%2C%20vim%20pelo%20seu%20site%20e%20gostaria%20de%20agendar%20uma%20sess%C3%A3o."
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