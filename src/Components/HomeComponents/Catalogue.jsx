import SectionTitle from "../Common/SectionTitle";
import ViewMore from "../Common/ViewMore";
import CatalogueCard from "./CatalogueCard";
import cc1 from "../../Assets/img/catalogue/wallet1.jpg";
import cc2 from "../../Assets/img/catalogue/db2.png";
import cc3 from "../../Assets/img/catalogue/belt2.png";
import cc4 from "../../Assets/img/catalogue/backpack2.png";
import cc5 from "../../Assets/img/catalogue/gs5.png";
import cc6 from "../../Assets/img/catalogue/officeBag3.png";
import cc7 from "../../Assets/img/catalogue/folder1.png";
import cc8 from "../../Assets/img/catalogue/tb4.png";
import cc9 from "../../Assets/img/catalogue/lb2.png";

function Catalogue() {
  return (
    <section className="home-catalogue-section">
      <SectionTitle title={"Explore Our Exclusive Product Lineup"} />
      <div className="home-catalogue">
        <div className="catalogue-col">
          <CatalogueCard cardTitle={"Folders"} cardImg={cc7} />
          <CatalogueCard cardTitle={"Gifting Sets"} cardImg={cc5} />
        </div>
        <div className="catalogue-col">
          <CatalogueCard cardTitle={"Duffel Bags"} cardImg={cc2} />
          <CatalogueCard cardTitle={"Office Bags"} cardImg={cc6} />
        </div>
        <div className="catalogue-col">
          <CatalogueCard cardTitle={"Belts"} cardImg={cc3} />
          <CatalogueCard cardTitle={"Wallets"} cardImg={cc1} />
          <CatalogueCard cardTitle={"Ladies Bag"} cardImg={cc9} />
        </div>
        <div className="catalogue-col">
          <CatalogueCard cardTitle={"BackPacks"} cardImg={cc4} />
          <CatalogueCard cardTitle={"Travel Bags"} cardImg={cc8} />
        </div>
      </div>
      <ViewMore text={"Explore Further"} link={"/"} />
    </section>
  );
}

export default Catalogue;
