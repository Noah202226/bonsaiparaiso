"use client";
import {
  AppShell,
  BackgroundImage,
  Burger,
  Group,
  UnstyledButton,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
// import { MantineLogo } from '@mantinex/mantine-logo';
import classes from "./page.module.css";
import { useEffect, useState } from "react";
import Homepage from "./pages/Homepage";
import Blogpage from "./pages/Blogpage";
import About from "./pages/About";
import Support from "./pages/Support";

export default function MobileNavbar() {
  const [opened, { toggle }] = useDisclosure();

  const [currentPage, setCurrentPage] = useState("home");

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
      <BackgroundImage
        src="https://img.freepik.com/premium-photo/photo-japanese-bonsai-garden-miniature-trees_611870-36660.jpg"
        radius="xl"
      >
        <AppShell.Header>
          <Group h="100%" px="md">
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="sm"
              size="sm"
            />
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

        <AppShell.Main style={{ color: "black" }}>
          Main Content: {mainContent}
        </AppShell.Main>

        <AppShell.Footer style={{ textAlign: "center" }}>
          Copyright Reserved @ 2024 - Bonsai Shop by JONEL
        </AppShell.Footer>
      </BackgroundImage>
    </AppShell>
  );
}
