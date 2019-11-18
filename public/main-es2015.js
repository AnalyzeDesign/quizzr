(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-post/add-post.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-post/add-post.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card card-body\">\n  <h5><a href=\"#\" data-toggle=\"collapse\" data-target=\"#movieSearchCollapse\">Like Movies? Search the New York Times capsule movie reviews by movie title to help you refresh your memory when creating or taking a quiz!</a></h5>\n  <div class=\"collapse\" id=\"movieSearchCollapse\">\n    <form class=\"form-inline\">\n      <div class=\"form-group mb-2\">\n        <label for=\"movieSearchTerms\" class=\"sr-only\">Enter movie title</label>\n        <input type=\"text\" class=\"form-control\" id=\"movieSearchTerms\" placeholder=\"Enter movie title\">\n      </div>\n      <button type=\"submit\" class=\"btn btn-primary mb-2\" id=\"jqueryMovieSearchSubmit\">Search</button>\n    </form>\n    <h5>Search result:</h5>\n    <div id=\"movieSearchResults\"></div>\n  </div>\n</div>\n<p></p>\n\n<div class=\"card card-body\">\n<p>\n  <button #addPost class=\"btn btn-primary\" type=\"button\" data-toggle=\"collapse\" data-target=\"#showNewQuizForm\" aria-expanded=\"false\" aria-controls=\"showNewQuizFormBtn\" id=\"#showNewQuizForm\">\n    Create a quiz!\n  </button>\n</p>\n<div class=\"collapse\" id=\"showNewQuizForm\">\n\n    <form id=\"newQuizForm\">\n        <div class=\"form-group\">\n            <label for=\"newQuizTitle\">Quiz Title</label>\n            <input name=\"newQuizTitle\" type=\"text\" [(ngModel)]=\"post.title\" class=\"form-control\" id=\"newQuizTitle\" placeholder=\"Enter title\">\n\n        </div>\n        <div class=\"form-group\">\n            <label for=\"newQuizDescription\">Quiz Description</label>\n            <textarea name=\"newQuizDescription\" [(ngModel)]=\"post.description\" class=\"form-control\" id=\"newQuizDescription\" placeholder=\"Description\">\n            </textarea>\n        </div>\n\n        <div class=\"form-group container\">\n          <div class=\"row\">\n            <div class=\"col-sm\">\n              <label for=\"question_one\">Question One</label>\n              <textarea name=\"question_one\" [(ngModel)]=\"post.question_one\" class=\"form-control\" id=\"question_one\" placeholder=\"Question goes here\">\n              </textarea>\n            </div>\n            <div class=\"col-sm\">\n              <label for=\"answer_one\">Answer One</label>\n              <textarea name=\"answer_one\" [(ngModel)]=\"post.answer_one\" class=\"form-control\" id=\"answer_one\" placeholder=\"Answer goes here\">\n              </textarea>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"form-group container\">\n          <div class=\"row\">\n            <div class=\"col-sm\">\n              <label for=\"question_two\">Question Two (optional)</label>\n              <textarea name=\"question_two\" [(ngModel)]=\"post.question_two\" class=\"form-control\" id=\"question_two\" placeholder=\"Question goes here\">\n              </textarea>\n            </div>\n            <div class=\"col-sm\">\n              <label for=\"answer_two\">Answer Two</label>\n              <textarea name=\"answer_two\" [(ngModel)]=\"post.answer_two\" class=\"form-control\" id=\"answer_two\" placeholder=\"Answer goes here\">\n              </textarea>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"form-group container\">\n          <div class=\"row\">\n            <div class=\"col-sm\">\n              <label for=\"question_three\">Question Three (optional)</label>\n              <textarea name=\"question_three\" [(ngModel)]=\"post.question_three\" class=\"form-control\" id=\"question_three\" placeholder=\"Question goes here\">\n              </textarea>\n            </div>\n            <div class=\"col-sm\">\n              <label for=\"answer_three\">Answer Three (optional)</label>\n              <textarea name=\"answer_three\" [(ngModel)]=\"post.answer_three\" class=\"form-control\" id=\"answer_three\" placeholder=\"Answer goes here\">\n              </textarea>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"form-group container\">\n          <div class=\"row\">\n            <div class=\"col-sm\">\n              <label for=\"question_four\">Question Four (optional)</label>\n              <textarea name=\"question_four\" [(ngModel)]=\"post.question_four\" class=\"form-control\" id=\"question_four\" placeholder=\"Question goes here\">\n              </textarea>\n            </div>\n            <div class=\"col-sm\">\n              <label for=\"answer_four\">Answer Four (optional)</label>\n              <textarea name=\"answer_four\" [(ngModel)]=\"post.answer_four\" class=\"form-control\" id=\"answer_four\" placeholder=\"Answer goes here\">\n              </textarea>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"form-group container\">\n          <div class=\"row\">\n            <div class=\"col-sm\">\n              <label for=\"question_five\">Question Five (optional)</label>\n              <textarea name=\"question_five\" [(ngModel)]=\"post.question_five\" class=\"form-control\" id=\"question_five\" placeholder=\"Question goes here\">\n              </textarea>\n            </div>\n            <div class=\"col-sm\">\n              <label for=\"answer_five\">Answer Five (optional)</label>\n              <textarea name=\"answer_five\" [(ngModel)]=\"post.answer_five\" class=\"form-control\" id=\"answer_five\" placeholder=\"Answer goes here\">\n              </textarea>\n            </div>\n          </div>\n        </div>\n\n        <button (click)=\"addPostBtnClick()\" type=\"button\" class=\"btn btn-primary\">Add this quiz</button>\n      </form>\n\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\n<div class=\"container main-app-container\">\n  <flash-messages></flash-messages>\n  <router-outlet></router-outlet>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"user\">\n  <h1 class=\"page-header\">{{user.name}} | Quiz Dashboard</h1>\n\n\n  <app-add-post></app-add-post>\n  <p></p>\n  <h3>Quizzr Users' Quizzes</h3>\n  <app-show-post></app-show-post>\n\n\n</div>\n<div *ngIf=\"!user\">\n  You must be a registered and logged in user to view this page.\n  <a class=\"btn btn-outline-primary btn-sm\" [routerLink]=\"['/register']\">Register</a>\n  <a class=\"btn btn-outline-primary btn-sm\" [routerLink]=\"['/login']\">Login</a>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"jumbotron text-center\">\n  <h1>Quizzr!</h1>\n\n  <div>\n    <a class=\"btn btn-outline-primary btn-sm\" [routerLink]=\"['/dashboard']\">Dashboard</a>\n    <a class=\"btn btn-outline-primary btn-sm\" [routerLink]=\"['/register']\">Register</a>\n    <a class=\"btn btn-outline-primary btn-sm\" [routerLink]=\"['/login']\">Login</a>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-sm\">\n    <h3>Create a quiz!</h3>\n    <p>Go here to view all current quizzes and create new ones!\n    <a class=\"btn btn-outline-primary btn-sm\" [routerLink]=\"['/dashboard']\">Dashboard</a></p>\n  </div>\n  <div class=\"col-sm\">\n    <h3>Share with your friends!</h3>\n    <p>Coming soon! Share your quizzes with your friends exclusively!\n    <a class=\"btn btn-outline-primary btn-sm\" [routerLink]=\"['/profile']\">Profile</a></p>\n  </div>\n  <div class=\"col-sm\">\n    <h3>Reminders</h3>\n    <p>Coming soon! Set reminders that will message you about your need to study! <a class=\"btn btn-outline-primary btn-sm\" [routerLink]=\"['/register']\">Register</a></p>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 class=\"page-header\">Login</h1>\n<form (submit)=\"onLoginSubmit()\">\n  <div class=\"form-group\">\n    <label>Username</label>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\" name=\"username\">\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Login\">\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" href=\"#\">Quizzr</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarColor02\" aria-controls=\"navbarColor02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarColor02\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n        <a class=\"nav-link\" [routerLink]=\"['/']\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n        <a class=\"nav-link\" [routerLink]=\"['/login']\">Login</a>\n      </li>\n      <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n        <a class=\"nav-link\" [routerLink]=\"['/dashboard']\">Dashboard</a>\n      </li>\n      <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n        <a class=\"nav-link\" [routerLink]=\"['/profile']\">Profile</a>\n      </li>\n      <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n        <a class=\"nav-link\" [routerLink]=\"['/register']\">Register</a>\n      </li>\n      <li>\n        <a class=\"nav-link\" (click)=\"onLogoutClick()\" href=\"#\">Logout</a>\n      </li>\n    </ul>\n\n  </div>\n</nav>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"user\">\n  <h1 class=\"page-header\">{{user.name}}</h1>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">Username: {{user.username}}</li>\n    <li class=\"list-group-item\">Email: {{user.email}}</li>\n  </ul>\n</div>\n<div *ngIf=\"!user\">\n  You must be a registered and logged in user to view this page.\n  <a class=\"btn btn-outline-primary btn-sm\" [routerLink]=\"['/register']\">Register</a>\n  <a class=\"btn btn-outline-primary btn-sm\" [routerLink]=\"['/login']\">Login</a>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 class=\"page-header\">Register</h1>\n<form (submit)=\"onRegisterSubmit()\">\n  <div class=\"form-group\">\n    <label>Name</label>\n    <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Username</label>\n    <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Email</label>\n    <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"text\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\n  </div>\n\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/show-post/show-post.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/show-post/show-post.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"list-group quizzesList\">\n    <div *ngFor=\"let post of posts\" href=\"#\" class=\"list-group-item list-group-item-action flex-column align-items-start\">\n      <div class=\"displayQuiz\">\n        <div class=\"d-flex w-100 justify-content-between\">\n            <h5 class=\"mb-1 postQuizTitle\">{{post.title}}</h5>\n        </div>\n        <p class=\"mb-1\">{{post.description}}</p>\n        <div class=\"questions\">\n          <h5>Questions</h5>\n          <ol class=\"questionsList\">\n\n            <li class=\"questionItem\">\n              <div>{{post.question_one}}\n                <button class=\"btn btn-link\" type=\"button\" data-toggle=\"collapse\" data-target=\"#cntnr_answer_one\" aria-expanded=\"false\" aria-controls=\"collapseExample\">\n                 Show Answer\n                </button>\n               </div>\n               <div class=\"collapse\" id=\"cntnr_answer_one\">\n                 <div class=\"card card-body\">{{post.answer_one}}</div>\n               </div>\n            </li>\n\n            <li class=\"questionItem\" *ngIf=\"post.question_two\">\n              <div>{{post.question_two}}\n                <button class=\"btn btn-link\" type=\"button\" data-toggle=\"collapse\" data-target=\"#cntnr_answer_two\" aria-expanded=\"false\" aria-controls=\"collapseExample\">\n                 Show Answer\n                </button>\n               </div>\n               <div class=\"collapse\" id=\"cntnr_answer_two\">\n                 <div class=\"card card-body\">{{post.answer_two}}</div>\n              </div>\n            </li>\n\n            <li class=\"questionItem\" *ngIf=\"post.question_three\">\n              <div>{{post.question_three}}\n                <button class=\"btn btn-link\" type=\"button\" data-toggle=\"collapse\" data-target=\"#cntnr_answer_three\" aria-expanded=\"false\" aria-controls=\"collapseExample\">\n                 Show Answer\n                </button>\n               </div>\n               <div class=\"collapse\" id=\"cntnr_answer_three\">\n                 <div class=\"card card-body\">{{post.answer_three}}</div>\n              </div>\n            </li>\n\n            <li class=\"questionItem\" *ngIf=\"post.question_four\">\n              <div>{{post.question_four}}\n                <button class=\"btn btn-link\" type=\"button\" data-toggle=\"collapse\" data-target=\"#cntnr_answer_four\" aria-expanded=\"false\" aria-controls=\"collapseExample\">\n                 Show Answer\n                </button>\n               </div>\n               <div class=\"collapse\" id=\"cntnr_answer_four\">\n                 <div class=\"card card-body\">{{post.answer_four}}</div>\n              </div>\n            </li>\n\n            <li class=\"questionItem\" *ngIf=\"post.question_five\">\n              <div>{{post.question_five}}\n                <button class=\"btn btn-link\" type=\"button\" data-toggle=\"collapse\" data-target=\"#cntnr_answer_five\" aria-expanded=\"false\" aria-controls=\"collapseExample\">\n                 Show Answer\n                </button>\n               </div>\n               <div class=\"collapse\" id=\"cntnr_answer_five\">\n                 <div class=\"card card-body\">{{post.answer_five}}</div>\n              </div>\n            </li>\n\n\n          </ol>\n         </div>\n        </div>\n\n        <div class=\"float-right\">\n           <i title=\"Edit\" class=\"fas fa-edit editPostIconBtn\" (click)=\"editPost(post)\" aria-hidden=\"true\"></i>&nbsp;&nbsp;\n           <i (click)=\"setDelete(post)\" data-toggle=\"modal\" data-target=\"#deleteModal\" title=\"Delete\" class=\"fas fa-trash-alt deletePostIconBtn\" aria-hidden=\"true\"></i>\n        </div>\n\n    </div>\n</div>\n\n<div class=\"modal fade\" id=\"deleteModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"deleteModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"deleteModalLabel\">Delete Quiz</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        Are you sure you want to delete this quiz?\n      </div>\n      <div class=\"modal-footer\">\n        <button #closeBtn (click)=\"unsetDelete()\" type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancel</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"deletePost(post)\" data-toggle=\"modal\" data-target=\"#deleteModal\" aria-hidden=\"true\">Delete</button>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/add-post.service.ts":
/*!*************************************!*\
  !*** ./src/app/add-post.service.ts ***!
  \*************************************/
/*! exports provided: AddPostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPostService", function() { return AddPostService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let AddPostService = class AddPostService {
    constructor(http) {
        this.http = http;
    }
    addPost(post) {
        return this.http.post('/api/post/createPost', {
            title: post.title,
            description: post.description,
            question_one: post.question_one,
            answer_one: post.answer_one,
            question_two: post.question_two,
            answer_two: post.answer_two,
            question_three: post.question_three,
            answer_three: post.answer_three,
            question_four: post.question_four,
            answer_four: post.answer_four,
            question_five: post.question_five,
            answer_five: post.answer_five
        });
    }
    updatePost(post) {
        return this.http.post('/api/post/updatePost', {
            id: post._id,
            title: post.title,
            description: post.description,
            question_one: post.question_one,
            answer_one: post.answer_one,
            question_two: post.question_two,
            answer_two: post.answer_two,
            question_three: post.question_three,
            answer_three: post.answer_three,
            question_four: post.question_four,
            answer_four: post.answer_four,
            question_five: post.question_five,
            answer_five: post.answer_five
        });
    }
};
AddPostService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AddPostService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AddPostService);



/***/ }),

