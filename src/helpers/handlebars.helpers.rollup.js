/* global Handlebars */
/** THIS IS A GENERATED FILE **/

import appendIf from "./Handlebars/appendIf.js";
import arrayLength from "./Handlebars/arrayLength.js";
import arrayWith from "./Handlebars/arrayWith.js";
import capitaliseFirst from "./Handlebars/capitaliseFirst.js";
import charMax from "./Handlebars/charMax.js";
import checkIf from "./Handlebars/checkIf.js";
import columnWidth from "./Handlebars/columnWidth.js";
import contains from "./Handlebars/contains.js";
import createMap from "./Handlebars/createMap.js";
import dsMapFromID from "./Handlebars/dsMapFromID.js";
import dsMapFromProp from "./Handlebars/dsMapFromProp.js";
import eachByName from "./Handlebars/eachByName.js";
import eachDS from "./Handlebars/eachDS.js";
import eachFrom from "./Handlebars/eachFrom.js";
import eachUpTo from "./Handlebars/eachUpTo.js";
import eachWhen from "./Handlebars/eachWhen.js";
import formatDate from "./Handlebars/formatDate.js";
import generateDates from "./Handlebars/generateDates.js";
import getDistance from "./Handlebars/getDistance.js";
import getObject from "./Handlebars/getObject.js";
import getParamaterByName from "./Handlebars/getParamaterByName.js";
import getPossibleValues from "./Handlebars/getPossibleValues.js";
import getProp from "./Handlebars/getProp.js";
import getTags from "./Handlebars/getTags.js";
import getThumbnailAlt from "./Handlebars/getThumbnailAlt.js";
import getTitle from "./Handlebars/getTitle.js";
import ifAny from "./Handlebars/ifAny.js";
import ifArray from "./Handlebars/ifArray.js";
import ifCond from "./Handlebars/ifCond.js";
import ifEqualsOrChained from "./Handlebars/ifEqualsOrChained.js";
import ifProp from "./Handlebars/ifProp.js";
import if_eq from "./Handlebars/if_eq.js";
import inArray from "./Handlebars/inArray.js";
import isPage from "./Handlebars/isPage.js";
import itemAt from "./Handlebars/itemAt.js";
import jsonParse from "./Handlebars/jsonParse.js";
import jsonStringify from "./Handlebars/jsonStringify.js";
import listAZ from "./Handlebars/listAZ.js";
import listAZOptions from "./Handlebars/listAZOptions.js";
import listByClosest from "./Handlebars/listByClosest.js";
import listByClosestWithOffset from "./Handlebars/listByClosestWithOffset.js";
import math from "./Handlebars/math.js";
import newLineToBreak from "./Handlebars/newLineToBreak.js";
import nonBreakingSpaces from "./Handlebars/nonBreakingSpaces.js";
import objectFromSelect from "./Handlebars/objectFromSelect.js";
import partialReplace from "./Handlebars/partialReplace.js";
import printAccordion from "./Handlebars/printAccordion.js";
import renderSpecialChar from "./Handlebars/renderSpecialChar.js";
import replace from "./Handlebars/replace.js";
import replaceMany from "./Handlebars/replaceMany.js";
import sizeFormat from "./Handlebars/sizeFormat.js";
import split from "./Handlebars/split.js";
import toUpperCase from "./Handlebars/toUpperCase.js";
import urldecode from "./Handlebars/urldecode.js";
import urlencode from "./Handlebars/urlencode.js";
import withinObject from "./Handlebars/withinObject.js";


/**
 * Registers Handlebars Helpers Rollup
 * @param {Handlebars} handlebars Templating engine
 * @returns {void} Result of the helper operation
 */
export default function handlebarsHelpersRollup(handlebars) {
  handlebars.registerHelper("appendIf", appendIf);
  handlebars.registerHelper("arrayLength", arrayLength);
  handlebars.registerHelper("arrayWith", arrayWith);
  handlebars.registerHelper("capitaliseFirst", capitaliseFirst);
  handlebars.registerHelper("charMax", charMax);
  handlebars.registerHelper("checkIf", checkIf);
  handlebars.registerHelper("columnWidth", columnWidth);
  handlebars.registerHelper("contains", contains);
  handlebars.registerHelper("createMap", createMap);
  handlebars.registerHelper("dsMapFromID", dsMapFromID);
  handlebars.registerHelper("dsMapFromProp", dsMapFromProp);
  handlebars.registerHelper("eachByName", eachByName);
  handlebars.registerHelper("eachDS", eachDS);
  handlebars.registerHelper("eachFrom", eachFrom);
  handlebars.registerHelper("eachUpTo", eachUpTo);
  handlebars.registerHelper("eachWhen", eachWhen);
  handlebars.registerHelper("formatDate", formatDate);
  handlebars.registerHelper("generateDates", generateDates);
  handlebars.registerHelper("getDistance", getDistance);
  handlebars.registerHelper("getObject", getObject);
  handlebars.registerHelper("getParamaterByName", getParamaterByName);
  handlebars.registerHelper("getPossibleValues", getPossibleValues);
  handlebars.registerHelper("getProp", getProp);
  handlebars.registerHelper("getTags", getTags);
  handlebars.registerHelper("getThumbnailAlt", getThumbnailAlt);
  handlebars.registerHelper("getTitle", getTitle);
  handlebars.registerHelper("ifAny", ifAny);
  handlebars.registerHelper("ifArray", ifArray);
  handlebars.registerHelper("ifCond", ifCond);
  handlebars.registerHelper("ifEqualsOrChained", ifEqualsOrChained);
  handlebars.registerHelper("ifProp", ifProp);
  handlebars.registerHelper("if_eq", if_eq);
  handlebars.registerHelper("inArray", inArray);
  handlebars.registerHelper("isPage", isPage);
  handlebars.registerHelper("itemAt", itemAt);
  handlebars.registerHelper("jsonParse", jsonParse);
  handlebars.registerHelper("jsonStringify", jsonStringify);
  handlebars.registerHelper("listAZ", listAZ);
  handlebars.registerHelper("listAZOptions", listAZOptions);
  handlebars.registerHelper("listByClosest", listByClosest);
  handlebars.registerHelper("listByClosestWithOffset", listByClosestWithOffset);
  handlebars.registerHelper("math", math);
  handlebars.registerHelper("newLineToBreak", newLineToBreak);
  handlebars.registerHelper("nonBreakingSpaces", nonBreakingSpaces);
  handlebars.registerHelper("objectFromSelect", objectFromSelect);
  handlebars.registerHelper("partialReplace", partialReplace);
  handlebars.registerHelper("printAccordion", printAccordion);
  handlebars.registerHelper("renderSpecialChar", renderSpecialChar);
  handlebars.registerHelper("replace", replace);
  handlebars.registerHelper("replaceMany", replaceMany);
  handlebars.registerHelper("sizeFormat", sizeFormat);
  handlebars.registerHelper("split", split);
  handlebars.registerHelper("toUpperCase", toUpperCase);
  handlebars.registerHelper("urldecode", urldecode);
  handlebars.registerHelper("urlencode", urlencode);
  handlebars.registerHelper("withinObject", withinObject);

}

// For commonJS usage -- Does not run in 'Module' mode.
// In 'Module' mode, you need to init yourself, it will not self initialize.
if(typeof(Handlebars) !== 'undefined') {
  handlebarsHelpersRollup(Handlebars);
}
