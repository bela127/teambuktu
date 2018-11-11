(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/login */ "./src/app/components/login.ts");
/* harmony import */ var _components_appointments__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/appointments */ "./src/app/components/appointments.ts");
/* harmony import */ var _components_tasks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/tasks */ "./src/app/components/tasks.ts");
/* harmony import */ var _components_appointment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/appointment */ "./src/app/components/appointment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: 'login', component: _components_login__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'tasks', component: _components_tasks__WEBPACK_IMPORTED_MODULE_4__["TasksComponent"] },
    { path: 'appointments', component: _components_appointments__WEBPACK_IMPORTED_MODULE_3__["AppointmentsComponent"] },
    { path: 'appointment/:id', component: _components_appointment__WEBPACK_IMPORTED_MODULE_5__["AppointmentComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login */ "./src/app/components/login.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./material-module */ "./src/app/material-module.ts");
/* harmony import */ var _components_root__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/root */ "./src/app/components/root.ts");
/* harmony import */ var _services_SessionService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/SessionService */ "./src/app/services/SessionService.ts");
/* harmony import */ var _components_tasks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/tasks */ "./src/app/components/tasks.ts");
/* harmony import */ var _components_appointments__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/appointments */ "./src/app/components/appointments.ts");
/* harmony import */ var _services_SidenavService__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/SidenavService */ "./src/app/services/SidenavService.ts");
/* harmony import */ var _services_DataService__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/DataService */ "./src/app/services/DataService.ts");
/* harmony import */ var _components_appointment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/appointment */ "./src/app/components/appointment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _components_login__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
                _components_root__WEBPACK_IMPORTED_MODULE_7__["RootComponent"],
                _components_tasks__WEBPACK_IMPORTED_MODULE_9__["TasksComponent"],
                _components_appointments__WEBPACK_IMPORTED_MODULE_10__["AppointmentsComponent"],
                _components_appointment__WEBPACK_IMPORTED_MODULE_13__["AppointmentComponent"]
            ],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"]
            ],
            providers: [_services_SessionService__WEBPACK_IMPORTED_MODULE_8__["SessionService"], _services_SidenavService__WEBPACK_IMPORTED_MODULE_11__["SidenavService"], _services_DataService__WEBPACK_IMPORTED_MODULE_12__["DataService"]],
            bootstrap: [_components_root__WEBPACK_IMPORTED_MODULE_7__["RootComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/appointment.css":
/*!********************************************!*\
  !*** ./src/app/components/appointment.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXBwb2ludG1lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/appointment.html":
/*!*********************************************!*\
  !*** ./src/app/components/appointment.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Appointment details</h1>\n{{getAppointment().getName()}}"

/***/ }),

/***/ "./src/app/components/appointment.ts":
/*!*******************************************!*\
  !*** ./src/app/components/appointment.ts ***!
  \*******************************************/
/*! exports provided: AppointmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentComponent", function() { return AppointmentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_SessionService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/SessionService */ "./src/app/services/SessionService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_DataService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/DataService */ "./src/app/services/DataService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppointmentComponent = /** @class */ (function () {
    function AppointmentComponent(route, session, router, dataService) {
        this.route = route;
        this.session = session;
        this.router = router;
        this.dataService = dataService;
        this.session.checkLogin(router);
    }
    AppointmentComponent.prototype.getAppointment = function () {
        return this.appointment;
    };
    AppointmentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var id = params['id'];
            console.log(params);
            console.log("ID: " + id);
            _this.appointment = _this.dataService.getAppointment(id);
            console.log(_this.appointment);
        });
    };
    AppointmentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'appointment-component',
            template: __webpack_require__(/*! ./appointment.html */ "./src/app/components/appointment.html"),
            styles: [__webpack_require__(/*! ./appointment.css */ "./src/app/components/appointment.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_SessionService__WEBPACK_IMPORTED_MODULE_1__["SessionService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_DataService__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], AppointmentComponent);
    return AppointmentComponent;
}());



/***/ }),

