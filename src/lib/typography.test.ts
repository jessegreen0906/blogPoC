import { describe, expect, it } from "vitest";
import { typography } from "@/lib/typography";

describe("typography tokens", () => {
  it("uses the requested font families", () => {
    expect(typography.title).toBe("Cinzel");
    expect(typography.header).toBe("Montserrat");
    expect(typography.body).toBe("Libre Baskerville");
  });
});
