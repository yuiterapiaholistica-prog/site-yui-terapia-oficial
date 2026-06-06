import { Sparkles, Users, Compass, Activity } from "lucide-react"

const services = [
  {
    icon: Compass,
    title: "Tarot Terapêutico Online",
    subtitle: "Investigação de cenários e direcionamento prático",
    description:
      "Uma análise focada no seu momento atual para organizar os pensamentos e delimitar caminhos em momentos de escolhas complexas, carreira ou relacionamentos. Uma abordagem direta, prática e sem misticismo passivo.",
    features: [
      "Mapeamento objetivo do panorama atual.",
      "Identificação de bloqueios e desafios práticos.",
      "Sessão individual de 1 hora com hora marcada.",
    ],
    checkoutLink: "https://loja.infinitepay.io/yuiterapiaholistica/fem3861-sessao-de-tarot-completo---panorama-e-cami",
    buttonText: "VER VALORES E AGENDAR",
  },
  {
    icon: Activity,
    title: "Consultoria Integrativa Individual",
    subtitle: "Organização mental e regulação emocional",
    description:
      "O atendimento individual mais completo. Unimos o rigor analítico à percepção sutil, integrando neurociência aplicada, técnicas de atenção plena e outras ferramentas personalizadas para mapear padrões repetitivos e resgatar a sua estabilidade interna.",
    features: [
      "Ideal para rotinas de alta demanda e transições.",
      "Abordagem customizada voltada para a sua autonomia.",
      "Sessão individual de 1 hora (100% online).",
    ],
    checkoutLink: "https://loja.infinitepay.io/yuiterapiaholistica/unb1358-ciclo-de-acompanhamento-individual---vida-",
    buttonText: "VER VALORES E AGENDAR",
  },
  {
    icon: Users,
    title: "Círculo: Expansão da Consciência",
    subtitle: "Suporte e experiências compartilhadas",
    description:
      "Ciclo mensal fechado baseado em inteligência coletiva e práticas de percepção sutil. Encontros semanais desenhados para reduzir o ruído mental, recuperar o foco e fortalecer a sua soberania interna diante dos desafios do cotidiano.",
    features: [
      "4 encontros online por mês (um por semana).",
      "Diálogos de espelhamento e suporte mútuo.",
      "Direcionamento individualizado em cada sessão.",
    ],
    checkoutLink: "https://loja.infinitepay.io/yuiterapiaholistica/yyp6619-circulo-de-acompanhamento-a-jornada-da-asc",
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
            Processos customizados de bem-estar
          </p>
          <h2 className="font-serif text-3xl text-foreground lg:text-5xl">
            Sessões e Mentorias Integrativas
          </h2>
          <div className="mt-4 h-px w-16 bg-gold/40" />
        </div>

        {/* Service Cards */}
        <div className="grid gap-8 lg:grid-cols-3 lg:gap-12">
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