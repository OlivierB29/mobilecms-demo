webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/_directives/alert.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"message\" [ngClass]=\"{ 'alert': message, 'alert-success': message.type === 'success', 'alert-danger': message.type === 'error' }\">{{message.text}}</div>"

/***/ }),

/***/ "../../../../../src/app/_directives/alert.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_index__ = __webpack_require__("../../../../../src/app/_services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertComponent = (function () {
    function AlertComponent(alertService) {
        this.alertService = alertService;
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.alertService.getMessage().subscribe(function (message) { _this.message = message; });
    };
    return AlertComponent;
}());
AlertComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-alert-message',
        template: __webpack_require__("../../../../../src/app/_directives/alert.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_services_index__["b" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_services_index__["b" /* AlertService */]) === "function" && _a || Object])
], AlertComponent);

var _a;
//# sourceMappingURL=alert.component.js.map

/***/ }),

/***/ "../../../../../src/app/_directives/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__alert_component__ = __webpack_require__("../../../../../src/app/_directives/alert.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__alert_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/_guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services__ = __webpack_require__("../../../../../src/app/_services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = (function () {
    function AuthGuard(router, contentService, http) {
        this.router = router;
        this.contentService = contentService;
        this.http = http;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('currentUser')) {
            var url = this.contentService.getUrl('/content');
            return this.http.get(url, { headers: this.contentService.jwt() }).map(function (data) {
                return data ? true : false;
            });
        }
        else {
            this.logout();
            return false;
        }
    };
    AuthGuard.prototype.logout = function () {
        localStorage.removeItem('currentUser');
        this.router.navigate(['/login']);
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_services__["d" /* ContentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_services__["d" /* ContentService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClient */]) === "function" && _c || Object])
], AuthGuard);

var _a, _b, _c;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/_guards/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_guard__ = __webpack_require__("../../../../../src/app/_guards/auth.guard.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__auth_guard__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/_helpers/base64.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Base64; });
// from https://gist.github.com/Juszczak/63e6d9e01decc850de03
var Base64 = (function () {
    function Base64() {
        this.PADCHAR = '=';
        this.ALPHA = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    }
    Base64.prototype.getByte = function (s, i) {
        var x = s.charCodeAt(i);
        return x;
    };
    Base64.prototype.getByte64 = function (s, i) {
        var idx = this.ALPHA.indexOf(s.charAt(i));
        return idx;
    };
    Base64.prototype.decode = function (s) {
        var pads = 0, i, b10, imax = s.length, x = [];
        s = String(s);
        if (imax === 0) {
            return s;
        }
        if (s.charAt(imax - 1) === this.PADCHAR) {
            pads = 1;
            if (s.charAt(imax - 2) === this.PADCHAR) {
                pads = 2;
            }
            imax -= 4;
        }
        for (i = 0; i < imax; i += 4) {
            b10 = (this.getByte64(s, i) << 18) | (this.getByte64(s, i + 1) << 12) | (this.getByte64(s, i + 2) << 6) | this.getByte64(s, i + 3);
            x.push(String.fromCharCode(b10 >> 16, (b10 >> 8) & 255, b10 & 255));
        }
        switch (pads) {
            case 1:
                b10 = (this.getByte64(s, i) << 18) | (this.getByte64(s, i + 1) << 12) | (this.getByte64(s, i + 2) << 6);
                x.push(String.fromCharCode(b10 >> 16, (b10 >> 8) & 255));
                break;
            case 2:
                b10 = (this.getByte64(s, i) << 18) | (this.getByte64(s, i + 1) << 12);
                x.push(String.fromCharCode(b10 >> 16));
                break;
        }
        return x.join('');
    };
    Base64.prototype.encode = function (s) {
        s = String(s);
        var i, b10, x = [], imax = s.length - s.length % 3;
        if (s.length === 0) {
            return s;
        }
        for (i = 0; i < imax; i += 3) {
            b10 = (this.getByte(s, i) << 16) | (this.getByte(s, i + 1) << 8) | this.getByte(s, i + 2);
            x.push(this.ALPHA.charAt(b10 >> 18));
            x.push(this.ALPHA.charAt((b10 >> 12) & 63));
            x.push(this.ALPHA.charAt((b10 >> 6) & 63));
            x.push(this.ALPHA.charAt(b10 & 63));
        }
        switch (s.length - imax) {
            case 1:
                b10 = this.getByte(s, i) << 16;
                x.push(this.ALPHA.charAt(b10 >> 18) + this.ALPHA.charAt((b10 >> 12) & 63) + this.PADCHAR + this.PADCHAR);
                break;
            case 2:
                b10 = (this.getByte(s, i) << 16) | (this.getByte(s, i + 1) << 8);
                x.push(this.ALPHA.charAt(b10 >> 18) + this.ALPHA.charAt((b10 >> 12) & 63) + this.ALPHA.charAt((b10 >> 6) & 63) + this.PADCHAR);
                break;
        }
        return x.join('');
    };
    return Base64;
}());

//# sourceMappingURL=base64.js.map

/***/ }),

/***/ "../../../../../src/app/_helpers/cmsapi.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CmsApi; });
var CmsApi = (function () {
    function CmsApi() {
    }
    CmsApi.prototype.content = function () {
    };
    CmsApi.prototype.getItem = function (name, id) {
        var list = this.getItems(name);
        var matched = list.filter(function (u) { return u.id === id; });
        return matched.length ? matched[0] : null;
    };
    CmsApi.prototype.deleteItem = function (name, id) {
        var list = this.getItems(name);
        var matched = list.filter(function (u) { return u.id !== id; });
        localStorage.setItem(name, JSON.stringify(matched));
    };
    CmsApi.prototype.addItem = function (name, newItem) {
        var list = this.getItems(name);
        console.log('adding ... ' + list.length + ' ' + newItem.id);
        list.push(newItem);
        console.log('adding done ' + list.length);
        localStorage.setItem(name, JSON.stringify(list));
    };
    CmsApi.prototype.saveItem = function (name, newItem) {
        var list = this.getItems(name);
        var save = false;
        list.forEach(function (part, index, list2) {
            if (part.id === newItem.id) {
                list[index] = newItem;
                save = true;
            }
        });
        if (!save) {
            list.push(newItem);
        }
        localStorage.setItem(name, JSON.stringify(list));
    };
    CmsApi.prototype.getItems = function (name) {
        var result = null;
        var existingItems = localStorage.getItem(name);
        if (existingItems) {
            result = JSON.parse(existingItems);
        }
        else {
            result = [];
            for (var i = 1; i < 10; i++) {
                result.push(this.buildNewItem(name, i.toString()));
            }
            localStorage.setItem(name, JSON.stringify(result));
        }
        return result;
    };
    CmsApi.prototype.getIndex = function (name) {
        return this.getItems(name);
    };
    CmsApi.prototype.buildNewItem = function (type, index) {
        var item = JSON.parse('{\
      "id": "foobar",\
      "date": "2017-11-17",\
      "title": "Lorem ipsum",\
      "description": "Lorem ipsum dolor sit amet, \
      consectetur adipiscing elit, \
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit \
      in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, \
      sunt in culpa qui officia deserunt mollit anim id est laborum.",\
      "media": [],\
      "images": [],\
      "attachments": []\
  }');
        item.id = item.id + index;
        item.title = type + ' ' + item.title + ' ' + index;
        return item;
    };
    CmsApi.prototype.getMetadata = function (name) {
        var result = [];
        if ('calendar' === name) {
            result = JSON.parse('[\
      {"name" : "id" , "primary" : "true", "type" : "string",  "editor":"line"},\
      {"name" : "title" , "primary" : "false", "type" : "string",  "editor":"line"},\
      {"name" : "date" , "primary" : "false", "type" : "string",  "editor":"date"},\
      {"name" : "organization" , "primary" : "false", "type" : "string",  "editor":"line"},\
      {"name" : "activity" , "primary" : "false", "type" : "text",  "editor":"choice", "choices" : ["tennis", "basketball", "golf"]},\
      {"name" : "description" , "primary" : "false", "type" : "string",  "editor":"text"},\
      {"name" : "location" , "primary" : "false", "type" : "string",  "editor":"line"},\
      {"name" : "media" , "primary" : "false", "type" : "array",  "editor":"medialist"},\
      {"name" : "images" , "primary" : "false", "type" : "array",  "editor":"imagelist"},\
      {"name" : "attachments" , "primary" : "false", "type" : "array",  "editor":"attachmentlist"}\
    ]');
        }
        else if ('news' === name) {
            result = JSON.parse('[\
      {"name" : "id" , "primary" : "true", "type" : "string",  "editor":"line"},\
      {"name" : "title" , "primary" : "false", "type" : "string",  "editor":"line"},\
      {"name" : "date" , "primary" : "false", "type" : "string",  "editor":"date"},\
      {"name" : "activity" , "primary" : "false", "type" : "text",  "editor":"choice", "choices" : ["tennis", "basketball", "golf"]},\
      {"name" : "description" , "primary" : "false", "type" : "string",  "editor":"text"},\
      {"name" : "media" , "primary" : "false", "type" : "array",  "editor":"medialist"},\
      {"name" : "images" , "primary" : "false", "type" : "array",  "editor":"imagelist"},\
      {"name" : "attachments" , "primary" : "false", "type" : "array",  "editor":"attachmentlist"}\
    ]');
        }
        else {
            result = JSON.parse('[\
      {"name" : "id" , "primary" : "true", "type" : "string",  "editor":"line"},\
      {"name" : "title" , "primary" : "false", "type" : "string",  "editor":"line"},\
      {"name" : "description" , "primary" : "false", "type" : "string",  "editor":"text"},\
      {"name" : "media" , "primary" : "false", "type" : "array",  "editor":"medialist"},\
      {"name" : "images" , "primary" : "false", "type" : "array",  "editor":"imagelist"},\
      {"name" : "attachments" , "primary" : "false", "type" : "array",  "editor":"attachmentlist"}\
    ]');
        }
        return result;
    };
    CmsApi.prototype.getTypes = function () {
        return JSON.parse('[{"type":"calendar","labels":[{"i18n":"en","label":"Calendar"},{"i18n":"fr","label":"Calendrier"}]},\
{"type":"news","labels":[{"i18n":"en","label":"News"},{"i18n":"fr","label":"Actualit\u00e9s"}]},\
{"type":"documents","labels":[{"i18n":"en","label":"Documents"},{"i18n":"fr","label":"Documents"}]},\
{"type":"clubs","labels":[{"i18n":"en","label":"Clubs"},{"i18n":"fr","label":"Clubs"}]},\
{"type":"contacts","labels":[{"i18n":"en","label":"Contacts"},{"i18n":"fr","label":"Contacts"}]},\
{"type":"links","labels":[{"i18n":"en","label":"Links"},{"i18n":"fr","label":"Liens"}]},\
{"type":"structure","labels":[{"i18n":"en","label":"Structure"},{"i18n":"fr","label":"Organisation"}]},\
{"type":"reports","labels":[{"i18n":"en","label":"Reports"},{"i18n":"fr","label":"Comptes Rendus"}]}]\
');
    };
    return CmsApi;
}());

//# sourceMappingURL=cmsapi.js.map

/***/ }),

/***/ "../../../../../src/app/_helpers/fake-backend.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = commonHttpFakeBackend;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cmsapi__ = __webpack_require__("../../../../../src/app/_helpers/cmsapi.ts");



function getTokens(url) {
    return url.split('/');
}
function getTokenFromEnd(url, i) {
    var urlParts = url.split('/');
    return urlParts[urlParts.length - i];
}
function getTokenFromBeginning(url, i) {
    var urlParts = url.split('/');
    return urlParts[i];
}
function getBeforeLast(url) {
    var urlParts = url.split('/');
    return urlParts[urlParts.length - 2];
}
function getLast(url) {
    var urlParts = url.split('/');
    return urlParts[urlParts.length - 1];
}
function commonHttpFakeBackend(url, method, request) {
    var cmsApi = new __WEBPACK_IMPORTED_MODULE_2__cmsapi__["a" /* CmsApi */]();
    console.log('init commonHttpFakeBackend');
    // OPTIONS
    if (method === 'OPTIONS') {
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (resp) { resp.next(new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["e" /* HttpResponse */]({ status: 200, body: {} })); resp.complete(); });
    }
    // authenticate
    if (url.endsWith('/authenticate') && method === 'POST') {
        // get parameters from post request
        return auth(request.body);
    }
    if (url.indexOf('/publicinfo') !== -1 && method === 'GET') {
        var body_1 = JSON.parse('{"name":"Foobar","clientalgorithm":"hashmacbase64","newpasswordrequired":"false"}');
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (resp) { resp.next(new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["e" /* HttpResponse */]({ status: 200, body: body_1 })); resp.complete(); });
    }
    if (url.indexOf('authapi') !== -1 && request.headers.get('Authorization') !== 'Bearer fake-jwt-token') {
        // return 401 not authorised if token is null or invalid
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (resp) { resp.next(new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["e" /* HttpResponse */]({ status: 401, body: {} })); resp.complete(); });
    }
    // upload doesn't work. Because of  XMLHttpRequest ?
    /*
    if (url.indexOf('basicupload') !== -1 && method === 'POST') {

      connection.mockRespond(new Response(new ResponseOptions({
        status: 200,
        body: JSON.parse('[{"title":"Lorem ipsum","url":"foobar","size":325203,"mimetype":"application\/pdf"}]')

      })));
      return;
    }
  */
    if (url.indexOf('fileapi/v1/basicupload') !== -1 && method === 'GET') {
        var body_2 = JSON.parse('[{"title":"Lorem ipsum","url":"foobar","size":325203,"mimetype":"application\/pdf"},\
  {"title":"activity.jpg","url":"activity.jpg","size":3272,"mimetype":"image\/jpeg"}]');
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (resp) { resp.next(new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["e" /* HttpResponse */]({ status: 200, body: body_2 })); resp.complete(); });
    }
    if (url.indexOf('fileapi/v1/delete/') !== -1 && method === 'POST') {
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (resp) { resp.next(new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["e" /* HttpResponse */]({ status: 200, body: {} })); resp.complete(); });
    }
    if (url.endsWith('file/?file=calendar/index/new.json') && method === 'GET') {
        var body_3 = JSON.parse('{\
  "id": "",\
  "date": "",\
  "activity": "tennis",\
  "title": "sample",\
  "organization": "",\
  "description": "",\
  "location": "...",\
  "url": "",\
  "images": [],\
  "attachments": []\
}');
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (resp) { resp.next(new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["e" /* HttpResponse */]({ status: 200, body: body_3 })); resp.complete(); });
    }
    if (url.endsWith('index/new.json') && method === 'GET') {
        var body_4 = JSON.parse('{\
            "id": "",\
            "title": "sample",\
            "description": "",\
            "url": ""\
          }');
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (resp) { resp.next(new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["e" /* HttpResponse */]({ status: 200, body: body_4 })); resp.complete(); });
    }
    if (url.match(/\?.+\/index\/metadata\.json/) && method === 'GET') {
        var fileAndType = getTokenFromEnd(url, 3);
        var fileAndTypeArray = fileAndType.split('=');
        var body_5 = cmsApi.getMetadata(fileAndTypeArray[1]);
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (resp) { resp.next(new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["e" /* HttpResponse */]({ status: 200, body: body_5 })); resp.complete(); });
    }
    // get index
    if (url.match(/index\/[-a-zA-Z0-9_]*/) && method === 'GET') {
        var body_6 = cmsApi.getIndex(getLast(url));
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (resp) { resp.next(new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["e" /* HttpResponse */]({ status: 200, body: body_6 })); resp.complete(); });
    }
    // get item by id
    if (url.match(/\/content\/[-a-zA-Z0-9_]*\/[-a-zA-Z0-9_]*/) && method === 'GET') {
        // find item by id in array
        var body_7 = cmsApi.getItem(getBeforeLast(url), getLast(url));
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (resp) { resp.next(new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["e" /* HttpResponse */]({ status: 200, body: body_7 })); resp.complete(); });
    }
    if (url.endsWith('/content') && method === 'GET') {
        var body_8 = cmsApi.getTypes();
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (resp) { resp.next(new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["e" /* HttpResponse */]({ status: 200, body: body_8 })); resp.complete(); });
    }
    //
    // generic responses
    //
    // refresh index
    if (url.indexOf('/index/') !== -1 && method === 'POST') {
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (resp) { resp.next(new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["e" /* HttpResponse */]({ status: 200, body: {} })); resp.complete(); });
    }
    // save record
    if (url.match(/content\/[-a-zA-Z0-9_]*/) && method === 'POST') {
        var bodyStr = decodeURIComponent(request.body.replace('requestbody=', ''));
        var params = JSON.parse(bodyStr);
        cmsApi.saveItem(getLast(url), params);
        var ts = Math.ceil(new Date().getTime() / 1000);
        var body_9 = JSON.parse('{"timestamp":"' + ts + '"}');
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (resp) { resp.next(new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["e" /* HttpResponse */]({ status: 200, body: body_9 })); resp.complete(); });
    }
    // delete item by id
    if (url.match(/\/content\/[-a-zA-Z0-9_]*\/[-a-zA-Z0-9_]*/) && method === 'DELETE') {
        // find item by id in array
        cmsApi.deleteItem(getBeforeLast(url), getLast(url));
        // respond 200 OK
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (resp) { resp.next(new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["e" /* HttpResponse */]({ status: 200, body: {} })); resp.complete(); });
    }
    return null;
}
function auth(bodyStr) {
    bodyStr = decodeURIComponent(bodyStr.replace('requestbody=', ''));
    var params = JSON.parse(bodyStr);
    if (params.user && params.password) {
        var user = JSON.parse('{}');
        user.username = params.user;
        var role = 'editor';
        // enable dynamic of admin role
        if (user.username.indexOf('admin') !== -1) {
            role = 'admin';
        }
        var body_10 = {
            name: user.username,
            email: user.username,
            role: role,
            token: 'fake-jwt-token'
        };
        console.log('mock ' + JSON.stringify(user));
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (resp) { resp.next(new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["e" /* HttpResponse */]({ status: 200, body: body_10 })); resp.complete(); });
    }
    else {
        console.error('Username or password is incorrect ');
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (resp) {
            resp.next(new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["e" /* HttpResponse */]({ status: 401,
                body: { error: 'Username or password is incorrect' } }));
            resp.complete();
        });
    }
}
//# sourceMappingURL=fake-backend.js.map

