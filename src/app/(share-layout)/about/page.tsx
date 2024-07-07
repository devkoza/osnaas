import AboutusBanner from '@/components/about/hero'
import React from 'react'
import WhoweAre from '@/components/about/who-we-are'
import HowitWorks from '@/components/about/how-it-works'
import SubscriptionBlock from '@/components/subscription/subscription-block'

const About = () => {
  return (
    <div>
      <AboutusBanner />
      <WhoweAre />
      <HowitWorks />
      <SubscriptionBlock />

    </div>
  )
}

export default About