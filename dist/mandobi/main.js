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

/***/ "./src/app/add-client/add-client.component.html":
/*!******************************************************!*\
  !*** ./src/app/add-client/add-client.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"addClient padding\">\n    \n  <div class=\"container\">\n    <div class=\"selectType\">\n          <label class=\"col-md-2 text-right\" for=\"area\">اختر نوع العميل:</label>\n        <select [(ngModel)]=\"selectedOption\" class=\"form-control col-md-10\" (ngModelChange)=\"onSelect($event)\">\n            <option value=\"1\">مزرعة</option>\n            <option value=\"2\">مصنع</option>\n            <option value=\"3\">معرض</option>\n            <option value=\"4\">دكتور</option>\"\n        </select>      \n    </div>\n\n        <form class=\"\" [formGroup]=\"ranchForm\" (ngSubmit)=\"onSubmit()\" *ngIf=\"selectedOption==1\">\n                <h2 class=\"text-center\">تسجيل بيانات مزرعة</h2>\n         <div class=\"form-group\">\n             <label class=\"col-md-2 text-right\" for=\"company Name\">اسم الشركة:</label>\n             <div class=\"col-md-10\">\n                 <input type=\"text\" formControlName=\"name\" class=\"form-control\">\n              </div>\n         </div>\n         <div class=\"form-group\">\n             <label class=\"col-md-2 text-right\" for=\"phone\">التليفون:</label>\n             <div class=\"col-md-10\">\n                 <input type=\"number\" formControlName=\"phone\" class=\"form-control\">\n             </div>\n         </div>\n         \n         <div class=\"form-group\">\n            <label class=\"col-md-2 text-right\" for=\"area\">المنطقة:</label>\n            <select formControlName=\"areaId\" class=\"form-control col-md-10\">\n                <option *ngFor=\"let area of areas\" value=\"{{area.id}}\">{{area.name}}</option>\n                \n            </select>\n        </div>\n         <div class=\"form-group\">\n             <label class=\"col-md-2 text-right\" for=\"manager\">المدير:</label>\n             <div class=\"col-md-10\">\n                 <input type=\"text\" formControlName=\"manager\" class=\"form-control\">\n             </div>\n         </div>\n\n         <div class=\"form-group\">\n            <label class=\"col-md-2 text-right\" for=\"Number\">عدد الحيوانات:</label>\n            <div class=\"col-md-10\">\n                <input type=\"number\" formControlName=\"number\" class=\"form-control\">\n             </div>\n        </div>\n\n        <div class=\"form-group\">\n            <label class=\"col-md-2 text-right\" for=\"kind\">نوع الحيوانات:</label>\n            <div class=\"col-md-10\">\n                <input type=\"text\" formControlName=\"kind\" class=\"form-control\">\n             </div>\n        </div>\n\n        <div class=\"form-group\">\n            <label class=\"col-md-2 text-right\" for=\"age\">متوسط اعمار الحيوانات: </label>\n            <div class=\"col-md-10\">\n                <input type=\"text\" formControlName=\"age\" class=\"form-control\" placeholder=\"من:الى\">\n             </div>\n        </div>\n\n        <div class=\"form-group\">\n            <label class=\"col-md-2 text-right\" for=\"weight\">متوسط اوزان الحيوانات: </label>\n            <div class=\"col-md-10\">\n                <input type=\"text\" formControlName=\"weight\" class=\"form-control\" placeholder=\"من:الى\">\n             </div>\n        </div>\n\n          <div class=\"form-group\">\n            <label class=\"col-md-2 text-right\" for=\"production\">انتاجية المزرعة:</label>\n            <select formControlName=\"production\" (ngModelChange)=\"onSelectProduction($event)\"\n             class=\"form-control col-md-10\">\n                <option value=\"0\">حلاب </option>\n                <option value=\"1\">تسمين</option>\n            </select>        \n          </div>\n\n          <!-- if production milk  -->\n          <div class=\"form-group\" *ngIf=\"productionType==0\"> \n              <label class=\"col-md-2 text-right\" for=\"milkPhase\">مرحلة الحليب: </label>\n              <div class=\"col-md-10\">\n                  <input type=\"text\" formControlName=\"milkPhase\"\n                   class=\"form-control\" placeholder=\"اول الفترة – منتصف الفترة – اخر الفترة\">\n              </div>\n          </div>\n          <div class=\"form-group\" *ngIf=\"productionType==0\"> \n              <label class=\"col-md-2 text-right\" for=\"quantity\">كمية اللبن المنتج ( معدل \\ حيوان ): </label>\n              <div class=\"col-md-10\">\n                  <input type=\"number\" formControlName=\"quantity\" class=\"form-control\" placeholder=\"لتر \\يوم\">\n              </div>\n          </div>\n\n          <div class=\"form-group\" *ngIf=\"productionType==1\">\n              <label class=\"col-md-2 text-right\" for=\"fattingPhase\">مرحلة التسمين: </label>\n              <div class=\"col-md-10\">\n                  <input type=\"text\" formControlName=\"fattingPhase\"\n                   class=\"form-control\" placeholder=\" اول الفترة – اخر الفترة\">\n              </div>\n          </div>\n\n          <div class=\"form-group\" *ngIf=\"productionType==1\">\n            <label class=\"col-md-2 text-right\" for=\"talaak\">هل توجد طلائق ؟:</label>\n            <select formControlName=\"talaak\" (ngModelChange)=\"onSelectTalaak($event)\"\n             class=\"form-control col-md-10\">\n                <option value=\"0\">لايوجد</option>\n                <option value=\"1\">يوجد</option>\n            </select>        \n          </div>\n\n          <div class=\"form-group\" *ngIf=\"productionType==1 && talaak==1\">\n              <label class=\"col-md-2 text-right\" for=\"talaakNum\"> عددالطلقات:</label>\n              <div class=\"col-md-10\">\n                  <input type=\"number\" formControlName=\"talaakNum\" class=\"form-control\">\n              </div>\n          </div>\n\n          <div class=\"form-group\" *ngIf=\"productionType==1 && talaak==1\">\n            <label class=\"col-md-2 text-right\" for=\"tNumber\"> الرقم: </label>\n            <div class=\"col-md-10\">\n                <input type=\"number\" formControlName=\"tNumber\" class=\"form-control\">\n            </div>\n        </div>\n\n         <div class=\"form-group text-center\">\n             <input type=\"submit\" class=\"text-center btn btn-primary\" name=\"submit\" value=\"حفظ\" />\n         </div>\n    </form>\n\n    <!-- factory form -->\n    <form class=\"\" [formGroup]=\"factoryForm\" (ngSubmit)=\"onSubmit()\" *ngIf=\"selectedOption==2\">\n        <div class=\"form-group\">\n            <h2 class=\"text-center\">تسجيل بيانات مصنع</h2>\n            <label class=\"col-md-2 text-right\" for=\"company Name\">اسم الشركة:</label>\n            <div class=\"col-md-10\">\n                <input type=\"text\" formControlName=\"name\" class=\"form-control\">\n             </div>\n        </div>\n        <div class=\"form-group\">\n            <label class=\"col-md-2 text-right\" for=\"phone\">التليفون:</label>\n            <div class=\"col-md-10\">\n                <input type=\"number\" formControlName=\"phone\" class=\"form-control\">\n            </div>\n        </div>\n        \n        <div class=\"form-group\">\n           <label class=\"col-md-2 text-right\" for=\"area\">المنطقة:</label>\n           <select formControlName=\"areaId\" class=\"form-control col-md-10\">\n               <option *ngFor=\"let area of areas\" value=\"{{area.id}}\">{{area.name}}</option>\n               \n           </select>\n       </div>\n        <div class=\"form-group\">\n            <label class=\"col-md-2 text-right\" for=\"manager\">المدير:</label>\n            <div class=\"col-md-10\">\n                <input type=\"text\" formControlName=\"manager\" class=\"form-control\">\n            </div>\n        </div>\n\n        <div class=\"form-group\">\n           <label class=\"col-md-2 text-right\" for=\"kind\">نوع الانتاج:</label>\n           <div class=\"col-md-10\">\n               <input type=\"text\" formControlName=\"kind\" class=\"form-control\">\n            </div>\n       </div>\n\n       <div class=\"form-group\">\n           <label class=\"col-md-2 text-right\" for=\"capacity\">الطاقة الانتاجية\\السنة: </label>\n           <div class=\"col-md-10\">\n               <input type=\"text\" formControlName=\"capacity\"\n                class=\"form-control\" placeholder=\"من:الى\" >\n            </div>\n       </div>\n\n       <div class=\"form-group\">\n           <label class=\"col-md-2 text-right\" for=\"mentor\">المشرف على المصنع: </label>\n           <div class=\"col-md-10\">\n               <input type=\"text\" formControlName=\"mentor\" class=\"form-control\">\n            </div>\n       </div>\n    \n       <div class=\"form-group text-center\">\n            <input type=\"submit\" class=\"text-center btn btn-primary\" name=\"submit\" value=\"حفظ\" />\n        </div>\n    </form>\n\n    <!-- showRoom form -->\n    <form class=\"\" [formGroup]=\"showRoomForm\" (ngSubmit)=\"onSubmit()\" *ngIf=\"selectedOption==3\">\n            <div class=\"form-group\">\n                <h2 class=\"text-center\">تسجيل بيانات المعرض</h2>\n                <label class=\"col-md-2 text-right\" for=\"company Name\">اسم الشركة:</label>\n                <div class=\"col-md-10\">\n                    <input type=\"text\" formControlName=\"name\" class=\"form-control\">\n                 </div>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"col-md-2 text-right\" for=\"phone\">التليفون:</label>\n                <div class=\"col-md-10\">\n                    <input type=\"number\" formControlName=\"phone\" class=\"form-control\">\n                </div>\n            </div>\n            \n            <div class=\"form-group\">\n               <label class=\"col-md-2 text-right\" for=\"area\">المنطقة:</label>\n               <select formControlName=\"areaId\" class=\"form-control col-md-10\">\n                   <option *ngFor=\"let area of areas\" value=\"{{area.id}}\">{{area.name}}</option>\n                   \n               </select>\n           </div>\n            <div class=\"form-group\">\n                <label class=\"col-md-2 text-right\" for=\"manager\">المدير:</label>\n                <div class=\"col-md-10\">\n                    <input type=\"text\" formControlName=\"manager\" class=\"form-control\">\n                </div>\n            </div>\n    \n            <div class=\"form-group\">\n               <label class=\"col-md-2 text-right\" for=\"kind\">الوصف (اى معلومة اضافية):</label>\n               <div class=\"col-md-10\">\n                   <input type=\"text\" formControlName=\"desc\" class=\"form-control\">\n                </div>\n           </div>\n    \n           <div class=\"form-group text-center\">\n                <input type=\"submit\" class=\"text-center btn btn-primary\" name=\"submit\" value=\"حفظ\" />\n            </div>\n    </form>\n\n    <!-- doctor form -->\n    <form class=\"\" [formGroup]=\"doctorForm\" (ngSubmit)=\"onSubmit()\" *ngIf=\"selectedOption==4\">\n            <div class=\"form-group\">\n                <h2 class=\"text-center\">تسجيل بيانات الدكتور</h2>\n                <label class=\"col-md-2 text-right\" for=\"company Name\">اسم الشركة:</label>\n                <div class=\"col-md-10\">\n                    <input type=\"text\" formControlName=\"name\" class=\"form-control\">\n                 </div>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"col-md-2 text-right\" for=\"phone\">التليفون:</label>\n                <div class=\"col-md-10\">\n                    <input type=\"number\" formControlName=\"phone\" class=\"form-control\">\n                </div>\n            </div>\n            \n            <div class=\"form-group\">\n               <label class=\"col-md-2 text-right\" for=\"area\">المنطقة:</label>\n               <select formControlName=\"areaId\" class=\"form-control col-md-10\">\n                   <option *ngFor=\"let area of areas\" value=\"{{area.id}}\">{{area.name}}</option>\n                   \n               </select>\n           </div>\n            <div class=\"form-group\">\n                <label class=\"col-md-2 text-right\" for=\"manager\">المدير:</label>\n                <div class=\"col-md-10\">\n                    <input type=\"text\" formControlName=\"manager\" class=\"form-control\">\n                </div>\n            </div>\n    \n            <div class=\"form-group\">\n               <label class=\"col-md-2 text-right\" for=\"specialization\">التخصص:</label>\n               <div class=\"col-md-10\">\n                   <input type=\"text\" formControlName=\"specialization\" class=\"form-control\">\n                </div>\n           </div>\n    \n           <div class=\"form-group text-center\">\n                <input type=\"submit\" class=\"text-center btn btn-primary\" name=\"submit\" value=\"حفظ\" />\n            </div>\n    </form>\n\n </div>\n</section>\n"

/***/ }),

/***/ "./src/app/add-client/add-client.component.scss":
/*!******************************************************!*\
  !*** ./src/app/add-client/add-client.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "row, input, span, p {\n  text-align: right; }\n\ninput {\n  margin-bottom: 25px; }\n"

/***/ }),

/***/ "./src/app/add-client/add-client.component.ts":
/*!****************************************************!*\
  !*** ./src/app/add-client/add-client.component.ts ***!
  \****************************************************/
/*! exports provided: AddClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddClientComponent", function() { return AddClientComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_area_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/area.service */ "./src/app/services/area.service.ts");
/* harmony import */ var _services_client_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/client.service */ "./src/app/services/client.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddClientComponent = /** @class */ (function () {
    function AddClientComponent(fb, router, areaService, clientService) {
        this.fb = fb;
        this.router = router;
        this.areaService = areaService;
        this.clientService = clientService;
        this.selectedOption = '';
        this.productionType = '0';
        this.talaak = '0';
    }
    AddClientComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.selectedOption);
        this.areaService.getAreas().subscribe(function (areas) { return _this.areas = areas; });
    };
    AddClientComponent.prototype.onSelect = function (val) {
        this.selectedOption = val;
        if (this.selectedOption === '1') {
            this.createRanchForm();
        }
        if (this.selectedOption === '2') {
            this.createFactoryForm();
        }
        if (this.selectedOption === '3') {
            this.createShowRoomForm();
        }
        if (this.selectedOption === '4') {
            this.createDoctorForm();
        }
    };
    AddClientComponent.prototype.onSelectProduction = function (val) {
        this.productionType = val;
        console.log(this.productionType);
    };
    AddClientComponent.prototype.onSelectTalaak = function (val) {
        this.talaak = val;
        console.log(this.talaak);
    };
    AddClientComponent.prototype.createRanchForm = function () {
        this.ranchForm = this.fb.group({
            name: '',
            phone: 0,
            areaId: '',
            image: '',
            manager: '',
            number: '',
            kind: '',
            age: '',
            weight: '',
            production: '',
            // if the ranch for milk
            milkPhase: '',
            quantity: '',
            // if the ranch for fatting
            fattingPhase: '',
            talaak: 0,
            talaakNum: 0,
            tNumber: 0
        });
    };
    AddClientComponent.prototype.createFactoryForm = function () {
        this.factoryForm = this.fb.group({
            name: '',
            phone: 0,
            areaId: '',
            image: '',
            manager: '',
            kind: '',
            capacity: '',
            mentor: ''
        });
    };
    AddClientComponent.prototype.createShowRoomForm = function () {
        this.showRoomForm = this.fb.group({
            name: '',
            phone: 0,
            areaId: '',
            image: '',
            manager: '',
            desc: ''
        });
    };
    AddClientComponent.prototype.createDoctorForm = function () {
        this.doctorForm = this.fb.group({
            name: '',
            phone: 0,
            areaId: '',
            image: '',
            manager: '',
            specialization: ''
        });
    };
    AddClientComponent.prototype.onSubmit = function () {
        var _this = this;
        var formData = new FormData();
        if (this.selectedOption === '1') {
            formData.append('companyKind', this.selectedOption);
            formData.append('name', this.ranchForm.get('name').value);
            formData.append('phone', this.ranchForm.get('phone').value);
            formData.append('areaId', this.ranchForm.get('areaId').value);
            formData.append('manager', this.ranchForm.get('manager').value);
            formData.append('number', this.ranchForm.get('number').value);
            formData.append('kind', this.ranchForm.get('kind').value);
            formData.append('age', this.ranchForm.get('age').value);
            formData.append('weight', this.ranchForm.get('weight').value);
            formData.append('production', this.ranchForm.get('production').value);
            formData.append('milkPhase', this.ranchForm.get('milkPhase').value);
            formData.append('quantity', this.ranchForm.get('quantity').value);
            formData.append('fattingPhase', this.ranchForm.get('fattingPhase').value);
            formData.append('talaak', this.ranchForm.get('talaak').value);
            formData.append('talaakNum', this.ranchForm.get('talaakNum').value);
            formData.append('tNumber', this.ranchForm.get('tNumber').value);
        }
        if (this.selectedOption === '2') {
            formData.append('companyKind', this.selectedOption);
            formData.append('name', this.factoryForm.get('name').value);
            formData.append('phone', this.factoryForm.get('phone').value);
            formData.append('areaId', this.factoryForm.get('areaId').value);
            formData.append('manager', this.factoryForm.get('manager').value);
            formData.append('kind', this.factoryForm.get('kind').value);
            formData.append('capacity', this.factoryForm.get('capacity').value);
            formData.append('mentor', this.factoryForm.get('mentor').value);
        }
        if (this.selectedOption === '3') {
            formData.append('companyKind', this.selectedOption);
            formData.append('name', this.showRoomForm.get('name').value);
            formData.append('phone', this.showRoomForm.get('phone').value);
            formData.append('areaId', this.showRoomForm.get('areaId').value);
            formData.append('manager', this.showRoomForm.get('manager').value);
            formData.append('desc', this.showRoomForm.get('desc').value);
        }
        if (this.selectedOption === '4') {
            formData.append('companyKind', this.selectedOption);
            formData.append('name', this.doctorForm.get('name').value);
            formData.append('phone', this.doctorForm.get('phone').value);
            formData.append('areaId', this.doctorForm.get('areaId').value);
            formData.append('manager', this.doctorForm.get('manager').value);
            formData.append('specialization', this.doctorForm.get('specialization').value);
        }
        this.clientService.addClient(formData).subscribe(function (response) {
            alert('تم اضافة عميل جديد الى قاعدة البيانات');
            console.log(response);
            _this.router.navigate(['/clients']);
        }, function (error) { return console.log(error); });
    };
    AddClientComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-client',
            template: __webpack_require__(/*! ./add-client.component.html */ "./src/app/add-client/add-client.component.html"),
            styles: [__webpack_require__(/*! ./add-client.component.scss */ "./src/app/add-client/add-client.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_area_service__WEBPACK_IMPORTED_MODULE_3__["AreaService"],
            _services_client_service__WEBPACK_IMPORTED_MODULE_4__["ClientService"]])
    ], AddClientComponent);
    return AddClientComponent;
}());