/***/ }),

/***/ "../../../../../src/app/_helpers/hashutils.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HashUtils; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fast_sha256__ = __webpack_require__("../../../../fast-sha256/sha256.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fast_sha256___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_fast_sha256__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base64__ = __webpack_require__("../../../../../src/app/_helpers/base64.ts");


var HashUtils = (function () {
    function HashUtils() {
    }
    /**
     * Hash an input string password to a sha256 password.
     * Explanation : this is just a client hash. The backend API has its own encrypt features.
     * For the backend API, the hashed password is like the clear password.
     * @param password clear text password
     * @return a sha256 in string format
     */
    HashUtils.prototype.hash = function (password) {
        var uint8array = new TextEncoder().encode(password);
        var myarray = __WEBPACK_IMPORTED_MODULE_0_fast_sha256___default()(uint8array);
        return new TextDecoder().decode(myarray);
    };
    /**
    * same as previous + base64 encode
    */
    HashUtils.prototype.hash64 = function (password) {
        return new __WEBPACK_IMPORTED_MODULE_1__base64__["a" /* Base64 */]().encode(this.hash(password));
    };
    return HashUtils;
}());

//# sourceMappingURL=hashutils.js.map

/***/ }),

/***/ "../../../../../src/app/_helpers/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fake_backend__ = __webpack_require__("../../../../../src/app/_helpers/fake-backend.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hashutils__ = __webpack_require__("../../../../../src/app/_helpers/hashutils.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__hashutils__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/_helpers/mock-http.interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MockHttpInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fake_backend__ = __webpack_require__("../../../../../src/app/_helpers/fake-backend.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MockHttpInterceptor = (function () {
    function MockHttpInterceptor() {
    }
    MockHttpInterceptor.prototype.intercept = function (request, next) {
        var url = request.url;
        var method = request.method;
        console.log(method + ' -> ' + url);
        return Object(__WEBPACK_IMPORTED_MODULE_1__fake_backend__["a" /* commonHttpFakeBackend */])(url, method, request) ||
            next.handle(request); // fallback in case url isn't caught
    };
    return MockHttpInterceptor;
}());
MockHttpInterceptor = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], MockHttpInterceptor);

//# sourceMappingURL=mock-http.interceptor.js.map

/***/ }),

/***/ "../../../../../src/app/_services/admin.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_helpers__ = __webpack_require__("../../../../../src/app/_helpers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__commonclient_service__ = __webpack_require__("../../../../../src/app/_services/commonclient.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
* Credits :
* based on http://jasonwatmore.com/post/2016/09/29/angular-2-user-registration-and-login-example-tutorial
*/
var AdminService = (function (_super) {
    __extends(AdminService, _super);
    function AdminService(http) {
        var _this = _super.call(this, __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].server, __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].adminapi) || this;
        _this.http = http;
        _this.getIndex = function (type) {
            var url = _this.getUrl('/index/' + type);
            console.log(url);
            console.log('getRecords ' + url);
            return _this.http.get(url, { headers: _this.jwt() });
        };
        /**
         * save a record
         */
        _this.rebuildIndex = function (type) {
            // eg : /index/calendar
            var url = _this.getUrl('/index/' + type);
            console.log(url);
            var postData = 'requestbody={}';
            return _this.http.post(url, postData, { headers: _this.jwtPost() });
        };
        /**
         * Table metadata for record modification
         */
        _this.getMetadata = function (file) {
            var userMetadata = null;
            if (file === 'users/index/metadata.json') {
                userMetadata = JSON.parse('\
      [\
  	{"name" : "email" , "primary" : "true", "type" : "string",  "editor":"line"},\
    {"name" : "name" , "primary" : "false", "type" : "string",  "editor":"line"},\
    {"name" : "role" , "primary" : "false", "type" : "text",  "editor":"choice", "choices" : ["guest", "editor", "admin"]},\
    {"name" : "password" , "primary" : "true", "type" : "password",  "editor":"line"},\
    {"name" : "status" , "primary" : "false", "type" : "text",  "editor":"choice", "choices" : ["active", "inactive", "changepassword"]}\
      ]\
      ');
            }
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(userMetadata);
        };
        /**
         * get a single record
         * @arg type : news, calendar, ...
         * @arg id : unique id
         * @returns Observable of a JSON record
         */
        _this.getRecord = function (type, id) {
            var url = _this.getUrl('/content/' + type + '/' + id);
            console.log(url);
            return _this.http.get(url, { headers: _this.jwt() });
        };
        /**
         * Table metadata for record modification
         */
        _this.getNewRecord = function (file) {
            var userMetadata = null;
            if (file === 'users/index/new.json') {
                userMetadata = JSON.parse('\
          {\
              "name": "",\
              "email": "",\
              "password": "",\
              "role": ""\
          }\
          ');
            }
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(userMetadata);
        };
        /**
         * delete a record
         */
        _this.delete = function (type, id) {
            // eg : /content/calendar
            var url = _this.getUrl('/content/' + type + '/' + id);
            console.log(url);
            return _this.http.delete(url, { headers: _this.jwt() });
        };
        return _this;
    }
    AdminService.prototype.put = function (type, userInput) {
        if (type === 'users') {
            var hashUtils = new __WEBPACK_IMPORTED_MODULE_2_app_helpers__["a" /* HashUtils */]();
            var url = this.getUrl('/content/' + type);
            var user = JSON.parse('{"name":"", "email":"", "password":"", "secretQuestion":"", "secretResponse":"" }');
            user.name = userInput.name;
            user.email = userInput.email;
            user.password = userInput.email;
            user.password = hashUtils.hash64(userInput.password);
            var data = 'requestbody=' + JSON.stringify(user);
            return this.http.put(url, data, { headers: this.jwtPost() });
        }
    };
    AdminService.prototype.postUser = function (type, userInput) {
        if (type === 'users') {
            var hashUtils = new __WEBPACK_IMPORTED_MODULE_2_app_helpers__["a" /* HashUtils */]();
            var url = this.getUrl('/content/' + type);
            var user = JSON.parse('{"name":"", "email":"", "password":"", "secretQuestion":"", "secretResponse":"" }');
            user.name = userInput.name;
            user.email = userInput.email;
            user.password = hashUtils.hash64(userInput.password);
            var jsonStr = JSON.stringify({
                email: user.email,
                password: user.password,
                name: user.name,
                secretQuestion: user.secretResponse,
                secretResponse: user.secretResponse
            });
            //  const data = 'requestbody=' + jsonStr + '&password=' + user.password;
            var data = 'requestbody=' + jsonStr;
            return this.http.post(url, data, { headers: this.jwtPost() });
        }
    };
    AdminService.prototype.updateUser = function (type, userInput) {
        if (type === 'users') {
            var hashUtils = new __WEBPACK_IMPORTED_MODULE_2_app_helpers__["a" /* HashUtils */]();
            var url = this.getUrl('/content/' + type + '/' + userInput.email);
            var data = '';
            if (userInput.password) {
                data = 'requestbody=' + JSON.stringify({ email: userInput.email,
                    newpassword: hashUtils.hash64(userInput.password),
                    role: userInput.role,
                    name: userInput.name
                });
            }
            else {
                data = 'requestbody=' + JSON.stringify(userInput);
            }
            return this.http.post(url, data, { headers: this.jwtPost() });
        }
    };
    AdminService.prototype.getAll = function () {
        return this.http.get('/api/users', { headers: this.jwt() }).map(function (response) { return response.json(); });
    };
    AdminService.prototype.getById = function (id) {
        return this.http.get('/api/users/' + id, { headers: this.jwt() }).map(function (response) { return response.json(); });
    };
    AdminService.prototype.create = function (user) {
        return this.http.post('/api/users', user, { headers: this.jwt() }).map(function (response) { return response.json(); });
    };
    AdminService.prototype.update = function (user) {
        return this.http.put('/api/users/' + user.id, user, { headers: this.jwt() }).map(function (response) { return response.json(); });
    };
    return AdminService;
}(__WEBPACK_IMPORTED_MODULE_4__commonclient_service__["a" /* CommonClientService */]));
AdminService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object])
], AdminService);

var _a;
//# sourceMappingURL=admin.service.js.map

/***/ }),

/***/ "../../../../../src/app/_services/alert.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertService = (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.keepAfterNavigationChange = false;
        // clear alert message on route change
        router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationStart */]) {
                if (_this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    _this.keepAfterNavigationChange = false;
                }
                else {
                    // clear alert
                    _this.subject.next();
                }
            }
        });
    }
    AlertService.prototype.success = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
    };
    AlertService.prototype.error = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
    };
    AlertService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    return AlertService;
}());
AlertService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object])
], AlertService);

var _a;
//# sourceMappingURL=alert.service.js.map

/***/ }),

/***/ "../../../../../src/app/_services/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_helpers__ = __webpack_require__("../../../../../src/app/_helpers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
* Credits :
* based on http://jasonwatmore.com/post/2016/09/29/angular-2-user-registration-and-login-example-tutorial
*/
var AuthenticationService = (function () {
    function AuthenticationService(http) {
        this.http = http;
        this.serverUrl = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].server;
        /**
        * API endpoint
        */
        this.api = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].authapi;
    }
    AuthenticationService.prototype.getHeaders = function () {
        return new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["d" /* HttpHeaders */]({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
    };
    AuthenticationService.prototype.login = function (user, password, mode) {
        console.log('login...');
        localStorage.removeItem('currentUser');
        // TODO RESTful endpoint
        var url = this.getUrl('/authenticate');
        var data = 'requestbody=' + JSON.stringify({ user: user, password: this.getPassword(password, mode) });
        return this.http.post(url, data, { headers: this.getHeaders() });
    };
    AuthenticationService.prototype.getPassword = function (password, mode) {
        var data = '';
        var hashUtils = new __WEBPACK_IMPORTED_MODULE_2_app_helpers__["a" /* HashUtils */]();
        if ('hashmacbase64' === mode) {
            data = hashUtils.hash64(password);
        }
        else if ('none' === mode) {
            data = password;
        }
        else {
            data = hashUtils.hash(password);
        }
        return data;
    };
    AuthenticationService.prototype.register = function (userInput) {
        var hashUtils = new __WEBPACK_IMPORTED_MODULE_2_app_helpers__["a" /* HashUtils */]();
        var url = this.getUrl('/register');
        userInput.password = hashUtils.hash64(userInput.password);
        var data = 'requestbody=' + JSON.stringify(userInput);
        return this.http.post(url, data, { headers: this.getHeaders() });
    };
    AuthenticationService.prototype.resetpassword = function (user) {
        var hashUtils = new __WEBPACK_IMPORTED_MODULE_2_app_helpers__["a" /* HashUtils */]();
        var url = this.getUrl('/resetpassword');
        var data = 'requestbody=' + JSON.stringify({ user: user });
        return this.http.post(url, data, { headers: this.getHeaders() })
            .map(function (response) {
            var registerResponse = response.json();
        });
    };
    AuthenticationService.prototype.publicinfo = function (user) {
        var url = this.getUrl('/publicinfo/' + user);
        return this.http.get(url);
    };
    AuthenticationService.prototype.publicinfoUrl = function (user) {
        return this.getUrl('/publicinfo/' + user);
    };
    AuthenticationService.prototype.changepassword = function (user, oldPassword, newPassword, oldPasswordMode) {
        var hashUtils = new __WEBPACK_IMPORTED_MODULE_2_app_helpers__["a" /* HashUtils */]();
        var url = this.getUrl('/changepassword');
        var newPasswordMode = 'hashmacbase64';
        var data = 'requestbody=' + JSON.stringify({ user: user,
            newpassword: this.getPassword(newPassword, newPasswordMode),
            password: this.getPassword(oldPassword, oldPasswordMode)
        });
        return this.http.post(url, data, { headers: this.getHeaders() });
    };
    /**
    * get API url
    * @arg path  eg : '/content'
    * @returns http://localhost//adminapp/api.php?path=/content
    */
    AuthenticationService.prototype.getUrl = function (path) {
        return this.serverUrl + this.api + path;
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    };
    AuthenticationService.prototype.initUser = function () {
        var currentUser = null;
        var currentUserLocalStorage = localStorage.getItem('currentUser');
        if (currentUserLocalStorage) {
            currentUser = JSON.parse(currentUserLocalStorage);
            currentUser.token = '';
        }
        return currentUser;
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object])
], AuthenticationService);

var _a;
//# sourceMappingURL=authentication.service.js.map

/***/ }),

/***/ "../../../../../src/app/_services/commonclient.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonClientService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");

var CommonClientService = (function () {
    function CommonClientService(serverUrl, api) {
        this.serverUrl = serverUrl;
        this.api = api;
        this.postFormData = true;
        this.controlResponse = function (response) {
            if (response.status < 200 || response.status >= 300) {
                throw new Error('This request has failed ' + response.status);
            }
        };
    }
    /**
    * get API url
    * @arg path  eg : '/content'
    * @returns http://server//adminapp/api.php?path=/content
    */
    CommonClientService.prototype.getUrl = function (path) {
        return this.serverUrl + this.api + path;
    };
    CommonClientService.prototype.jwt = function () {
        // create authorization header with jwt token
        if (localStorage.getItem('currentUser')) {
            var currentUser = JSON.parse(localStorage.getItem('currentUser'));
            if (currentUser && currentUser.token) {
                return new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpHeaders */]({ 'Authorization': 'Bearer ' + currentUser.token });
            }
            else {
                throw new Error('invalid token');
            }
        }
        else {
            throw new Error('empty user');
        }
    };
    CommonClientService.prototype.jwtPost = function () {
        // create authorization header with jwt token
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpHeaders */]({ 'Authorization': 'Bearer ' + currentUser.token });
            // for POST
            // https://stackoverflow.com/questions/45286764/angular-4-3-httpclient-doesnt-send-header
            if (this.postFormData) {
                headers = headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
            }
            else {
                headers = headers.append('Content-Type', 'application/json; charset=UTF-8');
            }
            return headers;
        }
        else {
            throw new Error('empty user');
        }
    };
    return CommonClientService;
}());

//# sourceMappingURL=commonclient.service.js.map

/***/ }),

/***/ "../../../../../src/app/_services/content.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__commonclient_service__ = __webpack_require__("../../../../../src/app/_services/commonclient.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContentService = (function (_super) {
    __extends(ContentService, _super);
    function ContentService(http) {
        var _this = _super.call(this, __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].server, __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].api) || this;
        _this.http = http;
        _this.options = function () {
            var url = _this.getUrl('/content');
            var h = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]();
            return _this.http.get(url, { headers: _this.jwt() });
        };
        /**
         * Get list of tables
         * Response [{"type":"calendar"},{"type":"news"}]
         */
        _this.getTables = function () {
            var url = _this.getUrl('/content');
            console.log('getTables ' + url);
            return _this.http.get(url, { headers: _this.jwt() });
        };
        /**
         * @arg type : news, calendar, ...
         * Response :
         */
        _this.getRecords = function (type) {
            var url = _this.getUrl('/content/' + type);
            console.log('getRecords ' + url);
            return _this.http.get(url, { headers: _this.jwt() });
        };
        /**
         * @arg type : news, calendar, ...
         * Response :
         */
        _this.getIndex = function (type) {
            var url = _this.getUrl('/index/' + type);
            console.log(url);
            console.log('getRecords ' + url);
            return _this.http.get(url, { headers: _this.jwt() });
        };
        /**
         * get a single record
         * @arg type : news, calendar, ...
         * @arg id : unique id
         * @returns Observable of a JSON record
         */
        _this.getRecord = function (type, id) {
            var url = _this.getUrl('/content/' + type + '/' + id);
            console.log(url);
            return _this.http.get(url, { headers: _this.jwt() });
        };
        /**
         * save a record
         */
        _this.post = function (type, obj) {
            // eg : /content/calendar
            var url = _this.getUrl('/content/' + type);
            console.log(url);
            var postData;
            if (_this.postFormData) {
                // escape issue, with some characters like &
                postData = 'requestbody=' + encodeURIComponent(JSON.stringify(JSON.parse(JSON.stringify(obj))));
            }
            else {
                postData = obj;
            }
            return _this.http.post(url, postData, { headers: _this.jwtPost() });
        };
        /**
         * delete a record
         */
        _this.delete = function (type, id) {
            // eg : /content/calendar
            var url = _this.getUrl('/content/' + type + '/' + id);
            console.log(url);
            return _this.http.delete(url, { headers: _this.jwt() });
        };
        /**
         * save a record
         */
        _this.putObject = function (type, obj) {
            // eg : /content/calendar
            var url = _this.getUrl('/content/' + type);
            console.log(url);
            return _this.http.put(url, obj, { headers: _this.jwtPost() });
        };
        /**
         * save a record
         */
        _this.rebuildIndex = function (type) {
            // eg : /index/calendar
            var url = _this.getUrl('/index/' + type);
            console.log(url);
            var postData = 'requestbody={}';
            return _this.http.post(url, postData, { headers: _this.jwtPost() });
        };
        /**
         * Table metadata for record modification
         */
        _this.getMetadata = function (file) {
            var url = _this.getUrl('/file/?file=' + file);
            return _this.http.get(url, { headers: _this.jwt() });
        };
        /**
         * Table metadata for record modification
         */
        _this.getNewRecord = function (file) {
            var url = _this.getUrl('/file/?file=' + file);
            return _this.http.get(url, { headers: _this.jwt() });
        };
        return _this;
    }
    return ContentService;
}(__WEBPACK_IMPORTED_MODULE_3__commonclient_service__["a" /* CommonClientService */]));
ContentService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object])
], ContentService);

