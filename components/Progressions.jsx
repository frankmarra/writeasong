import { Progression } from 'tonal'
import { useEffect, useState } from 'react'

export default function Progressions(props) {
  let randomKey = props.randomKey
  const [randomProgressions, setRandomProgressions] = useState([])
  const [progressions, setProgressions] = useState([])

  useEffect(() => {
    if (randomKey) {
      getRandomProgressions(randomKey)
    }
  }, [randomKey])

  const getRandomProgressions = (randomKey) => {
    let majorProgressions = [
      [
        ['I', 'IV', 'V', 'IV'],
        Progression.fromRomanNumerals(randomKey.tonic, ['I', 'IV', 'V', 'IV'])
      ],
      [
        ['I', 'V', 'vi', 'IV'],
        Progression.fromRomanNumerals(randomKey.tonic, ['I', 'V', 'VIm', 'IV'])
      ],
      [
        ['I', 'vi', 'IV', 'V'],
        Progression.fromRomanNumerals(randomKey.tonic, ['I', 'VIm', 'IV', 'V'])
      ],
      [
        ['I', 'V', 'IV'],
        Progression.fromRomanNumerals(randomKey.tonic, ['I', 'V', 'IV'])
      ],
      [
        ['vi', 'IV', 'I', 'V'],
        Progression.fromRomanNumerals(randomKey.tonic, ['VIm', 'IV', 'I', 'V'])
      ]
    ]

    let minorProgressions = [
      [
        ['i', 'bVI', 'bIII', 'bVII'],
        Progression.fromRomanNumerals(randomKey.tonic, [
          'Im',
          'bVI',
          'bIII',
          'bVII'
        ])
      ],
      [
        ['i', 'iv', 'V'],
        Progression.fromRomanNumerals(randomKey.tonic, ['Im', 'IVm', 'V'])
      ],
      [
        ['i', 'iv', 'III', 'VI'],
        Progression.fromRomanNumerals(randomKey.tonic, [
          'Im',
          'IVm',
          'III',
          'VI'
        ])
      ],
      [
        ['i', 'III', 'VII', 'v'],
        Progression.fromRomanNumerals(randomKey.tonic, [
          'Im',
          'III',
          'VII',
          'Vm'
        ])
      ],
      [
        ['i', 'VII', 'VI', 'VII'],
        Progression.fromRomanNumerals(randomKey.tonic, [
          'Im',
          'VII',
          'VI',
          'VII'
        ])
      ]
    ]

    let picks = []
    for (let x = 0; x < 3; x++) {
      if (randomKey.type == 'major') {
        if (picks == []) {
          picks.push(
            majorProgressions[
              Math.floor(Math.random() * majorProgressions.length)
            ]
          )
        } else {
          let newPick =
            majorProgressions[
              Math.floor(Math.random() * majorProgressions.length)
            ]
          if (!picks.includes(newPick)) {
            picks.push(newPick)
          } else {
            x--
          }
        }
      } else {
        if (picks == []) {
          picks.push(
            minorProgressions[
              Math.floor(Math.random() * minorProgressions.length)
            ]
          )
        } else {
          let newPick =
            minorProgressions[
              Math.floor(Math.random() * minorProgressions.length)
            ]
          if (!picks.includes(newPick)) {
            picks.push(newPick)
          } else {
            x--
          }
        }
      }
    }
    setRandomProgressions(picks)
  }

  return props.randomKey ? (
    <div style={{ textAlign: 'center', marginBottom: '2vh' }}>
      <div className="card">
        <p>Progressions</p>
        <div className="progressions">
          {randomProgressions.map((progression, index) => (
            <div className="progression" key={index}>
              <div className="numeral">
                {progression[0].map((numeral, index) => (
                  <span key={index}>{numeral}</span>
                ))}
              </div>
              <div className="chords">
                {progression[1].map((note, index) => (
                  <span key={index}>{note}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        className="generate-button random"
        onClick={() => getRandomProgressions(randomKey)}
      >
        Randomize
      </button>
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
