(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ReactSimpleModal"] = factory(require("react"));
	else
		root["ReactSimpleModal"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(1);
	__webpack_require__(3);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(2);

	var Modal = function (_React$Component) {
	  _inherits(Modal, _React$Component);

	  function Modal(props) {
	    _classCallCheck(this, Modal);

	    var _this = _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this, props));

	    _this.state = {
	      isOpen: _this.props.isOpen || false
	    };

	    _this.keyMap = new Map();
	    // close on ESC
	    _this.keyMap.set(27, _this.requestClose.bind(_this));
	    _this.keyDownHandler = _this.onKeyDown.bind(_this);
	    return _this;
	  }

	  _createClass(Modal, [{
	    key: 'onKeyDown',
	    value: function onKeyDown(e) {
	      return this.keyMap.has(e.which) ? this.keyMap.get(e.which)() : undefined;
	    }
	  }, {
	    key: 'requestClose',
	    value: function requestClose() {
	      this.props.onRequestClose();
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.resolveIsOpen();
	      document.addEventListener('keydown', this.keyDownHandler);
	      // bind to closer if there is any
	      var closer = this.refs.modal.querySelector('.modal-closer');
	      if (closer) closer.addEventListener('click', this.requestClose.bind(this));
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      this.resolveIsOpen();
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.resolveIsOpen();
	      document.removeEventListener('keydown', this.keyDownHandler);
	    }
	  }, {
	    key: 'resolveIsOpen',
	    value: function resolveIsOpen() {
	      document.getElementsByTagName('body')[0].classList[this.props.isOpen ? 'add' : 'remove']('modal-open');
	    }
	  }, {
	    key: 'onClick',
	    value: function onClick(e) {
	      // the overlay has been clicked
	      if (e.target.classList.contains('modal')) {
	        this.requestClose();
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        'div',
	        { ref: 'modal', className: 'modal' + (this.props.isOpen ? ' visible' : ''), onClick: this.onClick.bind(this) },
	        React.createElement(
	          'div',
	          { className: 'modal-container' },
	          this.props.children
	        )
	      );
	    }
	  }]);

	  return Modal;
	}(React.Component);

	module.exports = Modal;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ])
});
;