/***/ }),

/***/ "./src/app/add-employee/add-employee.component.html":
/*!**********************************************************!*\
  !*** ./src/app/add-employee/add-employee.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <section class=\"padding addEmployee\">\r\n        <div class=\"container\">      \r\n            <form class=\"\" novalidate [formGroup]=\"employeeForm\" (ngSubmit)=\"onSubmit()\">\r\n                <div class=\"form-group\">\r\n                    <label class=\"col-md-2 text-right\" for=\"usr\">اسم المندوب:</label>\r\n                    <div class=\"col-md-10\">\r\n                        <input type=\"text\" formControlName=\"name\" class=\"form-control\" required>\r\n                         <p *ngIf=\"employeeForm.get('name').hasError('required') && employeeForm.get('name').touched\">Last name is required</p>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label class=\"col-md-2 text-right\" for=\"usr\">userName :</label>\r\n                    <div class=\"col-md-10\">\r\n                        <input type=\"text\" formControlName=\"username\" class=\"form-control\" required>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label class=\"col-md-2 text-right\" for=\"usr\">الباسور :</label>\r\n                    <div class=\"col-md-10\">\r\n                        <input type=\"password\" formControlName=\"password\" class=\"form-control\" required>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label class=\"col-md-2 text-right\" for=\"usr\">التليفون:</label>\r\n                    <div class=\"col-md-10\">\r\n                        <input type=\"number\" formControlName=\"phone\" class=\"form-control\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label class=\"col-md-2 text-right\" for=\"usr\">المنطقة:</label>\r\n                    <select formControlName=\"area\" class=\"form-control col-md-10\">\r\n                        <option *ngFor=\"let area of areas\" value=\"{{area.id}}\">{{area.name}}</option>\r\n                        \r\n                    </select>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label class=\"col-md-2 text-right\">اضافة صوره:</label>\r\n                    <div class=\"col-md-10\">\r\n                        <input type=\"file\" (change)=\"onFileSelected($event)\" class=\"form-control\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label class=\"col-md-2 text-right\" for=\"usr\">مدير المنطقة:</label>\r\n                    <select formControlName=\"moderator\" class=\"form-control col-md-10\">\r\n                        <option *ngFor=\"let moderator of moderators\" value=\"{{moderator.id}}\">{{moderator.name}}</option>\r\n\r\n                    </select>\r\n                </div>\r\n                <div class=\"form-group text-center\">\r\n                    <input type=\"submit\" class=\"text-center btn btn-primary\" name=\"submit\" value=\"حفظ\" />\r\n                </div>\r\n            </form>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "./src/app/add-employee/add-employee.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/add-employee/add-employee.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "row, input, span, p {\n  text-align: right; }\n\ninput {\n  margin-bottom: 25px; }\n"

/***/ }),

/***/ "./src/app/add-employee/add-employee.component.ts":
/*!********************************************************!*\
  !*** ./src/app/add-employee/add-employee.component.ts ***!
  \********************************************************/
/*! exports provided: AddEmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEmployeeComponent", function() { return AddEmployeeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_employee_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/employee.service */ "./src/app/services/employee.service.ts");
/* harmony import */ var _services_area_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/area.service */ "./src/app/services/area.service.ts");
/* harmony import */ var _services_moderator_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/moderator.service */ "./src/app/services/moderator.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddEmployeeComponent = /** @class */ (function () {
    function AddEmployeeComponent(areaService, fb, employeeService, moderatorService, router) {
        this.areaService = areaService;
        this.fb = fb;
        this.employeeService = employeeService;
        this.moderatorService = moderatorService;
        this.router = router;
        this.createForm();
    }
    AddEmployeeComponent.prototype.createForm = function () {
        this.employeeForm = this.fb.group({
            name: '',
            username: '',
            phone: '',
            password: '',
            area: 0,
            avater: [''],
            moderator: ''
        });
    };
    AddEmployeeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.areaService.getAreas().subscribe(function (areas) { return _this.areas = areas; });
        this.moderatorService.getModerators().subscribe(function (moderators) { return _this.moderators = moderators; });
    };
    AddEmployeeComponent.prototype.onFileSelected = function (event) {
        var selectedFile = event.target.files[0];
        this.employeeForm.get('avater').setValue(selectedFile);
        console.log(selectedFile);
    };
    AddEmployeeComponent.prototype.onSubmit = function () {
        var _this = this;
        var formData = new FormData();
        formData.append('avater', this.employeeForm.get('avater').value);
        formData.append('name', this.employeeForm.get('name').value);
        formData.append('username', this.employeeForm.get('username').value);
        formData.append('phone', this.employeeForm.get('phone').value);
        formData.append('password', this.employeeForm.get('password').value);
        formData.append('area', this.employeeForm.get('area').value);
        formData.append('moderator', this.employeeForm.get('moderator').value);
        this.employee = this.employeeForm.value;
        // console.log(this.employee);
        this.employeeService.addEmployee(formData).subscribe(function (response) {
            console.log(response);
            if (response.success === true) {
                alert('تم اضافة مندوب جديد الى قاعدة البيانات');
                _this.router.navigate(['/employees']);
            }
            else {
                alert(response.msg + ' خطا فى البيانات');
            }
        }, function (error) { return console.log(error); });
        this.employeeForm.reset();
    };
    AddEmployeeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-employee',
            template: __webpack_require__(/*! ./add-employee.component.html */ "./src/app/add-employee/add-employee.component.html"),
            styles: [__webpack_require__(/*! ./add-employee.component.scss */ "./src/app/add-employee/add-employee.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_area_service__WEBPACK_IMPORTED_MODULE_4__["AreaService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_employee_service__WEBPACK_IMPORTED_MODULE_3__["EmployeeService"],
            _services_moderator_service__WEBPACK_IMPORTED_MODULE_5__["ModeratorService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AddEmployeeComponent);
    return AddEmployeeComponent;
}());



/***/ }),

/***/ "./src/app/add-moderator/add-moderator.component.html":
/*!************************************************************!*\
  !*** ./src/app/add-moderator/add-moderator.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"padding addModerator\">\n  <div class=\"container\">      \n      <form class=\"\" novalidate [formGroup]=\"addModeratorForm\" (ngSubmit)=\"onSubmit()\">\n          <div class=\"form-group\">\n              <label class=\"col-md-2 text-right\" for=\"usr\">اسم مدير:</label>\n              <div class=\"col-md-10\">\n                  <input type=\"text\" formControlName=\"name\" class=\"form-control\" required>\n              </div>\n          </div>\n          <div class=\"form-group\">\n              <label class=\"col-md-2 text-right\" for=\"usr\">userName :</label>\n              <div class=\"col-md-10\">\n                  <input type=\"text\" formControlName=\"username\" class=\"form-control\" required>\n              </div>\n          </div>\n          <div class=\"form-group\">\n              <label class=\"col-md-2 text-right\" for=\"usr\">الباسور :</label>\n              <div class=\"col-md-10\">\n                  <input type=\"password\" formControlName=\"password\" class=\"form-control\" required>\n              </div>\n          </div>\n          <div class=\"form-group\">\n              <label class=\"col-md-2 text-right\" for=\"usr\">التليفون:</label>\n              <div class=\"col-md-10\">\n                  <input type=\"number\" formControlName=\"phone\" class=\"form-control\">\n              </div>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"col-md-2 text-right\" for=\"usr\">المنطقة:</label>\n            <select formControlName=\"area\" class=\"form-control col-md-10\">\n                <option *ngFor=\"let area of areas\" value=\"{{area.id}}\">{{area.name}}</option>\n                \n            </select>\n        </div>\n          <!-- <div class=\"form-group\">\n              <label class=\"col-md-2 text-right\">اضافة صوره:</label>\n              <div class=\"col-md-10\">\n                  <input type=\"file\" (change)=\"onFileSelected($event)\" class=\"form-control\">\n              </div>\n          </div>\n          <div class=\"form-group\">\n              <label class=\"col-md-2 text-right\" for=\"usr\">مدير المنطقة:</label>\n              <select formControlName=\"moderator\" class=\"form-control col-md-10\">\n                  <option *ngFor=\"let moderator of moderators\" value=\"{{moderator.id}}\">{{moderator.name}}</option>\n\n              </select>\n          </div> -->\n          <div class=\"form-group text-center\">\n              <input type=\"submit\" class=\"text-center btn btn-primary\" name=\"submit\" value=\"حفظ\" />\n          </div>\n      </form>\n</div>\n</section>"

/***/ }),

/***/ "./src/app/add-moderator/add-moderator.component.scss":
/*!************************************************************!*\
  !*** ./src/app/add-moderator/add-moderator.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "row, input, span, p {\n  text-align: right; }\n\ninput {\n  margin-bottom: 25px; }\n"

/***/ }),

/***/ "./src/app/add-moderator/add-moderator.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/add-moderator/add-moderator.component.ts ***!
  \**********************************************************/
/*! exports provided: AddModeratorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddModeratorComponent", function() { return AddModeratorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_area_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/area.service */ "./src/app/services/area.service.ts");
/* harmony import */ var _services_moderator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/moderator.service */ "./src/app/services/moderator.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddModeratorComponent = /** @class */ (function () {
    function AddModeratorComponent(areaService, fb, moderatorService, router) {
        this.areaService = areaService;
        this.fb = fb;
        this.moderatorService = moderatorService;
        this.router = router;
    }
    AddModeratorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.areaService.getAreas().subscribe(function (areas) { return _this.areas = areas; });
        this.createForm();
    };
    AddModeratorComponent.prototype.createForm = function () {
        this.addModeratorForm = this.fb.group({
            name: '',
            username: '',
            phone: '',
            password: '',
            area: 0
        });
    };
    AddModeratorComponent.prototype.onSubmit = function () {
        var _this = this;
        this.moderator = this.addModeratorForm.value;
        var formData = new FormData();
        formData.append('name', this.addModeratorForm.get('name').value);
        formData.append('username', this.addModeratorForm.get('username').value);
        formData.append('phone', this.addModeratorForm.get('phone').value);
        formData.append('password', this.addModeratorForm.get('password').value);
        formData.append('area', this.addModeratorForm.get('area').value);
        this.moderatorService.addModerator(formData).subscribe(function (response) {
            console.log(response);
            if (response.success === true) {
                alert('تم اضافة مدير منطقة الى قاعة البيانات');
                _this.router.navigate(['/moderators']);
            }
            else {
                alert('خطا فى اضافة البيانات');
            }
        }, function (error) { return console.log(error); });
        this.addModeratorForm.reset();
    };
    AddModeratorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-moderator',
            template: __webpack_require__(/*! ./add-moderator.component.html */ "./src/app/add-moderator/add-moderator.component.html"),
            styles: [__webpack_require__(/*! ./add-moderator.component.scss */ "./src/app/add-moderator/add-moderator.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_area_service__WEBPACK_IMPORTED_MODULE_3__["AreaService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_moderator_service__WEBPACK_IMPORTED_MODULE_4__["ModeratorService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AddModeratorComponent);
    return AddModeratorComponent;
}());



/***/ }),

/***/ "./src/app/add-product/add-product.component.html":
/*!********************************************************!*\
  !*** ./src/app/add-product/add-product.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container padding\">\n  <div class=\"row padding\">\n      <h2 class=\"text-center col-12\">اضافة منتج فى صفحة المنتجات </h2>\n      <div class=\"col-12\">\n          <form novalidate [formGroup]=\"productForm\" (ngSubmit)=\"onSubmit()\">\n              <div class=\"form-group\">\n                  <label class=\"col-md-2 text-right\">اضافة صوره:</label>\n                  <div class=\"col-md-10\">\n                      <input type=\"file\" name=\"image\" (change)=\"onFileSelected($event)\" class=\"form-control\">\n                  </div>\n              </div>\n              <div class=\"form-group\">\n                      <label class=\"col-md-2 text-right\" for=\"price\">السعر:</label>\n                      <div class=\"col-md-10\">\n                          <input type=\"number\" formControlName=\"price\" \n                          class=\"form-control\" required>\n                      </div>\n                  </div>\n              <div class=\"form-group\">\n                  <label class=\"col-md-2 text-right\" for=\"desc\">الوصف:</label>\n                  <div class=\"col-md-10\">\n                      <input type=\"text\" formControlName=\"desc\" \n                      class=\"form-control\" required>\n                  </div>\n              </div>\n              <div class=\"form-group text-center\">\n                  <input type=\"submit\" class=\"text-center btn btn-primary\" name=\"submit\" value=\"حفظ\" />\n              </div>\n          </form>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/add-product/add-product.component.scss":
/*!********************************************************!*\
  !*** ./src/app/add-product/add-product.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "row, input, span, p {\n  text-align: right; }\n\ninput {\n  margin-bottom: 25px; }\n"

/***/ }),

/***/ "./src/app/add-product/add-product.component.ts":
/*!******************************************************!*\
  !*** ./src/app/add-product/add-product.component.ts ***!
  \******************************************************/
/*! exports provided: AddProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProductComponent", function() { return AddProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/products.service */ "./src/app/services/products.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddProductComponent = /** @class */ (function () {
    function AddProductComponent(productService, fb, router) {
        this.productService = productService;
        this.fb = fb;
        this.router = router;
        this.selectedFile = null;
        this.createForm();
    }
    AddProductComponent.prototype.ngOnInit = function () { };
    AddProductComponent.prototype.createForm = function () {
        this.productForm = this.fb.group({
            image: [''],
            price: '',
            desc: ''
        });
    };
    AddProductComponent.prototype.onFileSelected = function (event) {
        this.selectedFile = event.target.files[0];
        this.productForm.get('image').setValue(this.selectedFile);
        console.log(this.productForm.get('image').value);
    };
    AddProductComponent.prototype.onSubmit = function () {
        var _this = this;
        var fd = new FormData();
        fd.append('avater', this.productForm.get('image').value);
        fd.append('price', this.productForm.get('price').value);
        fd.append('desc', this.productForm.get('desc').value);
        this.productService.uploadproduct(fd).subscribe(function (response) {
            alert('تم اضافة منتج جديد');
            console.log(response);
            _this.router.navigate(['/products']);
        }, function (error) { return console.log(error); });
    };
    AddProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-product',
            template: __webpack_require__(/*! ./add-product.component.html */ "./src/app/add-product/add-product.component.html"),
            styles: [__webpack_require__(/*! ./add-product.component.scss */ "./src/app/add-product/add-product.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AddProductComponent);
    return AddProductComponent;
}());



/***/ }),

/***/ "./src/app/app-routing/app-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/app-routing/app-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes */ "./src/app/app-routing/routes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_3__["routes"])
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app-routing/routes.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing/routes.ts ***!
  \***************************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _clients_clients_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../clients/clients.component */ "./src/app/clients/clients.component.ts");