var _a;
//# sourceMappingURL=content.service.js.map

/***/ }),

/***/ "../../../../../src/app/_services/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__alert_service__ = __webpack_require__("../../../../../src/app/_services/alert.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__alert_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_service__ = __webpack_require__("../../../../../src/app/_services/authentication.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__authentication_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin_service__ = __webpack_require__("../../../../../src/app/_services/admin.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__admin_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__content_service__ = __webpack_require__("../../../../../src/app/_services/content.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__content_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__upload_service__ = __webpack_require__("../../../../../src/app/_services/upload.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_4__upload_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__locale_service__ = __webpack_require__("../../../../../src/app/_services/locale.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_5__locale_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__stringutils_service__ = __webpack_require__("../../../../../src/app/_services/stringutils.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_6__stringutils_service__["a"]; });







//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/_services/locale.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocaleService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LocaleService = (function () {
    function LocaleService(http) {
        var _this = this;
        this.http = http;
        this.i18n = 'i18n-admin';
        this.lang = 'en';
        this.getLocale = function (uri, locale) {
            var url = _this.i18n + uri + '/' + locale + '.json';
            return _this.http.get(url);
        };
        this.lang = this.initLang();
    }
    LocaleService.prototype.getLang = function () {
        return this.lang;
    };
    LocaleService.prototype.initLang = function () {
        var lang = 'en';
        if (navigator) {
            var navlang = navigator.language;
            if (navlang === 'fr-FR' || navlang === 'fr') {
                lang = 'fr';
            }
        }
        return lang;
    };
    return LocaleService;
}());
LocaleService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object])
], LocaleService);

var _a;
//# sourceMappingURL=locale.service.js.map

/***/ }),

/***/ "../../../../../src/app/_services/stringutils.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StringUtils; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var StringUtils = (function () {
    function StringUtils() {
    }
    StringUtils.prototype.parseOldDate = function (str) {
        if (!/^(\d){8}$/.test(str)) {
            return null;
        }
        var y = str.substr(0, 4);
        var m = str.substr(4, 2);
        var d = str.substr(6, 2);
        return y + '-' + m + '-' + d;
    };
    /**
    * replace accents by US ASCII
    * http://stackoverflow.com/questions/18123501/replacing-accented-characters-with-plain-ascii-ones#18123985
    */
    StringUtils.prototype.removeDiacritics = function (str) {
        if (!str) {
            return '';
        }
        var defaultDiacriticsRemovalMap = [
            { 'base': 'A', 'letters': /[\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F]/g },
            { 'base': 'AA', 'letters': /[\uA732]/g },
            { 'base': 'AE', 'letters': /[\u00C6\u01FC\u01E2]/g },
            { 'base': 'AO', 'letters': /[\uA734]/g },
            { 'base': 'AU', 'letters': /[\uA736]/g },
            { 'base': 'AV', 'letters': /[\uA738\uA73A]/g },
            { 'base': 'AY', 'letters': /[\uA73C]/g },
            { 'base': 'B', 'letters': /[\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181]/g },
            { 'base': 'C', 'letters': /[\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E]/g },
            { 'base': 'D', 'letters': /[\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779]/g },
            { 'base': 'DZ', 'letters': /[\u01F1\u01C4]/g },
            { 'base': 'Dz', 'letters': /[\u01F2\u01C5]/g },
            { 'base': 'E', 'letters': /[\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E]/g },
            { 'base': 'F', 'letters': /[\u0046\u24BB\uFF26\u1E1E\u0191\uA77B]/g },
            { 'base': 'G', 'letters': /[\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E]/g },
            { 'base': 'H', 'letters': /[\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D]/g },
            { 'base': 'I', 'letters': /[\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197]/g },
            { 'base': 'J', 'letters': /[\u004A\u24BF\uFF2A\u0134\u0248]/g },
            { 'base': 'K', 'letters': /[\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2]/g },
            { 'base': 'L', 'letters': /[\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780]/g },
            { 'base': 'LJ', 'letters': /[\u01C7]/g },
            { 'base': 'Lj', 'letters': /[\u01C8]/g },
            { 'base': 'M', 'letters': /[\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C]/g },
            { 'base': 'N', 'letters': /[\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4]/g },
            { 'base': 'NJ', 'letters': /[\u01CA]/g },
            { 'base': 'Nj', 'letters': /[\u01CB]/g },
            { 'base': 'O', 'letters': /[\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C]/g },
            { 'base': 'OI', 'letters': /[\u01A2]/g },
            { 'base': 'OO', 'letters': /[\uA74E]/g },
            { 'base': 'OU', 'letters': /[\u0222]/g },
            { 'base': 'P', 'letters': /[\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754]/g },
            { 'base': 'Q', 'letters': /[\u0051\u24C6\uFF31\uA756\uA758\u024A]/g },
            { 'base': 'R', 'letters': /[\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782]/g },
            { 'base': 'S', 'letters': /[\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784]/g },
            { 'base': 'T', 'letters': /[\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786]/g },
            { 'base': 'TZ', 'letters': /[\uA728]/g },
            { 'base': 'U', 'letters': /[\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244]/g },
            { 'base': 'V', 'letters': /[\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245]/g },
            { 'base': 'VY', 'letters': /[\uA760]/g },
            { 'base': 'W', 'letters': /[\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72]/g },
            { 'base': 'X', 'letters': /[\u0058\u24CD\uFF38\u1E8A\u1E8C]/g },
            { 'base': 'Y', 'letters': /[\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE]/g },
            { 'base': 'Z', 'letters': /[\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762]/g },
            { 'base': 'a', 'letters': /[\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250]/g },
            { 'base': 'aa', 'letters': /[\uA733]/g },
            { 'base': 'ae', 'letters': /[\u00E6\u01FD\u01E3]/g },
            { 'base': 'ao', 'letters': /[\uA735]/g },
            { 'base': 'au', 'letters': /[\uA737]/g },
            { 'base': 'av', 'letters': /[\uA739\uA73B]/g },
            { 'base': 'ay', 'letters': /[\uA73D]/g },
            { 'base': 'b', 'letters': /[\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253]/g },
            { 'base': 'c', 'letters': /[\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184]/g },
            { 'base': 'd', 'letters': /[\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A]/g },
            { 'base': 'dz', 'letters': /[\u01F3\u01C6]/g },
            { 'base': 'e', 'letters': /[\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD]/g },
            { 'base': 'f', 'letters': /[\u0066\u24D5\uFF46\u1E1F\u0192\uA77C]/g },
            { 'base': 'g', 'letters': /[\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F]/g },
            { 'base': 'h', 'letters': /[\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265]/g },
            { 'base': 'hv', 'letters': /[\u0195]/g },
            { 'base': 'i', 'letters': /[\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131]/g },
            { 'base': 'j', 'letters': /[\u006A\u24D9\uFF4A\u0135\u01F0\u0249]/g },
            { 'base': 'k', 'letters': /[\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3]/g },
            { 'base': 'l', 'letters': /[\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747]/g },
            { 'base': 'lj', 'letters': /[\u01C9]/g },
            { 'base': 'm', 'letters': /[\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F]/g },
            { 'base': 'n', 'letters': /[\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5]/g },
            { 'base': 'nj', 'letters': /[\u01CC]/g },
            { 'base': 'o', 'letters': /[\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275]/g },
            { 'base': 'oi', 'letters': /[\u01A3]/g },
            { 'base': 'ou', 'letters': /[\u0223]/g },
            { 'base': 'oo', 'letters': /[\uA74F]/g },
            { 'base': 'p', 'letters': /[\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755]/g },
            { 'base': 'q', 'letters': /[\u0071\u24E0\uFF51\u024B\uA757\uA759]/g },
            { 'base': 'r', 'letters': /[\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783]/g },
            { 'base': 's', 'letters': /[\u0073\u24E2\uFF53\u00DF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B]/g },
            { 'base': 't', 'letters': /[\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787]/g },
            { 'base': 'tz', 'letters': /[\uA729]/g },
            { 'base': 'u', 'letters': /[\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289]/g },
            { 'base': 'v', 'letters': /[\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C]/g },
            { 'base': 'vy', 'letters': /[\uA761]/g },
            { 'base': 'w', 'letters': /[\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73]/g },
            { 'base': 'x', 'letters': /[\u0078\u24E7\uFF58\u1E8B\u1E8D]/g },
            { 'base': 'y', 'letters': /[\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF]/g },
            { 'base': 'z', 'letters': /[\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763]/g }
        ];
        for (var i = 0; i < defaultDiacriticsRemovalMap.length; i++) {
            str = str.replace(defaultDiacriticsRemovalMap[i].letters, defaultDiacriticsRemovalMap[i].base);
        }
        return str;
    };
    StringUtils.prototype.escape = function (text) {
        return text.replace(/[\\]/g, '\\\\')
            .replace(/[\"]/g, '\\\"')
            .replace(/[\/]/g, '\\/')
            .replace(/[\b]/g, '\\b')
            .replace(/[\f]/g, '\\f')
            .replace(/[\n]/g, '\\n')
            .replace(/[\r]/g, '\\r')
            .replace(/[\t]/g, '\\t');
    };
    return StringUtils;
}());
StringUtils = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], StringUtils);

//# sourceMappingURL=stringutils.service.js.map

/***/ }),

/***/ "../../../../../src/app/_services/upload.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__commonclient_service__ = __webpack_require__("../../../../../src/app/_services/commonclient.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UploadService = (function (_super) {
    __extends(UploadService, _super);
    function UploadService(http) {
        var _this = _super.call(this, __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].server, __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].fileapi) || this;
        _this.http = http;
        return _this;
    }
    UploadService.prototype.getFilesDescriptions = function (type, id) {
        var url = this.getUrl('/basicupload/' + type + '/' + id);
        console.log('getFilesDescriptions ' + url);
        return this.http.get(url, { headers: this.jwt() });
    };
    UploadService.prototype.uploadFile = function (file, type, id) {
        var url = this.getUrl('/basicupload/' + type + '/' + id);
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].fromPromise(new Promise(function (resolve, reject) {
            var formData = new FormData();
            var xhr = new XMLHttpRequest();
            formData.append('uploaded_file', file);
            xhr.onreadystatechange = function () {
                console.log('onreadystatechange ...');
                if (xhr.readyState === 4) {
                    console.log('onreadystatechange readyState');
                    if (xhr.status === 200) {
                        console.log('onreadystatechange status 200');
                        resolve(JSON.parse(xhr.response));
                    }
                    else {
                        console.log('onreadystatechange reject');
                        reject(xhr.response);
                    }
                }
            };
            xhr.open('POST', url, true);
            // create authorization header with jwt token
            var currentUser = JSON.parse(localStorage.getItem('currentUser'));
            if (currentUser && currentUser.token) {
                xhr.setRequestHeader('Authorization', 'Bearer ' + currentUser.token);
            }
            else {
                throw new Error('empty user');
            }
            xhr.send(formData);
        }));
    };
    UploadService.prototype.sync = function (type, id, obj) {
        // eg : /content/calendar
        var url = this.getUrl('/download/' + type + '/' + id);
        console.log(url);
        var postData = '';
        if (this.postFormData) {
            // escape issue, with some characters like &
            postData = 'requestbody=' + encodeURIComponent(JSON.stringify(JSON.parse(JSON.stringify(obj))));
        }
        else {
            postData = JSON.stringify(obj);
        }
        return this.http.post(url, postData, { headers: this.jwtPost() });
    };
    UploadService.prototype.delete = function (type, id, obj) {
        // eg : /content/calendar
        var url = this.getUrl('/delete/' + type + '/' + id);
        console.log(url);
        var postData = '';
        if (this.postFormData) {
            // escape issue, with some characters like &
            postData = 'requestbody=' + encodeURIComponent(JSON.stringify(JSON.parse(JSON.stringify(obj))));
        }
        else {
            postData = JSON.stringify(obj);
        }
        return this.http.post(url, postData, { headers: this.jwtPost() });
    };
    return UploadService;
}(__WEBPACK_IMPORTED_MODULE_5__commonclient_service__["a" /* CommonClientService */]));
UploadService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object])
], UploadService);

var _a;
//# sourceMappingURL=upload.service.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-my-mainpage></app-my-mainpage>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rxjs_extensions__ = __webpack_require__("../../../../../src/app/rxjs-extensions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(translate) {
        this.translate = translate;
        this.title = '';
    }
    AppComponent.prototype.ngOnInit = function () {
        // this language will be used as a fallback when a translation isn't found in the current language
        this.translate.setDefaultLang(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].defaultlang);
        // the lang to use, if the lang isn't available, it will use the current loader to get them
        this.translate.use(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].defaultlang);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export HttpLoaderFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_http_loader__ = __webpack_require__("../../../../@ngx-translate/http-loader/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_mymaterial_module__ = __webpack_require__("../../../../../src/app/mymaterial.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_app_app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_app_directives_index__ = __webpack_require__("../../../../../src/app/_directives/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_app_guards_index__ = __webpack_require__("../../../../../src/app/_guards/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_app_services_index__ = __webpack_require__("../../../../../src/app/_services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__home__ = __webpack_require__("../../../../../src/app/home/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_app_register_index__ = __webpack_require__("../../../../../src/app/register/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_app_recordlist_index__ = __webpack_require__("../../../../../src/app/recordlist/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_app_users__ = __webpack_require__("../../../../../src/app/users/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_app_record__ = __webpack_require__("../../../../../src/app/record/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_app_login__ = __webpack_require__("../../../../../src/app/login/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_app_mainpage__ = __webpack_require__("../../../../../src/app/mainpage/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_app_shared_filters__ = __webpack_require__("../../../../../src/app/shared/filters/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_app_helpers_mock_http_interceptor__ = __webpack_require__("../../../../../src/app/_helpers/mock-http.interceptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// @angular imports




// translate


// AoT requires an exported function for factories
function HttpLoaderFactory(http) {
    return new __WEBPACK_IMPORTED_MODULE_5__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, 'assets/i18n-admin/', '.json');
}
// Material



// project imports













// @angular/common/http


var providers = [
    __WEBPACK_IMPORTED_MODULE_12_app_guards_index__["a" /* AuthGuard */],
    __WEBPACK_IMPORTED_MODULE_13_app_services_index__["b" /* AlertService */],
    __WEBPACK_IMPORTED_MODULE_13_app_services_index__["c" /* AuthenticationService */],
    __WEBPACK_IMPORTED_MODULE_13_app_services_index__["a" /* AdminService */],
    __WEBPACK_IMPORTED_MODULE_13_app_services_index__["d" /* ContentService */],
    __WEBPACK_IMPORTED_MODULE_13_app_services_index__["g" /* UploadService */],
    __WEBPACK_IMPORTED_MODULE_13_app_services_index__["e" /* LocaleService */],
    __WEBPACK_IMPORTED_MODULE_13_app_services_index__["f" /* StringUtils */],
    __WEBPACK_IMPORTED_MODULE_21_app_shared_filters__["a" /* OrderbyPipe */],
    __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClient */],
];
// use mock backend if env variable is set
if (__WEBPACK_IMPORTED_MODULE_23_environments_environment__["a" /* environment */].usemockbackend === true) {
    providers.push({
        provide: __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
        useClass: __WEBPACK_IMPORTED_MODULE_22_app_helpers_mock_http_interceptor__["a" /* MockHttpInterceptor */],
        multi: true
    });
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_9__app_routing__["a" /* routing */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* NoopAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_8_app_mymaterial_module__["a" /* MyMaterialModule */],
            __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                loader: {
                    provide: __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["a" /* TranslateLoader */],
                    useFactory: HttpLoaderFactory,
                    deps: [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClient */]]
                }
            })
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_20_app_mainpage__["a" /* MainPageComponent */],
            __WEBPACK_IMPORTED_MODULE_19_app_login__["b" /* SendPasswordDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_20_app_mainpage__["b" /* MenubuttonComponent */],
            __WEBPACK_IMPORTED_MODULE_10_app_app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_11_app_directives_index__["a" /* AlertComponent */],
            __WEBPACK_IMPORTED_MODULE_14__home__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_14__home__["b" /* HomeHelpDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_19_app_login__["a" /* ModifyPasswordComponent */],
            __WEBPACK_IMPORTED_MODULE_15_app_register_index__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_16_app_recordlist_index__["a" /* RecordListComponent */],
            __WEBPACK_IMPORTED_MODULE_16_app_recordlist_index__["b" /* RecordListHelpDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_18_app_record__["e" /* RecordComponent */],
            __WEBPACK_IMPORTED_MODULE_17_app_users__["b" /* UserListComponent */],
            __WEBPACK_IMPORTED_MODULE_17_app_users__["c" /* UserRecordComponent */],
            __WEBPACK_IMPORTED_MODULE_18_app_record__["f" /* RecordHelpDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_18_app_record__["a" /* DeleteDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_17_app_users__["a" /* DeleteUserDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_21_app_shared_filters__["a" /* OrderbyPipe */],
            __WEBPACK_IMPORTED_MODULE_18_app_record__["b" /* EditLinksComponent */],
            __WEBPACK_IMPORTED_MODULE_18_app_record__["c" /* EditMediaComponent */],
            __WEBPACK_IMPORTED_MODULE_18_app_record__["d" /* ErrorDialogComponent */]
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_14__home__["b" /* HomeHelpDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_19_app_login__["b" /* SendPasswordDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_18_app_record__["f" /* RecordHelpDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_16_app_recordlist_index__["b" /* RecordListHelpDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_18_app_record__["a" /* DeleteDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_17_app_users__["a" /* DeleteUserDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_18_app_record__["d" /* ErrorDialogComponent */]
        ],
        providers: providers,
        bootstrap: [__WEBPACK_IMPORTED_MODULE_10_app_app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_home_index__ = __webpack_require__("../../../../../src/app/home/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_register_index__ = __webpack_require__("../../../../../src/app/register/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_guards_index__ = __webpack_require__("../../../../../src/app/_guards/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_recordlist_recordlist_component__ = __webpack_require__("../../../../../src/app/recordlist/recordlist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_record_record_component__ = __webpack_require__("../../../../../src/app/record/record.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_users__ = __webpack_require__("../../../../../src/app/users/index.ts");







var appRoutes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_1_app_home_index__["a" /* HomeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3_app_guards_index__["a" /* AuthGuard */]] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1_app_home_index__["a" /* HomeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3_app_guards_index__["a" /* AuthGuard */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_1_app_home_index__["a" /* HomeComponent */] },
    { path: 'login/:algo', component: __WEBPACK_IMPORTED_MODULE_1_app_home_index__["a" /* HomeComponent */] },
    { path: 'recordlist/:type', component: __WEBPACK_IMPORTED_MODULE_4_app_recordlist_recordlist_component__["a" /* RecordListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3_app_guards_index__["a" /* AuthGuard */]] },
    { path: 'record/:type/:id', component: __WEBPACK_IMPORTED_MODULE_5_app_record_record_component__["a" /* RecordComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3_app_guards_index__["a" /* AuthGuard */]] },
    { path: 'userlist', component: __WEBPACK_IMPORTED_MODULE_6_app_users__["b" /* UserListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3_app_guards_index__["a" /* AuthGuard */]] },
    { path: 'userrecord/:id', component: __WEBPACK_IMPORTED_MODULE_6_app_users__["c" /* UserRecordComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3_app_guards_index__["a" /* AuthGuard */]] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_2_app_register_index__["a" /* RegisterComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3_app_guards_index__["a" /* AuthGuard */]] },
    { path: '**', redirectTo: '' }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */].forRoot(appRoutes, { useHash: true });
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n.mainpage-button {\n  width: 100%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\n<app-recordlist [recordtype]='\"calendar\"'></app-recordlist>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__homehelpdialog_component__ = __webpack_require__("../../../../../src/app/home/homehelpdialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function () {
    function HomeComponent(dialog) {
        this.dialog = dialog;
    }
    /**
    * help
    */
    HomeComponent.prototype.openHelpDialog = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__homehelpdialog_component__["a" /* HomeHelpDialogComponent */], {
            data: '',
        });
        dialogRef.afterClosed().subscribe(function (result) { console.log('Dialog result'); });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-homeadmin',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MdDialog */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/homehelpdialog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/homehelpdialog.component.html":
/***/ (function(module, exports) {

module.exports = "<!--component html goes here -->\n<h2 md-dialog-title>{{'home.help.title' | translate}}</h2>\n<!-- help content -->\n  <md-dialog-content>\n    <md-list>\n     <md-list-item> <md-icon>menu</md-icon> {{'home.help.menu' | translate}} </md-list-item>\n     <md-list-item> <md-icon>home</md-icon> {{'home.help.home' | translate}} </md-list-item>\n     <md-list-item> <md-icon>close</md-icon> {{'home.help.disconnect' | translate}} </md-list-item>\n\n    </md-list>\n\n    </md-dialog-content>\n"

/***/ }),

/***/ "../../../../../src/app/home/homehelpdialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeHelpDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var HomeHelpDialogComponent = (function () {
    function HomeHelpDialogComponent(data) {
        this.data = data;
    }
    return HomeHelpDialogComponent;
}());
HomeHelpDialogComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home-help-dialog',
        template: __webpack_require__("../../../../../src/app/home/homehelpdialog.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/homehelpdialog.component.css")]
    }),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MD_DIALOG_DATA */])),
    __metadata("design:paramtypes", [Object])
], HomeHelpDialogComponent);

