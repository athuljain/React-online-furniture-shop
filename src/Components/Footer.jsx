import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <MDBFooter
      bgColor="gray"
      className="text-center text-lg-start text-muted Footer"
    >
      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <div className="FooterFirstSession">
              <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                <h4 className="text-uppercase fw-bold mb-4">Corporate</h4>
                <div className="footerList">
                  <Link className="linkWithoutDecoration" to="/">
                    {" "}
                    About Us{" "}
                  </Link>{" "}
                  <br />
                  <Link className="linkWithoutDecoration" to="/">
                    {" "}
                    Corporate Governance{" "}
                  </Link>{" "}
                  <br />
                  <Link className="linkWithoutDecoration" to="/">
                    {" "}
                    AJFurniture in the News{" "}
                  </Link>{" "}
                  <br />
                  <Link className="linkWithoutDecoration" to="/">
                    {" "}
                    Careers
                  </Link>
                </div>
              </MDBCol>

              <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                <h4 className="text-uppercase fw-bold mb-4">Useful Links</h4>
                <div className="footerList">
                  <Link className="linkWithoutDecoration" to="/">
                    {" "}
                    Explore Gift Cards{" "}
                  </Link>{" "}
                  <br />
                  <Link className="linkWithoutDecoration" to="/">
                    {" "}
                    Buy in Bulk{" "}
                  </Link>{" "}
                  <br />
                  <Link className="linkWithoutDecoration" to="/">
                    {" "}
                    Discover Our Brands{" "}
                  </Link>{" "}
                  <br />
                  <Link className="linkWithoutDecoration" to="/">
                    {" "}
                    Check Out Bonhomie,Our Blog
                  </Link>{" "}
                  <br />
                  <Link className="linkWithoutDecoration" to="/">
                    {" "}
                    Find a Studio{" "}
                  </Link>
                </div>
              </MDBCol>

              <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                <h4 className="text-uppercase fw-bold mb-4">Partner With Us</h4>
                <div className="footerList">
                  <Link className="linkWithoutDecoration" to="/">
                    {" "}
                    Sell on AJ Furniture{" "}
                  </Link>{" "}
                  <br />
                  <Link className="linkWithoutDecoration" to="/">
                    {" "}
                    Become a Feanchisee{" "}
                  </Link>{" "}
                  <br />
                  <Link className="linkWithoutDecoration" to="/">
                    {" "}
                    Become Our Channel Partner{" "}
                  </Link>{" "}
                  <br />
                  <Link className="linkWithoutDecoration" to="/">
                    {" "}
                    Become Our Pep Homie{" "}
                  </Link>{" "}
                  <br />
                  <Link className="linkWithoutDecoration" to="/">
                    {" "}
                    Our Marketplace Policies{" "}
                  </Link>{" "}
                  <br />
                  <Link className="linkWithoutDecoration" to="/">
                    {" "}
                    Merchant Dashboard Login
                  </Link>
                </div>
              </MDBCol>

              <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                <h4 className="text-uppercase fw-bold mb-4">Need Help?</h4>
                <div className="footerList">
                  <Link className="linkWithoutDecoration" to="/">
                    {" "}
                    FAQs{" "}
                  </Link>{" "}
                  <br />
                  <Link className="linkWithoutDecoration" to="/">
                    {" "}
                    Policies
                  </Link>{" "}
                  <br />
                  <Link className="linkWithoutDecoration" to="/">
                    {" "}
                    Contact Us
                  </Link>
                </div>
              </MDBCol>

              <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                <h4 className="text-uppercase fw-bold mb-4">
                  Download our App
                </h4>
                <div className="footerList">
                  <Link className="linkWithoutDecoration" to="/">
                    {" "}
                    <img
                      className="App-img"
                      src={
                        "https://ii2.pepperfry.com/media/wysiwyg/banners/web22-footer-apple-appstore-logo_2x.png"
                      }
                    />{" "}
                  </Link>{" "}
                  <br />
                  <Link className="linkWithoutDecoration" to="/">
                    {" "}
                    <img
                      className="App-img"
                      src={
                        "https://ii2.pepperfry.com/media/wysiwyg/banners/web22-footer-google-playstore-logo_2x.png"
                      }
                    />{" "}
                  </Link>{" "}
                  <br />
                </div>
              </MDBCol>
            </div>

            <div className="FooterSecondSession">
              <div className="categorySession">
                <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                  <Link to="/" className="linkWithoutDecoration">
                    <h4 className="text-uppercase fw-bold mb-4">
                      <MDBIcon icon="gem" className="me-3" />
                      Popular Categories
                    </h4>
                    <p>
                      Sofas,Sectional Sofas,Sofa Sets,Queen Size Beds, King Size
                      Beds,Coffee Tables,Dining Sets,Recliners, Sofa Cum
                      Beds,Rocking Chairs,Cabinets & Sideboards,Book Shelves, TV
                      & Media Units,Wardrobes,Outdoor Furniture,Bar Cabinets,
                      Wall Shelves,Photo Frames,Bed Sheets,Table Linen,Study
                      Tables, Office Furniture,Dining Tables,Carpets,Wall Art
                    </p>
                  </Link>
                </MDBCol>
              </div>

              <div className="BrandSession">
                <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                  <Link to="/" className="linkWithoutDecoration">
                    <h4 className="text-uppercase fw-bold mb-4">
                      <MDBIcon icon="gem" className="me-3" />
                      Popular Brands
                    </h4>
                    <p>
                      Mintwud,Woodsworth,CasaCraft,
                      Amberville,Mudramark,Bohemiana, Clouddio,Spacewood,A
                      Globia Creations, Febonic,@home,Durian,Evok,Hometown,
                      Nilkamal,Crystal Furnitech,Bluewud,
                      Duroflex,Sleepyhead,Green Soul, Orange Tree
                    </p>
                  </Link>
                </MDBCol>
              </div>

              <div className="citesCategory">
                <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                  <Link to="/" className="linkWithoutDecoration">
                    <h4 className="text-uppercase fw-bold mb-4">
                      <MDBIcon icon="gem" className="me-3" />
                      Popular cities
                    </h4>
                    <p>
                      Bengaluru,Mumbai,Navi Mumbai,Delhi,Hyderabad,
                      Pune,Chennai,Gurgaon,Kolkata,Noida,Goa,
                      Ghaziabad,Faridabad,Jaipur,Lucknow,Kochi,
                      Visakhapatnam,Chandigarh,Vadodara,Nagpur,
                      Thiruvananthapuram,Indore,Mysore,Bhopal,
                      Surat,Jalandhar,Patna,Ludhiana,Ahmedabad,
                      Nashik,Madurai,Kanpur,Aurangabad
                    </p>
                  </Link>
                </MDBCol>
              </div>
            </div>
          </MDBRow>
        </MDBContainer>
      </section>
      <div className="ThirdSessionMain">
        <div className="ThirdSession">
          <div className="ThirdSessionLeft">
            <div className="HeadingAccept">
              <h3>We accept</h3>
            </div>
            <Link className="linkWithoutDecoration" to="/">
              {" "}
              <img src="https://ii3.pepperfry.com/assets/w23-pf-visa.jpg" />{" "}
            </Link>
            <Link className="linkWithoutDecoration" to="/">
              {" "}
              <img src="https://ii2.pepperfry.com/assets/w23-pf-master-card.jpg" />{" "}
            </Link>
            <Link className="linkWithoutDecoration" to="/">
              {" "}
              <img src="https://ii1.pepperfry.com/assets/w23-pf-maestro.jpg" />{" "}
            </Link>
            <Link className="linkWithoutDecoration" to="/">
              {" "}
              <img src="https://ii3.pepperfry.com/assets/w23-pf-rupay.jpg" />{" "}
            </Link>
            <Link className="linkWithoutDecoration" to="/">
              {" "}
              <img src="https://ii3.pepperfry.com/assets/w23-pf-dinners-club.jpg" />{" "}
            </Link>
            <Link className="linkWithoutDecoration" to="/">
              {" "}
              <img src="https://ii2.pepperfry.com/assets/w23-pf-wallet.jpg" />{" "}
            </Link>
            <Link className="linkWithoutDecoration" to="/">
              {" "}
              <img src="https://ii1.pepperfry.com/assets/w23-pf-net-banking.jpg" />{" "}
            </Link>
          </div>
          <div className="ThirdSessionRight">
            <div className="HeadingAccept">
              <h3>Like What You See? Follow us Here</h3>
            </div>
            <Link className="linkWithoutDecoration" to="/">
              {" "}
              <img src="https://ii1.pepperfry.com/assets/w23-pf-social-insta.png" />{" "}
            </Link>
            <Link className="linkWithoutDecoration" to="/">
              {" "}
              <img src="https://ii3.pepperfry.com/assets/w23-pf-social-fb.png" />{" "}
            </Link>
            <Link className="linkWithoutDecoration" to="/">
              {" "}
              <img src="https://ii3.pepperfry.com/assets/w23-pf-social-pinterest.png" />{" "}
            </Link>
            <Link className="linkWithoutDecoration" to="/">
              {" "}
              <img src="https://ii2.pepperfry.com/assets/w23-pf-social-linkedin.png" />{" "}
            </Link>
            <Link className="linkWithoutDecoration" to="/">
              {" "}
              <img src="https://ii3.pepperfry.com/assets/w23-pf-social-youtube.png" />{" "}
            </Link>
            <Link className="linkWithoutDecoration" to="/">
              {" "}
              <img src="https://ii1.pepperfry.com/assets/w23-pf-social-twitter.png" />{" "}
            </Link>
          </div>
        </div>
      </div>

      <div
        className="copyRight text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)", color: "white" }}
      >
        © 2021 Copyright:
        <Link to="/" className="linkWithoutDecoration">
          AJ Furniture
        </Link>
      </div>
    </MDBFooter>
  );
}