/* harmony import */ var _employees_employees_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../employees/employees.component */ "./src/app/employees/employees.component.ts");
/* harmony import */ var _client_details_client_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../client-details/client-details.component */ "./src/app/client-details/client-details.component.ts");
/* harmony import */ var _employee_details_employee_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../employee-details/employee-details.component */ "./src/app/employee-details/employee-details.component.ts");
/* harmony import */ var _add_client_add_client_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../add-client/add-client.component */ "./src/app/add-client/add-client.component.ts");
/* harmony import */ var _add_employee_add_employee_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../add-employee/add-employee.component */ "./src/app/add-employee/add-employee.component.ts");
/* harmony import */ var _area_area_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../area/area.component */ "./src/app/area/area.component.ts");
/* harmony import */ var _moderators_moderators_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../moderators/moderators.component */ "./src/app/moderators/moderators.component.ts");
/* harmony import */ var _add_moderator_add_moderator_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../add-moderator/add-moderator.component */ "./src/app/add-moderator/add-moderator.component.ts");
/* harmony import */ var _visits_visits_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../visits/visits.component */ "./src/app/visits/visits.component.ts");
/* harmony import */ var _edit_client_edit_client_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../edit-client/edit-client.component */ "./src/app/edit-client/edit-client.component.ts");
/* harmony import */ var _edit_employee_edit_employee_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../edit-employee/edit-employee.component */ "./src/app/edit-employee/edit-employee.component.ts");
/* harmony import */ var _edit_moderator_edit_moderator_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../edit-moderator/edit-moderator.component */ "./src/app/edit-moderator/edit-moderator.component.ts");
/* harmony import */ var _edit_area_edit_area_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../edit-area/edit-area.component */ "./src/app/edit-area/edit-area.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../logout/logout.component */ "./src/app/logout/logout.component.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../products/products.component */ "./src/app/products/products.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../add-product/add-product.component */ "./src/app/add-product/add-product.component.ts");




















var routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_18__["AuthGuard"]] },
    { path: 'clients', component: _clients_clients_component__WEBPACK_IMPORTED_MODULE_1__["ClientsComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_18__["AuthGuard"]] },
    { path: 'employees', component: _employees_employees_component__WEBPACK_IMPORTED_MODULE_2__["EmployeesComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_18__["AuthGuard"]] },
    { path: 'areas', component: _area_area_component__WEBPACK_IMPORTED_MODULE_7__["AreaComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_18__["AuthGuard"]] },
    { path: 'editArea/:id', component: _edit_area_edit_area_component__WEBPACK_IMPORTED_MODULE_14__["EditAreaComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_18__["AuthGuard"]] },
    { path: 'moderators', component: _moderators_moderators_component__WEBPACK_IMPORTED_MODULE_8__["ModeratorsComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_18__["AuthGuard"]] },
    { path: 'addClient', component: _add_client_add_client_component__WEBPACK_IMPORTED_MODULE_5__["AddClientComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_18__["AuthGuard"]] },
    { path: 'editClient/:id/:type', component: _edit_client_edit_client_component__WEBPACK_IMPORTED_MODULE_11__["EditClientComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_18__["AuthGuard"]] },
    { path: 'addEmployee', component: _add_employee_add_employee_component__WEBPACK_IMPORTED_MODULE_6__["AddEmployeeComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_18__["AuthGuard"]] },
    { path: 'editEmployee/:id', component: _edit_employee_edit_employee_component__WEBPACK_IMPORTED_MODULE_12__["EditEmployeeComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_18__["AuthGuard"]] },
    { path: 'addModerator', component: _add_moderator_add_moderator_component__WEBPACK_IMPORTED_MODULE_9__["AddModeratorComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_18__["AuthGuard"]] },
    { path: 'editModerator/:id', component: _edit_moderator_edit_moderator_component__WEBPACK_IMPORTED_MODULE_13__["EditModeratorComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_18__["AuthGuard"]] },
    { path: 'visits', component: _visits_visits_component__WEBPACK_IMPORTED_MODULE_10__["VisitsComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_18__["AuthGuard"]] },
    { path: 'clientdetails/:id', component: _client_details_client_details_component__WEBPACK_IMPORTED_MODULE_3__["ClientDetailsComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_18__["AuthGuard"]] },
    { path: 'employeedetails/:id', component: _employee_details_employee_details_component__WEBPACK_IMPORTED_MODULE_4__["EmployeeDetailsComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_18__["AuthGuard"]] },
    { path: 'products', component: _products_products_component__WEBPACK_IMPORTED_MODULE_17__["ProductsComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"] },
    { path: 'addProduct', component: _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_19__["AddProductComponent"] },
    { path: 'logout', component: _logout_logout_component__WEBPACK_IMPORTED_MODULE_16__["LogoutComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_18__["AuthGuard"]] },
    { path: '', redirectTo: '/home', pathMatch: 'full', canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_18__["AuthGuard"]] }
];


/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <app-header></app-header>\r\n <router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".print-btn {\n  color: #ffffff !important; }\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'mandobi';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _clients_clients_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./clients/clients.component */ "./src/app/clients/clients.component.ts");
/* harmony import */ var _client_details_client_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./client-details/client-details.component */ "./src/app/client-details/client-details.component.ts");
/* harmony import */ var _employees_employees_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./employees/employees.component */ "./src/app/employees/employees.component.ts");
/* harmony import */ var _employee_details_employee_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./employee-details/employee-details.component */ "./src/app/employee-details/employee-details.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _services_client_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/client.service */ "./src/app/services/client.service.ts");
/* harmony import */ var _services_employee_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/employee.service */ "./src/app/services/employee.service.ts");
/* harmony import */ var _services_moderator_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/moderator.service */ "./src/app/services/moderator.service.ts");
/* harmony import */ var _services_area_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/area.service */ "./src/app/services/area.service.ts");
/* harmony import */ var _services_edit_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/edit.service */ "./src/app/services/edit.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./app-routing/app-routing.module */ "./src/app/app-routing/app-routing.module.ts");
/* harmony import */ var _filter_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./filter.pipe */ "./src/app/filter.pipe.ts");
/* harmony import */ var _add_employee_add_employee_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./add-employee/add-employee.component */ "./src/app/add-employee/add-employee.component.ts");
/* harmony import */ var _client_filter_pipe__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./client-filter.pipe */ "./src/app/client-filter.pipe.ts");
/* harmony import */ var _area_area_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./area/area.component */ "./src/app/area/area.component.ts");
/* harmony import */ var _moderators_moderators_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./moderators/moderators.component */ "./src/app/moderators/moderators.component.ts");
/* harmony import */ var _employee_details_pipe__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./employee-details.pipe */ "./src/app/employee-details.pipe.ts");
/* harmony import */ var _client_details_pipe__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./client-details.pipe */ "./src/app/client-details.pipe.ts");
/* harmony import */ var _add_moderator_add_moderator_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./add-moderator/add-moderator.component */ "./src/app/add-moderator/add-moderator.component.ts");
/* harmony import */ var _add_client_add_client_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./add-client/add-client.component */ "./src/app/add-client/add-client.component.ts");
/* harmony import */ var _date_pipe__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./date.pipe */ "./src/app/date.pipe.ts");
/* harmony import */ var _visits_visits_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./visits/visits.component */ "./src/app/visits/visits.component.ts");
/* harmony import */ var _visits_pipe__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./visits.pipe */ "./src/app/visits.pipe.ts");
/* harmony import */ var _edit_client_edit_client_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./edit-client/edit-client.component */ "./src/app/edit-client/edit-client.component.ts");
/* harmony import */ var _edit_employee_edit_employee_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./edit-employee/edit-employee.component */ "./src/app/edit-employee/edit-employee.component.ts");
/* harmony import */ var _single_date_pipe__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./single-date.pipe */ "./src/app/single-date.pipe.ts");
/* harmony import */ var _edit_moderator_edit_moderator_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./edit-moderator/edit-moderator.component */ "./src/app/edit-moderator/edit-moderator.component.ts");
/* harmony import */ var _edit_area_edit_area_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./edit-area/edit-area.component */ "./src/app/edit-area/edit-area.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/logout/logout.component.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./products/products.component */ "./src/app/products/products.component.ts");
/* harmony import */ var _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./add-product/add-product.component */ "./src/app/add-product/add-product.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













// services






// router module

// filter






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                _clients_clients_component__WEBPACK_IMPORTED_MODULE_7__["ClientsComponent"],
                _client_details_client_details_component__WEBPACK_IMPORTED_MODULE_8__["ClientDetailsComponent"],
                _employees_employees_component__WEBPACK_IMPORTED_MODULE_9__["EmployeesComponent"],
                _employee_details_employee_details_component__WEBPACK_IMPORTED_MODULE_10__["EmployeeDetailsComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _filter_pipe__WEBPACK_IMPORTED_MODULE_19__["FilterPipe"],
                _add_employee_add_employee_component__WEBPACK_IMPORTED_MODULE_20__["AddEmployeeComponent"],
                _client_filter_pipe__WEBPACK_IMPORTED_MODULE_21__["ClientFilterPipe"],
                _area_area_component__WEBPACK_IMPORTED_MODULE_22__["AreaComponent"],
                _moderators_moderators_component__WEBPACK_IMPORTED_MODULE_23__["ModeratorsComponent"],
                _employee_details_pipe__WEBPACK_IMPORTED_MODULE_24__["EmployeeDetailsPipe"],
                _client_details_pipe__WEBPACK_IMPORTED_MODULE_25__["ClientDetailsPipe"],
                _add_moderator_add_moderator_component__WEBPACK_IMPORTED_MODULE_26__["AddModeratorComponent"],
                _add_client_add_client_component__WEBPACK_IMPORTED_MODULE_27__["AddClientComponent"],
                _date_pipe__WEBPACK_IMPORTED_MODULE_28__["DatePipe"],
                _visits_visits_component__WEBPACK_IMPORTED_MODULE_29__["VisitsComponent"],
                _visits_pipe__WEBPACK_IMPORTED_MODULE_30__["VisitsPipe"],
                _edit_client_edit_client_component__WEBPACK_IMPORTED_MODULE_31__["EditClientComponent"],
                _edit_employee_edit_employee_component__WEBPACK_IMPORTED_MODULE_32__["EditEmployeeComponent"],
                _single_date_pipe__WEBPACK_IMPORTED_MODULE_33__["SingleDatePipe"],
                _edit_moderator_edit_moderator_component__WEBPACK_IMPORTED_MODULE_34__["EditModeratorComponent"],
                _edit_area_edit_area_component__WEBPACK_IMPORTED_MODULE_35__["EditAreaComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_36__["LoginComponent"],
                _logout_logout_component__WEBPACK_IMPORTED_MODULE_38__["LogoutComponent"],
                _products_products_component__WEBPACK_IMPORTED_MODULE_39__["ProductsComponent"],
                _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_40__["AddProductComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_18__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            providers: [
                _services_client_service__WEBPACK_IMPORTED_MODULE_12__["ClientService"],
                _services_employee_service__WEBPACK_IMPORTED_MODULE_13__["EmployeeService"],
                _services_moderator_service__WEBPACK_IMPORTED_MODULE_14__["ModeratorService"],
                _services_area_service__WEBPACK_IMPORTED_MODULE_15__["AreaService"],
                _services_edit_service__WEBPACK_IMPORTED_MODULE_16__["EditService"],
                _services_auth_service__WEBPACK_IMPORTED_MODULE_17__["AuthService"],
                _auth_guard__WEBPACK_IMPORTED_MODULE_37__["AuthGuard"],
                { provide: _angular_common__WEBPACK_IMPORTED_MODULE_4__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_4__["HashLocationStrategy"] }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/area/area.component.html":
/*!******************************************!*\
  !*** ./src/app/area/area.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"areas padding\">\r\n    <div class=\"container\">\r\n         <table class=\"table text-right\">\r\n        <thead class=\"\">\r\n            <tr>\r\n                <th> المناطق </th>\r\n                <th> الاعدادات </th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr *ngFor=\"let area of areas\">\r\n                <td>{{area.name}}</td>\r\n                <td>\r\n                    <button class=\"btn btn-danger\" \r\n                    (click)=\"onDelete(area.id)\"  \r\n                    >DELETE</button>\r\n                    <button class=\"btn btn-primary\" \r\n                    [routerLink]=\"['/editArea', area.id]\">\r\n                    EDIT</button>\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n\r\n        <form novalidate #Aform=\"ngForm\" class=\"text-right padding form-inline\" \r\n          [formGroup]=\"areaForm\" (ngSubmit)=\"onSubmit()\">\r\n\r\n            <label class=\"label\">اضافة منطقه جديده:  </label>\r\n            <input type=\"text\" formControlName=\"name\" class=\"form-control\" \r\n                   placeholder=\"اسم المنطقه\" required >  \r\n            \r\n            <input type=\"submit\" [disabled]=\"areaForm.invalid\" class=\"btn btn-primary\" name=\"submit\" value=\"اضافة\" />\r\n\r\n            <p class=\"errorMsg\" \r\n               *ngIf=\"areaForm.get('name').hasError('required') \r\n               && areaForm.get('name').touched\">\r\n                 * لابد من املاء اسم المنطقة\r\n            </p>  \r\n        </form>\r\n\r\n        <div class=\"print text-center\">\r\n                <a style=\"color: #fff !important;\" class=\"print-btn btn btn-primary\"\r\n                title=\"print button\" onclick=\"window.print();\" target=\"_blank\">\r\n                     طباعة \r\n                  </a>\r\n            </div>\r\n     </div>\r\n</section>"

/***/ }),

/***/ "./src/app/area/area.component.scss":
/*!******************************************!*\
  !*** ./src/app/area/area.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/area/area.component.ts":
/*!****************************************!*\
  !*** ./src/app/area/area.component.ts ***!
  \****************************************/
/*! exports provided: AreaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaComponent", function() { return AreaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_area_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/area.service */ "./src/app/services/area.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AreaComponent = /** @class */ (function () {
    function AreaComponent(areaService, fb) {
        this.areaService = areaService;
        this.fb = fb;
        this.createForm();
    }
    AreaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.areaService.getAreas().subscribe(function (areas) { return _this.areas = areas; });
    };
    AreaComponent.prototype.createForm = function () {
        this.areaForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    AreaComponent.prototype.onDelete = function (id) {
        if (confirm('هل تريد الحذف نهائى؟ ')) {
            this.areas = this.areas.filter(function (area) { return area.id !== id; });
            this.areaService.deleteArea(id).subscribe(function (response) {
                console.log(response);
                // this.router.navigate(['/employees']);
            }, function (error) { return console.log(error); });
        }
    };
    AreaComponent.prototype.onSubmit = function () {
        var fd = new FormData;
        fd.append('name', this.areaForm.get('name').value);
        this.area = this.areaForm.value;
        this.areas.push(this.area);
        this.areaService.saveArea(fd).subscribe(function (response) {
            console.log(response);
            alert('تم اضافة منطقة جديدة');
        }, function (error) { return console.log(error); });
        this.areaForm.reset({
            name: ''
        });
        this.feedbackFormDirective.reset();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('Aform'),
        __metadata("design:type", Object)
    ], AreaComponent.prototype, "feedbackFormDirective", void 0);
    AreaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-area',
            template: __webpack_require__(/*! ./area.component.html */ "./src/app/area/area.component.html"),
            styles: [__webpack_require__(/*! ./area.component.scss */ "./src/app/area/area.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_area_service__WEBPACK_IMPORTED_MODULE_2__["AreaService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], AreaComponent);
    return AreaComponent;
}());



/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (!this.authService.isLoggedIn) {
            this.router.navigate(['login']);
        }
        return this.authService.isLoggedIn;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/client-details.pipe.ts":
/*!****************************************!*\
  !*** ./src/app/client-details.pipe.ts ***!
  \****************************************/
/*! exports provided: ClientDetailsPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientDetailsPipe", function() { return ClientDetailsPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ClientDetailsPipe = /** @class */ (function () {
    function ClientDetailsPipe() {
    }
    ClientDetailsPipe.prototype.transform = function (list, filteredText) {
        if (list && list.length) {
            var resultArray = [];
            if (filteredText === undefined) {
                return list;
            }
            for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
                var item = list_1[_i];
                if (item.employee.match('^.*' + filteredText + '.*$')) {
                    resultArray.push(item);
                }
            }
            return resultArray;
        }
        else {
            return list;
        }
    };
    ClientDetailsPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'clientDetails'
        })
    ], ClientDetailsPipe);
    return ClientDetailsPipe;
}());



/***/ }),

