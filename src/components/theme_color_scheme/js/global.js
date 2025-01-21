export default function (QLD) {
  /* This code is for implementing a themeColorScheme component on a webpage. It does the following:

        1 .Selects all elements with the class qld__theme-color-scheme-container on the page and stores them in the tabComponents variable.
        2. Loops through each element in tabComponents.
        3. Within the loop, it selects all elements with the class qld__theme-color-scheme-button within the current tabComponent element and stores them in the tabHeadings variable.
        4. It adds the active class to the first element in tabHeadings and to the corresponding themeColorScheme content element.
        5. It loops through each element in tabHeadings.
        6. Within the loop, it attaches a click event listener to each element in tabHeadings.
        7. When a themeColorScheme heading element is clicked, the event listener removes the active class from all qld__theme-color-scheme-button and qld__theme-color-scheme-content elements within the current tabComponent,
        8. It then adds the active class to the clicked themeColorScheme heading element and its corresponding themeColorScheme content element.
        9. The last part of the code allows the users to navigate tabs with the keyboard which is an accessibilty requirement.

        This code will work for multiple themeColorScheme components on the same page.

    */

  ("use strict");

  /**
   * @module themeColorScheme
   */

  /**
   * Initialise all embedded facility maps on a particular page
   *
   * @memberof module:themeColorScheme
   */

  var themeColorScheme = {};

  themeColorScheme.init = function () {
    console.log("#themeColorScheme");
    var themeColorSchemeChangeButtons = document.querySelectorAll(".qld__theme_color_scheme button");
    themeColorSchemeChangeButtons.forEach((button) => {
      button.addEventListener("click", handleThemeColorSchemeButtonClick);
    });
  };

  /**
   * Close the mega menu if the user clicks outside of it while opened
   *
   * @memberof module:megaMenu
   * @instance
   * @private
   *
   * @param {Document.event} e
   */
  function handleThemeColorSchemeButtonClick(e) {
    // flip current value
    theme.value = theme.value === "light" ? "dark" : "light";
    console.log("theme.value", theme.value);
    setPreference();
  }

  const storageKey = "theme-preference";

  const getColorPreference = () => {
    if (localStorage.getItem(storageKey)) return localStorage.getItem(storageKey);
    else return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  };

  const setPreference = () => {
    localStorage.setItem(storageKey, theme.value);
    reflectPreference();
  };

  const reflectPreference = () => {
    document.firstElementChild.setAttribute("data-theme", theme.value);

    document.querySelector("#theme-toggle")?.setAttribute("aria-label", theme.value);

    const elem = document.querySelector("body");

    elem.classList.remove("light", "dark");

    elem.classList.add(theme.value);
  };

  const theme = {
    value: getColorPreference(),
  };

  // set early so no page flashes / CSS is made aware
  reflectPreference();

  window.onload = () => {
    // set on load so screen readers can see latest value on the button
    reflectPreference();

    // now this script can find and listen for clicks on the control
    document.querySelector("#theme-toggle").addEventListener("click", onClick);
  };

  // sync with system changes
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", ({ matches: isDark }) => {
    theme.value = isDark ? "dark" : "light";
    setPreference();
  });

  QLD.themeColorScheme = themeColorScheme;

  window.addEventListener("DOMContentLoaded", function () {
    QLD.themeColorScheme.init();
  });
}
