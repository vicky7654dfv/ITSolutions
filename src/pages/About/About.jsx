import React from 'react'
import AboutIntro from '../../components/AboutIntro/AboutIntro'
import FoundersGrid from '../../components/FoundersGrid/FoundersGrid'
import VisionMission from '../../components/VisionMission/VisionMission'
import ValuesTeam from '../../components/ValuesTeam/ValuesTeam'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'

export default function About() {
  return (
    <div>
        <Header />
        <AboutIntro />
        <FoundersGrid />
        <VisionMission />
        <ValuesTeam />
        <Footer />
    </div>
  )
}
