import { useContext } from "react";
import CollectionSlider from "./CollectionSlider";
import WrapperComponent from "@/Components/Common/WrapperComponent";
import CollectionSidebar from "../CollectionSidebar";
import MainCollection from "../MainCollection";
import ThemeOptionContext from "@/Helper/ThemeOptionsContext";
import OfferBanner from "@/Components/ParisTheme/OfferBanner";

const MainCollectionSlider = ({ filter, setFilter }) => {
  const { themeOption } = useContext(ThemeOptionContext);
  return (
    <>
      <WrapperComponent colProps={{ xs: 12 }}>
        <OfferBanner
          classes={{ customHoverClass: "banner-contain hover-effect" }}
          imgUrl={themeOption?.collection?.collection_banner_image_url}
        />
      </WrapperComponent>
      <CollectionSlider filter={filter} setFilter={setFilter} />
      <WrapperComponent
        classes={{ sectionClass: "section-b-space shop-section" }}
        customCol={true}
      >
        {/* <CollectionSidebar filter={filter} setFilter={setFilter} /> */}
        <MainCollection
          filter={filter}
          setFilter={setFilter}
          initialGrid={5}
          noSidebar={true}
        />
      </WrapperComponent>
    </>
  );
};

export default MainCollectionSlider;
