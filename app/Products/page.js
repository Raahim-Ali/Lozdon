import HeroSection from "./HeroSection";
import ProductCategories from "./ProductCategories";
import CategoriesList from "./CategoriesList";
function ProductsPage() {
  return (
    <div className="ProductsPage">
      <HeroSection
        heading="Our Products"
        subHeading="Products with which we are great"
        text="At Integris, we prioritize our employees' growth and well-being, offering continuous support and guidance. Through regular training sessions, we empower our team to excel and evolve professionally, ensuring their success aligns with our company's values."
        imageSrc="/Assets/Products/Image1.svg"
      />
      <ProductCategories
        heading="our products"
        subHeading={"our all products categories "}
      />
      <CategoriesList />
    </div>
  );
}

export default ProductsPage;