/***/ "./src/app/client-details/client-details.component.html":
/*!**************************************************************!*\
  !*** ./src/app/client-details/client-details.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <section class=\"clientDetails padding\">\r\n      <div class=\"container\">\r\n\r\n        <div class=\"row\" *ngIf=\"client\">\r\n            <div class=\"col-sm-6\">\r\n                <p><strong>الاسم: </strong> {{client[0].name}}</p>\r\n                <p><strong>التليفون: </strong> {{client[0].phone}}</p>\r\n                <p><strong>المنطقة: </strong>{{client[0].area}}</p>\r\n                <p><strong>مدير الشركة: </strong>{{client[0].manager}}</p>\r\n\r\n            </div>\r\n            <div class=\"col-sm-6\">\r\n                    <p><strong>النوع: </strong>{{client[0].type}}</p>\r\n                <!-- if company is ranch -->\r\n                    <div *ngIf=\"client.ranch\">\r\n                        <p><strong>عدد الحيوانات:</strong> {{client[0].ranch.number}}</p>\r\n                        <p><strong>نوع الحيوانات:</strong> {{client[0].ranch.kind}}</p>\r\n                        <p><strong> متوسط الاعمار:</strong> {{client[0].ranch.age}}</p>\r\n                        <p><strong> متوسط اوزان الحيوانات:</strong> {{client.ranch.weight}}</p>\r\n                        <div *ngIf=\"client.ranch.production == 0\">\r\n                            <p><strong> الانتاجية:</strong> حلاب</p>\r\n                            <p><strong> مرحلة الحليب:</strong> {{client[0].milkranch.milkPhase}}</p>\r\n                            <p><strong> كمية اللبن المنتج ( معدل \\ حيوان ):</strong> {{client[0].milkranch.quantity}} لتر</p>\r\n                        </div>\r\n                        <div *ngIf=\"client.ranch.production == 1\">\r\n                            <p><strong> الانتاجية:</strong> تسمين</p>\r\n                            <p><strong> مرحلة التسمين:</strong> {{client[0].fatranch.fattingPhase}}</p>\r\n                            <p><strong>هل يوجد طلائق:</strong> {{(client[0].fatranch.talaak == 1)?'نعم' :'لا'}}</p>\r\n                            <p *ngIf=\"client.fatranch.talaak == 1\">\r\n                                <strong>عدد الطلائق: </strong>  {{ client[0].fatranch.talaakNum }}\r\n                            </p>\r\n                            <p *ngIf=\"client.fatranch.talaak == 1\">\r\n                                    <strong>الرقم: </strong>  {{ client[0].fatranch.number }}\r\n                            </p>\r\n                        </div>\r\n    \r\n                    </div>\r\n    \r\n                    <!-- if company is factory -->\r\n                    <div *ngIf=\"client.factory\">\r\n                        <p><strong>نوع الانتاج: </strong> {{client.factory.productionKind}}</p>\r\n                        <p><strong>الطاقه الانتاجية: </strong>{{client.factory.capacity}}</p>\r\n                        <p><strong>المشرف على المزرعة: </strong>{{client.factory.menitor}}</p>\r\n                    </div>\r\n    \r\n                    <!-- if company is showroom -->\r\n                    <div *ngIf=\"client.showRoom\">\r\n                        <p><strong>وصف: </strong>{{client.showRoom.desc}}</p>\r\n                    </div>\r\n\r\n                    <!-- if company is doctor -->\r\n                    <div *ngIf=\"client.doctor\">\r\n                        <p><strong>التخصص: </strong> {{client.doctor.specialization}} </p>\r\n                    </div>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n                <h2 class=\"text-center\">الزيارات</h2>\r\n\r\n                <div class=\"row search-form\">\r\n\r\n                    <p class=\"text-right col-sm-2 col-6\">البحث باسم الشركة: </p>\r\n                    <input type=\"text\" class=\"form-control col-sm-4 col-6\"\r\n                    style=\"width: 300px;\" [(ngModel)]=\"filterText\" />\r\n                    \r\n                    <label for=\"date\" class=\"col-sm-2 col-6\">بحث بالتاريخ:</label>\r\n                    <input type=\"date\" class=\"form-control col-sm-4 col-6\" [(ngModel)]=\"dateFilter\" />\r\n                </div>\r\n                  \r\n            </div>\r\n                <div class=\"table-responsive\">\r\n                    <table class=\"table\">\r\n                        <thead class=\"\">\r\n                            <tr>\r\n                                <th>اسم المندوب</th>\r\n                                <th>التاريخ</th>\r\n                                <th>الوقت</th>\r\n                                <th>التعليق</th>\r\n                                <th>التقييم</th>\r\n                                <th>الموقع </th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr class=\"comments\" *ngFor=\"let comment of comments \r\n                             | clientDetails:filterText | singleDate:dateFilter\">\r\n                                <td>{{comment.employee}}</td>\r\n                                <td>{{comment.date}}</td>\r\n                                <td>{{comment.time}}</td>\r\n                                <td>{{comment.comment}}</td>\r\n                                <td>{{comment.rate}}</td>\r\n                                <td><a href=\"https://maps.google.com/?q={{comment.lat}},{{comment.lon}}\" target=\"_blank\">الموقع على الخريطه</a></td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"print text-center\">\r\n                    <a style=\"color: #fff !important;\" class=\"print-btn btn btn-primary\"\r\n                    title=\"print button\" onclick=\"window.print();\" target=\"_blank\">\r\n                         طباعة \r\n                      </a>\r\n                </div>\r\n        </div>\r\n</section>"

/***/ }),

/***/ "./src/app/client-details/client-details.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/client-details/client-details.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row {\n  text-align: right; }\n\n.search-form {\n  margin-bottom: 25px; }\n"

/***/ }),

/***/ "./src/app/client-details/client-details.component.ts":
/*!************************************************************!*\
  !*** ./src/app/client-details/client-details.component.ts ***!
  \************************************************************/
/*! exports provided: ClientDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientDetailsComponent", function() { return ClientDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_client_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/client.service */ "./src/app/services/client.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ClientDetailsComponent = /** @class */ (function () {
    function ClientDetailsComponent(clientService, route, location) {
        this.clientService = clientService;
        this.route = route;
        this.location = location;
        this.filterText = '';
        this.dateFilter = '';
        this.comments = [];
    }
    ClientDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (params) { return _this.clientService.getClient(params['id']); }))
            .subscribe(function (client) {
            _this.client = client;
            _this.comments = _this.client[1].Comments;
        });
    };
    ClientDetailsComponent.prototype.goBack = function () {
        this.location.back();
    };
    ClientDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-client-details',
            template: __webpack_require__(/*! ./client-details.component.html */ "./src/app/client-details/client-details.component.html"),
            styles: [__webpack_require__(/*! ./client-details.component.scss */ "./src/app/client-details/client-details.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_client_service__WEBPACK_IMPORTED_MODULE_4__["ClientService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], ClientDetailsComponent);
    return ClientDetailsComponent;
}());



/***/ }),

/***/ "./src/app/client-filter.pipe.ts":
/*!***************************************!*\
  !*** ./src/app/client-filter.pipe.ts ***!
  \***************************************/
/*! exports provided: ClientFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientFilterPipe", function() { return ClientFilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ClientFilterPipe = /** @class */ (function () {
    function ClientFilterPipe() {
    }
    ClientFilterPipe.prototype.transform = function (list, filteredText) {
        if (list && list.length) {
            var resultArray = [];
            if (filteredText === undefined) {
                return list;
            }
            for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
                var item = list_1[_i];
                if (item.name.match('^.*' + filteredText + '.*$')) {
                    resultArray.push(item);
                }
                else if (item.phone.match('^.*' + filteredText + '.*$')) {
                    resultArray.push(item);
                }
            }
            return resultArray;
        }
        else {
            return list;
        }
    };
    ClientFilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'clientFilter'
        })
    ], ClientFilterPipe);
    return ClientFilterPipe;
}());



/***/ }),

/***/ "./src/app/clients/clients.component.html":
/*!************************************************!*\
  !*** ./src/app/clients/clients.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"padding clients\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <p class=\"text-right col-sm-3 col-6\">بحث (بالاسم او رقم التليفون): </p>\r\n            <input type=\"text\" class=\"form-control col-sm-3 col-6\"\r\n                   [(ngModel)]=\"filteredText\" />\r\n        </div>\r\n        <div class=\"row\">\r\n                <button class=\"btn btn-primary\" (click)=\"allClients()\">الكل</button>\r\n                <button class=\"btn btn-danger\" (click)=\"onTrash()\">المحذوفين</button>\r\n            </div>\r\n        <div class=\"table-responsive\">\r\n            <table class=\"table\">\r\n                <thead class=\"\">\r\n                    <tr>\r\n                        <th>اسم الشركة</th>\r\n                        <th>التليفون</th>\r\n                        <th>نوع النشاط</th>\r\n                        <th>التقييم العام</th>\r\n                        <th>الزيارة</th>\r\n                        <th>التاريخ</th>\r\n                        <th>التفاصيل</th>\r\n                        <th>اعدادات</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let client of clients | clientFilter:filteredText\" >\r\n                        <td>{{client.name}}</td>\r\n                        <td>{{client.phone}}</td>\r\n                        <td>{{client.type}}</td>\r\n                        <td>{{client.rate}}</td>\r\n                        <td *ngIf=\"client.visit\"> \r\n                            <img src=\"../../mandobi/assets/images/true.png\" alt=\"logo\" class=\"img-fluid\">\r\n                        </td>\r\n                        <td *ngIf=\"!client.visit\">\r\n                            <img src=\"../../mandobi/assets/images/false.png\" alt=\"logo\" class=\"img-fluid\">\r\n                        </td>\r\n                        <td>\r\n                            {{client.date}}\r\n                        </td>\r\n                        <td>\r\n                            <button class=\"btn btn-info\" \r\n                            (click)=\"onSelect(client)\"\r\n                            [routerLink]=\"['/clientdetails', client.id]\"\r\n                            >عرض التقرير</button>\r\n                        </td>\r\n                        <td>\r\n                            <button class=\"btn btn-danger\" \r\n                            (click)=\"onDelete(client.id)\"  \r\n                            >DELETE</button>\r\n                            <button class=\"btn btn-primary\" \r\n                            [routerLink]=\"['/editClient', client.id, client.type]\">\r\n                            EDIT</button>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n\r\n        <div class=\"print text-center\">\r\n                <a style=\"color: #fff !important;\" class=\"print-btn btn btn-primary\"\r\n                title=\"print button\" onclick=\"window.print();\" target=\"_blank\">\r\n                     طباعة \r\n                  </a>\r\n            </div>\r\n      </div>\r\n</section>"

/***/ }),

/***/ "./src/app/clients/clients.component.scss":
/*!************************************************!*\
  !*** ./src/app/clients/clients.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table td {\n  text-align: right; }\n\ninput {\n  float: right;\n  margin-bottom: 20px; }\n\n.btn-primary {\n  margin-right: 18px; }\n"

/***/ }),

/***/ "./src/app/clients/clients.component.ts":
/*!**********************************************!*\
  !*** ./src/app/clients/clients.component.ts ***!
  \**********************************************/
/*! exports provided: ClientsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsComponent", function() { return ClientsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_client_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/client.service */ "./src/app/services/client.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ClientsComponent = /** @class */ (function () {
    function ClientsComponent(clientService) {
        this.clientService = clientService;
        this.filteredText = '';
    }
    ClientsComponent.prototype.onSelect = function (client) {
        this.selectedClient = client;
    };
    ClientsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.clientService.getClients()
            .subscribe(function (clients) { return _this.clients = clients; });
    };
    ClientsComponent.prototype.onDelete = function (id) {
        if (confirm('هل تريد الحذف نهائى؟ ')) {
            this.clients = this.clients.filter(function (employee) { return employee.id !== id; });
            this.clientService.deleteClient(id).subscribe(function (response) {
                console.log(response);
            }, function (error) { return console.log(error); });
        }
    };
    ClientsComponent.prototype.onTrash = function () {
        var _this = this;
        this.clientService.getTrashClients()
            .subscribe(function (clients) { return _this.clients = clients; });
    };
    ClientsComponent.prototype.allClients = function () {
        var _this = this;
        this.clientService.getClients()
            .subscribe(function (clients) { return _this.clients = clients; });
    };
    ClientsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-clients',
            template: __webpack_require__(/*! ./clients.component.html */ "./src/app/clients/clients.component.html"),
            styles: [__webpack_require__(/*! ./clients.component.scss */ "./src/app/clients/clients.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_client_service__WEBPACK_IMPORTED_MODULE_1__["ClientService"]])
    ], ClientsComponent);
    return ClientsComponent;
}());



/***/ }),

/***/ "./src/app/date.pipe.ts":
/*!******************************!*\
  !*** ./src/app/date.pipe.ts ***!
  \******************************/
/*! exports provided: DatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatePipe", function() { return DatePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DatePipe = /** @class */ (function () {
    function DatePipe() {
    }
    DatePipe.prototype.transform = function (list, start, end) {
        if (list && list.length) {
            var resultArray = [];
            if (start === '' || end === '') {
                return list;
            }
            else {
                for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
                    var item = list_1[_i];
                    // if (item.date.match(dateFilter)) {
                    //   resultArray.push(item);
                    // }
                    if (item.date >= start && item.date <= end) {
                        resultArray.push(item);
                    }
                }
                return resultArray;
            }
        }
        else {
            return list;
        }
    };
    DatePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'date'
        })
    ], DatePipe);
    return DatePipe;
}());



/***/ }),

/***/ "./src/app/edit-area/edit-area.component.html":
/*!****************************************************!*\
  !*** ./src/app/edit-area/edit-area.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"padding\">\n    <div class=\"container\" *ngIf=\"area\">\n        <form class=\"\" novalidate [formGroup]=\"areaForm\"\n         (ngSubmit)=\"onSubmit()\">\n            <div class=\"form-group\">\n                <label class=\"col-md-2 text-right\">الاسم:</label>\n                <div class=\"col-md-10\">\n                    <input type=\"text\" formControlName=\"name\" \n                    class=\"form-control\" required>\n                     <p *ngIf=\"areaForm.get('name').hasError('required')\n                      && areaForm.get('name').touched\">area name is required</p>\n                </div>\n            </div>\n            <div class=\"form-group text-center\">\n                <input type=\"submit\" class=\"text-center btn btn-primary\" \n                name=\"submit\" value=\"حفظ\" />\n            </div>\n        </form>\n  </div>\n  </section>"

/***/ }),

/***/ "./src/app/edit-area/edit-area.component.scss":
/*!****************************************************!*\
  !*** ./src/app/edit-area/edit-area.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/edit-area/edit-area.component.ts":
/*!**************************************************!*\
  !*** ./src/app/edit-area/edit-area.component.ts ***!
  \**************************************************/
/*! exports provided: EditAreaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditAreaComponent", function() { return EditAreaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_edit_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/edit.service */ "./src/app/services/edit.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditAreaComponent = /** @class */ (function () {
    function EditAreaComponent(fb, route, router, editService) {
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.editService = editService;
    }
    EditAreaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            _this.id = params.get('id');
            _this.editService.fetchArea(_this.id)
                .subscribe(function (area) {
                console.log(area);
                _this.area = area;
                _this.createForm(_this.area);
            });
        });
    };
    EditAreaComponent.prototype.createForm = function (area) {
        this.areaForm = this.fb.group({
            name: area.name
        });
    };
    EditAreaComponent.prototype.onSubmit = function () {
        var _this = this;
        var formData = new FormData();
        formData.append('id', this.id);
        formData.append('name', this.areaForm.get('name').value);
        this.editService.updateArea(formData).subscribe(function (response) {
            alert('تم تعديل بيانات المنطقة');
            console.log(response);
            _this.router.navigate(['/areas']);
        }, function (error) {
            console.log(error);
            alert('خطا فى تعديل البيانات');
        });
    };
    EditAreaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-area',
            template: __webpack_require__(/*! ./edit-area.component.html */ "./src/app/edit-area/edit-area.component.html"),
            styles: [__webpack_require__(/*! ./edit-area.component.scss */ "./src/app/edit-area/edit-area.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_edit_service__WEBPACK_IMPORTED_MODULE_3__["EditService"]])
    ], EditAreaComponent);
    return EditAreaComponent;
}());



/***/ }),