/***/ "./src/app/components/appointments.css":
/*!*********************************************!*\
  !*** ./src/app/components/appointments.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXBwb2ludG1lbnRzLmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/appointments.html":
/*!**********************************************!*\
  !*** ./src/app/components/appointments.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Appointments</h1>\n<mat-nav-list>\n    <mat-list-item *ngFor=\"let appointment of dataService.getAppointments()\">\n        <a mat-list-item [routerLink]=\"['/appointment/' + appointment.getId()]\">\n             {{appointment.getName()}} \n        </a>\n        <mat-divider></mat-divider>\n    </mat-list-item>\n</mat-nav-list>\n"

/***/ }),

/***/ "./src/app/components/appointments.ts":
/*!********************************************!*\
  !*** ./src/app/components/appointments.ts ***!
  \********************************************/
/*! exports provided: AppointmentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentsComponent", function() { return AppointmentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_SessionService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/SessionService */ "./src/app/services/SessionService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_DataService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/DataService */ "./src/app/services/DataService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppointmentsComponent = /** @class */ (function () {
    function AppointmentsComponent(session, router, dataService) {
        this.session = session;
        this.router = router;
        this.dataService = dataService;
        this.session.checkLogin(router);
    }
    AppointmentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'appointments-component',
            template: __webpack_require__(/*! ./appointments.html */ "./src/app/components/appointments.html"),
            styles: [__webpack_require__(/*! ./appointments.css */ "./src/app/components/appointments.css")]
        }),
        __metadata("design:paramtypes", [_services_SessionService__WEBPACK_IMPORTED_MODULE_1__["SessionService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_DataService__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], AppointmentsComponent);
    return AppointmentsComponent;
}());



/***/ }),

/***/ "./src/app/components/login.css":
/*!**************************************!*\
  !*** ./src/app/components/login.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4uY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/login.html":
/*!***************************************!*\
  !*** ./src/app/components/login.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <mat-card style=\"width: 300px; margin-left: auto; margin-right: auto; margin-top:64px\">\n    <mat-card-title>Login</mat-card-title>\n    <mat-card-content>\n      <form class=\"loginForm\">\n        <mat-form-field>\n          <input #email matInput placeholder=\"Email\" [formControl]=\"emailFormControl\">\n          <mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">\n            Please enter a valid email address\n          </mat-error>\n          <mat-error *ngIf=\"emailFormControl.hasError('required')\">\n            Email is <strong>required</strong>\n          </mat-error>\n        </mat-form-field>\n        <br/>\n        <mat-form-field class=\"example-full-width\">\n          <input #password type=\"password\" matInput placeholder=\"Password\" value=\"\">\n        </mat-form-field>\n        <br/>\n        <button (click)=\"login(email.value, password.value)\" mat-raised-button color=\"primary\">Login</button>\n      </form>\n    </mat-card-content>\n  </mat-card>\n</div>"

/***/ }),

/***/ "./src/app/components/login.ts":
/*!*************************************!*\
  !*** ./src/app/components/login.ts ***!
  \*************************************/
/*! exports provided: MyErrorStateMatcher, LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_SessionService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/SessionService */ "./src/app/services/SessionService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_SidenavService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/SidenavService */ "./src/app/services/SidenavService.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyErrorStateMatcher = /** @class */ (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return MyErrorStateMatcher;
}());

