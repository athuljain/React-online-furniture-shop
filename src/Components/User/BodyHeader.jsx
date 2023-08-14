import { Link } from "react-router-dom";
import imageSrc from "../images/HeaderImage.jpg";
import Sofaimg from "../images/sofa.jpg";
import ChairImg from "../images/chair.jpg";
import TableImg from "../images/tables.jpg";
import DiningsetImg from "../images/diningset.jpg";
import BedImg from "../images/bed.jpg";
import StorageImg from "../images/storage.jpg";
import OfficeFurImg from "../images/officeFurniture.jpg";
import PetFurnitureImg from "../images/PetFurniture.jpg";
import StudyImg from "../images/StudyTable.jpg";
import DressingImg from "../images/dressing.jpg";
import BestSellBed from "../images/bestsellbed.jpg";
import BestSellChair from "../images/bestsellChair.jpg";
import BestSellTable from "../images/bestselltable.jpg";
import BestSellShoeCabin from "../images/bestSellShoecabinet.jpg";

import "../User/BodyHeader.css";

export default function BodyHeader() {
  return (
    <div className="container BodyHeader">
      <div className="HeaderImage">
        <Link to={"/"}>
          <img src={imageSrc} alt="" />
        </Link>
      </div>
      <div>
        <div>
          <h3 className="ShopCategoryH3">Shop by Category</h3>
        </div>

        <div className="row ShopCategory">
          <div className="col-sm-6 col-md-4">
            <Link to="/sofa" className="imageContainer linkWithoutDecoration">
              <img src={Sofaimg} alt="" />
              <p>Sofas</p>
            </Link>
          </div>
          <div className="col-sm-6 col-md-4">
            <Link to="/chair" className="imageContainer linkWithoutDecoration">
              <img src={ChairImg} alt="" />
              <p>Chairs</p>
            </Link>
          </div>
          <div className="col-sm-6 col-md-4">
            <Link to="/table" className="imageContainer linkWithoutDecoration">
              <img src={TableImg} alt="" />
              <p>Tables</p>
            </Link>
          </div>
          <div className="col-sm-6 col-md-4">
            <Link
              to="/products"
              className="imageContainer linkWithoutDecoration"
            >
              <img src={DiningsetImg} alt="" />
              <p>Dining Set</p>
            </Link>
          </div>
          <div className="col-sm-6 col-md-4">
            <Link to="/bed" className="imageContainer linkWithoutDecoration">
              <img src={BedImg} alt="" />
              <p>Bed</p>
            </Link>
          </div>
        </div>

        <div className="row ShopCategory">
          <div className="col-sm-6 col-md-4">
            <Link
              to="/products"
              className="imageContainer linkWithoutDecoration"
            >
              <img src={StorageImg} alt="" />
              <p>Storage & organizer</p>
            </Link>
          </div>
          <div className="col-sm-6 col-md-4">
            <Link
              to="/products"
              className="imageContainer linkWithoutDecoration"
            >
              <img src={PetFurnitureImg} alt="" />
              <p>Pet Furniture</p>
            </Link>
          </div>
          <div className="col-sm-6 col-md-4">
            <Link to="/table" className="imageContainer linkWithoutDecoration">
              <img src={StudyImg} alt="" />
              <p>Study Tables</p>
            </Link>
          </div>
          <div className="col-sm-6 col-md-4">
            <Link
              to="/products"
              className="imageContainer linkWithoutDecoration"
            >
              <img src={OfficeFurImg} alt="" />
              <p>Office Furniture</p>
            </Link>
          </div>
          <div className="col-sm-6 col-md-4">
            <Link to="/table" className="imageContainer linkWithoutDecoration">
              <img src={DressingImg} alt="" />
              <p>Dressing Table</p>
            </Link>
          </div>
        </div>
      </div>

      <div>
        <div>
          <h3 className="BestSellerH3">Shop Best Sellers</h3>
        </div>
        <div className="row BestSellCategory">
          <div className="col-sm-6 col-md-3">
            <Link
              to="/bed"
              className="BestSellimageContainer linkWithoutDecoration"
            >
              <img src={BestSellBed} alt="" />
              <h4>Beds with Box Storage</h4>
              <p className="BestSellP">300 + Options, Starting ₹10710</p>
            </Link>
          </div>
          <div className="col-sm-6 col-md-3">
            <Link
              to="/table"
              className="BestSellimageContainer linkWithoutDecoration"
            >
              <img src={BestSellTable} alt="" />
              <h4>Modern Writing Tables</h4>
              <p className="BestSellP">180+ Options, Starting ₹2799</p>
            </Link>
          </div>
          <div className="col-sm-6 col-md-3">
            <Link
              to="/chair"
              className="BestSellimageContainer linkWithoutDecoration"
            >
              <img src={BestSellChair} alt="" />
              <h4>Ergonomic Chairs</h4>
              <p className="BestSellP">250+ Options, Starting ₹3799</p>
            </Link>
          </div>
          <div className="col-sm-6 col-md-3">
            <Link
              to="/products"
              className="BestSellimageContainer linkWithoutDecoration"
            >
              <img src={BestSellShoeCabin} alt="" />
              <h4>Shoe Cabinets</h4>
              <p className="BestSellP">95+ Options, Starting ₹3499</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
