import Image from "next/image";
import React from "react";
const Data = [
  {
    ImageSrc: "/Assets/SIngleService/LatestTechnology/Firebase.svg",
    text: "Firebase",
  },
  {
    ImageSrc: "/Assets/SIngleService/LatestTechnology/MUI.svg",
    text: "Material UI",
  },
  {
    ImageSrc: "/Assets/SIngleService/LatestTechnology/js.svg",
    text: "JavaScript",
  },
  {
    ImageSrc: "/Assets/SIngleService/LatestTechnology/Css.svg",
    text: "CSS",
  },
];
export default function LatestTechnologies() {
  return (
    <>
      <div className="flex flex-col justify-between pt-20 pb-20 pr-40 pl-40 gap-12 ">
        <div className="gap-3 flex flex-col">
          {/* text Section */}
          {/* <p className="custom-text-24">.latest technologies</p> */}
          <p className="custom-text-64  font-bold ">Teck Stack</p>
        </div>
        <div className="flex flex-col">
          <div className="p-12 w-full flex flex-wrap justify-between gap-8">
            {Data.map((item) => (
              <div className="flex flex-col gap-2">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image src={item.ImageSrc} width={80} height={80} />
                </div>
                <p className="custom-text-24 text-center inter">{item.text}</p>
              </div>
            ))}
          </div>{" "}
          <div className="p-12 w-full flex flex-wrap justify-between gap-8">
            {Data.map((item) => (
              <div className="flex flex-col gap-2">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image src={item.ImageSrc} width={80} height={80} />
                </div>
                <p className="custom-text-24 text-center inter">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
