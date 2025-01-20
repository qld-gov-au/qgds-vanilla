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

  themeColorScheme.init = function () {
    console.log("#themeColorScheme");
    var themeColorSchemeChange = document.querySelector(".qld__theme_color_scheme button");
    themeColorSchemeChange.addEventListener("click", function () {
      console.log("clicked");
    });
  };

  QLD.themeColorScheme = themeColorScheme;

  window.addEventListener("DOMContentLoaded", function () {
    QLD.themeColorScheme.init();
  });
}
