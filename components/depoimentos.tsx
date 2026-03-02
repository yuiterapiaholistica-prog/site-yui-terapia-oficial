import { Sparkle } from "lucide-react"

export function Depoimentos() {
  // Lista com os nomes dos arquivos salvos na pasta /public
  const prints = [
    "/depo-1.png",
    "/depo-2.png",
    "/depo-3.png",
    "/depo-4.png",
  ]

  return (
    <section id="depoimentos" className="bg-lavender py-28 lg:py-36">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mb-20 flex flex-col items-center gap-4 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-gold font-medium">
            Impacto na Vida Real
          </p>
          <h2 className="font-serif text-4xl text-foreground lg:text-5xl">
            Depoimentos
          </h2>
          <div className="mt-4 h-px w-16 bg-gold/40" />
        </div>

        {/* Carrossel de Prints Reais */}
        <div className="relative group">
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 hide-scrollbar scroll-smooth">
            {prints.map((src, index) => (
              <div
                key={index}
                className="relative flex-none w-[85vw] md:w-[320px] snap-center rounded-2xl overflow-hidden border border-border/40 bg-card shadow-sm transition-all duration-500 hover:border-gold/30 hover:shadow-md"
              >
                <img
                  src={src}
                  alt={`Depoimento Real ${index + 1}`}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Indicador Visual para o usuário */}
          <div className="mt-6 flex justify-center items-center gap-2 text-gold/60">
            <Sparkle className="h-3 w-3 fill-current" />
            <p className="text-[10px] uppercase tracking-[0.2em] font-medium">
              Deslize para ver mais relatos
            </p>
            <Sparkle className="h-3 w-3 fill-current" />
          </div>
        </div>
      </div>
    </section>
  )
}