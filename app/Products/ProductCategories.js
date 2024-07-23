import "./ProductCategories.css";
export default function ProductCategories({ heading, subHeading }) {
  return (
    <div className="mainDiv">
      <div>
        <p className="Heading">{heading}</p>
      </div>
      <div>
        <p className="Heading2" style={{ fontSize: "42px" }}>
          {subHeading}
        </p>
      </div>
    </div>
  );
}
