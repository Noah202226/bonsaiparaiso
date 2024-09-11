import React from "react";
import {
  Container,
  Title,
  Text,
  Grid,
  Card,
  Image,
  Badge,
  Group,
  Button,
} from "@mantine/core";
import "../assets/pages/Blog.css";

const blogPosts = [
  {
    id: 1,
    title: "The Art of Bonsai: A Beginner's Guide",
    excerpt:
      "Discover the ancient Japanese art of bonsai and learn how to start your own miniature tree garden.",
    image: "https://picsum.photos/seed/bonsai1/800/400",
    category: "Beginner's Guide",
    date: "April 15, 2023",
  },
  {
    id: 2,
    title: "5 Essential Tools for Bonsai Maintenance",
    excerpt:
      "Explore the must-have tools every bonsai enthusiast needs to keep their trees healthy and beautiful.",
    image: "https://picsum.photos/seed/bonsai2/800/400",
    category: "Tools & Equipment",
    date: "May 2, 2023",
  },
  {
    id: 3,
    title: "Seasonal Care Tips for Your Bonsai",
    excerpt:
      "Learn how to adapt your bonsai care routine throughout the year to ensure your tree thrives in every season.",
    image: "https://picsum.photos/seed/bonsai3/800/400",
    category: "Care & Maintenance",
    date: "June 10, 2023",
  },
];

function BlogPost({ title, excerpt, image, category, date }) {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder className="blog-card">
      <Card.Section>
        <Image src={image} height={200} alt={title} />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Badge color="pink" variant="light">
          {category}
        </Badge>
        <Text size="sm" color="dimmed">
          {date}
        </Text>
      </Group>

      <Title order={3} className="blog-title">
        {title}
      </Title>

      <Text size="sm" color="dimmed" mt="sm" className="blog-excerpt">
        {excerpt}
      </Text>

      <Button variant="light" color="blue" fullWidth mt="md" radius="md">
        Read More
      </Button>
    </Card>
  );
}

function Blogpage() {
  return (
    <Container size="lg" className="blog-container">
      <Title order={1} className="blog-page-title">
        Bonsai Paraiso Blog
      </Title>
      <Text size="lg" mb="xl">
        Explore the world of bonsai through our articles and guides.
      </Text>

      <Grid>
        {blogPosts.map((post) => (
          <Grid.Col key={post.id} xs={12} sm={6} md={4}>
            <BlogPost {...post} />
          </Grid.Col>
        ))}
      </Grid>

      <Group position="center" mt="xl">
        <Button variant="outline" color="gray">
          Load More Posts
        </Button>
      </Group>
    </Container>
  );
}

export default Blogpage;
