import Footer from "../shared/Footer";
import NavBar from "../shared/NavBar";
import EssexDiff from "./components/EssexDiff";
import ProductDetails from "./components/ProductDetails";
import Resources from "./components/Resources";
import SectionHeader from "./components/SectionHeader";
import ThingsToKnow from "./components/ThingsToKnow";



const ProductsPage = () => {
    return (
        <>
        <NavBar />
        <main className="h-full w-full bg-white">
           <SectionHeader />
           <ThingsToKnow />
           <ProductDetails />
           <Resources />
           <EssexDiff />

        </main>
        <Footer />
        </>
    )
};

export default ProductsPage;