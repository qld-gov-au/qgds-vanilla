import { expect, test } from "vitest";

/**
 * @jest-environment jsdom
 *
 * @fileoverview This file contains tests for the Call to Action component using Vitest.
 *
 * @requires vitest
 * @requires ../index.js
 * @requires ../call-to-action.data.json
 */

import CallToAction from "../index.js";

const TestData = {
  id: "link1",
  url: "https://example.com",
  linktext: "Example Link 1",
  view_all: false,
};

// Initilise the component as a DOM Node
const CallToActionComponent = new CallToAction({ data: TestData }).node;

test("CallToAction", () => {
  const link = CallToActionComponent.querySelector("a");
  expect(link).toBeTruthy();

  // Test that the link has an href attribute
  expect(link.getAttribute("href")).toBe(TestData.url);

  // Test that the link has the correct class qld__cta-link
  expect(link.classList.contains("qld__cta-link")).toBe(true);

  // Test link content
  expect(link.textContent.trim()).toBe(TestData.linktext);
});
