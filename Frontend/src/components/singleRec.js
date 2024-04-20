import React, { useState, useEffect } from "react";
import axios from "axios";
import Rec from "./Rec";
import styled from "styled-components";

const Ul = styled.ul`
  margin:10px;
`;

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
      
        {
        audioData &&
        audioData.map((item, index) => (
         <Ul>
           <Rec
          Dname =  {item.Dname}
          Pname =  {item.Pname}
          Age = {item.Age}
          Date = {item.Date}
          audio = {item.audio}
          ></Rec>
          </Ul>
        ))}
      

    </div>
  );
};

export default SingleRec;