/***/ "./src/app/edit-client/edit-client.component.html":
/*!********************************************************!*\
  !*** ./src/app/edit-client/edit-client.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"editClient\">\n  <div class=\"container\">\n    <div *ngIf=\"client\">\n          <form *ngIf=\"companyType === 'مزرعة'\" [formGroup]=\"ranchForm\"\n          (ngSubmit)=\"onSubmit()\">\n                <h2 class=\"text-center\">تسجيل بيانات مزرعة</h2>\n              <div class=\"form-group\">\n              <label class=\"col-md-2 text-right\" for=\"company Name\">اسم الشركة:</label>\n              <div class=\"col-md-10\">\n              \n                  <input type=\"text\" formControlName=\"name\"\n                  class=\"form-control\">\n              </div>\n              </div>\n              <div class=\"form-group\">\n                  <label class=\"col-md-2 text-right\" for=\"phone\">التليفون:</label>\n                  <div class=\"col-md-10\">\n                      <input type=\"number\" formControlName=\"phone\" class=\"form-control\">\n                  </div>\n              </div>\n          \n              <div class=\"form-group\">\n                <label class=\"col-md-2 text-right\" for=\"area\">المنطقة:</label>\n                <select formControlName=\"areaId\" class=\"form-control col-md-10\">\n                    <option *ngFor=\"let area of areas\" value=\"{{area.id}}\">{{area.name}}</option>\n                    \n                </select>\n              </div>\n              <div class=\"form-group\">\n                  <label class=\"col-md-2 text-right\" for=\"manager\">المدير:</label>\n                  <div class=\"col-md-10\">\n                      <input type=\"text\" formControlName=\"manager\" class=\"form-control\">\n                  </div>\n              </div>\n\n              <div class=\"form-group\">\n                <label class=\"col-md-2 text-right\" for=\"Number\">عدد الحيوانات:</label>\n                <div class=\"col-md-10\">\n                    <input type=\"text\" formControlName=\"number\" class=\"form-control\">\n                  </div>\n              </div>\n\n              <div class=\"form-group\">\n                  <label class=\"col-md-2 text-right\" for=\"kind\">نوع الحيوانات:</label>\n                  <div class=\"col-md-10\">\n                      <input type=\"text\" formControlName=\"kind\" class=\"form-control\">\n                    </div>\n              </div>\n\n              <div class=\"form-group\">\n                  <label class=\"col-md-2 text-right\" for=\"age\">متوسط اعمار الحيوانات: </label>\n                  <div class=\"col-md-10\">\n                      <input type=\"text\" formControlName=\"age\" class=\"form-control\" placeholder=\"من:الى\">\n                    </div>\n              </div>\n\n              <div class=\"form-group\">\n                  <label class=\"col-md-2 text-right\" for=\"weight\">متوسط اوزان الحيوانات: </label>\n                  <div class=\"col-md-10\">\n                      <input type=\"text\" formControlName=\"weight\" class=\"form-control\" placeholder=\"من:الى\">\n                    </div>\n              </div>\n\n                <div class=\"form-group\">\n                  <label class=\"col-md-2 text-right\" for=\"production\">انتاجية المزرعة:</label>\n                  <select formControlName=\"production\"\n                    class=\"form-control col-md-10\">\n                      <option value=\"0\">حلاب </option>\n                      <option value=\"1\">تسمين</option>\n                  </select>        \n                </div>\n\n                <div class=\"form-group\">\n                    <label class=\"col-md-2 text-right\" for=\"trash\">هل تريد حذف العميل:</label>\n                    <select formControlName=\"trash\" class=\"form-control col-md-10\">\n                        <option  value=\"0\">لا</option>\n                        <option value=\"1\">نعم</option>\n                    </select>\n                  </div>\n\n                <div class=\"form-group text-center\">\n                    <input type=\"submit\" class=\"text-center btn btn-primary\" name=\"submit\" value=\"حفظ\" />\n                </div>\n        </form>\n\n        <!-- factory form -->\n         <form *ngIf=\"companyType === 'مصنع'\" [formGroup]=\"factoryForm\" \n         (ngSubmit)=\"onSubmit()\" >\n            <div class=\"form-group\">\n                <h2 class=\"text-center\">تسجيل بيانات مصنع</h2>\n                <label class=\"col-md-2 text-right\" for=\"company Name\">اسم الشركة:</label>\n                <div class=\"col-md-10\">\n                    <input type=\"text\" formControlName=\"name\" class=\"form-control\">\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"col-md-2 text-right\" for=\"phone\">التليفون:</label>\n                <div class=\"col-md-10\">\n                    <input type=\"number\" formControlName=\"phone\" class=\"form-control\">\n                </div>\n            </div>\n            \n            <div class=\"form-group\">\n              <label class=\"col-md-2 text-right\" for=\"area\">المنطقة:</label>\n              <select formControlName=\"areaId\" class=\"form-control col-md-10\">\n                  <option *ngFor=\"let area of areas\" value=\"{{area.id}}\">{{area.name}}</option>\n                  \n              </select>\n          </div>\n            <div class=\"form-group\">\n                <label class=\"col-md-2 text-right\" for=\"manager\">المدير:</label>\n                <div class=\"col-md-10\">\n                    <input type=\"text\" formControlName=\"manager\" class=\"form-control\">\n                </div>\n            </div>\n\n            <div class=\"form-group\">\n              <label class=\"col-md-2 text-right\" for=\"kind\">نوع الانتاج:</label>\n              <div class=\"col-md-10\">\n                  <input type=\"text\" formControlName=\"kind\" class=\"form-control\">\n                </div>\n          </div>\n\n          <div class=\"form-group\">\n              <label class=\"col-md-2 text-right\" for=\"capacity\">الطاقة الانتاجية\\السنة: </label>\n              <div class=\"col-md-10\">\n                  <input type=\"text\" formControlName=\"capacity\"\n                    class=\"form-control\" placeholder=\"من:الى\" >\n                </div>\n          </div>\n\n          <div class=\"form-group\">\n              <label class=\"col-md-2 text-right\" for=\"mentor\">المشرف على المصنع: </label>\n              <div class=\"col-md-10\">\n                  <input type=\"text\" formControlName=\"mentor\" class=\"form-control\">\n                </div>\n          </div>\n        \n          <div class=\"form-group\">\n            <label class=\"col-md-2 text-right\" for=\"trash\">هل تريد حذف العميل:</label>\n            <select formControlName=\"trash\" class=\"form-control col-md-10\">\n                <option  value=\"0\">لا</option>\n                <option value=\"1\">نعم</option>\n            </select>\n          </div>\n\n          <div class=\"form-group text-center\">\n                <input type=\"submit\" class=\"text-center btn btn-primary\" name=\"submit\" value=\"حفظ\" />\n            </div>\n        </form>\n\n        <!-- showRoom form -->\n        <form class=\"\" [formGroup]=\"showRoomForm\"\n         (ngSubmit)=\"onSubmit()\" *ngIf=\"companyType === 'معرض'\">\n                <div class=\"form-group\">\n                    <h2 class=\"text-center\">تسجيل بيانات المعرض</h2>\n                    <label class=\"col-md-2 text-right\" for=\"company Name\">اسم الشركة:</label>\n                    <div class=\"col-md-10\">\n                        <input type=\"text\" formControlName=\"name\" class=\"form-control\">\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label class=\"col-md-2 text-right\" for=\"phone\">التليفون:</label>\n                    <div class=\"col-md-10\">\n                        <input type=\"number\" formControlName=\"phone\" class=\"form-control\">\n                    </div>\n                </div>\n                \n                <div class=\"form-group\">\n                  <label class=\"col-md-2 text-right\" for=\"area\">المنطقة:</label>\n                  <select formControlName=\"areaId\" class=\"form-control col-md-10\">\n                      <option *ngFor=\"let area of areas\" value=\"{{area.id}}\">{{area.name}}</option>\n                      \n                  </select>\n              </div>\n                <div class=\"form-group\">\n                    <label class=\"col-md-2 text-right\" for=\"manager\">المدير:</label>\n                    <div class=\"col-md-10\">\n                        <input type=\"text\" formControlName=\"manager\" class=\"form-control\">\n                    </div>\n                </div>\n        \n                <div class=\"form-group\">\n                  <label class=\"col-md-2 text-right\" for=\"kind\">الوصف (اى معلومة اضافية):</label>\n                  <div class=\"col-md-10\">\n                      <input type=\"text\" formControlName=\"desc\" class=\"form-control\">\n                    </div>\n              </div>\n        \n              <div class=\"form-group\">\n                <label class=\"col-md-2 text-right\" for=\"trash\">هل تريد حذف العميل:</label>\n                <select formControlName=\"trash\" class=\"form-control col-md-10\">\n                    <option  value=\"0\">لا</option>\n                    <option value=\"1\">نعم</option>\n                </select>\n              </div>\n\n              <div class=\"form-group text-center\">\n                    <input type=\"submit\" class=\"text-center btn btn-primary\" name=\"submit\" value=\"حفظ\" />\n                </div>\n        </form>\n\n        <!-- doctor form -->\n        <form class=\"\" [formGroup]=\"doctorForm\" \n        (ngSubmit)=\"onSubmit()\" *ngIf=\"companyType === 'دكتور'\">\n                <div class=\"form-group\">\n                    <h2 class=\"text-center\">تسجيل بيانات الدكتور</h2>\n                    <label class=\"col-md-2 text-right\" for=\"company Name\">اسم الشركة:</label>\n                    <div class=\"col-md-10\">\n                        <input type=\"text\" formControlName=\"name\" class=\"form-control\">\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label class=\"col-md-2 text-right\" for=\"phone\">التليفون:</label>\n                    <div class=\"col-md-10\">\n                        <input type=\"number\" formControlName=\"phone\" class=\"form-control\">\n                    </div>\n                </div>\n                \n                <div class=\"form-group\">\n                  <label class=\"col-md-2 text-right\" for=\"area\">المنطقة:</label>\n                  <select formControlName=\"areaId\" class=\"form-control col-md-10\">\n                      <option *ngFor=\"let area of areas\" value=\"{{area.id}}\">{{area.name}}</option>\n                      \n                  </select>\n              </div>\n                <div class=\"form-group\">\n                    <label class=\"col-md-2 text-right\" for=\"manager\">المدير:</label>\n                    <div class=\"col-md-10\">\n                        <input type=\"text\" formControlName=\"manager\" class=\"form-control\">\n                    </div>\n                </div>\n        \n                <div class=\"form-group\">\n                  <label class=\"col-md-2 text-right\" for=\"specialization\">التخصص:</label>\n                  <div class=\"col-md-10\">\n                      <input type=\"text\" formControlName=\"specialization\" class=\"form-control\">\n                    </div>\n              </div>\n        \n              <div class=\"form-group\">\n                <label class=\"col-md-2 text-right\" for=\"trash\">هل تريد حذف العميل:</label>\n                <select formControlName=\"trash\" class=\"form-control col-md-10\">\n                    <option  value=\"0\">لا</option>\n                    <option value=\"1\">نعم</option>\n                </select>\n              </div>\n\n              <div class=\"form-group text-center\">\n                    <input type=\"submit\" class=\"text-center btn btn-primary\" name=\"submit\" value=\"حفظ\" />\n                </div>\n        </form>\n     </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/edit-client/edit-client.component.scss":
/*!********************************************************!*\
  !*** ./src/app/edit-client/edit-client.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "row, input, span, p {\n  text-align: right; }\n\ninput {\n  margin-bottom: 25px; }\n"

/***/ }),

/***/ "./src/app/edit-client/edit-client.component.ts":
/*!******************************************************!*\
  !*** ./src/app/edit-client/edit-client.component.ts ***!
  \******************************************************/
/*! exports provided: EditClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditClientComponent", function() { return EditClientComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_area_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/area.service */ "./src/app/services/area.service.ts");
/* harmony import */ var _services_edit_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/edit.service */ "./src/app/services/edit.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditClientComponent = /** @class */ (function () {
    function EditClientComponent(fb, route, router, areaService, editService) {
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.areaService = areaService;
        this.editService = editService;
    }
    EditClientComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.areaService.getAreas().subscribe(function (areas) { return _this.areas = areas; });
        this.route.paramMap.subscribe(function (params) {
            _this.companyType = params.get('type');
            _this.id = params.get('id');
            _this.editService.fetchClient(_this.id).subscribe(function (client) {
                _this.client = client;
                if (_this.companyType === 'مزرعة') {
                    _this.createRanchForm(_this.client);
                }
                else if (_this.companyType === 'مصنع') {
                    _this.createFactoryForm(_this.client);
                }
                else if (_this.companyType === 'معرض') {
                    _this.createShowRoomForm(_this.client);
                }
                else if (_this.companyType === 'دكتور') {
                    _this.createDoctorForm(_this.client);
                }
            });
        });
    };
    EditClientComponent.prototype.createRanchForm = function (client) {
        console.log(client);
        this.ranchForm = this.fb.group({
            name: client.name,
            phone: client.phone,
            areaId: client.area,
            manager: client.manager,
            number: client.ranch.number,
            kind: client.ranch.kind,
            age: client.ranch.age,
            weight: client.ranch.weight,
            production: client.ranch.production,
            trash: client.trash
        });
    };
    EditClientComponent.prototype.createFactoryForm = function (client) {
        console.log(client);
        this.factoryForm = this.fb.group({
            name: client.name,
            phone: client.phone,
            areaId: client.area,
            manager: client.manager,
            kind: client.factory.productionKind,
            capacity: client.factory.capacity,
            mentor: client.factory.menitor,
            trash: client.trash
        });
    };
    EditClientComponent.prototype.createShowRoomForm = function (client) {
        console.log(client);
        this.showRoomForm = this.fb.group({
            name: client.name,
            phone: client.phone,
            areaId: client.area,
            manager: client.manager,
            desc: client.showroom.desc,
            trash: client.trash
        });
    };
    EditClientComponent.prototype.createDoctorForm = function (client) {
        console.log(client);
        this.doctorForm = this.fb.group({
            name: client.name,
            phone: client.phone,
            areaId: client.area,
            manager: client.manager,
            specialization: client.doctor.specialization,
            trash: client.trash
        });
    };
    EditClientComponent.prototype.onSubmit = function () {
        var _this = this;
        var formData = new FormData();
        if (this.companyType === 'مزرعة') {
            console.log(this.id);
            formData.append('companyId', this.id);
            formData.append('companyKind', '1');
            formData.append('name', this.ranchForm.get('name').value);
            formData.append('phone', this.ranchForm.get('phone').value);
            formData.append('areaId', this.ranchForm.get('areaId').value);
            formData.append('manager', this.ranchForm.get('manager').value);
            formData.append('number', this.ranchForm.get('number').value);
            formData.append('kind', this.ranchForm.get('kind').value);
            formData.append('age', this.ranchForm.get('age').value);
            formData.append('weight', this.ranchForm.get('weight').value);
            formData.append('production', this.ranchForm.get('production').value);
            formData.append('trash', this.ranchForm.get('trash').value);
        }
        if (this.companyType === 'مصنع') {
            console.log(this.id);
            formData.append('companyId', this.id);
            formData.append('companyKind', '2');
            formData.append('name', this.factoryForm.get('name').value);
            formData.append('phone', this.factoryForm.get('phone').value);
            formData.append('areaId', this.factoryForm.get('areaId').value);
            formData.append('manager', this.factoryForm.get('manager').value);
            formData.append('kind', this.factoryForm.get('kind').value);
            formData.append('capacity', this.factoryForm.get('capacity').value);
            formData.append('mentor', this.factoryForm.get('mentor').value);
            formData.append('trash', this.factoryForm.get('trash').value);
        }
        if (this.companyType === 'معرض') {
            console.log(this.id);
            formData.append('companyId', this.id);
            formData.append('companyKind', '3');
            formData.append('name', this.showRoomForm.get('name').value);
            formData.append('phone', this.showRoomForm.get('phone').value);
            formData.append('areaId', this.showRoomForm.get('areaId').value);
            formData.append('manager', this.showRoomForm.get('manager').value);
            formData.append('desc', this.showRoomForm.get('desc').value);
            formData.append('trash', this.showRoomForm.get('trash').value);
        }
        if (this.companyType === 'دكتور') {
            console.log(this.id);
            formData.append('companyId', this.id);
            formData.append('companyKind', '4');
            formData.append('name', this.doctorForm.get('name').value);
            formData.append('phone', this.doctorForm.get('phone').value);
            formData.append('areaId', this.doctorForm.get('areaId').value);
            formData.append('manager', this.doctorForm.get('manager').value);
            formData.append('specialization', this.doctorForm.get('specialization').value);
            formData.append('trash', this.doctorForm.get('trash').value);
        }
        this.editService.updateClient(formData).subscribe(function (response) {
            alert('تم تعديل بيانات العميل فى قاعدة البيانات');
            console.log(response);
            _this.router.navigate(['/clients']);
        }, function (error) { return console.log(error); });
    };
    EditClientComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-client',
            template: __webpack_require__(/*! ./edit-client.component.html */ "./src/app/edit-client/edit-client.component.html"),
            styles: [__webpack_require__(/*! ./edit-client.component.scss */ "./src/app/edit-client/edit-client.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_area_service__WEBPACK_IMPORTED_MODULE_3__["AreaService"],
            _services_edit_service__WEBPACK_IMPORTED_MODULE_4__["EditService"]])
    ], EditClientComponent);
    return EditClientComponent;
}());



/***/ }),

/***/ "./src/app/edit-employee/edit-employee.component.html":
/*!************************************************************!*\
  !*** ./src/app/edit-employee/edit-employee.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"padding addEmployee\">\n  <div class=\"container\" *ngIf=\"employee\">      \n      <form class=\"\" novalidate [formGroup]=\"employeeForm\" (ngSubmit)=\"onSubmit()\">\n          <div class=\"form-group\">\n              <label class=\"col-md-2 text-right\" for=\"usr\">اسم المندوب:</label>\n              <div class=\"col-md-10\">\n                  <input type=\"text\" formControlName=\"name\" class=\"form-control\" required>\n                   <p *ngIf=\"employeeForm.get('name').hasError('required') && employeeForm.get('name').touched\">Last name is required</p>\n              </div>\n          </div>\n          <div class=\"form-group\">\n              <label class=\"col-md-2 text-right\" for=\"usr\">userName :</label>\n              <div class=\"col-md-10\">\n                  <input type=\"text\" formControlName=\"username\" class=\"form-control\" required>\n              </div>\n          </div>\n          <div class=\"form-group\">\n              <label class=\"col-md-2 text-right\" for=\"usr\">الباسور :</label>\n              <div class=\"col-md-10\">\n                  <input type=\"password\" formControlName=\"password\" class=\"form-control\" required>\n              </div>\n          </div>\n          <div class=\"form-group\">\n              <label class=\"col-md-2 text-right\" for=\"usr\">التليفون:</label>\n              <div class=\"col-md-10\">\n                  <input type=\"number\" formControlName=\"phone\" class=\"form-control\">\n              </div>\n          </div>\n          <div class=\"form-group\">\n              <label class=\"col-md-2 text-right\" for=\"usr\">المنطقة:</label>\n              <select formControlName=\"area\" class=\"form-control col-md-10\">\n                  <option *ngFor=\"let area of areas\" value=\"{{area.id}}\">{{area.name}}</option>\n                  \n              </select>\n          </div>\n         \n          <div class=\"form-group\">\n              <label class=\"col-md-2 text-right\" for=\"usr\">مدير المنطقة:</label>\n              <select formControlName=\"moderator\" class=\"form-control col-md-10\">\n                  <option *ngFor=\"let moderator of moderators\" value=\"{{moderator.id}}\">{{moderator.name}}</option>\n\n              </select>\n          </div>\n\n          <div class=\"form-group\">\n            <label class=\"col-md-2 text-right\" for=\"trash\">هل تريد حذف المندوب:</label>\n            <select formControlName=\"trash\" class=\"form-control col-md-10\">\n                <option  value=\"0\">لا</option>\n                <option value=\"1\">نعم</option>\n            </select>\n          </div>\n\n          <div class=\"form-group text-center\">\n              <input type=\"submit\" class=\"text-center btn btn-primary\" name=\"submit\" value=\"حفظ\" />\n          </div>\n      </form>\n</div>\n</section>"

/***/ }),

