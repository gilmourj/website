import React from 'react'
import {
  CtaLink,
  CtaAnchorLink,
} from '~components/common/landing-page/call-to-action'
import ctaLinksStyle from './cta-links.module.scss'

const CtaLinks = () => (
  <div className={ctaLinksStyle.links}>
    <CtaLink bold centered to="/race/dashboard">
      See the dashboard
    </CtaLink>
    <CtaAnchorLink
      centered
      href="https://docs.google.com/spreadsheets/d/e/2PACX-1vS8SzaERcKJOD_EzrtCDK1dX1zkoMochlA9iHoHg_RSw3V8bkpfk1mpw4pfL5RdtSOyx_oScsUtyXyk/pub?gid=43720681&single=true&output=csv"
      onClick={() => {
        if (typeof window.fathom !== 'undefined') {
          window.fathom.trackGoal('Y2UISYEJ', 0)
        }
      }}
    >
      Get the complete dataset (CSV)
    </CtaAnchorLink>
    <CtaLink centered to="/race/about">
      Learn more about the tracker
    </CtaLink>
  </div>
)

export default CtaLinks
