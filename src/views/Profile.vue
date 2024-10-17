<template>
  <div>
    <HzHeader></HzHeader>
    <div data-v-1c7302ed class="personal-main-container lay-box clearfix">
      <div data-v-1c7302ed class="personal-container">
        <LeftDash></LeftDash>
        <div data-v-1c7302ed class="personal-main-box">
          <div data-v-1c7302ed class="personal-main-content">
            <div data-v-18402fd0 data-v-1c7302ed>
              <div data-v-18402fd0 aria-label="Breadcrumb" role="navigation" class="bit-breadcrumb"><span
                  data-v-18402fd0 class="bit-breadcrumb__item">
                <span role="link" class="bit-breadcrumb__inner is-link"> Bitget </span>
                <span role="presentation"
                      class="bit-breadcrumb__separator">/</span></span> <span data-v-18402fd0
                                                                              class="bit-breadcrumb__item"><span role="link" class="bit-breadcrumb__inner is-link">
                    Dashboard
                    </span><span role="presentation" class="bit-breadcrumb__separator">/</span></span> <span
                  data-v-18402fd0 class="bit-breadcrumb__item" aria-current="page"><span role="link"
                                                                                         class="bit-breadcrumb__inner">My profile</span><span role="presentation"
                                                                                                                                              class="bit-breadcrumb__separator">/</span></span>
              </div>
              <div data-v-18402fd0
                   class="bg-wrapper w-auto rounded-16px h-114px relative mb-40px mt-16px md:h-185px"><img
                  data-v-18402fd0 src="https://img.bitgetimg.com/multiLang/web/5417743577d0b8fde7e0e7a21f4369f5.jpg"
                  alt class="bg-img w-full rounded-16px h-114px md:h-185px"> <img data-v-18402fd0
                                                                                  src="../assets/img/set_bg.png" alt
                                                                                  class="absolute cursor-pointer right-24px top-24px w-42px h-42px">
              </div>
              <div data-v-18402fd0 class="mb-16px text-fs20 text-v3PrimaryText font-600">
                Profile
              </div>
              <div data-v-18402fd0
                   class="px-24px py-8px mb-60px rounded-16px border-1px border-solid border-v3StrengthBorder0">
                <div data-v-18402fd0
                     class="flex item-border flex-row relative justify-between items-center h-70px text-fs16">
                  <div data-v-18402fd0 class="bit-image w-44px h-44px !rounded-44px"><img
                      src="../assets/img/avatar.svg" class="bit-image__inner bit-image__preview"></div>
                  <button data-v-18402fd0 type="button"
                          class="bit-button bit-button--default is-round"><span><input data-v-18402fd0
                                                                                       type="file" accept="image/*" class="hidden">
                      Change
                    </span></button>
                </div>
                <div data-v-18402fd0 class="flex item-border flex-row justify-between items-center h-95px text-fs16">
                  <div data-v-18402fd0 class="font-500 flex flex-col justify-end">
                    <div data-v-18402fd0 class="text-v3PrimaryText text-fs16 font-500 mb-8px mr-4px">
                      {{ displayName }}
                    </div>
                    <div data-v-18402fd0 class="text-v3TertiaryText h-17px text-fs12 font-400 leading-17px mr-4px">
                      Display name
                    </div>
                  </div>
                  <button @click="displayNameShow = true" type="button" class="bit-button bit-button--default is-round">
                    <span>Change</span>
                  </button>
                </div>
                <div v-if="false" data-v-18402fd0 class="flex flex-row item-border justify-between items-center h-95px text-fs16">
                  <div data-v-18402fd0 class="font-500 flex flex-col justify-end">
                    <div data-v-18402fd0 class="text-v3PrimaryText text-fs16 font-500 mb-8px mr-4px">
                      @BGUSER-M3C8Z5R6
                    </div>
                    <div data-v-18402fd0 class="text-v3TertiaryText h-17px text-fs12 font-400 leading-17px mr-4px">
                      Username
                    </div>
                  </div>
                  <button data-v-18402fd0 type="button" class="bit-button bit-button--default is-round"
                          @click="toggleUsernameDialog"><span>
                      Change
                    </span></button>
                </div>
                <div data-v-18402fd0 class="pt-24px pb-12px flex flex-row items-center text-fs16 flex-wrap">
                  <div data-v-18402fd0
                       class="relative mb-12px flex flex-row items-center h-22px !text-fs11 mr-8px cursor-pointer"><img
                      data-v-18402fd0 src="../assets/img/not_veri.svg" class="h-22px w-22px z-30">
                    <div data-v-18402fd0
                         class="not-veri text-fs11 pl-12px pr-6px -ml-10px h-18px leading-18px z-10 rounded-2px font-700">
                      Unverified
                    </div>
                  </div>
                </div>
              </div>
              <div data-v-18402fd0 class="mb-16px text-fs20 text-v3PrimaryText font-600">
                Info
              </div>
              <div data-v-18402fd0
                   class="px-24px py-8px rounded-16px border-1px border-solid text-v3PrimaryText border-v3StrengthBorder0">
                <div data-v-18402fd0 class="flex flex-row item-border justify-between items-center h-70px text-fs16">
                  <div data-v-18402fd0 class="font-400">
                    User ID
                  </div>
                  <div data-v-18402fd0 class="font-500 flex flex-row justify-end"><span data-v-18402fd0
                                                                                        class="mr-4px">9088351813</span>
                    <div data-v-18402fd0><i data-v-18402fd0 class="bit-icon cursor-pointer"
                                            style="font-size: 20px;">
                      <svg data-v-18402fd0 xmlns="http://www.w3.org/2000/svg"
                           viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path
                            d="M20.25 3h-12a.75.75 0 00-.75.75V7.5H3.75a.75.75 0 00-.75.75v12a.75.75 0 00.75.75h12a.75.75 0 00.75-.75V16.5h3.75a.75.75 0 00.75-.75v-12a.75.75 0 00-.75-.75zM15 19.5H4.5V9H15v10.5zm4.5-4.5h-3V8.25a.75.75 0 00-.75-.75H9v-3h10.5V15z">
                        </path>
                      </svg>
                    </i>
                    </div>
                  </div>
                </div>
                <div data-v-18402fd0 class="flex flex-row item-border justify-between items-center h-70px text-fs16">
                  <div data-v-18402fd0 class="font-400">
                    Email
                  </div>
                  <div data-v-18402fd0 class="font-500">
                    {{ userEmail }}
                  </div>
                </div>
                <div data-v-18402fd0 class="flex flex-row justify-between item-border items-center h-70px text-fs16">
                  <div data-v-18402fd0 class="font-400">
                    Phone number
                  </div>
                  <div data-v-18402fd0 class="font-500 flex flex-row cursor-pointer justify-end"><span
                      data-v-18402fd0 class="text-[#03AAC7] mr-4px">Configure</span> <i data-v-18402fd0
                                                                                        class="bit-icon cursor-pointer rtl-rotate" style="font-size: 20px;">
                    <svg data-v-18402fd0
                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path
                          d="M17.03 12.53l-7.5 7.5a.75.75 0 11-1.06-1.06L15.44 12 8.47 5.03a.75.75 0 111.06-1.06l7.5 7.5a.75.75 0 010 1.06z">
                      </path>
                    </svg>
                  </i></div>
                </div>


                <div data-v-18402fd0 class="flex flex-row justify-between item-border items-center h-70px text-fs16">
                  <div data-v-18402fd0 class="font-400">
                    Shipping address
                  </div>
                  <div @click="displayAddressShow = true" data-v-18402fd0 class="font-500 flex flex-row cursor-pointer justify-end">
                    <span data-v-18402fd0 class="text-[#03AAC7] mr-4px shipping">Configure</span>
                    <i data-v-18402fd0 class="bit-icon cursor-pointer rtl-rotate" style="font-size: 20px;">
                      <svg
                          data-v-18402fd0 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                          aria-hidden="true">
                        <path d="M17.03 12.53l-7.5 7.5a.75.75 0 11-1.06-1.06L15.44 12 8.47 5.03a.75.75 0 111.06-1.06l7.5 7.5a.75.75 0 010 1.06z">
                        </path>
                      </svg>
                    </i>
                  </div>
                </div>


                <div data-v-18402fd0 class="flex item-border flex-row justify-between items-center h-70px text-fs16">
                  <div data-v-18402fd0 class="font-400">
                    Referral code
                  </div>
                  <div data-v-18402fd0 class="font-500 flex flex-row justify-end"><span data-v-18402fd0
                                                                                        class="mr-4px">M3C8Z5R6</span>
                    <div data-v-18402fd0><i data-v-18402fd0 class="bit-icon cursor-pointer"
                                            style="font-size: 20px;">
                      <svg data-v-18402fd0 xmlns="http://www.w3.org/2000/svg"
                           viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path
                            d="M20.25 3h-12a.75.75 0 00-.75.75V7.5H3.75a.75.75 0 00-.75.75v12a.75.75 0 00.75.75h12a.75.75 0 00.75-.75V16.5h3.75a.75.75 0 00.75-.75v-12a.75.75 0 00-.75-.75zM15 19.5H4.5V9H15v10.5zm4.5-4.5h-3V8.25a.75.75 0 00-.75-.75H9v-3h10.5V15z">
                        </path>
                      </svg>
                    </i></div>
                  </div>
                </div>
                <div data-v-18402fd0 class="flex flex-row justify-between items-center h-70px text-fs16 item-border">
                  <div data-v-18402fd0 class="font-400">
                    Registration date
                  </div>
                  <div data-v-18402fd0 class="font-500">
                    {{formatDate(createdTime)}}
                  </div>
                </div>
                <div data-v-18402fd0 class="flex flex-row justify-between items-center h-70px text-fs16">
                  <div data-v-18402fd0 class="font-400 text-red">
                    Close account
                  </div>
                  <div data-v-18402fd0 class="font-500 flex flex-row cursor-pointer justify-end"><i
                      data-v-18402fd0 class="bit-icon cursor-pointer rtl-rotate" style="font-size: 20px;">
                    <svg
                        data-v-18402fd0 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                        aria-hidden="true">
                      <path
                          d="M17.03 12.53l-7.5 7.5a.75.75 0 11-1.06-1.06L15.44 12 8.47 5.03a.75.75 0 111.06-1.06l7.5 7.5a.75.75 0 010 1.06z">
                      </path>
                    </svg>
                  </i></div>
                </div>
              </div>
              <div data-v-47a11498 data-v-18402fd0 class="bit-dialog__wrapper is-centered is-responsive"
                   style="display: none;">
                <div role="dialog" aria-modal="true" aria-label="Edit username" class="bit-dialog"
                     style="margin-top: 15vh; width: 480px;">
                  <div class="bit-dialog__header"><span class="bit-dialog__title">Edit username</span>
                    <button
                        type="button" aria-label="Close" class="bit-dialog__headerbtn"><i class="bit-icon"
                                                                                          style="font-size: 20px;">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                           fill="currentColor" aria-hidden="true">
                        <path
                            d="M19.28 18.22a.75.75 0 01-.817 1.223.75.75 0 01-.244-.162L12 13.06l-6.22 6.22a.75.75 0 01-1.06-1.062L10.94 12 4.72 5.78a.75.75 0 111.06-1.06L12 10.94l6.22-6.22a.75.75 0 011.06 1.06L13.06 12l6.22 6.22z">
                        </path>
                      </svg>
                    </i></button>
                  </div>
                  <div class="bit-dialog__footer"><span data-v-47a11498 class="dialog-footer"><button
                      data-v-47a11498 type="button"
                      class="bit-button bit-button--default bit-button--medium is-round"><span>
                          Confirm
                        </span></button>
                  </span>
                  </div>
                </div>
              </div>
              <div id="dialog" class="bit-dialog__wrapper is-centered is-responsive"
                   v-show="isDisplayNameDialogVisible">
                <div role="dialog" aria-modal="true" aria-label="Edit display name" class="bit-dialog"
                     style="margin-top: 15vh; width: 480px;">
                  <div class="bit-dialog__header">
                    <span class="bit-dialog__title">Edit display name</span>
                    <button type="button" aria-label="Close" class="bit-dialog__headerbtn"
                            @click="closeDisplayNameDialog">
                      <i class="bit-icon" style="font-size: 20px;">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                             aria-hidden="true">
                          <path
                              d="M19.28 18.22a.75.75 0 01-.817 1.223.75.75 0 01-.244-.162L12 13.06l-6.22 6.22a.75.75 0 01-1.06-1.062L10.94 12 4.72 5.78a.75.75 0 111.06-1.06L12 10.94l6.22-6.22a.75.75 0 011.06 1.06L13.06 12l6.22 6.22z">
                          </path>
                        </svg>
                      </i>
                    </button>
                  </div>
                  <div class="bit-dialog__body">
                    <p class="text-fs14 text-v3SecondaryText mb-10px">
                      Your display name will be visible to other users and appear in your profile, copy trading, bot
                      trading, insights, and more.
                    </p>
                    <ul class="mb-10px text-fs14 text-v3SecondaryText font-[400] md:text-fs12">
                      <li>Maximum of 20 characters. You can only change your display name once a week. Think carefully
                        before modifying.
                      </li>
                      <li>Display names may contain letters, numbers, and certain special characters.</li>
                    </ul>
                    <div class="bit-input bit-input--medium bit-input--round">
                      <input type="text" autocomplete="off" placeholder="Enter display name" class="bit-input__inner">
                    </div>
                  </div>
                  <div class="bit-dialog__footer">
                    <span class="dialog-footer">
                      <button type="button" class="bit-button bit-button--default bit-button--medium is-round">
                        <span>Confirm</span>
                      </button>
                    </span>
                  </div>
                </div>
              </div>


              <div id="dialog" class="bit-dialog__wrapper is-centered is-responsive" v-show="isUsernameDialogVisible">
                <div role="dialog" aria-modal="true" aria-label="Edit username" class="bit-dialog"
                     style="margin-top: 15vh; width: 480px;">
                  <div class="bit-dialog__header">
                    <span class="bit-dialog__title">Edit username</span>
                    <button type="button" aria-label="Close" class="bit-dialog__headerbtn" @click="closeUsernameDialog">
                      <i class="bit-icon" style="font-size: 20px;">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                             aria-hidden="true">
                          <path
                              d="M19.28 18.22a.75.75 0 01-.817 1.223.75.75 0 01-.244-.162L12 13.06l-6.22 6.22a.75.75 0 01-1.06-1.062L10.94 12 4.72 5.78a.75.75 0 111.06-1.06L12 10.94l6.22-6.22a.75.75 0 011.06 1.06L13.06 12l6.22 6.22z">
                          </path>
                        </svg>
                      </i>
                    </button>
                  </div>
                  <div class="bit-dialog__body">
                    <p class="text-fs14 text-v3SecondaryText mb-10px">
                      Think carefully before modifying your username.
                    </p>
                    <ul class="mb-10px text-fs14 text-v3SecondaryText font-[400] md:text-fs12">
                      <li>Maximum of 20 character allowed for usernames.</li>
                      <li>You can only change your username three times a year. Think carefully before proceeding.</li>
                      <li>Usernames can only contain upper and lowercase letters, numbers, or a combination of both. The
                        only supported symbols are the hyphen (-) and the underscore (_).
                      </li>
                    </ul>
                    <div class="input-box"><span>@</span>
                      <div class="bit-input bit-input--medium bit-input--round">
                        <input type="text" autocomplete="off" placeholder="Enter username" class="bit-input__inner">
                      </div>
                    </div>
                  </div>
                  <div class="bit-dialog__footer">
                    <span class="dialog-footer">
                      <button type="button" class="bit-button bit-button--default bit-button--medium is-round">
                        <span>Confirm</span>
                      </button>
                    </span>
                  </div>
                </div>
              </div>


              <div data-v-5a477b37 data-v-18402fd0 class="bit-dialog__wrapper is-centered is-responsive"
                   style="display: none;">
                <div role="dialog" aria-modal="true" aria-label="Edit background" class="bit-dialog"
                     style="margin-top: 15vh; width: 480px;">
                  <div class="bit-dialog__header"><span class="bit-dialog__title">Edit background</span>
                    <button
                        type="button" aria-label="Close" class="bit-dialog__headerbtn"><i class="bit-icon"
                                                                                          style="font-size: 20px;">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                           fill="currentColor" aria-hidden="true">
                        <path
                            d="M19.28 18.22a.75.75 0 01-.817 1.223.75.75 0 01-.244-.162L12 13.06l-6.22 6.22a.75.75 0 01-1.06-1.062L10.94 12 4.72 5.78a.75.75 0 111.06-1.06L12 10.94l6.22-6.22a.75.75 0 011.06 1.06L13.06 12l6.22 6.22z">
                        </path>
                      </svg>
                    </i></button>
                  </div>
                  <div class="bit-dialog__footer"><span data-v-5a477b37 class="dialog-footer"><button
                      data-v-5a477b37 type="button"
                      class="bit-button bit-button--default bit-button--medium is-round"><span>
                          Set as background
                        </span></button></span></div>
                </div>
              </div>
              <div data-v-3d923cde data-v-18402fd0 class="bit-dialog__wrapper is-centered is-responsive"
                   style="display: none;">
                <div role="dialog" aria-modal="true" aria-label="Set profile picture" class="bit-dialog"
                     style="margin-top: 15vh; width: 480px;">
                  <div class="bit-dialog__header"><span class="bit-dialog__title">Set profile picture</span>
                    <button
                        type="button" aria-label="Close" class="bit-dialog__headerbtn"><i class="bit-icon"
                                                                                          style="font-size: 20px;">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                           fill="currentColor" aria-hidden="true">
                        <path
                            d="M19.28 18.22a.75.75 0 01-.817 1.223.75.75 0 01-.244-.162L12 13.06l-6.22 6.22a.75.75 0 01-1.06-1.062L10.94 12 4.72 5.78a.75.75 0 111.06-1.06L12 10.94l6.22-6.22a.75.75 0 011.06 1.06L13.06 12l6.22 6.22z">
                        </path>
                      </svg>
                    </i></button>
                  </div>
                  <div class="bit-dialog__footer">
                    <div data-v-3d923cde>
                      <button data-v-3d923cde type="button"
                              class="bit-button bit-button--default bit-button--medium"><span>
                          Cancel
                        </span></button>
                      <button data-v-3d923cde type="button"
                              class="bit-button bit-button--primary bit-button--medium"><span>
                          Confirm
                        </span></button>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>

    <!--display name-->
    <div v-if="displayNameShow" data-v-9d5716fa data-v-2f3eda9e class="bit-dialog__wrapper is-centered is-responsive" style="z-index: 2005;">
      <div role="dialog" aria-modal="true" aria-label="Edit display name" class="bit-dialog" style="margin-top: 15vh; width: 480px;">
        <div class="bit-dialog__header"><span class="bit-dialog__title">Edit display name</span>
          <button @click="displayNameShow = false" type="button" aria-label="Close" class="bit-dialog__headerbtn">
            <i class="bit-icon" style="font-size: 20px;">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M19.28 18.22a.75.75 0 01-.817 1.223.75.75 0 01-.244-.162L12 13.06l-6.22 6.22a.75.75 0 01-1.06-1.062L10.94 12 4.72 5.78a.75.75 0 111.06-1.06L12 10.94l6.22-6.22a.75.75 0 011.06 1.06L13.06 12l6.22 6.22z"></path>
              </svg>
            </i>
          </button>
        </div>
        <div class="bit-dialog__body"><p data-v-9d5716fa class="text-fs14 text-v3SecondaryText mb-10px ">
          Your display name will be visible to other users and appear in your profile, copy trading, bot trading, insights, and more.
        </p>
          <ul data-v-9d5716fa class="mb-10px text-fs14 text-v3SecondaryText font-[400] md:text-fs12">
            <li data-v-9d5716fa>Maximum of 20 characters. You can only change your display name once a week. Think carefully before modifying.</li>
            <li data-v-9d5716fa>Display names may contain letters, numbers, and certain special characters.</li>
          </ul>
          <div data-v-9d5716fa class="bit-input bit-input--medium bit-input--round">
            <input v-model="displayName" type="text" autocomplete="off" placeholder="Enter display name" class="bit-input__inner"><!----><!----><!----><!----><!----><!---->
          </div>
          <div data-v-9d5716fa class="text-fs12 font-[400] text-v3RedText" style="display: none;">

          </div>
        </div>
        <div class="bit-dialog__footer"><span data-v-9d5716fa class="dialog-footer">
          <button @click="changeDisplayName" data-v-9d5716fa type="button" class="bit-button bit-button--default bit-button--medium is-round">
            <span>Confirm</span>
          </button>
        </span>
        </div>
      </div>
    </div>

    <!--Shipping address-->
    <div v-if="displayAddressShow" data-v-2f3eda9e class="bit-dialog__wrapper is-centered is-responsive" style="z-index: 2003;">
      <div role="dialog" aria-modal="true" aria-label="Shipping address" class="bit-dialog" style="margin-top: 15vh; width: 480px;">
        <div class="bit-dialog__header"><span class="bit-dialog__title">Shipping address</span>
          <button @click="displayAddressShow = false" type="button" aria-label="Close" class="bit-dialog__headerbtn">
            <i class="bit-icon" style="font-size: 20px;">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M19.28 18.22a.75.75 0 01-.817 1.223.75.75 0 01-.244-.162L12 13.06l-6.22 6.22a.75.75 0 01-1.06-1.062L10.94 12 4.72 5.78a.75.75 0 111.06-1.06L12 10.94l6.22-6.22a.75.75 0 011.06 1.06L13.06 12l6.22 6.22z"></path>
              </svg>
            </i>
          </button>
        </div>
        <div class="bit-dialog__body">
          <div data-v-6ee4dd1e class="edit-shipping-address" value="[object Object]">
            <div data-v-6ee4dd1e class="pt-3px pb-12px">
              <div data-v-6ee4dd1e class="text-12px leading-17px flex items-center" style="color: rgb(146, 152, 153);">
                This address will only be used for merch and product delivery. Please fill in your details fully and accurately.
              </div>
            </div>
            <form data-v-6ee4dd1e class="bit-form bit-form--label-top">
              <div data-v-6ee4dd1e class="bit-form-item is-success is-required">
                <label for="userName" class="bit-form-item__label">Recipient</label>
                <div class="bit-form-item__content">
                  <div data-v-6ee4dd1e class="edit-shipping-address__input bit-textarea bit-input--medium bit-input--round">
                    <textarea v-model="address.recipient" autocomplete="off" autofocus="autofocus" maxlength="25" class="bit-textarea__inner" style="min-height: 46px; height: 46px;"></textarea><span class="bit-input__count">15 / 25</span>
                  </div>
                  <div class="bit-form-item__extra"></div>
                </div>
              </div>
              <div data-v-6ee4dd1e class="bit-form-item is-required">
                <label for="address" class="bit-form-item__label">Shipping address</label>
                <div class="bit-form-item__content">
                  <div data-v-6ee4dd1e class="bit-textarea bit-input--medium bit-input--round">
                    <textarea v-model="address.shippingaddress" autocomplete="off" maxlength="120" placeholder="Provide your full address, including your city, street, residential area, and door number." class="bit-textarea__inner" style="min-height: 126px; height: 126px;"></textarea><span class="bit-input__count">0 / 120</span>
                  </div>
                  <div class="bit-form-item__extra"></div>
                </div>
              </div>
              <div data-v-6ee4dd1e class="bit-form-item">
                <label for="remark" class="bit-form-item__label">Note</label>
                <div class="bit-form-item__content">
                  <div data-v-6ee4dd1e class="bit-textarea bit-input--medium bit-input--round">
                    <textarea v-model="address.note" autocomplete="off" maxlength="120"
          :placeholder="address.note || 'Provide your details so that delivery personnel can get in touch with you.'"
          class="bit-textarea__inner" style="min-height: 126px; height: 126px;"></textarea>
