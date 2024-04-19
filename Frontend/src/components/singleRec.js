import React, { useState, useEffect } from "react";
import axios from "axios";
import Rec from "./Rec";

const SingleRec = (props) => {
  const [audioData, setAudioData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
//   const [Data, setData] = useState({
//     ["Dname"]: "",
//     ["Pname"]: "",
//     ["Age"]: "",
//     ["Date"]: "",
//   });

  useEffect(() => {
    const fetchAudio = async () => {
      try {
        const response = await axios.get("http://localhost:5000/audio");
   
        setAudioData(response.data.arr);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchAudio();
  }, [props.updated]); // Empty dependency array ensures this effect runs only once on component mount

  return (
    <div>
        {console.log(audioData)}
      {/* {audioData.map((sRec) => (
        <Rec
          audio={sRec.audio}
          Dname={sRec.Dname}
          Pname={sRec.Pname}
          Age={sRec.Age}
          Date={sRec.Date}
        />
       ))}  */}

<ul>
        {audioData.map((item, index) => (
          <li key={index}>
            <div>
              <strong>Doctor Name:</strong> {item.Dname}
            </div>
            <div>
              <strong>Patient Name:</strong> {item.Pname}
            </div>
            <div>
              <strong>Age:</strong> {item.Age}
            </div>
            <div>
              <strong>Date:</strong> {item.Date}
            </div>
            {/* Render audio component or link here */}
            {/* For example, you can render an audio element if 'audio' property is present */}
            {item.audio && (
              <audio controls>
                <source src={`data:audio/mpeg;base64,${item.audio}`} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            )}
          </li>
        ))}
      </ul>

    </div>
  );
};

export default SingleRec;
