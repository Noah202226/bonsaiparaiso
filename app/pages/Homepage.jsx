import React from "react";
import { Text, Card, Group, Container } from "@mantine/core";
import Image from "next/image";
import "../assets/pages/Homepage.css";

function ProductCard({ image, title, price, rating, soldCount }) {
  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      className="product-card"
    >
      <div className="image-container">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="product-info">
        <Text weight={500} className="product-title">
          {title}
        </Text>
        <Group position="apart" mt="xs">
          <Text weight={700}>₱{price}</Text>
          <Text size="sm" color="dimmed">
            ★ {rating} | {soldCount} sold
          </Text>
        </Group>
      </div>
    </Card>
  );
}

function Homepage() {
  const recommendedProducts = [
    {
      image: "/images/wire1.jpg",
      title: "5 METERS ALUMINUM BONSAI WIRE...",
      price: 35,
      rating: 4.8,
      soldCount: "1.7K",
    },
    {
      image: "/images/wire2.jpg",
      title: "BONSAI WIRE (1/2 kl. and 1/4kl) bonsai wire...",
      price: 150,
      rating: 4.9,
      soldCount: "5.5K",
    },
    {
      image: "/images/wire3.jpg",
      title: "Colorful bonsai wire set",
      price: 80,
      rating: 4.7,
      soldCount: "3.2K",
    },
    {
      image: "/images/pruning_shears.jpg",
      title: "Bonsai pruning shears",
      price: 45,
      rating: 4.6,
      soldCount: "2.5K",
    },
  ];

  const topProducts = [
    {
      image: "/images/wire4.jpg",
      title: "5meters aluminum bonsai wire small size...",
      price: 25,
      rating: 4.9,
      soldCount: "7K",
    },
    {
      image: "/images/pot_set.jpg",
      title: "Bonsai pot set (3 pieces)",
      price: 60,
      rating: 4.8,
      soldCount: "4.3K",
    },
    {
      image: "/images/soil_mix.jpg",
      title: "Bonsai soil mix (2kg)",
      price: 15,
      rating: 4.7,
      soldCount: "5.8K",
    },
    {
      image: "/images/watering_can.jpg",
      title: "Bonsai watering can",
      price: 30,
      rating: 4.5,
      soldCount: "3.1K",
    },
  ];

  return (
    <Container className="homepage">
      <section className="product-section">
        <Group position="apart" mb="md">
          <Text size="xl" weight={700}>
            RECOMMENDED FOR YOU
          </Text>
          <Text size="sm" color="blue" style={{ cursor: "pointer" }}>
            See All &gt;
          </Text>
        </Group>
        <div className="product-grid">
          {recommendedProducts.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </section>

      <section className="product-section">
        <Group position="apart" mb="md" mt="xl">
          <Text size="xl" weight={700}>
            TOP PRODUCTS
          </Text>
          <Text size="sm" color="blue" style={{ cursor: "pointer" }}>
            See All &gt;
          </Text>
        </Group>
        <div className="product-grid">
          {topProducts.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </section>
    </Container>
  );
}

export default Homepage;
