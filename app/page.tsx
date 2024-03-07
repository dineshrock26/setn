import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Programs from "@/components/Programs";

export default function Home() {
  return (
    <main>
      <div>
        <Navbar />
        <Hero />
        <Programs />
        <Footer />
      </div>
    </main>
  );
}
