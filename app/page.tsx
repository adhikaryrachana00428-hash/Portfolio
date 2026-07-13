"use client";

import { ThemeProvider, useThemeOS } from "@/components/os/ThemeController";
import BootScreen from "@/components/os/BootScreen";
import ModeSelectionScreen from "@/components/os/ModeSelectionScreen";
import Desktop from "@/components/os/Desktop";

function MainContent() {
  const { bootState, setBootState, setThemeMode, setLightOn } = useThemeOS();

  if (bootState === "booting") {
    return <BootScreen onComplete={() => setBootState("selection")} />;
  }

  if (bootState === "selection") {
    return (
      <ModeSelectionScreen
        onSelect={(mode) => {
          setThemeMode(mode);
          setLightOn(mode === "light");
          setBootState("desktop");
        }}
      />
    );
  }

  return <Desktop />;
}

export default function Home() {
  return (
    <ThemeProvider>
      <MainContent />
    </ThemeProvider>
  );
}
