import React from 'react'
import ServiceHero from '../../components/ServiceHero/ServiceHero'
import ServiceGrid from '../../components/ServiceGrid/ServiceGrid'
import ProcessMetrics from '../../components/ProcessMetrics/ProcessMetrics'
import ProjectCareers from '../../components/ProjectCareers/ProjectCareers'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

export default function Services() {
  return (
    <div>
        <Header />
        <ServiceHero />
        <ServiceGrid />
        <ProcessMetrics />
        <ProjectCareers />
        <Footer />
    </div>
  )
}
