export const CIRCUIT_API_URL = "https://python.verifplay.com/api/circuit";

const CONVERTIBLE_EXTENSIONS = [".xlsx", ".xls", ".xml"];

export function isConvertibleCircuitFile(file: File): boolean {
  const lower = file.name.toLowerCase();
  return CONVERTIBLE_EXTENSIONS.some((ext) => lower.endsWith(ext));
}

export function isJsonArchitectureFile(file: File): boolean {
  const lower = file.name.toLowerCase();
  return lower.endsWith(".json") || file.type === "application/json";
}

interface CircuitApiError {
  error?: string;
  detail?: string;
}

export async function convertCircuitFile(file: File): Promise<string> {
  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch(CIRCUIT_API_URL, {
    method: "POST",
    body: formData,
  });

  let payload: CircuitApiError & Record<string, unknown>;
  try {
    payload = (await response.json()) as CircuitApiError & Record<string, unknown>;
  } catch {
    throw new Error("Circuit API returned an invalid response.");
  }

  if (!response.ok) {
    throw new Error(payload.error ?? payload.detail ?? `Circuit API error (${response.status}).`);
  }

  if (typeof payload.error === "string") {
    throw new Error(payload.error);
  }

  if (!payload.components || !payload.connections) {
    throw new Error("Circuit API response is missing components or connections.");
  }

  return JSON.stringify(payload, null, 2);
}
