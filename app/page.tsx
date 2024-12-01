const audioFiles = [
  { name: "Alarm Clock", original: "original/Alarm_Clock.wav", kaiser: "kaiser/processed_Alarm_Clock.wav", improvedKaiser: "improved-kaiser/processed_Alarm_Clock.wav", hamming: "hamming/processed_Alarm_Clock.wav" },
  { name: "Classroom", original: "original/Classroom.wav", kaiser: "kaiser/processed_Classroom.wav", improvedKaiser: "improved-kaiser/processed_Classroom.wav", hamming: "hamming/processed_Classroom.wav" },
  { name: "Female Speech", original: "original/Female_Speech.wav", kaiser: "kaiser/processed_Female_Speech.wav", improvedKaiser: "improved-kaiser/processed_Female_Speech.wav", hamming: "hamming/processed_Female_Speech.wav" },
  { name: "Instrumental Piano Sound", original: "original/Instrumental_Piano_Sound.wav", kaiser: "kaiser/processed_Instrumental_Piano_Sound.wav", improvedKaiser: "improved-kaiser/processed_Instrumental_Piano_Sound.wav", hamming: "hamming/processed_Instrumental_Piano_Sound.wav" },
  { name: "Male Speech", original: "original/Male_Speech.wav", kaiser: "kaiser/processed_Male_Speech.wav", improvedKaiser: "improved-kaiser/processed_Male_Speech.wav", hamming: "hamming/processed_Male_Speech.wav" },
  { name: "One Speaker to Multiple", original: "original/One_Speaker_to_Multiple.wav", kaiser: "kaiser/processed_One_Speaker_to_Multiple.wav", improvedKaiser: "improved-kaiser/processed_One_Speaker_to_Multiple.wav", hamming: "hamming/processed_One_Speaker_to_Multiple.wav" },
  { name: "Squash Ball", original: "original/Squash_Ball.wav", kaiser: "kaiser/processed_Squash_Ball.wav", improvedKaiser: "improved-kaiser/processed_Squash_Ball.wav", hamming: "hamming/processed_Squash_Ball.wav" },
  { name: "Street", original: "original/Street.wav", kaiser: "kaiser/processed_Street.wav", improvedKaiser: "improved-kaiser/processed_Street.wav", hamming: "hamming/processed_Street.wav" },
  { name: "Talking Normal to Whispering", original: "original/Talking_Normal_to_Whispering.wav", kaiser: "kaiser/processed_Talking_Normal_to_Whispering.wav", improvedKaiser: "improved-kaiser/processed_Talking_Normal_to_Whispering.wav", hamming: "hamming/processed_Talking_Normal_to_Whispering.wav" },
];

export default function Home() {
  return (
    <div className="min-h-screen p-8 bg-gradient-to-r from-gray-50 to-gray-200">
      <h1
  className="mb-6  pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-500/80 bg-clip-text text-center text-3xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10"
  data-aos="zoom-y-out"
  data-aos-delay={150}
>
  Group 18 SYDE252 Final Project: Cochlear Implant
</h1><h1
  className="mb-6  pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-purple-900 to-white/20 bg-clip-text text-center text-7xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10"
  data-aos="zoom-y-out"
  data-aos-delay={150}
>
  Audio Comparison Table <span className="text-black !bg-none !text-8xl !font-normal">🦻🏼</span>
</h1>
      <div className="overflow-x-auto shadow-lg rounded-lg bg-white">
        <table className="table-auto border-collapse w-full text-sm text-left">
          <thead>
            <tr className="bg-purple-700 text-white">
              <th className="px-6 py-4 font-semibold uppercase tracking-wide">Name of Audio</th>
              <th className="px-6 py-4 font-semibold uppercase tracking-wide">Original Sound</th>
              <th className="px-6 py-4 font-semibold uppercase tracking-wide">Kaiser Window</th>
              <th className="px-6 py-4 font-semibold uppercase tracking-wide">Improved Kaiser Window</th>
              <th className="px-6 py-4 font-semibold uppercase tracking-wide">Hamming Window</th>
            </tr>
          </thead>
          <tbody>
            {audioFiles.map((audio, index) => (
              <tr
                key={index}
                className={`border-b last:border-b-0 ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-gray-100`}
              >
                <td className="px-6 py-4 text-gray-800 font-medium">{audio.name}</td>
                <td className="px-6 py-4">
                  <audio controls src={`/audio/${audio.original}`} className="w-full rounded" />
                </td>
                <td className="px-6 py-4">
                  <audio controls src={`/audio/${audio.kaiser}`} className="w-full rounded" />
                </td>
                <td className="px-6 py-4">
                  <audio controls src={`/audio/${audio.improvedKaiser}`} className="w-full rounded" />
                </td>
                <td className="px-6 py-4">
                  <audio controls src={`/audio/${audio.hamming}`} className="w-full rounded" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}