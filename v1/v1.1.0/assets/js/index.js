"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined") return require.apply(this, arguments);
    throw Error('Dynamic require of "' + x + '" is not supported');
  });
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);

  // src/js/QGDSComponent.js
  var import_handlebars2 = __toESM(__require("handlebars"), 1);

  // src/helpers/Handlebars/appendIf.js
  function appendIf_default(head, tail, options) {
    if (options.hash.prepend === "true") {
      return !head ? "" : tail + head;
    }
    return !head ? "" : head + tail;
  }

  // src/helpers/Handlebars/arrayLength.js
  function arrayLength_default(json) {
    return Object.keys(json).length;
  }

  // src/helpers/Handlebars/arrayWith.js
  function arrayWith_default(array, key, value, options) {
    var childArray = [];
    for (var x = 0; x < array.length; x++) {
      if (array[x][key] == value) {
        childArray.push(array[x]);
      }
    }
    if (childArray.length > 0) {
      return options.fn(childArray);
    }
  }

  // src/helpers/Handlebars/capitaliseFirst.js
  function capitaliseFirst_default(str) {
    var splitStr = str.toLowerCase().split(" ");
    for (var i = 0; i < splitStr.length; i++) {
      splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    return splitStr.join(" ");
  }

  // src/helpers/Handlebars/charMax.js
  function charMax_default(str, limit) {
    if (str.length > limit) {
      return str.substring(0, 160) + "...";
    } else {
      return str;
    }
  }

  // src/helpers/Handlebars/checkIf.js
  function checkIf_default(v1, o1, v2, mainOperator, v3, o2, v4, options) {
    var operators = {
      "==": function(a, b) {
        return a == b;
      },
      "===": function(a, b) {
        return a === b;
      },
      "!=": function(a, b) {
        return a != b;
      },
      "!==": function(a, b) {
        return a !== b;
      },
      "<": function(a, b) {
        return a < b;
      },
      "<=": function(a, b) {
        return a <= b;
      },
      ">": function(a, b) {
        return a > b;
      },
      ">=": function(a, b) {
        return a >= b;
      },
      "&&": function(a, b) {
        return a && b;
      },
      "||": function(a, b) {
        return a || b;
      }
    };
    var a1 = operators[o1](v1, v2);
    var a2 = operators[o2](v3, v4);
    var isTrue = operators[mainOperator](a1, a2);
    return isTrue ? options.fn(this) : options.inverse(this);
  }

  // src/helpers/Handlebars/columnWidth.js
  function columnWidth_default(target_col, data) {
    var col_widths = [
      data.col_1_width.value,
      data.col_2_width.value,
      data.col_3_width.value
    ];
    var col_num = Number(data.col_num.value);
    target_col = Number(target_col);
    var width = 12;
    var width_override = Number(col_widths[target_col - 1]);
    if (width_override > 0) {
      width = width_override;
    } else {
      var width_acc = 0;
      var auto_cols = 0;
      for (var i = 0; i < col_num; i++) {
        var col_width_override = Number(col_widths[i]);
        if (col_width_override > 0) {
          width_acc += col_width_override;
        } else {
          auto_cols++;
        }
      }
      var width_available = 12 - width_acc;
      width = width_available / auto_cols;
    }
    return "col-xs-12 col-lg-" + width;
  }

  // src/helpers/Handlebars/contains.js
  function contains_default(string, contains, options) {
    if (string.indexOf(contains) !== -1) {
      return options.fn(this);
    }
    return options.inverse(this);
  }

  // src/helpers/Handlebars/createMap.js
  function createMap_default(array, key, prop) {
    Array.prototype.polyReduce = function(callbackFn, initialValue) {
      var accumulator = initialValue;
      for (var i = 0; i < this.length; i++) {
        if (accumulator !== void 0) {
          accumulator = callbackFn.call(void 0, accumulator, this[i], i, this);
        } else {
          accumulator = this[i];
        }
      }
      return accumulator;
    };
    return array.polyReduce(function(acc, item) {
      acc[item[key]] = item[prop];
      return acc;
    }, {});
  }

  // src/helpers/Handlebars/dsMapFromID.js
  function dsMapFromID_default(datastore, collection, key) {
    return datastore[collection].reduce(function(acc, item) {
      var id = item.id;
      var value = item[key];
      acc[id] = value;
      return acc;
    }, {});
  }

  // src/helpers/Handlebars/dsMapFromProp.js
  function dsMapFromProp_default(datastore, collection, property, key) {
    return datastore[collection].reduce(function(acc, item) {
      var prop = item[property];
      var value = item[key];
      acc[prop] = value;
      return acc;
    }, {});
  }

  // src/helpers/Handlebars/eachByName.js
  function eachByName_default(context, options) {
    var output = "";
    var sorted = context.sort(function(a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
    for (let item in sorted) {
      let i = Object.keys(sorted).indexOf(item);
      if (i >= 0) {
        output += options.fn(sorted[item]);
      }
    }
    ;
    return output;
  }

  // src/helpers/Handlebars/eachDS.js
  function eachDS_default(ds, context, options) {
    var ret = "";
    for (var i = 0, j = ds[context].length; i < j; i++) {
      ret = ret + options.fn(ds[context][i]);
    }
    return ret;
  }

  // src/helpers/Handlebars/eachFrom.js
  function eachFrom_default(context, count, options) {
    var ret = "";
    if (window.NodeList && !NodeList.prototype.forEach) {
      NodeList.prototype.forEach = Array.prototype.forEach;
    }
    context.slice(count).forEach(function(elem) {
      ret += options.fn(elem);
    });
    return ret;
  }

  // src/helpers/Handlebars/eachUpTo.js
  function eachUpTo_default(arr, max, options) {
    var item = "";
    var totalCount = max < arr.length ? max : arr.length;
    for (var i = 0; i < totalCount; i++) {
      arr[i].index = i;
      item = item + options.fn(arr[i]);
    }
    return item;
  }

  // src/helpers/Handlebars/eachWhen.js
  function eachWhen_default(list, key, value, options) {
    var result = "";
    var arr = [];
    var data = Handlebars.createFrame(options.data);
    var index = 0;
    for (var i in list) {
      if (list[i][key] === value) {
        arr.push({
          key: i,
          index,
          first: 0 === index,
          last: false,
          value: list[i]
        });
        index++;
      }
    }
    arr[arr.length - 1].last = true;
    for (var i = 0; i < arr.length; i++) {
      data.key = arr[i].key;
      data.index = arr[i].index;
      data.first = arr[i].first;
      data.last = arr[i].last;
      result = result + options.fn(arr[i].value, {
        data
      });
    }
    return result;
  }

  // src/helpers/Handlebars/embedSvg.js
  var import_handlebars = __toESM(__require("handlebars"), 1);
  function embedSvg_default(filePath, options) {
    if (typeof window === "undefined") {
      const fs = __require("fs");
      const path = __require("path");
      try {
        const fullPath = path.resolve(filePath);
        const svgContent = fs.readFileSync(fullPath, "utf8");
        return new import_handlebars.default.SafeString(svgContent);
      } catch (error) {
        console.error(`Error reading SVG file: ${filePath}`, error);
        throw error;
      }
    } else {
      const id = `svg-${Math.random().toString(36).substr(2, 9)}`;
      fetch(filePath).then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to fetch SVG: ${response.statusText}, ${filePath}`);
        }
        return response.text();
      }).then((svgContent) => {
        const element = document.getElementById(id);
        if (element) {
          element.innerHTML = svgContent;
        }
      }).catch((error) => {
        console.error(`Error fetching SVG file: ${filePath}`, error);
      });
      return new import_handlebars.default.SafeString(`<div id="${id}">Loading SVG...</div>`);
    }
  }

  // src/helpers/Handlebars/formatDate.js
  function formatDate_default(datetime, formatStr) {
    var date = new Date(datetime);
    console.log(date);
    if (isNaN(date.valueOf())) {
      return datetime;
    }
    var days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    var months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    var day = days[date.getDay()];
    var month = months[date.getMonth()];
    var formatMap = {
      s: String("0" + date.getSeconds()).slice(-2),
      i: String("0" + date.getMinutes()).slice(-2),
      h: String("0" + date.getHours()).slice(-2),
      A: date.getHours() >= 12 ? "PM" : "AM",
      a: date.getHours() >= 12 ? "am" : "am",
      d: ("0" + date.getDate()).slice(-2),
      // 01
      D: day.slice(0, 3),
      // Tue
      F: month,
      // June
      l: day,
      // Tuesday
      m: ("0" + (date.getMonth() + 1)).slice(-2),
      // 06
      M: month.slice(0, 3),
      // Jun
      n: String(date.getMonth() + 1),
      // 6
      j: String(date.getDate()),
      // 1
      y: String(date.getFullYear()).slice(-2),
      // 21
      Y: String(date.getFullYear())
      // 2021
    };
    var _formatStr = formatStr || "l j F Y";
    return _formatStr.replace(/[sihAadDFlmMnjyY]/g, function(match) {
      return formatMap[match] || match;
    });
  }

  // src/helpers/Handlebars/generateDates.js
  function generateDates_default(dates) {
    var dateArray = dates === "" || dates === null ? [] : dates.split(", ");
    var pastDates = [];
    var futureDates = [];
    var yesterday = /* @__PURE__ */ new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var html = "";
    for (let i = 0; i < dateArray.length; i++) {
      dateArray[i] = new Date(dateArray[i]);
    }
    dateArray.sort(function(a, b) {
      return a - b;
    });
    var pastDates = [];
    var futureDates = [];
    for (let i = 0; i < dateArray.length; i++) {
      if (dateArray[i] < yesterday) {
        pastDates.push(dateArray[i]);
      } else {
        futureDates.push(dateArray[i]);
      }
    }
    convertIntoRange(futureDates, "upcoming", "");
    convertIntoRange(pastDates, "past", 'hidden="hidden"');
    function convertIntoRange(dateArray2, type, hidden) {
      var dateRange = false;
      html += `<div role="tabpanel" id="qhealth__service_dates__tab-panel--${type}" aria-labelledby="qhealth__service_dates__tab-heading--${type}" class="qhealth__tab_panel mt-1" ${hidden}>`;
      if (dateArray2.length > 0) {
        for (let i = 0; i < dateArray2.length; i++) {
          var j = i + 1;
          var nextDate = new Date(dateArray2[i]);
          nextDate.setDate(dateArray2[i].getDate() + 1);
          if (dateArray2.length > j) {
            if (dateArray2[j] - nextDate == 0) {
              if (!dateRange) {
                dateRange = true;
                html += `<div>${("0" + dateArray2[i].getDate()).slice(-2)} ${month[dateArray2[i].getMonth()]} - `;
              }
            } else if (dateRange) {
              dateRange = false;
              html += `${("0" + dateArray2[i].getDate()).slice(-2)} ${month[dateArray2[i].getMonth()]} ${dateArray2[i].getFullYear()}</div>`;
            } else {
              dateRange = false;
              html += `<div>${("0" + dateArray2[i].getDate()).slice(-2)} ${month[dateArray2[i].getMonth()]} ${dateArray2[i].getFullYear()}</div>`;
            }
          } else {
            if (dateRange) {
              dateRange = false;
              html += `${("0" + dateArray2[i].getDate()).slice(-2)} ${month[dateArray2[i].getMonth()]} ${dateArray2[i].getFullYear()}</div>`;
            } else {
              dateRange = false;
              html += `<div>${("0" + dateArray2[i].getDate()).slice(-2)} ${month[dateArray2[i].getMonth()]} ${dateArray2[i].getFullYear()}</div>`;
            }
          }
        }
      } else {
        if (type == "upcoming") {
          html += "<div>No upcoming dates are scheduled at this stage. Please check again later.</div>";
        } else {
          html += "<div>There are no past dates for this service.</div>";
        }
      }
      html += "</div>";
    }
    return html;
  }

  // src/helpers/Handlebars/getDistance.js
  function getDistance_default(lat, lng, userLat, userLong) {
    var distanceAway = "";
    function getDistance(lat1, lon1, lat2, lon2) {
      var p = 0.017453292519943295;
      var c = Math.cos;
      var a = 0.5 - c((lat2 - lat1) * p) / 2 + c(lat1 * p) * c(lat2 * p) * (1 - c((lon2 - lon1) * p)) / 2;
      var result = 12742 * Math.asin(Math.sqrt(a));
      if (result >= 10) {
        return round(result);
      } else {
        return round(result, 1);
      }
    }
    function round(value, precision) {
      var multiplier = Math.pow(10, precision || 0);
      return Math.round(value * multiplier) / multiplier;
    }
    distanceAway = getDistance(lat, lng, userLat, userLong);
    return distanceAway;
  }

  // src/helpers/Handlebars/getObject.js
  function getObject_default(obj, key, prop) {
    return obj[key][prop];
  }

  // src/helpers/Handlebars/getParamaterByName.js
  function getParamaterByName_default(name, req) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regexS = "[\\?&]" + name + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(req.originalUrl);
    if (results == null) {
      return "";
    } else {
      return decodeURIComponent(results[1].replace(/\+/g, " "));
    }
  }

  // src/helpers/Handlebars/getPossibleValues.js
  function getPossibleValues_default(obj, key) {
    var possibleValues = [];
    for (var i in obj) {
      if (obj[i].hasOwnProperty(key)) {
        var value = obj[i][key];
        if (possibleValues.indexOf(value) === -1) {
          possibleValues.push(value);
        }
      }
    }
    return possibleValues;
  }

  // src/helpers/Handlebars/getProp.js
  function getProp_default(obj, prop) {
    return obj[prop];
  }

  // src/helpers/Handlebars/getTags.js
  function getTags_default(selectValues, tags, options) {
    let output = "";
    let splitSelectValues = [];
    if (tags) {
      if (selectValues) {
        splitSelectValues = selectValues.replace(/_/g, " ").split("; ");
      }
      for (let selectValue in splitSelectValues) {
        if (splitSelectValues.hasOwnProperty(selectValue)) {
          var key = splitSelectValues[selectValue].replace(/ /g, "_");
          output = output + options.fn({ key, value: tags[key] });
        }
      }
    }
    return output;
  }

  // src/helpers/Handlebars/getThumbnailAlt.js
  function getThumbnailAlt_default(thumbnails, index, shortName) {
    var ariaLabel = 'aria-label="Image for ';
    if (thumbnails[index].asset_thumbnail_alt.length) {
      ariaLabel += thumbnails[index].asset_thumbnail_alt + '"';
    } else {
      ariaLabel += shortName + '"';
    }
    return ariaLabel;
  }

  // src/helpers/Handlebars/getTitle.js
  function getTitle_default(obj, name) {
    var index = name.replace(/\D/g, "");
    return obj["title_" + index].value;
  }

  // src/helpers/Handlebars/ifAny.js
  function ifAny_default() {
    var options = arguments[arguments.length - 1];
    for (var i = 0; i < arguments.length - 1; i++) {
      if (arguments[i]) {
        return options.fn(this);
      }
    }
    return options.inverse(this);
  }

  // src/helpers/Handlebars/ifArray.js
  function ifArray_default(input, options) {
    return Array.isArray(input) ? options.fn(this) : options.inverse(this);
  }

  // src/helpers/Handlebars/ifCond.js
  function ifCond_default(v1, operator, v2, options) {
    var optionsInternal = options;
    if (!optionsInternal || typeof optionsInternal.inverse !== "function") {
      optionsInternal = {};
      optionsInternal.inverse = function() {
        return "";
      };
    }
    switch (operator) {
      case "==":
        return v1 == v2 ? optionsInternal.fn(this) : optionsInternal.inverse(this);
      case "===":
        return v1 === v2 ? optionsInternal.fn(this) : optionsInternal.inverse(this);
      case "!=":
        return v1 != v2 ? optionsInternal.fn(this) : optionsInternal.inverse(this);
      case "!==":
        return v1 !== v2 ? optionsInternal.fn(this) : optionsInternal.inverse(this);
      case "<":
        return v1 < v2 ? optionsInternal.fn(this) : optionsInternal.inverse(this);
      case "<=":
        return v1 <= v2 ? optionsInternal.fn(this) : optionsInternal.inverse(this);
      case ">":
        return v1 > v2 ? optionsInternal.fn(this) : optionsInternal.inverse(this);
      case ">=":
        return v1 >= v2 ? optionsInternal.fn(this) : optionsInternal.inverse(this);
      case "&&":
        return v1 && v2 ? optionsInternal.fn(this) : optionsInternal.inverse(this);
      case "||":
        return v1 || v2 ? optionsInternal.fn(this) : optionsInternal.inverse(this);
      case "contains":
        if (typeof v1 == "string" && typeof v2 == "string") {
          return v1.toLowerCase().indexOf(v2.toLowerCase()) >= 0 ? optionsInternal.fn(this) : optionsInternal.inverse(this);
        } else return optionsInternal.inverse(this);
      default:
        return optionsInternal.inverse(this);
    }
  }

  // src/helpers/Handlebars/ifEqualsOrChained.js
  function ifEqualsOrChained_default() {
    var options = arguments[arguments.length - 1];
    var valueToTest = arguments[0];
    for (var i = 1; i < arguments.length - 1; i++) {
      if (valueToTest === arguments[i]) {
        return options.fn(this);
      }
    }
    return options.inverse(this);
  }

  // src/helpers/Handlebars/ifProp.js
  function ifProp_default(obj, key, prop, options) {
    return obj[key][prop] ? options.fn(this) : options.inverse(this);
  }

  // src/helpers/Handlebars/if_eq.js
  function if_eq_default() {
    const args = Array.prototype.slice.call(arguments, 0, -1);
    const options = arguments[arguments.length - 1];
    const allEqual = args.every(function(expression) {
      return args[0] === expression;
    });
    return allEqual ? options.fn(this) : options.inverse(this);
  }

  // src/helpers/Handlebars/inArray.js
  function inArray_default(array, key, value, options) {
    for (var x = 0; x < array.length; x++) {
      if (array[x][key] === value) {
        return options.fn(this);
      }
    }
    return options.inverse(this);
  }

  // src/helpers/Handlebars/isPage.js
  function isPage_default(pageType, options) {
    if (pageType == "page_standard" || pageType == "page_redirect" || pageType == "page_custom_form" || pageType == "page_decision_tree") {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  }

  // src/helpers/Handlebars/itemAt.js
  function itemAt_default(array, index) {
    var idx = parseInt(index, 10);
    if (Array.isArray(array) && !isNaN(idx)) {
      if (idx < 0) {
        return array[array.length + idx];
      }
      if (idx < array.length) {
        return array[idx];
      }
    }
  }

  // src/helpers/Handlebars/jsonParse.js
  function jsonParse_default(string) {
    try {
      return JSON.parse(string);
    } catch (error) {
      return {};
    }
  }

  // src/helpers/Handlebars/jsonStringify.js
  function jsonStringify_default(string) {
    return JSON.stringify(string);
  }

  // src/helpers/Handlebars/listAZ.js
  function listAZ_default(items2, url, options) {
    var html = '<li class="qld__a-z_listing__options__item">';
    var services = [];
    var letters = [];
    for (var i = 0; i < items2.length; i++) {
      var service = items2[i].name;
      var serviceID = items2[i].assetid;
      if (service == "") {
        continue;
      }
      var firstLetter = service.substring(0, 1);
      var arrayWithFirstLetter = services[firstLetter];
      if (arrayWithFirstLetter == null) {
        services[firstLetter] = [];
        letters.push(firstLetter);
      }
      services[firstLetter].push({ id: serviceID, name: service });
    }
    services = services.sort(function(a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
    console.log(services);
    letters = letters.sort(function(a, b) {
      if (a < b) {
        return -1;
      }
      if (a > b) {
        return 1;
      }
      return 0;
    });
    url = url ? url : "";
    for (var i = 0; i < letters.length; i++) {
      services[letters[i]] = services[letters[i]].sort(function(a, b) {
        let lowerCaseA = a.name.toLowerCase();
        let lowerCaseB = b.name.toLowerCase();
        if (lowerCaseA < lowerCaseB) {
          return -1;
        }
        if (lowerCaseA > lowerCaseB) {
          return 1;
        }
        return 0;
      });
      html += `<h3 class="qld__a-z_listing__list__item__header"><span id="${letters[i]}">${letters[i]}</span></h3>`;
      html += '<ul class="qld__a-z_listing__list__item__services">';
      for (var k = 0; k < services[letters[i]].length; k++) {
        html += `<li class="qld__a-z_listing__list__item__services__item">
                        <a class="qld__a-z_listing__list__item__services__item__link" href="${services[letters[i]][k].id}">
                            <span>${services[letters[i]][k].name}</span>
                        </a>
                    </li>`;
      }
      html += "</ul>";
    }
    html += "</li>";
    return html;
  }

  // src/helpers/Handlebars/listAZOptions.js
  function listAZOptions_default(items2, options) {
    var html = "";
    var services = [];
    var letters = [];
    for (var i = 0; i < items2.length; i++) {
      var service = items2[i].name;
      if (service == "") {
        continue;
      }
      var firstLetter = service.substring(0, 1);
      var arrayWithFirstLetter = services[firstLetter];
      if (arrayWithFirstLetter == null) {
        services[firstLetter] = [];
        letters.push(firstLetter);
      }
    }
    letters = letters.sort(function(a, b) {
      if (a < b) {
        return -1;
      }
      if (a > b) {
        return 1;
      }
      return 0;
    });
    for (var i = 0; i < letters.length; i++) {
      html += '<li class="qld__a-z_listing__options__item"><a class="qld__a-z_listing__options__item__link" href="#' + letters[i] + '">' + letters[i] + "</a></li>";
    }
    return html;
  }

  // src/helpers/Handlebars/listByClosest.js
  function listByClosest_default(arr, max, userLat, userLong, options) {
    var item = "";
    var totalCount = max < arr.length ? max : arr.length;
    Array.prototype.polyMap = function(callbackFn) {
      var arr2 = [];
      for (var i2 = 0; i2 < this.length; i2++) {
        arr2.push(callbackFn(this[i2], i2, this));
      }
      return arr2;
    };
    arr = arr.polyMap(function(item2) {
      item2.distanceAway = getDistance(item2.latitude, item2.longitude, userLat, userLong);
      return item2;
    });
    arr.sort(function(a, b) {
      return a.distanceAway - b.distanceAway;
    });
    for (var i = 0; i < totalCount; i++) {
      item = item + options.fn(arr[i]);
    }
    return item;
    function getDistance(lat1, lon1, lat2, lon2) {
      var p = 0.017453292519943295;
      var c = Math.cos;
      var a = 0.5 - c((lat2 - lat1) * p) / 2 + c(lat1 * p) * c(lat2 * p) * (1 - c((lon2 - lon1) * p)) / 2;
      var result = 12742 * Math.asin(Math.sqrt(a));
      if (result >= 10) {
        return round(result);
      } else {
        return round(result, 1);
      }
    }
    function round(value, precision) {
      var multiplier = Math.pow(10, precision || 0);
      return Math.round(value * multiplier) / multiplier;
    }
  }

  // src/helpers/Handlebars/listByClosestWithOffset.js
  function listByClosestWithOffset_default(arr, max, offset, userLat, userLong, options) {
    var item = "";
    var totalCount = max < arr.length ? max : arr.length;
    if (offset === null) {
      offset = 0;
    }
    Array.prototype.polyMap = function(callbackFn) {
      var arr2 = [];
      for (var i2 = 0; i2 < this.length; i2++) {
        arr2.push(callbackFn(this[i2], i2, this));
      }
      return arr2;
    };
    arr = arr.polyMap(function(item2) {
      item2.distanceAway = getDistance(item2.latitude, item2.longitude, userLat, userLong);
      return item2;
    });
    arr.sort(function(a, b) {
      return a.distanceAway - b.distanceAway;
    });
    for (var i = 0 + offset; i < totalCount; i++) {
      item = item + options.fn(arr[i]);
    }
    return item;
    function getDistance(lat1, lon1, lat2, lon2) {
      var p = 0.017453292519943295;
      var c = Math.cos;
      var a = 0.5 - c((lat2 - lat1) * p) / 2 + c(lat1 * p) * c(lat2 * p) * (1 - c((lon2 - lon1) * p)) / 2;
      var result = 12742 * Math.asin(Math.sqrt(a));
      if (result >= 10) {
        return round(result);
      } else {
        return round(result, 1);
      }
    }
    function round(value, precision) {
      var multiplier = Math.pow(10, precision || 0);
      return Math.round(value * multiplier) / multiplier;
    }
  }

  // src/helpers/Handlebars/math.js
  function math_default(lvalue, operator, rvalue) {
    lvalue = parseFloat(lvalue);
    rvalue = parseFloat(rvalue);
    return {
      "+": lvalue + rvalue,
      "-": lvalue - rvalue,
      "*": lvalue * rvalue,
      "/": lvalue / rvalue,
      "%": lvalue % rvalue
    }[operator];
  }

  // src/helpers/Handlebars/newLineToBreak.js
  function newLineToBreak_default(str) {
    if (typeof str == "string") {
      return str.replace(/\n/g, "<br />");
    } else return str;
  }

  // src/helpers/Handlebars/nonBreakingSpaces.js
  function nonBreakingSpaces_default(str) {
    if (typeof str == "string") {
      return str.replace(/ /g, "&nbsp;");
    } else return "";
  }

  // src/helpers/Handlebars/objectFromSelect.js
  function objectFromSelect_default(selectValues, options) {
    let output = "";
    let outputArr = [];
    let splitSelectValues = [];
    if (selectValues) {
      splitSelectValues = selectValues.replace(/_/g, " ").split("; ");
    }
    for (let selectValue in splitSelectValues) {
      if (splitSelectValues.hasOwnProperty(selectValue)) {
        output = output + options.fn({ key: splitSelectValues[selectValue].replace(/ /g, "_"), value: splitSelectValues[selectValue].charAt(0).toUpperCase() + splitSelectValues[selectValue].slice(1) });
      }
    }
    return output;
  }

  // src/helpers/Handlebars/partialReplace.js
  function partialReplace_default(str, search, replacement) {
    var cleanReplacement = " " + replacement + " ";
    if (typeof str == "string") {
      console.log(str);
      var regex = new RegExp(search, "g");
      return str.replace(regex, cleanReplacement);
    } else return "";
  }

  // src/helpers/Handlebars/printAccordion.js
  function printAccordion_default(metadata, options) {
    var accordions = "";
    var accNum = Number(metadata.accordion_num.value);
    var accordion = { "title": "", "content": "", "fieldid": "" };
    for (var property in metadata) {
      var accIndex = property.replace("title_", "").replace("content_", "");
      accIndex = Number(accIndex);
      if (property.indexOf("title_") > -1) {
        if (accNum >= accIndex) {
          accordion.title = metadata[property].value;
        }
      } else if (property.indexOf("content_") > -1) {
        if (accNum >= accIndex) {
          accordion.content = metadata[property].value;
          accordion.fieldid = metadata[property].fieldid;
          accordions = accordions + options.fn(accordion);
        }
      }
    }
    return accordions;
  }

  // src/helpers/Handlebars/renderSpecialChar.js
  function renderSpecialChar_default(string) {
    var map = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#039;": "'"
    };
    return string.replace(/(&amp;|&lt;|&gt;|&quot;|&#039;)/g, function(m) {
      return map[m];
    });
  }

  // src/helpers/Handlebars/replace.js
  function replace_default(str, search, replacement) {
    if (typeof str == "string") {
      console.log(str);
      var regex = new RegExp(search, "g");
      return str.replace(regex, replacement);
    } else return "";
  }

  // src/helpers/Handlebars/replaceMany.js
  function replaceMany_default(find, replace, options) {
    var string = options.fn(this);
    var regex = new RegExp(find, "g");
    return string.replace(regex, replace);
  }

  // src/helpers/Handlebars/sizeFormat.js
  function sizeFormat_default(bytes, decimals) {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  }

  // src/helpers/Handlebars/split.js
  function split_default(string, separator) {
    if (typeof string == "string") {
      return string.split(separator);
    } else return "";
  }

  // src/helpers/Handlebars/toUpperCase.js
  function toUpperCase_default(string) {
    if (string) {
      return string.toUpperCase();
    } else {
      return "";
    }
  }

  // src/helpers/Handlebars/urldecode.js
  function urldecode_default(url) {
    return decodeURIComponent(url || "");
  }

  // src/helpers/Handlebars/urlencode.js
  function urlencode_default(url) {
    return encodeURIComponent(url || "");
  }

  // src/helpers/Handlebars/withinObject.js
  function withinObject_default(obj, key, options) {
    var within = Object.keys(obj).some(function() {
      return obj[key] !== "";
    });
    if (within) {
      return options.fn(this);
    }
    return options.inverse(this);
  }

  // src/helpers/handlebars.helpers.rollup.js
  function handlebarsHelpersRollup(handlebars) {
    handlebars.registerHelper("appendIf", appendIf_default);
    handlebars.registerHelper("arrayLength", arrayLength_default);
    handlebars.registerHelper("arrayWith", arrayWith_default);
    handlebars.registerHelper("capitaliseFirst", capitaliseFirst_default);
    handlebars.registerHelper("charMax", charMax_default);
    handlebars.registerHelper("checkIf", checkIf_default);
    handlebars.registerHelper("columnWidth", columnWidth_default);
    handlebars.registerHelper("contains", contains_default);
    handlebars.registerHelper("createMap", createMap_default);
    handlebars.registerHelper("dsMapFromID", dsMapFromID_default);
    handlebars.registerHelper("dsMapFromProp", dsMapFromProp_default);
    handlebars.registerHelper("eachByName", eachByName_default);
    handlebars.registerHelper("eachDS", eachDS_default);
    handlebars.registerHelper("eachFrom", eachFrom_default);
    handlebars.registerHelper("eachUpTo", eachUpTo_default);
    handlebars.registerHelper("eachWhen", eachWhen_default);
    handlebars.registerHelper("embedSvg", embedSvg_default);
    handlebars.registerHelper("formatDate", formatDate_default);
    handlebars.registerHelper("generateDates", generateDates_default);
    handlebars.registerHelper("getDistance", getDistance_default);
    handlebars.registerHelper("getObject", getObject_default);
    handlebars.registerHelper("getParamaterByName", getParamaterByName_default);
    handlebars.registerHelper("getPossibleValues", getPossibleValues_default);
    handlebars.registerHelper("getProp", getProp_default);
    handlebars.registerHelper("getTags", getTags_default);
    handlebars.registerHelper("getThumbnailAlt", getThumbnailAlt_default);
    handlebars.registerHelper("getTitle", getTitle_default);
    handlebars.registerHelper("ifAny", ifAny_default);
    handlebars.registerHelper("ifArray", ifArray_default);
    handlebars.registerHelper("ifCond", ifCond_default);
    handlebars.registerHelper("ifEqualsOrChained", ifEqualsOrChained_default);
    handlebars.registerHelper("ifProp", ifProp_default);
    handlebars.registerHelper("if_eq", if_eq_default);
    handlebars.registerHelper("inArray", inArray_default);
    handlebars.registerHelper("isPage", isPage_default);
    handlebars.registerHelper("itemAt", itemAt_default);
    handlebars.registerHelper("jsonParse", jsonParse_default);
    handlebars.registerHelper("jsonStringify", jsonStringify_default);
    handlebars.registerHelper("listAZ", listAZ_default);
    handlebars.registerHelper("listAZOptions", listAZOptions_default);
    handlebars.registerHelper("listByClosest", listByClosest_default);
    handlebars.registerHelper("listByClosestWithOffset", listByClosestWithOffset_default);
    handlebars.registerHelper("math", math_default);
    handlebars.registerHelper("newLineToBreak", newLineToBreak_default);
    handlebars.registerHelper("nonBreakingSpaces", nonBreakingSpaces_default);
    handlebars.registerHelper("objectFromSelect", objectFromSelect_default);
    handlebars.registerHelper("partialReplace", partialReplace_default);
    handlebars.registerHelper("printAccordion", printAccordion_default);
    handlebars.registerHelper("renderSpecialChar", renderSpecialChar_default);
    handlebars.registerHelper("replace", replace_default);
    handlebars.registerHelper("replaceMany", replaceMany_default);
    handlebars.registerHelper("sizeFormat", sizeFormat_default);
    handlebars.registerHelper("split", split_default);
    handlebars.registerHelper("toUpperCase", toUpperCase_default);
    handlebars.registerHelper("urldecode", urldecode_default);
    handlebars.registerHelper("urlencode", urlencode_default);
    handlebars.registerHelper("withinObject", withinObject_default);
  }
  if (typeof Handlebars !== "undefined") {
    handlebarsHelpersRollup(Handlebars);
  }

  // src/js/QGDSComponent.js
  handlebarsHelpersRollup(import_handlebars2.default);
  var Component = class {
    /**
     * Creates a new instance of the Component class.
     * @param {string} componentName - Name of the component.
     * @param {object} props - Component properties.
     * @param {string} props.template - Handlebars template for rendering.
     * @param {object} props.data - Data for populating the template.
     * @param {object} [props.meta] - Optional metadata for the component.
     */
    constructor(componentName, props) {
      if (!componentName || typeof componentName !== "string") {
        throw new Error("Component name must be a non-empty string.");
      }
      if (!props || typeof props !== "object") {
        throw new Error("Props must be a valid object.");
      }
      if (!props.template || typeof props.template !== "string") {
        throw new Error("A valid template string is required.");
      }
      if (!props.data || typeof props.data !== "object") {
        throw new Error("A valid data object is required.");
      }
      try {
        this.componentName = componentName;
        this.template = props.template;
        this.meta = props.meta || {};
        this.htmlstring = "";
        this.node = null;
        this.validateData(props.data);
        this.setupHTML(props.data);
        this.setupNode();
      } catch (error) {
        throw new Error(`${this.componentName} error: ${error.message}`);
      }
    }
    /**
     * @description Compiles the Handlebars template with the supplied data.
     * @param {object} data - Data object to populate the template
     */
    setupHTML(data) {
      try {
        this.htmlstring = import_handlebars2.default.compile(this.template)(data);
      } catch (error) {
        let errorString = `${this.componentName} error: Template compilation failed. ${error.message}`;
        console.error(errorString);
        throw new Error(errorString);
      }
    }
    /**
     * @description Creates a DOM node from the HTML string.
     */
    setupNode() {
      try {
        const container = document.createElement("template");
        container.innerHTML = this.htmlstring;
        this.node = container.content.cloneNode(true);
      } catch (error) {
        throw new Error(
          `${this.componentName} error: Failed to create a DOM node. ${error.message}`
        );
      }
    }
    /**
     * @description Validates the data object to ensure it has some basic required fields.
     * @param {object} data - Data object to validate.
     * @param {array} requiredfields - Array of required fields.
     * @throws {Error} Throws an error if the data object is missing or invalid.
     */
    validateData(data, requiredfields = []) {
      if (!data || Object.keys(data).length === 0) {
        throw new Error(
          `${this.componentName} error: Data object is missing or invalid.`
        );
      }
      const missing = requiredfields.filter((key) => !data.hasOwnProperty(key));
      if (missing.length > 0) {
        throw new Error(
          `${this.componentName} error: Missing required fields: ${missing.join(", ")}`
        );
      }
    }
  };

  // src/components/_example/example.hbs?raw
  var example_default = '<div class="qld__page-alerts qld__page-alerts--{{type}}" data-component="qgds-example">\n\n  <div class="qld__page-alerts--heading qld__display-lg">\n    {{heading}}\n  </div>\n\n  {{{ description }}}\n\n</div>';

  // src/components/_example/example.js
  var example_default2 = {
    init() {
      document.addEventListener("DOMContentLoaded", () => {
        this.handleClick(".qld__page-alerts a");
      });
    },
    /**
     * Example: Attach a click event handler on the supplied element.
     * @param {HTMLElement} element - A DOM element to handle.
     */
    handleClick(scope) {
      let nodes = document.querySelectorAll(scope);
      nodes.forEach((node) => {
        node.addEventListener("click", (event) => {
          console.log(`A link was clicked within the Example component.`);
        });
      });
    }
  };

  // src/components/_example/version.json
  var version_default = {
    component: {
      name: "Example",
      description: "An example component that demonstrates file structure, importing and exporting, Storybook and event binding.",
      version: "0.1",
      status: "Draft",
      type: "design"
    }
  };

  // src/components/_example/index.js
  function Example({ data, template = example_default }) {
    example_default2.init();
    const props = {
      data,
      template,
      required: ["title", "description"],
      meta: version_default || {}
    };
    return new Component("Example", props);
  }

  // src/components/breadcrumbs/breadcrumbs.hbs?raw
  var breadcrumbs_default = `{{#ifCond current.data.metadata.displayBreadcrumbs.value '==' 'true'}}
<nav class="qld__breadcrumbs" aria-label="breadcrumb">
    <ul class="qld__breadcrumbs__list--desktop qld__link-list qld__link-list--inline">
        {{#each current.lineage}}
        {{#ifCond asset_type_code '!=' 'folder'}}
        <li {{#if @last}}aria-current="page" {{/if}}>
            {{#if @last}}
            {{renderSpecialChar asset_short_name}}
            {{else}}
            {{#ifCond asset_type_code '!=' 'folder'}}
            <a href="{{asset_url}}">{{#if @first}}Home{{else}}{{renderSpecialChar asset_short_name}}{{/if}}</a>
            {{/ifCond}}
            {{/if}}
        </li>
        {{/ifCond}}
        {{/each}}
    </ul>
    <ul class="qld__breadcrumbs__list--mobile qld__link-list qld__link-list--inline">
        {{#with (itemAt current.lineage -2)}}
        {{#ifCond asset_type_code '!=' 'folder'}}
        <li>
            <a href="{{asset_url}}">
                {{#ifCond asset_is_site_asset '==' '1'}}
                Home
                {{else}}
                {{renderSpecialChar asset_short_name}}
                {{/ifCond}}
            </a>
        </li>
        {{/ifCond}}
        {{/with}}
    </ul>
</nav>
{{/ifCond}}`;

  // src/components/breadcrumbs/breadcrumbs.js
  var _BreadcrumbsLogic = class _BreadcrumbsLogic {
    constructor() {
      this.originalUL = null;
    }
    init() {
      var _a;
      let crumbsData = {};
      crumbsData.element = this.getBreadcrumbs();
      if (!crumbsData.element) return;
      crumbsData.ul = crumbsData.element.ul;
      crumbsData.items = crumbsData.ul.querySelectorAll("li") || false;
      crumbsData.menu = this.createMenu();
      crumbsData.itemCount = ((_a = crumbsData.items) == null ? void 0 : _a.length) || 0;
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
          "section.qld__body--breadcrumb nav.qld__breadcrumbs"
        )
      ];
      const activeCrumb = crumbs.find((el) => el.offsetWidth > 0);
      if (!activeCrumb) return null;
      const container = activeCrumb.closest(".container-fluid");
      const padding = this.calcPadding(container);
      const maxW = container.offsetWidth - padding;
      activeCrumb.style.maxWidth = `${maxW}px`;
      if (!this.originalUl) {
        this.originalUl = activeCrumb.querySelector(`ul.${_BreadcrumbsLogic.CLS.LINK_LIST}`).cloneNode(true);
      }
      if (resized) {
        activeCrumb.querySelector(
          `ul.${_BreadcrumbsLogic.CLS.LINK_LIST}`
        ).innerHTML = this.originalUl.innerHTML;
      }
      const ul = activeCrumb.querySelector(
        `ul.${_BreadcrumbsLogic.CLS.LINK_LIST}`
      );
      ul.style.maxWidth = `${maxW}px`;
      return { activeCrumb, ul };
    }
    createMenu() {
      const wrapper = document.createElement("div");
      wrapper.className = _BreadcrumbsLogic.CLS.WRAPPER;
      const btn = document.createElement("button");
      btn.className = _BreadcrumbsLogic.CLS.BTN;
      btn.setAttribute("aria-controls", "menu");
      btn.setAttribute("aria-expanded", "false");
      const svg = this.createIcon();
      btn.appendChild(svg);
      const list = document.createElement("div");
      list.className = _BreadcrumbsLogic.CLS.LIST;
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
        "M352 256C352 238.3 366.3 224 384 224C401.7 224 416 238.3 416 256C416 273.7 401.7 288 384 288C366.3 288 352 273.7 352 256zM192 256C192 238.3 206.3 224 224 224C241.7 224 256 238.3 256 256C256 273.7 241.7 288 224 288C206.3 288 192 273.7 192 256zM96 256C96 273.7 81.67 288 64 288C46.33 288 32 273.7 32 256C32 238.3 46.33 224 64 224C81.67 224 96 238.3 96 256z"
      );
      svg.appendChild(path);
      return svg;
    }
    isOverflowByCount(count) {
      return count > _BreadcrumbsLogic.MIN_ITEMS;
    }
    isOverflowByHeight(ul, items2) {
      return ul.offsetHeight > items2[0].offsetHeight * _BreadcrumbsLogic.HEIGHT_RATIO;
    }
    isOverflowByWidth(ul, totalWidth) {
      const maxW = parseFloat(ul.style.maxWidth.replace(/[^\d.]/g, ""));
      return maxW < totalWidth;
    }
    calcPadding(container) {
      const styles = window.getComputedStyle(container);
      return parseFloat(styles.getPropertyValue("padding-left")) + parseFloat(styles.getPropertyValue("padding-right"));
    }
    calcTotalWidth(items2) {
      if (!items2) return;
      return Array.from(items2).reduce((acc, el) => acc + el.offsetWidth, 0);
    }
    handleOverflow({ items: items2, menu, ul, itemCount }) {
      this.addMenuItem(menu, items2[1]);
      items2[1].style.display = "none";
      for (let i = START_IDX; i < itemCount - 2; i++) {
        this.addMenuItem(menu, items2[i]);
        items2[i].style.display = "none";
      }
      this.appendMenu(menu, items2);
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
    appendMenu(menu, items2) {
      const container = items2[1];
      container.innerHTML = "";
      container.className = "qld__overflow_menu--breadcrumbs";
      container.appendChild(menu);
      container.style.display = "flex";
    }
    truncateLast(items2) {
      const last = items2[items2.length - 1];
      if (last) last.style.overflow = "hidden";
    }
  };
  // Static constants for configuration
  __publicField(_BreadcrumbsLogic, "HEIGHT_RATIO", 1.9);
  __publicField(_BreadcrumbsLogic, "MIN_ITEMS", 5);
  __publicField(_BreadcrumbsLogic, "START_IDX", 2);
  __publicField(_BreadcrumbsLogic, "CLS", {
    WRAPPER: "qld__overflow_menu_wrapper",
    BTN: "qld__overflow_menu__btn",
    LIST: "qld__overflow_menu_list",
    LINK_LIST: "qld__link-list"
  });
  var BreadcrumbsLogic = _BreadcrumbsLogic;

  // src/components/breadcrumbs/version.json
  var version_default2 = {
    component: {
      name: "Breadcrumbs",
      description: "",
      version: "1.0",
      status: "Released",
      type: "design"
    }
  };

  // src/components/breadcrumbs/index.js
  function Breadcrumbs2({ data, template = breadcrumbs_default }) {
    const BreadcrumbsLogic2 = new BreadcrumbsLogic();
    window.addEventListener("DOMContentLoaded", () => {
      BreadcrumbsLogic2.init();
    });
    window.addEventListener("resize", () => {
      BreadcrumbsLogic2.init();
    });
    const props = {
      data,
      template,
      meta: version_default2 || {}
    };
    return new Component("Breadcrumbs", props);
  }

  // src/components/back_to_top/back-to-top.hbs?raw
  var back_to_top_default = '{{! Back to top is true by default }}\n{{#unless hide_back_to_top}}\n  <div class="qld__widgets">\n    <a href="#" class="qld__btn qld__btn--floating qld__btn--back-to-top show" aria-label="Back to top">\n      <span>Back to top</span>\n    </a>\n  </div>\n{{/unless}}';

  // src/components/back_to_top/back-to-top.js
  var back_to_top_default2 = {
    init() {
    }
  };

  // src/components/back_to_top/version.json
  var version_default3 = {
    component: {
      name: "Back to Top",
      description: "Back To Top component is a button that appears when the user scrolls down the page. It allows the user to quickly scroll to the top of the page.",
      version: "0.1",
      status: "Draft",
      type: "design"
    }
  };

  // src/components/back_to_top/index.js
  function BackToTop({ data, template = back_to_top_default }) {
    back_to_top_default2.init();
    const props = {
      data,
      template,
      meta: version_default3 || {}
    };
    return new Component("BackToTop", props);
  }

  // src/js/index.js
  var QGDS = {
    Example,
    Breadcrumbs: Breadcrumbs2,
    BackToTop
  };
})();
//# sourceMappingURL=index.js.map
