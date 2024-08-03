import { Carousel } from "@mantine/carousel";

export default function BonsaiCarousel({ images }) {
  console.log("Images: ", images);
  return (
    <Carousel
      slideSize="70%"
      height={500}
      slideGap="xs"
      controlsOffset="xs"
      loop
      withIndicators
    >
      {images.map((img) => (
        <Carousel.Slide key={img.id}>
          <img src={img.link} alt={img.name} />
          {img.name}
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}