/***/ "./src/app/edit-employee/edit-employee.component.scss":
/*!************************************************************!*\
  !*** ./src/app/edit-employee/edit-employee.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "row, input, span, p {\n  text-align: right; }\n\ninput {\n  margin-bottom: 25px; }\n"

/***/ }),

/***/ "./src/app/edit-employee/edit-employee.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/edit-employee/edit-employee.component.ts ***!
  \**********************************************************/
/*! exports provided: EditEmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditEmployeeComponent", function() { return EditEmployeeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_area_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/area.service */ "./src/app/services/area.service.ts");
/* harmony import */ var _services_moderator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/moderator.service */ "./src/app/services/moderator.service.ts");
/* harmony import */ var _services_edit_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/edit.service */ "./src/app/services/edit.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EditEmployeeComponent = /** @class */ (function () {
    function EditEmployeeComponent(areaService, fb, moderatorService, route, router, editService) {
        this.areaService = areaService;
        this.fb = fb;
        this.moderatorService = moderatorService;
        this.route = route;
        this.router = router;
        this.editService = editService;
    }
    EditEmployeeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.areaService.getAreas().subscribe(function (areas) { return _this.areas = areas; });
        this.moderatorService.getModerators().subscribe(function (moderators) { return _this.moderators = moderators; });
        this.route.paramMap.subscribe(function (params) {
            _this.id = params.get('id');
            _this.editService.fetchEmployee(_this.id)
                .subscribe(function (employee) {
                console.log(employee);
                _this.employee = employee;
                _this.createForm(_this.employee);
            });
        });
    };
    EditEmployeeComponent.prototype.createForm = function (employee) {
        this.employeeForm = this.fb.group({
            name: employee.name,
            username: employee.username,
            phone: employee.phone,
            password: employee.password,
            area: employee.area,
            moderator: employee.moderator,
            trash: employee.trash
        });
    };
    EditEmployeeComponent.prototype.onSubmit = function () {
        var _this = this;
        var formData = new FormData();
        formData.append('id', this.id);
        formData.append('name', this.employeeForm.get('name').value);
        formData.append('username', this.employeeForm.get('username').value);
        formData.append('phone', this.employeeForm.get('phone').value);
        formData.append('password', this.employeeForm.get('password').value);
        formData.append('area', this.employeeForm.get('area').value);
        formData.append('moderator', this.employeeForm.get('moderator').value);
        formData.append('trash', this.employeeForm.get('trash').value);
        this.editService.updateEmployee(formData).subscribe(function (response) {
            alert('تم تعديل بيانات المندوب');
            console.log(response);
            _this.router.navigate(['/employees']);
        }, function (error) {
            console.log(error);
            alert('خطا فى تعديل البيانات');
        });
    };
    EditEmployeeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-employee',
            template: __webpack_require__(/*! ./edit-employee.component.html */ "./src/app/edit-employee/edit-employee.component.html"),
            styles: [__webpack_require__(/*! ./edit-employee.component.scss */ "./src/app/edit-employee/edit-employee.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_area_service__WEBPACK_IMPORTED_MODULE_3__["AreaService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_moderator_service__WEBPACK_IMPORTED_MODULE_4__["ModeratorService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_edit_service__WEBPACK_IMPORTED_MODULE_5__["EditService"]])
    ], EditEmployeeComponent);
    return EditEmployeeComponent;
}());



/***/ }),

/***/ "./src/app/edit-moderator/edit-moderator.component.html":
/*!**************************************************************!*\
  !*** ./src/app/edit-moderator/edit-moderator.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"padding\">\n  <div class=\"container\" *ngIf=\"moderator\">\n      <form class=\"\" novalidate [formGroup]=\"moderatorForm\"\n       (ngSubmit)=\"onSubmit()\">\n          <div class=\"form-group\">\n              <label class=\"col-md-2 text-right\" for=\"usr\">الاسم:</label>\n              <div class=\"col-md-10\">\n                  <input type=\"text\" formControlName=\"name\" \n                  class=\"form-control\" required>\n                   <p *ngIf=\"moderatorForm.get('name').hasError('required')\n                    && moderatorForm.get('name').touched\">Last name is required</p>\n              </div>\n          </div>\n          <div class=\"form-group\">\n              <label class=\"col-md-2 text-right\" for=\"usr\">userName :</label>\n              <div class=\"col-md-10\">\n                  <input type=\"text\" formControlName=\"username\"\n                   class=\"form-control\" required>\n              </div>\n          </div>\n          <div class=\"form-group\">\n              <label class=\"col-md-2 text-right\" for=\"usr\">الباسور :</label>\n              <div class=\"col-md-10\">\n                  <input type=\"password\" formControlName=\"password\" class=\"form-control\" required>\n              </div>\n          </div>\n          <div class=\"form-group\">\n              <label class=\"col-md-2 text-right\" for=\"usr\">التليفون:</label>\n              <div class=\"col-md-10\">\n                  <input type=\"number\" formControlName=\"phone\" class=\"form-control\">\n              </div>\n          </div>\n          <div class=\"form-group\">\n              <label class=\"col-md-2 text-right\" for=\"usr\">المنطقة:</label>\n              <select formControlName=\"area\" class=\"form-control col-md-10\">\n                  <option *ngFor=\"let area of areas\" value=\"{{area.id}}\">\n                    {{area.name}}</option>\n                  \n              </select>\n          </div>\n         \n          <div class=\"form-group\">\n            <label class=\"col-md-2 text-right\" for=\"trash\">هل تريد حذف مدير المنطقة؟:</label>\n            <select formControlName=\"trash\" class=\"form-control col-md-10\">\n                <option  value=\"0\">لا</option>\n                <option value=\"1\">نعم</option>\n            </select>\n          </div>\n\n          <div class=\"form-group text-center\">\n              <input type=\"submit\" class=\"text-center btn btn-primary\" \n              name=\"submit\" value=\"حفظ\" />\n          </div>\n      </form>\n</div>\n</section>"

/***/ }),

/***/ "./src/app/edit-moderator/edit-moderator.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/edit-moderator/edit-moderator.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "row, input, span, p {\n  text-align: right; }\n\ninput {\n  margin-bottom: 25px; }\n"

/***/ }),

/***/ "./src/app/edit-moderator/edit-moderator.component.ts":
/*!************************************************************!*\
  !*** ./src/app/edit-moderator/edit-moderator.component.ts ***!
  \************************************************************/
/*! exports provided: EditModeratorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditModeratorComponent", function() { return EditModeratorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_area_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/area.service */ "./src/app/services/area.service.ts");
/* harmony import */ var _services_edit_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/edit.service */ "./src/app/services/edit.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditModeratorComponent = /** @class */ (function () {
    function EditModeratorComponent(areaService, fb, route, router, editService) {
        this.areaService = areaService;
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.editService = editService;
    }
    EditModeratorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.areaService.getAreas().subscribe(function (areas) { return _this.areas = areas; });
        this.route.paramMap.subscribe(function (params) {
            _this.id = params.get('id');
            _this.editService.fetchModerator(_this.id)
                .subscribe(function (moderator) {
                console.log(moderator);
                _this.moderator = moderator;
                _this.createForm(_this.moderator);
            });
        });
    };
    EditModeratorComponent.prototype.createForm = function (moderator) {
        this.moderatorForm = this.fb.group({
            name: moderator.name,
            username: moderator.username,
            phone: moderator.phone,
            password: moderator.password,
            area: moderator.area,
            trash: moderator.trash
        });
    };
    EditModeratorComponent.prototype.onSubmit = function () {
        var _this = this;
        var formData = new FormData();
        formData.append('id', this.id);
        formData.append('name', this.moderatorForm.get('name').value);
        formData.append('username', this.moderatorForm.get('username').value);
        formData.append('phone', this.moderatorForm.get('phone').value);
        formData.append('password', this.moderatorForm.get('password').value);
        formData.append('area', this.moderatorForm.get('area').value);
        formData.append('trash', this.moderatorForm.get('trash').value);
        this.editService.updateModerator(formData).subscribe(function (response) {
            alert('تم تعديل بيانات مدير المنطقة');
            console.log(response);
            _this.router.navigate(['/moderators']);
        }, function (error) {
            console.log(error);
            alert('خطا فى تعديل البيانات');
        });
    };
    EditModeratorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-moderator',
            template: __webpack_require__(/*! ./edit-moderator.component.html */ "./src/app/edit-moderator/edit-moderator.component.html"),
            styles: [__webpack_require__(/*! ./edit-moderator.component.scss */ "./src/app/edit-moderator/edit-moderator.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_area_service__WEBPACK_IMPORTED_MODULE_3__["AreaService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_edit_service__WEBPACK_IMPORTED_MODULE_4__["EditService"]])
    ], EditModeratorComponent);
    return EditModeratorComponent;
}());



/***/ }),

/***/ "./src/app/employee-details.pipe.ts":
/*!******************************************!*\
  !*** ./src/app/employee-details.pipe.ts ***!
  \******************************************/
/*! exports provided: EmployeeDetailsPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeDetailsPipe", function() { return EmployeeDetailsPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var EmployeeDetailsPipe = /** @class */ (function () {
    function EmployeeDetailsPipe() {
    }
    EmployeeDetailsPipe.prototype.transform = function (list, filteredText) {
        if (list && list.length) {
            var resultArray = [];
            if (filteredText === undefined) {
                return list;
            }
            for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
                var item = list_1[_i];
                if (item.company.match('^.*' + filteredText + '.*$')) {
                    resultArray.push(item);
                }
            }
            return resultArray;
        }
        else {
            return list;
        }
    };
    EmployeeDetailsPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'employeeDetails'
        })
    ], EmployeeDetailsPipe);
    return EmployeeDetailsPipe;
}());



/***/ }),

/***/ "./src/app/employee-details/employee-details.component.html":
/*!******************************************************************!*\
  !*** ./src/app/employee-details/employee-details.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"padding employeeDetails\">\r\n    <div class=\"container\">\r\n\r\n        <div class=\"row \" *ngIf=\"employee\">\r\n            <div class=\"col-sm-8\">\r\n                <p><strong>الاسم: </strong> {{employee[0].name}}</p>\r\n                <p><strong>التليفون: </strong> {{employee[0].phone}}</p>\r\n                <p><strong>المنطقة: </strong> {{employee[0].area}}</p>\r\n\r\n                <br />\r\n                <input type=\"date\" class=\"form-control col-md-8\"\r\n                [(ngModel)]=\"trackDate\" name=\"trackDate\">\r\n                <button class=\"btn btn-primary\" (click)=\"tracking()\">\r\n                    بحث</button> <br />\r\n                    <a *ngIf=\"trackingLink\" [href]=\"trackingLink\" target=\"_blank\">تحركات المندوب</a>\r\n            </div>\r\n            <div class=\"col-sm-4 text-center\">\r\n                <img class=\"EmpImage mr-auto\" src={{employee[0].image}} />\r\n            </div>\r\n            <div class=\"col-sm-12\" *ngIf=\"employee[1].Comments\">\r\n                    <h2 class=\"text-center\">الزيارات</h2>\r\n                    <div class=\"row search-form\">\r\n                            <p class=\"text-right col-sm-2 col-6\">البحث باسم الشركة: </p>\r\n                            <input type=\"text\" class=\"form-control col-sm-4 col-6\"\r\n                            style=\"width: 300px;\" [(ngModel)]=\"filterText\" />\r\n\r\n                            <label for=\"date\" class=\"col-sm-2 col-6\">بحث بالتاريخ:</label>\r\n                            <input type=\"date\" class=\"form-control col-sm-4 col-6\" [(ngModel)]=\"dateFilter\" />\r\n                        \r\n                    </div>\r\n                <div class=\"table-responsive\">\r\n                    <table class=\"table\">\r\n                        <thead class=\"\">\r\n                            <tr>\r\n                                <th>اسم الشركه</th>\r\n                                <th>التاريخ</th>\r\n                                <th>الوقت</th>\r\n                                <th>التعليق</th>\r\n                                <th>التقييم</th>\r\n                                <th>الموقع</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody *ngIf=\"employee[1].Comments\">\r\n                            <tr class=\"comments\" *ngFor=\"let comment of employee[1].Comments \r\n                            | employeeDetails:filterText | singleDate:dateFilter\">\r\n                                <td>{{comment.company}}</td>\r\n                                <td>{{comment.date}}</td>\r\n                                <td>{{comment.time}}</td>\r\n                                <td>{{comment.comment}}</td>\r\n                                <td>{{comment.rate}}</td>\r\n                                <td>\r\n                                    <a href=\"https://www.google.com/maps?{{comment.lat}},{{comment.lat}}\" target=\"_blank\">الموقع على الخريطه</a>\r\n                                </td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"print text-center\">\r\n                <a style=\"color: #fff !important;\" class=\"print-btn btn btn-primary\"\r\n                title=\"print button\" onclick=\"window.print();\" target=\"_blank\">\r\n                     طباعة \r\n                  </a>\r\n            </div>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "./src/app/employee-details/employee-details.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/employee-details/employee-details.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row {\n  text-align: right; }\n\n.search-form {\n  margin-bottom: 25px; }\n\n.EmpImage {\n  width: 100% !important; }\n"

/***/ }),

/***/ "./src/app/employee-details/employee-details.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/employee-details/employee-details.component.ts ***!
  \****************************************************************/
/*! exports provided: EmployeeDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeDetailsComponent", function() { return EmployeeDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_employee_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/employee.service */ "./src/app/services/employee.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EmployeeDetailsComponent = /** @class */ (function () {
    function EmployeeDetailsComponent(employeeService, route, location) {
        this.employeeService = employeeService;
        this.route = route;
        this.location = location;
        this.filterText = '';
        this.dateFilter = '';
        this.trackDate = new Date();
    }
    EmployeeDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (params) { return _this.employeeService.getEmployee(params['id']); }))
            .subscribe(function (employee) {
            console.log(_this.employee = employee);
            console.log(_this.employee[1].Comments);
        });
        this.route.params.subscribe(function (params) {
            _this.id = params['id'];
            console.log(params);
            console.log(params['id']);
        });
    };
    EmployeeDetailsComponent.prototype.tracking = function () {
        var _this = this;
        var fd = new FormData();
        var date = new Date(this.trackDate);
        var day = date.getDate();
        var month = date.getMonth() + 1;
        var year = date.getFullYear();
        fd.append('id', this.id);
        fd.append('day', day.toString());
        fd.append('month', month.toString());
        fd.append('year', year.toString());
        console.log(day + ' ' + month + ' ' + year);
        this.employeeService.getTrack(fd).subscribe(function (res) {
            _this.trackingLink = res['url'];
            console.log(res['url']);
        });
    };
    EmployeeDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-employee-details',
            template: __webpack_require__(/*! ./employee-details.component.html */ "./src/app/employee-details/employee-details.component.html"),
            styles: [__webpack_require__(/*! ./employee-details.component.scss */ "./src/app/employee-details/employee-details.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_employee_service__WEBPACK_IMPORTED_MODULE_4__["EmployeeService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], EmployeeDetailsComponent);
    return EmployeeDetailsComponent;
}());



/***/ }),

