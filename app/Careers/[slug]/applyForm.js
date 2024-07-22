"use client";
import React, { useState } from "react";
import "./form.css"; // Import the CSS file
import Transparentbtn from "@/app/components/Transparentbtn";

function MyForm({ position }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [rewardFile, setRewardFile] = useState(null);

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleRewardFileChange = (event) => {
    setRewardFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
    console.log("Form submitted!");
    console.log("First name:", firstName);
    console.log("Last name:", lastName);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("Reward file:", rewardFile);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="my-form">
        <div className="form-group">
          <label htmlFor="firstName" className="label">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={handleFirstNameChange}
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName" className="label">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={handleLastNameChange}
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="label">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone" className="label">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={handlePhoneChange}
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label htmlFor="position" className="label">
            Position
          </label>
          <input
            type="tel"
            id="position"
            value={position}
            disabled={true}
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label htmlFor="rewardFile" className="label">
            Upload Resume
          </label>
          <input
            type="file"
            id="Resume"
            accept=".jpg,.jpeg,.png"
            onChange={handleRewardFileChange}
            className="input-field1"
          />
        </div>
      </form>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <Transparentbtn TbtnText="APPLY NOW" href="#" />
        <Transparentbtn TbtnText="<- CAREERS" href="/Careers/#positions" />
      </div>
    </>
  );
}

export default MyForm;
