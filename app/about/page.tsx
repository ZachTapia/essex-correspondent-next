import Footer from "../shared/Footer";
import NavBar from "../shared/NavBar";
import EssexTeam from "./components/EssexTeam";
import MissionValues from "./components/MissionValues";
import SectionHeader from "./components/SectionHeader";
import TerritoryMap from "./components/TerritoryMap";


const AboutPage = () => {
    return (
        <>
        <main className="h-full w-full bg-white">
            <NavBar />
            <SectionHeader />
            <MissionValues />
            <EssexTeam />
            <TerritoryMap />

            <Footer />
        

        </main>
        </>
    )
};

export default AboutPage;