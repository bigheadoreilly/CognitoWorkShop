(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-35d62c38"],{"7a37":function(n,t,e){"use strict";var i,o,r,u,a;e.d(t,"a",(function(){return i})),e.d(t,"b",(function(){return r})),e.d(t,"c",(function(){return o})),e.d(t,"d",(function(){return a})),e.d(t,"e",(function(){return u})),function(n){n["SignUp"]="signup",n["SignOut"]="signout",n["SignIn"]="signin",n["Loading"]="loading",n["SignedOut"]="signedout",n["SignedIn"]="signedin",n["SigningUp"]="signingup",n["ConfirmSignUp"]="confirmSignUp",n["confirmingSignUpCustomFlow"]="confirmsignupcustomflow",n["ConfirmSignIn"]="confirmSignIn",n["confirmingSignInCustomFlow"]="confirmingsignincustomflow",n["VerifyingAttributes"]="verifyingattributes",n["ForgotPassword"]="forgotpassword",n["ResetPassword"]="resettingpassword",n["SettingMFA"]="settingMFA",n["TOTPSetup"]="TOTPSetup",n["CustomConfirmSignIn"]="customConfirmSignIn",n["VerifyContact"]="verifyContact"}(i||(i={})),function(n){n["TOTP"]="TOTP",n["SMS"]="SMS",n["NOMFA"]="NOMFA"}(o||(o={})),function(n){n["SoftwareTokenMFA"]="SOFTWARE_TOKEN_MFA",n["SMSMFA"]="SMS_MFA",n["NewPasswordRequired"]="NEW_PASSWORD_REQUIRED",n["MFASetup"]="MFA_SETUP",n["CustomChallenge"]="CUSTOM_CHALLENGE"}(r||(r={})),function(n){n["Password"]="password"}(u||(u={})),function(n){n["username"]="username",n["email"]="email",n["phone_number"]="phone_number"}(a||(a={}))},"807c":function(n,t,e){"use strict";e.d(t,"a",(function(){return O})),e.d(t,"b",(function(){return s})),e.d(t,"c",(function(){return o})),e.d(t,"d",(function(){return p})),e.d(t,"e",(function(){return g})),e.d(t,"f",(function(){return S})),e.d(t,"g",(function(){return y})),e.d(t,"h",(function(){return _})),e.d(t,"i",(function(){return C})),e.d(t,"j",(function(){return u})),e.d(t,"k",(function(){return c})),e.d(t,"l",(function(){return h})),e.d(t,"m",(function(){return m})),e.d(t,"n",(function(){return l})),e.d(t,"o",(function(){return w})),e.d(t,"p",(function(){return d})),e.d(t,"q",(function(){return b})),e.d(t,"r",(function(){return f})),e.d(t,"s",(function(){return r})),e.d(t,"t",(function(){return a})),e.d(t,"u",(function(){return i}));var i="username",o="email",r="code",u="phone",a="password",s="country-dial-code-select",d="+1",f="amplify-auth-source",c="amplify-authenticator-authState",g="Phone number can not be empty",p="No Auth module found, please ensure @aws-amplify/auth is imported",m="No Storage module found, please ensure @aws-amplify/storage is imported",h="No Interactions module found, please ensure @aws-amplify/interactions is imported",S="SETUP_TOTP",l="User has not set up software token mfa",w="User has not verified software token mfa",b="SUCCESS",O="auth",_="UI Auth",y="ToastAuthError",C="AuthStateChange"},a81f:function(n,t,e){"use strict";e.r(t),e.d(t,"amplify_federated_sign_in",(function(){return d}));var i=e("6260"),o=e("36de"),r=e("7a37"),u=e("bf82"),a=e("807c"),s=new o["a"]("amplify-federated-sign-in"),d=function(){function n(n){Object(i["k"])(this,n),this.authState=r["a"].SignIn,this.federated={}}return n.prototype.componentWillLoad=function(){if(!u["a"]||"function"!==typeof u["a"].configure)throw new Error(a["d"]);var n=u["a"].configure().oauth,t=void 0===n?{}:n;t["domain"]?this.federated.oauth_config=Object.assign(Object.assign({},this.federated.oauth_config),t):t["awsCognito"]&&(this.federated.oauth_config=Object.assign(Object.assign({},this.federated.oauth_config),t["awsCognito"])),t["auth0"]&&(this.federated.auth0=Object.assign(Object.assign({},this.federated.auth0),t["auth0"]))},n.prototype.render=function(){return this.federated?Object.values(r["a"]).includes(this.authState)?(s.debug("federated Config is",this.federated),Object(i["i"])("amplify-form-section",{"data-test":"federated-sign-in-section"},Object(i["i"])("amplify-section",{"data-test":"federated-sign-in-body-section"},Object(i["i"])("amplify-federated-buttons",{authState:this.authState,"data-test":"federated-sign-in-buttons",federated:this.federated})))):null:(s.debug("federated prop is empty. show nothing"),s.debug("federated={google_client_id: , facebook_app_id: , amazon_client_id}"),null)},n}()}}]);
//# sourceMappingURL=chunk-35d62c38.dc2db495.js.map