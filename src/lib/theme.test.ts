import { describe, expect, it } from "vitest";
import { palette } from "@/lib/theme";

describe("brand palette", () => {
  it("uses the requested core colour tokens", () => {
    expect(palette.primary).toBe("#D9027D");
    expect(palette.background).toBe("#121212");
    expect(palette.neutral).toBe("#A8A8A8");
    expect(palette.text).toBe("#F9F7F2");
  });
});
