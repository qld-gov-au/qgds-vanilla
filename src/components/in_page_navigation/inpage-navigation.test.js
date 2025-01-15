/**
 * @jest-environment jsdom
 */

import { expect, test } from "vitest";

import InpageNavigation from "./index.js";
import MockData from "./inpage-navigation.data.json";

test("Inpage Navigation initiated", () => {
  const InpageNavigationComponent = new InpageNavigation({ data: MockData });
  expect(InpageNavigationComponent).toBeDefined();
});

//1. Test that the component renders the correct HTML structure:
test("Inpage Navigation renders the correct structure", () => {
  const InpageNavigationComponent = new InpageNavigation({ data: MockData });
  expect(InpageNavigationComponent.htmlstring).toContain("<nav");
  expect(InpageNavigationComponent.htmlstring).toContain("</nav>");
  expect(InpageNavigationComponent.htmlstring).toMatch(/<ul class=".*qld__link-list.*">/);
});
