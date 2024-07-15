import "./ProductCategories.css";
export default function ProductCategories({ heading, subHeading }) {
  return (
    <div className="mainDiv">
      <div className="Heading">
        <p>{heading}</p>
      </div>
      <div className="Heading2">
        <p style={{ fontSize: "42px" }}>{subHeading}</p>
      </div>
    </div>
  );
}