var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, session, sideNav, snackBar) {
        this.router = router;
        this.session = session;
        this.sideNav = sideNav;
        this.snackBar = snackBar;
        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email,
        ]);
        this.matcher = new MyErrorStateMatcher();
        this.horizontalPosition = 'center';
    }
    LoginComponent.prototype.login = function (email, password) {
        console.log(email + " " + password);
        if (this.session.login(email, password)) {
            this.snackBar.open("Login successful!", "", {
                duration: 2000,
                panelClass: ['snack-bar-success'],
                horizontalPosition: this.horizontalPosition
            });
            console.log("Login successful, navigating...");
            this.sideNav.open();
            this.router.navigate(["/appointments"]);
        }
        else {
            this.snackBar.open("Login failed...", "", {
                panelClass: ['snack-bar-warning'],
                duration: 2000,
                horizontalPosition: this.horizontalPosition
            });
        }
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'login-component',
            template: __webpack_require__(/*! ./login.html */ "./src/app/components/login.html"),
            styles: [__webpack_require__(/*! ./login.css */ "./src/app/components/login.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_SessionService__WEBPACK_IMPORTED_MODULE_2__["SessionService"],
            _services_SidenavService__WEBPACK_IMPORTED_MODULE_4__["SidenavService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/root.css":
/*!*************************************!*\
  !*** ./src/app/components/root.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  left: 0;\n  right: 0;\n}\n\n.sidenav {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 200px;\n  background: #e0e0e0\n}\n\n.content {\n    padding-left: 16px;\n    padding-right: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yb290LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsWUFBWTtFQUNaLFFBQVE7RUFDUixTQUFTO0NBQ1Y7O0FBRUQ7RUFDRSxjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLHdCQUF3QjtFQUN4QixhQUFhO0VBQ2IsbUJBQW1CO0NBQ3BCOztBQUVEO0lBQ0ksbUJBQW1CO0lBQ25CLG9CQUFvQjtDQUN2QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcm9vdC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgYm90dG9tOiAwcHg7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xufVxuXG4uc2lkZW5hdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMjAwcHg7XG4gIGJhY2tncm91bmQ6ICNlMGUwZTBcbn1cblxuLmNvbnRlbnQge1xuICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/root.html":
/*!**************************************!*\
  !*** ./src/app/components/root.html ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<mat-sidenav-container class=\"container\">\n    <mat-sidenav closed #sidenav mode=\"side\" class=\"sidenav\"\n                 [fixedInViewport]=\"true\" [fixedTopGap]=\"0\"\n                 [fixedBottomGap]=\"0\">\n    \n        <mat-nav-list>\n            <a mat-list-item [routerLink]=\"['/appointments']\">Appointments</a>\n            <a mat-list-item [routerLink]=\"['/tasks']\">Tasks</a>\n            <a mat-list-item [routerLink]=\"['/appointments']\">Customers</a>\n            <a mat-list-item [routerLink]=\"['/appointments']\">Orders</a>\n        </mat-nav-list>\n\n    </mat-sidenav>\n\n    <mat-sidenav-content class=\"content\">\n        <router-outlet></router-outlet>\n    </mat-sidenav-content>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./src/app/components/root.ts":
/*!************************************!*\
  !*** ./src/app/components/root.ts ***!
  \************************************/
/*! exports provided: RootComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootComponent", function() { return RootComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_SessionService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/SessionService */ "./src/app/services/SessionService.ts");
/* harmony import */ var _services_SidenavService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/SidenavService */ "./src/app/services/SidenavService.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RootComponent = /** @class */ (function () {
    function RootComponent(router, session, sidenavService) {
        this.router = router;
        this.session = session;
        this.sidenavService = sidenavService;
        console.log("Root cons");
        session.setRouter(router);
        router.navigate(["/login"]);
    }
    RootComponent.prototype.ngOnInit = function () {
        this.sidenavService.setSidenav(this.sidenav);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('sidenav'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSidenav"])
    ], RootComponent.prototype, "sidenav", void 0);
    RootComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'root-component',
            template: __webpack_require__(/*! ./root.html */ "./src/app/components/root.html"),
            styles: [__webpack_require__(/*! ./root.css */ "./src/app/components/root.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_SessionService__WEBPACK_IMPORTED_MODULE_2__["SessionService"], _services_SidenavService__WEBPACK_IMPORTED_MODULE_3__["SidenavService"]])
    ], RootComponent);
    return RootComponent;
}());



/***/ }),

/***/ "./src/app/components/tasks.css":
/*!**************************************!*\
  !*** ./src/app/components/tasks.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGFza3MuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/tasks.html":
/*!***************************************!*\
  !*** ./src/app/components/tasks.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>TASKS</h1>\n"

/***/ }),

/***/ "./src/app/components/tasks.ts":
/*!*************************************!*\
  !*** ./src/app/components/tasks.ts ***!
  \*************************************/
/*! exports provided: TasksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksComponent", function() { return TasksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_SessionService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/SessionService */ "./src/app/services/SessionService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TasksComponent = /** @class */ (function () {
    function TasksComponent(session, router) {
        this.session = session;
        this.router = router;
        this.session.checkLogin(router);
    }
    TasksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'tasks-component',
            template: __webpack_require__(/*! ./tasks.html */ "./src/app/components/tasks.html"),
            styles: [__webpack_require__(/*! ./tasks.css */ "./src/app/components/tasks.css")]
        }),
        __metadata("design:paramtypes", [_services_SessionService__WEBPACK_IMPORTED_MODULE_1__["SessionService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], TasksComponent);
    return TasksComponent;
}());



/***/ }),

