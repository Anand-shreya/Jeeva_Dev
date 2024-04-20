import React, { useState, useEffect } from "react";
import axios from "axios";
import Rec from "./Rec";

const SingleRec = (props) => {
  const [audioData, setAudioData] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchAudio = async () => {
      try {
        const response = await axios.get("http://localhost:5000/allData");
   
        setAudioData(response.data.AllRecords);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchAudio();
  }, [props.updated]);

  return (
    <div>
      <ul>
        {
        audioData &&
        audioData.map((item, index) => (
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
            {item.audio && (
              <audio controls>
                <source src={`data:audio/mpeg;base64,${item.audio}`} type="audio/mpeg" />
              </audio>
            )}
          </li>
        ))}
      </ul>

    </div>
  );
};

export default SingleRec;