//# sourceMappingURL=homehelpdialog.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__home_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__homehelpdialog_component__ = __webpack_require__("../../../../../src/app/home/homehelpdialog.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__homehelpdialog_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__standard_component__ = __webpack_require__("../../../../../src/app/home/standard.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__standard_component__["a"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/home/standard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StandardComponent; });
var StandardComponent = (function () {
    function StandardComponent() {
        this.hasRole = false;
        this.hasAdminRole = false;
        this.menuItems = null;
    }
    StandardComponent.prototype.ngOnInit = function () {
        this.initUser();
    };
    StandardComponent.prototype.initUser = function () {
        var currentUserLocalStorage = localStorage.getItem('currentUser');
        if (currentUserLocalStorage) {
            this.currentUser = JSON.parse(currentUserLocalStorage);
            this.currentUser.token = '';
            this.hasAdminRole = this.currentUser.role === 'admin';
            console.log('currentUser ...' + this.currentUser.role + ' ' + this.hasAdminRole);
            this.hasRole = this.currentUser.role === 'editor' || this.currentUser.role === 'admin';
        }
    };
    return StandardComponent;
}());

//# sourceMappingURL=standard.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modifypassword_component__ = __webpack_require__("../../../../../src/app/login/modifypassword.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__modifypassword_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sendpassworddialog_component__ = __webpack_require__("../../../../../src/app/login/sendpassworddialog.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__sendpassworddialog_component__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".error-label {\n  color: red;\n}\n.success-label {\n  color: green;\n}\n\n\n.loginform {\n  padding: 1em;\n}\n\n\n.loginform-input {\n  width: 90%;\n}\n\n\n\n@media all and (min-width: 55em) {\n\n  .loginform-input {\n    width: 20em;\n  }\n\n  .loginform {\n    padding-left: 10em;\n    padding-right: 10em;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/modifypassword.component.html":
/***/ (function(module, exports) {

module.exports = "<form *ngIf='!success' name='form' (ngSubmit)=\"f.form.valid && modifypassword() \" #f='ngForm' novalidate class='loginform'>\n\n\n  <div [ngClass]=\"{ 'has-error': f.submitted  && !newpassword.valid && isSecurePassword() }\">\n    <md-input-container class='loginform-input'>\n      <input type='password' mdInput placeholder='newpassword' name='newpassword' [(ngModel)]=\"model.newpassword\" #newpassword='ngModel' required />\n    </md-input-container>\n    <md-icon *ngIf='isSecurePassword()' class='success-label'>security</md-icon>\n    <md-icon *ngIf='!isSecurePassword()' class='error-label'>security</md-icon>\n  </div>\n\n  <div [ngClass]=\"{ 'has-error': f.submitted }\">\n    <md-input-container class='loginform-input'>\n      <input type='password' mdInput placeholder='newpassword2' name='newpassword2' [(ngModel)]=\"model.newpassword2\" #newpassword='ngModel' required />\n    </md-input-container>\n    <md-icon *ngIf='model.newpassword2 && model.newpassword !== model.newpassword2' class='error-label-message'>block</md-icon>\n  </div>\n\n  <div>\n    <button *ngIf='canSubmit()' md-button [disabled]=\"loading\"><md-icon>check_circle</md-icon></button>\n      <md-spinner *ngIf='loading' mode='indeterminate'></md-spinner>\n  </div>\n</form>\n\n\n<div *ngIf='success' >\n  <button md-button  [routerLink]='[\"/login\"]' ><md-icon>keyboard_return</md-icon></button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/login/modifypassword.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModifyPasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services_index__ = __webpack_require__("../../../../../src/app/_services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ModifyPasswordComponent = (function () {
    function ModifyPasswordComponent(router, authenticationService, alertService) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.model = {};
        this.userinfo = {};
        this.loading = false;
        this.success = false;
    }
    ModifyPasswordComponent.prototype.initUser = function () {
    };
    ModifyPasswordComponent.prototype.ngOnInit = function () {
        this.initUser();
    };
    ModifyPasswordComponent.prototype.modifypassword = function () {
        var _this = this;
        if (this.model.newpassword === this.model.newpassword2) {
            this.loading = true;
            this.authenticationService.changepassword(this.model.username, this.model.password, this.model.newpassword, 'none')
                .subscribe(function (data) {
                _this.alertService.success('success', true);
                _this.loading = false;
                _this.authenticationService.logout();
                _this.success = true;
                _this.userinfo.newpasswordrequired = 'false';
            }, function (error) {
                _this.alertService.error(error);
                _this.loading = false;
            });
        }
        else {
            this.alertService.error('Different passwords !');
        }
    };
    ModifyPasswordComponent.prototype.isSecurePassword = function () {
        return this.model.newpassword && this.model.newpassword.length >= 10;
    };
    ModifyPasswordComponent.prototype.oldIsSecurePassword = function () {
        // (?=.*\d)                // should contain at least one digit
        // (?=.*[a-z])             // should contain at least one lower case
        // (?=.*[A-Z])             // should contain at least one upper case
        // [a-zA-Z0-9]{8,}         // should contain at least 8 from the mentioned characters
        // $/);
        return this.model.newpassword && this.model.newpassword.match((/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/));
    };
    ModifyPasswordComponent.prototype.canSubmit = function () {
        return this.model.newpassword === this.model.newpassword2 && this.isSecurePassword();
    };
    return ModifyPasswordComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], ModifyPasswordComponent.prototype, "model", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], ModifyPasswordComponent.prototype, "userinfo", void 0);
ModifyPasswordComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-modifypassword',
        template: __webpack_require__("../../../../../src/app/login/modifypassword.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_services_index__["c" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_services_index__["c" /* AuthenticationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_app_services_index__["b" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_services_index__["b" /* AlertService */]) === "function" && _c || Object])
], ModifyPasswordComponent);

var _a, _b, _c;
//# sourceMappingURL=modifypassword.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/sendpassworddialog.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 md-dialog-title>{{'sendpassworddialog.title' | translate}}</h2>\n<md-dialog-content>{{'sendpassworddialog.warning' | translate}}</md-dialog-content>\n<md-dialog-content>{{ data }}</md-dialog-content>\n<md-dialog-actions>\n  <button md-button md-dialog-close>{{'cancel.label' | translate}}</button>\n  <!-- Can optionally provide a result for the closing dialog. -->\n  <button md-button [md-dialog-close]=\"true\">{{'validate.label' | translate}}</button>\n</md-dialog-actions>\n"

/***/ }),

/***/ "../../../../../src/app/login/sendpassworddialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SendPasswordDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var SendPasswordDialogComponent = (function () {
    function SendPasswordDialogComponent(data) {
        this.data = data;
    }
    return SendPasswordDialogComponent;
}());
SendPasswordDialogComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: __webpack_require__("../../../../../src/app/login/sendpassworddialog.component.html"),
    }),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MD_DIALOG_DATA */])),
    __metadata("design:paramtypes", [Object])
], SendPasswordDialogComponent);

//# sourceMappingURL=sendpassworddialog.component.js.map

/***/ }),