/***/ "./src/app/add-post/add-post.component.scss":
/*!**************************************************!*\
  !*** ./src/app/add-post/add-post.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1wb3N0L2FkZC1wb3N0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/add-post/add-post.component.ts":
/*!************************************************!*\
  !*** ./src/app/add-post/add-post.component.ts ***!
  \************************************************/
/*! exports provided: AddPostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPostComponent", function() { return AddPostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_post_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/post.model */ "./src/app/models/post.model.ts");
/* harmony import */ var _add_post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../add-post.service */ "./src/app/add-post.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common.service */ "./src/app/common.service.ts");







let AddPostComponent = class AddPostComponent {
    constructor(addPostService, flashMsg, commonService) {
        this.addPostService = addPostService;
        this.flashMsg = flashMsg;
        this.commonService = commonService;
        this.post = new _models_post_model__WEBPACK_IMPORTED_MODULE_2__["Post"]();
        this.commonService.postEdit_Observable.subscribe(res => {
            this.addBtn.nativeElement.click();
            // jquery: swap out current quiz-post template with quiz-post edit template:
            this.post = this.commonService.post_to_be_edited;
        });
    }
    ngOnInit() {
        this.commonService.postEdit_Observable.subscribe(res => {
            this.post = this.commonService.post_to_be_edited;
            jquery__WEBPACK_IMPORTED_MODULE_5__('html, body').animate({
                scrollTop: jquery__WEBPACK_IMPORTED_MODULE_5__(".navbar").offset().top
            }, 1000);
        });
        jquery__WEBPACK_IMPORTED_MODULE_5__('#jqueryMovieSearchSubmit').click(function (e) {
            let qry = jquery__WEBPACK_IMPORTED_MODULE_5__('#movieSearchTerms').val();
            let jquri = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=' + qry + '&api-key=tVMze8krMOMw8r3UibJbiZC1rqx9c7hd';
            jquery__WEBPACK_IMPORTED_MODULE_5__["ajax"]({
                url: jquri,
                type: "GET",
                success: function (data) {
                    console.log(data);
                    if (data.num_results === 0) {
                        jquery__WEBPACK_IMPORTED_MODULE_5__('#movieSearchResults').html('No results, sorry.');
                    }
                    else {
                        let output = "<ul>";
                        for (let i in data.results) {
                            output += "<li>" + data.results[i].display_title + ":  " + data.results[i].summary_short + "</li>";
                        }
                        output += "</ul>";
                        jquery__WEBPACK_IMPORTED_MODULE_5__('#movieSearchResults').html(output);
                    }
                }
            });
            e.preventDefault();
        });
    }
    addPostBtnClick() {
        if (this.post.title && this.post.description && this.post.question_one && this.post.answer_one) {
            if (this.post._id) {
                // if _id already exists, update the existing post:
                this.addPostService.updatePost(this.post).subscribe(res => {
                    this.commonService.notifyPostAddition();
                    jquery__WEBPACK_IMPORTED_MODULE_5__('#newQuizForm')[0].reset();
                    this.addBtn.nativeElement.click();
                    this.flashMsg.show('Quiz edited!', { cssClass: 'alert-success', timeout: 5000 });
                    jquery__WEBPACK_IMPORTED_MODULE_5__('html, body').animate({
                        scrollTop: jquery__WEBPACK_IMPORTED_MODULE_5__(".navbar").offset().top
                    }, 1000);
                });
            }
            else {
                // if _id doesn't already exist, add a new post:
                this.addPostService.addPost(this.post).subscribe(res => {
                    this.commonService.notifyPostAddition();
                    jquery__WEBPACK_IMPORTED_MODULE_5__('#newQuizForm')[0].reset();
                    this.addBtn.nativeElement.click();
                    jquery__WEBPACK_IMPORTED_MODULE_5__('html, body').animate({
                        scrollTop: jquery__WEBPACK_IMPORTED_MODULE_5__(".navbar").offset().top
                    }, 1000);
                    this.flashMsg.show('New Quiz added!', { cssClass: 'alert-success', timeout: 5000 });
                    jquery__WEBPACK_IMPORTED_MODULE_5__('html, body').animate({
                        scrollTop: jquery__WEBPACK_IMPORTED_MODULE_5__(".navbar").offset().top
                    }, 1000);
                });
            }
        }
        else {
            this.flashMsg.show('Quiz requires 1) Title 2) Description 3) One question and answer', { cssClass: 'alert-danger', timeout: 5000 });
            jquery__WEBPACK_IMPORTED_MODULE_5__('html, body').animate({
                scrollTop: jquery__WEBPACK_IMPORTED_MODULE_5__(".navbar").offset().top
            }, 1000);
        }
    }
};
AddPostComponent.ctorParameters = () => [
    { type: _add_post_service__WEBPACK_IMPORTED_MODULE_3__["AddPostService"] },
    { type: angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"] },
    { type: _common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('addPost', { static: true })
], AddPostComponent.prototype, "addBtn", void 0);
AddPostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-post',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-post.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-post/add-post.component.html")).default,
        providers: [_add_post_service__WEBPACK_IMPORTED_MODULE_3__["AddPostService"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-post.component.scss */ "./src/app/add-post/add-post.component.scss")).default]
    })
], AddPostComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");








