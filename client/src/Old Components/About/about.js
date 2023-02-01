import { React, useState, useEffect } from "react";
import { AboutText } from "./aboutObject";
import "./about.css";

const About = () => {

  const data = AboutText;

  const textState = "istyping";
  const [typing, setTyping] = useState(textState[0]);

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  //TODO Move this to a separate file and pass in the text as a prop
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState(null);
  const [text3, setText3] = useState(null);
  const [text4, setText4] = useState(null);
  const [text5, setText5] = useState(null);
  const [text6, setText6] = useState(null);
  const [text7, setText7] = useState(null);
  const [text8, setText8] = useState(null);
  const [text9, setText9] = useState(null);
  const [text10, setText10] = useState(null);
  const [text11, setText11] = useState(null);
  const [text12, setText12] = useState(null);
  const [text13, setText13] = useState(null);
  const [text14, setText14] = useState(null);
  const [text15, setText15] = useState(null);
  const [text16, setText16] = useState(null);
  const [text17, setText17] = useState(null);
  const [text18, setText18] = useState(null);
  const [text19, setText19] = useState(null);
  const [text20, setText20] = useState(null);
  const [text21, setText21] = useState(null);
  const [text22, setText22] = useState(null);
  const [text23, setText23] = useState(null);
  const [text24, setText24] = useState(null);
  const [text25, setText25] = useState(null);
  const [text26, setText26] = useState(null);
  const [text27, setText27] = useState(null);
  const [text28, setText28] = useState(null);
  const [text29, setText29] = useState(null);
  const [text30, setText30] = useState(null);
  const [text31, setText31] = useState(null);
  const [text32, setText32] = useState(null);
  const [text33, setText33] = useState(null);
  const [text34, setText34] = useState(null);
  const [text35, setText35] = useState(null);
  const [text36, setText36] = useState(null);
  const [text37, setText37] = useState(null);
  const [text38, setText38] = useState(null);
  const [text39, setText39] = useState(null);
  const [text40, setText40] = useState(null);

  // TODO Move this to a separate util file
  //
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (text1 !== data.first_text) {
        setText1(data.first_text.slice(0, text1.length + 1));
      } else if (text1 === data.first_text) {
        setText2(data.second_text.slice(0, 1));
      }
    }, 25);
    return () => clearTimeout(timeout);
  }, [text1]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (text2 !== data.second_text) {
        setText2(data.second_text.slice(0, text2.length + 1));
      } else if (text2 === data.second_text) {
        setText3(data.third_text.slice(0, 1));
      }
    }, 25);
    return () => clearTimeout(timeout);
  }, [text2]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (text3 !== data.third_text) {
        setText3(data.third_text.slice(0, text3.length + 1));
      } else if (text3 === data.third_text) {
        setText4(data.fourth_text.slice(0, 1));
      }
    }, 25);
    return () => clearTimeout(timeout);
  }, [text3]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (text4 !== data.fourth_text) {
        setText4(data.fourth_text.slice(0, text4.length + 1));
      } else if (text4 === data.fourth_text) {
        setText5(data.fifth_text.slice(0, 1));
      }
    }, 25);
    return () => clearTimeout(timeout);
  }, [text4]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (text5 !== data.fifth_text) {
        setText5(data.fifth_text.slice(0, text5.length + 1));
      } else if (text5 === data.fifth_text) {
        setText6(data.sixth_text.slice(0, 1));
      }
    }, 25);
    return () => clearTimeout(timeout);
  }, [text5]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (text6 !== data.sixth_text) {
        setText6(data.sixth_text.slice(0, text6.length + 1));
      } else if (text6 === data.sixth_text) {
        setText7(data.seventh_text.slice(0, 1));
      }
    }, 25);
    return () => clearTimeout(timeout);
  }, [text6]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (text7 !== data.seventh_text) {
        setText7(data.seventh_text.slice(0, text7.length + 1));
      } else if (text7 === data.seventh_text) {
        setText8(data.eighth_text.slice(0, 1));
      }
    }, 25);
    return () => clearTimeout(timeout);
  }, [text7]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (text8 !== data.eighth_text) {
        setText8(data.eighth_text.slice(0, text8.length + 1));
      } else if (text8 === data.eighth_text) {
        setText9(data.ninth_text.slice(0, 1));
      }
    }, 25);
    return () => clearTimeout(timeout);
  }, [text8]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (text9 !== data.ninth_text) {
        setText9(data.ninth_text.slice(0, text9.length + 1));
      } else if (text9 === data.ninth_text) {
        setText10(data.tenth_text.slice(0, 1));
      }
    }, 25);
    return () => clearTimeout(timeout);
  }, [text9]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (text10 !== data.tenth_text) {
        setText10(data.tenth_text.slice(0, text10.length + 1));
      } else if (text10 === data.tenth_text) {
        setText11(data.eleventh_text.slice(0, 1));
      }
    }, 25);
    return () => clearTimeout(timeout);
  }, [text10]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (text11 !== data.eleventh_text) {
        setText11(data.eleventh_text.slice(0, text11.length + 1));
      } else if (text11 === data.eleventh_text) {
        setText12(data.twelfth_text.slice(0, 1));
      }
    }, 25);
    return () => clearTimeout(timeout);
  }, [text11]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (text12 !== data.twelfth_text) {
        setText12(data.twelfth_text.slice(0, text12.length + 1));
      } else if (text12 === data.twelfth_text) {
        setText13(data.thirteenth_text.slice(0, 1));
      }
    }, 25);
    return () => clearTimeout(timeout);
  }, [text12]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (text13 !== data.thirteenth_text) {
        setText13(data.thirteenth_text.slice(0, text13.length + 1));
      } else if (text13 === data.thirteenth_text) {
        setText14(data.fourteenth_text.slice(0, 1));
      }
    }, 25);
    return () => clearTimeout(timeout);
  }, [text13]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (text14 !== data.fourteenth_text) {
        setText14(data.fourteenth_text.slice(0, text14.length + 1));
      } else if (text14 === data.fourteenth_text) {
        setText15(data.fifteenth_text.slice(0, 1));
      }
    }, 25);
    return () => clearTimeout(timeout);
  }, [text14]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (text15 !== data.fifteenth_text) {
        setText15(data.fifteenth_text.slice(0, text15.length + 1));
      } else if (text15 === data.fifteenth_text) {
        setText16(data.sixteenth_text.slice(0, 1));
      }
    }, 25);
    return () => clearTimeout(timeout);
  }, [text15]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (text16 !== data.sixteenth_text) {
        setText16(data.sixteenth_text.slice(0, text16.length + 1));
      } else if (text16 === data.sixteenth_text) {
        setText17(data.seventeenth_text.slice(0, 1));
      }
    }, 25);
    return () => clearTimeout(timeout);
  }, [text16]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (text17 !== data.seventeenth_text) {
        setText17(data.seventeenth_text.slice(0, text17.length + 1));
      } else if (text17 === data.seventeenth_text) {
        setText18(data.eighteenth_text.slice(0, 1));
      }
    }, 25);
    return () => clearTimeout(timeout);
  }, [text17]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (text18 !== data.eighteenth_text) {
        setText18(data.eighteenth_text.slice(0, text18.length + 1));
      } else if (text18 === data.eighteenth_text) {
        setText19(data.nineteenth_text.slice(0, 1));
      }
    }, 25);
    return () => clearTimeout(timeout);
  }, [text18]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (text19 !== data.nineteenth_text) {
        setText19(data.nineteenth_text.slice(0, text19.length + 1));
      } else if (text19 === data.nineteenth_text) {
        setText20(data.twentieth_text.slice(0, 1));
      }
    }, 25);
    return () => clearTimeout(timeout);
  }, [text19]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (text20 !== data.twentieth_text) {
        setText20(data.twentieth_text.slice(0, text20.length + 1));
      } else if (text20 === data.twentieth_text) {
        setText21(data.twenty_first_text.slice(0, 1));
      }
    }, 25);
    return () => clearTimeout(timeout);
  }, [text20]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (text21 !== data.twenty_first_text) {
        setText21(data.twenty_first_text.slice(0, text21.length + 1));
      } else if (text21 === data.twenty_first_text) {
        setText22(data.twenty_second_text.slice(0, 1));
      }
    }, 25);
    return () => clearTimeout(timeout);
  }, [text21]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (text22 !== data.twenty_second_text) {
        setText22(data.twenty_second_text.slice(0, text22.length + 1));
      } else if (text22 === data.twenty_second_text) {
        setText23(data.twenty_third_text.slice(0, 1));
      }
    }, 25);
    return () => clearTimeout(timeout);
  }, [text22]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (text23 !== data.twenty_third_text) {
        setText23(data.twenty_third_text.slice(0, text23.length + 1));
      } else if (text23 === data.twenty_third_text) {
        setText24(data.twenty_fourth_text.slice(0, 1));
      }
    }, 25);
    return () => clearTimeout(timeout);
  }, [text23]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (text24 !== data.twenty_fourth_text) {
        setText24(data.twenty_fourth_text.slice(0, text24.length + 1));
      } else if (text24 === data.twenty_fourth_text) {
        setText25(data.twenty_fifth_text.slice(0, 1));
      }
    }, 25);
    return () => clearTimeout(timeout);
  }, [text24]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (text25 !== data.twenty_fifth_text) {
        setText25(data.twenty_fifth_text.slice(0, text25.length + 1));
      } else if (text25 === data.twenty_fifth_text) {
        setText26(data.twenty_sixth_text.slice(0, 1));
      }
    }, 25);
    return () => clearTimeout(timeout);
  }, [text25]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (text26 !== data.twenty_sixth_text) {
        setText26(data.twenty_sixth_text.slice(0, text26.length + 1));
      } else if (text26 === data.twenty_sixth_text) {
        setText27(data.twenty_seventh_text.slice(0, 1));
      }
    }, 25);
    return () => clearTimeout(timeout);
  }, [text26]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (text27 !== data.twenty_seventh_text) {
        setText27(data.twenty_seventh_text.slice(0, text27.length + 1));
      } else if (text27 === data.twenty_seventh_text) {
        setText28(data.twenty_eighth_text.slice(0, 1));
      }
    }, 25);
    return () => clearTimeout(timeout);
  }, [text27]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (text28 !== data.twenty_eighth_text) {
        setText28(data.twenty_eighth_text.slice(0, text28.length + 1));
      } else if (text28 === data.twenty_eighth_text) {
        setText29(data.twenty_ninth_text.slice(0, 1));
      }
    }, 25);
    return () => clearTimeout(timeout);
  }, [text28]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (text29 !== data.twenty_ninth_text) {
        setText29(data.twenty_ninth_text.slice(0, text29.length + 1));
      } else if (text29 === data.twenty_ninth_text) {
        setText30(data.thirtieth_text.slice(0, 1));
      }
    }, 25);
    return () => clearTimeout(timeout);
  }, [text29]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (text30 !== data.thirtieth_text) {
        setText30(data.thirtieth_text.slice(0, text30.length + 1));
      } else if (text30 === data.thirtieth_text) {
        setText31(data.thirty_first_text.slice(0, 1));
      }
    }, 25);
    return () => clearTimeout(timeout);
  }, [text30]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (text31 !== data.thirty_first_text) {
        setText31(data.thirty_first_text.slice(0, text31.length + 1));
      } else if (text31 === data.thirty_first_text) {
        setText32(data.thirty_second_text.slice(0, 1));
      }
    }, 25);
    return () => clearTimeout(timeout);
  }, [text31]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (text32 !== data.thirty_second_text) {
        setText32(data.thirty_second_text.slice(0, text32.length + 1));
      } else if (text32 === data.thirty_second_text) {
        setText33(data.thirty_third_text.slice(0, 1));
      }
    }, 25);
    return () => clearTimeout(timeout);
  }, [text32]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (text33 !== data.thirty_third_text) {
        setText33(data.thirty_third_text.slice(0, text33.length + 1));
      } else if (text33 === data.thirty_third_text) {
        setText34(data.thirty_fourth_text.slice(0, 1));
      }
    }, 25);
    return () => clearTimeout(timeout);
  }, [text33]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (text34 !== data.thirty_fourth_text) {
        setText34(data.thirty_fourth_text.slice(0, text34.length + 1));
      } else if (text34 === data.thirty_fourth_text) {
        setText35(data.thirty_fifth_text.slice(0, 1));
      }
    }, 25);
    return () => clearTimeout(timeout);
  }, [text34]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (text35 !== data.thirty_fifth_text) {
        setText35(data.thirty_fifth_text.slice(0, text35.length + 1));
      } else if (text35 === data.thirty_fifth_text) {
        setText36(data.thirty_sixth_text.slice(0, 1));
      }
    }, 25);
    return () => clearTimeout(timeout);
  }, [text35]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (text36 !== data.thirty_sixth_text) {
        setText36(data.thirty_sixth_text.slice(0, text36.length + 1));
      } else if (text36 === data.thirty_sixth_text) {
        setText37(data.thirty_seventh_text.slice(0, 1));
      }
    }, 25);
    return () => clearTimeout(timeout);
  }, [text36]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (text37 !== data.thirty_seventh_text) {
        setText37(data.thirty_seventh_text.slice(0, text37.length + 1));
      } else if (text37 === data.thirty_seventh_text) {
        setText38(data.thirty_eighth_text.slice(0, 1));
      }
    }, 25);
    return () => clearTimeout(timeout);
  }, [text37]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (text38 !== data.thirty_eighth_text) {
        setText38(data.thirty_eighth_text.slice(0, text38.length + 1));
      } else if (text38 === data.thirty_eighth_text) {
        setText39(data.thirty_ninth_text.slice(0, 1));
      }
    }, 25);
    return () => clearTimeout(timeout);
  }, [text38]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (text39 !== data.thirty_ninth_text) {
        setText39(data.thirty_ninth_text.slice(0, text39.length + 1));
      } else if (text39 === data.thirty_ninth_text) {
        setText40(data.fortieth_text.slice(0, 1));
      }
    }, 25);
    return () => clearTimeout(timeout);
  }, [text39]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (text40 !== data.fortieth_text) {
        setText40(data.fortieth_text.slice(0, text40.length + 1));
      }
    }, 25);
    return () => clearTimeout(timeout);
  }, [text40]);

  return (
    <div className="about-container">
      <div className="about-wrapper">
        {/* type writer display */}
        <span>
          <div className=" personObject level-1">{text1}</div>
          <div className=" personObject level-2">{text2}</div>
          <div className=" personObject level-2">{text3}</div>
          <div className=" personObject level-2">{text4}</div>
          <div className=" personObject level-2">{text5}</div>
          <div className=" personObject level-3">{text6}</div>
          <div className=" personObject level-4">{text7}</div>
          <div className=" personObject level-4">{text8}</div>
          <div className=" personObject level-4">{text9}</div>
          <div className=" personObject level-4">{text10}</div>
          <div className=" personObject level-4">{text11}</div>
          <div className=" personObject level-3">{text12}</div>
          <div className=" personObject level-3">{text13}</div>
          <div className=" personObject level-4">{text14}</div>
          <div className=" personObject level-4">{text15}</div>
          <div className=" personObject level-4">{text16}</div>
          <div className=" personObject level-3">{text17}</div>
          <div className=" personObject level-2">{text18}</div>
          <div className=" personObject level-2">{text19}</div>
          <div className=" personObject level-3">{text20}</div>
          <div className=" personObject level-3">{text21}</div>
          <div className=" personObject level-3">{text22}</div>
          <div className=" personObject level-3">{text23}</div>
          <div className=" personObject level-2">{text24}</div>
          <div className=" personObject level-2">{text25}</div>
          <div className=" personObject level-3">{text26}</div>
          <div className=" personObject level-3">{text27}</div>
          <div className=" personObject level-3">{text28}</div>
          <div className=" personObject level-3">{text29}</div>
          <div className=" personObject level-3">{text30}</div>
          <div className=" personObject level-2">{text31}</div>
          <div className=" personObject level-2">{text32}</div>
          <div className=" personObject level-3">{text33}</div>
          <div className=" personObject level-3">{text34}</div>
          <div className=" personObject level-3">{text35}</div>
          <div className=" personObject level-3">{text36}</div>
          <div className=" personObject level-3">{text37}</div>
          <div className=" personObject level-3">{text38}</div>
          <div className=" personObject level-2">{text39}</div>
          <div className=" personObject level-1">{text40}</div>
        </span>
      </div>
    </div>
  );
};

export default About;
