import React from "react";
import BonsaiCarousel from "../components/BonsaiCarousel";

import Image1 from "../../public/1.jpg";
import Image from "../assets/1.jpg";

function Homepage() {
  return (
    <div>
      <h1>Your tag line here....</h1>

      <img src={Image} alt="sample image" />

      <BonsaiCarousel
        images={[
          {
            id: 1,
            name: "bonsai 1",
            // link: "https://img.freepik.com/premium-photo/photo-japanese-bonsai-garden-miniature-trees_611870-36660.jpg",
            link: Image1,
          },
          {
            id: 2,
            name: "bonsai 2",
            // link: "https://img.freepik.com/premium-photo/photo-japanese-bonsai-garden-miniature-trees_611870-36660.jpg",
            link: Image,
          },
          {
            id: 3,
            name: "bonsai 3",
            link: "https://down-ph.img.susercontent.com/file/ph-11134207-7qul4-ljutasi5crkfef",
          },
        ]}
      />
    </div>
  );
}

export default Homepage;