const routes = [
    /*
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
    */
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]
    },
    {
        path: 'register',
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"]
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    },
    {
        path: 'dashboard',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"]
    },
    {
        path: 'profile',
        component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main-app-container {\n  padding-top: 1.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iL0RvY3VtZW50cy9jbGFzc2VzL3V0Ym9vdGNhbXAvbWVhbi1zdGFjay9xdWl6enItYXBwLXdpdGgtYXV0aC9hbmd1bGFyLXNyYy9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWFwcC1jb250YWluZXIge1xuICBwYWRkaW5nLXRvcDoxLjVlbTtcbn1cbiIsIi5tYWluLWFwcC1jb250YWluZXIge1xuICBwYWRkaW5nLXRvcDogMS41ZW07XG59Il19 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'angular-src';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _validate_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./validate.service */ "./src/app/validate.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _show_post_show_post_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./show-post/show-post.component */ "./src/app/show-post/show-post.component.ts");
/* harmony import */ var _add_post_add_post_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./add-post/add-post.component */ "./src/app/add-post/add-post.component.ts");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./common.service */ "./src/app/common.service.ts");



















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
            _register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
            _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["DashboardComponent"],
            _profile_profile_component__WEBPACK_IMPORTED_MODULE_12__["ProfileComponent"],
            _show_post_show_post_component__WEBPACK_IMPORTED_MODULE_16__["ShowPostComponent"],
            _add_post_add_post_component__WEBPACK_IMPORTED_MODULE_17__["AddPostComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_14__["FlashMessagesModule"].forRoot()
        ],
        providers: [
            _validate_service__WEBPACK_IMPORTED_MODULE_13__["ValidateService"],
            _auth_service__WEBPACK_IMPORTED_MODULE_15__["AuthService"],
            _common_service__WEBPACK_IMPORTED_MODULE_18__["CommonService"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let AuthService = class AuthService {
    // for use with registerUser, etc:
    //localUrl: string = 'http://localhost:3000/users/register';
    //herokuUrl: string = 'users/register';
    constructor(http) {
        this.http = http;
    } // , private jwtHelperService: JwtHelperService
    registerUser(user) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/register', user, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(data => data));
    }
    authenticateUser(user) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/authenticate', user, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(data => data));
    }
    // getProfile(){
    //   let headers = new HttpHeaders();
    //   headers.append('Content-Type', 'application/json');
    //   this.loadToken();
    //   console.log(this.authToken);
    //   headers.append('Authorization', this.authToken);
    //   return this.http.get(
    //     'http://localhost:3000/users/profile', {headers: headers})
    //     .pipe(map(data => data));
    // }
    getProfile() {
        this.loadToken();
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Authorization', this.authToken).append('Content-Type', 'application/json');
        return this.http.get('users/profile', { headers: headers });
    }
    storeUserData(token, user) {
        localStorage.setItem('id_token', token); // angular-jwt should look for this name
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    }
    loadToken() {
        // fetch from localStorage
        const token = localStorage.getItem('id_token');
        this.authToken = token;
    }
    // loggedIn(){
    //   return tokenNotExpired();
    // }
    // loggedIn(){
    //
    //  if (localStorage.id_token == undefined ){
    //     console.log('Hello');
    //     return true;
    //  } else {
    //    console.log('Goodbye');
    //    const helper = new JwtHelperService();
    //    console.log(helper.isTokenExpired(localStorage.id_token));
    //    return helper.isTokenExpired(localStorage.id_token); // other people are putting 'id_token'' here but it didn't work for me so i just put the localStorage item
    //    }
    // }
    logout() {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "./src/app/common.service.ts":
/*!***********************************!*\
  !*** ./src/app/common.service.ts ***!
  \***********************************/
/*! exports provided: CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _models_post_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/post.model */ "./src/app/models/post.model.ts");




let CommonService = class CommonService {
    constructor() {
        // watching these:
        // post added:
        this.postAdded_Observable = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        // post edited:
        this.postEdit_Observable = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.post_to_be_edited = new _models_post_model__WEBPACK_IMPORTED_MODULE_3__["Post"]();
    }
    setPostToEdit(post) {
        this.post_to_be_edited = post;
        this.notifyPostEdit();
    }
    notifyPostEdit() {
        this.postEdit_Observable.next();
    }
    notifyPostAddition() {
        this.postAdded_Observable.next();
    }
};
CommonService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CommonService);

