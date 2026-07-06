import { Background, BackgroundVariant } from "reactflow";

export function BackgroundGrid() {
  return (
    <Background
      color="rgba(255, 255, 255, 0.08)"
      gap={28}
      size={1.4}
      variant={BackgroundVariant.Dots}
    />
  );
}
