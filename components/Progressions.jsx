import { Progression } from 'tonal'
import { useEffect, useState } from 'react'

export default function Progressions(props) {
  let randomKey = props.randomKey
  const [randomProgressions, setRandomProgressions] = useState([])
  const [progressions, setProgressions] = useState([])

  useEffect(() => {
    if (randomKey) {
      getProgressions(randomKey)
    }
  }, [randomKey])
  const getProgressions = (randomKey) => {
    let standardProgressions = [
      [
        'I - IV - V - IV',
        Progression.fromRomanNumerals(randomKey.tonic, ['I', 'IV', 'V', 'IV'])
      ],
      [
        'I - V - vi - IV',
        Progression.fromRomanNumerals(randomKey.tonic, ['I', 'V', 'VIm', 'IV'])
      ],
      [
        'I - vi - IV - V',
        Progression.fromRomanNumerals(randomKey.tonic, ['I', 'VIm', 'IV', 'V'])
      ],
      [
        'i - iv - V',
        Progression.fromRomanNumerals(randomKey.tonic, ['Im', 'IVm', 'V'])
      ],
      [
        'i - bVI - bIII - bVII',
        Progression.fromRomanNumerals(randomKey.tonic, [
          'Im',
          'bVI',
          'bIII',
          'bVII'
        ])
      ],
      [
        'I - V - IV',
        Progression.fromRomanNumerals(randomKey.tonic, ['I', 'V', 'IV'])
      ],
      [
        'vi - IV - I - V',
        Progression.fromRomanNumerals(randomKey.tonic, ['VIm', 'IV', 'I', 'V'])
      ]
    ]

    let picks = []
    for (let x = 0; x < 3; x++) {
      if (picks == []) {
        picks.push(
          standardProgressions[
            Math.floor(Math.random() * standardProgressions.length)
          ]
        )
      } else {
        let newPick =
          standardProgressions[
            Math.floor(Math.random() * standardProgressions.length)
          ]
        if (!picks.includes(newPick)) {
          picks.push(newPick)
        } else {
          x--
        }
      }
    }
    setRandomProgressions(picks)
  }
  return props.randomKey ? (
    <div className="card" onClick={() => getProgressions(randomKey)}>
      <p>Progressions</p>
      <div className="progressions">
        {randomProgressions.map((progression, index) => (
          <div className="progression" key={index}>
            <div className="numeral">{progression[0]}</div>
            <div className="chords">
              {progression[1].map((note, index) =>
                index + 1 == progression[1].length ? `${note}` : `${note} - `
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <p>loading...</p>
  )
}

// <div className="progressions">
//   {randomKey.type == 'major' ? (
//     <ul>
//       <li>I IV V IV</li>
//       <li>
//         {Progression.fromRomanNumerals(randomKey.tonic, [
//           'I',
//           'IV',
//           'V',
//           'IV'
//         ]).map((note) => `${note} `)}
//       </li>
//       <li>I V vi IV</li>
//       <li>
//         {Progression.fromRomanNumerals(randomKey.tonic, [
//           'I',
//           'V',
//           'VIm',
//           'IV'
//         ]).map((note) => `${note} `)}
//       </li>
//       <li>I vi IV V</li>
//       <li>
//         {Progression.fromRomanNumerals(randomKey.tonic, [
//           'I',
//           'VIm',
//           'IV',
//           'V'
//         ]).map((note) => `${note} `)}
//       </li>
//     </ul>
//   ) : (
//     <ul>
//       <li>i iv V</li>
//       <li>
//         {Progression.fromRomanNumerals(randomKey.tonic, [
//           'Im',
//           'IVm',
//           'V'
//         ]).map((note) => `${note} `)}
//       </li>
//       <li>i bVI bIII bVII</li>
//       <li>
//         {Progression.fromRomanNumerals(randomKey.tonic, [
//           'Im',
//           'bVI',
//           'bIII',
//           'bVII'
//         ]).map((note) => `${note} `)}
//       </li>
//     </ul>
//   )}
// </div>

// const getProgressions = (randomKey) => {
//   if (randomKey.tonic) {
//     let standardProgressions = [
//       [
//         'I - IV - V - IV',
//         Progression.fromRomanNumerals(randomKey.tonic, ['I', 'IV', 'V', 'IV'])
//       ],
//       [
//         'I - V - vi - IV',
//         Progression.fromRomanNumerals(randomKey.tonic, [
//           'I',
//           'V',
//           'VIm',
//           'IV'
//         ])
//       ],
//       [
//         'I - vi - IV - V',
//         Progression.fromRomanNumerals(randomKey.tonic, [
//           'I',
//           'VIm',
//           'IV',
//           'V'
//         ])
//       ],
//       [
//         'i - iv - V',
//         Progression.fromRomanNumerals(randomKey.tonic, ['Im', 'IVm', 'V'])
//       ],
//       [
//         'i - bVI - bIII - bVII',
//         Progression.fromRomanNumerals(randomKey.tonic, [
//           'Im',
//           'bVI',
//           'bIII',
//           'bVII'
//         ])
//       ],
//       [
//         'I - V - IV',
//         Progression.fromRomanNumerals(randomKey.tonic, ['I', 'V', 'IV'])
//       ],
//       [
//         'vi - IV - I - V',
//         Progression.fromRomanNumerals(randomKey.tonic, [
//           'VIm',
//           'IV',
//           'I',
//           'V'
//         ])
//       ]
//     ]
//   }
//   let picks = []
//   for (let x = 0; x < 3; x++) {
//     if (picks == []) {
//       picks.push(
//         standardProgressions[
//           Math.floor(Math.random() * standardProgressions.length)
//         ]
//       )
//     } else {
//       let newPick =
//         standardProgressions[
//           Math.floor(Math.random() * standardProgressions.length)
//         ]
//       if (!picks.includes(newPick)) {
//         picks.push(newPick)
//       } else {
//         x--
//       }
//     }
//   }
//   setRandomProgressions(picks)
// }
