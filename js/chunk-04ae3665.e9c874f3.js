(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-04ae3665"],{"00ef":function(e,t,n){"use strict";var r=n("bf82");n("4c44");t["a"]=r["a"]},2482:function(e,t,n){"use strict";var r=n("36de"),a=new r["a"]("I18n"),i=function(){function e(e){this._options=null,this._lang=null,this._dict={},this._options=Object.assign({},e),this._lang=this._options.language,!this._lang&&"undefined"!==typeof window&&window&&window.navigator&&(this._lang=window.navigator.language),a.debug(this._lang)}return e.prototype.setLanguage=function(e){this._lang=e},e.prototype.get=function(e,t){if(void 0===t&&(t=void 0),!this._lang)return"undefined"!==typeof t?t:e;var n=this._lang,r=this.getByLanguage(e,n);return r||(n.indexOf("-")>0&&(r=this.getByLanguage(e,n.split("-")[0])),r||("undefined"!==typeof t?t:e))},e.prototype.getByLanguage=function(e,t,n){if(void 0===n&&(n=null),!t)return n;var r=this._dict[t];return r?r[e]:n},e.prototype.putVocabulariesForLanguage=function(e,t){var n=this._dict[e];n||(n=this._dict[e]={}),Object.assign(n,t)},e.prototype.putVocabularies=function(e){var t=this;Object.keys(e).map(function(n){t.putVocabulariesForLanguage(n,e[n])})},e}(),o=n("7d03");n.d(t,"a",function(){return c});var l=new r["a"]("I18n"),E=null,u=null,c=function(){function e(){}return e.configure=function(t){return l.debug("configure I18n"),t?(E=Object.assign({},E,t.I18n||t),e.createInstance(),E):E},e.getModuleName=function(){return"I18n"},e.createInstance=function(){l.debug("create I18n instance"),u||(u=new i(E))},e.setLanguage=function(t){return e.checkConfig(),u.setLanguage(t)},e.get=function(t,n){return e.checkConfig()?u.get(t,n):"undefined"===typeof n?t:n},e.putVocabulariesForLanguage=function(t,n){return e.checkConfig(),u.putVocabulariesForLanguage(t,n)},e.putVocabularies=function(t){return e.checkConfig(),u.putVocabularies(t)},e.checkConfig=function(){return u||(u=new i(E)),!0},e}();o["a"].register(c)},"6c18":function(e,t,n){"use strict";n.d(t,"a",function(){return o});var r,a,i=n("60ac");(function(e){e["BACK_TO_SIGN_IN"]="Back to Sign In",e["CHANGE_PASSWORD_ACTION"]="Change",e["CHANGE_PASSWORD"]="Change Password",e["CODE_LABEL"]="Verification code",e["CODE_PLACEHOLDER"]="Enter code",e["CONFIRM_SIGN_UP_CODE_LABEL"]="Confirmation Code",e["CONFIRM_SIGN_UP_CODE_PLACEHOLDER"]="Enter your code",e["CONFIRM_SIGN_UP_HEADER_TEXT"]="Confirm Sign up",e["CONFIRM_SIGN_UP_LOST_CODE"]="Lost your code?",e["CONFIRM_SIGN_UP_RESEND_CODE"]="Resend Code",e["CONFIRM_SIGN_UP_SUBMIT_BUTTON_TEXT"]="Confirm",e["CONFIRM_SMS_CODE"]="Confirm SMS Code",e["CONFIRM_TOTP_CODE"]="Confirm TOTP Code",e["CONFIRM"]="Confirm",e["CREATE_ACCOUNT_TEXT"]="Create account",e["EMAIL_LABEL"]="Email Address *",e["EMAIL_PLACEHOLDER"]="Enter your email address",e["FORGOT_PASSWORD_TEXT"]="Forgot your password?",e["LESS_THAN_TWO_MFA_VALUES_MESSAGE"]="Less than two MFA types available",e["NEW_PASSWORD_LABEL"]="New password",e["NEW_PASSWORD_PLACEHOLDER"]="Enter your new password",e["NO_ACCOUNT_TEXT"]="No account?",e["USERNAME_REMOVE_WHITESPACE"]="Username cannot contain whitespace",e["PASSWORD_REMOVE_WHITESPACE"]="Password cannot start or end with whitespace",e["PASSWORD_LABEL"]="Password *",e["PASSWORD_PLACEHOLDER"]="Enter your password",e["PHONE_LABEL"]="Phone Number *",e["PHONE_PLACEHOLDER"]="(555) 555-1212",e["QR_CODE_ALT"]="qrcode",e["RESET_PASSWORD_TEXT"]="Reset password",e["RESET_YOUR_PASSWORD"]="Reset your password",e["SELECT_MFA_TYPE_HEADER_TEXT"]="Select MFA Type",e["SELECT_MFA_TYPE_SUBMIT_BUTTON_TEXT"]="Verify",e["SEND_CODE"]="Send Code",e["SUBMIT"]="Submit",e["SETUP_TOTP_REQUIRED"]="TOTP needs to be configured",e["SIGN_IN_ACTION"]="Sign In",e["SIGN_IN_HEADER_TEXT"]="Sign in to your account",e["SIGN_IN_TEXT"]="Sign in",e["SIGN_IN_WITH_AMAZON"]="Sign in with Amazon",e["SIGN_IN_WITH_AUTH0"]="Sign in with Auth0",e["SIGN_IN_WITH_AWS"]="Sign in with AWS",e["SIGN_IN_WITH_FACEBOOK"]="Sign in with Facebook",e["SIGN_IN_WITH_GOOGLE"]="Sign in with Google",e["SIGN_OUT"]="Sign Out",e["SIGN_UP_EMAIL_PLACEHOLDER"]="Email",e["SIGN_UP_HAVE_ACCOUNT_TEXT"]="Have an account?",e["SIGN_UP_HEADER_TEXT"]="Create a new account",e["SIGN_UP_PASSWORD_PLACEHOLDER"]="Password",e["SIGN_UP_SUBMIT_BUTTON_TEXT"]="Create Account",e["SIGN_UP_USERNAME_PLACEHOLDER"]="Username",e["SUCCESS_MFA_TYPE"]="Success! Your MFA Type is now:",e["TOTP_HEADER_TEXT"]="Scan then enter verification code",e["TOTP_LABEL"]="Enter Security Code:",e["TOTP_ISSUER"]="AWSCognito",e["TOTP_SETUP_FAILURE"]="TOTP Setup has failed",e["TOTP_SUBMIT_BUTTON_TEXT"]="Verify Security Token",e["TOTP_SUCCESS_MESSAGE"]="Setup TOTP successfully!",e["UNABLE_TO_SETUP_MFA_AT_THIS_TIME"]="Failed! Unable to configure MFA at this time",e["USERNAME_LABEL"]="Username *",e["USERNAME_PLACEHOLDER"]="Enter your username",e["VERIFY_CONTACT_EMAIL_LABEL"]="Email",e["VERIFY_CONTACT_HEADER_TEXT"]="Account recovery requires verified contact information",e["VERIFY_CONTACT_PHONE_LABEL"]="Phone Number",e["VERIFY_CONTACT_SUBMIT_LABEL"]="Submit",e["VERIFY_CONTACT_VERIFY_LABEL"]="Verify",e["ADDRESS_LABEL"]="Address",e["ADDRESS_PLACEHOLDER"]="Enter your address",e["NICKNAME_LABEL"]="Nickname",e["NICKNAME_PLACEHOLDER"]="Enter your nickname",e["BIRTHDATE_LABEL"]="Birthday",e["BIRTHDATE_PLACEHOLDER"]="Enter your birthday",e["PICTURE_LABEL"]="Picture URL",e["PICTURE_PLACEHOLDER"]="Enter your picture URL",e["FAMILY_NAME_LABEL"]="Family Name",e["FAMILY_NAME_PLACEHOLDER"]="Enter your family name",e["PREFERRED_USERNAME_LABEL"]="Preferred Username",e["PREFERRED_USERNAME_PLACEHOLDER"]="Enter your preferred username",e["GENDER_LABEL"]="Gender",e["GENDER_PLACEHOLDER"]="Enter your gender",e["PROFILE_LABEL"]="Profile URL",e["PROFILE_PLACEHOLDER"]="Enter your profile URL",e["GIVEN_NAME_LABEL"]="First Name",e["GIVEN_NAME_PLACEHOLDER"]="Enter your first name",e["ZONEINFO_LABEL"]="Time zone",e["ZONEINFO_PLACEHOLDER"]="Enter your time zone",e["LOCALE_LABEL"]="Locale",e["LOCALE_PLACEHOLDER"]="Enter your locale",e["UPDATED_AT_LABEL"]="Updated At",e["UPDATED_AT_PLACEHOLDER"]="Enter the time the information was last updated",e["MIDDLE_NAME_LABEL"]="Middle Name",e["MIDDLE_NAME_PLACEHOLDER"]="Enter your middle name",e["WEBSITE_LABEL"]="Website",e["WEBSITE_PLACEHOLDER"]="Enter your website",e["NAME_LABEL"]="Full Name",e["NAME_PLACEHOLDER"]="Enter your full name",e["PHOTO_PICKER_TITLE"]="Picker Title",e["PHOTO_PICKER_HINT"]="Ancillary text or content may occupy this space here",e["PHOTO_PICKER_PLACEHOLDER_HINT"]="Placeholder hint",e["PHOTO_PICKER_BUTTON_TEXT"]="Button",e["IMAGE_PICKER_TITLE"]="Add Profile Photo",e["IMAGE_PICKER_HINT"]="Preview the image before upload",e["IMAGE_PICKER_PLACEHOLDER_HINT"]="Tap to image select",e["IMAGE_PICKER_BUTTON_TEXT"]="Upload",e["PICKER_TEXT"]="Pick a file",e["TEXT_FALLBACK_CONTENT"]="Fallback Content",e["CONFIRM_SIGN_UP_FAILED"]="Confirm Sign Up Failed",e["SIGN_UP_FAILED"]="Sign Up Failed"})(r||(r={})),function(e){e["CHATBOT_TITLE"]="ChatBot Lex",e["TEXT_INPUT_PLACEHOLDER"]="Write a message",e["VOICE_INPUT_PLACEHOLDER"]="Click mic to speak",e["CHAT_DISABLED_ERROR"]="Error: Either voice or text must be enabled for the chatbot",e["NO_BOT_NAME_ERROR"]="Error: Bot name must be provided to ChatBot"}(a||(a={}));var o=Object.assign(Object.assign(Object.assign({},r),i["a"]),a)},c084:function(e,t,n){"use strict";n.d(t,"a",function(){return f}),n.d(t,"b",function(){return p}),n.d(t,"c",function(){return A}),n.d(t,"d",function(){return L}),n.d(t,"e",function(){return d}),n.d(t,"f",function(){return T}),n.d(t,"g",function(){return m}),n.d(t,"h",function(){return O}),n.d(t,"i",function(){return h});var r=n("36de"),a=n("4327"),i=n("2482"),o=n("7a37"),l=n("00ef"),E=n("6c18"),u=n("807c"),c=function(e,t,n,r){function a(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||(n=Promise))(function(n,i){function o(e){try{E(r.next(e))}catch(t){i(t)}}function l(e){try{E(r["throw"](e))}catch(t){i(t)}}function E(e){e.done?n(e.value):a(e.value).then(o,l)}E((r=r.apply(e,t||[])).next())})},s=function(e,t){var n,r,a,i,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(e){return function(t){return E([e,t])}}function E(i){if(n)throw new TypeError("Generator is already executing.");while(o)try{if(n=1,r&&(a=2&i[0]?r["return"]:i[0]?r["throw"]||((a=r["return"])&&a.call(r),0):r.next)&&!(a=a.call(r,i[1])).done)return a;switch(r=0,a&&(i=[2&i[0],a.value]),i[0]){case 0:case 1:a=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,r=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(a=o.trys,!(a=a.length>0&&a[a.length-1])&&(6===i[0]||2===i[0])){o=0;continue}if(3===i[0]&&(!a||i[1]>a[0]&&i[1]<a[3])){o.label=i[1];break}if(6===i[0]&&o.label<a[1]){o.label=a[1],a=i;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(i);break}a[2]&&o.ops.pop(),o.trys.pop();continue}i=t.call(e,o)}catch(l){i=[6,l],r=0}finally{n=a=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}},_=new r["a"]("helpers"),d=function(e,t){function n(r){if(!r||r===document||r===window)return null;if(r.matches(e))return t;r.assignedSlot&&(r=r.assignedSlot);var a=r.closest(e);return a||n(r.getRootNode().host)}return n(t)},f=function(e){a["a"].dispatch(u["h"],{event:u["g"],message:i["a"].get(e.message)})},L=function(e,t){a["a"].dispatch(u["h"],{event:u["i"],message:e,data:t})},p=function(e){if(!e.phoneNumberValue)throw new Error(u["e"]);var t=e.phoneNumberValue.replace(/[-()\s]/g,"");return""+e.countryDialCodeValue+t},A=function(e){if(!(e in o["d"]))throw new Error("Invalid username Alias - "+e+". Instead use "+Object.values(o["d"]))},h=function(e){var t=function(t){return c(void 0,void 0,void 0,function(){var n,r,a;return s(this,function(i){switch(i.label){case 0:switch(n=t.payload,r=n.event,r){case u["i"]:return[3,1]}return[3,8];case 1:if(!n.message)return[3,7];if(n.message!==o["a"].SignedIn)return[3,6];i.label=2;case 2:return i.trys.push([2,4,,5]),[4,l["a"].currentAuthenticatedUser()];case 3:return a=i.sent(),e(n.message,a),[3,5];case 4:return i.sent(),_.error("User is not authenticated"),[3,5];case 5:return[3,7];case 6:e(n.message,n.data),i.label=7;case 7:return[3,8];case 8:return[2]}})})};a["a"].listen(u["h"],t);var n=function(){e=function(){},a["a"].remove(u["h"],t)};return n},O=function(e){return!(null===e["hint"]||"string"===typeof e["hint"])},T=function(){return{address:{label:i["a"].get(E["a"].ADDRESS_LABEL),placeholder:i["a"].get(E["a"].ADDRESS_PLACEHOLDER)},nickname:{label:i["a"].get(E["a"].NICKNAME_LABEL),placeholder:i["a"].get(E["a"].NICKNAME_PLACEHOLDER)},birthdate:{label:i["a"].get(E["a"].BIRTHDATE_LABEL),placeholder:i["a"].get(E["a"].BIRTHDATE_PLACEHOLDER)},phone_number:{label:i["a"].get(E["a"].PHONE_LABEL),placeholder:i["a"].get(E["a"].PHONE_PLACEHOLDER)},email:{lable:i["a"].get(E["a"].EMAIL_LABEL),placeholder:i["a"].get(E["a"].EMAIL_PLACEHOLDER)},picture:{label:i["a"].get(E["a"].PICTURE_LABEL),placeholder:i["a"].get(E["a"].PICTURE_PLACEHOLDER)},family_name:{label:i["a"].get(E["a"].FAMILY_NAME_LABEL),placeholder:i["a"].get(E["a"].FAMILY_NAME_PLACEHOLDER)},preferred_username:{label:i["a"].get(E["a"].PREFERRED_USERNAME_LABEL),placeholder:i["a"].get(E["a"].PREFERRED_USERNAME_PLACEHOLDER)},gender:{label:i["a"].get(E["a"].GENDER_LABEL),placeholder:i["a"].get(E["a"].GENDER_PLACEHOLDER)},profile:{label:i["a"].get(E["a"].PROFILE_LABEL),placeholder:i["a"].get(E["a"].PROFILE_PLACEHOLDER)},given_name:{label:i["a"].get(E["a"].GIVEN_NAME_LABEL),placeholder:i["a"].get(E["a"].GIVEN_NAME_PLACEHOLDER)},zoneinfo:{label:i["a"].get(E["a"].ZONEINFO_LABEL),placeholder:i["a"].get(E["a"].ZONEINFO_PLACEHOLDER)},locale:{label:i["a"].get(E["a"].LOCALE_LABEL),placeholder:i["a"].get(E["a"].LOCALE_PLACEHOLDER)},updated_at:{label:i["a"].get(E["a"].UPDATED_AT_LABEL),placeholder:i["a"].get(E["a"].UPDATED_AT_PLACEHOLDER)},middle_name:{label:i["a"].get(E["a"].MIDDLE_NAME_LABEL),placeholder:i["a"].get(E["a"].MIDDLE_NAME_PLACEHOLDER)},website:{label:i["a"].get(E["a"].WEBSITE_LABEL),placeholder:i["a"].get(E["a"].WEBSITE_PLACEHOLDER)},name:{label:i["a"].get(E["a"].NAME_LABEL),placeholder:i["a"].get(E["a"].NAME_PLACEHOLDER)}}};function m(e,t){var n=e.target.name,r=e.target.value;n===u["b"]&&(t.countryDialCodeValue=r),n===u["j"]&&(t.phoneNumberValue=r)}},f988:function(e,t,n){"use strict";n.r(t),n.d(t,"amplify_form_field",function(){return o}),n.d(t,"amplify_hint",function(){return E}),n.d(t,"amplify_input",function(){return c}),n.d(t,"amplify_label",function(){return _});var r=n("6260"),a=(n("7a37"),n("6c18"),n("807c"),n("c084")),i="amplify-form-field{--label-font-size:var(--amplify-text-md);--description-font-size:var(--amplify-text-sm)}.form-field{margin-bottom:15px}.form-field-label{display:block;font-size:var(--label-font-size);padding-bottom:0.5em}.form-field-description{font-size:var(--description-font-size);padding-top:0.5em}",o=function(){function e(e){Object(r["k"])(this,e),this.type="text",this.required=!1,this.placeholder=""}return e.prototype.render=function(){return Object(r["i"])("div",{class:"form-field"},this.label&&Object(r["i"])("div",{class:"form-field-label"},Object(r["i"])("amplify-label",{htmlFor:this.fieldId},this.label)),this.description&&Object(r["i"])("div",{id:this.fieldId+"-description",class:"form-field-description","data-test":"form-field-description"},this.description),Object(r["i"])("div",null,Object(r["i"])("slot",{name:"input"},Object(r["i"])("amplify-input",{fieldId:this.fieldId,description:this.description,type:this.type,handleInputChange:this.handleInputChange,placeholder:this.placeholder,name:this.name,value:this.value,inputProps:this.inputProps,disabled:this.disabled,required:this.required}))),this.hint&&Object(r["i"])("amplify-hint",{id:this.fieldId+"-hint"},this.hint))},e}();o.style=i;var l=":host{--color:var(--amplify-grey);--font-family:var(--amplify-font-family);--font-size:var(--amplify-text-xs);--font-weight:var(--amplify-font-weight)}.hint{color:var(--color);font-family:var(--font-family);font-weight:var(--font-weight);font-size:var(--font-size);margin-bottom:2.625rem}",E=function(){function e(e){Object(r["k"])(this,e)}return e.prototype.render=function(){return Object(r["i"])("div",{class:"hint"},Object(r["i"])("slot",null))},e}();E.style=l;var u="amplify-input{--color:var(--amplify-secondary-color);--background-color:var(--amplify-secondary-contrast);--border-color:var(--amplify-light-grey);--border-color-focus:var(--amplify-primary-color);--border:1px solid var(--border-color);--margin:0 0 0.625rem 0}[data-autocompleted]{background-color:#e8f0fe !important}.input-host{width:100%}.input{display:block;width:100%;padding:1rem;font-size:var(--amplify-text-sm);color:var(--color);background-color:var(--background-color);background-image:none;border:var(--border);border-radius:3px;-webkit-box-sizing:border-box;box-sizing:border-box;margin:var(--margin);height:3.125rem;line-height:1.1;-webkit-box-shadow:none;box-shadow:none}.input:focus{outline:none;border-color:var(--border-color-focus)}.input:disabled{opacity:0.5}",c=function(){function e(e){Object(r["k"])(this,e),this.type="text",this.handleInputChange=function(){},this.placeholder="",this.required=!1,this.autoCompleted=!1}return e.prototype.setAutoCompleteValue=function(e){var t=this.el.querySelector("input");t&&(t.value=e,t.dispatchEvent(new Event("input")),this.autoCompleted=!0)},e.prototype.checkAutoCompletion=function(e){var t=this;e&&(e.value?this.setAutoCompleteValue(e.value):e.addEventListener("input",function(e){var n=e.target.value;t.setAutoCompleteValue(n)}))},e.prototype.disconnectedCallback=function(){this.removeHubListener&&this.removeHubListener()},e.prototype.componentWillLoad=function(){var e=this;Object(a["e"])("amplify-authenticator",this.el)&&(this.removeHubListener=Object(a["i"])(function(){var t=e.el.querySelector("input");t&&(t.value=""),e.autoCompleted=!1}))},e.prototype.componentDidLoad=function(){if(!this.autoCompleted&&!this.value&&!/Firefox/.test(navigator.userAgent)){var e=Object(a["e"])("amplify-auth-container",this.el),t=Object(a["e"])("amplify-sign-in",this.el);if(e&&t){var n=e.querySelector("input[name='username']"),r=e.querySelector("input[name='password']");"username"===this.name||"email"===this.name||"phone"===this.name?this.checkAutoCompletion(n):"password"===this.name&&this.checkAutoCompletion(r)}}},e.prototype.render=function(){var e=this;return Object(r["i"])(r["b"],{class:"input-host"},Object(r["i"])("input",Object.assign({id:this.fieldId,"aria-describedby":this.fieldId&&this.description?this.fieldId+"-description":null,"data-autocompleted":this.autoCompleted,type:this.type,onInput:function(t){e.autoCompleted=!1,e.handleInputChange(t)},placeholder:this.placeholder,name:this.name,class:"input",value:this.value,disabled:this.disabled,required:this.required},this.inputProps)))},Object.defineProperty(e.prototype,"el",{get:function(){return Object(r["h"])(this)},enumerable:!1,configurable:!0}),e}();c.style=u;var s=":host{--label-color:var(--amplify-secondary-color)}.label{color:var(--label-color);font-size:var(--amplify-text-sm);margin-bottom:16px}",_=function(){function e(e){Object(r["k"])(this,e)}return e.prototype.render=function(){return Object(r["i"])("label",{class:"label",htmlFor:this.htmlFor},Object(r["i"])("slot",null))},e}();_.style=s}}]);
//# sourceMappingURL=chunk-04ae3665.e9c874f3.js.map