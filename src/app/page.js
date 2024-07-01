import AboutUs from "@/Components/HomeComponents/AboutUs";
import Blogs from "@/Components/HomeComponents/Blogs";
import Catalogue from "@/Components/HomeComponents/Catalogue";
import OurWebsites from "@/Components/HomeComponents/OurWebsites";

export default function Home() {
  return (
    <main>
      <AboutUs/>
      <Catalogue/>
      <Blogs/>
      <OurWebsites/>
    </main>
  );
}
