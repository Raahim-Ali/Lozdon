import Greenbtn from "../components/Greenbtn";
function Idea() {
  return (
    <div className="bg-primaryBlack text-gray-50 pt-20 pb-20 flex flex-col gap-10 justify-center items-center">
      <div className="flex flex-col jusify-center items-center gap-3">
        <p className="text-center inter text-xl font-normal">
          Madeup your mind?
        </p>
        <p className="custom-text-64 ">Let's craft your idea 🚀</p>
      </div>
      <Greenbtn buttonText="Let's collaborate" />
    </div>
  );
}

export default Idea;
