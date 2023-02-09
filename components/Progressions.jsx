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
      <div className="progressions-wrapper">
        <div className="progressions">
          {randomKey.type == 'major' ? (
            <ul>
              <li>I, IV, V:</li>
              <li>
                {Progression.fromRomanNumerals(randomKey.tonic, [
                  'I',
                  'IV',
                  'V',
                  'IV'
                ])}
              </li>
              <li>I, V, vi, IV</li>
              <li>
                {Progression.fromRomanNumerals(randomKey.tonic, [
                  'I',
                  'V',
                  'VIm',
                  'IV'
                ])}
              </li>
              <li>I, vi, IV, V</li>
              <li>
                {Progression.fromRomanNumerals(randomKey.tonic, [
                  'I',
                  'VIm',
                  'IV',
                  'V'
                ])}
              </li>
            </ul>
          ) : (
            <ul>
              <li>i, iv, V</li>
              <li>
                {Progression.fromRomanNumerals(randomKey.tonic, [
                  'Im',
                  'IVm',
                  'V'
                ])}
              </li>
              <li>i, bVI, bIII, bVII</li>
              <li>
                {Progression.fromRomanNumerals(randomKey.tonic, [
                  'Im',
                  'bVI',
                  'bIII',
                  'bVII'
                ])}
              </li>
            </ul>
          )}
        </div>
      </div>
    )
  )
}
