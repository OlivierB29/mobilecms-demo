(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-sidenav-container class='appcomponent'></app-sidenav-container>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/maincontent/activity/activitybutton.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/maincontent/activity/activitybutton.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <div class='my-activity'>\r\n    <button routerLink='{{url}}' class='my-activity-button my-mat-button-lighter shadow'>\r\n    <h3>{{activity.name | uppercase}}</h3>\r\n\r\n\r\n    <img *ngIf='activity.logo' src='{{logo}}'  alt='{{activity.name}}' class='logo'>\r\n\r\n    </button>\r\n\r\n </div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/maincontent/article/article.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/maincontent/article/article.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div *ngIf='item' class='article-content shadow'>\r\n  <article>\r\n    \t\t\t<div  class='article-title article-title-decoration shadow'>\r\n            <span >{{item.title}}</span>\r\n          </div>\r\n          <div  *ngIf='item.organization' class='article-subtitle article-title-moreinfo'>\r\n              <span class='article-title-moreinfo'> {{item.organization}}</span>\r\n    \t\t\t</div>\r\n\r\n\r\n\r\n      <div class='article-description-container'>\r\n       <div *ngIf='item.activity && item.date' class='article-subtitle' >{{item.activity | uppercase}} {{item.date | localedate}}</div>\r\n\r\n        <div class='article-description'>{{item.description | br}}</div>\r\n\r\n        <div *ngIf='item.location'><i class='material-icons'>pin_drop</i> {{item.location}}</div>\r\n\r\n        <!-- media -->\r\n\r\n        <app-attachments *ngIf='item.media || item.attachments' recorduri='{{getRecordUri()}}' [attachments]='getAttachments()'></app-attachments>\r\n        <app-imagelist *ngIf='item.media || item.images' recorduri='{{getRecordUri()}}' [images]='getImages()' [lazyload]='lazyload'></app-imagelist>\r\n        <app-videolist *ngIf='item.media || item.attachments' recorduri='{{getRecordUri()}}' [videos]='getVideos()'></app-videolist>\r\n\r\n\r\n\r\n      </div>\r\n    </article>\r\n  </div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/maincontent/article/articlelist.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/maincontent/article/articlelist.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div *ngFor=\"let currentItem of items ; let i=index\">\r\n\r\n\r\n    <app-article type='news' id='{{currentItem.id}}' ></app-article>\r\n\r\n  </div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/maincontent/article/articlepreview.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/maincontent/article/articlepreview.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf='item' class='article-content article-preview-content'   routerLink='{{url}}'>\r\n  <div class='article-title my-mat-button-dark' >\r\n    <div >{{item.date | localedate}} {{item.activity | uppercase}}</div>\r\n    <span >{{item.title}}</span>\r\n  </div>\r\n\r\n  <div class='article-subtitle'>{{item.activity | uppercase}} - {{item.date | localedate}}</div>\r\n\r\n\r\n  <div class='article-previewdescription-container' *ngIf='image'>\r\n    <div class='thumbnail-container' *ngIf='image'>\r\n      <img src='{{getThumbnail(image)}}' alt='{{image.title}}' >\r\n    </div>\r\n    <div class='article-previewdescription description-and-thumbnail'>{{getPreviewDescription()}}</div>\r\n\r\n  </div>\r\n\r\n  <div class='article-previewdescription-container' *ngIf='!image'>\r\n    <div class='article-previewdescription'>{{getPreviewDescription()}}</div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/maincontent/article/attachments.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/maincontent/article/attachments.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- attachments -->\r\n<div *ngIf='attachments && attachments.length > 0'>\r\n<div *ngFor='let attachment of attachments' class='tooltip'>\r\n\r\n\r\n    <a *ngIf='attachment.url' href='{{attachment.url}}' >{{attachment.title}}</a>\r\n    <span *ngIf='attachment.thumbnails'><img src='{{getDefaultImage(attachment)}}' srcset='{{getThumbnailSrcSet(attachment)}}' alt='{{attachment.title}}' sizes='(min-width: 55em) 10vw, 20vw'>\r\n      </span>\r\n\r\n\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/maincontent/article/items.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/maincontent/article/items.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='article-list' >\r\n\r\n\r\n  <div *ngIf='items'>\r\n\r\n    <div *ngFor=\"let currentItem of items\" >\r\n\r\n      <app-article type='{{type}}' id='{{currentItem.id}}'></app-article>\r\n\r\n    </div>\r\n  </div>\r\n\r\n  </div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/maincontent/calendar/calendar-time-line-month.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/maincontent/calendar/calendar-time-line-month.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='flexcontainer'>\r\n\r\n<div class='monthtable' *ngFor='let month of months; let i=index'>\r\n\r\n<div class=\"divTable\">\r\n\r\n  <div class='divTableHeading'>\r\n    <div class='divTableHead dayCell'>{{month.name}} <span *ngIf='month.number === 0 || i === 0'>{{month.year}}</span></div>\r\n\r\n  </div><!-- divTableHeading -->\r\n<div class=\"divTableBody\">\r\n<div class='divTableRow' *ngFor='let day of month.days'>\r\n  <div class='divTableCell monthdaycell' >\r\n        <div class='cellBody \"  + getDayOfMonthStyle(day.date.getDay())'>\r\n        <span>{{day.number}}</span>\r\n        <span>{{day.name}}</span>\r\n\r\n        <span *ngIf='day.items.length > 0' >\r\n    <div *ngFor=\"let currentItem of day.items\" class='feed-article shadow \" + getCssColor(currentItem.activity)' routerLink='{{getUrl(currentItem)}}'>\r\n      <span class='calendar-icon' >{{getItemTitleMonthFormat(currentItem)}}</span>\r\n    </div>\r\n\r\n  </span>\r\n    </div>\r\n  </div><!-- divTableCell -->\r\n</div><!-- divTableRow -->\r\n</div><!-- body -->\r\n</div><!-- table -->\r\n\r\n\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/maincontent/calendar/calendar-time-line-week.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/maincontent/calendar/calendar-time-line-week.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"divTable\">\r\n  <div class='divTableHeading'>\r\n    <div class='divTableHead dayCell'>L</div>\r\n    <div class='divTableHead dayCell'>M</div>\r\n    <div class='divTableHead dayCell'>M</div>\r\n    <div class='divTableHead dayCell'>J</div>\r\n    <div class='divTableHead dayCell'>V</div>\r\n    <div class='divTableHead dayCell'>S</div>\r\n    <div class='divTableHead dayCell'>D</div>\r\n\r\n  </div><!-- divTableHeading -->\r\n<div class=\"divTableBody\">\r\n\r\n<div class='divTableRow' *ngFor='let week of weeks'>\r\n  <div class='divTableCell dayCell' *ngFor='let day of week.days'>\r\n        <div class='cellBody \"  + getCellStyle(day.date.getMonth())'>\r\n        <span>{{day.number}}</span>\r\n        <span *ngIf='day.number === 1' class='monthline'>{{day.monthname}}</span>\r\n        <span *ngIf='day.items.length > 0' >\r\n    <div *ngFor=\"let currentItem of day.items\" class='feed-article my-mat-button-dark shadow' routerLink='{{getUrl(currentItem)}}'>\r\n      <span class='calendar-icon' >{{getShortTitle(currentItem)}}</span>\r\n    </div>\r\n\r\n  </span>\r\n    </div>\r\n  </div><!-- divTableCell -->\r\n\r\n</div><!-- divTableRow -->\r\n</div><!-- body -->\r\n</div><!-- table -->\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/maincontent/calendar/calendar-time-line.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/maincontent/calendar/calendar-time-line.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let currentItem of items\" class='feed-article my-mat-button-dark shadow' routerLink='{{getUrl(currentItem)}}'>\r\n  <i class='material-icons calendar-icon'>event</i>\r\n  <span>{{(currentItem.activity | uppercase)}}</span>: <span >{{currentItem.title}}</span>\r\n  <span class='feed-subtitle'>{{currentItem.date}}</span>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/maincontent/calendar/calendaractivities.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/maincontent/calendar/calendaractivities.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div *ngIf=\"!activity\" >\r\n\r\n  <div class='flexcontainer'>\r\n  <div class='flexfeedcontainer'>\r\n    <div *ngFor=\"let activityLink of activityObjectList\">\r\n     <app-activitybutton [activity]='activityLink'></app-activitybutton>\r\n    </div>\r\n  </div>\r\n  <div class='flexmaincontent'>\r\n    <app-calendar-time-line-month></app-calendar-time-line-month>\r\n  </div>\r\n</div>\r\n\r\n</div>\r\n\r\n<div  *ngIf=\"activity\" class='article-list'>\r\n    <app-my-calendar-list [activity]='activity'></app-my-calendar-list>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/maincontent/calendar/calendarevent.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/maincontent/calendar/calendarevent.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class='calendarevent-container'>\r\n\r\n  <div *ngIf='item' class='article-title theme-primary'>\r\n    <div>\r\n      <i class='material-icons calendar-icon'>event</i>\r\n      <span>{{item.date | localedate}} </span><span *ngIf='item.enddate && item.enddate !== item.date'> - </span><span *ngIf='item.enddate && item.enddate !== item.date' >{{item.enddate | localedate}} </span> : <span class='feed-subtitle'>{{item.activity | uppercase}}</span>\r\n    </div>\r\n  </div>\r\n\r\n  <div *ngIf='item' class='shadow'>\r\n      \t\t\t<div  class='article-title theme-primary shadow'>\r\n              <span >{{item.title}}</span>\r\n            </div>\r\n            <div  *ngIf='item.organization' class='article-subtitle article-title-moreinfo'>\r\n                <span class='article-title-moreinfo'> {{item.organization}}</span>\r\n      \t\t\t</div>\r\n\r\n\r\n\r\n        <div class='article-description-container'>\r\n\r\n          <div class='article-description'>{{item.description | br}}</div>\r\n\r\n          <div *ngIf='item.location'><i class='material-icons'>pin_drop</i> {{item.location}}</div>\r\n\r\n          <!-- media -->\r\n\r\n          <app-attachments *ngIf='item.media || item.attachments' recorduri='{{getRecordUri()}}' [attachments]='getAttachments()'></app-attachments>\r\n          <app-imagelist *ngIf='item.media || item.images' recorduri='{{getRecordUri()}}' [images]='getImages()' [lazyload]='lazyload'></app-imagelist>\r\n\r\n\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n<div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/maincontent/calendar/calendarfeed.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/maincontent/calendar/calendarfeed.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let item of items; let i=index\">\r\n\r\n  <div>\r\n    <app-calendarpreview  *ngIf='item.description' type='calendar' [item]='item' show='description'></app-calendarpreview>\r\n    <app-calendarpreview  *ngIf='!item.description' type='calendar' id='{{item.id}}' show='description'></app-calendarpreview>\r\n  </div>\r\n\r\n  <div class='article-feed-spacer'></div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/maincontent/calendar/calendarlist.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/maincontent/calendar/calendarlist.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div *ngIf=\"activity\">\r\n<h3><span>{{activity | uppercase}}</span></h3>\r\n\r\n  <div class='article-list' *ngIf='items' >\r\n      <div *ngFor=\"let currentItem of items\" >\r\n\r\n        <app-calendarpreview type='{{type}}' id='{{currentItem.id}}' show='description'></app-calendarpreview>\r\n\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/maincontent/calendar/calendarpreview.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/maincontent/calendar/calendarpreview.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a *ngIf='item' class='hidelink' href='{{getUrl()}}'>\r\n  <div class='shadow'>\r\n\r\n    <div class='my-mat-button-dark'>\r\n      <div>\r\n        <i class='material-icons calendar-icon'>event</i>\r\n        <span>{{item.date | localedate}}</span> | <span class='feed-subtitle'>{{item.activity | uppercase}}</span> : \r\n        <span class='feed-subtitle'>{{item.title}}</span>\r\n      </div>\r\n    </div>\r\n\r\n    <div *ngIf='show === \"description\"' class='largeview'>\r\n      <div class='calendar-preview-table-row'>\r\n        <div *ngIf='image'>\r\n\r\n            <img src='{{getThumbnail(image)}}' alt='{{image.title}}'>\r\n\r\n        </div>\r\n        <div>\r\n          <span class='calendar-preview-description'>{{getPreviewDescription()}}</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</a>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/maincontent/club/clubactivities.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/maincontent/club/clubactivities.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='article-list'>\r\n  \r\n  <div *ngIf='!activity'>\r\n    <div *ngFor='let activityLink of activityObjectList'>\r\n      <app-activitybutton [activity]='activityLink'></app-activitybutton>\r\n    </div>\r\n  </div>\r\n\r\n  <div *ngIf='activity'>\r\n    <app-my-clubs-list [activity]='activity'></app-my-clubs-list>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/maincontent/club/clubdetail.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/maincontent/club/clubdetail.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "      <div *ngIf='item' class='club-content' >\r\n    \t\t\t<div class='club-title' >\r\n            <a *ngIf='item.url' target='_blank' href='{{item.url}}' title=\"{{item.url}}\"  class=\"club-website\">{{item.title}} <i class='material-icons'>open_in_new</i></a>\r\n            <span *ngIf='!item.url' class=\"club-website\">{{item.title}}</span>\r\n            </div>\r\n          <div>{{item.description | br}}</div>\r\n\r\n      </div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/maincontent/club/clublist.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/maincontent/club/clublist.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class='article-list'>\r\n  <h3><span>{{activity | uppercase}}</span> </h3>\r\n<div *ngIf=\"activity\" class='department-list'>\r\n\r\n\r\n<div *ngFor='let dep of departmentObjectList'>\r\n\r\n  <button  [value]='dep.code' (click)='displayClubs(dep.code)' class='department-button my-mat-button-lighter shadow'>\r\n    <div >{{dep.name}}</div>\r\n\r\n  </button>\r\n\r\n</div>\r\n\r\n</div>\r\n\r\n\r\n\r\n<div *ngIf=\"activity  && department \">\r\n  <div class='article-list'>\r\n    <div *ngFor='let club of (clubs | propertyfilter: \"activity\":activity | propertyfilter: \"department\":department)' class='club-content'>\r\n      <app-my-clubdetail-component [id]=\"club.id\"></app-my-clubdetail-component>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/maincontent/image/imagelist.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/maincontent/image/imagelist.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n\r\n<ngui-inview *ngIf='this.enableinview'  [blurEnabled]='false'>\r\n  <div *ngIf>\r\n<!-- images -->\r\n    <div *ngIf='images && images.length > 0' class='images-container'>\r\n    <div *ngFor='let image of images'>\r\n      <a href='{{image.url}}' title='{{image.title}}'>\r\n    \r\n        <img  src='{{getDefaultImage(image)}}' srcset='{{getThumbnailSrcSet(image)}}' alt='{{image.title}}' sizes='(min-width: 55em) 60vw, 100vw'>\r\n    \r\n      </a>\r\n    </div>\r\n  </div>\r\n  </div>\r\n\r\n</ngui-inview>\r\n\r\n<div *ngIf='!this.enableinview' >\r\n    <div *ngIf='images && images.length > 0' class='images-container'>\r\n        <div *ngFor='let image of images'>\r\n          <a href='{{image.url}}' title='{{image.title}}'>\r\n        \r\n            <img  src='{{getDefaultImage(image)}}' srcset='{{getThumbnailSrcSet(image)}}' alt='{{image.title}}' sizes='(min-width: 55em) 60vw, 100vw'>\r\n        \r\n          </a>\r\n        </div>\r\n      </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/maincontent/news/news.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/maincontent/news/news.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\r\n<div class='article-list'>\r\n\r\n \r\n\r\n  <div *ngFor=\"let item of items\">\r\n\r\n                <app-article *ngIf='item.description' type='{{type}}' [itemparam]='item' ></app-article>\r\n                <app-article *ngIf='!item.description' type='{{type}}' id='{{item.id}}' ></app-article>\r\n\r\n          \r\n  </div>\r\n</div>\r\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/maincontent/news/newsdetails.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/maincontent/news/newsdetails.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-article *ngIf=\"id\" type='{{type}}' id='{{id}}' ></app-article>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/maincontent/news/newspreview.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/maincontent/news/newspreview.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class='article-list'>\r\n\r\n  <div *ngFor=\"let currentItem of items; let i=index\"  class=\"news-preview-container\">\r\n\r\n    <app-articlepreview type='news' id='{{currentItem.id}}'></app-articlepreview>\r\n\r\n  </div>\r\n\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/maincontent/video/video.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/maincontent/video/video.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div *ngIf=\"sanitized\" class=\"videoWrapper\" >\r\n  <iframe type=\"text/html\" width=\"640\" height=\"360\" src=\"{{videoUrl}}\" frameborder=\"0\" allowfullscreen></iframe>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/maincontent/video/videolist.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/maincontent/video/videolist.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- images -->\r\n<div *ngIf='videos && videos.length > 0' >\r\n<div *ngFor='let video of videos'>\r\n  <app-video url='{{video.url}}'></app-video>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/sidenav/banner/banner.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sidenav/banner/banner.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <header>\r\n  <div class='banner-container'>\r\n\r\n    <img src='{{url}}' class='banner'>\r\n  </div>\r\n</header>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/sidenav/featured/featured.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sidenav/featured/featured.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"feed-content\">\r\n\r\n<div></div>\r\n<div *ngFor=\"let currentItem of items\" (click)=\"gotoDetail(currentItem)\" class='feed-article'>\r\n    {{currentItem.title}}\r\n</div>\r\n<div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/sidenav/footer/footer.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sidenav/footer/footer.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class='footer-content'>\r\n  <div *ngFor=\"let currentItem of items\" class='footer-article' >\r\n\r\n    <span *ngIf=\"currentItem.title\" class=\"footer-title\" >{{currentItem.title}}</span>\r\n    <div *ngIf=\"currentItem.description\">{{currentItem.description}}</div>\r\n\r\n  </div>\r\n\r\n<div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/sidenav/home.component.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sidenav/home.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div [ngClass]='{\"flexcontainer\": isModernBrowser()}'>\r\n\r\n  <div class='article-list' [ngClass]='{\"flexfeedcontainer\": isModernBrowser()}'>\r\n    <app-my-calendar-feed [max]='max'></app-my-calendar-feed>\r\n  </div>\r\n\r\n  <div  [ngClass]='{\"flexmaincontent\": isModernBrowser()}'>\r\n    <app-my-news-component [max]='max'></app-my-news-component>\r\n    <div routerLink='news' class='expand-title shadow'>\r\n      <i class='material-icons'>expand_more</i>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/sidenav/menubutton.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sidenav/menubutton.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a href='' routerLink='{{item.routerLink}}'  routerLinkActive='active'  title='{{item.title}}' class='slidemenu-button slidemenu-button-container my-mat-button-dark'>\r\n\r\n<i  class='icon-container material-icons slidemenu-button-icon'>{{item.icon}}</i>\r\n<span *ngIf='expanded' class='slidemenu-button-text' >{{item.title}}</span>\r\n\r\n</a>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/sidenav/sidenav.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sidenav/sidenav.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\r\n<div *ngIf='isOpen()' class='menu-container theme-primary'  [ngClass]='{\"menu-container-expanded\": isExpanded()}'>\r\n<div class='buttonseparator'></div>\r\n<span *ngFor='let menu of menuItems' (click)='expandClose()' >\r\n  <app-menubutton [item]='menu' [expanded]='expanded' ></app-menubutton>\r\n  <div class='buttonseparator'></div>\r\n</span>\r\n\r\n</div>\r\n</nav>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/sidenav/sidenavcontainer.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sidenav/sidenavcontainer.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class='top-menu-bar theme-dark'>\r\n\r\n  <!-- burger menu icon -->\r\n  <div (click)='sidenav.expandMenu()' >\r\n    <span class='top-menu-icon-container my-mat-button-darker' >\r\n      <i class='material-icons'>menu</i>\r\n    </span>\r\n  </div>\r\n\r\n  <!-- title -->\r\n  <div class='top-menu-title-container my-mat-button-darker' routerLink='/'>\r\n    <span class='top-menu-title' >{{title}}</span>\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n<div class='my-body'>\r\n\r\n    <app-sidenav #sidenav [mode]='menuMode' [opened]='menuOpened'></app-sidenav>\r\n\r\n  <!-- fading backdrop : close menu on click -->\r\n  <div *ngIf='sidenav.isOverMenuOpened()'  class='my-mat-sidenav-backdrop\"' [ngClass]='{\"my-mat-sidenav-shown\": sidenav.isOpen()}' (click)='sidenav.open()'></div>\r\n\r\n  <!-- container -->\r\n  <div class='router-container'>\r\n    <div  class='banner-container'  routerLink='/'>\r\n      <img class='shadow' src='{{bannerurl}}' srcset='{{getBannerSrcSet()}}' alt='' sizes='(min-width: 55em) 60vw, 100vw'>\r\n    </div>\r\n    <!-- content -->\r\n    <main>\r\n    <router-outlet></router-outlet>\r\n    </main>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([
                /* define app module routes here, e.g., to lazily load a module
                   (do not place feature module routes here, use an own -routing.module.ts in the feature instead)
                 */
                ], { useHash: true })
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

// IMPORTANT
// VERY IMPORTANT
// ### Without useHash
// links are without #, but it requires an Apache configuration !
// RouterModule.forRoot(routes);
// ### With useHash
// an URL uses #. http: // localhost/#/mycomponent
// Any request to http: // localhost/#/mycomponent queries index.html
// RouterModule.forRoot(routes, { useHash: true });


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".appcomponent {\r\n  font-family : Roboto, \"Helvetica Neue\", sans-serif;\r\n  background-color: #F2F2F2;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrREFBa0Q7RUFDbEQseUJBQXlCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwY29tcG9uZW50IHtcclxuICBmb250LWZhbWlseSA6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGMkYyRjI7XHJcbn1cclxuIl19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'mobilecms';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var src_app_maincontent_activity_activity_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/maincontent/activity/activity.module */ "./src/app/maincontent/activity/activity.module.ts");
/* harmony import */ var src_app_maincontent_article_article_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/maincontent/article/article.module */ "./src/app/maincontent/article/article.module.ts");
/* harmony import */ var src_app_maincontent_calendar_calendar_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/maincontent/calendar/calendar.module */ "./src/app/maincontent/calendar/calendar.module.ts");
/* harmony import */ var src_app_maincontent_news_news_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/maincontent/news/news.module */ "./src/app/maincontent/news/news.module.ts");
/* harmony import */ var src_app_sidenav_main_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/sidenav/main.module */ "./src/app/sidenav/main.module.ts");
/* harmony import */ var src_app_maincontent_club_club_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/maincontent/club/club.module */ "./src/app/maincontent/club/club.module.ts");
/* harmony import */ var src_app_maincontent_image_image_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/maincontent/image/image.module */ "./src/app/maincontent/image/image.module.ts");





// project modules










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                src_app_maincontent_activity_activity_module__WEBPACK_IMPORTED_MODULE_7__["ActivityModule"],
                src_app_maincontent_article_article_module__WEBPACK_IMPORTED_MODULE_8__["ArticleModule"],
                src_app_maincontent_club_club_module__WEBPACK_IMPORTED_MODULE_12__["ClubModule"],
                src_app_maincontent_calendar_calendar_module__WEBPACK_IMPORTED_MODULE_9__["CalendarModule"],
                src_app_maincontent_news_news_module__WEBPACK_IMPORTED_MODULE_10__["NewsModule"],
                src_app_maincontent_image_image_module__WEBPACK_IMPORTED_MODULE_13__["ImageModule"],
                src_app_sidenav_main_module__WEBPACK_IMPORTED_MODULE_11__["MainModule"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            ],
            providers: [
                //    {provide: APP_BASE_HREF, useValue: '/'},
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/maincontent/activity/activity.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/maincontent/activity/activity.module.ts ***!
  \*********************************************************/
/*! exports provided: ActivityModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityModule", function() { return ActivityModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ */ "./src/app/maincontent/activity/index.ts");
/* harmony import */ var src_app_maincontent_image_image_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/maincontent/image/image.module */ "./src/app/maincontent/image/image.module.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");







var ActivityModule = /** @class */ (function () {
    function ActivityModule() {
    }
    ActivityModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                src_app_maincontent_image_image_module__WEBPACK_IMPORTED_MODULE_5__["ImageModule"],
                src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            ],
            declarations: [
                ___WEBPACK_IMPORTED_MODULE_4__["ActivityButtonComponent"],
            ],
            providers: [],
            entryComponents: [],
            exports: [
                ___WEBPACK_IMPORTED_MODULE_4__["ActivityButtonComponent"],
            ],
        })
    ], ActivityModule);
    return ActivityModule;
}());



/***/ }),

/***/ "./src/app/maincontent/activity/activitybutton.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/maincontent/activity/activitybutton.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".my-activity {\r\n padding-top: 0.5em;\r\n text-align: center;\r\n width: 100%;\r\n}\r\n.my-activity-button {\r\n border: none;\r\n margin: 0.5em;\r\n min-height: 8em;\r\n width: 90%;\r\n}\r\n.logo {\r\n    margin-bottom: 0.5em;\r\n    max-width: 3em;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbmNvbnRlbnQvYWN0aXZpdHkvYWN0aXZpdHlidXR0b24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGtCQUFrQjtDQUNsQixrQkFBa0I7Q0FDbEIsV0FBVztBQUNaO0FBQ0E7Q0FDQyxZQUFZO0NBQ1osYUFBYTtDQUNiLGVBQWU7Q0FDZixVQUFVO0FBQ1g7QUFJQTtJQUNJLG9CQUFvQjtJQUNwQixjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvbWFpbmNvbnRlbnQvYWN0aXZpdHkvYWN0aXZpdHlidXR0b24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teS1hY3Rpdml0eSB7XHJcbiBwYWRkaW5nLXRvcDogMC41ZW07XHJcbiB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiB3aWR0aDogMTAwJTtcclxufVxyXG4ubXktYWN0aXZpdHktYnV0dG9uIHtcclxuIGJvcmRlcjogbm9uZTtcclxuIG1hcmdpbjogMC41ZW07XHJcbiBtaW4taGVpZ2h0OiA4ZW07XHJcbiB3aWR0aDogOTAlO1xyXG59XHJcblxyXG5cclxuXHJcbi5sb2dvIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xyXG4gICAgbWF4LXdpZHRoOiAzZW07XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/maincontent/activity/activitybutton.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/maincontent/activity/activitybutton.component.ts ***!
  \******************************************************************/
/*! exports provided: ActivityButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityButtonComponent", function() { return ActivityButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_model_activity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/model/activity */ "./src/app/shared/model/activity.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




var ActivityButtonComponent = /** @class */ (function () {
    function ActivityButtonComponent() {
        this.activity = null;
        this.url = '';
        this.logo = '';
        this.offset = 100;
        this.defaultImage = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].server + '/' + src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].public + '/resources/ring-alt-32.svg';
    }
    ActivityButtonComponent.prototype.ngOnInit = function () {
        if (this.activity) {
            this.logo = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].public + '/activities/' + this.activity.name + '/' + this.activity.logo;
            if (!this.url) {
                // if the current page is /clubs/, then add 'tennis'
                // The resulting button will open /clubs/tennis
                this.url += this.activity.name;
            }
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_shared_model_activity__WEBPACK_IMPORTED_MODULE_2__["Activity"])
    ], ActivityButtonComponent.prototype, "activity", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ActivityButtonComponent.prototype, "url", void 0);
    ActivityButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-activitybutton',
            template: __webpack_require__(/*! raw-loader!./activitybutton.component.html */ "./node_modules/raw-loader/index.js!./src/app/maincontent/activity/activitybutton.component.html"),
            styles: [__webpack_require__(/*! ./activitybutton.component.css */ "./src/app/maincontent/activity/activitybutton.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ActivityButtonComponent);
    return ActivityButtonComponent;
}());



