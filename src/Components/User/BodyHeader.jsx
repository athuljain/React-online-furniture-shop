import { Link } from 'react-router-dom'
import imageSrc from '../images/HeaderImage.jpg'
import Sofaimg from '../images/sofa.jpg'
import ChairImg from '../images/chair.jpg'
import TableImg from '../images/tables.jpg'
import DiningsetImg from '../images/diningset.jpg'
import BedImg from '../images/bed.jpg'
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
                <h3>Shop by Category</h3>
            </div>
            <div className='ShopCategory' >
            <div className='imageContainer'>
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

        </div>
    )
}
