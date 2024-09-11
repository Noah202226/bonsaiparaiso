"use client";

import { useState } from "react";
import {
  AppShell,
  Burger,
  Group,
  Button,
  Title,
  Container,
  Drawer,
  Stack,
  useMantineColorScheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconHome,
  IconArticle,
  IconInfoCircle,
  IconHelp,
  IconSun,
  IconMoon,
} from "@tabler/icons-react";
import ColorSchemeToggle from "./components/ColorSchemeToggle";

// Pages
import Homepage from "./pages/Homepage";
import Blogpage from "./pages/Blogpage";
import About from "./pages/About";
import Support from "./pages/Support";

export default function ResponsiveNavbar() {
  const [opened, { toggle, close }] = useDisclosure();
  const [currentPage, setCurrentPage] = useState(<Homepage />);
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  const navItems = [
    { label: "Home", icon: IconHome, page: <Homepage /> },
    { label: "Blog", icon: IconArticle, page: <Blogpage /> },
    { label: "About", icon: IconInfoCircle, page: <About /> },
    { label: "Support", icon: IconHelp, page: <Support /> },
  ];

  const NavButton = ({ item, isMobile = false }) => (
    <Button
      variant="subtle"
      leftSection={<item.icon size={18} />}
      onClick={() => {
        setCurrentPage(item.page);
        if (isMobile) close();
      }}
      fullWidth={isMobile}
    >
      {item.label}
    </Button>
  );

  return (
    <AppShell header={{ height: 60 }} padding="md">
      <AppShell.Header>
        <Container size="lg" h="100%">
          <Group h="100%" justify="space-between">
            <Group>
              <Burger
                opened={opened}
                onClick={toggle}
                hiddenFrom="sm"
                size="sm"
              />
              <Title order={3}>Bonsai Paraiso</Title>
            </Group>
            <Group gap="xs" visibleFrom="sm">
              {navItems.map((item) => (
                <NavButton key={item.label} item={item} />
              ))}
              <ColorSchemeToggle />
            </Group>
          </Group>
        </Container>
      </AppShell.Header>

      <Drawer
        opened={opened}
        onClose={close}
        size="100%"
        padding="md"
        hiddenFrom="sm"
      >
        <Stack>
          {navItems.map((item) => (
            <NavButton key={item.label} item={item} isMobile />
          ))}
          <ColorSchemeToggle />
        </Stack>
      </Drawer>

      <AppShell.Main>
        <Container size="lg">
          {/* Your main content here */}
          {currentPage}
        </Container>
      </AppShell.Main>
    </AppShell>
  );
}
