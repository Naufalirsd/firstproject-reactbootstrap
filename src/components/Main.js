import App from "../App";
import Hero from "./Hero";
import Navigation from "./Navigation";
import Jurusan from "./Jurusan";
import Card1 from "./../assets/card1.png"
import Card2 from "./../assets/card2.png"
import Card3 from "./../assets/card3.png"
import Kegiatan from "./kegiatan";
import Kegiatan1 from "./../assets/kegiatan1.png";
import Kegiatan2 from "./../assets/kegiatan2.png";
import Kegiatan3 from "./../assets/kegiatan3.png";
import Kegiatan4 from "./../assets/kegiatan4.png";
import Kegiatan5 from "./../assets/kegiatan5.png";

const Main = () => {
    return (
        <div>
            <Navigation />
            <Hero />
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center my-5">
                        <h1>Jurusan Sekolah</h1>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-4">
                        <Jurusan image={Card1} judul="Activities outside the classroom"/>
                    </div>
                    <div className="col-4">
                        <Jurusan image={Card2} judul="Multipedia"/>
                    </div>
                    <div className="col-4">
                        <Jurusan image={Card3} judul="Class exams"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 text-center my-5">
                        <h1>Kegiatan Sekolah</h1>
                    </div>
                </div>
                <div className="row gap-3 mb-5">
                    <div className="col-12">
                        <Kegiatan image={Kegiatan1} deskripsi="Badminton"/>
                    </div>
                    <div className="col-12">
                        <Kegiatan image={Kegiatan2} deskripsi="Quater Back"/>
                    </div>
                    <div className="col-12">
                        <Kegiatan image={Kegiatan3} deskripsi="BasketBall"/>
                    </div>
                    <div className="col-12">
                        <Kegiatan image={Kegiatan4} deskripsi="Football"/>
                    </div>
                    <div className="col-12">
                        <Kegiatan image={Kegiatan5} deskripsi="VollyBall"/>
                    </div>
                </div>
            </div>
        </div> 
    );
};

export default Main;