<span class="bit-input__count">{{ address.note.length }} / 120</span>
</div>
                  <div class="bit-form-item__extra"></div>
                </div>
              </div>
            </form>
            <div data-v-6ee4dd1e class="text-12px text-thirdText leading-17px -mt-6px -mb-2px">
              Privacy notice: Your address is confidential and will solely be used for the delivery of goods. We won't share your personal details with any unrelated third parties or organizations.
            </div>
          </div>
        </div>
        <div class="bit-dialog__footer">
          <div class="flex mt-4px">
            <button @click="displayAddressShow = false" type="button" class="bit-button flex-1 bit-button--default bit-button--medium is-round">
              <span>
                Cancel
              </span>
            </button>
            <button @click="saveAddress" type="button" class="bit-button flex-1 bit-button--main bit-button--medium is-round">
              <span>
                Save
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div v-if="isShowAlertError" role="alert" class="bit-message bit-message--error" style="top: 100px; z-index: 9999;">
      <i class="bit-icon bit-message__icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2.25A9.75 9.75 0 1021.75 12 9.76 9.76 0 0012 2.25zm3.53 12.22a.75.75 0 11-1.06 1.06L12 13.06l-2.47 2.47a.75.75 0 11-1.06-1.06L10.94 12 8.47 9.53a.75.75 0 011.06-1.06L12 10.94l2.47-2.47a.751.751 0 011.06 1.06L13.06 12l2.47 2.47z"></path>
        </svg>
      </i>
      <p class="bit-message__content">
        {{ alertMsg }}
      </p>
    </div>

    <div v-if="isShowAlertSuccess" role="alert" class="bit-message bit-message--success" style="top: 100px; z-index: 2021;">
      <i class="bit-icon bit-message__icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2.25A9.75 9.75 0 1021.75 12 9.76 9.76 0 0012 2.25zm4.28 8.03l-5.25 5.25a.747.747 0 01-1.06 0l-2.25-2.25a.75.75 0 111.06-1.06l1.72 1.72 4.72-4.72a.751.751 0 011.06 1.06z"></path>
        </svg>
      </i>
      <p class="bit-message__content">
        {{ alertMsg }}
      </p>
    </div>

    <!-- <p class="bit-message__content">Saved. Under review</p> -->
    <HzFooter></HzFooter>
  </div>