/***/ "../../../../../src/app/mainpage/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mainpage_component__ = __webpack_require__("../../../../../src/app/mainpage/mainpage.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__mainpage_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__menubutton_component__ = __webpack_require__("../../../../../src/app/mainpage/menubutton.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__menubutton_component__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/mainpage/mainpage.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".topmenucontent {\n  box-shadow: 5px 5px 10px 0 #656565;\n}\n\n\n\n.top-menu-spacer {\n padding-right: 1em;\n}\n\n\n.top-menu-title {\n  font-size: 1.25em;\n}\n\n.top-menu-icon {\n  padding: 0 0.875em;\n}\n\n.error-label {\n  color: red;\n}\n.success-label {\n  color: green;\n}\n\n.loginform {\n  padding: 1em;\n}\n\n\n.login-button {\n  font-weight: bold;\n}\n\n.loginform-input {\n  width: 100%;\n}\n\n\n.slidemenu {\nbox-shadow: 5px 5px 10px 0 #656565;\npadding-top: 1em;\n}\n\n\n.my-content {\n  margin-left: 0;\n  min-height: 800px;\n}\n\n\n\n@media all and (min-width: 55em) {\n  .my-content {\n    padding-left: 4em;\n  }\n\n  .top-menu-spacer {\n   padding-right: 5em;\n  }\n\n  .loginform-input {\n    width: 20em;\n  }\n\n\n  .loginform {\n    padding-left: 10em;\n    padding-right: 10em;\n  }\n  .slidemenu {\n  padding-top: 5em;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/mainpage/mainpage.component.html":
/***/ (function(module, exports) {

module.exports = "<md-toolbar color='primary' class='topmenucontent'>\n\n  <button *ngIf='isAuthenticated() && !menuOpened' md-button (click)='sidenav.open()'><md-icon>menu</md-icon></button>\n\n  <button [routerLink]='[\"/home\"]' md-button class='top-menu-title'>Admin</button>\n  <span class='fill-remaining-space'></span>\n  <button *ngIf='isAuthenticated() || isUserExists()' md-button (click)='disconnect()' class='top-menu-icon'><md-icon alt='disconnect'>cancel</md-icon></button>\n\n\n\n</md-toolbar>\n\n<md-sidenav-container>\n\n  <!-- slide menu -->\n\n  <md-sidenav #sidenav [mode]='menuMode' [opened]='menuOpened' class='slidemenu'>\n    <nav *ngIf='isConnected()'>\n      <div *ngIf='!menuItems'>\n\n      </div>\n      <div *ngIf='menuItems'>\n        <div *ngFor='let menu of menuItems'>\n          <app-menubutton *ngIf='menuMode !== \"over\"' [item]='menu'></app-menubutton>\n          <app-menubutton *ngIf='menuMode === \"over\"' [item]='menu' (click)='sidenav.close()'></app-menubutton>\n\n        </div>\n\n        <div *ngIf='hasAdminRole && adminMenuItems'>\n          <div *ngFor='let menu of adminMenuItems'>\n            <app-menubutton *ngIf='menuMode !== \"over\"' [item]='menu'></app-menubutton>\n            <app-menubutton *ngIf='menuMode === \"over\"' [item]='menu' (click)='sidenav.close()'></app-menubutton>\n          </div>\n        </div>\n\n\n      </div>\n\n    </nav>\n  </md-sidenav>\n\n\n  <!-- container -->\n\n\n  <div class='my-content'>\n    <app-alert-message></app-alert-message>\n\n    <!-- content -->\n    <router-outlet *ngIf='isConnected()'></router-outlet>\n    <!-- login -->\n\n    <div *ngIf='!isConnected()'>\n    <div *ngIf='!isAuthenticated() && isUserExists()' class='loginform'>\n\n      <form name='form' (ngSubmit)='f.form.valid && login()' #f='ngForm' novalidate>\n\n        <md-input-container class='loginform-input'>\n          <input type='password' mdInput placeholder='{{\"login.password\" | translate}}' name='password' [(ngModel)]='model.password' #password='ngModel' required />\n        </md-input-container>\n\n          <md-toolbar  class='loginform-input'>\n\n            <span class='fill-remaining-space'></span>\n          <button md-raised-button color='primary' [disabled]='loading' class='login-button'>{{ 'validate.label' | translate | uppercase }}</button>\n          </md-toolbar>\n          <md-toolbar  class='loginform-input'>\n            <form name='form3' (ngSubmit)='f3.form.valid && openSendPassword()' #f3='ngForm' novalidate>\n                <button md-button [disabled]='loading'>{{'sendpassworddialog.warning' | translate}}<md-icon>settings_backup_restore</md-icon></button>\n            </form>\n          </md-toolbar>\n\n      </form>\n    </div>\n\n    <!-- username / email -->\n    <div *ngIf='!isAuthenticated() && !isUserExists()' class='loginform'>\n      <form name='form2' (ngSubmit)='f2.form.valid && validateuser()' #f2='ngForm' novalidate>\n        <div [ngClass]='{ \"has-error\": f2.submitted && !username.valid }'>\n          <md-input-container class='loginform-input'>\n            <input type='text' mdInput placeholder='{{\"login.user\" | translate}}' name='username' [(ngModel)]='model.username' #username='ngModel' required />\n          </md-input-container>\n\n        </div>\n\n\n          <md-toolbar class='loginform-input'>\n            <span class='fill-remaining-space'></span>\n          <button md-raised-button  color='primary' [disabled]='loading' class='login-button'>{{ 'next.label' | translate | uppercase }}</button>\n          </md-toolbar>\n\n\n      </form>\n\n    </div>\n\n    <div *ngIf='isAuthenticated() && isNewPasswordRequired()' class='loginform'>\n      <form *ngIf='!success' name='form' (ngSubmit)=\"f.form.valid && modifypassword() \" #f='ngForm' novalidate class='loginform'>\n\n\n        <div [ngClass]=\"{ 'has-error': f.submitted  && !newpassword.valid && isSecurePassword() }\">\n          <md-input-container class='loginform-input'>\n            <input type='password' mdInput placeholder='newpassword' name='newpassword' [(ngModel)]=\"model.newpassword\" #newpassword='ngModel' required />\n          </md-input-container>\n          <md-icon *ngIf='isSecurePassword()' class='success-label'>security</md-icon>\n          <md-icon *ngIf='!isSecurePassword()' class='error-label'>security</md-icon>\n        </div>\n\n        <div [ngClass]=\"{ 'has-error': f.submitted }\">\n          <md-input-container class='loginform-input'>\n            <input type='password' mdInput placeholder='newpassword2' name='newpassword2' [(ngModel)]=\"model.newpassword2\" #newpassword='ngModel' required />\n          </md-input-container>\n          <md-icon *ngIf='model.newpassword2 && model.newpassword !== model.newpassword2' class='error-label-message'>block</md-icon>\n        </div>\n\n        <div>\n          <button *ngIf='canSubmit()' md-button [disabled]=\"loading\"><md-icon>check_circle</md-icon></button>\n\n        </div>\n      </form>\n    </div>\n\n    <div class='loginform'>\n      <md-spinner *ngIf='loading' mode='indeterminate'></md-spinner>\n    </div>\n    </div>\n\n  </div>\n</md-sidenav-container>\n"

/***/ }),

/***/ "../../../../../src/app/mainpage/mainpage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services__ = __webpack_require__("../../../../../src/app/_services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__menuitem__ = __webpack_require__("../../../../../src/app/mainpage/menuitem.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_login__ = __webpack_require__("../../../../../src/app/login/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MainPageComponent = (function () {
    function MainPageComponent(contentService, authenticationService, locale, alertService, dialog, router, route) {
        this.contentService = contentService;
        this.authenticationService = authenticationService;
        this.locale = locale;
        this.alertService = alertService;
        this.dialog = dialog;
        this.router = router;
        this.route = route;
        /*
    
        https://material.angular.io/components/component/sidenav
        */
        this.menuMode = 'side';
        /*
        opened
        https://www.npmjs.com/package/@angular2-material/sidenav
        */
        this.menuOpened = true;
        this.mobileLayout = true;
        this.hasRole = false;
        this.hasAdminRole = false;
        this.menuItems = null;
        this.adminMenuItems = null;
        this.loading = false;
        this.model = {};
        this.userinfo = {};
        this.success = false;
    }
    MainPageComponent.prototype.ngOnInit = function () {
        this.lang = this.locale.getLang();
        this.initUser();
        if (this.isConnected()) {
            this.initUi();
        }
        else {
            console.log('logout');
            this.authenticationService.logout();
        }
    };
    MainPageComponent.prototype.initUi = function () {
        this.initMenuLayout();
        this.initMenu();
    };
    MainPageComponent.prototype.initMenuLayout = function () {
        // const layout = this.conf.getLayout();
        var layout = this.getLayout();
        this.mobileLayout = layout !== 'desktop';
        switch (layout) {
            case 'desktop':
                this.menuMode = 'side';
                this.menuOpened = true;
                break;
            default:
                this.menuMode = 'over';
                this.menuOpened = false;
        }
    };
    MainPageComponent.prototype.initUser = function () {
        var currentUserLocalStorage = localStorage.getItem('currentUser');
        if (currentUserLocalStorage) {
            this.currentUser = JSON.parse(currentUserLocalStorage);
            this.currentUser.token = '';
            this.hasAdminRole = this.currentUser.role === 'admin';
            console.log('currentUser ...' + this.currentUser.role + ' ' + this.currentUser.role);
            this.hasRole = this.currentUser.role === 'editor' || this.currentUser.role === 'admin';
        }
    };
    MainPageComponent.prototype.initMenu = function () {
        var _this = this;
        this.menuItems = [];
        this.adminMenuItems = [];
        //
        // About roles : this just a frontend features. Roles must be tested in the API.
        //
        console.log('initMenu ...' + this.currentUser.role + ' ' + this.hasAdminRole);
        if (this.isAuthenticated() && this.hasRole) {
            var recordTypes_1 = null;
            this.contentService.getTables().subscribe(function (users) {
                recordTypes_1 = users;
                // iterate each type
                if (recordTypes_1) {
                    // record type
                    recordTypes_1.forEach(function (record) {
                        record.labels.map(function (label) {
                            if (label.i18n === _this.lang) {
                                record.label = label.label;
                                return label;
                            }
                        });
                        // create menu from record type
                        var menuItem = new __WEBPACK_IMPORTED_MODULE_4__menuitem__["a" /* MenuItem */]();
                        menuItem.routerLink = ['/recordlist', record.type];
                        menuItem.title = record.label;
                        _this.menuItems.push(menuItem);
                    });
                }
                if (_this.hasAdminRole) {
                    var userlist = new __WEBPACK_IMPORTED_MODULE_4__menuitem__["a" /* MenuItem */]();
                    userlist.routerLink = ['/userlist'];
                    userlist.title = 'Users';
                    _this.adminMenuItems.push(userlist);
                }
                console.log('menu complete :' + _this.menuItems.length);
            });
        }
        else {
            console.log('guest ');
        }
    };
    MainPageComponent.prototype.getLayout = function () {
        var layout = 'desktop';
        if (window.matchMedia('(min-width: 55em)').matches) {
            layout = 'desktop';
        }
        else {
            layout = 'mobile';
        }
        return layout;
    };
    MainPageComponent.prototype.isAuthenticated = function () {
        return localStorage.getItem('currentUser') != null;
    };
    MainPageComponent.prototype.isConnected = function () {
        return this.isAuthenticated() && this.hasRole && !this.isNewPasswordRequired();
    };
    MainPageComponent.prototype.isUserExists = function () {
        return this.userinfo && this.userinfo.name != null;
    };
    MainPageComponent.prototype.isNewPasswordRequired = function () {
        return this.userinfo && this.userinfo.newpasswordrequired === 'true';
    };
    MainPageComponent.prototype.login = function () {
        var _this = this;
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password, this.userinfo.clientalgorithm)
            .subscribe(function (userObject) {
            if (userObject && userObject.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(userObject));
            }
            else {
                console.error('invalid auth token');
                throw new Error('invalid auth token');
            }
            console.log('success');
            _this.initUser();
            if (_this.isAuthenticated()) {
                _this.alertService.success('authenticated');
                _this.initUi();
            }
            else {
                _this.alertService.error('empty user');
            }
            _this.loading = false;
            // ensure clear password
            if (!_this.isNewPasswordRequired()) {
                _this.clearPassword();
            }
        }, function (error) {
            console.log('error' + JSON.stringify(error));
            _this.alertService.error('not connected');
            _this.loading = false;
        });
    };
    MainPageComponent.prototype.sendpassword = function () {
        var _this = this;
        this.loading = true;
        this.authenticationService.resetpassword(this.model.username)
            .subscribe(function (data) {
            _this.alertService.success('success', true);
            _this.loading = false;
            _this.userinfo = data;
            _this.clearPassword();
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    MainPageComponent.prototype.validateuser = function () {
        var _this = this;
        console.log('validateemail');
        this.loading = true;
        /*
                this.http.get<any>(this.authenticationService.publicinfoUrl(this.model.username))
                .subscribe(
                (data: any) => {
                  this.userinfo = data;
                  this.alertService.success('success', true);
                  this.loading = false;
        
                },
                error => {
                  this.alertService.error(error);
                  this.loading = false;
                });*/
        this.authenticationService.publicinfo(this.model.username)
            .subscribe(function (data) {
            _this.userinfo = data;
            _this.alertService.success('success', true);
            _this.loading = false;
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    /**
    * delete
    */
    MainPageComponent.prototype.openSendPassword = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5_app_login__["b" /* SendPasswordDialogComponent */], {
            data: this.model.username,
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log("Dialog result: " + result);
            if (result) {
                _this.sendpassword();
            }
        });
    };
    MainPageComponent.prototype.clearPassword = function () {
        this.model.password = '';
    };
    MainPageComponent.prototype.clearNewPassword = function () {
        this.model.newpassword = '';
    };
    MainPageComponent.prototype.disconnect = function () {
        this.currentUser = null;
        this.hasRole = false;
        this.hasAdminRole = false;
        this.authenticationService.logout();
        this.userinfo = {};
        this.model = {};
    };
    MainPageComponent.prototype.modifypassword = function () {
        var _this = this;
        if (this.model.newpassword === this.model.newpassword2) {
            this.loading = true;
            this.authenticationService.changepassword(this.model.username, this.model.password, this.model.newpassword, 'none')
                .subscribe(function (data) {
                _this.alertService.success('success', true);
                _this.loading = false;
                _this.authenticationService.logout();
                _this.success = true;
                _this.userinfo = data;
                _this.clearPassword();
                _this.clearNewPassword();
            }, function (error) {
                _this.alertService.error(error);
                _this.loading = false;
            });
        }
        else {
            this.alertService.error('Different passwords !');
        }
    };
    MainPageComponent.prototype.isSecurePassword = function () {
        return this.model.newpassword && this.model.newpassword.length >= 10;
    };
    MainPageComponent.prototype.isSecurePasswordV2 = function () {
        // (?=.*\d)                // should contain at least one digit
        // (?=.*[a-z])             // should contain at least one lower case
        // (?=.*[A-Z])             // should contain at least one upper case
        // [a-zA-Z0-9]{8,}         // should contain at least 8 from the mentioned characters
        // $/);
        return this.model.newpassword && this.model.newpassword.match((/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{10,}$/));
    };
    MainPageComponent.prototype.canSubmit = function () {
        return this.model.newpassword === this.model.newpassword2 && this.isSecurePassword();
    };
    return MainPageComponent;
}());
MainPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-my-mainpage',
        template: __webpack_require__("../../../../../src/app/mainpage/mainpage.component.html"),
        styles: [__webpack_require__("../../../../../src/app/mainpage/mainpage.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_app_services__["d" /* ContentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_services__["d" /* ContentService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_app_services__["c" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_services__["c" /* AuthenticationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_app_services__["e" /* LocaleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_services__["e" /* LocaleService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_app_services__["b" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_services__["b" /* AlertService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MdDialog */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _g || Object])
], MainPageComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=mainpage.component.js.map

/***/ }),

/***/ "../../../../../src/app/mainpage/menubutton.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/mainpage/menubutton.component.html":
/***/ (function(module, exports) {

module.exports = "<a [routerLink]='item.routerLink' routerLinkActive='active' md-button color='primary'>\n<i *ngIf='item.icon'  class='material-icons slidemenu-button-icon' [innerHTML]='item.icon' ></i>\n<span  class='adminslidemenu-button-text' [innerHTML]='item.title'></span>\n</a>\n"

/***/ }),

/***/ "../../../../../src/app/mainpage/menubutton.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenubuttonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__menuitem__ = __webpack_require__("../../../../../src/app/mainpage/menuitem.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MenubuttonComponent = (function () {
    function MenubuttonComponent(router) {
        this.router = router;
    }
    MenubuttonComponent.prototype.ngOnInit = function () {
    };
    MenubuttonComponent.prototype.open = function () {
        this.router.navigate([this.item.routerLink]);
    };
    return MenubuttonComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__menuitem__["a" /* MenuItem */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__menuitem__["a" /* MenuItem */]) === "function" && _a || Object)
], MenubuttonComponent.prototype, "item", void 0);
MenubuttonComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-menubutton',
        template: __webpack_require__("../../../../../src/app/mainpage/menubutton.component.html"),
        styles: [__webpack_require__("../../../../../src/app/mainpage/menubutton.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object])
], MenubuttonComponent);

var _a, _b;
//# sourceMappingURL=menubutton.component.js.map

/***/ }),

/***/ "../../../../../src/app/mainpage/menuitem.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuItem; });
var MenuItem = (function () {
    function MenuItem() {
        this.state = 'inactive';
    }
    return MenuItem;
}());

//# sourceMappingURL=menuitem.js.map

/***/ }),

/***/ "../../../../../src/app/mymaterial.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyMaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MyMaterialModule = (function () {
    function MyMaterialModule() {
    }
    return MyMaterialModule;
}());
MyMaterialModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MdSidenavModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdButtonModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MdDialogModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MdListModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MdInputModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MdSelectModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MdIconModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MdProgressSpinnerModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MdTooltipModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MdToolbarModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatExpansionModule */]],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MdSidenavModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdButtonModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MdDialogModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MdListModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MdInputModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MdSelectModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MdIconModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MdProgressSpinnerModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MdTooltipModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MdToolbarModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatExpansionModule */]],
    })
], MyMaterialModule);

//# sourceMappingURL=mymaterial.module.js.map

/***/ }),

/***/ "../../../../../src/app/record/deletedialog.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 md-dialog-title>{{'deletedialog.title' | translate}}</h2>\n<md-dialog-content>{{'delete.warning.1' | translate}}</md-dialog-content>\n<md-dialog-content>{{ data }}</md-dialog-content>\n<md-dialog-content>{{'delete.warning.2' | translate}}</md-dialog-content>\n<md-dialog-actions>\n  <button md-button md-dialog-close>{{'cancel.label' | translate}}</button>\n  <!-- Can optionally provide a result for the closing dialog. -->\n  <button md-button [md-dialog-close]=\"true\">{{'delete.label' | translate}}</button>\n</md-dialog-actions>\n"

/***/ }),

/***/ "../../../../../src/app/record/deletedialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeleteDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var DeleteDialogComponent = (function () {
    function DeleteDialogComponent(data) {
        this.data = data;
    }
    return DeleteDialogComponent;
}());
DeleteDialogComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-confirmdialog',
        template: __webpack_require__("../../../../../src/app/record/deletedialog.component.html"),
    }),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MD_DIALOG_DATA */])),
    __metadata("design:paramtypes", [Object])
], DeleteDialogComponent);

//# sourceMappingURL=deletedialog.component.js.map

/***/ }),

/***/ "../../../../../src/app/record/editlinks.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".full-width-input {\n  width: 100%;\n\n}\n\n.half-width-input {\n  width: 50%;\n\n}\n\n\n.full-width-textarea {\n  width: 100%;\n}\n\n.input-group {\n  padding-bottom: 0.2em;\n}\n\ninput:-moz-read-only {\n    background-color: #ddd;\n}\n\ninput:read-only {\n    background-color: #ddd;\n}\n\n\n.success-label-message {\n  font-size: 0.81em;\n  color: #777777;\n}\n\n.error-label-message {\n  font-size: 0.81em;\n  color: red;\n}\n\n/*\n* panel button on the left\n*/\n.panel-button {\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/record/editlinks.component.html":
/***/ (function(module, exports) {

module.exports = "\n<md-expansion-panel>\n  <md-expansion-panel-header>\n    <md-panel-title>\n        <span *ngIf='attachments'>{{title | translate}} : {{attachments.length}}</span>\n    </md-panel-title>\n    <md-panel-description>\n      {{ 'record.edit.attachments.subtitle' | translate }}\n    </md-panel-description>\n  </md-expansion-panel-header>\n\n\n\n<div>\n\n<div *ngFor='let attachment of attachments; let i=index' class='input-group'>\n\n  <md-card>\n    <md-input-container class='full-width-input'>\n      <input mdInput placeholder='{{\"field.label.attachment.title\" | translate}}' [(ngModel)]='attachments[i].title' type='text'>\n    </md-input-container>\n\n    <md-input-container class='full-width-input'>\n      <input mdInput placeholder='{{\"field.label.attachment.url\" | translate}}' [(ngModel)]='attachments[i].url' type='text'>\n    </md-input-container>\n\n    <md-input-container class='full-width-input'>\n      <input mdInput placeholder='{{\"field.label.attachment.description\" | translate}}' [(ngModel)]='attachments[i].description' type='text'>\n    </md-input-container>\n    <md-toolbar>\n      <span class='fill-remaining-space'></span>\n      <button (click)='moveAttachmentUp(i)'  md-raised-button color='primary'  class='panel-button'><md-icon>arrow_upward</md-icon></button>\n      <span class='toolbar-spacer'></span>\n      <button (click)='moveAttachmentDown(i)'  md-raised-button color='primary'  class='panel-button'><md-icon>arrow_downward</md-icon></button>\n      <span class='toolbar-spacer'></span>\n      <span class='toolbar-spacer'></span>\n      <button (click)='deleteAttachment(i)'  md-raised-button color='primary'  class='panel-button'><md-icon>delete_forever</md-icon></button>\n      <span class='toolbar-spacer'></span>\n      <button *ngIf='adminrole' (click)='download(i)'  md-raised-button color='primary' class='panel-button' ><md-icon>backup</md-icon></button>\n\n    </md-toolbar>\n  </md-card>\n\n</div>\n\n<md-action-row>\n  <button md-raised-button color='primary' (click)='addAttachmentBottom()' mdTooltip='{{\"record.edit.addattachment\" | translate}}' class='panel-button'><md-icon>insert_link</md-icon></button>\n  <md-spinner *ngIf='loading' mode='indeterminate'></md-spinner>\n  <div *ngIf='responsemessage && responsemessage.error' class='error-label-message'>\n    <md-icon>cloud_off</md-icon>  {{responsemessage.error}}\n  </div>\n  <div *ngIf='responsemessage && !responsemessage.error' class='success-label-message'>\n    <md-icon >cloud_done</md-icon>\n  </div>\n</md-action-row>\n</div>\n\n\n</md-expansion-panel>\n"

/***/ }),

/***/ "../../../../../src/app/record/editlinks.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditLinksComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__errordialog_component__ = __webpack_require__("../../../../../src/app/record/errordialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services__ = __webpack_require__("../../../../../src/app/_services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditLinksComponent = (function () {
    function EditLinksComponent(uploadService, dialog) {
        this.uploadService = uploadService;
        this.dialog = dialog;
        /**
         * title
         */
        this.title = 'record.edit.attachments';
        /**
         * object data
         */
        this.type = null;
        /**
         * object data
         */
        this.current = null;
        this.adminrole = false;
        this.loading = false;
    }
    EditLinksComponent.prototype.ngOnInit = function () {
        if (!this.type) {
            console.error('empty type');
        }
        if (!this.current) {
            console.error('empty current');
        }
        if (!this.attachments) {
            console.error('empty attachments');
        }
    };
    /**
    * add an attachment at the beginning
    */
    EditLinksComponent.prototype.addAttachmentTop = function () {
        this.attachments.push(this.getDefaultAttachment());
        this.attachments = this.move(this.attachments, this.attachments.length - 1, 0);
    };
    /**
    * move item in array
    * TODO : utility class
    */
    EditLinksComponent.prototype.move = function (array, old_index, new_index) {
        if (new_index >= array.length) {
            var k = new_index - array.length;
            while ((k--) + 1) {
                array.push(undefined);
            }
        }
        array.splice(new_index, 0, array.splice(old_index, 1)[0]);
        return array;
    };
    /**
    * move an attachment upward
    */
    EditLinksComponent.prototype.moveAttachmentUp = function (index) {
        if (index > -1) {
            this.move(this.attachments, index, index - 1);
        }
    };
    /**
    * move an attachment downward
    */
    EditLinksComponent.prototype.moveAttachmentDown = function (index) {
        var newPosition = index + 1;
        if (index > -1 && newPosition < this.attachments.length) {
            this.move(this.attachments, index, newPosition);
        }
    };
    EditLinksComponent.prototype.addAttachmentBottom = function () {
        this.attachments.push(this.getDefaultAttachment());
    };
    EditLinksComponent.prototype.getDefaultAttachment = function () {
        // TODO : create a attachment_metadata.json
        return JSON.parse('{"url":"", "title":""}');
    };
    EditLinksComponent.prototype.deleteAttachment = function (index) {
        if (index > -1) {
            this.attachments.splice(index, 1);
        }
    };
    EditLinksComponent.prototype.download = function (index) {
        var _this = this;
        this.responsemessage = {};
        var files = [];
        files.push(this.attachments[index]);
        console.log('files ' + files);
        this.loading = true;
        this.uploadService.sync(this.type, this.current.id, files)
            .subscribe(function (mediadata) {
            console.log('result ' + JSON.stringify(mediadata));
            mediadata.forEach(function (f) {
                console.log('adding ' + f.title);
                _this.current.media.push(f);
            });
        }, function (error) {
            _this.responsemessage.error = error;
            console.error('post' + error);
            _this.loading = false;
        }, function () {
            console.log('sync complete');
            _this.loading = false;
        });
    };
    EditLinksComponent.prototype.openDialog = function (msg) {
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__errordialog_component__["a" /* ErrorDialogComponent */], {
            data: msg,
        });
    };
    EditLinksComponent.prototype.isLoading = function () {
        return this.loading;
    };
    EditLinksComponent.prototype.getResponseMessage = function () {
        return this.responsemessage;
    };
    return EditLinksComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], EditLinksComponent.prototype, "title", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], EditLinksComponent.prototype, "type", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], EditLinksComponent.prototype, "current", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Array)
], EditLinksComponent.prototype, "attachments", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], EditLinksComponent.prototype, "adminrole", void 0);
EditLinksComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-editlinks',
        template: __webpack_require__("../../../../../src/app/record/editlinks.component.html"),
        styles: [__webpack_require__("../../../../../src/app/record/editlinks.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_app_services__["g" /* UploadService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_services__["g" /* UploadService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MdDialog */]) === "function" && _b || Object])
], EditLinksComponent);

