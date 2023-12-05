"use client";
import { useState, useEffect } from "react";
import "./Clients.css";
import Image from "next/image";
import PaginationLeft from "../../../public/Assets/Work/PaginationLeft.svg";
import PaginationRight from "../../../public/Assets/Work/PaginationRight.svg";
import ClientOne from "../../../public/Assets/Work/ClientOne.svg";
import AirTable from "../../../public/Assets/Work/AirTable.svg";
function Clients() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    {
      name: "Soophia 1",
      role: "CEO at Webflow Agency",
      heading: "The best Webflow Templates",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident",
    },
    {
      name: "Soophia 2",
      role: "CEO at Webflow Agency",
      heading: "The best Webflow Templates",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident",
    },
    {
      name: "Soophia 3",
      role: "CEO at Webflow Agency",
      heading: "The best Webflow Templates",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident",
    },
    {
      name: "Soophia 4",
      role: "CEO at Webflow Agency",
      heading: "The best Webflow Templates",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident",
    },
    {
      name: "Soophia 5",
      role: "CEO at Webflow Agency",
      heading: "The best Webflow Templates",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident",
    },
  ];

  useEffect(() => {
    const cardsContainer = document.querySelector(".cardsContainer");
    const cards = document.querySelectorAll(".clientfeedback");

    // Update the transform property for animation
    cardsContainer.style.transform = `translateX(-${currentIndex * 600}px)`; // Adjusted to divide by the number of cards
  }, [currentIndex, cards]);

  const handlePagination = (direction) => {
    const lastIndex = cards.length - 2;

    if (direction === "left" && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else if (direction === "right" && currentIndex < lastIndex) {
      setCurrentIndex(currentIndex + 1);
    }
  };
  return (
    <div className="clientmain">
      <div className="clientheading">
        <p className="clientheadingText">WHAT OUR CLIENTS SAY</p>
        <div className="Pagination">
          <div
            className="PaginationLeftImg"
            onClick={() => handlePagination("left")}
          >
            <Image src={PaginationLeft} alt="/" />
          </div>
          <div
            className="PaginationRightImg"
            onClick={() => handlePagination("right")}
          >
            <Image src={PaginationRight} alt="/" />
          </div>
        </div>
      </div>
      <div style={{ overflow: "hidden" }}>
        <div className="cardsContainer">
          {cards.map((card, index) => (
            <div className="clientfeedback" key={index}>
              <div className="feedbackContent">
                <p className="cardHeading">{card.heading}</p>
                <p className="cardContent">{card.content}</p>
              </div>
              <div className="clientDetail">
                <Image src={ClientOne} alt="/" />
                <div>
                  <p className="clientName">{card.name}</p>
                  <p className="clientInfo">{card.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="videoContainer">
        <iframe
          className="video"
          height="315"
          src="https://www.youtube.com/embed/9QgbaU29lIw?si=quCHlLtH21JoKCXz"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>

        <div className="videoContent">
          <div>
            <Image src={AirTable} alt="/" />
          </div>
          <div>
            <p className="videotext">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim
              ad minim veniam, quis nostrud"
            </p>
          </div>
          <div className="clientDetail">
            <Image src={ClientOne} alt="/" />
            <div>
              <p className="clientName">Soophia Moore</p>
              <p className="clientInfo">CEO at Webflow Agency</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clients;
