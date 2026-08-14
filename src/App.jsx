import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Members from "./components/Members";
import Ministries from "./components/Ministries";
import News from "./components/News";
import Plans from "./components/Plans";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Members />
        <Ministries />
        <News />
        <Plans />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}