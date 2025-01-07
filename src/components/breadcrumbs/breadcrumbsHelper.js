/**
 * Breadcrumbs Component Helper Class.
 * Encapsulates breadcrumb logic and state in a class for reusability and maintainability.
 */

export default class BreadcrumbsHelper {
  // Static constants for configuration
  static HEIGHT_RATIO = 1.9;
  static MIN_ITEMS = 5;
  static START_IDX = 2;
  static CLS = {
    WRAPPER: "qld__overflow_menu_wrapper",
    BTN: "qld__overflow_menu__btn",
    LIST: "qld__overflow_menu_list",
    LINK_LIST: "qld__link-list",
  };

  constructor() {
    this.originalUL = null; // Original breadcrumb list
  }

  init() {
    //Get breadcrumbs element
    let crumbsData = {};

    crumbsData.element = this.getBreadcrumbs();
    if (!crumbsData.element) return;

    crumbsData.ul = crumbsData.element.ul;
    crumbsData.items = crumbsData.ul.querySelectorAll("li") || false;
    crumbsData.menu = this.createMenu();
    crumbsData.itemCount = crumbsData.items?.length || 0;
    crumbsData.totalWidth = this.calcTotalWidth(crumbsData.items);

    console.log(`Crumbsdata is ${crumbsData}`);

    if (!crumbsData || !crumbsData.items || !crumbsData.itemCount) {
      return;
    }

    if (crumbsData.items.length <= 2 || crumbsData.items[0].offsetHeight <= 0) {
      return;
    }

    this.handleOverflow(crumbsData);

    this.truncateLast(items);
  }

  getBreadcrumbs(resized = false) {
    const crumbs = [
      ...document.querySelectorAll("nav.qld__banner__breadcrumbs--desktop"),
      ...document.querySelectorAll(
        "section.qld__body--breadcrumb nav.qld__breadcrumbs",
      ),
    ];

    const activeCrumb = crumbs.find((el) => el.offsetWidth > 0);
    if (!activeCrumb) return null;

    const container = activeCrumb.closest(".container-fluid");
    const padding = this.calcPadding(container);
    const maxW = container.offsetWidth - padding;

    activeCrumb.style.maxWidth = `${maxW}px`;

    if (!this.originalUl) {
      this.originalUl = activeCrumb
        .querySelector(`ul.${BreadcrumbsLogic.CLS.LINK_LIST}`)
        .cloneNode(true);
    }

    if (resized) {
      activeCrumb.querySelector(
        `ul.${BreadcrumbsLogic.CLS.LINK_LIST}`,
      ).innerHTML = this.originalUl.innerHTML;
    }

    const ul = activeCrumb.querySelector(
      `ul.${BreadcrumbsLogic.CLS.LINK_LIST}`,
    );
    ul.style.maxWidth = `${maxW}px`;

    return { activeCrumb, ul };
  }

  createMenu() {
    const wrapper = document.createElement("div");
    wrapper.className = BreadcrumbsLogic.CLS.WRAPPER;

    const btn = document.createElement("button");
    btn.className = BreadcrumbsLogic.CLS.BTN;
    btn.setAttribute("aria-controls", "menu");
    btn.setAttribute("aria-expanded", "false");

    const svg = this.createIcon();
    btn.appendChild(svg);

    const list = document.createElement("div");
    list.className = BreadcrumbsLogic.CLS.LIST;
    list.setAttribute("id", "menu");

    wrapper.appendChild(btn);
    wrapper.appendChild(list);

    return wrapper;
  }

  createIcon() {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.classList.add("qld__icon", "qld__icon--lg");
    svg.setAttribute("viewBox", "0 0 448 512");
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("fill", "currentColor");
    path.setAttribute(
      "d",
      "M352 256C352 238.3 366.3 224 384 224C401.7 224 416 238.3 416 256C416 273.7 401.7 288 384 288C366.3 288 352 273.7 352 256zM192 256C192 238.3 206.3 224 224 224C241.7 224 256 238.3 256 256C256 273.7 241.7 288 224 288C206.3 288 192 273.7 192 256zM96 256C96 273.7 81.67 288 64 288C46.33 288 32 273.7 32 256C32 238.3 46.33 224 64 224C81.67 224 96 238.3 96 256z",
    );
    svg.appendChild(path);
    return svg;
  }

  isOverflowByCount(count) {
    return count > BreadcrumbsLogic.MIN_ITEMS;
  }

  isOverflowByHeight(ul, items) {
    return (
      ul.offsetHeight > items[0].offsetHeight * BreadcrumbsLogic.HEIGHT_RATIO
    );
  }

  isOverflowByWidth(ul, totalWidth) {
    const maxW = parseFloat(ul.style.maxWidth.replace(/[^\d.]/g, ""));
    return maxW < totalWidth;
  }

  calcPadding(container) {
    const styles = window.getComputedStyle(container);
    return (
      parseFloat(styles.getPropertyValue("padding-left")) +
      parseFloat(styles.getPropertyValue("padding-right"))
    );
  }

  calcTotalWidth(items) {
    if (!items) return;
    return Array.from(items).reduce((acc, el) => acc + el.offsetWidth, 0);
  }

  handleOverflow({ items, menu, ul, itemCount }) {
    this.addMenuItem(menu, items[1]);
    items[1].style.display = "none";

    for (let i = START_IDX; i < itemCount - 2; i++) {
      this.addMenuItem(menu, items[i]);
      items[i].style.display = "none";
    }

    this.appendMenu(menu, items);
  }

  addMenuItem(menu, item) {
    const wrapper = document.createElement("div");
    wrapper.className = "qld__overflow_menu_list-item";

    const link = item.querySelector("a");
    if (link) {
      link.classList.add("qld__overflow_menu_list-item-link");
      wrapper.appendChild(link);
      menu.querySelector(`.${Breadcrumbs.CLS.LIST}`).appendChild(wrapper);
    }
  }

  appendMenu(menu, items) {
    const container = items[1];
    container.innerHTML = "";
    container.className = "qld__overflow_menu--breadcrumbs";
    container.appendChild(menu);
    container.style.display = "flex";
  }

  truncateLast(items) {
    const last = items[items.length - 1];
    if (last) last.style.overflow = "hidden";
  }
}
