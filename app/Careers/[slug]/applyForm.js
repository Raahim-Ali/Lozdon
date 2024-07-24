"use client";
import React, { useState } from "react";
import "./form.css"; // Import the CSS file
import Transparentbtn from "@/app/components/Transparentbtn";

function MyForm({ position }) {
  const [formDisabled, setFormDisabled] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    rewardFile: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting form...");
    if (
      formData.firstName.trim() === "" ||
      formData.lastName.trim() === "" ||
      formData.email.trim() === "" ||
      formData.phone.trim() === "" ||
      formData.rewardFile.trim() === ""
    ) {
      alert("Please fill in all fields");
      return;
    }

    try {
      setFormDisabled(true);
      const response = await fetch("/api/JobApplication", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Form submitted successfully");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          rewardFile: "",
        });
        alert("Details Sent.");
      } else {
        alert("Failed to send the details. Please try again.");
      }
      setFormDisabled(false);
    } catch (error) {
      setFormDisabled(false);
      alert(`Error submitting form: ${error.message}`);
    }
    const handlePhoneChange = (event) => {
      setPhone(event.target.value);
    };

    const handleRewardFileChange = (event) => {
      setRewardFile(event.target.files[0]);
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
              onChange={handleInputChange}
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
              onChange={handleInputChange}
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
              onChange={handleInputChange}
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
              onChange={handleInputChange}
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
          <Transparentbtn
            TbtnText="APPLY NOW"
            disabled={formDisabled}
            onClick={handleSubmit}
          />
          <Transparentbtn TbtnText="<- CAREERS" href="/Careers/#positions" />
        </div>
      </>
    );
  };
}

export default MyForm;
