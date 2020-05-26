
import React from 'react'
import { storiesOf } from '@storybook/react'
import TweetSaverTemplate from '.'

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}

storiesOf('Templates|GloboRelay', module)
  .add('Default State', () => (
    <TweetSaverTemplate
      drop={drop}
      drag={drag}
      allowDrop={allowDrop}
      label={"Tweet Saver"}
      tweets={tweets}
      savedTweets={tweets}
      onEvent={e => {
        console.log(e)
        switch (true) {
          case e.type === "onDragStart":
            console.log("onDragStart", e.id)
            break;
          case e.type === "onDrop":
            console.log("onDrop")
            break;
          case e.event === "onKeyUp" && e.origin === "Input":
            console.log("save keyword twitter", e.data.value)
            break;
          case e.event === "onKeyUpAction" && e.origin === "Input":
            console.log("search for twitter", e.data.value)
            break;
        }
      }}
    />
  ))
  .add('Page Loading', () => (
    <TweetSaverTemplate
      drop={drop}
      drag={drag}
      allowDrop={allowDrop}
      label={"Tweet Saver"}
      loading
      tweets={tweets}
      savedTweets={tweets}
      onEvent={e => {
        console.log(e)
        switch (true) {
          case e.type === "onDragStart":
            console.log("onDragStart", e.id)
            break;
          case e.type === "onDrop":
            console.log("onDrop")
            break;
          case e.event === "onKeyUp" && e.origin === "Input":
            console.log("save keyword twitter", e.data.value)
            break;
          case e.event === "onKeyUpAction" && e.origin === "Input":
            console.log("search for twitter", e.data.value)
            break;
        }
      }}
    />
  ))
  .add('Page Pre-Loading', () => (
    <TweetSaverTemplate
      drop={drop}
      drag={drag}
      allowDrop={allowDrop}
      label={"Tweet Saver"}
      preloading
      tweets={tweets}
      savedTweets={tweets}
      onEvent={e => {
        console.log(e)
        switch (true) {
          case e.type === "onDragStart":
            console.log("onDragStart", e.id)
            break;
          case e.type === "onDrop":
            console.log("onDrop")
            break;
          case e.type === "onClick" && e.origin === "Button":
            console.log("search for twitter")
            break;
          case e.event === "onKeyUp" && e.origin === "Input":
            console.log("save keyword twitter", e.data.value)
            break;
          case e.event === "onKeyUpAction" && e.origin === "Input":
            console.log("search for twitter", e.data.value)
            break;
        }
      }}
    />
  ))
  .add('Tweets Not Foud', () => (
    <TweetSaverTemplate
      drop={drop}
      drag={drag}
      allowDrop={allowDrop}
      label={"Tweet Saver"}
      tweets={[]}
      savedTweets={[]}
      onEvent={e => {
        console.log(e)
        switch (true) {
          case e.type === "onDragStart":
            console.log("onDragStart", e.id)
            break;
          case e.type === "onDrop":
            console.log("onDrop")
            break;
          case e.event === "onKeyUp" && e.origin === "Input":
            console.log("save keyword", e.data.value)
            break;
          case e.event === "onKeyUpAction" && e.origin === "Input":
            console.log("search for twitter", e.data.value)
            break;
        }
      }}
    />
  ))


