import Training from "../dpa/components/Training";
import Footer from "../shared/Footer";
import NavBar from "../shared/NavBar";
import BulletinsCallout from "./components/BulletinsCallout";
import EssexDifference from "./components/EssexDifference";
import MarketingMaterials from "./components/MarketingMaterials";
import ResourceDocs from "./components/ResourceDocs";
import SectionHeader from "./components/SectionHeader";
import ThingsToKnow from "./components/ThingsToKnow";



const ResourcePage = () => {
    return (
        <>
        <NavBar />
        <main className="h-full w-full bg-white">
            <SectionHeader />
            <ThingsToKnow />
            <MarketingMaterials />
            <BulletinsCallout />
            <ResourceDocs />
            <Training />
            <EssexDifference />
      

        </main>
        <Footer />
        </>
    )
};

export default ResourcePage;