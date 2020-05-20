import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@reach/disclosure'
import { CautionSymbol, DisparitySymbol } from './table-symbols'
import tableSymbolStyles from './table-symbol-key.module.scss'

export default () => {
  const [disclosureContent, setDisclosureContent] = useState('notComparible')
  const data = useStaticQuery(graphql`
    query {
      notComparible: contentfulSnippet(
        slug: { eq: "race-dashboard-not-comparable" }
      ) {
        childContentfulSnippetContentTextNode {
          childMarkdownRemark {
            html
          }
        }
      }
      disparity: contentfulSnippet(slug: { eq: "race-dashboard-disparity" }) {
        childContentfulSnippetContentTextNode {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  `)

  return (
    <div className={tableSymbolStyles.container}>
      <Disclosure>
        <p>
          <DisparitySymbol inkey />
          Racial/ethnic disparity likely.{' '}
          <DisclosureButton
            className={tableSymbolStyles.disclosureButton}
            onClick={() => setDisclosureContent('disparity')}
          >
            See why.
          </DisclosureButton>
        </p>
        <p>
          <CautionSymbol inkey />
          Should not be compared with percentage of population.{' '}
          <DisclosureButton
            className={tableSymbolStyles.disclosureButton}
            onClick={() => setDisclosureContent('notComparible')}
          >
            See why.
          </DisclosureButton>
        </p>
        <DisclosurePanel>
          <div
            dangerouslySetInnerHTML={{
              __html:
                data[disclosureContent].childContentfulSnippetContentTextNode
                  .childMarkdownRemark.html,
            }}
          />
        </DisclosurePanel>
      </Disclosure>
    </div>
  )
}