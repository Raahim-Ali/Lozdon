const Data = [
  {
    ImageSrc: "/Assets/OurServices/TechStack/Xamrin.svg",
    text: "Xamrin",
  },
  {
    ImageSrc: "/Assets/OurServices/TechStack/Flutter.svg",
    text: "Flutter",
  },
  {
    ImageSrc: "/Assets/OurServices/TechStack/Kotlin.svg",
    text: "Kotlin",
  },
  {
    ImageSrc: "/Assets/OurServices/TechStack/ReactNative.svg",
    text: "React Native",
  },
  {
    ImageSrc: "/Assets/OurServices/TechStack/ionic.svg",
    text: "Ionic",
  },
  {
    ImageSrc: "/Assets/OurServices/TechStack/Java.svg",
    text: "Java",
  },
];
export default function LatestTechnologies() {
  return (
    <>
      <div className="flex flex-col   pt-10 pb-10 sm:pt-20 sm:pb-20    xl:py-20  xl:px-36  gap-6 sm:gap-12">
        <div className="gap-3 flex flex-col pl-4 sm:pl-10">
          {/* text Section */}
          <p className="text-3xl sm:text-5xl font-bold">Tech Stack</p>
        </div>
        <div className="flex flex-col">
          <div className="px-10 flex flex-wrap justify-between gap-4 w-full sm:justify-between sm:p-12 lg:gap-24 md:gap-14  xl:gap-28">
            {Data.map((item, i) => (
              <div key={`${item.text}-${i}`} className="flex flex-col gap-3">
                <div className="flex justify-center items-center">
                  <img src={item.ImageSrc} alt="Tech stack Image" />
                </div>
                <p className="text-lg sm:text-xl text-center inter">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