/***/ }),

/***/ "./src/app/maincontent/activity/index.ts":
/*!***********************************************!*\
  !*** ./src/app/maincontent/activity/index.ts ***!
  \***********************************************/
/*! exports provided: ActivityButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _activitybutton_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./activitybutton.component */ "./src/app/maincontent/activity/activitybutton.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActivityButtonComponent", function() { return _activitybutton_component__WEBPACK_IMPORTED_MODULE_0__["ActivityButtonComponent"]; });




/***/ }),

/***/ "./src/app/maincontent/article/article.component.css":
/*!***********************************************************!*\
  !*** ./src/app/maincontent/article/article.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.article-title-decoration {\n\tbackground-color: #e9e9e9;\n}\n\n.emptytext {\n\tbackground-color: #F6F7F9;\n\tcolor : #B1B1B1;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbmNvbnRlbnQvYXJ0aWNsZS9hcnRpY2xlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0NBQ0MseUJBQXlCO0FBQzFCOztBQUVBO0NBQ0MseUJBQXlCO0NBQ3pCLGVBQWU7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9tYWluY29udGVudC9hcnRpY2xlL2FydGljbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmFydGljbGUtdGl0bGUtZGVjb3JhdGlvbiB7XG5cdGJhY2tncm91bmQtY29sb3I6ICNlOWU5ZTk7XG59XG5cbi5lbXB0eXRleHQge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjRjZGN0Y5O1xuXHRjb2xvciA6ICNCMUIxQjE7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/maincontent/article/article.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/maincontent/article/article.component.ts ***!
  \**********************************************************/
/*! exports provided: ArticleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleComponent", function() { return ArticleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var src_app_shared_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services */ "./src/app/shared/services/index.ts");
/* harmony import */ var src_app_shared_services_log_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/log.service */ "./src/app/shared/services/log.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






// import 'rxjs/add/operator/toPromise';
var ArticleComponent = /** @class */ (function () {
    function ArticleComponent(titleService, log, readService, mediaService, http, element) {
        this.titleService = titleService;
        this.log = log;
        this.readService = readService;
        this.mediaService = mediaService;
        this.http = http;
        this.element = element;
        this.media = 'media';
        this.lazyload = true;
        this.fetched = false;
        if (!this.item) {
            this.item = {
                id: '', title: this.getEmptyTitle(),
                description: this.getEmptyDescription()
            };
        }
        // TODO  [ngClass]='{"emptytext": !fetched}'
    }
    ArticleComponent.prototype.getEmptyTitle = function () {
        var result = '............ ...... .... ............';
        // return this.convertToEmptyCharacters(result);
        return result;
    };
    ArticleComponent.prototype.getEmptyDescription = function () {
        var result = '';
        for (var i = 0; i < 5; i++) {
            result += '...... .... ........... .. .... .. ..... ...... .... ....... ............ ....... .....';
            result += '... .. ............ .... ..... .... ..... ..... ... .......... ........... .......... \n';
        }
        // return this.convertToEmptyCharacters(result);
        return result;
    };
    // private convertToEmptyCharacters(str: string): string {
    //   return str.replace(/\./g, '&nbsp;');
    // }
    ArticleComponent.prototype.ngOnInit = function () {
        this.fetchData();
    };
    ArticleComponent.prototype.fetchData = function () {
        var _this = this;
        if (this.isRouteInit()) {
            this.log.debug('ArticleComponent init ' + this.type + ' ' + this.id);
            this.http.get(this.readService.getUrl(this.type, this.id))
                .subscribe(function (data) {
                _this.item = data;
                _this.item.media = _this.mediaService.initMediaUrl(_this.type, _this.id, _this.item.media, _this.media);
                _this.fetched = true;
            });
        }
        else if (this.isItemInit()) {
            this.log.debug('ArticleComponent item ' + this.item.id);
            var tmpItem = this.itemparam;
            tmpItem.media = this.mediaService.initMediaUrl(this.type, tmpItem.id, tmpItem.media, this.media);
            this.item = tmpItem;
            this.fetched = true;
        }
        else {
            if (!this.type) {
                this.log.debug('ArticleComponent empty type');
            }
            if (!this.id) {
                this.log.debug('ArticleComponent empty id');
            }
        }
    };
    ArticleComponent.prototype.isItemInit = function () {
        return this.itemparam && this.itemparam.id;
    };
    ArticleComponent.prototype.isRouteInit = function () {
        return this.type && this.id;
    };
    ArticleComponent.prototype.getId = function () {
        var result = null;
        if (this.type && this.id) {
            result = this.id;
        }
        else if (this.isItemInit()) {
            result = this.item.id;
        }
        return result;
    };
    ArticleComponent.prototype.getItem = function () {
        return this.item;
    };
    ArticleComponent.prototype.getImages = function () {
        return this.mediaService.getImages(this.getItem());
    };
    ArticleComponent.prototype.getAttachments = function () {
        return this.mediaService.getAttachments(this.getItem());
    };
    ArticleComponent.prototype.getVideos = function () {
        return this.mediaService.getVideos(this.getItem());
    };
    /**
    * eg media/news/3/thumbnails
    */
    ArticleComponent.prototype.getRecordUri = function () {
        return this.type + '/' + this.getId();
    };
    ArticleComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] },
        { type: src_app_shared_services_log_service__WEBPACK_IMPORTED_MODULE_4__["Log"] },
        { type: src_app_shared_services__WEBPACK_IMPORTED_MODULE_3__["ReadService"] },
        { type: src_app_shared_services__WEBPACK_IMPORTED_MODULE_3__["MediaService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ArticleComponent.prototype, "type", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ArticleComponent.prototype, "id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ArticleComponent.prototype, "itemparam", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ArticleComponent.prototype, "media", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ArticleComponent.prototype, "lazyload", void 0);
    ArticleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-article',
            template: __webpack_require__(/*! raw-loader!./article.component.html */ "./node_modules/raw-loader/index.js!./src/app/maincontent/article/article.component.html"),
            styles: [__webpack_require__(/*! ./article.css */ "./src/app/maincontent/article/article.css"), __webpack_require__(/*! ./article.component.css */ "./src/app/maincontent/article/article.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"],
            src_app_shared_services_log_service__WEBPACK_IMPORTED_MODULE_4__["Log"],
            src_app_shared_services__WEBPACK_IMPORTED_MODULE_3__["ReadService"],
            src_app_shared_services__WEBPACK_IMPORTED_MODULE_3__["MediaService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], ArticleComponent);
    return ArticleComponent;
}());



/***/ }),

/***/ "./src/app/maincontent/article/article.css":
/*!*************************************************!*\
  !*** ./src/app/maincontent/article/article.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.article-content {\n  /*additional border: add a thicker aspect*/\n  border-width: 1px 1px 1px 1px ;\n  border-style: solid;\n\n  /* spacing between article-content  */\n\tmargin-bottom: 1em;\n  /* small decorating border */\n\tborder-color: #ddd;\n\tcolor: #333;\n\tbackground: white;\n\n}\n\n.article-description {\n  padding: 0.2em;\n}\n\n.article-description-container {\n  padding: 0.2em;\n}\n\n.article-subtitle {\n  font-size: 0.7em;\n  color: #333;\n}\n\n.article-title {\n\tfont-weight: bold;\n  padding: 0.7em;\n}\n\n.article-title-moreinfo {\n  text-align: right;\n  padding-right: 1em;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbmNvbnRlbnQvYXJ0aWNsZS9hcnRpY2xlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSwwQ0FBMEM7RUFDMUMsOEJBQThCO0VBQzlCLG1CQUFtQjs7RUFFbkIscUNBQXFDO0NBQ3RDLGtCQUFrQjtFQUNqQiw0QkFBNEI7Q0FDN0Isa0JBQWtCO0NBQ2xCLFdBQVc7Q0FDWCxpQkFBaUI7O0FBRWxCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBO0NBQ0MsaUJBQWlCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvbWFpbmNvbnRlbnQvYXJ0aWNsZS9hcnRpY2xlLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmFydGljbGUtY29udGVudCB7XG4gIC8qYWRkaXRpb25hbCBib3JkZXI6IGFkZCBhIHRoaWNrZXIgYXNwZWN0Ki9cbiAgYm9yZGVyLXdpZHRoOiAxcHggMXB4IDFweCAxcHggO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuXG4gIC8qIHNwYWNpbmcgYmV0d2VlbiBhcnRpY2xlLWNvbnRlbnQgICovXG5cdG1hcmdpbi1ib3R0b206IDFlbTtcbiAgLyogc21hbGwgZGVjb3JhdGluZyBib3JkZXIgKi9cblx0Ym9yZGVyLWNvbG9yOiAjZGRkO1xuXHRjb2xvcjogIzMzMztcblx0YmFja2dyb3VuZDogd2hpdGU7XG5cbn1cblxuLmFydGljbGUtZGVzY3JpcHRpb24ge1xuICBwYWRkaW5nOiAwLjJlbTtcbn1cblxuLmFydGljbGUtZGVzY3JpcHRpb24tY29udGFpbmVyIHtcbiAgcGFkZGluZzogMC4yZW07XG59XG5cbi5hcnRpY2xlLXN1YnRpdGxlIHtcbiAgZm9udC1zaXplOiAwLjdlbTtcbiAgY29sb3I6ICMzMzM7XG59XG5cbi5hcnRpY2xlLXRpdGxlIHtcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmc6IDAuN2VtO1xufVxuXG4uYXJ0aWNsZS10aXRsZS1tb3JlaW5mbyB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBwYWRkaW5nLXJpZ2h0OiAxZW07XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/maincontent/article/article.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/maincontent/article/article.module.ts ***!
  \*******************************************************/
/*! exports provided: ArticleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleModule", function() { return ArticleModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ */ "./src/app/maincontent/article/index.ts");
/* harmony import */ var src_app_maincontent_image_image_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/maincontent/image/image.module */ "./src/app/maincontent/image/image.module.ts");
/* harmony import */ var src_app_maincontent_video_video_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/maincontent/video/video.module */ "./src/app/maincontent/video/video.module.ts");
/* harmony import */ var _article_route__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./article.route */ "./src/app/maincontent/article/article.route.ts");









var ArticleModule = /** @class */ (function () {
    function ArticleModule() {
    }
    ArticleModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                src_app_maincontent_image_image_module__WEBPACK_IMPORTED_MODULE_6__["ImageModule"],
                src_app_maincontent_video_video_module__WEBPACK_IMPORTED_MODULE_7__["VideoModule"],
                src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_article_route__WEBPACK_IMPORTED_MODULE_8__["articleRoutes"], { useHash: true })
            ],
            declarations: [
                ___WEBPACK_IMPORTED_MODULE_5__["ArticleComponent"],
                ___WEBPACK_IMPORTED_MODULE_5__["ArticlePreviewComponent"],
                ___WEBPACK_IMPORTED_MODULE_5__["ArticlelistComponent"],
                ___WEBPACK_IMPORTED_MODULE_5__["AttachmentsComponent"],
                ___WEBPACK_IMPORTED_MODULE_5__["ItemsComponent"],
            ],
            providers: [],
            entryComponents: [],
            exports: [
                ___WEBPACK_IMPORTED_MODULE_5__["ArticleComponent"],
                ___WEBPACK_IMPORTED_MODULE_5__["ArticlePreviewComponent"],
                ___WEBPACK_IMPORTED_MODULE_5__["AttachmentsComponent"],
            ],
        })
    ], ArticleModule);
    return ArticleModule;
}());



/***/ }),

/***/ "./src/app/maincontent/article/article.route.ts":
/*!******************************************************!*\
  !*** ./src/app/maincontent/article/article.route.ts ***!
  \******************************************************/
/*! exports provided: articleRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "articleRoutes", function() { return articleRoutes; });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ */ "./src/app/maincontent/article/index.ts");

var articleRoutes = [
    {
        path: 'structure',
        component: ___WEBPACK_IMPORTED_MODULE_0__["ItemsComponent"], data: { type: 'structure' }
    },
    {
        path: 'organisation',
        component: ___WEBPACK_IMPORTED_MODULE_0__["ItemsComponent"], data: { type: 'structure' }
    },
    {
        path: 'contact',
        component: ___WEBPACK_IMPORTED_MODULE_0__["ItemsComponent"], data: { type: 'contacts' }
    },
    {
        path: 'reports',
        component: ___WEBPACK_IMPORTED_MODULE_0__["ItemsComponent"], data: { type: 'reports' }
    },
    {
        path: 'comptesrendus',
        component: ___WEBPACK_IMPORTED_MODULE_0__["ItemsComponent"], data: { type: 'reports', }
    },
    {
        path: 'links',
        component: ___WEBPACK_IMPORTED_MODULE_0__["ItemsComponent"], data: { type: 'links' }
    },
    {
        path: 'liens',
        component: ___WEBPACK_IMPORTED_MODULE_0__["ItemsComponent"], data: { type: 'links' }
    },
    {
        path: 'documents',
        component: ___WEBPACK_IMPORTED_MODULE_0__["ItemsComponent"], data: { type: 'documents' }
    }
];


/***/ }),

/***/ "./src/app/maincontent/article/articlelist.component.css":
/*!***************************************************************!*\
  !*** ./src/app/maincontent/article/articlelist.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW5jb250ZW50L2FydGljbGUvYXJ0aWNsZWxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/maincontent/article/articlelist.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/maincontent/article/articlelist.component.ts ***!
  \**************************************************************/
/*! exports provided: ArticlelistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticlelistComponent", function() { return ArticlelistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ArticlelistComponent = /** @class */ (function () {
    function ArticlelistComponent() {
        this.max = 0;
        this.items = null;
    }
    ArticlelistComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ArticlelistComponent.prototype, "type", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ArticlelistComponent.prototype, "max", void 0);
    ArticlelistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-articlelist',
            template: __webpack_require__(/*! raw-loader!./articlelist.component.html */ "./node_modules/raw-loader/index.js!./src/app/maincontent/article/articlelist.component.html"),
            styles: [__webpack_require__(/*! ./articlelist.component.css */ "./src/app/maincontent/article/articlelist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ArticlelistComponent);
    return ArticlelistComponent;
}());



/***/ }),

/***/ "./src/app/maincontent/article/articlepreview.component.css":
/*!******************************************************************!*\
  !*** ./src/app/maincontent/article/articlepreview.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".article-previewdescription-container {\n      align-content: flex-start;\n      display: -webkit-box;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n              flex-direction: row;\n}\n\n.thumbnail-container {\n  margin-right: 16px;\n  display: block;\n  min-width: 80px;\n  max-width: 144px;\n  overflow: hidden;\n}\n\n.thumbnail-container img {\n  height: auto;\n}\n\n.article-previewdescription {\n  background: -webkit-gradient(linear, left top, left bottom, from(#000), to(#ddd));\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  display: inline-block;\n}\n\n.description-and-thumbnail {\n  width: 80%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbmNvbnRlbnQvYXJ0aWNsZS9hcnRpY2xlcHJldmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO01BQ00seUJBQXlCO01BQ3pCLG9CQUFhO01BQWIsYUFBYTtNQUNiLDhCQUFtQjtNQUFuQiw2QkFBbUI7Y0FBbkIsbUJBQW1CO0FBQ3pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlGQUFpRjtFQUNqRiw2QkFBNkI7RUFDN0Isb0NBQW9DO0VBQ3BDLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFVBQVU7QUFDWiIsImZpbGUiOiJzcmMvYXBwL21haW5jb250ZW50L2FydGljbGUvYXJ0aWNsZXByZXZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcnRpY2xlLXByZXZpZXdkZXNjcmlwdGlvbi1jb250YWluZXIge1xuICAgICAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4udGh1bWJuYWlsLWNvbnRhaW5lciB7XG4gIG1hcmdpbi1yaWdodDogMTZweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1pbi13aWR0aDogODBweDtcbiAgbWF4LXdpZHRoOiAxNDRweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnRodW1ibmFpbC1jb250YWluZXIgaW1nIHtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4uYXJ0aWNsZS1wcmV2aWV3ZGVzY3JpcHRpb24ge1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBmcm9tKCMwMDApLCB0bygjZGRkKSk7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmRlc2NyaXB0aW9uLWFuZC10aHVtYm5haWwge1xuICB3aWR0aDogODAlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/maincontent/article/articlepreview.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/maincontent/article/articlepreview.component.ts ***!
  \*****************************************************************/
/*! exports provided: ArticlePreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticlePreviewComponent", function() { return ArticlePreviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services */ "./src/app/shared/services/index.ts");
/* harmony import */ var src_app_shared_services_log_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/log.service */ "./src/app/shared/services/log.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_maincontent_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/maincontent/image */ "./src/app/maincontent/image/index.ts");







var ArticlePreviewComponent = /** @class */ (function () {
    function ArticlePreviewComponent(log, readService, mediaService, http, imageService) {
        this.log = log;
        this.readService = readService;
        this.mediaService = mediaService;
        this.http = http;
        this.imageService = imageService;
        this.media = 'media';
        this.maxPreviewLength = 240;
        this.offset = 100;
        this.defaultImage = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].server + '/' + src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].public + '/resources/ring-alt-32.svg';
        this.url = '';
    }
    ArticlePreviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.log.debug('ArticlePreviewComponent ' + this.id);
        if (this.type && this.id) {
            this.http.get(this.readService.getUrl(this.type, this.id))
                .subscribe(function (data) {
                _this.item = data;
                _this.item.media = _this.mediaService.initMediaUrl(_this.type, _this.id, _this.item.media, _this.media);
                if (_this.getImages() && _this.getImages().length > 0) {
                    _this.image = _this.getImages()[0];
                }
                // TODO : news/1 vs calendar/detail/1
                if ('calendar' === _this.type) {
                    _this.url = '/' + _this.type + '/detail/' + _this.item.id;
                }
                else {
                    _this.url = '/' + _this.type + '/' + _this.item.id;
                }
            });
        }
    };
    ArticlePreviewComponent.prototype.getItem = function () {
        return this.item;
    };
    ArticlePreviewComponent.prototype.getPreviewDescription = function () {
        var result = '';
        if (this.item.description.length > this.maxPreviewLength) {
            result = this.item.description.substring(0, this.maxPreviewLength) + ' ...';
        }
        else {
            result = this.item.description;
        }
        return result;
    };
    ArticlePreviewComponent.prototype.getThumbnail = function (picture) {
        return this.imageService.getThumbnail(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].server, this.type + '/' + this.item.id, picture);
    };
    ArticlePreviewComponent.prototype.getImages = function () {
        return this.mediaService.getImages(this.getItem());
    };
    ArticlePreviewComponent.prototype.getAttachments = function () {
        return this.mediaService.getAttachments(this.getItem());
    };
    ArticlePreviewComponent.ctorParameters = function () { return [
        { type: src_app_shared_services_log_service__WEBPACK_IMPORTED_MODULE_3__["Log"] },
        { type: src_app_shared_services__WEBPACK_IMPORTED_MODULE_2__["ReadService"] },
        { type: src_app_shared_services__WEBPACK_IMPORTED_MODULE_2__["MediaService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
        { type: src_app_maincontent_image__WEBPACK_IMPORTED_MODULE_6__["ImageService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ArticlePreviewComponent.prototype, "type", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ArticlePreviewComponent.prototype, "id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ArticlePreviewComponent.prototype, "item", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ArticlePreviewComponent.prototype, "media", void 0);
    ArticlePreviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-articlepreview',
            template: __webpack_require__(/*! raw-loader!./articlepreview.component.html */ "./node_modules/raw-loader/index.js!./src/app/maincontent/article/articlepreview.component.html"),
            styles: [__webpack_require__(/*! ./article.css */ "./src/app/maincontent/article/article.css"), __webpack_require__(/*! ./articlepreview.css */ "./src/app/maincontent/article/articlepreview.css"), __webpack_require__(/*! ./articlepreview.component.css */ "./src/app/maincontent/article/articlepreview.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_log_service__WEBPACK_IMPORTED_MODULE_3__["Log"], src_app_shared_services__WEBPACK_IMPORTED_MODULE_2__["ReadService"],
            src_app_shared_services__WEBPACK_IMPORTED_MODULE_2__["MediaService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            src_app_maincontent_image__WEBPACK_IMPORTED_MODULE_6__["ImageService"]])
    ], ArticlePreviewComponent);
    return ArticlePreviewComponent;
}());



/***/ }),

/***/ "./src/app/maincontent/article/articlepreview.css":
/*!********************************************************!*\
  !*** ./src/app/maincontent/article/articlepreview.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n.article-preview-content img {\n  width: 80%;\n\tpadding-top: 0.5em;\n}\n\n\n\n.hidelink {\n  text-decoration: none;\n}\n\n\n\n.images-container {\n\tborder-top: 1px solid #ddd;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbmNvbnRlbnQvYXJ0aWNsZS9hcnRpY2xlcHJldmlldy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtFQUNFLFVBQVU7Q0FDWCxrQkFBa0I7QUFDbkI7Ozs7QUFJQTtFQUNFLHFCQUFxQjtBQUN2Qjs7OztBQUdBO0NBQ0MsMEJBQTBCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvbWFpbmNvbnRlbnQvYXJ0aWNsZS9hcnRpY2xlcHJldmlldy5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuLmFydGljbGUtcHJldmlldy1jb250ZW50IGltZyB7XG4gIHdpZHRoOiA4MCU7XG5cdHBhZGRpbmctdG9wOiAwLjVlbTtcbn1cblxuXG5cbi5oaWRlbGluayB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuXG4uaW1hZ2VzLWNvbnRhaW5lciB7XG5cdGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGRkO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/maincontent/article/attachments.component.css":
/*!***************************************************************!*\
  !*** ./src/app/maincontent/article/attachments.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tooltip {\n  position: relative;\n}\n\n.tooltip span {\n  margin-left: -999em;\n  position: absolute;\n}\n\n.tooltip:hover span {\n  left: 1em;\n  margin-left: 0;\n  position: absolute;\n  top: 2em;\n  width: 250px;\n  z-index: 99;\n}\n\n.tooltip:hover img {\n  border: 0;\n  float: left;\n  margin: -1em 0 0 4em;\n  position: absolute;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbmNvbnRlbnQvYXJ0aWNsZS9hdHRhY2htZW50cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsU0FBUztFQUNULFdBQVc7RUFDWCxvQkFBb0I7RUFDcEIsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvbWFpbmNvbnRlbnQvYXJ0aWNsZS9hdHRhY2htZW50cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvb2x0aXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi50b29sdGlwIHNwYW4ge1xuICBtYXJnaW4tbGVmdDogLTk5OWVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi50b29sdGlwOmhvdmVyIHNwYW4ge1xuICBsZWZ0OiAxZW07XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMmVtO1xuICB3aWR0aDogMjUwcHg7XG4gIHotaW5kZXg6IDk5O1xufVxuXG4udG9vbHRpcDpob3ZlciBpbWcge1xuICBib3JkZXI6IDA7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW46IC0xZW0gMCAwIDRlbTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/maincontent/article/attachments.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/maincontent/article/attachments.component.ts ***!
  \**************************************************************/
/*! exports provided: AttachmentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttachmentsComponent", function() { return AttachmentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_maincontent_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/maincontent/image */ "./src/app/maincontent/image/index.ts");




var AttachmentsComponent = /** @class */ (function () {
    function AttachmentsComponent(imageService) {
        this.imageService = imageService;
    }
    AttachmentsComponent.prototype.getDefaultImage = function (picture) {
        return this.imageService.getDefaultThumbnail(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].server, this.recorduri, picture);
    };
    /**
    * https://css-tricks.com/responsive-images-youre-just-changing-resolutions-use-srcset/
    */
    AttachmentsComponent.prototype.getThumbnailSrcSet = function (picture) {
        return this.imageService.getThumbnailSrcSet(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].server, this.recorduri, picture);
    };
    AttachmentsComponent.ctorParameters = function () { return [
        { type: src_app_maincontent_image__WEBPACK_IMPORTED_MODULE_3__["ImageService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], AttachmentsComponent.prototype, "attachments", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], AttachmentsComponent.prototype, "recorduri", void 0);
    AttachmentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-attachments',
            template: __webpack_require__(/*! raw-loader!./attachments.component.html */ "./node_modules/raw-loader/index.js!./src/app/maincontent/article/attachments.component.html"),
            styles: [__webpack_require__(/*! ./attachments.component.css */ "./src/app/maincontent/article/attachments.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_maincontent_image__WEBPACK_IMPORTED_MODULE_3__["ImageService"]])
    ], AttachmentsComponent);
    return AttachmentsComponent;
}());



/***/ }),

/***/ "./src/app/maincontent/article/index.ts":
/*!**********************************************!*\
  !*** ./src/app/maincontent/article/index.ts ***!
  \**********************************************/
/*! exports provided: AttachmentsComponent, ArticleComponent, ArticlePreviewComponent, ArticlelistComponent, MediaComponent, ItemsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _attachments_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attachments.component */ "./src/app/maincontent/article/attachments.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AttachmentsComponent", function() { return _attachments_component__WEBPACK_IMPORTED_MODULE_0__["AttachmentsComponent"]; });

/* harmony import */ var _article_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./article.component */ "./src/app/maincontent/article/article.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArticleComponent", function() { return _article_component__WEBPACK_IMPORTED_MODULE_1__["ArticleComponent"]; });

/* harmony import */ var _articlepreview_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./articlepreview.component */ "./src/app/maincontent/article/articlepreview.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArticlePreviewComponent", function() { return _articlepreview_component__WEBPACK_IMPORTED_MODULE_2__["ArticlePreviewComponent"]; });

/* harmony import */ var _articlelist_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./articlelist.component */ "./src/app/maincontent/article/articlelist.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArticlelistComponent", function() { return _articlelist_component__WEBPACK_IMPORTED_MODULE_3__["ArticlelistComponent"]; });

