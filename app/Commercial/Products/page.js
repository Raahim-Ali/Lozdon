import HeroSection from "./HeroSection";
import ProductCategories from "./ProductCategories";
import CategoriesList from "./CategoriesList";
function ProductsPage() {
  return (
    <div className="ProductsPage">
      <HeroSection
        heading="Our Cleaning Solutions"
        subHeading="Innovative Cleaning Solutions"
        text="Discover our comprehensive range of cleaning services tailored to meet all your needs. From routine maintenance to specialized deep cleans, we ensure every space remains spotless and inviting."
        imageSrc="/Assets/Products/heroCleaningProducts.jpg"
      />
      <ProductCategories
        heading="Our Cleaning Services"
        subHeading={"Our Complete Service Range "}
      />
      <CategoriesList />
    </div>
  );
}

export default ProductsPage;