/*
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from './models/post.model';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  public postAdded_Observable = new Subject();

  public postEdit_Observable = new Subject();

  public post_to_be_edited;

  constructor() {
    this.post_to_be_edited = new Post();
  }

  notifyPostAddition() {
    this.postAdded_Observable.next();
  }

  notifyPostEdit(){
    this.postEdit_Observable.next();
  }

  setPostToEdit(post: Post){
    this.post_to_be_edited = post;
    this.notifyPostEdit();
  }



}

*/


/***/ }),

/***/ "./src/app/dashboard/dashboard.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");



let DashboardComponent = class DashboardComponent {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() {
        this.authService.getProfile().subscribe(profile => {
            this.user = profile.user;
        }, err => {
            console.log(err);
            return false;
        });
    }
};
DashboardComponent.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/dashboard/dashboard.component.scss")).default]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);





let LoginComponent = class LoginComponent {
    constructor(flashMsg, authService, router) {
        this.flashMsg = flashMsg;
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() {
    }
    onLoginSubmit() {
        const user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(data => {
            console.log("data", data);
            if (data.success) {
                this.authService.storeUserData(data.token, data.user);
                this.flashMsg.show('You are now logged in', { cssClass: 'alert-success', timeout: 5000 });
                this.router.navigate(['dashboard']);
            }
            else {
                this.flashMsg.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
                this.router.navigate(['login']);
            }
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/models/post.model.ts":
/*!**************************************!*\
  !*** ./src/app/models/post.model.ts ***!
  \**************************************/
/*! exports provided: Post */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Post", function() { return Post; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Post {
    constructor() {
        this._id = '';
        this.title = '';
        this.description = '';
        this.question_one = '';
        this.answer_one = '';
        this.question_two = '';
        this.answer_two = '';
        this.question_three = '';
        this.answer_three = '';
        this.question_four = '';
        this.answer_four = '';
        this.question_five = '';
        this.answer_five = '';
    }
}


/***/ }),

/***/ "./src/app/navbar/navbar.component.scss":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);





let NavbarComponent = class NavbarComponent {
    constructor(flashMsg, authService, router) {
        this.flashMsg = flashMsg;
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() {
    }
    onLogoutClick() {
        this.authService.logout();
        this.flashMsg.show('You are now logged out.', { cssClass: 'alert-success', timeout: 3000 });
        this.router.navigate(['/login']);
        return false;
    }
};
NavbarComponent.ctorParameters = () => [
    { type: angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navbar.component.scss */ "./src/app/navbar/navbar.component.scss")).default]
    })
], NavbarComponent);