/* harmony import */ var _media_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./media.component */ "./src/app/maincontent/article/media.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MediaComponent", function() { return _media_component__WEBPACK_IMPORTED_MODULE_4__["MediaComponent"]; });

/* harmony import */ var _items_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./items.component */ "./src/app/maincontent/article/items.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ItemsComponent", function() { return _items_component__WEBPACK_IMPORTED_MODULE_5__["ItemsComponent"]; });









/***/ }),

/***/ "./src/app/maincontent/article/items.component.css":
/*!*********************************************************!*\
  !*** ./src/app/maincontent/article/items.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW5jb250ZW50L2FydGljbGUvaXRlbXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/maincontent/article/items.component.ts":
/*!********************************************************!*\
  !*** ./src/app/maincontent/article/items.component.ts ***!
  \********************************************************/
/*! exports provided: ItemsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsComponent", function() { return ItemsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var src_app_shared_services_read_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/read.service */ "./src/app/shared/services/read.service.ts");
/* harmony import */ var src_app_shared_services_log_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/log.service */ "./src/app/shared/services/log.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");







var ItemsComponent = /** @class */ (function () {
    function ItemsComponent(titleService, log, dataService, http, route) {
        this.titleService = titleService;
        this.log = log;
        this.dataService = dataService;
        this.http = http;
        this.route = route;
        this.items = null;
        this.type = null;
    }
    ItemsComponent.prototype.ngOnInit = function () {
        // Example of route for opening documents
        // { path: 'documents',  component: ItemsComponent, data: { type: 'documents' }  }
        var _this = this;
        this.route.data.forEach(function (data) {
            if (data['type'] !== undefined) {
                _this.type = data['type'];
            }
        });
        this.http.get(this.dataService.getIndexUrl(this.type))
            .subscribe(function (data) {
            _this.items = data;
            _this.log.debug(_this.type + ' ' + _this.items.length);
        });
        // this.titleService.setTitle(this.type);
    };
    ItemsComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"] },
        { type: src_app_shared_services_log_service__WEBPACK_IMPORTED_MODULE_5__["Log"] },
        { type: src_app_shared_services_read_service__WEBPACK_IMPORTED_MODULE_4__["ReadService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    ItemsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-items',
            template: __webpack_require__(/*! raw-loader!./items.component.html */ "./node_modules/raw-loader/index.js!./src/app/maincontent/article/items.component.html"),
            styles: [__webpack_require__(/*! ./items.component.css */ "./src/app/maincontent/article/items.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"], src_app_shared_services_log_service__WEBPACK_IMPORTED_MODULE_5__["Log"], src_app_shared_services_read_service__WEBPACK_IMPORTED_MODULE_4__["ReadService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ItemsComponent);
    return ItemsComponent;
}());



/***/ }),

/***/ "./src/app/maincontent/article/media.component.ts":
/*!********************************************************!*\
  !*** ./src/app/maincontent/article/media.component.ts ***!
  \********************************************************/
/*! exports provided: MediaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaComponent", function() { return MediaComponent; });
var MediaComponent = /** @class */ (function () {
    function MediaComponent() {
    }
    return MediaComponent;
}());



/***/ }),

/***/ "./src/app/maincontent/calendar/calendar-time-line-month.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/maincontent/calendar/calendar-time-line-month.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".monthdaycell {\n  font-size: 0.75em;\n}\n\n\n.weekend {\n  background-color: #E8E8FF;\n}\n\n\n.monthtable {\n-webkit-box-flex: 1;\n        flex: 1 1 100%;\n}\n\n\n.flexcontainer {\n display: -webkit-box;\n display: flex;\n -webkit-box-orient: horizontal;\n -webkit-box-direction: normal;\n         flex-direction: row;\n flex-wrap: wrap;\n }\n\n\n.yearheading {\n  text-align: center;\n}\n\n\n@media all and (min-width: 55em) {\n\t.monthtable {\n\n\t\t-webkit-box-flex: 1;\n\n\t\t        flex: 1 1 20em;\n\t}\n}\n\n\n/* https://stackoverflow.com/questions/3839809/detect-iphone-ipad-purely-by-css#3839896 */\n\n\n@media screen and (max-device-width: 480px) and (orientation:portrait) {\n  .flexcontainer {\n    -webkit-box-flex:0;\n            flex:none;\n    display: table;\n    width: 20em;\n  }\n  .monthtable {\n    -webkit-box-flex:0;\n            flex:none;\n    width: 20em;\n  }\n}\n\n\n@media screen and (max-device-width: 480px) and (orientation:landscape) {\n  .flexcontainer {\n   -webkit-box-flex:0;\n           flex:none;\n   display: table;\n    width: 20em;\n  }\n  .monthtable {\n    -webkit-box-flex:0;\n            flex:none;\n    width: 20em;\n  }\n}\n\n\n/*\n* different colors by activity\n*/\n\n\n.activitycolor0 {\n  background-color: #BF360C;\n}\n\n\n.activitycolor1 {\n  background-color: #880E4F;\n}\n\n\n.activitycolor2 {\n  background-color: #4A148C;\n}\n\n\n.activitycolor3 {\n  background-color: #9A3820;\n}\n\n\n.activitycolor4 {\n  background-color: #9C27B0;\n}\n\n\n.activitycolor5 {\n  background-color: #673AB7;\n}\n\n\n.activitycolor6 {\n  background-color: #01579B;\n}\n\n\n.activitycolor7 {\n  background-color: #006064;\n}\n\n\n.activitycolor8 {\n  background-color: #004D40;\n}\n\n\n.activitycolor9 {\n  background-color: #212121;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbmNvbnRlbnQvY2FsZW5kYXIvY2FsZW5kYXItdGltZS1saW5lLW1vbnRoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7QUFDbkI7OztBQUdBO0VBQ0UseUJBQXlCO0FBQzNCOzs7QUFJQTtBQUNBLG1CQUFjO1FBQWQsY0FBYztBQUNkOzs7QUFFQTtDQUNDLG9CQUFhO0NBQWIsYUFBYTtDQUNiLDhCQUFtQjtDQUFuQiw2QkFBbUI7U0FBbkIsbUJBQW1CO0NBQ25CLGVBQWU7Q0FDZjs7O0FBRUQ7RUFDRSxrQkFBa0I7QUFDcEI7OztBQUVBO0NBQ0M7O0VBRUMsbUJBQWM7O1VBQWQsY0FBYztDQUNmO0FBQ0Q7OztBQUdBLHlGQUF5Rjs7O0FBQ3pGO0VBQ0U7SUFDRSxrQkFBUztZQUFULFNBQVM7SUFDVCxjQUFjO0lBQ2QsV0FBVztFQUNiO0VBQ0E7SUFDRSxrQkFBUztZQUFULFNBQVM7SUFDVCxXQUFXO0VBQ2I7QUFDRjs7O0FBRUE7RUFDRTtHQUNDLGtCQUFTO1dBQVQsU0FBUztHQUNULGNBQWM7SUFDYixXQUFXO0VBQ2I7RUFDQTtJQUNFLGtCQUFTO1lBQVQsU0FBUztJQUNULFdBQVc7RUFDYjtBQUNGOzs7QUFFQTs7Q0FFQzs7O0FBRUQ7RUFDRSx5QkFBeUI7QUFDM0I7OztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOzs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7OztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOzs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7OztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOzs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9tYWluY29udGVudC9jYWxlbmRhci9jYWxlbmRhci10aW1lLWxpbmUtbW9udGguY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb250aGRheWNlbGwge1xuICBmb250LXNpemU6IDAuNzVlbTtcbn1cblxuXG4ud2Vla2VuZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFOEU4RkY7XG59XG5cblxuXG4ubW9udGh0YWJsZSB7XG5mbGV4OiAxIDEgMTAwJTtcbn1cblxuLmZsZXhjb250YWluZXIge1xuIGRpc3BsYXk6IGZsZXg7XG4gZmxleC1kaXJlY3Rpb246IHJvdztcbiBmbGV4LXdyYXA6IHdyYXA7XG4gfVxuXG4ueWVhcmhlYWRpbmcge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbkBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDU1ZW0pIHtcblx0Lm1vbnRodGFibGUge1xuXG5cdFx0ZmxleDogMSAxIDIwZW07XG5cdH1cbn1cblxuXG4vKiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8zODM5ODA5L2RldGVjdC1pcGhvbmUtaXBhZC1wdXJlbHktYnktY3NzIzM4Mzk4OTYgKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA0ODBweCkgYW5kIChvcmllbnRhdGlvbjpwb3J0cmFpdCkge1xuICAuZmxleGNvbnRhaW5lciB7XG4gICAgZmxleDpub25lO1xuICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgIHdpZHRoOiAyMGVtO1xuICB9XG4gIC5tb250aHRhYmxlIHtcbiAgICBmbGV4Om5vbmU7XG4gICAgd2lkdGg6IDIwZW07XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDQ4MHB4KSBhbmQgKG9yaWVudGF0aW9uOmxhbmRzY2FwZSkge1xuICAuZmxleGNvbnRhaW5lciB7XG4gICBmbGV4Om5vbmU7XG4gICBkaXNwbGF5OiB0YWJsZTtcbiAgICB3aWR0aDogMjBlbTtcbiAgfVxuICAubW9udGh0YWJsZSB7XG4gICAgZmxleDpub25lO1xuICAgIHdpZHRoOiAyMGVtO1xuICB9XG59XG5cbi8qXG4qIGRpZmZlcmVudCBjb2xvcnMgYnkgYWN0aXZpdHlcbiovXG5cbi5hY3Rpdml0eWNvbG9yMCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNCRjM2MEM7XG59XG5cbi5hY3Rpdml0eWNvbG9yMSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4ODBFNEY7XG59XG5cbi5hY3Rpdml0eWNvbG9yMiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0QTE0OEM7XG59XG5cbi5hY3Rpdml0eWNvbG9yMyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5QTM4MjA7XG59XG5cbi5hY3Rpdml0eWNvbG9yNCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5QzI3QjA7XG59XG5cbi5hY3Rpdml0eWNvbG9yNSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2NzNBQjc7XG59XG5cbi5hY3Rpdml0eWNvbG9yNiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMTU3OUI7XG59XG5cbi5hY3Rpdml0eWNvbG9yNyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDYwNjQ7XG59XG5cbi5hY3Rpdml0eWNvbG9yOCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDRENDA7XG59XG5cbi5hY3Rpdml0eWNvbG9yOSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTIxMjE7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/maincontent/calendar/calendar-time-line-month.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/maincontent/calendar/calendar-time-line-month.component.ts ***!
  \****************************************************************************/
/*! exports provided: CalendarTimeLineMonthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarTimeLineMonthComponent", function() { return CalendarTimeLineMonthComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _calendar_time_line_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calendar-time-line.component */ "./src/app/maincontent/calendar/calendar-time-line.component.ts");



var CalendarTimeLineMonthComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CalendarTimeLineMonthComponent, _super);
    function CalendarTimeLineMonthComponent() {
        //  years: any[] = [];
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.months = [];
        return _this;
    }
    CalendarTimeLineMonthComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var localItems = null;
        // Load activities and add link URL, logo URL
        this.http.get(this.dataService.getIndexUrl(this.type))
            .subscribe(function (data) {
            localItems = data;
            // About 10-20 events per season.
            // https://angular.io/guide/pipes#!#no-filter-pipe
            // filter the next upcoming events
            var now = new Date();
            var date = _this.dateutil.getFirstDayOfMonth(now);
            localItems = localItems.filter(function (obj) { return _this.dateutil.dateAfter(new Date(obj.date), date); });
            // localItems = this.orderby.transform(localItems, 'date', 'asc');
            _this.log.debug(_this.type + ' ' + localItems.length);
            // replace or add new items
            for (var i = 0; i < localItems.length; i++) {
                if (_this.items.length > i) {
                    _this.items[i] = localItems[i];
                }
                else {
                    _this.items.push(localItems[i]);
                }
            }
            // #####################################################
            var end = _this.findEndDate();
            // list by days
            /*
            date = this.dateutil.getFirstDayOfMonth(current);
            while (this.dateutil.dateBefore(date, end)) {
        
              this.days.push(this.getDayContent(date));
              date = new Date(date.setDate(date.getDate() + 1));
        
            }
        */
            // list by months
            while (_this.dateutil.dateBefore(date, end)) {
                var lastday = _this.dateutil.getLastDayOfMonth(date);
                var days = [];
                var dayOfMonth = new Date(date);
                while (_this.dateutil.dateBefore(dayOfMonth, lastday)) {
                    var day = new Date(dayOfMonth); // issue when not cloning
                    days.push(_this.getDayContent(day));
                    dayOfMonth = new Date(dayOfMonth.setDate(dayOfMonth.getDate() + 1));
                }
                _this.months.push({ date: date,
                    number: date.getMonth(),
                    year: date.getFullYear(),
                    name: _this.dateutil.getMonthName(date.getMonth()),
                    days: days });
                date = new Date(date.setMonth(date.getMonth() + 1));
            }
        });
    };
    CalendarTimeLineMonthComponent.prototype.getDayOfMonthStyle = function (day) {
        return this.dateutil.isWeekEndDay(day) ? 'weekend' : '';
    };
    CalendarTimeLineMonthComponent.prototype.getItemTitleMonthFormat = function (item) {
        var result = '';
        var activitysize = 3;
        var size = 45;
        if (item.activity) {
            result += item.activity.toUpperCase() + ': ';
        }
        if (item.title) {
            result += item.title;
            if (result.length > size) {
                result = result.substring(0, size);
                result += '...';
            }
        }
        return result;
    };
    /**
    * Maximum 10 colors.
    */
    CalendarTimeLineMonthComponent.prototype.getCssColor = function (activity) {
        var color = 0;
        if (activity && activity.length > 0) {
            color = activity.charCodeAt(0);
        }
        color = color % 10;
        return 'activitycolor' + color.toString();
    };
    CalendarTimeLineMonthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-calendar-time-line-month',
            template: __webpack_require__(/*! raw-loader!./calendar-time-line-month.component.html */ "./node_modules/raw-loader/index.js!./src/app/maincontent/calendar/calendar-time-line-month.component.html"),
            styles: [__webpack_require__(/*! ./divtable.css */ "./src/app/maincontent/calendar/divtable.css"), __webpack_require__(/*! ./calendar-time-line.component.css */ "./src/app/maincontent/calendar/calendar-time-line.component.css"), __webpack_require__(/*! ./calendar-time-line-month.component.css */ "./src/app/maincontent/calendar/calendar-time-line-month.component.css")]
        })
    ], CalendarTimeLineMonthComponent);
    return CalendarTimeLineMonthComponent;
}(_calendar_time_line_component__WEBPACK_IMPORTED_MODULE_2__["CalendarTimeLineComponent"]));



/***/ }),

/***/ "./src/app/maincontent/calendar/calendar-time-line-week.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/maincontent/calendar/calendar-time-line-week.component.ts ***!
  \***************************************************************************/
/*! exports provided: CalendarTimeLineWeekComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarTimeLineWeekComponent", function() { return CalendarTimeLineWeekComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _calendar_time_line_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calendar-time-line.component */ "./src/app/maincontent/calendar/calendar-time-line.component.ts");



var CalendarTimeLineWeekComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CalendarTimeLineWeekComponent, _super);
    function CalendarTimeLineWeekComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.weeks = [];
        return _this;
    }
    CalendarTimeLineWeekComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var localItems = null;
        // Load activities and add link URL, logo URL
        this.http.get(this.dataService.getIndexUrl(this.type))
            .subscribe(function (data) {
            localItems = data;
            // About 10-20 events per season.
            // https://angular.io/guide/pipes#!#no-filter-pipe
            // filter the next upcoming events
            var now = new Date();
            localItems = localItems.filter(function (obj) { return _this.dateutil.dateAfter(new Date(obj.date), now); });
            //localItems = this.orderby.transform(localItems, 'date', 'asc');
            _this.log.debug(_this.type + ' ' + localItems.length);
            // replace or add new items
            for (var i = 0; i < localItems.length; i++) {
                if (_this.items.length > i) {
                    _this.items[i] = localItems[i];
                }
                else {
                    _this.items.push(localItems[i]);
                }
            }
            // #####################################################
            var current = new Date();
            var date = _this.dateutil.getFirstDayOfMonth(current);
            var end = _this.findEndDate();
            // list by weeks
            date = _this.dateutil.getFirstMondayOfMonth(current);
            while (_this.dateutil.dateBefore(date, end)) {
                var sunday = new Date(date);
                sunday = new Date(sunday.setDate(sunday.getDate() + 6));
                var days = [];
                var dayOfWeek = new Date(date);
                while (_this.dateutil.dateBefore(dayOfWeek, sunday)) {
                    var day = new Date(dayOfWeek); // issue when not cloning
                    days.push(_this.getDayContent(day));
                    dayOfWeek = new Date(dayOfWeek.setDate(dayOfWeek.getDate() + 1));
                }
                _this.weeks.push({ date: date,
                    number: _this.dateutil.getWeek(date),
                    days: days
                });
                date = new Date(date.setDate(date.getDate() + 7));
            }
        });
    };
    CalendarTimeLineWeekComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-calendar-time-line-week',
            template: __webpack_require__(/*! raw-loader!./calendar-time-line-week.component.html */ "./node_modules/raw-loader/index.js!./src/app/maincontent/calendar/calendar-time-line-week.component.html"),
            styles: [__webpack_require__(/*! ./divtable.css */ "./src/app/maincontent/calendar/divtable.css"), __webpack_require__(/*! ./calendar-time-line.component.css */ "./src/app/maincontent/calendar/calendar-time-line.component.css")]
        })
    ], CalendarTimeLineWeekComponent);
    return CalendarTimeLineWeekComponent;
}(_calendar_time_line_component__WEBPACK_IMPORTED_MODULE_2__["CalendarTimeLineComponent"]));



/***/ }),

/***/ "./src/app/maincontent/calendar/calendar-time-line.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/maincontent/calendar/calendar-time-line.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".feed-article {\n  color: white;\n  margin: 0.2em;\n  padding: 0.2em;\n\n}\n.feed-article:hover {\n  cursor: pointer;\n}\n.calendar-time-line-container {\n  display: block;\n}\n.calendar-time-line-event {\n    float: left;\n\n}\n.clearBoth { clear:both; }\n.feed-subtitle {\n  font-size: 0.7em;\n}\n.calendar-icon {\n  font-size: 1em;\n}\n.yearline {\n  background-color: #E0E0E0;\n}\n.monthline {\n  background-color: #E9E9E9;\n  text-align: center;\n}\n.dayline {\n  font-size: 0.8em;\n}\n.endofweekline {\n  border-bottom: 1px solid #ddd;\n  font-size: 0.8em;\n\n}\n/*\n* custom styles for table\n*/\n.cellBody {\n  height: 100%;\n  width: 100%;\n}\n.dayCell {\n  font-size: 0.75em;\n  height: 3em;\n  width: 14.2857%;\n\n}\n.monthCell1 {\n  background-color: pink;\n}\n.monthCell2 {\n  background-color: yellow;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbmNvbnRlbnQvY2FsZW5kYXIvY2FsZW5kYXItdGltZS1saW5lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGNBQWM7O0FBRWhCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7SUFDSSxXQUFXOztBQUVmO0FBQ0EsYUFBYSxVQUFVLEVBQUU7QUFFekI7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFHQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUdBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSw2QkFBNkI7RUFDN0IsZ0JBQWdCOztBQUVsQjtBQUlBOztDQUVDO0FBRUQ7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiO0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztFQUNYLGVBQWU7O0FBRWpCO0FBSUE7RUFDRSxzQkFBc0I7QUFDeEI7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL21haW5jb250ZW50L2NhbGVuZGFyL2NhbGVuZGFyLXRpbWUtbGluZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZlZWQtYXJ0aWNsZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luOiAwLjJlbTtcbiAgcGFkZGluZzogMC4yZW07XG5cbn1cbi5mZWVkLWFydGljbGU6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jYWxlbmRhci10aW1lLWxpbmUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5jYWxlbmRhci10aW1lLWxpbmUtZXZlbnQge1xuICAgIGZsb2F0OiBsZWZ0O1xuXG59XG4uY2xlYXJCb3RoIHsgY2xlYXI6Ym90aDsgfVxuXG4uZmVlZC1zdWJ0aXRsZSB7XG4gIGZvbnQtc2l6ZTogMC43ZW07XG59XG4uY2FsZW5kYXItaWNvbiB7XG4gIGZvbnQtc2l6ZTogMWVtO1xufVxuXG5cbi55ZWFybGluZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFMEUwRTA7XG59XG5cblxuLm1vbnRobGluZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFOUU5RTk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmRheWxpbmUge1xuICBmb250LXNpemU6IDAuOGVtO1xufVxuLmVuZG9md2Vla2xpbmUge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbiAgZm9udC1zaXplOiAwLjhlbTtcblxufVxuXG5cblxuLypcbiogY3VzdG9tIHN0eWxlcyBmb3IgdGFibGVcbiovXG5cbi5jZWxsQm9keSB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5kYXlDZWxsIHtcbiAgZm9udC1zaXplOiAwLjc1ZW07XG4gIGhlaWdodDogM2VtO1xuICB3aWR0aDogMTQuMjg1NyU7XG5cbn1cblxuXG5cbi5tb250aENlbGwxIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcGluaztcbn1cblxuLm1vbnRoQ2VsbDIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/maincontent/calendar/calendar-time-line.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/maincontent/calendar/calendar-time-line.component.ts ***!
  \**********************************************************************/
/*! exports provided: CalendarTimeLineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarTimeLineComponent", function() { return CalendarTimeLineComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_read_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/read.service */ "./src/app/shared/services/read.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_shared_services_log_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/log.service */ "./src/app/shared/services/log.service.ts");
/* harmony import */ var src_app_shared_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services */ "./src/app/shared/services/index.ts");






var CalendarTimeLineComponent = /** @class */ (function () {
    function CalendarTimeLineComponent(dataService, http, log, routeUtil, dateutil) {
        this.dataService = dataService;
        this.http = http;
        this.log = log;
        this.routeUtil = routeUtil;
        this.dateutil = dateutil;
        this.items = [];
        this.days = [];
        this.type = 'calendar';
        // Add an empty item in order to display something.
        // Considering that IO operations are slow, it constructs a raw frame for the end user.
        //  this.items.push({ id: '', activity: '.....', title: '.... .... ........', date: '..-..-....' });
        this.dateutil.setLang('fr');
    }
    CalendarTimeLineComponent.prototype.getDayContent = function (day) {
        var _this = this;
        return { date: day,
            name: this.dateutil.getDayShort(day.getDay()),
            number: day.getDate(),
            monthnumber: day.getMonth(),
            monthname: this.dateutil.getMonthName(day.getMonth()),
            items: this.items.filter(function (obj) { return _this.dateMatch(obj, day); })
        };
    };
    CalendarTimeLineComponent.prototype.getDayLineClass = function (date) {
        var result = date.getDay() === 0 ? 'endofweekline' : 'dayline';
        if (this.dateutil.isWeekEndDate(date)) {
            result += ' weekend';
        }
        return result;
    };
    /**
    * get URL for current locale.
    */
    CalendarTimeLineComponent.prototype.getUrl = function (item) {
        return 'detail/' + item.id;
    };
    CalendarTimeLineComponent.prototype.dateMatch = function (obj, from) {
        var result = false;
        var date = obj.date ? new Date(obj.date) : null;
        var enddate = obj.enddate ? new Date(obj.enddate) : null;
        if (this.dateutil.dateEquals(date, from)) {
            result = true;
        }
        else if (this.dateutil.dateEquals(enddate, from)) {
            result = true;
        }
        else if (this.dateutil.dateAfter(from, date) && this.dateutil.dateBefore(from, enddate)) {
            result = true;
        }
        return result;
    };
    CalendarTimeLineComponent.prototype.findEndDate = function () {
        var date = null;
        if (this.items && this.items.length > 0 && this.items[this.items.length - 1].date) {
            date = new Date(this.items[this.items.length - 1].date);
        }
        else {
            date = new Date();
        }
        // calculate last day of month
        date.setMonth(date.getMonth() + 1);
        date = this.dateutil.getLastDayOfMonth(date);
        return date;
    };
    CalendarTimeLineComponent.prototype.getShortTitle = function (item) {
        var result = '';
        var size = 10;
        if (item.activity) {
            result += item.activity.toUpperCase() + ' ';
        }
        if (item.title) {
            result = item.title;
            if (result.length > size) {
                result = result.substring(0, size);
                result += '...';
            }
            else {
                result = result;
            }
        }
        return result;
    };
    CalendarTimeLineComponent.prototype.getCellStyle = function (month) {
        return month % 2 ? 'monthCell1' : 'monthCell2';
    };
    CalendarTimeLineComponent.ctorParameters = function () { return [
        { type: src_app_shared_services_read_service__WEBPACK_IMPORTED_MODULE_2__["ReadService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: src_app_shared_services_log_service__WEBPACK_IMPORTED_MODULE_4__["Log"] },
        { type: src_app_shared_services__WEBPACK_IMPORTED_MODULE_5__["RouteUtilService"] },
        { type: src_app_shared_services__WEBPACK_IMPORTED_MODULE_5__["DateUtilService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], CalendarTimeLineComponent.prototype, "items", void 0);
    CalendarTimeLineComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-calendar-time-line',
            template: __webpack_require__(/*! raw-loader!./calendar-time-line.component.html */ "./node_modules/raw-loader/index.js!./src/app/maincontent/calendar/calendar-time-line.component.html"),
            styles: [__webpack_require__(/*! ./divtable.css */ "./src/app/maincontent/calendar/divtable.css"), __webpack_require__(/*! ./calendar-time-line.component.css */ "./src/app/maincontent/calendar/calendar-time-line.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_read_service__WEBPACK_IMPORTED_MODULE_2__["ReadService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            src_app_shared_services_log_service__WEBPACK_IMPORTED_MODULE_4__["Log"],
            src_app_shared_services__WEBPACK_IMPORTED_MODULE_5__["RouteUtilService"],
            src_app_shared_services__WEBPACK_IMPORTED_MODULE_5__["DateUtilService"]])
    ], CalendarTimeLineComponent);
    return CalendarTimeLineComponent;
}());



/***/ }),

/***/ "./src/app/maincontent/calendar/calendar.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/maincontent/calendar/calendar.module.ts ***!
  \*********************************************************/
/*! exports provided: CalendarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarModule", function() { return CalendarModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_maincontent_image_image_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/maincontent/image/image.module */ "./src/app/maincontent/image/image.module.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var src_app_maincontent_activity_activity_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/maincontent/activity/activity.module */ "./src/app/maincontent/activity/activity.module.ts");
/* harmony import */ var src_app_maincontent_article_article_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/maincontent/article/article.module */ "./src/app/maincontent/article/article.module.ts");
/* harmony import */ var _calendar_route__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./calendar.route */ "./src/app/maincontent/calendar/calendar.route.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ */ "./src/app/maincontent/calendar/index.ts");










var CalendarModule = /** @class */ (function () {
    function CalendarModule() {
    }
    CalendarModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                src_app_maincontent_image_image_module__WEBPACK_IMPORTED_MODULE_4__["ImageModule"],
                src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                src_app_maincontent_article_article_module__WEBPACK_IMPORTED_MODULE_7__["ArticleModule"],
                src_app_maincontent_activity_activity_module__WEBPACK_IMPORTED_MODULE_6__["ActivityModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_calendar_route__WEBPACK_IMPORTED_MODULE_8__["calendarRoutes"], { useHash: true })
            ],
            declarations: [
                ___WEBPACK_IMPORTED_MODULE_9__["CalendarListComponent"],
                ___WEBPACK_IMPORTED_MODULE_9__["CalendarActivitiesComponent"],
                ___WEBPACK_IMPORTED_MODULE_9__["CalendarEventComponent"],
                ___WEBPACK_IMPORTED_MODULE_9__["CalendarTimeLineComponent"],
                ___WEBPACK_IMPORTED_MODULE_9__["CalendarTimeLineWeekComponent"],
                ___WEBPACK_IMPORTED_MODULE_9__["CalendarTimeLineMonthComponent"],
                ___WEBPACK_IMPORTED_MODULE_9__["CalendarPreviewComponent"],
                ___WEBPACK_IMPORTED_MODULE_9__["CalendarFeedComponent"],
            ],
            providers: [],
            entryComponents: [],
            exports: [
                ___WEBPACK_IMPORTED_MODULE_9__["CalendarFeedComponent"],
            ],
        })
    ], CalendarModule);
    return CalendarModule;
}());



