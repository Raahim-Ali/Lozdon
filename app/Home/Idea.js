import "./Idea.css";
import Greenbtn from "../components/Greenbtn";

function Idea() {
  return (
    <div className="text-gray-50 py-20 px-6 flex flex-col gap-10 justify-center items-center background">
      <div className="flex flex-col jusify-center items-center gap-3">
        <p className="text-center inter text-base font-normal text-white inter sm:text-xl ">
          Madeup your mind?
        </p>
        <p className="text-3xl text-center text-white uppercase font-bold sm:text-6xl libre-caslon">
          Let&apos;s partner up 🚀
        </p>
      </div>
      <div>
        <Greenbtn buttonText=" Let's partner up" href="#" />
      </div>
    </div>
  );
}

export default Idea;
