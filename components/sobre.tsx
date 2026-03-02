import Image from "next/image"

export function Sobre() {
  return (
    <section id="sobre" className="bg-lavender-dark py-28 lg:py-36">
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 md:grid-cols-2 lg:gap-24">
        {/* Text */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <p className="text-sm uppercase tracking-[0.3em] text-gold">
              Quem sou
            </p>
            <h2 className="font-serif text-4xl text-foreground lg:text-5xl">
              Sobre
              <br />
              <span className="text-gold">Adriana Yui</span>
            </h2>
            <div className="mt-2 h-px w-16 bg-gold/40" />
          </div>

          <div className="flex flex-col gap-6 leading-relaxed text-muted-foreground">
            <p>
              Após mais de uma década no universo corporativo da Tecnologia da
              Informação, onde desenvolvi competências analíticas, visão
              estratégica e liderança, a vida conduziu-me ao chamamento da alma.
            </p>
            <p>
              A transição não foi fuga, mas expansão. Trouxe comigo a
              disciplina, o rigor ético e a capacidade de sistematizar processos,
              agora aplicados ao trabalho sagrado da ascensão de consciência.
            </p>
            <p>
              Como terapeuta holística e mentora de ascensão, dedico-me a guiar
              cada pessoa pelo caminho do discernimento. Através do Tarot
              Terapêutico e da Mesa da Ascensão, ajudo a destruir ilusões, a
              reconhecer padrões limitantes e a despertar para a verdade
              soberana que habita em cada ser.
            </p>
            <p className="font-serif text-lg text-foreground italic">
              {"\"A verdade não precisa de defesa. Precisa apenas de quem tenha coragem de a viver.\""}
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="relative">
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl">
            <Image
              src="/images/Yui terapeuta holistica.jpg"
              alt="Adriana Yui, terapeuta holística e mentora de ascensão"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="absolute -bottom-4 -left-4 h-full w-full rounded-2xl border border-gold/30" />
        </div>
      </div>
    </section>
  )
}
