(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3a8d5530"],{"00ef":function(e,t,n){"use strict";var a=n("bf82");n("4c44");t["a"]=a["a"]},"23a0":function(e,t,n){"use strict";n.r(t),n.d(t,"amplify_nav",function(){return L}),n.d(t,"amplify_sign_out",function(){return A});var a=n("6260"),r=n("2482"),o=n("7a37"),E=n("bf82"),i=n("6c18"),u=n("807c"),c=n("c084"),_=function(e,t,n,a){function r(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||(n=Promise))(function(n,o){function E(e){try{u(a.next(e))}catch(t){o(t)}}function i(e){try{u(a["throw"](e))}catch(t){o(t)}}function u(e){e.done?n(e.value):r(e.value).then(E,i)}u((a=a.apply(e,t||[])).next())})},l=function(e,t){var n,a,r,o,E={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:i(0),throw:i(1),return:i(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function i(e){return function(t){return u([e,t])}}function u(o){if(n)throw new TypeError("Generator is already executing.");while(E)try{if(n=1,a&&(r=2&o[0]?a["return"]:o[0]?a["throw"]||((r=a["return"])&&r.call(a),0):a.next)&&!(r=r.call(a,o[1])).done)return r;switch(a=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return E.label++,{value:o[1],done:!1};case 5:E.label++,a=o[1],o=[0];continue;case 7:o=E.ops.pop(),E.trys.pop();continue;default:if(r=E.trys,!(r=r.length>0&&r[r.length-1])&&(6===o[0]||2===o[0])){E=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){E.label=o[1];break}if(6===o[0]&&E.label<r[1]){E.label=r[1],r=o;break}if(r&&E.label<r[2]){E.label=r[2],E.ops.push(o);break}r[2]&&E.ops.pop(),E.trys.pop();continue}o=t.call(e,E)}catch(i){o=[6,i],a=0}finally{n=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}},s=".nav{display:-ms-flexbox;display:flex;-ms-flex:1 1 0%;flex:1 1 0%;-ms-flex-pack:end;justify-content:flex-end;-ms-flex-align:center;align-items:center}.nav>*{margin:0 0.5em}",L=function(){function e(e){Object(a["k"])(this,e)}return e.prototype.render=function(){return Object(a["i"])("nav",{class:"nav"},Object(a["i"])("slot",null))},e}();L.style=s;var A=function(){function e(e){Object(a["k"])(this,e),this.handleAuthStateChange=c["d"],this.buttonText=i["a"].SIGN_OUT}return e.prototype.signOut=function(e){return _(this,void 0,void 0,function(){var t;return l(this,function(n){switch(n.label){case 0:if(e&&e.preventDefault(),!E["a"]||"function"!==typeof E["a"].signOut)throw new Error(u["d"]);n.label=1;case 1:return n.trys.push([1,3,,4]),[4,E["a"].signOut()];case 2:return n.sent(),this.handleAuthStateChange(o["a"].SignedOut),[3,4];case 3:return t=n.sent(),Object(c["a"])(t),[3,4];case 4:return[2]}})})},e.prototype.render=function(){var e=this;return Object(a["i"])("amplify-button",{slot:"sign-out",onClick:function(t){return e.signOut(t)},"data-test":"sign-out-button"},r["a"].get(this.buttonText))},e}()},2482:function(e,t,n){"use strict";var a=n("36de"),r=new a["a"]("I18n"),o=function(){function e(e){this._options=null,this._lang=null,this._dict={},this._options=Object.assign({},e),this._lang=this._options.language,!this._lang&&"undefined"!==typeof window&&window&&window.navigator&&(this._lang=window.navigator.language),r.debug(this._lang)}return e.prototype.setLanguage=function(e){this._lang=e},e.prototype.get=function(e,t){if(void 0===t&&(t=void 0),!this._lang)return"undefined"!==typeof t?t:e;var n=this._lang,a=this.getByLanguage(e,n);return a||(n.indexOf("-")>0&&(a=this.getByLanguage(e,n.split("-")[0])),a||("undefined"!==typeof t?t:e))},e.prototype.getByLanguage=function(e,t,n){if(void 0===n&&(n=null),!t)return n;var a=this._dict[t];return a?a[e]:n},e.prototype.putVocabulariesForLanguage=function(e,t){var n=this._dict[e];n||(n=this._dict[e]={}),Object.assign(n,t)},e.prototype.putVocabularies=function(e){var t=this;Object.keys(e).map(function(n){t.putVocabulariesForLanguage(n,e[n])})},e}(),E=n("7d03");n.d(t,"a",function(){return _});var i=new a["a"]("I18n"),u=null,c=null,_=function(){function e(){}return e.configure=function(t){return i.debug("configure I18n"),t?(u=Object.assign({},u,t.I18n||t),e.createInstance(),u):u},e.getModuleName=function(){return"I18n"},e.createInstance=function(){i.debug("create I18n instance"),c||(c=new o(u))},e.setLanguage=function(t){return e.checkConfig(),c.setLanguage(t)},e.get=function(t,n){return e.checkConfig()?c.get(t,n):"undefined"===typeof n?t:n},e.putVocabulariesForLanguage=function(t,n){return e.checkConfig(),c.putVocabulariesForLanguage(t,n)},e.putVocabularies=function(t){return e.checkConfig(),c.putVocabularies(t)},e.checkConfig=function(){return c||(c=new o(u)),!0},e}();E["a"].register(_)},"6c18":function(e,t,n){"use strict";n.d(t,"a",function(){return E});var a,r,o=n("60ac");(function(e){e["BACK_TO_SIGN_IN"]="Back to Sign In",e["CHANGE_PASSWORD_ACTION"]="Change",e["CHANGE_PASSWORD"]="Change Password",e["CODE_LABEL"]="Verification code",e["CODE_PLACEHOLDER"]="Enter code",e["CONFIRM_SIGN_UP_CODE_LABEL"]="Confirmation Code",e["CONFIRM_SIGN_UP_CODE_PLACEHOLDER"]="Enter your code",e["CONFIRM_SIGN_UP_HEADER_TEXT"]="Confirm Sign up",e["CONFIRM_SIGN_UP_LOST_CODE"]="Lost your code?",e["CONFIRM_SIGN_UP_RESEND_CODE"]="Resend Code",e["CONFIRM_SIGN_UP_SUBMIT_BUTTON_TEXT"]="Confirm",e["CONFIRM_SMS_CODE"]="Confirm SMS Code",e["CONFIRM_TOTP_CODE"]="Confirm TOTP Code",e["CONFIRM"]="Confirm",e["CREATE_ACCOUNT_TEXT"]="Create account",e["EMAIL_LABEL"]="Email Address *",e["EMAIL_PLACEHOLDER"]="Enter your email address",e["FORGOT_PASSWORD_TEXT"]="Forgot your password?",e["LESS_THAN_TWO_MFA_VALUES_MESSAGE"]="Less than two MFA types available",e["NEW_PASSWORD_LABEL"]="New password",e["NEW_PASSWORD_PLACEHOLDER"]="Enter your new password",e["NO_ACCOUNT_TEXT"]="No account?",e["USERNAME_REMOVE_WHITESPACE"]="Username cannot contain whitespace",e["PASSWORD_REMOVE_WHITESPACE"]="Password cannot start or end with whitespace",e["PASSWORD_LABEL"]="Password *",e["PASSWORD_PLACEHOLDER"]="Enter your password",e["PHONE_LABEL"]="Phone Number *",e["PHONE_PLACEHOLDER"]="(555) 555-1212",e["QR_CODE_ALT"]="qrcode",e["RESET_PASSWORD_TEXT"]="Reset password",e["RESET_YOUR_PASSWORD"]="Reset your password",e["SELECT_MFA_TYPE_HEADER_TEXT"]="Select MFA Type",e["SELECT_MFA_TYPE_SUBMIT_BUTTON_TEXT"]="Verify",e["SEND_CODE"]="Send Code",e["SUBMIT"]="Submit",e["SETUP_TOTP_REQUIRED"]="TOTP needs to be configured",e["SIGN_IN_ACTION"]="Sign In",e["SIGN_IN_HEADER_TEXT"]="Sign in to your account",e["SIGN_IN_TEXT"]="Sign in",e["SIGN_IN_WITH_AMAZON"]="Sign in with Amazon",e["SIGN_IN_WITH_AUTH0"]="Sign in with Auth0",e["SIGN_IN_WITH_AWS"]="Sign in with AWS",e["SIGN_IN_WITH_FACEBOOK"]="Sign in with Facebook",e["SIGN_IN_WITH_GOOGLE"]="Sign in with Google",e["SIGN_OUT"]="Sign Out",e["SIGN_UP_EMAIL_PLACEHOLDER"]="Email",e["SIGN_UP_HAVE_ACCOUNT_TEXT"]="Have an account?",e["SIGN_UP_HEADER_TEXT"]="Create a new account",e["SIGN_UP_PASSWORD_PLACEHOLDER"]="Password",e["SIGN_UP_SUBMIT_BUTTON_TEXT"]="Create Account",e["SIGN_UP_USERNAME_PLACEHOLDER"]="Username",e["SUCCESS_MFA_TYPE"]="Success! Your MFA Type is now:",e["TOTP_HEADER_TEXT"]="Scan then enter verification code",e["TOTP_LABEL"]="Enter Security Code:",e["TOTP_ISSUER"]="AWSCognito",e["TOTP_SETUP_FAILURE"]="TOTP Setup has failed",e["TOTP_SUBMIT_BUTTON_TEXT"]="Verify Security Token",e["TOTP_SUCCESS_MESSAGE"]="Setup TOTP successfully!",e["UNABLE_TO_SETUP_MFA_AT_THIS_TIME"]="Failed! Unable to configure MFA at this time",e["USERNAME_LABEL"]="Username *",e["USERNAME_PLACEHOLDER"]="Enter your username",e["VERIFY_CONTACT_EMAIL_LABEL"]="Email",e["VERIFY_CONTACT_HEADER_TEXT"]="Account recovery requires verified contact information",e["VERIFY_CONTACT_PHONE_LABEL"]="Phone Number",e["VERIFY_CONTACT_SUBMIT_LABEL"]="Submit",e["VERIFY_CONTACT_VERIFY_LABEL"]="Verify",e["ADDRESS_LABEL"]="Address",e["ADDRESS_PLACEHOLDER"]="Enter your address",e["NICKNAME_LABEL"]="Nickname",e["NICKNAME_PLACEHOLDER"]="Enter your nickname",e["BIRTHDATE_LABEL"]="Birthday",e["BIRTHDATE_PLACEHOLDER"]="Enter your birthday",e["PICTURE_LABEL"]="Picture URL",e["PICTURE_PLACEHOLDER"]="Enter your picture URL",e["FAMILY_NAME_LABEL"]="Family Name",e["FAMILY_NAME_PLACEHOLDER"]="Enter your family name",e["PREFERRED_USERNAME_LABEL"]="Preferred Username",e["PREFERRED_USERNAME_PLACEHOLDER"]="Enter your preferred username",e["GENDER_LABEL"]="Gender",e["GENDER_PLACEHOLDER"]="Enter your gender",e["PROFILE_LABEL"]="Profile URL",e["PROFILE_PLACEHOLDER"]="Enter your profile URL",e["GIVEN_NAME_LABEL"]="First Name",e["GIVEN_NAME_PLACEHOLDER"]="Enter your first name",e["ZONEINFO_LABEL"]="Time zone",e["ZONEINFO_PLACEHOLDER"]="Enter your time zone",e["LOCALE_LABEL"]="Locale",e["LOCALE_PLACEHOLDER"]="Enter your locale",e["UPDATED_AT_LABEL"]="Updated At",e["UPDATED_AT_PLACEHOLDER"]="Enter the time the information was last updated",e["MIDDLE_NAME_LABEL"]="Middle Name",e["MIDDLE_NAME_PLACEHOLDER"]="Enter your middle name",e["WEBSITE_LABEL"]="Website",e["WEBSITE_PLACEHOLDER"]="Enter your website",e["NAME_LABEL"]="Full Name",e["NAME_PLACEHOLDER"]="Enter your full name",e["PHOTO_PICKER_TITLE"]="Picker Title",e["PHOTO_PICKER_HINT"]="Ancillary text or content may occupy this space here",e["PHOTO_PICKER_PLACEHOLDER_HINT"]="Placeholder hint",e["PHOTO_PICKER_BUTTON_TEXT"]="Button",e["IMAGE_PICKER_TITLE"]="Add Profile Photo",e["IMAGE_PICKER_HINT"]="Preview the image before upload",e["IMAGE_PICKER_PLACEHOLDER_HINT"]="Tap to image select",e["IMAGE_PICKER_BUTTON_TEXT"]="Upload",e["PICKER_TEXT"]="Pick a file",e["TEXT_FALLBACK_CONTENT"]="Fallback Content",e["CONFIRM_SIGN_UP_FAILED"]="Confirm Sign Up Failed",e["SIGN_UP_FAILED"]="Sign Up Failed"})(a||(a={})),function(e){e["CHATBOT_TITLE"]="ChatBot Lex",e["TEXT_INPUT_PLACEHOLDER"]="Write a message",e["VOICE_INPUT_PLACEHOLDER"]="Click mic to speak",e["CHAT_DISABLED_ERROR"]="Error: Either voice or text must be enabled for the chatbot",e["NO_BOT_NAME_ERROR"]="Error: Bot name must be provided to ChatBot"}(r||(r={}));var E=Object.assign(Object.assign(Object.assign({},a),o["a"]),r)},c084:function(e,t,n){"use strict";n.d(t,"a",function(){return A}),n.d(t,"b",function(){return T}),n.d(t,"c",function(){return d}),n.d(t,"d",function(){return f}),n.d(t,"e",function(){return L}),n.d(t,"f",function(){return C}),n.d(t,"g",function(){return R}),n.d(t,"h",function(){return g}),n.d(t,"i",function(){return O});var a=n("36de"),r=n("4327"),o=n("2482"),E=n("7a37"),i=n("00ef"),u=n("6c18"),c=n("807c"),_=function(e,t,n,a){function r(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||(n=Promise))(function(n,o){function E(e){try{u(a.next(e))}catch(t){o(t)}}function i(e){try{u(a["throw"](e))}catch(t){o(t)}}function u(e){e.done?n(e.value):r(e.value).then(E,i)}u((a=a.apply(e,t||[])).next())})},l=function(e,t){var n,a,r,o,E={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:i(0),throw:i(1),return:i(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function i(e){return function(t){return u([e,t])}}function u(o){if(n)throw new TypeError("Generator is already executing.");while(E)try{if(n=1,a&&(r=2&o[0]?a["return"]:o[0]?a["throw"]||((r=a["return"])&&r.call(a),0):a.next)&&!(r=r.call(a,o[1])).done)return r;switch(a=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return E.label++,{value:o[1],done:!1};case 5:E.label++,a=o[1],o=[0];continue;case 7:o=E.ops.pop(),E.trys.pop();continue;default:if(r=E.trys,!(r=r.length>0&&r[r.length-1])&&(6===o[0]||2===o[0])){E=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){E.label=o[1];break}if(6===o[0]&&E.label<r[1]){E.label=r[1],r=o;break}if(r&&E.label<r[2]){E.label=r[2],E.ops.push(o);break}r[2]&&E.ops.pop(),E.trys.pop();continue}o=t.call(e,E)}catch(i){o=[6,i],a=0}finally{n=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}},s=new a["a"]("helpers"),L=function(e,t){function n(a){if(!a||a===document||a===window)return null;if(a.matches(e))return t;a.assignedSlot&&(a=a.assignedSlot);var r=a.closest(e);return r||n(a.getRootNode().host)}return n(t)},A=function(e){r["a"].dispatch(c["h"],{event:c["g"],message:o["a"].get(e.message)})},f=function(e,t){r["a"].dispatch(c["h"],{event:c["i"],message:e,data:t})},T=function(e){if(!e.phoneNumberValue)throw new Error(c["e"]);var t=e.phoneNumberValue.replace(/[-()\s]/g,"");return""+e.countryDialCodeValue+t},d=function(e){if(!(e in E["d"]))throw new Error("Invalid username Alias - "+e+". Instead use "+Object.values(E["d"]))},O=function(e){var t=function(t){return _(void 0,void 0,void 0,function(){var n,a,r;return l(this,function(o){switch(o.label){case 0:switch(n=t.payload,a=n.event,a){case c["i"]:return[3,1]}return[3,8];case 1:if(!n.message)return[3,7];if(n.message!==E["a"].SignedIn)return[3,6];o.label=2;case 2:return o.trys.push([2,4,,5]),[4,i["a"].currentAuthenticatedUser()];case 3:return r=o.sent(),e(n.message,r),[3,5];case 4:return o.sent(),s.error("User is not authenticated"),[3,5];case 5:return[3,7];case 6:e(n.message,n.data),o.label=7;case 7:return[3,8];case 8:return[2]}})})};r["a"].listen(c["h"],t);var n=function(){e=function(){},r["a"].remove(c["h"],t)};return n},g=function(e){return!(null===e["hint"]||"string"===typeof e["hint"])},C=function(){return{address:{label:o["a"].get(u["a"].ADDRESS_LABEL),placeholder:o["a"].get(u["a"].ADDRESS_PLACEHOLDER)},nickname:{label:o["a"].get(u["a"].NICKNAME_LABEL),placeholder:o["a"].get(u["a"].NICKNAME_PLACEHOLDER)},birthdate:{label:o["a"].get(u["a"].BIRTHDATE_LABEL),placeholder:o["a"].get(u["a"].BIRTHDATE_PLACEHOLDER)},phone_number:{label:o["a"].get(u["a"].PHONE_LABEL),placeholder:o["a"].get(u["a"].PHONE_PLACEHOLDER)},email:{lable:o["a"].get(u["a"].EMAIL_LABEL),placeholder:o["a"].get(u["a"].EMAIL_PLACEHOLDER)},picture:{label:o["a"].get(u["a"].PICTURE_LABEL),placeholder:o["a"].get(u["a"].PICTURE_PLACEHOLDER)},family_name:{label:o["a"].get(u["a"].FAMILY_NAME_LABEL),placeholder:o["a"].get(u["a"].FAMILY_NAME_PLACEHOLDER)},preferred_username:{label:o["a"].get(u["a"].PREFERRED_USERNAME_LABEL),placeholder:o["a"].get(u["a"].PREFERRED_USERNAME_PLACEHOLDER)},gender:{label:o["a"].get(u["a"].GENDER_LABEL),placeholder:o["a"].get(u["a"].GENDER_PLACEHOLDER)},profile:{label:o["a"].get(u["a"].PROFILE_LABEL),placeholder:o["a"].get(u["a"].PROFILE_PLACEHOLDER)},given_name:{label:o["a"].get(u["a"].GIVEN_NAME_LABEL),placeholder:o["a"].get(u["a"].GIVEN_NAME_PLACEHOLDER)},zoneinfo:{label:o["a"].get(u["a"].ZONEINFO_LABEL),placeholder:o["a"].get(u["a"].ZONEINFO_PLACEHOLDER)},locale:{label:o["a"].get(u["a"].LOCALE_LABEL),placeholder:o["a"].get(u["a"].LOCALE_PLACEHOLDER)},updated_at:{label:o["a"].get(u["a"].UPDATED_AT_LABEL),placeholder:o["a"].get(u["a"].UPDATED_AT_PLACEHOLDER)},middle_name:{label:o["a"].get(u["a"].MIDDLE_NAME_LABEL),placeholder:o["a"].get(u["a"].MIDDLE_NAME_PLACEHOLDER)},website:{label:o["a"].get(u["a"].WEBSITE_LABEL),placeholder:o["a"].get(u["a"].WEBSITE_PLACEHOLDER)},name:{label:o["a"].get(u["a"].NAME_LABEL),placeholder:o["a"].get(u["a"].NAME_PLACEHOLDER)}}};function R(e,t){var n=e.target.name,a=e.target.value;n===c["b"]&&(t.countryDialCodeValue=a),n===c["j"]&&(t.phoneNumberValue=a)}}}]);
//# sourceMappingURL=chunk-3a8d5530.4fddc031.js.map