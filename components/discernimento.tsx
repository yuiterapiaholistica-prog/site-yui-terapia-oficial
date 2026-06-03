import { Moon, Compass, Zap } from "lucide-react"

const painPoints = [
  {
    icon: Moon,
    title: "Incertezas e Ruídos Mentais",
    description:
      "No silêncio da noite, os questionamentos costumam falar mais alto. Encontre um espaço seguro de escuta ativa para compreender a dinâmica dessas inquietações, apoiando a organização dos pensamentos e o relaxamento mental.",
  },
  {
    icon: Compass,
    title: "Transições e Escolhas",
    description:
      "Em meio às mudanças da rotina (carreira, relacionamentos, novos projetos), este espaço apoia a tradução de suas necessidades reais. Um processo estruturado para facilitar decisões conscientes, com pragmatismo e pé no chão.",
  },
  {
    icon: Zap,
    title: "Ciclos e Padrões Repetitivos",
    description:
      "Identificação de dinâmicas energéticas e sistêmicas que geram estagnação no seu dia a dia. Através de mapeamentos pontuais, organizamos o cenário para que o seu bem-estar e a fluidez natural retornem.",
  },
]

export function Discernimento() {
  return (
    <section id="discernimento" className="relative bg-lavender-dark py-28 lg:py-36">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mb-20 flex flex-col items-center gap-4 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-gold">
            VOCÊ NÃO PRECISA CONDUZIR ESSE PROCESSO SOZINHO(A)
          </p>
          <h2 className="font-serif text-4xl text-foreground lg:text-5xl">
            Discernimento para ver além do óbvio
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
              <p className="leading-relaxed text-muted-foreground">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


