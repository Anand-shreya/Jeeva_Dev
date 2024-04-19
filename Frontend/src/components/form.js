import React, { useState } from "react";
import axios from "axios";

const Form = ({DateUpdate}) => {
  const [formData, setFormData] = useState({
    Dname: "",
    Pname: "",
    Age: "",
    Date: "",
  });

  //   const [forms, setForms] = useState([]);
  const [file, setFile] = useState(null);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setFormData({ ...formData, ["audio"]: file });
    // console.log(formData);
    console.log(formData);
    try {
      await axios.post("http://localhost:5000/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Audio uploaded successfully");
      setFormData({
        Dname: "",
        Pname: "",
        Age: "",
        Date: "",
      })
      setFile(null)
      DateUpdate(formData)
    } catch (error) {
      console.error("Error uploading audio:", error);
      alert("Error uploading audio");
    }
    
    
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="Dname"
          value={formData.Dname}
          onChange={handleChange}
          placeholder="Doctor's Name"
          required = "true"
        />
        <input
          type="text"
          name="Pname"
          value={formData.Pname}
          onChange={handleChange}
          placeholder="Patient's Name"
          required = "true"
        />
        <input
          type="number"
          name="Age"
          value={formData.Age}
          onChange={handleChange}
          placeholder="Patient's age"
          required = "true"
        />
        <input
          type="Date"
          name="Date"
          value={formData.Date}
          onChange={handleChange}
          placeholder="Date of recording"
          required = "true"
        />
        <input
          type="file"
          name="audio"
          onChange={handleFileChange}
          placeholder="Recording"
          required = "true"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
