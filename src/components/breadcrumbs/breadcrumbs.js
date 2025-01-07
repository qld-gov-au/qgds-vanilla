/**
 * Breadcrumbs component logic attached to an init() function.
 * This logic is bundled and exported with the component's entry file (index.js) and ships with the component.
 * @namespace QLD
 */

const breadcrumb = {
  originalBreadCrumbUl: null,

  init() {
    if (this.getTheElements()) {
      const { breadCrumbsUl } = this.getTheElements();
      const breadCrumbsUlLis = breadCrumbsUl.querySelectorAll("li");

      if (breadCrumbsUlLis.length > 2 && breadCrumbsUlLis[0].offsetHeight > 0) {
        const overflowMenu = this.createOverFlow();
        let breadcrumbLisLength = breadCrumbsUlLis.length;
        let totalLisOffsetWidth = Array.from(breadCrumbsUlLis).reduce(
          (acc, li) => acc + li.offsetWidth,
          0,
        );

        if (breadcrumbLisLength > 5) {
          this.handleOverflow(
            breadCrumbsUlLis,
            overflowMenu,
            breadCrumbsUl,
            2,
            breadcrumbLisLength,
          );
        } else if (
          breadCrumbsUl.offsetHeight >
          breadCrumbsUlLis[0].offsetHeight * 1.9
        ) {
          this.handleOverflow(
            breadCrumbsUlLis,
            overflowMenu,
            breadCrumbsUl,
            2,
            breadcrumbLisLength,
          );
        } else if (
          parseFloat(breadCrumbsUl.style.maxWidth.replace(/[^\d.]/g, "")) <
          totalLisOffsetWidth
        ) {
          this.handleOverflow(
            breadCrumbsUlLis,
            overflowMenu,
            breadCrumbsUl,
            2,
            breadcrumbLisLength,
          );
        }

        this.truncateLastLi(breadCrumbsUlLis);
      }
    }
  },

  getTheElements(resized = false) {
    const bannerBreadCrumbsAll = document.querySelectorAll(
      "nav.qld__banner__breadcrumbs--desktop",
    );
    const bodyBreadCrumbsAll = document.querySelectorAll(
      "section.qld__body--breadcrumb nav.qld__breadcrumbs",
    );

    const bannerBreadCrumbArray = [
      ...bannerBreadCrumbsAll,
      ...bodyBreadCrumbsAll,
    ];
    const bannerBreadCrumb = bannerBreadCrumbArray.find(
      (breadcrumb) => breadcrumb.offsetWidth > 0,
    );

    if (bannerBreadCrumb) {
      const containerFluid = bannerBreadCrumb.closest(".container-fluid");
      const containerFluidStyle = window.getComputedStyle(containerFluid);
      const paddings =
        parseFloat(
          containerFluidStyle
            .getPropertyValue("padding-right")
            .replace(/[^\d.]/g, ""),
        ) +
        parseFloat(
          containerFluidStyle
            .getPropertyValue("padding-left")
            .replace(/[^\d.]/g, ""),
        );

      bannerBreadCrumb.style.maxWidth =
        containerFluid.offsetWidth - paddings + "px";

      if (!this.originalBreadCrumbUl) {
        this.originalBreadCrumbUl = bannerBreadCrumb
          .querySelector("ul.qld__link-list")
          .cloneNode(true);
      }

      if (resized) {
        bannerBreadCrumb.querySelector("ul.qld__link-list").innerHTML =
          this.originalBreadCrumbUl.innerHTML;
      }

      const breadCrumbsUl = bannerBreadCrumb.querySelector("ul.qld__link-list");
      breadCrumbsUl.style.maxWidth =
        containerFluid.offsetWidth - paddings + "px";

      return { bannerBreadCrumb, breadCrumbsUl };
    }
  },

  createOverFlow() {
    const overFlowWrapper = document.createElement("div");
    overFlowWrapper.className = "qld__overflow_menu_wrapper";

    const button = document.createElement("button");
    button.className =
      "qld__btn qld__btn--toggle qld__overflow_menu__btn qld__accordion--closed";
    button.setAttribute("href", "#");
    button.setAttribute("aria-controls", "overflow-menu--");
    button.setAttribute("aria-expanded", "false");

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.classList.add("qld__icon", "qld__icon--lg");
    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svg.setAttribute("viewBox", "0 0 448 512");
    svg.setAttribute("aria-hidden", "true");
    svg.setAttribute("focusable", "false");
    svg.setAttribute("width", "24");
    svg.setAttribute("height", "32");
    svg.setAttribute("role", "img");

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("fill", "currentColor");
    path.setAttribute(
      "d",
      "M352 256C352 238.3 366.3 224 384 224C401.7 224 416 238.3 416 256C416 273.7 401.7 288 384 288C366.3 288 352 273.7 352 256zM192 256C192 238.3 206.3 224 224 224C241.7 224 256 238.3 256 256C256 273.7 241.7 288 224 288C206.3 288 192 273.7 192 256zM96 256C96 273.7 81.67 288 64 288C46.33 288 32 273.7 32 256C32 238.3 46.33 224 64 224C81.67 224 96 238.3 96 256z",
    );

    svg.appendChild(path);
    button.appendChild(svg);
    overFlowWrapper.appendChild(button);

    const div = document.createElement("div");
    div.className = "qld__overflow_menu qld__accordion--closed";
    div.setAttribute("id", "overflow-menu--");

    const ul = document.createElement("ul");
    ul.className = "qld__overflow_menu_list";
    ul.setAttribute("aria-label", "qld__overflow_menu qld__link-columns");

    div.appendChild(ul);
    overFlowWrapper.appendChild(div);

    return overFlowWrapper;
  },

  insertOverFlowButton(overFlowWrapper, element) {
    const newElement = document.createElement("div");
    newElement.className = "qld__overflow_menu_list-item";

    const link = element.querySelector("a");
    link.classList.add("qld__overflow_menu_list-item-link");
    link.setAttribute("tabindex", "0");

    newElement.appendChild(link);
    overFlowWrapper.querySelector("ul").appendChild(newElement);

    return overFlowWrapper;
  },

  truncateLastLi(breadCrumbsUlLis) {
    breadCrumbsUlLis[breadCrumbsUlLis.length - 1].style.overflow = "hidden";
  },

  appendOverflow(breadCrumbsUlLis, overflowMenu, breadcrumbUL) {
    breadCrumbsUlLis[1].innerHTML = "";
    breadCrumbsUlLis[1].className = "qld__overflow_menu--breadcrumbs";
    breadCrumbsUlLis[1].appendChild(overflowMenu);
    breadCrumbsUlLis[1].style.display = "flex";
  },

  handleOverflow(
    breadCrumbsUlLis,
    overflowMenu,
    breadCrumbsUl,
    startIndex,
    breadcrumbLisLength,
  ) {
    this.insertOverFlowButton(overflowMenu, breadCrumbsUlLis[1]);
    breadCrumbsUlLis[1].style.display = "none";
    this.appendOverflow(breadCrumbsUlLis, overflowMenu, breadCrumbsUl);

    for (let i = startIndex; i < breadcrumbLisLength - 2; i++) {
      this.insertOverFlowButton(overflowMenu, breadCrumbsUlLis[i]);
      breadCrumbsUlLis[i].style.display = "none";
    }
  },
};

QLD.breadcrumb = breadcrumb;

window.addEventListener("DOMContentLoaded", function () {
  QLD.breadcrumb.init();
  QLD.accordion.init("overflow");
});

window.addEventListener("resize", function () {
  QLD.breadcrumb.getTheElements(true);
  QLD.breadcrumb.init();
  QLD.accordion.init("overflow");
});
