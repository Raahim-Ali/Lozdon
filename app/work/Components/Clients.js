"use client";
import Image from "next/image";
import Slider from "../Components/Slider";
import AirTable from "../../../public/Assets/Work/AirTable.svg";
import ClientOne from "../../../public/Assets/Work/ClientOne.svg";
import PaginationLeft from "../../../public/Assets/Work/PaginationLeft.svg";
import PaginationRight from "../../../public/Assets/Work/PaginationRight.svg";
import "./Clients.css";
function Clients() {
  return (
    <div className="clientmain">
      <div className="clientheading">
        <p className="clientheadingText">WHAT OUR CLIENTS SAY</p>
      </div>
      <Slider />
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
              &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua ut
              enim ad minim veniam, quis nostrud&quot;
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
