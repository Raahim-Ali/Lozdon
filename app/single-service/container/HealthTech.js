import Greenbtn from "@/app/components/Greenbtn";
import Image from "next/image";

export default function HealthTech() {
  return (
    <>
      <div style={{ padding: "100px 0px" }} className="xl:flex  hidden">
        <div className="flex w-full gap-3 py-0 px-40 justify-center tracking-widest">
          <div className=" flex flex-col gap-5 w-1/2">
            <p className="text-blackPrimary  poppins text-3xl font-semibold leading-10">
              HealthTech Startup re-create serves 1000 customers in their first
              year with zero costs using AWS
            </p>
            <p className=" text-2xl  font-medium inter">Power of AWS Lambda</p>
            <div className="flex flex-col gap-3">
              <p className="text-xl poppins font-light text-rgb leading-8">
                Lambda functions were used in the project allowing Moonfare to
                pay micropayments only for requests that have been handled –
                serverless lets you process the code without needing to scale up
                servers.
              </p>
              <p className="text-xl poppins font-light text-rgb leading-8">
                The cost? The first million requests in a month are exceeded
                Moonfare is only charged $0.20 for every million requests.
              </p>
            </div>
            <Greenbtn buttonText="Read Full Case Study" href="#" />
          </div>
          <div>
            <img
              src="/Assets/SIngleService/HealthTech/Image.svg"
              alt="HealthtechImage"
            />
          </div>
        </div>
      </div>
      <div className="bg-primaryBlack text-gray-50 pt-20 pb-20 flex-col gap-10 justify-center items-center xl:flex hidden">
        <div className="flex flex-col jusify-center items-center gap-3">
          <p className="text-center inter text-xl text-white font-normal">
            Madeup your mind?
          </p>
          <p
            className=" text-white font-extrabold poppins uppercase "
            style={{ fontSize: "64px" }}
          >
            Let&apos;s craft your idea 🚀
          </p>
        </div>
        <Greenbtn buttonText="Let's collaborate" href="#" />
      </div>
    </>
  );
}
