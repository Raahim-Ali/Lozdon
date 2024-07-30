import HeroSection from "./HeroSection";
import ProductCategories from "./ProductCategories";
import CategoriesList from "./CategoriesList";
function ProductsPage() {
  return (
    <div className="ProductsPage">
      <HeroSection
        heading="Security Solutions We Deliver"
        subHeading="Expert Security Solutions"
        text="Providing a range of specialized security solutions tailored to meet your needs, ensuring comprehensive protection and peace of mind."
        imageSrc="/Assets/Products/heroProducts.jpg"
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
