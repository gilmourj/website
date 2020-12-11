import React from 'react'
import { navigate } from 'gatsby'
import { State } from './states'
import createGrid from './create-grid'
import { mobileGrid } from '../state-matrix'
import mapStyle from './us-map.module.scss'

const Grid = ({ states }) => {
  const { stateHexes, width, height } = createGrid(states, mobileGrid)
  return (
    <div>
      <svg
        className={mapStyle.grid}
        style={{ width: '100%', height: '100%' }}
        viewBox={`0 0 ${width} ${height}`}
        tabIndex="0"
        aria-hidden
      >
        {stateHexes.map(({ x, y, r, state }) => (
          <State
            x={x}
            y={y}
            r={r}
            state={state}
            onClick={() => {
              navigate(`/data/state/${state.childSlug.slug}`)
            }}
          />
        ))}
      </svg>
    </div>
  )
}

export default Grid