</template>

<script>
import axios from "axios";
import LeftDash from "@/components/LeftDash.vue"; // 引入头部组件
export default {
  components: {
    LeftDash, // 注册头部组件
  },
  data() {
    return {
      token: '',
      displayName: '',
      userEmail: '',
      createdTime:'',
      displayAddressShow: false,
      displayNameShow: false,
      isShowAlertError: false,
      isShowAlertSuccess: false,
      alertMsg: '',
      isDisplayNameDialogVisible: false, // 控制显示名称对话框的可见性
      isUsernameDialogVisible: false, // 控制用户名对话框的可见性
      isDialogOpen: true, // 控制对话框的可见性
      address: {
        recipient: '',
        shippingaddress: '',
        note: ''
      }
    };
  },
  created() {
    this.token = localStorage.getItem("token")
    this.userEmail = localStorage.getItem("user_email")
    this.displayName = localStorage.getItem("user_name")
    this.createdTime = localStorage.getItem("created_at")
  },
  methods: {
    async saveAddress() {
      const res = await axios.post(this.$host + 'api/upaddress', {
        recipient: this.address.recipient,
        shippingaddress: this.address.shippingaddress,
        note: this.address.note
      }, {headers: {Authorization: 'Bearer ' + this.token}});
      if (res.data.code === 200) {
        this.alertMsgFn(1, 'save address successful')
        this.displayAddressShow = false
      } else {
        this.alertMsgFn(2, 'save address fail')
      }
    },
    async changeDisplayName() {
      if (!this.displayName) {
        this.alertError('Enter your display name')
        return
      }

      const res = await axios.post(this.$host + 'api/upname', {
        user_name: this.displayName,
      }, {headers: {Authorization: 'Bearer ' + this.token}});
      if (res.data.code === 200) {
        this.alertMsgFn(1, 'change display name successful')
      } else {
        this.alertMsgFn(2, 'change display name successful fail')
      }
    },

    // type 1:成功 2:失败
    alertMsgFn (type, msg) {
      if (type === 1) {
        this.isShowAlertSuccess = true
      } else {
        this.isShowAlertError = true
      }
      this.alertMsg = msg
      this.timer = setTimeout(() => {
        this.isShowAlertError = false
        this.isShowAlertSuccess = false
        this.alertMsg = ''
      }, 5000)
    },
     formatDate(datetime) {
    const date = new Date(datetime);
    const formattedDate = date.toISOString().split('.')[0].replace('T', ' ');;
    return formattedDate
  },

    toggleDisplayNameDialog() {
      this.isDisplayNameDialogVisible = !this.isDisplayNameDialogVisible; // 切换显示名称对话框的显示状态
    },
    closeDisplayNameDialog() {
      this.isDisplayNameDialogVisible = false; // 关闭显示名称对话框
    },
    toggleUsernameDialog() {
      this.isUsernameDialogVisible = !this.isUsernameDialogVisible; // 切换用户名对话框的显示状态
    },
    closeUsernameDialog() {
      this.isUsernameDialogVisible = false; // 关闭用户名对话框
    },
  }
};
</script>

<style scoped>
.personal-main-box {
  width: 83%;
  padding: 24px 40px 80px !important;
}

.personal-container {
  display: flex;
}

@media screen and (max-width: 575px) {
  .submenu {
    display: none;
  }

  .personal-main-box[data-v-ced23842] {
    width: 100%;
    padding: 24px 20px 80px !important;
  }
}

[dir] .-mt-6px {
  margin-top: 2px;
}

[dir] [data-v-9d5716fa] .bit-button {
  color: white;
  background-color: var(--background-inverse-primary) !important;
}
</style>