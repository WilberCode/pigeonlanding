/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*  
 
var $ = jQuery.noConflict();  */

/* import menuMobile from  './components/menuMobile'  
import insertIcons from  './components/insertIcons'   
import menuSticky from './components/menuSticky';
import hashTarget from './components/hashTarget';
import collapsible from './components/collapsible';
import aside from './components/aside';  
import catalogModal from './components/catalogModal';
import copyText from './components/copyText'; */

/* jQuery(function ($) {  
    $(document).ready(function () {   */

/*     menuMobile($)   // Menu Mobile: Show menu and hidde    
    insertIcons($)  // Insert icons svg   
    menuSticky($)   // Insert icons svg 
    hashTarget($)   // Hash target
    collapsible($) // Temario
    aside($)  // Set offset aside
    catalogModal($)   // Carga el nombre del programa como valor por defecto en el input del form
    copyText($) */

/*        
    });   

});
  */

/* window.onload = function() {
   const videoss = document.querySelectorAll('video');

   videoss.forEach((video) => {
     const mediaSource = new MediaSource();
     video.src = URL.createObjectURL(mediaSource); 

     mediaSource.addEventListener('sourceopen', function() {
       const sourceBuffer = mediaSource.addSourceBuffer('video/mp4; codecs="avc1.42E01E"');
   
       fetch(video.getAttribute('data-src')).then(function(response) {
         return response.arrayBuffer();
       }).then(function(buffer) {
         sourceBuffer.appendBuffer(buffer);
         video.play();
       });
     }, { once: true });
   });
   
}
 */

/* 
document.addEventListener("DOMContentLoaded", function() {
   var lazyVideos = [].slice.call(document.querySelectorAll("video.lazy"));
 
   if ("IntersectionObserver" in window) {
     var lazyVideoObserver = new IntersectionObserver(function(entries, observer) {
       entries.forEach(function(video) {
         if (video.isIntersecting) {
           video.target.src = video.target.dataset.src;
           video.target.preload = 'metadata';
           video.target.load();
           video.target.classList.remove("lazy");
           lazyVideoObserver.unobserve(video.target);
         }
       });
     });
 
     lazyVideos.forEach(function(lazyVideo) {
       lazyVideoObserver.observe(lazyVideo);
     });
   }
 });
 */
var videos = document.querySelectorAll("video");

for (var i = 0; i < videos.length; i++) {
  var video = videos[i];
  data_src = video.dataset.src;
  video.src = data_src;
  video.preload = 'none';
}

var pausedVideos = {};

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
}

function checkVisibility() {
  for (var i = 0; i < videos.length; i++) {
    var video = videos[i];
    /*   video.preload = 'auto'; */

    var container = video.closest(".video-container");
    var visible = isElementInViewport(container);

    if (visible) {
      /*   let data_src = video.dataset.src;
         if (video.src ==''  ) {
           video.src = data_src; 
        } */

      /*   let data_src = video.dataset.src; */

      /* 
            if (video.src ==''  ) {
               video.preload = 'metadata';
               video.src = data_src;
            }
        */
      // Cargar el video en segundo plano

      /*     video.addEventListener('canplaythrough', function() { */

      /*     video.play(); */

      /*   });
      */

      /* video.muted = false;  */
      if (pausedVideos[video.src]) {
        video.currentTime = pausedVideos[video.src];
        delete pausedVideos[video.src];
      }

      video.play();
    } else {
      if (!video.paused) {
        video.pause();
        pausedVideos[video.src] = video.currentTime;
      }
    }
  }
} // Llamar a la función cuando la página se carga y cuando el usuario desplaza la página


window.onload = checkVisibility;
window.addEventListener("scroll", checkVisibility);

/***/ }),

/***/ "./assets/scss/app.scss":
/*!******************************!*\
  !*** ./assets/scss/app.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*******************************************************!*\
  !*** multi ./assets/js/app.js ./assets/scss/app.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\xampp\htdocs\web\pigeonlanding\assets\js\app.js */"./assets/js/app.js");
module.exports = __webpack_require__(/*! C:\xampp\htdocs\web\pigeonlanding\assets\scss\app.scss */"./assets/scss/app.scss");


/***/ })

/******/ });