var _a, _b;
//# sourceMappingURL=editlinks.component.js.map

/***/ }),

/***/ "../../../../../src/app/record/editmedia.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".full-width-input {\n  width: 100%;\n\n}\n\n.half-width-input {\n  width: 50%;\n\n}\n\n\n.full-width-textarea {\n  width: 100%;\n}\n\n.input-group {\n  padding-bottom: 0.2em;\n}\n\ninput:-moz-read-only {\n    background-color: #ddd;\n}\n\ninput:read-only {\n    background-color: #ddd;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/record/editmedia.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<md-expansion-panel>\n  <md-expansion-panel-header>\n    <md-panel-title>\n      {{'record.edit.media' | translate}} : {{getAttachments().length}}\n    </md-panel-title>\n    <md-panel-description>\n      {{ 'record.edit.media.subtitle' | translate }}\n    </md-panel-description>\n  </md-expansion-panel-header>\n\n\n\n  <div>\n\n\n  <div *ngFor='let item of getAttachments(); let i=index' class='input-group'>\n\n\n    <md-card>\n      <md-input-container class='full-width-input'>\n        <input mdInput placeholder='{{\"field.label.attachment.title\" | translate}}' [(ngModel)]='getAttachments()[i].title' type='text'>\n      </md-input-container>\n\n      <md-input-container class='full-width-input'>\n        <input readonly mdInput placeholder='{{\"field.label.attachment.url\" | translate}}' [(ngModel)]='getAttachments()[i].url' type='text'>\n      </md-input-container>\n\n      <md-input-container class='half-width-input'>\n        <input readonly mdInput placeholder='{{\"field.label.attachment.mimetype\" | translate}}' [(ngModel)]='getAttachments()[i].mimetype' type='text'>\n      </md-input-container>\n\n      <md-input-container class='half-width-input'>\n        <input readonly mdInput placeholder='{{\"field.label.attachment.size\" | translate}}' [(ngModel)]='getAttachments()[i].size' type='text'>\n      </md-input-container>\n\n      <md-input-container class='full-width-input'>\n        <input mdInput placeholder='{{\"field.label.attachment.description\" | translate}}' [(ngModel)]='getAttachments()[i].description' type='text'>\n      </md-input-container>\n      <md-toolbar>\n      <span class='fill-remaining-space'></span>\n      <button (click)='moveAttachmentUp(i)'  md-raised-button color='primary' ><md-icon>arrow_upward</md-icon></button>\n      <span class='toolbar-spacer'></span>\n      <button (click)='moveAttachmentDown(i)'  md-raised-button color='primary' ><md-icon>arrow_downward</md-icon></button>\n      <span class='toolbar-spacer'></span>\n      <button (click)='deleteMedia(i)'  md-raised-button color='primary' ><md-icon>delete_forever</md-icon></button>\n      </md-toolbar>\n    </md-card>\n\n  </div>\n  <!-- ngFor -->\n\n\n  <md-action-row>\n    <input type='file' #file (change)='upload(file.files)' multiple='multiple' />\n    <button  md-raised-button color='primary' (click)='refresh()' ><md-icon>autorenew</md-icon></button>\n\n    <md-spinner *ngIf='isLoading()' mode='indeterminate'></md-spinner>\n    <div *ngIf='getResponseMessage() && getResponseMessage().error' class='error-label-message'>\n      <md-icon>cloud_off</md-icon>  {{getResponseMessage().error}}\n    </div>\n    <div *ngIf='getResponseMessage() && !getResponseMessage().error' class='success-label-message'>\n      <md-icon>cloud_done</md-icon>\n    </div>\n  </md-action-row>\n  </div>\n</md-expansion-panel>\n"

/***/ }),

/***/ "../../../../../src/app/record/editmedia.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditMediaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editlinks_component__ = __webpack_require__("../../../../../src/app/record/editlinks.component.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var EditMediaComponent = (function (_super) {
    __extends(EditMediaComponent, _super);
    function EditMediaComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EditMediaComponent.prototype.deleteMedia = function (index) {
        var _this = this;
        console.log('deleteMedia ' + index + '/' + this.attachments.length);
        this.responsemessage = {};
        var files = [];
        files.push(this.attachments[index]);
        console.log('deleteMedia ' + JSON.stringify(files));
        this.loading = true;
        this.uploadService.delete(this.type, this.current.id, files)
            .subscribe(function (mediadata) {
            console.log('result ' + JSON.stringify(mediadata));
            if (index > -1) {
                _this.attachments.splice(index, 1);
            }
        }, function (error) {
            _this.responsemessage.error = error;
            console.error('post' + error);
            _this.loading = false;
        }, function () {
            console.log('delete complete');
            _this.loading = false;
        });
    };
    EditMediaComponent.prototype.upload = function (files) {
        var _this = this;
        this.responsemessage = {};
        if (files) {
            console.log('files ' + files.length);
            console.log(files);
            for (var i = 0; i < files.length; i++) {
                console.log('uploading  ' + JSON.stringify(files[i]));
                this.loading = true;
                this.uploadService.uploadFile(files[i], this.type, this.current.id)
                    .subscribe(function (mediadata) {
                    if (mediadata.error) {
                        _this.openDialog('Upload failed : ' + mediadata.error);
                    }
                    else {
                        console.log('upload result ' + JSON.stringify(mediadata));
                        mediadata.forEach(function (f) {
                            console.log('--- current  ' + f.url);
                            if (!_this.exists(_this.current.media, 'url', f.url)) {
                                console.log('adding ' + f.title);
                                _this.current.media.push(f);
                            }
                        });
                    }
                }, function (error) {
                    _this.loading = false;
                    _this.responsemessage.error = error;
                    _this.openDialog('Upload error : ' + error);
                }, function () {
                    _this.loading = false;
                });
            }
        }
        else {
            this.loading = false;
            this.openDialog('No file selected');
        }
    };
    EditMediaComponent.prototype.exists = function (array, key, value) {
        var result = false;
        if (array) {
            var filter = array.filter(function (e) {
                return e[key] === value;
            });
            result = filter.length > 0;
        }
        return result;
    };
    EditMediaComponent.prototype.refresh = function () {
        var _this = this;
        this.uploadService.getFilesDescriptions(this.type, this.current.id)
            .subscribe(function (mediadata) {
            if (mediadata.error) {
                _this.openDialog('refresh failed : ' + mediadata.error);
            }
            else {
                console.log('upload result ' + JSON.stringify(mediadata));
                mediadata.forEach(function (f) {
                    console.log('-> ' + f.title);
                    var test = _this.current.media.filter(function (e) { return e.url === f.url; });
                    if (test.length === 0) {
                        console.log('adding ' + f.title);
                        _this.current.media.push(f);
                    }
                });
            }
        }, function (error) {
            _this.loading = false;
            _this.responsemessage.error = error;
            _this.openDialog('Upload error : ' + error);
        }, function () {
            _this.loading = false;
        });
    };
    EditMediaComponent.prototype.getAttachments = function () {
        return this.attachments;
    };
    EditMediaComponent.prototype.moveAttachmentUp = function (index) {
        _super.prototype.moveAttachmentUp.call(this, index);
    };
    /**
    * move an attachment downward
    */
    EditMediaComponent.prototype.moveAttachmentDown = function (index) {
        _super.prototype.moveAttachmentDown.call(this, index);
    };
    EditMediaComponent.prototype.isLoading = function () {
        return _super.prototype.isLoading.call(this);
    };
    EditMediaComponent.prototype.getResponseMessage = function () {
        return _super.prototype.getResponseMessage.call(this);
    };
    return EditMediaComponent;
}(__WEBPACK_IMPORTED_MODULE_1__editlinks_component__["a" /* EditLinksComponent */]));
EditMediaComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-editmedia',
        template: __webpack_require__("../../../../../src/app/record/editmedia.component.html"),
        styles: [__webpack_require__("../../../../../src/app/record/editlinks.component.css"), __webpack_require__("../../../../../src/app/record/editmedia.component.css")]
    })
], EditMediaComponent);

//# sourceMappingURL=editmedia.component.js.map

/***/ }),

/***/ "../../../../../src/app/record/errordialog.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 md-dialog-title>Error</h2>\n<md-dialog-content>{{ data }}</md-dialog-content>\n<md-dialog-actions>\n  <button md-button md-dialog-close><md-icon>clear</md-icon></button>\n</md-dialog-actions>\n"

/***/ }),

/***/ "../../../../../src/app/record/errordialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var ErrorDialogComponent = (function () {
    function ErrorDialogComponent(data) {
        this.data = data;
    }
    return ErrorDialogComponent;
}());
ErrorDialogComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-errordialog',
        template: __webpack_require__("../../../../../src/app/record/errordialog.component.html"),
    }),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MD_DIALOG_DATA */])),
    __metadata("design:paramtypes", [Object])
], ErrorDialogComponent);

//# sourceMappingURL=errordialog.component.js.map

/***/ }),

