import Footer from "../shared/Footer";
import NavBar from "../shared/NavBar";
import EssexDif from "./components/EssexDifference";
import Features from "./components/Features";
import Resources from "./components/Resources";
import SectionHeader from "./components/SectionHeader";
import ThingsToKnow from "./components/ThingsToKnow";
import Training from "./components/Training";



const ProductsPage = () => {
    return (
        <>
        <NavBar />
        <main className="h-full w-full bg-white">
           <SectionHeader />
           <ThingsToKnow />
           <Features />
           <Resources />
           <Training />
           <EssexDif />

        </main>
        <Footer />
        </>
    )
};

export default ProductsPage;