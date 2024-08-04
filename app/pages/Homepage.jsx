import React from "react";

import BonsaiCarousel from "../components/BonsaiCarousel";

import image1 from "../../public/1.jpg";
import image2 from "../../public/2.jpg";
import image3 from "../../public/3.jpg";
import image4 from "../../public/4.jpg";
import image5 from "../../public/5.jpg";

function Homepage() {
  return (
    <div className="homepage-hero">
      <div>
        <h1>Your Bonsai Partner</h1>

        <h4>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa,
          delectus, velit voluptatibus maiores non quisquam sapiente dignissimos
          aspernatur rerum officia, similique adipisci?
        </h4>
      </div>

      <BonsaiCarousel
        images={[
          {
            id: 1,
            name: "bonsai 1",
            // link: "https://img.freepik.com/premium-photo/photo-japanese-bonsai-garden-miniature-trees_611870-36660.jpg",
            link: image1,
            width: 320,
            height: 320,
          },
          {
            id: 2,
            name: "bonsai 2",
            // link: "https://img.freepik.com/premium-photo/photo-japanese-bonsai-garden-miniature-trees_611870-36660.jpg",
            link: image2,
            width: 320,
            height: 320,
          },
          {
            id: 3,
            name: "bonsai 3",
            link: image3,
            width: 320,
            height: 320,
          },
          {
            id: 4,
            name: "bonsai 4",
            link: image4,
            width: 320,
            height: 320,
          },
          {
            id: 5,
            name: "bonsai 5",
            link: image5,
            width: 320,
            height: 320,
          },
        ]}
      />
    </div>
  );
}

export default Homepage;