/***/ "../../../../../src/app/record/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__deletedialog_component__ = __webpack_require__("../../../../../src/app/record/deletedialog.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__deletedialog_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__errordialog_component__ = __webpack_require__("../../../../../src/app/record/errordialog.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__errordialog_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__record_component__ = __webpack_require__("../../../../../src/app/record/record.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_2__record_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__editlinks_component__ = __webpack_require__("../../../../../src/app/record/editlinks.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__editlinks_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__editmedia_component__ = __webpack_require__("../../../../../src/app/record/editmedia.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_4__editmedia_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__recordhelpdialog_component__ = __webpack_require__("../../../../../src/app/record/recordhelpdialog.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_5__recordhelpdialog_component__["a"]; });






//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/record/record.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".full-width-input {\n  width: 100%;\n\n}\n\n.half-width-input {\n  width: 50%;\n\n}\n\n\n.full-width-textarea {\n  width: 100%;\n}\n\n.input-group {\n  padding-bottom: 0.2em;\n}\n\ninput:-moz-read-only {\n    background-color: #ddd;\n}\n\ninput:read-only {\n    background-color: #ddd;\n}\n\n.container {\n  padding: 0.2em;\n}\n\n@media all and (min-width: 55em) {\n  .container {\n    padding: 2em;\n  }\n}\n\n\n.list-container {\n  padding-bottom: 0.5em;\n}\n\n.success-label-message {\n  font-size: 0.81em;\n  color: #777777;\n}\n\n.error-label-message {\n  font-size: 0.81em;\n  color: red;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/record/record.component.html":
/***/ (function(module, exports) {

module.exports = "\n<md-toolbar class='secondary-button-bar'>\n  <span class='fill-remaining-space'></span>\n  <button   md-raised-button color='primary'  *ngIf=\"f.form.valid\" (click)=\"save()\" mdTooltip=\"{{'record.edit.save' | translate }}\"><md-icon>save</md-icon></button>\n\n  <button   md-raised-button color='primary'  *ngIf=\"!newrecord && isAdminRole()\" (click)=\"preview()\"> <md-icon>open_in_new</md-icon></button>\n  <span class='toolbar-spacer'></span>\n  <button   md-raised-button color='primary'  *ngIf=\"!newrecord\" (click)=\"openConfirmDialog()\" mdTooltip=\"{{'record.edit.delete' | translate }}\"> <md-icon>delete</md-icon></button>\n  <span class='toolbar-spacer'></span>\n  <button   md-raised-button color='primary'  (click)='openHelpDialog()'><md-icon alt='help'>help_outline</md-icon></button>\n</md-toolbar>\n<form name='form' (ngSubmit)='f.form.valid' #f='ngForm' novalidate>\n<div class=\"container\">\n  <div>\n    <div *ngIf='responsemessage && responsemessage.error' class='error-label-message'>\n      <md-icon>cloud_off</md-icon> {{responsemessage.error}}\n    </div>\n    <div *ngIf='responsemessage && !responsemessage.error' class='success-label-message'>\n      <md-icon mdTooltip='{{responsemessage.savedate}}'>cloud_done</md-icon> {{responsemessage.since}}\n    </div>\n\n    <div *ngIf=\"current\">\n\n\n      <div *ngFor=\"let property of properties\">\n\n        <!-- multiline text edit -->\n\n        <md-input-container *ngIf=\"property.editor === 'text'\" class=\"full-width-textarea\">\n          <textarea mdInput placeholder=\"{{'field.label.' + property.name | translate }}\" rows=\"10\" cols=\"\" [(ngModel)]=\"current[property.name]\" name=\"{{property.name}}\">{{current[property.name]}}</textarea>\n        </md-input-container>\n\n\n        <!-- single line text edit -->\n        <div *ngIf=\"property.name === 'id'\">\n          <md-input-container class=\"full-width-input\" *ngIf=\"property.editor === 'line'\">\n            <input readonly mdInput placeholder=\"{{'field.label.' + property.name | translate }}\" [(ngModel)]=\"current[property.name]\" name=\"{{property.name}}\" type=\"text\">\n          </md-input-container>\n        </div>\n        <div *ngIf=\"property.name === 'title'\">\n          <md-input-container class=\"full-width-input\" *ngIf=\"property.editor === 'line'\">\n            <input (keypress)=\"generateId()\" (change)=\"generateId()\" mdInput placeholder=\"{{'field.label.' + property.name | translate }}\" [(ngModel)]=\"current[property.name]\" name=\"{{property.name}}\" type=\"text\" required>\n          </md-input-container>\n        </div>\n\n        <div *ngIf=\"property.name !== 'id' && property.name !== 'title'\">\n          <md-input-container class=\"full-width-input\" *ngIf=\"property.editor === 'line'\">\n            <input mdInput placeholder=\"{{'field.label.' + property.name | translate }}\" [(ngModel)]=\"current[property.name]\" name=\"{{property.name}}\" type=\"text\" >\n          </md-input-container>\n        </div>\n\n        <div *ngIf=\"property.editor === 'date'\">\n          <md-input-container *ngIf=\"property.editor === 'date'\">\n            <input mdInput placeholder=\"{{'field.label.' + property.name | translate }}\" [(ngModel)]=\"current[property.name]\" name=\"{{property.name}}\" type=\"date\" required>\n          </md-input-container>\n        </div>\n\n        <!-- choice list -->\n        <div *ngIf=\"property.editor === 'choice'\">\n          <md-select placeholder=\"{{'field.label.' + property.name | translate }}\" [(ngModel)]=\"current[property.name]\" name=\"{{property.name}}\">\n            <!-- list of choices from metadata -->\n            <md-option *ngFor=\"let choice of property.choices\" [value]=\"choice\">{{ choice }}</md-option>\n          </md-select>\n\n        </div>\n\n        <div *ngIf=\"!newrecord && property.editor === 'medialist' && property.name === 'media'\" class=\"list-container\">\n          <app-editmedia [type]='type' [current]='current' [attachments]='current.media' [title]='\"record.edit.media\"'></app-editmedia>\n        </div>\n        <!-- list-container -->\n\n\n\n        <div *ngIf=\"property.editor === 'imagelist' && property.name === 'images'\" class=\"list-container\">\n          <app-editlinks [type]='type' [current]='current' [attachments]='current.images' [title]='\"record.edit.images\"' [adminrole]='isAdminRole()'></app-editlinks>\n        </div>\n\n        <div *ngIf=\"property.editor === 'attachmentlist' && property.name === 'attachments'\" class=\"list-container\">\n          <app-editlinks [type]='type' [current]='current' [attachments]='current.attachments' [title]='\"record.edit.attachments\"' [adminrole]='isAdminRole()'></app-editlinks>\n        </div>\n        <!-- attachments -->\n\n\n\n      </div>\n      <!-- properties -->\n\n\n\n\n\n\n    </div>\n    <!-- current -->\n\n\n  </div>\n</div>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/record/record.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_index__ = __webpack_require__("../../../../../src/app/_services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_home__ = __webpack_require__("../../../../../src/app/home/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__deletedialog_component__ = __webpack_require__("../../../../../src/app/record/deletedialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__recordhelpdialog_component__ = __webpack_require__("../../../../../src/app/record/recordhelpdialog.component.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var RecordComponent = (function (_super) {
    __extends(RecordComponent, _super);
    function RecordComponent(contentService, authenticationService, locale, route, router, dialog, uploadService, stringUtils) {
        var _this = _super.call(this) || this;
        _this.contentService = contentService;
        _this.route = route;
        _this.router = router;
        _this.dialog = dialog;
        _this.uploadService = uploadService;
        _this.stringUtils = stringUtils;
        _this.i18n = {};
        /**
         * current type : news, calendar, ...
         */
        _this.type = '';
        /**
         * object id
         */
        _this.id = '';
        /**
         * object data
         */
        _this.current = null;
        _this.files = null;
        /**
         * response on save
         */
        _this.response = null;
        /**
        * if new record, not saved on backend
        */
        _this.newrecord = false;
        return _this;
    }
    RecordComponent.prototype.ngOnInit = function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        console.log('record.component');
        this.route.params.forEach(function (params) {
            _this.type = params['type'];
            _this.id = params['id'];
            console.log('edit:' + _this.type + ' id:' + _this.id);
            if (_this.type) {
                // read metadata of record
                _this.contentService.getMetadata(_this.type + '/index/metadata.json')
                    .subscribe(function (data) { _this.properties = data; }, function (error) { return console.log('loadMetadata ' + error); }, function () { return console.log('loadMetadata OK'); });
            }
            if (_this.id && _this.id !== 'new') {
                // read record content
                _this.contentService.getRecord(_this.type, _this.id)
                    .subscribe(function (data) {
                    _this.current = data;
                    if (_this.current) {
                        if (!_this.current.images) {
                            _this.current.images = [];
                        }
                        if (!_this.current.attachments) {
                            _this.current.attachments = [];
                        }
                        if (!_this.current.media) {
                            console.log('init media ');
                            _this.current.media = [];
                        }
                        // old date format converter. yyyyMMdd -> yyyy-MM-dd
                        if (_this.current.date) {
                            var oldDate = _this.stringUtils.parseOldDate(_this.current.date);
                            if (oldDate) {
                                _this.current.date = oldDate;
                            }
                        }
                    }
                }, function (error) { return console.error('get' + error); }, function () {
                    console.log('get complete' + JSON.stringify(_this.current));
                });
            }
            else {
                console.log('editcalendar-form empty id');
                _this.newrecord = true;
                _this.contentService.getNewRecord(_this.type + '/index/new.json')
                    .subscribe(function (data) {
                    _this.current = data;
                    if (_this.current) {
                        if (!_this.current.images) {
                            _this.current.images = [];
                        }
                        if (!_this.current.attachments) {
                            _this.current.attachments = [];
                        }
                        if (!_this.current.media) {
                            _this.current.media = [];
                        }
                    }
                }, function (error) { return console.log('getNewRecord ' + error); }, function () { return console.log('getNewRecord OK'); });
            }
        });
    };
    RecordComponent.prototype.save = function () {
        var _this = this;
        this.responsemessage = {};
        this.generateId();
        this.contentService.post(this.type, this.current)
            .subscribe(function (data) {
            _this.response = data;
        }, function (error) {
            _this.responsemessage.error = JSON.stringify(error);
        }, function () {
            // calculate diff from PHP time https://stackoverflow.com/questions/13022524/javascript-time-to-php-time
            var timestamp = Number.parseInt(_this.response.timestamp) * 1000;
            // savedate
            var savedate = new Date();
            savedate.setTime(timestamp);
            _this.responsemessage.savedate = savedate.toLocaleDateString() + ' ' + savedate.toLocaleTimeString();
            // time since save
            var diffMilli = new Date().getTime() - timestamp;
            if (diffMilli < 1000) {
                _this.responsemessage.since = '< 1s';
            }
            else {
                _this.responsemessage.since = (diffMilli / 1000).toString();
            }
            // forward to record modification page
            if (_this.newrecord) {
                _this.router.navigate(['/record', _this.type, _this.current.id]);
            }
            console.log('post complete');
        });
    };
    /**
    * Generate id from title.
    * Use case : each event is unique. Such as : 28 oct 2017 - tournament at Some City
    */
    RecordComponent.prototype.generateId = function () {
        if (this.newrecord) {
            // replace accents by US ASCII
            var newId = this.stringUtils.removeDiacritics(this.current.title);
            // remove all remaining special characters
            newId = newId.replace(/[^\w\s]/gi, '');
            // replace space by '-'
            newId = newId.replace(/\s/g, '-');
            this.current.id = newId;
        }
    };
    RecordComponent.prototype.preview = function () {
        this.generateId();
        var url = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].website + '/' + this.type + '/' + this.id;
        window.open(url, '_blank');
    };
    /**
    * delete
    */
    RecordComponent.prototype.openConfirmDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__deletedialog_component__["a" /* DeleteDialogComponent */], {
            data: this.current.title,
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log("Dialog result: " + result);
            if (result) {
                _this.delete();
            }
        });
    };
    /**
    * must click on dialog first
    */
    RecordComponent.prototype.delete = function () {
        var _this = this;
        this.contentService.delete(this.type, this.current.id)
            .subscribe(function (data) { return _this.response = JSON.stringify(data); }, function (error) { return console.error('delete ' + error); }, function () {
            // forward to record modification page
            _this.router.navigate(['/recordlist', _this.type]);
            console.log('delete complete');
        });
    };
    /**
    * help
    */
    RecordComponent.prototype.openHelpDialog = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_7__recordhelpdialog_component__["a" /* RecordHelpDialogComponent */], {
            data: '',
        });
        dialogRef.afterClosed().subscribe(function (result) { console.log('Dialog result'); });
    };
    RecordComponent.prototype.isAdminRole = function () {
        return this.hasAdminRole;
    };
    return RecordComponent;
}(__WEBPACK_IMPORTED_MODULE_4_app_home__["c" /* StandardComponent */]));
RecordComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: __webpack_require__("../../../../../src/app/record/record.component.html"),
        styles: [__webpack_require__("../../../../../src/app/record/record.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_app_services_index__["d" /* ContentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_services_index__["d" /* ContentService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_app_services_index__["c" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_services_index__["c" /* AuthenticationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_app_services_index__["e" /* LocaleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_services_index__["e" /* LocaleService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MdDialog */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3_app_services_index__["g" /* UploadService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_services_index__["g" /* UploadService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_3_app_services_index__["f" /* StringUtils */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_services_index__["f" /* StringUtils */]) === "function" && _h || Object])
], RecordComponent);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=record.component.js.map

/***/ }),

/***/ "../../../../../src/app/record/recordhelpdialog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/record/recordhelpdialog.component.html":
/***/ (function(module, exports) {

module.exports = "<!--component html goes here -->\n<h2 md-dialog-title>{{'home.help.title' | translate}}</h2>\n<!-- help content -->\n  <md-dialog-content>\n    <md-list>\n     <md-list-item>  {{'record.edit.media' | translate}} </md-list-item> {{'record.help.media' | translate}}\n     <md-list-item> <md-icon>insert_link</md-icon> {{'record.edit.attachments' | translate}} </md-list-item> {{'record.help.attachments' | translate}}\n     <md-list-item> <md-icon>insert_link</md-icon> {{'record.edit.images' | translate}} </md-list-item> {{'record.help.images' | translate}}\n    </md-list>\n\n    </md-dialog-content>\n"

/***/ }),

/***/ "../../../../../src/app/record/recordhelpdialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecordHelpDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var RecordHelpDialogComponent = (function () {
    function RecordHelpDialogComponent(data) {
        this.data = data;
    }
    return RecordHelpDialogComponent;
}());
RecordHelpDialogComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-record-help-dialog',
        template: __webpack_require__("../../../../../src/app/record/recordhelpdialog.component.html"),
        styles: [__webpack_require__("../../../../../src/app/record/recordhelpdialog.component.css")]
    }),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MD_DIALOG_DATA */])),
    __metadata("design:paramtypes", [Object])
], RecordHelpDialogComponent);

//# sourceMappingURL=recordhelpdialog.component.js.map

/***/ }),

/***/ "../../../../../src/app/recordlist/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__recordlist_component__ = __webpack_require__("../../../../../src/app/recordlist/recordlist.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__recordlist_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__recordlisthelpdialog_component__ = __webpack_require__("../../../../../src/app/recordlist/recordlisthelpdialog.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__recordlisthelpdialog_component__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/recordlist/recordlist.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".recordlist {\n  padding: 0;\n  border: 1px solid #ddd;\n}\n\n\n\n.item-title {\n  padding: 0.1em;\n  box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);\n  width: 100%;\n  white-space: pre-wrap;\n}\n\n@media all and (min-width: 55em) {\n  .recordlist {\n    padding: 2em;\n  }\n  .item-title {\n    padding: 0.5em;\n  }\n\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/recordlist/recordlist.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <md-toolbar class='secondary-button-bar'>\n    <span class='fill-remaining-space'></span>\n    <span mdTooltip='{{ \"record.list.create\" | translate }}'>\n      <a  md-raised-button color='primary' [routerLink]='[\"/record\", type ,  \"new\"]'><md-icon>add</md-icon> </a>\n    </span>\n    <span class='toolbar-spacer'></span>\n  <button md-raised-button color='primary' (click)='rebuildIndex()' ><md-icon>refresh</md-icon></button>\n  <span class='toolbar-spacer'></span>\n  <button md-raised-button color='primary' (click)='openHelpDialog()' ><md-icon alt='help'>help_outline</md-icon></button>\n</md-toolbar>\n\n\n\n  <div *ngIf='items'>\n    <div *ngFor='let item of items'>\n      <button *ngIf='item.title' md-button [routerLink]='[\"/record\", type ,  item.id]' class='item-title'>{{item.title}}</button>\n      <button *ngIf='!item.title' md-button [routerLink]='[\"/record\", type ,  item.id]'>{{item.id}}</button>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/recordlist/recordlist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecordListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__recordlisthelpdialog_component__ = __webpack_require__("../../../../../src/app/recordlist/recordlisthelpdialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_services_index__ = __webpack_require__("../../../../../src/app/_services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_shared_filters__ = __webpack_require__("../../../../../src/app/shared/filters/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_home__ = __webpack_require__("../../../../../src/app/home/index.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RecordListComponent = (function (_super) {
    __extends(RecordListComponent, _super);
    function RecordListComponent(contentService, locale, route, orderby, dialog) {
        var _this = _super.call(this) || this;
        _this.contentService = contentService;
        _this.route = route;
        _this.orderby = orderby;
        _this.dialog = dialog;
        /**
         * record data
         */
        _this.items = null;
        /**
         * current type : news, calendar, ...
         */
        _this.type = '';
        /**
         * response on rebuild
         */
        _this.response = null;
        return _this;
    }
    RecordListComponent.prototype.ngOnInit = function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        console.log('RecordListComponent ');
        this.route.params.forEach(function (params) {
            var routetype = params['type'];
            if (routetype || _this.recordtype) {
                if (routetype) {
                    _this.type = routetype;
                }
                else {
                    _this.type = _this.recordtype;
                }
                _this.contentService.getIndex(_this.type)
                    .subscribe(function (data) { return _this.items = data; }, function (error) { return console.log('getItems ' + error); }, function () {
                    console.log('getItems complete ' + _this.type + ' ' + _this.items.length);
                    // TODO generic sort by metadata
                    if (_this.items.length > 0 && _this.items[0].date) {
                        _this.orderby.transform(_this.items, 'date', 'desc');
                    }
                });
            }
        });
    };
    RecordListComponent.prototype.rebuildIndex = function () {
        var _this = this;
        this.contentService.rebuildIndex(this.type)
            .subscribe(function (data) { return _this.response = JSON.stringify(data); }, function (error) { return console.error('post' + error); }, function () { console.log('post complete'); });
    };
    /**
    * help
    */
    RecordListComponent.prototype.openHelpDialog = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__recordlisthelpdialog_component__["a" /* RecordListHelpDialogComponent */], {
            data: '',
        });
        dialogRef.afterClosed().subscribe(function (result) { console.log('Dialog result'); });
    };
    return RecordListComponent;
}(__WEBPACK_IMPORTED_MODULE_6_app_home__["c" /* StandardComponent */]));
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], RecordListComponent.prototype, "recordtype", void 0);
RecordListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-recordlist',
        template: __webpack_require__("../../../../../src/app/recordlist/recordlist.component.html"),
        styles: [__webpack_require__("../../../../../src/app/recordlist/recordlist.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_app_services_index__["d" /* ContentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_services_index__["d" /* ContentService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_app_services_index__["e" /* LocaleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_services_index__["e" /* LocaleService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5_app_shared_filters__["a" /* OrderbyPipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_app_shared_filters__["a" /* OrderbyPipe */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MdDialog */]) === "function" && _e || Object])
], RecordListComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=recordlist.component.js.map

/***/ }),

/***/ "../../../../../src/app/recordlist/recordlisthelpdialog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/recordlist/recordlisthelpdialog.component.html":
/***/ (function(module, exports) {

module.exports = "<!--component html goes here -->\n<h2 md-dialog-title>{{'home.help.title' | translate}}</h2>\n<!-- help content -->\n  <md-dialog-content>\n    <md-list>\n     <md-list-item> <md-icon>refresh</md-icon></md-list-item> {{'recordlist.help.refresh' | translate}}\n    </md-list>\n\n    </md-dialog-content>\n"

/***/ }),

/***/ "../../../../../src/app/recordlist/recordlisthelpdialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecordListHelpDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var RecordListHelpDialogComponent = (function () {
    function RecordListHelpDialogComponent(data) {
        this.data = data;
    }
    return RecordListHelpDialogComponent;
}());
RecordListHelpDialogComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-recordlist-help-dialog',
        template: __webpack_require__("../../../../../src/app/recordlist/recordlisthelpdialog.component.html"),
        styles: [__webpack_require__("../../../../../src/app/recordlist/recordlisthelpdialog.component.css")]
    }),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MD_DIALOG_DATA */])),
    __metadata("design:paramtypes", [Object])
], RecordListHelpDialogComponent);

//# sourceMappingURL=recordlisthelpdialog.component.js.map

/***/ }),

/***/ "../../../../../src/app/register/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__register_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.loginform {\n  padding: 1em;\n}\n\n\n.loginform-input {\n  width: 100%;\n}\n\n\n\n@media all and (min-width: 55em) {\n\n  .loginform-input {\n    width: 25%;\n  }\n\n  .loginform {\n    padding-left: 10em;\n    padding-right: 10em;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n\n  <form name='form' (ngSubmit)='f.form.valid && register()' #f='ngForm' novalidate class='loginform'>\n    <div [ngClass]='{ \"has-error\": f.submitted && !email.valid }'>\n\n      <md-input-container class='loginform-input'>\n        <input type='text' mdInput placeholder='Username' name='name' [(ngModel)]='model.name' #name='ngModel' required />\n      </md-input-container>\n\n\n    </div>\n\n    <div [ngClass]='{ \"has-error\": f.submitted && !email.valid }'>\n      <md-input-container class='loginform-input'>\n        <input type='text' mdInput placeholder='email' name='email' [(ngModel)]='model.email' #email='ngModel' required />\n      </md-input-container>\n\n    </div>\n    <div [ngClass]='{ \"has-error\": f.submitted && !password.valid }'>\n      <md-input-container class='loginform-input'>\n        <input type='password' mdInput placeholder='password' name='password' [(ngModel)]='model.password' #password='ngModel' required />\n      </md-input-container>\n    </div>\n\n\n\n\n\n\n    <div>\n      <button md-button [disabled]='loading'><md-icon>check_circle</md-icon></button>\n      <md-spinner *ngIf='loading' mode='indeterminate'></md-spinner>\n\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services_index__ = __webpack_require__("../../../../../src/app/_services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = (function () {
    function RegisterComponent(router, userService, alertService) {
        this.router = router;
        this.userService = userService;
        this.alertService = alertService;
        this.model = {};
        this.loading = false;
    }
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.loading = true;
        this.userService.register(this.model)
            .subscribe(function (data) {
            _this.alertService.success('Registration successful', true);
            _this.router.navigate(['/login']);
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: __webpack_require__("../../../../../src/app/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_services_index__["c" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_services_index__["c" /* AuthenticationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_app_services_index__["b" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_services_index__["b" /* AlertService */]) === "function" && _c || Object])
], RegisterComponent);

var _a, _b, _c;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/rxjs-extensions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_toPromise__);
// Observable class extensions


// Observable operators









/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
//# sourceMappingURL=rxjs-extensions.js.map

/***/ }),

