import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Discernimento } from "@/components/discernimento"
import { Servicos } from "@/components/servicos"
import { Depoimentos } from "@/components/depoimentos"
import { Sobre } from "@/components/sobre"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Discernimento />
      <Servicos />
      <Depoimentos />
      <Sobre />
      <Footer />
    </main>
  )
}
