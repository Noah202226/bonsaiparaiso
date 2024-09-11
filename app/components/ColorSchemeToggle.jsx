"use client";

import { useMantineColorScheme, Switch } from "@mantine/core";
import { IconSun, IconMoon } from "@tabler/icons-react";

export default function ColorSchemeToggle() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Switch
      checked={colorScheme === "dark"}
      onChange={() => toggleColorScheme()}
      size="lg"
      onLabel={<IconSun size="1rem" stroke={2.5} />}
      offLabel={<IconMoon size="1rem" stroke={2.5} />}
    />
  );
}
