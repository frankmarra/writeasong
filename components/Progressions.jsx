import { Progression } from 'tonal'

export default function Progressions({ randomKey }) {
  // const majorProgressions = [
  //   [
  //     'I, IV, V, IV',
  //     Progression.fromRomanNumerals(randomKey.tonic, ['I', 'IV', 'V', 'IV'])
  //   ],
  //   [
  //     'I, V, vi, IV',
  //     Progression.fromRomanNumerals(randomKey.tonic, ['I', 'V', 'VIm', 'IV'])
  //   ],
  //   [
  //     'I, vi, IV, V',
  //     Progression.fromRomanNumerals(randomKey.tonic, ['I', 'VIm', 'IV', 'V'])
  //   ],
  //   [
  //     'I, V, vi, iii, IV, I, IV, V',
  //     Progression.fromRomanNumerals(randomKey.tonic, [
  //       'I',
  //       'V',
  //       'vi',
  //       'iii',
  //       'IV',
  //       'I',
  //       'IV',
  //       'V'
  //     ])
  //   ]
  // ]
  // const minorProgressions = [
  //   [
  //     'i, iv, V',
  //     Progression.fromRomanNumerals(randomKey.tonic, ['Im', 'IVm', 'V'])
  //   ],
  //   [
  //     'i, bVI, bIII, bVII',
  //     Progression.fromRomanNumerals(randomKey.tonic, [
  //       'Im',
  //       'bVI',
  //       'bIII',
  //       'bVII'
  //     ])
  //   ]
  // ]

  return (
    randomKey && (
      <div className="card">
        <p>Progressions</p>
        <div className="progressions">
          {randomKey.type == 'major' ? (
            <ul>
              <li>I IV V IV</li>
              <li>
                {Progression.fromRomanNumerals(randomKey.tonic, [
                  'I',
                  'IV',
                  'V',
                  'IV'
                ]).map((note) => `${note} `)}
              </li>
              <li>I V vi IV</li>
              <li>
                {Progression.fromRomanNumerals(randomKey.tonic, [
                  'I',
                  'V',
                  'VIm',
                  'IV'
                ]).map((note) => `${note} `)}
              </li>
              <li>I vi IV V</li>
              <li>
                {Progression.fromRomanNumerals(randomKey.tonic, [
                  'I',
                  'VIm',
                  'IV',
                  'V'
                ]).map((note) => `${note} `)}
              </li>
            </ul>
          ) : (
            <ul>
              <li>i iv V</li>
              <li>
                {Progression.fromRomanNumerals(randomKey.tonic, [
                  'Im',
                  'IVm',
                  'V'
                ]).map((note) => `${note} `)}
              </li>
              <li>i bVI bIII bVII</li>
              <li>
                {Progression.fromRomanNumerals(randomKey.tonic, [
                  'Im',
                  'bVI',
                  'bIII',
                  'bVII'
                ]).map((note) => `${note} `)}
              </li>
            </ul>
          )}
        </div>
      </div>
    )
  )
}
