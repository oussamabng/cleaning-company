import Hero from "./components/hero";
import Services from "./components/services";
import Team from "./components/team";
import Stats from "./components/stats";
import Action from "./components/action";
import Banner from "@/components/banner";
import Contact from "./components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Team />
      <Stats />
      <Contact />
      <Action />
      <Footer />
      <Banner position="bottom" />
    </>
  );
}
