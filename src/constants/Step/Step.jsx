import { FaArrowRight } from 'react-icons/fa';
import "./Step.scss"; 

export default function Step({title,icon,iconAlt}){
    return (
        <div>
            <div className="step">
                <div className="step__head">
                    <div className="step__head--icon">
                        <img className="zoom" src={icon} alt={iconAlt} />
                    </div>
                    <div className="step__head--price">#SdfSDe33</div>
                </div>
                <div className="step__body">
                    <h4>{title}</h4>
                    <p>Lorem ip nam necessi nemo quam ratione dolorum doloremque labore cumque libero aspernatur quia ex veniam! Facere, voluptatum?</p>
                    <div className="step__body--icon">
                        <FaArrowRight />
                    </div>
                </div>
            </div>
        </div>
    )
}