const tweets = [{
  createdAt: 1590427013000,
  id: 1264968693932609500,
  idStr: "1264968693932609536",
  text: "RT @paulsperry_: BREAKING: Ex-Deputy FBI Director McCabe wrote that Clapper's staff asked FBI to look up transcripts they'd collected of Fl…",
  source: "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
  inReplyToStatusId: -1,
  inReplyToUserId: -1,
  inReplyToScreenName: null,
  geoLocation: null,
  place: null,
  retweetCount: 5556,
  retweetedStatus: {
  createdAt: 1590365424000,
  id: 1264710373153915000,
  idStr: "1264710373153914882",
  text: "BREAKING: Ex-Deputy FBI Director McCabe wrote that Clapper's staff asked FBI to look up transcripts they'd collecte… https://t.co/qZthlupbQH",
  source: "<a href=\"https://mobile.twitter.com\" rel=\"nofollow\">Twitter Web App</a>",
  inReplyToStatusId: -1,
  inReplyToUserId: -1,
  inReplyToScreenName: null,
  geoLocation: null,
  place: null,
  retweetCount: 5556,
  retweetedStatus: null,
  userMentionEntities: [ ],
  hashtagEntities: [ ],
  mediaEntities: [ ],
  currentUserRetweetId: -1,
  user: {
  id: 739610364975808500,
  idStr: "739610364975808513",
  name: "Paul Sperry",
  screenName: "paulsperry_",
  location: "Washington DC",
  description: "Former D.C. bureau chief for Investor's Business Daily, Hoover Institution media fellow, author of several books, including bestseller INFILTRATION",
  descriptionURLEntities: [ ],
  profileImageUrlHttps: "https://pbs.twimg.com/profile_images/739632272865951744/yVceRI-w_normal.jpg",
  url: "https://t.co/DAzkcJGVm8",
  followersCount: 219906,
  status: null,
  profileBackgroundColor: "F5F8FA",
  profileTextColor: "333333",
  profileLinkColor: "1DA1F2",
  profileSidebarFillColor: "DDEEF6",
  profileSidebarBorderColor: "C0DEED",
  profileUseBackgroundImage: true,
  showAllInlineMedia: false,
  friendsCount: 4833,
  createdAt: 1465171827000,
  favouritesCount: 4,
  utcOffset: -1,
  timeZone: null,
  profileBackgroundImageUrl: null,
  profileBackgroundImageUrlHttps: null,
  profileBackgroundTiled: false,
  lang: null,
  statusesCount: 15340,
  translator: false,
  listedCount: 1341,
  profileImageURL: "http://pbs.twimg.com/profile_images/739632272865951744/yVceRI-w_normal.jpg",
  contributorsEnabled: false,
  biggerProfileImageURL: "http://pbs.twimg.com/profile_images/739632272865951744/yVceRI-w_bigger.jpg",
  miniProfileImageURL: "http://pbs.twimg.com/profile_images/739632272865951744/yVceRI-w_mini.jpg",
  originalProfileImageURL: "http://pbs.twimg.com/profile_images/739632272865951744/yVceRI-w.jpg",
  profileImageURLHttps: "https://pbs.twimg.com/profile_images/739632272865951744/yVceRI-w_normal.jpg",
  biggerProfileImageURLHttps: "https://pbs.twimg.com/profile_images/739632272865951744/yVceRI-w_bigger.jpg",
  miniProfileImageURLHttps: "https://pbs.twimg.com/profile_images/739632272865951744/yVceRI-w_mini.jpg",
  originalProfileImageURLHttps: "https://pbs.twimg.com/profile_images/739632272865951744/yVceRI-w.jpg",
  geoEnabled: false,
  profileBackgroundImageURL: null,
  profileBannerURL: "https://pbs.twimg.com/profile_banners/739610364975808513/1465177180/web",
  profileBannerRetinaURL: "https://pbs.twimg.com/profile_banners/739610364975808513/1465177180/web_retina",
  profileBannerIPadURL: "https://pbs.twimg.com/profile_banners/739610364975808513/1465177180/ipad",
  profileBannerIPadRetinaURL: "https://pbs.twimg.com/profile_banners/739610364975808513/1465177180/ipad_retina",
  profileBannerMobileURL: "https://pbs.twimg.com/profile_banners/739610364975808513/1465177180/mobile",
  profileBannerMobileRetinaURL: "https://pbs.twimg.com/profile_banners/739610364975808513/1465177180/ipad_retina",
  verified: false,
  followRequestSent: false,
  urlentity: {
  start: 0,
  end: 23,
  url: "https://t.co/DAzkcJGVm8",
  expandedURL: "http://sperryfiles.com",
  displayURL: "sperryfiles.com"
  },
  protected: false,
  rateLimitStatus: null,
  accessLevel: 0
  },
  contributors: [ ],
  possiblySensitive: false,
  urlentities: [
  {
  start: 117,
  end: 140,
  url: "https://t.co/qZthlupbQH",
  expandedURL: "https://twitter.com/i/web/status/1264710373153914882",
  displayURL: "twitter.com/i/web/status/1…"
  }
  ],
  favorited: false,
  retweet: false,
  retweetedByMe: false,
  truncated: true,
  rateLimitStatus: null,
  accessLevel: 0
  },
  userMentionEntities: [
  {
  start: 3,
  end: 15,
  name: "Paul Sperry",
  screenName: "paulsperry_",
  id: 739610364975808500,
  idStr: "739610364975808513"
  }
  ],
  hashtagEntities: [ ],
  mediaEntities: [ ],
  currentUserRetweetId: -1,
  user: {
  id: 1115746958063235100,
  idStr: "1115746958063235072",
  name: "Debmorg",
  screenName: "Debmorg2",
  location: "Pennsylvania, USA",
  description: "happily married 35 yrs., 5 grandkids, animal lover, https://t.co/Fdxymr7gpA porn./no dates. #MAGA KAG #TRUMP 2020 No DM's",
  descriptionURLEntities: [
  {
  start: 52,
  end: 75,
  url: "https://t.co/Fdxymr7gpA",
  expandedURL: "http://ex-dem.No",
  displayURL: "ex-dem.No"
  }
  ],
  profileImageUrlHttps: "https://pbs.twimg.com/profile_images/1179776330218512385/-GNi5wIQ_normal.jpg",
  url: null,
  followersCount: 2201,
  status: null,
  profileBackgroundColor: "F5F8FA",
  profileTextColor: "333333",
  profileLinkColor: "1DA1F2",
  profileSidebarFillColor: "DDEEF6",
  profileSidebarBorderColor: "C0DEED",
  profileUseBackgroundImage: true,
  showAllInlineMedia: false,
  friendsCount: 2830,
  createdAt: 1554849779000,
  favouritesCount: 1421,
  utcOffset: -1,
  timeZone: null,
  profileBackgroundImageUrl: null,
  profileBackgroundImageUrlHttps: null,
  profileBackgroundTiled: false,
  lang: null,
  statusesCount: 21315,
  translator: false,
  listedCount: 1,
  profileImageURL: "http://pbs.twimg.com/profile_images/1179776330218512385/-GNi5wIQ_normal.jpg",
  contributorsEnabled: false,
  biggerProfileImageURL: "http://pbs.twimg.com/profile_images/1179776330218512385/-GNi5wIQ_bigger.jpg",
  miniProfileImageURL: "http://pbs.twimg.com/profile_images/1179776330218512385/-GNi5wIQ_mini.jpg",
  originalProfileImageURL: "http://pbs.twimg.com/profile_images/1179776330218512385/-GNi5wIQ.jpg",
  profileImageURLHttps: "https://pbs.twimg.com/profile_images/1179776330218512385/-GNi5wIQ_normal.jpg",
  biggerProfileImageURLHttps: "https://pbs.twimg.com/profile_images/1179776330218512385/-GNi5wIQ_bigger.jpg",
  miniProfileImageURLHttps: "https://pbs.twimg.com/profile_images/1179776330218512385/-GNi5wIQ_mini.jpg",
  originalProfileImageURLHttps: "https://pbs.twimg.com/profile_images/1179776330218512385/-GNi5wIQ.jpg",
  geoEnabled: false,
  profileBackgroundImageURL: null,
  profileBannerURL: "https://pbs.twimg.com/profile_banners/1115746958063235072/1570115542/web",
  profileBannerRetinaURL: "https://pbs.twimg.com/profile_banners/1115746958063235072/1570115542/web_retina",
  profileBannerIPadURL: "https://pbs.twimg.com/profile_banners/1115746958063235072/1570115542/ipad",
  profileBannerIPadRetinaURL: "https://pbs.twimg.com/profile_banners/1115746958063235072/1570115542/ipad_retina",
  profileBannerMobileURL: "https://pbs.twimg.com/profile_banners/1115746958063235072/1570115542/mobile",
  profileBannerMobileRetinaURL: "https://pbs.twimg.com/profile_banners/1115746958063235072/1570115542/ipad_retina",
  verified: false,
  followRequestSent: false,
  urlentity: {
  start: 0,
  end: 0,
  url: "",
  expandedURL: "",
  displayURL: ""
  },
  protected: false,
  rateLimitStatus: null,
  accessLevel: 0
  },
  contributors: [ ],
  possiblySensitive: false,
  urlentities: [ ],
  favorited: false,
  retweet: true,
  retweetedByMe: false,
  truncated: false,
  rateLimitStatus: null,
  accessLevel: 0
  },{
    createdAt: 1590427013000,
    id: 1264968693676675000,
    idStr: "1264968693676675073",
    text: "@aarthmm @erikmouthaanRTL Gives us the full chart for Obama please",
    source: "<a href=\"https://mobile.twitter.com\" rel=\"nofollow\">Twitter Web App</a>",
    inReplyToStatusId: 1264963943434518500,
    inReplyToUserId: 966605495246245900,
    inReplyToScreenName: "aarthmm",
    geoLocation: null,
    place: null,
    retweetCount: 0,
    retweetedStatus: null,
    userMentionEntities: [
    {
    start: 0,
    end: 8,
    name: "Aart",
    screenName: "aarthmm",
    id: 966605495246245900,
    idStr: "966605495246245889"
    },
    {
    start: 9,
    end: 25,
    name: "Erik Mouthaan",
    screenName: "erikmouthaanRTL",
    id: 9130642,
    idStr: "9130642"
    }
    ],
    hashtagEntities: [ ],
    mediaEntities: [ ],
    currentUserRetweetId: -1,
    user: {
    id: 1638454530,
    idStr: "1638454530",
    name: "OldAmsterdam",
    screenName: "AmsterdamJeff",
    location: "",
    description: "",
    descriptionURLEntities: [ ],
    profileImageUrlHttps: "https://pbs.twimg.com/profile_images/1239900736001097732/cKdVeYFF_normal.jpg",
    url: null,
    followersCount: 47,
    status: null,
    profileBackgroundColor: "C0DEED",
    profileTextColor: "333333",
    profileLinkColor: "1DA1F2",
    profileSidebarFillColor: "DDEEF6",
    profileSidebarBorderColor: "C0DEED",
    profileUseBackgroundImage: true,
    showAllInlineMedia: false,
    friendsCount: 125,
    createdAt: 1375378851000,
    favouritesCount: 781,
    utcOffset: -1,
    timeZone: null,
    profileBackgroundImageUrl: "http://abs.twimg.com/images/themes/theme1/bg.png",
    profileBackgroundImageUrlHttps: "https://abs.twimg.com/images/themes/theme1/bg.png",
    profileBackgroundTiled: false,
    lang: null,
    statusesCount: 424,
    translator: false,
    listedCount: 0,
    profileImageURL: "http://pbs.twimg.com/profile_images/1239900736001097732/cKdVeYFF_normal.jpg",
    contributorsEnabled: false,
    biggerProfileImageURL: "http://pbs.twimg.com/profile_images/1239900736001097732/cKdVeYFF_bigger.jpg",
    miniProfileImageURL: "http://pbs.twimg.com/profile_images/1239900736001097732/cKdVeYFF_mini.jpg",
    originalProfileImageURL: "http://pbs.twimg.com/profile_images/1239900736001097732/cKdVeYFF.jpg",
    profileImageURLHttps: "https://pbs.twimg.com/profile_images/1239900736001097732/cKdVeYFF_normal.jpg",
    biggerProfileImageURLHttps: "https://pbs.twimg.com/profile_images/1239900736001097732/cKdVeYFF_bigger.jpg",
    miniProfileImageURLHttps: "https://pbs.twimg.com/profile_images/1239900736001097732/cKdVeYFF_mini.jpg",
    originalProfileImageURLHttps: "https://pbs.twimg.com/profile_images/1239900736001097732/cKdVeYFF.jpg",
    geoEnabled: false,
    profileBackgroundImageURL: "http://abs.twimg.com/images/themes/theme1/bg.png",
    profileBannerURL: null,
    profileBannerRetinaURL: null,
    profileBannerIPadURL: null,
    profileBannerIPadRetinaURL: null,
    profileBannerMobileURL: null,
    profileBannerMobileRetinaURL: null,
    verified: false,
    followRequestSent: false,
    urlentity: {
    start: 0,
    end: 0,
    url: "",
    expandedURL: "",
    displayURL: ""
    },
    protected: false,
    rateLimitStatus: null,
    accessLevel: 0
    },
    contributors: [ ],
    possiblySensitive: false,
    urlentities: [ ],
    favorited: false,
    retweet: false,
    retweetedByMe: false,
    truncated: false,
    rateLimitStatus: null,
    accessLevel: 0
    },{
      createdAt: 1590427012000,
      id: 1264968692229525500,
      idStr: "1264968692229525504",
      text: "RT @AnnCoulter: Trump punted on his promise to end Obama's unconstitutional amnesty for \"Dreamers.\" AG Jeff Sessions ended it. Supreme C…",
      source: "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
      inReplyToStatusId: -1,
      inReplyToUserId: -1,
      inReplyToScreenName: null,
      geoLocation: null,
      place: null,
      retweetCount: 48,
      retweetedStatus: {
      createdAt: 1590425859000,
      id: 1264963856302039000,
      idStr: "1264963856302039041",
      text: "Trump punted on his promise to end Obama's unconstitutional amnesty for \"Dreamers.\" AG Jeff Sessions ended it. S… https://t.co/6UGTMrjgJd",
      source: "<a href=\"https://mobile.twitter.com\" rel=\"nofollow\">Twitter Web App</a>",
      inReplyToStatusId: -1,
      inReplyToUserId: -1,
      inReplyToScreenName: null,
      geoLocation: null,
      place: null,
      retweetCount: 48,
      retweetedStatus: null,
      userMentionEntities: [ ],
      hashtagEntities: [ ],
      mediaEntities: [ ],
      currentUserRetweetId: -1,
      user: {
      id: 196168350,
      idStr: "196168350",
      name: "Ann Coulter",
      screenName: "AnnCoulter",
      location: "Los Angeles/NYC",
      description: "Author.",
      descriptionURLEntities: [ ],
      profileImageUrlHttps: "https://pbs.twimg.com/profile_images/598204767739981825/iD1DZBbS_normal.jpg",
      url: "https://t.co/w8Jbizj7j1",
      followersCount: 2252139,
      status: null,
      profileBackgroundColor: "000000",
      profileTextColor: "000000",
      profileLinkColor: "F5ABB5",
      profileSidebarFillColor: "000000",
      profileSidebarBorderColor: "000000",
      profileUseBackgroundImage: false,
      showAllInlineMedia: false,
      friendsCount: 1191,
      createdAt: 1285682691000,
      favouritesCount: 21,
      utcOffset: -1,
      timeZone: null,
      profileBackgroundImageUrl: "http://abs.twimg.com/images/themes/theme1/bg.png",
      profileBackgroundImageUrlHttps: "https://abs.twimg.com/images/themes/theme1/bg.png",
      profileBackgroundTiled: false,
      lang: null,
      statusesCount: 50131,
      translator: false,
      listedCount: 12281,
      profileImageURL: "http://pbs.twimg.com/profile_images/598204767739981825/iD1DZBbS_normal.jpg",
      contributorsEnabled: false,
      biggerProfileImageURL: "http://pbs.twimg.com/profile_images/598204767739981825/iD1DZBbS_bigger.jpg",
      miniProfileImageURL: "http://pbs.twimg.com/profile_images/598204767739981825/iD1DZBbS_mini.jpg",
      originalProfileImageURL: "http://pbs.twimg.com/profile_images/598204767739981825/iD1DZBbS.jpg",
      profileImageURLHttps: "https://pbs.twimg.com/profile_images/598204767739981825/iD1DZBbS_normal.jpg",
      biggerProfileImageURLHttps: "https://pbs.twimg.com/profile_images/598204767739981825/iD1DZBbS_bigger.jpg",
      miniProfileImageURLHttps: "https://pbs.twimg.com/profile_images/598204767739981825/iD1DZBbS_mini.jpg",
      originalProfileImageURLHttps: "https://pbs.twimg.com/profile_images/598204767739981825/iD1DZBbS.jpg",
      geoEnabled: false,
      profileBackgroundImageURL: "http://abs.twimg.com/images/themes/theme1/bg.png",
      profileBannerURL: "https://pbs.twimg.com/profile_banners/196168350/1534785019/web",
      profileBannerRetinaURL: "https://pbs.twimg.com/profile_banners/196168350/1534785019/web_retina",
      profileBannerIPadURL: "https://pbs.twimg.com/profile_banners/196168350/1534785019/ipad",
      profileBannerIPadRetinaURL: "https://pbs.twimg.com/profile_banners/196168350/1534785019/ipad_retina",
      profileBannerMobileURL: "https://pbs.twimg.com/profile_banners/196168350/1534785019/mobile",
      profileBannerMobileRetinaURL: "https://pbs.twimg.com/profile_banners/196168350/1534785019/ipad_retina",
      verified: true,
      followRequestSent: false,
      urlentity: {
      start: 0,
      end: 23,
      url: "https://t.co/w8Jbizj7j1",
      expandedURL: "http://www.anncoulter.com",
      displayURL: "anncoulter.com"
      },
      protected: false,
      rateLimitStatus: null,
      accessLevel: 0
      },
      contributors: [ ],
      possiblySensitive: false,
      urlentities: [
      {
      start: 117,
      end: 140,
      url: "https://t.co/6UGTMrjgJd",
      expandedURL: "https://twitter.com/i/web/status/1264963856302039041",
      displayURL: "twitter.com/i/web/status/1…"
      }
      ],
      favorited: false,
      retweet: false,
      retweetedByMe: false,
      truncated: true,
      rateLimitStatus: null,
      accessLevel: 0
      },
      userMentionEntities: [
      {
      start: 3,
      end: 14,
      name: "Ann Coulter",
      screenName: "AnnCoulter",
      id: 196168350,
      idStr: "196168350"
      }
      ],
      hashtagEntities: [ ],
      mediaEntities: [ ],
      currentUserRetweetId: -1,
      user: {
      id: 1110205199161806800,
      idStr: "1110205199161806849",
      name: "Brody",
      screenName: "mcfarland_brody",
      location: "United States",
      description: "Building generational wealth and conserving our American culture for my nuclear family.",
      descriptionURLEntities: [ ],
      profileImageUrlHttps: "https://pbs.twimg.com/profile_images/1248619383288545282/mygN67Bi_normal.jpg",
      url: null,
      followersCount: 250,
      status: null,
      profileBackgroundColor: "F5F8FA",
      profileTextColor: "333333",
      profileLinkColor: "1DA1F2",
      profileSidebarFillColor: "DDEEF6",
      profileSidebarBorderColor: "C0DEED",
      profileUseBackgroundImage: true,
      showAllInlineMedia: false,
      friendsCount: 294,
      createdAt: 1553528520000,
      favouritesCount: 23850,
      utcOffset: -1,
      timeZone: null,
      profileBackgroundImageUrl: null,
      profileBackgroundImageUrlHttps: null,
      profileBackgroundTiled: false,
      lang: null,
      statusesCount: 3929,
      translator: false,
      listedCount: 0,
      profileImageURL: "http://pbs.twimg.com/profile_images/1248619383288545282/mygN67Bi_normal.jpg",
      contributorsEnabled: false,
      biggerProfileImageURL: "http://pbs.twimg.com/profile_images/1248619383288545282/mygN67Bi_bigger.jpg",
      miniProfileImageURL: "http://pbs.twimg.com/profile_images/1248619383288545282/mygN67Bi_mini.jpg",
      originalProfileImageURL: "http://pbs.twimg.com/profile_images/1248619383288545282/mygN67Bi.jpg",
      profileImageURLHttps: "https://pbs.twimg.com/profile_images/1248619383288545282/mygN67Bi_normal.jpg",
      biggerProfileImageURLHttps: "https://pbs.twimg.com/profile_images/1248619383288545282/mygN67Bi_bigger.jpg",
      miniProfileImageURLHttps: "https://pbs.twimg.com/profile_images/1248619383288545282/mygN67Bi_mini.jpg",
      originalProfileImageURLHttps: "https://pbs.twimg.com/profile_images/1248619383288545282/mygN67Bi.jpg",
      geoEnabled: false,
      profileBackgroundImageURL: null,
      profileBannerURL: "https://pbs.twimg.com/profile_banners/1110205199161806849/1586096721/web",
      profileBannerRetinaURL: "https://pbs.twimg.com/profile_banners/1110205199161806849/1586096721/web_retina",
      profileBannerIPadURL: "https://pbs.twimg.com/profile_banners/1110205199161806849/1586096721/ipad",
      profileBannerIPadRetinaURL: "https://pbs.twimg.com/profile_banners/1110205199161806849/1586096721/ipad_retina",
      profileBannerMobileURL: "https://pbs.twimg.com/profile_banners/1110205199161806849/1586096721/mobile",
      profileBannerMobileRetinaURL: "https://pbs.twimg.com/profile_banners/1110205199161806849/1586096721/ipad_retina",
      verified: false,
      followRequestSent: false,
      urlentity: {
      start: 0,
      end: 0,
      url: "",
      expandedURL: "",
      displayURL: ""
      },
      protected: false,
      rateLimitStatus: null,
      accessLevel: 0
      },
      contributors: [ ],
      possiblySensitive: false,
      urlentities: [ ],
      favorited: false,
      retweet: true,
      retweetedByMe: false,
      truncated: false,
      rateLimitStatus: null,
      accessLevel: 0
      },]