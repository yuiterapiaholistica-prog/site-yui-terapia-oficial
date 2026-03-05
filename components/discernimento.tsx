import { Moon, Compass, Zap } from "lucide-react"

const painPoints = [
  {
    icon: Moon,
    title: "Angústia Noturna e Ansiedade",
    description:
      "No silêncio da noite, as incertezas costumam falar alto. Encontre um espaço seguro de escuta ativa para compreender a raiz da ansiedade e recuperar o seu equilíbrio mental e emocional.",
  },
  {
    icon: Compass,
    title: "Transição e Propósito",
    description:
      "Em meio às mudanças da vida (carreira, relacionamentos, saúde), construímos um espaço para que você possa traduzir suas necessidades reais e tomar decisões alinhadas à sua essência, com mais segurança e pé no chão.",
  },
  {
    icon: Zap,
    title: "Travas e Padrões Repetitivos",
    description:
      "Juntos, identificamos padrões energéticos e sistêmicos que estagnam o seu fluxo de prosperidade, aplicando intervenções pontuais para que o seu bem-estar e a sua fluidez retornem.",
  },
]

export function Discernimento() {
  return (
    <section id="discernimento" className="relative bg-lavender-dark py-28 lg:py-36">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mb-20 flex flex-col items-center gap-4 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-gold">
            VOCÊ NÃO PRECISA CARREGAR ESSE PESO SOZINHO(A)
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


