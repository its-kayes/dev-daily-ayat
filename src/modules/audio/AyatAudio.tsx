import "./AyatAudio.css";

export default function AyatAudio() {
  const audioUrl =
    "https://paiq-dev-v2.s3.ap-southeast-1.amazonaws.com/32356_surah-1-ayat-2.mp3";

  return (
    <div>
      {" "}
      AyatAudio
      <audio id="audioPlayer" autoPlay={false} controls preload="metadata">
        Your browser does not support the audio element.
        <source src={audioUrl} type="audio/mp3" />
      </audio>
    </div>
  );
}
