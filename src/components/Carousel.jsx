import React from "react";
import Carousel from "react-material-ui-carousel";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {Button} from "@material-ui/core"
import Amberd from "../images/tourism/route-1/amberd.jpg";
import Amberdimg from "../images/tourism/route-1/Amberd-1.jpg";
import Aragats from "../images/tourism/route-1/aragats.jpg";
import Ararat from "../images/tourism/ararat.jpg";
import Astxaditaran from "../images/tourism/route-1/astxaditaran.jpg";
import Byurakan from "../images/tourism/route-1/byurakan-astrophysical.jpg";
import LakeQari from "../images/tourism/route-1/lake-qari.jpg";
import QariLij from "../images/tourism/route-1/qari-lij.jpg";
import Tsaxkavanq from "../images/tourism/route-1/tsaxkavanq.jpg";
import Saxmosavanq from "../images/tourism/route-1/saxmosavanq.jpg";
import Ejmiacin from "../images/tourism/route-2/ejmiacin.jpg";
import Ejmiacin_1 from "../images/tourism/route-2/ejmiacin-1.jpg";
import Shoxakat from "../images/tourism/route-2/shoghakat.jpg";
import SurbGayane from "../images/tourism/route-2/surb-gayane.jpg";
import SurbHripsime from "../images/tourism/route-2/surb-Hripsime.jpg";
import Sardarapat from "../images/tourism/route-2/sardarapat.jpg";
import Zvartnoc from "../images/tourism/route-2/zvartnoc.jpg";
import Garni_1  from "../images/tourism/route-3/garni-2.jpg";
import Garni_2 from "../images/tourism/route-3/garni-1.jpg";
import Gexard_1 from "../images/tourism/route-3/gexard-1.jpg";
import Gexard_2 from "../images/tourism/route-3/gexard-2.jpg";
import XorVirap_1 from "../images/tourism/route-3/xor-virap-1.jpg";
import XorVirap_2 from "../images/tourism/route-3/xor-virap-2.jpg";
import Sevan_1 from "../images/tourism/route-4/sevan-1.jpg";
import Sevan_2 from "../images/tourism/route-4/sevan-2.jpg";
import Axtamar_1 from "../images/tourism/route-4/axtamar-1.jpg";
import Axtamar_2 from "../images/tourism/route-4/axtamar-2.jpg";
import ParzLich_1 from "../images/tourism/route-4/parz-lich-1.jpg";
import ParzLich_2 from "../images/tourism/route-4/parz-lich-2.jpg";
import Haghartsin_1 from "../images/tourism/route-4/haghartsin-1.jpg";
import Haghartsin_2 from "../images/tourism/route-4/haghartsin-2.jpg";
import Goshavanq_1 from "../images/tourism/route-4/goshavanq-1.jpg";
import Goshavanq_2 from "../images/tourism/route-4/goshavanq-2.jpg";
import Areni from "../images/tourism/route-5/areni.jpg";
import Areni_1 from "../images/tourism/route-5/areni-1.jpg";
import Noravanq_1 from "../images/tourism/route-5/noravanq-1.jpg";
import Noravanq_2 from "../images/tourism/route-5/noravanq-2.jpg";
import Jermuk_1 from "../images/tourism/route-5/jermuk-1.jpg";
import Jermuk_2 from "../images/tourism/route-5/jermuk-2.jpg";
import Jermuk_3 from "../images/tourism/route-5/jermuk-3.jpg";
import Jermuk_4 from "../images/tourism/route-5/jermuk-4.jpg";
import Jermuk_5 from "../images/tourism/route-5/jermuk-5.jpg";
import Shaqe_1 from "../images/tourism/route-5/shaqe-1.jpg";
import Shaqe_2 from "../images/tourism/route-5/shaqe-2.jpg";
import ZoracQarer_1 from "../images/tourism/route-5/zorac-qarer-1.jpg";
import ZoracQarer_2 from "../images/tourism/route-5/zorac-qarer-2.jpg";
import TateviVanq from "../images/tourism/route-5/tatevi-vanq-1.jpg";
import Chopanuxi from "../images/tourism/route-5/chopanuxi.jpg";
import SataniKamurj_1 from "../images/tourism/route-5/satani-kamurj-1.jpg";
import SataniKamurj_2 from "../images/tourism/route-5/satani-kamurj.jpg";
import Xndzoresk_1 from "../images/tourism/route-5/xndzoresk-1.jpg";
import Xndzoresk_2 from "../images/tourism/route-5/xndzoresk-2.jpg";
import Arcax_1 from "../images/tourism/route-5/arcax-1.jpg";
import Arcax_2 from "../images/tourism/route-5/arcax-2.jpg";
import Shushi from "../images/tourism/route-5/shushi.jpg";



const CarouselCmp = styled(Carousel)`
`;

