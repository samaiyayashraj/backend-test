(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"8bedcd1bbfdc77813616":function(e,t,r){"use strict";r.r(t);r("0442d5aa194d00946941");var n,a=r("bd183afcc37eabd79225"),o=r.n(a),i=r("8af190b70a6bc55c6f1b"),s=r.n(i),c=r("b6df842aa4eadc12c34e"),u=r.n(c),l=r("0d7f0986bcd2f33d8a2a"),d=r("ab039aecd4a1d4fedc0e"),f=r("e95a63b25fb92ed15721"),p=r("0d939196e59ed73c94e6"),m=r("f995f408038b073fa62d"),h=r("307bc763ddd01b6c70af"),g=r("14fe06d809ce8c80d35b"),b=r("3b0c98878cddf91c2b18"),y=r.n(b),v=(r("62194bbcb451267ba43e"),r("776f7b15d44f70e7504d")),w=r.n(v),S=Object(d.defineMessages)({pageTitle:{id:"".concat("app.components.SignupPage",".pageTitle"),defaultMessage:"Signup"}}),N=r("b969d5091231687a2b13"),O=r.n(N),j=r("f53db881393abdb56f0f"),P=r.n(j),C=(r("08d58f7c002b05855632"),r("f53a66fb701477ccb562")),T=r.n(C),x=r("30aa8a25e35667139b51");r("3870f139cb8c17661166"),r("1e9e8579fe6eef1bce44");function A(e){return(A="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function E(e,t,r,a){n||(n="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),1===i)t.children=a;else if(i>1){for(var s=new Array(i),c=0;c<i;c++)s[c]=arguments[c+3];t.children=s}if(t&&o)for(var u in o)void 0===t[u]&&(t[u]=o[u]);else t||(t=o||{});return{$$typeof:n,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}function k(e,t){var r;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"===typeof e)return R(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return R(e,t)}(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,s=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return i=e.done,e},e:function(e){s=!0,o=e},f:function(){try{i||null==r.return||r.return()}finally{if(s)throw o}}}}function R(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function _(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function I(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?_(Object(r),!0).forEach(function(t){L(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function q(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function F(e,t){return(F=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function H(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var r,n=G(e);if(t){var a=G(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return function(e,t){if(t&&("object"===A(t)||"function"===typeof t))return t;return D(e)}(this,r)}}function D(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function G(e){return(G=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function L(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var M=E(f.Redirect,{to:"/dashboard"}),U=E(p.Grid,{item:!0,lg:6,xs:12},void 0,E(p.Grid,{className:"accountImage"},void 0,E(h.a,{src:w.a,alt:"logo"}),E("p",{},void 0,"Store and manage digital currencies with ease in the smart and beautiful cryptocurrency wallets."))),B=E(p.Typography,{variant:"h3"},void 0,"Sign Up"),$=E(p.Typography,{className:"text",paragraph:!0},void 0,"Create a new account."),J=E("div",{},void 0,"Loading..."),z=E(p.Button,{type:"submit",className:"submitButton"},void 0,"Sign Up"),Y=E(p.Typography,{variant:"h6"},void 0,"Already have an accoun ? ",E(f.Link,{to:"/login"},void 0,"Sign In")),Z=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&F(e,t)}(d,i["Component"]);var t,r,n,a=H(d);function d(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,d),L(D(t=a.call(this,e)),"handleClickShowPassword",function(e){t.setState(L({},e,!t.state[e]))}),L(D(t),"schema",{firstName:y.a.string().required().error(function(e){return{message:"First Name is Required"}}),lastName:y.a.string(),username:y.a.string().required().error(function(e){return{message:"Username is Required"}}),email:y.a.string().required().email({minDomainAtoms:2}).error(function(e){return e.forEach(function(e){switch(e.type){case"string.email":e.message="Email Must be Email Format";break;case"any.required":e.message="Email is Requared"}}),e}),password:y.a.string().required().min(8).regex(/^[a-zA-Z0-9]{3,30}$/).error(function(e){return{message:"Please Provide a strong password"}}),country:y.a.string().required().error(function(e){return{message:"Country is Required"}})}),L(D(t),"changeHandler",function(e){var r,n=I({},t.state.error),a=t.validationProperty(e);a?n[e.target.name]=a:delete n[e.target.name],t.setState((L(r={},e.target.name,e.target.value),L(r,"error",n),r))}),L(D(t),"validationProperty",function(e){var r=L({},e.target.name,e.target.value),n=L({},e.target.name,t.schema[e.target.name]),a=y.a.validate(r,n).error;return a?a.details[0].message:null}),L(D(t),"validate",function(){var e={firstName:t.state.firstName,lastName:t.state.lastName,email:t.state.email,password:t.state.password,country:t.state.country,address:t.state.address},r=y.a.validate(e,t.schema,{abortEarly:!1}).error;if(!r)return null;var n,a={},o=k(r.details);try{for(o.s();!(n=o.n()).done;){var i=n.value;a[i.path[0]]=i.message}}catch(e){o.e(e)}finally{o.f()}return a}),L(D(t),"submitHandler",function(e){e.preventDefault(),t.signupApi();var r=t.validate();t.setState({error:r||{}}),r||t.props.history.push("/login")}),L(D(t),"signupApi",function(){var e=D(t),r={firstName:t.state.firstName,lastName:t.state.lastName,username:t.state.username,email:t.state.email,password:t.state.password,country:t.state.country,address:t.state.address,location:{coordinates:[0,0]},role:2};o.a.post("http://54.87.67.93:10010/api/v1/user/register",r,{headers:{"Content-Type":"application/json"}}).then(function(t){console.log(t),x.toast.success("Successfully created the account"),e.props.history.push("/login")}).catch(function(e){console.log(e)})}),L(D(t),"handleChange",function(e){t.setState({address:e})}),L(D(t),"handleSelect",function(e){Object(c.geocodeByAddress)(e).then(function(e){return t.setState({country:e[0].address_components[e[0].address_components.length-1].long_name,position:Object(c.getLatLng)(e[0])})}).then(function(r){return t.setState({address:e})}).catch(function(e){return console.error("Error",e)}),console.log("---",t.state.position)}),L(D(t),"getusernameData",function(){o.a.get("http://54.87.67.93:10010/api/v1/user/verify-username?username="+t.state.username,{headers:{"Content-Type":"application/json"}}).then(function(e){console.log(e)}).catch(function(e){console.log(e)})}),t.state={firstName:"",lastName:"",email:"",phone:"",username:"",password:"",country:"",address:"",position:"",passwordShow:!1,error:{}},t.signupApi=t.signupApi.bind(D(t)),t}return t=d,(r=[{key:"t",value:function(e,t){return this.props.intl.formatMessage(e,t)}},{key:"render",value:function(){var e=this;if(T.a.get("Auth"))return x.toast.info("You are Loged in"),M;var t=this.state,r=t.firstName,n=t.lastName,a=t.email,o=t.username,c=t.password,d=t.country;t.address,t.position;return E(i.Fragment,{},void 0,E(l.Helmet,{},void 0,E(m.a,{},void 0,this.t(I({},S.pageTitle)))),E(p.Grid,{className:"accountArea"},void 0,E(p.Grid,{className:"container",container:!0},void 0,U,E(p.Grid,{item:!0,lg:6,xs:12},void 0,E(p.Grid,{className:"accountContent"},void 0,B,$,E(g.a,{onSubmit:this.submitHandler},void 0,E(p.TextField,{label:"First Name",className:"inputStyle",name:"firstName",variant:"outlined",onChange:this.changeHandler,value:r,helperText:this.state.error.firstName?this.state.error.firstName:""}),E(p.TextField,{label:"Last Name",className:"inputStyle",name:"lastName",variant:"outlined",onChange:this.changeHandler,value:n}),E(p.TextField,{label:"Username",className:"inputStyle",name:"username",variant:"outlined",onChange:this.changeHandler,value:o}),E(p.TextField,{label:"Email",className:"inputStyle",name:"email",variant:"outlined",onChange:this.changeHandler,value:a,helperText:this.state.error.email?this.state.error.email:""}),E(p.TextField,{label:"Password",className:"inputStyle",name:"password",variant:"outlined",type:this.state.passwordShow?"text":"password",onChange:this.changeHandler,value:c,InputProps:{endAdornment:E(p.InputAdornment,{className:"showPassword",position:"end"},void 0,E(p.IconButton,{onClick:function(){return e.handleClickShowPassword("passwordShow")}},void 0,E(h.a,{src:this.state.passwordShow?P.a:O.a})))},helperText:this.state.error.password?this.state.error.password:""}),E(p.TextField,{label:"Country",className:"inputStyle",name:"country",variant:"outlined",onChange:this.changeHandler,value:d,helperText:this.state.error.country?this.state.error.country:""}),E(u.a,{value:this.state.address,onChange:this.handleChange,onSelect:this.handleSelect},void 0,function(e){var t=e.getInputProps,r=e.suggestions,n=e.getSuggestionItemProps,a=e.loading;return E("div",{className:"location-box-cover"},void 0,s.a.createElement("input",t({placeholder:"Search Places ...",className:"location-search-input"})),E("div",{className:"autocomplete-dropdown-container"},void 0,a&&J,r.map(function(e){var t=e.active?"suggestion-item--active":"suggestion-item",r=e.active?{backgroundColor:"#fafafa",cursor:"pointer"}:{backgroundColor:"#ffffff",cursor:"pointer"};return s.a.createElement("div",n(e,{className:t,style:r}),E("span",{},void 0,e.description))})))}),z,Y))))))}}])&&q(t.prototype,r),n&&q(t,n),d}();t.default=Object(d.injectIntl)(Object(f.withRouter)(Z))}}]);