import { useEffect, useState } from "react";
import { Nav, Main, Item, Card, Step, Footer } from "../../constants/index";

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { HiOutlineCube } from "react-icons/hi";
import { MdOutlineNaturePeople } from "react-icons/md";
import { BiBitcoin, BiSearchAlt } from "react-icons/bi";
import "./Home.scss";

export default function Home() {
    let [photos, setPhotos] = useState([]);
    let [profilePhotos, setProfilePhotos] = useState({
        nine: [],
        three: [],
    });
    let [random, setRandom] = useState({
        four: [],
        eight: [],
    });
    useEffect(() => {
        let endPoint = 'https://api.unsplash.com/search/photos';
        let endPointRandom = 'https://api.unsplash.com/photos/random';
        let accessKey = 'VJUQxYBEJGy0DNf-DtkiRJZJJXpvqyxmMLFiLFjtUwM';
        fetch(`${endPoint}?query=digital+art&client_id=${accessKey}`).then(res => res.json()).then(data => {
            let sectionData = data.results.slice(0, 6);
            setPhotos(sectionData);
        });
        fetch(`${endPoint}?query=profile+photo&per_page=12&client_id=${accessKey}`).then(res => res.json()).then(data => {
            let nineSectionData = data.results.slice(0, 9);
            let threeSectionData = data.results.slice(9, 12);
            setProfilePhotos({ nine: nineSectionData, three: threeSectionData });
        })
        fetch(`${endPointRandom}?query=digital+art&count=8&client_id=${accessKey}`).then(res => res.json()).then(data => {
            let sectionData = data.slice(0, 4);
            setRandom({ four: sectionData, eight: data });
        })
    }, [])
    return (
        <>
            <Nav />
            <Main photos={photos} />
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
                            profilePhotos.nine.map((p, i) => {
                                return (
                                    <Item id={i + 1} key={i} title={p.user.name} imgSrc={p.urls.regular} altDescription={p.alt_description} />
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
                        {
                            random.four.map((p, i) => {
                                return (
                                    <Card id={i + 1} key={i} url={p.urls.regular} altDescription={p.alt_description} profilePhotos={profilePhotos.three} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="hotdrop">
                    <div className="hotdrop__title">
                        <h2 className="subtitle">Colexiones Top</h2>
                    </div>
                    <div className="hotdrop__filter">
                        <button className="btn__outline"><HiOutlineCube /> NFTs</button>
                        <button className="btn__outline"><MdOutlineNaturePeople /> Live Action</button>
                        <button className="btn__outline"><BiBitcoin /> Por Moneda</button>
                        <button className="btn__outline"><BiSearchAlt /> Precio Fijo</button>
                    </div>
                    <div className="hotdrop__grid">
                        {
                            random.eight.map((p, i) => {
                                return (
                                    <Card id={i + 1} key={i} url={p.urls.regular} altDescription={p.alt_description} profilePhotos={profilePhotos.three} />
                                )
                            })
                        }
                    </div>
                    <div className="btn__dark">Ver todos</div>
                </div>
            </div>
            <div className="container">
                <div className="newitem">
                    <div className="newitem__title--c">
                        <h2 className="subtitle">Crea y vende tus NFTs</h2>
                    </div>
                    <div className="newitem__flex">
                        <Step key={123} title="Configura tu wallet" icon="https://cdn.dribbble.com/users/1241693/screenshots/3979097/media/6ddecf45fb15742a9dcc1b65299c3752.png" iconAlt="Configura tu Wallet" />
                        <Step key={13} title="Crea tu colexion" icon="https://cdn.dribbble.com/users/1241693/screenshots/3979097/media/6ddecf45fb15742a9dcc1b65299c3752.png" iconAlt="Crea tu colexion" />
                        <Step key={12} title="Añade tus NFTs" icon="https://cdn.dribbble.com/users/1241693/screenshots/3979097/media/6ddecf45fb15742a9dcc1b65299c3752.png" iconAlt="Añade tus NFTs" />
                        <Step key={23} title="Vende tus NFTs" icon="https://cdn.dribbble.com/users/1241693/screenshots/3979097/media/6ddecf45fb15742a9dcc1b65299c3752.png" iconAlt="Vende tus NFTs" />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="suscribe">
                    <div className="suscribe__title">
                        <h2 className="subtitle">No te pierdas de ningun lanzamiento</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil voluptatem pariatur quisquam.</p>
                    </div>
                    <form className="suscribe__form">
                        <input type="email" placeholder="email" />
                        <button className="btn__dark">Suscribirse</button>
                    </form>
                </div>
            </div>
            <div className="container">
                <Footer />
            </div>
        </>
    )
}