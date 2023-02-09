export default function KeyDisplay({ randomKey }) {
  return (
    randomKey && (
      <div className="key-details-wrapper">
        <p>Key</p>
        <div className="key-name">
          <h2>{randomKey.tonic}</h2>
          <p>{randomKey.type}</p>
        </div>
      </div>
    )
  )
}

// <div className="key-notes">
//   {randomKey.type == 'major' ? (
//     <p>Notes: {randomKey.scale.map((note) => `${note} `)}</p>
//   ) : (
//     <>
//       <p>
//         Natural Notes:{' '}
//         {randomKey.natural.scale.map((note) => `${note} `)}
//       </p>
//       <p>
//         Harmonic Notes:{' '}
//         {randomKey.harmonic.scale.map((note) => `${note} `)}
//       </p>
//       <p>
//         Melodic Notes:{' '}
//         {randomKey.melodic.scale.map((note) => `${note} `)}
//       </p>
//     </>
//   )}
// </div>
// <div className="key-relative">
//   <p>
//     {randomKey.type == 'major'
//       ? 'Relative Minor: ' + randomKey.minorRelative
//       : 'Relative Major: ' + randomKey.relativeMajor}
//   </p>
// </div>
