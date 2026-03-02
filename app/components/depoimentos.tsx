import { Sparkle } from "lucide-react"

const testimonials = [
  {
    quote:
      "A mentoria da Adriana trouxe o discernimento que eu buscava há anos para sair de um ciclo de estagnação.",
    name: "Maria",
  },
  {
    quote:
      "O atendimento de Tarot e Mesa da Ascensão foi cirúrgico. Senti a mudança de frequência imediatamente.",
    name: "João",
  },
]

export function Depoimentos() {
  return (
    <section id="depoimentos" className="bg-lavender py-28 lg:py-36">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mb-20 flex flex-col items-center gap-4 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-gold">
            Vozes que ascenderam
          </p>
          <h2 className="font-serif text-4xl text-foreground lg:text-5xl">
            Depoimentos
          </h2>
          <div className="mt-4 h-px w-16 bg-gold/40" />
        </div>

        {/* Testimonial Cards */}
        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col gap-6 rounded-2xl border border-border/40 bg-card p-8 shadow-[0_2px_20px_rgba(0,0,0,0.04)] transition-all duration-500 hover:border-gold/30 hover:shadow-[0_4px_28px_rgba(212,175,55,0.08)] lg:p-10"
            >
              <Sparkle
                className="h-5 w-5 text-gold"
                strokeWidth={1.5}
                aria-hidden="true"
              />

              <blockquote className="flex-1 font-serif text-lg leading-relaxed text-foreground italic">
                {`\u201C${t.quote}\u201D`}
              </blockquote>

              <figcaption className="flex items-center gap-3">
                <span className="h-px w-8 bg-gold/40" aria-hidden="true" />
                <span className="text-sm font-medium uppercase tracking-[0.15em] text-muted-foreground">
                  {t.name}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
