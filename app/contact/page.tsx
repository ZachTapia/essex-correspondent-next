import Footer from "../shared/Footer";
import NavBar from "../shared/NavBar";
import GetInTouch from "./components/GetInTouch";
import LendingRedefined from "./components/LendingRedefined";
import SectionHeader from "./components/SectionHeader";




const ContactPage = () => {
    return (
        <>
        <NavBar />
        <main className="h-full w-full bg-white">
            <SectionHeader />
            <GetInTouch />
            <LendingRedefined />


        </main>
        <Footer />
        </>
    )
};

export default ContactPage;