import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import "./Footer.css"

export default function Footer() {
  return (
    <MDBFooter  bgColor='gray' className='text-center text-lg-start text-muted Footer'>
      
      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
           
<div className='FooterFirstSession' >
            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h4 className='text-uppercase fw-bold mb-4'>Corporate</h4>
              <div className='footerList'>
             <Link className='linkWithoutDecoration' to='/'> About Us </Link> <br />
             <Link className='linkWithoutDecoration' to='/'> Corporate Governance </Link> <br />
             <Link className='linkWithoutDecoration' to='/'> AJFurniture in the News </Link> <br />
             <Link className='linkWithoutDecoration' to='/'> Careers</Link>
             </div>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h4 className='text-uppercase fw-bold mb-4'>Useful Links</h4>
              <div className='footerList'>
             <Link className='linkWithoutDecoration' to='/'> Explore Gift Cards </Link> <br />
             <Link className='linkWithoutDecoration' to='/'> Buy in Bulk </Link> <br />
             <Link className='linkWithoutDecoration' to='/'> Discover Our Brands </Link> <br />
             <Link className='linkWithoutDecoration' to='/'> Check Out Bonhomie,Our Blog</Link> <br />
             <Link className='linkWithoutDecoration' to='/'> Find a Studio </Link>
             </div>
            </MDBCol>


            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h4 className='text-uppercase fw-bold mb-4'>Partner With Us</h4>
              <div className='footerList'>
             <Link className='linkWithoutDecoration' to='/'> Sell on AJ Furniture </Link> <br />
             <Link className='linkWithoutDecoration' to='/'> Become a Feanchisee </Link> <br />
             <Link className='linkWithoutDecoration' to='/'> Become Our Channel Partner </Link> <br />
             <Link className='linkWithoutDecoration' to='/'> Become Our Pep Homie </Link> <br />
             <Link className='linkWithoutDecoration' to='/'> Our Marketplace Policies </Link> <br />
             <Link className='linkWithoutDecoration' to='/'> Merchant Dashboard Login</Link>
             </div>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h4 className='text-uppercase fw-bold mb-4'>Need Help?</h4>
              <div className='footerList'>
             <Link className='linkWithoutDecoration' to='/'> FAQs </Link> <br />
             <Link className='linkWithoutDecoration' to='/'> Policies</Link> <br />
             <Link className='linkWithoutDecoration' to='/'> Contact Us</Link>
             </div>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h4 className='text-uppercase fw-bold mb-4'>Download our App</h4>
              <div className='footerList'>
             <Link className='linkWithoutDecoration' to='/'> <img className='App-img' src={'https://ii2.pepperfry.com/media/wysiwyg/banners/web22-footer-apple-appstore-logo_2x.png'} /> </Link> <br />
             <Link className='linkWithoutDecoration' to='/'> <img className='App-img' src={'https://ii2.pepperfry.com/media/wysiwyg/banners/web22-footer-google-playstore-logo_2x.png'} /> </Link> <br />
             </div>
            </MDBCol>



            </div>

            <div className='FooterSecondSession'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                Company name
              </h6>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
              </p>
            </MDBCol>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                Company name
              </h6>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
              </p>
            </MDBCol>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                Company name
              </h6>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
              </p>
            </MDBCol>

            </div>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                New York, NY 10012, US
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@example.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <Link to='/' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </ Link>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>


      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
  );
}