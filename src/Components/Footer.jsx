import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow
} from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-left'>
      <MDBContainer className='p-4'>
        <MDBRow>
          <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Popular Categories</h5>

            <p>
            

Sofas,Sectional Sofas,Sofa Sets,Queen Size Beds,King Size Beds,Coffee Tables,Dining Sets,Recliners,Sofa Cum Beds,Rocking Chairs,Cabinets & Sideboards,Book Shelves,TV & Media Units,Wardrobes,Outdoor Furniture,Bar Cabinets,Wall Shelves,Photo Frames,Bed Sheets,Table Linen,Study Tables,Office Furniture,Dining Tables,Carpets,Wall Art
            </p>
          </MDBCol>

          <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Popular Brands</h5>

            <p>
             
Mintwud,Woodsworth,CasaCraft,Amberville,Mudramark,Bohemiana,Clouddio,Spacewood,A Globia Creations,Febonic,@home,Durian,Evok,Hometown,Nilkamal,Crystal Furnitech,Bluewud,Duroflex,Sleepyhead,Green Soul,Orange Tree
            </p>
          </MDBCol>
          <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Popular cities</h5>

            <p>
             


Bengaluru,Mumbai,Navi Mumbai,Delhi,Hyderabad,Pune,Chennai,Gurgaon,Kolkata,Noida,Goa,Ghaziabad,Faridabad,Jaipur,Lucknow,Kochi,Visakhapatnam,Chandigarh,Vadodara,Nagpur,Thiruvananthapuram,Indore,Mysore,Bhopal,Surat,Jalandhar,Patna,Ludhiana,Ahmedabad,Nashik,Madurai,Kanpur,Aurangabad

            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-dark' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
  );
}