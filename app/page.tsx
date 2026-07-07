import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Process from "@/components/Process";
import Services from "@/components/Services";
import Trust from "@/components/Trust";
import Offices from "@/components/Offices";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";

const TRUCK_MOTION = true;
const BELT_SPEED = 60;

export default function Home() {
  return (
    <div style={{ fontFamily: "var(--font-archivo), system-ui, sans-serif", color: "var(--ink)", background: "#FFFFFF" }}>
      <Nav truckMotion={TRUCK_MOTION} />
      <Hero />
      <Mission />
      <Process />
      <Services />
      <Trust />
      <Offices />
      <Clients beltSpeed={BELT_SPEED} />
      <Contact />
    </div>
  );
}
