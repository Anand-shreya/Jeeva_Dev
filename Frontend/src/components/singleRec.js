import React, { useState, useEffect } from "react";
import axios from "axios";

const SingleRec = () => {
    const [audioData, setAudioData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAudio = async () => {
      try {
        // Make a GET request to retrieve audio data from the backend
        const response = await axios.get('http://localhost:5000/audio');
        console.log(response.data)
        setAudioData({...audioData, ["audio"]:response.data.audio, 
        // ["Dname"]:response.data.Dname, ["Pname"]:response.data.Pname, ["Age"]:response.data.Age, ["Date"]:response.data.Date
    });
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchAudio();
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  return (
    <div>
      <div>
      {audioData && (
        <audio controls>
          <source src={`data:audio/mpeg;base64,${audioData.audio}`} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      )}
      {audioData.Dname}
      {audioData.Pname}
      {audioData.Age}
      {audioData.Date}
      </div>
    </div>
  );
};

export default SingleRec;

