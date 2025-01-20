import { expect, test } from "vitest";

/**
 * @jest-environment jsdom
 *
 * Test suite for the ThemeSwitcher component.
 *
 * @fileoverview This file contains tests for the ThemeSwitcher component using Vitest.
 *
 * @requires vitest
 * @requires ./index.js
 * @requires ./theme_switcher.data.json
 */

import ThemeSwitcher from "./index.js";
import MockData from "./theme_switcher.data.json";

test("Theme Switcher component exists", () => {
  const ThemeSwitcherComponent = ThemeSwitcher({ data: MockData });
  expect(ThemeSwitcherComponent).toBeDefined();
});
