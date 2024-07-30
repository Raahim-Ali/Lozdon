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
      setFormDisabled(true);
      const response = await fetch("/api/Contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Form submitted successfully");
        setFormData({
          Name: "",
          email: "",
          contact: "",
          business: "",
          message: "",
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
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleInputChange}
              required
            >
              <option className="text-pTextColor" value="">
                SELECT SERVICE
              </option>
              <option className="text-pTextColor" value="Manned Security">
                Manned Security
              </option>
              <option className="text-pTextColor" value="CCTV Operators">
                CCTV Operators
              </option>
              <option className="text-pTextColor" value="Alarm Response Team">
                Alarm Response Team
              </option>
              <option
                className="text-pTextColor"
                value="Mobile Patrol Security"
              >
                Mobile Patrol Security
              </option>
              <option className="text-pTextColor" value="Event Security">
                Event Security
              </option>

              <option className="text-pTextColor" value="Construction Security">
                Construction Security
              </option>
              <option className="text-pTextColor" value="House Security">
                House Security
              </option>
              <option className="text-pTextColor" value="Hotel Security">
                Hotel Security
              </option>
              <option className="text-pTextColor" value="Hospital Security">
                Hospital Security
              </option>
              <option className="text-pTextColor" value="School Security">
                School Security
              </option>
              <option className="text-pTextColor" value="Door Man">
                Door Man
              </option>
            </select>
          </div>

          <div className="formName">
            <textarea
              style={{ padding: "20px 15px" }}
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="ENTER YOUR REQUIREMENTS"
              type="text"
              required
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
