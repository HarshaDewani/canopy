(self.webpackChunk_legal_and_general_canopy=self.webpackChunk_legal_and_general_canopy||[]).push([[6128,9326],{"./projects/canopy/src/lib/focus/focus.directive.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{t:()=>LgFocusDirective});var tslib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let LgFocusDirective=class LgFocusDirective{constructor(el){this.el=el}ngOnChanges({lgFocus}){if(lgFocus.currentValue){this.el.nativeElement.focus()}}static#_=this.ctorParameters=()=>[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef}];static#_2=this.propDecorators={lgFocus:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}]}};LgFocusDirective=(0,tslib__WEBPACK_IMPORTED_MODULE_1__.Cg)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({selector:"[lgFocus]",standalone:!0})],LgFocusDirective)},"./projects/canopy/src/lib/tabs/tab-item/tab-item.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{h:()=>LgTabItemComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let LgTabItemComponent=class LgTabItemComponent{static#_=this.propDecorators={navItemTemplate:[{type:core.ViewChild,args:["navItemTemplate",{static:!0}]}],contentTemplate:[{type:core.ViewChild,args:["contentTemplate",{static:!0}]}]}};LgTabItemComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"lg-tab-item",template:'<ng-template #navItemTemplate>\n  <ng-content select="lg-tab-item-heading"></ng-content>\n</ng-template>\n\n<ng-template #contentTemplate>\n  <ng-content select="lg-tab-item-content"></ng-content>\n</ng-template>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,standalone:!0})],LgTabItemComponent)},"./projects/canopy/src/lib/tabs/tabs.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>LgTabsComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var tabs_componentngResource=__webpack_require__("./projects/canopy/src/lib/tabs/tabs.component.scss?ngResource"),tabs_componentngResource_default=__webpack_require__.n(tabs_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),keyboard_keys=__webpack_require__("./projects/canopy/src/lib/utils/keyboard-keys.ts"),focus_directive=__webpack_require__("./projects/canopy/src/lib/focus/focus.directive.ts"),tab_item_component=__webpack_require__("./projects/canopy/src/lib/tabs/tab-item/tab-item.component.ts");let nextUniqueId=0,LgTabsComponent=class LgTabsComponent{constructor(cd){this.cd=cd,this.selectedIndex=0,this.isKeyboardEvent=!1,this.id=nextUniqueId++,this.class=!0,this.label="tabs",this.tabEvent=new core.EventEmitter}ngOnDestroy(){this.subscription.unsubscribe()}ngAfterContentInit(){this.setTabs(),this.subscription=this.tabQueryList.changes.subscribe((()=>{this.setTabs(),this.cd.detectChanges()}))}setTabs(){this.tabs=this.tabQueryList.toArray()}navigateToTab(index){this.selectedIndex=index,this.cd.detectChanges(),this.tabEvent.emit({index:this.selectedIndex})}keyboardNavigation(event){this.isKeyboardEvent=!0;const isPreviousKey=(0,keyboard_keys.d2)(event)||(0,keyboard_keys.$1)(event),isNextKey=(0,keyboard_keys.ad)(event)||(0,keyboard_keys.OW)(event);let newSelectedIndex=this.selectedIndex;(isPreviousKey||isNextKey)&&(event.preventDefault(),isPreviousKey&&(newSelectedIndex=0===this.selectedIndex?this.tabs.length-1:this.selectedIndex-1),isNextKey&&(newSelectedIndex=this.selectedIndex===this.tabs.length-1?0:this.selectedIndex+1),this.navigateToTab(newSelectedIndex))}blur(index){this.selectedIndex===index&&(this.isKeyboardEvent=!1)}static#_=this.ctorParameters=()=>[{type:core.ChangeDetectorRef}];static#_2=this.propDecorators={class:[{type:core.HostBinding,args:["class.lg-tabs"]}],tabQueryList:[{type:core.ContentChildren,args:[(0,core.forwardRef)((()=>tab_item_component.h)),{descendants:!0}]}],label:[{type:core.Input}],tabEvent:[{type:core.Output}]}};LgTabsComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"lg-tabs",template:'<div class="lg-tabs__list" role="tablist" [attr.aria-label]="label">\n  <button\n    *ngFor="let tab of tabs; let index = index"\n    class="lg-tabs__list-item-toggle"\n    [ngClass]="{\n      \'lg-tabs__list-item-toggle--selected\': selectedIndex === index\n    }"\n    role="tab"\n    [lgFocus]="isKeyboardEvent && selectedIndex === index"\n    [attr.tabIndex]="index !== selectedIndex ? \'-1\' : 0"\n    [attr.aria-selected]="index === selectedIndex"\n    [attr.aria-controls]="\'tab-item-content-\' + id + \'-\' + index"\n    [attr.keyboard-focus]="(isKeyboardEvent && selectedIndex === index) || null"\n    [id]="\'tab-item-heading-\' + id + \'-\' + index"\n    (click)="navigateToTab(index)"\n    (blur)="blur(index)"\n    (keyup)="keyboardNavigation($event)"\n  >\n    <span class="lg-tabs__list-item-heading">\n      <ng-container *ngTemplateOutlet="tab.navItemTemplate"></ng-container>\n    </span>\n  </button>\n</div>\n<div\n  *ngFor="let tab of tabs; let index = index"\n  class="lg-tabs__content"\n  role="tabpanel"\n  tabindex="0"\n  [id]="\'tab-item-content-\' + id + \'-\' + index"\n  [attr.aria-labelledby]="\'tab-item-heading-\' + id + \'-\' + index"\n  [attr.hidden]="index !== selectedIndex ? \'\' : null"\n>\n  <ng-container *ngTemplateOutlet="tab.contentTemplate"></ng-container>\n</div>\n',encapsulation:core.ViewEncapsulation.None,changeDetection:core.ChangeDetectionStrategy.OnPush,standalone:!0,imports:[common.NgFor,common.NgClass,focus_directive.t,common.NgTemplateOutlet],styles:[tabs_componentngResource_default()]})],LgTabsComponent)},"./projects/canopy/src/lib/utils/keyboard-keys.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{$1:()=>isKeyUp,OW:()=>isKeyDown,ad:()=>isKeyRight,d2:()=>isKeyLeft,xT:()=>keyName});const keyName={KEY_LEFT:"ArrowLeft",KEY_UP:"ArrowUp",KEY_RIGHT:"ArrowRight",KEY_DOWN:"ArrowDown",KEY_ESCAPE:"Escape",KEY_TAB:"Tab"},isKeyLeft=event=>event.key===keyName.KEY_LEFT||"Left"===event.key,isKeyUp=event=>event.key===keyName.KEY_UP||"Up"===event.key,isKeyRight=event=>event.key===keyName.KEY_RIGHT||"Right"===event.key,isKeyDown=event=>event.key===keyName.KEY_DOWN||"Down"===event.key},"./node_modules/@storybook/angular/dist/client/argsToTemplate.js":(__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.argsToTemplate=void 0,exports.argsToTemplate=function argsToTemplate(args,options={}){const includeSet=options.include?new Set(options.include):null,excludeSet=options.exclude?new Set(options.exclude):null;return Object.entries(args).filter((([key])=>void 0!==args[key])).filter((([key])=>includeSet?includeSet.has(key):!excludeSet||!excludeSet.has(key))).map((([key,value])=>"function"==typeof value?`(${key})="${key}($event)"`:`[${key}]="${key}"`)).join(" ")}},"./node_modules/@storybook/angular/dist/client/decorators.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.componentWrapperDecorator=exports.applicationConfig=exports.moduleMetadata=void 0;const ComputesTemplateFromComponent_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/ComputesTemplateFromComponent.js"),NgComponentAnalyzer_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/utils/NgComponentAnalyzer.js");exports.moduleMetadata=metadata=>storyFn=>{const story=storyFn(),storyMetadata=story.moduleMetadata||{};return metadata=metadata||{},{...story,moduleMetadata:{declarations:[...metadata.declarations||[],...storyMetadata.declarations||[]],entryComponents:[...metadata.entryComponents||[],...storyMetadata.entryComponents||[]],imports:[...metadata.imports||[],...storyMetadata.imports||[]],schemas:[...metadata.schemas||[],...storyMetadata.schemas||[]],providers:[...metadata.providers||[],...storyMetadata.providers||[]]}}},exports.applicationConfig=function applicationConfig(config){return storyFn=>{const story=storyFn(),storyConfig=story.applicationConfig;return{...story,applicationConfig:storyConfig||config?{...config,...storyConfig,providers:[...config?.providers||[],...storyConfig?.providers||[]]}:void 0}}};exports.componentWrapperDecorator=(element,props)=>(storyFn,storyContext)=>{const story=storyFn(),currentProps="function"==typeof props?props(storyContext):props,template=(0,NgComponentAnalyzer_1.isComponent)(element)?(0,ComputesTemplateFromComponent_1.computesTemplateFromComponent)(element,currentProps??{},story.template):element(story.template);return{...story,template,...currentProps||story.props?{props:{...currentProps,...story.props}}:{}}}},"./node_modules/@storybook/angular/dist/client/index.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__exportStar=this&&this.__exportStar||function(m,exports){for(var p in m)"default"===p||Object.prototype.hasOwnProperty.call(exports,p)||__createBinding(exports,m,p)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.argsToTemplate=exports.applicationConfig=exports.componentWrapperDecorator=exports.moduleMetadata=void 0,__webpack_require__("./node_modules/@storybook/angular/dist/client/globals.js"),__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-api.js"),exports),__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-types.js"),exports);var decorators_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/decorators.js");Object.defineProperty(exports,"moduleMetadata",{enumerable:!0,get:function(){return decorators_1.moduleMetadata}}),Object.defineProperty(exports,"componentWrapperDecorator",{enumerable:!0,get:function(){return decorators_1.componentWrapperDecorator}}),Object.defineProperty(exports,"applicationConfig",{enumerable:!0,get:function(){return decorators_1.applicationConfig}});var argsToTemplate_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/argsToTemplate.js");Object.defineProperty(exports,"argsToTemplate",{enumerable:!0,get:function(){return argsToTemplate_1.argsToTemplate}})},"./node_modules/@storybook/angular/dist/client/public-api.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__exportStar=this&&this.__exportStar||function(m,exports){for(var p in m)"default"===p||Object.prototype.hasOwnProperty.call(exports,p)||__createBinding(exports,m,p)},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.raw=exports.forceReRender=exports.configure=exports.storiesOf=void 0;const preview_api_1=__webpack_require__("@storybook/preview-api"),render_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/render.js"),decorateStory_1=__importDefault(__webpack_require__("./node_modules/@storybook/angular/dist/client/decorateStory.js"));__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-types.js"),exports);const api=(0,preview_api_1.start)(render_1.renderToCanvas,{decorateStory:decorateStory_1.default,render:render_1.render});exports.storiesOf=(kind,m)=>api.clientApi.storiesOf(kind,m).addParameters({renderer:"angular"});exports.configure=(...args)=>api.configure("angular",...args),exports.forceReRender=api.forceReRender,exports.raw=api.clientApi.raw},"./node_modules/@storybook/angular/dist/client/public-types.js":(__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0})},"./node_modules/@storybook/angular/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";var _client_index__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/client/index.js");__webpack_require__.o(_client_index__WEBPACK_IMPORTED_MODULE_0__,"moduleMetadata")&&__webpack_require__.d(__webpack_exports__,{moduleMetadata:function(){return _client_index__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata}})},"./node_modules/css-loader/dist/runtime/api.js":module=>{"use strict";module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/noSourceMaps.js":module=>{"use strict";module.exports=function(i){return i[1]}},"./projects/canopy/src/lib/tabs/tabs.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,'/*\n  $bg-color: background color of the element.\n  $color: colour of the outline.\n  Sets the focus outline inside the element, by using multiple box shadows\n*/\n/*\n  $breakpoint: string value for the breakpoint screen size.\n  Creates a mixin which allows breakpoints to be added to css blocks\n*/\n/*\n  $bg-color: background color of the element.\n  $color: colour of the outline.\n  Sets the focus outline inside the element, by using multiple box shadows\n*/\n/*\n  $breakpoint: string value for the breakpoint screen size.\n  Creates a mixin which allows breakpoints to be added to css blocks\n*/\n.lg-tabs {\n  display: block;\n  margin-left: calc(-1 * var(--space-sm));\n  margin-right: calc(-1 * var(--space-sm));\n  margin-bottom: var(--component-margin);\n}\n@media (min-width: 48rem) {\n  .lg-tabs {\n    margin-left: calc(-1 * var(--space-lg));\n    margin-right: calc(-1 * var(--space-lg));\n  }\n}\n\n.lg-tabs__list {\n  border-bottom: var(--tabs-border-bottom-width) solid var(--tabs-border-bottom-color);\n  display: flex;\n  flex-wrap: wrap;\n  list-style: none;\n  padding: 0 var(--space-sm);\n  margin-left: 0;\n}\n@media (min-width: 48rem) {\n  .lg-tabs__list {\n    padding: 0 var(--space-md);\n  }\n}\n@media (min-width: 64rem) {\n  .lg-tabs__list {\n    padding: 0 var(--space-lg);\n  }\n}\n\n.lg-tabs__list-item-heading {\n  margin-bottom: calc(-1 * var(--tabs-border-bottom-width));\n  font-size: var(--text-base-size);\n  font-weight: var(--tabs-list-item-font-weight);\n  max-width: 100%;\n  padding: 0;\n}\n\n.lg-tabs__list-item-toggle {\n  position: relative;\n  padding: 0 var(--space-xxs);\n  height: var(--tabs-list-item-line-height);\n  margin-top: 0;\n  margin-right: var(--space-sm);\n  margin-left: calc(-1 * var(--space-xxs));\n  background: transparent;\n  border: 0;\n  white-space: nowrap;\n  color: var(--tabs-list-item-color);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: calc(100% + var(--space-sm));\n}\n@media (min-width: 64rem) {\n  .lg-tabs__list-item-toggle {\n    margin-right: var(--space-lg);\n    height: var(--tabs-list-item-lg-line-height);\n  }\n}\n.lg-tabs__list-item-toggle--active {\n  color: var(--tabs-list-item-color);\n}\n.lg-tabs__list-item-toggle::after {\n  content: "";\n  position: absolute;\n  bottom: 0;\n  width: calc(100% - var(--space-xxs) - var(--space-xxs));\n  left: var(--space-xxs);\n}\n.lg-tabs__list-item-toggle--selected {\n  color: var(--tabs-active-color);\n  font-weight: var(--tabs-active-font-weight);\n}\n.lg-tabs__list-item-toggle--selected::after {\n  background-color: var(--tabs-active-border-color);\n  height: var(--tabs-active-border-width);\n}\n.lg-tabs__list-item-toggle:focus-visible {\n  outline: 0 !important;\n  box-shadow: 0 0 0 var(--inner-focus-width) var(--default-inner-focus-color), 0 0 0 var(--outer-focus-width) var(--default-focus-color);\n}\n.lg-tabs__list-item-toggle:hover {\n  cursor: pointer;\n  color: var(--tabs-hover-color);\n}\n.lg-tabs__list-item-toggle:hover::after {\n  background-color: var(--tabs-hover-color);\n  height: var(--tabs-hover-border-width);\n}\n\n.lg-tabs__content-section {\n  padding: var(--space-sm);\n}\n@media (min-width: 48rem) {\n  .lg-tabs__content-section {\n    padding: var(--space-md);\n  }\n}\n@media (min-width: 64rem) {\n  .lg-tabs__content-section {\n    padding: var(--space-lg);\n  }\n}',""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);