import { Sparkle } from "lucide-react"

export function Depoimentos() {
  const prints = [
    "/images/depo-1.png",
    "/images/depo-2.png",
    "/images/depo-3.png",
    "/images/depo-4.png",
  ]

  return (
    <section id="depoimentos" className="bg-lavender py-28 lg:py-36">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mb-20 flex flex-col items-center gap-4 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-gold font-medium">
            Vozes que ascenderam
          </p>
          <h2 className="font-serif text-4xl text-foreground lg:text-5xl">
            Depoimentos
          </h2>
          <div className="mt-4 h-px w-16 bg-gold/40" />
        </div>

        {/* Carrossel de Prints Reais */}
        <div className="relative group">
          {/* Adicionamos 'items-center' aqui para alinhar verticalmente imagens de alturas diferentes */}
          <div className="flex items-center overflow-x-auto snap-x snap-mandatory gap-6 pb-8 hide-scrollbar scroll-smooth">
            {prints.map((src, index) => (
              <div
                key={index}
                // Removemos o bg-card e as bordas duras. Adicionamos um efeito sutil de zoom no hover.
                className="relative flex-none w-[85vw] md:w-[350px] snap-center transition-transform duration-500 hover:scale-[1.02]"
              >
                <img
                  src={src}
                  alt={`Depoimento Real ${index + 1}`}
                  // object-contain garante que 100% do texto do print fique visível
                  className="w-full h-auto object-contain rounded-2xl shadow-sm border border-black/5"
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