/***/ "../../../../../src/app/shared/filters/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__orderby_pipe__ = __webpack_require__("../../../../../src/app/shared/filters/orderby.pipe.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__orderby_pipe__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/shared/filters/orderby.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderbyPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/*
https://angular.io/docs/ts/latest/guide/pipes.html

*/
var OrderbyPipe = (function () {
    function OrderbyPipe() {
    }
    OrderbyPipe.prototype.transform = function (items, arg, dir) {
        var direction = 'asc';
        if (dir === 'asc' || dir === 'desc') {
            direction = dir;
        }
        return items.sort(function (a, b) {
            if (a[arg] && b[arg]) {
                if (direction === 'asc') {
                    return (a[arg] > b[arg]) ? 1 : ((b[arg] > a[arg]) ? -1 : 0);
                }
                else {
                    return (a[arg] < b[arg]) ? 1 : ((b[arg] < a[arg]) ? -1 : 0);
                }
            }
            else {
                return 0;
            }
        });
    };
    return OrderbyPipe;
}());
OrderbyPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Pipe */])({
        name: 'orderby'
    }),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], OrderbyPipe);

//# sourceMappingURL=orderby.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/users/deleteuserdialog.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 md-dialog-title>{{'deletedialog.title' | translate}}</h2>\n<md-dialog-content>{{'delete.warning.1' | translate}}</md-dialog-content>\n<md-dialog-content>{{ data }}</md-dialog-content>\n<md-dialog-content>{{'delete.warning.2' | translate}}</md-dialog-content>\n<md-dialog-actions>\n  <button md-button md-dialog-close>{{'cancel.label' | translate}}</button>\n  <!-- Can optionally provide a result for the closing dialog. -->\n  <button md-button [md-dialog-close]=\"true\">{{'delete.label' | translate}}</button>\n</md-dialog-actions>\n"

/***/ }),

/***/ "../../../../../src/app/users/deleteuserdialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeleteUserDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var DeleteUserDialogComponent = (function () {
    function DeleteUserDialogComponent(data) {
        this.data = data;
    }
    return DeleteUserDialogComponent;
}());
DeleteUserDialogComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-confirmdeleteuserdialog',
        template: __webpack_require__("../../../../../src/app/users/deleteuserdialog.component.html"),
    }),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MD_DIALOG_DATA */])),
    __metadata("design:paramtypes", [Object])
], DeleteUserDialogComponent);

//# sourceMappingURL=deleteuserdialog.component.js.map

/***/ }),

/***/ "../../../../../src/app/users/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__userlist_component__ = __webpack_require__("../../../../../src/app/users/userlist.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__userlist_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__userrecord_component__ = __webpack_require__("../../../../../src/app/users/userrecord.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__userrecord_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__deleteuserdialog_component__ = __webpack_require__("../../../../../src/app/users/deleteuserdialog.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__deleteuserdialog_component__["a"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/users/userlist.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/users/userlist.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <md-toolbar>\n    <span mdTooltip='{{ \"record.list.create\" | translate }}'><button md-button [routerLink]='[\"/userrecord\", \"new\"]'><md-icon>add</md-icon> </button></span>\n\n</md-toolbar>\n\n  <div *ngIf='items'>\n    <div *ngFor='let item of items'>\n      <button *ngIf='item.name' md-button [routerLink]='[\"/userrecord\", item.email]' class='item-title'>{{item.name}}</button>\n      <button *ngIf='!item.name' md-button [routerLink]='[\"/userrecord\", item.email]'>{{item.email}}</button>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/users/userlist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_index__ = __webpack_require__("../../../../../src/app/_services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_shared_filters__ = __webpack_require__("../../../../../src/app/shared/filters/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserListComponent = (function () {
    function UserListComponent(contentService, locale, route, orderby, dialog) {
        this.contentService = contentService;
        this.route = route;
        this.orderby = orderby;
        this.dialog = dialog;
        /**
         * record data
         */
        this.items = null;
        /**
         * current type : news, calendar, ...
         */
        this.type = 'users';
        /**
         * response on rebuild
         */
        this.response = null;
    }
    UserListComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('RecordListComponent ');
        this.contentService.getIndex(this.type)
            .subscribe(function (data) { return _this.items = data; }, function (error) { return console.log('getItems ' + error); }, function () {
            console.log('getItems complete ' + _this.type + ' ' + _this.items.length);
        });
    };
    UserListComponent.prototype.rebuildIndex = function () {
        var _this = this;
        this.contentService.rebuildIndex(this.type)
            .subscribe(function (data) { return _this.response = JSON.stringify(data); }, function (error) { return console.error('post' + error); }, function () { console.log('post complete'); });
    };
    return UserListComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], UserListComponent.prototype, "recordtype", void 0);
UserListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-userlist',
        template: __webpack_require__("../../../../../src/app/users/userlist.component.html"),
        styles: [__webpack_require__("../../../../../src/app/users/userlist.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_app_services_index__["a" /* AdminService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_services_index__["a" /* AdminService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_app_services_index__["e" /* LocaleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_services_index__["e" /* LocaleService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_app_shared_filters__["a" /* OrderbyPipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_shared_filters__["a" /* OrderbyPipe */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MdDialog */]) === "function" && _e || Object])
], UserListComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=userlist.component.js.map

/***/ }),

/***/ "../../../../../src/app/users/userrecord.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".full-width-input {\n  width: 100%;\n\n}\n\n.half-width-input {\n  width: 50%;\n\n}\n\n\n.full-width-textarea {\n  width: 100%;\n}\n\n.input-group {\n  padding-bottom: 0.2em;\n}\n\ninput:-moz-read-only {\n    background-color: #ddd;\n}\n\ninput:read-only {\n    background-color: #ddd;\n}\n\n.container {\n  padding: 0.2em;\n}\n\n@media all and (min-width: 55em) {\n  .container {\n    padding: 2em;\n  }\n}\n\n\n.list-container {\n  padding-bottom: 0.5em;\n}\n\n.success-label-message {\n  font-size: 0.81em;\n  color: #777777;\n}\n\n.error-label-message {\n  font-size: 0.81em;\n  color: red;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/users/userrecord.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card>\n  <button md-button *ngIf=\"f.form.valid\" (click)=\"save()\" mdTooltip=\"{{'record.edit.save' | translate }}\"><md-icon>save</md-icon></button>\n  <button md-button *ngIf=\"!newrecord\" (click)=\"openConfirmDialog()\" mdTooltip=\"{{'record.edit.delete' | translate }}\"> <md-icon>delete</md-icon></button>\n  <button md-button (click)='openHelpDialog()'><md-icon alt='help'>help_outline</md-icon></button>\n</md-card>\n<div *ngIf='responsemessage && responsemessage.error' class='error-label-message'>\n  <md-icon>cloud_off</md-icon> {{responsemessage.error}}\n</div>\n<div *ngIf='responsemessage && !responsemessage.error' class='success-label-message'>\n  <md-icon mdTooltip='{{responsemessage.savedate}}'>cloud_done</md-icon> {{responsemessage.since}}\n</div>\n\n<form name='form' (ngSubmit)='f.form.valid' #f='ngForm' novalidate>\n  <div class=\"container\">\n\n\n\n    <div *ngIf=\"current\">\n      <div *ngIf=\"newrecord\">\n        <div *ngFor=\"let property of properties\">\n\n        <div *ngIf=\"property.name === 'email'\">\n          <md-input-container class=\"full-width-input\" *ngIf=\"property.editor === 'line'\">\n            <input mdInput placeholder=\"{{'field.label.' + property.name | translate }}\" [(ngModel)]=\"current[property.name]\" name=\"{{property.name}}\" type=\"text\">\n          </md-input-container>\n        </div>\n\n\n        <div *ngIf=\"property.name === 'name'\">\n          <md-input-container class=\"full-width-input\" *ngIf=\"property.editor === 'line'\">\n            <input mdInput placeholder=\"{{'field.label.' + property.name | translate }}\" [(ngModel)]=\"current[property.name]\" name=\"{{property.name}}\" type=\"text\">\n          </md-input-container>\n        </div>\n\n        <div *ngIf=\"property.name === 'password'\">\n          <md-input-container>\n            <input mdInput placeholder=\"{{'field.label.' + property.name | translate }}\" [(ngModel)]=\"current[property.name]\" name=\"{{property.name}}\" type=\"text\">\n          </md-input-container>\n        </div>\n      </div>\n      </div>\n\n      <div *ngIf=\"!newrecord\">\n\n        <div *ngFor=\"let property of properties\">\n\n          <div *ngIf=\"property.name === 'email'\">\n            <md-input-container class=\"full-width-input\" *ngIf=\"property.editor === 'line'\">\n              <input mdInput readonly placeholder=\"{{'field.label.' + property.name | translate }}\" [(ngModel)]=\"current[property.name]\" name=\"{{property.name}}\" type=\"text\">\n            </md-input-container>\n          </div>\n\n\n          <div *ngIf=\"property.name === 'name'\">\n            <md-input-container class=\"full-width-input\" *ngIf=\"property.editor === 'line'\">\n              <input mdInput placeholder=\"{{'field.label.' + property.name | translate }}\" [(ngModel)]=\"current[property.name]\" name=\"{{property.name}}\" type=\"text\">\n            </md-input-container>\n          </div>\n\n\n          <!-- choice list -->\n          <div *ngIf=\"property.editor === 'choice'\">\n            <md-select placeholder=\"{{'field.label.' + property.name | translate }}\" [(ngModel)]=\"current[property.name]\" name=\"{{property.name}}\">\n              <!-- list of choices from metadata -->\n              <md-option *ngFor=\"let choice of property.choices\" [value]=\"choice\">{{ choice }}</md-option>\n            </md-select>\n            <br/>\n          </div>\n\n\n          <div *ngIf=\"property.name === 'password'\">\n            <md-input-container>\n              <input mdInput placeholder=\"{{'field.label.' + property.name | translate }}\" [(ngModel)]=\"current[property.name]\" name=\"{{property.name}}\" type=\"text\">\n            </md-input-container>\n          </div>\n\n        </div>\n      </div>\n      <!-- properties -->\n\n    </div>\n    <!-- current -->\n\n\n  </div>\n  <!-- container -->\n\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/users/userrecord.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserRecordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_index__ = __webpack_require__("../../../../../src/app/_services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_home__ = __webpack_require__("../../../../../src/app/home/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__deleteuserdialog_component__ = __webpack_require__("../../../../../src/app/users/deleteuserdialog.component.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserRecordComponent = (function (_super) {
    __extends(UserRecordComponent, _super);
    function UserRecordComponent(contentService, authenticationService, locale, route, router, dialog, uploadService, stringUtils) {
        var _this = _super.call(this) || this;
        _this.contentService = contentService;
        _this.route = route;
        _this.router = router;
        _this.dialog = dialog;
        _this.uploadService = uploadService;
        _this.stringUtils = stringUtils;
        _this.i18n = {};
        /**
         * current type : news, calendar, ...
         */
        _this.type = 'users';
        /**
         * object id
         */
        _this.id = '';
        /**
         * object data
         */
        _this.current = null;
        _this.files = null;
        /**
         * response on save
         */
        _this.response = null;
        /**
        * if new record, not saved on backend
        */
        _this.newrecord = false;
        return _this;
    }
    UserRecordComponent.prototype.ngOnInit = function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        console.log('record.component');
        this.route.params.forEach(function (params) {
            _this.id = params['id'];
            console.log('edit:' + _this.type + ' id:' + _this.id);
            if (_this.type) {
                // read metadata of record
                _this.contentService.getMetadata(_this.type + '/index/metadata.json')
                    .subscribe(function (data) { _this.properties = data; }, function (error) { return console.log('loadMetadata ' + error); }, function () { return console.log('loadMetadata OK'); });
            }
            if (_this.id && _this.id !== 'new') {
                // read record content
                _this.contentService.getRecord(_this.type, _this.id)
                    .subscribe(function (data) {
                    _this.current = data;
                }, function (error) { return console.error('get' + error); }, function () {
                    console.log('get complete' + JSON.stringify(_this.current));
                });
            }
            else {
                console.log('editcalendar-form empty id');
                _this.newrecord = true;
                _this.contentService.getNewRecord(_this.type + '/index/new.json')
                    .subscribe(function (data) {
                    _this.current = data;
                }, function (error) { return console.log('getNewRecord ' + error); }, function () { return console.log('getNewRecord OK'); });
            }
        });
    };
    UserRecordComponent.prototype.save = function () {
        var _this = this;
        this.responsemessage = {};
        if (this.newrecord) {
            this.contentService.postUser(this.type, this.current)
                .subscribe(function (data) {
                _this.response = data;
            }, function (error) {
                _this.responsemessage.error = error;
                console.error('post' + error);
            }, function () {
                // calculate diff from PHP time https://stackoverflow.com/questions/13022524/javascript-time-to-php-time
                var timestamp = Number.parseInt(_this.response.timestamp) * 1000;
                // savedate
                var savedate = new Date();
                savedate.setTime(timestamp);
                _this.responsemessage.savedate = savedate.toLocaleDateString() + ' ' + savedate.toLocaleTimeString();
                // time since save
                var diffMilli = new Date().getTime() - timestamp;
                if (diffMilli < 1000) {
                    _this.responsemessage.since = '< 1s';
                }
                else {
                    _this.responsemessage.since = (diffMilli / 1000).toString();
                }
                // forward to record modification page
                // forward to record modification page
                if (_this.newrecord) {
                    _this.router.navigate(['/userrecord', _this.current.email]);
                }
                console.log('post complete');
            });
        }
        else {
            this.contentService.updateUser(this.type, this.current)
                .subscribe(function (data) {
                _this.response = data;
            }, function (error) {
                _this.responsemessage.error = error;
                console.error('post' + error);
            }, function () {
                // calculate diff from PHP time https://stackoverflow.com/questions/13022524/javascript-time-to-php-time
                var timestamp = Number.parseInt(_this.response.timestamp) * 1000;
                // savedate
                var savedate = new Date();
                savedate.setTime(timestamp);
                _this.responsemessage.savedate = savedate.toLocaleDateString() + ' ' + savedate.toLocaleTimeString();
                // time since save
                var diffMilli = new Date().getTime() - timestamp;
                if (diffMilli < 1000) {
                    _this.responsemessage.since = '< 1s';
                }
                else {
                    _this.responsemessage.since = (diffMilli / 1000).toString();
                }
                // forward to record modification page
                if (_this.newrecord) {
                    _this.router.navigate(['/userrecord', _this.current.email]);
                }
                console.log('post complete');
            });
        }
    };
    /**
    * delete
    */
    UserRecordComponent.prototype.openConfirmDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__deleteuserdialog_component__["a" /* DeleteUserDialogComponent */], {
            data: this.current.title,
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log("Dialog result: " + result);
            if (result) {
                _this.delete();
            }
        });
    };
    /**
    * must click on dialog first
    */
    UserRecordComponent.prototype.delete = function () {
        var _this = this;
        this.contentService.delete(this.type, this.current.id)
            .subscribe(function (data) { return _this.response = JSON.stringify(data); }, function (error) { return console.error('delete ' + error); }, function () {
            // forward to record modification page
            _this.router.navigate(['/recordlist', _this.type]);
            console.log('delete complete');
        });
    };
    /**
    * help
    */
    UserRecordComponent.prototype.openHelpDialog = function () {
        console.log('openHelpDialog');
    };
    UserRecordComponent.prototype.isAdminRole = function () {
        return this.hasAdminRole;
    };
    return UserRecordComponent;
}(__WEBPACK_IMPORTED_MODULE_4_app_home__["c" /* StandardComponent */]));
UserRecordComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: __webpack_require__("../../../../../src/app/users/userrecord.component.html"),
        styles: [__webpack_require__("../../../../../src/app/users/userrecord.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_app_services_index__["a" /* AdminService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_services_index__["a" /* AdminService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_app_services_index__["c" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_services_index__["c" /* AuthenticationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_app_services_index__["e" /* LocaleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_services_index__["e" /* LocaleService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MdDialog */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3_app_services_index__["g" /* UploadService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_services_index__["g" /* UploadService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_3_app_services_index__["f" /* StringUtils */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_services_index__["f" /* StringUtils */]) === "function" && _h || Object])
], UserRecordComponent);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=userrecord.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    server: '',
    website: 'https://olivierb29.github.io/mobilecms-demo/#',
    defaultlang: 'en',
    usemockbackend: true,
    api: '/cmsapi/v1',
    adminapi: '/adminapi/v1',
    fileapi: '/fileapi/v1',
    authapi: '/authapi/v1'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map