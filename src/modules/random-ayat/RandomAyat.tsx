import { useState } from "react";
import "./RandomAyat.css";
import { constAyat } from "../../constant";
import { convertToBanglaNumber } from "../../util/convertToBanglaNumber";

export default function RandomAyat() {
  const [ayatInfo, setAyatInfo] = useState(constAyat);

  const handleGetAyat = async () => {
    try {
      await fetch("https://pro.proggamoyquran.com/api/v1/filter/daily-ayat")
        .then((data) => data.json())
        .then((ayatData) => {
          setAyatInfo(ayatData.data);
        });
    } catch (error) {
      alert("কিছু ভুল হচ্ছে");
    }
  };

  return (
    <div className="main-div">
      <p className="title">
        {" "}
        <span>👉 আজকের আয়াত:</span>{" "}
        <span onClick={handleGetAyat} id="reload" title="নতুন আয়াত লোড করুন">
          ↻
        </span>
      </p>

      <p className="surahTitle">
        {" "}
        <span id="surahName"> {ayatInfo.surahName} </span>,{" "}
        <span id="ayatNumber">
          {" "}
          আয়াত {convertToBanglaNumber(ayatInfo.ayatNumber)}{" "}
        </span>{" "}
      </p>

      <p dir="rtl" id="arabicAyat">
        {ayatInfo.fullAyat}
      </p>

      <p id="ayatMean"> {ayatInfo.ayatMean} </p>

      <a id="footer" target="_blank" href="https://proggamoyquran.com/">
        Proggamoy Quran
      </a>
    </div>
  );
}
