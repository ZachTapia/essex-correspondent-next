import Footer from "../shared/Footer";
import NavBar from "../shared/NavBar";
import ContactUs from "./components/ContactUs";
import LendingRedefined from "./components/LendingRedefined";
import SectionHeader from "./components/SectionHeader";




const ContactPage = () => {
    return (
        <>
        <NavBar />
        <main className="h-full w-full bg-gray-200">
            <SectionHeader />
            <ContactUs />
            <LendingRedefined />


        </main>
        <Footer />
        </>
    )
};

export default ContactPage;