import Navbar from "@/components/Navbar";
import Generate from "@/components/Generate";
import Footer from "@/components/Footer";
import ImageCarouselWrapper from "@/components/CarouselWrapper";

export default async function Home() {
  return (
    <main>
      <Navbar />
      <ImageCarouselWrapper />
      <Generate />
      <Footer />
    </main>
  );
}