/***/ }),

/***/ "./src/app/profile/profile.component.scss":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");



let ProfileComponent = class ProfileComponent {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() {
        this.authService.getProfile().subscribe(profile => {
            this.user = profile.user;
        }, err => {
            console.log(err);
            return false;
        });
    }
};
ProfileComponent.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.component.scss */ "./src/app/profile/profile.component.scss")).default]
    })
], ProfileComponent);



/***/ }),

/***/ "./src/app/register/register.component.scss":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _validate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../validate.service */ "./src/app/validate.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let RegisterComponent = class RegisterComponent {
    constructor(validateService, flashMsg, authService, router) {
        this.validateService = validateService;
        this.flashMsg = flashMsg;
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() {
    }
    onRegisterSubmit() {
        const user = {
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.password
        };
        // Required Fields
        if (!this.validateService.validateRegister(user)) {
            this.flashMsg.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Valid email format
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMsg.show('Please enter a valid email', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Register user
        this.authService.registerUser(user).subscribe(data => {
            if (data["success"] === true) { //data.success){
                this.flashMsg.show('You are now registered and can log in', { cssClass: 'alert-success', timeout: 3000 });
                console.log('data', data);
                this.router.navigate(['/login']);
            }
            else {
                this.flashMsg.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
                this.router.navigate(['/register']);
            }
        });
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _validate_service__WEBPACK_IMPORTED_MODULE_2__["ValidateService"] },
    { type: angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register.component.scss */ "./src/app/register/register.component.scss")).default]
    })
], RegisterComponent);



