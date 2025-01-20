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

  "use strict";

  /**
   * @module themeColorScheme
   */

  /**
   * Initialise all embedded facility maps on a particular page
   *
   * @memberof module:themeColorScheme
   */

  var themeColorScheme = {};
  const SCROLL_AMOUNT = 500;

  themeColorScheme.init = function () {
    // Get all themeColorScheme components on the page
    const tabComponents = document.querySelectorAll(".qld__theme-color-scheme-container");

    // Loop through each themeColorScheme component
    tabComponents.forEach((tabComponent) => {
      // Get all themeColorScheme heading elements within the themeColorScheme component
      const tabHeadings = tabComponent.querySelectorAll(".qld__theme-color-scheme-button");
      // Set themeColorScheme index and aria-selected attributes for the first themeColorScheme heading and its corresponding content element
      if (tabHeadings.length) {
        tabHeadings[0].setAttribute("tabindex", "0");
        tabHeadings[0].setAttribute("aria-selected", "true");
        const tabContentId = tabHeadings[0].getAttribute("data-theme-color-scheme");
        tabHeadings[0].classList.add("active");

        const tabContent = tabComponent.querySelector(
          `.qld__theme-color-scheme-content[data-theme-color-scheme="${tabContentId}"]`,
        );

        if (tabContent.length) {
          tabContent.setAttribute("tabindex", "0");
          tabContent.setAttribute("aria-hidden", "false");
          tabContent.classList.add("active");
        }
      }

      // Add the 'active' class to the first themeColorScheme heading and its corresponding content element

      // Loop through each themeColorScheme heading element
      tabHeadings.forEach((tabHeading) => {
        // Attach a click event listener to the themeColorScheme heading
        tabHeading.addEventListener("click", (event) => {
          // Remove the 'active' class from all themeColorScheme heading and content elements
          const tabHeadings = tabComponent.querySelectorAll(".qld__theme-color-scheme-button");
          tabHeadings.forEach((tabHeading) => {
            tabHeading.classList.remove("active");
            tabHeading.setAttribute("aria-selected", "false");
            tabHeading.setAttribute("tabindex", "-1");
          });
          const tabContents = tabComponent.querySelectorAll(".qld__theme-color-scheme-content");
          tabContents.forEach((tabContent) => {
            tabContent.classList.remove("active");
            tabContent.setAttribute("aria-hidden", "true");
            tabContent.setAttribute("tabindex", "-1");
          });
          // Add the 'active' class to the clicked themeColorScheme heading and its corresponding content element
          event.currentTarget.classList.add("active");
          event.currentTarget.setAttribute("aria-selected", "true");
          event.currentTarget.setAttribute("tabindex", "0");
          const tabContentId = event.currentTarget.getAttribute("data-theme-color-scheme");
          const tabContent = tabComponent.querySelector(
            `.qld__theme-color-scheme-content[data-theme-color-scheme="${tabContentId}"]`,
          );
          tabContent.classList.add("active");
          tabContent.setAttribute("aria-hidden", "false");
          tabContent.setAttribute("tabindex", "0");
        });
      });

      let currentTabIndex = 0;

      tabHeadings.forEach((tabHeading, index) => {
        tabHeading.addEventListener("keydown", (event) => {
          // If the key that was pressed was the "Enter" or "Space" key, treat it as if the themeColorScheme heading was clicked
          if (event.key === "Enter" || event.key === "Space") {
            event.preventDefault();
            event.currentTarget.click();
          }
          // If the key that was pressed was the left arrow key, switch to the previous themeColorScheme if not already on the first themeColorScheme
          if (event.key === "ArrowLeft") {
            if (currentTabIndex > 0) {
              event.preventDefault();
              const previousTabHeading = tabHeadings[index - 1];
              if (previousTabHeading) {
                currentTabIndex = index - 1;
                previousTabHeading.focus();
              }
            }
          }
          // If the key that was pressed was the right arrow key, switch to the next themeColorScheme if not already on the last themeColorScheme
          if (event.key === "ArrowRight") {
            if (currentTabIndex < tabHeadings.length - 1) {
              event.preventDefault();
              const nextTabHeading = tabHeadings[index + 1];
              if (nextTabHeading) {
                currentTabIndex = index + 1;
                nextTabHeading.focus();
              }
            }
          }
        });

        // Add a focus and blur event listener to the themeColorScheme heading
        tabHeading.addEventListener("focus", (event) => {
          // Add the 'focused' class on the corresponding themeColorScheme content element
          const tabContentId = event.currentTarget.getAttribute("data-theme-color-scheme");
          const tabContent = tabComponent.querySelector(
            `.qld__theme-color-scheme-content[data-theme-color-scheme="${tabContentId}"]`,
          );
          tabContent.classList.add("focused");
        });

        tabHeading.addEventListener("blur", (event) => {
          // Remove the 'focused' class on the corresponding themeColorScheme content element
          const tabContentId = event.currentTarget.getAttribute("data-theme-color-scheme");
          const tabContent = tabComponent.querySelector(
            `.qld__theme-color-scheme-content[data-theme-color-scheme="${tabContentId}"]`,
          );
          tabContent.classList.remove("focused");
        });
      });
    });
  };

  QLD.themeColorScheme = themeColorScheme;

  window.addEventListener("DOMContentLoaded", function () {
    QLD.themeColorScheme.init();
  });
}