/***/ "./src/app/employees/employees.component.html":
/*!****************************************************!*\
  !*** ./src/app/employees/employees.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"padding employees\">\r\n    <div class=\"container\">\r\n         <div class=\"row\">\r\n            <p class=\"text-right  col-sm-3 col-6\">بحث (بالاسم او رقم التليفون): </p>\r\n            <input type=\"text\" class=\"form-control col-sm-3 col-6\"  style=\"width: 300px;\"\r\n                    [(ngModel)]=\"filterText\" />\r\n        </div>\r\n        <div class=\"row\">\r\n            <button class=\"btn btn-primary\" (click)=\"allEmployees()\">الكل</button>\r\n            <button class=\"btn btn-danger\" (click)=\"onTrash()\">المحذوفين</button>\r\n        </div>\r\n        <div class=\"table-responsive\">\r\n            <table class=\"table\">\r\n                <thead class=\"\">\r\n                    <tr>\r\n                        <th>الموظفين </th>\r\n                        <th>تليفون</th>\r\n                        <th>منطقه</th>\r\n                        <th>التفاصيل</th>\r\n                        <th>اعدادات</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let employee of employees | filter:filterText\"\r\n                        >\r\n                        <td>{{employee.name}}</td>\r\n                        <td>{{employee.phone}}</td>\r\n                        <td>{{employee.area}}</td>\r\n                        <td>\r\n                            <button class=\"btn btn-info\" \r\n                            [routerLink]=\"['/employeedetails', employee.id]\"\r\n                            (click)=\"onSelect(employee)\">عرض التقرير</button>\r\n                        </td>\r\n                        <td>\r\n                            <button class=\"btn btn-danger\"  \r\n                            (click)=\"onDelete(employee.id)\">DELETE</button>\r\n                            <button class=\"btn btn-primary\" \r\n                            [routerLink]=\"['/editEmployee', employee.id]\">EDIT</button>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n        <div class=\"print text-center\">\r\n                <a style=\"color: #fff !important;\" class=\"print-btn btn btn-primary\"\r\n                title=\"print button\" onclick=\"window.print();\" target=\"_blank\">\r\n                     طباعة \r\n                  </a>\r\n            </div>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "./src/app/employees/employees.component.scss":
/*!****************************************************!*\
  !*** ./src/app/employees/employees.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table td {\n  text-align: right; }\n\ninput {\n  float: right;\n  margin-bottom: 20px; }\n\n.btn-primary {\n  margin-right: 18px; }\n"

/***/ }),

/***/ "./src/app/employees/employees.component.ts":
/*!**************************************************!*\
  !*** ./src/app/employees/employees.component.ts ***!
  \**************************************************/
/*! exports provided: EmployeesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeesComponent", function() { return EmployeesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_employee_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/employee.service */ "./src/app/services/employee.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EmployeesComponent = /** @class */ (function () {
    function EmployeesComponent(employeeService) {
        this.employeeService = employeeService;
        this.filterText = '';
    }
    EmployeesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.employeeService.getEmployees().subscribe(function (employees) { return _this.employees = employees; });
    };
    EmployeesComponent.prototype.onSelect = function (employee) {
        this.selectedEmployee = employee;
    };
    EmployeesComponent.prototype.onDelete = function (id) {
        if (confirm('هل تريد الحذف نهائى؟ ')) {
            this.employees = this.employees.filter(function (employee) { return employee.id !== id; });
            this.employeeService.deleteEmployee(id).subscribe(function (response) {
                console.log(response);
            }, function (error) { return console.log(error); });
        }
    };
    EmployeesComponent.prototype.onTrash = function () {
        var _this = this;
        this.employeeService.getTrashEmployees().subscribe(function (employees) { return _this.employees = employees; });
    };
    EmployeesComponent.prototype.allEmployees = function () {
        var _this = this;
        this.employeeService.getEmployees().subscribe(function (employees) { return _this.employees = employees; });
    };
    EmployeesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-employees',
            template: __webpack_require__(/*! ./employees.component.html */ "./src/app/employees/employees.component.html"),
            styles: [__webpack_require__(/*! ./employees.component.scss */ "./src/app/employees/employees.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_employee_service__WEBPACK_IMPORTED_MODULE_1__["EmployeeService"]])
    ], EmployeesComponent);
    return EmployeesComponent;
}());



/***/ }),

/***/ "./src/app/filter.pipe.ts":
/*!********************************!*\
  !*** ./src/app/filter.pipe.ts ***!
  \********************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (list, filterText) {
        if (list && list.length) {
            var resultArray = [];
            if (filterText === undefined) {
                return list;
            }
            for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
                var item = list_1[_i];
                if (item.name.match('^.*' + filterText + '.*$')) {
                    resultArray.push(item);
                }
                else if (item.phone.match('^.*' + filterText + '.*$')) {
                    resultArray.push(item);
                }
            }
            return resultArray;
        }
        else {
            return list;
        }
    };
    FilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'filter',
            pure: false
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md bg-dark navbar-dark\">\r\n        <!-- Brand -->\r\n        <a class=\"navbar-brand\" href=\"#\">\r\n            <img src=\"../../mandobi/assets/images/logo.png\" alt=\"logo\" class=\"img-fluid\">\r\n        </a>\r\n      \r\n        <!-- Toggler/collapsibe Button -->\r\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsibleNavbar\">\r\n          <span class=\"navbar-toggler-icon\"></span>\r\n        </button>\r\n      \r\n        <!-- Navbar links -->\r\n        <div class=\"collapse navbar-collapse\" id=\"collapsibleNavbar\">\r\n                <ul class=\"navbar-nav\">\r\n                    <li class=\"nav-item text-right\">\r\n                        <a class=\"nav-link\" routerLink=\"/home\" routerLinkActive=\"active\">الرئيسية</a>\r\n                    </li>\r\n                    <li class=\"nav-item text-right\">\r\n                        <a class=\"nav-link\" routerLink=\"/clients\" routerLinkActive=\"active\">العملاء</a>\r\n                    </li>\r\n                    <li class=\"nav-item text-right\">\r\n                        <a class=\"nav-link\" routerLink=\"/employees\" routerLinkActive=\"active\">المندوبين</a>\r\n                    </li>\r\n                    <li class=\"nav-item text-right\">\r\n                        <a class=\"nav-link\" routerLink=\"/visits\" routerLinkActive=\"active\">الزيارات </a>\r\n                    </li>\r\n                    <li class=\"nav-item text-right\">\r\n                        <a class=\"nav-link\" routerLink=\"/moderators\" routerLinkActive=\"active\">المشرفين </a>\r\n                    </li>\r\n                    <li class=\"nav-item text-right\">\r\n                        <a class=\"nav-link\" routerLink=\"/areas\" routerLinkActive=\"active\">المناطق</a>\r\n                    </li>\r\n                    <li class=\"nav-item text-right\">\r\n                        <a class=\"nav-link\" routerLink=\"/products\" routerLinkActive=\"active\">المنتجات </a>\r\n                    </li>\r\n                    <li class=\"nav-item text-right\">\r\n                        <a class=\"nav-link\" routerLink=\"/addClient\" routerLinkActive=\"active\">اضافة عميل</a>\r\n                    </li>\r\n                    <li class=\"nav-item text-right\">\r\n                        <a class=\"nav-link\" routerLink=\"/addEmployee\" routerLinkActive=\"active\">اضافة مندوب</a>\r\n                    </li>\r\n                    <li class=\"nav-item text-right\">\r\n                        <a class=\"nav-link\" routerLink=\"/addModerator\" routerLinkActive=\"active\">اضافة مدير</a>\r\n                    </li>\r\n                    <li class=\"nav-item text-right\">\r\n                        <a class=\"nav-link\" routerLink=\"/addProduct\" routerLinkActive=\"active\">اضافة منتج </a>\r\n                    </li>\r\n                    \r\n                </ul>\r\n        </div> \r\n      </nav>\r\n      "

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".active {\n  background-color: #fff;\n  border-radius: 6px;\n  color: #000; }\n\n.navbar {\n  background-color: #0e2947 !important; }\n\n.navbar li a {\n    color: #36c6d3;\n    margin-left: 10px; }\n\n.navbar li a.active {\n    background-color: #36c6d3;\n    color: #fff; }\n\n.navbar .navbar-brand img {\n    max-width: 150px !important; }\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a routerLink=\"/login\"> login </a>\r\n<a routerLink=\"/logout\"> logout </a>\r\n\r\n<section class=\"home\">\r\n    <div class=\"container\">\r\n        <div class=\"row padding\">\r\n            <div class=\"col-sm-4\">\r\n                <div class=\"item text-center\" routerLink=\"/clients\">\r\n                    <h3 class=\"title\">عدد العملاء</h3>\r\n                    <p class=\"num\">{{this.clientsNum}} </p>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-4\">\r\n                <div class=\"item text-center\" routerLink=\"/employees\">\r\n                    <h3 class=\"title\">عدد المندوبين</h3>\r\n                    <p class=\"num\">{{employeesNum}} </p>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-4\">\r\n                <div class=\"item text-center\" routerLink=\"/visits\">\r\n                    <h3 class=\"title\">عدد الزيارات </h3>\r\n                    <p class=\"num\"> {{visitsNum}} </p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <app-visits></app-visits>\r\n        </div>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".item {\n  padding: 10px 20px;\n  box-shadow: 2px 2px 2px rgba(48, 48, 48, 0.2); }\n  .item .title {\n    color: #AAB5BC; }\n  .item .num {\n    color: #5C9BD1 !important;\n    font-size: 36px; }\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_statistics_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/statistics.service */ "./src/app/services/statistics.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(stats) {
        this.stats = stats;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.stats.getClientsNum().subscribe(function (clients) { return _this.clientsNum = clients; });
        this.stats.getEmployeesNum().subscribe(function (employees) { return _this.employeesNum = employees; });
        this.stats.getVisitsNum().subscribe(function (visits) { return _this.visitsNum = visits; });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_statistics_service__WEBPACK_IMPORTED_MODULE_1__["StatisticsService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"login col-md-8 col-md-offset-2\">\n        <section class=\"padding\">\n            <form  (ngSubmit)=\"loginUser($event)\">\n              <div class=\"form-group\">\n                <label for=\"username\" class=\"col-md-4\">اسم المستخدم:</label>\n                <input type=\"text\" class=\"form-control col-md-8\"\n                name=\"username\" id=\"username\">\n              </div>\n              <div class=\"form-group\">\n                <label for=\"pwd\" class=\"col-md-4\">الباسورد:</label>\n                <input type=\"password\" class=\"form-control col-md-8\" \n                name=\"password\" id=\"password\">\n              </div>\n              <div class=\"form-group\">\n                  <label for=\"role\" class=\"col-md-4\">المسئول:</label>\n                  <select class=\"form-control col-md-8\" id=\"role\">\n                    <option value=\"admin\">ادمن</option>\n                    <option value=\"moderator\">مدير منطقة</option>\n                  </select>\n                </div>\n              <input type=\"submit\" name=\"submit\" \n              class=\"btn btn-primary\" value=\"دخول\">\n            </form>\n          </section>\n    </div>\n  </div>\n  </div>"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login {\n  background-color: #ffffff;\n  margin-top: 50px; }\n\nrow, input, span, p, form label {\n  text-align: right; }\n\ninput {\n  margin-bottom: 25px; }\n\n.btn {\n  text-align: center;\n  display: block !important;\n  margin: 0 auto; }\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
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



var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        console.log(this.authService.isLoggedIn);
        if (this.authService.isLoggedIn === true) {
            this.router.navigate(['home']);
        }
    };
    LoginComponent.prototype.loginUser = function (event) {
        var _this = this;
        event.preventDefault();
        var target = event.target;
        var username = target.querySelector('#username').value;
        var pass = target.querySelector('#password').value;
        var role = target.querySelector('#role').value;
        var fd = new FormData();
        fd.append('username', username);
        fd.append('password', pass);
        fd.append('role', role);
        this.authService.getUserDetails(fd).subscribe(function (data) {
            if (data.success) {
                // redirect to home page
                alert(data.message);
                _this.authService.setLoggedIn(true);
                _this.router.navigate(['home']);
            }
            else {
                // alert message and stay in the page
                _this.authService.setLoggedIn(false);
                alert(data.message);
            }
        });
        console.log(username + ' ' + pass + ' ' + role);
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/logout/logout.component.html":
/*!**********************************************!*\
  !*** ./src/app/logout/logout.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  logout works!\n</p>\n"

/***/ }),

/***/ "./src/app/logout/logout.component.scss":
/*!**********************************************!*\
  !*** ./src/app/logout/logout.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/logout/logout.component.ts":
/*!********************************************!*\
  !*** ./src/app/logout/logout.component.ts ***!
  \********************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
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



var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    LogoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.logOut().subscribe(function (data) {
            if (data.success) {
                _this.authService.setLoggedIn(false);
                _this.router.navigate(['login']);
            }
            else {
                window.alert('يوجد مشكلة فى تسجيل الخروج');
            }
        });
    };
    LogoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-logout',
            template: __webpack_require__(/*! ./logout.component.html */ "./src/app/logout/logout.component.html"),
            styles: [__webpack_require__(/*! ./logout.component.scss */ "./src/app/logout/logout.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/moderators/moderators.component.html":
/*!******************************************************!*\
  !*** ./src/app/moderators/moderators.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"padding moderators\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <button class=\"btn btn-primary\" (click)=\"allModerators()\">الكل</button>\r\n            <button class=\"btn btn-danger\" (click)=\"onTrash()\">المحذوفين</button>\r\n        </div>\r\n         <table class=\"table text-right\">\r\n        <thead class=\"\">\r\n            <tr>\r\n                <th>الموظفين </th>\r\n                <th>تليفون</th>\r\n                <th>منطقه</th>\r\n                <th>اعدادات</th>\r\n            </tr>     \r\n        </thead>\r\n        <tbody>\r\n            <tr *ngFor=\"let mod of moderators\">\r\n                <td>{{mod.name}}</td>\r\n                <td>{{mod.phone}}</td>\r\n                <td>{{mod.area}}</td>\r\n                <td>\r\n                    <button class=\"btn btn-danger\"  \r\n                    (click)=\"onDelete(mod.id)\">DELETE</button>\r\n                    <button class=\"btn btn-primary\"\r\n                     [routerLink]=\"['/editModerator', mod.id]\">\r\n                        EDIT</button>\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n\r\n        <div class=\"print text-center\">\r\n            <a style=\"color: #fff !important;\" class=\"print-btn btn btn-primary\"\r\n            title=\"print button\" onclick=\"window.print();\" target=\"_blank\">\r\n                 طباعة \r\n              </a>\r\n        </div>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "./src/app/moderators/moderators.component.scss":
/*!******************************************************!*\
  !*** ./src/app/moderators/moderators.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-primary {\n  margin-right: 18px; }\n"

/***/ }),

/***/ "./src/app/moderators/moderators.component.ts":
/*!****************************************************!*\
  !*** ./src/app/moderators/moderators.component.ts ***!
  \****************************************************/
/*! exports provided: ModeratorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModeratorsComponent", function() { return ModeratorsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_moderator_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/moderator.service */ "./src/app/services/moderator.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModeratorsComponent = /** @class */ (function () {
    function ModeratorsComponent(moderatorService) {
        this.moderatorService = moderatorService;
    }
    ModeratorsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.moderatorService.getModerators().subscribe(function (moderators) { return console.log(_this.moderators = moderators); });
    };
    ModeratorsComponent.prototype.onDelete = function (id) {
        if (confirm('هل تريد الحذف نهائى؟ ')) {
            this.moderators = this.moderators.filter(function (moderator) { return moderator.id !== id; });
            this.moderatorService.deleteModerator(id).subscribe(function (response) {
                console.log(response);
                // this.router.navigate(['/employees']);
            }, function (error) { return console.log(error); });
        }
    };
    ModeratorsComponent.prototype.onTrash = function () {
        var _this = this;
        this.moderatorService.getTrashModerators().subscribe(function (moderators) { return _this.moderators = moderators; });
    };
    ModeratorsComponent.prototype.allModerators = function () {
        var _this = this;
        this.moderatorService.getModerators().subscribe(function (moderators) { return _this.moderators = moderators; });
    };
    ModeratorsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-moderators',
            template: __webpack_require__(/*! ./moderators.component.html */ "./src/app/moderators/moderators.component.html"),
            styles: [__webpack_require__(/*! ./moderators.component.scss */ "./src/app/moderators/moderators.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_moderator_service__WEBPACK_IMPORTED_MODULE_1__["ModeratorService"]])
    ], ModeratorsComponent);
    return ModeratorsComponent;
}());



/***/ }),

/***/ "./src/app/products/products.component.html":
/*!**************************************************!*\
  !*** ./src/app/products/products.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container padding\">\n    <div class=\"row\">\n        <div *ngFor=\"let product of products\" class=\"col-sm-4 padding-cl\">\n            <img style=\"width: 100%; height: 250px !important;\" src={{product.url}} >\n            <div class=\"content\">\n                <p><strong>السعر:</strong> {{product.price}} L.E</p>\n                <p><strong>الوصف:</strong> {{product.desc}}</p>\n                <div class=\"controls text-center\">\n                    <button class=\"btn btn-danger\" (click)=\"onDelete(product.id)\">\n                        Delete</button>\n                </div>\n            </div>\n        </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/products/products.component.scss":
/*!**************************************************!*\
  !*** ./src/app/products/products.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "row, input, span, p {\n  text-align: right; }\n\ninput {\n  margin-bottom: 25px; }\n\n.padding-cl {\n  margin-bottom: 25px; }\n\n.padding-cl .content {\n  padding: 20px !important;\n  background-color: #ffffff;\n  font-size: 20px; }\n"

/***/ }),

/***/ "./src/app/products/products.component.ts":
/*!************************************************!*\
  !*** ./src/app/products/products.component.ts ***!
  \************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/products.service */ "./src/app/services/products.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(productService) {
        this.productService = productService;
    }
    ProductsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.getProducts().subscribe(function (products) { return console.log(_this.products = products); });
    };
    ProductsComponent.prototype.onDelete = function (id) {
        console.log(id);
        if (confirm('هل تريد الحذف نهائى؟ ')) {
            this.products = this.products.filter(function (product) { return product.id !== id; });
            this.productService.deleteProduct(id).subscribe(function (response) {
                console.log(response);
            }, function (error) { return console.log(error); });
        }
    };
    ProductsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-products',
            template: __webpack_require__(/*! ./products.component.html */ "./src/app/products/products.component.html"),
            styles: [__webpack_require__(/*! ./products.component.scss */ "./src/app/products/products.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"]])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/services/area.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/area.service.ts ***!
  \******************************************/
