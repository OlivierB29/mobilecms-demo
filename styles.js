(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* You can add global styles to this file, and also import other style files */\n\nbody {\n  margin: 0;\n}\n\n/* list */\n\n.article-list {\n  /* spacing between article-list and border */\n  padding: .7em 0;\n}\n\n.largeview {\n  display: none;\n}\n\n@media all and (min-width: 55em) {\n  /* list */\n  .article-list {\n    padding: .7em .7em;\n  }\n\n  .largeview {\n    display: block;\n  }\n}\n\n.mainloading-icon {\n  display: block;\n  margin: 0 auto;\n}\n\n.theme-primary {\n  background-color: #5e7987;\n  color: white;\n}\n\n.theme-light {\n  background-color: #8ca8b7;\n  color: black;\n}\n\n.theme-white {\n  background-color: white;\n  color: black;\n}\n\n.theme-dark {\n  background-color: #334d5a;\n  color: white;\n}\n\n.my-mat-button-lighter {\n  background-color: white;\n  color: black;\n  cursor: pointer;\n  transition: background-color .7s cubic-bezier(.25, .8, .25, 1);\n}\n\n.my-mat-button-lighter:active {\n  background-color: #8ca8b7;\n}\n\n.my-mat-button-lighter:hover {\n  background-color: #8ca8b7;\n}\n\n.my-mat-button-light {\n  background-color: #8ca8b7;\n  color: black;\n  cursor: pointer;\n  transition: background-color .7s cubic-bezier(.25, .8, .25, 1);\n}\n\n.my-mat-button-white {\n  background-color: white;\n  color: black;\n  cursor: pointer;\n  transition: background-color .7s cubic-bezier(.25, .8, .25, 1);\n}\n\n.my-mat-button-light:active {\n  background-color: #334d5a;\n}\n\n.my-mat-button-light:hover {\n  background-color: #334d5a;\n}\n\n.my-mat-button-white:active {\n  background-color: #E0E0E0;\n}\n\n.my-mat-button-white:hover {\n  background-color: #E0E0E0;\n}\n\n.my-mat-button-dark {\n  background-color: #5e7987;\n  color: white;\n  cursor: pointer;\n  transition: background-color .7s cubic-bezier(.25, .8, .25, 1);\n}\n\n.my-mat-button-dark:active {\n  background-color: #8ca8b7;\n}\n\n.my-mat-button-dark:hover {\n  background-color: #8ca8b7;\n}\n\n.my-mat-button-darker {\n  background-color: #334d5a;\n  color: white;\n  cursor: pointer;\n  transition: background-color .7s cubic-bezier(.25, .8, .25, 1);\n}\n\n.my-mat-button-darker:active {\n  background-color: #5e7987;\n}\n\n.my-mat-button-darker:hover {\n  background-color: #5e7987;\n}\n\n.shadow {\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12);\n}\n\n/* flex */\n\n.flexcontainer {\n  display: flex;\n  flex-direction: column;\n}\n\n/* display feed items first*/\n\n.flexfeedcontainer {\n  order: 1;\n}\n\n.flexmaincontent {\n  order: 2;\n}\n\n@media all and (min-width: 55em) {\n  .flexcontainer {\n    flex-direction: row;\n  }\n  .flexmaincontent {\n    flex: 1 1 auto;\n    order: 1;\n  }\n  /* display feed items on the right*/\n  .flexfeedcontainer {\n    flex: 1 1 auto;\n    order: 2;\n  }\n}\n\n/* IE10+ CSS styles go here */\n\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n  .flexcontainer {\n    display: table;\n    flex:none;\n    width: 70em;\n  }\n  .flexfeedcontainer {\n    display: table-cell;\n    flex:none;\n  }\n  .flexmaincontent {\n    display: table-cell;\n    flex:none;\n  }\n}\n\n/* https://stackoverflow.com/questions/3839809/detect-iphone-ipad-purely-by-css#3839896 */\n\n/*https://fonts.googleapis.com/icon?family=Material+Icons*/\n\n/* Controlling Font Performance with font-display : https://developers.google.com/web/updates/2016/02/font-display */\n\n/* issue with edge */\n\n@font-face {\n  font-display: block; \n  font-family: 'Material Icons';\n  font-style: normal;\n  font-weight: 400;\n  src: url('MaterialIcons-Regular.eot'); /* For IE6-8 */\n  src: local('Material Icons'),\n    local('MaterialIcons-Regular'),\n    url('MaterialIcons-Regular.woff2') format('woff2'),\n    url('MaterialIcons-Regular.woff') format('woff'),\n    url('MaterialIcons-Regular.ttf') format('truetype');\n}\n\n.material-icons {\n  font-family: 'Material Icons';\n  font-weight: normal;\n  font-style: normal;\n  font-size: 24px;  /* Preferred icon size */\n  display: inline-block;\n  line-height: 1;\n  text-transform: none;\n  letter-spacing: normal;\n  word-wrap: normal;\n  white-space: nowrap;\n  direction: ltr;\n\n  /* Support for all WebKit browsers. */\n  -webkit-font-smoothing: antialiased;\n  /* Support for Safari and Chrome. */\n  text-rendering: optimizeLegibility;\n\n  /* Support for Firefox. */\n  -moz-osx-font-smoothing: grayscale;\n\n  /* Support for IE. */\n  -webkit-font-feature-settings: 'liga';\n          font-feature-settings: 'liga';\n}\n\n/* Controlling Font Performance with font-display : https://developers.google.com/web/updates/2016/02/font-display */\n\n/*https://fonts.googleapis.com/css?family=Open+Sans*/\n\n/* latin-ext */\n\n@font-face {\n  font-display: block; \n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url('mem8YaGs126MiZpBA-UFW50bbck.woff2') format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n\n/* latin */\n\n@font-face {\n  font-display: block;\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url('mem8YaGs126MiZpBA-UFVZ0b.woff2') format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/*# sourceMappingURL=data:application/json;base64,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a0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixvSEFBa0k7RUFDbEksbUhBQW1IO0FBQ3JIOztBQUNBLFVBQVU7O0FBQ1Y7RUFDRSxtQkFBbUI7RUFDbkIsd0JBQXdCO0VBQ3hCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsaUhBQStIO0VBQy9ILHlLQUF5SztBQUMzSyIsImZpbGUiOiJzcmMvc3R5bGVzLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cblxuYm9keSB7XG4gIG1hcmdpbjogMDtcbn1cblxuLyogbGlzdCAqL1xuXG4uYXJ0aWNsZS1saXN0IHtcbiAgLyogc3BhY2luZyBiZXR3ZWVuIGFydGljbGUtbGlzdCBhbmQgYm9yZGVyICovXG4gIHBhZGRpbmc6IC43ZW0gMDtcbn1cblxuLmxhcmdldmlldyB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbkBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDU1ZW0pIHtcbiAgLyogbGlzdCAqL1xuICAuYXJ0aWNsZS1saXN0IHtcbiAgICBwYWRkaW5nOiAuN2VtIC43ZW07XG4gIH1cblxuICAubGFyZ2V2aWV3IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufVxuXG4ubWFpbmxvYWRpbmctaWNvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLnRoZW1lLXByaW1hcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWU3OTg3O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi50aGVtZS1saWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4Y2E4Yjc7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLnRoZW1lLXdoaXRlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuXG4udGhlbWUtZGFyayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzRkNWE7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLm15LW1hdC1idXR0b24tbGlnaHRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogYmxhY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuN3MgY3ViaWMtYmV6aWVyKC4yNSwgLjgsIC4yNSwgMSk7XG59XG5cbi5teS1tYXQtYnV0dG9uLWxpZ2h0ZXI6YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhjYThiNztcbn1cbi5teS1tYXQtYnV0dG9uLWxpZ2h0ZXI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGNhOGI3O1xufVxuXG5cbi5teS1tYXQtYnV0dG9uLWxpZ2h0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhjYThiNztcbiAgY29sb3I6IGJsYWNrO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjdzIGN1YmljLWJlemllciguMjUsIC44LCAuMjUsIDEpO1xufVxuXG4ubXktbWF0LWJ1dHRvbi13aGl0ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogYmxhY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuN3MgY3ViaWMtYmV6aWVyKC4yNSwgLjgsIC4yNSwgMSk7XG59XG5cbi5teS1tYXQtYnV0dG9uLWxpZ2h0OmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzRkNWE7XG59XG4ubXktbWF0LWJ1dHRvbi1saWdodDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzRkNWE7XG59XG5cbi5teS1tYXQtYnV0dG9uLXdoaXRlOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFMEUwRTA7XG59XG4ubXktbWF0LWJ1dHRvbi13aGl0ZTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFMEUwRTA7XG59XG5cbi5teS1tYXQtYnV0dG9uLWRhcmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWU3OTg3O1xuICBjb2xvcjogd2hpdGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuN3MgY3ViaWMtYmV6aWVyKC4yNSwgLjgsIC4yNSwgMSk7XG59XG5cbi5teS1tYXQtYnV0dG9uLWRhcms6YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhjYThiNztcbn1cbi5teS1tYXQtYnV0dG9uLWRhcms6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGNhOGI3O1xufVxuXG4ubXktbWF0LWJ1dHRvbi1kYXJrZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzM0ZDVhO1xuICBjb2xvcjogd2hpdGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuN3MgY3ViaWMtYmV6aWVyKC4yNSwgLjgsIC4yNSwgMSk7XG59XG5cbi5teS1tYXQtYnV0dG9uLWRhcmtlcjphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWU3OTg3O1xufVxuLm15LW1hdC1idXR0b24tZGFya2VyOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVlNzk4Nztcbn1cblxuLnNoYWRvdyB7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgLjIpLCAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIC4xNCksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgLjEyKTtcbn1cblxuLyogZmxleCAqL1xuLmZsZXhjb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4vKiBkaXNwbGF5IGZlZWQgaXRlbXMgZmlyc3QqL1xuXG4uZmxleGZlZWRjb250YWluZXIge1xuICBvcmRlcjogMTtcbn1cblxuLmZsZXhtYWluY29udGVudCB7XG4gIG9yZGVyOiAyO1xufVxuXG5AbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiA1NWVtKSB7XG4gIC5mbGV4Y29udGFpbmVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB9XG4gIC5mbGV4bWFpbmNvbnRlbnQge1xuICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgIG9yZGVyOiAxO1xuICB9XG4gIC8qIGRpc3BsYXkgZmVlZCBpdGVtcyBvbiB0aGUgcmlnaHQqL1xuICAuZmxleGZlZWRjb250YWluZXIge1xuICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgIG9yZGVyOiAyO1xuICB9XG59XG5cbi8qIElFMTArIENTUyBzdHlsZXMgZ28gaGVyZSAqL1xuXG5AbWVkaWEgYWxsIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6IG5vbmUpLCAoLW1zLWhpZ2gtY29udHJhc3Q6IGFjdGl2ZSkge1xuICAuZmxleGNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogdGFibGU7XG4gICAgZmxleDpub25lO1xuICAgIHdpZHRoOiA3MGVtO1xuICB9XG4gIC5mbGV4ZmVlZGNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICBmbGV4Om5vbmU7XG4gIH1cbiAgLmZsZXhtYWluY29udGVudCB7XG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICBmbGV4Om5vbmU7XG4gIH1cbn1cblxuXG4vKiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8zODM5ODA5L2RldGVjdC1pcGhvbmUtaXBhZC1wdXJlbHktYnktY3NzIzM4Mzk4OTYgKi9cblxuXG5cblxuXG5cblxuXG4vKmh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vaWNvbj9mYW1pbHk9TWF0ZXJpYWwrSWNvbnMqL1xuLyogQ29udHJvbGxpbmcgRm9udCBQZXJmb3JtYW5jZSB3aXRoIGZvbnQtZGlzcGxheSA6IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3dlYi91cGRhdGVzLzIwMTYvMDIvZm9udC1kaXNwbGF5ICovXG4vKiBpc3N1ZSB3aXRoIGVkZ2UgKi9cbkBmb250LWZhY2Uge1xuICBmb250LWRpc3BsYXk6IGJsb2NrOyBcbiAgZm9udC1mYW1pbHk6ICdNYXRlcmlhbCBJY29ucyc7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgc3JjOiB1cmwoYXNzZXRzL2ljb25mb250L01hdGVyaWFsSWNvbnMtUmVndWxhci5lb3QpOyAvKiBGb3IgSUU2LTggKi9cbiAgc3JjOiBsb2NhbCgnTWF0ZXJpYWwgSWNvbnMnKSxcbiAgICBsb2NhbCgnTWF0ZXJpYWxJY29ucy1SZWd1bGFyJyksXG4gICAgdXJsKGFzc2V0cy9pY29uZm9udC9NYXRlcmlhbEljb25zLVJlZ3VsYXIud29mZjIpIGZvcm1hdCgnd29mZjInKSxcbiAgICB1cmwoYXNzZXRzL2ljb25mb250L01hdGVyaWFsSWNvbnMtUmVndWxhci53b2ZmKSBmb3JtYXQoJ3dvZmYnKSxcbiAgICB1cmwoYXNzZXRzL2ljb25mb250L01hdGVyaWFsSWNvbnMtUmVndWxhci50dGYpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcbn1cblxuLm1hdGVyaWFsLWljb25zIHtcbiAgZm9udC1mYW1pbHk6ICdNYXRlcmlhbCBJY29ucyc7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAyNHB4OyAgLyogUHJlZmVycmVkIGljb24gc2l6ZSAqL1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgd29yZC13cmFwOiBub3JtYWw7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGRpcmVjdGlvbjogbHRyO1xuXG4gIC8qIFN1cHBvcnQgZm9yIGFsbCBXZWJLaXQgYnJvd3NlcnMuICovXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAvKiBTdXBwb3J0IGZvciBTYWZhcmkgYW5kIENocm9tZS4gKi9cbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcblxuICAvKiBTdXBwb3J0IGZvciBGaXJlZm94LiAqL1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuXG4gIC8qIFN1cHBvcnQgZm9yIElFLiAqL1xuICBmb250LWZlYXR1cmUtc2V0dGluZ3M6ICdsaWdhJztcbn1cblxuLyogQ29udHJvbGxpbmcgRm9udCBQZXJmb3JtYW5jZSB3aXRoIGZvbnQtZGlzcGxheSA6IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3dlYi91cGRhdGVzLzIwMTYvMDIvZm9udC1kaXNwbGF5ICovXG4vKmh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PcGVuK1NhbnMqL1xuLyogbGF0aW4tZXh0ICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1kaXNwbGF5OiBibG9jazsgXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBzcmM6IGxvY2FsKCdPcGVuIFNhbnMgUmVndWxhcicpLCBsb2NhbCgnT3BlblNhbnMtUmVndWxhcicpLCB1cmwoYXNzZXRzL29wZW5zYW5zL21lbThZYUdzMTI2TWlacEJBLVVGVzUwYmJjay53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xuICB1bmljb2RlLXJhbmdlOiBVKzAxMDAtMDI0RiwgVSswMjU5LCBVKzFFMDAtMUVGRiwgVSsyMDIwLCBVKzIwQTAtMjBBQiwgVSsyMEFELTIwQ0YsIFUrMjExMywgVSsyQzYwLTJDN0YsIFUrQTcyMC1BN0ZGO1xufVxuLyogbGF0aW4gKi9cbkBmb250LWZhY2Uge1xuICBmb250LWRpc3BsYXk6IGJsb2NrO1xuICBmb250LWZhbWlseTogJ09wZW4gU2Fucyc7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgc3JjOiBsb2NhbCgnT3BlbiBTYW5zIFJlZ3VsYXInKSwgbG9jYWwoJ09wZW5TYW5zLVJlZ3VsYXInKSwgdXJsKGFzc2V0cy9vcGVuc2Fucy9tZW04WWFHczEyNk1pWnBCQS1VRlZaMGIud29mZjIpIGZvcm1hdCgnd29mZjInKTtcbiAgdW5pY29kZS1yYW5nZTogVSswMDAwLTAwRkYsIFUrMDEzMSwgVSswMTUyLTAxNTMsIFUrMDJCQi0wMkJDLCBVKzAyQzYsIFUrMDJEQSwgVSswMkRDLCBVKzIwMDAtMjA2RiwgVSsyMDc0LCBVKzIwQUMsIFUrMjEyMiwgVSsyMTkxLCBVKzIxOTMsIFUrMjIxMiwgVSsyMjE1LCBVK0ZFRkYsIFUrRkZGRDtcbn0iXX0= */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!./styles.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!******************************!*\
  !*** multi ./src/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/olivier/git/mobilecms/src/styles.css */"./src/styles.css");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map