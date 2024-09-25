<!-- <template>
  <div>
    <HzHeader></HzHeader>
    <div class="main-box lay-box clearfix" data-v-bc61f9fc="">
      <div class="main-login-wrapper white" data-v-320ca77b="" data-v-bc61f9fc="">
        <div class="login-left" data-v-320ca77b=""><!---->
          <div class="qr-panel" data-v-32322a14="" data-v-320ca77b="">
            <div class="login-qrcode-img white" data-v-32322a14="">
              <div class="qrcode-img white" data-v-32322a14="">
                <div data-v-32322a14="">
                  <canvas height="176" width="176"></canvas>
                </div>
                <div class="qrcode-img-mask" style="display:none;" data-v-32322a14=""></div>
                <div class="qrcode-failure" style="display:none;" data-v-32322a14="">
                  <div class="flex justify-center items-center flex-col w-full h-full" data-v-32322a14=""><span class="qrcode-refresh" data-v-32322a14="">
                        Refresh
                    </span>
                    <div class="mt-15px text-14px color-[#fff] font-500 px-10px" data-v-32322a14="">
                      QR code has expired
                    </div>
                  </div>
                </div>
                <div class="qrcode-success" style="display:none;" data-v-32322a14="">
                  <img src="/_nuxt-ssr/img/icon-duihao-new.c3fbe3c.svg" alt="icon-dui-hao-new2" data-v-32322a14="">
                  <div data-v-32322a14="">Scan code successfully,<br> please confirm on your app</div>
                </div>
                <div class="qrcode-success" style="display:none;" data-v-32322a14="">
                  <img src="/_nuxt-ssr/img/icon-duihao-new.c3fbe3c.svg" alt="icon-dui-hao-new3" data-v-32322a14="">
                  <div data-v-32322a14="">Confirmed</div>
                </div>
                <div class="bit-loading-mask" style="display: none;">
                  <div class="bit-loading-spinner">
                    <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none" class="circular">
                      <path d="M49 28C49 30.7578 48.4568 33.4885 47.4015 36.0364C46.3461 38.5842 44.7993 40.8992 42.8493 42.8492C40.8992 44.7993 38.5842 46.3461 36.0364 47.4015C33.4885 48.4568 30.7578 49 28 49C25.2422 49 22.5115 48.4568 19.9636 47.4015C17.4158 46.3461 15.1008 44.7993 13.1508 42.8492C11.2007 40.8992 9.65388 38.5842 8.59853 36.0363C7.54318 33.4885 7 30.7578 7 28C7 25.2422 7.54318 22.5115 8.59853 19.9636C9.65388 17.4158 11.2007 15.1008 13.1508 13.1508C15.1008 11.2007 17.4158 9.65387 19.9637 8.59853C22.5115 7.54318 25.2423 7 28 7C30.7578 7 33.4885 7.54318 36.0364 8.59853C38.5842 9.65388 40.8992 11.2007 42.8493 13.1508C44.7993 15.1008 46.3461 17.4158 47.4015 19.9637C48.4568 22.5115 49 25.2423 49 28L49 28Z" stroke="#EBEBEB" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" class="round"></path>
                      <path d="M28 7C30.7578 7 33.4885 7.54318 36.0364 8.59853C38.5842 9.65388 40.8992 11.2007 42.8493 13.1508C44.7993 15.1008 46.3461 17.4158 47.4015 19.9637C48.4568 22.5115 49 25.2422 49 28" stroke="currentColor" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" class="bar"></path>
                    </svg><!----></div>
                </div>
              </div>
              <div class="tip-img" data-v-32322a14="">
                <img src="/_nuxt-ssr/img/qrcode-tip-en.416a00a.png" alt="qrcode-tip-en" style="display:;" data-v-32322a14="">
                <img src="/baseasset/img/login/qrcode-tip-en-black.svg?t=123" alt="qrcode-tip-en-black" class="black-img" style="display:none;" data-v-32322a14="">
              </div>
            </div>
            <div class="login-qr-text-box white" data-v-32322a14="">
              <div class="title" data-v-32322a14="">Scan the code to log in</div>
              <div class="login-qr-text" data-v-32322a14="">
                <span data-v-32322a14="">Open the <a href="/download" target="_blank">Bitget App</a>, and scan the QR code using the scanning function located on the top right corner of the Home screen.</span>
              </div>
            </div>
          </div>
          <div class="join-telegram white login-tg" data-v-49ec4adf="" data-v-320ca77b="">
            <img data-v-49ec4adf="" src="https://img.bitgetimg.com/multiLang/banner/d7981c54abc0a99ac60b08096fe4be08.png" alt="icon" class="w-40px h-40px mr-12px inline-block">
            <div class="join-telegram-title" data-v-49ec4adf="">
              <p data-v-49ec4adf=""><a href="https://t.me/BitgetENOfficial" class="font-500 mr-2px" data-v-49ec4adf="">
                Join Bitget Telegram Now
              </a>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="rtl-rotate" style="display:;" data-v-49ec4adf="">
                  <g clip-path="url(#clip0_2633_63743)" data-v-49ec4adf="">
                    <path d="M9.27411 5.41857L4.60836 0.627571L3.80211 1.41207L8.22186 5.95707C8.23322 5.9687 8.23958 5.98431 8.23958 6.00057C8.23958 6.01683 8.23322 6.03244 8.22186 6.04407L3.80211 10.5891L4.60836 11.3721L9.27336 6.58107C9.63261 6.22032 9.64836 5.79357 9.27411 5.41857Z" fill="#1F1F1F" data-v-49ec4adf=""></path>
                  </g>
                  <defs data-v-49ec4adf="">
                    <clipPath id="clip0_2633_63743" data-v-49ec4adf="">
                      <rect width="12" height="12" fill="white" transform="translate(12 12) rotate(-180)" data-v-49ec4adf=""></rect>
                    </clipPath>
                  </defs>
                </svg>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="rtl-rotate" style="display:none;" data-v-49ec4adf="">
                  <g clip-path="url(#clip0_2633_63743)" data-v-49ec4adf="">
                    <path d="M9.27411 5.41857L4.60836 0.627571L3.80211 1.41207L8.22186 5.95707C8.23322 5.9687 8.23958 5.98431 8.23958 6.00057C8.23958 6.01683 8.23322 6.03244 8.22186 6.04407L3.80211 10.5891L4.60836 11.3721L9.27336 6.58107C9.63261 6.22032 9.64836 5.79357 9.27411 5.41857Z" fill="#fff" data-v-49ec4adf=""></path>
                  </g>
                  <defs data-v-49ec4adf="">
                    <clipPath id="clip0_2633_63743" data-v-49ec4adf="">
                      <rect width="12" height="12" fill="white" transform="translate(12 12) rotate(-180)" data-v-49ec4adf=""></rect>
                    </clipPath>
                  </defs>
                </svg>
              </p>
              <span class="text-share white" data-v-49ec4adf="">
                Get help, share ideas, and receive firsthand Bitget news.
            </span></div>
          </div>
        </div>
        <div class="main-login" data-v-320ca77b="">
          <div class="container main-box-container main-box-container-login" data-v-17599e9a="" data-v-320ca77b="">
            <div class="login-wrap white mainReg" data-v-17599e9a="">
              <div class="login-qr-box" data-v-17599e9a=""><!---->
                <div class="clearfix login-title-box" data-v-17599e9a="">
                  <h1 class="login-qr-title flex justify-center mb-24px" data-v-17599e9a="">
                    Welcome back
                  </h1> <!---->
                  <div class="type-tab white" data-v-17599e9a=""><span class="active" data-v-17599e9a="">
                            Email / Mobile
                        </span> <span class="type-qrcode" data-v-17599e9a="">
                            Sub-account
                        </span></div>
                </div>
                <div class="mt-24px" data-v-17599e9a="">
                  <div class="login-qr-form white" data-v-17599e9a="">
                    <div class="login-form-group" data-v-17599e9a=""><label data-v-17599e9a="">Email / Mobile</label>
                      <div data-v-e450a41a="" data-v-17599e9a="" class="main-login-phone-mail">
                        <div data-v-e450a41a="" class="phon-email-wrap">
                          <div data-v-e450a41a="" class="login-form-input-pos" style="display: none;"><span data-v-e450a41a="" data-testid="LoginAccountPhoneAreaSelect" class="area-list-area notranslate">
                +82
            </span> <i data-v-e450a41a="" class="iconfont icon-next2"></i>
                            <div data-v-e450a41a="" class="area-list-split"></div>
                          </div>
                          <div data-v-5a8f8d8d="" data-v-e450a41a="" class="login-area-list bit-theme-light-vue2 area-phone-box" style="top: 62px; display: none;">
                            <div data-v-5a8f8d8d="" class="ps-container area-phone-content ps ps--theme_default" data-ps-id="2c3d660d-08a8-4b89-f742-d1634cec0cd3" style="max-height: 280px;">
                              <div data-v-5a8f8d8d="" class="select-search-main">
                                <div data-v-425c5e14="" data-v-5a8f8d8d="" value="" class="select-search-wrap">
                                  <div data-v-425c5e14="" class="select-search-box">
                                    <span data-v-425c5e14="" class="select-search-prefix"><i data-v-425c5e14="" class="iconfont icon-sousuo rtl-rotate"></i></span>
                                    <input data-v-425c5e14="" type="text" autocomplete="off" name="dnSearchStr" style="display: none; width: 0px; height: 0px;">
                                    <input data-v-425c5e14="" autocomplete="off" type="text" name="dnSearchStr" placeholder="Search" class="select-search-input">
                                  </div>
                                </div>
                                <span data-v-5a8f8d8d="" class="close"><i data-v-5a8f8d8d="" class="iconfont icon-guanbi1"></i></span>
                              </div>
                              <ul data-v-5a8f8d8d="">
                                <li data-v-5a8f8d8d="" class="active">
                                  <span data-v-5a8f8d8d="" class="area-country">Korea, South</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">82</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Albania</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">355</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Algeria</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">213</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Andorra</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">376</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Angola</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">244</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Antigua and Barbuda</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">1268</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Argentina</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">54</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Armenia</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">374</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Australia</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">61</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Austria</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">43</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Azerbaijan</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">994</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Commonwealth of the Bahamas</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">1242</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Bahrain</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">973</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Bangladesh</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">880</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Barbados</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">1246</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Belarus</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">375</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Belgium</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">32</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Belize</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">501</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Benin</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">229</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Bhutan</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">975</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Bolivia</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">591</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Bosnia and Herzegovina</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">387</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Botswana</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">267</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Brazil</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">55</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Brunei</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">673</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Bulgaria</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">359</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Burkina Faso</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">226</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Burundi</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">257</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Cambodia</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">855</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Cameroon</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">237</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Canada</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">1</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Cape Verde</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">238</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Chad</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">235</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Chile</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">56</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Colombia</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">57</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Comoros</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">269</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Congo (Brazzaville)</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">242</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Cook Islands</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">682</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Costa Rica</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">506</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Côte Ivoire</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">225</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Croatia</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">385</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Cyprus</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">357</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Czech Republic</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">420</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Denmark</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">45</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Djibouti</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">253</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Dominica</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">1767</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Dominican Republic</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">1849</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Ecuador</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">593</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Egypt</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">20</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">El Salvador</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">503</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Equatorial Guinea</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">240</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Eritrea</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">291</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Estonia</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">372</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Ethiopia</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">251</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Fiji</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">679</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Finland</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">358</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">France</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">33</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Gabon</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">241</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Gambia, The</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">220</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Georgia</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">995</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Germany</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">49</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Ghana</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">233</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Greece</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">30</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Guadeloupe</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">590</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Guinea</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">224</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Guyana</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">592</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">HongKong</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">852</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Honduras</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">504</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Hungary</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">36</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Iceland</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">354</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">India</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">91</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Indonesia</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">62</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Ireland</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">353</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Israel</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">972</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Italy</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">39</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Jamaica</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">1876</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Japan</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">81</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Jordan</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">962</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Kazakhstan</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">7</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Kenya</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">254</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Kiribati</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">686</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Kosovo</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">383</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Kuwait</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">965</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Kyrgyzstan</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">996</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Laos</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">856</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Latvia</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">371</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Lesotho</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">266</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Liberia</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">231</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Liechtenstein</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">423</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Lithuania</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">370</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Luxembourg</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">352</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Madagascar</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">261</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Malawi</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">265</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Malaysia</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">60</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Maldives</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">960</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Mali</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">223</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Malta</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">356</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Marshall Islands</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">692</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Mauritania</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">222</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Mauritius</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">230</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Mexico</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">52</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Micronesia</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">691</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Moldova</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">373</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Monaco</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">377</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Mongolia</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">976</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Montenegro</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">382</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Morocco</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">212</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Mozambique</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">258</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Myanmar</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">95</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Namibia</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">264</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Nauru</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">674</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Nepal</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">977</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Netherlands</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">31</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">New Zealand</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">64</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Nicaragua</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">505</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Niger</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">227</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Nigeria</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">234</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Niue</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">683</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Norway</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">47</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Oman</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">968</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Pakistan</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">92</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Palau</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">680</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Palestine</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">970</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Panama</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">507</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Papua New Guinea</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">675</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Paraguay</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">595</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Peru</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">51</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Philippines</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">63</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Poland</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">48</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Portugal</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">351</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Qatar</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">974</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Romania</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">40</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Russia</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">7</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Rwanda</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">250</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Saint Christopher and Nevis</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">1869</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Saint Lucia</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">1758</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Saint Vincent and the Grenadines</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">1784</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Samoa</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">685</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">San Marino</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">378</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">São Tomé and Príncipe</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">239</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Saudi Arabia</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">966</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Senegal</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">221</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Serbia</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">381</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Seychelles</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">248</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Sierra Leone</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">232</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Singapore</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">65</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Slovakia</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">421</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Slovenia</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">386</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Solomon Islands</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">677</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">South Africa</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">27</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Spain</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">34</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Sri Lanka</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">94</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Suriname</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">597</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Swaziland</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">268</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Sweden</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">46</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Switzerland</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">41</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Taiwan</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">886</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Tajikistan</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">992</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Tanzania</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">255</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Thailand</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">66</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Timor-Leste</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">670</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Togo</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">228</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Tonga</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">676</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Trinidad and Tobago</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">1868</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Tunisia</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">216</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Turkey</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">90</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Turkmenistan</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">993</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Tuvalu</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">688</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Uganda</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">256</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Ukraine</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">380</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">United Arab Emirates</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">971</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">United Kingdom</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">44</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Uruguay</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">598</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Uzbekistan</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">998</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Vanuatu</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">678</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Vatican City (the Holy See)</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">379</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Venezuela</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">58</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Vietnam</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">84</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Western Sahara</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">210</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Zambia</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">260</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Zimbabwe</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">263</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Macao</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">853</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Gibraltar</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">350</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">British Virgin Islands</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">1284</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Anguilla</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">1264</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Aruba</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">297</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Åland Islands</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">35818</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Bermuda</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">1441</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Caribbean Netherlands</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">5997</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Curaçao</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">5999</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Faroe Islands (Føroyar)</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">298</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Grenada</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">1473</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">French Guiana (Guyane française)</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">594</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Greenland (Kalaallit Nunaat)</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">299</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Guatemala</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">502</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">British Indian Ocean Territory</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">246</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Cayman Islands</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">1345</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Macedonia (FYROM) (Македонија)</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">389</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Martinique</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">596</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Montserrat</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">1664</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">New Caledonia (Nouvelle-Calédonie)</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">687</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">French Polynesia (Polynésie française)</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">689</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">508</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Saint Helena</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">290</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Sint Maarten</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">1721</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Turks and Caicos Islands</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">1649</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Tokelau</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">690</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Dominican Republic</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">1809</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Dominican Republic</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">1829</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Other</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">1980</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Réunion (La Réunion)</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">262</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Puerto Rico</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">787</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Isle of Man</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">44</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Jersey</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">44</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">Guernsey</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">44</span></li>
                                <li data-v-5a8f8d8d="" class="">
                                  <span data-v-5a8f8d8d="" class="area-country">China Mainland</span>
                                  <span data-v-5a8f8d8d="" class="area-num notranslate">86</span></li>
                              </ul>
                              <div class="ps__scrollbar-x-rail" style="left: 0px; bottom: 0px;">
                                <div class="ps__scrollbar-x" tabindex="0" style="left: 0px; width: 0px;"></div>
                              </div>
                              <div class="ps__scrollbar-y-rail" style="top: 0px; right: 0px;">
                                <div class="ps__scrollbar-y" tabindex="0" style="top: 0px; height: 0px;"></div>
                              </div>
                            </div>
                          </div>
                          <input data-v-e450a41a="" type="text" style="display: none; width: 0px; height: 0px;">
                          <input data-v-e450a41a="" type="text" autocomplete="off" name="dnPhone" placeholder="Email / Mobile" data-testid="LoginAccountInput" class="input custom-login-input custom-login-input-en">
                        </div>
                      </div>
                      <label for="dnEmail" class="for-border !mb-0" data-v-17599e9a=""></label>
                      <div class="login-from-error login-name-error" data-v-17599e9a="">
                        <div data-v-17599e9a="" class="bg-comp-error-normal error" style="display: none;">

                        </div>
                      </div>
                    </div> <!---->
                    <div data-v-17599e9a="">
                      <div class="iphone:mt-21px" data-v-17599e9a="">
                        <button type="button" data-testid="LoginVerifyButton" class="bit-button w-full bit-button--chunky bit-button--medium is-round" style="box-shadow:0 4px 0 0 undefined;" data-v-17599e9a=""><!----><!----><!----><span>
                                Verify
                            </span><!----></button>
                      </div>
                    </div>
                  </div>
                  <div class="flex justify-start items-center" data-v-17599e9a="">
                    <div class="verify-method-switch mr-30px" data-v-17599e9a="">
                      <span data-testid="LoginSwitchVerifyMethodButton" data-v-17599e9a="">Switch to password login</span>
                      <img alt="verify-method-switch-white" src="/baseasset/img/dashboard/security/verify_method_switch_white.svg" class="w-14px h-14px ml-6px cursor-pointer" style="" data-v-17599e9a="">
                      <img alt="verify-method-switch-black" src="/baseasset/img/dashboard/security/verify_method_switch_black.svg" class="w-14px h-14px ml-6px cursor-pointer" style="display: none;" data-v-17599e9a="">
                    </div> <!----></div>
                </div>
                <div data-v-2781b562="" data-v-17599e9a="" class="three-login-page-wrap main-login-three-btn white">
                  <div data-v-2781b562="" class="three-login-wrap">
                    <div data-v-2781b562="" class="other">
                      <div data-v-2781b562="" class="line"></div>
                      <span data-v-2781b562="" class="line-text">Or log in with</span>
                      <span data-v-2781b562="" class="line-text-mobile">or</span>
                      <div data-v-2781b562="" class="line"></div>
                    </div>
                    <div data-v-2781b562="" class="btn-wrap">
                      <div data-v-4af933b0="" data-v-2781b562="" class="google-login-wrap relative round-shape">
                        <div data-v-4af933b0="" id="signInGoogle" class="google-login-btn relative z-2">
                          <div class="S9gUrf-YoZ4jf" style="position: relative;">
                            <div></div>
                            <iframe src="https://accounts.google.com/gsi/button?theme=outline&amp;size=large&amp;text=continue_with&amp;client_id=925713789131-dt7o00ph4snl83ecm15iph1el39vlur8.apps.googleusercontent.com&amp;iframe_id=gsi_200885_496058&amp;as=BuPGKD6aipc1ZOiMhwH1hA" allow="identity-credentials-get" id="gsi_200885_496058" title="“使用 Google 账号登录”按钮" style="display: block; position: relative; top: 0px; left: 0px; height: 44px; width: 214px; border: 0px; margin: -2px -10px;"></iframe>
                          </div>
                        </div>
                        <div data-v-4af933b0="" class="absolute flex items-center">
                          <img data-v-4af933b0="" src="/baseasset/img/account/gooleIcon.svg" alt="googleLogin" class="logo">
                          <span data-v-4af933b0="" class="text">Google</span></div>
                      </div>
                      <div data-v-f1790834="" data-v-2781b562="" id="apple-login-wraps" class="apple-login-wrap round-shape">
                        <img data-v-f1790834="" src="/_nuxt-ssr/img/apple-logo-white.6e4c100.svg" alt="googleLogin" class="logo">
                        <span data-v-f1790834="" class="text">Apple</span></div>
                      <div data-v-640ee34f="" data-v-2781b562="" class="tg-login-wrap round-shape">
                        <div data-v-27ad7bf4="" data-v-640ee34f="" class="telegram-wrap tg-info">
                          <div data-v-27ad7bf4="" class="telegram">
                            <iframe id="telegram-login-Bitget3rd_bot" src="https://oauth.telegram.org/embed/Bitget3rd_bot?origin=https%3A%2F%2Fwww.bitget.com&amp;return_to=https%3A%2F%2Fwww.bitget.com%2Flogin&amp;size=large&amp;userpic=true&amp;request_access=write" width="238" height="40" frameborder="0" scrolling="no" style="overflow: hidden; color-scheme: light dark; border: none; height: 40px; width: 219px;"></iframe>
                            <script async="" src="https://telegram.org/js/telegram-widget.js" data-size="large" data-userpic="true" data-telegram-login="Bitget3rd_bot" data-request-access="write" data-onauth="window.onTelegramAuth(user)"></script>
                          </div>
                        </div>
                        <img data-v-640ee34f="" src="/baseasset/img/account/tglogo.svg?t=123" alt="telegram" class="logo">
                        <span data-v-640ee34f="" class="text">Telegram</span></div>
                      <div data-v-7bdce1e8="" data-v-2781b562="" class="wallet-connect-btn h-46px rounded-48px flex justify-between items-center box-border px-16px cursor-pointer text-v3PrimaryText <md:hidden">
                        <span data-v-7bdce1e8="" class="wallet-connect-tx text-fs14">Connect wallet</span>
                        <div data-v-7bdce1e8="" class="flex-shrink-0 flex items-center h-full gap-8px">
                          <img data-v-7bdce1e8="" src="/baseasset/img/three/metamask-icon.svg">
                          <img data-v-7bdce1e8="" src="/baseasset/img/three/bg-wallet-small-icon.svg">
                          <i data-v-7bdce1e8="" class="bit-icon text-thirdText ml-8px text-fs14 rtl-rotate">
                            <svg data-v-7bdce1e8="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                              <path d="M17.03 12.53l-7.5 7.5a.75.75 0 11-1.06-1.06L15.44 12 8.47 5.03a.75.75 0 111.06-1.06l7.5 7.5a.75.75 0 010 1.06z"></path>
                            </svg>
                          </i></div>
                        <div data-v-7bdce1e8="" class="bit-dialog__wrapper is-centered is-responsive is-notitle" style="display: none;">
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
                            </div><!----><!----></div>
                        </div>
                      </div>
                    </div>
                    <div data-v-fe4f7fdc="" data-v-2781b562="" class="tips-dialog-wrap">
                      <div data-v-fe4f7fdc="" class="bit-dialog__wrapper is-centered is-responsive is-notitle" style="display: none;">
                        <div role="dialog" aria-modal="true" aria-label="dialog" class="bit-dialog bit-dialog--center tips-dialog" style="margin-top: 15vh; width: 396px;">
                          <div class="bit-dialog__header"><!----><!----></div><!---->
                          <div class="bit-dialog__footer">
                            <div data-v-fe4f7fdc="">
                              <button data-v-fe4f7fdc="" type="button" class="bit-button w-full bit-button--main bit-button--medium is-round"><!----><!----><!----><span>
                    OK
                </span><!----></button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="go-reg" data-v-17599e9a=""><span class="mr-2" data-v-17599e9a="">
                    Don't have an account?
                </span> <a href="/register" data-v-17599e9a="">
                  Register
                </a></div>
              </div> <!----></div>
            <div data-v-eb3783da="" data-v-17599e9a="" class="bit-dialog__wrapper is-centered is-notitle" style="display: none;">
              <div role="dialog" aria-modal="true" aria-label="dialog" class="bit-dialog bit-dialog--center login-antiphishing-box login-dilalog-mobile-flex md:max-w-500px !<md:w-[90%] !<md:min-h-[20vh] white " style="margin-top: 15vh; width: 500px;">
                <div class="bit-dialog__header"><!----><!----></div><!---->
                <div class="bit-dialog__footer">
                  <div data-v-eb3783da="" class="antiphinshing-footer">
                    <button data-v-eb3783da="" type="button" class="bit-button w-full bit-button--chunky bit-button--medium is-round" data-testid="LoginAntiPhinshingDialogConfirmButton"><!----><!----><!----><span>
                Confirm
            </span><!----></button>
                  </div>
                </div>
              </div>
            </div>
            <div data-v-570f39b6="" data-v-17599e9a="">
              <div data-v-570f39b6="" class="login-float">
                <a data-v-570f39b6="" rel="noopener" href="https://bit.ly/WebsiteCommunityEntrance">
                  <div data-v-570f39b6="" class="div-img" style="width: 48px; height: 48px; background-image: url(&quot;https://img.bitgetimg.com/multiLang/banner/25f0e2399a86d2b096d6299c62c1311d.png&quot;); background-size: 22px; background-repeat: no-repeat; background-position: center center;"></div>
                </a></div>
            </div>
            <div data-v-60d4d2e2="" data-v-17599e9a="" class="tips-dialog-wrap">
              <div data-v-60d4d2e2="" class="bit-dialog__wrapper is-centered is-responsive is-notitle" style="display: none;">
                <div role="dialog" aria-modal="true" aria-label="dialog" class="bit-dialog bit-dialog--center tips-dialog-account-freeze bit-theme-light-vue2" style="margin-top: 15vh;">
                  <div class="bit-dialog__header"><!----><!----></div><!---->
                  <div class="bit-dialog__footer">
                    <div data-v-60d4d2e2="" class="dialog-footer">
                      <button data-v-60d4d2e2="" type="button" class="bit-button bit-button--default" style="width: 49%;"><!----><!----><!----><span>
                    Cancel
                </span><!----></button>
                      <button data-v-60d4d2e2="" type="button" class="bit-button bit-button--primary" style="width: 49%;"><!----><!----><!----><span>
                    Confirm
                </span><!----></button> <!----></div>
                  </div>
                </div>
              </div>
            </div> <!---->
            <div data-v-1a82e5a2="" data-v-17599e9a="" class="bit-dialog__wrapper is-centered is-responsive" style="display: none;">
              <div role="dialog" aria-modal="true" aria-label="Reminder" class="bit-dialog" style="margin-top: 15vh; width: 480px;">
                <div class="bit-dialog__header"><span class="bit-dialog__title">Reminder</span>
                  <button type="button" aria-label="Close" class="bit-dialog__headerbtn">
                    <i class="bit-icon" style="font-size: 20px;">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M19.28 18.22a.75.75 0 01-.817 1.223.75.75 0 01-.244-.162L12 13.06l-6.22 6.22a.75.75 0 01-1.06-1.062L10.94 12 4.72 5.78a.75.75 0 111.06-1.06L12 10.94l6.22-6.22a.75.75 0 011.06 1.06L13.06 12l6.22 6.22z"></path>
                      </svg>
                    </i></button>
                </div><!---->
                <div class="bit-dialog__footer"><span data-v-1a82e5a2="" class="dialog-footer grid"><button data-v-1a82e5a2="" type="button" class="bit-button bit-button--main bit-button--medium is-round"><!----><!----><!----><span>
            OK
        </span><!----></button></span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>

</style> -->