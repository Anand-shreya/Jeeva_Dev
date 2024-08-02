import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

const Label = styled.label`
  color: #000;
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  `;

const Field = styled.div`
  margin:5px;
  margin-top:10px;
`;
const Button = styled.button`
  background-color:#E86838;
  width: 140px;
  height: 53px;
  flex-shrink: 0;
  border-radius: 10px;
  border:0px;
`;

const Input = styled.input`
  border-radius: 11.433px;
  border: 1.143px solid #C3C3C3;
  background: #F5F5F5;
  width: 280.113px;
  height: 54.879px;
  flex-shrink: 0;
  padding-left:10px;
  margin-top:3px;
`;

const InputDoc = styled.input`
  border-radius: 11.433px;
  border: 1.143px solid #C3C3C3;
  background: #F5F5F5;
  width: 582px;
  height: 54.879px;
  flex-shrink: 0;
  padding-left:10px;
  margin-top:3px;
`;
const FormWrap = styled.div`
  display:flex;
  align-item:center;
  justify-content:center;
`;
const PatientWrap = styled.div`
  display:flex;
`;
const Form = ({ DataUpdate }) => {
  const [formData, setFormData] = useState({
    Dname: "",
    Pname: "",
    Age: "",
    Date: "",
  });

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
      // await axios.post("http://localhost:5000/upload", formData, {
      await axios.post("https://jeeva-dev.onrender.com/upload", formData, {
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
      });
      setFile(null);
      DataUpdate(formData);
    } catch (error) {
      console.error("Error uploading audio:", error);
      alert("Error uploading audio");
    }
  };

  return (
    <FormWrap>
      <form onSubmit={handleSubmit} className="Form">
        <PatientWrap>
          <Field>
            <Label for="Pname">Patient’s Name</Label>
            <br></br>
            <Input
              type="text"
              name="Pname"
              id="Pname"
              value={formData.Pname}
              onChange={handleChange}
              placeholder="Enter the name"
              required="true"
            />
          </Field>
          <Field>
            <Label for="Age">Patient’s Age</Label>
            <br></br>
            <Input
              type="number"
              name="Age"
              id="Age"
              value={formData.Age}
              onChange={handleChange}
              placeholder="Enter the age"
              required="true"
            />
          </Field>
        </PatientWrap>
        <Field>
          <Label for="Dname">Doctor's Name</Label>
          <br></br>
          <InputDoc
            type="text"
            name="Dname"
            id="Dname"
            value={formData.Dname}
            onChange={handleChange}
            placeholder="Enter the name"
            required="true"
          />
        </Field>
        <Field>
          <Label for="audio">Select the recording file to upload</Label>
          <br></br>

          <Input
            type="file"
            name="audio"
            id="audio"
            onChange={handleFileChange}
            required="true"
          />
        </Field>
        <Field>
          <Label for="Data">Date</Label>
          <br></br>
          <Input
            type="Date"
            name="Date"
            id="Date"
            value={formData.Date}
            onChange={handleChange}
            required="true"
          />
        </Field>
        <Field>
        <Button type="submit">Submit</Button>
        </Field>
      </form>
    </FormWrap>
  );
};

export default Form;
