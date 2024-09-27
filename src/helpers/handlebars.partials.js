/* global Handlebars */
/** THIS IS A GENERATED FILE **/

import _global from "../components/_global/html/component.hbs?raw";
import ds_component from "../components/_global/html/ds_component.hbs?raw";
import _template from "../components/_template/html/component.hbs?raw";
import az_listing from "../components/a-z_listing/html/component.hbs?raw";
import abstract from "../components/abstract/html/component.hbs?raw";
import accordion from "../components/accordion/html/component.hbs?raw";
import banner from "../components/banner/html/component.hbs?raw";
import banner_advanced from "../components/banner_advanced/html/component.hbs?raw";
import banner_basic from "../components/banner_basic/html/component.hbs?raw";
import banner_intermediate from "../components/banner_intermediate/html/component.hbs?raw";
import basic_search from "../components/basic_search/html/component.hbs?raw";
import body from "../components/body/html/component.hbs?raw";
import breadcrumbs from "../components/breadcrumbs/html/component.hbs?raw";
import callout from "../components/callout/html/component.hbs?raw";
import card_feature from "../components/card_feature/html/component.hbs?raw";
import card_multi_action from "../components/card_multi_action/html/component.hbs?raw";
import card_no_action from "../components/card_no_action/html/component.hbs?raw";
import card_single_action from "../components/card_single_action/html/component.hbs?raw";
import code from "../components/code/html/component.hbs?raw";
import data_table from "../components/data_table/html/component.hbs?raw";
import date_picker from "../components/date_picker/html/component.hbs?raw";
import file_upload from "../components/file_upload/html/component.hbs?raw";
import footer from "../components/footer/html/component.hbs?raw";
import global_alert from "../components/global_alert/html/component.hbs?raw";
import header from "../components/header/html/component.hbs?raw";
import horizontal_rule from "../components/horizontal_rule/html/component.hbs?raw";
import in_page_navigation from "../components/in_page_navigation/html/component.hbs?raw";
import internal_navigation from "../components/internal_navigation/html/component.hbs?raw";
import left_hand_navigation from "../components/left_hand_navigation/html/component.hbs?raw";
import loading_spinner from "../components/loading_spinner/html/component.hbs?raw";
import main_navigation from "../components/main_navigation/html/component.hbs?raw";
import mega_main_navigation from "../components/mega_main_navigation/html/component.hbs?raw";
import multi_column from "../components/multi_column/html/component.hbs?raw";
import overflow_menu from "../components/overflow_menu/html/component.hbs?raw";
import page_alert from "../components/page_alert/html/component.hbs?raw";
import pagination from "../components/pagination/html/component.hbs?raw";
import promo_panel from "../components/promo_panel/html/component.hbs?raw";
import tab from "../components/tab/html/component.hbs?raw";
import updated_date from "../components/updated_date/html/component.hbs?raw";
import widgets from "../components/widgets/html/component.hbs?raw";


/**
 * Registers Handlebars Partials
 * @param {Handlebars} handlebars Templating engine
 * @returns {void} Result of the helper operation
 */
export default function handlebarsPartials(handlebars) {
  handlebars.registerPartial("_global", _global);
  handlebars.registerPartial("ds_component", ds_component);
  handlebars.registerPartial("_template", _template);
  handlebars.registerPartial("a-z_listing", az_listing);
  handlebars.registerPartial("abstract", abstract);
  handlebars.registerPartial("accordion", accordion);
  handlebars.registerPartial("banner", banner);
  handlebars.registerPartial("banner_advanced", banner_advanced);
  handlebars.registerPartial("banner_basic", banner_basic);
  handlebars.registerPartial("banner_intermediate", banner_intermediate);
  handlebars.registerPartial("basic_search", basic_search);
  handlebars.registerPartial("body", body);
  handlebars.registerPartial("breadcrumbs", breadcrumbs);
  handlebars.registerPartial("callout", callout);
  handlebars.registerPartial("card_feature", card_feature);
  handlebars.registerPartial("card_multi_action", card_multi_action);
  handlebars.registerPartial("card_no_action", card_no_action);
  handlebars.registerPartial("card_single_action", card_single_action);
  handlebars.registerPartial("code", code);
  handlebars.registerPartial("data_table", data_table);
  handlebars.registerPartial("date_picker", date_picker);
  handlebars.registerPartial("file_upload", file_upload);
  handlebars.registerPartial("footer", footer);
  handlebars.registerPartial("global_alert", global_alert);
  handlebars.registerPartial("header", header);
  handlebars.registerPartial("horizontal_rule", horizontal_rule);
  handlebars.registerPartial("in_page_navigation", in_page_navigation);
  handlebars.registerPartial("internal_navigation", internal_navigation);
  handlebars.registerPartial("left_hand_navigation", left_hand_navigation);
  handlebars.registerPartial("loading_spinner", loading_spinner);
  handlebars.registerPartial("main_navigation", main_navigation);
  handlebars.registerPartial("mega_main_navigation", mega_main_navigation);
  handlebars.registerPartial("multi_column", multi_column);
  handlebars.registerPartial("overflow_menu", overflow_menu);
  handlebars.registerPartial("page_alert", page_alert);
  handlebars.registerPartial("pagination", pagination);
  handlebars.registerPartial("promo_panel", promo_panel);
  handlebars.registerPartial("tab", tab);
  handlebars.registerPartial("updated_date", updated_date);
  handlebars.registerPartial("widgets", widgets);

}

// For commonJS usage -- Does not run in 'Module' mode.
// In 'Module' mode, you need to init yourself, it will not self initialize.
if(typeof(Handlebars) !== 'undefined') {
  handlebarsPartials(Handlebars);
}