/***/ "./src/app/material-module.ts":
/*!************************************!*\
  !*** ./src/app/material-module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            exports: [
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkTableModule"],
                _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_3__["CdkTreeModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["DragDropModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTreeModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ScrollingModule"],
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/model/Appointment.ts":
/*!**************************************!*\
  !*** ./src/app/model/Appointment.ts ***!
  \**************************************/
/*! exports provided: Appointment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Appointment", function() { return Appointment; });
var Appointment = /** @class */ (function () {
    function Appointment(name) {
        this.name = name;
    }
    Appointment.prototype.getName = function () {
        return this.name;
    };
    Appointment.prototype.getId = function () {
        return this.name;
    };
    return Appointment;
}());



/***/ }),

/***/ "./src/app/services/DataService.ts":
/*!*****************************************!*\
  !*** ./src/app/services/DataService.ts ***!
  \*****************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _model_Appointment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/Appointment */ "./src/app/model/Appointment.ts");

var DataService = /** @class */ (function () {
    function DataService() {
    }
    DataService.prototype.getAppointments = function () {
        return [
            new _model_Appointment__WEBPACK_IMPORTED_MODULE_0__["Appointment"]("Appointment 1"),
            new _model_Appointment__WEBPACK_IMPORTED_MODULE_0__["Appointment"]("Appointment 2"),
            new _model_Appointment__WEBPACK_IMPORTED_MODULE_0__["Appointment"]("Appointment 3"),
        ];
    };
    DataService.prototype.getAppointment = function (id) {
        for (var _i = 0, _a = this.getAppointments(); _i < _a.length; _i++) {
            var entry = _a[_i];
            if (entry.getId() == id)
                return entry;
        }
        return null;
    };
    DataService.prototype.getTasks = function () {
        return [
            { name: "Hallo", link: "Welt" },
            { name: "Hallo", link: "Welt" },
            { name: "Hallo", link: "Welt" }
        ];
    };
    return DataService;
}());



/***/ }),

/***/ "./src/app/services/SessionService.ts":
/*!********************************************!*\
  !*** ./src/app/services/SessionService.ts ***!
  \********************************************/
/*! exports provided: SessionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionService", function() { return SessionService; });
var SessionService = /** @class */ (function () {
    function SessionService() {
        this.loggedIn = false;
        console.log("Technician con!");
    }
    SessionService.prototype.isLoggedIn = function () {
        return this.loggedIn;
    };
    SessionService.prototype.login = function (email, password) {
        if (email == "a" && password == "a") {
            this.loggedIn = true;
        }
        return this.loggedIn;
    };
    SessionService.prototype.setRouter = function (router) {
        this.router = router;
    };
    SessionService.prototype.checkLogin = function (router) {
        console.log("Checking login");
        console.log(this.isLoggedIn());
        console.log(this.router.url);
        if (!this.isLoggedIn() && this.router.url != "/login") {
            console.log("redirecting to login");
            this.router.navigate(['/login']);
        }
    };
    return SessionService;
}());



/***/ }),

/***/ "./src/app/services/SidenavService.ts":
/*!********************************************!*\
  !*** ./src/app/services/SidenavService.ts ***!
  \********************************************/
/*! exports provided: SidenavService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavService", function() { return SidenavService; });
var SidenavService = /** @class */ (function () {
    function SidenavService() {
    }
    SidenavService.prototype.setSidenav = function (sidenav) {
        this.sidenav = sidenav;
    };
    SidenavService.prototype.open = function () {
        return this.sidenav.open();
    };
    SidenavService.prototype.close = function () {
        return this.sidenav.close();
    };
    SidenavService.prototype.toggle = function () {
        this.sidenav.toggle();
    };
    return SidenavService;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /media/bhb/Data/@HK/Semester2/SoftwareArchetektur/Labor/TBKT/Aufgabe3/teambuktu-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map