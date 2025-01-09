import { expect, test } from "vitest";

/**
 * @jest-environment jsdom
 *
 * Test suite for the Example component.
 *
 * @fileoverview This file contains tests for the Example component using Vitest.
 *
 * @requires vitest
 * @requires ./index.js
 * @requires ./example.data.json
 */

import Example from "./index.js";
import MockData from "./example.data.json";

test("Example component exists", () => {
  const ExampleComponent = Example({ data: MockData });
  expect(ExampleComponent).toBeDefined();
});

test("Example component similate failure, missing class name", () => {
  const ExampleComponent = Example({ data: MockData });
  expect(ExampleComponent.htmlstring).not.toContain("qgds-example");
});
