import type { ArchitectureModel } from "../../types";
import { preprocessArchitecture } from "./index";

self.onmessage = async (event: MessageEvent<{ model: ArchitectureModel }>) => {
  try {
    const result = await preprocessArchitecture(event.data.model);
    self.postMessage({ result });
  } catch (error) {
    self.postMessage({
      error: error instanceof Error ? error.message : "Preprocessing failed"
    });
  }
};

export {};
