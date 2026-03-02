import { Sparkles, Users } from "lucide-react"

// 1. Aqui estão os dados. Adicionamos link e texto do botão específicos para cada um.
const services = [
  {
    icon: Sparkles,
    title: "Atendimento Individual",
    subtitle: "Vida e Propósito",
    description:
      "Um processo personalizado de autoconhecimento com foco total na sua história. Através da escuta ativa, trabalhamos para alinhar suas escolhas à sua verdade, organizando pensamentos e acalmando as emoções para que você encontre o seu próximo passo com segurança.",
    features: [
      "Mergulho profundo na sua história e desafios.",
      "Apoio em transições profissionais e pessoais.",
      "Organização mental para recuperar a segurança.",
    ],
    whatsappLink: "https://wa.me/5511914051714?text=Olá+Adriana,+gostaria+de+saber+mais+sobre+o+atendimento+individual.",
    buttonText: "AGENDAR INDIVIDUAL",
  },
  {
    icon: Users,
    title: "Trabalho Coletivo",
    subtitle: "Evolução e Apoio Compartilhado",
    description:
      "Um espaço de troca onde a vivência do outro amplia a percepção sobre si mesmo. Juntos, identificamos padrões repetitivos e fortalecemos sua evolução com o apoio e a energia do grupo.",
    features: [
      "Evolução consciente através da troca mútua.",
      "Identificação de padrões de comportamento.",
      "Expansão de consciência em ambiente seguro.",
    ],
    whatsappLink: "https://wa.me/5511914051714?text=Olá+Adriana,+gostaria+de+saber+mais+sobre+o+trabalho+coletivo+e+os+círculos.",
    buttonText: "SABER MAIS SOBRE O COLETIVO",
  },
]

export function Servicos() {
  return (
    <section id="atendimentos" className="py-28 lg:py-36">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mb-20 flex flex-col items-center gap-4 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-gold">
            Caminhos de Evolução
          </p>
          <h2 className="font-serif text-4xl text-foreground lg:text-5xl">
            Atendimentos
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
                {/* 2. Aqui o botão agora lê os dados dinâmicos usando {service.whatsappLink} e {service.buttonText} */}
                <a
                  href={service.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full gap-3 rounded-full border border-gold/40 px-6 py-4 text-sm font-medium uppercase tracking-[0.15em] text-gold transition-all duration-300 hover:bg-gold hover:text-primary-foreground"
                >
                  <svg
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
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