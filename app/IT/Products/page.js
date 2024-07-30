import HeroSection from "./HeroSection";
import ProductCategories from "./ProductCategories";
import CategoriesList from "./CategoriesList";
function ProductsPage() {
  return (
    <div className="ProductsPage">
      <HeroSection
        heading="Our Services"
        subHeading="Tailored IT Solutions for Your Business"
        text="Explore our range of IT services designed to drive efficiency and innovation. From custom solutions to comprehensive support, we deliver expert services tailored to meet your unique business needs."
        imageSrc="/Assets/Products/ITProductsHero.png"
      />
      <ProductCategories
        heading="our services"
        subHeading={"Comprehensive IT Solutions to Power Your Success"}
      />
      <CategoriesList />
    </div>
  );
}

export default ProductsPage;
