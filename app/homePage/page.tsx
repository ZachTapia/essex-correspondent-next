import EssexDifference from "./components/EssexDifference";
import ProductsPrograms from "./components/ProductsPrograms";
import SectionHeader from "./components/SectionHeader";
import WhyEssex from "./components/WhyEssex";

const HomePage = () => {
    return (
        <>
        <main className="h-full w-full bg-white">
        <SectionHeader />
        <EssexDifference />
        <WhyEssex />
        <ProductsPrograms />
        </main>
        </>
    )
};

export default HomePage;