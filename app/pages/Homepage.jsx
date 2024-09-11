import React from "react";
import { SimpleGrid, Text, Card, Group, Badge } from "@mantine/core";
import Image from "next/image";

function ProductCard({ image, title, price, rating, soldCount }) {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <div style={{ position: "relative", width: "100%", height: "200px" }}>
          <Image src={image} alt={title} fill style={{ objectFit: "cover" }} />
        </div>
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>{title}</Text>
        <Badge color="pink" variant="light">
          ₱{price}
        </Badge>
      </Group>

      <Text size="sm" color="dimmed">
        ★ {rating} | {soldCount} sold
      </Text>
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
    <div className="homepage">
      <section className="recommended-products">
        <Group position="apart" mb="md">
          <Text size="xl" weight={700}>
            RECOMMENDED FOR YOU
          </Text>
          <Text size="sm" color="blue" style={{ cursor: "pointer" }}>
            See All &gt;
          </Text>
        </Group>
        <SimpleGrid
          cols={4}
          spacing="lg"
          breakpoints={[
            { maxWidth: "md", cols: 3, spacing: "md" },
            { maxWidth: "sm", cols: 2, spacing: "sm" },
            { maxWidth: "xs", cols: 1, spacing: "sm" },
          ]}
        >
          {recommendedProducts.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </SimpleGrid>
      </section>

      <section className="top-products">
        <Group position="apart" mb="md" mt="xl">
          <Text size="xl" weight={700}>
            TOP PRODUCTS
          </Text>
          <Text size="sm" color="blue" style={{ cursor: "pointer" }}>
            See All &gt;
          </Text>
        </Group>
        <SimpleGrid
          cols={4}
          spacing="lg"
          breakpoints={[
            { maxWidth: "md", cols: 3, spacing: "md" },
            { maxWidth: "sm", cols: 2, spacing: "sm" },
            { maxWidth: "xs", cols: 1, spacing: "sm" },
          ]}
        >
          {topProducts.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </SimpleGrid>
      </section>
    </div>
  );
}

export default Homepage;
