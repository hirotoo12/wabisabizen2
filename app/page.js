import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Story from "@/components/Story";
import DayCafe from "@/components/DayCafe";
import NightBar from "@/components/NightBar";
import Menu from "@/components/Menu";
import Access from "@/components/Access";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Story />
        <DayCafe />
        <NightBar />
        <Menu />
        <Access />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
