import React, { useState, useEffect } from "react";
import axios from "axios";

const Form = () => {
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

    try {
      await axios.post("http://localhost:5000/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Audio uploaded successfully");
    } catch (error) {
      console.error("Error uploading audio:", error);
      alert("Error uploading audio");
    }

    // try {
    //   formData.append('file', file);
    //   // console.log(formData);
    //   const res = await axios.post("http://localhost:5000/api/form", formData);
    //   // console.log(res.data); // Success message or handle response accordingly
    // } catch (err) {
    //   console.error("Error:", err.response.data.error); // Log error message
    // }
  };
  useEffect(() => {
    const fetchData = async () => {
      //   try {
      //     const response = await axios.get("http://localhost:5000/api/forms");
      //     setForms(response.data);
      //   } catch (error) {
      //     console.error("Error:", error.message);
      //   }
    };

    fetchData();
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="Dname"
          value={formData.Dname}
          onChange={handleChange}
          placeholder="Doctor's Name"
        />
        <input
          type="text"
          name="Pname"
          value={formData.Pname}
          onChange={handleChange}
          placeholder="Patient's Name"
        />
        <input
          type="number"
          name="Age"
          value={formData.Age}
          onChange={handleChange}
          placeholder="Patient's age"
        />
        <input
          type="Date"
          name="Date"
          value={formData.Date}
          onChange={handleChange}
          placeholder="Date of recording"
        />
        <input
          type="file"
          name="mp3"
          onChange={handleFileChange}
          placeholder="Recording"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
