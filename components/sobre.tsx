import Image from "next/image"

export function Sobre() {
  return (
    <section id="sobre" className="bg-lavender-dark py-28 lg:py-36">
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 md:grid-cols-2 lg:gap-24">
        {/* Text */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <p className="text-sm uppercase tracking-[0.3em] text-gold">
              Sobre a terapeuta
            </p>
            <h2 className="font-serif text-4xl text-foreground lg:text-5xl">
              Quem move a 
              <br />
              <span className="text-gold">Yui Terapia Holística</span>
            </h2>
            <div className="mt-2 h-px w-16 bg-gold/35" />
          </div>

          <div className="flex flex-col gap-6 leading-relaxed text-muted-foreground">
            <p>
              Com mais de 20 anos de trajetória no universo corporativo, atuo integrando o rigor analítico e estrutural ao estudo da mente e às práticas integrativas. Essa bagagem consolidou a disciplina, o compromisso ético e a capacidade de organizar cenários complexos — competências que hoje direciono ao suporte do desenvolvimento individual através da neurociência aplicada e do mindfulness.
            </p>
            <p>
              Em minha prática de atendimento integrativo, utilizo ferramentas como o Tarot e a escuta ativa para mapear dinâmicas e apresentar um panorama lúcido sobre padrões comportamentais, salvaguardando a autonomia para que cada decisão permaneça sob seu comando consciente.
            </p>
            <p className="font-serif text-lg text-foreground italic">
              "Minha abordagem visa unir a sabedoria integrativa à lucidez racional, apoiando a organização do cenário mental e fornecendo a estrutura necessária para escolhas conscientes e pragmáticas."
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="relative">
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl">
            <Image
              src="/images/Yui terapeuta holistica.jpg"
              alt="Terapia Holística - Tarot Online e Mentoria de Expansão da Consciência"
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