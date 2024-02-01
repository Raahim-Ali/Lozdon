import Link from "next/link";

function Idea() {
  const calendlyLink = "https://calendly.com/octalcode/it-consultation";
  return (
    <div className="bg-primaryBlack text-gray-50 py-20 px-6 flex flex-col gap-10 justify-center items-center">
      <div className="flex flex-col jusify-center items-center gap-3">
        <p className="text-center inter text-base font-normal text-white poppins sm:text-xl ">
          Madeup your mind?
        </p>
        <p className="text-4xl text-center text-white uppercase poppins font-bold sm:text-6xl">
          Let&apos;s craft your idea 🚀
        </p>
      </div>
      <Link href={calendlyLink} target="_blank" rel="noopener noreferrer">
        <button
          style={{
            padding: "15px 15px",
            borderRadius: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "#006BFF",
            transition: "transform 0.5s ease-in-out",
          }}
          className="hover:scale-110"
        >
          <img
            style={{ marginRight: "10px" }}
            src="/Assets/Home/calendly.svg"
          />
          <p className="btnText poppins uppercase">Schedule Google Meeting</p>
        </button>
      </Link>
    </div>
  );
}

export default Idea;