/***/ }),

/***/ "./src/app/show-post.service.ts":
/*!**************************************!*\
  !*** ./src/app/show-post.service.ts ***!
  \**************************************/
/*! exports provided: ShowPostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowPostService", function() { return ShowPostService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let ShowPostService = class ShowPostService {
    constructor(http) {
        this.http = http;
    }
    getAllPost() {
        return this.http.post('/api/post/getAllPost', {});
    }
    deletePost(id) {
        return this.http.post('/api/post/deletePost', { id: id });
    }
};
ShowPostService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ShowPostService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ShowPostService);



/***/ }),

/***/ "./src/app/show-post/show-post.component.scss":
/*!****************************************************!*\
  !*** ./src/app/show-post/show-post.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div.questions {\n  padding-top: 1em;\n}\n\n.deletePostIconBtn, .editPostIconBtn {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iL0RvY3VtZW50cy9jbGFzc2VzL3V0Ym9vdGNhbXAvbWVhbi1zdGFjay9xdWl6enItYXBwLXdpdGgtYXV0aC9hbmd1bGFyLXNyYy9zcmMvYXBwL3Nob3ctcG9zdC9zaG93LXBvc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Nob3ctcG9zdC9zaG93LXBvc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQ0NGOztBRENBO0VBQ0UsZUFBQTtBQ0VGIiwiZmlsZSI6InNyYy9hcHAvc2hvdy1wb3N0L3Nob3ctcG9zdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdi5xdWVzdGlvbnMge1xuICBwYWRkaW5nLXRvcDoxZW07XG59XG4uZGVsZXRlUG9zdEljb25CdG4sIC5lZGl0UG9zdEljb25CdG4ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4iLCJkaXYucXVlc3Rpb25zIHtcbiAgcGFkZGluZy10b3A6IDFlbTtcbn1cblxuLmRlbGV0ZVBvc3RJY29uQnRuLCAuZWRpdFBvc3RJY29uQnRuIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/show-post/show-post.component.ts":
/*!**************************************************!*\
  !*** ./src/app/show-post/show-post.component.ts ***!
  \**************************************************/