/*! exports provided: AreaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaService", function() { return AreaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var AreaService = /** @class */ (function () {
    function AreaService(http) {
        this.http = http;
        this.url = 'http://uac-animal.com/emp_Manage/ds-getAreas.php';
        this.deleteAreaUrl = 'http://uac-animal.com/emp_Manage/ds-deleteArea.php';
        this.addAreaUrl = 'http://uac-animal.com/emp_Manage/ds-addArea.php';
    }
    AreaService.prototype.getAreas = function () {
        return this.http.get(this.url);
        // return of(AREAS).pipe(delay(2000));
    };
    AreaService.prototype.saveArea = function (area) {
        return this.http.post(this.addAreaUrl, area);
    };
    AreaService.prototype.deleteArea = function (id) {
        return this.http.post(this.deleteAreaUrl, id);
    };
    AreaService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AreaService);
    return AreaService;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.adminInfoUrl = 'http://uac-animal.com/emp_Manage/ds-adminLogin.php';
        this.adminLogout = 'http://uac-animal.com/emp_Manage/ds-adminlogout.php';
        this.loggedInStatus = JSON.parse(localStorage.getItem('loggedIn') || 'false');
    }
    AuthService.prototype.getUserDetails = function (fd) {
        // post this details to HTTP api Server
        return this.http.post(this.adminInfoUrl, fd);
    };
    AuthService.prototype.setLoggedIn = function (value) {
        this.loggedInStatus = value;
        localStorage.setItem('loggedIn', value);
    };
    AuthService.prototype.logOut = function () {
        return this.http.get(this.adminLogout);
    };
    Object.defineProperty(AuthService.prototype, "isLoggedIn", {
        get: function () {
            return JSON.parse(localStorage.getItem('loggedIn')
                || this.loggedInStatus);
        },
        enumerable: true,
        configurable: true
    });
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/client.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/client.service.ts ***!
  \********************************************/
/*! exports provided: ClientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientService", function() { return ClientService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ClientService = /** @class */ (function () {
    function ClientService(http) {
        this.http = http;
        this.clientsUrl = 'http://uac-animal.com/emp_Manage/ds-getClients.php';
        this.clientUrl = 'http://uac-animal.com/emp_Manage/ds-clientDetails.php';
        this.addClientUrl = 'http://uac-animal.com/emp_Manage/ds-addClientAPI.php';
        this.deleteClientUrl = 'http://uac-animal.com/emp_Manage/ds-deleteClient.php';
        this.trashUrl = 'http://uac-animal.com/emp_Manage/ds-trashClients.php';
    }
    ClientService.prototype.getClients = function () {
        return this.http.get(this.clientsUrl);
    };
    ClientService.prototype.getTrashClients = function () {
        return this.http.get(this.trashUrl);
    };
    ClientService.prototype.getClient = function (id) {
        return this.http.get(this.clientUrl, { params: { company_id: id } });
    };
    ClientService.prototype.addClient = function (formData) {
        return this.http.post(this.addClientUrl, formData);
    };
    ClientService.prototype.deleteClient = function (id) {
        return this.http.post(this.deleteClientUrl, id);
    };
    ClientService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ClientService);
    return ClientService;
}());



/***/ }),

/***/ "./src/app/services/edit.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/edit.service.ts ***!
  \******************************************/
/*! exports provided: EditService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditService", function() { return EditService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EditService = /** @class */ (function () {
    function EditService(http) {
        this.http = http;
        this.fetchCompanyUrl = 'http://uac-animal.com/emp_Manage/ds-fetchCompanyInfo.php';
        this.updateCompanyUrl = 'http://uac-animal.com/emp_Manage/ds-updateClient.php';
        this.fetchEmployeeUrl = 'http://uac-animal.com/emp_Manage/ds-fetchEmployee.php';
        this.updateEmployeeUrl = 'http://uac-animal.com/emp_Manage/ds-updateEmployee.php';
        this.fetchModeratorUrl = 'http://uac-animal.com/emp_Manage/ds-fetchModerator.php';
        this.updateModeratorUrl = 'http://uac-animal.com/emp_Manage/ds-updateModerator.php';
        this.fetchAreaUrl = 'http://uac-animal.com/emp_Manage/ds-fetchArea.php';
        this.updateAreaUrl = 'http://uac-animal.com/emp_Manage/ds-updateArea.php';
    }
    EditService.prototype.fetchClient = function (id) {
        return this.http.get(this.fetchCompanyUrl, { params: { company_id: id } });
    };
    EditService.prototype.fetchEmployee = function (id) {
        return this.http.get(this.fetchEmployeeUrl, { params: { emp_id: id } });
    };
    EditService.prototype.fetchModerator = function (id) {
        return this.http.get(this.fetchModeratorUrl, { params: { mod_id: id } });
    };
    EditService.prototype.fetchArea = function (id) {
        return this.http.get(this.fetchAreaUrl, { params: { area_id: id } });
    };
    EditService.prototype.updateClient = function (formData) {
        return this.http.post(this.updateCompanyUrl, formData);
    };
    EditService.prototype.updateEmployee = function (formData) {
        return this.http.post(this.updateEmployeeUrl, formData);
    };
    EditService.prototype.updateModerator = function (formData) {
        return this.http.post(this.updateModeratorUrl, formData);
    };
    EditService.prototype.updateArea = function (formData) {
        return this.http.post(this.updateAreaUrl, formData);
    };
    EditService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], EditService);
    return EditService;
}());



/***/ }),

/***/ "./src/app/services/employee.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/employee.service.ts ***!
  \**********************************************/
/*! exports provided: EmployeeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeService", function() { return EmployeeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var EmployeeService = /** @class */ (function () {
    function EmployeeService(http) {
        this.http = http;
        this.employeesUrl = 'http://uac-animal.com/emp_Manage/ds-getEmployees.php';
        this.employeeUrl = 'http://uac-animal.com/emp_Manage/ds-employeeDetails.php';
        this.addEmployeeUrl = 'http://uac-animal.com/emp_Manage/ds-addEmployee.php';
        this.deleteEmployeeUrl = 'http://uac-animal.com/emp_Manage/ds-deleteEmployee.php';
        this.trashUrl = 'http://uac-animal.com/emp_Manage/ds-trashEmployees.php';
        this.trackUrl = 'http://uac-animal.com/emp_Manage/funapi.php';
    }
    EmployeeService.prototype.getEmployees = function () {
        return this.http.get(this.employeesUrl);
    };
    EmployeeService.prototype.getTrashEmployees = function () {
        return this.http.get(this.trashUrl);
    };
    EmployeeService.prototype.getEmployee = function (id) {
        return this.http.get(this.employeeUrl, { params: { emp_id: id } });
    };
    EmployeeService.prototype.getTrack = function (formData) {
        return this.http.post(this.trackUrl, formData);
    };
    EmployeeService.prototype.saveEmployee = function (employee) {
        return this.http.post(this.addEmployeeUrl, employee, httpOptions);
    };
    EmployeeService.prototype.addEmployee = function (employee) {
        return this.http.post(this.addEmployeeUrl, employee);
    };
    EmployeeService.prototype.deleteEmployee = function (id) {
        return this.http.post(this.deleteEmployeeUrl, id);
    };
    EmployeeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], EmployeeService);
    return EmployeeService;
}());



/***/ }),

/***/ "./src/app/services/moderator.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/moderator.service.ts ***!
  \***********************************************/
/*! exports provided: ModeratorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModeratorService", function() { return ModeratorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModeratorService = /** @class */ (function () {
    function ModeratorService(http) {
        this.http = http;
        this.url = 'http://uac-animal.com/emp_Manage/ds-getModerators.php';
        this.addModeratorURL = 'http://uac-animal.com/emp_Manage/ds-addModerator.php';
        this.deleteModeratorURL = 'http://uac-animal.com/emp_Manage/ds-deleteModerator.php';
        this.trashUrl = 'http://uac-animal.com/emp_Manage/ds-trashModerators.php';
    }
    ModeratorService.prototype.getModerators = function () {
        return this.http.get(this.url);
    };
    ModeratorService.prototype.getTrashModerators = function () {
        return this.http.get(this.trashUrl);
    };
    ModeratorService.prototype.addModerator = function (moderator) {
        return this.http.post(this.addModeratorURL, moderator);
    };
    ModeratorService.prototype.deleteModerator = function (id) {
        return this.http.post(this.deleteModeratorURL, id);
    };
    ModeratorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ModeratorService);
    return ModeratorService;
}());



/***/ }),

/***/ "./src/app/services/products.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/products.service.ts ***!
  \**********************************************/
/*! exports provided: ProductsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsService", function() { return ProductsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductsService = /** @class */ (function () {
    function ProductsService(http) {
        this.http = http;
        this.addProductUrl = 'http://uac-animal.com/emp_Manage/ds-addProduct.php';
        this.productsUrl = 'http://uac-animal.com/emp_Manage/ds-products.php';
        this.deleteProductUrl = 'http://uac-animal.com/emp_Manage/ds-deleteProduct.php';
    }
    ProductsService.prototype.uploadproduct = function (product) {
        return this.http.post(this.addProductUrl, product);
    };
    ProductsService.prototype.getProducts = function () {
        return this.http.get(this.productsUrl);
    };
    ProductsService.prototype.deleteProduct = function (id) {
        return this.http.post(this.deleteProductUrl, id);
    };
    ProductsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ProductsService);
    return ProductsService;
}());



/***/ }),

/***/ "./src/app/services/statistics.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/statistics.service.ts ***!
  \************************************************/
/*! exports provided: StatisticsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticsService", function() { return StatisticsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StatisticsService = /** @class */ (function () {
    function StatisticsService(http) {
        this.http = http;
        this.clientsNumURL = 'http://uac-animal.com/emp_Manage/ds-clientsNum.php';
        this.employeesNumURL = 'http://uac-animal.com/emp_Manage/ds-employeesNum.php';
        this.visitsNumURL = 'http://uac-animal.com/emp_Manage/ds-visitsNum.php';
    }
    StatisticsService.prototype.getClientsNum = function () {
        return this.http.get(this.clientsNumURL);
    };
    StatisticsService.prototype.getEmployeesNum = function () {
        return this.http.get(this.employeesNumURL);
    };
    StatisticsService.prototype.getVisitsNum = function () {
        return this.http.get(this.visitsNumURL);
    };
    StatisticsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], StatisticsService);
    return StatisticsService;
}());



/***/ }),

/***/ "./src/app/services/visits.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/visits.service.ts ***!
  \********************************************/
/*! exports provided: VisitsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitsService", function() { return VisitsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VisitsService = /** @class */ (function () {
    function VisitsService(http) {
        this.http = http;
        this.URL = 'http://uac-animal.com/emp_Manage/ds-visits.php';
        this.deleteVisitURL = 'http://uac-animal.com/emp_Manage/ds-deleteVisit.php';
    }
    VisitsService.prototype.getVisits = function () {
        return this.http.get(this.URL);
    };
    VisitsService.prototype.deleteVisit = function (id) {
        return this.http.post(this.deleteVisitURL, id);
    };
    VisitsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], VisitsService);
    return VisitsService;
}());



/***/ }),

/***/ "./src/app/single-date.pipe.ts":
/*!*************************************!*\
  !*** ./src/app/single-date.pipe.ts ***!
  \*************************************/
/*! exports provided: SingleDatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleDatePipe", function() { return SingleDatePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SingleDatePipe = /** @class */ (function () {
    function SingleDatePipe() {
    }
    SingleDatePipe.prototype.transform = function (list, dateFilter) {
        if (list && list.length) {
            var resultArray = [];
            if (dateFilter === '') {
                return list;
            }
            else {
                for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
                    var item = list_1[_i];
                    if (item.date.match(dateFilter)) {
                        resultArray.push(item);
                    }
                }
                return resultArray;
            }
        }
        else {
            return list;
        }
    };
    SingleDatePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'singleDate'
        })
    ], SingleDatePipe);
    return SingleDatePipe;
}());



/***/ }),

/***/ "./src/app/visits.pipe.ts":
/*!********************************!*\
  !*** ./src/app/visits.pipe.ts ***!
  \********************************/
/*! exports provided: VisitsPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitsPipe", function() { return VisitsPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var VisitsPipe = /** @class */ (function () {
    function VisitsPipe() {
    }
    VisitsPipe.prototype.transform = function (list, filteredText) {
        if (list && list.length) {
            var resultArray = [];
            if (filteredText === undefined) {
                return list;
            }
            for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
                var item = list_1[_i];
                if (item.companyname.match('^.*' + filteredText + '.*$')) {
                    resultArray.push(item);
                }
                else if (item.employee.match('^.*' + filteredText + '.*$')) {
                    resultArray.push(item);
                }
            }
            return resultArray;
        }
        else {
            return list;
        }
    };
    VisitsPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'visits'
        })
    ], VisitsPipe);
    return VisitsPipe;
}());



/***/ }),

/***/ "./src/app/visits/visits.component.html":
/*!**********************************************!*\
  !*** ./src/app/visits/visits.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"padding clients\">\n  <div class=\"container\">\n      <h1 class=\"text-center\" style=\"padding-bottom: 20px;\">جدول الزيارات</h1>\n      <div class=\"row inputSec\">\n          <p class=\"text-right col-sm-3 col-6\">بحث (بالاسم او رقم التليفون): </p>\n          <input type=\"text\" class=\"form-control col-sm-3 col-6\"\n                 [(ngModel)]=\"filteredText\" />\n          <label for=\"date\" class=\"col-sm-1 col-3\">بدا :</label>\n          <input type=\"date\" class=\"form-control col-sm-2 col-3\" \n          [(ngModel)]=\"start\" />\n          <label for=\"date\" class=\"col-sm-1 col-3\">انتهاء :</label>\n          <input type=\"date\" class=\"form-control col-sm-2 col-3\" \n          [(ngModel)]=\"end\" />\n      </div>\n      \n        <div class=\"row table-responsive\">\n            <table class=\"table\">\n                <thead class=\"\">\n                    <tr>\n                        <th>اسم الشركة</th>\n                        <th>المندوب</th>\n                        <th>التاريخ</th>\n                        <th>الوقت</th>\n                        <th>التعليق</th>\n                        <th>التقييم</th>\n                        <th>صفحة بيانات الشركة</th>\n                        <th>حذف</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let visit of visits | visits: filteredText | date:start:end\" >\n                        <td>{{visit.companyname}}</td>\n                        <td>{{visit.employee}}</td>\n                        <td>{{visit.date}}</td>\n                        <td>{{visit.time}}</td>\n                        <td>{{visit.comment}}</td>\n                        <td>{{visit.rate}}</td>\n                        <td>\n                            <button class=\"btn btn-info\" \n                            [routerLink]=\"['/clientdetails', visit.companyId]\"\n                            >صفحة الشركة</button>\n                        </td>\n                        <td>\n                            <button class=\"btn btn-danger\"  \n                            (click)=\"onDelete(visit.id)\">DELETE</button>    \n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n\n      <div class=\"print text-center\">\n          <a style=\"color: #fff !important;\" class=\"print-btn btn btn-primary\"\n          title=\"print button\" onclick=\"window.print();\" target=\"_blank\">\n               طباعة \n            </a>\n      </div>\n    </div>\n</section>"

/***/ }),

/***/ "./src/app/visits/visits.component.scss":
/*!**********************************************!*\
  !*** ./src/app/visits/visits.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table td {\n  text-align: right; }\n\n.inputSec {\n  margin-bottom: 20px; }\n"

/***/ }),

/***/ "./src/app/visits/visits.component.ts":
/*!********************************************!*\
  !*** ./src/app/visits/visits.component.ts ***!
  \********************************************/
/*! exports provided: VisitsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitsComponent", function() { return VisitsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_visits_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/visits.service */ "./src/app/services/visits.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VisitsComponent = /** @class */ (function () {
    function VisitsComponent(visitService) {
        this.visitService = visitService;
        this.today = new Date().toISOString().split('T')[0];
        this.start = '';
        this.end = '';
    }
    VisitsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.visitService.getVisits().subscribe(function (visits) { return console.log(_this.visits = visits); });
        console.log(this.today);
    };
    VisitsComponent.prototype.onDelete = function (id) {
        if (confirm('هل تريد الحذف نهائى؟ ')) {
            this.visits = this.visits.filter(function (visit) { return visit.id !== id; });
            this.visitService.deleteVisit(id).subscribe(function (response) {
                console.log(response);
            }, function (error) { return console.log(error); });
        }
    };
    VisitsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-visits',
            template: __webpack_require__(/*! ./visits.component.html */ "./src/app/visits/visits.component.html"),
            styles: [__webpack_require__(/*! ./visits.component.scss */ "./src/app/visits/visits.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_visits_service__WEBPACK_IMPORTED_MODULE_1__["VisitsService"]])
    ], VisitsComponent);
    return VisitsComponent;
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Electronica\desktop\mandobi\mandobi\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map