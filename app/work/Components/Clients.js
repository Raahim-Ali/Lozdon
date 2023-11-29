import "./Clients.css";
import Image from "next/image";
import PaginationLeft from "../../../public/Assets/Work/PaginationLeft.svg";
import PaginationRight from "../../../public/Assets/Work/PaginationRight.svg";
import ClientOne from "../../../public/Assets/Work/ClientOne.svg";
import AirTable from "../../../public/Assets/Work/AirTable.svg";
function Clients() {
  return (
    <div className="clientmain">
      <div className="clientheading">
        <p className="clientheadingText">WHAT OUR CLIENTS SAY</p>
        <div className="Pagination">
          <Image src={PaginationLeft} alt="/" />
          <Image src={PaginationRight} alt="/" />
        </div>
      </div>
      <div className="cardsContainer">
        <div className="clientfeedback">
          <div className="feedbackContent">
            <p className="cardHeading">“The best Webflow Templates”</p>
            <p className="cardContent">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat aute irure sint amet
              occaecat cupidatat non proident
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
        <div className="clientfeedback">
          <div className="feedbackContent">
            <p className="cardHeading">“The best Webflow Templates”</p>
            <p className="cardContent">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat aute irure sint amet
              occaecat cupidatat non proident
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