/*! exports provided: ShowPostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowPostComponent", function() { return ShowPostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _show_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../show-post.service */ "./src/app/show-post.service.ts");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common.service */ "./src/app/common.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);





let ShowPostComponent = class ShowPostComponent {
    constructor(showPostService, commonService) {
        this.showPostService = showPostService;
        this.commonService = commonService;
    }
    ngOnInit() {
        this.getAllPost();
        this.commonService.postAdded_Observable.subscribe(res => {
            this.getAllPost();
        });
    }
    getAllPost() {
        this.showPostService.getAllPost().subscribe(result => {
            this.posts = result['data'];
            console.log('this.posts:', this.posts);
        });
        jquery__WEBPACK_IMPORTED_MODULE_4__('.quizzesList .list-group-item').show();
        jquery__WEBPACK_IMPORTED_MODULE_4__('.quizzesList .editingIndicator').remove();
    }
    editPost(post) {
        this.commonService.setPostToEdit(post);
        jquery__WEBPACK_IMPORTED_MODULE_4__('.quizzesList .list-group-item').hide();
        jquery__WEBPACK_IMPORTED_MODULE_4__('.quizzesList').prepend("<div class='editingIndicator'>Currently editing quizzes!</div>");
    }
    setDelete(post) {
        this.post_to_delete = post;
    }
    unsetDelete() {
        this.post_to_delete = null;
    }
    deletePost() {
        this.showPostService.deletePost(this.post_to_delete._id).subscribe(res => {
            this.getAllPost();
            this.closeBtn.nativeElement.click();
        });
    }
};
ShowPostComponent.ctorParameters = () => [
    { type: _show_post_service__WEBPACK_IMPORTED_MODULE_2__["ShowPostService"] },
    { type: _common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('closeBtn', { static: true })
], ShowPostComponent.prototype, "closeBtn", void 0);
ShowPostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-show-post',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./show-post.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/show-post/show-post.component.html")).default,
        providers: [_show_post_service__WEBPACK_IMPORTED_MODULE_2__["ShowPostService"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./show-post.component.scss */ "./src/app/show-post/show-post.component.scss")).default]
    })
], ShowPostComponent);



/***/ }),

/***/ "./src/app/validate.service.ts":
/*!*************************************!*\
  !*** ./src/app/validate.service.ts ***!
  \*************************************/
/*! exports provided: ValidateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateService", function() { return ValidateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ValidateService = class ValidateService {
    constructor() { }
    validateRegister(user) {
        if (user.name == undefined ||
            user.email == undefined ||
            user.username == undefined ||
            user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    }
    validateEmail(email) {
        const regularExpressionEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regularExpressionEmail.test(String(email).toLowerCase());
    }
};
ValidateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ValidateService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/b/Documents/classes/utbootcamp/mean-stack/quizzr-app-with-auth/angular-src/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map