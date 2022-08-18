import { AiOutlineHeart } from "react-icons/ai";

import "./Card.scss";

export default function Card(props) {
  return (
    <div className='card'>
      <div className='card__img'>
        <img src={props.imgSrc} alt='' />
      </div>
      <div className='card__body'>
        <div className='card__body--img'>
          <div>
            <img src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' alt='' />
            <img src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80' alt='' />
            <img src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' alt='' />
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