/***/ }),

/***/ "./src/app/maincontent/calendar/calendar.route.ts":
/*!********************************************************!*\
  !*** ./src/app/maincontent/calendar/calendar.route.ts ***!
  \********************************************************/
/*! exports provided: calendarRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calendarRoutes", function() { return calendarRoutes; });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ */ "./src/app/maincontent/calendar/index.ts");

var calendarRoutes = [
    {
        path: 'calendrier',
        component: ___WEBPACK_IMPORTED_MODULE_0__["CalendarActivitiesComponent"]
    },
    {
        path: 'calendrier/:activity',
        component: ___WEBPACK_IMPORTED_MODULE_0__["CalendarActivitiesComponent"]
    },
    {
        path: 'calendrier/detail/:id',
        component: ___WEBPACK_IMPORTED_MODULE_0__["CalendarEventComponent"]
    },
    {
        path: 'calendar',
        component: ___WEBPACK_IMPORTED_MODULE_0__["CalendarActivitiesComponent"]
    },
    {
        path: 'calendar/:activity',
        component: ___WEBPACK_IMPORTED_MODULE_0__["CalendarActivitiesComponent"]
    },
    {
        path: 'calendar/detail/:id',
        component: ___WEBPACK_IMPORTED_MODULE_0__["CalendarEventComponent"]
    }
];


/***/ }),

/***/ "./src/app/maincontent/calendar/calendaractivities.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/maincontent/calendar/calendaractivities.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".activity-cell {\n  border-width: 1px;\n  border-style: solid;\n  border-color: #ddd;\n}\n\n.my-activity-button {\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbmNvbnRlbnQvY2FsZW5kYXIvY2FsZW5kYXJhY3Rpdml0aWVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL21haW5jb250ZW50L2NhbGVuZGFyL2NhbGVuZGFyYWN0aXZpdGllcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFjdGl2aXR5LWNlbGwge1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiAjZGRkO1xufVxuXG4ubXktYWN0aXZpdHktYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/maincontent/calendar/calendaractivities.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/maincontent/calendar/calendaractivities.component.ts ***!
  \**********************************************************************/
/*! exports provided: CalendarActivitiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarActivitiesComponent", function() { return CalendarActivitiesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var src_app_shared_services_log_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/log.service */ "./src/app/shared/services/log.service.ts");
/* harmony import */ var src_app_shared_services_read_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/read.service */ "./src/app/shared/services/read.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");








/**
* Display a list of club activities, which have calendar events :
* - Each button open a list of clubs
* - When clicked, display a list of events for the current activity
*/
var CalendarActivitiesComponent = /** @class */ (function () {
    function CalendarActivitiesComponent(titleService, router, dataService, http, log, route) {
        this.titleService = titleService;
        this.router = router;
        this.dataService = dataService;
        this.http = http;
        this.log = log;
        this.route = route;
        /**
        * list of activities objects
        */
        this.activityObjectList = [];
        // this.titleService.setTitle(this.type);
    }
    CalendarActivitiesComponent.prototype.ngOnInit = function () {
        var _this = this;
        // path parameters
        this.route.params.forEach(function (params) {
            if (params['activity'] !== undefined) {
                _this.activity = params['activity'];
            }
        });
        // Load activities and add link URL, logo URL
        this.http.get(this.dataService.getIndexUrl('activities'))
            .subscribe(function (data) {
            _this.activityObjectList = data.filter(function (el) { return el.calendar === 'true'; });
        });
    };
    CalendarActivitiesComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: src_app_shared_services_read_service__WEBPACK_IMPORTED_MODULE_5__["ReadService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] },
        { type: src_app_shared_services_log_service__WEBPACK_IMPORTED_MODULE_4__["Log"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    CalendarActivitiesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! raw-loader!./calendaractivities.component.html */ "./node_modules/raw-loader/index.js!./src/app/maincontent/calendar/calendaractivities.component.html"),
            styles: [__webpack_require__(/*! ./calendaractivities.component.css */ "./src/app/maincontent/calendar/calendaractivities.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_shared_services_read_service__WEBPACK_IMPORTED_MODULE_5__["ReadService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"],
            src_app_shared_services_log_service__WEBPACK_IMPORTED_MODULE_4__["Log"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], CalendarActivitiesComponent);
    return CalendarActivitiesComponent;
}());



/***/ }),

/***/ "./src/app/maincontent/calendar/calendarevent.component.css":
/*!******************************************************************!*\
  !*** ./src/app/maincontent/calendar/calendarevent.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".calendarevent-container {\n \n}\n\n.article-title {\n\tfont-weight: bold;\n  padding: 0.7em;\n}\n\n.article-subtitle {\n  font-size: 0.7em;\n  color: #333;\n}\n\n.article-title-moreinfo {\n  text-align: right;\n  padding-right: 1em;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbmNvbnRlbnQvY2FsZW5kYXIvY2FsZW5kYXJldmVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOztBQUVBO0NBQ0MsaUJBQWlCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUdBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL21haW5jb250ZW50L2NhbGVuZGFyL2NhbGVuZGFyZXZlbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYWxlbmRhcmV2ZW50LWNvbnRhaW5lciB7XG4gXG59XG5cbi5hcnRpY2xlLXRpdGxlIHtcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmc6IDAuN2VtO1xufVxuXG4uYXJ0aWNsZS1zdWJ0aXRsZSB7XG4gIGZvbnQtc2l6ZTogMC43ZW07XG4gIGNvbG9yOiAjMzMzO1xufVxuXG5cbi5hcnRpY2xlLXRpdGxlLW1vcmVpbmZvIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHBhZGRpbmctcmlnaHQ6IDFlbTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/maincontent/calendar/calendarevent.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/maincontent/calendar/calendarevent.component.ts ***!
  \*****************************************************************/
/*! exports provided: CalendarEventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarEventComponent", function() { return CalendarEventComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services */ "./src/app/shared/services/index.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var CalendarEventComponent = /** @class */ (function () {
    function CalendarEventComponent(log, route, readService, mediaService, http, routeUtil) {
        this.log = log;
        this.route = route;
        this.readService = readService;
        this.mediaService = mediaService;
        this.http = http;
        this.routeUtil = routeUtil;
        this.type = 'calendar';
        this.media = 'media';
        this.activity = '';
        this.parentUrl = '';
    }
    CalendarEventComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            if (params['id'] !== undefined) {
                _this.id = params['id'];
            }
            _this.fetchData();
        });
    };
    CalendarEventComponent.prototype.fetchData = function () {
        var _this = this;
        if (this.type && this.id) {
            this.http.get(this.readService.getUrl(this.type, this.id))
                .subscribe(function (data) {
                _this.item = data;
                _this.activity = _this.item.activity;
                _this.parentUrl = '/' + _this.routeUtil.getCalendarRoute(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].defaultlocale) + '/' + _this.item.activity;
                _this.item.media = _this.mediaService.initMediaUrl(_this.type, _this.id, _this.item.media, _this.media);
            });
        }
        else {
            if (!this.type) {
                this.log.error('CalendarEventComponent empty type');
            }
            if (!this.id) {
                this.log.error('CalendarEventComponent empty id');
            }
        }
    };
    CalendarEventComponent.prototype.getItem = function () {
        return this.item;
    };
    CalendarEventComponent.prototype.getImages = function () {
        return this.mediaService.getImages(this.getItem());
    };
    CalendarEventComponent.prototype.getAttachments = function () {
        return this.mediaService.getAttachments(this.getItem());
    };
    /**
    * eg media/news/3/thumbnails
    */
    CalendarEventComponent.prototype.getRecordUri = function () {
        return this.type + '/' + this.id;
    };
    CalendarEventComponent.ctorParameters = function () { return [
        { type: src_app_shared_services__WEBPACK_IMPORTED_MODULE_3__["Log"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: src_app_shared_services__WEBPACK_IMPORTED_MODULE_3__["ReadService"] },
        { type: src_app_shared_services__WEBPACK_IMPORTED_MODULE_3__["MediaService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
        { type: src_app_shared_services__WEBPACK_IMPORTED_MODULE_3__["RouteUtilService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CalendarEventComponent.prototype, "id", void 0);
    CalendarEventComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-calendar-event',
            template: __webpack_require__(/*! raw-loader!./calendarevent.component.html */ "./node_modules/raw-loader/index.js!./src/app/maincontent/calendar/calendarevent.component.html"),
            styles: [__webpack_require__(/*! ./calendarevent.component.css */ "./src/app/maincontent/calendar/calendarevent.component.css"), __webpack_require__(/*! ../article/article.css */ "./src/app/maincontent/article/article.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services__WEBPACK_IMPORTED_MODULE_3__["Log"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_shared_services__WEBPACK_IMPORTED_MODULE_3__["ReadService"],
            src_app_shared_services__WEBPACK_IMPORTED_MODULE_3__["MediaService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            src_app_shared_services__WEBPACK_IMPORTED_MODULE_3__["RouteUtilService"]])
    ], CalendarEventComponent);
    return CalendarEventComponent;
}());



/***/ }),

/***/ "./src/app/maincontent/calendar/calendarfeed.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/maincontent/calendar/calendarfeed.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".feed-article {\n  font-weight: bold;\n  padding: 1.5em;\n}\n\n.feed-subtitle {\n  font-size: 0.7em;\n}\n\n.calendar-icon {\n  font-size: 1em;\n}\n\n.article-feed-spacer {\npadding-bottom: 1em;\n\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbmNvbnRlbnQvY2FsZW5kYXIvY2FsZW5kYXJmZWVkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7QUFDQSxtQkFBbUI7O0FBRW5CIiwiZmlsZSI6InNyYy9hcHAvbWFpbmNvbnRlbnQvY2FsZW5kYXIvY2FsZW5kYXJmZWVkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmVlZC1hcnRpY2xlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmc6IDEuNWVtO1xufVxuXG4uZmVlZC1zdWJ0aXRsZSB7XG4gIGZvbnQtc2l6ZTogMC43ZW07XG59XG5cbi5jYWxlbmRhci1pY29uIHtcbiAgZm9udC1zaXplOiAxZW07XG59XG5cbi5hcnRpY2xlLWZlZWQtc3BhY2VyIHtcbnBhZGRpbmctYm90dG9tOiAxZW07XG5cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/maincontent/calendar/calendarfeed.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/maincontent/calendar/calendarfeed.component.ts ***!
  \****************************************************************/
/*! exports provided: CalendarFeedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarFeedComponent", function() { return CalendarFeedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_shared_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services */ "./src/app/shared/services/index.ts");




/**
* same timing animations
*/
var CalendarFeedComponent = /** @class */ (function () {
    function CalendarFeedComponent(dataService, http, log) {
        this.dataService = dataService;
        this.http = http;
        this.log = log;
        this.imageservice = '';
        this.max = 1;
        this.items = [];
        this.type = 'calendar';
        // Add an empty item in order to display something.
        // Considering that IO operations are slow, it constructs a raw frame for the end user.
        this.items.push({ id: '', activity: '.....', title: '.... .... ........', date: '..-..-....' });
    }
    CalendarFeedComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var localItems = null;
        // Load activities and add link URL, logo URL
        this.http.get(this.dataService.getIndexUrl(this.type))
            .subscribe(function (data) {
            localItems = data;
            // About 10-20 events per season.
            // https://angular.io/guide/pipes#!#no-filter-pipe
            // filter the next upcoming events
            var begin = new Date();
            begin.setDate(begin.getDate() - 1);
            localItems = localItems.filter(function (obj) { return _this.dateAfter(new Date(obj.date), begin); });
            //localItems = this.orderby.transform(localItems, 'date', 'asc');
            if (_this.max > 0 && localItems.length > _this.max) {
                localItems = localItems.slice(0, _this.max);
            }
            _this.log.debug(_this.type + ' ' + localItems.length);
            // replace or add new items
            for (var i = 0; i < localItems.length; i++) {
                if (_this.items.length > i) {
                    _this.items[i] = localItems[i];
                }
                else {
                    _this.items.push(localItems[i]);
                }
            }
        });
    };
    CalendarFeedComponent.prototype.dateAfter = function (date, from) {
        var result = false;
        if (date && from) {
            if (date.getTime() - from.getTime() > 0) {
                result = true;
            }
        }
        return result;
    };
    CalendarFeedComponent.ctorParameters = function () { return [
        { type: src_app_shared_services__WEBPACK_IMPORTED_MODULE_3__["ReadService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: src_app_shared_services__WEBPACK_IMPORTED_MODULE_3__["Log"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CalendarFeedComponent.prototype, "max", void 0);
    CalendarFeedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-calendar-feed',
            template: __webpack_require__(/*! raw-loader!./calendarfeed.component.html */ "./node_modules/raw-loader/index.js!./src/app/maincontent/calendar/calendarfeed.component.html"),
            styles: [__webpack_require__(/*! ./calendarfeed.component.css */ "./src/app/maincontent/calendar/calendarfeed.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services__WEBPACK_IMPORTED_MODULE_3__["ReadService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            src_app_shared_services__WEBPACK_IMPORTED_MODULE_3__["Log"]])
    ], CalendarFeedComponent);
    return CalendarFeedComponent;
}());



/***/ }),

/***/ "./src/app/maincontent/calendar/calendarlist.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/maincontent/calendar/calendarlist.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW5jb250ZW50L2NhbGVuZGFyL2NhbGVuZGFybGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/maincontent/calendar/calendarlist.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/maincontent/calendar/calendarlist.component.ts ***!
  \****************************************************************/
/*! exports provided: CalendarListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarListComponent", function() { return CalendarListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_services_read_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/read.service */ "./src/app/shared/services/read.service.ts");
/* harmony import */ var src_app_shared_services_log_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/log.service */ "./src/app/shared/services/log.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");







var CalendarListComponent = /** @class */ (function () {
    function CalendarListComponent(router, dataservice, log, route, http) {
        this.router = router;
        this.dataservice = dataservice;
        this.log = log;
        this.route = route;
        this.http = http;
        this.items = [];
        this.years = [];
        this.localregion = 'Bretagne';
        /**
        * router link of the current page
        * Explanation :
        * - en: calendar
        * - fr: calendrier
        */
        this.routerLink = '';
        this.logosUrl = '';
        this.type = 'calendar';
    }
    CalendarListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            if (params['activity'] !== undefined) {
                _this.activity = params['activity'];
                _this.log.debug('activity selected ' + _this.activity);
            }
        });
        // Explanation :
        // if locale is en: calendar
        // if locale is fr: calendrier
        this.routerLink = this.route.routeConfig.path;
        if (this.activity) {
            this.http.get(this.dataservice.getIndexUrl(this.type))
                .subscribe(function (data) {
                _this.items = data;
                _this.log.debug('getCalendarEvents complete : ' + _this.activity + ' ' + _this.items.length);
                // filter by activity
                _this.items = _this.items.filter(function (item) { return item.activity.indexOf(_this.activity) !== -1; });
                // next events
                // this.orderby.transform(this.items, 'date', 'asc');
            });
        }
    };
    CalendarListComponent.prototype.gotoDetail = function (currentItem) {
        this.router.navigate([this.routerLink + '/detail/', currentItem.activity]);
    };
    CalendarListComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: src_app_shared_services_read_service__WEBPACK_IMPORTED_MODULE_3__["ReadService"] },
        { type: src_app_shared_services_log_service__WEBPACK_IMPORTED_MODULE_4__["Log"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CalendarListComponent.prototype, "activity", void 0);
    CalendarListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-calendar-list',
            template: __webpack_require__(/*! raw-loader!./calendarlist.component.html */ "./node_modules/raw-loader/index.js!./src/app/maincontent/calendar/calendarlist.component.html"),
            styles: [__webpack_require__(/*! ./calendarlist.component.css */ "./src/app/maincontent/calendar/calendarlist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_shared_services_read_service__WEBPACK_IMPORTED_MODULE_3__["ReadService"],
            src_app_shared_services_log_service__WEBPACK_IMPORTED_MODULE_4__["Log"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], CalendarListComponent);
    return CalendarListComponent;
}());



/***/ }),

/***/ "./src/app/maincontent/calendar/calendarpreview.component.css":
/*!********************************************************************!*\
  !*** ./src/app/maincontent/calendar/calendarpreview.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n.calendar-preview-title {\n  color: black;\n  font-size: 1.125em;\n  font-weight: bold;\n}\n.calendar-preview-title:hover {\n  color: #3B78E7;\n  text-decoration: underline;\n}\n.calendar-preview-description {\n  background: -webkit-gradient(linear, left top, left bottom, from(#000), to(#ddd));\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  display: inline-block;\n}\n.calendar-preview-table-row {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbmNvbnRlbnQvY2FsZW5kYXIvY2FsZW5kYXJwcmV2aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsMEJBQTBCO0FBQzVCO0FBRUE7RUFDRSxpRkFBaUY7RUFDakYsNkJBQTZCO0VBQzdCLG9DQUFvQztFQUNwQyxxQkFBcUI7QUFDdkI7QUFHQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDhCQUFtQjtFQUFuQiw2QkFBbUI7VUFBbkIsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvbWFpbmNvbnRlbnQvY2FsZW5kYXIvY2FsZW5kYXJwcmV2aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuLmNhbGVuZGFyLXByZXZpZXctdGl0bGUge1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMS4xMjVlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uY2FsZW5kYXItcHJldmlldy10aXRsZTpob3ZlciB7XG4gIGNvbG9yOiAjM0I3OEU3O1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLmNhbGVuZGFyLXByZXZpZXctZGVzY3JpcHRpb24ge1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBmcm9tKCMwMDApLCB0bygjZGRkKSk7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuXG4uY2FsZW5kYXItcHJldmlldy10YWJsZS1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/maincontent/calendar/calendarpreview.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/maincontent/calendar/calendarpreview.component.ts ***!
  \*******************************************************************/
/*! exports provided: CalendarPreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarPreviewComponent", function() { return CalendarPreviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services */ "./src/app/shared/services/index.ts");
/* harmony import */ var src_app_shared_services_log_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/log.service */ "./src/app/shared/services/log.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_maincontent_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/maincontent/image */ "./src/app/maincontent/image/index.ts");








var CalendarPreviewComponent = /** @class */ (function () {
    function CalendarPreviewComponent(log, readService, mediaService, http, routeUtil, imageService) {
        this.log = log;
        this.readService = readService;
        this.mediaService = mediaService;
        this.http = http;
        this.routeUtil = routeUtil;
        this.imageService = imageService;
        this.media = 'media';
        this.show = '';
        this.maxPreviewLength = 240;
        this.offset = 100;
        this.defaultImage = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].server + '/' + src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].public + '/resources/ring-alt-32.svg';
        this.url = '';
    }
    CalendarPreviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.item) {
            this.log.debug('CalendarPreviewComponent: ' + this.item.id);
            this.item.media = this.mediaService.initMediaUrl(this.type, this.item.id, this.item.media, this.media);
            if (this.getImages() && this.getImages().length > 0) {
                this.image = this.getImages()[0];
            }
        }
        else if (this.id && this.type) {
            this.log.debug('CalendarPreviewComponent : ' + this.id);
            this.http.get(this.readService.getUrl(this.type, this.id))
                .subscribe(function (data) {
                _this.item = data;
                _this.item.media = _this.mediaService.initMediaUrl(_this.type, _this.id, _this.item.media, _this.media);
                if (_this.getImages() && _this.getImages().length > 0) {
                    _this.image = _this.getImages()[0];
                }
            });
        }
    };
    CalendarPreviewComponent.prototype.getUrl = function () {
        // TODO issue with baseHref
        return '/#/' + this.routeUtil.getCalendarRoute(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].defaultlocale) + '/detail/' + this.item.id;
    };
    CalendarPreviewComponent.prototype.getItem = function () {
        return this.item;
    };
    CalendarPreviewComponent.prototype.getPreviewDescription = function () {
        var result = '';
        if (this.item.description.length > this.maxPreviewLength) {
            result = this.item.description.substring(0, this.maxPreviewLength) + ' ...';
        }
        else {
            result = this.item.description;
        }
        return result;
    };
    CalendarPreviewComponent.prototype.getThumbnail = function (picture) {
        return this.imageService.getThumbnail(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].server, this.type + '/' + this.item.id, picture);
    };
    CalendarPreviewComponent.prototype.getImages = function () {
        return this.mediaService.getImages(this.getItem());
    };
    CalendarPreviewComponent.prototype.getAttachments = function () {
        return this.mediaService.getAttachments(this.getItem());
    };
    CalendarPreviewComponent.ctorParameters = function () { return [
        { type: src_app_shared_services_log_service__WEBPACK_IMPORTED_MODULE_3__["Log"] },
        { type: src_app_shared_services__WEBPACK_IMPORTED_MODULE_2__["ReadService"] },
        { type: src_app_shared_services__WEBPACK_IMPORTED_MODULE_2__["MediaService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
        { type: src_app_shared_services__WEBPACK_IMPORTED_MODULE_2__["RouteUtilService"] },
        { type: src_app_maincontent_image__WEBPACK_IMPORTED_MODULE_6__["ImageService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CalendarPreviewComponent.prototype, "type", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CalendarPreviewComponent.prototype, "id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CalendarPreviewComponent.prototype, "item", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CalendarPreviewComponent.prototype, "media", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CalendarPreviewComponent.prototype, "show", void 0);
    CalendarPreviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-calendarpreview',
            template: __webpack_require__(/*! raw-loader!./calendarpreview.component.html */ "./node_modules/raw-loader/index.js!./src/app/maincontent/calendar/calendarpreview.component.html"),
            styles: [__webpack_require__(/*! ./calendarpreview.component.css */ "./src/app/maincontent/calendar/calendarpreview.component.css"), __webpack_require__(/*! ../article/article.css */ "./src/app/maincontent/article/article.css"), __webpack_require__(/*! ../article/articlepreview.css */ "./src/app/maincontent/article/articlepreview.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_log_service__WEBPACK_IMPORTED_MODULE_3__["Log"],
            src_app_shared_services__WEBPACK_IMPORTED_MODULE_2__["ReadService"],
            src_app_shared_services__WEBPACK_IMPORTED_MODULE_2__["MediaService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            src_app_shared_services__WEBPACK_IMPORTED_MODULE_2__["RouteUtilService"],
            src_app_maincontent_image__WEBPACK_IMPORTED_MODULE_6__["ImageService"]])
    ], CalendarPreviewComponent);
    return CalendarPreviewComponent;
}());



/***/ }),

/***/ "./src/app/maincontent/calendar/divtable.css":
/*!***************************************************!*\
  !*** ./src/app/maincontent/calendar/divtable.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*\n* Styles for table\n*/\n\n.divTable{\n\tdisplay: table;\n\twidth: 100%;\n}\n\n.divTableRow {\n\tdisplay: table-row;\n}\n\n.divTableHeading {\n\tbackground-color: #EEE;\n\tdisplay: table-header-group;\n}\n\n.divTableCell, .divTableHead {\n  border-color: #E0E0E0;\n  border-style: solid;\n  border-width: 0 0 1px 0;\n\n\tdisplay: table-cell;\n\tpadding: 3px 10px;\n}\n\n.divTableHeading {\n\tbackground-color: #EEE;\n\tdisplay: table-header-group;\n\tfont-weight: bold;\n}\n\n.divTableFoot {\n\tbackground-color: #EEE;\n\tdisplay: table-footer-group;\n\tfont-weight: bold;\n}\n\n.divTableBody {\n\tdisplay: table-row-group;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbmNvbnRlbnQvY2FsZW5kYXIvZGl2dGFibGUuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTs7Q0FFQzs7QUFFRDtDQUNDLGNBQWM7Q0FDZCxXQUFXO0FBQ1o7O0FBQ0E7Q0FDQyxrQkFBa0I7QUFDbkI7O0FBQ0E7Q0FDQyxzQkFBc0I7Q0FDdEIsMkJBQTJCO0FBQzVCOztBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQix1QkFBdUI7O0NBRXhCLG1CQUFtQjtDQUNuQixpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxzQkFBc0I7Q0FDdEIsMkJBQTJCO0NBQzNCLGlCQUFpQjtBQUNsQjs7QUFDQTtDQUNDLHNCQUFzQjtDQUN0QiwyQkFBMkI7Q0FDM0IsaUJBQWlCO0FBQ2xCOztBQUNBO0NBQ0Msd0JBQXdCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvbWFpbmNvbnRlbnQvY2FsZW5kYXIvZGl2dGFibGUuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKlxuKiBTdHlsZXMgZm9yIHRhYmxlXG4qL1xuXG4uZGl2VGFibGV7XG5cdGRpc3BsYXk6IHRhYmxlO1xuXHR3aWR0aDogMTAwJTtcbn1cbi5kaXZUYWJsZVJvdyB7XG5cdGRpc3BsYXk6IHRhYmxlLXJvdztcbn1cbi5kaXZUYWJsZUhlYWRpbmcge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFO1xuXHRkaXNwbGF5OiB0YWJsZS1oZWFkZXItZ3JvdXA7XG59XG4uZGl2VGFibGVDZWxsLCAuZGl2VGFibGVIZWFkIHtcbiAgYm9yZGVyLWNvbG9yOiAjRTBFMEUwO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IDAgMCAxcHggMDtcblxuXHRkaXNwbGF5OiB0YWJsZS1jZWxsO1xuXHRwYWRkaW5nOiAzcHggMTBweDtcbn1cblxuLmRpdlRhYmxlSGVhZGluZyB7XG5cdGJhY2tncm91bmQtY29sb3I6ICNFRUU7XG5cdGRpc3BsYXk6IHRhYmxlLWhlYWRlci1ncm91cDtcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uZGl2VGFibGVGb290IHtcblx0YmFja2dyb3VuZC1jb2xvcjogI0VFRTtcblx0ZGlzcGxheTogdGFibGUtZm9vdGVyLWdyb3VwO1xuXHRmb250LXdlaWdodDogYm9sZDtcbn1cbi5kaXZUYWJsZUJvZHkge1xuXHRkaXNwbGF5OiB0YWJsZS1yb3ctZ3JvdXA7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/maincontent/calendar/index.ts":
/*!***********************************************!*\
  !*** ./src/app/maincontent/calendar/index.ts ***!
  \***********************************************/
/*! exports provided: CalendarActivitiesComponent, CalendarEventComponent, CalendarListComponent, CalendarFeedComponent, CalendarTimeLineComponent, CalendarTimeLineWeekComponent, CalendarTimeLineMonthComponent, CalendarPreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _calendaractivities_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calendaractivities.component */ "./src/app/maincontent/calendar/calendaractivities.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CalendarActivitiesComponent", function() { return _calendaractivities_component__WEBPACK_IMPORTED_MODULE_0__["CalendarActivitiesComponent"]; });

