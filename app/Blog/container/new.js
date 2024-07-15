{
  blogs.map((blog, index) => (
    <div
      key={index}
      className={`flex flex-col ${
        index % 2 === 0 ? "xl:flex-row-reverse bg-anotherColor" : "xl:flex-row"
      } md:py-20 md:px-36 gap-40 py-0 px-5`}
      style={{
        paddingLeft: "250px",
        paddingRight: "150px",
        paddingTop: "0px",
      }}
    >
      <div
        className="xl:w-1/2"
        style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: "100px 20px 100px 20px",
        }}
      >
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "80%", // Adjust this value to control the gradient height
            backgroundImage:
              "linear-gradient(180deg, rgba(9, 14, 142, 0) 0%, #090E8E 100%)",
            zIndex: 1,
          }}
        />
        <img
          src={blog.imageSrc}
          style={{
            width: "100%",
            height: "100%",
            zIndex: 2,
          }}
        />
      </div>

      <div className="flex gap-5 flex-col w-full xl:w-1/2 justify-center">
        <h5 className="md:text-4xl text-2xl font-bold uppercase tracking-wider Heading2 ">
          <p dangerouslySetInnerHTML={{ __html: blog.title }}></p>
        </h5>
        <div className="buttonContainer">
          <div className="devBtn">
            <p>{blog.buttonText}</p>
          </div>
          <p className="readText">{blog.read}</p>
        </div>
        <h5 className="text-xl font-medium uppercase inter tracking-wider md:flex hidden">
          <p dangerouslySetInnerHTML={{ __html: blog.description }}></p>
        </h5>

        <Link href={blog.link} className="flex w-fit">
          <p
            className="learnMore w-fit mt-3"
            style={{
              color: "blue",
            }}
          >
            Read more
          </p>
        </Link>
      </div>
    </div>
  ));
}
