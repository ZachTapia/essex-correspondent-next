import Footer from "../shared/Footer";
import NavBar from "../shared/NavBar";
import EssexTeam from "./components/EssexTeam";
import EssexWay from "./components/EssexWay";
import SectionHeader from "./components/SectionHeader";
import TerritoryMap from "./components/TerritoryMap";


const AboutPage = () => {
    return (
        <>
        <NavBar />
        <main className="h-full w-full bg-white">
            
            <SectionHeader />
            <EssexWay />
            <EssexTeam />
            <TerritoryMap />
        

        </main>
        <Footer />
        </>
    )
};

export default AboutPage;