/* harmony import */ var _calendarevent_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calendarevent.component */ "./src/app/maincontent/calendar/calendarevent.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CalendarEventComponent", function() { return _calendarevent_component__WEBPACK_IMPORTED_MODULE_1__["CalendarEventComponent"]; });

/* harmony import */ var _calendarlist_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calendarlist.component */ "./src/app/maincontent/calendar/calendarlist.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CalendarListComponent", function() { return _calendarlist_component__WEBPACK_IMPORTED_MODULE_2__["CalendarListComponent"]; });

/* harmony import */ var _calendarfeed_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calendarfeed.component */ "./src/app/maincontent/calendar/calendarfeed.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CalendarFeedComponent", function() { return _calendarfeed_component__WEBPACK_IMPORTED_MODULE_3__["CalendarFeedComponent"]; });

/* harmony import */ var _calendar_time_line_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./calendar-time-line.component */ "./src/app/maincontent/calendar/calendar-time-line.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CalendarTimeLineComponent", function() { return _calendar_time_line_component__WEBPACK_IMPORTED_MODULE_4__["CalendarTimeLineComponent"]; });

/* harmony import */ var _calendar_time_line_week_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./calendar-time-line-week.component */ "./src/app/maincontent/calendar/calendar-time-line-week.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CalendarTimeLineWeekComponent", function() { return _calendar_time_line_week_component__WEBPACK_IMPORTED_MODULE_5__["CalendarTimeLineWeekComponent"]; });

/* harmony import */ var _calendar_time_line_month_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./calendar-time-line-month.component */ "./src/app/maincontent/calendar/calendar-time-line-month.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CalendarTimeLineMonthComponent", function() { return _calendar_time_line_month_component__WEBPACK_IMPORTED_MODULE_6__["CalendarTimeLineMonthComponent"]; });

/* harmony import */ var _calendarpreview_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./calendarpreview.component */ "./src/app/maincontent/calendar/calendarpreview.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CalendarPreviewComponent", function() { return _calendarpreview_component__WEBPACK_IMPORTED_MODULE_7__["CalendarPreviewComponent"]; });











/***/ }),

/***/ "./src/app/maincontent/club/club.module.ts":
/*!*************************************************!*\
  !*** ./src/app/maincontent/club/club.module.ts ***!
  \*************************************************/
/*! exports provided: ClubModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClubModule", function() { return ClubModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ */ "./src/app/maincontent/club/index.ts");
/* harmony import */ var src_app_maincontent_activity_activity_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/maincontent/activity/activity.module */ "./src/app/maincontent/activity/activity.module.ts");
/* harmony import */ var src_app_maincontent_image_image_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/maincontent/image/image.module */ "./src/app/maincontent/image/image.module.ts");
/* harmony import */ var _club_route__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./club.route */ "./src/app/maincontent/club/club.route.ts");









var ClubModule = /** @class */ (function () {
    function ClubModule() {
    }
    ClubModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                src_app_maincontent_image_image_module__WEBPACK_IMPORTED_MODULE_7__["ImageModule"],
                src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                src_app_maincontent_activity_activity_module__WEBPACK_IMPORTED_MODULE_6__["ActivityModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_club_route__WEBPACK_IMPORTED_MODULE_8__["clubRoutes"], { useHash: true })
            ],
            declarations: [
                ___WEBPACK_IMPORTED_MODULE_5__["ClubListComponent"],
                ___WEBPACK_IMPORTED_MODULE_5__["ClubActivitiesComponent"],
                ___WEBPACK_IMPORTED_MODULE_5__["ClubDetailComponent"],
            ],
            providers: [],
            entryComponents: [],
            exports: [
                ___WEBPACK_IMPORTED_MODULE_5__["ClubListComponent"],
                ___WEBPACK_IMPORTED_MODULE_5__["ClubActivitiesComponent"],
                ___WEBPACK_IMPORTED_MODULE_5__["ClubDetailComponent"],
            ],
        })
    ], ClubModule);
    return ClubModule;
}());



/***/ }),

/***/ "./src/app/maincontent/club/club.route.ts":
/*!************************************************!*\
  !*** ./src/app/maincontent/club/club.route.ts ***!
  \************************************************/
/*! exports provided: clubRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clubRoutes", function() { return clubRoutes; });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ */ "./src/app/maincontent/club/index.ts");

var clubRoutes = [
    {
        path: 'clubs',
        component: ___WEBPACK_IMPORTED_MODULE_0__["ClubActivitiesComponent"]
    },
    {
        path: 'clubs/:activity',
        component: ___WEBPACK_IMPORTED_MODULE_0__["ClubActivitiesComponent"]
    }
];


/***/ }),

/***/ "./src/app/maincontent/club/clubactivities.component.css":
/*!***************************************************************!*\
  !*** ./src/app/maincontent/club/clubactivities.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW5jb250ZW50L2NsdWIvY2x1YmFjdGl2aXRpZXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/maincontent/club/clubactivities.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/maincontent/club/clubactivities.component.ts ***!
  \**************************************************************/
/*! exports provided: ClubActivitiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClubActivitiesComponent", function() { return ClubActivitiesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var src_app_shared_services_log_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/log.service */ "./src/app/shared/services/log.service.ts");
/* harmony import */ var src_app_shared_services_read_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/read.service */ "./src/app/shared/services/read.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");








/**
* Display a list of club activities :
* - Each button open a list of clubs
* - When clicked, display a list of clubs for the current activity
*/
var ClubActivitiesComponent = /** @class */ (function () {
    function ClubActivitiesComponent(titleService, router, dataService, log, route, http) {
        this.titleService = titleService;
        this.router = router;
        this.dataService = dataService;
        this.log = log;
        this.route = route;
        this.http = http;
        /**
        * list of activities objects
        */
        this.activityObjectList = [];
        this.type = 'clubs';
        // this.titleService.setTitle(this.type);
    }
    ClubActivitiesComponent.prototype.ngOnInit = function () {
        var _this = this;
        // path parameters
        this.route.params.forEach(function (params) {
            if (params['activity'] !== undefined) {
                _this.activity = params['activity'];
            }
        });
        //
        // Load activities and add link URL, logo URL
        //
        this.http.get(this.dataService.getIndexUrl('activities'))
            .subscribe(function (data) {
            // all activities are displayed
            _this.activityObjectList = data;
        });
    };
    ClubActivitiesComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: src_app_shared_services_read_service__WEBPACK_IMPORTED_MODULE_5__["ReadService"] },
        { type: src_app_shared_services_log_service__WEBPACK_IMPORTED_MODULE_4__["Log"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }
    ]; };
    ClubActivitiesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! raw-loader!./clubactivities.component.html */ "./node_modules/raw-loader/index.js!./src/app/maincontent/club/clubactivities.component.html"),
            styles: [__webpack_require__(/*! ./clubactivities.component.css */ "./src/app/maincontent/club/clubactivities.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_shared_services_read_service__WEBPACK_IMPORTED_MODULE_5__["ReadService"],
            src_app_shared_services_log_service__WEBPACK_IMPORTED_MODULE_4__["Log"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]])
    ], ClubActivitiesComponent);
    return ClubActivitiesComponent;
}());



/***/ }),

/***/ "./src/app/maincontent/club/clubdetail.component.css":
/*!***********************************************************!*\
  !*** ./src/app/maincontent/club/clubdetail.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".club-title {\n  padding: .4em 1em;\n\tborder-width: 1px;\n\tborder-style: solid;\n\n\tbackground-color: #e9e9e9;\n\tborder-color: #ddd;\n\tcolor: #333;\n\t/*text-shadow: 0 1px 0 #eee;*/\n\tfont-weight: bold;\n}\n\n.club-title:hover {\n  cursor: pointer;\n}\n\n/* element */\n\n.club-content {\n  /*additional border: add a thicker aspect*/\n  border-width: 1px;\n  border-style: solid;\n\n  /* spacing between article-content  */\n\tmargin-bottom: 1em;\n  /* small decorating border */\n\tborder-color: #ddd;\n\tcolor: #333;\n\n}\n\n.club-website {\n  font-size: 1em;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbmNvbnRlbnQvY2x1Yi9jbHViZGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7Q0FDbEIsaUJBQWlCO0NBQ2pCLG1CQUFtQjs7Q0FFbkIseUJBQXlCO0NBQ3pCLGtCQUFrQjtDQUNsQixXQUFXO0NBQ1gsNkJBQTZCO0NBQzdCLGlCQUFpQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUEsWUFBWTs7QUFDWjtFQUNFLDBDQUEwQztFQUMxQyxpQkFBaUI7RUFDakIsbUJBQW1COztFQUVuQixxQ0FBcUM7Q0FDdEMsa0JBQWtCO0VBQ2pCLDRCQUE0QjtDQUM3QixrQkFBa0I7Q0FDbEIsV0FBVzs7QUFFWjs7QUFFQTtFQUNFLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9tYWluY29udGVudC9jbHViL2NsdWJkZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jbHViLXRpdGxlIHtcbiAgcGFkZGluZzogLjRlbSAxZW07XG5cdGJvcmRlci13aWR0aDogMXB4O1xuXHRib3JkZXItc3R5bGU6IHNvbGlkO1xuXG5cdGJhY2tncm91bmQtY29sb3I6ICNlOWU5ZTk7XG5cdGJvcmRlci1jb2xvcjogI2RkZDtcblx0Y29sb3I6ICMzMzM7XG5cdC8qdGV4dC1zaGFkb3c6IDAgMXB4IDAgI2VlZTsqL1xuXHRmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNsdWItdGl0bGU6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qIGVsZW1lbnQgKi9cbi5jbHViLWNvbnRlbnQge1xuICAvKmFkZGl0aW9uYWwgYm9yZGVyOiBhZGQgYSB0aGlja2VyIGFzcGVjdCovXG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuXG4gIC8qIHNwYWNpbmcgYmV0d2VlbiBhcnRpY2xlLWNvbnRlbnQgICovXG5cdG1hcmdpbi1ib3R0b206IDFlbTtcbiAgLyogc21hbGwgZGVjb3JhdGluZyBib3JkZXIgKi9cblx0Ym9yZGVyLWNvbG9yOiAjZGRkO1xuXHRjb2xvcjogIzMzMztcblxufVxuXG4uY2x1Yi13ZWJzaXRlIHtcbiAgZm9udC1zaXplOiAxZW07XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/maincontent/club/clubdetail.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/maincontent/club/clubdetail.component.ts ***!
  \**********************************************************/
/*! exports provided: ClubDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClubDetailComponent", function() { return ClubDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_read_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/read.service */ "./src/app/shared/services/read.service.ts");
/* harmony import */ var src_app_shared_services_log_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/log.service */ "./src/app/shared/services/log.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");





var ClubDetailComponent = /** @class */ (function () {
    function ClubDetailComponent(readService, http, log) {
        this.readService = readService;
        this.http = http;
        this.log = log;
        this.item = {};
    }
    ClubDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.log.debug('app-my-clubdetail-component ' + this.id);
        if (this.id) {
            this.http.get(this.readService.getUrl('clubs', this.id))
                .subscribe(function (data) {
                _this.item = data;
            });
        }
        else {
            console.error('app-my-clubdetail-component empty id');
        }
    };
    ClubDetailComponent.ctorParameters = function () { return [
        { type: src_app_shared_services_read_service__WEBPACK_IMPORTED_MODULE_2__["ReadService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: src_app_shared_services_log_service__WEBPACK_IMPORTED_MODULE_3__["Log"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ClubDetailComponent.prototype, "id", void 0);
    ClubDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-clubdetail-component',
            template: __webpack_require__(/*! raw-loader!./clubdetail.component.html */ "./node_modules/raw-loader/index.js!./src/app/maincontent/club/clubdetail.component.html"),
            styles: [__webpack_require__(/*! ./clubdetail.component.css */ "./src/app/maincontent/club/clubdetail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_read_service__WEBPACK_IMPORTED_MODULE_2__["ReadService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            src_app_shared_services_log_service__WEBPACK_IMPORTED_MODULE_3__["Log"]])
    ], ClubDetailComponent);
    return ClubDetailComponent;
}());



/***/ }),

/***/ "./src/app/maincontent/club/clublist.component.css":
/*!*********************************************************!*\
  !*** ./src/app/maincontent/club/clublist.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".department-list {\n  display: -webkit-box;\n  display: flex;\n\tflex-wrap: wrap;\n}\n\n.department-button {\n min-height: 3em;\n border: none;\n margin: 0.5em;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbmNvbnRlbnQvY2x1Yi9jbHVibGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0NBQ2QsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLGVBQWU7Q0FDZixZQUFZO0NBQ1osYUFBYTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvbWFpbmNvbnRlbnQvY2x1Yi9jbHVibGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRlcGFydG1lbnQtbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLmRlcGFydG1lbnQtYnV0dG9uIHtcbiBtaW4taGVpZ2h0OiAzZW07XG4gYm9yZGVyOiBub25lO1xuIG1hcmdpbjogMC41ZW07XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/maincontent/club/clublist.component.ts":
/*!********************************************************!*\
  !*** ./src/app/maincontent/club/clublist.component.ts ***!
  \********************************************************/
/*! exports provided: ClubListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClubListComponent", function() { return ClubListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var src_app_shared_services_log_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/log.service */ "./src/app/shared/services/log.service.ts");
/* harmony import */ var src_app_shared_services_read_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/read.service */ "./src/app/shared/services/read.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");








/**
* display a list of clubs, for a selected activity
*/
var ClubListComponent = /** @class */ (function () {
    function ClubListComponent(titleService, router, dataService, log, route, http) {
        this.titleService = titleService;
        this.router = router;
        this.dataService = dataService;
        this.log = log;
        this.route = route;
        this.http = http;
        /**
        * list of clubs
        */
        this.clubs = [];
        /**
        * list of clubs
        */
        this.departmentObjectList = [];
    }
    ClubListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get(this.dataService.getIndexUrl('departments'))
            .subscribe(function (data) {
            _this.departmentObjectList = data;
            _this.log.debug('getDepartments complete ' + _this.departmentObjectList.length);
        });
        this.http.get(this.dataService.getIndexUrl('clubs'))
            .subscribe(function (data) {
            _this.clubs = data;
            _this.log.debug('getClubs complete ' + _this.clubs.length);
        });
    };
    ClubListComponent.prototype.displayClubs = function (departmentCode) {
        this.department = departmentCode;
    };
    ClubListComponent.prototype.getLogoUrl = function (id, file) {
        return 'public/activities/' + id + '/' + file;
    };
    ClubListComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: src_app_shared_services_read_service__WEBPACK_IMPORTED_MODULE_5__["ReadService"] },
        { type: src_app_shared_services_log_service__WEBPACK_IMPORTED_MODULE_4__["Log"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ClubListComponent.prototype, "activity", void 0);
    ClubListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-clubs-list',
            template: __webpack_require__(/*! raw-loader!./clublist.component.html */ "./node_modules/raw-loader/index.js!./src/app/maincontent/club/clublist.component.html"),
            styles: [__webpack_require__(/*! ./clublist.component.css */ "./src/app/maincontent/club/clublist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_shared_services_read_service__WEBPACK_IMPORTED_MODULE_5__["ReadService"],
            src_app_shared_services_log_service__WEBPACK_IMPORTED_MODULE_4__["Log"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]])
    ], ClubListComponent);
    return ClubListComponent;
}());



/***/ }),

/***/ "./src/app/maincontent/club/index.ts":
/*!*******************************************!*\
  !*** ./src/app/maincontent/club/index.ts ***!
  \*******************************************/
/*! exports provided: ClubActivitiesComponent, ClubDetailComponent, ClubListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _clubactivities_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clubactivities.component */ "./src/app/maincontent/club/clubactivities.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClubActivitiesComponent", function() { return _clubactivities_component__WEBPACK_IMPORTED_MODULE_0__["ClubActivitiesComponent"]; });

/* harmony import */ var _clubdetail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clubdetail.component */ "./src/app/maincontent/club/clubdetail.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClubDetailComponent", function() { return _clubdetail_component__WEBPACK_IMPORTED_MODULE_1__["ClubDetailComponent"]; });

/* harmony import */ var _clublist_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clublist.component */ "./src/app/maincontent/club/clublist.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClubListComponent", function() { return _clublist_component__WEBPACK_IMPORTED_MODULE_2__["ClubListComponent"]; });






/***/ }),

/***/ "./src/app/maincontent/image/image.module.ts":
/*!***************************************************!*\
  !*** ./src/app/maincontent/image/image.module.ts ***!
  \***************************************************/
/*! exports provided: ImageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageModule", function() { return ImageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ */ "./src/app/maincontent/image/index.ts");
/* harmony import */ var src_app_maincontent_image_image_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/maincontent/image/image.service */ "./src/app/maincontent/image/image.service.ts");
/* harmony import */ var _ngui_in_view__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ngui-in-view */ "./src/app/maincontent/image/ngui-in-view.ts");








var ImageModule = /** @class */ (function () {
    function ImageModule() {
    }
    ImageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            ],
            declarations: [
                ___WEBPACK_IMPORTED_MODULE_5__["ImageListComponent"],
                _ngui_in_view__WEBPACK_IMPORTED_MODULE_7__["NguiInviewComponent"]
            ],
            providers: [
                src_app_maincontent_image_image_service__WEBPACK_IMPORTED_MODULE_6__["ImageService"]
            ],
            entryComponents: [],
            exports: [
                ___WEBPACK_IMPORTED_MODULE_5__["ImageListComponent"],
                _ngui_in_view__WEBPACK_IMPORTED_MODULE_7__["NguiInviewComponent"]
            ],
        })
    ], ImageModule);
    return ImageModule;
}());



/***/ }),

/***/ "./src/app/maincontent/image/image.service.ts":
/*!****************************************************!*\
  !*** ./src/app/maincontent/image/image.service.ts ***!
  \****************************************************/
/*! exports provided: ImageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageService", function() { return ImageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ImageService = /** @class */ (function () {
    function ImageService() {
    }
    ImageService.prototype.getThumbnail = function (server, recorduri, picture) {
        // default full size
        var result = picture.url;
        if (picture && picture.thumbnails && picture.thumbnails.length > 0) {
            var index = 0;
            if (picture.thumbnails[index].url) {
                result = server + '/media/' + recorduri + '/thumbnails/' + picture.thumbnails[index].url;
            }
        }
        return result;
    };
    ImageService.prototype.getDefaultImage = function (server, recorduri, picture) {
        // default full size
        var result = '';
        if (picture.url) {
            result = picture.url;
        }
        var defaultThumbnail = this.getDefaultThumbnail(server, recorduri, picture);
        if (defaultThumbnail) {
            result = defaultThumbnail;
        }
        return result;
    };
    ImageService.prototype.getDefaultThumbnail = function (server, recorduri, picture) {
        // default full size
        var result = '';
        if (picture && picture.thumbnails && picture.thumbnails.length > 0) {
            // set the highest thumbnail resolution, if the browser doesn't support srcset
            var index = picture.thumbnails.length - 1;
            if (picture.thumbnails[index].url) {
                result = server + '/media/' + recorduri + '/thumbnails/' + picture.thumbnails[index].url;
            }
        }
        return result;
    };
    /**
    * https://css-tricks.com/responsive-images-youre-just-changing-resolutions-use-srcset/
    */
    ImageService.prototype.getThumbnailSrcSet = function (server, recorduri, picture) {
        return this.getSrcSet(server + '/media/' + recorduri + '/thumbnails/', picture);
    };
    ImageService.prototype.getSrcSet = function (prefix, picture) {
        var result = '';
        if (picture && picture.thumbnails) {
            picture.thumbnails.forEach(function (th) {
                if (th.url && th.width) {
                    result += prefix + th.url + ' ' + th.width + 'w,';
                }
            });
            result = result.substring(0, result.length - 1);
        }
        return result;
    };
    ImageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], ImageService);
    return ImageService;
}());



/***/ }),

/***/ "./src/app/maincontent/image/imagelist.component.css":
/*!***********************************************************!*\
  !*** ./src/app/maincontent/image/imagelist.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".images-container {\n\tborder-top: 1px solid #ddd;\n\tpadding-top: 0.5em;\n}\n\n.images-container img {\n\tpadding-top: 0.2em;\n  width: 100%;\n}\n\n@media all and (min-width: 55em) {\n\t.images-container img {\n\t\tdisplay: block;\n\t\tmargin: 0 auto;\n\t  max-width: 40em;\n\t\tpadding-top: 0.5em;\n\t}\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbmNvbnRlbnQvaW1hZ2UvaW1hZ2VsaXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQywwQkFBMEI7Q0FDMUIsa0JBQWtCO0FBQ25COztBQUVBO0NBQ0Msa0JBQWtCO0VBQ2pCLFdBQVc7QUFDYjs7QUFHQTtDQUNDO0VBQ0MsY0FBYztFQUNkLGNBQWM7R0FDYixlQUFlO0VBQ2hCLGtCQUFrQjtDQUNuQjs7QUFFRCIsImZpbGUiOiJzcmMvYXBwL21haW5jb250ZW50L2ltYWdlL2ltYWdlbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltYWdlcy1jb250YWluZXIge1xuXHRib3JkZXItdG9wOiAxcHggc29saWQgI2RkZDtcblx0cGFkZGluZy10b3A6IDAuNWVtO1xufVxuXG4uaW1hZ2VzLWNvbnRhaW5lciBpbWcge1xuXHRwYWRkaW5nLXRvcDogMC4yZW07XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5cbkBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDU1ZW0pIHtcblx0LmltYWdlcy1jb250YWluZXIgaW1nIHtcblx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRtYXJnaW46IDAgYXV0bztcblx0ICBtYXgtd2lkdGg6IDQwZW07XG5cdFx0cGFkZGluZy10b3A6IDAuNWVtO1xuXHR9XG5cbn0iXX0= */"

/***/ }),

/***/ "./src/app/maincontent/image/imagelist.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/maincontent/image/imagelist.component.ts ***!
  \**********************************************************/
/*! exports provided: ImageListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageListComponent", function() { return ImageListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _image_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./image.service */ "./src/app/maincontent/image/image.service.ts");
/* harmony import */ var src_app_shared_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services */ "./src/app/shared/services/index.ts");





var ImageListComponent = /** @class */ (function () {
    function ImageListComponent(imageService, browserService) {
        this.imageService = imageService;
        this.browserService = browserService;
        /**
        * offset for ImageModule
        */
        this.offset = 100;
        /**
        * default image displayed by  for ImageModule
        */
        this.defaultImage = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].server + '/' + src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].public + '/resources/ring-alt-32.svg';
        this.lazyload = false;
        this.enableinview = false;
        this.enableinview = this.browserService.isModernBrowser();
    }
    ImageListComponent.prototype.getDefaultImage = function (picture) {
        return this.imageService.getDefaultImage(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].server, this.recorduri, picture);
    };
    /**
    * https://css-tricks.com/responsive-images-youre-just-changing-resolutions-use-srcset/
    */
    ImageListComponent.prototype.getThumbnailSrcSet = function (picture) {
        return this.imageService.getThumbnailSrcSet(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].server, this.recorduri, picture);
    };
    ImageListComponent.ctorParameters = function () { return [
        { type: _image_service__WEBPACK_IMPORTED_MODULE_3__["ImageService"] },
        { type: src_app_shared_services__WEBPACK_IMPORTED_MODULE_4__["BrowserService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ImageListComponent.prototype, "recorduri", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], ImageListComponent.prototype, "images", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ImageListComponent.prototype, "lazyload", void 0);
    ImageListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-imagelist',
            template: __webpack_require__(/*! raw-loader!./imagelist.component.html */ "./node_modules/raw-loader/index.js!./src/app/maincontent/image/imagelist.component.html"),
            styles: [__webpack_require__(/*! ./imagelist.component.css */ "./src/app/maincontent/image/imagelist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_image_service__WEBPACK_IMPORTED_MODULE_3__["ImageService"], src_app_shared_services__WEBPACK_IMPORTED_MODULE_4__["BrowserService"]])
    ], ImageListComponent);
    return ImageListComponent;
}());



/***/ }),

/***/ "./src/app/maincontent/image/index.ts":
/*!********************************************!*\
  !*** ./src/app/maincontent/image/index.ts ***!
  \********************************************/
/*! exports provided: ImageService, ImageListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _imagelist_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imagelist.component */ "./src/app/maincontent/image/imagelist.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImageListComponent", function() { return _imagelist_component__WEBPACK_IMPORTED_MODULE_0__["ImageListComponent"]; });

/* harmony import */ var _image_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image.service */ "./src/app/maincontent/image/image.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImageService", function() { return _image_service__WEBPACK_IMPORTED_MODULE_1__["ImageService"]; });





/***/ }),

/***/ "./src/app/maincontent/image/ngui-in-view.ts":
/*!***************************************************!*\
  !*** ./src/app/maincontent/image/ngui-in-view.ts ***!
  \***************************************************/
/*! exports provided: NguiInviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NguiInviewComponent", function() { return NguiInviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");


/***
 * From https://github.com/allenhwkim/ngui-common
 */

