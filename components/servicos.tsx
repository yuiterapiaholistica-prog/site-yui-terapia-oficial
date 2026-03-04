import { Sparkles, Users, Compass, Activity } from "lucide-react"

const services = [
  {
    icon: Compass,
    title: "Tarot Terapêutico Online",
    subtitle: "Lucidez Imediata e Direcionamento",
    description:
      "Uma leitura direta para trazer à luz padrões ocultos e auxiliar em decisões urgentes (carreira, relacionamentos e transições). Mapeamento focado em organizar seus pensamentos e recuperar a segurança para agir.",
    features: [
      "Mapeamento do momento atual e próximos passos.",
      "Respostas diretas, sem misticismo exagerado.",
      "Identificação de bloqueios práticos e emocionais.",
    ],
    checkoutLink: "https://loja.infinitepay.io/yuiterapiaholistica/fem3861-sessao-de-tarot-completo---panorama-e-cami",
    buttonText: "VER VALORES E AGENDAR",
  },
  {
    icon: Sparkles,
    title: "Sessão dos Anjos",
    subtitle: "Cura Energética e Emocional",
    description:
      "Uma imersão em frequências de pura luz de anjos e arcanjos. Tratamento focado no expurgo profundo de medos, crenças negativas e travas energéticas para restaurar sua paz e proteção divina.",
    features: [
      "Mapeamento intencional da raiz do desconforto.",
      "Imersão meditativa para liberação de bloqueios.",
      "Alívio de ansiedade e dores físicas sem causa aparente.",
    ],
    checkoutLink: "https://loja.infinitepay.io/yuiterapiaholistica/ojh6954-sessao-dos-anjos",
    buttonText: "VER VALORES E AGENDAR",
  },
  {
    icon: Activity,
    title: "Mesa da Ascensão",
    subtitle: "Intervenção e Conexões de Alma",
    description:
      "Sessão de 1h30 com a ferramenta multidimensional canalizada pela Mestra Nefertiti. Especialmente desenhada para harmonizar conexões complexas (como Chamas Gêmeas), curando feridas e dissolvendo bloqueios no campo energético, mental e emocional.",
    features: [
      "Aferição técnica e tratamento energético personalizado.",
      "Reprogramação de padrões e liberação de bloqueios.",
      "Alinhamento de propósito e elevação vibracional.",
    ],
    checkoutLink: "https://loja.infinitepay.io/yuiterapiaholistica/vwt8716-mesa-da-ascensao",
    buttonText: "VER VALORES E AGENDAR",
  },
  {
    icon: Users,
    title: "Mentoria Vida e Propósito",
    subtitle: "Acompanhamento Individual",
    description:
      "Um processo personalizado para unir a sabedoria ancestral à realidade prática do dia a dia. Ideal para transições de carreira e alinhamento de propósito de alma através da escuta ativa mediúnica.",
    features: [
      "Apoio estruturado em transições complexas.",
      "Ponte entre o universo material e o espiritual.",
      "Mentoria contínua para expansão de consciência.",
    ],
    checkoutLink: "https://loja.infinitepay.io/yuiterapiaholistica/oeg8803-sessao-terapia-consciencial",
    buttonText: "VER VALORES E AGENDAR",
  },
]

export function Servicos() {
  return (
    <section id="atendimentos" className="py-28 lg:py-36">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mb-20 flex flex-col items-center gap-4 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-gold">
            Mapeamento e Intervenção
          </p>
          <h2 className="font-serif text-3xl text-foreground lg:text-5xl">
            Atendimentos e Terapias
          </h2>
          <div className="mt-4 h-px w-16 bg-gold/40" />
        </div>

        {/* Service Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          {services.map((service) => (
            <div
              key={service.title}
              className="group flex flex-col gap-8 rounded-2xl border border-border/50 bg-card p-8 shadow-sm transition-all duration-500 hover:border-gold/30 hover:shadow-md lg:p-10"
            >
              <div className="flex flex-col gap-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/30 bg-lavender">
                  <service.icon
                    className="h-6 w-6 text-gold"
                    strokeWidth={1.5}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-serif text-2xl text-foreground lg:text-3xl">
                    {service.title}
                  </h3>
                  <p className="text-sm uppercase tracking-[0.15em] text-gold">
                    {service.subtitle}
                  </p>
                </div>
              </div>

              <p className="leading-relaxed text-muted-foreground">
                {service.description}
              </p>

              <ul className="flex flex-col gap-3">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-sm text-foreground/80"
                  >
                    <span className="h-1 w-1 rounded-full bg-gold" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-4">
                <a
                  href={service.checkoutLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full gap-3 rounded-full border border-gold/40 px-6 py-4 text-sm font-medium uppercase tracking-[0.15em] text-gold transition-all duration-300 hover:bg-gold hover:text-primary-foreground"
                >
                  {service.buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}