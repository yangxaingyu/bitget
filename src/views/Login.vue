<template>
  <div>
    <HzHeader></HzHeader>
    <div class="main-box lay-box clearfix" data-v-bc61f9fc>
      <div class="main-login-wrapper white" data-v-320ca77b data-v-bc61f9fc>
        <div v-if="false" class="login-left" data-v-320ca77b>
          <div class="qr-panel" data-v-32322a14 data-v-320ca77b>
            <div class="login-qrcode-img white" data-v-32322a14>
              <div class="qrcode-img white" data-v-32322a14>
                <div data-v-32322a14>
                  <canvas height="176" width="176"></canvas>
                </div>
                <div class="qrcode-img-mask" style="display:none;" data-v-32322a14></div>
                <div class="qrcode-failure" style="display:none;" data-v-32322a14>
                  <div class="flex justify-center items-center flex-col w-full h-full" data-v-32322a14><span class="qrcode-refresh" data-v-32322a14>
                        Refresh
                    </span>
                    <div class="mt-15px text-14px color-[#fff] font-500 px-10px" data-v-32322a14>
                      QR code has expired
                    </div>
                  </div>
                </div>
                <div class="qrcode-success" style="display:none;" data-v-32322a14>
                  <img src="/_nuxt-ssr/img/icon-duihao-new.c3fbe3c.svg" alt="icon-dui-hao-new2" data-v-32322a14>
                  <div data-v-32322a14>Scan code successfully,<br> please confirm on your app</div>
                </div>
                <div class="qrcode-success" style="display:none;" data-v-32322a14>
                  <img src="/_nuxt-ssr/img/icon-duihao-new.c3fbe3c.svg" alt="icon-dui-hao-new3" data-v-32322a14>
                  <div data-v-32322a14>Confirmed</div>
                </div>
                <div class="bit-loading-mask" style="display: none;">
                  <div class="bit-loading-spinner">
                    <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none" class="circular">
                      <path d="M49 28C49 30.7578 48.4568 33.4885 47.4015 36.0364C46.3461 38.5842 44.7993 40.8992 42.8493 42.8492C40.8992 44.7993 38.5842 46.3461 36.0364 47.4015C33.4885 48.4568 30.7578 49 28 49C25.2422 49 22.5115 48.4568 19.9636 47.4015C17.4158 46.3461 15.1008 44.7993 13.1508 42.8492C11.2007 40.8992 9.65388 38.5842 8.59853 36.0363C7.54318 33.4885 7 30.7578 7 28C7 25.2422 7.54318 22.5115 8.59853 19.9636C9.65388 17.4158 11.2007 15.1008 13.1508 13.1508C15.1008 11.2007 17.4158 9.65387 19.9637 8.59853C22.5115 7.54318 25.2423 7 28 7C30.7578 7 33.4885 7.54318 36.0364 8.59853C38.5842 9.65388 40.8992 11.2007 42.8493 13.1508C44.7993 15.1008 46.3461 17.4158 47.4015 19.9637C48.4568 22.5115 49 25.2423 49 28L49 28Z" stroke="#EBEBEB" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" class="round"></path>
                      <path d="M28 7C30.7578 7 33.4885 7.54318 36.0364 8.59853C38.5842 9.65388 40.8992 11.2007 42.8493 13.1508C44.7993 15.1008 46.3461 17.4158 47.4015 19.9637C48.4568 22.5115 49 25.2422 49 28" stroke="currentColor" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" class="bar"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div class="tip-img" data-v-32322a14>
                <img src="/_nuxt-ssr/img/qrcode-tip-en.416a00a.png" alt="qrcode-tip-en" style="display:;" data-v-32322a14>
                <img src="/baseasset/img/login/qrcode-tip-en-black.svg?t=123" alt="qrcode-tip-en-black" class="black-img" style="display:none;" data-v-32322a14>
              </div>
            </div>
            <div class="login-qr-text-box white" data-v-32322a14>
              <div class="title" data-v-32322a14>Scan the code to log in</div>
              <div class="login-qr-text" data-v-32322a14>
                <span data-v-32322a14>Open the <a href="/download" target="_blank">Bitget App</a>, and scan the QR code using the scanning function located on the top right corner of the Home screen.</span>
              </div>
            </div>
          </div>
          <div class="join-telegram white login-tg" data-v-49ec4adf data-v-320ca77b>
            <img data-v-49ec4adf src="https://img.bitgetimg.com/multiLang/banner/d7981c54abc0a99ac60b08096fe4be08.png" alt="icon" class="w-40px h-40px mr-12px inline-block">
            <div class="join-telegram-title" data-v-49ec4adf>
              <p data-v-49ec4adf><a href="https://t.me/BitgetENOfficial" class="font-500 mr-2px" data-v-49ec4adf>
                Join Bitget Telegram Now
              </a>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="rtl-rotate" style="display:;" data-v-49ec4adf>
                  <g clip-path="url(#clip0_2633_63743)" data-v-49ec4adf>
                    <path d="M9.27411 5.41857L4.60836 0.627571L3.80211 1.41207L8.22186 5.95707C8.23322 5.9687 8.23958 5.98431 8.23958 6.00057C8.23958 6.01683 8.23322 6.03244 8.22186 6.04407L3.80211 10.5891L4.60836 11.3721L9.27336 6.58107C9.63261 6.22032 9.64836 5.79357 9.27411 5.41857Z" fill="#1F1F1F" data-v-49ec4adf></path>
                  </g>
                  <defs data-v-49ec4adf>
                    <clipPath id="clip0_2633_63743" data-v-49ec4adf>
                      <rect width="12" height="12" fill="white" transform="translate(12 12) rotate(-180)" data-v-49ec4adf></rect>
                    </clipPath>
                  </defs>
                </svg>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="rtl-rotate" style="display:none;" data-v-49ec4adf>
                  <g clip-path="url(#clip0_2633_63743)" data-v-49ec4adf>
                    <path d="M9.27411 5.41857L4.60836 0.627571L3.80211 1.41207L8.22186 5.95707C8.23322 5.9687 8.23958 5.98431 8.23958 6.00057C8.23958 6.01683 8.23322 6.03244 8.22186 6.04407L3.80211 10.5891L4.60836 11.3721L9.27336 6.58107C9.63261 6.22032 9.64836 5.79357 9.27411 5.41857Z" fill="#fff" data-v-49ec4adf></path>
                  </g>
                  <defs data-v-49ec4adf>
                    <clipPath id="clip0_2633_63743" data-v-49ec4adf>
                      <rect width="12" height="12" fill="white" transform="translate(12 12) rotate(-180)" data-v-49ec4adf></rect>
                    </clipPath>
                  </defs>
                </svg>
              </p>
              <span class="text-share white" data-v-49ec4adf>
                Get help, share ideas, and receive firsthand Bitget news.
            </span></div>
          </div>
        </div>
        <div class="main-login" data-v-320ca77b>
          <div class="container main-box-container main-box-container-login" data-v-17599e9a data-v-320ca77b>
            <div class="login-wrap white mainReg" data-v-17599e9a>
              <div class="login-qr-box" data-v-17599e9a>
                <div class="clearfix login-title-box" data-v-17599e9a>
                  <h1 class="login-qr-title flex justify-center mb-24px" data-v-17599e9a>
                    Welcome back
                  </h1>
                  <div v-if="false" class="type-tab white" data-v-17599e9a>
                    <span data-v-17599e9a>
                      Email / Mobile
                    </span>
                    <span class="active type-qrcode" data-v-17599e9a>
                      Sub-account
                    </span>
                  </div>
                </div>
                <div class="mt-24px" data-v-17599e9a>
                  <div class="login-qr-form white" data-v-17599e9a>
                    <div class="login-form-group" data-v-17599e9a>
                      <label data-v-17599e9a>Email</label>
                      <div data-v-e450a41a data-v-17599e9a class="main-login-phone-mail">
                        <div data-v-e450a41a class="phon-email-wrap">
                          <div data-v-e450a41a class="login-form-input-pos" style="display: none;">
                            <span data-v-e450a41a data-testid="LoginAccountPhoneAreaSelect" class="area-list-area notranslate">
                              +82
                            </span>
                            <i data-v-e450a41a class="iconfont icon-next2"></i>
                            <div data-v-e450a41a class="area-list-split"></div>
                          </div>
                          <input data-v-e450a41a type="text" style="display: none; width: 0; height: 0;">
                          <input data-v-e450a41a type="text" autocomplete="off" v-model.trim="user.email"
                                 placeholder="Email" data-testid="LoginAccountInput"
                                 class="input custom-login-input custom-login-input-en">
                        </div>
                      </div>
                      <label for="dnEmail" class="for-border !mb-0" data-v-17599e9a></label>
                      <div class="login-from-error" data-v-17599e9a>
                        <div data-v-17599e9a class="bg-comp-error-normal error">
                          {{ emailError }}
                        </div>
                      </div>
                    </div>
                    <div data-v-17599e9a class="login-form-group">
                      <div data-v-17599e9a class="login-form-input">
                        <label data-v-17599e9a>Password</label>
                        <input data-v-17599e9a autocomplete="new-password" v-model.trim="user.password"
                               placeholder="Password" data-test-id="login-input-password"
                               data-testid="LoginPasswordInput" :type="passwordType"
                               class="input custom-new-password custom-new-password-en">
                        <div data-v-17599e9a class="show-pwd-str">
                          <img data-v-17599e9a alt="eye-closed-black" src="../assets/img/eyeclosed-black.svg" style="display: none;">
                          <img data-v-17599e9a alt="eye-open-black" src="../assets/img/eye-open-black.svg" style="display: none;">
                          <img data-v-17599e9a alt="eye-closed" v-show="!isShowPassword" @click="toggleShow(true)" src="../assets/img/EyeClosed.627bf67.svg">
                          <img data-v-17599e9a alt="eye-open" v-show="isShowPassword" @click="toggleShow(false)" src="../assets/img/EyeOpened.e61a4b6.svg">
                        </div>
                      </div>
                      <div data-v-17599e9a class="login-from-error">
                        <div data-v-17599e9a class="bg-comp-error-normal error">
                          {{ passwordError }}
                        </div>
                      </div>
                    </div>
                    <div data-v-17599e9a>
                      <div class="iphone:mt-21px" data-v-17599e9a>
                        <button @click="loginFn" type="button" data-testid="LoginNowButton" class="bit-button w-full bit-button--chunky bit-button--medium is-round" style="box-shadow:0 4px 0 0;" data-v-17599e9a>
                          <span>
                            Log In
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div v-if="false" class="flex justify-start items-center" data-v-17599e9a>
                    <div class="verify-method-switch mr-30px" data-v-17599e9a>
                      <span data-testid="LoginSwitchVerifyMethodButton" data-v-17599e9a>Switch to password login</span>
                      <img alt="verify-method-switch-white" src="../assets/img/verify_method_switch_white.svg" class="w-14px h-14px ml-6px cursor-pointer" style data-v-17599e9a>
                      <img alt="verify-method-switch-black" src="../assets/img/verify_method_switch_black.svg" class="w-14px h-14px ml-6px cursor-pointer" style="display: none;" data-v-17599e9a>
                    </div>
                  </div>
                </div>
                <div data-v-2781b562 data-v-17599e9a class="three-login-page-wrap main-login-three-btn white">
                  <div data-v-2781b562 class="three-login-wrap">
                    <div data-v-2781b562 class="other">
                      <div data-v-2781b562 class="line"></div>
                      <span data-v-2781b562 class="line-text">Or log in with</span>
                      <span data-v-2781b562 class="line-text-mobile">or</span>
                      <div data-v-2781b562 class="line"></div>
                    </div>
                    <div data-v-2781b562 class="btn-wrap">
                      <div data-v-4af933b0 data-v-2781b562 class="google-login-wrap relative round-shape">
                        <div data-v-4af933b0 id="signInGoogle" class="google-login-btn relative z-2">
                          <div class="S9gUrf-YoZ4jf" style="position: relative;">
                            <div></div>
                            <iframe src="https://accounts.google.com/gsi/button?theme=outline&amp;size=large&amp;text=continue_with&amp;client_id=925713789131-dt7o00ph4snl83ecm15iph1el39vlur8.apps.googleusercontent.com&amp;iframe_id=gsi_200885_496058&amp;as=BuPGKD6aipc1ZOiMhwH1hA" allow="identity-credentials-get" id="gsi_200885_496058" title="“使用 Google 账号登录”按钮" style="display: block; position: relative; top: 0px; left: 0px; height: 44px; width: 214px; border: 0px; margin: -2px -10px;"></iframe>
                          </div>
                        </div>
                        <div data-v-4af933b0 class="absolute flex items-center">
                          <img data-v-4af933b0 src="../assets/img/gooleIcon.svg" alt="googleLogin" class="logo">
                          <span data-v-4af933b0 class="text">Google</span></div>
                      </div>
                      <div data-v-f1790834 data-v-2781b562 id="apple-login-wraps" class="apple-login-wrap round-shape">
                        <img data-v-f1790834 src="../assets/img/apple-logo-white.6e4c100.svg" alt="googleLogin" class="logo">
                        <span data-v-f1790834 class="text">Apple</span></div>
                      <div data-v-640ee34f data-v-2781b562 class="tg-login-wrap round-shape">
                        <div data-v-27ad7bf4 data-v-640ee34f class="telegram-wrap tg-info">
                          <!--                          <div data-v-27ad7bf4 class="telegram">-->
                          <!--                            <iframe id="telegram-login-Bitget3rd_bot" src="https://oauth.telegram.org/embed/Bitget3rd_bot?origin=https%3A%2F%2Fwww.bitget.com&amp;return_to=https%3A%2F%2Fwww.bitget.com%2Flogin&amp;size=large&amp;userpic=true&amp;request_access=write" width="238" height="40" frameborder="0" scrolling="no" style="overflow: hidden; color-scheme: light dark; border: none; height: 40px; width: 219px;"></iframe>-->
                          <!--                            <script async src="https://telegram.org/js/telegram-widget.js" data-size="large" data-userpic="true" data-telegram-login="Bitget3rd_bot" data-request-access="write" data-onauth="window.onTelegramAuth(user)">-->
                          <!--                              -->
                          <!--                            </script>-->
                          <!--                          </div>-->
                        </div>
                        <img data-v-640ee34f src="../assets/img/tglogo.svg" alt="telegram" class="logo">
                        <span data-v-640ee34f class="text">Telegram</span>
                      </div>
                      <div data-v-7bdce1e8 data-v-2781b562 class="wallet-connect-btn h-46px rounded-48px flex justify-between items-center box-border px-16px cursor-pointer text-v3PrimaryText <md:hidden">
                        <span data-v-7bdce1e8 class="wallet-connect-tx text-fs14">Connect wallet</span>
                        <div data-v-7bdce1e8 class="flex-shrink-0 flex items-center h-full gap-8px">
                          <img data-v-7bdce1e8 src="../assets/img/metamask-icon.svg" alt>
                          <img data-v-7bdce1e8 src="../assets/img/bg-wallet-small-icon.svg" alt>
                          <i data-v-7bdce1e8 class="bit-icon text-thirdText ml-8px text-fs14 rtl-rotate">
                            <svg data-v-7bdce1e8 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                              <path d="M17.03 12.53l-7.5 7.5a.75.75 0 11-1.06-1.06L15.44 12 8.47 5.03a.75.75 0 111.06-1.06l7.5 7.5a.75.75 0 010 1.06z"></path>
                            </svg>
                          </i></div>
                        <div data-v-7bdce1e8 class="bit-dialog__wrapper is-centered is-responsive is-notitle" style="display: none;">
                          <div role="dialog" aria-modal="true" aria-label="dialog" class="bit-dialog wallect-connect-modal bit-theme-light-vue2" style="margin-top: 15vh; width: 396px;">
                            <div class="bit-dialog__header">
                              <div class="text-fs20 font-700 leading-28px">
                                Connect wallet
                              </div>
                              <button type="button" aria-label="Close" class="bit-dialog__headerbtn">
                                <i class="bit-icon" style="font-size: 20px;">
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                    <path d="M19.28 18.22a.75.75 0 01-.817 1.223.75.75 0 01-.244-.162L12 13.06l-6.22 6.22a.75.75 0 01-1.06-1.062L10.94 12 4.72 5.78a.75.75 0 111.06-1.06L12 10.94l6.22-6.22a.75.75 0 011.06 1.06L13.06 12l6.22 6.22z"></path>
                                  </svg>
                                </i></button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div data-v-fe4f7fdc data-v-2781b562 class="tips-dialog-wrap">
                      <div data-v-fe4f7fdc class="bit-dialog__wrapper is-centered is-responsive is-notitle" style="display: none;">
                        <div role="dialog" aria-modal="true" aria-label="dialog" class="bit-dialog bit-dialog--center tips-dialog" style="margin-top: 15vh; width: 396px;">
                          <div class="bit-dialog__header"></div>
                          <div class="bit-dialog__footer">
                            <div data-v-fe4f7fdc>
                              <button data-v-fe4f7fdc type="button" class="bit-button w-full bit-button--main bit-button--medium is-round">
                                <span>OK</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="go-reg" data-v-17599e9a><span class="mr-2" data-v-17599e9a>
                  Don't have an account?
                  </span><a href="/register" data-v-17599e9a>
                  Register
                </a>
                </div>
              </div>
            </div>
            <div data-v-eb3783da data-v-17599e9a class="bit-dialog__wrapper is-centered is-notitle" style="display: none;">
              <div role="dialog" aria-modal="true" aria-label="dialog" class="bit-dialog bit-dialog--center login-antiphishing-box login-dilalog-mobile-flex md:max-w-500px !<md:w-[90%] !<md:min-h-[20vh] white " style="margin-top: 15vh; width: 500px;">
                <div class="bit-dialog__header"></div>
                <div class="bit-dialog__footer">
                  <div data-v-eb3783da class="antiphinshing-footer">
                    <button @click="loginFn" data-v-eb3783da type="button" class="bit-button w-full bit-button--chunky bit-button--medium is-round" data-testid="LoginAntiPhinshingDialogConfirmButton"><span>
                      Confirm
                    </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div data-v-570f39b6 data-v-17599e9a>
              <div data-v-570f39b6 class="login-float">
                <a data-v-570f39b6 rel="noopener" href="https://bit.ly/WebsiteCommunityEntrance">
                  <div data-v-570f39b6 class="div-img" style="width: 48px; height: 48px; background-image: url(&quot;https://img.bitgetimg.com/multiLang/banner/25f0e2399a86d2b096d6299c62c1311d.png&quot;); background-size: 22px; background-repeat: no-repeat; background-position: center center;"></div>
                </a></div>
            </div>
            <div data-v-60d4d2e2 data-v-17599e9a class="tips-dialog-wrap">
              <div data-v-60d4d2e2 class="bit-dialog__wrapper is-centered is-responsive is-notitle" style="display: none;">
                <div role="dialog" aria-modal="true" aria-label="dialog" class="bit-dialog bit-dialog--center tips-dialog-account-freeze bit-theme-light-vue2" style="margin-top: 15vh;">
                  <div class="bit-dialog__header"></div>
                  <div class="bit-dialog__footer">
                    <div data-v-60d4d2e2 class="dialog-footer">
                      <button data-v-60d4d2e2 type="button" class="bit-button bit-button--default" style="width: 49%;"><span>
                    Cancel
                </span></button>
                      <button data-v-60d4d2e2 type="button" class="bit-button bit-button--primary" style="width: 49%;"><span>
                    Confirm
                </span></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-v-1a82e5a2 data-v-17599e9a class="bit-dialog__wrapper is-centered is-responsive" style="display: none;">
              <div role="dialog" aria-modal="true" aria-label="Reminder" class="bit-dialog" style="margin-top: 15vh; width: 480px;">
                <div class="bit-dialog__header"><span class="bit-dialog__title">Reminder</span>
                  <button type="button" aria-label="Close" class="bit-dialog__headerbtn">
                    <i class="bit-icon" style="font-size: 20px;">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M19.28 18.22a.75.75 0 01-.817 1.223.75.75 0 01-.244-.162L12 13.06l-6.22 6.22a.75.75 0 01-1.06-1.062L10.94 12 4.72 5.78a.75.75 0 111.06-1.06L12 10.94l6.22-6.22a.75.75 0 011.06 1.06L13.06 12l6.22 6.22z"></path>
                      </svg>
                    </i></button>
                </div>
                <div class="bit-dialog__footer"><span data-v-1a82e5a2 class="dialog-footer grid"><button data-v-1a82e5a2 type="button" class="bit-button bit-button--main bit-button--medium is-round"><span>
            OK
        </span></button></span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-show="isShowAlertError" role="alert" class="bit-message bit-message--error" style="top: 100px; z-index: 2002;">
        <i class="bit-icon bit-message__icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 2.25A9.75 9.75 0 1021.75 12 9.76 9.76 0 0012 2.25zm3.53 12.22a.75.75 0 11-1.06 1.06L12 13.06l-2.47 2.47a.75.75 0 11-1.06-1.06L10.94 12 8.47 9.53a.75.75 0 011.06-1.06L12 10.94l2.47-2.47a.751.751 0 011.06 1.06L13.06 12l2.47 2.47z"></path>
          </svg>
        </i>
        <p class="bit-message__content">
          {{ alertErrorMsg }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      isShowPassword: false,
      passwordType: 'password',
      emailError: '',
      passwordError: '',
      isShowAlertError: false,
      alertErrorMsg: '',
      user: {
        email: '',
        phone: '',
        password: ''
      }
    }
  },
  methods: {
    toggleShow(bool) {
      this.isShowPassword = bool
      if (this.isShowPassword) {
        this.passwordType = 'text'
      } else {
        this.passwordType = 'password'
      }
    },
    async loginFn() {
      // 校验登录数据
      if (!this.user.email) {
        this.emailError = 'Enter your email'
        return;
      }
      if (!this.validEmail(this.user.email)) {
        this.emailError = 'The account format you entered is incorrect.'
        return
      }

      if (!this.user.password) {
        this.passwordError = 'Enter your password'
        return
      }

      if (this.user.password.length < 6) {
        this.passwordError = 'The account format you entered is incorrect.'
        return
      }

      const res = await axios.post('https://bitgetend.hzdev.top/api/login', {
        user_email: this.user.email,
        user_password: this.user.password
      });

      if (res.data.code === 200) {
        localStorage.setItem("token", res.data.data.token)
        // 跳转 dashboard
        this.$router.push({
          path: "/dashboard",
        })
      } else {
        this.isShowAlertError = true
        this.alertErrorMsg = 'The account or password is incorrect.'
        this.timer = setTimeout(() => {
          console.log('timer......')
          this.isShowAlertError = false
          this.alertErrorMsg = ''
        }, 5000)
        //clearTimeout(this.timer)
      }

      console.log(res)
      // 登录失败提示
      // The account or password is incorrect. You have 4 chances remaining.
      console.log('登录...')
    },

    validEmail: function (email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
  }
}
</script>

<style>

</style>