/**
* An element that listens to viewport positioning and fires inView and notInview events
* ### example
* ```ts
* <ngui-in-view [observerOptions]="myObserverOptions" (inView)="doA()" (notInview)="doB()">
*   <img *ngIf src="https://picsum.photos/800/300?image=1>
* </ngui-in-view>
* ```
*/
var NguiInviewComponent = /** @class */ (function () {
    function NguiInviewComponent(element, platformId) {
        this.element = element;
        this.platformId = platformId;
        /** IntersectionObserver options */
        this.observerOptions = { threshold: [.1, .2, .3, .4, .5, .6, .7, .8] };
        /** Controls whether blur effect is applied to a component with less than 80% intersection ratio.
         * Only applies when there are no "inview" event handlers defined.
         **/
        this.blurEnabled = true;
        this.inview = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.notInview = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /** indicates that this element is in viewport */
        this.isInview = false;
        /** indicates that this element is 80% in viewport. Used by the default callback */
        this.once80PctVisible = false;
    }
    /** Starts IntersectionObserver */
    NguiInviewComponent.prototype.ngOnInit = function () {
        if (this.options) {
            this.observerOptions = this.options;
        }
        if ('IntersectionObserver' in window) {
            if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(this.platformId)) {
                this.observer = new IntersectionObserver(this.handleIntersect.bind(this), this.observerOptions);
                this.observer.observe(this.element.nativeElement);
            }
        }
        else {
            console.log('Intersection Observer not supported');
        }
    };
    /** stop IntersectionObserver */
    NguiInviewComponent.prototype.ngOnDestroy = function () {
        if (this.observer) {
            this.observer.disconnect();
        }
    };
    /** fires (inview) and (notInview) events when this component is visible or not visible  */
    NguiInviewComponent.prototype.handleIntersect = function (entries) {
        var _this = this;
        if (entries) {
            entries.forEach(function (entry) {
                if (entry['isIntersecting']) {
                    _this.isInview = true;
                    _this.defaultInviewHandler(entry);
                    _this.inview.emit(entry);
                }
                else {
                    _this.notInview.emit(entry);
                }
            });
        }
    };
    /**
     * default intersection handler, which sets blur dependes on intersection ratio
     * this won't be invoked if user provides any (inview) event. e.g. (inview)="something()"
     */
    NguiInviewComponent.prototype.defaultInviewHandler = function (entry) {
        if (!this.blurEnabled || this.once80PctVisible || this.inview.observers.length || !entry) {
            return;
        }
        if (entry.intersectionRatio < 0.8) {
            var opacity = entry.intersectionRatio * (1 / 0.8);
            var blur_1 = 20 - Math.floor(entry.intersectionRatio * 10) * 4;
            var filter = "blur(" + blur_1 + "px)";
            Object.assign(entry.target.style, { opacity: opacity, filter: filter });
        }
        else {
            entry.target.style.opacity = 1;
            entry.target.style.filter = 'unset';
            this.once80PctVisible = true;
        }
    };
    NguiInviewComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"],] }] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], NguiInviewComponent.prototype, "template", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NguiInviewComponent.prototype, "observerOptions", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NguiInviewComponent.prototype, "options", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NguiInviewComponent.prototype, "blurEnabled", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], NguiInviewComponent.prototype, "inview", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], NguiInviewComponent.prototype, "notInview", void 0);
    NguiInviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngui-inview',
            template: "\n      <ng-container *ngIf=\"isInview\" [ngTemplateOutlet]=\"template\">\n      </ng-container>\n  ",
            styles: [":host {display: block;}"]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], Object])
    ], NguiInviewComponent);
    return NguiInviewComponent;
}());



/***/ }),

/***/ "./src/app/maincontent/news/index.ts":
/*!*******************************************!*\
  !*** ./src/app/maincontent/news/index.ts ***!
  \*******************************************/
/*! exports provided: NewsComponent, NewsPreviewComponent, NewsDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _news_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./news.component */ "./src/app/maincontent/news/news.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NewsComponent", function() { return _news_component__WEBPACK_IMPORTED_MODULE_0__["NewsComponent"]; });

/* harmony import */ var _newspreview_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newspreview.component */ "./src/app/maincontent/news/newspreview.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NewsPreviewComponent", function() { return _newspreview_component__WEBPACK_IMPORTED_MODULE_1__["NewsPreviewComponent"]; });

/* harmony import */ var _newsdetails_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./newsdetails.component */ "./src/app/maincontent/news/newsdetails.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NewsDetailsComponent", function() { return _newsdetails_component__WEBPACK_IMPORTED_MODULE_2__["NewsDetailsComponent"]; });






/***/ }),

/***/ "./src/app/maincontent/news/news.component.css":
/*!*****************************************************!*\
  !*** ./src/app/maincontent/news/news.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.newstitle {\n   padding: .7em 0.7em;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbmNvbnRlbnQvbmV3cy9uZXdzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0dBQ0csbUJBQW1CO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvbWFpbmNvbnRlbnQvbmV3cy9uZXdzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5uZXdzdGl0bGUge1xuICAgcGFkZGluZzogLjdlbSAwLjdlbTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/maincontent/news/news.component.ts":
/*!****************************************************!*\
  !*** ./src/app/maincontent/news/news.component.ts ***!
  \****************************************************/
/*! exports provided: NewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsComponent", function() { return NewsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_log_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/log.service */ "./src/app/shared/services/log.service.ts");
/* harmony import */ var src_app_shared_services_read_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/read.service */ "./src/app/shared/services/read.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");





var NewsComponent = /** @class */ (function () {
    function NewsComponent(dataService, log, http) {
        this.dataService = dataService;
        this.log = log;
        this.http = http;
        this.index = [];
        this.items = [];
        this.max = 1;
        this.type = 'news';
        // initialize the component with empty values.
        // When using a low bandwith network, the goal is to display something during load.
        if (this.max > 0) {
            var emptyItem = { id: '' };
            while (this.items.length < this.max) {
                this.items.push(emptyItem);
            }
        }
    }
    NewsComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var dbItems = null;
        this.http.get(this.dataService.getIndexUrl(this.type))
            .subscribe(function (data) {
            dbItems = data;
            if (_this.max > 0 && dbItems.length > _this.max) {
                dbItems = dbItems.slice(0, _this.max);
            }
            // purge unnecessary empty items
            if (_this.items.length > dbItems.length) {
                _this.items = _this.items.filter(function (it) { return it.id !== ''; });
            }
            // replace or add new items
            for (var i = 0; i < dbItems.length; i++) {
                if (_this.items.length > i) {
                    _this.items[i] = dbItems[i];
                }
                else {
                    _this.items.push(dbItems[i]);
                }
            }
        });
        this.log.debug('NewsComponent ' + this.type + ' ' + this.items.length);
    };
    NewsComponent.ctorParameters = function () { return [
        { type: src_app_shared_services_read_service__WEBPACK_IMPORTED_MODULE_3__["ReadService"] },
        { type: src_app_shared_services_log_service__WEBPACK_IMPORTED_MODULE_2__["Log"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NewsComponent.prototype, "max", void 0);
    NewsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-news-component',
            template: __webpack_require__(/*! raw-loader!./news.component.html */ "./node_modules/raw-loader/index.js!./src/app/maincontent/news/news.component.html"),
            styles: [__webpack_require__(/*! ./news.component.css */ "./src/app/maincontent/news/news.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_read_service__WEBPACK_IMPORTED_MODULE_3__["ReadService"],
            src_app_shared_services_log_service__WEBPACK_IMPORTED_MODULE_2__["Log"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], NewsComponent);
    return NewsComponent;
}());



/***/ }),

/***/ "./src/app/maincontent/news/news.module.ts":
/*!*************************************************!*\
  !*** ./src/app/maincontent/news/news.module.ts ***!
  \*************************************************/
/*! exports provided: NewsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsModule", function() { return NewsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var src_app_maincontent_article_article_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/maincontent/article/article.module */ "./src/app/maincontent/article/article.module.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ */ "./src/app/maincontent/news/index.ts");
/* harmony import */ var src_app_maincontent_image_image_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/maincontent/image/image.module */ "./src/app/maincontent/image/image.module.ts");
/* harmony import */ var _news_route__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./news.route */ "./src/app/maincontent/news/news.route.ts");









var NewsModule = /** @class */ (function () {
    function NewsModule() {
    }
    NewsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                src_app_maincontent_image_image_module__WEBPACK_IMPORTED_MODULE_7__["ImageModule"],
                src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                src_app_maincontent_article_article_module__WEBPACK_IMPORTED_MODULE_5__["ArticleModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_news_route__WEBPACK_IMPORTED_MODULE_8__["newsRoutes"], { useHash: true })
            ],
            declarations: [
                ___WEBPACK_IMPORTED_MODULE_6__["NewsComponent"],
                ___WEBPACK_IMPORTED_MODULE_6__["NewsPreviewComponent"],
                ___WEBPACK_IMPORTED_MODULE_6__["NewsDetailsComponent"],
            ],
            providers: [],
            entryComponents: [],
            exports: [
                ___WEBPACK_IMPORTED_MODULE_6__["NewsComponent"],
            ],
        })
    ], NewsModule);
    return NewsModule;
}());



/***/ }),

/***/ "./src/app/maincontent/news/news.route.ts":
/*!************************************************!*\
  !*** ./src/app/maincontent/news/news.route.ts ***!
  \************************************************/
/*! exports provided: newsRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newsRoutes", function() { return newsRoutes; });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ */ "./src/app/maincontent/news/index.ts");

var newsRoutes = [
    // EN
    {
        path: 'news',
        component: ___WEBPACK_IMPORTED_MODULE_0__["NewsPreviewComponent"]
    },
    {
        path: 'news/:id',
        component: ___WEBPACK_IMPORTED_MODULE_0__["NewsDetailsComponent"]
    },
    // FR
    {
        path: 'actualites',
        component: ___WEBPACK_IMPORTED_MODULE_0__["NewsPreviewComponent"]
    },
    {
        path: 'actualites/:id',
        component: ___WEBPACK_IMPORTED_MODULE_0__["NewsDetailsComponent"]
    }
];


/***/ }),

/***/ "./src/app/maincontent/news/newsdetails.component.css":
/*!************************************************************!*\
  !*** ./src/app/maincontent/news/newsdetails.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW5jb250ZW50L25ld3MvbmV3c2RldGFpbHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/maincontent/news/newsdetails.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/maincontent/news/newsdetails.component.ts ***!
  \***********************************************************/
/*! exports provided: NewsDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsDetailsComponent", function() { return NewsDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_services_read_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/read.service */ "./src/app/shared/services/read.service.ts");
/* harmony import */ var src_app_shared_services_log_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/log.service */ "./src/app/shared/services/log.service.ts");





var NewsDetailsComponent = /** @class */ (function () {
    function NewsDetailsComponent(log, dataService, route) {
        this.log = log;
        this.dataService = dataService;
        this.route = route;
        this.id = '';
        this.type = 'news';
    }
    NewsDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            if (params['id'] !== undefined) {
                _this.id = params['id'];
            }
        });
    };
    NewsDetailsComponent.ctorParameters = function () { return [
        { type: src_app_shared_services_log_service__WEBPACK_IMPORTED_MODULE_4__["Log"] },
        { type: src_app_shared_services_read_service__WEBPACK_IMPORTED_MODULE_3__["ReadService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    NewsDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-newsdetails-component',
            template: __webpack_require__(/*! raw-loader!./newsdetails.component.html */ "./node_modules/raw-loader/index.js!./src/app/maincontent/news/newsdetails.component.html"),
            styles: [__webpack_require__(/*! ./newsdetails.component.css */ "./src/app/maincontent/news/newsdetails.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_log_service__WEBPACK_IMPORTED_MODULE_4__["Log"],
            src_app_shared_services_read_service__WEBPACK_IMPORTED_MODULE_3__["ReadService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], NewsDetailsComponent);
    return NewsDetailsComponent;
}());



/***/ }),

/***/ "./src/app/maincontent/news/newspreview.component.css":
/*!************************************************************!*\
  !*** ./src/app/maincontent/news/newspreview.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.newstitle {\n   padding: 0.7em 0.7em;\n}\n\n\n.news-preview-container {\n  padding-bottom: 0.2em;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbmNvbnRlbnQvbmV3cy9uZXdzcHJldmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtHQUNHLG9CQUFvQjtBQUN2Qjs7O0FBR0E7RUFDRSxxQkFBcUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9tYWluY29udGVudC9uZXdzL25ld3NwcmV2aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5uZXdzdGl0bGUge1xuICAgcGFkZGluZzogMC43ZW0gMC43ZW07XG59XG5cblxuLm5ld3MtcHJldmlldy1jb250YWluZXIge1xuICBwYWRkaW5nLWJvdHRvbTogMC4yZW07XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/maincontent/news/newspreview.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/maincontent/news/newspreview.component.ts ***!
  \***********************************************************/
/*! exports provided: NewsPreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsPreviewComponent", function() { return NewsPreviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var src_app_shared_services_log_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/log.service */ "./src/app/shared/services/log.service.ts");
/* harmony import */ var src_app_shared_services_read_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/read.service */ "./src/app/shared/services/read.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var NewsPreviewComponent = /** @class */ (function () {
    function NewsPreviewComponent(titleService, dataService, log, http) {
        this.titleService = titleService;
        this.dataService = dataService;
        this.log = log;
        this.http = http;
        this.items = [];
        this.maxElements = 4;
        this.max = 0;
        this.type = 'news';
    }
    NewsPreviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        var dbItems = null;
        this.http.get(this.dataService.getIndexUrl(this.type))
            .subscribe(function (data) {
            dbItems = data;
            //dbItems = this.orderby.transform(dbItems, 'date', 'desc');
            if (_this.max > 0 && dbItems.length > _this.max) {
                dbItems = dbItems.slice(dbItems.length - _this.max, dbItems.length);
            }
            _this.log.debug(_this.type + ' ' + dbItems.length);
            _this.items = dbItems;
        });
        // this.titleService.setTitle(this.type);
    };
    NewsPreviewComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] },
        { type: src_app_shared_services_read_service__WEBPACK_IMPORTED_MODULE_4__["ReadService"] },
        { type: src_app_shared_services_log_service__WEBPACK_IMPORTED_MODULE_3__["Log"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NewsPreviewComponent.prototype, "max", void 0);
    NewsPreviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-newspreview-component',
            template: __webpack_require__(/*! raw-loader!./newspreview.component.html */ "./node_modules/raw-loader/index.js!./src/app/maincontent/news/newspreview.component.html"),
            styles: [__webpack_require__(/*! ./newspreview.component.css */ "./src/app/maincontent/news/newspreview.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"],
            src_app_shared_services_read_service__WEBPACK_IMPORTED_MODULE_4__["ReadService"],
            src_app_shared_services_log_service__WEBPACK_IMPORTED_MODULE_3__["Log"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], NewsPreviewComponent);
    return NewsPreviewComponent;
}());



/***/ }),

/***/ "./src/app/maincontent/video/video.component.css":
/*!*******************************************************!*\
  !*** ./src/app/maincontent/video/video.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".videoWrapper {\n\tposition: relative;\n\tpadding-bottom: 56.25%; /* 16:9 */\n\tpadding-top: 25px;\n\theight: 0;\n}\n.videoWrapper iframe {\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100%;\n\theight: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbmNvbnRlbnQvdmlkZW8vdmlkZW8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGtCQUFrQjtDQUNsQixzQkFBc0IsRUFBRSxTQUFTO0NBQ2pDLGlCQUFpQjtDQUNqQixTQUFTO0FBQ1Y7QUFDQTtDQUNDLGtCQUFrQjtDQUNsQixNQUFNO0NBQ04sT0FBTztDQUNQLFdBQVc7Q0FDWCxZQUFZO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9tYWluY29udGVudC92aWRlby92aWRlby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZpZGVvV3JhcHBlciB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0cGFkZGluZy1ib3R0b206IDU2LjI1JTsgLyogMTY6OSAqL1xuXHRwYWRkaW5nLXRvcDogMjVweDtcblx0aGVpZ2h0OiAwO1xufVxuLnZpZGVvV3JhcHBlciBpZnJhbWUge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHRvcDogMDtcblx0bGVmdDogMDtcblx0d2lkdGg6IDEwMCU7XG5cdGhlaWdodDogMTAwJTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/maincontent/video/video.component.ts":
/*!******************************************************!*\
  !*** ./src/app/maincontent/video/video.component.ts ***!
  \******************************************************/
/*! exports provided: VideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoComponent", function() { return VideoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var src_app_shared_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services */ "./src/app/shared/services/index.ts");




var VideoComponent = /** @class */ (function () {
    function VideoComponent(mediaService, sanitizer) {
        this.mediaService = mediaService;
        this.sanitizer = sanitizer;
    }
    VideoComponent.prototype.ngOnInit = function () {
        var embedUrl = this.mediaService.getEmbedUrl(this.url);
        //console.log(embedUrl);
        if (embedUrl) {
            this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
            if (this.videoUrl) {
                this.sanitized = true;
            }
        }
    };
    VideoComponent.ctorParameters = function () { return [
        { type: src_app_shared_services__WEBPACK_IMPORTED_MODULE_3__["MediaService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], VideoComponent.prototype, "url", void 0);
    VideoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-video',
            template: __webpack_require__(/*! raw-loader!./video.component.html */ "./node_modules/raw-loader/index.js!./src/app/maincontent/video/video.component.html"),
            styles: [__webpack_require__(/*! ./video.component.css */ "./src/app/maincontent/video/video.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services__WEBPACK_IMPORTED_MODULE_3__["MediaService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], VideoComponent);
    return VideoComponent;
}());



/***/ }),

/***/ "./src/app/maincontent/video/video.module.ts":
/*!***************************************************!*\
  !*** ./src/app/maincontent/video/video.module.ts ***!
  \***************************************************/
/*! exports provided: VideoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoModule", function() { return VideoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _video_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./video.component */ "./src/app/maincontent/video/video.component.ts");
/* harmony import */ var _videolist_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./videolist.component */ "./src/app/maincontent/video/videolist.component.ts");
/* harmony import */ var _video_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./video.service */ "./src/app/maincontent/video/video.service.ts");








var VideoModule = /** @class */ (function () {
    function VideoModule() {
    }
    VideoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            ],
            declarations: [
                _video_component__WEBPACK_IMPORTED_MODULE_5__["VideoComponent"],
                _videolist_component__WEBPACK_IMPORTED_MODULE_6__["VideoListComponent"],
            ],
            providers: [
                _video_service__WEBPACK_IMPORTED_MODULE_7__["VideoService"]
            ],
            entryComponents: [],
            exports: [
                _videolist_component__WEBPACK_IMPORTED_MODULE_6__["VideoListComponent"]
            ],
        })
    ], VideoModule);
    return VideoModule;
}());



/***/ }),

/***/ "./src/app/maincontent/video/video.service.ts":
/*!****************************************************!*\
  !*** ./src/app/maincontent/video/video.service.ts ***!
  \****************************************************/
/*! exports provided: VideoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoService", function() { return VideoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var VideoService = /** @class */ (function () {
    function VideoService() {
    }
    VideoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], VideoService);
    return VideoService;
}());



/***/ }),

/***/ "./src/app/maincontent/video/videolist.component.css":
/*!***********************************************************!*\
  !*** ./src/app/maincontent/video/videolist.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW5jb250ZW50L3ZpZGVvL3ZpZGVvbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/maincontent/video/videolist.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/maincontent/video/videolist.component.ts ***!
  \**********************************************************/
/*! exports provided: VideoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoListComponent", function() { return VideoListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _video_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./video.service */ "./src/app/maincontent/video/video.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");




var VideoListComponent = /** @class */ (function () {
    function VideoListComponent(imageService, sanitizer) {
        this.imageService = imageService;
        this.sanitizer = sanitizer;
    }
    VideoListComponent.ctorParameters = function () { return [
        { type: _video_service__WEBPACK_IMPORTED_MODULE_2__["VideoService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], VideoListComponent.prototype, "recorduri", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], VideoListComponent.prototype, "videos", void 0);
    VideoListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-videolist',
            template: __webpack_require__(/*! raw-loader!./videolist.component.html */ "./node_modules/raw-loader/index.js!./src/app/maincontent/video/videolist.component.html"),
            styles: [__webpack_require__(/*! ./videolist.component.css */ "./src/app/maincontent/video/videolist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_video_service__WEBPACK_IMPORTED_MODULE_2__["VideoService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]])
    ], VideoListComponent);
    return VideoListComponent;
}());



/***/ }),

/***/ "./src/app/shared/model/activity.ts":
/*!******************************************!*\
  !*** ./src/app/shared/model/activity.ts ***!
  \******************************************/
/*! exports provided: Activity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Activity", function() { return Activity; });
/**
* Properties of an activity, sport, ...
*/
var Activity = /** @class */ (function () {
    function Activity() {
    }
    return Activity;
}());



/***/ }),

/***/ "./src/app/shared/pipes/br.pipe.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/pipes/br.pipe.ts ***!
  \*****************************************/
/*! exports provided: BrPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrPipe", function() { return BrPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


/*
https://angular.io/docs/ts/latest/guide/pipes.html

*/
var BrPipe = /** @class */ (function () {
    function BrPipe() {
    }
    BrPipe.prototype.transform = function (value) {
        var result = '';
        if (value) {
            result = value.replace(/\n/g, '<br/>');
        }
        return result;
    };
    BrPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'br' })
    ], BrPipe);
    return BrPipe;
}());



/***/ }),

/***/ "./src/app/shared/pipes/index.ts":
/*!***************************************!*\
  !*** ./src/app/shared/pipes/index.ts ***!
  \***************************************/
/*! exports provided: BrPipe, OrderbyPipe, LocaleDatePipe, PropertyFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _br_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./br.pipe */ "./src/app/shared/pipes/br.pipe.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BrPipe", function() { return _br_pipe__WEBPACK_IMPORTED_MODULE_0__["BrPipe"]; });

/* harmony import */ var _orderby_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./orderby.pipe */ "./src/app/shared/pipes/orderby.pipe.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OrderbyPipe", function() { return _orderby_pipe__WEBPACK_IMPORTED_MODULE_1__["OrderbyPipe"]; });

/* harmony import */ var _localedate_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./localedate.pipe */ "./src/app/shared/pipes/localedate.pipe.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocaleDatePipe", function() { return _localedate_pipe__WEBPACK_IMPORTED_MODULE_2__["LocaleDatePipe"]; });

/* harmony import */ var _propertyfilter_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./propertyfilter.pipe */ "./src/app/shared/pipes/propertyfilter.pipe.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PropertyFilterPipe", function() { return _propertyfilter_pipe__WEBPACK_IMPORTED_MODULE_3__["PropertyFilterPipe"]; });







/***/ }),

/***/ "./src/app/shared/pipes/localedate.pipe.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/pipes/localedate.pipe.ts ***!
  \*************************************************/
/*! exports provided: LocaleDatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocaleDatePipe", function() { return LocaleDatePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");



/*
* https://angular.io/docs/ts/latest/guide/pipes.html
*/
var LocaleDatePipe = /** @class */ (function () {
    function LocaleDatePipe() {
    }
    LocaleDatePipe.prototype.transform = function (value) {
        var result = '';
        if (value) {
            // const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            result = new Date(value).toLocaleDateString(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].locale);
        }
        return result;
    };
    LocaleDatePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'localedate'
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], LocaleDatePipe);
    return LocaleDatePipe;
}());



/***/ }),

/***/ "./src/app/shared/pipes/orderby.pipe.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/pipes/orderby.pipe.ts ***!
  \**********************************************/
/*! exports provided: OrderbyPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderbyPipe", function() { return OrderbyPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


/*
https://angular.io/docs/ts/latest/guide/pipes.html

Production target : This pipe filter about 10-20 items.
cf https://angular.io/guide/pipes#!#no-filter-pipe
*/
var OrderbyPipe = /** @class */ (function () {
    function OrderbyPipe() {
    }
    OrderbyPipe.prototype.transform = function (items, arg, dir) {
        var direction = 'asc';
        if (dir === 'asc' || dir === 'desc') {
            direction = dir;
        }
        return items.sort(function (a, b) {
            if (a[arg] && b[arg]) {
                var valueA = Number(a[arg].replace(/[^\w\s]/gi, ''));
                var valueB = Number(b[arg].replace(/[^\w\s]/gi, ''));
                if (valueA === valueB) {
                    return 0;
                }
                if (direction === 'asc') {
                    return (valueA > valueB) ? 1 : -1;
                }
                else {
                    return (valueB > valueA) ? 1 : -1;
                }
            }
            else {
                return 0;
            }
        });
    };
    OrderbyPipe.prototype.toNumber = function (str) {
        return Number(str.replace(/[^\w\s]/gi, ''));
    };
    OrderbyPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'orderby'
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], OrderbyPipe);
    return OrderbyPipe;
}());



/***/ }),

/***/ "./src/app/shared/pipes/propertyfilter.pipe.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/pipes/propertyfilter.pipe.ts ***!
  \*****************************************************/
/*! exports provided: PropertyFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyFilterPipe", function() { return PropertyFilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


/*
https://angular.io/docs/ts/latest/guide/pipes.html

Filter by activity
*/
var PropertyFilterPipe = /** @class */ (function () {
    function PropertyFilterPipe() {
    }
    PropertyFilterPipe.prototype.transform = function (items, arg, value) {
        return items.filter(function (item) { return item[arg] && item[arg] === value; });
    };
    PropertyFilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'propertyfilter'
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], PropertyFilterPipe);
    return PropertyFilterPipe;
}());



/***/ }),

/***/ "./src/app/shared/services/browser.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/browser.service.ts ***!
  \****************************************************/
/*! exports provided: BrowserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowserService", function() { return BrowserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BrowserService = /** @class */ (function () {
    function BrowserService() {
    }
    BrowserService.prototype.isModernBrowser = function () {
        var result = false;
        if ('IntersectionObserver' in window) {
            result = true;
        }
        return result;
    };
    BrowserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BrowserService);
    return BrowserService;
}());



/***/ }),

/***/ "./src/app/shared/services/date.util.service.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/services/date.util.service.ts ***!
  \******************************************************/
