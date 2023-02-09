import { Key } from 'tonal'
import { useState, useEffect } from 'react'

export default function KeyDisplay({ randomKey }) {
  return (
    randomKey && (
      <div className="key-details-wrapper">
        <div className="key-name">
          <p>
            Key of {randomKey.tonic} {randomKey.type}
          </p>
        </div>
        <div className="key-notes">
          {randomKey.type == 'major' ? (
            <p>Notes: {randomKey.scale}</p>
          ) : (
            <>
              <p>Natural Notes: {randomKey.natural.scale}</p>
              <p>Harmonic Notes: {randomKey.harmonic.scale}</p>
              <p>Melodic Notes: {randomKey.melodic.scale}</p>
            </>
          )}
        </div>
        <div className="key-relative">
          <p>
            {randomKey.type == 'major'
              ? 'Relative Minor: ' + randomKey.minorRelative
              : 'Relative Major: ' + randomKey.relativeMajor}
          </p>
        </div>
      </div>
    )
  )
}
