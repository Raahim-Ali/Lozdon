"use client";
import React, { useRef, useState } from "react";
import "./form.css"; // Import the CSS file
import Transparentbtn from "@/app/components/Transparentbtn";

function MyForm({ position }) {
  const [formDisabled, setFormDisabled] = useState(false);
  const [rewardFile, setRewardFile] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const fileInputRef = useRef(null);
  const handleRewardFileChange = (event) => {
    const selectedFile = event.target.files[0];
    console.log("Selected file:", selectedFile);
    setRewardFile(selectedFile);
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    if (!rewardFile) {
      alert("Please upload a resume");
      return;
    }
    e.preventDefault();
    console.log("Submitting form...");
    if (
      formData.firstName.trim() === "" ||
      formData.lastName.trim() === "" ||
      formData.email.trim() === "" ||
      formData.phone.trim() === ""
    ) {
      alert("Please fill in all fields");
      return;
    }

    try {
      setFormDisabled(true);
      const formDataWithFile = new FormData();

      // Using forEach to append form data
      Object.entries(formData).forEach(([key, value]) => {
        formDataWithFile.append(key, value);
      });

      formDataWithFile.append("resume", rewardFile);

      const response = await fetch("/api/JobApplication", {
        method: "POST",
        body: formDataWithFile,
      });

      if (response.ok) {
        console.log("Form submitted successfully");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
        });
        setRewardFile("");
        if (fileInputRef.current) {
          fileInputRef.current.value = ""; // Clear the file input
        }
        alert("Details Sent.");
        setFormDisabled(false);
      } else {
        alert("Failed to send the details. Please try again.");
      }
      setFormDisabled(false);
    } catch (error) {
      setFormDisabled(false);
      alert(`Error submitting form: ${error.message}`);
    }
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
            name="firstName"
            id="firstName"
            value={formData.firstName}
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
            name="lastName"
            value={formData.lastName}
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
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone" className="label">
            Phone
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label htmlFor="position" className="label">
            Position
          </label>
          <input
            type="text"
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
            ref={fileInputRef}
            accept=".jpg,.jpeg,.png,.pdf"
            onChange={handleRewardFileChange}
            className="input-field1"
          />
        </div>
      </form>
      <div>
        <button
          type="submit"
          disabled={formDisabled}
          onClick={handleSubmit}
          className={`${!formDisabled ? "TransparentBtn" : "disabledBtn"}`}
        >
          <p className="TransparentBtnText">APPLY NOW</p>
        </button>
      </div>
    </>
  );
}

export default MyForm;