/*! exports provided: DateUtilService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateUtilService", function() { return DateUtilService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DateUtilService = /** @class */ (function () {
    function DateUtilService() {
        // TODO find true library for i18n date format
        this.lang = 'en';
        this.daysOfWeekShort = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
        this.daysOfWeekShortFr = ['D', 'L', 'M', 'M', 'J', 'V', 'S'];
        this.monthsLong = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        this.monthsFrLong = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
    }
    DateUtilService.prototype.setLang = function (lang) {
        this.lang = lang;
    };
    DateUtilService.prototype.getMonthName = function (month) {
        if (this.lang === 'fr') {
            return this.monthsFrLong[month];
        }
        else {
            return this.monthsLong[month];
        }
    };
    DateUtilService.prototype.getWeek = function (date) {
        var onejan = new Date(date.getFullYear(), 0, 1);
        return Math.ceil((((date.getTime() - onejan.getTime()) / 86400000) + onejan.getDay() + 1) / 7);
    };
    DateUtilService.prototype.addWeek = function (date) {
        var onejan = new Date(date.getFullYear(), 0, 1);
        return Math.ceil((((date.getTime() - onejan.getTime()) / 86400000) + onejan.getDay() + 1) / 7);
    };
    DateUtilService.prototype.getMonthNumber = function (date) {
        // sometimes I hate JS ...
        return date.getMonth() + 1;
    };
    DateUtilService.prototype.getDayShort = function (d) {
        if (this.lang === 'fr') {
            return this.daysOfWeekShortFr[d];
        }
        else {
            return this.daysOfWeekShort[d];
        }
    };
    DateUtilService.prototype.isWeekEndDay = function (d) {
        return d === 0 || d === 6;
    };
    DateUtilService.prototype.isWeekEndDate = function (date) {
        return date.getDay() === 0 || date.getDay() === 6;
    };
    DateUtilService.prototype.dateAfter = function (date, from) {
        var result = false;
        if (date && from) {
            if (date.getTime() - from.getTime() > 0) {
                result = true;
            }
        }
        return result;
    };
    DateUtilService.prototype.dateBefore = function (date, from) {
        var result = false;
        if (date && from) {
            if ((from.getTime() - date.getTime()) >= 0) {
                result = true;
            }
        }
        return result;
    };
    DateUtilService.prototype.dateBeforeStrict = function (date, from) {
        var result = false;
        if (date && from) {
            if ((from.getTime() - date.getTime()) > 0) {
                result = true;
            }
        }
        return result;
    };
    DateUtilService.prototype.dateEquals = function (date, from) {
        var result = false;
        if (date && from) {
            if (date.getMonth() === from.getMonth()
                && date.getFullYear() === from.getFullYear()
                && date.getDate() === from.getDate()) {
                result = true;
            }
        }
        return result;
    };
    DateUtilService.prototype.getLastDayOfMonth = function (d) {
        var date = new Date(d);
        date = new Date(date.setMonth(date.getMonth() + 1));
        date = new Date(date.setDate(1));
        date = new Date(date.setDate(date.getDate() - 1));
        return date;
    };
    DateUtilService.prototype.getFirstDayOfMonth = function (d) {
        var date = new Date(d);
        date = new Date(date.setDate(1));
        return date;
    };
    DateUtilService.prototype.getFirstMondayOfMonth = function (d) {
        var date = new Date(d);
        date = new Date(date.setDate(1));
        while (date.getDay() !== 1) {
            date = new Date(date.setDate(date.getDate() + 1));
        }
        return date;
    };
    DateUtilService.prototype.isDateBetween = function (date, begin, end) {
        var result = false;
        if (this.dateEquals(date, begin)) {
            result = true;
        }
        else if (this.dateEquals(end, begin)) {
            result = true;
        }
        else if (this.dateAfter(begin, date) && this.dateBefore(begin, end)) {
            result = true;
        }
        return result;
    };
    DateUtilService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], DateUtilService);
    return DateUtilService;
}());



/***/ }),

/***/ "./src/app/shared/services/index.ts":
/*!******************************************!*\
  !*** ./src/app/shared/services/index.ts ***!
  \******************************************/
/*! exports provided: Log, ReadService, RouteUtilService, DateUtilService, MediaService, LayoutService, BrowserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _log_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./log.service */ "./src/app/shared/services/log.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Log", function() { return _log_service__WEBPACK_IMPORTED_MODULE_0__["Log"]; });

/* harmony import */ var _read_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./read.service */ "./src/app/shared/services/read.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReadService", function() { return _read_service__WEBPACK_IMPORTED_MODULE_1__["ReadService"]; });

/* harmony import */ var _route_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./route.util.service */ "./src/app/shared/services/route.util.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RouteUtilService", function() { return _route_util_service__WEBPACK_IMPORTED_MODULE_2__["RouteUtilService"]; });

/* harmony import */ var _date_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./date.util.service */ "./src/app/shared/services/date.util.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateUtilService", function() { return _date_util_service__WEBPACK_IMPORTED_MODULE_3__["DateUtilService"]; });

/* harmony import */ var _media_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./media.service */ "./src/app/shared/services/media.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MediaService", function() { return _media_service__WEBPACK_IMPORTED_MODULE_4__["MediaService"]; });

/* harmony import */ var _layout_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout.service */ "./src/app/shared/services/layout.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayoutService", function() { return _layout_service__WEBPACK_IMPORTED_MODULE_5__["LayoutService"]; });

/* harmony import */ var _browser_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./browser.service */ "./src/app/shared/services/browser.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BrowserService", function() { return _browser_service__WEBPACK_IMPORTED_MODULE_6__["BrowserService"]; });










/***/ }),

/***/ "./src/app/shared/services/layout.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/layout.service.ts ***!
  \***************************************************/
/*! exports provided: LayoutService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutService", function() { return LayoutService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LayoutService = /** @class */ (function () {
    function LayoutService() {
    }
    LayoutService.prototype.getLayout = function () {
        var layout = 'mobile';
        if (window.matchMedia('(min-width: 55em)').matches) {
            layout = 'desktop';
        }
        return layout;
    };
    LayoutService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], LayoutService);
    return LayoutService;
}());



/***/ }),

/***/ "./src/app/shared/services/log.service.ts":
/*!************************************************!*\
  !*** ./src/app/shared/services/log.service.ts ***!
  \************************************************/
/*! exports provided: Log */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Log", function() { return Log; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");



var Level;
(function (Level) {
    Level[Level["Fatal"] = 0] = "Fatal";
    Level[Level["Error"] = 1] = "Error";
    Level[Level["Warn"] = 2] = "Warn";
    Level[Level["Info"] = 3] = "Info";
    Level[Level["Debug"] = 4] = "Debug";
    Level[Level["Trace"] = 5] = "Trace";
})(Level || (Level = {}));
var Log = /** @class */ (function () {
    function Log() {
        this.level = Level.Error;
        switch (src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].log) {
            case 'fatal':
                this.level = Level.Fatal;
                break;
            case 'error':
                this.level = Level.Error;
                break;
            case 'warn':
                this.level = Level.Warn;
                break;
            case 'Info':
                this.level = Level.Info;
                break;
            case 'debug':
                this.level = Level.Debug;
                break;
            case 'trace':
                this.level = Level.Trace;
                break;
            default: this.level = Level.Error;
        }
    }
    Log.prototype.fatal = function (obj) {
        if (this.level >= Level.Fatal) {
            console.error(obj);
        }
    };
    Log.prototype.error = function (obj) {
        if (this.level >= Level.Error) {
            console.error(obj);
        }
    };
    Log.prototype.debug = function (obj) {
        if (this.level >= Level.Debug) {
            console.log(obj);
        }
    };
    Log.prototype.info = function (obj) {
        if (this.level >= Level.Info) {
            console.log(obj);
        }
    };
    Log.prototype.warn = function (obj) {
        if (this.level >= Level.Warn) {
            console.warn(obj);
        }
    };
    Log.prototype.trace = function (obj) {
        if (this.level >= Level.Warn) {
            console.log(obj);
        }
    };
    Log.prototype.isFatal = function () {
        return this.level >= Level.Fatal;
    };
    Log.prototype.isError = function () {
        return this.level >= Level.Error;
    };
    Log.prototype.isDebug = function () {
        return this.level >= Level.Debug;
    };
    Log.prototype.isInfo = function () {
        return this.level >= Level.Info;
    };
    Log.prototype.isWarn = function () {
        return this.level >= Level.Warn;
    };
    Log.prototype.isTrace = function () {
        return this.level >= Level.Warn;
    };
    Log = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Log);
    return Log;
}());



/***/ }),

/***/ "./src/app/shared/services/media.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/services/media.service.ts ***!
  \**************************************************/
/*! exports provided: MediaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaService", function() { return MediaService; });
var MediaService = /** @class */ (function () {
    function MediaService() {
    }
    MediaService.prototype.initMediaUrl = function (type, id, media, mediaUri) {
        var result = [];
        if (media) {
            media.forEach(function (m) {
                var newMedia = Object.assign({}, m);
                newMedia.url = mediaUri + '/' + type + '/' + id + '/' + m.url;
                result.push(newMedia);
            });
        }
        return result;
    };
    MediaService.prototype.isImage = function (element) {
        return element.mimetype && element.mimetype.indexOf('image') > -1;
    };
    MediaService.prototype.isVideo = function (element) {
        var result = (element.mimetype && element.mimetype.indexOf('video') > -1)
            ||
                (element.url.indexOf('youtube\.com') > -1
                    || element.url.indexOf('youtu\.be') > -1
                    || element.url.indexOf('vimeo') > -1
                    || (element.url.indexOf('facebook') > -1 && element.url.indexOf('videos') > -1));
        return result;
    };
    MediaService.prototype.getEmbedUrl = function (url) {
        var youtubeId = this.getYouTubeID(url);
        var embedUrl = null;
        if (url.indexOf('youtu') > -1 && youtubeId) {
            embedUrl = 'https://www.youtube.com/embed/' + youtubeId;
        }
        if (url.indexOf('vimeo') > -1) {
            var vimeoId = this.getVimeoID(url);
            if (vimeoId) {
                embedUrl = 'https://player.vimeo.com/video/' + vimeoId;
            }
        }
        if (url.indexOf('facebook') > -1) {
            var fbId = this.getFacebookID(url);
            if (fbId) {
                embedUrl = 'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook%2Fvideos%2F' + fbId;
            }
        }
        return embedUrl;
    };
    MediaService.prototype.getFacebookID = function (url) {
        var ID = '';
        url = url.replace(/(>|<)/gi, '').split(/(facebook\.com\/facebook\/videos\/|player\.facebook\.com\/)/);
        if (url[2] !== undefined) {
            ID = url[2].split(/[^0-9a-z_\-]/i);
            ID = ID[0];
        }
        else {
            ID = url;
        }
        return ID;
    };
    MediaService.prototype.getVimeoID = function (url) {
        var ID = '';
        url = url.replace(/(>|<)/gi, '').split(/(vimeo\.com\/|player\.vimeo\.com\/)/);
        if (url[2] !== undefined) {
            ID = url[2].split(/[^0-9a-z_\-]/i);
            ID = ID[0];
        }
        else {
            ID = url;
        }
        return ID;
    };
    MediaService.prototype.getYouTubeID = function (url) {
        var ID = '';
        url = url.replace(/(>|<)/gi, '').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
        if (url[2] !== undefined) {
            ID = url[2].split(/[^0-9a-z_\-]/i);
            ID = ID[0];
        }
        else {
            ID = url;
        }
        return ID;
    };
    MediaService.prototype.isPdf = function (element) {
        return element.mimetype && element.mimetype.indexOf('application/pdf') > -1;
    };
    MediaService.prototype.getImages = function (item) {
        var _this = this;
        var result = [];
        if (item.images) {
            result = result.concat(item.images);
        }
        if (item.media) {
            result = result.concat(item.media.filter(function (element) { return _this.isImage(element); }));
        }
        return result;
    };
    MediaService.prototype.getAttachments = function (item) {
        var _this = this;
        var result = [];
        if (item && item.attachments) {
            result = result.concat(item.attachments);
        }
        if (item && item.media) {
            result = result.concat(item.media.filter(function (element) { return !_this.isImage(element); }));
        }
        return result;
    };
    MediaService.prototype.getVideos = function (item) {
        var _this = this;
        var result = [];
        if (item && item.attachments) {
            result = result.concat(item.attachments.filter(function (element) { return _this.isVideo(element); }));
        }
        if (item && item.media) {
            result = result.concat(item.media.filter(function (element) { return _this.isVideo(element); }));
        }
        return result;
    };
    return MediaService;
}());



/***/ }),

/***/ "./src/app/shared/services/read.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/read.service.ts ***!
  \*************************************************/
/*! exports provided: ReadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadService", function() { return ReadService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");



var ReadService = /** @class */ (function () {
    function ReadService() {
        var _this = this;
        this.root = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].server;
        this.getUrl = function (type, id) {
            return _this.root + '/' + src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].public + '/' + type + '/' + id + '.json';
        };
        this.getIndexUrl = function (type) {
            return _this.root + '/' + src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].public + '/' + type + '/index/index.json';
        };
    }
    ReadService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ReadService);
    return ReadService;
}());



/***/ }),

/***/ "./src/app/shared/services/route.util.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/services/route.util.service.ts ***!
  \*******************************************************/
/*! exports provided: RouteUtilService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteUtilService", function() { return RouteUtilService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RouteUtilService = /** @class */ (function () {
    function RouteUtilService() {
    }
    /**
    * TODO : find a better way to manage routes by translating
    */
    RouteUtilService.prototype.getCalendarRoute = function (locale) {
        var result = 'calendar';
        if ('fr' === locale) {
            result = 'calendrier';
        }
        return result;
    };
    RouteUtilService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RouteUtilService);
    return RouteUtilService;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pipes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pipes */ "./src/app/shared/pipes/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services */ "./src/app/shared/services/index.ts");




var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [],
            declarations: [
                _pipes__WEBPACK_IMPORTED_MODULE_2__["BrPipe"],
                _pipes__WEBPACK_IMPORTED_MODULE_2__["OrderbyPipe"],
                _pipes__WEBPACK_IMPORTED_MODULE_2__["LocaleDatePipe"],
                _pipes__WEBPACK_IMPORTED_MODULE_2__["PropertyFilterPipe"],
            ],
            providers: [
                _services__WEBPACK_IMPORTED_MODULE_3__["Log"],
                _services__WEBPACK_IMPORTED_MODULE_3__["ReadService"],
                _services__WEBPACK_IMPORTED_MODULE_3__["DateUtilService"],
                _services__WEBPACK_IMPORTED_MODULE_3__["LayoutService"],
                _services__WEBPACK_IMPORTED_MODULE_3__["RouteUtilService"],
                _services__WEBPACK_IMPORTED_MODULE_3__["MediaService"],
                _services__WEBPACK_IMPORTED_MODULE_3__["BrowserService"],
                _pipes__WEBPACK_IMPORTED_MODULE_2__["OrderbyPipe"]
            ],
            entryComponents: [],
            exports: [
                _pipes__WEBPACK_IMPORTED_MODULE_2__["OrderbyPipe"],
                _pipes__WEBPACK_IMPORTED_MODULE_2__["BrPipe"],
                _pipes__WEBPACK_IMPORTED_MODULE_2__["LocaleDatePipe"],
                _pipes__WEBPACK_IMPORTED_MODULE_2__["PropertyFilterPipe"],
            ],
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/sidenav/banner/banner.component.css":
/*!*****************************************************!*\
  !*** ./src/app/sidenav/banner/banner.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\n* Initialize some space in page during image load.\n* min-height should not exceed banner height\n*/\n.banner-container {\n padding-top: 0.5em;\n min-height: 20px;\n}\n/* Image CSS Fit */\n.banner-container > img {\n  max-width:100%;\n  height: auto;\n}\n@media all and (min-width: 55em) {\n\t/*.banner-container {\n\t\tmin-height: 100px;\n\t}*/\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZW5hdi9iYW5uZXIvYmFubmVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztDQUdDO0FBQ0Q7Q0FDQyxrQkFBa0I7Q0FDbEIsZ0JBQWdCO0FBQ2pCO0FBRUEsa0JBQWtCO0FBQ2xCO0VBQ0UsY0FBYztFQUNkLFlBQVk7QUFDZDtBQUVBO0NBQ0M7O0dBRUU7QUFDSCIsImZpbGUiOiJzcmMvYXBwL3NpZGVuYXYvYmFubmVyL2Jhbm5lci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiogSW5pdGlhbGl6ZSBzb21lIHNwYWNlIGluIHBhZ2UgZHVyaW5nIGltYWdlIGxvYWQuXG4qIG1pbi1oZWlnaHQgc2hvdWxkIG5vdCBleGNlZWQgYmFubmVyIGhlaWdodFxuKi9cbi5iYW5uZXItY29udGFpbmVyIHtcbiBwYWRkaW5nLXRvcDogMC41ZW07XG4gbWluLWhlaWdodDogMjBweDtcbn1cblxuLyogSW1hZ2UgQ1NTIEZpdCAqL1xuLmJhbm5lci1jb250YWluZXIgPiBpbWcge1xuICBtYXgtd2lkdGg6MTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG5AbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiA1NWVtKSB7XG5cdC8qLmJhbm5lci1jb250YWluZXIge1xuXHRcdG1pbi1oZWlnaHQ6IDEwMHB4O1xuXHR9Ki9cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/sidenav/banner/banner.component.ts":
/*!****************************************************!*\
  !*** ./src/app/sidenav/banner/banner.component.ts ***!
  \****************************************************/
/*! exports provided: BannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerComponent", function() { return BannerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");



var BannerComponent = /** @class */ (function () {
    function BannerComponent() {
        this.layout = null;
        this.url = '';
    }
    BannerComponent.prototype.ngOnInit = function () {
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].server + '/' + src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].public + '/resources/banner-' + this.layout + '.jpg';
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], BannerComponent.prototype, "layout", void 0);
    BannerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-banner',
            template: __webpack_require__(/*! raw-loader!./banner.component.html */ "./node_modules/raw-loader/index.js!./src/app/sidenav/banner/banner.component.html"),
            styles: [__webpack_require__(/*! ./banner.component.css */ "./src/app/sidenav/banner/banner.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BannerComponent);
    return BannerComponent;
}());



/***/ }),

/***/ "./src/app/sidenav/featured/featured.component.css":
/*!*********************************************************!*\
  !*** ./src/app/sidenav/featured/featured.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".feed-content {\n  border-color: yellow;\n  border-width: 1px;\n  border-style: solid;\n}\n\n.feed-article {\n  border-color: #eee;\n  border-width: 1px;\n  border-style: dotted;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZW5hdi9mZWF0dXJlZC9mZWF0dXJlZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL3NpZGVuYXYvZmVhdHVyZWQvZmVhdHVyZWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mZWVkLWNvbnRlbnQge1xuICBib3JkZXItY29sb3I6IHllbGxvdztcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG59XG5cbi5mZWVkLWFydGljbGUge1xuICBib3JkZXItY29sb3I6ICNlZWU7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBib3JkZXItc3R5bGU6IGRvdHRlZDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/sidenav/featured/featured.component.ts":
/*!********************************************************!*\
  !*** ./src/app/sidenav/featured/featured.component.ts ***!
  \********************************************************/
/*! exports provided: FeaturedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturedComponent", function() { return FeaturedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_log_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/log.service */ "./src/app/shared/services/log.service.ts");



/**
* same timing animations
*/
var FeaturedComponent = /** @class */ (function () {
    function FeaturedComponent(log) {
        this.log = log;
        this.items = [];
    }
    FeaturedComponent.prototype.ngOnInit = function () {
    };
    FeaturedComponent.prototype.gotoDetail = function (item) {
        this.log.debug('gotoDetail...');
    };
    FeaturedComponent.ctorParameters = function () { return [
        { type: src_app_shared_services_log_service__WEBPACK_IMPORTED_MODULE_2__["Log"] }
    ]; };
    FeaturedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-featured-widget',
            template: __webpack_require__(/*! raw-loader!./featured.component.html */ "./node_modules/raw-loader/index.js!./src/app/sidenav/featured/featured.component.html"),
            styles: [__webpack_require__(/*! ./featured.component.css */ "./src/app/sidenav/featured/featured.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_log_service__WEBPACK_IMPORTED_MODULE_2__["Log"]])
    ], FeaturedComponent);
    return FeaturedComponent;
}());



/***/ }),

/***/ "./src/app/sidenav/footer/footer.component.css":
/*!*****************************************************!*\
  !*** ./src/app/sidenav/footer/footer.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer-title {\n  font-weight: bold;\n}\n\n.footer-article {\n  border-color: #eee;\n  border-width: 1px;\n  border-style: dashed;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZW5hdi9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL3NpZGVuYXYvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3Rlci10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uZm9vdGVyLWFydGljbGUge1xuICBib3JkZXItY29sb3I6ICNlZWU7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBib3JkZXItc3R5bGU6IGRhc2hlZDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/sidenav/footer/footer.component.ts":
/*!****************************************************!*\
  !*** ./src/app/sidenav/footer/footer.component.ts ***!
  \****************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_log_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/log.service */ "./src/app/shared/services/log.service.ts");
/* harmony import */ var src_app_shared_services_read_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/read.service */ "./src/app/shared/services/read.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");





/**
* same timing animations
*/
var FooterComponent = /** @class */ (function () {
    function FooterComponent(readService, log, http) {
        this.readService = readService;
        this.log = log;
        this.http = http;
        this.items = [];
        this.errorMessage = '';
    }
    FooterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get(this.readService.getIndexUrl('about'))
            .subscribe(function (data) { return _this.items = data; });
    };
    FooterComponent.ctorParameters = function () { return [
        { type: src_app_shared_services_read_service__WEBPACK_IMPORTED_MODULE_3__["ReadService"] },
        { type: src_app_shared_services_log_service__WEBPACK_IMPORTED_MODULE_2__["Log"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
    ]; };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-footer-widget',
            template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/sidenav/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/sidenav/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_read_service__WEBPACK_IMPORTED_MODULE_3__["ReadService"],
            src_app_shared_services_log_service__WEBPACK_IMPORTED_MODULE_2__["Log"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/sidenav/home.component.css":
/*!********************************************!*\
  !*** ./src/app/sidenav/home.component.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".expand-title {\n  background-color: #e9e9e9;\n  font-weight: bold;\n  text-align: center;\n  height: 3em;\n  margin: 1em;\n}\n\n.expand-title:hover {\n  background-color: #E0E0E0;\n  cursor: pointer;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZW5hdi9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsV0FBVztBQUNiOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9zaWRlbmF2L2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leHBhbmQtdGl0bGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllOWU5O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDNlbTtcbiAgbWFyZ2luOiAxZW07XG59XG5cbi5leHBhbmQtdGl0bGU6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTBFMEUwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/sidenav/home.component.ts":
/*!*******************************************!*\
  !*** ./src/app/sidenav/home.component.ts ***!
  \*******************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services */ "./src/app/shared/services/index.ts");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(layoutService, browserService) {
        this.layoutService = layoutService;
        this.browserService = browserService;
        this.max = 5;
    }
    HomeComponent.prototype.ngOnInit = function () {
        if (this.layoutService.getLayout() === 'desktop') {
            this.max = 15;
        }
    };
    HomeComponent.prototype.isModernBrowser = function () {
        return this.browserService.isModernBrowser();
    };
    HomeComponent.ctorParameters = function () { return [
        { type: src_app_shared_services__WEBPACK_IMPORTED_MODULE_2__["LayoutService"] },
        { type: src_app_shared_services__WEBPACK_IMPORTED_MODULE_2__["BrowserService"] }
    ]; };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/sidenav/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/sidenav/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services__WEBPACK_IMPORTED_MODULE_2__["LayoutService"], src_app_shared_services__WEBPACK_IMPORTED_MODULE_2__["BrowserService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/sidenav/index.ts":
/*!**********************************!*\
  !*** ./src/app/sidenav/index.ts ***!
  \**********************************/
/*! exports provided: MenubuttonComponent, SidenavComponent, SidenavcontainerComponent, HomeComponent, BannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _menubutton_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menubutton.component */ "./src/app/sidenav/menubutton.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MenubuttonComponent", function() { return _menubutton_component__WEBPACK_IMPORTED_MODULE_0__["MenubuttonComponent"]; });

/* harmony import */ var _sidenav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidenav.component */ "./src/app/sidenav/sidenav.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SidenavComponent", function() { return _sidenav_component__WEBPACK_IMPORTED_MODULE_1__["SidenavComponent"]; });

/* harmony import */ var _sidenavcontainer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidenavcontainer.component */ "./src/app/sidenav/sidenavcontainer.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SidenavcontainerComponent", function() { return _sidenavcontainer_component__WEBPACK_IMPORTED_MODULE_2__["SidenavcontainerComponent"]; });

/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.component */ "./src/app/sidenav/home.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return _home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]; });

/* harmony import */ var _banner_banner_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./banner/banner.component */ "./src/app/sidenav/banner/banner.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BannerComponent", function() { return _banner_banner_component__WEBPACK_IMPORTED_MODULE_4__["BannerComponent"]; });








/***/ }),

/***/ "./src/app/sidenav/main.module.ts":
/*!****************************************!*\
  !*** ./src/app/sidenav/main.module.ts ***!
  \****************************************/
/*! exports provided: MainModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainModule", function() { return MainModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var src_app_maincontent_calendar_calendar_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/maincontent/calendar/calendar.module */ "./src/app/maincontent/calendar/calendar.module.ts");
/* harmony import */ var src_app_maincontent_news_news_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/maincontent/news/news.module */ "./src/app/maincontent/news/news.module.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ */ "./src/app/sidenav/index.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/sidenav/footer/footer.component.ts");
/* harmony import */ var _featured_featured_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./featured/featured.component */ "./src/app/sidenav/featured/featured.component.ts");
/* harmony import */ var _menu_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./menu.service */ "./src/app/sidenav/menu.service.ts");
/* harmony import */ var src_app_maincontent_image_image_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/maincontent/image/image.module */ "./src/app/maincontent/image/image.module.ts");
/* harmony import */ var src_app_maincontent_video_video_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/maincontent/video/video.module */ "./src/app/maincontent/video/video.module.ts");
/* harmony import */ var _main_route__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./main.route */ "./src/app/sidenav/main.route.ts");














var MainModule = /** @class */ (function () {
    function MainModule() {
    }
    MainModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                src_app_maincontent_image_image_module__WEBPACK_IMPORTED_MODULE_11__["ImageModule"],
                src_app_maincontent_video_video_module__WEBPACK_IMPORTED_MODULE_12__["VideoModule"],
                src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                src_app_maincontent_calendar_calendar_module__WEBPACK_IMPORTED_MODULE_5__["CalendarModule"],
                src_app_maincontent_news_news_module__WEBPACK_IMPORTED_MODULE_6__["NewsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_main_route__WEBPACK_IMPORTED_MODULE_13__["mainRoutes"], { useHash: true })
            ],
            declarations: [
                ___WEBPACK_IMPORTED_MODULE_7__["BannerComponent"],
                ___WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                ___WEBPACK_IMPORTED_MODULE_7__["MenubuttonComponent"],
                ___WEBPACK_IMPORTED_MODULE_7__["SidenavComponent"],
                ___WEBPACK_IMPORTED_MODULE_7__["SidenavcontainerComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _featured_featured_component__WEBPACK_IMPORTED_MODULE_9__["FeaturedComponent"],
            ],
            providers: [
                _menu_service__WEBPACK_IMPORTED_MODULE_10__["MenuService"],
            ],
            entryComponents: [],
            exports: [
                ___WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                ___WEBPACK_IMPORTED_MODULE_7__["MenubuttonComponent"],
                ___WEBPACK_IMPORTED_MODULE_7__["SidenavComponent"],
                ___WEBPACK_IMPORTED_MODULE_7__["SidenavcontainerComponent"]
            ],
        })
    ], MainModule);
    return MainModule;
}());



