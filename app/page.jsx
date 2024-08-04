"use client";

// Mantine
import {
  AppShell,
  BackgroundImage,
  Burger,
  Group,
  UnstyledButton,
  useMantineColorScheme,
  useComputedColorScheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import classes from "./page.module.css";
import { useState } from "react";

// Pages
import Homepage from "./pages/Homepage";
import Blogpage from "./pages/Blogpage";
import About from "./pages/About";
import Support from "./pages/Support";

// React icons
import { FaMoon, FaSun } from "react-icons/fa";

export default function MobileNavbar() {
  const [opened, { toggle }] = useDisclosure();

  const [currentPage, setCurrentPage] = useState("home");

  // Themes
  const { colorScheme, setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("dark");

  // Correct color scheme toggle implementation
  // computedColorScheme is always either 'light' or 'dark'
  const toggleColorScheme = () => {
    setColorScheme(computedColorScheme === "dark" ? "light" : "dark");
  };
  let mainContent;
  if (currentPage == "blog") {
    mainContent = <Blogpage />;
  } else if (currentPage == "about") {
    mainContent = <About />;
  } else if (currentPage == "support") {
    mainContent = <Support />;
  } else {
    mainContent = <Homepage />;
  }
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { desktop: true, mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Group justify="space-between" style={{ flex: 1 }}>
            <div>Bonsai Paraiso</div>
            <Group ml="xl" gap={0} visibleFrom="sm">
              <UnstyledButton
                onClick={() => {
                  setCurrentPage("home");
                }}
                className={classes.control}
              >
                Home
              </UnstyledButton>

              <UnstyledButton
                onClick={() => {
                  setCurrentPage("blog");
                }}
                className={classes.control}
              >
                Blog
              </UnstyledButton>

              <UnstyledButton
                onClick={() => {
                  setCurrentPage("about");
                }}
                className={classes.control}
              >
                About
              </UnstyledButton>
              <UnstyledButton
                onClick={() => {
                  setCurrentPage("support");
                }}
                className={classes.control}
              >
                Support
              </UnstyledButton>

              <UnstyledButton
                className={classes.control}
                onClick={toggleColorScheme}
              >
                {computedColorScheme === "dark" ? <FaSun /> : <FaMoon />}
              </UnstyledButton>
            </Group>
          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar py="md" px={4}>
        <UnstyledButton
          onClick={() => {
            setCurrentPage("home");
            toggle();
          }}
          className={classes.control}
        >
          Home
        </UnstyledButton>
        <UnstyledButton
          onClick={() => {
            setCurrentPage("blog");
            toggle();
          }}
          className={classes.control}
        >
          Blog
        </UnstyledButton>
        <UnstyledButton
          onClick={() => {
            setCurrentPage("about");
            toggle();
          }}
          className={classes.control}
        >
          About
        </UnstyledButton>
        <UnstyledButton
          onClick={() => {
            setCurrentPage("support");
            toggle();
          }}
          className={classes.control}
        >
          Support
        </UnstyledButton>
      </AppShell.Navbar>

      <AppShell.Main style={{ color: "black" }}>{mainContent}</AppShell.Main>

      <AppShell.Footer style={{ textAlign: "center" }}>
        Copyright Reserved @ 2024 - Bonsai Shop by JONEL
      </AppShell.Footer>
    </AppShell>
  );
}
