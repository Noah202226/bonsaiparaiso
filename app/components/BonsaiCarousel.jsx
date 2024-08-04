import { Carousel } from "@mantine/carousel";
import Image from "next/image";

export default function BonsaiCarousel({ images }) {
  console.log("Images: ", images);
  return (
    <Carousel
      slideSize="10%"
      height={350}
      slideGap="lg"
      controlsOffset="xs"
      loop="true"
      withIndicators="true"
      style={{
        background: "coral",
        padding: "1rem",
        width: 500,
        borderRadius: "5%",
        boxShadow: "2px 5px 10px black",
      }}
    >
      {images.map((img) => (
        <Carousel.Slide key={img.id}>
          <div style={{ position: "relative" }}>
            <Image
              src={img.link}
              alt={img.name}
              width={img.width}
              height={img.height}
            />
            <p style={{ textAlign: "center" }}>{img.name}</p>
          </div>
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}
