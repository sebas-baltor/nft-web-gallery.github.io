import { AiOutlineHeart } from "react-icons/ai";

import "./Card.scss";

export default function Card(props) {
  return (
    <div className='card'>
      <div className='card__img'>
        <img className="zoom" src={props.url} alt={props.altDescription} />
      </div>
      <div className='card__body'>
        <div className='card__body--img'>
          <div>
            {
              props.profilePhotos.map(p => {
                return (
                  <img src={p.urls.regular} alt={p.alt_description} key={p.id} />
                )
              })
            }
          </div>
          <h5> 25+ {props.id}</h5>
        </div>
        <div className='card__body--content'>
          <h4>Lorem, ipsum dolor.</h4>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className='card__body--price'>
          <span className='highlight'>+0.3276732ETH</span>
          <span>
            <AiOutlineHeart />
            15.0
          </span>
        </div>
      </div>
    </div>
  );
}
