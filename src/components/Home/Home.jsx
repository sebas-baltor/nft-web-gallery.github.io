import { useEffect, useState } from "react";
import {Nav,Main,Item, Card} from "../../constants/index";

import {BsChevronLeft,BsChevronRight} from "react-icons/bs"; 
import "./Home.scss";

export default function Home() {
    let [photos,setPhotos] = useState([]);
    let [profilePhotos,setProfilePhotos] = useState([]);
    useEffect(() => {
        let endPoint = 'https://api.unsplash.com/search/photos';
        let accessKey = 'VJUQxYBEJGy0DNf-DtkiRJZJJXpvqyxmMLFiLFjtUwM';
        fetch(`${endPoint}?query=digital+art&client_id=${accessKey}`).then(res => res.json()).then(data => {
            let sectionData = data.results.slice(0, 6);
            setPhotos(sectionData);
            // console.log(sectionData);
        });
        fetch(`${endPoint}?query=profile+photo&client_id=${accessKey}`).then(res => res.json()).then(data => {
            let sectionData = data.results.slice(0, 9);
            setProfilePhotos(sectionData);
            console.log(sectionData);
        })
    },[])
    return (
        <>
        <Nav/>
        <Main photos={photos}/>
        <div className="container">
            <div className="collection">
                <div className="collection__title">
                    <h2 className="subtitle">Colexiones Top</h2>
                </div>
                <div className="collection__filter">
                    <button className="btn__outline--white">30 dias</button>
                    <button className="btn__outline--white">7 dias</button>
                    <button className="btn__outline--white">hoy</button>
                </div>
                <hr />
                <div className="collection__grid">
                    {
                        profilePhotos.map((p,i)=>{
                            return(
                                <Item id={i+1} key={i} title={p.user.name} imgSrc={p.urls.regular} altDescription={p.alt_description}/>
                            )
                        })
                    }
                </div>
                <div className="collection__btn">
                    <button className="btn__dark">Ver todos</button>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="newitem">
                <div className="newitem__title">
                    <h2 className="subtitle">Nuevos items</h2>
                    <div className="newitem__title--row">
                        <button className="btn">
                            <BsChevronLeft />
                        </button>
                        <button className="btn">
                            <BsChevronRight />
                        </button>
                    </div>
                </div>
                <div className="newitem__flex">
                    <Card imgSrc = "https://images.unsplash.com/photo-1641391503184-a2131018701b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" id="DSfH0sE"/>
                </div>
            </div>
        </div>
        </>
    )
}