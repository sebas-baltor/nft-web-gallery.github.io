import React from "react";

import "./Main.scss";

export default function Main(props) {
    return(
        <div className="container">
            <main className="main">
                <div className="main__section--d">
                   <h1 className="title">Crea, Explora & Collecciona <span className="highlight">Arte <br /> digital</span> y NFTs</h1>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At excepturi beatae labore sapiente deleniti consectetur assumenda iste! Voluptate, aperiam molestiae!</p>
                   <div className="main__btn">
                   <button className="btn__dark">COMENZAR</button>
                   <button className="btn__outline">Creadores</button>
                   </div>
                </div>
                <div className="main__section">
                    <div className="img__grid">
                        {
                            props.photos.map(p=>{
                                return(
                                    <div className="img__grid--item" key={p.id}>
                                        <img className="zoom" src={p.urls.regular} alt={p.alt_description} />
                                    </div>
                                )
                            })  
                        }
                    </div>
                </div>
            </main>
        </div>
    )
}