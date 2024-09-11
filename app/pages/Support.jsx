import React from "react";
import {
  Container,
  Title,
  Text,
  Button,
  Group,
  Stack,
  Accordion,
  ActionIcon,
} from "@mantine/core";
import {
  IconBrandTwitter,
  IconBrandFacebook,
  IconBrandInstagram,
  IconMail,
} from "@tabler/icons-react";
import "../assets/pages/Support.css";

function Support() {
  return (
    <Container className="support-container">
      <Title order={1} className="support-title">
        How Can We Help You?
      </Title>
      <Text size="lg" mb="xl">
        We're here to assist you with any questions or concerns you may have.
      </Text>

      <Group mb="xl">
        <Button variant="filled" color="blue">
          Contact Us
        </Button>
        <Button variant="outline">FAQs</Button>
      </Group>

      <Accordion mb="xl">
        <Accordion.Item value="shipping">
          <Accordion.Control>Shipping Information</Accordion.Control>
          <Accordion.Panel>
            We offer free shipping on orders over $50. Standard shipping
            typically takes 3-5 business days.
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="returns">
          <Accordion.Control>Returns & Exchanges</Accordion.Control>
          <Accordion.Panel>
            We accept returns within 30 days of purchase. Items must be unused
            and in original packaging.
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="care">
          <Accordion.Control>Bonsai Care Tips</Accordion.Control>
          <Accordion.Panel>
            Water your bonsai regularly, ensure proper lighting, and trim as
            needed. For specific care instructions, refer to your bonsai's
            species guide.
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>

      <Stack>
        <Text size="lg" weight={700}>
          Connect With Us
        </Text>
        <Text>
          Have a question? Reach out to us on social media or via email.
        </Text>
        <Group>
          <ActionIcon
            size="lg"
            variant="subtle"
            component="a"
            href="https://twitter.com/bonsaiparaiso"
            target="_blank"
          >
            <IconBrandTwitter size={24} />
          </ActionIcon>
          <ActionIcon
            size="lg"
            variant="subtle"
            component="a"
            href="https://facebook.com/bonsaiparaiso"
            target="_blank"
          >
            <IconBrandFacebook size={24} />
          </ActionIcon>
          <ActionIcon
            size="lg"
            variant="subtle"
            component="a"
            href="https://instagram.com/bonsaiparaiso"
            target="_blank"
          >
            <IconBrandInstagram size={24} />
          </ActionIcon>
          <ActionIcon
            size="lg"
            variant="subtle"
            component="a"
            href="mailto:support@bonsaiparaiso.com"
          >
            <IconMail size={24} />
          </ActionIcon>
        </Group>
      </Stack>
    </Container>
  );
}

export default Support;
