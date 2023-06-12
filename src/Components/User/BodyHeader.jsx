import { Link } from 'react-router-dom'
import imageSrc from '../images/HeaderImage.jpg'
import Sofaimg from '../images/sofa.jpg'
import ChairImg from '../images/chair.jpg'
import TableImg from '../images/tables.jpg'
import DiningsetImg from '../images/diningset.jpg'
import BedImg from '../images/bed.jpg'
import StorageImg from '../images/storage.jpg'
import OfficeFurImg from '../images/officeFurniture.jpg'
import PetFurnitureImg from '../images/PetFurniture.jpg'
import StudyImg from '../images/StudyTable.jpg'
import DressingImg from '../images/dressing.jpg'
import BestSellBed from '../images/bestsellbed.jpg'
import BestSellChair from '../images/bestsellChair.jpg'
import BestSellTable from '../images/bestselltable.jpg'
import BestSellShoeCabin from '../images/bestSellShoecabinet.jpg'

import "../User/BodyHeader.css"

export default function BodyHeader(){
    return(
        <div className="BodyHeader">
            <div  className="HeaderImage"> 
            <Link to={'/'}>
            <img src={imageSrc} alt="imag" />
            </Link>
            </div>
            <div>
            <div>
                <h3>Shop by Category</h3>
            </div>


            <div className='ShopCategory' >
            <div className='imageContainer d-flex justify-content-center'>
        <img src={Sofaimg} alt="Image 1" />
        <p>Sofas</p>
    </div>
    <div className='imageContainer'>
        <img src={ChairImg} alt="Image 2" />
        <p>Chairs</p>
    </div>
    <div className='imageContainer'>
        <img src={TableImg} alt="Image 3" />
        <p>Tables</p>
    </div>
    <div className='imageContainer'>
        <img src={DiningsetImg} alt="Image 4" />
        <p>Dining Set</p>
    </div>
    <div className='imageContainer'>
        <img src={BedImg}alt="Image 5" />
        <p>Bed</p>
    </div>
    </div>

    <div className='ShopCategory' >
            <div className='imageContainer d-flex justify-content-center'>
        <img src={StorageImg} alt="Image 1" />
        <p>Storage & organizer</p>
    </div>
    <div className='imageContainer'>
        <img src={PetFurnitureImg} alt="Image 2" />
        <p>Pet Furniture</p>
    </div>
    <div className='imageContainer'>
        <img src={StudyImg} alt="Image 3" />
        <p>Study Tables</p>
    </div>
    <div className='imageContainer'>
        <img src={OfficeFurImg} alt="Image 4" />
        <p>Office Furniture</p>
    </div>
    <div className='imageContainer'>
        <img src={DressingImg}alt="Image 5" />
        <p>Dressing Table</p>
    </div>
    </div>
    </div>

        <div>
            <div>
                <h3>Shop Best Sellers</h3>
            </div>
            <div className='BestSellCategory' >
            <div className='BestSellimageContainer'>
        <img src={BestSellBed}alt="Image 5" />
        <h4>Beds with Box Storage</h4>
        <p className='BestSellP'>300 + Options, Starting ₹10710</p>
    </div>
    <div className='BestSellimageContainer'>
        <img src={BestSellTable}alt="Image 5" />
        <h4>Modern Writing Tables</h4>
        <p className='BestSellP'>180+ Options, Starting ₹2799</p>
    </div>
    <div className='BestSellimageContainer'>
        <img src={BestSellChair}alt="Image 5" />
        <h4>Ergonomic Chairs</h4>
        <p className='BestSellP'>250+ Options, Starting ₹3799</p>
    </div>
    <div className='BestSellimageContainer'>
        <img src={BestSellShoeCabin}alt="Image 5" />
        <h4>Shoe Cabinets</h4>
        <p className='BestSellP'>95+ Options, Starting ₹3499</p>
    </div>

            </div>

            </div> 



    
    </div>

            
    )
}
