"use client";
import Image from "next/image";
import { useState } from "react";
import "./FormSection.css";

function FormSection() {
  const [formDisabled, setFormDisabled] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    budget: "",
    service: "",
    message: "",
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
    // Validate that all fields are filled
    if (
      formData.name.trim() === "" ||
      formData.companyName.trim() === "" ||
      formData.budget.trim() === "" ||
      formData.service.trim() === "" ||
      formData.message.trim() === ""
    ) {
      alert("Please fill in all fields");
      return;
    }

    try {
      setFormDisabled(true);
      const response = await fetch("/api/OctalCodeEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Form submitted successfully");
        // Optionally, you can reset the form here
        setFormData({
          name: "",
          companyName: "",
          budget: "",
          service: "",
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
  const lists = [
    {
      imageSrc: "/Assets/ContactUs/Tick.svg",
      text: "Web Development",
    },
    {
      imageSrc: "/Assets/ContactUs/Tick.svg",
      text: "Mobile Development",
    },
    {
      imageSrc: "/Assets/ContactUs/Tick.svg",
      text: "DevOps",
    },
    {
      imageSrc: "/Assets/ContactUs/Tick.svg",
      text: "UI/UX Design",
    },
    {
      imageSrc: "/Assets/ContactUs/Tick.svg",
      text: "Software Testing",
    },
    {
      imageSrc: "/Assets/ContactUs/Tick.svg",
      text: "e-Commerce Development",
    },
  ];
  const Logos = [
    {
      imageSrc: "/Assets/Work/work1Logo.JPG",
    },
    {
      imageSrc: "/Assets/Work/work3Logo.JPG",
    },
    {
      imageSrc: "/Assets/Work/work5Logo.JPG",
    },
    {
      imageSrc: "/Assets/Work/work2Logo.JPG",
    },
  ];
  return (
    <div className="Contact">
      <div className="firstSection">
        <div className="listSection">
          <p className="listHeading">
            we are all about business tech and growth
          </p>
          <div className="list">
            {lists.map((list, index) => (
              <div className="listContent" key={index}>
                <div className="tick">
                  <Image src={list.imageSrc} alt="/" width={18} height={18} />
                </div>
                <div className="listText">{list.text}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="companiesInfo">
          <div className="companiesInfoHeading">
            <p className="companiesInfoHeadingText">trusted by</p>
          </div>
          <div className="companiesLogos">
            {Logos.map((Logo, index) => (
              <div className="companyLogo" key={index}>
                <Image
                  src={Logo.imageSrc}
                  alt="/"
                  height={150}
                  width={150}
                  style={{ borderRadius: "10px" }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="formSection">
        <div className="formHeading">
          <p className="formHeadingText">tell us about you.</p>
        </div>
        <div className="form">
          <div className="formName">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="ENTER YOUR NAME"
              required
            />
          </div>
          <div className="formName">
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleInputChange}
              placeholder="ENTER YOUR COMPANY NAME"
              required
            />
          </div>
          <div className="formName">
            <input
              type="text"
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleInputChange}
              placeholder="ENTER YOUR BUDGET"
              required
            />
          </div>
          <div className="formName">
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleInputChange}
              className="w-full p-2 mt-1 border rounded-md"
              style={{
                color: "black",
                fontWeight: 600,
                border: "1px solid #6161619c",
                background: "transparent",
              }}
              required
            >
              <option className="text-pTextColor" value="">
                SELECT SERVICE
              </option>
              <option className="text-pTextColor" value="Web Development">
                Web Development
              </option>
              <option
                className="text-pTextColor"
                value="  Application Development"
              >
                Application Development
              </option>
              <option className="text-pTextColor" value="DevOps">
                DevOps
              </option>
              <option className="text-pTextColor" value="UI/UX">
                UI/UX
              </option>
              <option className="text-pTextColor" value="Software Testing">
                Software Testing
              </option>

              <option className="text-pTextColor" value=" Special Services">
                Special Services
              </option>

              <option className="text-pTextColor" value="Other Services">
                Other Services
              </option>
            </select>
          </div>
          <div className="formName">
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="ENTER YOUR MESSAGE"
              type="text"
              className="message"
              required
            />
          </div>
        </div>
        <div className="w-full flex">
          <button
            type="submit"
            disabled={formDisabled}
            onClick={handleSubmit}
            className={`w-48 bg-p text-btnTextColor text-lg uppercase st font-bold py-3 rounded-md transition-transform transform hover:-translate-y-1 sans ${
              !formDisabled ? "bg-btnColor" : "bg-gray-200"
            } `}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default FormSection;
