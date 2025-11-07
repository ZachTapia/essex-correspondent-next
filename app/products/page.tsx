import Footer from "../shared/Footer";
import NavBar from "../shared/NavBar";
import EssexDifference from "./components/EssexDifference";
import ProductsPrograms from "./components/ProductsPrograms";
import SectionHeader from "./components/SectionHeader";



const ProductsPage = () => {
    return (
        <>
        <NavBar />
        <main className="h-full w-full bg-white">
            <SectionHeader />
            <ProductsPrograms />
            <EssexDifference />

        </main>
        <Footer />
        </>
    )
};

export default ProductsPage;