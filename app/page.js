"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const handleButtonClick = (service) => {
    if (service === "IT Services") {
      router.push("/IT/Home");
    }
    if (service === "Security Services") {
      router.push("/Security/Home");
    }
    if (service === "Commercial Services") {
      router.push("/Commercial/Home");
    }
  };
  return (
    <div
      style={{
        display: "flex",
        height: "75vh",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(to top, #85c3f5, #ffffff)",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "40px",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "50vw",
            paddingLeft: "50px",
            height: "10vw",
            color: "black",
            padding: "10px 20px",
            fontSize: "36px",
            fontFamily: "Caslon",
            cursor: "pointer",
            border: "2px solid black",
            borderRadius: "20px",
            justifyContent:
              "flex-start" /* Align items to the start horizontally */,
            alignItems: "center" /* Center items vertically */,
            textAlign: "left" /* Ensure text aligns to the left */,
          }}
          onClick={() => handleButtonClick("Commercial Services")}
        >
          Commercial Services
          <svg
            style={{ paddingTop: "5px" }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={45}
            height={45}
            fill="none"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M10 17l5-5-5-5" />
          </svg>
        </div>

        <div
          style={{
            display: "flex",
            width: "50vw",
            paddingLeft: "50px",
            height: "10vw",
            color: "black",
            padding: "10px 20px",
            fontSize: "36px",
            fontFamily: "Caslon",
            cursor: "pointer",
            border: "2px solid black",
            borderRadius: "20px",
            justifyContent:
              "center" /* Align items to the start horizontally */,
            alignItems: "center" /* Center items vertically */,
            textAlign: "left" /* Ensure text aligns to the left */,
          }}
          onClick={() => handleButtonClick("Security Services")}
        >
          Security Services
          <svg
            style={{ paddingTop: "5px" }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={45}
            height={45}
            fill="none"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M10 17l5-5-5-5" />
          </svg>
        </div>
        <div
          style={{
            display: "flex",
            width: "50vw",
            paddingLeft: "50px",
            height: "10vw",
            color: "black",
            padding: "10px 20px",
            fontSize: "36px",
            fontFamily: "Caslon",
            cursor: "pointer",
            border: "2px solid black",
            borderRadius: "20px",
            justifyContent:
              "flex-start" /* Align items to the start horizontally */,
            alignItems: "center" /* Center items vertically */,
            textAlign: "left" /* Ensure text aligns to the left */,
          }}
          onClick={() => handleButtonClick("IT Services")}
        >
          IT Services
          <svg
            style={{ paddingTop: "5px" }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={45}
            height={45}
            fill="none"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M10 17l5-5-5-5" />
          </svg>
        </div>
      </div>
    </div>
  );
}