/***/ }),

/***/ "./src/app/sidenav/main.route.ts":
/*!***************************************!*\
  !*** ./src/app/sidenav/main.route.ts ***!
  \***************************************/
/*! exports provided: mainRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mainRoutes", function() { return mainRoutes; });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ */ "./src/app/sidenav/index.ts");

var mainRoutes = [
    {
        path: '',
        component: ___WEBPACK_IMPORTED_MODULE_0__["HomeComponent"]
    },
];


/***/ }),

/***/ "./src/app/sidenav/menu.service.ts":
/*!*****************************************!*\
  !*** ./src/app/sidenav/menu.service.ts ***!
  \*****************************************/
/*! exports provided: MenuService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuService", function() { return MenuService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



// import issue
// const menufr = require('./menu.fr.json');
// const menuen = require('./menu.en.json');
var MenuService = /** @class */ (function () {
    function MenuService() {
    }
    /**
    * Explanations about this hard coded data, VS a JSON file like elsewhere.
    * - It seems to block the loading and display of the page ( test with Google Page Insight).
    * - Menu data is rarely modified
    */
    MenuService.prototype.getMenuData = function (lang) {
        var result;
        switch (lang) {
            case 'fr':
                result = [
                    { 'id': 'news', 'routerLink': '/actualites', 'title': 'Actualités', 'icon': 'list', 'order': '1' },
                    { 'id': 'clubs', 'routerLink': '/clubs', 'title': 'Clubs', 'icon': 'place', 'order': '2' },
                    { 'id': 'calendar', 'routerLink': '/calendrier', 'title': 'Calendriers', 'icon': 'date_range', 'order': '3' },
                    { 'id': 'structure', 'routerLink': '/structure', 'title': 'Organisation', 'icon': 'person', 'order': '4' },
                    { 'id': 'documents', 'routerLink': '/documents', 'title': 'Documents', 'icon': 'folder_open', 'order': '5' },
                    { 'id': 'reports', 'routerLink': '/comptesrendus', 'title': 'Comptes Rendus', 'icon': 'assignment', 'order': '6' },
                    { 'id': 'links', 'routerLink': '/links', 'title': 'Liens', 'icon': 'bookmark', 'order': '7' },
                    { 'id': 'contact', 'routerLink': '/contact', 'title': 'Contact', 'icon': 'mail', 'order': '8' }
                ];
                break;
            default: {
                result = [{ 'id': 'news', 'routerLink': '/news', 'title': 'News', 'icon': 'list', 'order': '1' },
                    { 'id': 'clubs', 'routerLink': '/clubs', 'title': 'Clubs', 'icon': 'place', 'order': '2' },
                    { 'id': 'calendar', 'routerLink': '/calendar', 'title': 'Calendar', 'icon': 'date_range', 'order': '3' },
                    { 'id': 'structure', 'routerLink': '/structure', 'title': 'Structure', 'icon': 'person', 'order': '4' },
                    { 'id': 'documents', 'routerLink': '/documents', 'title': 'Documents', 'icon': 'folder_open', 'order': '5' },
                    { 'id': 'reports', 'routerLink': '/reports', 'title': 'Reports', 'icon': 'assignment', 'order': '6' },
                    { 'id': 'links', 'routerLink': '/links', 'title': 'Links', 'icon': 'bookmark', 'order': '7' },
                    { 'id': 'contact', 'routerLink': '/contact', 'title': 'Contact', 'icon': 'mail', 'order': '8' }];
            }
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
    };
    MenuService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], MenuService);
    return MenuService;
}());



/***/ }),

/***/ "./src/app/sidenav/menubutton.component.css":
/*!**************************************************!*\
  !*** ./src/app/sidenav/menubutton.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".slidemenu-button-container {\r\n  display: block;\r\n  line-height: 2.25em;\r\n  width: 100%;\r\n}\r\n\r\n\r\n.slidemenu-button {\r\n  color: white;\r\n  text-decoration: none;\r\n  width: 100%;\r\n}\r\n\r\n\r\n.slidemenu-button-icon {\r\n  font-size: 0.94em;\r\n}\r\n\r\n\r\n.icon-container {\r\n  margin: 0 1em 0 1em;\r\n\r\n}\r\n\r\n\r\n.slidemenu-button-text {\r\n  font-size: 0.94em;\r\n  font-weight: 500;\r\n  text-decoration: none;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZW5hdi9tZW51YnV0dG9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjs7O0FBR0E7RUFDRSxZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLFdBQVc7QUFDYjs7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7OztBQUVBO0VBQ0UsbUJBQW1COztBQUVyQjs7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL3NpZGVuYXYvbWVudWJ1dHRvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNsaWRlbWVudS1idXR0b24tY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBsaW5lLWhlaWdodDogMi4yNWVtO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5cclxuLnNsaWRlbWVudS1idXR0b24ge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5zbGlkZW1lbnUtYnV0dG9uLWljb24ge1xyXG4gIGZvbnQtc2l6ZTogMC45NGVtO1xyXG59XHJcblxyXG4uaWNvbi1jb250YWluZXIge1xyXG4gIG1hcmdpbjogMCAxZW0gMCAxZW07XHJcblxyXG59XHJcblxyXG4uc2xpZGVtZW51LWJ1dHRvbi10ZXh0IHtcclxuICBmb250LXNpemU6IDAuOTRlbTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/sidenav/menubutton.component.ts":
/*!*************************************************!*\
  !*** ./src/app/sidenav/menubutton.component.ts ***!
  \*************************************************/
/*! exports provided: MenubuttonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenubuttonComponent", function() { return MenubuttonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _menuitem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menuitem */ "./src/app/sidenav/menuitem.ts");



var MenubuttonComponent = /** @class */ (function () {
    function MenubuttonComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _menuitem__WEBPACK_IMPORTED_MODULE_2__["MenuItem"])
    ], MenubuttonComponent.prototype, "item", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], MenubuttonComponent.prototype, "expanded", void 0);
    MenubuttonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menubutton',
            template: __webpack_require__(/*! raw-loader!./menubutton.component.html */ "./node_modules/raw-loader/index.js!./src/app/sidenav/menubutton.component.html"),
            styles: [__webpack_require__(/*! ./menubutton.component.css */ "./src/app/sidenav/menubutton.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MenubuttonComponent);
    return MenubuttonComponent;
}());



/***/ }),

/***/ "./src/app/sidenav/menuitem.ts":
/*!*************************************!*\
  !*** ./src/app/sidenav/menuitem.ts ***!
  \*************************************/
/*! exports provided: MenuItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuItem", function() { return MenuItem; });
var MenuItem = /** @class */ (function () {
    function MenuItem() {
        this.state = 'inactive';
    }
    return MenuItem;
}());



/***/ }),

/***/ "./src/app/sidenav/sidenav.component.css":
/*!***********************************************!*\
  !*** ./src/app/sidenav/sidenav.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".menu-container {\r\n  box-shadow: 5px 5px 10px 0 #656565;\r\n  height: 100%;\r\n  left: 0;\r\n  position: absolute;\r\n  top: 0.5em;\r\n  -webkit-transition-duration: .5s;\r\n          transition-duration: .5s;\r\n  -webkit-transition-property: height, -webkit-transform;\r\n  transition-property: height, -webkit-transform;\r\n  transition-property: transform, height;\r\n  transition-property: transform, height, -webkit-transform;\r\n  -webkit-transition-timing-function: cubic-bezier(.25, .8, .25, 1);\r\n          transition-timing-function: cubic-bezier(.25, .8, .25, 1);\r\n  width: 2.8em;\r\n  z-index: 110;\r\n}\r\n\r\n\r\n.menu-container-expanded {\r\n    min-width: 20%;\r\n    width: 13em;\r\n}\r\n\r\n\r\n@media all and (min-width: 55em) {\r\n  .menu-container {\r\n    height: 100%;\r\n    left:auto;\r\n    min-height: 60em;\r\n    min-width: inherit;\r\n  /*  padding-top: 3em;*/\r\n    position: relative;\r\n    top:auto;\r\n    z-index: 80;\r\n  }\r\n}\r\n\r\n\r\n.buttonseparator {\r\n  border-color: white;\r\n  border-style: solid;\r\n  border-width: 1px 0 0 0;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZW5hdi9zaWRlbmF2LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQ0FBa0M7RUFDbEMsWUFBWTtFQUNaLE9BQU87RUFDUCxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGdDQUF3QjtVQUF4Qix3QkFBd0I7RUFDeEIsc0RBQXNDO0VBQXRDLDhDQUFzQztFQUF0QyxzQ0FBc0M7RUFBdEMseURBQXNDO0VBQ3RDLGlFQUF5RDtVQUF6RCx5REFBeUQ7RUFDekQsWUFBWTtFQUNaLFlBQVk7QUFDZDs7O0FBR0E7SUFDSSxjQUFjO0lBQ2QsV0FBVztBQUNmOzs7QUFFQTtFQUNFO0lBQ0UsWUFBWTtJQUNaLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0VBQ3BCLHNCQUFzQjtJQUNwQixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFdBQVc7RUFDYjtBQUNGOzs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvc2lkZW5hdi9zaWRlbmF2LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVudS1jb250YWluZXIge1xyXG4gIGJveC1zaGFkb3c6IDVweCA1cHggMTBweCAwICM2NTY1NjU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMC41ZW07XHJcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogLjVzO1xyXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybSwgaGVpZ2h0O1xyXG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoLjI1LCAuOCwgLjI1LCAxKTtcclxuICB3aWR0aDogMi44ZW07XHJcbiAgei1pbmRleDogMTEwO1xyXG59XHJcblxyXG5cclxuLm1lbnUtY29udGFpbmVyLWV4cGFuZGVkIHtcclxuICAgIG1pbi13aWR0aDogMjAlO1xyXG4gICAgd2lkdGg6IDEzZW07XHJcbn1cclxuXHJcbkBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDU1ZW0pIHtcclxuICAubWVudS1jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbGVmdDphdXRvO1xyXG4gICAgbWluLWhlaWdodDogNjBlbTtcclxuICAgIG1pbi13aWR0aDogaW5oZXJpdDtcclxuICAvKiAgcGFkZGluZy10b3A6IDNlbTsqL1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOmF1dG87XHJcbiAgICB6LWluZGV4OiA4MDtcclxuICB9XHJcbn1cclxuXHJcbi5idXR0b25zZXBhcmF0b3Ige1xyXG4gIGJvcmRlci1jb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItd2lkdGg6IDFweCAwIDAgMDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/sidenav/sidenav.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidenav/sidenav.component.ts ***!
  \**********************************************/
/*! exports provided: SidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavComponent", function() { return SidenavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _menu_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.service */ "./src/app/sidenav/menu.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_shared_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services */ "./src/app/shared/services/index.ts");




// https://stackoverflow.com/questions/45784825/frompromise-does-not-exist-on-type-observable



var SidenavComponent = /** @class */ (function () {
    function SidenavComponent(menuService, log, layoutService) {
        var _this = this;
        this.menuService = menuService;
        this.log = log;
        this.layoutService = layoutService;
        this.mode = 'side';
        this.expanded = true;
        this.menuItems = [];
        this.setLayout();
        // https://www.learnrxjs.io/operators/creation/fromevent.html
        var $resizeEvent = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(window, 'resize');
        // map to string with given event timestamp
        var eventPipes = $resizeEvent.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function () {
            return document.documentElement.clientWidth;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(200));
        eventPipes.subscribe(function (val) {
            _this.log.debug('width : ' + val);
            _this.setLayout();
        });
    }
    SidenavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.lang = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].defaultlocale;
        this.menuService.getMenuData(this.lang)
            .subscribe(function (data) {
            data.forEach(function (item) { return _this.menuItems.push(item); });
        });
    };
    SidenavComponent.prototype.ngAfterViewInit = function () {
    };
    SidenavComponent.prototype.open = function () {
        this.opened = !this.opened;
    };
    SidenavComponent.prototype.setLayout = function () {
        var newmode = this.getMenuLayout();
        if (newmode !== this.mode) {
            if (newmode === 'over') {
                this.setOver();
            }
            else {
                this.setSide();
            }
        }
    };
    SidenavComponent.prototype.setOver = function () {
        this.opened = false;
        this.expanded = true;
        this.mode = 'over';
    };
    SidenavComponent.prototype.setSide = function () {
        this.mode = 'side';
        this.expanded = true;
        this.opened = true;
    };
    SidenavComponent.prototype.initLayout = function () {
        var layout = this.layoutService.getLayout();
        if (layout === 'desktop') {
            this.setSide();
        }
        else {
            this.setOver();
        }
    };
    SidenavComponent.prototype.expand = function () {
        this.expanded = !this.expanded;
    };
    SidenavComponent.prototype.expandMenuContent = function () {
        if (this.getMode() === 'side') {
            this.expanded = true;
        }
    };
    SidenavComponent.prototype.expandMenu = function () {
        if (this.getMode() === 'over') {
            this.open(); //
        }
        else {
            this.expand();
        }
    };
    SidenavComponent.prototype.getMode = function () {
        return this.mode;
    };
    SidenavComponent.prototype.isExpanded = function () {
        return this.expanded;
    };
    SidenavComponent.prototype.isOpen = function () {
        return this.opened;
    };
    SidenavComponent.prototype.isOverMenuOpened = function () {
        return this.mode === 'over' && this.opened;
    };
    SidenavComponent.prototype.close = function () {
        if (this.isOverMenuOpened()) {
            this.opened = false;
        }
    };
    SidenavComponent.prototype.expandClose = function () {
        if (this.isOverMenuOpened()) {
            this.opened = false;
        }
        if (!this.expanded) {
            this.expanded = true;
        }
    };
    SidenavComponent.prototype.getMenuLayout = function () {
        return this.layoutService.getLayout() === 'mobile' ? 'over' : 'side';
    };
    SidenavComponent.ctorParameters = function () { return [
        { type: _menu_service__WEBPACK_IMPORTED_MODULE_3__["MenuService"] },
        { type: src_app_shared_services__WEBPACK_IMPORTED_MODULE_6__["Log"] },
        { type: src_app_shared_services__WEBPACK_IMPORTED_MODULE_6__["LayoutService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SidenavComponent.prototype, "mode", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], SidenavComponent.prototype, "opened", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SidenavComponent.prototype, "expanded", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SidenavComponent.prototype, "lang", void 0);
    SidenavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidenav',
            template: __webpack_require__(/*! raw-loader!./sidenav.component.html */ "./node_modules/raw-loader/index.js!./src/app/sidenav/sidenav.component.html"),
            styles: [__webpack_require__(/*! ./sidenav.component.css */ "./src/app/sidenav/sidenav.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_menu_service__WEBPACK_IMPORTED_MODULE_3__["MenuService"],
            src_app_shared_services__WEBPACK_IMPORTED_MODULE_6__["Log"],
            src_app_shared_services__WEBPACK_IMPORTED_MODULE_6__["LayoutService"]])
    ], SidenavComponent);
    return SidenavComponent;
}());



/***/ }),

/***/ "./src/app/sidenav/sidenavcontainer.component.css":
/*!********************************************************!*\
  !*** ./src/app/sidenav/sidenavcontainer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n.banner-container img {\r\n  width: 100%;\r\n}\r\n\r\n\r\n@media all and (min-width: 55em) {\r\n\t.banner-container img {\r\n\t\tdisplay: block;\r\n\t\tmargin: 0 auto;\r\n\t}\r\n\r\n}\r\n\r\n\r\n/*\r\n.top-banner {\r\n  box-shadow: 5px 5px 10px 0 #656565;\r\n}*/\r\n\r\n\r\n/* top menu bar CSS */\r\n\r\n\r\n.top-menu-bar {\r\n  box-shadow: 5px 5px 10px 0 #656565;\r\n  /*box-shadow: 0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12);*/\r\n  display:table;\r\n  font-size: 1.25em;\r\n\r\n  text-decoration: none;\r\n\r\n  width: 100%;\r\n  z-index: 100;\r\n}\r\n\r\n\r\n/* web site title */\r\n\r\n\r\n.top-menu-title-container {\r\n  display: table-cell;\r\n  padding: 0.5em ;\r\n  text-align: left;\r\n  width: 100%;\r\n}\r\n\r\n\r\n.router-container {\r\n  padding: 0;\r\n  width:100%;\r\n}\r\n\r\n\r\n@media all and (min-width: 55em) {\r\n  .router-container {\r\n    padding-left: 0.2em;\r\n  }\r\n}\r\n\r\n\r\n.top-menu-icon-container {\r\n  display: table-cell;\r\n  padding: 0.5em ;\r\n  width: 2.8em;\r\n}\r\n\r\n\r\n.image-auto-width {\r\n  height: auto;\r\n  width:100%;\r\n}\r\n\r\n\r\n.top-menu-title {\r\n  font-weight: normal;\r\n}\r\n\r\n\r\n/* content CSS */\r\n\r\n\r\n.my-body {\r\n  display: -webkit-box;\r\n  display: flex;\r\n}\r\n\r\n\r\n/* backdrop when displaying mobile menu */\r\n\r\n\r\n.my-mat-sidenav-backdrop {\r\n  position:fixed;\r\n  padding:0;\r\n  margin:0;\r\n\r\n  top:0;\r\n  left:0;\r\n\r\n  width: 100%;\r\n  height: 100%;\r\n  -webkit-transition: background-color .5s cubic-bezier(.25, .8, .25, 1);\r\n  transition: background-color .5s cubic-bezier(.25, .8, .25, 1);\r\n  visibility: hidden;\r\n  z-index: 80;\r\n}\r\n\r\n\r\n.my-mat-sidenav-shown {\r\n  background-color: rgba(0, 0, 0, 0.6);\r\n  visibility: visible;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZW5hdi9zaWRlbmF2Y29udGFpbmVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7O0FBR0E7Q0FDQztFQUNDLGNBQWM7RUFDZCxjQUFjO0NBQ2Y7O0FBRUQ7OztBQUNBOzs7RUFHRTs7O0FBQ0YscUJBQXFCOzs7QUFDckI7RUFDRSxrQ0FBa0M7RUFDbEMseUdBQXlHO0VBQ3pHLGFBQWE7RUFDYixpQkFBaUI7O0VBRWpCLHFCQUFxQjs7RUFFckIsV0FBVztFQUNYLFlBQVk7QUFDZDs7O0FBRUEsbUJBQW1COzs7QUFDbkI7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7OztBQUVBO0VBQ0UsVUFBVTtFQUNWLFVBQVU7QUFDWjs7O0FBS0E7RUFDRTtJQUNFLG1CQUFtQjtFQUNyQjtBQUNGOzs7QUFHQTtFQUNFLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsWUFBWTtBQUNkOzs7QUFFQTtFQUNFLFlBQVk7RUFDWixVQUFVO0FBQ1o7OztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOzs7QUFJQSxnQkFBZ0I7OztBQUNoQjtFQUNFLG9CQUFhO0VBQWIsYUFBYTtBQUNmOzs7QUFJQSx5Q0FBeUM7OztBQUV6QztFQUNFLGNBQWM7RUFDZCxTQUFTO0VBQ1QsUUFBUTs7RUFFUixLQUFLO0VBQ0wsTUFBTTs7RUFFTixXQUFXO0VBQ1gsWUFBWTtFQUNaLHNFQUE4RDtFQUE5RCw4REFBOEQ7RUFDOUQsa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7O0FBQ0E7RUFDRSxvQ0FBb0M7RUFDcEMsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvc2lkZW5hdi9zaWRlbmF2Y29udGFpbmVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi5iYW5uZXItY29udGFpbmVyIGltZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiA1NWVtKSB7XHJcblx0LmJhbm5lci1jb250YWluZXIgaW1nIHtcclxuXHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0bWFyZ2luOiAwIGF1dG87XHJcblx0fVxyXG5cclxufVxyXG4vKlxyXG4udG9wLWJhbm5lciB7XHJcbiAgYm94LXNoYWRvdzogNXB4IDVweCAxMHB4IDAgIzY1NjU2NTtcclxufSovXHJcbi8qIHRvcCBtZW51IGJhciBDU1MgKi9cclxuLnRvcC1tZW51LWJhciB7XHJcbiAgYm94LXNoYWRvdzogNXB4IDVweCAxMHB4IDAgIzY1NjU2NTtcclxuICAvKmJveC1zaGFkb3c6IDAgM3B4IDVweCAtMXB4IHJnYmEoMCwwLDAsLjIpLCAwIDZweCAxMHB4IDAgcmdiYSgwLDAsMCwuMTQpLCAwIDFweCAxOHB4IDAgcmdiYSgwLDAsMCwuMTIpOyovXHJcbiAgZGlzcGxheTp0YWJsZTtcclxuICBmb250LXNpemU6IDEuMjVlbTtcclxuXHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cclxuICB3aWR0aDogMTAwJTtcclxuICB6LWluZGV4OiAxMDA7XHJcbn1cclxuXHJcbi8qIHdlYiBzaXRlIHRpdGxlICovXHJcbi50b3AtbWVudS10aXRsZS1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgcGFkZGluZzogMC41ZW0gO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5yb3V0ZXItY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIHdpZHRoOjEwMCU7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbkBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDU1ZW0pIHtcclxuICAucm91dGVyLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDAuMmVtO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi50b3AtbWVudS1pY29uLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICBwYWRkaW5nOiAwLjVlbSA7XHJcbiAgd2lkdGg6IDIuOGVtO1xyXG59XHJcblxyXG4uaW1hZ2UtYXV0by13aWR0aCB7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHdpZHRoOjEwMCU7XHJcbn1cclxuXHJcbi50b3AtbWVudS10aXRsZSB7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxufVxyXG5cclxuXHJcblxyXG4vKiBjb250ZW50IENTUyAqL1xyXG4ubXktYm9keSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuXHJcblxyXG4vKiBiYWNrZHJvcCB3aGVuIGRpc3BsYXlpbmcgbW9iaWxlIG1lbnUgKi9cclxuXHJcbi5teS1tYXQtc2lkZW5hdi1iYWNrZHJvcCB7XHJcbiAgcG9zaXRpb246Zml4ZWQ7XHJcbiAgcGFkZGluZzowO1xyXG4gIG1hcmdpbjowO1xyXG5cclxuICB0b3A6MDtcclxuICBsZWZ0OjA7XHJcblxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC41cyBjdWJpYy1iZXppZXIoLjI1LCAuOCwgLjI1LCAxKTtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgei1pbmRleDogODA7XHJcbn1cclxuLm15LW1hdC1zaWRlbmF2LXNob3duIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/sidenav/sidenavcontainer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/sidenav/sidenavcontainer.component.ts ***!
  \*******************************************************/
/*! exports provided: SidenavcontainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavcontainerComponent", function() { return SidenavcontainerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_shared_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services */ "./src/app/shared/services/index.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_maincontent_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/maincontent/image */ "./src/app/maincontent/image/index.ts");







var SidenavcontainerComponent = /** @class */ (function () {
    function SidenavcontainerComponent(titleService, meta, readService, http, imageService, layoutService) {
        this.titleService = titleService;
        this.meta = meta;
        this.readService = readService;
        this.http = http;
        this.imageService = imageService;
        this.layoutService = layoutService;
        this.title = '';
        /**
        * https://material.angular.io/components/component/sidenav
        */
        this.menuMode = 'over';
        /*
        opened  https://www.npmjs.com/package/@angular2-material/sidenav
        */
        this.menuOpened = false;
        this.bannerurl = '';
        this.bannerpicture = null;
        this.initLayout();
        this.bannerurl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].server + '/assets/banner-1900.jpg';
        this.bannerpicture = {};
        this.bannerpicture.thumbnails = [];
        this.bannerpicture.thumbnails.push({ url: 'banner-672.jpg', width: '672' });
        this.bannerpicture.thumbnails.push({ url: 'banner-768.jpg', width: '768' });
        this.bannerpicture.thumbnails.push({ url: 'banner-1024.jpg', width: '1024' });
        this.bannerpicture.thumbnails.push({ url: 'banner-1200.jpg', width: '1200' });
        this.bannerpicture.thumbnails.push({ url: 'banner-1600.jpg', width: '1600' });
        this.bannerpicture.thumbnails.push({ url: 'banner-1600.jpg', width: '1900' });
    }
    SidenavcontainerComponent.prototype.ngAfterViewInit = function () {
        this.fetchData();
    };
    SidenavcontainerComponent.prototype.getBannerSrcSet = function () {
        return this.imageService.getSrcSet(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].server + '/assets/', this.bannerpicture);
    };
    SidenavcontainerComponent.prototype.fetchData = function () {
        var _this = this;
        this.http.get(this.readService.getUrl('description', 'head'))
            .subscribe(function (data) {
            _this.item = data;
            if (_this.layoutService.getLayout() === 'desktop') {
                _this.title = _this.item.fulltitle;
            }
            else {
                _this.title = _this.item.title;
            }
            _this.meta.addTag({ name: 'keywords', content: _this.item.keywords });
            _this.meta.addTag({ name: 'description', content: _this.item.description });
            _this.titleService.setTitle(_this.title);
        });
    };
    SidenavcontainerComponent.prototype.initLayout = function () {
        var layout = this.layoutService.getLayout();
        this.menuOpened = false;
        this.menuMode = 'over';
        if (layout === 'desktop') {
            this.menuMode = 'side';
            this.menuOpened = true;
        }
    };
    SidenavcontainerComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"] },
        { type: src_app_shared_services__WEBPACK_IMPORTED_MODULE_4__["ReadService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
        { type: src_app_maincontent_image__WEBPACK_IMPORTED_MODULE_6__["ImageService"] },
        { type: src_app_shared_services__WEBPACK_IMPORTED_MODULE_4__["LayoutService"] }
    ]; };
    SidenavcontainerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidenav-container',
            template: __webpack_require__(/*! raw-loader!./sidenavcontainer.component.html */ "./node_modules/raw-loader/index.js!./src/app/sidenav/sidenavcontainer.component.html"),
            styles: [__webpack_require__(/*! ./sidenavcontainer.component.css */ "./src/app/sidenav/sidenavcontainer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"],
            src_app_shared_services__WEBPACK_IMPORTED_MODULE_4__["ReadService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            src_app_maincontent_image__WEBPACK_IMPORTED_MODULE_6__["ImageService"],
            src_app_shared_services__WEBPACK_IMPORTED_MODULE_4__["LayoutService"]])
    ], SidenavcontainerComponent);
    return SidenavcontainerComponent;
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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    defaultlocale: 'en',
    locale: 'fr-FR',
    server: '',
    log: 'debug',
    public: 'public'
};


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
/* harmony import */ var src_app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(src_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/olivier/git/mobilecms/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map