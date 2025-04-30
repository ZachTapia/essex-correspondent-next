import Footer from "../shared/Footer";
import NavBar from "../shared/NavBar";
// import DpaForm from "./components/AccessTrain";
import AccessTraining from "./components/AT-test";
import EssexDif from "./components/EssexDifference";
import Features from "./components/Features";
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
           <Features />
           <Resources />
          <AccessTraining />
           <EssexDif />

        </main>
        <Footer />
        </>
    )
};

export default ProductsPage;