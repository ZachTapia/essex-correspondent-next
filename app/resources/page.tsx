import Footer from "../shared/Footer";
import NavBar from "../shared/NavBar";
import EssexDifference from "./components/EssexDifference";
import PortalAccess from "./components/PortalAccess";
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
            <ResourceDocs />
            <PortalAccess />
            <EssexDifference />
      

        </main>
        <Footer />
        </>
    )
};

export default ResourcePage;