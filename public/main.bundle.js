webpackJsonp([0],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/add-car/add-car-button/add-car-button.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapper {\n\tdisplay: -webkit-inline-box;\n\tdisplay: -ms-inline-flexbox;\n\tdisplay: inline-flex;\t\t/* So that we can easily vertically center the button */\n\tvertical-align: top;\t\t/* Needed to propperly align inline-flex to the top */\n\t-webkit-box-align: center;\n\t    -ms-flex-align: center;\n\t        align-items: center;\t\t/* horizontally center the button */\n\twidth: 17.2vw;\n\tmin-width: 13.75em;\n\theight: 20vw;\n\tmin-height: 16em;\n\tmargin: 0.6em;\n}\n.add-car-button {\n\twidth: 100%;\n\ttext-align: center;\t/* vertically center the button */\n\tpadding: 0.6rem;\n\tfont-family: \"Trebuchet MS\", \"Lucida Grande\", \"Lucida Sans Unicode\", \"Lucida Sans\", Tahoma, sans-serif;\n\tcolor: mediumblue;\n\tbackground-color: FloralWhite;\n\tbackground-clip: padding-box;\n\tborder-width: 0.5em;\n\tborder-style: solid;\n\tborder-color: rgba(200, 200, 200, 0.55);\n\tborder-radius: 0.4em;\n}\n@media screen and (min-width: 1280px) and (min-aspect-ratio: 15/9) and (orientation: landscape) {\n\t.wrapper{\n\t\twidth: 14.6vw;\n\t\theight: 17vw;\n\t}\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/add-car/add-car-button/add-car-button.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n\t<a routerLink=\"/addCar\" class=\"add-car-button\">+ Add Vehicle</a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/add-car/add-car-button/add-car-button.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddCarButtonComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Presents 'add new car' button that links
 * to addCar view'
 *
 * @class AddCarButtonComponent
 */
var AddCarButtonComponent = (function () {
    function AddCarButtonComponent() {
    }
    AddCarButtonComponent.prototype.ngOnInit = function () {
    };
    return AddCarButtonComponent;
}());
AddCarButtonComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-add-car-button',
        template: __webpack_require__("../../../../../src/app/add-car/add-car-button/add-car-button.component.html"),
        styles: [__webpack_require__("../../../../../src/app/add-car/add-car-button/add-car-button.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AddCarButtonComponent);

//# sourceMappingURL=add-car-button.component.js.map

/***/ }),

/***/ "../../../../../src/app/add-car/add-car.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* For \"Madoka\" Inputs */\n* {\n\tbox-sizing: border-box;\n}\n.add-car-view {\n\twidth: 61vw;\n\theight: 55vw;\n\tmin-width: 30em;\n\tmin-height: 27.5em;\n\n\toverflow-y: auto;\n\toverflow-x: hidden;\n\n\tmargin-left: 1rem;\n\t\n\tbackground-color: wheat;\n\tbackground-image: url(\"/assets/images/add-vehicle-pane.jpg\");\n\tbackground-size: 100%;\n}\n.form {\n\tfont-size: 1.5rem;\n\n\tmargin-left: 3rem;\n}\n\nlabel {\n\tdisplay: block;\n}\nbutton {\n\tdisplay: block;\n\tposition: relative;\n\twidth: 5rem;\n\theight: 1.9rem;\n\tmargin-top: 1rem;\n\tmargin-bottom: 0.125em;\n\tborder-width: 0;\n\tbackground-color: darkgreen;\n\tbackground-image: url(\"/assets/images/command-background.jpg\");\n\tbackground-size: 100% 100%;\n\tcursor: pointer;\n}\nbutton:hover {\n\tbackground-image: url(\"/assets/images/command-hover.jpg\");\n}\n.button-image {\n\tposition: absolute;\n\tleft: 0;\n\ttop: 0;\n\twidth: 100%;\n\theight: 100%;\n}\n\n.error {\n\tcolor:  red;\n\ttext-align: left;\n\tfont-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n\tfont-size: 70.25%;\n\tfont-weight: bold;\n\tmargin-top: 0.5rem;\n\tmargin-bottom: -0.8rem;\n}\n.image-text {\n\tfont-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n\tfont-size: 70.25%;\n\tfont-weight: bold;\n\tcolor: #6a7989;\n}\n.file-upload {\t/* Customize image upload button */\n\tposition: relative;\t\n\toverflow: hidden;\n\n\tdisplay: -webkit-box;\n\n\tdisplay: -ms-flexbox;\n\n\tdisplay: flex;\t/* Span text must be centered*/\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n\n\twidth: 7.6vw;\t/* 'Button' style */\n\tmin-width: 6.1em;\n\theight: 2.6vw;\n\tmin-height: 2em;\n\n\tmargin-top: 2rem;\n\tmargin-bottom: 0.125em;\n\n\ttext-align: center;\n\tfont-size: 1.2rem;\n\n\tbackground-color: darkgreen;\n\tbackground-image: url(\"/assets/images/command-background.jpg\");\n\tbackground-size: 100% 100%;\n\tcursor: pointer;\n}\n.file-upload:hover {\n\tbackground-image: url(\"/assets/images/command-hover.jpg\");\n}\ninput[type='file'] {\t/* This will be clickable*/\n  position: absolute;\n  top: 0;\n  left: 0;\n  opacity: 0;\t/* but invisible*/\n  cursor: pointer;\n\n\twidth: 7.6vw;\n\tmin-width: 6.1em;\n\theight: 2.6vw;\n\tmin-height: 2em;\n}\n.text {\n\tcursor: pointer;\n\tfont-size: 0.9rem;\n}\n#uploadedImage {\n\twidth: 90%;\n}\n@media screen and (min-width: 1280px) and (min-aspect-ratio: 15/9) and (orientation: landscape) {\n\t.add-car-view{\n\t\twidth: 52vw;\n\t\theight: 47vw;\n\t}\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/add-car/add-car.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"add-car-view\">\n\t<div class=\"form\">\n\t\t<span class=\"input input--madoka\" [class.input--filled]=\"carModel.value !== ''\" >\n\t\t\t<input #carModel class=\"input__field input__field--madoka\" type=\"text\" id=\"car-model\" [(ngModel)]='car.model' [formControl]=\"carModelCtrl\" (blur)=\"onBlur($event)\" autofocus />\n\t\t\t<label class=\"input__label input__label--madoka\" for=\"car-model\">\n\t\t\t\t<svg class=\"graphic graphic--madoka\" width=\"100%\" height=\"100%\" viewBox=\"0 0 404 77\" preserveAspectRatio=\"none\">\n\t\t\t\t\t<path d=\"m0,0l404,0l0,77l-404,0l0,-77z\"/>\n\t\t\t\t</svg>\n\t\t\t\t<span class=\"input__label-content input__label-content--madoka\">Car Model</span>\n\t\t\t</label>\n\t\t</span>\n\t\t<div class=\"error\" *ngIf=\"carModelCtrl.hasError('required') && carModelCtrl.touched\">You must provide car model</div>\n\t\t<div class=\"error\" *ngIf=\"carModelCtrl.hasError('maxlength') && carModelCtrl.touched\">You can enter at most twenty characters</div>\n\n\t\t<span class=\"input input--madoka\" [class.input--filled]=\"carName.value !== ''\" >\n\t\t\t<input #carName class=\"input__field input__field--madoka\" type=\"text\" id=\"car-name\" [(ngModel)]='car.name' [formControl]=\"carNameCtrl\" (blur)=\"onBlur($event)\" />\n\t\t\t<label class=\"input__label input__label--madoka\" for=\"car-name\">\n\t\t\t\t<svg class=\"graphic graphic--madoka\" width=\"100%\" height=\"100%\" viewBox=\"0 0 404 77\" preserveAspectRatio=\"none\">\n\t\t\t\t\t<path d=\"m0,0l404,0l0,77l-404,0l0,-77z\"/>\n\t\t\t\t</svg>\n\t\t\t\t<span class=\"input__label-content input__label-content--madoka\">Car Nick Name</span>\n\t\t\t</label>\n\t\t</span>\n\t\t<div class=\"error\" *ngIf=\"carNameCtrl.hasError('required') && carNameCtrl.touched\">You must provide car name</div>\n\t\t<div class=\"error\" *ngIf=\"carNameCtrl.hasError('maxlength') && carNameCtrl.touched\">You can enter at most twenty characters</div>\n\t\t<div class=\"error\" *ngIf=\"carNameCtrl.hasError('carNameNotUnique') && carModelCtrl.touched\">This nick name already exists</div>\n\n\t\t<span class=\"input input--madoka\" [class.input--filled]=\"carYear.value !== ''\" >\n\t\t\t<input #carYear class=\"input__field input__field--madoka\" type=\"text\" id=\"car-year\" [(ngModel)]='car.year' [formControl]=\"carYearCtrl\" (blur)=\"onBlur($event)\"  />\n\t\t\t<label class=\"input__label input__label--madoka\" for=\"car-year\">\n\t\t\t\t<svg class=\"graphic graphic--madoka\" width=\"100%\" height=\"100%\" viewBox=\"0 0 404 77\" preserveAspectRatio=\"none\">\n\t\t\t\t\t<path d=\"m0,0l404,0l0,77l-404,0l0,-77z\"/>\n\t\t\t\t</svg>\n\t\t\t\t<span class=\"input__label-content input__label-content--madoka\">Car Year</span>\n\t\t\t</label>\n\t\t</span>\n\t\t<div class=\"error\" *ngIf=\"carYearCtrl.hasError('required') && carYearCtrl.touched\">You must provide car year</div>\n\t\t<div class=\"error\" *ngIf=\"carYearCtrl.hasError('pattern') && carYearCtrl.touched\">Year can contain only digits</div>\n\t\t<div class=\"error\" *ngIf=\"carYearCtrl.hasError('minlength') && carYearCtrl.touched\">You must enter exactly four characters</div>\n\t\t<div class=\"error\" *ngIf=\"carYearCtrl.hasError('maxlength') && carYearCtrl.touched\">You must enter exactly four characters</div>\n\n\t\t<div class=\"file-upload\">\n\t\t\t<span class=\"text\">Upload Image</span>\n\t\t\t<input id=\"car-avatar\" name=\"carAvatar\" type=\"file\" (change)=\"fileChangeListener($event)\" />\n\t\t</div>\n\n\t\t<img-cropper [image]=\"data\" [settings]=\"cropperSettings\"></img-cropper>\n\t\t<div class=\"image-text\" *ngIf=\"!imageValid\">Image must be at least 110px x 110px</div>\n\t\t<button id=\"addCarButton\" (click)=\"writeCarData()\" [disabled]=\"!addCarForm.valid\">\n\t\t\t<img class=\"button-image\" src=\"/assets/images/button-add.png\" />\n\t\t\t<img class=\"button-image\" src=\"/assets/images/command-glass.png\" />\n\t\t</button>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/add-car/add-car.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_img_cropper__ = __webpack_require__("../../../../ng2-img-cropper/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_car__ = __webpack_require__("../../../../../src/app/common/car.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_data_service__ = __webpack_require__("../../../../../src/app/common/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_notification_hub_service__ = __webpack_require__("../../../../../src/app/common/notification-hub.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_utilities_service__ = __webpack_require__("../../../../../src/app/common/utilities.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_componentAnimations__ = __webpack_require__("../../../../../src/app/common/componentAnimations.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddCarComponent; });
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
/***********************************************************************************/









/***********************************************************************************/
/**
 * Presents form for adding new car
 *
 * @class AddCarComponent
 */
var AddCarComponent = AddCarComponent_1 = (function () {
    function AddCarComponent(appStore, dataService, utilitiesService, notificationHubService, router, route) {
        this.appStore = appStore;
        this.dataService = dataService;
        this.utilitiesService = utilitiesService;
        this.notificationHubService = notificationHubService;
        this.router = router;
        this.route = route;
        this.imageValid = false;
        this.routeAnimation = true;
        this.display = 'block';
        this.position = 'absolute';
        this.top = '0px';
        this.carModelCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].maxLength(20)]));
        this.carNameCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].maxLength(20), AddCarComponent_1.carUnique]));
        this.carYearCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].pattern('[0-9]+'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].minLength(4), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].maxLength(4)]));
    }
    AddCarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.car = new __WEBPACK_IMPORTED_MODULE_4__common_car__["a" /* Car */];
        this.notificationHubService.emit(__WEBPACK_IMPORTED_MODULE_6__common_notification_hub_service__["b" /* HubNotificationType */].AppState, "Adding a new car ('ESC' to cancel)");
        this.addCarForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormGroup */]({ first: this.carModelCtrl, second: this.carNameCtrl, third: this.carYearCtrl });
        this.sub = this.route.data
            .subscribe(function (data) {
            AddCarComponent_1.cars = data.cars;
        });
        // Listens for escape key pressed to quit the component
        //subscribe to Redux store state changes
        this.unsubscribeStore = this.appStore.subscribe(function () {
            var state = _this.appStore.getState();
            if (state.system.escKeyPressed)
                _this.cancel();
        });
        var element = document.getElementsByClassName("add-car-view")[0];
        var width = parseInt(window.getComputedStyle(element, "").width);
        // Setting for the cropper component
        this.cropperSettings = new __WEBPACK_IMPORTED_MODULE_3_ng2_img_cropper__["a" /* CropperSettings */]();
        this.cropperSettings.canvasWidth = width * 0.9;
        this.cropperSettings.canvasHeight = width * 0.4;
        this.cropperSettings.width = width * 0.1;
        this.cropperSettings.height = width * 0.1;
        this.cropperSettings.croppedWidth = 110;
        this.cropperSettings.croppedHeight = 110;
        this.cropperSettings.rounded = false;
        this.cropperSettings.cropperDrawSettings.strokeColor = 'rgba(255,255,255,1)';
        this.cropperSettings.cropperDrawSettings.strokeWidth = 2;
        this.cropperSettings.noFileInput = true;
        this.cropperSettings.fileType = 'png';
        this.data = {};
    };
    AddCarComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
        this.unsubscribeStore();
    };
    /**
      * Writes the new car data to the database
      * and then navigates away to show all the cars.
      *
      * @method writeCarData
      */
    AddCarComponent.prototype.writeCarData = function () {
        var _this = this;
        var base64Image;
        if (this.imageValid)
            base64Image = this.data.image;
        this.dataService.addCar(this.car, base64Image).then(function () {
            _this.notificationHubService.emit(__WEBPACK_IMPORTED_MODULE_6__common_notification_hub_service__["b" /* HubNotificationType */].Success, 'New car added'); // Notify of success via event hub service
            _this.router.navigate(['dashboard']);
        })
            .catch(function (error) { return _this.utilitiesService.handleError(error); });
    };
    /**
     * Used to send the car image to image cropper
     *
     * @param $event
     * @method fileChangeListener
     */
    AddCarComponent.prototype.fileChangeListener = function ($event) {
        var _this = this;
        var imageCache = new Image();
        var file = $event.target.files[0];
        var myReader = new FileReader();
        var image = document.getElementById('uploadedImage');
        myReader.onloadend = function (loadEvent) {
            imageCache.src = loadEvent.target.result;
            imageCache.onload = function () {
                if (imageCache.width < 110 || imageCache.height < 110)
                    _this.imageValid = false;
                else {
                    _this.imageValid = true;
                    _this.cropper.setImage(imageCache);
                }
            };
        };
        myReader.readAsDataURL(file);
    };
    /**
     * Trims input fields on losing focus
     *
     * @method onBlur
     * @param event:any
     */
    AddCarComponent.prototype.onBlur = function (event) {
        event.target.value = event.target.value.trim();
    };
    /**
     * Quits the component by routing away
     *
     * @method cancel
     */
    AddCarComponent.prototype.cancel = function () {
        // Simply navigate back to reminders view
        this.router.navigate(['dashboard']); // Go up to parent route     
    };
    /**
     * A validator for a nick-name input field
     *
     * @method carUnique
     * @param control A form control to validate
     * @return {StringMap<string:boolean>} Returns the result of validation in the form {'carNameNotUnique': true}
     */
    AddCarComponent.carUnique = function (control) {
        for (var i = 0; i < AddCarComponent_1.cars.length; ++i)
            if (control.value === AddCarComponent_1.cars[i].name)
                return { carNameNotUnique: true };
    };
    return AddCarComponent;
}());
AddCarComponent.cars = [{ id: '0', model: '', name: '', year: '' }];
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3_ng2_img_cropper__["b" /* ImageCropperComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_img_cropper__["b" /* ImageCropperComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng2_img_cropper__["b" /* ImageCropperComponent */]) === "function" && _a || Object)
], AddCarComponent.prototype, "cropper", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('@routeAnimation'),
    __metadata("design:type", Object)
], AddCarComponent.prototype, "routeAnimation", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('style.display'),
    __metadata("design:type", Object)
], AddCarComponent.prototype, "display", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('style.position'),
    __metadata("design:type", Object)
], AddCarComponent.prototype, "position", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('style.top'),
    __metadata("design:type", Object)
], AddCarComponent.prototype, "top", void 0);
AddCarComponent = AddCarComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-add-car',
        template: __webpack_require__("../../../../../src/app/add-car/add-car.component.html"),
        styles: [__webpack_require__("../../../../../src/app/add-car/add-car.component.css")],
        animations: [__WEBPACK_IMPORTED_MODULE_8__common_componentAnimations__["a" /* slideFromLeftToRightAnimation */]]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('AppStore')),
    __metadata("design:paramtypes", [Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__common_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__common_data_service__["a" /* DataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__common_utilities_service__["a" /* UtilitiesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__common_utilities_service__["a" /* UtilitiesService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__common_notification_hub_service__["a" /* NotificationHubService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__common_notification_hub_service__["a" /* NotificationHubService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _f || Object])
], AddCarComponent);

var AddCarComponent_1, _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=add-car.component.js.map

/***/ }),

/***/ "../../../../../src/app/add-car/add-car.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__image_cropper_image_cropper_module__ = __webpack_require__("../../../../../src/app/image-cropper/image-cropper.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__add_car_button_add_car_button_component__ = __webpack_require__("../../../../../src/app/add-car/add-car-button/add-car-button.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__add_car_component__ = __webpack_require__("../../../../../src/app/add-car/add-car.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddCarModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AddCarModule = (function () {
    function AddCarModule() {
    }
    return AddCarModule;
}());
AddCarModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__image_cropper_image_cropper_module__["a" /* ImageCropperModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_6__add_car_component__["a" /* AddCarComponent */], __WEBPACK_IMPORTED_MODULE_5__add_car_button_add_car_button_component__["a" /* AddCarButtonComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_5__add_car_button_add_car_button_component__["a" /* AddCarButtonComponent */]]
    })
], AddCarModule);

//# sourceMappingURL=add-car.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media screen and (min-width: 1280px) and (min-aspect-ratio: 15/9) and (orientation: landscape) {\n\t.master-frame {\n\t\twidth: 85vw;\n\t\tmargin: auto;\n\t\toverflow: hidden;\n\t}\n}\n@media screen and (max-width: 480px) {\n\t.master-frame {\n\t\tfont-size: 12px;\n\t}\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"master-frame\">\n\t<router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__redux_action_creators_system_action_creators__ = __webpack_require__("../../../../../src/app/redux-action-creators/system.action-creators.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
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
    function AppComponent(actionCreators) {
        this.actionCreators = actionCreators;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.addEventListener("keydown", function (event) {
            if (event.key === 'Escape')
                _this.actionCreators.escKeyPressed();
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__redux_action_creators_system_action_creators__["a" /* SystemActionCreators */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__redux_action_creators_system_action_creators__["a" /* SystemActionCreators */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__add_car_add_car_module__ = __webpack_require__("../../../../../src/app/add-car/add-car.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard_module__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__auth_auth_module__ = __webpack_require__("../../../../../src/app/auth/auth.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__car_detail_view_car_detail_view_component__ = __webpack_require__("../../../../../src/app/car-detail-view/car-detail-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__status_bar_status_bar_component__ = __webpack_require__("../../../../../src/app/status-bar/status-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__car_detail_view_cars_list_cars_list_component__ = __webpack_require__("../../../../../src/app/car-detail-view/cars-list/cars-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__wellcome_wellcome_component__ = __webpack_require__("../../../../../src/app/wellcome/wellcome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__chrome_chrome_component__ = __webpack_require__("../../../../../src/app/chrome/chrome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__car_detail_car_detail_module__ = __webpack_require__("../../../../../src/app/car-detail/car-detail.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__routing_routing_module__ = __webpack_require__("../../../../../src/app/routing/routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__common_data_service__ = __webpack_require__("../../../../../src/app/common/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__common_notification_hub_service__ = __webpack_require__("../../../../../src/app/common/notification-hub.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__common_utilities_service__ = __webpack_require__("../../../../../src/app/common/utilities.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__common_auth_service__ = __webpack_require__("../../../../../src/app/common/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_redux__ = __webpack_require__("../../../../redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__redux_store_index__ = __webpack_require__("../../../../../src/app/redux-store/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__redux_action_creators_fill_up_action_creators__ = __webpack_require__("../../../../../src/app/redux-action-creators/fill-up-action-creators.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__redux_action_creators_reminder_action_creators__ = __webpack_require__("../../../../../src/app/redux-action-creators/reminder.action-creators.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__redux_action_creators_system_action_creators__ = __webpack_require__("../../../../../src/app/redux-action-creators/system.action-creators.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__redux_action_creators_user_action_creators__ = __webpack_require__("../../../../../src/app/redux-action-creators/user.action-creators.ts");
/* unused harmony export appStoreFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















// The class which handles AJAX data services










function appStoreFactory() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_20_redux__["a" /* createStore */])(__WEBPACK_IMPORTED_MODULE_21__redux_store_index__["a" /* rootReducer */]);
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__status_bar_status_bar_component__["a" /* StatusBarComponent */],
            __WEBPACK_IMPORTED_MODULE_8__car_detail_view_car_detail_view_component__["a" /* CarDetailViewComponent */],
            __WEBPACK_IMPORTED_MODULE_10__car_detail_view_cars_list_cars_list_component__["a" /* CarsListComponent */],
            __WEBPACK_IMPORTED_MODULE_11__wellcome_wellcome_component__["a" /* WellcomeComponent */],
            __WEBPACK_IMPORTED_MODULE_12__chrome_chrome_component__["a" /* ChromeComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_14__routing_routing_module__["a" /* RoutingModule */],
            __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard_module__["a" /* DashboardModule */],
            __WEBPACK_IMPORTED_MODULE_13__car_detail_car_detail_module__["a" /* CarDetailModule */],
            __WEBPACK_IMPORTED_MODULE_5__add_car_add_car_module__["a" /* AddCarModule */],
            __WEBPACK_IMPORTED_MODULE_7__auth_auth_module__["a" /* AuthModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_16__common_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_17__common_notification_hub_service__["a" /* NotificationHubService */], __WEBPACK_IMPORTED_MODULE_18__common_utilities_service__["a" /* UtilitiesService */], __WEBPACK_IMPORTED_MODULE_19__common_auth_service__["a" /* AuthService */],
            { provide: 'AppStore', useFactory: appStoreFactory },
            __WEBPACK_IMPORTED_MODULE_22__redux_action_creators_fill_up_action_creators__["a" /* FillUpActionCreators */], __WEBPACK_IMPORTED_MODULE_23__redux_action_creators_reminder_action_creators__["a" /* ReminderActionCreators */], __WEBPACK_IMPORTED_MODULE_25__redux_action_creators_user_action_creators__["a" /* UserActionCreators */], __WEBPACK_IMPORTED_MODULE_24__redux_action_creators_system_action_creators__["a" /* SystemActionCreators */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/auth/auth.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapper {\n\tposition: relative;\n\theight: 62vw;\n\tbackground-color: rgb(50, 50, 50);\n\tbackground-image: url(\"/assets/images/application-gradient.png\");\n\tbackground-size: 100% 100%;\n}\n.tile-image {\n\tposition: absolute;\n\tz-index: 10;\n\tleft: 8vw;\n\ttop: 4vw;\n\theight: 32vw;\n}\n.header {\n\tposition: relative;\n\theight: 12.3vw;\n}\n.mileage-icon {\n\tposition: absolute;\n\tleft: 51.7vw;\n\ttop: 2.95vw;\n\twidth: 6.4vw;\n}\n.mileage-title {\n\tposition: absolute;\n\tleft: 58.8vw;\n\ttop: 2.95vw;\n\twidth: 32vw;\n}\n.splash-screen {\n\tposition: relative;\n\tmargin: 0 2vw;\n}\n.title-bar {\n\theight: 5vw;\n\tbackground-color: darkgray;\n}\n.title-glass,\n.tagline\n{\n\twidth: 100%;\n\theight: 100%;\n}\n.auth {\n\tposition: absolute;\n\tright: 3vw;\n\ttop: 6vw;\n\twidth: 30vw;\n\theight: 39vw;\n\tbackground-color: rgb(90, 90, 90);\n}\n@media screen and (min-width: 1280px) and (min-aspect-ratio: 15/9) and (orientation: landscape) {\n\t.wrapper {\n\t\theight: 52.7vw;\n\t}\n\t.tile-image {\n\t\tleft: 6.8vw;\n\t\ttop: 3.4vw;\n\t\theight: 27.2vw;\n\t}\n\t.header {\n\t\theight: 10.5vw;\n\t}\n\t.mileage-icon {\n\t\tleft: 44vw;\n\t\ttop: 2.5vw;\n\t\twidth: 5.44vw;\n\t}\n\t.mileage-title {\n\t\tleft: 50vw;\n\t\ttop: 2.5vw;\n\t\twidth: 27.2vw;\n\t}\n\t.auth {\n\t\twidth: 25.5vw;\n\t\theight: 33.15vw;\n\t}\n}\n@media screen and (max-width: 580px) {\n\t.auth {\n\t\toverflow-y: auto;\n\t}\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/auth.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"wrapper\">\n\t<img class=\"tile-image\" src=\"/assets/images/tile-image.png\" alt=\"tile image\" />\n\t<div class=\"header\">\n\t\t<img class=\"mileage-icon\" src=\"/assets/images/application-icon.png\" alt=\"application icon\" />\n\t\t<img class=\"mileage-title\" src=\"/assets/images/application-title.png\" alt=\"application title\" />\n\t</div>\n\t<div class=\"splash-screen\">\n\t\t<div class=\"title-bar\">\n\t\t\t<img class=\"title-glass\" src=\"assets/images/title-glass.png\" />\n\t\t</div>\n\t\t<img class=\"tagline\" src=\"/assets/images/application-tagline.jpg\" alt=\"application tagline\" />\n\t\t<div class=\"auth\">\n\t\t\t<router-outlet></router-outlet>\n\t\t</div>\n\t</div>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/auth/auth.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AuthComponent = (function () {
    function AuthComponent() {
    }
    AuthComponent.prototype.ngOnInit = function () {
    };
    return AuthComponent;
}());
AuthComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-auth',
        template: __webpack_require__("../../../../../src/app/auth/auth.component.html"),
        styles: [__webpack_require__("../../../../../src/app/auth/auth.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AuthComponent);

//# sourceMappingURL=auth.component.js.map

/***/ }),

/***/ "../../../../../src/app/auth/auth.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_component__ = __webpack_require__("../../../../../src/app/auth/auth.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sign_in_sign_in_component__ = __webpack_require__("../../../../../src/app/auth/sign-in/sign-in.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sign_up_sign_up_component__ = __webpack_require__("../../../../../src/app/auth/sign-up/sign-up.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__profile_profile_component__ = __webpack_require__("../../../../../src/app/auth/profile/profile.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








/**
 * Contains all the authentication and user profile functionality.
 *
 * @class AuthModule
 */
var AuthModule = (function () {
    function AuthModule() {
    }
    return AuthModule;
}());
AuthModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* ReactiveFormsModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_4__auth_component__["a" /* AuthComponent */], __WEBPACK_IMPORTED_MODULE_5__sign_in_sign_in_component__["a" /* SignInComponent */], __WEBPACK_IMPORTED_MODULE_6__sign_up_sign_up_component__["a" /* SignUpComponent */], __WEBPACK_IMPORTED_MODULE_7__profile_profile_component__["a" /* ProfileComponent */]]
    })
], AuthModule);

//# sourceMappingURL=auth.module.js.map

/***/ }),

/***/ "../../../../../src/app/auth/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* For \"Madoka\" Inputs */\n* {\n\tbox-sizing: border-box;\n}\n\nform {\n\tfont-size: 1.5em;\n\twidth: 16em;\n\theight: 26em;\n\tmargin-left: 0.5em;\n\tbackground-image: url(\"/assets/images/account-pane.jpg\");\n\tbackground-size: 100% 100%;\n}\n.data {\n\tmargin-left: 1em;\n}\n/********/\nbutton {\n\tdisplay: inline-block;\n\tposition: relative;\n\twidth: 5rem;\n\theight: 1.9rem;\n\tmargin-top: 2rem;\n\tmargin-left: 2em;\n\tmargin-bottom: 0.125em;\n\tborder-width: 0;\n\tbackground-color: darkgreen;\n\tbackground-image: url(\"/assets/images/command-background.jpg\");\n\tbackground-size: 100% 100%;\n\tcursor: pointer;\n}\nbutton:hover {\n\tbackground-image: url(\"/assets/images/command-hover.jpg\");\n}\n.button-image {\n\tposition: absolute;\n\tleft: 0;\n\ttop: 0;\n\twidth: 100%;\n\theight: 100%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"editUserForm\" (ngSubmit)=\"onSubmit(editUserForm.value)\" >\n<div class=\"data\">\n\t<span class=\"input input--madoka\" [class.input--filled]=\"username.value !== ''\" >\n\t\t<input #username readonly class=\"input__field input__field--madoka\" type=\"text\" id=\"username\" [formControl]=\"editUserForm.controls['username']\" />\n\t\t<label class=\"input__label input__label--madoka\" for=\"username\">\n\t\t\t<svg class=\"graphic graphic--madoka\" width=\"100%\" height=\"100%\" viewBox=\"0 0 404 77\" preserveAspectRatio=\"none\">\n\t\t\t\t<path d=\"m0,0l404,0l0,77l-404,0l0,-77z\"/>\n\t\t\t</svg>\n\t\t\t<span class=\"input__label-content input__label-content--madoka\">Username</span>\n\t\t</label>\n\t</span>\n\t\n\t<span class=\"input input--madoka\" [class.input--filled]=\"displayName.value !== ''\" >\n\t\t<input #displayName class=\"input__field input__field--madoka\" type=\"text\" id=\"display-name\" [formControl]=\"editUserForm.controls['displayName']\" (blur)=\"onBlur($event)\" />\n\t\t<label class=\"input__label input__label--madoka\" for=\"display-name\">\n\t\t\t<svg class=\"graphic graphic--madoka\" width=\"100%\" height=\"100%\" viewBox=\"0 0 404 77\" preserveAspectRatio=\"none\">\n\t\t\t\t<path d=\"m0,0l404,0l0,77l-404,0l0,-77z\"/>\n\t\t\t</svg>\n\t\t\t<span class=\"input__label-content input__label-content--madoka\">Display Name</span>\n\t\t</label>\n\t</span>\n\t<div class=\"error\" *ngIf=\"editUserForm.controls['displayName'].hasError('maxlength') && editUserForm.controls['displayName'].touched\">At most 40 characters</div>\n\n<span class=\"input input--madoka\" [class.input--filled]=\"country.value !== ''\" >\n\t\t<input #country autocomplete=\"country-name\" class=\"input__field input__field--madoka\" type=\"text\" id=\"country\" list=\"countries\" [formControl]=\"editUserForm.controls['country']\" (blur)=\"onBlur($event)\" />\n\t\t<label class=\"input__label input__label--madoka\" for=\"country\">\n\t\t\t<svg class=\"graphic graphic--madoka\" width=\"100%\" height=\"100%\" viewBox=\"0 0 404 77\" preserveAspectRatio=\"none\">\n\t\t\t\t<path d=\"m0,0l404,0l0,77l-404,0l0,-77z\"/>\n\t\t\t</svg>\n\t\t\t<span class=\"input__label-content input__label-content--madoka\">Country</span>\n\t\t</label>\n\t</span>\n\t<div class=\"error\" *ngIf=\"editUserForm.controls['country'].hasError('maxlength') && editUserForm.controls['country'].touched\">At most 50 characters</div>\n\n\t<span class=\"input input--madoka\" [class.input--filled]=\"postalCode.value !== ''\" >\n\t\t<input #postalCode autocomplete=\"postal-code\" class=\"input__field input__field--madoka\" type=\"number\" id=\"postal-code\" [formControl]=\"editUserForm.controls['postalCode']\" (blur)=\"onBlur($event)\" />\n\t\t<label class=\"input__label input__label--madoka\" for=\"postal-code\">\n\t\t\t<svg class=\"graphic graphic--madoka\" width=\"100%\" height=\"100%\" viewBox=\"0 0 404 77\" preserveAspectRatio=\"none\">\n\t\t\t\t<path d=\"m0,0l404,0l0,77l-404,0l0,-77z\"/>\n\t\t\t</svg>\n\t\t\t<span class=\"input__label-content input__label-content--madoka\">Postal Code</span>\n\t\t</label>\n\t</span>\n\t\n\t<button type=\"submit\" [disabled]=\"!editUserForm.valid\" >\n\t\t<img class=\"button-image\" src=\"/assets/images/button-save.png\" />\n\t\t<img class=\"button-image\" src=\"/assets/images/command-glass.png\" />\n\t</button>\n</div>\n</form>\n\n<datalist id=\"countries\">\n\t<option value=\"Afghanistan\">Afghanistan</option>\n\t<option value=\"Åland Islands\">Åland Islands</option>\n\t<option value=\"Albania\">Albania</option>\n\t<option value=\"Algeria\">Algeria</option>\n\t<option value=\"American Samoa\">American Samoa</option>\n\t<option value=\"Andorra\">Andorra</option>\n\t<option value=\"Angola\">Angola</option>\n\t<option value=\"Anguilla\">Anguilla</option>\n\t<option value=\"Antarctica\">Antarctica</option>\n\t<option value=\"Antigua and Barbuda\">Antigua and Barbuda</option>\n\t<option value=\"Argentina\">Argentina</option>\n\t<option value=\"Armenia\">Armenia</option>\n\t<option value=\"Aruba\">Aruba</option>\n\t<option value=\"Australia\">Australia</option>\n\t<option value=\"Austria\">Austria</option>\n\t<option value=\"Azerbaijan\">Azerbaijan</option>\n\t<option value=\"Bahamas\">Bahamas</option>\n\t<option value=\"Bahrain\">Bahrain</option>\n\t<option value=\"Bangladesh\">Bangladesh</option>\n\t<option value=\"Barbados\">Barbados</option>\n\t<option value=\"Belarus\">Belarus</option>\n\t<option value=\"Belgium\">Belgium</option>\n\t<option value=\"Belize\">Belize</option>\n\t<option value=\"Benin\">Benin</option>\n\t<option value=\"Bermuda\">Bermuda</option>\n\t<option value=\"Bhutan\">Bhutan</option>\n\t<option value=\"Bolivia\">Bolivia</option>\n\t<option value=\"Bosnia and Herzegovina\">Bosnia and Herzegovina</option>\n\t<option value=\"Botswana\">Botswana</option>\n\t<option value=\"Bouvet Island\">Bouvet Island</option>\n\t<option value=\"Brazil\">Brazil</option>\n\t<option value=\"British Indian Ocean Territory\">British Indian Ocean Territory</option>\n\t<option value=\"Brunei Darussalam\">Brunei Darussalam</option>\n\t<option value=\"Bulgaria\">Bulgaria</option>\n\t<option value=\"Burkina Faso\">Burkina Faso</option>\n\t<option value=\"Burundi\">Burundi</option>\n\t<option value=\"Cambodia\">Cambodia</option>\n\t<option value=\"Cameroon\">Cameroon</option>\n\t<option value=\"Canada\">Canada</option>\n\t<option value=\"Cape Verde\">Cape Verde</option>\n\t<option value=\"Cayman Islands\">Cayman Islands</option>\n\t<option value=\"Central African Republic\">Central African Republic</option>\n\t<option value=\"Chad\">Chad</option>\n\t<option value=\"Chile\">Chile</option>\n\t<option value=\"China\">China</option>\n\t<option value=\"Christmas Island\">Christmas Island</option>\n\t<option value=\"Cocos (Keeling) Islands\">Cocos (Keeling) Islands</option>\n\t<option value=\"Colombia\">Colombia</option>\n\t<option value=\"Comoros\">Comoros</option>\n\t<option value=\"Congo\">Congo</option>\n\t<option value=\"Congo, The Democratic Republic of The\">Congo, The Democratic Republic of The</option>\n\t<option value=\"Cook Islands\">Cook Islands</option>\n\t<option value=\"Costa Rica\">Costa Rica</option>\n\t<option value=\"Cote D'ivoire\">Cote D'ivoire</option>\n\t<option value=\"Croatia\">Croatia</option>\n\t<option value=\"Cuba\">Cuba</option>\n\t<option value=\"Cyprus\">Cyprus</option>\n\t<option value=\"Czechia\">Czechia</option>\n\t<option value=\"Denmark\">Denmark</option>\n\t<option value=\"Djibouti\">Djibouti</option>\n\t<option value=\"Dominica\">Dominica</option>\n\t<option value=\"Dominican Republic\">Dominican Republic</option>\n\t<option value=\"Ecuador\">Ecuador</option>\n\t<option value=\"Egypt\">Egypt</option>\n\t<option value=\"El Salvador\">El Salvador</option>\n\t<option value=\"Equatorial Guinea\">Equatorial Guinea</option>\n\t<option value=\"Eritrea\">Eritrea</option>\n\t<option value=\"Estonia\">Estonia</option>\n\t<option value=\"Ethiopia\">Ethiopia</option>\n\t<option value=\"Falkland Islands (Malvinas)\">Falkland Islands (Malvinas)</option>\n\t<option value=\"Faroe Islands\">Faroe Islands</option>\n\t<option value=\"Fiji\">Fiji</option>\n\t<option value=\"Finland\">Finland</option>\n\t<option value=\"France\">France</option>\n\t<option value=\"French Guiana\">French Guiana</option>\n\t<option value=\"French Polynesia\">French Polynesia</option>\n\t<option value=\"French Southern Territories\">French Southern Territories</option>\n\t<option value=\"Gabon\">Gabon</option>\n\t<option value=\"Gambia\">Gambia</option>\n\t<option value=\"Georgia\">Georgia</option>\n\t<option value=\"Germany\">Germany</option>\n\t<option value=\"Ghana\">Ghana</option>\n\t<option value=\"Gibraltar\">Gibraltar</option>\n\t<option value=\"Greece\">Greece</option>\n\t<option value=\"Greenland\">Greenland</option>\n\t<option value=\"Grenada\">Grenada</option>\n\t<option value=\"Guadeloupe\">Guadeloupe</option>\n\t<option value=\"Guam\">Guam</option>\n\t<option value=\"Guatemala\">Guatemala</option>\n\t<option value=\"Guernsey\">Guernsey</option>\n\t<option value=\"Guinea\">Guinea</option>\n\t<option value=\"Guinea-bissau\">Guinea-bissau</option>\n\t<option value=\"Guyana\">Guyana</option>\n\t<option value=\"Haiti\">Haiti</option>\n\t<option value=\"Heard Island and Mcdonald Islands\">Heard Island and Mcdonald Islands</option>\n\t<option value=\"Holy See (Vatican City State)\">Holy See (Vatican City State)</option>\n\t<option value=\"Honduras\">Honduras</option>\n\t<option value=\"Hong Kong\">Hong Kong</option>\n\t<option value=\"Hungary\">Hungary</option>\n\t<option value=\"Iceland\">Iceland</option>\n\t<option value=\"India\">India</option>\n\t<option value=\"Indonesia\">Indonesia</option>\n\t<option value=\"Iran, Islamic Republic of\">Iran, Islamic Republic of</option>\n\t<option value=\"Iraq\">Iraq</option>\n\t<option value=\"Ireland\">Ireland</option>\n\t<option value=\"Isle of Man\">Isle of Man</option>\n\t<option value=\"Israel\">Israel</option>\n\t<option value=\"Italy\">Italy</option>\n\t<option value=\"Jamaica\">Jamaica</option>\n\t<option value=\"Japan\">Japan</option>\n\t<option value=\"Jersey\">Jersey</option>\n\t<option value=\"Jordan\">Jordan</option>\n\t<option value=\"Kazakhstan\">Kazakhstan</option>\n\t<option value=\"Kenya\">Kenya</option>\n\t<option value=\"Kiribati\">Kiribati</option>\n\t<option value=\"Korea, Democratic People's Republic of\">Korea, Democratic People's Republic of</option>\n\t<option value=\"Korea, Republic of\">Korea, Republic of</option>\n\t<option value=\"Kuwait\">Kuwait</option>\n\t<option value=\"Kyrgyzstan\">Kyrgyzstan</option>\n\t<option value=\"Lao People's Democratic Republic\">Lao People's Democratic Republic</option>\n\t<option value=\"Latvia\">Latvia</option>\n\t<option value=\"Lebanon\">Lebanon</option>\n\t<option value=\"Lesotho\">Lesotho</option>\n\t<option value=\"Liberia\">Liberia</option>\n\t<option value=\"Libyan Arab Jamahiriya\">Libyan Arab Jamahiriya</option>\n\t<option value=\"Liechtenstein\">Liechtenstein</option>\n\t<option value=\"Lithuania\">Lithuania</option>\n\t<option value=\"Luxembourg\">Luxembourg</option>\n\t<option value=\"Macao\">Macao</option>\n\t<option value=\"Macedonia, The Former Yugoslav Republic of\">Macedonia, The Former Yugoslav Republic of</option>\n\t<option value=\"Madagascar\">Madagascar</option>\n\t<option value=\"Malawi\">Malawi</option>\n\t<option value=\"Malaysia\">Malaysia</option>\n\t<option value=\"Maldives\">Maldives</option>\n\t<option value=\"Mali\">Mali</option>\n\t<option value=\"Malta\">Malta</option>\n\t<option value=\"Marshall Islands\">Marshall Islands</option>\n\t<option value=\"Martinique\">Martinique</option>\n\t<option value=\"Mauritania\">Mauritania</option>\n\t<option value=\"Mauritius\">Mauritius</option>\n\t<option value=\"Mayotte\">Mayotte</option>\n\t<option value=\"Mexico\">Mexico</option>\n\t<option value=\"Micronesia, Federated States of\">Micronesia, Federated States of</option>\n\t<option value=\"Moldova, Republic of\">Moldova, Republic of</option>\n\t<option value=\"Monaco\">Monaco</option>\n\t<option value=\"Mongolia\">Mongolia</option>\n\t<option value=\"Montenegro\">Montenegro</option>\n\t<option value=\"Montserrat\">Montserrat</option>\n\t<option value=\"Morocco\">Morocco</option>\n\t<option value=\"Mozambique\">Mozambique</option>\n\t<option value=\"Myanmar\">Myanmar</option>\n\t<option value=\"Namibia\">Namibia</option>\n\t<option value=\"Nauru\">Nauru</option>\n\t<option value=\"Nepal\">Nepal</option>\n\t<option value=\"Netherlands\">Netherlands</option>\n\t<option value=\"Netherlands Antilles\">Netherlands Antilles</option>\n\t<option value=\"New Caledonia\">New Caledonia</option>\n\t<option value=\"New Zealand\">New Zealand</option>\n\t<option value=\"Nicaragua\">Nicaragua</option>\n\t<option value=\"Niger\">Niger</option>\n\t<option value=\"Nigeria\">Nigeria</option>\n\t<option value=\"Niue\">Niue</option>\n\t<option value=\"Norfolk Island\">Norfolk Island</option>\n\t<option value=\"Northern Mariana Islands\">Northern Mariana Islands</option>\n\t<option value=\"Norway\">Norway</option>\n\t<option value=\"Oman\">Oman</option>\n\t<option value=\"Pakistan\">Pakistan</option>\n\t<option value=\"Palau\">Palau</option>\n\t<option value=\"Palestinian Territory, Occupied\">Palestinian Territory, Occupied</option>\n\t<option value=\"Panama\">Panama</option>\n\t<option value=\"Papua New Guinea\">Papua New Guinea</option>\n\t<option value=\"Paraguay\">Paraguay</option>\n\t<option value=\"Peru\">Peru</option>\n\t<option value=\"Philippines\">Philippines</option>\n\t<option value=\"Pitcairn\">Pitcairn</option>\n\t<option value=\"Poland\">Poland</option>\n\t<option value=\"Portugal\">Portugal</option>\n\t<option value=\"Puerto Rico\">Puerto Rico</option>\n\t<option value=\"Qatar\">Qatar</option>\n\t<option value=\"Reunion\">Reunion</option>\n\t<option value=\"Romania\">Romania</option>\n\t<option value=\"Russian Federation\">Russian Federation</option>\n\t<option value=\"Rwanda\">Rwanda</option>\n\t<option value=\"Saint Helena\">Saint Helena</option>\n\t<option value=\"Saint Kitts and Nevis\">Saint Kitts and Nevis</option>\n\t<option value=\"Saint Lucia\">Saint Lucia</option>\n\t<option value=\"Saint Pierre and Miquelon\">Saint Pierre and Miquelon</option>\n\t<option value=\"Saint Vincent and The Grenadines\">Saint Vincent and The Grenadines</option>\n\t<option value=\"Samoa\">Samoa</option>\n\t<option value=\"San Marino\">San Marino</option>\n\t<option value=\"Sao Tome and Principe\">Sao Tome and Principe</option>\n\t<option value=\"Saudi Arabia\">Saudi Arabia</option>\n\t<option value=\"Senegal\">Senegal</option>\n\t<option value=\"Serbia\">Serbia</option>\n\t<option value=\"Seychelles\">Seychelles</option>\n\t<option value=\"Sierra Leone\">Sierra Leone</option>\n\t<option value=\"Singapore\">Singapore</option>\n\t<option value=\"Slovakia\">Slovakia</option>\n\t<option value=\"Slovenia\">Slovenia</option>\n\t<option value=\"Solomon Islands\">Solomon Islands</option>\n\t<option value=\"Somalia\">Somalia</option>\n\t<option value=\"South Africa\">South Africa</option>\n\t<option value=\"South Georgia and The South Sandwich Islands\">South Georgia and The South Sandwich Islands</option>\n\t<option value=\"Spain\">Spain</option>\n\t<option value=\"Sri Lanka\">Sri Lanka</option>\n\t<option value=\"Sudan\">Sudan</option>\n\t<option value=\"Suriname\">Suriname</option>\n\t<option value=\"Svalbard and Jan Mayen\">Svalbard and Jan Mayen</option>\n\t<option value=\"Swaziland\">Swaziland</option>\n\t<option value=\"Sweden\">Sweden</option>\n\t<option value=\"Switzerland\">Switzerland</option>\n\t<option value=\"Syrian Arab Republic\">Syrian Arab Republic</option>\n\t<option value=\"Taiwan, Province of China\">Taiwan, Province of China</option>\n\t<option value=\"Tajikistan\">Tajikistan</option>\n\t<option value=\"Tanzania, United Republic of\">Tanzania, United Republic of</option>\n\t<option value=\"Thailand\">Thailand</option>\n\t<option value=\"Timor-leste\">Timor-leste</option>\n\t<option value=\"Togo\">Togo</option>\n\t<option value=\"Tokelau\">Tokelau</option>\n\t<option value=\"Tonga\">Tonga</option>\n\t<option value=\"Trinidad and Tobago\">Trinidad and Tobago</option>\n\t<option value=\"Tunisia\">Tunisia</option>\n\t<option value=\"Turkey\">Turkey</option>\n\t<option value=\"Turkmenistan\">Turkmenistan</option>\n\t<option value=\"Turks and Caicos Islands\">Turks and Caicos Islands</option>\n\t<option value=\"Tuvalu\">Tuvalu</option>\n\t<option value=\"Uganda\">Uganda</option>\n\t<option value=\"Ukraine\">Ukraine</option>\n\t<option value=\"United Arab Emirates\">United Arab Emirates</option>\n\t<option value=\"United Kingdom\">United Kingdom</option>\n\t<option value=\"United States\">United States</option>\n\t<option value=\"United States Minor Outlying Islands\">United States Minor Outlying Islands</option>\n\t<option value=\"Uruguay\">Uruguay</option>\n\t<option value=\"Uzbekistan\">Uzbekistan</option>\n\t<option value=\"Vanuatu\">Vanuatu</option>\n\t<option value=\"Venezuela\">Venezuela</option>\n\t<option value=\"Viet Nam\">Viet Nam</option>\n\t<option value=\"Virgin Islands, British\">Virgin Islands, British</option>\n\t<option value=\"Virgin Islands, U.S.\">Virgin Islands, U.S.</option>\n\t<option value=\"Wallis and Futuna\">Wallis and Futuna</option>\n\t<option value=\"Western Sahara\">Western Sahara</option>\n\t<option value=\"Yemen\">Yemen</option>\n\t<option value=\"Zambia\">Zambia</option>\n\t<option value=\"Zimbabwe\">Zimbabwe</option>\n</datalist>\n"

/***/ }),

/***/ "../../../../../src/app/auth/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_data_service__ = __webpack_require__("../../../../../src/app/common/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_notification_hub_service__ = __webpack_require__("../../../../../src/app/common/notification-hub.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_utilities_service__ = __webpack_require__("../../../../../src/app/common/utilities.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__redux_action_creators_user_action_creators__ = __webpack_require__("../../../../../src/app/redux-action-creators/user.action-creators.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_componentAnimations__ = __webpack_require__("../../../../../src/app/common/componentAnimations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_user__ = __webpack_require__("../../../../../src/app/common/user.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
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
/***********************************************************************************/









/***********************************************************************************/
/**
 * Displays user profile form for viewing and changing
 * user profile data.
 *
 * @class ProfileComponent
 */
var ProfileComponent = (function () {
    function ProfileComponent(appStore, fb, dataService, actionCreators, router, notificationHubService, utilitiesService, route) {
        this.appStore = appStore;
        this.fb = fb;
        this.dataService = dataService;
        this.actionCreators = actionCreators;
        this.router = router;
        this.notificationHubService = notificationHubService;
        this.utilitiesService = utilitiesService;
        this.route = route;
        this.routeAnimation = true;
        this.display = 'block';
        this.position = 'absolute';
        this.top = '0px';
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Collect user data
        this.unsubscribe = this.route.data
            .subscribe(function (data) {
            _this.user = data.user;
            _this.notificationHubService.emit(__WEBPACK_IMPORTED_MODULE_4__common_notification_hub_service__["b" /* HubNotificationType */].AppState, "User profile ('Esc' to cancel)");
            _this.editUserForm = _this.fb.group({
                'username': [_this.user.username], 'displayName': [_this.user.displayName, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].maxLength(40)],
                'country': [_this.user.country, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].maxLength(50)], 'postalCode': [_this.user.postalCode]
            });
        });
        // Listens for escape key pressed to quit the component
        //subscribe to Redux store state changes
        this.unsubscribeStore = this.appStore.subscribe(function () {
            var state = _this.appStore.getState();
            if (state.system.escKeyPressed)
                _this.cancel();
        });
    };
    ProfileComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe.unsubscribe();
        this.unsubscribeStore();
    };
    /**
     * This method sends edit user form values to the server
     *
     * @method onSubmit
     * @param formValues The collected form values
     */
    ProfileComponent.prototype.onSubmit = function (formValues) {
        var _this = this;
        if (!this.editUserForm.valid)
            return;
        var editedUser = new __WEBPACK_IMPORTED_MODULE_8__common_user__["a" /* User */];
        editedUser.username = formValues.username;
        editedUser.displayName = formValues.displayName && formValues.displayName.trim();
        editedUser.country = formValues.country && formValues.country.trim();
        editedUser.postalCode = formValues.postalCode;
        if (editedUser.username && editedUser.displayName && editedUser.country && editedUser.postalCode)
            editedUser.registrationCompleted = true;
        this.dataService.updateUser(editedUser).then(function () {
            _this.notificationHubService.emit(__WEBPACK_IMPORTED_MODULE_4__common_notification_hub_service__["b" /* HubNotificationType */].Success, 'User data saved');
            _this.actionCreators.editUser(editedUser);
            _this.router.navigate(['/dashboard']);
        })
            .catch(function (error) { return _this.utilitiesService.handleError(error); });
    };
    /**
     * Trims input fields on losing focus
     *
     * @method onBlur
     * @param event:any
     */
    ProfileComponent.prototype.onBlur = function (event) {
        event.target.value = event.target.value.trim();
    };
    /**
     * Quits the component by routing away
     *
     * @method cancel
     */
    ProfileComponent.prototype.cancel = function () {
        // Simply navigate back to reminders view
        this.router.navigate(['dashboard']); // Go up to parent route     
    };
    return ProfileComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('@routeAnimation'),
    __metadata("design:type", Object)
], ProfileComponent.prototype, "routeAnimation", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('style.display'),
    __metadata("design:type", Object)
], ProfileComponent.prototype, "display", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('style.position'),
    __metadata("design:type", Object)
], ProfileComponent.prototype, "position", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('style.top'),
    __metadata("design:type", Object)
], ProfileComponent.prototype, "top", void 0);
ProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/auth/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/auth/profile/profile.component.css")],
        animations: [__WEBPACK_IMPORTED_MODULE_7__common_componentAnimations__["a" /* slideFromLeftToRightAnimation */]]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('AppStore')),
    __metadata("design:paramtypes", [Object, typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__common_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__common_data_service__["a" /* DataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__redux_action_creators_user_action_creators__["a" /* UserActionCreators */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__redux_action_creators_user_action_creators__["a" /* UserActionCreators */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__common_notification_hub_service__["a" /* NotificationHubService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__common_notification_hub_service__["a" /* NotificationHubService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__common_utilities_service__["a" /* UtilitiesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__common_utilities_service__["a" /* UtilitiesService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _g || Object])
], ProfileComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/auth/sign-in/sign-in.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapper {\n\ttext-align: center;\n}\n.auth-image {\n\twidth: 2em;\n}\nspan {\n\tfont-size: 1.5em;\n\tcolor: floralwhite;\n\tfont-family: Garamond, Baskerville, \"Baskerville Old Face\", \"Hoefler Text\", \"Times New Roman\", serif;\n}\np {\n\ttext-align: left;\n\tpadding: 0 1em;\n\tcolor: floralwhite;\n\tfont-family: Garamond, Baskerville, \"Baskerville Old Face\", \"Hoefler Text\", \"Times New Roman\", serif;\n}\n.username {\n\twidth: 90%;\n}\nbutton {\n\tposition: relative;\n\twidth: 7.6vw;\n\tmin-width: 5em;\n\theight: 2.6vw;\n\tmin-height: 2em;\n\tmargin: 1em auto;\n\tborder: none;\n\tbackground-size: 100% 100%;\n\tcursor: pointer;\n}\n.green-button {\n\tbackground-color: darkgreen;\n\tbackground-image: url(\"/assets/images/command-background.jpg\");\n}\n.blue-button {\n\tbackground-color: darkblue;\n\tbackground-image: url(\"/assets/images/command-background-blue.jpg\");\n}\n.green-button:hover {\n\tbackground-image: url(\"/assets/images/command-hover.jpg\");\n}\n.blue-button:hover {\n\tbackground-image: url(\"/assets/images/command-hover-blue.jpg\");\n}\n.button-image {\n\tposition: absolute;\n\tleft: 0;\n\ttop: 0;\n\twidth: 100%;\n\theight: 100%;\n}\n.error {\n\tcolor: red;\n}\n@media screen and (min-width: 1280px) and (min-aspect-ratio: 15/9) and (orientation: landscape) {\n\tbutton {\n\t\twidth: 6.5vw;\n\t\theight:  2.2vw;\n\t}\n}\n@media screen and (max-width: 786px) {\n\t.wrapper {\n\t\tfont-size: 0.8rem;\n\t}\n\tspan {\n\t\tfont-size: 1.3em;\n\t}\n}\n@media screen and (max-width: 580px) {\n\tbutton {\n\t\tmargin: 0.5em auto;\n\t}\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/sign-in/sign-in.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n\t<img class=\"auth-image\" src=\"/assets/images/application-openid.png\" alt=\"authentication\" />\n\t<span class=\"title-text\">Sign In / Register</span>\n\t<p>This application doesn't have a fully fledged back-end. Your only identification is your username.</p>\n\t<input class=\"username\" type=\"text\" (input)=\"onInputChange($event)\" [formControl]=\"nameCtrl\" (keyup)=\"onKey($event)\" />\n\t<button class=\"green-button\" (click)=\"onSignIn()\" [disabled]=\"!nameCtrl.valid\">\n\t\t<img class=\"button-image\" src=\"/assets/images/signin-text.png\" />\n\t\t<img class=\"button-image\" src=\"/assets/images/command-glass.png\" />\n\t</button>\n\t<button class=\"blue-button\" routerLink=\"/landing/signUp\">\n\t\t<img class=\"button-image\" src=\"/assets/images/register-text.png\" />\n\t\t<img class=\"button-image\" src=\"/assets/images/command-glass.png\" />\n\t</button>\n\t<div *ngIf=\"showError\" class=\"error\">username doesn't exist</div>\n\t<div class=\"error\" *ngIf=\"nameCtrl.hasError('maxlength') && nameCtrl.touched\">User name can be at most twenty characters long</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/auth/sign-in/sign-in.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_auth_service__ = __webpack_require__("../../../../../src/app/common/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignInComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Handles sign-in process by displaying and managing sign-in form
 *
 * @class SignInComponent
 */
var SignInComponent = (function () {
    function SignInComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.showError = false;
        this.nameCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].maxLength(20)]));
    }
    SignInComponent.prototype.ngOnInit = function () {
    };
    SignInComponent.prototype.onInputChange = function (event) {
        this.showError = false;
        this.username = event.target.value.trim();
    };
    /**
     * Listens for enter key pressed to submit user name
     *
     * @method onKey
     * @param event:any
     */
    SignInComponent.prototype.onKey = function (event) {
        if (event.key === 'Enter') {
            this.onSignIn(); // Simply call onSignIn method
        }
    };
    /**
     * Tries to sign-in user whose username is collected from the sign-in form
     *
     * @method onSignIn
     */
    SignInComponent.prototype.onSignIn = function () {
        var _this = this;
        if (!this.username)
            return; // we are not interested in empty user-name
        this.auth.logIn(this.username).then(function (loggedIn) {
            if (!loggedIn)
                _this.showError = true; // show that name is taken
            else
                _this.router.navigate(['/dashboard']); // go to application
        });
    };
    return SignInComponent;
}());
SignInComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-sign-in',
        template: __webpack_require__("../../../../../src/app/auth/sign-in/sign-in.component.html"),
        styles: [__webpack_require__("../../../../../src/app/auth/sign-in/sign-in.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__common_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__common_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], SignInComponent);

var _a, _b;
//# sourceMappingURL=sign-in.component.js.map

/***/ }),

/***/ "../../../../../src/app/auth/sign-up/sign-up.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapper {\n\ttext-align: center;\n}\n.auth-image {\n\twidth: 2em;\n}\nspan {\n\tfont-size: 1.5em;\n\tcolor: floralwhite;\n\tfont-family: Garamond, Baskerville, \"Baskerville Old Face\", \"Hoefler Text\", \"Times New Roman\", serif;\n}\np {\n\ttext-align: left;\n\tpadding: 0 1em;\n\tcolor: floralwhite;\n\tfont-family: Garamond, Baskerville, \"Baskerville Old Face\", \"Hoefler Text\", \"Times New Roman\", serif;\n}\n.username {\n\twidth: 90%;\n}\nbutton {\n\tposition: relative;\n\twidth: 7.6vw;\n\tmin-width: 5em;\n\theight: 2.6vw;\n\tmin-height: 2em;\n\tmargin: 1em auto;\n\tborder: none;\n\tbackground-size: 100% 100%;\n\tcursor: pointer;\n}\n.green-button {\n\tbackground-color: darkgreen;\n\tbackground-image: url(\"/assets/images/command-background.jpg\");\n}\n.blue-button {\n\tbackground-color: darkblue;\n\tbackground-image: url(\"/assets/images/command-background-blue.jpg\");\n}\n.green-button:hover {\n\tbackground-image: url(\"/assets/images/command-hover.jpg\");\n}\n.blue-button:hover {\n\tbackground-image: url(\"/assets/images/command-hover-blue.jpg\");\n}\n.button-image {\n\tposition: absolute;\n\tleft: 0;\n\ttop: 0;\n\twidth: 100%;\n\theight: 100%;\n}\n.error {\n\tcolor: red;\n}\n@media screen and (min-width: 1280px) and (min-aspect-ratio: 15/9) and (orientation: landscape) {\n\tbutton {\n\t\twidth: 6.5vw;\n\t\theight:  2.2vw;\n\t}\n}\n@media screen and (max-width: 786px) {\n\t.wrapper {\n\t\tfont-size: 0.8rem;\n\t}\n\tspan {\n\t\tfont-size: 1.3em;\n\t}\n}\n@media screen and (max-width: 580px) {\n\tbutton {\n\t\tmargin: 0.5em auto;\n\t}\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/sign-up/sign-up.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n\t<img class=\"auth-image\" src=\"/assets/images/application-openid.png\" alt=\"authentication\" />\n\t<span class=\"title-text\">Sign In / Register</span>\n\t<p>To register, just choose your username. This is not the same as your display name, which you can set later. </p>\n\t<input class=\"username\" type=\"text\" (input)=\"onInputChange($event)\" [formControl]=\"nameCtrl\" (keyup)=\"onKey($event)\" #name />\n\t<button class=\"green-button\" (click)=\"onSignUp()\" [disabled]=\"!nameCtrl.valid || name.value.trim() === ''\">\n\t\t<img class=\"button-image\" src=\"/assets/images/register-text.png\" />\n\t\t<img class=\"button-image\" src=\"/assets/images/command-glass.png\" />\n\t</button>\n\t<button class=\"blue-button\" routerLink=\"/landing/signIn\" >\n\t\t<img class=\"button-image\" src=\"/assets/images/signin-text.png\" />\n\t\t<img class=\"button-image\" src=\"/assets/images/command-glass.png\" />\n\t</button>\n\t<div *ngIf=\"username\" class=\"error\">\n\t\t{{ (usernameTaken | async) ? 'username taken' : '' }}\n\t</div>\n\t<div *ngIf=\"showError\" class=\"error\">{{showError}}</div>\n\t<div class=\"error\" *ngIf=\"nameCtrl.hasError('maxlength') && nameCtrl.touched\">User name can be at most twenty characters long</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/auth/sign-up/sign-up.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_auth_service__ = __webpack_require__("../../../../../src/app/common/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Handles sign up by displaying and managing sign-up form
 *
 * @class SignUpComponent
 */
var SignUpComponent = (function () {
    function SignUpComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.userNames = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["Subject"]();
        this.usernameTaken = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"]();
        this.nameCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].maxLength(20)]));
    }
    SignUpComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.usernameTaken = this.userNames
            .debounceTime(300) // wait for 300ms pause in events
            .distinctUntilChanged() // ignore if next search term is same as previous
            .switchMap(function (name) {
            // return the http search observable
            return _this.auth.nameExists(name);
        });
    };
    SignUpComponent.prototype.onInputChange = function (event) {
        this.showError = false;
        this.username = event.target.value.trim();
        this.search(this.username);
    };
    /**
   * Triggers the search if entered username exists on the server
   * Observables are used; the logic itself is contained in ngOnInit method
   *
   * @method search
   */
    SignUpComponent.prototype.search = function (name) {
        // Push a search term into the observable stream
        this.userNames.next(name);
    };
    /**
     * Listens for enter key pressed to submit user name
     *
     * @method onKey
     * @param event:any
     */
    SignUpComponent.prototype.onKey = function (event) {
        if (event.key === 'Enter') {
            this.onSignUp(); // Simply call onSignUp method
        }
    };
    /**
     * Tries to create new user account collecting username from the sign-up form
     *
     * @method onSignUp
     */
    SignUpComponent.prototype.onSignUp = function () {
        var _this = this;
        this.showError = '';
        if (!this.username)
            return; // we are not interested in empty user-name
        this.auth.signUp(this.username).then(function (error) {
            if (error)
                _this.showError = error; // show that sign up didn't succeed
            else
                _this.router.navigate(['/dashboard']); // go to application
        });
    };
    return SignUpComponent;
}());
SignUpComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-sign-up',
        template: __webpack_require__("../../../../../src/app/auth/sign-up/sign-up.component.html"),
        styles: [__webpack_require__("../../../../../src/app/auth/sign-up/sign-up.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_8__common_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__common_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], SignUpComponent);

var _a, _b;
//# sourceMappingURL=sign-up.component.js.map

/***/ }),

/***/ "../../../../../src/app/car-detail-view/car-detail-view.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".left-subview {\n\twidth: 33%;\n}\n\n.right-subview {\n\tposition: absolute;\n\ttop: 0;\n\tleft: 34%;\n\twidth: 65%;\n\tmin-width: 18em;\n\toverflow-x: hidden;\n\toverflow-y: auto;\n}\n\n@media screen and (max-width: 1280px) {\n\t.left-subview {\n\t\twidth: 22%;\n\t}\n\t.right-subview {\n\t\twidth: 77%;\n\t\tleft: 23%;\n\t}\n}\n@media screen and (max-width: 1080px) {\n\t.left-subview {\n\t\twidth: 17em;\n\t}\n\t.right-subview {\n\t\twidth: 27em;\n\t\tleft: 18em;\n\t}\n}\n@media screen and (max-width: 786px) {\n\t.car-details-subview {\n\t\tdisplay: block;\n\t}\n\t.left-subview {\n\t\twidth: 100%;\n\t}\n\t.right-subview {\n\t\tleft: 0;\n\t\ttop: 20rem;\n\t\twidth: 100%;\n\t}\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/car-detail-view/car-detail-view.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"car-details-subview left-subview\">\n  <app-cars-list [cars]=\"cars\" [fillUps]=\"fillUps\"></app-cars-list>\n</div>\n<app-accordion class=\"car-details-subview right-subview\"></app-accordion>\n"

/***/ }),

/***/ "../../../../../src/app/car-detail-view/car-detail-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__redux_action_creators_system_action_creators__ = __webpack_require__("../../../../../src/app/redux-action-creators/system.action-creators.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarDetailViewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
   * This component is a view wrapper for car detail view
   *
   * @class CarDetailViewComponent
   */
var CarDetailViewComponent = (function () {
    function CarDetailViewComponent(actionCreators, route) {
        this.actionCreators = actionCreators;
        this.route = route;
    }
    CarDetailViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.data /* get cars and fill up data from the resolver service */
            .subscribe(function (data) {
            _this.cars = data.cars;
            _this.fillUps = data.fillUps;
        });
        window.addEventListener("resize", function () {
            _this.actionCreators.windowResized();
        });
    };
    CarDetailViewComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    return CarDetailViewComponent;
}());
CarDetailViewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-car-detail-view',
        template: __webpack_require__("../../../../../src/app/car-detail-view/car-detail-view.component.html"),
        styles: [__webpack_require__("../../../../../src/app/car-detail-view/car-detail-view.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__redux_action_creators_system_action_creators__["a" /* SystemActionCreators */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__redux_action_creators_system_action_creators__["a" /* SystemActionCreators */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object])
], CarDetailViewComponent);

var _a, _b;
//# sourceMappingURL=car-detail-view.component.js.map

/***/ }),

/***/ "../../../../../src/app/car-detail-view/cars-list/cars-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cars-list {\n\twidth: 100%;\n\tdisplay:  -webkit-box;\n\tdisplay:  -ms-flexbox;\n\tdisplay:  flex;\n\t-webkit-box-orient: vertical;\n\t-webkit-box-direction: normal;\n\t    -ms-flex-direction: column;\n\t        flex-direction: column;\n\t-webkit-box-align: center;\n\t    -ms-flex-align: center;\n\t        align-items: center;\n}\n@media screen and (max-width: 786px) {\n\t.cars-list {\n\t\t-webkit-box-orient: horizontal;\n\t\t-webkit-box-direction: normal;\n\t\t    -ms-flex-direction: row;\n\t\t        flex-direction: row;\n\t\toverflow-x: auto;\n\t}\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/car-detail-view/cars-list/cars-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"cars-list\">\n\t<app-car-card *ngFor=\"let car of cars\" [car]=\"car\" [fillUps]=\"fillUps\" [selectedCarId]=\"selectedCarId\" [selectedCommand]=\"selectedCommand\">\n\t</app-car-card>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/car-detail-view/cars-list/cars-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_notification_hub_service__ = __webpack_require__("../../../../../src/app/common/notification-hub.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_componentAnimations__ = __webpack_require__("../../../../../src/app/common/componentAnimations.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarsListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/***********************************************************************************/




/***********************************************************************************/
/**
 * This component displays the list of all the cars by iterating
 * cars array and sending each car to car component
 * for display
 *
 * @class CarsListComponent
 */
var CarsListComponent = (function () {
    function CarsListComponent(notificationHubService, router, route) {
        this.notificationHubService = notificationHubService;
        this.router = router;
        this.route = route;
        this.routeAnimation = true;
        this.display = 'block';
        this.position = 'relative';
    }
    CarsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.selectedCarId = this.route.snapshot.params['carId'];
        this.checkActiveCommand();
        this.sub = this.router.events.subscribe(function (val) {
            if (val instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* NavigationEnd */]) {
                _this.checkActiveCommand();
                _this.selectedCarId = _this.route.snapshot.params['carId'];
            }
        });
    };
    CarsListComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    CarsListComponent.prototype.checkActiveCommand = function () {
        if (this.route.children[0].snapshot.url[0]) {
            if (this.route.children[0].snapshot.url[0].toString() === 'fillUps') {
                // Fill ups are selected
                this.selectedCommand = 1;
            }
            else if (this.route.children[0].snapshot.url[0].toString() === 'reminders') {
                // Reminders are selected
                this.selectedCommand = 2;
            }
        } // finished with sub routes
        else {
            this.selectedCommand = 0;
        }
    };
    return CarsListComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], CarsListComponent.prototype, "cars", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], CarsListComponent.prototype, "fillUps", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('@routeAnimation'),
    __metadata("design:type", Object)
], CarsListComponent.prototype, "routeAnimation", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('style.display'),
    __metadata("design:type", Object)
], CarsListComponent.prototype, "display", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('style.position'),
    __metadata("design:type", Object)
], CarsListComponent.prototype, "position", void 0);
CarsListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-cars-list',
        template: __webpack_require__("../../../../../src/app/car-detail-view/cars-list/cars-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/car-detail-view/cars-list/cars-list.component.css")],
        animations: [__WEBPACK_IMPORTED_MODULE_3__common_componentAnimations__["a" /* slideFromLeftToRightAnimation */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__common_notification_hub_service__["a" /* NotificationHubService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__common_notification_hub_service__["a" /* NotificationHubService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object])
], CarsListComponent);

var _a, _b, _c;
//# sourceMappingURL=cars-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/car-detail/accordion/accordion.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapper {\n\tposition:  relative;\n\theight: 59vw;\n\toverflow: hidden;\n}\n.slider-car {\n\tposition: absolute;\n\twidth: 100%;\n\tleft: 0;\t\t\t\t\t/* Car slider to the far left */\n\tbackground-color: lightgray;\n\tbackground-image: url(\"/assets/images/details-pane.jpg\");\n\tbackground-size: 100%;\n\ttransition: left 0.7s, top 0.7s;\n}\n.slider-fill-ups {\t\t\t\n\tposition: absolute;\n\twidth: 100%;\n\tleft:  58vw;\t/* Right position for fill ups means 6vw from the right edge */\n\tbackground-color: lightgray;\n\tbackground-image: url(\"/assets/images/fillups-pane.jpg\");\n\tbackground-size: 100%;\n\ttransition: left 0.7s, top 0.7s;\n}\n.slider-reminders {\n\tposition: absolute;\n\twidth: 100%;\n\tleft: 61vw;\t/* Right position for fill ups means 3vw from the right edge */\n\tbackground-color: lightgray;\n\tbackground-image: url(\"/assets/images/reminders-pane.jpg\");\n\tbackground-size: 100%;\n\ttransition: left 0.7s, top 0.7s;\n}\n.tab {\n\twidth: 3vw;\n\tmin-width: 2em;\n\theight: 59vw;\n}\n@media screen and (min-width: 1280px) and (min-aspect-ratio: 15/9) and (orientation: landscape) {\n\t.wrapper {\n\t\theight: 48vw;\n\t}\n\t.tab {\n\t\theight: 48vw;\n\t\twidth: 2.5vw;\n\t}\n\t.slider-fill-ups {\n\t\tleft:  50vw;\n\t}\n\t.slider-reminders {\n\t\tleft:  52.5vw;\n\t}\n}\n@media screen and (min-width:1081px) and (max-width: 1280px) {\n\t.wrapper {\n\t\theight: 59vw;\n\t}\n\t.tab {\n\t\twidth: 3.5vw;\n\t\theight: 59vw;\n\t}\n\t.slider-fill-ups {\n\t\tleft: 69.3vw;\n\t}\n\t.slider-reminders {\n\t\tleft: 72.8vw;\n\t}\n}\n@media screen and (max-width: 1080px) {\n\t.slider-car {\n\t\tbackground-size: 685px;\n\t}\n\t.slider-fill-ups {\n\t\tbackground-size: 685px;\n\t}\n\t.slider-reminders {\n\t\tbackground-size: 685px;\n\t}\n}\n@media screen and (min-width: 787px) and (max-width: 1080px) {\n\t.wrapper {\n\t\twidth: 27em;\n\t\theight: 66.5rem;\n\t}\n\t.tab {\n\t\theight: 66.5rem;\n\t}\n\t.slider-fill-ups {\n\t\tleft:  23em;\n\t}\n\t.slider-reminders {\n\t\tleft:  25em;\n\t}\n}\n@media screen and (max-width: 786px) {\n\t.wrapper {\n\t\twidth: 27em;\n\t\theight: 71rem;\n\t\t/* Center accordion widget */\n\t\tmargin-left: auto;\n\t\tmargin-right: auto;\n\t}\n\t.tab {\n\t\twidth: 100%;\n\t\theight: 2rem;\n\t}\n\t.slider-car {\n\t\theight: 67rem;\n\t}\n\t.slider-fill-ups {\n\t\tleft: 0;\n\t\ttop: 67rem;\n\t\theight: 67rem;\n\t}\n\t.slider-reminders {\n\t\tleft: 0;\n\t\ttop: 69rem;\n\t\theight: 67rem;\n\t}\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/car-detail/accordion/accordion.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n\t<div class=\"slider-car\">\n\t\t<div class=\"tab car\" id=\"car-tab\" (click)=\"basicCarDataClicked()\">\n\t\t</div>\n\t</div>\n\t<div class=\"slider-fill-ups\"> \n\t\t<div class=\"tab fill-ups\" id=\"fill-ups-tab\" (click)=\"fillUpsClicked()\">\n\t\t</div>\n\t</div>\n\t<div class=\"slider-reminders\">\n\t\t<div class=\"tab reminders\" id=\"reminders-tab\" (click)=\"remindersClicked()\"> \n\t\t</div>\n\t</div>\n\t<div class=\"slider-info\">\n\t\t<router-outlet></router-outlet>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/car-detail/accordion/accordion.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_componentAnimations__ = __webpack_require__("../../../../../src/app/common/componentAnimations.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccordionComponent; });
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



/**
 * Displays accordion component, which handles all the car detail data
 *
 * @class FillUpsComponent
 */
var AccordionComponent = (function () {
    function AccordionComponent(appStore, router, route) {
        this.appStore = appStore;
        this.router = router;
        this.route = route;
        this.previousTab = 0;
        this.sliderName = ['', 'slider-fill-ups', 'slider-reminders'];
        this.tabPositions = ['l', 'r', 'r'];
        this.routeAnimation = true;
        this.display = 'block';
        this.position = 'absolute';
    }
    AccordionComponent.prototype.ngOnInit = function () {
        var _this = this;
        //subscribe to Redux store state changes
        this.unsubscribeStore = this.appStore.subscribe(function () {
            var state = _this.appStore.getState();
            _this.windowResized = state.system.windowResized;
            if (_this.windowResized) {
                _this.drawSliders();
            }
        });
        // arange tabs reading the actual route
        this.arrangeTabs(this.getTabIndexFromRoute());
        // and on every route change repeat the same
        this.sub = this.router.events.subscribe(function (val) {
            if (val instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* NavigationEnd */]) {
                _this.arrangeTabs(_this.getTabIndexFromRoute());
            }
        });
    };
    AccordionComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
        this.unsubscribeStore();
    };
    AccordionComponent.prototype.basicCarDataClicked = function () {
        this.router.navigate(['./'], { relativeTo: this.route });
        this.arrangeTabs(0);
    };
    AccordionComponent.prototype.fillUpsClicked = function () {
        this.router.navigate(['fillUps'], { relativeTo: this.route });
        this.arrangeTabs(1);
    };
    AccordionComponent.prototype.remindersClicked = function () {
        this.router.navigate(['reminders'], { relativeTo: this.route });
        this.arrangeTabs(2);
    };
    AccordionComponent.prototype.arrangeTabs = function (newTab) {
        var element;
        // Move to the left tabs that should be moved to left
        // Which ones is decided from the indexes of currently selected and newly selected tabs
        if (newTab > this.previousTab) {
            for (var i = this.previousTab + 1; i <= newTab; ++i)
                this.tabPositions[i] = 'l';
        }
        else if (this.previousTab > newTab) {
            for (var i = newTab + 1; i <= this.previousTab; ++i)
                this.tabPositions[i] = 'r';
        }
        this.drawSliders();
        //  Hide accordion content while slides are moving (for 0.7 seconds)
        if (this.previousTab !== undefined && this.previousTab != newTab) {
            element = document.getElementsByClassName('slider-info').item(0);
            element.style.display = 'none';
            setTimeout(function () {
                element.style.display = 'block';
            }, 700);
        }
        this.previousTab = newTab;
    };
    /**
     * Moves accordion sliders on theirs place
     *
     * @method drawSliders
     */
    AccordionComponent.prototype.drawSliders = function () {
        var element;
        var widescreen = window.matchMedia('screen and (min-width: 1280px) and (min-aspect-ratio: 15/9) and (orientation: landscape)');
        var smallerScreen = window.matchMedia('screen and (min-width:1081px) and (max-width: 1280px)');
        var smallScreen = window.matchMedia('screen and (max-width: 1080px)');
        var smallestScreen = window.matchMedia('screen and (max-width: 786px)');
        element = document.getElementsByClassName(this.sliderName[1]).item(0); // So that compiler doesn't yell
        if (this.tabPositions[1] === 'l') {
            if (element) {
                if (smallestScreen.matches) {
                    element.style.top = '2rem';
                    element.style.left = '0rem';
                }
                else if (smallerScreen.matches) {
                    element.style.left = '2.8rem';
                    element.style.top = '0rem';
                }
                else if (smallScreen.matches) {
                    element.style.left = '2rem';
                    element.style.top = '0rem';
                }
                else {
                    element.style.left = '3vw';
                    element.style.top = '0rem';
                }
            }
        }
        else {
            if (element) {
                if (smallestScreen.matches) {
                    element.style.top = '67rem';
                    element.style.left = '0rem';
                }
                else if (widescreen.matches) {
                    element.style.left = '50vw';
                    element.style.top = '0rem';
                }
                else if (smallerScreen.matches) {
                    element.style.left = '69.3vw';
                    element.style.top = '0rem';
                }
                else if (smallScreen.matches) {
                    element.style.left = '23rem';
                    element.style.top = '0rem';
                }
                else {
                    element.style.left = '58.5vw';
                    element.style.top = '0rem';
                }
            }
        }
        element = document.getElementsByClassName(this.sliderName[2]).item(0); // So that compiler doesn't yell
        if (this.tabPositions[2] === 'l') {
            if (element) {
                if (smallestScreen.matches) {
                    element.style.top = '4rem';
                    element.style.left = '0rem';
                }
                else if (smallerScreen.matches) {
                    element.style.left = '5.5rem';
                    element.style.top = '0rem';
                }
                else if (smallScreen.matches) {
                    element.style.left = '4rem';
                    element.style.top = '0rem';
                }
                else {
                    element.style.left = '6vw';
                    element.style.top = '0rem';
                }
            }
        }
        else {
            if (element) {
                if (smallestScreen.matches) {
                    element.style.top = '69rem';
                    element.style.left = '0rem';
                }
                else if (widescreen.matches) {
                    element.style.left = '52.5vw';
                    element.style.top = '0rem';
                }
                else if (smallerScreen.matches) {
                    element.style.left = '72.8vw';
                    element.style.top = '0rem';
                }
                else if (smallScreen.matches) {
                    element.style.left = '25rem';
                    element.style.top = '0rem';
                }
                else {
                    element.style.left = '61.5vw';
                    element.style.top = '0rem';
                }
            }
        }
    }; // End of method
    /**
       * Returns the index of accordion tab from the selected routes
       *
       * @method getTabIndexFromRoute
       * @return {number}  The index of selected tab
       */
    AccordionComponent.prototype.getTabIndexFromRoute = function () {
        var childRouteUrl = this.route.snapshot.firstChild.url; // either fillups or reminders or edit car
        if (!childRouteUrl[0])
            return 0;
        else if (childRouteUrl[0].toString() === 'editCar')
            return 0; // tab 0 is selected
        else if (childRouteUrl[0].toString() === 'fillUps')
            return 1; // then tab 1 is active
        else
            return 2; // else tab 2
    };
    return AccordionComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('@routeAnimation'),
    __metadata("design:type", Object)
], AccordionComponent.prototype, "routeAnimation", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('style.display'),
    __metadata("design:type", Object)
], AccordionComponent.prototype, "display", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('style.position'),
    __metadata("design:type", Object)
], AccordionComponent.prototype, "position", void 0);
AccordionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-accordion',
        template: __webpack_require__("../../../../../src/app/car-detail/accordion/accordion.component.html"),
        styles: [__webpack_require__("../../../../../src/app/car-detail/accordion/accordion.component.css")],
        animations: [__WEBPACK_IMPORTED_MODULE_2__common_componentAnimations__["b" /* slideFromRightToLeftAnimation */]]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('AppStore')),
    __metadata("design:paramtypes", [Object, typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object])
], AccordionComponent);

var _a, _b;
//# sourceMappingURL=accordion.component.js.map

/***/ }),

/***/ "../../../../../src/app/car-detail/basic-car-data/basic-car-data.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".data {\n\tmargin-top: 2vw;\n\ttext-align: left;\n}\np {\n\tcolor: dimgray;\n\tmargin: 0;\n}\n.value {\n\tfont-family: Garamond, Baskerville, \"Baskerville Old Face\", \"Hoefler Text\", \"Times New Roman\", serif;\n\tfont-size: 2rem;\n\tmargin-bottom: 1rem;\n\tmargin-left: 1rem;\n}\n.field {\n\tmargin-top: 0.2rem;\n\tmargin-left: 1rem;\n\tfont-size: 0.8rem;\n\tfont-weight: bold;\n}\n.basic-car-data-view {\t/* The whole 'basic car data' frame within the accordion widget */\n\tposition: relative; \n\ttop: 2rem;\n\tleft:  3vw;\n\twidth: -webkit-fit-content;\n\twidth: -moz-fit-content;\n\twidth: fit-content;\n\theight: 53vw;\n}\n/* This frame has two sub-views */\n.accordion-sub-view {\n\tposition: relative; /* we want sub-views layed out horizontally */\n\tdisplay: inline-block; /* So we make them in-line block and position them relatively */\n\tvertical-align: top; /* Needed for inline-blick to be propperly aligned to the top */\n\twidth: 26vw;\n\n\theight: 100%;\n\toverflow-y: auto;\n\toverflow-x: hidden;\n}\nbutton {\n\tdisplay: inline-block;\n\tposition: relative;\n\twidth: 5rem;\n\theight: 1.9rem;\n\tmargin: 1rem 1rem 0 1rem;\n\tborder-width: 0;\n\tbackground-color: darkgreen;\n\tbackground-image: url(\"/assets/images/command-background.jpg\");\n\tbackground-size: 100% 100%;\n\tcursor: pointer;\n}\nbutton:hover {\n\tbackground-image: url(\"/assets/images/command-hover.jpg\");\n}\n.button-image {\n\tposition: absolute;\n\tleft: 0;\n\ttop: 0;\n\twidth: 100%;\n\theight: 100%;\n}\n.overdue-reminders {\n\tmargin-top: 6rem;\n}\n@media screen and (min-width: 1281px) and (min-aspect-ratio: 15/9) and (orientation: landscape) {\n\t.basic-car-data-view {\n\t\theight: 42.5vw;\n\t\tleft: 2.5vw;\n\t}\n\t.accordion-sub-view {\n\t\twidth:  22vw;\n\t}\n\tbutton {\n\t\twidth: 6.5vw;\n\t\theight:  2.2vw;\n\t}\n}\n@media screen and (min-width: 1081px) and (max-width: 1280px) {\n\t.basic-car-data-view {\n\t\theight: 60vw;\n\t\tleft: 3em;\n\t}\n\t.accordion-sub-view {\n\t\twidth: 30vw;\n\t}\n}\n@media screen and (min-width: 787px) and (max-width: 1080px) {\n\t.accordion-sub-view {\n\t\tdisplay:  block;\n\t\theight: -webkit-fit-content;\n\t\theight: -moz-fit-content;\n\t\theight: fit-content;\n\t\tmax-height: 48%;\n\t\twidth: 18em;\n\t}\n\t.basic-car-data-view {\n\t\tleft: 2.5em;\n\t\theight: 67.5rem;\n\t}\n\t.overdue-reminders {\n\t\tmargin-top: 2rem;\n\t}\n}\n@media screen and (max-width: 786px) {\n\t.accordion-sub-view {\n\t\tdisplay:  block;\n\t\theight: -webkit-fit-content;\n\t\theight: -moz-fit-content;\n\t\theight: fit-content;\n\t\tmax-height: 48%;\n\t\twidth: 18em;\n\t\toverflow-x: auto;\n\t}\n\t.basic-car-data-view {\n\t\tleft: 0;\n\t\ttop: 2rem;\n\t\theight: 65rem;\n\t\t/* Center accordion sub-view */\n\t\tmargin-left: auto;\n\t\tmargin-right: auto;\n\t}\n\t.overdue-reminders {\n\t\tmargin-top: 2rem;\n\t}\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/car-detail/basic-car-data/basic-car-data.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"basic-car-data-view\">\n\t<div class=\"accordion-sub-view\">\n\t\t<app-basic-car-stats-charts [fillUps]=\"fillUps\"></app-basic-car-stats-charts>\n\t</div>\n\t<div class=\"accordion-sub-view\">\n\t  <button routerLink='editCar' id=\"edit-car\">\n\t\t\t<img class=\"button-image\" src=\"/assets/images/button-edit.png\" />\n\t\t\t<img class=\"button-image\" src=\"/assets/images/command-glass.png\" />\n\t\t</button>\n\t\t<button (click)='deleteCar()'>\n\t\t\t<img class=\"button-image\" src=\"/assets/images/button-delete.png\" />\n\t\t\t<img class=\"button-image\" src=\"/assets/images/command-glass.png\" />\n\t\t</button>\n\t  <div class=\"data\">\n\t\t  <p class=\"field\">VEHICLE NAME</p>\n\t\t  <p class=\"value\">{{car.name}}<p>\n\t\t  <p class=\"field\">VEHICLE YEAR</p>\n\t\t  <p class=\"value\">{{car.year}}<p>\n\t\t  <p class=\"field\">MODEL</p>\n\t\t  <p class=\"value\">{{car.model}}<p>\n\t\t\t<p *ngIf=\"fillUps[fillUps.length-1]\" class=\"field\">ODOMETER</p>\n\t\t  <p *ngIf=\"fillUps[fillUps.length-1]\" class=\"value\">{{fillUps[fillUps.length-1] && fillUps[fillUps.length-1].odometer}} miles</p>\n\t\t</div>\n\t  <div class=\"overdue-reminders\">\n\t  \t<app-overdue-reminders [reminders]=\"reminders\"></app-overdue-reminders>\n\t  </div>\n\t</div>\n</div>\n<div>\n"

/***/ }),

/***/ "../../../../../src/app/car-detail/basic-car-data/basic-car-data.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_data_service__ = __webpack_require__("../../../../../src/app/common/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_notification_hub_service__ = __webpack_require__("../../../../../src/app/common/notification-hub.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_utilities_service__ = __webpack_require__("../../../../../src/app/common/utilities.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicCarDataComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/***********************************************************************************/





/***********************************************************************************/
/**
 * Handles basic car data for selected car, inside accordion component
 *
 * @class FillUpsComponent
 */
var BasicCarDataComponent = (function () {
    function BasicCarDataComponent(dataService, utilitiesService, route, router, notificationHubService) {
        this.dataService = dataService;
        this.utilitiesService = utilitiesService;
        this.route = route;
        this.router = router;
        this.notificationHubService = notificationHubService;
    }
    BasicCarDataComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.data /* get a fill up data from the resolver service */
            .subscribe(function (data) {
            _this.car = data.car;
            _this.fillUps = data.fillUps;
            _this.reminders = data.reminders;
            _this.notificationHubService.emit(__WEBPACK_IMPORTED_MODULE_3__common_notification_hub_service__["b" /* HubNotificationType */].AppState, 'Basic data for ' + _this.car.name);
        });
    };
    BasicCarDataComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    /**
      * Deletes car from the database and navigates to dashboard.
      *
      * @method deleteCar()
      */
    BasicCarDataComponent.prototype.deleteCar = function () {
        var _this = this;
        this.dataService.deleteCar(this.car.id).then(function () {
            _this.notificationHubService.emit(__WEBPACK_IMPORTED_MODULE_3__common_notification_hub_service__["b" /* HubNotificationType */].Success, 'Car deleted');
            _this.router.navigate(['/dashboard']);
        })
            .catch(function (error) { return _this.utilitiesService.handleError(error); });
    };
    return BasicCarDataComponent;
}());
BasicCarDataComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-basic-car-data',
        template: __webpack_require__("../../../../../src/app/car-detail/basic-car-data/basic-car-data.component.html"),
        styles: [__webpack_require__("../../../../../src/app/car-detail/basic-car-data/basic-car-data.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__common_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__common_data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__common_utilities_service__["a" /* UtilitiesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__common_utilities_service__["a" /* UtilitiesService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__common_notification_hub_service__["a" /* NotificationHubService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__common_notification_hub_service__["a" /* NotificationHubService */]) === "function" && _e || Object])
], BasicCarDataComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=basic-car-data.component.js.map

/***/ }),

/***/ "../../../../../src/app/car-detail/basic-car-data/basic-car-stats-charts/basic-car-stats-charts.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "p {\n\tcolor: dimgray;\n\tmargin: 1rem 0;\n}\n.title {\n\tfont-family: Garamond, Baskerville, \"Baskerville Old Face\", \"Hoefler Text\", \"Times New Roman\", serif;\n\tfont-size: 2rem;\n\tmargin-bottom: 1rem;\n}\n.chart-legend,\n.highcharts-credit {\n\tfont-family: Garamond, Baskerville, \"Baskerville Old Face\", \"Hoefler Text\", \"Times New Roman\", serif;\n}\n.charts {\n\tmargin-left: 2rem;\n}\n@media screen and (max-width: 1080px) {\n\t.charts {\n\t\tmargin-left: 0;\n\t}\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/car-detail/basic-car-data/basic-car-stats-charts/basic-car-stats-charts.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"charts\">\n\t<p class=\"title\">Last 12 Months</p>\n\t<p class=\"chart-legend\">Average Fuel Efficiency</p>\n\t<chart [options]=\"fuelOptions\" (load)=\"saveChart($event.target)\">\n\t          <!-- <series (hide)=\"onSeriesHide($event.context)\"> -->\n\t           <!-- <point (select)=\"onPointSelect($event.context)\"></point> -->\n\t          <!-- </series> -->\n\t</chart>\n\t<p class=\"chart-legend\">Total Distance Travelled</p>\n\t<chart [options]=\"distanceOptions\" (load)=\"saveChart($event.target)\"></chart>\n\t<p class=\"chart-legend\">Total Cost</p>\n\t<chart [options]=\"costOptions\" (load)=\"saveChart($event.target)\"></chart>\n\t<p class=\"highcharts-credit\"><em>powered by Highcharts</em></p>\n</div>"

/***/ }),

/***/ "../../../../../src/app/car-detail/basic-car-data/basic-car-stats-charts/basic-car-stats-charts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicCarStatsChartsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BasicCarStatsChartsComponent = (function () {
    function BasicCarStatsChartsComponent() {
    }
    BasicCarStatsChartsComponent.prototype.ngOnChanges = function (changes) {
        this.fillUps = changes.fillUps.currentValue;
        var averageFuellEfficiency, totalDistanceTravelled, totalCost;
        if (!this.fillUps || this.fillUps.length < 2) {
            averageFuellEfficiency = [];
            totalDistanceTravelled = [];
            totalCost = [];
        }
        else {
            this.datedFillUps = this.createArrayOfDatedFillUps(this.fillUps);
            averageFuellEfficiency = this.createAverageEfficiencyArray(this.datedFillUps);
            totalDistanceTravelled = this.createDistanceTravelledArray(this.datedFillUps);
            totalCost = this.createTotalCostArray(this.datedFillUps);
        }
        this.fuelOptions = {
            title: { text: null },
            series: [{
                    name: 'Average Fuel Efficiency',
                    data: averageFuellEfficiency
                }],
            chart: { width: 270, height: 135 },
            credits: {
                enabled: false
            },
            legend: {
                enabled: false
            },
            yAxis: {
                title: { text: null }
            },
            xAxis: {
                type: 'datetime'
            }
        };
        this.distanceOptions = {
            title: { text: null },
            series: [{
                    name: 'Total Distance Travelled',
                    data: totalDistanceTravelled
                }],
            chart: { width: 270, height: 135 },
            credits: {
                enabled: false
            },
            legend: {
                enabled: false
            },
            yAxis: {
                title: { text: null }
            },
            xAxis: {
                type: 'datetime'
            }
        };
        this.costOptions = {
            title: { text: null },
            series: [{
                    name: 'Total Cost',
                    data: totalCost
                }],
            chart: { width: 270, height: 135 },
            credits: {
                enabled: false
            },
            legend: {
                enabled: false
            },
            yAxis: {
                title: { text: null }
            },
            xAxis: {
                type: 'datetime'
            }
        };
    };
    BasicCarStatsChartsComponent.prototype.saveChart = function (chart) {
        this.chart = chart;
    };
    //
    // methods that follow are used for statistical calculations
    //
    /**
     * Creates array of average fuel spending efficiency to insert into a chart
     *
     * @method createAverageEfficiencyArray
     * @param datedFillUps Fill ups, sorted by date, which will be used for calculations
     * @return {Array} Elements of the array are tuples [date, efficiency]
     */
    BasicCarStatsChartsComponent.prototype.createAverageEfficiencyArray = function (datedFillUps) {
        // create an array containing [date, distanceTravelled/fuelspent] entries
        var distanceTravelled = 0;
        var averageFuelEfficiency = datedFillUps.map(function (fillUp, index) {
            if (index > 0) {
                var distanceTravelledCurrent = fillUp.odometer - distanceTravelled;
                distanceTravelled = fillUp.odometer;
                return [new Date(fillUp.date).valueOf(), distanceTravelledCurrent / fillUp.quantity];
            }
            else {
                distanceTravelled = fillUp.odometer;
                return null; // for the first fill up we have no value
            }
        });
        // cut out the first element
        return averageFuelEfficiency.slice(1, averageFuelEfficiency.length);
    };
    /**
     * Creates array of distance travelled to insert into a chart
     *
     * @method createDistanceTravelledArray
     * @param datedFillUps Fill ups, sorted by date, which will be used for calculations
     * @return {Array} Elements of the array are tuples [date, distance travelled]
     */
    BasicCarStatsChartsComponent.prototype.createDistanceTravelledArray = function (datedFillUps) {
        var distanceTravelled = 0;
        var totalDistanceTravelled = datedFillUps.map(function (fillUp, index) {
            if (index > 0) {
                var distanceTravelledCurrent = fillUp.odometer - distanceTravelled;
                distanceTravelled = fillUp.odometer;
                return [new Date(fillUp.date).valueOf(), distanceTravelledCurrent];
            }
            else {
                distanceTravelled = fillUp.odometer;
                return null; // for the first fill up we have no value
            }
        });
        // cut out the first element
        return totalDistanceTravelled.slice(1, totalDistanceTravelled.length);
    };
    /**
     * Creates array of total cost to insert into a chart
     *
     * @method createTotalCostArray
     * @param datedFillUps Fill ups, sorted by date, which will be used for calculations
     * @return {Array} Elements of the array are tuples [date, cost]
     */
    BasicCarStatsChartsComponent.prototype.createTotalCostArray = function (datedFillUps) {
        return datedFillUps.map(function (fillUp) {
            return [new Date(fillUp.date).valueOf(), fillUp.quantity * fillUp.pricePerGalon];
        });
    };
    /** A helper method for the three statistical functions
     *
     * @method createArrayOfDatedFillUps
     * @param allFillUps All fill ups for the car
     * @return {Array} Arrays of fill ups for the car from the last 12 months
     */
    BasicCarStatsChartsComponent.prototype.createArrayOfDatedFillUps = function (allFillUps) {
        // First filter fill ups so we have only the needed ones
        var datedFillUps;
        var dateNow = new Date();
        var yearAgo = new Date().setMonth(dateNow.getMonth() - 12);
        datedFillUps = allFillUps.filter(function (fillUp) {
            var fillUpDate = new Date(fillUp.date); // in the future or older then 12 months
            return (dateNow > fillUpDate) && (fillUpDate.valueOf() > yearAgo);
        });
        // arange them in the order of ascending dates
        return datedFillUps.sort(function (fillUp1, fillUp2) { return fillUp1.date > fillUp2.date ? 1 : -1; });
    };
    return BasicCarStatsChartsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], BasicCarStatsChartsComponent.prototype, "fillUps", void 0);
BasicCarStatsChartsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-basic-car-stats-charts',
        template: __webpack_require__("../../../../../src/app/car-detail/basic-car-data/basic-car-stats-charts/basic-car-stats-charts.component.html"),
        styles: [__webpack_require__("../../../../../src/app/car-detail/basic-car-data/basic-car-stats-charts/basic-car-stats-charts.component.css")]
    }),
    __metadata("design:paramtypes", [])
], BasicCarStatsChartsComponent);

//# sourceMappingURL=basic-car-stats-charts.component.js.map

/***/ }),

/***/ "../../../../../src/app/car-detail/basic-car-data/edit-car/edit-car.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* For \"Madoka\" Inputs */\n* {\n\tbox-sizing: border-box;\n}\n\n.edit-car-view { /* The whole car details frame within the accordion widget */\n\tposition: relative;\n\tleft: 4vw;\n\ttop: 2vw;\n\t\n\twidth: 50vw;\n\theight: 50.2rem;\n\n\tfont-size: 1.5rem;\n\n\toverflow-y: auto;\n\toverflow-x: hidden;\n}\nlabel {\n\tdisplay: block;\n}\nbutton {\n\tdisplay: block;\n\tposition: relative;\n\twidth: 5rem;\n\theight: 1.9rem;\n\tmargin-top: 1rem;\n\tmargin-bottom: 0.125rem;\n\tborder-width: 0;\n\tbackground-color: darkgreen;\n\tbackground-image: url(\"/assets/images/command-background.jpg\");\n\tbackground-size: 100% 100%;\n\tcursor: pointer;\n}\nbutton:hover {\n\tbackground-image: url(\"/assets/images/command-hover.jpg\");\n}\n.button-image {\n\tposition: absolute;\n\tleft: 0;\n\ttop: 0;\n\twidth: 100%;\n\theight: 100%;\n}\n.error {\n\tcolor:  red;\n\ttext-align: left;\n\tfont-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n\tfont-size: 70.25%;\n\tfont-weight: bold;\n\tmargin-top: 0.5rem;\n\tmargin-bottom: -1rem;\n}\n.image-text {\n\tfont-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n\tfont-size: 70.25%;\n\tfont-weight: bold;\n\tcolor: #6a7989;\n}\n.file-upload {\t/* Customize image upload button */\n\tposition: relative;\t\n\toverflow: hidden;\n\n\tdisplay: -webkit-box;\n\n\tdisplay: -ms-flexbox;\n\n\tdisplay: flex;\t/* Span text must be centered*/\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n\n\twidth: 7.6vw;\t/* 'Button' style */\n\tmin-width: 6.1rem;\n\theight: 2.6vw;\n\tmin-height: 2rem;\n\n\tmargin-top: 2rem;\n\tmargin-bottom: 0.125em;\n\n\ttext-align: center;\n\tfont-size: 1.2rem;\n\t\n\tbackground-color: darkgreen;\n\tbackground-image: url(\"/assets/images/command-background.jpg\");\n\tbackground-size: 100% 100%;\n\tcursor: pointer;\n}\n.file-upload:hover {\n\tbackground-image: url(\"/assets/images/command-hover.jpg\");\n}\n.text {\n\tcursor: pointer;\n\tfont-size: 0.9rem;\n}\n.button-image {\n\tposition: absolute;\n\tleft: 0;\n\ttop: 0;\n\twidth: 100%;\n\theight: 100%;\n\tcursor: pointer;\n}\ninput[type='file'] {\t/* This will be clickable*/\n  position: absolute;\n  top: 0;\n  left: 0;\n  opacity: 0;\t/* but invisible*/\n  cursor: pointer;\n\n\twidth: 7.6vw;\n\tmin-width: 6.1rem;\n\theight: 2.6vw;\n\tmin-height: 2rem;\n}\n\n@media screen and (min-width: 1281px) and (min-aspect-ratio: 15/9) and (orientation: landscape) {\n\t.edit-car-view {\n\t\twidth:  42.5vw;\n\t\tleft: 2.5vw;\n\t}\n}\n@media screen and (min-width: 1081px) and (max-width: 1280px) {\n\t.edit-car-view {\n\t\twidth: 50vw;\n\t\tleft: 3vw;\n\t}\n}\n@media screen and (min-width: 787px) and (max-width: 1080px) {\n\t.edit-car-view {\n\t\twidth: 20rem;\n\t\tleft: 2.5rem;\n\t}\n}\n@media screen and (max-width: 786px) {\n\t.edit-car-view {\n\t\twidth: 18rem;\n\t\ttop: 2rem;\n\t\tleft: 0;\n\t\tmargin-left: auto;\n\t\tmargin-right: auto;\n\t}\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/car-detail/basic-car-data/edit-car/edit-car.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"edit-car-view\" id=\"edit-car-form\">\n\n\t<span class=\"input input--madoka\" [class.input--filled]=\"carModel.value !== ''\" >\n\t\t<input #carModel class=\"input__field input__field--madoka\" type=\"text\" id=\"car-model\" [(ngModel)]='car.model' [formControl]=\"carModelCtrl\" (blur)=\"onBlur($event)\" autofocus />\n\t\t<label class=\"input__label input__label--madoka\" for=\"car-model\">\n\t\t\t<svg class=\"graphic graphic--madoka\" width=\"100%\" height=\"100%\" viewBox=\"0 0 404 77\" preserveAspectRatio=\"none\">\n\t\t\t\t<path d=\"m0,0l404,0l0,77l-404,0l0,-77z\"/>\n\t\t\t</svg>\n\t\t\t<span class=\"input__label-content input__label-content--madoka\">Car Model</span>\n\t\t</label>\n\t</span>\n\t<div class=\"error\" *ngIf=\"carModelCtrl.hasError('required') && carModelCtrl.touched\">You must provide car model</div>\n\t<div class=\"error\" *ngIf=\"carModelCtrl.hasError('maxlength') && carModelCtrl.touched\">You can enter at most twenty characters</div>\n\n\t<span class=\"input input--madoka\" [class.input--filled]=\"carName.value !== ''\" >\n\t\t<input #carName class=\"input__field input__field--madoka\" type=\"text\" id=\"car-name\" [(ngModel)]='car.name' [formControl]=\"carNameCtrl\" (blur)=\"onBlur($event)\" />\n\t\t<label class=\"input__label input__label--madoka\" for=\"car-name\">\n\t\t\t<svg class=\"graphic graphic--madoka\" width=\"100%\" height=\"100%\" viewBox=\"0 0 404 77\" preserveAspectRatio=\"none\">\n\t\t\t\t<path d=\"m0,0l404,0l0,77l-404,0l0,-77z\"/>\n\t\t\t</svg>\n\t\t\t<span class=\"input__label-content input__label-content--madoka\">Car Nick Name</span>\n\t\t</label>\n\t</span>\n\t<div class=\"error\" *ngIf=\"carNameCtrl.hasError('required') && carNameCtrl.touched\">You must provide car name</div>\n\t<div class=\"error\" *ngIf=\"carNameCtrl.hasError('maxlength') && carNameCtrl.touched\">You can enter at most twenty characters</div>\n\t<div class=\"error\" *ngIf=\"carNameCtrl.hasError('carNameNotUnique') && carModelCtrl.touched\">This nick name already exists</div>\n\n\t<span class=\"input input--madoka\" [class.input--filled]=\"carYear.value !== ''\" >\n\t\t<input #carYear class=\"input__field input__field--madoka\" type=\"text\" id=\"car-year\" [(ngModel)]='car.year' [formControl]=\"carYearCtrl\" (blur)=\"onBlur($event)\" />\n\t\t<label class=\"input__label input__label--madoka\" for=\"car-year\">\n\t\t\t<svg class=\"graphic graphic--madoka\" width=\"100%\" height=\"100%\" viewBox=\"0 0 404 77\" preserveAspectRatio=\"none\">\n\t\t\t\t<path d=\"m0,0l404,0l0,77l-404,0l0,-77z\"/>\n\t\t\t</svg>\n\t\t\t<span class=\"input__label-content input__label-content--madoka\">Car Year</span>\n\t\t</label>\n\t</span>\n\t<div class=\"error\" *ngIf=\"carYearCtrl.hasError('required') && carYearCtrl.touched\">You must provide car year</div>\n\t<div class=\"error\" *ngIf=\"carYearCtrl.hasError('pattern') && carYearCtrl.touched\">Year can contain only digits</div>\n\t<div class=\"error\" *ngIf=\"carYearCtrl.hasError('minlength') && carYearCtrl.touched\">You must enter exactly four characters</div>\n\t<div class=\"error\" *ngIf=\"carYearCtrl.hasError('maxlength') && carYearCtrl.touched\">You must enter exactly four characters</div>\n\n\t<div class=\"file-upload\">\n\t\t<span class=\"text\">Upload Image</span>\n\t\t<img class=\"button-image\" src=\"/assets/images/command-glass.png\" />\n\t\t<input id=\"car-avatar\" name=\"carAvatar\" type=\"file\" (change)=\"fileChangeListener($event)\" />\n\t</div>\n\t\n\t<img-cropper [image]=\"data\" [settings]=\"cropperSettings\"></img-cropper>\n\t<div class=\"image-text\" *ngIf=\"!imageValid\">Image must be at least 110px x 110px</div>\n\t<button id=\"updateCarButton\" (click)=\"writeCarData()\" [disabled]=\"!editCarForm.valid\">\n\t\t<img class=\"button-image\" src=\"/assets/images/button-save.png\" />\n\t\t<img class=\"button-image\" src=\"/assets/images/command-glass.png\" />\n\t</button>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/car-detail/basic-car-data/edit-car/edit-car.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_img_cropper__ = __webpack_require__("../../../../ng2-img-cropper/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_car__ = __webpack_require__("../../../../../src/app/common/car.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_data_service__ = __webpack_require__("../../../../../src/app/common/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_notification_hub_service__ = __webpack_require__("../../../../../src/app/common/notification-hub.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_utilities_service__ = __webpack_require__("../../../../../src/app/common/utilities.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditCarComponent; });
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
/***********************************************************************************/








/***********************************************************************************/
/**
 * Presents form for editing a car
 *
 * @class EditCarComponent
 */
var EditCarComponent = EditCarComponent_1 = (function () {
    function EditCarComponent(appStore, dataService, utilitiesService, notificationHubService, router, route) {
        this.appStore = appStore;
        this.dataService = dataService;
        this.utilitiesService = utilitiesService;
        this.notificationHubService = notificationHubService;
        this.router = router;
        this.route = route;
        this.imageValid = false;
        this.car = new __WEBPACK_IMPORTED_MODULE_4__common_car__["a" /* Car */];
        this.pristineCar = new __WEBPACK_IMPORTED_MODULE_4__common_car__["a" /* Car */]; // used to reset values
    }
    EditCarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.data
            .subscribe(function (data) {
            EditCarComponent_1.cars = data.cars;
            EditCarComponent_1.carId = _this.route.parent.snapshot.params['carId'];
            for (var _i = 0, _a = EditCarComponent_1.cars; _i < _a.length; _i++) {
                var car = _a[_i];
                if (car.id.toString() === EditCarComponent_1.carId) {
                    _this.car = car;
                    _this.pristineCar.model = _this.car.model;
                    _this.pristineCar.name = _this.car.name;
                    _this.pristineCar.year = _this.car.year;
                    break;
                }
            }
            _this.carModelCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].maxLength(20)]));
            _this.carNameCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].maxLength(20), EditCarComponent_1.carUnique]));
            _this.carYearCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].pattern('[0-9]+'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].minLength(4), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].maxLength(4)]));
            _this.editCarForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormGroup */]({ first: _this.carModelCtrl, second: _this.carNameCtrl, third: _this.carYearCtrl });
            // Get width of container element
            var element = document.getElementsByClassName("edit-car-view")[0];
            var width = parseInt(window.getComputedStyle(element, "").width);
            // Setting for the cropper component
            _this.cropperSettings = new __WEBPACK_IMPORTED_MODULE_3_ng2_img_cropper__["a" /* CropperSettings */]();
            _this.cropperSettings.canvasWidth = width * 0.9;
            _this.cropperSettings.canvasHeight = width * 0.4;
            _this.cropperSettings.width = width * 0.1;
            _this.cropperSettings.height = width * 0.1;
            _this.cropperSettings.croppedWidth = 110;
            _this.cropperSettings.croppedHeight = 110;
            _this.cropperSettings.rounded = false;
            _this.cropperSettings.cropperDrawSettings.strokeColor = 'rgba(255,255,255,1)';
            _this.cropperSettings.cropperDrawSettings.strokeWidth = 2;
            _this.cropperSettings.noFileInput = true;
            _this.cropperSettings.fileType = 'png';
            _this.data = {};
            _this.notificationHubService.emit(__WEBPACK_IMPORTED_MODULE_6__common_notification_hub_service__["b" /* HubNotificationType */].AppState, 'Editing ' + _this.car.name + " ('ESC' to cancel)");
        });
        // Listens for escape key pressed to quit the component
        //subscribe to Redux store state changes
        this.unsubscribeStore = this.appStore.subscribe(function () {
            var state = _this.appStore.getState();
            if (state.system.escKeyPressed)
                _this.cancel();
        });
    };
    EditCarComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
        this.unsubscribeStore();
    };
    /**
      * Writes the new car data to the database
      * and then navigates away to show all the cars.
      *
      * @method writeCarData
      */
    EditCarComponent.prototype.writeCarData = function () {
        var _this = this;
        var base64Image;
        if (this.imageValid)
            base64Image = this.data.image;
        this.car.model = this.car.model.trim();
        this.car.name = this.car.name.trim();
        this.car.year = this.car.year.trim();
        this.dataService.updateCar(this.car, base64Image).then(function () {
            // the following is a string which will be appended to image src URL in car component
            _this.utilitiesService.avatarURLFragment = '?' + Date.now().toString(); // image cache busting fragment
            _this.notificationHubService.emit(__WEBPACK_IMPORTED_MODULE_6__common_notification_hub_service__["b" /* HubNotificationType */].Success, 'Car updated'); // Notify of success via event hub service
            _this.router.navigate(['dashboard']);
        })
            .catch(function (error) { return _this.utilitiesService.handleError(error); });
    };
    /**
       * Used to send image to the image cropper component
       *
       * @method fileChangeListener
       * @param $event
       */
    EditCarComponent.prototype.fileChangeListener = function ($event) {
        var _this = this;
        var imageCache = new Image();
        var file = $event.target.files[0];
        var myReader = new FileReader();
        myReader.onloadend = function (loadEvent) {
            imageCache.src = loadEvent.target.result;
            imageCache.onload = function () {
                if (imageCache.width < 110 || imageCache.height < 110)
                    _this.imageValid = false;
                else {
                    _this.imageValid = true;
                    _this.cropper.setImage(imageCache);
                }
            };
        };
        myReader.readAsDataURL(file);
    };
    /**
     * Trims input fields on losing focus
     *
     * @method onBlur
     * @param event:any
     */
    EditCarComponent.prototype.onBlur = function (event) {
        event.target.value = event.target.value.trim();
    };
    /**
     * Quits the component by routing away
     *
     * @method cancel
     */
    EditCarComponent.prototype.cancel = function () {
        this.car.model = this.pristineCar.model;
        this.car.year = this.pristineCar.year;
        this.car.name = this.pristineCar.name;
        // Simply navigate back
        this.router.navigate(['../'], { relativeTo: this.route }); // Go up to parent route          
    };
    /**
     * A validator for a nick-name input field
     *
     * @method carUnique
     * @param control A form control to validate
     * @return {StringMap<string:boolean>} Returns the result of validation in the form {'carNameNotUnique': true}
     */
    EditCarComponent.carUnique = function (control) {
        for (var i = 0; i < EditCarComponent_1.cars.length; ++i)
            if (EditCarComponent_1.cars[i].id.toString() !== EditCarComponent_1.carId && control.value === EditCarComponent_1.cars[i].name)
                return { carNameNotUnique: true };
    };
    return EditCarComponent;
}());
EditCarComponent.cars = [{ id: '0', model: '', name: '', year: '' }];
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3_ng2_img_cropper__["b" /* ImageCropperComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_img_cropper__["b" /* ImageCropperComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng2_img_cropper__["b" /* ImageCropperComponent */]) === "function" && _a || Object)
], EditCarComponent.prototype, "cropper", void 0);
EditCarComponent = EditCarComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-edit-car',
        template: __webpack_require__("../../../../../src/app/car-detail/basic-car-data/edit-car/edit-car.component.html"),
        styles: [__webpack_require__("../../../../../src/app/car-detail/basic-car-data/edit-car/edit-car.component.css")]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('AppStore')),
    __metadata("design:paramtypes", [Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__common_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__common_data_service__["a" /* DataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__common_utilities_service__["a" /* UtilitiesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__common_utilities_service__["a" /* UtilitiesService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__common_notification_hub_service__["a" /* NotificationHubService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__common_notification_hub_service__["a" /* NotificationHubService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _f || Object])
], EditCarComponent);

var EditCarComponent_1, _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=edit-car.component.js.map

/***/ }),

/***/ "../../../../../src/app/car-detail/basic-car-data/overdue-reminders/overdue-reminders.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "p {\n\tmargin-left: 1rem;\n\tcolor: darkred;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/car-detail/basic-car-data/overdue-reminders/overdue-reminders.component.html":
/***/ (function(module, exports) {

module.exports = "<app-reminders-list-entry *ngFor='let reminder of overdueReminders' [reminder]='reminder'></app-reminders-list-entry>\n<p *ngIf=\"extraReminders > 0\">\nand {{extraReminders}} more {{pluralize}} overdue\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/car-detail/basic-car-data/overdue-reminders/overdue-reminders.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverdueRemindersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OverdueRemindersComponent = (function () {
    function OverdueRemindersComponent() {
        this.extraReminders = 0;
        this.pluralize = 'reminders';
    }
    OverdueRemindersComponent.prototype.ngOnInit = function () {
        this.overdueReminders = [];
        this.setOverdueReminders();
    };
    OverdueRemindersComponent.prototype.ngOnChanges = function (changes) {
        this.reminders = changes.reminders.currentValue;
        this.setOverdueReminders();
    };
    /**
      * Filters reminders for the car to show only over-due ones
      *
      * @method setOverdueReminders
      */
    OverdueRemindersComponent.prototype.setOverdueReminders = function () {
        this.overdueReminders = this.reminders.filter(function (reminder) {
            return Date.now() > new Date(reminder.date).valueOf();
        });
        this.extraReminders = 0;
        if (this.overdueReminders.length > 2) {
            this.extraReminders = this.overdueReminders.length - 2;
            if (this.extraReminders === 1)
                this.pluralize = 'reminder';
            else
                this.pluralize = 'reminders';
            this.overdueReminders = this.overdueReminders.slice(0, 2); // Only two overdue reminders to show
        }
    };
    return OverdueRemindersComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], OverdueRemindersComponent.prototype, "reminders", void 0);
OverdueRemindersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-overdue-reminders',
        template: __webpack_require__("../../../../../src/app/car-detail/basic-car-data/overdue-reminders/overdue-reminders.component.html"),
        styles: [__webpack_require__("../../../../../src/app/car-detail/basic-car-data/overdue-reminders/overdue-reminders.component.css")]
    })
], OverdueRemindersComponent);

//# sourceMappingURL=overdue-reminders.component.js.map

/***/ }),

/***/ "../../../../../src/app/car-detail/car-detail.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_highcharts__ = __webpack_require__("../../../../angular2-highcharts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_highcharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_highcharts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_highcharts_dist_HighchartsService__ = __webpack_require__("../../../../angular2-highcharts/dist/HighchartsService.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_highcharts_dist_HighchartsService___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_highcharts_dist_HighchartsService__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__image_cropper_image_cropper_module__ = __webpack_require__("../../../../../src/app/image-cropper/image-cropper.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__accordion_accordion_component__ = __webpack_require__("../../../../../src/app/car-detail/accordion/accordion.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__fill_ups_fill_ups_component__ = __webpack_require__("../../../../../src/app/car-detail/fill-ups/fill-ups.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__basic_car_data_basic_car_data_component__ = __webpack_require__("../../../../../src/app/car-detail/basic-car-data/basic-car-data.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__reminders_reminders_component__ = __webpack_require__("../../../../../src/app/car-detail/reminders/reminders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__fill_ups_fill_ups_list_fill_ups_list_component__ = __webpack_require__("../../../../../src/app/car-detail/fill-ups/fill-ups-list/fill-ups-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__fill_ups_fill_ups_list_fill_ups_list_entry_fill_ups_list_entry_component__ = __webpack_require__("../../../../../src/app/car-detail/fill-ups/fill-ups-list/fill-ups-list-entry/fill-ups-list-entry.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__fill_ups_fill_up_detail_fill_up_detail_component__ = __webpack_require__("../../../../../src/app/car-detail/fill-ups/fill-up-detail/fill-up-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__fill_ups_add_fill_up_add_fill_up_component__ = __webpack_require__("../../../../../src/app/car-detail/fill-ups/add-fill-up/add-fill-up.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__reminders_reminders_list_reminders_list_component__ = __webpack_require__("../../../../../src/app/car-detail/reminders/reminders-list/reminders-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__reminders_reminders_list_reminders_list_entry_reminders_list_entry_component__ = __webpack_require__("../../../../../src/app/car-detail/reminders/reminders-list/reminders-list-entry/reminders-list-entry.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__reminders_add_reminder_add_reminder_component__ = __webpack_require__("../../../../../src/app/car-detail/reminders/add-reminder/add-reminder.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__fill_ups_edit_fill_up_edit_fill_up_component__ = __webpack_require__("../../../../../src/app/car-detail/fill-ups/edit-fill-up/edit-fill-up.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__reminders_edit_reminder_edit_reminder_component__ = __webpack_require__("../../../../../src/app/car-detail/reminders/edit-reminder/edit-reminder.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__basic_car_data_edit_car_edit_car_component__ = __webpack_require__("../../../../../src/app/car-detail/basic-car-data/edit-car/edit-car.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__basic_car_data_basic_car_stats_charts_basic_car_stats_charts_component__ = __webpack_require__("../../../../../src/app/car-detail/basic-car-data/basic-car-stats-charts/basic-car-stats-charts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__basic_car_data_overdue_reminders_overdue_reminders_component__ = __webpack_require__("../../../../../src/app/car-detail/basic-car-data/overdue-reminders/overdue-reminders.component.ts");
/* unused harmony export highchartsFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarDetailModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























function highchartsFactory() {
    var hc = __webpack_require__("../../../../highcharts/highcharts.js");
    var dd = __webpack_require__("../../../../highcharts/modules/drilldown.js");
    dd(hc);
    return hc;
}
var CarDetailModule = (function () {
    function CarDetailModule() {
    }
    return CarDetailModule;
}());
CarDetailModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_4_angular2_highcharts__["ChartModule"],
            __WEBPACK_IMPORTED_MODULE_6__image_cropper_image_cropper_module__["a" /* ImageCropperModule */]
        ],
        providers: [{
                provide: __WEBPACK_IMPORTED_MODULE_5_angular2_highcharts_dist_HighchartsService__["HighchartsStatic"],
                useFactory: highchartsFactory
            }],
        declarations: [__WEBPACK_IMPORTED_MODULE_7__accordion_accordion_component__["a" /* AccordionComponent */], __WEBPACK_IMPORTED_MODULE_8__fill_ups_fill_ups_component__["a" /* FillUpsComponent */], __WEBPACK_IMPORTED_MODULE_9__basic_car_data_basic_car_data_component__["a" /* BasicCarDataComponent */], __WEBPACK_IMPORTED_MODULE_10__reminders_reminders_component__["a" /* RemindersComponent */], __WEBPACK_IMPORTED_MODULE_11__fill_ups_fill_ups_list_fill_ups_list_component__["a" /* FillUpsListComponent */], __WEBPACK_IMPORTED_MODULE_12__fill_ups_fill_ups_list_fill_ups_list_entry_fill_ups_list_entry_component__["a" /* FillUpsListEntryComponent */], __WEBPACK_IMPORTED_MODULE_13__fill_ups_fill_up_detail_fill_up_detail_component__["a" /* FillUpDetailComponent */], __WEBPACK_IMPORTED_MODULE_14__fill_ups_add_fill_up_add_fill_up_component__["a" /* AddFillUpComponent */], __WEBPACK_IMPORTED_MODULE_15__reminders_reminders_list_reminders_list_component__["a" /* RemindersListComponent */], __WEBPACK_IMPORTED_MODULE_16__reminders_reminders_list_reminders_list_entry_reminders_list_entry_component__["a" /* RemindersListEntryComponent */], __WEBPACK_IMPORTED_MODULE_17__reminders_add_reminder_add_reminder_component__["a" /* AddReminderComponent */], __WEBPACK_IMPORTED_MODULE_18__fill_ups_edit_fill_up_edit_fill_up_component__["a" /* EditFillUpComponent */], __WEBPACK_IMPORTED_MODULE_19__reminders_edit_reminder_edit_reminder_component__["a" /* EditReminderComponent */], __WEBPACK_IMPORTED_MODULE_20__basic_car_data_edit_car_edit_car_component__["a" /* EditCarComponent */], __WEBPACK_IMPORTED_MODULE_21__basic_car_data_basic_car_stats_charts_basic_car_stats_charts_component__["a" /* BasicCarStatsChartsComponent */], __WEBPACK_IMPORTED_MODULE_22__basic_car_data_overdue_reminders_overdue_reminders_component__["a" /* OverdueRemindersComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_7__accordion_accordion_component__["a" /* AccordionComponent */]]
    })
], CarDetailModule);

//# sourceMappingURL=car-detail.module.js.map

/***/ }),

/***/ "../../../../../src/app/car-detail/fill-ups/add-fill-up/add-fill-up.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* For \"Madoka\" Inputs */\n* {\n\tbox-sizing: border-box;\n}\n\nform {\n\tfont-size: 1.5rem;\n}\n\nlabel {\n\tdisplay: block;\n}\nbutton {\n\tdisplay: inline-block;\n\tposition: relative;\n\twidth: 5rem;\n\theight: 1.9rem;\n\tmargin-top: 2rem;\n\tmargin-bottom: 0.125em;\n\tborder-width: 0;\n\tbackground-color: darkgreen;\n\tbackground-image: url(\"/assets/images/command-background.jpg\");\n\tbackground-size: 100% 100%;\n\tcursor: pointer;\n}\nbutton:hover {\n\tbackground-image: url(\"/assets/images/command-hover.jpg\");\n}\n.button-image {\n\tposition: absolute;\n\tleft: 0;\n\ttop: 0;\n\twidth: 100%;\n\theight: 100%;\n}\n.error {\n\tcolor:  red;\n\ttext-align: left;\n\tfont-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n\tfont-size: 70.25%;\n\tfont-weight: bold;\n\tmargin-top: 0.5rem;\n\tmargin-bottom: -1rem;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/car-detail/fill-ups/add-fill-up/add-fill-up.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"addFillUpForm\" (ngSubmit)=\"onSubmit(addFillUpForm.value)\">\n\t\n\t<span class=\"input input--madoka\" [class.input--filled]=\"quantity.value !== ''\" >\n\t\t<input #quantity class=\"input__field input__field--madoka\" type=\"number\" id=\"quantity\" [formControl]=\"addFillUpForm.controls['quantity']\" (blur)=\"onBlur($event)\" autofocus />\n\t\t<label class=\"input__label input__label--madoka\" for=\"quantity\">\n\t\t\t<svg class=\"graphic graphic--madoka\" width=\"100%\" height=\"100%\" viewBox=\"0 0 404 77\" preserveAspectRatio=\"none\">\n\t\t\t\t<path d=\"m0,0l404,0l0,77l-404,0l0,-77z\"/>\n\t\t\t</svg>\n\t\t\t<span class=\"input__label-content input__label-content--madoka\">Gallons</span>\n\t\t</label>\n\t</span>\n\t<div class=\"error\" *ngIf=\"addFillUpForm.controls['quantity'].hasError('required') && addFillUpForm.controls['quantity'].touched\">You must provide fuel quantity</div>\n\n\t<span class=\"input input--madoka\" [class.input--filled]=\"price.value !== ''\" >\n\t\t<input #price class=\"input__field input__field--madoka\" type=\"text\" id=\"price\" [formControl]=\"addFillUpForm.controls['price']\" (blur)=\"onBlur($event)\" />\n\t\t<label class=\"input__label input__label--madoka\" for=\"price\">\n\t\t\t<svg class=\"graphic graphic--madoka\" width=\"100%\" height=\"100%\" viewBox=\"0 0 404 77\" preserveAspectRatio=\"none\">\n\t\t\t\t<path d=\"m0,0l404,0l0,77l-404,0l0,-77z\"/>\n\t\t\t</svg>\n\t\t\t<span class=\"input__label-content input__label-content--madoka\">Price per gallon</span>\n\t\t</label>\n\t</span>\n\t<div class=\"error\" *ngIf=\"addFillUpForm.controls['price'].hasError('required') && addFillUpForm.controls['price'].touched\">You must provide fuel price</div>\n\t<div class=\"error\" *ngIf=\"addFillUpForm.controls['price'].hasError('pattern') && addFillUpForm.controls['price'].touched\">Not a valid number</div>\n\t\n\t<span class=\"input input--madoka\" [class.input--filled]=\"odometer.value !== ''\" >\n\t\t<input #odometer class=\"input__field input__field--madoka\" type=\"number\" id=\"odometer\" [formControl]=\"addFillUpForm.controls['odometer']\" (blur)=\"onBlur($event)\" />\n\t\t<label class=\"input__label input__label--madoka\" for=\"odometer\">\n\t\t\t<svg class=\"graphic graphic--madoka\" width=\"100%\" height=\"100%\" viewBox=\"0 0 404 77\" preserveAspectRatio=\"none\">\n\t\t\t\t<path d=\"m0,0l404,0l0,77l-404,0l0,-77z\"/>\n\t\t\t</svg>\n\t\t\t<span class=\"input__label-content input__label-content--madoka\">Odometer</span>\n\t\t</label>\n\t</span>\n\t<div class=\"error\" *ngIf=\"addFillUpForm.controls['odometer'].hasError('required') && addFillUpForm.controls['odometer'].touched\">You must provide odometer value</div>\n\t\n\t<span class=\"input input--madoka\" [class.input--filled]=\"station.value !== ''\" >\n\t\t<input #station class=\"input__field input__field--madoka\" type=\"text\" id=\"station\" [formControl]=\"addFillUpForm.controls['station']\" (blur)=\"onBlur($event)\" />\n\t\t<label class=\"input__label input__label--madoka\" for=\"station\">\n\t\t\t<svg class=\"graphic graphic--madoka\" width=\"100%\" height=\"100%\" viewBox=\"0 0 404 77\" preserveAspectRatio=\"none\">\n\t\t\t\t<path d=\"m0,0l404,0l0,77l-404,0l0,-77z\"/>\n\t\t\t</svg>\n\t\t\t<span class=\"input__label-content input__label-content--madoka\">Station</span>\n\t\t</label>\n\t</span>\n\t<div class=\"error\" *ngIf=\"addFillUpForm.controls['station'].hasError('maxlength') && addFillUpForm.controls['station'].touched\">At most 20 characters</div>\n\n\t<span class=\"input input--madoka\" [class.input--filled]=\"date.value !== ''\" >\n\t\t<input #date class=\"input__field input__field--madoka\" type=\"date\" id=\"date\" [formControl]=\"addFillUpForm.controls['date']\" />\n\t\t<label class=\"input__label input__label--madoka\" for=\"date\">\n\t\t\t<svg class=\"graphic graphic--madoka\" width=\"100%\" height=\"100%\" viewBox=\"0 0 404 77\" preserveAspectRatio=\"none\">\n\t\t\t\t<path d=\"m0,0l404,0l0,77l-404,0l0,-77z\"/>\n\t\t\t</svg>\n\t\t\t<span class=\"input__label-content input__label-content--madoka\"></span>\n\t\t</label>\n\t</span>\n\t<div class=\"error\" *ngIf=\"addFillUpForm.controls['date'].hasError('required') && addFillUpForm.controls['date'].touched\">You must enter a date</div>\n\n\t<button type=\"submit\" [disabled]=\"!addFillUpForm.valid\" >\n\t\t<img class=\"button-image\" src=\"/assets/images/button-save.png\" />\n\t\t<img class=\"button-image\" src=\"/assets/images/command-glass.png\" />\n\t</button>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/car-detail/fill-ups/add-fill-up/add-fill-up.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_fillUp__ = __webpack_require__("../../../../../src/app/common/fillUp.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_data_service__ = __webpack_require__("../../../../../src/app/common/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_notification_hub_service__ = __webpack_require__("../../../../../src/app/common/notification-hub.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_utilities_service__ = __webpack_require__("../../../../../src/app/common/utilities.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__redux_action_creators_fill_up_action_creators__ = __webpack_require__("../../../../../src/app/redux-action-creators/fill-up-action-creators.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddFillUpComponent; });
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
/***********************************************************************************/








/***********************************************************************************/
/**
 * Controls the form for adding a fill up
 *
 * @class AddFillUpComponent
 */
var AddFillUpComponent = (function () {
    function AddFillUpComponent(appStore, actionCreators, fb, utilitiesService, notificationHubService, router, route, dataService) {
        this.appStore = appStore;
        this.actionCreators = actionCreators;
        this.fb = fb;
        this.utilitiesService = utilitiesService;
        this.notificationHubService = notificationHubService;
        this.router = router;
        this.route = route;
        this.dataService = dataService;
    }
    AddFillUpComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.unsubscribe = this.route.data // Get car data from the resolver service
            .subscribe(function (data) {
            _this.carId = data.car.id;
        });
        this.addFillUpForm = this.fb.group({
            'quantity': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required], 'price': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].pattern('[0-9]*.?[0-9]+')])], 'odometer': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required], 'station': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].maxLength(20)], 'date': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]
        });
        // Listens for escape key pressed to quit the component
        //subscribe to Redux store state changes
        this.unsubscribeStore = this.appStore.subscribe(function () {
            var state = _this.appStore.getState();
            if (state.system.escKeyPressed)
                _this.cancel();
        });
    };
    AddFillUpComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe.unsubscribe();
        this.unsubscribeStore();
    };
    /**
     * Sends add fill up form values to the server
     *
     * @method onSubmit
     * @param formValues The collected form values
     */
    AddFillUpComponent.prototype.onSubmit = function (formValues) {
        var _this = this;
        var newFillup = new __WEBPACK_IMPORTED_MODULE_3__common_fillUp__["a" /* FillUp */];
        newFillup.quantity = formValues.quantity;
        newFillup.pricePerGalon = +formValues.price;
        newFillup.odometer = formValues.odometer;
        newFillup.station = formValues.station;
        newFillup.date = formValues.date.toString();
        this.dataService.addFillUp(this.carId, newFillup).then(function (addedFillUp) {
            _this.router.navigate(['../', addedFillUp.id], { relativeTo: _this.route }); // Go up to parent route
            _this.notificationHubService.emit(__WEBPACK_IMPORTED_MODULE_5__common_notification_hub_service__["b" /* HubNotificationType */].Success, 'FillUp added');
            _this.actionCreators.addFillUp(_this.appStore.getState().fillUps.fillUps, addedFillUp);
            _this.actionCreators.selectFillUp(addedFillUp);
        })
            .catch(function (error) { return _this.utilitiesService.handleError(error); });
    };
    /**
      * Trims input fields on losing focus
      *
      * @method onBlur
      * @param event:any
      */
    AddFillUpComponent.prototype.onBlur = function (event) {
        event.target.value = event.target.value.trim();
    };
    /**
     * Quits the component by routing away
     *
     * @method cancel
     */
    AddFillUpComponent.prototype.cancel = function () {
        // Simply navigate back
        this.router.navigate(['../'], { relativeTo: this.route }); // Go up to parent route     
    };
    return AddFillUpComponent;
}());
AddFillUpComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-add-fill-up',
        template: __webpack_require__("../../../../../src/app/car-detail/fill-ups/add-fill-up/add-fill-up.component.html"),
        styles: [__webpack_require__("../../../../../src/app/car-detail/fill-ups/add-fill-up/add-fill-up.component.css")]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('AppStore')),
    __metadata("design:paramtypes", [Object, typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_7__redux_action_creators_fill_up_action_creators__["a" /* FillUpActionCreators */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__redux_action_creators_fill_up_action_creators__["a" /* FillUpActionCreators */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__common_utilities_service__["a" /* UtilitiesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__common_utilities_service__["a" /* UtilitiesService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__common_notification_hub_service__["a" /* NotificationHubService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__common_notification_hub_service__["a" /* NotificationHubService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4__common_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__common_data_service__["a" /* DataService */]) === "function" && _g || Object])
], AddFillUpComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=add-fill-up.component.js.map

/***/ }),

/***/ "../../../../../src/app/car-detail/fill-ups/edit-fill-up/edit-fill-up.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* For \"Madoka\" Inputs */\n* {\n\tbox-sizing: border-box;\n}\n\nform {\n\tfont-size: 1.5rem;\n}\n/********/\n\n\nlabel {\n\tdisplay: block;\n}\nbutton {\n\tdisplay: inline-block;\n\tposition: relative;\n\twidth: 5rem;\n\theight: 1.9rem;\n\tmargin-top: 2rem;\n\tmargin-bottom: 0.125em;\n\tborder-width: 0;\n\tbackground-color: darkgreen;\n\tbackground-image: url(\"/assets/images/command-background.jpg\");\n\tbackground-size: 100% 100%;\n\tcursor: pointer;\n}\nbutton:hover {\n\tbackground-image: url(\"/assets/images/command-hover.jpg\");\n}\n.button-image {\n\tposition: absolute;\n\tleft: 0;\n\ttop: 0;\n\twidth: 100%;\n\theight: 100%;\n}\n.error {\n\tcolor:  red;\n\ttext-align: left;\n\tfont-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n\tfont-size: 70.25%;\n\tfont-weight: bold;\n\tmargin-top: 0.5rem;\n\tmargin-bottom: -1rem;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/car-detail/fill-ups/edit-fill-up/edit-fill-up.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"editFillUpForm\" (ngSubmit)=\"onSubmit(editFillUpForm.value)\">\n\t\n\t<span class=\"input input--madoka\" [class.input--filled]=\"quantity.value !== ''\" >\n\t\t<input #quantity class=\"input__field input__field--madoka\" type=\"number\" id=\"quantity\" [formControl]=\"editFillUpForm.controls['quantity']\" (blur)=\"onBlur($event)\" autofocus />\n\t\t<label class=\"input__label input__label--madoka\" for=\"quantity\">\n\t\t\t<svg class=\"graphic graphic--madoka\" width=\"100%\" height=\"100%\" viewBox=\"0 0 404 77\" preserveAspectRatio=\"none\">\n\t\t\t\t<path d=\"m0,0l404,0l0,77l-404,0l0,-77z\"/>\n\t\t\t</svg>\n\t\t\t<span class=\"input__label-content input__label-content--madoka\">Gallons</span>\n\t\t</label>\n\t</span>\n\t<div class=\"error\" *ngIf=\"editFillUpForm.controls['quantity'].hasError('required') && editFillUpForm.controls['quantity'].touched\">You must provide fuel quantity</div>\n\n\t<span class=\"input input--madoka\" [class.input--filled]=\"price.value !== ''\" >\n\t\t<input #price class=\"input__field input__field--madoka\" type=\"text\" id=\"price\" [formControl]=\"editFillUpForm.controls['price']\" (blur)=\"onBlur($event)\" />\n\t\t<label class=\"input__label input__label--madoka\" for=\"price\">\n\t\t\t<svg class=\"graphic graphic--madoka\" width=\"100%\" height=\"100%\" viewBox=\"0 0 404 77\" preserveAspectRatio=\"none\">\n\t\t\t\t<path d=\"m0,0l404,0l0,77l-404,0l0,-77z\"/>\n\t\t\t</svg>\n\t\t\t<span class=\"input__label-content input__label-content--madoka\">Price per gallon</span>\n\t\t</label>\n\t</span>\n\t<div class=\"error\" *ngIf=\"editFillUpForm.controls['price'].hasError('required') && editFillUpForm.controls['price'].touched\">You must provide fuel price</div>\n\t<div class=\"error\" *ngIf=\"editFillUpForm.controls['price'].hasError('pattern') && editFillUpForm.controls['price'].touched\">Not a valid number</div>\n\t\n\t<span class=\"input input--madoka\" [class.input--filled]=\"odometer.value !== ''\" >\n\t\t<input #odometer class=\"input__field input__field--madoka\" type=\"number\" id=\"odometer\" [formControl]=\"editFillUpForm.controls['odometer']\" (blur)=\"onBlur($event)\" />\n\t\t<label class=\"input__label input__label--madoka\" for=\"odometer\">\n\t\t\t<svg class=\"graphic graphic--madoka\" width=\"100%\" height=\"100%\" viewBox=\"0 0 404 77\" preserveAspectRatio=\"none\">\n\t\t\t\t<path d=\"m0,0l404,0l0,77l-404,0l0,-77z\"/>\n\t\t\t</svg>\n\t\t\t<span class=\"input__label-content input__label-content--madoka\">Odometer</span>\n\t\t</label>\n\t</span>\n\t<div class=\"error\" *ngIf=\"editFillUpForm.controls['odometer'].hasError('required') && editFillUpForm.controls['odometer'].touched\">You must provide odometer value</div>\n\t\n\t<span class=\"input input--madoka\" [class.input--filled]=\"station.value !== ''\" >\n\t\t<input #station class=\"input__field input__field--madoka\" type=\"text\" id=\"station\" [formControl]=\"editFillUpForm.controls['station']\" (blur)=\"onBlur($event)\" />\n\t\t<label class=\"input__label input__label--madoka\" for=\"station\">\n\t\t\t<svg class=\"graphic graphic--madoka\" width=\"100%\" height=\"100%\" viewBox=\"0 0 404 77\" preserveAspectRatio=\"none\">\n\t\t\t\t<path d=\"m0,0l404,0l0,77l-404,0l0,-77z\"/>\n\t\t\t</svg>\n\t\t\t<span class=\"input__label-content input__label-content--madoka\">Station</span>\n\t\t</label>\n\t</span>\n\t<div class=\"error\" *ngIf=\"editFillUpForm.controls['station'].hasError('maxlength') && editFillUpForm.controls['station'].touched\">At most 20 characters</div>\n\n\t<span class=\"input input--madoka\" [class.input--filled]=\"date.value !== ''\" >\n\t\t<input #date class=\"input__field input__field--madoka\" type=\"date\" id=\"date\" [formControl]=\"editFillUpForm.controls['date']\" />\n\t\t<label class=\"input__label input__label--madoka\" for=\"date\">\n\t\t\t<svg class=\"graphic graphic--madoka\" width=\"100%\" height=\"100%\" viewBox=\"0 0 404 77\" preserveAspectRatio=\"none\">\n\t\t\t\t<path d=\"m0,0l404,0l0,77l-404,0l0,-77z\"/>\n\t\t\t</svg>\n\t\t\t<span class=\"input__label-content input__label-content--madoka\"></span>\n\t\t</label>\n\t</span>\n\t<div class=\"error\" *ngIf=\"editFillUpForm.controls['date'].hasError('required') && editFillUpForm.controls['date'].touched\">You must enter a date</div>\n\n\t<button type=\"submit\" [disabled]=\"!editFillUpForm.valid\" >\n\t\t<img class=\"button-image\" src=\"/assets/images/button-save.png\" />\n\t\t<img class=\"button-image\" src=\"/assets/images/command-glass.png\" />\n\t</button>\n</form>"

/***/ }),

/***/ "../../../../../src/app/car-detail/fill-ups/edit-fill-up/edit-fill-up.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_fillUp__ = __webpack_require__("../../../../../src/app/common/fillUp.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_data_service__ = __webpack_require__("../../../../../src/app/common/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_notification_hub_service__ = __webpack_require__("../../../../../src/app/common/notification-hub.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_utilities_service__ = __webpack_require__("../../../../../src/app/common/utilities.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__redux_action_creators_fill_up_action_creators__ = __webpack_require__("../../../../../src/app/redux-action-creators/fill-up-action-creators.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditFillUpComponent; });
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
/***********************************************************************************/








/***********************************************************************************/
/**
 * Controls the form for editing a fill up
 *
 * @class EditFillUpComponent
 */
var EditFillUpComponent = (function () {
    function EditFillUpComponent(appStore, actionCreators, fb, utilitiesService, notificationHubService, router, route, dataService) {
        this.appStore = appStore;
        this.actionCreators = actionCreators;
        this.fb = fb;
        this.utilitiesService = utilitiesService;
        this.notificationHubService = notificationHubService;
        this.router = router;
        this.route = route;
        this.dataService = dataService;
    }
    EditFillUpComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.unsubscribe = this.route.data /* get a fill up data from the resolver service */
            .subscribe(function (data) {
            _this.fillUp = data.fillUp;
            _this.carId = data.car.id;
            _this.editFillUpForm = _this.fb.group({
                'quantity': [_this.fillUp.quantity, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required], 'price': [_this.fillUp.pricePerGalon, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].pattern('[0-9]*.?[0-9]+')])],
                'odometer': [_this.fillUp.odometer, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required], 'station': [_this.fillUp.station, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].maxLength(20)], 'date': [_this.fillUp.date, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]
            });
        });
        // Listens for escape key pressed to quit the component
        //subscribe to Redux store state changes
        this.unsubscribeStore = this.appStore.subscribe(function () {
            var state = _this.appStore.getState();
            if (state.system.escKeyPressed)
                _this.cancel();
        });
    };
    EditFillUpComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe.unsubscribe();
        this.unsubscribeStore();
    };
    /**
     * Sends add fill up form values to the server
     *
     * @method onSubmit
     * @param formValues The collected form values
     */
    EditFillUpComponent.prototype.onSubmit = function (formValues) {
        var _this = this;
        var editedFillUp = new __WEBPACK_IMPORTED_MODULE_3__common_fillUp__["a" /* FillUp */];
        editedFillUp.quantity = formValues.quantity;
        editedFillUp.pricePerGalon = +formValues.price;
        editedFillUp.odometer = formValues.odometer;
        editedFillUp.station = formValues.station;
        editedFillUp.date = formValues.date.toString();
        editedFillUp.id = this.fillUp.id;
        this.dataService.updateFillUp(this.carId, editedFillUp).then(function (response) {
            _this.router.navigate(['../'], { relativeTo: _this.route }); // Go up to parent route
            _this.notificationHubService.emit(__WEBPACK_IMPORTED_MODULE_5__common_notification_hub_service__["b" /* HubNotificationType */].Success, 'FillUp updated');
            _this.actionCreators.editFillUp(_this.appStore.getState().fillUps.fillUps, editedFillUp);
            _this.actionCreators.selectFillUp(editedFillUp);
        })
            .catch(function (error) { return _this.utilitiesService.handleError(error); });
    };
    /**
      * Trims input fields on losing focus
      *
      * @method onBlur
      * @param event:any
      */
    EditFillUpComponent.prototype.onBlur = function (event) {
        event.target.value = event.target.value.trim();
    };
    /**
     * Quits the component by routing away
     *
     * @method cancel
     */
    EditFillUpComponent.prototype.cancel = function () {
        // Simply navigate back to reminders view
        this.router.navigate(['../'], { relativeTo: this.route }); // Go up to parent route     
    };
    return EditFillUpComponent;
}());
EditFillUpComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-edit-fill-up',
        template: __webpack_require__("../../../../../src/app/car-detail/fill-ups/edit-fill-up/edit-fill-up.component.html"),
        styles: [__webpack_require__("../../../../../src/app/car-detail/fill-ups/edit-fill-up/edit-fill-up.component.css")]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('AppStore')),
    __metadata("design:paramtypes", [Object, typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_7__redux_action_creators_fill_up_action_creators__["a" /* FillUpActionCreators */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__redux_action_creators_fill_up_action_creators__["a" /* FillUpActionCreators */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__common_utilities_service__["a" /* UtilitiesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__common_utilities_service__["a" /* UtilitiesService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__common_notification_hub_service__["a" /* NotificationHubService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__common_notification_hub_service__["a" /* NotificationHubService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4__common_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__common_data_service__["a" /* DataService */]) === "function" && _g || Object])
], EditFillUpComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=edit-fill-up.component.js.map

/***/ }),

/***/ "../../../../../src/app/car-detail/fill-ups/fill-up-detail/fill-up-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".component {\n\tmargin-left: 1vw;\n}\n.data {\n\tmargin-top: 3vw;\n\ttext-align: left;\n}\np {\n\tcolor: dimgray;\n\tmargin: 0;\n}\n.value {\n\tfont-family: Garamond, Baskerville, \"Baskerville Old Face\", \"Hoefler Text\", \"Times New Roman\", serif;\n\tfont-size: 2rem;\n\tmargin-bottom: 1rem;\n}\n.field {\n\tmargin-top: 0.2rem;\n\tfont-size: 0.8rem;\n\tfont-weight: bold;\n}\nbutton {\n\tdisplay: inline-block;\n\tposition: relative;\n\twidth: 5rem;\n\theight: 1.9rem;\n\tmargin: 0 1em 0 1em;\n\tborder-width: 0;\n\tbackground-color: darkgreen;\n\tbackground-image: url(\"/assets/images/command-background.jpg\");\n\tbackground-size: 100% 100%;\n\tcursor: pointer;\n}\nbutton:hover {\n\tbackground-image: url(\"/assets/images/command-hover.jpg\");\n}\n.button-image {\n\tposition: absolute;\n\tleft: 0;\n\ttop: 0;\n\twidth: 100%;\n\theight: 100%;\n}\n.buttons {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-pack: center;\n\t    -ms-flex-pack: center;\n\t        justify-content: center;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/car-detail/fill-ups/fill-up-detail/fill-up-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"component\">\n\t<div class=\"buttons\">\n\t\t<button routerLink='./editFillUp' id=\"edit-fill-up\">\n\t\t\t<img class=\"button-image\" src=\"/assets/images/button-edit.png\" />\n\t\t\t<img class=\"button-image\" src=\"/assets/images/command-glass.png\" />\n\t\t</button>\n\t\t<button (click)='deleteFillUp()'>\n\t\t\t<img class=\"button-image\" src=\"/assets/images/button-delete.png\" />\n\t\t\t<img class=\"button-image\" src=\"/assets/images/command-glass.png\" />\n\t\t</button>\n\t</div>\n\t<div class=\"data\">\n\t  <p class=\"field\">DATE</p>\n\t  <p class=\"value\">{{fillUp.date | date:'longDate'}}</p>\n\t  <p class=\"field\">TOTAL COST</p>\n\t  <p class=\"value\">${{fillUp.quantity * fillUp.pricePerGalon}}</p>\n\t  <p class=\"field\">TOTAL GALLONS</p>\n\t  <p class=\"value\">{{fillUp.quantity}}</p>\n\t  <p class=\"field\">PRICE PER GALLON</p>\n\t  <p class=\"value\">{{fillUp.pricePerGalon}}</p>\n\t  <p class=\"field\">FILL UP STATION</p>\n\t  <p class=\"value\">{{fillUp.station}}</p>\n\t  <p class=\"field\">ODOMETER</p>\n\t  <p class=\"value\">{{fillUp.odometer}}</p>\n\t</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/car-detail/fill-ups/fill-up-detail/fill-up-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_data_service__ = __webpack_require__("../../../../../src/app/common/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_notification_hub_service__ = __webpack_require__("../../../../../src/app/common/notification-hub.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_utilities_service__ = __webpack_require__("../../../../../src/app/common/utilities.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__redux_action_creators_fill_up_action_creators__ = __webpack_require__("../../../../../src/app/redux-action-creators/fill-up-action-creators.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FillUpDetailComponent; });
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






/**
 * Shows all the details of the selected fill up
 * Also handles deletion of a fill up
 *
 * @class FillUpDetailComponent
 */
var FillUpDetailComponent = (function () {
    function FillUpDetailComponent(appStore, actionCreators, dataService, utilitiesService, notificationHubService, router, route) {
        this.appStore = appStore;
        this.actionCreators = actionCreators;
        this.dataService = dataService;
        this.utilitiesService = utilitiesService;
        this.notificationHubService = notificationHubService;
        this.router = router;
        this.route = route;
    }
    FillUpDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub2 = this.route.data /* get a fill up data from the resolver service */
            .subscribe(function (data) {
            _this.fillUp = data.fillUp;
            _this.carId = data.car.id;
        });
        this.sub = this.route.params
            .subscribe(function (params) {
            _this.fillUpId = params['id'];
        });
    };
    FillUpDetailComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
        this.sub2.unsubscribe();
    };
    FillUpDetailComponent.prototype.deleteFillUp = function () {
        var _this = this;
        this.dataService.deleteFillUp(this.carId, this.fillUp.id).then(function () {
            _this.notificationHubService.emit(__WEBPACK_IMPORTED_MODULE_3__common_notification_hub_service__["b" /* HubNotificationType */].Success, 'Fill up deleted');
            _this.router.navigate(['../'], { relativeTo: _this.route });
            _this.actionCreators.deleteFillUp(_this.appStore.getState().fillUps.fillUps, _this.fillUp);
            _this.actionCreators.deselectFillUps();
        })
            .catch(function (error) { return _this.utilitiesService.handleError(error); });
    };
    return FillUpDetailComponent;
}());
FillUpDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-fill-up-detail',
        template: __webpack_require__("../../../../../src/app/car-detail/fill-ups/fill-up-detail/fill-up-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/car-detail/fill-ups/fill-up-detail/fill-up-detail.component.css")]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('AppStore')),
    __metadata("design:paramtypes", [Object, typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__redux_action_creators_fill_up_action_creators__["a" /* FillUpActionCreators */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__redux_action_creators_fill_up_action_creators__["a" /* FillUpActionCreators */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__common_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__common_data_service__["a" /* DataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__common_utilities_service__["a" /* UtilitiesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__common_utilities_service__["a" /* UtilitiesService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__common_notification_hub_service__["a" /* NotificationHubService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__common_notification_hub_service__["a" /* NotificationHubService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _f || Object])
], FillUpDetailComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=fill-up-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/car-detail/fill-ups/fill-ups-list/fill-ups-list-entry/fill-ups-list-entry.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div {\n\tmargin-bottom: 4px;\n\ttext-align: left;\n\tbackground-color: rgba(230,230,230, 0.5);\n\tcursor: pointer;\n}\ndiv:hover {\n\tbackground-color: rgba(255, 250, 240, 0.5);\n}\n\na,\np {\n\tmargin: 0 0 0 1rem;\n\tfont-family: \"Arial Narrow\", Arial, sans-serif;\n}\n\n.date {\n\tfont-size: 1.2rem;\n\tcolor: RoyalBlue;\n}\n.station,\n.quantity {\n\tfont-size: 0.8rem;\n\tcolor: black;\n}\n\n.selected {\n\tborder-left: 2px solid dimgray;\n\tbackground-color: rgba(255, 250, 240, 0.5);\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/car-detail/fill-ups/fill-ups-list/fill-ups-list-entry/fill-ups-list-entry.component.html":
/***/ (function(module, exports) {

module.exports = "<div [class.selected]='selectedFillUp && fillUp.id === selectedFillUp.id' class=\"fill-ups-list-entry\">\n  <a href=\"javascript:void(0)\">{{fillUp.date | date:'longDate'}}</a>\n  <p>{{fillUp.station}}</p>\n  <p>{{fillUp.quantity * fillUp.pricePerGalon}}$</p>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/car-detail/fill-ups/fill-ups-list/fill-ups-list-entry/fill-ups-list-entry.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_fillUp__ = __webpack_require__("../../../../../src/app/common/fillUp.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FillUpsListEntryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Displays single entry in fill ups list
 *
 * @class FillUpsListEntryComponent
 */
var FillUpsListEntryComponent = (function () {
    function FillUpsListEntryComponent() {
    }
    return FillUpsListEntryComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__common_fillUp__["a" /* FillUp */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__common_fillUp__["a" /* FillUp */]) === "function" && _a || Object)
], FillUpsListEntryComponent.prototype, "fillUp", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__common_fillUp__["a" /* FillUp */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__common_fillUp__["a" /* FillUp */]) === "function" && _b || Object)
], FillUpsListEntryComponent.prototype, "selectedFillUp", void 0);
FillUpsListEntryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-fill-ups-list-entry',
        template: __webpack_require__("../../../../../src/app/car-detail/fill-ups/fill-ups-list/fill-ups-list-entry/fill-ups-list-entry.component.html"),
        styles: [__webpack_require__("../../../../../src/app/car-detail/fill-ups/fill-ups-list/fill-ups-list-entry/fill-ups-list-entry.component.css")]
    })
], FillUpsListEntryComponent);

var _a, _b;
//# sourceMappingURL=fill-ups-list-entry.component.js.map

/***/ }),

/***/ "../../../../../src/app/car-detail/fill-ups/fill-ups-list/fill-ups-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/car-detail/fill-ups/fill-ups-list/fill-ups-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n\t<app-fill-ups-list-entry *ngFor='let fillUp of fillUps' [fillUp]='fillUp' (click)='onSelect(fillUp)' [selectedFillUp]='this.selectedFillUp'></app-fill-ups-list-entry>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/car-detail/fill-ups/fill-ups-list/fill-ups-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__redux_action_creators_fill_up_action_creators__ = __webpack_require__("../../../../../src/app/redux-action-creators/fill-up-action-creators.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FillUpsListComponent; });
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
/***********************************************************************************/



/***********************************************************************************/
/**
 * Displays a vertical list of fill ups for the selected car
 *
 * @class FillUpsListComponent
 */
var FillUpsListComponent = (function () {
    function FillUpsListComponent(appStore, actionCreators, router, route) {
        this.appStore = appStore;
        this.actionCreators = actionCreators;
        this.router = router;
        this.route = route;
    }
    FillUpsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.unsubscribeReduxStore = this.appStore.subscribe(function () {
            var state = _this.appStore.getState();
            _this.selectedFillUp = state.fillUps.selectedFillUp;
        });
    };
    FillUpsListComponent.prototype.ngOnChanges = function (changes) {
        if (changes.fillUps) {
            this.fillUps = changes.fillUps.currentValue;
            // Now sort fill ups by date
            this.fillUps.sort(function (fillUp1, fillUp2) { return fillUp1.date < fillUp2.date ? 1 : -1; });
        }
    };
    /**
     * Updates fill up detail view and marks fill ups list entry as selected
     *
     * @method onSelect
     */
    FillUpsListComponent.prototype.onSelect = function (fillUp) {
        this.router.navigate([fillUp.id], { relativeTo: this.route });
        this.actionCreators.selectFillUp(fillUp);
    };
    return FillUpsListComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], FillUpsListComponent.prototype, "fillUps", void 0);
FillUpsListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-fill-ups-list',
        template: __webpack_require__("../../../../../src/app/car-detail/fill-ups/fill-ups-list/fill-ups-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/car-detail/fill-ups/fill-ups-list/fill-ups-list.component.css")]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('AppStore')),
    __metadata("design:paramtypes", [Object, typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__redux_action_creators_fill_up_action_creators__["a" /* FillUpActionCreators */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__redux_action_creators_fill_up_action_creators__["a" /* FillUpActionCreators */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object])
], FillUpsListComponent);

var _a, _b, _c;
//# sourceMappingURL=fill-ups-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/car-detail/fill-ups/fill-ups.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fill-ups-view {\t/* The whole 'fill ups' frame within the accordion widget */\n\tposition: relative;\n\ttop: 2rem;\n\tleft:  6vw;\n\twidth: -webkit-fit-content;\n\twidth: -moz-fit-content;\n\twidth: fit-content;\n\theight: 50vw;\n}\n/* This frame has two sub-views */\n.accordion-sub-view {\n\tposition: relative; /* we want sub-views layed out horizontally */\n\tdisplay: inline-block; /* So we make them in-line block and position them relatively */\n\tvertical-align: top; /* Needed for inline-blick to be propperly aligned to the top */\n\ttext-align: center;\n\twidth: 26vw;\n\theight: 100%;\n\toverflow-y: auto;\n\toverflow-x: hidden;\n}\nbutton {\n\tdisplay: inline-block;\n\tposition: relative;\n\twidth: 5rem;\n\theight: 1.9rem;\n\tborder-width: 0;\n\tbackground-color: darkgreen;\n\tbackground-image: url(\"/assets/images/command-background.jpg\");\n\tbackground-size: 100% 100%;\n\tcursor: pointer;\n}\nbutton:hover {\n\tbackground-image: url(\"/assets/images/command-hover.jpg\");\n}\n.button-image {\n\tposition: absolute;\n\tleft: 0;\n\ttop: 0;\n\twidth: 100%;\n\theight: 100%;\n}\n\n@media screen and (min-width: 1280px) and (min-aspect-ratio: 15/9) and (orientation: landscape) {\n\t.accordion-sub-view {\n\t\twidth: 22vw;\n\t}\n\t.button {\n\t\twidth: 6.5vw;\n\t\theight:  2.2vw;\n\t}\n\t.fill-ups-view {\n\t\theight: 42.5vw;\n\t}\n}\n@media screen and (min-width: 1081px) and (max-width: 1280px) {\n\t.fill-ups-view {\n\t\theight: 60vw;\n\t\tleft: 6em;\n\t}\n\t.accordion-sub-view {\n\t\twidth: 30vw;\n\t}\n}\n@media screen and (min-width: 787px) and (max-width: 1080px) {\n\t.accordion-sub-view {\n\t\tdisplay:  block;\n\t\twidth: 18em;\n\t\theight: -webkit-fit-content;\n\t\theight: -moz-fit-content;\n\t\theight: fit-content;\n\t\tmax-height: 48%;\n\t}\n\t.fill-ups-view {\n\t\tleft: 5em;\n\t\theight: 67.5rem;\n\t}\n}\n@media screen and (max-width: 786px) {\n\t.accordion-sub-view {\n\t\tdisplay:  block;\n\t\theight: -webkit-fit-content;\n\t\theight: -moz-fit-content;\n\t\theight: fit-content;\n\t\tmax-height: 48%;\n\t\twidth: 18em;\n\t}\n\t.fill-ups-view {\n\t\tleft: 0;\n\t\ttop: 4rem;\n\t\theight: 65rem;\n\t\t/* Center accordion sub-view */\n\t\tmargin-left: auto;\n\t\tmargin-right: auto;\n\t}\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/car-detail/fill-ups/fill-ups.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"fill-ups-view\">\n\t<div class=\"accordion-sub-view\">\n\t\t<button (click)='onAddFillUpClick()' id=\"add-fill-up\">\n\t\t\t<img class=\"button-image\" src=\"/assets/images/button-add.png\" />\n\t\t\t<img class=\"button-image\" src=\"/assets/images/command-glass.png\" />\n\t\t</button>\n\t\t<app-fill-ups-list [fillUps]='fillUps'></app-fill-ups-list>\n\t</div>\n\t<div class=\"accordion-sub-view\">\n\t\t<router-outlet></router-outlet>\n\t</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/car-detail/fill-ups/fill-ups.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_notification_hub_service__ = __webpack_require__("../../../../../src/app/common/notification-hub.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__redux_action_creators_fill_up_action_creators__ = __webpack_require__("../../../../../src/app/redux-action-creators/fill-up-action-creators.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FillUpsComponent; });
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
/***********************************************************************************/




/***********************************************************************************/
/**
 * Handles fill ups for selected car, inside accordion component
 *
 * @class FillUpsComponent
 */
var FillUpsComponent = (function () {
    function FillUpsComponent(appStore, actionCreators, route, router, notificationHubService) {
        this.appStore = appStore;
        this.actionCreators = actionCreators;
        this.route = route;
        this.router = router;
        this.notificationHubService = notificationHubService;
    }
    FillUpsComponent.prototype.ngOnInit = function () {
        var _this = this;
        //subscribe listener to state changes
        this.unsubscribeReduxStore = this.appStore.subscribe(function () {
            var state = _this.appStore.getState();
            _this.fillUps = state.fillUps.fillUps;
            // Now sort fill ups by date
            _this.fillUps.sort(function (fillUp1, fillUp2) { return fillUp1.date < fillUp2.date ? 1 : -1; });
        });
        this.sub = this.route.data // Get fillUps and car data from the resolver service
            .subscribe(function (data) {
            _this.actionCreators.loadFillUps(data.fillUps);
            _this.car = data.car;
        });
        // Listen to route changes to display notification message about app state
        this.unsubscribeRouterEvents = this.router.events.subscribe(function (val) {
            if (val instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* NavigationEnd */]) {
                if (_this.route.children[0]) {
                    if (_this.route.children[0].snapshot.url[0].toString() === 'addFillUp') {
                        _this.notificationHubService.emit(__WEBPACK_IMPORTED_MODULE_2__common_notification_hub_service__["b" /* HubNotificationType */].AppState, 'Adding a new fill up for ' + _this.car.name + " ('ESC' to cancel)");
                    }
                    else if (_this.route.children[0].children[0] == undefined && _this.route.children[0].snapshot.url.length === 1) {
                        _this.notificationHubService.emit(__WEBPACK_IMPORTED_MODULE_2__common_notification_hub_service__["b" /* HubNotificationType */].AppState, 'A fill up for ' + _this.car.name); // update app state write up
                    }
                    else {
                        _this.notificationHubService.emit(__WEBPACK_IMPORTED_MODULE_2__common_notification_hub_service__["b" /* HubNotificationType */].AppState, 'Editing a fill up for ' + _this.car.name + " ('ESC' to cancel)"); // update app state write up            
                    }
                } // finished with sub routes
                else {
                    _this.notificationHubService.emit(__WEBPACK_IMPORTED_MODULE_2__common_notification_hub_service__["b" /* HubNotificationType */].AppState, 'Fill ups for ' + _this.car.name); // update app state write up
                }
            } // Finished with all the routes
        });
        this.notificationHubService.emit(__WEBPACK_IMPORTED_MODULE_2__common_notification_hub_service__["b" /* HubNotificationType */].AppState, 'Fill ups for ' + this.car.name); // update app state write up
    };
    FillUpsComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
        this.unsubscribeRouterEvents.unsubscribe();
        this.unsubscribeReduxStore();
    };
    /**
     * Presents add fill up component and deselects currently selected fill up
     *
     * @method onAddFillUpClick
     */
    FillUpsComponent.prototype.onAddFillUpClick = function () {
        this.router.navigate(['addFillUp'], { relativeTo: this.route });
        this.actionCreators.deselectFillUps();
    };
    return FillUpsComponent;
}());
FillUpsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-fill-ups',
        template: __webpack_require__("../../../../../src/app/car-detail/fill-ups/fill-ups.component.html"),
        styles: [__webpack_require__("../../../../../src/app/car-detail/fill-ups/fill-ups.component.css")]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('AppStore')),
    __metadata("design:paramtypes", [Object, typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__redux_action_creators_fill_up_action_creators__["a" /* FillUpActionCreators */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__redux_action_creators_fill_up_action_creators__["a" /* FillUpActionCreators */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__common_notification_hub_service__["a" /* NotificationHubService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__common_notification_hub_service__["a" /* NotificationHubService */]) === "function" && _d || Object])
], FillUpsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=fill-ups.component.js.map

/***/ }),

/***/ "../../../../../src/app/car-detail/reminders/add-reminder/add-reminder.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* For \"Madoka\" Inputs */\n* {\n\tbox-sizing: border-box;\n}\n\nform {\n\tfont-size: 1.5rem;\n\tmargin-top: 2rem;\n}\n\nlabel {\n\tdisplay: block;\n}\nbutton {\n\tdisplay: inline-block;\n\tposition: relative;\n\twidth: 5rem;\n\theight: 1.9rem;\n\tmargin-top: 2rem;\n\tmargin-left: 2rem;\n\tmargin-bottom: 0.125em;\n\tborder-width: 0;\n\tbackground-color: darkgreen;\n\tbackground-image: url(\"/assets/images/command-background.jpg\");\n\tbackground-size: 100% 100%;\n\tcursor: pointer;\n}\nbutton:hover {\n\tbackground-image: url(\"/assets/images/command-hover.jpg\");\n}\n.button-image {\n\tposition: absolute;\n\tleft: 0;\n\ttop: 0;\n\twidth: 100%;\n\theight: 100%;\n}\n.error {\n\tcolor:  red;\n\ttext-align: left;\n\tfont-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n\tfont-size: 70.25%;\n\tfont-weight: bold;\n\tmargin-top: 0.5rem;\n\tmargin-bottom: -1rem;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/car-detail/reminders/add-reminder/add-reminder.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"addReminderForm\" (ngSubmit)=\"onSubmit(addReminderForm.value)\">\n\n\t<span class=\"input input--madoka\" [class.input--filled]=\"text.value !== ''\" >\n\t\t<input #text class=\"input__field input__field--madoka\" type=\"text\" id=\"text\" [formControl]=\"addReminderForm.controls['text']\" (blur)=\"onBlur($event)\" autofocus />\n\t\t<label class=\"input__label input__label--madoka\" for=\"text\">\n\t\t\t<svg class=\"graphic graphic--madoka\" width=\"100%\" height=\"100%\" viewBox=\"0 0 404 77\" preserveAspectRatio=\"none\">\n\t\t\t\t<path d=\"m0,0l404,0l0,77l-404,0l0,-77z\"/>\n\t\t\t</svg>\n\t\t\t<span class=\"input__label-content input__label-content--madoka\">Reminder text</span>\n\t\t</label>\n\t</span>\n\t<div class=\"error\" *ngIf=\"addReminderForm.controls['text'].hasError('required') && addReminderForm.controls['text'].touched\">You must provide reminder text</div>\n\t<div class=\"error\" *ngIf=\"addReminderForm.controls['text'].hasError('maxlength') && addReminderForm.controls['text'].touched\">At most 20 characters</div>\n\n\t<span class=\"input input--madoka\" [class.input--filled]=\"date.value !== ''\" >\n\t\t<input #date class=\"input__field input__field--madoka\" type=\"date\" id=\"date\" [formControl]=\"addReminderForm.controls['date']\" />\n\t\t<label class=\"input__label input__label--madoka\" for=\"date\">\n\t\t\t<svg class=\"graphic graphic--madoka\" width=\"100%\" height=\"100%\" viewBox=\"0 0 404 77\" preserveAspectRatio=\"none\">\n\t\t\t\t<path d=\"m0,0l404,0l0,77l-404,0l0,-77z\"/>\n\t\t\t</svg>\n\t\t\t<span class=\"input__label-content input__label-content--madoka\"></span>\n\t\t</label>\n\t</span>\n\t<div class=\"error\" *ngIf=\"addReminderForm.controls['date'].hasError('required') && addReminderForm.controls['date'].touched\">You must enter a date</div>\n\n\t<button type=\"submit\" [disabled]=\"!addReminderForm.valid\">\n\t\t<img class=\"button-image\" src=\"/assets/images/button-add.png\" />\n\t\t<img class=\"button-image\" src=\"/assets/images/command-glass.png\" />\n\t</button>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/car-detail/reminders/add-reminder/add-reminder.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_reminder__ = __webpack_require__("../../../../../src/app/common/reminder.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_data_service__ = __webpack_require__("../../../../../src/app/common/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_notification_hub_service__ = __webpack_require__("../../../../../src/app/common/notification-hub.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_utilities_service__ = __webpack_require__("../../../../../src/app/common/utilities.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__redux_action_creators_reminder_action_creators__ = __webpack_require__("../../../../../src/app/redux-action-creators/reminder.action-creators.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddReminderComponent; });
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
/***********************************************************************************/








/***********************************************************************************/
/**
 * Controls the form for adding a reminder
 *
 * @class AddReminderComponent
 */
var AddReminderComponent = (function () {
    function AddReminderComponent(appStore, actionCreators, fb, utilitiesService, notificationHubService, router, route, dataService) {
        this.appStore = appStore;
        this.actionCreators = actionCreators;
        this.fb = fb;
        this.utilitiesService = utilitiesService;
        this.notificationHubService = notificationHubService;
        this.router = router;
        this.route = route;
        this.dataService = dataService;
    }
    AddReminderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.unsubscribe = this.route.data // Get car data from the resolver service
            .subscribe(function (data) {
            _this.carId = data.car.id;
        });
        this.addReminderForm = this.fb.group({
            'text': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].maxLength(20)])], 'date': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]
        });
        // Listens for escape key pressed to quit the component
        //subscribe to Redux store state changes
        this.unsubscribeStore = this.appStore.subscribe(function () {
            var state = _this.appStore.getState();
            if (state.system.escKeyPressed)
                _this.cancel();
        });
    };
    AddReminderComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe.unsubscribe();
        this.unsubscribeStore();
    };
    /**
     * Writes the collected reminder form values into the database
     *
     * @method onSubmit
     * @param formValues
     */
    AddReminderComponent.prototype.onSubmit = function (formValues) {
        var _this = this;
        var newReminder = new __WEBPACK_IMPORTED_MODULE_3__common_reminder__["a" /* Reminder */];
        newReminder.text = formValues.text.trim();
        newReminder.date = formValues.date.toString();
        this.dataService.addReminder(this.carId, newReminder).then(function (addedReminder) {
            _this.notificationHubService.emit(__WEBPACK_IMPORTED_MODULE_5__common_notification_hub_service__["b" /* HubNotificationType */].Success, 'Reminder added');
            _this.router.navigate(['../'], { relativeTo: _this.route }); // Go up to parent route
            _this.actionCreators.addReminder(_this.appStore.getState().reminders.reminders, addedReminder);
            _this.actionCreators.selectReminder(addedReminder);
        })
            .catch(function (error) { return _this.utilitiesService.handleError(error); });
    };
    /**
      * Trims input fields on losing focus
      *
      * @method onBlur
      * @param event:any
      */
    AddReminderComponent.prototype.onBlur = function (event) {
        event.target.value = event.target.value.trim();
    };
    /**
     * Quits the component by routing away
     *
     * @method cancel
     */
    AddReminderComponent.prototype.cancel = function () {
        // Simply navigate back to reminders view
        this.router.navigate(['../'], { relativeTo: this.route }); // Go up to parent route	 	
    };
    return AddReminderComponent;
}());
AddReminderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-add-reminder',
        template: __webpack_require__("../../../../../src/app/car-detail/reminders/add-reminder/add-reminder.component.html"),
        styles: [__webpack_require__("../../../../../src/app/car-detail/reminders/add-reminder/add-reminder.component.css")]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('AppStore')),
    __metadata("design:paramtypes", [Object, typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_7__redux_action_creators_reminder_action_creators__["a" /* ReminderActionCreators */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__redux_action_creators_reminder_action_creators__["a" /* ReminderActionCreators */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__common_utilities_service__["a" /* UtilitiesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__common_utilities_service__["a" /* UtilitiesService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__common_notification_hub_service__["a" /* NotificationHubService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__common_notification_hub_service__["a" /* NotificationHubService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4__common_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__common_data_service__["a" /* DataService */]) === "function" && _g || Object])
], AddReminderComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=add-reminder.component.js.map

/***/ }),

/***/ "../../../../../src/app/car-detail/reminders/edit-reminder/edit-reminder.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* For \"Madoka\" Inputs */\n* {\n\tbox-sizing: border-box;\n}\n\nform {\n\tfont-size: 1.5rem;\n\tmargin-top: 2rem;\n}\n\nlabel {\n\tdisplay: block;\n}\nbutton {\n\tdisplay: inline-block;\n\tposition: relative;\n\twidth: 5rem;\n\theight: 1.9rem;\n\tmargin-top: 2rem;\n\tmargin-left: 2rem;\n\tmargin-bottom: 0.125em;\n\n\tborder-width: 0;\n\tbackground-color: darkgreen;\n\tbackground-image: url(\"/assets/images/command-background.jpg\");\n\tbackground-size: 100% 100%;\n\tcursor: pointer;\n}\nbutton:hover {\n\tbackground-image: url(\"/assets/images/command-hover.jpg\");\n}\n.button-image {\n\tposition: absolute;\n\tleft: 0;\n\ttop: 0;\n\twidth: 100%;\n\theight: 100%;\n}\n.error {\n\tcolor:  red;\n\ttext-align: left;\n\tfont-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n\tfont-size: 70.25%;\n\tfont-weight: bold;\n\tmargin-top: 0.5rem;\n\tmargin-bottom: -1rem;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/car-detail/reminders/edit-reminder/edit-reminder.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"editReminderForm\" (ngSubmit)=\"onSubmit(editReminderForm.value)\">\n\n\t<span class=\"input input--madoka\" [class.input--filled]=\"text.value !== ''\" >\n\t\t<input #text class=\"input__field input__field--madoka\" type=\"text\" id=\"text\" [formControl]=\"editReminderForm.controls['text']\" (blur)=\"onBlur($event)\" autofocus />\n\t\t<label class=\"input__label input__label--madoka\" for=\"text\">\n\t\t\t<svg class=\"graphic graphic--madoka\" width=\"100%\" height=\"100%\" viewBox=\"0 0 404 77\" preserveAspectRatio=\"none\">\n\t\t\t\t<path d=\"m0,0l404,0l0,77l-404,0l0,-77z\"/>\n\t\t\t</svg>\n\t\t\t<span class=\"input__label-content input__label-content--madoka\">Reminder text</span>\n\t\t</label>\n\t</span>\n\t<div class=\"error\" *ngIf=\"editReminderForm.controls['text'].hasError('required') && editReminderForm.controls['text'].touched\">You must provide reminder text</div>\n\t<div class=\"error\" *ngIf=\"editReminderForm.controls['text'].hasError('maxlength') && editReminderForm.controls['text'].touched\">At most 20 characters</div>\n\n\t<span class=\"input input--madoka\" [class.input--filled]=\"date.value !== ''\" >\n\t\t<input #date class=\"input__field input__field--madoka\" type=\"date\" id=\"date\" [formControl]=\"editReminderForm.controls['date']\" />\n\t\t<label class=\"input__label input__label--madoka\" for=\"date\">\n\t\t\t<svg class=\"graphic graphic--madoka\" width=\"100%\" height=\"100%\" viewBox=\"0 0 404 77\" preserveAspectRatio=\"none\">\n\t\t\t\t<path d=\"m0,0l404,0l0,77l-404,0l0,-77z\"/>\n\t\t\t</svg>\n\t\t\t<span class=\"input__label-content input__label-content--madoka\"></span>\n\t\t</label>\n\t</span>\n\t<div class=\"error\" *ngIf=\"editReminderForm.controls['date'].hasError('required') && editReminderForm.controls['date'].touched\">You must enter date</div>\n\n\t<button type=\"submit\" [disabled]=\"!editReminderForm.valid\">\n\t\t<img class=\"button-image\" src=\"/assets/images/button-save.png\" />\n\t\t<img class=\"button-image\" src=\"/assets/images/command-glass.png\" />\n\t</button>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/car-detail/reminders/edit-reminder/edit-reminder.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_reminder__ = __webpack_require__("../../../../../src/app/common/reminder.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_data_service__ = __webpack_require__("../../../../../src/app/common/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_notification_hub_service__ = __webpack_require__("../../../../../src/app/common/notification-hub.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_utilities_service__ = __webpack_require__("../../../../../src/app/common/utilities.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__redux_action_creators_reminder_action_creators__ = __webpack_require__("../../../../../src/app/redux-action-creators/reminder.action-creators.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditReminderComponent; });
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
/***********************************************************************************/








/***********************************************************************************/
/**
 * Controls the form for editing a reminder
 *
 * @class EditReminderComponent
 */
var EditReminderComponent = (function () {
    function EditReminderComponent(appStore, actionCreators, utilitiesService, notificationHubService, fb, router, route, dataService) {
        this.appStore = appStore;
        this.actionCreators = actionCreators;
        this.utilitiesService = utilitiesService;
        this.notificationHubService = notificationHubService;
        this.fb = fb;
        this.router = router;
        this.route = route;
        this.dataService = dataService;
    }
    EditReminderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.unsubscribe = this.route.data /* get a reminder data from the resolver service */
            .subscribe(function (data) {
            _this.reminder = data.reminder;
            _this.carId = data.car.id;
            _this.editReminderForm = _this.fb.group({
                'text': [_this.reminder.text, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].maxLength(20)])],
                'date': [_this.reminder.date, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]
            });
        });
        // Listens for escape key pressed to quit the component
        //subscribe to Redux store state changes
        this.unsubscribeStore = this.appStore.subscribe(function () {
            var state = _this.appStore.getState();
            if (state.system.escKeyPressed)
                _this.cancel();
        });
    };
    EditReminderComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe.unsubscribe();
        this.unsubscribeStore();
    };
    /**
     * Writes the collected edit reminder form values
     * into the database
     *
     * @method onSubmit
     * @param formValues
     */
    EditReminderComponent.prototype.onSubmit = function (formValues) {
        var _this = this;
        var editedReminder = new __WEBPACK_IMPORTED_MODULE_3__common_reminder__["a" /* Reminder */];
        editedReminder.text = formValues.text.trim();
        editedReminder.date = formValues.date.toString();
        editedReminder.id = this.reminder.id;
        this.dataService.updateReminder(this.carId, editedReminder).then(function () {
            _this.notificationHubService.emit(__WEBPACK_IMPORTED_MODULE_5__common_notification_hub_service__["b" /* HubNotificationType */].Success, 'Reminder updated');
            _this.router.navigate(['../../'], { relativeTo: _this.route }); // Go up to parent route and append
            _this.actionCreators.editReminder(_this.appStore.getState().reminders.reminders, editedReminder);
            _this.actionCreators.selectReminder(editedReminder);
        })
            .catch(function (error) { return _this.utilitiesService.handleError(error); });
    };
    /**
     * Trims input fields on losing focus
     *
     * @method onBlur
     * @param event:any
     */
    EditReminderComponent.prototype.onBlur = function (event) {
        event.target.value = event.target.value.trim();
    };
    /**
     * Quits the component by routing away
     *
     * @method cancel
     */
    EditReminderComponent.prototype.cancel = function () {
        // Simply navigate back to reminders view
        this.router.navigate(['../../'], { relativeTo: this.route }); // Go up to parent route
    };
    return EditReminderComponent;
}());
EditReminderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-edit-reminder',
        template: __webpack_require__("../../../../../src/app/car-detail/reminders/edit-reminder/edit-reminder.component.html"),
        styles: [__webpack_require__("../../../../../src/app/car-detail/reminders/edit-reminder/edit-reminder.component.css")]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('AppStore')),
    __metadata("design:paramtypes", [Object, typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_7__redux_action_creators_reminder_action_creators__["a" /* ReminderActionCreators */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__redux_action_creators_reminder_action_creators__["a" /* ReminderActionCreators */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__common_utilities_service__["a" /* UtilitiesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__common_utilities_service__["a" /* UtilitiesService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__common_notification_hub_service__["a" /* NotificationHubService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__common_notification_hub_service__["a" /* NotificationHubService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4__common_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__common_data_service__["a" /* DataService */]) === "function" && _g || Object])
], EditReminderComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=edit-reminder.component.js.map

/***/ }),

/***/ "../../../../../src/app/car-detail/reminders/reminders-list/reminders-list-entry/reminders-list-entry.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div {\n\tmargin-bottom: 0.5rem;\n\tbackground-color: rgba(230,230,230, 0.5);\n\tcolor: RoyalBlue;\n\tcursor: pointer;\n}\ndiv:hover {\n\tbackground-color: rgba(255, 250, 240, 0.5);\n}\n\na,\np {\n\tmargin: 0 0 0 1rem;\n\tfont-family: \"Arial Narrow\", Arial, sans-serif;\n}\n\n.date {\n\tfont-size: 0.8rem;\n}\n.text {\n\tfont-size: 1.2rem;\n}\n\n.selected {\n\tborder-left: 2px solid dimgray;\n\tbackground-color: rgba(255, 250, 240, 0.5);\n}\n.over-due {\n\tcolor: red;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/car-detail/reminders/reminders-list/reminders-list-entry/reminders-list-entry.component.html":
/***/ (function(module, exports) {

module.exports = "<div [class.selected]='selectedReminder && reminder === selectedReminder' [class.over-due]='overDue' class=\"reminders-list-entry\">\n  <p class=\"text\" [class.over-due]='overDue'>{{reminder.text}}</p>\n  <a class=\"date\" [class.over-due]='overDue' href=\"javascript:void(0)\">on {{date}}</a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/car-detail/reminders/reminders-list/reminders-list-entry/reminders-list-entry.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_reminder__ = __webpack_require__("../../../../../src/app/common/reminder.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemindersListEntryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Shows an individual reminder in the reminders list
 *
 * @class RemindersListEntryComponent
 */
var RemindersListEntryComponent = (function () {
    function RemindersListEntryComponent() {
    }
    RemindersListEntryComponent.prototype.ngOnInit = function () {
        var date = new Date(this.reminder.date);
        this.overDue = Date.now() > date.valueOf(); // valueOf is needed to convert date into number (of miliseconds since  January 1, 1970, 00:00:00 UTC)
        var options = { year: 'numeric', month: 'long', day: 'numeric' };
        this.date = date.toLocaleString('en-US', options);
    };
    return RemindersListEntryComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__common_reminder__["a" /* Reminder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__common_reminder__["a" /* Reminder */]) === "function" && _a || Object)
], RemindersListEntryComponent.prototype, "reminder", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], RemindersListEntryComponent.prototype, "selectedReminder", void 0);
RemindersListEntryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-reminders-list-entry',
        template: __webpack_require__("../../../../../src/app/car-detail/reminders/reminders-list/reminders-list-entry/reminders-list-entry.component.html"),
        styles: [__webpack_require__("../../../../../src/app/car-detail/reminders/reminders-list/reminders-list-entry/reminders-list-entry.component.css")]
    })
], RemindersListEntryComponent);

var _a;
//# sourceMappingURL=reminders-list-entry.component.js.map

/***/ }),

/***/ "../../../../../src/app/car-detail/reminders/reminders-list/reminders-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".list {\n\tmargin-top: 3vw;\n}\nbutton {\n\tposition: relative;\n\twidth: 5rem;\n\theight: 1.9rem;\n\tborder-width: 0;\n\tbackground-color: darkgreen;\n\tbackground-image: url(\"/assets/images/command-background.jpg\");\n\tbackground-size: 100% 100%;\n\tcursor: pointer;\n}\nbutton:hover {\n\tbackground-image: url(\"/assets/images/command-hover.jpg\");\n}\n.button-image {\n\tposition: absolute;\n\tleft: 0;\n\ttop: 0;\n\twidth: 100%;\n\theight: 100%;\n}\n.buttons {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-ms-flex-pack: distribute;\n\t    justify-content: space-around;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/car-detail/reminders/reminders-list/reminders-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n\t<div class=\"buttons\">\n\t\t<button (click)=\"addReminderClicked()\" id=\"add-reminder\">\n\t\t\t<img class=\"button-image\" src=\"/assets/images/button-add.png\" />\n\t\t\t<img class=\"button-image\" src=\"/assets/images/command-glass.png\" />\n\t\t</button>\n\t\t<button *ngIf=\"selectedReminder\" routerLink=\"{{selectedReminder.id}}/editReminder\" id=\"edit-reminder\">\n\t\t\t<img class=\"button-image\" src=\"/assets/images/button-edit.png\" />\n\t\t\t<img class=\"button-image\" src=\"/assets/images/command-glass.png\" />\n\t\t</button>\n\t\t<button *ngIf=\"selectedReminder\" (click)=\"deleteReminder()\">\n\t\t\t<img class=\"button-image\" src=\"/assets/images/button-delete.png\" />\n\t\t\t<img class=\"button-image\" src=\"/assets/images/command-glass.png\" />\n\t\t</button>\n\t</div>\n\t<div class=\"list\">\n\t\t<app-reminders-list-entry *ngFor='let reminder of reminders' [reminder]='reminder' (click)='onSelect(reminder)' [selectedReminder]='this.selectedReminder'></app-reminders-list-entry>\n\t</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/car-detail/reminders/reminders-list/reminders-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_data_service__ = __webpack_require__("../../../../../src/app/common/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_car__ = __webpack_require__("../../../../../src/app/common/car.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__redux_action_creators_reminder_action_creators__ = __webpack_require__("../../../../../src/app/redux-action-creators/reminder.action-creators.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_notification_hub_service__ = __webpack_require__("../../../../../src/app/common/notification-hub.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_utilities_service__ = __webpack_require__("../../../../../src/app/common/utilities.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemindersListComponent; });
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
/***********************************************************************************/







/***********************************************************************************/
/**
 * Shows a list of all reminder by using RemindersListEntry component for individual reminders
 * It also handles add reminder click and deletion of the selected reminder
 *
 * @class RemindersListComponent
 */
var RemindersListComponent = (function () {
    function RemindersListComponent(actionCreators, appStore, utilitiesService, notificationHubService, router, route, dataService) {
        this.actionCreators = actionCreators;
        this.appStore = appStore;
        this.utilitiesService = utilitiesService;
        this.notificationHubService = notificationHubService;
        this.router = router;
        this.route = route;
        this.dataService = dataService;
    }
    RemindersListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.unsubscribe = this.appStore.subscribe(function () {
            var state = _this.appStore.getState();
            _this.selectedReminder = state.reminders.selectedReminder;
        });
    };
    RemindersListComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe();
    };
    RemindersListComponent.prototype.onSelect = function (reminder) {
        this.actionCreators.selectReminder(reminder);
    };
    RemindersListComponent.prototype.ngOnChanges = function (changes) {
        if (changes.reminders) {
            this.reminders = changes.reminders.currentValue;
            // Now sort reminders by date
            this.reminders.sort(function (reminder1, reminder2) { return reminder1.date > reminder2.date ? 1 : -1; });
        }
    };
    RemindersListComponent.prototype.addReminderClicked = function () {
        this.router.navigate(['addReminder'], { relativeTo: this.route });
        this.actionCreators.deselectReminders();
    };
    /**
       * Deletes the selected reminder
       *
       * @method deleteReminder
       */
    RemindersListComponent.prototype.deleteReminder = function () {
        var _this = this;
        this.dataService.deleteReminder(this.car.id, this.selectedReminder.id).then(function () {
            _this.notificationHubService.emit(__WEBPACK_IMPORTED_MODULE_5__common_notification_hub_service__["b" /* HubNotificationType */].Success, 'Reminder deleted');
            _this.router.navigate(['./'], { relativeTo: _this.route });
            _this.actionCreators.deleteReminder(_this.appStore.getState().reminders.reminders, _this.selectedReminder);
            _this.actionCreators.deselectReminders();
        })
            .catch(function (error) { return _this.utilitiesService.handleError(error); });
    };
    return RemindersListComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], RemindersListComponent.prototype, "reminders", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__common_car__["a" /* Car */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__common_car__["a" /* Car */]) === "function" && _a || Object)
], RemindersListComponent.prototype, "car", void 0);
RemindersListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-reminders-list',
        template: __webpack_require__("../../../../../src/app/car-detail/reminders/reminders-list/reminders-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/car-detail/reminders/reminders-list/reminders-list.component.css")]
    }),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('AppStore')),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__redux_action_creators_reminder_action_creators__["a" /* ReminderActionCreators */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__redux_action_creators_reminder_action_creators__["a" /* ReminderActionCreators */]) === "function" && _b || Object, Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__common_utilities_service__["a" /* UtilitiesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__common_utilities_service__["a" /* UtilitiesService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__common_notification_hub_service__["a" /* NotificationHubService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__common_notification_hub_service__["a" /* NotificationHubService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__common_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__common_data_service__["a" /* DataService */]) === "function" && _g || Object])
], RemindersListComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=reminders-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/car-detail/reminders/reminders.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".reminders-view {\t/* The whole 'reminders' frame within the accordion widget */\n\tposition: relative;\n\ttop: 2.5rem;\n\tleft:  9vw;\n\twidth: -webkit-fit-content;\n\twidth: -moz-fit-content;\n\twidth: fit-content;\n\theight: 50vw;\n}\n/* This frame has two sub-views */\n.accordion-sub-view {\n\tposition: relative; /* we want sub-views layed out horizontally */\n\tdisplay: inline-block; /* So we make them in-line block and position them relatively */\n\tvertical-align: top; /* Needed for inline-blick to be propperly aligned to the top */\n\twidth: 26vw;\n\theight: 100%;\n\toverflow-y: auto;\n\toverflow-x: hidden;\n}\n@media screen and (min-width: 1280px) and (min-aspect-ratio: 15/9) and (orientation: landscape) {\n\t.accordion-sub-view {\n\t\twidth: 22vw;\n\t}\n\t.reminders-view {\n\t\theight: 42.5vw;\n\t}\n}\n@media screen and (min-width: 1081px) and (max-width: 1280px) {\n\t.reminders-view {\n\t\theight: 60vw;\n\t\tleft: 9em;\n\t}\n\t.accordion-sub-view {\n\t\twidth: 30vw;\n\t}\n}\n@media screen and (min-width: 787px) and (max-width: 1080px) {\n\t.accordion-sub-view {\n\t\tdisplay:  block;\n\t\twidth: 18em;\n  \theight: -webkit-fit-content;\n  \theight: -moz-fit-content;\n  \theight: fit-content;\n\t\tmax-height: 48%;\n\t}\n\t.reminders-view  {\n\t\tleft: 7.5em;\n\t\theight: 66.5rem;\n\t}\n}\n@media screen and (max-width: 786px) {\n\t.accordion-sub-view {\n\t\tdisplay:  block;\n\t\theight: -webkit-fit-content;\n\t\theight: -moz-fit-content;\n\t\theight: fit-content;\n\t\tmax-height: 48%;\n\t\twidth: 18em;\n\t}\n\t.reminders-view {\n\t\tleft: 0;\n\t\ttop: 6rem;\n\t\theight: 65rem;\n\t\t/* Center accordion sub-view */\n\t\tmargin-left: auto;\n\t\tmargin-right: auto;\n\t}\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/car-detail/reminders/reminders.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"reminders-view\">\n\t<div class=\"accordion-sub-view\">\n\t\t<app-reminders-list [reminders]='reminders'></app-reminders-list>\n\t</div>\n\t<div class=\"accordion-sub-view\">\n\t\t<router-outlet></router-outlet>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/car-detail/reminders/reminders.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_notification_hub_service__ = __webpack_require__("../../../../../src/app/common/notification-hub.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__redux_action_creators_reminder_action_creators__ = __webpack_require__("../../../../../src/app/redux-action-creators/reminder.action-creators.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemindersComponent; });
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
/***********************************************************************************/




/***********************************************************************************/
/**
 * A container component for reminders accordion sub-view
 * Fetches reminder data for all other reminder components
 *
 * @class RemindersComponent
 */
var RemindersComponent = (function () {
    function RemindersComponent(appStore, actionCreators, route, router, notificationHubService) {
        this.appStore = appStore;
        this.actionCreators = actionCreators;
        this.route = route;
        this.router = router;
        this.notificationHubService = notificationHubService;
    }
    RemindersComponent.prototype.ngOnInit = function () {
        var _this = this;
        //subscribe listener to state changes
        this.unsubscribeReduxStore = this.appStore.subscribe(function () {
            var state = _this.appStore.getState();
            _this.reminders = state.reminders.reminders;
            // Now sort reminders by date
            _this.reminders.sort(function (reminder1, reminder2) { return reminder1.date > reminder2.date ? 1 : -1; });
        });
        this.sub = this.route.data // Get reminders and car data from the resolver service
            .subscribe(function (data) {
            _this.reminders = data.reminders;
            _this.actionCreators.loadReminders(data.reminders);
            _this.car = data.car;
        });
        // Listen to route changes to display notification message about app state
        this.unsubscribeRouterEvents = this.router.events.subscribe(function (val) {
            if (val instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* NavigationEnd */]) {
                if (_this.route.children[0]) {
                    if (_this.route.children[0].snapshot.url[0].toString() === 'addReminder') {
                        _this.notificationHubService.emit(__WEBPACK_IMPORTED_MODULE_2__common_notification_hub_service__["b" /* HubNotificationType */].AppState, 'Adding a new reminder for ' + _this.car.name + " ('ESC' to cancel)");
                    }
                    else if (_this.route.children[0].children[0] == undefined && _this.route.children[0].snapshot.url.length === 1) {
                        _this.notificationHubService.emit(__WEBPACK_IMPORTED_MODULE_2__common_notification_hub_service__["b" /* HubNotificationType */].AppState, 'A reminder for ' + _this.car.name); // update app state write up
                    }
                    else {
                        _this.notificationHubService.emit(__WEBPACK_IMPORTED_MODULE_2__common_notification_hub_service__["b" /* HubNotificationType */].AppState, 'Editing a reminder for ' + _this.car.name + " ('ESC' to cancel)"); // update app state write up            
                    }
                } // finished with sub routes
                else {
                    _this.notificationHubService.emit(__WEBPACK_IMPORTED_MODULE_2__common_notification_hub_service__["b" /* HubNotificationType */].AppState, 'Reminders for ' + _this.car.name); // update app state write up
                }
            } // Finished with all the routes
        });
        this.notificationHubService.emit(__WEBPACK_IMPORTED_MODULE_2__common_notification_hub_service__["b" /* HubNotificationType */].AppState, 'Reminders for ' + this.car.name);
    };
    RemindersComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
        this.unsubscribeRouterEvents.unsubscribe();
        this.unsubscribeReduxStore();
    };
    return RemindersComponent;
}());
RemindersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-reminders',
        template: __webpack_require__("../../../../../src/app/car-detail/reminders/reminders.component.html"),
        styles: [__webpack_require__("../../../../../src/app/car-detail/reminders/reminders.component.css")]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('AppStore')),
    __metadata("design:paramtypes", [Object, typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__redux_action_creators_reminder_action_creators__["a" /* ReminderActionCreators */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__redux_action_creators_reminder_action_creators__["a" /* ReminderActionCreators */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__common_notification_hub_service__["a" /* NotificationHubService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__common_notification_hub_service__["a" /* NotificationHubService */]) === "function" && _d || Object])
], RemindersComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=reminders.component.js.map

/***/ }),

/***/ "../../../../../src/app/chrome/chrome.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-pack: justify;\n\t    -ms-flex-pack: justify;\n\t        justify-content: space-between;\n\t-webkit-box-align: center;\n\t    -ms-flex-align: center;\n\t        align-items: center;\n\tbackground-color: lightgrey;\n\tbackground-image: url(\"/assets/images/application-top.png\");\n\tbackground-size: 100% 100%;\n\tbackground-repeat: no-repeat;\n}\n.status-bar {\n\tmargin-left: 1.5em;\n}\n.wellcome {\n\tmargin-right: 1.5em;\n\tmargin-left: auto;\t/* This will push the flex item to the far right */\n\tmargin-top: 0.15rem; /* Just to perfectly align with menu text to the right */\n}\n.main-menu {\n\tmargin-right: 1.5em;\n}\n.main-menu a {\n\tfont-family: \"Segoe UI\", Frutiger, \"Frutiger Linotype\", \"Dejavu Sans\", \"Helvetica Neue\", Arial, sans-serif;\n\tfont-size: 0.8em;\n\tfont-weight: bold;\n\tcolor: darkcyan;\n\tcursor: pointer;\n}\n.main-menu span {\n\tfont-family: \"Segoe UI\", Frutiger, \"Frutiger Linotype\", \"Dejavu Sans\", \"Helvetica Neue\", Arial, sans-serif;\n\tfont-size: 0.8em;\n\tfont-weight: bold;\n}\n.application {\n\tposition: relative;\n\theight: 100vh;\n\tbackground-image: url(\"/assets/images/background.jpg\");\n\tbackground-size: 100%;\n\tbackground-repeat: no-repeat;\n}\n@media screen and (max-width: 1080px) {\n\t.application {\n\t\theight: 120vh;\n\t\tbackground-size: 1280px 100%;\n\t}\n}\n@media screen and (max-width: 786px) {\n\t.application {\n\t\theight: 160vh;\n\t}\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/chrome/chrome.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n\t<app-status-bar class=\"status-bar\"></app-status-bar>\n\t<div class=\"wellcome\">\n\t\t<app-wellcome></app-wellcome>\n\t</div>\n\t<div class=\"main-menu\">\n\t\t<span>[</span>\n\t\t<a routerLink=\"/dashboard\" id=\"menu-dashboard\">Dashboard</a>\n\t\t<span>|</span>\n\t\t<a routerLink=\"/profile\">Profile</a>\n\t\t<span>|</span>\n\t\t<a (click)=\"signOut()\">Sign out</a>\n\t\t<span>]</span>\n\t</div>\n</div>\n<div class=\"application\">\n\t<router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "../../../../../src/app/chrome/chrome.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_auth_service__ = __webpack_require__("../../../../../src/app/common/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_utilities_service__ = __webpack_require__("../../../../../src/app/common/utilities.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChromeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * The chrome of the whole application
 * Shows status bar at the top of the screen and car data below
 *
 * @class ChromeComponent
 */
var ChromeComponent = (function () {
    function ChromeComponent(authService, utilitiesService, router) {
        this.authService = authService;
        this.utilitiesService = utilitiesService;
        this.router = router;
    }
    ChromeComponent.prototype.signOut = function () {
        var _this = this;
        this.authService.logout().then(function () {
            _this.router.navigate(['landing', 'signIn']);
        })
            .catch(function (error) { return _this.utilitiesService.handleError(error); });
    };
    return ChromeComponent;
}());
ChromeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-chrome',
        template: __webpack_require__("../../../../../src/app/chrome/chrome.component.html"),
        styles: [__webpack_require__("../../../../../src/app/chrome/chrome.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__common_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__common_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__common_utilities_service__["a" /* UtilitiesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__common_utilities_service__["a" /* UtilitiesService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _c || Object])
], ChromeComponent);

var _a, _b, _c;
//# sourceMappingURL=chrome.component.js.map

/***/ }),

/***/ "../../../../../src/app/common/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data_service__ = __webpack_require__("../../../../../src/app/common/data.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Performs actual authentication operations used by auth module and elsewhere
 *
 * @class AuthService
 */
var AuthService = (function () {
    function AuthService(http, dataService) {
        this.http = http;
        this.dataService = dataService;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        this.authUrl = 'http://localhost:3000/api/';
        this.loggedIn = false;
    }
    /**
     * Tries to log in a user
     *
     * @method logIn
     * @param username
     * @return {Promise<boolean>} Will resolve to true if log in succeeded
     */
    AuthService.prototype.logIn = function (username) {
        var _this = this;
        return this.http
            .post(this.authUrl + 'login', JSON.stringify({ username: username }), { headers: this.headers })
            .toPromise() // Because Angular http service returns observable
            .then(function (response) {
            if (response.json().authMessage) {
                _this.loggedIn = true;
                return true;
            }
            else
                return false;
        })
            .catch(this.handleError); // a single method deals with error in this class
    };
    /**
     * Tells whether a user is logged in
     *
     * @method isLoggedIn
     * @return {Promise<boolean>} Will resolve to true if user is logged in
     */
    AuthService.prototype.isLoggedIn = function () {
        var _this = this;
        return this.http.get(this.authUrl + 'loggedIn')
            .toPromise()
            .then(function (response) {
            if (response.json().authMessage) {
                _this.loggedIn = true;
                return true;
            }
            else {
                _this.loggedIn = false;
                return false;
            }
        })
            .catch(this.handleError);
    };
    /**
     * Checks whether a user name exists in the back-end database
     *
     * @method nameExists
     * @param name
     * @return {Observable<boolean>}
     */
    AuthService.prototype.nameExists = function (name) {
        return this.http
            .post(this.authUrl + 'userExists', JSON.stringify({ username: name }), { headers: this.headers })
            .map(function (response) {
            if (response.json().authMessage) {
                return true;
            }
            else
                return false;
        });
    };
    /**
     * Tries to register a new user
     *
     * @method signUp
     * @param username
     * @return {Promise<boolean>} Will resolve to true if sign up succeeded
     */
    AuthService.prototype.signUp = function (username) {
        var _this = this;
        return this.http
            .post(this.authUrl + 'signUp', JSON.stringify({ username: username }), { headers: this.headers })
            .toPromise()
            .then(function (response) {
            if (!response.json().authMessage)
                return !_this.logIn(username); // logIn returns true on success, where we need true on errors
            else
                return Promise.resolve(response.json().authMessage);
        })
            .then(function (response) {
            return response;
        })
            .catch(this.handleError);
    };
    /**
     * Tries to log out a user
     *
     * @method logout
     * @return {Promise<boolean>} Will resolve to true if log out succeeded
     */
    AuthService.prototype.logout = function () {
        var _this = this;
        return this.http.get(this.authUrl + 'logout')
            .toPromise()
            .then(function (response) {
            if (response.json().authMessage === 'ok') {
                _this.loggedIn = false;
                _this.dataService.clearCache();
                return true;
            }
            else
                return false;
        })
            .catch(this.handleError);
    };
    AuthService.prototype.handleError = function (error) {
        return Promise.reject(error.message || error.statusText || error);
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__data_service__["a" /* DataService */]) === "function" && _b || Object])
], AuthService);

var _a, _b;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/common/car.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Car; });
var Car = (function () {
    function Car() {
    }
    return Car;
}());

//# sourceMappingURL=car.js.map

/***/ }),

/***/ "../../../../../src/app/common/componentAnimations.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return slideFromLeftToRightAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return slideFromRightToLeftAnimation; });

// Component transition animations
var slideFromLeftToRightAnimation = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('routeAnimation', [
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('*', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({
        opacity: 1,
        transform: 'translateX(0)'
    })),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])(':enter', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({
            opacity: 0,
            transform: 'translateX(-100%)'
        }),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('0.3s ease-in')
    ]),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])(':leave', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('0.5s ease-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({
            opacity: 0,
            transform: 'translateX(-100%)'
        }))
    ])
]);
// Component transition animations
var slideFromRightToLeftAnimation = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('routeAnimation', [
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('*', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({
        opacity: 1,
        transform: 'translateX(0)'
    })),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])(':enter', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({
            opacity: 0,
            transform: 'translateX(100%)'
        }),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('0.3s ease-in')
    ]),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])(':leave', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('0.5s ease-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({
            opacity: 0,
            transform: 'translateX(100%)'
        }))
    ])
]);
//# sourceMappingURL=componentAnimations.js.map

/***/ }),

/***/ "../../../../../src/app/common/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
* Provides exchange of data with a back-end database
* via the HTTP server. Three collections are implemented:
* cars, fillups and reminders, with CRUD methods for each.
* Caching is implemented for all the collections.
* A single method handles eventual errors.
*
* @class DataService
**/
var DataService = (function () {
    function DataService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        // URLs to web api
        this.carsUrl = 'http://localhost:3000/api/cars';
        this.fillUpsUrl = 'http://localhost:3000/api/fillUps';
        this.remindersUrl = 'http://localhost:3000/api/reminders';
        this.usersUrl = 'http://localhost:3000/api/user';
        this.carsCache = {
            data: null,
            dirty: true
        };
        this.fillUpsCache = [];
        this.remindersCache = [];
    }
    DataService.prototype.clearCache = function () {
        for (var _i = 0, _a = this.fillUpsCache; _i < _a.length; _i++) {
            var fillUpCache = _a[_i];
            fillUpCache.dirty = true;
        }
        for (var _b = 0, _c = this.remindersCache; _b < _c.length; _b++) {
            var reminderCache = _c[_b];
            reminderCache.dirty = true;
        }
        this.carsCache.dirty = true;
    };
    DataService.prototype.getUser = function () {
        return this.http.get(this.usersUrl)
            .toPromise() // Because Angular http service returns observable
            .then(function (response) {
            return response.json().data; // in memory web api returns the data contained
        }) // in data object, for security reasons:
            .catch(this.handleError); // a single method deals with error in this class
    };
    /**
      * This method accepts an User parameter
      * and uses http to PUT an User object to update the server-side database.
      * It returns server response as a Promise, or rejects as an error message
      * or an error object if error message doesn't exist
      *
      * @method updateUser
      * @param updatedUser User object to update
      * @return {Promise} Server response
      */
    DataService.prototype.updateUser = function (updatedUser) {
        return this.http
            .put(this.usersUrl + '/update', JSON.stringify(updatedUser), { headers: this.headers })
            .toPromise()
            .then(function (response) { return response; })
            .catch(this.handleError);
    };
    /**
    * This method accepts no parameters and uses http to GET
    * all the Cars of a user from the server. It returns a Promise resolved
    * as an array of Cars, or rejected as an error message or
    * an error object if error message doesn't exist
    *
    * @method getCars
    * @return {Promise<Car[]>} The array of Cars as a Promise
    */
    DataService.prototype.getCars = function () {
        var _this = this;
        if (!this.carsCache.dirty) {
            return Promise.resolve(this.carsCache.data);
        }
        else
            return this.http.get(this.carsUrl)
                .toPromise() // Because Angular http service returns observable
                .then(function (response) {
                _this.carsCache.data = response.json().data;
                _this.carsCache.dirty = false;
                return response.json().data; // in memory web api returns the data contained
            }) // in data object, for security reasons:
                .catch(this.handleError); // a single method deals with error in this class
    };
    /**
    * This method accepts a single integer parameter, an id for a Car,
    * and uses it to http GET the corresponding Car data.
    * It returns a Promise resolved as a Car object,
    * or rejected as an error message or an error object
    * if error message doesn't exist
    *
    * @method getCarById
    * @return {Promise<Car>} Car object as a Promise
    */
    DataService.prototype.getCarById = function (id) {
        if (!this.carsCache.dirty) {
            var cars = this.carsCache.data;
            for (var _i = 0, cars_1 = cars; _i < cars_1.length; _i++) {
                var car = cars_1[_i];
                if (car.id === id)
                    return Promise.resolve(car);
            }
            return Promise.resolve(null);
        }
        else
            return this.http.get(this.carsUrl + '/' + id)
                .toPromise()
                .then(function (response) {
                return response.json().data;
            })
                .catch(this.handleError);
    };
    /**
    * This method accepts a Car parameter and base64 encoded image
    * and uses http to POST new  Car to the server-side database.
    * It returns a Promise resolved as a Car object,
    * or rejected as an error message or
    * an error object if error message doesn't exist
    *
    * @method addCar
    * @param newCar a Car to add
    * @param base64Image car avatar
    * @return {Promise<Car>} Added Car as a Promise
    */
    DataService.prototype.addCar = function (newCar, base64Image) {
        var _this = this;
        newCar.base64Image = base64Image;
        return this.http
            .post(this.carsUrl, JSON.stringify(newCar), { headers: this.headers })
            .toPromise()
            .then(function (response) {
            _this.carsCache.dirty = true;
            return response.json().data;
        })
            .catch(this.handleError);
    };
    /**
    * This method accepts a Car parameter and base64 encoded image
    * and uses http to PUT a Car object to update the server-side database.
    * It returns server response as a Promise, or rejects as an error message
    * or an error object if error message doesn't exist
    *
    * @method updateCar
    * @param updatedCar Car object to update
    * @param base64Image car avatar
    * @return {Promise} Server response
    */
    DataService.prototype.updateCar = function (updatedCar, base64Image) {
        var _this = this;
        updatedCar.base64Image = base64Image;
        return this.http
            .put(this.carsUrl, JSON.stringify(updatedCar), { headers: this.headers })
            .toPromise()
            .then(function (response) {
            _this.carsCache.dirty = true;
            return response;
        })
            .catch(this.handleError);
    };
    /**
    * This method accepts a parameter of number type and uses http to DELETE Car
    * of this id from the server-side database. It returns a Promise resolved
    * as server response object, or rejected as an error message or
    * an error object if error message doesn't exist
    *
    * @method deleteCar
    * @param carId Car.id of the Car object to delete
    * @return {Promise<any>} Server response as a promise
    */
    DataService.prototype.deleteCar = function (id) {
        var _this = this;
        var url = this.carsUrl + "/" + id;
        return this.http
            .delete(url)
            .toPromise()
            .then(function (response) {
            _this.carsCache.dirty = true;
            return response;
        })
            .catch(this.handleError);
    };
    /**
    * This method accepts car id as a parameter and uses http
    * to GET all the Fillups for a Car. It returns a Promise
    * resolved as an array of FillUps,
    * or rejected as an error message or an error object
    * if error message doesn't exist
    *
    * @method getFillUps
    * @return {Promise<FillUp[]>}
    */
    DataService.prototype.getFillUps = function (carId) {
        var _this = this;
        if (this.fillUpsCache[carId] && !this.fillUpsCache[carId].dirty) {
            return Promise.resolve(this.fillUpsCache[carId].data);
        }
        else
            return this.http.get(this.fillUpsUrl + '/' + carId)
                .toPromise()
                .then(function (response) {
                _this.fillUpsCache[carId] = {};
                _this.fillUpsCache[carId].data = response.json().data;
                _this.fillUpsCache[carId].dirty = false;
                return response.json().data;
            })
                .catch(this.handleError);
    };
    /**
      * This method accepts two parameters, an id for a Fill Up,
      * and an id for a car. It uses http GET to fetch the corresponding
      * Fillup for a Car.
      * It returns a Promise resolved as a FillUp object,
      * or rejected as an error message or an error object
      * if error message doesn't exist
      *
      * @method getFillUpById
      * @param carId id of a Car to which a fill up belongs to
      * @param id id of a fill up
      * @return {Promise<FillUp>} The FillUp for a Car as a Promise
      */
    DataService.prototype.getFillUpById = function (carId, id) {
        if (this.fillUpsCache[carId] && !this.fillUpsCache[carId].dirty) {
            var fillUps = this.fillUpsCache[carId].data;
            for (var _i = 0, fillUps_1 = fillUps; _i < fillUps_1.length; _i++) {
                var fillUp = fillUps_1[_i];
                if (fillUp.id === id)
                    return Promise.resolve(fillUp);
            }
            return Promise.resolve(null);
        }
        else
            return this.http.get(this.fillUpsUrl + '/one/' + id)
                .toPromise()
                .then(function (response) {
                return response.json().data;
            })
                .catch(this.handleError);
    };
    /**
      * This method accepts no parameters and returns an object containing
      * arrays of all fill ups for all the cars. Object keys are car ids, and
      * values are arrays of Fill Ups. Method returns a Promise
      * which on error is rejected as an error message or an error object
      * if error message doesn't exist
      *
      * @method getAllFillUps
      * @return {Promise<Object>}
      */
    DataService.prototype.getAllFillUps = function () {
        var _this = this;
        var allFillUps = {};
        return this.getCars().then(function (cars) {
            var promises = [];
            for (var _i = 0, cars_2 = cars; _i < cars_2.length; _i++) {
                var car = cars_2[_i];
                promises.push(_this.getFillUps(car.id));
            }
            return Promise.all(promises).then(function (fillUps) {
                for (var i = 0; i < fillUps.length; ++i) {
                    allFillUps[cars[i].id] = fillUps[i];
                }
                return allFillUps;
            }, function (err) {
                _this.handleError(err);
            });
        })
            .catch(this.handleError);
    };
    /**
    * This method accepts a car id and a FillUp object as a parameter and uses
    * http POST to add a fill up to a Car. It returns a Promise resolved
    * to a FillUp object, or rejected as an error message or an error object
    * if error message doesn't exist
    *
    * @method addFillUp
    * @param carId Id of the car to which the new fill up is to be added
    * @param newFillUp The Fillup to be added
    * @return {Promise<FillUp>} The FillUp added as a Promise
    */
    DataService.prototype.addFillUp = function (carId, newFillUp) {
        var _this = this;
        return this.http
            .post(this.fillUpsUrl + '/' + carId, JSON.stringify(newFillUp), { headers: this.headers })
            .toPromise()
            .then(function (response) {
            _this.fillUpsCache[carId].dirty = true;
            return response.json().data;
        })
            .catch(this.handleError);
    };
    /**
    * This method accepts car Id and a FillUp object as parameters
    * and uses http to PUT updated FillUp to the database.
    * It returns server response as a Promise on success,
    * or rejected as an error message or an error object
    * if error message doesn't exist
    *
    * @method updateFillUp
    * @param updatedFillUp The Fillup to be updated
    * @return {Promise<any>} The server response, as a Promise
    */
    DataService.prototype.updateFillUp = function (carId, updatedFillUp) {
        var _this = this;
        return this.http
            .put("" + this.fillUpsUrl, JSON.stringify(updatedFillUp), { headers: this.headers })
            .toPromise()
            .then(function (response) {
            _this.fillUpsCache[carId].dirty = true;
            return response;
        })
            .catch(this.handleError);
    };
    /**
    * This method accepts car.id and FillUp.id as parameters and deletes the corresponding
    * entry in the database using http DELETE. It returns server response as a Promise
    * on success, and rejects with an error message or an error object
    * if error message doesn't exist
    *
    * @method deleteFillUp
    * @param carId id of the car to which fill up belongs to
    * @param fillUpId	id of the FillUp to be deleted
    * @return {Promise<FillUp>}	The deleted FillUp
    */
    DataService.prototype.deleteFillUp = function (carId, fillUpId) {
        var _this = this;
        return this.http
            .delete(this.fillUpsUrl + "/" + carId + "/" + fillUpId)
            .toPromise()
            .then(function (response) {
            _this.fillUpsCache[carId].dirty = true;
            return response;
        })
            .catch(this.handleError);
    };
    /**
    * This method accepts car id as a parameter and returns all reminders
    * of a car by issuing a http GET request. It returns an array
    * of Reminder objects as a Promise. On error it rejects
    * with an error message, or an error object if error message doesn't exist
    *
    * @method getReminders
    * @return {Promise<Reminder[]>}	All the reminders of a car as a Promise
    */
    DataService.prototype.getReminders = function (carId) {
        var _this = this;
        if (this.remindersCache[carId] && !this.remindersCache[carId].dirty) {
            return Promise.resolve(this.remindersCache[carId].data);
        }
        return this.http.get(this.remindersUrl + '/' + carId)
            .toPromise()
            .then(function (response) {
            _this.remindersCache[carId] = {};
            _this.remindersCache[carId].data = response.json().data;
            _this.remindersCache[carId].dirty = false;
            return response.json().data;
        })
            .catch(this.handleError);
    };
    /**
    * This method accepts two parameters, an id for a Reminder,
    * and an id for a car. It uses http GET to fetch the corresponding
    * Reminder for a Car.
    * It returns a Promise resolved as a Reminder object,
    * or rejected as an error message or an error object
    * if error message doesn't exist
    *
    * @method getReminderById
    * @return {Promise<Reminder>} The Reminder for a Car as a Promise
    */
    DataService.prototype.getReminderById = function (carId, id) {
        if (this.remindersCache[carId] && !this.remindersCache[carId].dirty) {
            var reminders = this.remindersCache[carId].data;
            for (var _i = 0, reminders_1 = reminders; _i < reminders_1.length; _i++) {
                var reminder = reminders_1[_i];
                if (reminder.id === id)
                    return Promise.resolve(reminder);
            }
            return Promise.resolve(null);
        }
        else
            return this.http.get(this.remindersUrl + '/one/' + id)
                .toPromise()
                .then(function (response) {
                return response.json().data;
            })
                .catch(this.handleError);
    };
    /**
    * This method accepts no parameters and returns an object containing
    * arrays of all reminders for all the cars. Object keys are car ids, and
    * values are arrays of Reminders. Method returns a Promise
    * which on error is rejected as an error message or an error object
    * if error message doesn't exist
    *
    * @method getAllReminders
    * @return {Promise<Object>}
    */
    DataService.prototype.getAllReminders = function () {
        var _this = this;
        var allReminders = {};
        return this.getCars().then(function (cars) {
            var promises = [];
            for (var _i = 0, cars_3 = cars; _i < cars_3.length; _i++) {
                var car = cars_3[_i];
                promises.push(_this.getReminders(car.id));
            }
            return Promise.all(promises).then(function (reminders) {
                for (var i = 0; i < reminders.length; ++i) {
                    allReminders[cars[i].id] = reminders[i];
                }
                return allReminders;
            }, function (err) {
                _this.handleError(err);
            });
        })
            .catch(this.handleError);
    };
    /**
    * This method accepts a parameter of Reminder type and calls http to POST this new Reminder
    * to a database. It returns a Promise resolved as the added Reminder on success, and on
    * error it returns error message or an error object if error message doesn't exist
    *
    * @method addReminder
    * @param newReminder Reminder to be added
    * @return Promise<Reminder> The added Reminder
    */
    DataService.prototype.addReminder = function (carId, newReminder) {
        var _this = this;
        return this.http
            .post(this.remindersUrl + '/' + carId, JSON.stringify(newReminder), { headers: this.headers })
            .toPromise()
            .then(function (response) {
            _this.remindersCache[carId].dirty = true;
            return response.json().data;
        })
            .catch(this.handleError);
    };
    /**
    * This method accepts car Id and a Reminder object as parameters
    * and uses http to PUT updated Reminder to the database.
    * It returns server response as a Promise on success,
    * or rejected as an error message or an error object
    * if error message doesn't exist
    *
    * @method updateReminder
    * @param updatedReminder The Reminder to be updated
    * @return {Promise<any>} The server response, as a Promise
    */
    DataService.prototype.updateReminder = function (carId, updatedReminder) {
        var _this = this;
        return this.http
            .put("" + this.remindersUrl, JSON.stringify(updatedReminder), { headers: this.headers })
            .toPromise()
            .then(function (response) {
            _this.remindersCache[carId].dirty = true;
            return response;
        })
            .catch(this.handleError);
    };
    /**
    * This method accepts Reminder.id as a parameter and deletes the corresponding entry
    * in the database using http DELETE. It returns server response as a Promise
    * on success, and rejects with an error message or an error object
    * if error message doesn't exist
    *
    * @method deleteReminder
    * @param reminderId	id of the Reminder to be deleted
    * @return {Promise<Reminder>}	The deleted Reminder
    */
    DataService.prototype.deleteReminder = function (carId, reminderId) {
        var _this = this;
        return this.http
            .delete(this.remindersUrl + "/" + carId + "/" + reminderId)
            .toPromise()
            .then(function (response) {
            _this.remindersCache[carId].dirty = true;
            return response;
        })
            .catch(this.handleError);
    };
    DataService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for dev purposes only; TODO: delete for prod
        return Promise.reject(error.message || error.statusText || error);
    };
    return DataService;
}());
DataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], DataService);

var _a;
//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ "../../../../../src/app/common/fillUp.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FillUp; });
var FillUp = (function () {
    function FillUp() {
    }
    return FillUp;
}());

//# sourceMappingURL=fillUp.js.map

/***/ }),

/***/ "../../../../../src/app/common/notification-hub.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationHubService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return HubNotificationType; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * This service is notification hub for the application
 * It exposes a method which any part of code can use to emit an event
 * And any component can subsribe to listen to events emitted from the hub
 *
 * @class NotificationHubService
 */
var NotificationHubService = (function () {
    function NotificationHubService() {
        this.eventStream = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    /**
      * This method is called whenever a part of application wants to
     * use the Notification Hub to present a message
     *
     * @method emit
     * @param HubNotificationType a type of message to present
     * @param message The contents of the message
     */
    NotificationHubService.prototype.emit = function (eventType, message) {
        this.eventStream.emit({ eventType: eventType, message: message });
    };
    return NotificationHubService;
}());
NotificationHubService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], NotificationHubService);

var HubNotificationType;
(function (HubNotificationType) {
    HubNotificationType[HubNotificationType["Error"] = 0] = "Error";
    HubNotificationType[HubNotificationType["UnknownError"] = 1] = "UnknownError";
    HubNotificationType[HubNotificationType["Success"] = 2] = "Success";
    HubNotificationType[HubNotificationType["AppState"] = 3] = "AppState";
})(HubNotificationType || (HubNotificationType = {}));
//# sourceMappingURL=notification-hub.service.js.map

/***/ }),

/***/ "../../../../../src/app/common/reminder.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Reminder; });
var Reminder = (function () {
    function Reminder() {
    }
    return Reminder;
}());

//# sourceMappingURL=reminder.js.map

/***/ }),

/***/ "../../../../../src/app/common/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User() {
    }
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ "../../../../../src/app/common/utilities.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notification_hub_service__ = __webpack_require__("../../../../../src/app/common/notification-hub.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilitiesService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Contains common utilities services such as handling errors
 * and different calculations used on several places in the app
 *
 * @class UtilitiesService
 */
var UtilitiesService = (function () {
    function UtilitiesService(notificationHubService, router) {
        this.notificationHubService = notificationHubService;
        this.router = router;
    }
    /**
     * Handles all data rw errors within the application
     *
     * @method handleError
     * @param error
     */
    UtilitiesService.prototype.handleError = function (error) {
        var message = error.message || error.statusText || 'unknown error';
        this.notificationHubService.emit(__WEBPACK_IMPORTED_MODULE_2__notification_hub_service__["b" /* HubNotificationType */].UnknownError, 'Error: ' + message);
        this.router.navigate(['/dashboard']);
    };
    /**
    * This method calculates Miles Per Gallon for a car based on its fill ups data
    *
    * @method CalculateMPG
    * @param fillUps FillUps[] array
    * @return {number} Miles per gallon for this car
    */
    UtilitiesService.prototype.CalculateMPG = function (fillUps) {
        if (!fillUps || fillUps.length === 0)
            return 0;
        var milesTravelled = fillUps[fillUps.length - 1].odometer - fillUps[0].odometer;
        var spentFuel = fillUps.map(function (fillUp) { return fillUp.quantity; })
            .reduce(function (accumulator, currentValue) {
            return accumulator + currentValue;
        });
        return milesTravelled / spentFuel;
    };
    /**
    * This method calculates Dollars Per Mile for a car based on its fill ups data
    *
    * @method CalculateDPM
    * @param fillUps FillUps[] array
    * @return {number} Dollars per mile for this car
    */
    UtilitiesService.prototype.CalculateDPM = function (fillUps) {
        if (!fillUps || fillUps.length === 0)
            return 0;
        var milesTravelled = fillUps[fillUps.length - 1].odometer - fillUps[0].odometer;
        var spentDollars = fillUps.map(function (fillUp) { return fillUp.pricePerGalon * fillUp.quantity; })
            .reduce(function (accumulator, currentValue) {
            return accumulator + currentValue;
        });
        if (milesTravelled > 0)
            return spentDollars / milesTravelled;
        else
            return 0;
    };
    /**
    * This method calculates Dollars Per Month for a car based on its fill ups data
    *
    * @method CalculateDPMonth
    * @param fillUps FillUps[] array
    * @return {number} Dollars per month for this car
    */
    UtilitiesService.prototype.CalculateDPMonth = function (fillUps) {
        if (!fillUps || fillUps.length === 0)
            return 0;
        var spentDollars = fillUps.map(function (fillUp) { return fillUp.pricePerGalon * fillUp.quantity; })
            .reduce(function (accumulator, currentValue) {
            return accumulator + currentValue;
        });
        var intervalInMonths = this.monthDiff(fillUps[0].date, fillUps[fillUps.length - 1].date);
        if (intervalInMonths > 0)
            return spentDollars / intervalInMonths;
        else
            return 0;
    };
    /**
    * This method calculates difference in months between the two dates
    * First and last month are not counted if partial
    *
    * @method monthDiff
    * @param sD1 Beginning date string
    * @param sD2 Ending date string
    * @return {number} Number of months between the given two dates
    */
    UtilitiesService.prototype.monthDiff = function (sD1, sD2) {
        var months;
        var d1 = new Date(Date.parse(sD1));
        var d2 = new Date(Date.parse(sD2));
        months = (d2.getFullYear() - d1.getFullYear()) * 12;
        months -= d1.getMonth() + 1;
        months += d2.getMonth();
        return months <= 0 ? 0 : months;
    };
    return UtilitiesService;
}());
UtilitiesService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__notification_hub_service__["a" /* NotificationHubService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__notification_hub_service__["a" /* NotificationHubService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], UtilitiesService);

var _a, _b;
//# sourceMappingURL=utilities.service.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/car-card/car-card.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".car-card {\n\tdisplay:  inline-block;\n\twidth: 17.2vw;\n\tmin-width: 13.75em;\n\tmargin: 0.6em;\n\tborder-width: 0.5em;\n\tborder-style: solid;\n\tborder-color: rgba(200, 200, 200, 0.55);\n\tborder-radius: 0.4em;\n\tbackground-color: lightgrey;\n\tbackground-clip: content-box;\n\tcursor: pointer;\n}\n.selected {\n\tborder-color: rgba(255, 255, 0, 0.3);\n\tborder-width: 0.8em;\n\tborder-radius: 0.6em;\n}\n.header {\n\tposition: relative;\n\theight: 3.5vw;\n\tmin-height: 2.9em;\n\tbackground-image: url(\"/assets/images/title-background-nodrag.png\");\n\tbackground-size: 100% 100%;\n}\n.title-image {\n\tposition: absolute;\n\twidth: 100%;\n\theight: 100%;\n}\n.vehicle {\n\tbackground-color: darkgray;\n\theight: 9vw;\n\tmin-height: 6.9em;\n}\n.avatar {\n\twidth: 48%;\n\theight: 100%;\n\tbackground-color: darkgray;\n\tdisplay: inline-block;\n}\nnav {\n\tdisplay: inline-block;\n\tvertical-align: top;\n\twidth: 48%;\n\theight: 100%;\n}\nbutton {\n\tdisplay: block;\n\tposition:  relative;\n\twidth: 100%;\n\theight: 31%;\n\tmargin-top: 0.125em;\n\tmargin-bottom: 0.125em;\n\tbackground-color: darkgreen;\n\tbackground-image: url(\"/assets/images/command-background.jpg\");\n\tbackground-size: 100% 100%;\n\tcursor: pointer;\n\tborder-width: 0;\n}\nbutton:hover {\n\tbackground-image: url(\"/assets/images/command-hover.jpg\");\n}\n.active {\n\tbackground-image: url(\"/assets/images/command-active.jpg\");\n}\n.button-image {\n\tposition: absolute;\n\tleft: 0;\n\ttop: 0;\n\twidth: 100%;\n\theight: 100%;\n}\n.miles-per-gallon,\n.right-pane {\n\tdisplay: inline-block;\n}\n.miles-per-gallon {\n\tvertical-align: top;\t/*  Needed for proper top-alignment of an inline-block */\n\twidth: 48%;\n}\np {\n\tline-height: 1;\n\tmargin: 0;\n}\n.statistics p {\n\tcolor: dimgray;\n}\n.name {\n\tpadding-left: 0.5rem;\n\tfont-size: 1.4em;\n\tfont-family: \"Arial Narrow\", Arial, sans-serif;\n\tcolor: midnightblue;\n}\n.model {\n\tpadding-top: 0.5rem;\n\tpadding-left: 0.5rem;\n\tfont-weight: bold;\n\tfont-size: 0.8em;\n}\n.statistics {\n\tmargin-top: 0.5rem;\n}\n.metric {\n\tfont-size: 0.8rem;\n}\n.miles-per-gallon {\n\ttext-align: right;\n\tmargin-left: -1rem;\n}\n.miles-per-gallon .metric {\n\tmargin-top: -0.35rem;\n}\n.miles-per-gallon .value {\n\tfont-family: Garamond, Baskerville, \"Baskerville Old Face\", \"Hoefler Text\", \"Times New Roman\", serif;\n\tfont-size: 4.5rem;\n}\n.right-pane {\n\tmargin-left: 1.5rem;\n}\n.right-pane .value {\n\tfont-family: Garamond, Baskerville, \"Baskerville Old Face\", \"Hoefler Text\", \"Times New Roman\", serif;\n\tfont-size: 1.4rem;\n}\n.dollars-per-month {\n\tmargin-top: 0.5rem;\n}\n.dollars-per-month .value {\n\tfont-family: Garamond, Baskerville, \"Baskerville Old Face\", \"Hoefler Text\", \"Times New Roman\", serif;\n\tfont-size: 1.6rem;\n}\n@media screen and (min-width: 1280px) and (min-aspect-ratio: 15/9) and (orientation: landscape) {\n\t.car-card {\n\t\twidth: 14.6vw;\n\t}\n\t.header {\n\t\theight: 3vw;\n\t}\n\t.vehicle {\n\t\theight: 7.65vw;\n\t}\n}\n@media screen and (max-width: 480px) {\n\t.miles-per-gallon .metric {\n\t\tmargin-top: -0.32rem;\n\t}\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/car-card/car-card.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='car-card' [class.selected]=\"selectedCarId===car.id\" (click)='switchToDetails()' >\n \t<div class='header'>\n \t\t<img class=\"title-image\" src=\"assets/images/title-glass.png\" />\n \t\t<p class='model'>{{car.model}}</p>\n \t\t<p class='name'>{{car.name}}</p>\n \t</div>\n \t<div class='vehicle'>\n \t\t<img class='avatar' alt='car avatar' src='http://localhost:3000/api/cars/{{car.id}}/image{{utilitiesService.avatarURLFragment}}'/>\n \t\t<nav>\n \t\t\t<button class=\"button-details\" [class.active]=\"selectedCarId===car.id && selectedCommand===0\" (click)='buttonDetails($event)'>\n\t\t\t\t<img class=\"button-image\" src=\"/assets/images/command-details.png\" />\n\t\t\t\t<img class=\"button-image\" src=\"/assets/images/command-glass.png\" />\n \t\t\t</button>\n \t\t\t<button class=\"button-fill-ups\" [class.active]=\"selectedCarId===car.id && selectedCommand===1\" (click)=\"buttonFillUps($event)\">\n\t\t\t\t<img class=\"button-image\" src=\"/assets/images/command-fillups.png\" />\n\t\t\t\t<img class=\"button-image\" src=\"/assets/images/command-glass.png\" />\n \t\t\t</button>\n \t\t\t<button class=\"button-reminders\" [class.active]=\"selectedCarId===car.id && selectedCommand===2\" (click)=\"buttonReminders($event)\">\n\t\t\t\t<img class=\"button-image\" src=\"/assets/images/command-reminders.png\" />\n\t\t\t\t<img class=\"button-image\" src=\"/assets/images/command-glass.png\" />\n \t\t\t</button>\n \t\t</nav>\n \t</div>\n \t<div class='statistics' *ngIf=\"selectedCarId===car.id || showStatisticsDefault\">\n \t\t<div class='miles-per-gallon'>\n \t\t\t<p class=\"value\">{{milesPerGallon}}</p>\n \t\t\t<p class=\"metric\">mpg</p>\n \t\t</div>\n \t\t<div class='right-pane'>\n\t \t\t<p class=\"value\">{{costPerMile}}&cent;</p>\n \t\t\t<p class=\"metric\">per mile</p>\n \t\t\t<div class='dollars-per-month'>\n \t\t\t\t<p class=\"value\">${{costPerMonth}}</p>\n\t \t\t\t<p class=\"metric\">per month</p>\n \t\t\t</div>\n \t\t</div>\n \t</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/car-card/car-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_car__ = __webpack_require__("../../../../../src/app/common/car.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_utilities_service__ = __webpack_require__("../../../../../src/app/common/utilities.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarCardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/****************************************************************************/




/****************************************************************************/
/**
 * This component shows a car card, which displays car name and model, car avatar,
 * three navigational buttons and three fields with basic statistics
 *
 * @class CarComponent
 */
var CarCardComponent = (function () {
    function CarCardComponent(router, utilitiesService) {
        this.router = router;
        this.utilitiesService = utilitiesService;
    }
    CarCardComponent.prototype.ngOnChanges = function (changes) {
        if (changes.fillUps)
            this.fillUps = changes.fillUps.currentValue;
        if (changes.selectedCommand)
            this.selectedCommand = changes.selectedCommand.currentValue;
        this.fillUps.sort(function (fillUp1, fillUp2) { return fillUp1.date > fillUp2.date ? 1 : -1; });
        this.milesPerGallon = Math.round(+this.utilitiesService.CalculateMPG(this.fillUps).toFixed(2));
        this.costPerMile = +this.utilitiesService.CalculateDPM(this.fillUps).toFixed(2);
        this.costPerMonth = +this.utilitiesService.CalculateDPMonth(this.fillUps).toFixed(2);
        // Note the plus sign that drops any "extra" zeroes at the end.
        // It changes the result (which is a string) into a number again
        // which means that it uses only as many digits as necessary.
    };
    CarCardComponent.prototype.switchToDetails = function () {
        this.router.navigate(['carDetails', this.car.id]);
    };
    CarCardComponent.prototype.buttonDetails = function (event) {
        event.stopPropagation();
        this.router.navigate(['carDetails', this.car.id]);
    };
    CarCardComponent.prototype.buttonFillUps = function (event) {
        event.stopPropagation();
        this.router.navigate(['carDetails', this.car.id, 'fillUps']);
    };
    CarCardComponent.prototype.buttonReminders = function (event) {
        event.stopPropagation();
        this.router.navigate(['carDetails', this.car.id, 'reminders']);
    };
    return CarCardComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__common_car__["a" /* Car */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__common_car__["a" /* Car */]) === "function" && _a || Object)
], CarCardComponent.prototype, "car", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], CarCardComponent.prototype, "fillUps", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], CarCardComponent.prototype, "selectedCarId", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], CarCardComponent.prototype, "showStatisticsDefault", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], CarCardComponent.prototype, "selectedCommand", void 0);
CarCardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-car-card',
        template: __webpack_require__("../../../../../src/app/dashboard/car-card/car-card.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/car-card/car-card.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__common_utilities_service__["a" /* UtilitiesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__common_utilities_service__["a" /* UtilitiesService */]) === "function" && _c || Object])
], CarCardComponent);

var _a, _b, _c;
//# sourceMappingURL=car-card.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/car-cards/car-cards.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/car-cards/car-cards.component.html":
/***/ (function(module, exports) {

module.exports = "<app-car-card *ngFor=\"let car of cars\" [car]=\"car\" [fillUps]=\"fillUps[car.id]\"  [showStatisticsDefault]=\"true\">\n</app-car-card>\n<app-add-car-button *ngIf=\"cars.length < 10\"></app-add-car-button>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/car-cards/car-cards.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_componentAnimations__ = __webpack_require__("../../../../../src/app/common/componentAnimations.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarCardsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/***********************************************************************************/


/***********************************************************************************/
/**
 * This component displays all the cars by iterating
 * cars array and sending each car to car component
 * for display
 *
 * @class CarsComponent
 */
var CarCardsComponent = (function () {
    function CarCardsComponent() {
        this.routeAnimation = true;
        this.display = 'block';
        this.position = 'relative';
    }
    return CarCardsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], CarCardsComponent.prototype, "cars", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CarCardsComponent.prototype, "fillUps", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('@routeAnimation'),
    __metadata("design:type", Object)
], CarCardsComponent.prototype, "routeAnimation", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('style.display'),
    __metadata("design:type", Object)
], CarCardsComponent.prototype, "display", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('style.position'),
    __metadata("design:type", Object)
], CarCardsComponent.prototype, "position", void 0);
CarCardsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-car-cards',
        template: __webpack_require__("../../../../../src/app/dashboard/car-cards/car-cards.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/car-cards/car-cards.component.css")],
        animations: [__WEBPACK_IMPORTED_MODULE_1__common_componentAnimations__["b" /* slideFromRightToLeftAnimation */]]
    }),
    __metadata("design:paramtypes", [])
], CarCardsComponent);

//# sourceMappingURL=car-cards.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#car-cards-pane {\n\tposition: absolute;\n\ttop: 0;\n\tleft: 23em;\n\twidth: calc(100vw - 25em);\n\tmin-width: 18em;\n\toverflow-x: hidden;\n\toverflow-y: auto;\n}\n@media screen and (min-width: 1280px) {\n\t#car-cards-pane {\n\t\twidth: calc(85vw - 25em);\n\t}\n}\n@media screen and (max-width: 786px) {\n\t#car-cards-pane {\n\t\twidth: calc(100vw - 20em);\n\t\tmax-height: 90vh;\n\t}\n}\n@media screen and (max-width: 650px) {\n\t#car-cards-pane {\n\t\tleft: 0;\n\t\ttop: 40em;\n\t}\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<app-summary id=\"summary-pane\" [user]='user' [cars]=\"cars\" [fillUps]=\"fillUps\" [reminders]=\"reminders\" ></app-summary>\n<div id=\"car-cards-pane\">\n\t<app-car-cards [cars]=\"cars\" [fillUps]=\"fillUps\"></app-car-cards>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_notification_hub_service__ = __webpack_require__("../../../../../src/app/common/notification-hub.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/***********************************************************************************/



/***********************************************************************************/
var DashboardComponent = (function () {
    function DashboardComponent(router, notificationHubService, route) {
        this.router = router;
        this.notificationHubService = notificationHubService;
        this.route = route;
        this.fillUps = {};
        this.reminders = {};
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Collect cars data, and fill ups for all the cars as two-dimensional matrix
        this.unsubscribe = this.route.data
            .subscribe(function (data) {
            _this.user = data.user;
            _this.cars = data.cars;
            _this.fillUps = data.fillUps;
            _this.reminders = data.reminders;
            _this.notificationHubService.emit(__WEBPACK_IMPORTED_MODULE_2__common_notification_hub_service__["b" /* HubNotificationType */].AppState, 'Dashboard');
        });
    };
    DashboardComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe.unsubscribe();
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__common_notification_hub_service__["a" /* NotificationHubService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__common_notification_hub_service__["a" /* NotificationHubService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object])
], DashboardComponent);

var _a, _b, _c;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_car_add_car_module__ = __webpack_require__("../../../../../src/app/add-car/add-car.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__car_cards_car_cards_component__ = __webpack_require__("../../../../../src/app/dashboard/car-cards/car-cards.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__car_card_car_card_component__ = __webpack_require__("../../../../../src/app/dashboard/car-card/car-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__summary_summary_component__ = __webpack_require__("../../../../../src/app/dashboard/summary/summary.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__summary_summary_stat_summary_stat_component__ = __webpack_require__("../../../../../src/app/dashboard/summary/summary-stat/summary-stat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__summary_overdue_reminders_overdue_reminders_component__ = __webpack_require__("../../../../../src/app/dashboard/summary/overdue-reminders/overdue-reminders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__summary_complete_registration_complete_registration_component__ = __webpack_require__("../../../../../src/app/dashboard/summary/complete-registration/complete-registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var DashboardModule = (function () {
    function DashboardModule() {
    }
    return DashboardModule;
}());
DashboardModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_4__add_car_add_car_module__["a" /* AddCarModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* ReactiveFormsModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__car_card_car_card_component__["a" /* CarCardComponent */],
            __WEBPACK_IMPORTED_MODULE_5__car_cards_car_cards_component__["a" /* CarCardsComponent */],
            __WEBPACK_IMPORTED_MODULE_7__summary_summary_component__["a" /* SummaryComponent */],
            __WEBPACK_IMPORTED_MODULE_8__summary_summary_stat_summary_stat_component__["a" /* SummaryStatComponent */],
            __WEBPACK_IMPORTED_MODULE_9__summary_overdue_reminders_overdue_reminders_component__["a" /* OverdueRemindersComponent */],
            __WEBPACK_IMPORTED_MODULE_10__summary_complete_registration_complete_registration_component__["a" /* CompleteRegistrationComponent */],
            __WEBPACK_IMPORTED_MODULE_11__dashboard_component__["a" /* DashboardComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_6__car_card_car_card_component__["a" /* CarCardComponent */],
            __WEBPACK_IMPORTED_MODULE_5__car_cards_car_cards_component__["a" /* CarCardsComponent */]
        ]
    })
], DashboardModule);

//# sourceMappingURL=dashboard.module.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/summary/complete-registration/complete-registration.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* For \"Madoka\" Inputs */\n* {\n\tbox-sizing: border-box;\n}\n#header {\n\tfont-size: 1.3rem;\n\tcolor: rgb(60, 60, 60);\n\tmargin: 0;\n}\nform {\n\tfont-size: 1.5em;\n\twidth: 16rem;\n\tmargin: 0;\n}\n/********/\nbutton {\n\tdisplay: inline-block;\n\tposition: relative;\n\twidth: 5rem;\n\theight: 1.9rem;\n\tmargin-top: 1rem;\n\tmargin-bottom: 1rem;\n\tborder-width: 0;\n\tbackground-color: darkgreen;\n\tbackground-image: url(\"/assets/images/command-background.jpg\");\n\tbackground-size: 100% 100%;\n\tcursor: pointer;\n}\nbutton:hover {\n\tbackground-image: url(\"/assets/images/command-hover.jpg\");\n}\n.button-image {\n\tposition: absolute;\n\tleft: 0;\n\ttop: 0;\n\twidth: 100%;\n\theight: 100%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/summary/complete-registration/complete-registration.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!formSubmitted\">\n\t<p id=\"header\">Complete Your Registration</p>\n\t<form [formGroup]=\"editUserForm\" (ngSubmit)=\"onSubmit(editUserForm.value)\" (keyup)=\"onKey($event)\" >\n\t<div class=\"data\">\n\t\t<span *ngIf=\"!user.displayName\" class=\"input input--madoka\" [class.input--filled]=\"displayName.value !== ''\" >\n\t\t\t<input #displayName class=\"input__field input__field--madoka\" type=\"text\" id=\"display-name\" [formControl]=\"editUserForm.controls['displayName']\" (blur)=\"onBlur($event)\" />\n\t\t\t<label class=\"input__label input__label--madoka\" for=\"display-name\">\n\t\t\t\t<svg class=\"graphic graphic--madoka\" width=\"100%\" height=\"100%\" viewBox=\"0 0 404 77\" preserveAspectRatio=\"none\">\n\t\t\t\t\t<path d=\"m0,0l404,0l0,77l-404,0l0,-77z\"/>\n\t\t\t\t</svg>\n\t\t\t\t<span class=\"input__label-content input__label-content--madoka\">Display Name</span>\n\t\t\t</label>\n\t\t</span>\n\t\t<div class=\"error\" *ngIf=\"!user.displayName && editUserForm.controls['displayName'].hasError('maxlength') && editUserForm.controls['displayName'].touched\">At most 40 characters</div>\n\n\t  <span *ngIf=\"!user.country\" class=\"input input--madoka\" [class.input--filled]=\"country.value !== ''\" >\n\t\t\t<input #country autocomplete=\"country-name\" class=\"input__field input__field--madoka\" type=\"text\" id=\"country\" list=\"countries\" [formControl]=\"editUserForm.controls['country']\" (blur)=\"onBlur($event)\" />\n\t\t\t<label class=\"input__label input__label--madoka\" for=\"country\">\n\t\t\t\t<svg class=\"graphic graphic--madoka\" width=\"100%\" height=\"100%\" viewBox=\"0 0 404 77\" preserveAspectRatio=\"none\">\n\t\t\t\t\t<path d=\"m0,0l404,0l0,77l-404,0l0,-77z\"/>\n\t\t\t\t</svg>\n\t\t\t\t<span class=\"input__label-content input__label-content--madoka\">Country</span>\n\t\t\t</label>\n\t\t</span>\n\n\t\t<span *ngIf=\"!user.postalCode\" class=\"input input--madoka\" [class.input--filled]=\"postalCode.value !== ''\" >\n\t\t\t<input #postalCode autocomplete=\"postal-code\" class=\"input__field input__field--madoka\" type=\"number\" id=\"postal-code\" [formControl]=\"editUserForm.controls['postalCode']\" (blur)=\"onBlur($event)\" />\n\t\t\t<label class=\"input__label input__label--madoka\" for=\"postal-code\">\n\t\t\t\t<svg class=\"graphic graphic--madoka\" width=\"100%\" height=\"100%\" viewBox=\"0 0 404 77\" preserveAspectRatio=\"none\">\n\t\t\t\t\t<path d=\"m0,0l404,0l0,77l-404,0l0,-77z\"/>\n\t\t\t\t</svg>\n\t\t\t\t<span class=\"input__label-content input__label-content--madoka\">Postal Code</span>\n\t\t\t</label>\n\t\t</span>\n\t\t\n\t\t<button type=\"submit\" [disabled]=\"!editUserForm.valid\" >\n\t\t\t<img class=\"button-image\" src=\"/assets/images/button-save.png\" />\n\t\t\t<img class=\"button-image\" src=\"/assets/images/command-glass.png\" />\n\t\t</button>\n\t</div>\n\t</form>\n\n\t<datalist id=\"countries\">\n\t\t<option value=\"Afghanistan\">Afghanistan</option>\n\t\t<option value=\"Åland Islands\">Åland Islands</option>\n\t\t<option value=\"Albania\">Albania</option>\n\t\t<option value=\"Algeria\">Algeria</option>\n\t\t<option value=\"American Samoa\">American Samoa</option>\n\t\t<option value=\"Andorra\">Andorra</option>\n\t\t<option value=\"Angola\">Angola</option>\n\t\t<option value=\"Anguilla\">Anguilla</option>\n\t\t<option value=\"Antarctica\">Antarctica</option>\n\t\t<option value=\"Antigua and Barbuda\">Antigua and Barbuda</option>\n\t\t<option value=\"Argentina\">Argentina</option>\n\t\t<option value=\"Armenia\">Armenia</option>\n\t\t<option value=\"Aruba\">Aruba</option>\n\t\t<option value=\"Australia\">Australia</option>\n\t\t<option value=\"Austria\">Austria</option>\n\t\t<option value=\"Azerbaijan\">Azerbaijan</option>\n\t\t<option value=\"Bahamas\">Bahamas</option>\n\t\t<option value=\"Bahrain\">Bahrain</option>\n\t\t<option value=\"Bangladesh\">Bangladesh</option>\n\t\t<option value=\"Barbados\">Barbados</option>\n\t\t<option value=\"Belarus\">Belarus</option>\n\t\t<option value=\"Belgium\">Belgium</option>\n\t\t<option value=\"Belize\">Belize</option>\n\t\t<option value=\"Benin\">Benin</option>\n\t\t<option value=\"Bermuda\">Bermuda</option>\n\t\t<option value=\"Bhutan\">Bhutan</option>\n\t\t<option value=\"Bolivia\">Bolivia</option>\n\t\t<option value=\"Bosnia and Herzegovina\">Bosnia and Herzegovina</option>\n\t\t<option value=\"Botswana\">Botswana</option>\n\t\t<option value=\"Bouvet Island\">Bouvet Island</option>\n\t\t<option value=\"Brazil\">Brazil</option>\n\t\t<option value=\"British Indian Ocean Territory\">British Indian Ocean Territory</option>\n\t\t<option value=\"Brunei Darussalam\">Brunei Darussalam</option>\n\t\t<option value=\"Bulgaria\">Bulgaria</option>\n\t\t<option value=\"Burkina Faso\">Burkina Faso</option>\n\t\t<option value=\"Burundi\">Burundi</option>\n\t\t<option value=\"Cambodia\">Cambodia</option>\n\t\t<option value=\"Cameroon\">Cameroon</option>\n\t\t<option value=\"Canada\">Canada</option>\n\t\t<option value=\"Cape Verde\">Cape Verde</option>\n\t\t<option value=\"Cayman Islands\">Cayman Islands</option>\n\t\t<option value=\"Central African Republic\">Central African Republic</option>\n\t\t<option value=\"Chad\">Chad</option>\n\t\t<option value=\"Chile\">Chile</option>\n\t\t<option value=\"China\">China</option>\n\t\t<option value=\"Christmas Island\">Christmas Island</option>\n\t\t<option value=\"Cocos (Keeling) Islands\">Cocos (Keeling) Islands</option>\n\t\t<option value=\"Colombia\">Colombia</option>\n\t\t<option value=\"Comoros\">Comoros</option>\n\t\t<option value=\"Congo\">Congo</option>\n\t\t<option value=\"Congo, The Democratic Republic of The\">Congo, The Democratic Republic of The</option>\n\t\t<option value=\"Cook Islands\">Cook Islands</option>\n\t\t<option value=\"Costa Rica\">Costa Rica</option>\n\t\t<option value=\"Cote D'ivoire\">Cote D'ivoire</option>\n\t\t<option value=\"Croatia\">Croatia</option>\n\t\t<option value=\"Cuba\">Cuba</option>\n\t\t<option value=\"Cyprus\">Cyprus</option>\n\t\t<option value=\"Czechia\">Czechia</option>\n\t\t<option value=\"Denmark\">Denmark</option>\n\t\t<option value=\"Djibouti\">Djibouti</option>\n\t\t<option value=\"Dominica\">Dominica</option>\n\t\t<option value=\"Dominican Republic\">Dominican Republic</option>\n\t\t<option value=\"Ecuador\">Ecuador</option>\n\t\t<option value=\"Egypt\">Egypt</option>\n\t\t<option value=\"El Salvador\">El Salvador</option>\n\t\t<option value=\"Equatorial Guinea\">Equatorial Guinea</option>\n\t\t<option value=\"Eritrea\">Eritrea</option>\n\t\t<option value=\"Estonia\">Estonia</option>\n\t\t<option value=\"Ethiopia\">Ethiopia</option>\n\t\t<option value=\"Falkland Islands (Malvinas)\">Falkland Islands (Malvinas)</option>\n\t\t<option value=\"Faroe Islands\">Faroe Islands</option>\n\t\t<option value=\"Fiji\">Fiji</option>\n\t\t<option value=\"Finland\">Finland</option>\n\t\t<option value=\"France\">France</option>\n\t\t<option value=\"French Guiana\">French Guiana</option>\n\t\t<option value=\"French Polynesia\">French Polynesia</option>\n\t\t<option value=\"French Southern Territories\">French Southern Territories</option>\n\t\t<option value=\"Gabon\">Gabon</option>\n\t\t<option value=\"Gambia\">Gambia</option>\n\t\t<option value=\"Georgia\">Georgia</option>\n\t\t<option value=\"Germany\">Germany</option>\n\t\t<option value=\"Ghana\">Ghana</option>\n\t\t<option value=\"Gibraltar\">Gibraltar</option>\n\t\t<option value=\"Greece\">Greece</option>\n\t\t<option value=\"Greenland\">Greenland</option>\n\t\t<option value=\"Grenada\">Grenada</option>\n\t\t<option value=\"Guadeloupe\">Guadeloupe</option>\n\t\t<option value=\"Guam\">Guam</option>\n\t\t<option value=\"Guatemala\">Guatemala</option>\n\t\t<option value=\"Guernsey\">Guernsey</option>\n\t\t<option value=\"Guinea\">Guinea</option>\n\t\t<option value=\"Guinea-bissau\">Guinea-bissau</option>\n\t\t<option value=\"Guyana\">Guyana</option>\n\t\t<option value=\"Haiti\">Haiti</option>\n\t\t<option value=\"Heard Island and Mcdonald Islands\">Heard Island and Mcdonald Islands</option>\n\t\t<option value=\"Holy See (Vatican City State)\">Holy See (Vatican City State)</option>\n\t\t<option value=\"Honduras\">Honduras</option>\n\t\t<option value=\"Hong Kong\">Hong Kong</option>\n\t\t<option value=\"Hungary\">Hungary</option>\n\t\t<option value=\"Iceland\">Iceland</option>\n\t\t<option value=\"India\">India</option>\n\t\t<option value=\"Indonesia\">Indonesia</option>\n\t\t<option value=\"Iran, Islamic Republic of\">Iran, Islamic Republic of</option>\n\t\t<option value=\"Iraq\">Iraq</option>\n\t\t<option value=\"Ireland\">Ireland</option>\n\t\t<option value=\"Isle of Man\">Isle of Man</option>\n\t\t<option value=\"Israel\">Israel</option>\n\t\t<option value=\"Italy\">Italy</option>\n\t\t<option value=\"Jamaica\">Jamaica</option>\n\t\t<option value=\"Japan\">Japan</option>\n\t\t<option value=\"Jersey\">Jersey</option>\n\t\t<option value=\"Jordan\">Jordan</option>\n\t\t<option value=\"Kazakhstan\">Kazakhstan</option>\n\t\t<option value=\"Kenya\">Kenya</option>\n\t\t<option value=\"Kiribati\">Kiribati</option>\n\t\t<option value=\"Korea, Democratic People's Republic of\">Korea, Democratic People's Republic of</option>\n\t\t<option value=\"Korea, Republic of\">Korea, Republic of</option>\n\t\t<option value=\"Kuwait\">Kuwait</option>\n\t\t<option value=\"Kyrgyzstan\">Kyrgyzstan</option>\n\t\t<option value=\"Lao People's Democratic Republic\">Lao People's Democratic Republic</option>\n\t\t<option value=\"Latvia\">Latvia</option>\n\t\t<option value=\"Lebanon\">Lebanon</option>\n\t\t<option value=\"Lesotho\">Lesotho</option>\n\t\t<option value=\"Liberia\">Liberia</option>\n\t\t<option value=\"Libyan Arab Jamahiriya\">Libyan Arab Jamahiriya</option>\n\t\t<option value=\"Liechtenstein\">Liechtenstein</option>\n\t\t<option value=\"Lithuania\">Lithuania</option>\n\t\t<option value=\"Luxembourg\">Luxembourg</option>\n\t\t<option value=\"Macao\">Macao</option>\n\t\t<option value=\"Macedonia, The Former Yugoslav Republic of\">Macedonia, The Former Yugoslav Republic of</option>\n\t\t<option value=\"Madagascar\">Madagascar</option>\n\t\t<option value=\"Malawi\">Malawi</option>\n\t\t<option value=\"Malaysia\">Malaysia</option>\n\t\t<option value=\"Maldives\">Maldives</option>\n\t\t<option value=\"Mali\">Mali</option>\n\t\t<option value=\"Malta\">Malta</option>\n\t\t<option value=\"Marshall Islands\">Marshall Islands</option>\n\t\t<option value=\"Martinique\">Martinique</option>\n\t\t<option value=\"Mauritania\">Mauritania</option>\n\t\t<option value=\"Mauritius\">Mauritius</option>\n\t\t<option value=\"Mayotte\">Mayotte</option>\n\t\t<option value=\"Mexico\">Mexico</option>\n\t\t<option value=\"Micronesia, Federated States of\">Micronesia, Federated States of</option>\n\t\t<option value=\"Moldova, Republic of\">Moldova, Republic of</option>\n\t\t<option value=\"Monaco\">Monaco</option>\n\t\t<option value=\"Mongolia\">Mongolia</option>\n\t\t<option value=\"Montenegro\">Montenegro</option>\n\t\t<option value=\"Montserrat\">Montserrat</option>\n\t\t<option value=\"Morocco\">Morocco</option>\n\t\t<option value=\"Mozambique\">Mozambique</option>\n\t\t<option value=\"Myanmar\">Myanmar</option>\n\t\t<option value=\"Namibia\">Namibia</option>\n\t\t<option value=\"Nauru\">Nauru</option>\n\t\t<option value=\"Nepal\">Nepal</option>\n\t\t<option value=\"Netherlands\">Netherlands</option>\n\t\t<option value=\"Netherlands Antilles\">Netherlands Antilles</option>\n\t\t<option value=\"New Caledonia\">New Caledonia</option>\n\t\t<option value=\"New Zealand\">New Zealand</option>\n\t\t<option value=\"Nicaragua\">Nicaragua</option>\n\t\t<option value=\"Niger\">Niger</option>\n\t\t<option value=\"Nigeria\">Nigeria</option>\n\t\t<option value=\"Niue\">Niue</option>\n\t\t<option value=\"Norfolk Island\">Norfolk Island</option>\n\t\t<option value=\"Northern Mariana Islands\">Northern Mariana Islands</option>\n\t\t<option value=\"Norway\">Norway</option>\n\t\t<option value=\"Oman\">Oman</option>\n\t\t<option value=\"Pakistan\">Pakistan</option>\n\t\t<option value=\"Palau\">Palau</option>\n\t\t<option value=\"Palestinian Territory, Occupied\">Palestinian Territory, Occupied</option>\n\t\t<option value=\"Panama\">Panama</option>\n\t\t<option value=\"Papua New Guinea\">Papua New Guinea</option>\n\t\t<option value=\"Paraguay\">Paraguay</option>\n\t\t<option value=\"Peru\">Peru</option>\n\t\t<option value=\"Philippines\">Philippines</option>\n\t\t<option value=\"Pitcairn\">Pitcairn</option>\n\t\t<option value=\"Poland\">Poland</option>\n\t\t<option value=\"Portugal\">Portugal</option>\n\t\t<option value=\"Puerto Rico\">Puerto Rico</option>\n\t\t<option value=\"Qatar\">Qatar</option>\n\t\t<option value=\"Reunion\">Reunion</option>\n\t\t<option value=\"Romania\">Romania</option>\n\t\t<option value=\"Russian Federation\">Russian Federation</option>\n\t\t<option value=\"Rwanda\">Rwanda</option>\n\t\t<option value=\"Saint Helena\">Saint Helena</option>\n\t\t<option value=\"Saint Kitts and Nevis\">Saint Kitts and Nevis</option>\n\t\t<option value=\"Saint Lucia\">Saint Lucia</option>\n\t\t<option value=\"Saint Pierre and Miquelon\">Saint Pierre and Miquelon</option>\n\t\t<option value=\"Saint Vincent and The Grenadines\">Saint Vincent and The Grenadines</option>\n\t\t<option value=\"Samoa\">Samoa</option>\n\t\t<option value=\"San Marino\">San Marino</option>\n\t\t<option value=\"Sao Tome and Principe\">Sao Tome and Principe</option>\n\t\t<option value=\"Saudi Arabia\">Saudi Arabia</option>\n\t\t<option value=\"Senegal\">Senegal</option>\n\t\t<option value=\"Serbia\">Serbia</option>\n\t\t<option value=\"Seychelles\">Seychelles</option>\n\t\t<option value=\"Sierra Leone\">Sierra Leone</option>\n\t\t<option value=\"Singapore\">Singapore</option>\n\t\t<option value=\"Slovakia\">Slovakia</option>\n\t\t<option value=\"Slovenia\">Slovenia</option>\n\t\t<option value=\"Solomon Islands\">Solomon Islands</option>\n\t\t<option value=\"Somalia\">Somalia</option>\n\t\t<option value=\"South Africa\">South Africa</option>\n\t\t<option value=\"South Georgia and The South Sandwich Islands\">South Georgia and The South Sandwich Islands</option>\n\t\t<option value=\"Spain\">Spain</option>\n\t\t<option value=\"Sri Lanka\">Sri Lanka</option>\n\t\t<option value=\"Sudan\">Sudan</option>\n\t\t<option value=\"Suriname\">Suriname</option>\n\t\t<option value=\"Svalbard and Jan Mayen\">Svalbard and Jan Mayen</option>\n\t\t<option value=\"Swaziland\">Swaziland</option>\n\t\t<option value=\"Sweden\">Sweden</option>\n\t\t<option value=\"Switzerland\">Switzerland</option>\n\t\t<option value=\"Syrian Arab Republic\">Syrian Arab Republic</option>\n\t\t<option value=\"Taiwan, Province of China\">Taiwan, Province of China</option>\n\t\t<option value=\"Tajikistan\">Tajikistan</option>\n\t\t<option value=\"Tanzania, United Republic of\">Tanzania, United Republic of</option>\n\t\t<option value=\"Thailand\">Thailand</option>\n\t\t<option value=\"Timor-leste\">Timor-leste</option>\n\t\t<option value=\"Togo\">Togo</option>\n\t\t<option value=\"Tokelau\">Tokelau</option>\n\t\t<option value=\"Tonga\">Tonga</option>\n\t\t<option value=\"Trinidad and Tobago\">Trinidad and Tobago</option>\n\t\t<option value=\"Tunisia\">Tunisia</option>\n\t\t<option value=\"Turkey\">Turkey</option>\n\t\t<option value=\"Turkmenistan\">Turkmenistan</option>\n\t\t<option value=\"Turks and Caicos Islands\">Turks and Caicos Islands</option>\n\t\t<option value=\"Tuvalu\">Tuvalu</option>\n\t\t<option value=\"Uganda\">Uganda</option>\n\t\t<option value=\"Ukraine\">Ukraine</option>\n\t\t<option value=\"United Arab Emirates\">United Arab Emirates</option>\n\t\t<option value=\"United Kingdom\">United Kingdom</option>\n\t\t<option value=\"United States\">United States</option>\n\t\t<option value=\"United States Minor Outlying Islands\">United States Minor Outlying Islands</option>\n\t\t<option value=\"Uruguay\">Uruguay</option>\n\t\t<option value=\"Uzbekistan\">Uzbekistan</option>\n\t\t<option value=\"Vanuatu\">Vanuatu</option>\n\t\t<option value=\"Venezuela\">Venezuela</option>\n\t\t<option value=\"Viet Nam\">Viet Nam</option>\n\t\t<option value=\"Virgin Islands, British\">Virgin Islands, British</option>\n\t\t<option value=\"Virgin Islands, U.S.\">Virgin Islands, U.S.</option>\n\t\t<option value=\"Wallis and Futuna\">Wallis and Futuna</option>\n\t\t<option value=\"Western Sahara\">Western Sahara</option>\n\t\t<option value=\"Yemen\">Yemen</option>\n\t\t<option value=\"Zambia\">Zambia</option>\n\t\t<option value=\"Zimbabwe\">Zimbabwe</option>\n\t</datalist>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/summary/complete-registration/complete-registration.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_data_service__ = __webpack_require__("../../../../../src/app/common/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_notification_hub_service__ = __webpack_require__("../../../../../src/app/common/notification-hub.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_utilities_service__ = __webpack_require__("../../../../../src/app/common/utilities.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__redux_action_creators_user_action_creators__ = __webpack_require__("../../../../../src/app/redux-action-creators/user.action-creators.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_user__ = __webpack_require__("../../../../../src/app/common/user.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompleteRegistrationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/***********************************************************************************/







/***********************************************************************************/
/**
 * This component displays the complete registration form
 *
 * @class CompleteRegistrationComponent
 */
var CompleteRegistrationComponent = (function () {
    function CompleteRegistrationComponent(fb, dataService, actionCreators, notificationHubService, utilitiesService) {
        this.fb = fb;
        this.dataService = dataService;
        this.actionCreators = actionCreators;
        this.notificationHubService = notificationHubService;
        this.utilitiesService = utilitiesService;
        this.formSubmitted = false;
    }
    CompleteRegistrationComponent.prototype.ngOnInit = function () {
        var group = {};
        if (!this.user.displayName)
            group.displayName = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].maxLength(40));
        if (!this.user.country)
            group.country = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormControl */]('');
        if (!this.user.postalCode)
            group.postalCode = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormControl */]('');
        this.editUserForm = this.fb.group(group);
    };
    /**
     * This method sends edit user form values to the server
     *
     * @method onSubmit
     * @param formValues The collected form values
     */
    CompleteRegistrationComponent.prototype.onSubmit = function (formValues) {
        var _this = this;
        if (!this.editUserForm.valid)
            return;
        var editedUser = new __WEBPACK_IMPORTED_MODULE_6__common_user__["a" /* User */];
        editedUser.username = this.user.username;
        if (!this.user.displayName)
            editedUser.displayName = formValues.displayName && formValues.displayName.trim();
        else
            editedUser.displayName = this.user.displayName;
        if (!this.user.country)
            editedUser.country = formValues.country && formValues.country.trim();
        else
            editedUser.country = this.user.country;
        if (!this.user.postalCode)
            editedUser.postalCode = formValues.postalCode;
        else
            editedUser.postalCode = this.user.postalCode;
        editedUser.registrationCompleted = true;
        this.dataService.updateUser(editedUser).then(function () {
            _this.notificationHubService.emit(__WEBPACK_IMPORTED_MODULE_3__common_notification_hub_service__["b" /* HubNotificationType */].Success, 'User data saved');
            _this.actionCreators.editUser(editedUser);
            _this.formSubmitted = true;
        })
            .catch(function (error) { return _this.utilitiesService.handleError(error); });
    };
    /**
     * Trims input fields on losing focus
     *
     * @method onBlur
     * @param event:any
     */
    CompleteRegistrationComponent.prototype.onBlur = function (event) {
        event.target.value = event.target.value.trim();
    };
    return CompleteRegistrationComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__common_user__["a" /* User */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__common_user__["a" /* User */]) === "function" && _a || Object)
], CompleteRegistrationComponent.prototype, "user", void 0);
CompleteRegistrationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-complete-registration',
        template: __webpack_require__("../../../../../src/app/dashboard/summary/complete-registration/complete-registration.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/summary/complete-registration/complete-registration.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__common_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__common_data_service__["a" /* DataService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__redux_action_creators_user_action_creators__["a" /* UserActionCreators */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__redux_action_creators_user_action_creators__["a" /* UserActionCreators */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__common_notification_hub_service__["a" /* NotificationHubService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__common_notification_hub_service__["a" /* NotificationHubService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__common_utilities_service__["a" /* UtilitiesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__common_utilities_service__["a" /* UtilitiesService */]) === "function" && _f || Object])
], CompleteRegistrationComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=complete-registration.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/summary/overdue-reminders/overdue-reminders.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#reminders-header {\n\tmargin: 1rem 0 0 1rem;\n\tfont-weight: bold;\n}\ndiv {\n\tmargin-bottom: 4px;\n\tmargin-right: 0.5em;\n\tbackground-color: rgba(220,220,220, 0.5);\n\tcolor: darkred;\n}\ndiv:hover {\n\tbackground-color: rgba(255, 250, 240, 0.5);\n}\np {\n\tmargin: 0 0.5rem 0 1rem;\n\tfont-family: \"Arial Narrow\", Arial, sans-serif;\n}\n.text {\n\tfont-size: 1.2rem;\n}\n.small {\n\tfont-size: 0.8rem;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/summary/overdue-reminders/overdue-reminders.component.html":
/***/ (function(module, exports) {

module.exports = "<p *ngIf=\"overdueReminders.length > 0\" id=\"reminders-header\">Reminders</p>\n<div *ngFor='let reminder of overdueReminders'>\n\t<p class=\"text\">{{reminder.text}}</p>\n\t<p class=\"small\">on {{reminder.date}}</p>\n\t<p class=\"small\">{{cars[reminder.car].model}}</p>\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/summary/overdue-reminders/overdue-reminders.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverdueRemindersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/***********************************************************************************/


/***********************************************************************************/
/**
 * This component displays the Mileage Stats summary pane
 *
 * @class SummaryComponent
 */
var OverdueRemindersComponent = (function () {
    function OverdueRemindersComponent() {
        this.overdueReminders = [];
    }
    OverdueRemindersComponent.prototype.ngOnInit = function () {
        var _loop_1 = function (i) {
            this_1.overdueReminders.push(
            // eliminate non-overdue reminders
            this_1.reminders[this_1.cars[i].id].filter(function (reminder) {
                if (new Date(reminder.date).valueOf() < Date.now())
                    return true;
                else
                    return false;
            }).map(function (reminder) {
                reminder.car = i;
                return reminder;
            }));
        };
        var this_1 = this;
        for (var i = 0; i < this.cars.length; ++i) {
            _loop_1(i);
        }
        // We constructed array of arrays of reminders
        // So we are going to flatten it to a linear array
        this.overdueReminders = __WEBPACK_IMPORTED_MODULE_1_lodash__["flattenDeep"](this.overdueReminders);
        this.overdueReminders.sort(function (a, b) { return a.date < b.date ? 1 : -1; });
    };
    return OverdueRemindersComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], OverdueRemindersComponent.prototype, "cars", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], OverdueRemindersComponent.prototype, "reminders", void 0);
OverdueRemindersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-overdue-reminders',
        template: __webpack_require__("../../../../../src/app/dashboard/summary/overdue-reminders/overdue-reminders.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/summary/overdue-reminders/overdue-reminders.component.css")]
    }),
    __metadata("design:paramtypes", [])
], OverdueRemindersComponent);

//# sourceMappingURL=overdue-reminders.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/summary/summary-stat/summary-stat.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".value {\n\tfont-size: 2.5rem;\n\tfont-family: Garamond, Baskerville, \"Baskerville Old Face\", \"Hoefler Text\", \"Times New Roman\", serif;\n}\n.metric {\n\tfont-weight: bold;\n}\np {\n\tmargin: 0;\n}\n#header {\n\tfont-size: 1.3rem;\n\tmargin-bottom: 0.5rem;\n\tcolor: rgb(60, 60, 60);\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/summary/summary-stat/summary-stat.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n\t<p id=\"header\">Summary Statistics</p>\n\t<p><span class=\"value\">{{MPG}}</span><span class=\"metric\">mpg</span></p>\n\t<p><span class=\"value\">{{CPM}}&cent;</span><span class=\"metric\">per mile</span></p>\n\t<p><span class=\"value\">${{CPMonth}}</span><span class=\"metric\">per month</span></p>\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/summary/summary-stat/summary-stat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_utilities_service__ = __webpack_require__("../../../../../src/app/common/utilities.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SummaryStatComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * The Chrome of The Application
 *
 * @class AppComponent
 */
var SummaryStatComponent = (function () {
    function SummaryStatComponent(utilitiesService) {
        this.utilitiesService = utilitiesService;
        this.MPG = 0;
        this.CPM = 0;
        this.CPMonth = 0;
    }
    SummaryStatComponent.prototype.ngOnInit = function () {
        var milesPerGallon = [];
        var costPerMile = [];
        var costPerMonth = [];
        if (this.cars.length === 0) {
            this.MPG = 0;
            this.CPM = 0;
            this.CPMonth = 0;
            return;
        }
        for (var i = 0; i < this.cars.length; ++i) {
            milesPerGallon[i] = Math.round(+this.utilitiesService.CalculateMPG(this.fillUps[this.cars[i].id]));
            costPerMile[i] = +this.utilitiesService.CalculateDPM(this.fillUps[this.cars[i].id]).toFixed(2);
            costPerMonth[i] = +this.utilitiesService.CalculateDPMonth(this.fillUps[this.cars[i].id]).toFixed(2);
        }
        this.MPG = Math.round(milesPerGallon.reduce(function (memo, item) { return memo + item; }) / milesPerGallon.length);
        this.CPM = costPerMile.reduce(function (memo, item) { return memo + item; }) / costPerMile.length;
        this.CPM = +this.CPM.toFixed(2);
        this.CPMonth = costPerMonth.reduce(function (memo, item) { return memo + item; });
        this.CPMonth = +this.CPMonth.toFixed(2);
    };
    return SummaryStatComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SummaryStatComponent.prototype, "cars", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SummaryStatComponent.prototype, "fillUps", void 0);
SummaryStatComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-summary-stat',
        template: __webpack_require__("../../../../../src/app/dashboard/summary/summary-stat/summary-stat.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/summary/summary-stat/summary-stat.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__common_utilities_service__["a" /* UtilitiesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__common_utilities_service__["a" /* UtilitiesService */]) === "function" && _a || Object])
], SummaryStatComponent);

var _a;
//# sourceMappingURL=summary-stat.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/summary/summary.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#wrapper {\n\twidth: 20em;\n\theight: 37.36em;\n\tmargin: 0 1.2em 0.6em 0.6em;\n\tborder-width: 0.5em;\n\tborder-style: solid;\n\tborder-color: rgba(200, 200, 200, 0.55);\n\tborder-radius: 0.4em;\n\tbackground-clip: content-box;\n\tbackground-color: lightgrey;\n\tbackground-image: url(\"/assets/images/summary-pane.jpg\");\n}\n#content {\n\tmargin-left: 3rem;\n\tmargin-top: 1rem;\n\theight: 95%;\n\toverflow-y: auto;\n\toverflow-x: hidden;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/summary/summary.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n\t<div id=\"content\">\n\t\t<app-complete-registration *ngIf=\"!user.registrationCompleted\" [user]='user'></app-complete-registration>\n\t\t<app-summary-stat [cars]=\"cars\" [fillUps]=\"fillUps\"></app-summary-stat>\n\t\t<app-overdue-reminders [cars]=\"cars\" [reminders]=\"reminders\"></app-overdue-reminders>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/summary/summary.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_componentAnimations__ = __webpack_require__("../../../../../src/app/common/componentAnimations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_user__ = __webpack_require__("../../../../../src/app/common/user.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SummaryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/***********************************************************************************/



/***********************************************************************************/
/**
 * This component displays the Mileage Stats summary pane
 *
 * @class SummaryComponent
 */
var SummaryComponent = (function () {
    function SummaryComponent() {
        this.routeAnimation = true;
        this.display = 'block';
        this.position = 'absolute';
    }
    return SummaryComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__common_user__["a" /* User */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__common_user__["a" /* User */]) === "function" && _a || Object)
], SummaryComponent.prototype, "user", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SummaryComponent.prototype, "cars", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SummaryComponent.prototype, "fillUps", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SummaryComponent.prototype, "reminders", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('@routeAnimation'),
    __metadata("design:type", Object)
], SummaryComponent.prototype, "routeAnimation", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('style.display'),
    __metadata("design:type", Object)
], SummaryComponent.prototype, "display", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('style.position'),
    __metadata("design:type", Object)
], SummaryComponent.prototype, "position", void 0);
SummaryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-summary',
        template: __webpack_require__("../../../../../src/app/dashboard/summary/summary.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/summary/summary.component.css")],
        animations: [__WEBPACK_IMPORTED_MODULE_1__common_componentAnimations__["a" /* slideFromLeftToRightAnimation */]]
    }),
    __metadata("design:paramtypes", [])
], SummaryComponent);

var _a;
//# sourceMappingURL=summary.component.js.map

/***/ }),

/***/ "../../../../../src/app/image-cropper/image-cropper.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_img_cropper__ = __webpack_require__("../../../../ng2-img-cropper/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageCropperModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ImageCropperModule = (function () {
    function ImageCropperModule() {
    }
    return ImageCropperModule;
}());
ImageCropperModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* CommonModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2_ng2_img_cropper__["b" /* ImageCropperComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2_ng2_img_cropper__["b" /* ImageCropperComponent */]]
    })
], ImageCropperModule);

//# sourceMappingURL=image-cropper.module.js.map

/***/ }),

/***/ "../../../../../src/app/redux-action-creators/fill-up-action-creators.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FillUpActionCreators; });
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

var FillUpActionCreators = (function () {
    function FillUpActionCreators(appStore) {
        this.appStore = appStore;
    }
    FillUpActionCreators.prototype.loadFillUps = function (fillUps) {
        this.appStore.dispatch({
            type: FillUpActionCreators.LOAD_FILLUPS,
            fillUps: fillUps
        });
    };
    FillUpActionCreators.prototype.addFillUp = function (fillUps, fillUp) {
        this.appStore.dispatch({
            type: FillUpActionCreators.ADD_FILLUP,
            fillUps: fillUps,
            fillUp: fillUp
        });
    };
    FillUpActionCreators.prototype.selectFillUp = function (selectedFillUp) {
        this.appStore.dispatch({
            type: FillUpActionCreators.SELECT_FILLUP,
            selectedFillUp: selectedFillUp
        });
    };
    FillUpActionCreators.prototype.deselectFillUps = function () {
        this.appStore.dispatch({
            type: FillUpActionCreators.DESELECT_FILLUPS
        });
    };
    FillUpActionCreators.prototype.editFillUp = function (fillUps, fillUp) {
        this.appStore.dispatch({
            type: FillUpActionCreators.EDIT_FILLUP,
            fillUps: fillUps,
            fillUp: fillUp
        });
    };
    FillUpActionCreators.prototype.deleteFillUp = function (fillUps, fillUp) {
        this.appStore.dispatch({
            type: FillUpActionCreators.DELETE_FILLUP,
            fillUps: fillUps,
            fillUp: fillUp
        });
    };
    return FillUpActionCreators;
}());
FillUpActionCreators.LOAD_FILLUPS = 'LOAD_FILLUPS';
FillUpActionCreators.ADD_FILLUP = 'ADD_FILLUP';
FillUpActionCreators.SELECT_FILLUP = 'SELECT_FILLUP';
FillUpActionCreators.DESELECT_FILLUPS = 'DESELECT_FILLUPS';
FillUpActionCreators.EDIT_FILLUP = 'EDIT_FILLUP';
FillUpActionCreators.DELETE_FILLUP = 'DELETE_FILLUP';
FillUpActionCreators = __decorate([
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('AppStore')),
    __metadata("design:paramtypes", [Object])
], FillUpActionCreators);

//# sourceMappingURL=fill-up-action-creators.js.map

/***/ }),

/***/ "../../../../../src/app/redux-action-creators/reminder.action-creators.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReminderActionCreators; });
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

var ReminderActionCreators = (function () {
    function ReminderActionCreators(appStore) {
        this.appStore = appStore;
    }
    ReminderActionCreators.prototype.loadReminders = function (reminders) {
        this.appStore.dispatch({
            type: ReminderActionCreators.LOAD_REMINDERS,
            reminders: reminders
        });
    };
    ReminderActionCreators.prototype.selectReminder = function (selectedReminder) {
        this.appStore.dispatch({
            type: ReminderActionCreators.SELECT_REMINDER,
            selectedReminder: selectedReminder
        });
    };
    ReminderActionCreators.prototype.addReminder = function (reminders, reminder) {
        this.appStore.dispatch({
            type: ReminderActionCreators.ADD_REMINDER,
            reminders: reminders,
            reminder: reminder
        });
    };
    ReminderActionCreators.prototype.deselectReminders = function () {
        this.appStore.dispatch({
            type: ReminderActionCreators.DESELECT_REMINDERS
        });
    };
    ReminderActionCreators.prototype.editReminder = function (reminders, reminder) {
        this.appStore.dispatch({
            type: ReminderActionCreators.EDIT_REMINDER,
            reminders: reminders,
            reminder: reminder
        });
    };
    ReminderActionCreators.prototype.deleteReminder = function (reminders, reminder) {
        this.appStore.dispatch({
            type: ReminderActionCreators.DELETE_REMINDER,
            reminders: reminders,
            reminder: reminder
        });
    };
    return ReminderActionCreators;
}());
ReminderActionCreators.LOAD_REMINDERS = 'LOAD_REMINDERS';
ReminderActionCreators.SELECT_REMINDER = 'SELECT_REMINDER';
ReminderActionCreators.ADD_REMINDER = 'ADD_REMINDER';
ReminderActionCreators.DESELECT_REMINDERS = 'DESELECT_REMINDERS';
ReminderActionCreators.EDIT_REMINDER = 'EDIT_REMINDER';
ReminderActionCreators.DELETE_REMINDER = 'DELETE_REMINDER';
ReminderActionCreators = __decorate([
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('AppStore')),
    __metadata("design:paramtypes", [Object])
], ReminderActionCreators);

//# sourceMappingURL=reminder.action-creators.js.map

/***/ }),

/***/ "../../../../../src/app/redux-action-creators/system.action-creators.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SystemActionCreators; });
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

var SystemActionCreators = (function () {
    function SystemActionCreators(appStore) {
        this.appStore = appStore;
    }
    SystemActionCreators.prototype.windowResized = function () {
        this.appStore.dispatch({
            type: SystemActionCreators.WINDOW_RESIZED
        });
    };
    SystemActionCreators.prototype.escKeyPressed = function () {
        this.appStore.dispatch({
            type: SystemActionCreators.ESC_KEY_PRESSED
        });
    };
    return SystemActionCreators;
}());
SystemActionCreators.WINDOW_RESIZED = 'WINDOW_RESIZED';
SystemActionCreators.ESC_KEY_PRESSED = 'ESC_KEY_PRESSED';
SystemActionCreators = __decorate([
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('AppStore')),
    __metadata("design:paramtypes", [Object])
], SystemActionCreators);

//# sourceMappingURL=system.action-creators.js.map

/***/ }),

/***/ "../../../../../src/app/redux-action-creators/user.action-creators.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserActionCreators; });
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

var UserActionCreators = (function () {
    function UserActionCreators(appStore) {
        this.appStore = appStore;
    }
    UserActionCreators.prototype.loadUser = function (user) {
        this.appStore.dispatch({
            type: UserActionCreators.LOAD_USER,
            user: user
        });
    };
    UserActionCreators.prototype.editUser = function (newUser) {
        this.appStore.dispatch({
            type: UserActionCreators.EDIT_USER,
            newUser: newUser
        });
    };
    return UserActionCreators;
}());
UserActionCreators.LOAD_USER = 'LOAD_USER';
UserActionCreators.EDIT_USER = 'EDIT_USER';
UserActionCreators = __decorate([
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('AppStore')),
    __metadata("design:paramtypes", [Object])
], UserActionCreators);

//# sourceMappingURL=user.action-creators.js.map

/***/ }),

/***/ "../../../../../src/app/redux-store/fill-up.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__redux_action_creators_fill_up_action_creators__ = __webpack_require__("../../../../../src/app/redux-action-creators/fill-up-action-creators.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FillUpReducer; });


var INITIAL_STATE = {
    fillUps: [],
    selectedFillUp: undefined
};
var FillUpReducer = function (state, action) {
    if (state === void 0) { state = INITIAL_STATE; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_1__redux_action_creators_fill_up_action_creators__["a" /* FillUpActionCreators */].LOAD_FILLUPS:
            return Object.assign({}, state, {
                fillUps: action.fillUps
            });
        case __WEBPACK_IMPORTED_MODULE_1__redux_action_creators_fill_up_action_creators__["a" /* FillUpActionCreators */].ADD_FILLUP:
            var newFillUps = __WEBPACK_IMPORTED_MODULE_0_lodash___default()(action.fillUps).value(); // value() unwraps a lodash wrapper object
            newFillUps.push(action.fillUp);
            return Object.assign({}, state, {
                fillUps: newFillUps
            });
        case __WEBPACK_IMPORTED_MODULE_1__redux_action_creators_fill_up_action_creators__["a" /* FillUpActionCreators */].SELECT_FILLUP:
            return Object.assign({}, state, {
                selectedFillUp: action.selectedFillUp
            });
        case __WEBPACK_IMPORTED_MODULE_1__redux_action_creators_fill_up_action_creators__["a" /* FillUpActionCreators */].DESELECT_FILLUPS:
            return { fillUps: state.fillUps, selectedFillUp: undefined };
        case __WEBPACK_IMPORTED_MODULE_1__redux_action_creators_fill_up_action_creators__["a" /* FillUpActionCreators */].EDIT_FILLUP:
            var editedFillUps = __WEBPACK_IMPORTED_MODULE_0_lodash___default()(action.fillUps).value();
            var editedFillUpId = editedFillUps.findIndex(function (fillUp) {
                return fillUp.id === action.fillUp.id;
            });
            editedFillUps[editedFillUpId] = action.fillUp;
            return Object.assign({}, state, {
                fillUps: editedFillUps
            });
        case __WEBPACK_IMPORTED_MODULE_1__redux_action_creators_fill_up_action_creators__["a" /* FillUpActionCreators */].DELETE_FILLUP:
            var slicedFillUps = action.fillUps.filter(function (fillUp) {
                return fillUp.id !== action.fillUp.id;
            });
            return Object.assign({}, state, {
                fillUps: slicedFillUps
            });
        default:
            return state;
    }
};
//# sourceMappingURL=fill-up.reducer.js.map

/***/ }),

/***/ "../../../../../src/app/redux-store/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__("../../../../redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fill_up_reducer__ = __webpack_require__("../../../../../src/app/redux-store/fill-up.reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reminder_reducer__ = __webpack_require__("../../../../../src/app/redux-store/reminder.reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_reducer__ = __webpack_require__("../../../../../src/app/redux-store/user.reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__system_reducer__ = __webpack_require__("../../../../../src/app/redux-store/system.reducer.ts");
/* unused harmony export IAppState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return rootReducer; });





var IAppState = (function () {
    function IAppState() {
    }
    return IAppState;
}());

var rootReducer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["b" /* combineReducers */])({
    fillUps: __WEBPACK_IMPORTED_MODULE_1__fill_up_reducer__["a" /* FillUpReducer */],
    reminders: __WEBPACK_IMPORTED_MODULE_2__reminder_reducer__["a" /* ReminderReducer */],
    user: __WEBPACK_IMPORTED_MODULE_3__user_reducer__["a" /* UserReducer */],
    system: __WEBPACK_IMPORTED_MODULE_4__system_reducer__["a" /* SystemReducer */]
});
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/redux-store/reminder.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__redux_action_creators_reminder_action_creators__ = __webpack_require__("../../../../../src/app/redux-action-creators/reminder.action-creators.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReminderReducer; });


var INITIAL_STATE = {
    selectedReminder: undefined
};
var ReminderReducer = function (state, action) {
    if (state === void 0) { state = INITIAL_STATE; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_1__redux_action_creators_reminder_action_creators__["a" /* ReminderActionCreators */].LOAD_REMINDERS:
            return Object.assign({}, state, {
                reminders: action.reminders
            });
        case __WEBPACK_IMPORTED_MODULE_1__redux_action_creators_reminder_action_creators__["a" /* ReminderActionCreators */].SELECT_REMINDER:
            return Object.assign({}, state, {
                selectedReminder: action.selectedReminder
            });
        case __WEBPACK_IMPORTED_MODULE_1__redux_action_creators_reminder_action_creators__["a" /* ReminderActionCreators */].ADD_REMINDER:
            var newReminders = __WEBPACK_IMPORTED_MODULE_0_lodash___default()(action.reminders).value(); // value() unwraps a lodash wrapper object
            newReminders.push(action.reminder);
            return Object.assign({}, state, {
                reminders: newReminders
            });
        case __WEBPACK_IMPORTED_MODULE_1__redux_action_creators_reminder_action_creators__["a" /* ReminderActionCreators */].DESELECT_REMINDERS:
            return Object.assign({}, state, {
                selectedReminder: undefined
            });
        case __WEBPACK_IMPORTED_MODULE_1__redux_action_creators_reminder_action_creators__["a" /* ReminderActionCreators */].EDIT_REMINDER:
            var editedReminders = __WEBPACK_IMPORTED_MODULE_0_lodash___default()(action.reminders).value();
            var editedReminderId = editedReminders.findIndex(function (reminder) {
                return reminder.id === action.reminder.id;
            });
            editedReminders[editedReminderId] = action.reminder;
            return Object.assign({}, state, {
                reminders: editedReminders
            });
        case __WEBPACK_IMPORTED_MODULE_1__redux_action_creators_reminder_action_creators__["a" /* ReminderActionCreators */].DELETE_REMINDER:
            var slicedReminders = action.reminders.filter(function (reminder) {
                return reminder.id !== action.reminder.id;
            });
            return Object.assign({}, state, {
                reminders: slicedReminders
            });
        default:
            return state;
    }
};
//# sourceMappingURL=reminder.reducer.js.map

/***/ }),

/***/ "../../../../../src/app/redux-store/system.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__redux_action_creators_system_action_creators__ = __webpack_require__("../../../../../src/app/redux-action-creators/system.action-creators.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SystemReducer; });

var INITIAL_STATE = {
    windowResized: false,
    escKeyPressed: false
};
var SystemReducer = function (state, action) {
    if (state === void 0) { state = INITIAL_STATE; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__redux_action_creators_system_action_creators__["a" /* SystemActionCreators */].WINDOW_RESIZED:
            return Object.assign({}, state, {
                windowResized: true
            });
        case __WEBPACK_IMPORTED_MODULE_0__redux_action_creators_system_action_creators__["a" /* SystemActionCreators */].ESC_KEY_PRESSED:
            return Object.assign({}, state, {
                escKeyPressed: true
            });
        default:
            return state;
    }
};
//# sourceMappingURL=system.reducer.js.map

/***/ }),

/***/ "../../../../../src/app/redux-store/user.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__redux_action_creators_user_action_creators__ = __webpack_require__("../../../../../src/app/redux-action-creators/user.action-creators.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserReducer; });

var INITIAL_STATE = {
    user: {},
};
var UserReducer = function (state, action) {
    if (state === void 0) { state = INITIAL_STATE; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__redux_action_creators_user_action_creators__["a" /* UserActionCreators */].LOAD_USER:
            return Object.assign({}, state, {
                user: action.user
            });
        case __WEBPACK_IMPORTED_MODULE_0__redux_action_creators_user_action_creators__["a" /* UserActionCreators */].EDIT_USER:
            return Object.assign({}, state, {
                user: action.newUser
            });
        default:
            return state;
    }
};
//# sourceMappingURL=user.reducer.js.map

/***/ }),

/***/ "../../../../../src/app/routing/all-fill-ups-resolver.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_data_service__ = __webpack_require__("../../../../../src/app/common/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_notification_hub_service__ = __webpack_require__("../../../../../src/app/common/notification-hub.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_utilities_service__ = __webpack_require__("../../../../../src/app/common/utilities.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllFillUpsDataResolve; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/***********************************************************************************/





/***********************************************************************************/
var AllFillUpsDataResolve = (function () {
    function AllFillUpsDataResolve(utilitiesService, dataService, notificationHubService, router) {
        this.utilitiesService = utilitiesService;
        this.dataService = dataService;
        this.notificationHubService = notificationHubService;
        this.router = router;
    }
    // gets data for cars
    AllFillUpsDataResolve.prototype.resolve = function (route) {
        var _this = this;
        return this.dataService.getAllFillUps().then(function (fillUps) {
            if (fillUps) {
                return fillUps;
            }
            else {
                _this.notificationHubService.emit(__WEBPACK_IMPORTED_MODULE_3__common_notification_hub_service__["b" /* HubNotificationType */].Error, 'Error while fetching fill ups!');
                _this.router.navigate(['/dashboard']);
                return null;
            }
        })
            .catch(function (error) { return _this.utilitiesService.handleError(error); });
    };
    return AllFillUpsDataResolve;
}());
AllFillUpsDataResolve = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__common_utilities_service__["a" /* UtilitiesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__common_utilities_service__["a" /* UtilitiesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__common_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__common_data_service__["a" /* DataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__common_notification_hub_service__["a" /* NotificationHubService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__common_notification_hub_service__["a" /* NotificationHubService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _d || Object])
], AllFillUpsDataResolve);

var _a, _b, _c, _d;
//# sourceMappingURL=all-fill-ups-resolver.js.map

/***/ }),

/***/ "../../../../../src/app/routing/all-reminders-data-resolve.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_data_service__ = __webpack_require__("../../../../../src/app/common/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_notification_hub_service__ = __webpack_require__("../../../../../src/app/common/notification-hub.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_utilities_service__ = __webpack_require__("../../../../../src/app/common/utilities.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllRemindersDataResolve; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/***********************************************************************************/





/***********************************************************************************/
var AllRemindersDataResolve = (function () {
    function AllRemindersDataResolve(utilitiesService, dataService, notificationHubService, router) {
        this.utilitiesService = utilitiesService;
        this.dataService = dataService;
        this.notificationHubService = notificationHubService;
        this.router = router;
    }
    // gets data for cars
    AllRemindersDataResolve.prototype.resolve = function (route) {
        var _this = this;
        return this.dataService.getAllReminders().then(function (reminders) {
            if (reminders) {
                return reminders;
            }
            else {
                _this.notificationHubService.emit(__WEBPACK_IMPORTED_MODULE_3__common_notification_hub_service__["b" /* HubNotificationType */].Error, 'Error while fetching reminders!');
                _this.router.navigate(['/dashboard']);
                return null;
            }
        })
            .catch(function (error) { return _this.utilitiesService.handleError(error); });
    };
    return AllRemindersDataResolve;
}());
AllRemindersDataResolve = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__common_utilities_service__["a" /* UtilitiesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__common_utilities_service__["a" /* UtilitiesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__common_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__common_data_service__["a" /* DataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__common_notification_hub_service__["a" /* NotificationHubService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__common_notification_hub_service__["a" /* NotificationHubService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _d || Object])
], AllRemindersDataResolve);

var _a, _b, _c, _d;
//# sourceMappingURL=all-reminders-data-resolve.service.js.map

/***/ }),

/***/ "../../../../../src/app/routing/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_auth_service__ = __webpack_require__("../../../../../src/app/common/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/************************************************************/



/************************************************************/
var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        if (this.authService.loggedIn) {
            return Promise.resolve(true);
        }
        else {
            return this.authService.isLoggedIn().then(function (isLoggedIn) {
                if (isLoggedIn) {
                    _this.authService.loggedIn = true;
                    return true;
                }
                else {
                    _this.authService.loggedIn = false;
                    // Navigate to the login page with extras
                    _this.router.navigate(['landing', 'signIn']);
                    return false;
                }
            });
        }
    };
    AuthGuard.prototype.canActivateChild = function (route, state) {
        return this.canActivate(route, state);
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__common_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__common_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/routing/car-data-resolver.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_data_service__ = __webpack_require__("../../../../../src/app/common/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_notification_hub_service__ = __webpack_require__("../../../../../src/app/common/notification-hub.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_utilities_service__ = __webpack_require__("../../../../../src/app/common/utilities.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarDataResolve; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/***********************************************************************************/





/***********************************************************************************/
var CarDataResolve = (function () {
    function CarDataResolve(dataService, utilitiesService, router, notificationHubService) {
        this.dataService = dataService;
        this.utilitiesService = utilitiesService;
        this.router = router;
        this.notificationHubService = notificationHubService;
    }
    // gets data for a car reading the car id from a route
    CarDataResolve.prototype.resolve = function (route) {
        var _this = this;
        return this.dataService.getCarById(route.pathFromRoot[2].params['carId']).then(function (car) {
            if (car) {
                return car;
            }
            else {
                _this.notificationHubService.emit(__WEBPACK_IMPORTED_MODULE_3__common_notification_hub_service__["b" /* HubNotificationType */].Error, 'Error while fetching a car of id: ' + route.pathFromRoot[1].params['carId']);
                _this.router.navigate(['/dashboard']);
                return null;
            }
        })
            .catch(function (error) { return _this.utilitiesService.handleError(error); });
    };
    return CarDataResolve;
}());
CarDataResolve = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__common_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__common_data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__common_utilities_service__["a" /* UtilitiesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__common_utilities_service__["a" /* UtilitiesService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__common_notification_hub_service__["a" /* NotificationHubService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__common_notification_hub_service__["a" /* NotificationHubService */]) === "function" && _d || Object])
], CarDataResolve);

var _a, _b, _c, _d;
//# sourceMappingURL=car-data-resolver.js.map

/***/ }),

/***/ "../../../../../src/app/routing/cars-data-resolver.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_data_service__ = __webpack_require__("../../../../../src/app/common/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_notification_hub_service__ = __webpack_require__("../../../../../src/app/common/notification-hub.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_utilities_service__ = __webpack_require__("../../../../../src/app/common/utilities.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarsDataResolve; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/***********************************************************************************/
/**
 * Fetches cars data for car cards
 *
 * @class CarsDataResolve
 */
var CarsDataResolve = (function () {
    function CarsDataResolve(dataService, utilitiesService, notificationHubService, router) {
        this.dataService = dataService;
        this.utilitiesService = utilitiesService;
        this.notificationHubService = notificationHubService;
        this.router = router;
    }
    CarsDataResolve.prototype.resolve = function (route) {
        var _this = this;
        return this.dataService.getCars().then(function (cars) {
            if (cars) {
                return cars;
            }
            else {
                _this.notificationHubService.emit(__WEBPACK_IMPORTED_MODULE_3__common_notification_hub_service__["b" /* HubNotificationType */].Error, 'Error while fetching cars!');
                _this.router.navigate(['/dashboard']);
                return null;
            }
        })
            .catch(function (error) { return _this.utilitiesService.handleError(error); });
    };
    return CarsDataResolve;
}());
CarsDataResolve = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__common_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__common_data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__common_utilities_service__["a" /* UtilitiesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__common_utilities_service__["a" /* UtilitiesService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__common_notification_hub_service__["a" /* NotificationHubService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__common_notification_hub_service__["a" /* NotificationHubService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _d || Object])
], CarsDataResolve);

var _a, _b, _c, _d;
//# sourceMappingURL=cars-data-resolver.js.map

/***/ }),

/***/ "../../../../../src/app/routing/fill-up-data-resolver.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_data_service__ = __webpack_require__("../../../../../src/app/common/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_notification_hub_service__ = __webpack_require__("../../../../../src/app/common/notification-hub.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_utilities_service__ = __webpack_require__("../../../../../src/app/common/utilities.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FillUpDataResolve; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/***********************************************************************************/
var FillUpDataResolve = (function () {
    function FillUpDataResolve(dataService, utilitiesService, notificationHubService, router) {
        this.dataService = dataService;
        this.utilitiesService = utilitiesService;
        this.notificationHubService = notificationHubService;
        this.router = router;
    }
    FillUpDataResolve.prototype.resolve = function (route) {
        var _this = this;
        return this.dataService.getFillUpById(route.pathFromRoot[2].params['carId'], route.params['id']).then(function (fillUp) {
            if (fillUp) {
                return fillUp;
            }
            else {
                _this.notificationHubService.emit(__WEBPACK_IMPORTED_MODULE_3__common_notification_hub_service__["b" /* HubNotificationType */].Error, 'Error while fetching a fillUp!');
                _this.router.navigate(['/dashboard']);
                return null;
            }
        })
            .catch(function (error) { return _this.utilitiesService.handleError(error); });
    };
    return FillUpDataResolve;
}());
FillUpDataResolve = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__common_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__common_data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__common_utilities_service__["a" /* UtilitiesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__common_utilities_service__["a" /* UtilitiesService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__common_notification_hub_service__["a" /* NotificationHubService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__common_notification_hub_service__["a" /* NotificationHubService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _d || Object])
], FillUpDataResolve);

var _a, _b, _c, _d;
//# sourceMappingURL=fill-up-data-resolver.js.map

/***/ }),

/***/ "../../../../../src/app/routing/fill-ups-data-resolver.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_data_service__ = __webpack_require__("../../../../../src/app/common/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_notification_hub_service__ = __webpack_require__("../../../../../src/app/common/notification-hub.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_utilities_service__ = __webpack_require__("../../../../../src/app/common/utilities.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FillUpsDataResolve; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/***********************************************************************************/
/**
 * Fetches fill ups data for a car
 *
 * @class FillUpsDataResolve
 */
var FillUpsDataResolve = (function () {
    function FillUpsDataResolve(dataService, utilitiesService, notificationHubService, router) {
        this.dataService = dataService;
        this.utilitiesService = utilitiesService;
        this.notificationHubService = notificationHubService;
        this.router = router;
    }
    FillUpsDataResolve.prototype.resolve = function (route) {
        var _this = this;
        return this.dataService.getFillUps(route.pathFromRoot[2].params['carId']).then(function (fillUps) {
            if (fillUps) {
                return fillUps;
            }
            else {
                _this.notificationHubService.emit(__WEBPACK_IMPORTED_MODULE_3__common_notification_hub_service__["b" /* HubNotificationType */].Error, 'Error while fetching fillUps!');
                _this.router.navigate(['/dashboard']);
                return null;
            }
        })
            .catch(function (error) { return _this.utilitiesService.handleError(error); });
    };
    return FillUpsDataResolve;
}());
FillUpsDataResolve = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__common_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__common_data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__common_utilities_service__["a" /* UtilitiesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__common_utilities_service__["a" /* UtilitiesService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__common_notification_hub_service__["a" /* NotificationHubService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__common_notification_hub_service__["a" /* NotificationHubService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _d || Object])
], FillUpsDataResolve);

var _a, _b, _c, _d;
//# sourceMappingURL=fill-ups-data-resolver.js.map

/***/ }),

/***/ "../../../../../src/app/routing/reminder-data-resolver.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_data_service__ = __webpack_require__("../../../../../src/app/common/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_notification_hub_service__ = __webpack_require__("../../../../../src/app/common/notification-hub.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_utilities_service__ = __webpack_require__("../../../../../src/app/common/utilities.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReminderDataResolve; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/***********************************************************************************/





/***********************************************************************************/
var ReminderDataResolve = (function () {
    function ReminderDataResolve(dataService, utilitiesService, notificationHubService, router) {
        this.dataService = dataService;
        this.utilitiesService = utilitiesService;
        this.notificationHubService = notificationHubService;
        this.router = router;
    }
    // gets data for a reminder reading the reminder id from the route
    ReminderDataResolve.prototype.resolve = function (route) {
        var _this = this;
        return this.dataService.getReminderById(route.pathFromRoot[2].params['carId'], route.params['id']).then(function (reminder) {
            if (reminder) {
                return reminder;
            }
            else {
                _this.notificationHubService.emit(__WEBPACK_IMPORTED_MODULE_3__common_notification_hub_service__["b" /* HubNotificationType */].Error, 'Error while fetching reminders!');
                _this.router.navigate(['/dashboard']);
                return null;
            }
        })
            .catch(function (error) { return _this.utilitiesService.handleError(error); });
    };
    return ReminderDataResolve;
}());
ReminderDataResolve = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__common_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__common_data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__common_utilities_service__["a" /* UtilitiesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__common_utilities_service__["a" /* UtilitiesService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__common_notification_hub_service__["a" /* NotificationHubService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__common_notification_hub_service__["a" /* NotificationHubService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _d || Object])
], ReminderDataResolve);

var _a, _b, _c, _d;
//# sourceMappingURL=reminder-data-resolver.js.map

/***/ }),

/***/ "../../../../../src/app/routing/reminders-data-resolver.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_data_service__ = __webpack_require__("../../../../../src/app/common/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_notification_hub_service__ = __webpack_require__("../../../../../src/app/common/notification-hub.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_utilities_service__ = __webpack_require__("../../../../../src/app/common/utilities.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemindersDataResolve; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/***********************************************************************************/





/***********************************************************************************/
var RemindersDataResolve = (function () {
    function RemindersDataResolve(dataService, utilitiesService, notificationHubService, router) {
        this.dataService = dataService;
        this.utilitiesService = utilitiesService;
        this.notificationHubService = notificationHubService;
        this.router = router;
    }
    // gets reminders data
    RemindersDataResolve.prototype.resolve = function (route) {
        var _this = this;
        return this.dataService.getReminders(route.pathFromRoot[2].params['carId']).then(function (reminders) {
            if (reminders) {
                return reminders;
            }
            else {
                _this.notificationHubService.emit(__WEBPACK_IMPORTED_MODULE_3__common_notification_hub_service__["b" /* HubNotificationType */].Error, 'Error while fetching reminders!');
                _this.router.navigate(['/dashboard']);
                return null;
            }
        })
            .catch(function (error) { return _this.utilitiesService.handleError(error); });
    };
    return RemindersDataResolve;
}());
RemindersDataResolve = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__common_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__common_data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__common_utilities_service__["a" /* UtilitiesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__common_utilities_service__["a" /* UtilitiesService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__common_notification_hub_service__["a" /* NotificationHubService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__common_notification_hub_service__["a" /* NotificationHubService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _d || Object])
], RemindersDataResolve);

var _a, _b, _c, _d;
//# sourceMappingURL=reminders-data-resolver.js.map

/***/ }),

/***/ "../../../../../src/app/routing/routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_car_add_car_component__ = __webpack_require__("../../../../../src/app/add-car/add-car.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chrome_chrome_component__ = __webpack_require__("../../../../../src/app/chrome/chrome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth_auth_component__ = __webpack_require__("../../../../../src/app/auth/auth.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__auth_sign_in_sign_in_component__ = __webpack_require__("../../../../../src/app/auth/sign-in/sign-in.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__auth_sign_up_sign_up_component__ = __webpack_require__("../../../../../src/app/auth/sign-up/sign-up.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__car_detail_basic_car_data_basic_car_data_component__ = __webpack_require__("../../../../../src/app/car-detail/basic-car-data/basic-car-data.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__car_detail_fill_ups_fill_ups_component__ = __webpack_require__("../../../../../src/app/car-detail/fill-ups/fill-ups.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__car_detail_fill_ups_fill_up_detail_fill_up_detail_component__ = __webpack_require__("../../../../../src/app/car-detail/fill-ups/fill-up-detail/fill-up-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__car_detail_fill_ups_add_fill_up_add_fill_up_component__ = __webpack_require__("../../../../../src/app/car-detail/fill-ups/add-fill-up/add-fill-up.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__car_detail_fill_ups_edit_fill_up_edit_fill_up_component__ = __webpack_require__("../../../../../src/app/car-detail/fill-ups/edit-fill-up/edit-fill-up.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__car_detail_reminders_reminders_component__ = __webpack_require__("../../../../../src/app/car-detail/reminders/reminders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__car_detail_reminders_add_reminder_add_reminder_component__ = __webpack_require__("../../../../../src/app/car-detail/reminders/add-reminder/add-reminder.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__car_detail_reminders_edit_reminder_edit_reminder_component__ = __webpack_require__("../../../../../src/app/car-detail/reminders/edit-reminder/edit-reminder.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__car_detail_basic_car_data_edit_car_edit_car_component__ = __webpack_require__("../../../../../src/app/car-detail/basic-car-data/edit-car/edit-car.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__car_detail_view_car_detail_view_component__ = __webpack_require__("../../../../../src/app/car-detail-view/car-detail-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__auth_profile_profile_component__ = __webpack_require__("../../../../../src/app/auth/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__cars_data_resolver__ = __webpack_require__("../../../../../src/app/routing/cars-data-resolver.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__car_data_resolver__ = __webpack_require__("../../../../../src/app/routing/car-data-resolver.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__fill_ups_data_resolver__ = __webpack_require__("../../../../../src/app/routing/fill-ups-data-resolver.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__fill_up_data_resolver__ = __webpack_require__("../../../../../src/app/routing/fill-up-data-resolver.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__reminders_data_resolver__ = __webpack_require__("../../../../../src/app/routing/reminders-data-resolver.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__reminder_data_resolver__ = __webpack_require__("../../../../../src/app/routing/reminder-data-resolver.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__all_fill_ups_resolver__ = __webpack_require__("../../../../../src/app/routing/all-fill-ups-resolver.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__all_reminders_data_resolve_service__ = __webpack_require__("../../../../../src/app/routing/all-reminders-data-resolve.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__user_data_resolve_service__ = __webpack_require__("../../../../../src/app/routing/user-data-resolve.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__auth_guard__ = __webpack_require__("../../../../../src/app/routing/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__signed_in_guard__ = __webpack_require__("../../../../../src/app/routing/signed-in.guard.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};































var routes = [
    { path: 'landing', component: __WEBPACK_IMPORTED_MODULE_6__auth_auth_component__["a" /* AuthComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_30__signed_in_guard__["a" /* SignedInGuard */]], canActivateChild: [__WEBPACK_IMPORTED_MODULE_30__signed_in_guard__["a" /* SignedInGuard */]],
        children: [
            { path: 'signIn', component: __WEBPACK_IMPORTED_MODULE_7__auth_sign_in_sign_in_component__["a" /* SignInComponent */] },
            { path: 'signUp', component: __WEBPACK_IMPORTED_MODULE_8__auth_sign_up_sign_up_component__["a" /* SignUpComponent */] }
        ]
    },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_4__chrome_chrome_component__["a" /* ChromeComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_29__auth_guard__["a" /* AuthGuard */]], canActivateChild: [__WEBPACK_IMPORTED_MODULE_29__auth_guard__["a" /* AuthGuard */]],
        children: [
            { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_19__auth_profile_profile_component__["a" /* ProfileComponent */], resolve: { user: __WEBPACK_IMPORTED_MODULE_28__user_data_resolve_service__["a" /* UserDataResolve */] } },
            { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard_component__["a" /* DashboardComponent */], resolve: { user: __WEBPACK_IMPORTED_MODULE_28__user_data_resolve_service__["a" /* UserDataResolve */], cars: __WEBPACK_IMPORTED_MODULE_20__cars_data_resolver__["a" /* CarsDataResolve */], fillUps: __WEBPACK_IMPORTED_MODULE_26__all_fill_ups_resolver__["a" /* AllFillUpsDataResolve */], reminders: __WEBPACK_IMPORTED_MODULE_27__all_reminders_data_resolve_service__["a" /* AllRemindersDataResolve */] } },
            { path: 'addCar', component: __WEBPACK_IMPORTED_MODULE_3__add_car_add_car_component__["a" /* AddCarComponent */], resolve: { cars: __WEBPACK_IMPORTED_MODULE_20__cars_data_resolver__["a" /* CarsDataResolve */] } },
            { path: 'carDetails/:carId', component: __WEBPACK_IMPORTED_MODULE_18__car_detail_view_car_detail_view_component__["a" /* CarDetailViewComponent */],
                resolve: { cars: __WEBPACK_IMPORTED_MODULE_20__cars_data_resolver__["a" /* CarsDataResolve */], fillUps: __WEBPACK_IMPORTED_MODULE_22__fill_ups_data_resolver__["a" /* FillUpsDataResolve */] },
                children: [
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_9__car_detail_basic_car_data_basic_car_data_component__["a" /* BasicCarDataComponent */],
                        resolve: { car: __WEBPACK_IMPORTED_MODULE_21__car_data_resolver__["a" /* CarDataResolve */], fillUps: __WEBPACK_IMPORTED_MODULE_22__fill_ups_data_resolver__["a" /* FillUpsDataResolve */], reminders: __WEBPACK_IMPORTED_MODULE_24__reminders_data_resolver__["a" /* RemindersDataResolve */] }
                    },
                    {
                        path: 'editCar',
                        component: __WEBPACK_IMPORTED_MODULE_17__car_detail_basic_car_data_edit_car_edit_car_component__["a" /* EditCarComponent */],
                        resolve: { cars: __WEBPACK_IMPORTED_MODULE_20__cars_data_resolver__["a" /* CarsDataResolve */] }
                    },
                    {
                        path: 'fillUps',
                        component: __WEBPACK_IMPORTED_MODULE_10__car_detail_fill_ups_fill_ups_component__["a" /* FillUpsComponent */],
                        resolve: { fillUps: __WEBPACK_IMPORTED_MODULE_22__fill_ups_data_resolver__["a" /* FillUpsDataResolve */], car: __WEBPACK_IMPORTED_MODULE_21__car_data_resolver__["a" /* CarDataResolve */] },
                        children: [
                            {
                                path: 'addFillUp',
                                component: __WEBPACK_IMPORTED_MODULE_12__car_detail_fill_ups_add_fill_up_add_fill_up_component__["a" /* AddFillUpComponent */],
                                resolve: { car: __WEBPACK_IMPORTED_MODULE_21__car_data_resolver__["a" /* CarDataResolve */] }
                            },
                            {
                                path: ':id/editFillUp',
                                component: __WEBPACK_IMPORTED_MODULE_13__car_detail_fill_ups_edit_fill_up_edit_fill_up_component__["a" /* EditFillUpComponent */],
                                resolve: { fillUp: __WEBPACK_IMPORTED_MODULE_23__fill_up_data_resolver__["a" /* FillUpDataResolve */], car: __WEBPACK_IMPORTED_MODULE_21__car_data_resolver__["a" /* CarDataResolve */] }
                            },
                            {
                                path: ':id',
                                component: __WEBPACK_IMPORTED_MODULE_11__car_detail_fill_ups_fill_up_detail_fill_up_detail_component__["a" /* FillUpDetailComponent */],
                                resolve: { fillUp: __WEBPACK_IMPORTED_MODULE_23__fill_up_data_resolver__["a" /* FillUpDataResolve */], car: __WEBPACK_IMPORTED_MODULE_21__car_data_resolver__["a" /* CarDataResolve */] }
                            }
                        ]
                    },
                    {
                        path: 'reminders',
                        component: __WEBPACK_IMPORTED_MODULE_14__car_detail_reminders_reminders_component__["a" /* RemindersComponent */],
                        resolve: { reminders: __WEBPACK_IMPORTED_MODULE_24__reminders_data_resolver__["a" /* RemindersDataResolve */], car: __WEBPACK_IMPORTED_MODULE_21__car_data_resolver__["a" /* CarDataResolve */] },
                        children: [
                            {
                                path: 'addReminder',
                                component: __WEBPACK_IMPORTED_MODULE_15__car_detail_reminders_add_reminder_add_reminder_component__["a" /* AddReminderComponent */],
                                resolve: { car: __WEBPACK_IMPORTED_MODULE_21__car_data_resolver__["a" /* CarDataResolve */] }
                            },
                            {
                                path: ':id/editReminder',
                                component: __WEBPACK_IMPORTED_MODULE_16__car_detail_reminders_edit_reminder_edit_reminder_component__["a" /* EditReminderComponent */],
                                resolve: { reminder: __WEBPACK_IMPORTED_MODULE_25__reminder_data_resolver__["a" /* ReminderDataResolve */], car: __WEBPACK_IMPORTED_MODULE_21__car_data_resolver__["a" /* CarDataResolve */] }
                            }
                        ]
                    }
                ]
            }
        ]
    }
];
var RoutingModule = (function () {
    function RoutingModule() {
    }
    return RoutingModule;
}());
RoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(routes)
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_20__cars_data_resolver__["a" /* CarsDataResolve */],
            __WEBPACK_IMPORTED_MODULE_21__car_data_resolver__["a" /* CarDataResolve */],
            __WEBPACK_IMPORTED_MODULE_22__fill_ups_data_resolver__["a" /* FillUpsDataResolve */],
            __WEBPACK_IMPORTED_MODULE_23__fill_up_data_resolver__["a" /* FillUpDataResolve */],
            __WEBPACK_IMPORTED_MODULE_24__reminders_data_resolver__["a" /* RemindersDataResolve */],
            __WEBPACK_IMPORTED_MODULE_25__reminder_data_resolver__["a" /* ReminderDataResolve */],
            __WEBPACK_IMPORTED_MODULE_26__all_fill_ups_resolver__["a" /* AllFillUpsDataResolve */],
            __WEBPACK_IMPORTED_MODULE_28__user_data_resolve_service__["a" /* UserDataResolve */],
            __WEBPACK_IMPORTED_MODULE_27__all_reminders_data_resolve_service__["a" /* AllRemindersDataResolve */],
            __WEBPACK_IMPORTED_MODULE_29__auth_guard__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_30__signed_in_guard__["a" /* SignedInGuard */]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */]]
    })
], RoutingModule);

//# sourceMappingURL=routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/routing/signed-in.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_auth_service__ = __webpack_require__("../../../../../src/app/common/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignedInGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/***********************************************************/





/***********************************************************/
var SignedInGuard = (function () {
    function SignedInGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    SignedInGuard.prototype.canActivate = function (route, state) {
        if (this.authService.loggedIn) {
            this.router.navigate(['/dashboard']);
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(false);
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(true);
        }
    };
    SignedInGuard.prototype.canActivateChild = function (route, state) {
        return this.canActivate(route, state);
    };
    return SignedInGuard;
}());
SignedInGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__common_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__common_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], SignedInGuard);

var _a, _b;
//# sourceMappingURL=signed-in.guard.js.map

/***/ }),

/***/ "../../../../../src/app/routing/user-data-resolve.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_data_service__ = __webpack_require__("../../../../../src/app/common/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_notification_hub_service__ = __webpack_require__("../../../../../src/app/common/notification-hub.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_utilities_service__ = __webpack_require__("../../../../../src/app/common/utilities.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDataResolve; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/***********************************************************************************/





/***********************************************************************************/
var UserDataResolve = (function () {
    function UserDataResolve(dataService, utilitiesService, notificationHubService, router) {
        this.dataService = dataService;
        this.utilitiesService = utilitiesService;
        this.notificationHubService = notificationHubService;
        this.router = router;
    }
    // gets data for the user
    UserDataResolve.prototype.resolve = function (route) {
        var _this = this;
        return this.dataService.getUser().then(function (user) {
            if (user) {
                return user;
            }
            else {
                _this.notificationHubService.emit(__WEBPACK_IMPORTED_MODULE_3__common_notification_hub_service__["b" /* HubNotificationType */].Error, 'Error while fetching user data!');
                _this.router.navigate(['/dahsboard']);
                return null;
            }
        })
            .catch(function (error) { return _this.utilitiesService.handleError(error); });
    };
    return UserDataResolve;
}());
UserDataResolve = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__common_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__common_data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__common_utilities_service__["a" /* UtilitiesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__common_utilities_service__["a" /* UtilitiesService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__common_notification_hub_service__["a" /* NotificationHubService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__common_notification_hub_service__["a" /* NotificationHubService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _d || Object])
], UserDataResolve);

var _a, _b, _c, _d;
//# sourceMappingURL=user-data-resolve.service.js.map

/***/ }),

/***/ "../../../../../src/app/status-bar/status-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".error {\n\tcolor:  red;\n}\n.success {\n\tcolor:  green;\n}\n.fadingOut {\n\topacity: 0;\n}\np {\n\tmargin: 0;\n\tfont-size: 1.3em;\n\tfont-family: \"Trebuchet MS\", \"Lucida Grande\", \"Lucida Sans Unicode\", \"Lucida Sans\", Tahoma, sans-serif;\n\ttransition: opacity 1.5s;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/status-bar/status-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<p *ngIf=\"!notificationMessage\">\n  {{statusMessage}}\n</p>\n<p [class.error]=\"notificationType===0 || notificationType===1\" [class.success]=\"notificationType===2\" [class.fadingOut]=\"fadingOut\" >\n  {{notificationMessage}}\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/status-bar/status-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_notification_hub_service__ = __webpack_require__("../../../../../src/app/common/notification-hub.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatusBarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Component for showing application state in the status bar
 *
 * @class StatusBarComponent
 */
var StatusBarComponent = (function () {
    function StatusBarComponent(notificationHubService) {
        this.notificationHubService = notificationHubService;
        this.notificationMessage = '';
        this.fadingOut = false;
    }
    StatusBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.notificationHubService.eventStream.subscribe(function (value) {
            if (value.eventType !== __WEBPACK_IMPORTED_MODULE_1__common_notification_hub_service__["b" /* HubNotificationType */].AppState)
                _this.notificationType = value.eventType;
            if (value.eventType === __WEBPACK_IMPORTED_MODULE_1__common_notification_hub_service__["b" /* HubNotificationType */].Success || value.eventType === __WEBPACK_IMPORTED_MODULE_1__common_notification_hub_service__["b" /* HubNotificationType */].Error) {
                _this.notificationMessage = value.message;
                _this.scheduleNotificationFadeOut();
            }
            else if (value.eventType === __WEBPACK_IMPORTED_MODULE_1__common_notification_hub_service__["b" /* HubNotificationType */].UnknownError) {
                value.message ? _this.notificationMessage = value.message : _this.notificationMessage = 'Error';
                _this.scheduleNotificationFadeOut();
            }
            else if (value.eventType === __WEBPACK_IMPORTED_MODULE_1__common_notification_hub_service__["b" /* HubNotificationType */].AppState) {
                _this.statusMessage = value.message;
            }
        });
    };
    /**
     * Starts fade out of notification message after 3 seconds
     *
     * @method scheduleNotificationFadeOut
     */
    StatusBarComponent.prototype.scheduleNotificationFadeOut = function () {
        var _this = this;
        setTimeout(function () {
            _this.fadingOut = true;
            _this.scheduleNotificationClearing();
        }, 3000);
    };
    /**
     * Clears notification message after 1.5 seconds
     *
     * @method scheduleNotificationClearing
     */
    StatusBarComponent.prototype.scheduleNotificationClearing = function () {
        var _this = this;
        setTimeout(function () {
            _this.notificationMessage = '';
            _this.fadingOut = false;
        }, 1500);
    };
    return StatusBarComponent;
}());
StatusBarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-status-bar',
        template: __webpack_require__("../../../../../src/app/status-bar/status-bar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/status-bar/status-bar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__common_notification_hub_service__["a" /* NotificationHubService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__common_notification_hub_service__["a" /* NotificationHubService */]) === "function" && _a || Object])
], StatusBarComponent);

var _a;
//# sourceMappingURL=status-bar.component.js.map

/***/ }),

/***/ "../../../../../src/app/wellcome/wellcome.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "p {\n\tfont-family: \"Segoe UI\", Frutiger, \"Frutiger Linotype\", \"Dejavu Sans\", \"Helvetica Neue\", Arial, sans-serif;\n\tfont-size: 0.8em;\n\tfont-weight: bold;\n\tmargin: 0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/wellcome/wellcome.component.html":
/***/ (function(module, exports) {

module.exports = "<p>Wellcome, {{name}}!</p>\n"

/***/ }),

/***/ "../../../../../src/app/wellcome/wellcome.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_data_service__ = __webpack_require__("../../../../../src/app/common/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__redux_action_creators_user_action_creators__ = __webpack_require__("../../../../../src/app/redux-action-creators/user.action-creators.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WellcomeComponent; });
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



/**
 * Shows 'wellcome, <user>' message in the status bar
 *
 * @class WellcomeComponent
 */
var WellcomeComponent = (function () {
    function WellcomeComponent(appStore, actionCreators, dataService) {
        this.appStore = appStore;
        this.actionCreators = actionCreators;
        this.dataService = dataService;
    }
    WellcomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getUser().then(function (user) {
            _this.actionCreators.loadUser(user);
            _this.name = user.displayName ? user.displayName : user.username;
        });
        this.unsubscribeStore = this.appStore.subscribe(function () {
            var state = _this.appStore.getState();
            _this.user = state.user.user;
            _this.name = _this.user.displayName ? _this.user.displayName : _this.user.username;
        });
    };
    WellcomeComponent.prototype.ngOnDestroy = function () {
        this.unsubscribeStore();
    };
    return WellcomeComponent;
}());
WellcomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-wellcome',
        template: __webpack_require__("../../../../../src/app/wellcome/wellcome.component.html"),
        styles: [__webpack_require__("../../../../../src/app/wellcome/wellcome.component.css")]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('AppStore')),
    __metadata("design:paramtypes", [Object, typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__redux_action_creators_user_action_creators__["a" /* UserActionCreators */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__redux_action_creators_user_action_creators__["a" /* UserActionCreators */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__common_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__common_data_service__["a" /* DataService */]) === "function" && _b || Object])
], WellcomeComponent);

var _a, _b;
//# sourceMappingURL=wellcome.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map