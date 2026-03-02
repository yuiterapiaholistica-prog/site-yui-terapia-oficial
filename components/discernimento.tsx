import { Moon, Compass, Zap } from "lucide-react"

const painPoints = [
  {
    icon: Moon,
    title: "Angústia Noturna",
    description:
      "As noites sem respostas, a insónia que nasce das perguntas que a mente repete. As ilusões que alimenta sobre o seu destino dissolvem-se quando a alma finalmente escuta a verdade que sempre soube.",
  },
  {
    icon: Compass,
    title: "Labirintos de Decisão",
    description:
      "Caminhos que se cruzam, vozes que se contradizem. A paralisia de quem tenta agradar ao mundo enquanto se perde de si. Discernir é destruir as mentiras confortáveis que impedem a sua escolha soberana.",
  },
  {
    icon: Zap,
    title: "Bloqueios de Fluxo",
    description:
      "A energia estagnada, os padrões que se repetem, a sensação de que a vida não avança. Onde há bloqueio, há uma ilusão a ser desmascarada. Quando a ilusão cai, o fluxo retorna.",
  },
]

export function Discernimento() {
  return (
    <section id="discernimento" className="relative bg-lavender-dark py-28 lg:py-36">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mb-20 flex flex-col items-center gap-4 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-gold">
            A verdade liberta
          </p>
          <h2 className="font-serif text-4xl text-foreground lg:text-5xl">
            Discernimento
          </h2>
          <div className="mt-4 h-px w-16 bg-gold/40" />
        </div>

        {/* Three columns */}
        <div className="grid gap-12 md:grid-cols-3 md:gap-8 lg:gap-16">
          {painPoints.map((point) => (
            <div
              key={point.title}
              className="flex flex-col items-center gap-6 text-center"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-gold/30 bg-background/60">
                <point.icon className="h-7 w-7 text-gold" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-2xl text-foreground">
                {point.title}
              </h3>
              <p className="max-w-sm leading-relaxed text-muted-foreground">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
