import Footer from "../shared/Footer";
import NavBar from "../shared/NavBar";
import EssexDifference from "./components/EssexDifference";
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
            <EssexDifference />
      

        </main>
        <Footer />
        </>
    )
};

export default ResourcePage;