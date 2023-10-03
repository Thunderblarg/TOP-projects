"use strict";
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["main"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _toDoList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDoList */ "./src/toDoList.js");


document.addEventListener('DOMContentLoaded', function (){
    let createdDate = new Date();
    let newDueDate = new Date(createdDate);
    newDueDate.setDate(newDueDate.getDate + 1);

    let thisIsAList = (0,_toDoList__WEBPACK_IMPORTED_MODULE_0__["default"])();

    thisIsAList.newToDo("get into garage",
                        "walk your stupid ass into the garage",
                        createdDate,
                        newDueDate,
                        "High");


    // let newNote = new toDoItem("get into garage",
    //                            "walk your stupid ass into the garage",
    //                            createdDate,
    //                            newDueDate,
    //                            "High");
    
    console.log(thisIsAList.allToDos()[0].title);   
});

console.log("Hello wrrld");

/***/ }),

/***/ "./src/toDoItem.js":
/*!*************************!*\
  !*** ./src/toDoItem.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(newTitle, newDescription, newCreatedDate, newDueDate, newPriority){
    return {
        title: newTitle,
        description : newDescription,
        createdDate : newCreatedDate,
        dueDate : newDueDate,
        priority : newPriority
    }
}

/***/ }),

/***/ "./src/toDoList.js":
/*!*************************!*\
  !*** ./src/toDoList.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _toDoItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDoItem */ "./src/toDoItem.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {

    let toDoList = [];
    let newToDo = function(newTitle,
                           newDescription,
                           newCreatedDate, 
                           newDueDate, 
                           newPriority){
        
        newDate = new Date();
        dueDate = newDueDate;        


        debugToDoDate = new Date
        
        toDoList.push((0,_toDoItem__WEBPACK_IMPORTED_MODULE_0__["default"])(newTitle,
                               newDescription,
                               newCreatedDate, 
                               newDueDate, 
                               newPriority));



        toDoList.push((0,_toDoItem__WEBPACK_IMPORTED_MODULE_0__["default"])("load truck",
                               "load up the truck with as much shit as possible and run it to the dump",
                               new Date(),
                               new Date().setDate(),
                               ))
    }

    return {
        toDoList,
        newToDo
    }
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IscURBQVE7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDekJBLDZCQUFlLG9DQUFTO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ1JrQztBQUNsQztBQUNBLDZCQUFlLHNDQUFVO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IscURBQVE7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IscURBQVE7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90b0RvSXRlbS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3RvRG9MaXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0b0RvTGlzdCBmcm9tIFwiLi90b0RvTGlzdFwiO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpe1xyXG4gICAgbGV0IGNyZWF0ZWREYXRlID0gbmV3IERhdGUoKTtcclxuICAgIGxldCBuZXdEdWVEYXRlID0gbmV3IERhdGUoY3JlYXRlZERhdGUpO1xyXG4gICAgbmV3RHVlRGF0ZS5zZXREYXRlKG5ld0R1ZURhdGUuZ2V0RGF0ZSArIDEpO1xyXG5cclxuICAgIGxldCB0aGlzSXNBTGlzdCA9IHRvRG9MaXN0KCk7XHJcblxyXG4gICAgdGhpc0lzQUxpc3QubmV3VG9EbyhcImdldCBpbnRvIGdhcmFnZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIndhbGsgeW91ciBzdHVwaWQgYXNzIGludG8gdGhlIGdhcmFnZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVkRGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3RHVlRGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJIaWdoXCIpO1xyXG5cclxuXHJcbiAgICAvLyBsZXQgbmV3Tm90ZSA9IG5ldyB0b0RvSXRlbShcImdldCBpbnRvIGdhcmFnZVwiLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3YWxrIHlvdXIgc3R1cGlkIGFzcyBpbnRvIHRoZSBnYXJhZ2VcIixcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZWREYXRlLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3RHVlRGF0ZSxcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiSGlnaFwiKTtcclxuICAgIFxyXG4gICAgY29uc29sZS5sb2codGhpc0lzQUxpc3QuYWxsVG9Eb3MoKVswXS50aXRsZSk7ICAgXHJcbn0pO1xyXG5cclxuY29uc29sZS5sb2coXCJIZWxsbyB3cnJsZFwiKTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihuZXdUaXRsZSwgbmV3RGVzY3JpcHRpb24sIG5ld0NyZWF0ZWREYXRlLCBuZXdEdWVEYXRlLCBuZXdQcmlvcml0eSl7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHRpdGxlOiBuZXdUaXRsZSxcclxuICAgICAgICBkZXNjcmlwdGlvbiA6IG5ld0Rlc2NyaXB0aW9uLFxyXG4gICAgICAgIGNyZWF0ZWREYXRlIDogbmV3Q3JlYXRlZERhdGUsXHJcbiAgICAgICAgZHVlRGF0ZSA6IG5ld0R1ZURhdGUsXHJcbiAgICAgICAgcHJpb3JpdHkgOiBuZXdQcmlvcml0eVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHRvRG9JdGVtIGZyb20gXCIuL3RvRG9JdGVtXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpe1xyXG5cclxuICAgIGxldCB0b0RvTGlzdCA9IFtdO1xyXG4gICAgbGV0IG5ld1RvRG8gPSBmdW5jdGlvbihuZXdUaXRsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3RGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0NyZWF0ZWREYXRlLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3RHVlRGF0ZSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1ByaW9yaXR5KXtcclxuICAgICAgICBcclxuICAgICAgICBuZXdEYXRlID0gbmV3IERhdGUoKTtcclxuICAgICAgICBkdWVEYXRlID0gbmV3RHVlRGF0ZTsgICAgICAgIFxyXG5cclxuXHJcbiAgICAgICAgZGVidWdUb0RvRGF0ZSA9IG5ldyBEYXRlXHJcbiAgICAgICAgXHJcbiAgICAgICAgdG9Eb0xpc3QucHVzaCh0b0RvSXRlbShuZXdUaXRsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0Rlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3Q3JlYXRlZERhdGUsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3RHVlRGF0ZSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdQcmlvcml0eSkpO1xyXG5cclxuXHJcblxyXG4gICAgICAgIHRvRG9MaXN0LnB1c2godG9Eb0l0ZW0oXCJsb2FkIHRydWNrXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxvYWQgdXAgdGhlIHRydWNrIHdpdGggYXMgbXVjaCBzaGl0IGFzIHBvc3NpYmxlIGFuZCBydW4gaXQgdG8gdGhlIGR1bXBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBEYXRlKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgRGF0ZSgpLnNldERhdGUoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0b0RvTGlzdCxcclxuICAgICAgICBuZXdUb0RvXHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=