import HeroSection from "./HeroSection";
import ProductCategories from "./ProductCategories";
import CategoriesList from "./CategoriesList";
function ProductsPage() {
  return (
    <div className="ProductsPage">
      <HeroSection
        heading="Our Products"
        subHeading="Products with which we are great"
        text="In the international market, Integris International FZE is a specialist in the import and export of petrochemical."
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
