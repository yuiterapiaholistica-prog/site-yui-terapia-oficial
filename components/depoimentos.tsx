import { Sparkle } from "lucide-react"

export function Depoimentos() {
  const prints = [
    // Imagem 1: Teste absoluto de internet. Se falhar, a Vercel está a bloquear imagens externas no domínio.
    "https://via.placeholder.com/320x500.png?text=Teste+de+Internet",
    // Imagens locais na diretoria public:
    "/depo-1.jpg",
    "/depo-2.jpg",
    "/depo-3.jpg",
    "/depo-4.jpg",
  ]

  return (
    <section id="depoimentos" className="bg-lavender py-28 lg:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-20 flex flex-col items-center gap-4 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-gold font-medium">
            Vozes que ascenderam
          </p>
          <h2 className="font-serif text-4xl text-foreground lg:text-5xl">
            Depoimentos
          </h2>
          <div className="mt-4 h-px w-16 bg-gold/40" />
        </div>

        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 hide-scrollbar">
          {prints.map((src, index) => (
            <div
              key={index}
              className="relative flex-none w-[85vw] md:w-[320px] min-h-[400px] snap-center rounded-2xl border border-border/40 bg-white shadow-sm flex flex-col items-center justify-center p-6 text-center"
            >
              {/* Log visual: isto vai provar se o código novo está realmente ativo na Vercel */}
              <span className="text-xs text-slate-400 mb-4 font-mono">
                A procurar ficheiro:<br />
                <strong className="text-slate-700">{src}</strong>
              </span>
              
              <img
                src={src}
                alt={`Depoimento ${index + 1}`}
                className="w-full h-auto object-cover rounded shadow-sm border border-slate-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}