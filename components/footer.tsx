import { MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer id="contato" className="border-t border-border/30 py-16 lg:py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-6">
        
        {/* Brand - Chamada Espartana */}
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="font-serif text-2xl tracking-wide text-gold">
            Entre em contato para mais informações e agende a sua sessão.
          </p>
        </div>
      
        {/* CTAs, Social & Disclaimer */}
        <div className="flex flex-col items-center gap-6">
          
          {/* Botões */}
          <div className="flex flex-col sm:flex-row items-center gap-6">
            {/* WhatsApp Direto */}
            <a
              href="https://wa.me/5511914051714?text=Ol%C3%A1%20Yui%2C%20vim%20pelo%20seu%20site%20e%20gostaria%20de%20agendar%20uma%20sess%C3%A3o."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-gold px-8 py-3 text-sm font-medium uppercase tracking-wider text-white transition-all hover:bg-gold/90"
            >
              <MessageCircle className="h-5 w-5" />
              Falar no WhatsApp
            </a>

            <div className="flex items-center gap-4">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/yuiterapiaholistica"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border/50 text-muted-foreground transition-all duration-300 hover:border-gold/40 hover:text-gold"
                aria-label="Instagram da Yui Terapia Holística"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com/@yuiterapiaholistica"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border/50 text-muted-foreground transition-all duration-300 hover:border-gold/40 hover:text-gold"
                aria-label="YouTube da Yui Terapia Holística"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Nota de Responsabilidade - Reposicionada */}
          <p className="max-w-3xl text-[11px] leading-relaxed text-muted-foreground/80 text-center mt-2 px-4">
            <strong>Nota de responsabilidade:</strong> As sessões e mentorias integrativas oferecidas neste site atuam exclusivamente nas esferas de bem-estar, autoconhecimento e desenvolvimento pessoal. Elas não constituem, substituem, eliminam ou suspendem cuidados, acompanhamentos ou tratamentos médicos, alopáticos, psiquiátricos ou psicológicos.
          </p>
        </div>
        
        {/* Copyright Final */}
        <div className="mt-8 w-full border-t border-border/30 pt-8 text-center text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Yui Terapia Holística. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}