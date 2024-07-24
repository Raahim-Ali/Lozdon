"use client";
import { useState } from "react";
import "./FormSection.css";

function FormSection() {
  const [formDisabled, setFormDisabled] = useState(false);
  const [rewardFile, setRewardFile] = useState("");
  const [formData, setFormData] = useState({
    Name: "",
    email: "",
    contact: "",
    message: "",
    business: "",
  });
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
      formData.Name.trim() === "" ||
      formData.email.trim() === "" ||
      formData.contact.trim() === "" ||
      formData.business.trim() === "" ||
      formData.message.trim() === ""
    ) {
      alert("Please fill in all fields");
      return;
    }

    try {
      const formDataWithFile = new FormData();

      // Using forEach to append form data
      Object.entries(formData).forEach(([key, value]) => {
        formDataWithFile.append(key, value);
      });

      formDataWithFile.append("resume", rewardFile);

      const response = await fetch("/api/Contact", {
        method: "POST",
        body: formDataWithFile,
      });

      if (response.ok) {
        console.log("Form submitted successfully");
        setFormData({
          Name: "",
          email: "",
          contact: "",
          business: "",
          message: "",
          resume: "",
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
  };

  return (
    <div className="Contact">
      <div className="formSection">
        <div className="form">
          <div className="formName">
            <input
              type="text"
              id="Name"
              name="Name"
              value={formData.Name}
              onChange={handleInputChange}
              placeholder="ENTER YOUR NAME"
              required
            />
          </div>
          <div className="formName">
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="ENTER YOUR EMAIL"
              required
            />
          </div>
          <div className="formName">
            <input
              type="text"
              id="contact"
              name="contact"
              value={formData.contact}
              onChange={handleInputChange}
              placeholder="ENTER YOUR CONTACT NUMBER"
              required
            />
          </div>
          <div className="formName">
            <input
              type="text"
              id="business"
              name="business"
              value={formData.business}
              onChange={handleInputChange}
              placeholder="ENTER YOUR BUSINESS"
              required
            />
          </div>

          <div className="formName">
            <textarea
              style={{ padding: "20px 15px" }}
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="ENTER YOUR MESSAGE"
              type="text"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="rewardFile" className="label">
              Upload Resume
            </label>
            <input
              type="file"
              id="resume"
              accept=".jpg,.jpeg,.png,.pdf"
              onChange={handleRewardFileChange}
              className="input-field1"
            />
          </div>
        </div>

        <div className="w-full flex" style={{ paddingTop: "10px" }}>
          <button
            type="submit"
            disabled={formDisabled}
            onClick={handleSubmit}
            className={`w-48 bg-p text-btnTextColor text-lg uppercase st font-bold py-3 rounded-md transition-transform transform hover:-translate-y-1 sans ${
              !formDisabled ? "enabledButton" : "disabledButton"
            }`}
          >
            SEND
          </button>
        </div>
      </div>
    </div>
  );
}

export default FormSection;
