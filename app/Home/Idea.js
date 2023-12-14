import Greenbtn from "../components/Greenbtn";
function Idea() {
  return (
    <div className="bg-primaryBlack text-gray-50 py-20 px-8 flex flex-col gap-10 justify-center items-center">
      <div className="flex flex-col jusify-center items-center gap-3">
        <p className="text-center inter text-base font-normal text-white poppins sm:text-xl ">
          Madeup your mind?
        </p>
        <p className="text-4xl text-center text-white uppercase poppins font-bold sm:text-6xl">
          Let&apos;s craft your idea 🚀
        </p>
      </div>
      <Greenbtn buttonText="Let's collaborate" href="#" />
    </div>
  );
}

export default Idea;