const RoutsWrap = styled.div`
  position: relative;
  top: 0;
  transition: 0.25s top;
  width: 16.96vw;
  margin: 0.5vw;
  cursor: pointer;
  color: #364f6b;
  padding: 0.52vw;
  border-radius: 0.2604vw;
  box-shadow: 0vw 0vw 0.52vw 0.052vw rgba(93, 120, 148, 1);
  &:hover {
    top: -0.7vw;
    box-shadow: 0vw 0vw 1.5vw 0.104vw rgba(93, 120, 148, 1);
  }
`;
const Routes = styled.div`
text-align: center;
font-size: 1.2vw;
`;

const CarouselImg = styled.img`
  width: 100%;
  height: 10vw;
  object-fit: cover;
`;

const CarouselWrap = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 1.2vw
`;

const AraratImg = styled.img`
  display: flex;
  width: 93.5vw;
  height: 20vw;
  margin: 0 auto;    
  padding: 0.3vw;
  border-radius: 0.2604vw;
  box-shadow: 0vw 0vw 0.52vw 0.052vw rgba(93,120,148,1);
`;

const SectorTourism = styled.div`
  text-align: center;
  color: #364f6b;
  font-size: 1.6vw;
  border-top: 0.104vw solid #c3c3c3;
  padding: 0.8vw;
  margin: 1vw 2.52vw;
`;

const SearchButton = styled(Button)`
  border-width: 0.104vw !important;
  border-color: #364f6b !important;
  width: 56.5vw !important;
  color: #364f6b !important;
  font-size: 1vw !important;
  padding: 0.8vw !important;
  border-radius: 0.5vw !important;
  text-decoration: none !important;
`;

const DetailsDiv = styled.div`
  display: flex; 
  justify-content: center;
  margin-top: 0.52vw;
`;

export default function CarouselComponent() {
  const route_1 = [Amberd, Amberdimg, Astxaditaran, Byurakan, LakeQari, QariLij, Aragats, Tsaxkavanq, Saxmosavanq];
  const route_2 = [Ejmiacin, Ejmiacin_1, Shoxakat, SurbGayane,  SurbHripsime, Zvartnoc, Sardarapat];
  const route_3 = [Garni_1, Garni_2, Gexard_1, Gexard_2, XorVirap_1, XorVirap_2];
  const route_4 = [Sevan_1, Sevan_2, Axtamar_1, Axtamar_2, ParzLich_1, ParzLich_2, Haghartsin_1, Haghartsin_2, Goshavanq_1, Goshavanq_2];
  const route_5 = [Areni, Areni_1, Noravanq_1, Noravanq_2, Jermuk_1, Jermuk_2, Jermuk_3, Jermuk_4, Jermuk_5, Shaqe_1, Shaqe_2, ZoracQarer_1, 
                   ZoracQarer_2, TateviVanq, Chopanuxi, SataniKamurj_1, SataniKamurj_2, Xndzoresk_1, Xndzoresk_2, Arcax_1, Arcax_2, Shushi];

  return (
    <div id="carousel">
      <SectorTourism>
        <h4>Discover Armenia </h4>Top 5 destinations that have a lot to offer
      </SectorTourism>
      <AraratImg src={Ararat} alt="" />
      <CarouselWrap>        
        <RoutsWrap >
        <CarouselCmp>
          {route_1.map((item) => (
            <CarouselImg src={item} alt="" key={item}/>
          ))}          
        </CarouselCmp>
        <Routes>Route 1</Routes>
      </RoutsWrap>
      <RoutsWrap>
        <CarouselCmp>
          {route_2.map((item) => (
            <CarouselImg src={item} alt="" key={item}/>
          ))}          
        </CarouselCmp>
        <Routes>Route 2</Routes>
      </RoutsWrap>
      <RoutsWrap>
        <CarouselCmp>
          {route_3.map((item) => (
            <CarouselImg src={item} alt="" key={item}/>
          ))}          
        </CarouselCmp>
        <Routes>Route 3</Routes>
      </RoutsWrap>
      <RoutsWrap>
        <CarouselCmp>
          {route_4.map((item) => (
            <CarouselImg src={item} alt="" key={item}/>
          ))}          
        </CarouselCmp>
        <Routes>Route 4</Routes>
      </RoutsWrap>
      <RoutsWrap>
        <CarouselCmp>
          {route_5.map((item) => (
            <CarouselImg src={item} alt="" key={item}/>
          ))}          
        </CarouselCmp>
        <Routes>Route 5</Routes>
      </RoutsWrap>
      </CarouselWrap>
      <DetailsDiv >
      <Link to="/tourism"
          style={{ textDecoration: "none" }}
      >
      <SearchButton
        variant="outlined"
        color="primary"
      >
      DETAILS
      </SearchButton>
      </Link>
      </DetailsDiv>
    </div>
  );
}
