import HeroFeatures from '../components/HeroFeatures.js'
import Hero from '../components/Hero'
import HeroSectionOne from '../components/HeroSectionOne.js'
import HeroSectionTwo from '../components/HeroSectionTwo.js'
import HeroContact from '../components/HeroContact.js'
import { Header } from '../components/Header.js'
export default function Home() {
  return (
    <>
      <div>
        {/* <Header /> */}
        <Hero />
        <main className="flex flex-col justify-center items-center mx-auto">
          <HeroFeatures />
          <HeroSectionOne />
          <HeroSectionTwo />
          <HeroContact />
        </main>
      </div>
    </>
  )
}
