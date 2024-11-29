import React, { useState, useEffect } from 'react';
import './feed.css';
import { FeedCard } from '../LandingComponents/FeedCard';
import { processTweetBatch } from '../../src/api';
import { socketStore } from '../../src/store/socketStore';

export function FeedMain() {
  /*
    const [data, setData] = useState([
      {
        "id": "1860118363957264583",
        "createdAt": "Sat Nov 23 00:29:11 +0000 2024",
        "tweetBy": {
          "id": "1729579022",
          "userName": "yyctransport",
          "fullName": "YYC Transportation",
          "createdAt": "Wed Sep 04 18:41:05 +0000 2013",
          "description": "City of Calgary Transportation news to keep you on the move. We don’t monitor 24/7 but we do our best to reply ASAP. For transit news, see @calgarytransit.",
          "isVerified": true,
          "likeCount": 956,
          "followersCount": 62446,
          "followingsCount": 84,
          "statusesCount": 149111,
          "location": "Calgary, Alberta, Canada",
          "profileBanner": "https://pbs.twimg.com/profile_banners/1729579022/1443807346",
          "profileImage": "https://pbs.twimg.com/profile_images/790638410327216130/97MLYdIa_normal.jpg"
        },
        "entities": {
          "hashtags": [
            "yyctraffic",
            "yycroads"
          ],
          "mentionedUsers": [],
          "urls": []
        },
        "fullText": "ALERT: Traffic incident on 53 St and 146 Ave SW. Expect delays in the area. #yyctraffic #yycroads",
        "lang": "en",
        "quoteCount": 0,
        "replyCount": 0,
        "retweetCount": 0,
        "likeCount": 0,
        "viewCount": 257,
        "bookmarkCount": 0,
        "localDate": "Nov 22, 2024",
        "localTime": "5:29 p.m.",
        "profilePic": "https://pbs.twimg.com/profile_images/790638410327216130/97MLYdIa.jpg",
        "address": "53 Street and 146 Avenue SW",
        "location": {
          "lat": 40.7642313,
          "lng": -73.9848782,
          "formattedAddress": "W 53rd St, New York, NY 10019, USA"
        }
      },
      {
        "id": "1860113609428488220",
        "createdAt": "Sat Nov 23 00:10:18 +0000 2024",
        "tweetBy": {
          "id": "1729579022",
          "userName": "yyctransport",
          "fullName": "YYC Transportation",
          "createdAt": "Wed Sep 04 18:41:05 +0000 2013",
          "description": "City of Calgary Transportation news to keep you on the move. We don’t monitor 24/7 but we do our best to reply ASAP. For transit news, see @calgarytransit.",
          "isVerified": true,
          "likeCount": 956,
          "followersCount": 62446,
          "followingsCount": 84,
          "statusesCount": 149111,
          "location": "Calgary, Alberta, Canada",
          "profileBanner": "https://pbs.twimg.com/profile_banners/1729579022/1443807346",
          "profileImage": "https://pbs.twimg.com/profile_images/790638410327216130/97MLYdIa_normal.jpg"
        },
        "entities": {
          "hashtags": [
            "yyctraffic",
            "yycroads"
          ],
          "mentionedUsers": [],
          "urls": []
        },
        "media": [
          {
            "url": "https://pbs.twimg.com/media/GdBzeHbaEAAgsZO.jpg",
            "type": "photo"
          }
        ],
        "fullText": "ALERT: Traffic incident on SB Shawville Bv at Shawville Ga SE, blocking the right lane.  #yyctraffic #yycroads https://t.co/1yZcQSfAzq",
        "lang": "en",
        "quoteCount": 0,
        "replyCount": 0,
        "retweetCount": 0,
        "likeCount": 0,
        "viewCount": 568,
        "bookmarkCount": 0,
        "localDate": "Nov 22, 2024",
        "localTime": "5:10 p.m.",
        "profilePic": "https://pbs.twimg.com/profile_images/790638410327216130/97MLYdIa.jpg",
        "address": "Shawville Boulevard SE and Shawville Gate SE, Calgary, AB",
        "location": {
          "lat": 50.89949730000001,
          "lng": -114.0632986,
          "formattedAddress": "Shawville Blvd SE & Shawville Gate SE, Calgary, AB T2Y 3S4, Canada"
        }
      },
      {
        "id": "1860104783958540527",
        "createdAt": "Fri Nov 22 23:35:14 +0000 2024",
        "tweetBy": {
          "id": "1729579022",
          "userName": "yyctransport",
          "fullName": "YYC Transportation",
          "createdAt": "Wed Sep 04 18:41:05 +0000 2013",
          "description": "City of Calgary Transportation news to keep you on the move. We don’t monitor 24/7 but we do our best to reply ASAP. For transit news, see @calgarytransit.",
          "isVerified": true,
          "likeCount": 956,
          "followersCount": 62446,
          "followingsCount": 84,
          "statusesCount": 149111,
          "location": "Calgary, Alberta, Canada",
          "profileBanner": "https://pbs.twimg.com/profile_banners/1729579022/1443807346",
          "profileImage": "https://pbs.twimg.com/profile_images/790638410327216130/97MLYdIa_normal.jpg"
        },
        "entities": {
          "hashtags": [
            "yyctraffic",
            "yycroads"
          ],
          "mentionedUsers": [],
          "urls": []
        },
        "media": [
          {
            "url": "https://pbs.twimg.com/media/GdBrcbEaYAAyNdz.jpg",
            "type": "photo"
          }
        ],
        "fullText": "ALERT: Traffic incident on Macleod Tr and 210 Ave SE, blocking multiple lanes in the intersection. Expect delays in the area. #yyctraffic #yycroads https://t.co/k0G5x2mcEl",
        "lang": "en",
        "quoteCount": 0,
        "replyCount": 0,
        "retweetCount": 0,
        "likeCount": 3,
        "viewCount": 963,
        "bookmarkCount": 0,
        "localDate": "Nov 22, 2024",
        "localTime": "4:35 p.m.",
        "profilePic": "https://pbs.twimg.com/profile_images/790638410327216130/97MLYdIa.jpg",
        "address": "Macleod Trail and 210 Avenue SE",
        "location": {
          "lat": 50.86656379999999,
          "lng": -114.0377507,
          "formattedAddress": "Macleod Trail & 210 Ave SE, Calgary, AB T0L 0X0, Canada"
        }
      },
      {
        "id": "1860104473030303927",
        "createdAt": "Fri Nov 22 23:34:00 +0000 2024",
        "tweetBy": {
          "id": "621195039",
          "userName": "511Alberta",
          "fullName": "511 Alberta",
          "createdAt": "Thu Jun 28 16:19:22 +0000 2012",
          "description": "Alberta's Official Road Report. Get up-to-date highway conditions and safety information 24/7. Message us, call 511, or download our app to Know Before You Go.",
          "isVerified": false,
          "likeCount": 179,
          "followersCount": 136434,
          "followingsCount": 234,
          "statusesCount": 95854,
          "location": "Alberta, Canada",
          "profileBanner": "https://pbs.twimg.com/profile_banners/621195039/1612300775",
          "profileImage": "https://pbs.twimg.com/profile_images/877990434001350656/xvJh1oCh_normal.jpg"
        },
        "entities": {
          "hashtags": [
            "ABRoads",
            "yyctraffic"
          ],
          "mentionedUsers": [],
          "urls": []
        },
        "fullText": "SB Stoney Tr approaching 96 Ave NE, Calgary - MVC blocking the LHL. Keep right. (4:33pm) #ABRoads #yyctraffic",
        "lang": "en",
        "quoteCount": 0,
        "replyCount": 0,
        "retweetCount": 0,
        "likeCount": 1,
        "viewCount": 1553,
        "bookmarkCount": 0,
        "localDate": "Nov 22, 2024",
        "localTime": "4:34 p.m.",
        "profilePic": "https://pbs.twimg.com/profile_images/877990434001350656/xvJh1oCh.jpg",
        "address": "Stoney Trail and 96 Avenue NE, Calgary, AB",
        "location": {
          "lat": 51.1397144,
          "lng": -114.0022054,
          "formattedAddress": "96 Ave NE, Calgary, AB, Canada"
        }
      },
      {
        "id": "1860103684233003349",
        "createdAt": "Fri Nov 22 23:30:52 +0000 2024",
        "tweetBy": {
          "id": "1729579022",
          "userName": "yyctransport",
          "fullName": "YYC Transportation",
          "createdAt": "Wed Sep 04 18:41:05 +0000 2013",
          "description": "City of Calgary Transportation news to keep you on the move. We don’t monitor 24/7 but we do our best to reply ASAP. For transit news, see @calgarytransit.",
          "isVerified": true,
          "likeCount": 956,
          "followersCount": 62446,
          "followingsCount": 84,
          "statusesCount": 149111,
          "location": "Calgary, Alberta, Canada",
          "profileBanner": "https://pbs.twimg.com/profile_banners/1729579022/1443807346",
          "profileImage": "https://pbs.twimg.com/profile_images/790638410327216130/97MLYdIa_normal.jpg"
        },
        "entities": {
          "hashtags": [
            "yyctraffic",
            "yycroads"
          ],
          "mentionedUsers": [],
          "urls": []
        },
        "media": [
          {
            "url": "https://pbs.twimg.com/media/GdBqcbpagAQeTNY.jpg",
            "type": "photo"
          }
        ],
        "fullText": "ALERT: Traffic incident on SB Stoney Tr approaching 96 Ave NE, blocking the left lane. Expect delays in the area. #yyctraffic #yycroads https://t.co/Wehtwg2yzo",
        "lang": "en",
        "quoteCount": 0,
        "replyCount": 1,
        "retweetCount": 0,
        "likeCount": 2,
        "viewCount": 965,
        "bookmarkCount": 0,
        "localDate": "Nov 22, 2024",
        "localTime": "4:30 p.m.",
        "profilePic": "https://pbs.twimg.com/profile_images/790638410327216130/97MLYdIa.jpg",
        "address": "SB Stoney Trail approaching 96 Ave NE",
        "location": {
          "lat": 51.1397144,
          "lng": -114.0022054,
          "formattedAddress": "96 Ave NE, Calgary, AB, Canada"
        }
      },
      {
        "id": "1860100785041997997",
        "createdAt": "Fri Nov 22 23:19:20 +0000 2024",
        "tweetBy": {
          "id": "1729579022",
          "userName": "yyctransport",
          "fullName": "YYC Transportation",
          "createdAt": "Wed Sep 04 18:41:05 +0000 2013",
          "description": "City of Calgary Transportation news to keep you on the move. We don’t monitor 24/7 but we do our best to reply ASAP. For transit news, see @calgarytransit.",
          "isVerified": true,
          "likeCount": 956,
          "followersCount": 62446,
          "followingsCount": 84,
          "statusesCount": 149111,
          "location": "Calgary, Alberta, Canada",
          "profileBanner": "https://pbs.twimg.com/profile_banners/1729579022/1443807346",
          "profileImage": "https://pbs.twimg.com/profile_images/790638410327216130/97MLYdIa_normal.jpg"
        },
        "entities": {
          "hashtags": [
            "yyctraffic",
            "yycroads"
          ],
          "mentionedUsers": [],
          "urls": []
        },
        "media": [
          {
            "url": "https://pbs.twimg.com/media/GdBnzp-agAARjHT.jpg",
            "type": "photo"
          }
        ],
        "fullText": "ALERT: Traffic incident on 84 St and Peigan Tr SE.  #yyctraffic #yycroads https://t.co/oPLAGGDVbR",
        "lang": "en",
        "quoteCount": 0,
        "replyCount": 0,
        "retweetCount": 0,
        "likeCount": 0,
        "viewCount": 746,
        "bookmarkCount": 0,
        "localDate": "Nov 22, 2024",
        "localTime": "4:19 p.m.",
        "profilePic": "https://pbs.twimg.com/profile_images/790638410327216130/97MLYdIa.jpg",
        "address": "84 Street and Peigan Trail SE",
        "location": {
          "lat": 51.0148582,
          "lng": -113.9458665,
          "formattedAddress": "Peigan Trail SE, Alberta, Canada"
        }
      },
      {
        "id": "1860099129721925737",
        "createdAt": "Fri Nov 22 23:12:46 +0000 2024",
        "tweetBy": {
          "id": "621195039",
          "userName": "511Alberta",
          "fullName": "511 Alberta",
          "createdAt": "Thu Jun 28 16:19:22 +0000 2012",
          "description": "Alberta's Official Road Report. Get up-to-date highway conditions and safety information 24/7. Message us, call 511, or download our app to Know Before You Go.",
          "isVerified": false,
          "likeCount": 179,
          "followersCount": 136434,
          "followingsCount": 234,
          "statusesCount": 95854,
          "location": "Alberta, Canada",
          "profileBanner": "https://pbs.twimg.com/profile_banners/621195039/1612300775",
          "profileImage": "https://pbs.twimg.com/profile_images/877990434001350656/xvJh1oCh_normal.jpg"
        },
        "entities": {
          "hashtags": [
            "ABRoads",
            "yyctraffic"
          ],
          "mentionedUsers": [],
          "urls": []
        },
        "fullText": "Stoney Tr near Glenmore Tr SE, Calgary - MVC. Expect delays in the area. (4:12pm) #ABRoads #yyctraffic",
        "lang": "en",
        "quoteCount": 1,
        "replyCount": 0,
        "retweetCount": 0,
        "likeCount": 0,
        "viewCount": 2421,
        "bookmarkCount": 0,
        "localDate": "Nov 22, 2024",
        "localTime": "4:12 p.m.",
        "profilePic": "https://pbs.twimg.com/profile_images/877990434001350656/xvJh1oCh.jpg",
        "address": "Stoney Trail near Glenmore Trail SE, Calgary, AB",
        "location": {
          "lat": 50.9794341,
          "lng": -113.9868839,
          "formattedAddress": "Glenmore Trail SE, Calgary, AB T2C, Canada"
        }
      },
      {
        "id": "1860096579048472673",
        "createdAt": "Fri Nov 22 23:02:38 +0000 2024",
        "tweetBy": {
          "id": "1729579022",
          "userName": "yyctransport",
          "fullName": "YYC Transportation",
          "createdAt": "Wed Sep 04 18:41:05 +0000 2013",
          "description": "City of Calgary Transportation news to keep you on the move. We don’t monitor 24/7 but we do our best to reply ASAP. For transit news, see @calgarytransit.",
          "isVerified": true,
          "likeCount": 956,
          "followersCount": 62446,
          "followingsCount": 84,
          "statusesCount": 149111,
          "location": "Calgary, Alberta, Canada",
          "profileBanner": "https://pbs.twimg.com/profile_banners/1729579022/1443807346",
          "profileImage": "https://pbs.twimg.com/profile_images/790638410327216130/97MLYdIa_normal.jpg"
        },
        "entities": {
          "hashtags": [
            "yyctraffic",
            "yycroads"
          ],
          "mentionedUsers": [],
          "urls": []
        },
        "media": [
          {
            "url": "https://pbs.twimg.com/media/GdBj-1IagAIxLSC.jpg",
            "type": "photo"
          }
        ],
        "fullText": "ALERT: Traffic incident on Crowchild Tr and Silver Springs Ga NW, blocking the EB to SB exit.   #yyctraffic #yycroads https://t.co/PdCLUkwCRW",
        "lang": "en",
        "quoteCount": 0,
        "replyCount": 2,
        "retweetCount": 0,
        "likeCount": 1,
        "viewCount": 1159,
        "bookmarkCount": 0,
        "localDate": "Nov 22, 2024",
        "localTime": "4:02 p.m.",
        "profilePic": "https://pbs.twimg.com/profile_images/790638410327216130/97MLYdIa.jpg",
        "address": "Crowchild Trail NW and Silver Springs Boulevard NW, Calgary, AB",
        "location": {
          "lat": 51.1088236,
          "lng": -114.1977158,
          "formattedAddress": "Silver Springs Blvd NW, Calgary, AB T3B, Canada"
        }
      },
      {
        "id": "1860079616305823852",
        "createdAt": "Fri Nov 22 21:55:13 +0000 2024",
        "tweetBy": {
          "id": "1729579022",
          "userName": "yyctransport",
          "fullName": "YYC Transportation",
          "createdAt": "Wed Sep 04 18:41:05 +0000 2013",
          "description": "City of Calgary Transportation news to keep you on the move. We don’t monitor 24/7 but we do our best to reply ASAP. For transit news, see @calgarytransit.",
          "isVerified": true,
          "likeCount": 956,
          "followersCount": 62446,
          "followingsCount": 84,
          "statusesCount": 149111,
          "location": "Calgary, Alberta, Canada",
          "profileBanner": "https://pbs.twimg.com/profile_banners/1729579022/1443807346",
          "profileImage": "https://pbs.twimg.com/profile_images/790638410327216130/97MLYdIa_normal.jpg"
        },
        "entities": {
          "hashtags": [
            "yyctraffic",
            "yycroads"
          ],
          "mentionedUsers": [],
          "urls": []
        },
        "media": [
          {
            "url": "https://pbs.twimg.com/media/GdBUjfxagAAuovY.jpg",
            "type": "photo"
          }
        ],
        "fullText": "ALERT: Traffic incident on 64 Ave and Deerfoot Tr NE, blocking the WB right lane.   #yyctraffic #yycroads https://t.co/du6Opab1lE",
        "lang": "en",
        "quoteCount": 0,
        "replyCount": 1,
        "retweetCount": 0,
        "likeCount": 1,
        "viewCount": 1053,
        "bookmarkCount": 0,
        "localDate": "Nov 22, 2024",
        "localTime": "2:55 p.m.",
        "profilePic": "https://pbs.twimg.com/profile_images/790638410327216130/97MLYdIa.jpg",
        "address": "64 Ave NE and Deerfoot Tr NE, Calgary, AB",
        "location": {
          "lat": 51.1161071,
          "lng": -114.0466074,
          "formattedAddress": "Deerfoot Trail NE, Calgary, AB, Canada"
        }
      },
      {
        "id": "1860075285116518834",
        "createdAt": "Fri Nov 22 21:38:01 +0000 2024",
        "tweetBy": {
          "id": "1729579022",
          "userName": "yyctransport",
          "fullName": "YYC Transportation",
          "createdAt": "Wed Sep 04 18:41:05 +0000 2013",
          "description": "City of Calgary Transportation news to keep you on the move. We don’t monitor 24/7 but we do our best to reply ASAP. For transit news, see @calgarytransit.",
          "isVerified": true,
          "likeCount": 956,
          "followersCount": 62446,
          "followingsCount": 84,
          "statusesCount": 149111,
          "location": "Calgary, Alberta, Canada",
          "profileBanner": "https://pbs.twimg.com/profile_banners/1729579022/1443807346",
          "profileImage": "https://pbs.twimg.com/profile_images/790638410327216130/97MLYdIa_normal.jpg"
        },
        "entities": {
          "hashtags": [
            "yyctraffic",
            "yycroads"
          ],
          "mentionedUsers": [],
          "urls": []
        },
        "fullText": "ALERT: Traffic incident on 4 St and 27 Ave NW. Expect delays in the area. #yyctraffic #yycroads",
        "lang": "en",
        "quoteCount": 0,
        "replyCount": 1,
        "retweetCount": 0,
        "likeCount": 0,
        "viewCount": 1453,
        "bookmarkCount": 0,
        "localDate": "Nov 22, 2024",
        "localTime": "2:38 p.m.",
        "profilePic": "https://pbs.twimg.com/profile_images/790638410327216130/97MLYdIa.jpg",
        "address": "4 St and 27 Ave NW",
        "location": {
          "lat": 51.0757144,
          "lng": -114.0991978,
          "formattedAddress": "27 Ave NW, Calgary, AB, Canada"
        }
      },
      {
        "id": "1860071872010031569",
        "createdAt": "Fri Nov 22 21:24:27 +0000 2024",
        "tweetBy": {
          "id": "1729579022",
          "userName": "yyctransport",
          "fullName": "YYC Transportation",
          "createdAt": "Wed Sep 04 18:41:05 +0000 2013",
          "description": "City of Calgary Transportation news to keep you on the move. We don’t monitor 24/7 but we do our best to reply ASAP. For transit news, see @calgarytransit.",
          "isVerified": true,
          "likeCount": 956,
          "followersCount": 62446,
          "followingsCount": 84,
          "statusesCount": 149111,
          "location": "Calgary, Alberta, Canada",
          "profileBanner": "https://pbs.twimg.com/profile_banners/1729579022/1443807346",
          "profileImage": "https://pbs.twimg.com/profile_images/790638410327216130/97MLYdIa_normal.jpg"
        },
        "entities": {
          "hashtags": [
            "yyctraffic",
            "yycroads"
          ],
          "mentionedUsers": [],
          "urls": []
        },
        "media": [
          {
            "url": "https://pbs.twimg.com/media/GdBNgsIagAAiD0X.jpg",
            "type": "photo"
          }
        ],
        "fullText": "ALERT: Traffic incident on 16 Ave and Stoney Tr NW, partially blocking the WB on-ramp.   #yyctraffic #yycroads https://t.co/ZkuDO1lPoG",
        "lang": "en",
        "quoteCount": 0,
        "replyCount": 1,
        "retweetCount": 0,
        "likeCount": 1,
        "viewCount": 1526,
        "bookmarkCount": 0,
        "localDate": "Nov 22, 2024",
        "localTime": "2:24 p.m.",
        "profilePic": "https://pbs.twimg.com/profile_images/790638410327216130/97MLYdIa.jpg",
        "address": "16 Ave NW and Stoney Trail NW, Calgary, AB",
        "location": {
          "lat": 51.1525845,
          "lng": -114.1291455,
          "formattedAddress": "Stoney Trail NW, Calgary, AB, Canada"
        }
      },
      {
        "id": "1860069486445101294",
        "createdAt": "Fri Nov 22 21:14:58 +0000 2024",
        "tweetBy": {
          "id": "1729579022",
          "userName": "yyctransport",
          "fullName": "YYC Transportation",
          "createdAt": "Wed Sep 04 18:41:05 +0000 2013",
          "description": "City of Calgary Transportation news to keep you on the move. We don’t monitor 24/7 but we do our best to reply ASAP. For transit news, see @calgarytransit.",
          "isVerified": true,
          "likeCount": 956,
          "followersCount": 62446,
          "followingsCount": 84,
          "statusesCount": 149111,
          "location": "Calgary, Alberta, Canada",
          "profileBanner": "https://pbs.twimg.com/profile_banners/1729579022/1443807346",
          "profileImage": "https://pbs.twimg.com/profile_images/790638410327216130/97MLYdIa_normal.jpg"
        },
        "entities": {
          "hashtags": [
            "yyctraffic",
            "yycroads"
          ],
          "mentionedUsers": [],
          "urls": []
        },
        "media": [
          {
            "url": "https://pbs.twimg.com/media/GdBLV2OagAEYBLl.jpg",
            "type": "photo"
          }
        ],
        "fullText": "ALERT: Traffic incident on SB Macleod Tr at Stoney Tr SW, blocking the right lane. Expect delays in the area. #yyctraffic #yycroads https://t.co/j2f2PoX9xv",
        "lang": "en",
        "quoteCount": 0,
        "replyCount": 1,
        "retweetCount": 1,
        "likeCount": 0,
        "viewCount": 1545,
        "bookmarkCount": 0,
        "localDate": "Nov 22, 2024",
        "localTime": "2:14 p.m.",
        "profilePic": "https://pbs.twimg.com/profile_images/790638410327216130/97MLYdIa.jpg",
        "address": "SB Macleod Trail at Stoney Trail SW",
        "location": {
          "lat": 50.9328982,
          "lng": -114.0682731,
          "formattedAddress": "Macleod Trail, Alberta, Canada"
        }
      },
      {
        "id": "1860049714940641301",
        "createdAt": "Fri Nov 22 19:56:24 +0000 2024",
        "tweetBy": {
          "id": "1729579022",
          "userName": "yyctransport",
          "fullName": "YYC Transportation",
          "createdAt": "Wed Sep 04 18:41:05 +0000 2013",
          "description": "City of Calgary Transportation news to keep you on the move. We don’t monitor 24/7 but we do our best to reply ASAP. For transit news, see @calgarytransit.",
          "isVerified": true,
          "likeCount": 956,
          "followersCount": 62446,
          "followingsCount": 84,
          "statusesCount": 149111,
          "location": "Calgary, Alberta, Canada",
          "profileBanner": "https://pbs.twimg.com/profile_banners/1729579022/1443807346",
          "profileImage": "https://pbs.twimg.com/profile_images/790638410327216130/97MLYdIa_normal.jpg"
        },
        "entities": {
          "hashtags": [
            "yyctraffic",
            "yycroads"
          ],
          "mentionedUsers": [],
          "urls": []
        },
        "fullText": "ALERT: Traffic incident on 17 Ave and 26 St SW.   #yyctraffic #yycroads",
        "lang": "en",
        "quoteCount": 0,
        "replyCount": 1,
        "retweetCount": 1,
        "likeCount": 0,
        "viewCount": 1608,
        "bookmarkCount": 0,
        "localDate": "Nov 22, 2024",
        "localTime": "12:56 p.m.",
        "profilePic": "https://pbs.twimg.com/profile_images/790638410327216130/97MLYdIa.jpg",
        "address": "17 Ave SW and 26 St SW, Calgary, AB",
        "location": {
          "lat": 51.0378489,
          "lng": -114.1237159,
          "formattedAddress": "17 Ave SW & 26 St SW, Calgary, AB T3C 1K7, Canada"
        }
      },
      {
        "id": "1860045266226704426",
        "createdAt": "Fri Nov 22 19:38:44 +0000 2024",
        "tweetBy": {
          "id": "621195039",
          "userName": "511Alberta",
          "fullName": "511 Alberta",
          "createdAt": "Thu Jun 28 16:19:22 +0000 2012",
          "description": "Alberta's Official Road Report. Get up-to-date highway conditions and safety information 24/7. Message us, call 511, or download our app to Know Before You Go.",
          "isVerified": false,
          "likeCount": 179,
          "followersCount": 136434,
          "followingsCount": 234,
          "statusesCount": 95854,
          "location": "Alberta, Canada",
          "profileBanner": "https://pbs.twimg.com/profile_banners/621195039/1612300775",
          "profileImage": "https://pbs.twimg.com/profile_images/877990434001350656/xvJh1oCh_normal.jpg"
        },
        "entities": {
          "hashtags": [
            "ABRoads",
            "yyctraffic"
          ],
          "mentionedUsers": [],
          "urls": []
        },
        "fullText": "NB Stoney Tr approaching Glenmore Tr SE, Calgary - cable barrier repairs, Nov.22, in progress. Expect a LH shoulder closure. (12:38pm) #ABRoads #yyctraffic",
        "lang": "en",
        "quoteCount": 1,
        "replyCount": 0,
        "retweetCount": 1,
        "likeCount": 0,
        "viewCount": 5320,
        "bookmarkCount": 0,
        "localDate": "Nov 22, 2024",
        "localTime": "12:38 p.m.",
        "profilePic": "https://pbs.twimg.com/profile_images/877990434001350656/xvJh1oCh.jpg",
        "address": "NB Stoney Trail approaching Glenmore Trail SE, Calgary, AB",
        "location": {
          "lat": 51.04473309999999,
          "lng": -114.0718831,
          "formattedAddress": "Calgary, AB, Canada"
        }
      },
      {
        "id": "1860027517358489869",
        "createdAt": "Fri Nov 22 18:28:12 +0000 2024",
        "tweetBy": {
          "id": "1729579022",
          "userName": "yyctransport",
          "fullName": "YYC Transportation",
          "createdAt": "Wed Sep 04 18:41:05 +0000 2013",
          "description": "City of Calgary Transportation news to keep you on the move. We don’t monitor 24/7 but we do our best to reply ASAP. For transit news, see @calgarytransit.",
          "isVerified": true,
          "likeCount": 956,
          "followersCount": 62446,
          "followingsCount": 84,
          "statusesCount": 149111,
          "location": "Calgary, Alberta, Canada",
          "profileBanner": "https://pbs.twimg.com/profile_banners/1729579022/1443807346",
          "profileImage": "https://pbs.twimg.com/profile_images/790638410327216130/97MLYdIa_normal.jpg"
        },
        "entities": {
          "hashtags": [
            "yyctraffic",
            "yycroads"
          ],
          "mentionedUsers": [],
          "urls": []
        },
        "media": [
          {
            "url": "https://pbs.twimg.com/media/GdAlK5iagAEMksB.jpg",
            "type": "photo"
          }
        ],
        "fullText": "ALERT: Traffic incident on 85 St and Wentworth Dr SW, blocking the SB right lane.   #yyctraffic #yycroads https://t.co/3TkxrUZrag",
        "lang": "en",
        "quoteCount": 0,
        "replyCount": 1,
        "retweetCount": 0,
        "likeCount": 2,
        "viewCount": 1368,
        "bookmarkCount": 0,
        "localDate": "Nov 22, 2024",
        "localTime": "11:28 a.m.",
        "profilePic": "https://pbs.twimg.com/profile_images/790638410327216130/97MLYdIa.jpg",
        "address": "85 Street SW and Wentworth Drive SW, Calgary, AB",
        "location": {
          "lat": 51.0569023,
          "lng": -114.2108963,
          "formattedAddress": "85 St SW & Wentworth Dr SW, Calgary, AB T3H, Canada"
        }
      },
      {
        "id": "1860004452989640793",
        "createdAt": "Fri Nov 22 16:56:33 +0000 2024",
        "tweetBy": {
          "id": "621195039",
          "userName": "511Alberta",
          "fullName": "511 Alberta",
          "createdAt": "Thu Jun 28 16:19:22 +0000 2012",
          "description": "Alberta's Official Road Report. Get up-to-date highway conditions and safety information 24/7. Message us, call 511, or download our app to Know Before You Go.",
          "isVerified": false,
          "likeCount": 179,
          "followersCount": 136434,
          "followingsCount": 234,
          "statusesCount": 95854,
          "location": "Alberta, Canada",
          "profileBanner": "https://pbs.twimg.com/profile_banners/621195039/1612300775",
          "profileImage": "https://pbs.twimg.com/profile_images/877990434001350656/xvJh1oCh_normal.jpg"
        },
        "entities": {
          "hashtags": [
            "ABRoads",
            "yyctraffic"
          ],
          "mentionedUsers": [],
          "urls": []
        },
        "fullText": "NB QEII after Stoney Tr NE, N of Calgary - MVC blocking the LHL. Expect delays in the area. (9:56am) #ABRoads #yyctraffic",
        "lang": "en",
        "quoteCount": 1,
        "replyCount": 0,
        "retweetCount": 1,
        "likeCount": 0,
        "viewCount": 4442,
        "bookmarkCount": 0,
        "localDate": "Nov 22, 2024",
        "localTime": "9:56 a.m.",
        "profilePic": "https://pbs.twimg.com/profile_images/877990434001350656/xvJh1oCh.jpg",
        "address": "NB QEII after Stoney Trail NE, Calgary, AB",
        "location": {
          "lat": 51.1104579,
          "lng": -113.9206249,
          "formattedAddress": "Stoney Trail NE, Calgary, AB, Canada"
        }
      }
    ]);
    */

  const [data, setData] = useState([]);
  const [forYou, setForYou] = useState("forYou");
  const [hashTagFilter, setHashTagFilter] = useState();
  const [severityFilter, setSeverityFilter] = useState();
  const [hashtags, setHashtags] = useState({});

  const { socket } = socketStore();
  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await fetch('http://localhost:3000/twitter/incidents');
        // if(response.status=== 200){
        //   const result = await response.json();
        //   setData(result);
        //   const res = await processTweetBatch(result)
  
        //   console.log(res.data.message)
        // }
        const response = await fetch('http://localhost:3000/twitter/incidents');
        if (response.ok) {
          const result = await response.json();
          setData(result);
          console.log("Made it here.");
          console.log(result);
          const res = await processTweetBatch(result);
          console.log(res.data.message)
        }
  
      } catch (error) {
        console.log("Nothing bruh")
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);
  
  
  useEffect(() => {
    if (!socket) return;

    socket.on('newTweets', async (newTweets) => {
      console.log("Received new tweets");
      setData(prevTweets => {
        const updatedTweets = [...newTweets, ...prevTweets];
        updatedTweets.sort((a, b) => 
          new Date(b.createdAt) - new Date(a.createdAt)
        );
        processTweetBatch({tweets: newTweets});
        return updatedTweets;
      })
    });
  }, [socket]);

  const toggleHashtagFilter = (tag) => {
    setHashTagFilter(currentTag => currentTag === tag ? null : tag);
  }

  const toggleSeverityFilter = (severity) => {
    setSeverityFilter(currentSeverity => currentSeverity === severity ? null : severity);
  }


  useEffect(() => {
    let newHashtags = {};
    data.forEach((tweet) => {
      const tagsArray = tweet.entities.hashtags;
      for (let index = 0; index < tagsArray.length; index++) {
        if (!newHashtags.hasOwnProperty(tagsArray[index])) {
          newHashtags[tagsArray[index]] = { tag: tagsArray[index], count: 1 };
        }
        else {
          newHashtags[tagsArray[index]].count += 1;
        }
      }
    });
    setHashtags(newHashtags);
  }, [data]);

  // useEffect(() => {
  //   console.log(hashtags);
  // }, [hashtags]);

  // useEffect(() => {
  //   console.log(data);
  // }, [data]);

  return (
    <>
      <div className='grid grid-cols-12 font-proxima'>
        <div className='hidden lg:block lg:col-span-3 px-4'>

        </div>

        <div className='sm:col-span-12 lg:col-span-6 border border-inherit '>
          <div className=' flex flex-row items-center'>
            <div className='top-buttons-div w-6/12 text-center border-b border-inherit'>
              <button className={`w-full ${forYou === "forYou" ? 'top-buttons-selected' : 'top-buttons'}`}
                onClick={() => setForYou("forYou")}
              >For you
              </button>
            </div>
            <div className='top-buttons-div w-6/12 text-center border-b border-inherited'>
              <button className={`w-full ${forYou === "following" ? 'top-buttons-selected' : 'top-buttons'}`}
                onClick={() => setForYou("following")}
              >Following</button>
            </div>
          </div>
          <div className='flex flex-col space-y-4 py'>
            {data.length === 0 ? (
              <p>No recent incidents reported.</p>
            ) : (
              data.map((item, index) => (
                <>
                  <div className='border-b border-inherit'>
                    <FeedCard
                      key={index}
                      img={item.profilePic}
                      username={item.tweetBy.fullName}
                      userAt={item.tweetBy.userName}
                      post={item.fullText}
                      time={item.localTime}
                      date={item.localDate}
                    />
                  </div>
                </>
              ))
            )}

          </div>
        </div>

        <div className='hidden lg:block lg:col-span-3 px-4'>
          <div className='flex flex-col space-y-4 sticky top-4 px-4'>
            <div className='flex flex-col border border-inherit py-2 rounded-xl'>
              <p className='font-proximaBold text-xl px-4'>Hashtags</p>
              {Object.entries(hashtags).map(([key, value]) => ((
                <>
                  <div className={`flex flex-col justify-center px-4 py-6 ${hashTagFilter === value.tag ? 'filter-button-selected' : 'filter-button'}`}>
                    <div>
                      <button
                        className={`text-start w-full font-semibold`}
                        onClick={() => toggleHashtagFilter(value.tag)}
                      >#{value.tag}</button>
                    </div>
                    <p className='text-xs text-inherit'>{value.count} {value.count > 1 ? 'posts' : 'post'}</p>
                  </div>
                </>
              )))}


            </div>

            <div className='flex flex-col border border-inherit py-2 rounded-xl'>
              <p className='font-proximaBold text-xl  px-4'>Severity</p>
              <div>
                <button
                  className={`w-full text-start px-4
                ${severityFilter === "Low" ? 'filter-button-selected' : 'filter-button'}`}
                  onClick={() => toggleSeverityFilter("Low")}
                >Low</button>
              </div>
              <div>
                <button
                  className={`w-full text-start px-4
                ${severityFilter === "Medium" ? 'filter-button-selected' : 'filter-button'}`}
                  onClick={() => toggleSeverityFilter("Medium")}
                >Medium</button>
              </div>
              <div>
                <button
                  className={`w-full text-start px-4
                ${severityFilter === "High" ? 'filter-button-selected' : 'filter-button'}`}
                  onClick={() => toggleSeverityFilter("High")}
                >High</button>
              </div>
              <div>
              </div>
            </div>
          </div>
        </div>

      </div>


    </>
  );
};