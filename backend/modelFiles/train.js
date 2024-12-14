const CrashSeverityClassifier = require('./severityModel');
const fs = require('fs').promises;
const tweets = [
    {
      "text": "",
      "time": ""
    },
    {
      "text": "ALERT: Traffic incident on 53 St and 146 Ave SW. Expect delays in the area. #yyctraffic #yycroads",
      "time": "5:29 p.m."
    },
    {
      "text": "ALERT: Traffic incident on Macleod Tr and 210 Ave SE, blocking multiple lanes in the intersection. Expect delays in the area. #yyctraffic #yycroads https://t.co/k0G5x2mcEl",
      "time": "4:35 p.m."
    },
    {
      "text": "ALERT: Traffic incident on SB Stoney Tr approaching 96 Ave NE, blocking the left lane. Expect delays in the area. #yyctraffic #yycroads https://t.co/Wehtwg2yzo",
      "time": "4:30 p.m."
    },
    {
      "text": "ALERT: Traffic incident on 17 Ave and 26 St SW.   #yyctraffic #yycroads",
      "time": "12:56 p.m."
    },
    {
      "text": "ALERT: Traffic incident on SB Shawville Bv at Shawville Ga SE, blocking the right lane.  #yyctraffic #yycroads https://t.co/1yZcQSfAzq",
      "time": "5:10 p.m."
    },
    {
      "text": "ALERT: Traffic incident on Crowchild Tr and Silver Springs Ga NW, blocking the EB to SB exit.   #yyctraffic #yycroads https://t.co/PdCLUkwCRW",
      "time": "4:02 p.m."
    },
    {
      "text": "ALERT: Traffic incident on 4 St and 27 Ave NW. Expect delays in the area. #yyctraffic #yycroads",
      "time": "2:38 p.m."
    },
    {
      "text": "ALERT: Traffic incident on 16 Ave and Stoney Tr NW, partially blocking the WB on-ramp.   #yyctraffic #yycroads https://t.co/ZkuDO1lPoG",
      "time": "2:24 p.m."
    },
    {
      "text": "NB Stoney Tr approaching Glenmore Tr SE, Calgary - cable barrier repairs, Nov.22, in progress. Expect a LH shoulder closure. (12:38pm) #ABRoads #yyctraffic",
      "time": "12:38 p.m."
    },
    {
      "text": "ALERT: Traffic incident on 84 St and Peigan Tr SE.  #yyctraffic #yycroads https://t.co/oPLAGGDVbR",
      "time": "4:19 p.m."
    },
    {
      "text": "Stoney Tr near Glenmore Tr SE, Calgary - MVC. Expect delays in the area. (4:12pm) #ABRoads #yyctraffic",
      "time": "4:12 p.m."
    },
    {
      "text": "ALERT: Traffic incident on SB Macleod Tr at Stoney Tr SW, blocking the right lane. Expect delays in the area. #yyctraffic #yycroads https://t.co/j2f2PoX9xv",
      "time": "2:14 p.m."
    },
    {
      "text": "ALERT: Traffic incident on 85 St and Wentworth Dr SW, blocking the SB right lane.   #yyctraffic #yycroads https://t.co/3TkxrUZrag",
      "time": "11:28 a.m."
    },
    {
      "text": "SB Stoney Tr approaching 96 Ave NE, Calgary - MVC blocking the LHL. Keep right. (4:33pm) #ABRoads #yyctraffic",
      "time": "4:34 p.m."
    },
    {
      "text": "ALERT: Traffic incident on 64 Ave and Deerfoot Tr NE, blocking the WB right lane.   #yyctraffic #yycroads https://t.co/du6Opab1lE",
      "time": "2:55 p.m."
    },
    {
      "text": "NB QEII after Stoney Tr NE, N of Calgary - MVC blocking the LHL. Expect delays in the area. (9:56am) #ABRoads #yyctraffic",
      "time": "9:56 a.m."
    },
    {
      "text": "ALERT: Two vehicle incident on  NB Crowchild Tr and Bow Tr SW, blcoking the right lane.   #yyctraffic #yycroads https://t.co/soMEArWkOF",
      "time": "6:05 p.m."
    },
    {
      "text": "In the Southwest, stalled vehicle on WB Glenmore Trail at 37th Street, blocking the middle lane, expect major backups #yyctraffic https://t.co/btN0kx0rZK",
      "time": "5:48 p.m."
    },
    {
      "text": "ALERT: Traffic incident on  42 Ave and 9 St SE.   #yyctraffic #yycroads",
      "time": "5:31 p.m."
    },
    {
      "text": "ALERT: Traffic incident on  Saddletowne Ci and 60 St NE.   #yyctraffic #yycroads",
      "time": "5:26 p.m."
    },
    {
      "text": "ALERT: Traffic incident on  NB Deerfoot Tr north of Peigan Tr SE, blocking the right lane.   #yyctraffic #yycroads https://t.co/NFGIyhAOrY",
      "time": "5:12 p.m."
    },
    {
      "text": "ALERT: Traffic incident on  52 St and 14 Ave SE.   #yyctraffic #yycroads https://t.co/V3dwtwfcTC",
      "time": "5:07 p.m."
    },
    {
      "text": "In the Southeast, watch out for a new crash on NB Deerfoot Trail approaching 17th Avenue, blocking the right-hand lane #yyctraffic https://t.co/IIslRuLGgG",
      "time": "5:04 p.m."
    },
    {
      "text": "ALERT: Traffic incident on  SB 36 St and 4 Ave NE, blocking the right lane.   #yyctraffic #yycroads https://t.co/DHZvLYRgaX",
      "time": "4:50 p.m."
    },
    {
      "text": "In the Northeast, watch out for spun out vehicles on EB Stoney Trail just east of Harvest Hills Blvd, blocking the right-hand lane #yyctraffic https://t.co/w90O2NDY0t",
      "time": "4:39 p.m."
    },
    {
      "text": "ALERT: Multi-vehicle incident on  EB Stoney Tr and Harvest Hills Bv NE, blocking the right shoulder.   #yyctraffic #yycroads https://t.co/gRA5vFlvbG",
      "time": "4:29 p.m."
    },
    {
      "text": "NB Deerfoot Trail approaching 17th Ave, Calgary - MVC, blocking the LH lane. (4:25pm) via @yyctransport #yyctraffic",
      "time": "4:25 p.m."
    },
    {
      "text": "In the Northeast, watch out for a crash on WB McKnight Blvd at Deerfoot Trail, blocking the right-hand lane #yyctraffic https://t.co/GNnxAhhQHy",
      "time": "4:19 p.m."
    },
    {
      "text": "In the Southeast, watch out for a crash on NB Deerfoot Trail approaching 17th Avenue, blocking the left-hand lane #yyctraffic https://t.co/gcDYFgxgsT",
      "time": "4:17 p.m."
    },
    {
      "text": "ALERT: Traffic incident on  WB McKnight Bv and Deerfoot Tr NE, blocking the right lane.   #yyctraffic #yycroads https://t.co/MNv7LH4E8t",
      "time": "4:15 p.m."
    },
    {
      "text": "In the Northwest, watch out for a crash on NB Shaganappi Trail at Crowchild Trail, blocking the right-hand lane #yyctraffic https://t.co/GwatYMnQ22",
      "time": "4:08 p.m."
    },
    {
      "text": "In the Southeast, there's a stalled vehicle on NB Deerfoot Trail at the Ivor Strong Bridge, that's blocking the right-hand lane #yyctraffic https://t.co/64DkeTloyy",
      "time": "4:05 p.m."
    },
    {
      "text": "ALERT: Two vehicle incident on  EB Crowchild Tr and Shaganappi Tr NW, blocking the right lane.   #yyctraffic #yycroads https://t.co/Vu528fWhfV",
      "time": "3:55 p.m."
    },
    {
      "text": "ALERT: Multi-vehicle incident on  WB 96 Ave and Deerfoot Tr NE, blocking multiple lanes.   #yyctraffic #yycroads https://t.co/avPezVPyl1",
      "time": "6:09 p.m."
    },
    {
      "text": "ALERT: Traffic incident on 16 Ave and 29 St NW.   #yyctraffic #yycroads",
      "time": "3:23 p.m."
    },
    {
      "text": "ALERT: Traffic incident on 9 Ave b/w 13 St and 14 St SE.   #yyctraffic #yycroads",
      "time": "3:06 p.m."
    },
    {
      "text": "In the Southwest, incident on NB Crowchild Trail north of 33rd Avenue has the left-hand lane blocked off, expect delays #yyctraffic https://t.co/aoRVJYYq4B",
      "time": "3:00 p.m."
    },
    {
      "text": "SB Deerfoot Tr near 17 Ave SE, Calgary - MVC in the RHL. Drive with caution in the area. (1:44pm) #ABRoads #yyctraffic",
      "time": "1:44 p.m."
    },
    {
      "text": "ALERT: Traffic incident on 17 Ave and 24 St SW.   #yyctraffic #yycroads",
      "time": "1:43 p.m."
    },
    {
      "text": "ALERT: Traffic incident on SB Deerfoot Tr and 17 Ave SE, blocking the right lane.   #yyctraffic #yycroads https://t.co/KKhGLnrayl",
      "time": "1:41 p.m."
    },
    {
      "text": "ALERT: Traffic incident on  Stoney Tr and Old Banff Coach Rd SW.   #yyctraffic #yycroads",
      "time": "1:15 p.m."
    },
    {
      "text": "In the Southwest, police are blocking off WB Bow Trail at Sarcee Trail, the hill there is too slippery to get through, drivers need to take 17th Avenue instead #yyctraffic https://t.co/oQv70io0kF",
      "time": "1:09 p.m."
    },
    {
      "text": "ALERT: Traffic incident on  SB Macleod Tr and 25 Ave SE, blocking multiple lanes.   #yyctraffic #yycroads https://t.co/RerfZW5Pjz",
      "time": "12:50 p.m."
    },
    {
      "text": "ALERT: Traffic incident on  Nose Hill Dr and Tuscany Hl NW.   #yyctraffic #yycroads",
      "time": "12:19 p.m."
    },
    {
      "text": "ALERT: Traffic incident on  WB 32 Ave and 19 St NE.   #yyctraffic #yycroads",
      "time": "12:06 p.m."
    },
    {
      "text": "ALERT: Traffic incident on  EB 32 Ave and Barlow Tr NE, blocking the right lane.   #yyctraffic #yycroads",
      "time": "11:29 a.m."
    },
    {
      "text": "In the NE, SB 52nd Street and 16th Avenue, there's a collision blocking multiple lanes. #yyctraffic #yycroads https://t.co/nyl3WahtZK",
      "time": "8:04 a.m."
    },
    {
      "text": "In the Southeast, watch out for a crash on SB Macleod Trail at 99th Avenue, blocking the right-hand lane #yyctraffic https://t.co/XXcgsmplec",
      "time": "4:34 p.m."
    },
    {
      "text": "In the Southeast, watch out for a crash on EB Southland Drive at Deerfoot Trail, blocking the right-hand lane #yyctraffic https://t.co/n3FFrTZhmY",
      "time": "4:33 p.m."
    },
    {
      "text": "ALERT: Traffic incident on SB Macleod Tr and 99 Ave SE, blocking multiple lanes.   #yyctraffic #yycroads https://t.co/tu1KeA9Moz",
      "time": "4:25 p.m."
    },
    {
      "text": "ALERT: Multi-vehicle incident on Southland Dr at Deerfoot Tr SE, blocking the EB right lane.   #yyctraffic #yycroads https://t.co/CH83n4eff4",
      "time": "4:13 p.m."
    },
    {
      "text": "ALERT: Traffic incident on  Shawville Bv and Shalom Wy SE.   #yyctraffic #yycroads",
      "time": "12:31 p.m."
    },
    {
      "text": "ALERT: Traffic incident on  36 St and 12 Ave SE.   #yyctraffic #yycroads",
      "time": "12:17 p.m."
    },
    {
      "text": "In the SE, EB Peigan Trail at Stoney Trail, watch out for a collision. Stay right. #yyctraffic #yycroads https://t.co/Fmcjs3kGx3",
      "time": "10:22 a.m."
    },
    {
      "text": "ALERT: Traffic incident on  EB Peigan Tr and Stoney Tr SE, blocking multiple lanes.   #yyctraffic #yycroads https://t.co/yHsCJyJC02",
      "time": "10:17 a.m."
    },
    {
      "text": "Road conditions are \"so-so\" around Calgary. Still snow covered and icy. Here's a look at Deerfoot and 34th. Drive with care. #yyctraffic #yycroads https://t.co/MGAZJf2m7Q",
      "time": "7:58 a.m."
    },
    {
      "text": "Good Morning! There's some improvement on the roads. Still lots of slippery sections plus there's a collision in the SW, 14th Street and Glenmore Trail WB, blocking the left lane. #yyctraffic #yycroads https://t.co/9ZZomOmuaN",
      "time": "5:54 a.m."
    },
    {
      "text": "ALERT: Multi-vehicle incident on  WB 14 St and Glenmore Tr SW, blocking the left lane.   #yyctraffic #yycroads https://t.co/T8pL4CwjDP",
      "time": "5:49 a.m."
    },
    {
      "text": "ALERT: Traffic incident on  SB Centre St and 44 Ave NW, blocking the right lane.   #yyctraffic #yycroads https://t.co/125JDTCays",
      "time": "5:15 a.m."
    },
    {
      "text": "ALERT: Traffic incident on  Shaganappi Tr and Stoney Tr NW.   #yyctraffic #yycroads",
      "time": "3:34 a.m."
    },
    {
      "text": "ALERT: Traffic incident on  33 St and 34 Ave SE.   #yyctraffic #yycroads",
      "time": "11:24 p.m."
    },
    {
      "text": "ALERT: Traffic incident on WB 16 Ave approaching Sarcee Tr NW.   #yyctraffic #yycroads",
      "time": "7:52 p.m."
    },
    {
      "text": "ALERT: Traffic incident on 128 Ave and Barlow Tr NE.   #yyctraffic #yycroads",
      "time": "7:31 p.m."
    },
    {
      "text": "NB Deerfoot Tr approaching Memorial Dr SE, Calgary - Traffic incident, blocking RH lanes. (6:38pm) via @yyctransport  #yyctraffic",
      "time": "6:38 p.m."
    },
    {
      "text": "WB Crowchild Tr NW on ramp to SB Stoney Tr, Calgary - MVC partially blocking the ramp. Expect delays. (3:57pm) #ABRoads #yyctraffic",
      "time": "3:57 p.m."
    },
    {
      "text": "ALERT: Traffic incident on  Crowchild Tr and Stoney Tr NW, partially blocking the WB on-ramp.   #yyctraffic #yycroads https://t.co/Wn9Uw89ffI",
      "time": "3:50 p.m."
    },
    {
      "text": "ALERT: Two vehicle incident on Country Hills Bv at Metis Tr NE, blocking the left WBLT lane.   #yyctraffic #yycroads https://t.co/D3rP6FIFat",
      "time": "3:46 p.m."
    },
    {
      "text": "ALERT: Traffic incident on 4 St and 22 Ave NW. Expect delays in the area. #yyctraffic #yycroads",
      "time": "3:26 p.m."
    },
    {
      "text": "ALERT: Traffic incident on  EB Glenmore Tr after Crowchild Tr SW, blocking the left lane.   #yyctraffic #yycroads https://t.co/QxU5zxT7mU",
      "time": "1:01 p.m."
    },
    {
      "text": "ALERT: Multi-vehicle incident on  SB Stoney Tr approaching 16 Ave NW.   #yyctraffic #yycroads https://t.co/KeedxDGXto",
      "time": "12:46 p.m."
    },
    {
      "text": "ALERT: Traffic incident on  SB 52 St and 61 Ave SE, blocking the left lane.   #yyctraffic #yycroads https://t.co/RSl6PSVu31",
      "time": "12:44 p.m."
    },
    {
      "text": "ALERT: Traffic incident on  EB Mcknight Bv and Aviation Bv NE, blocking the left lane.   #yyctraffic #yycroads https://t.co/kfaQIlTZ6Y",
      "time": "12:26 p.m."
    },
    {
      "text": "ALERT: Traffic incident on  NB Crowchild Tr and Bow Tr SW, blocking the left lane.   #yyctraffic #yycroads https://t.co/BGRXR5BtZW",
      "time": "12:07 p.m."
    },
    {
      "text": "ALERT: Traffic incident on  Grey Eagle Bv and Grey Eagle Dr SW.   #yyctraffic #yycroads",
      "time": "10:49 a.m."
    },
    {
      "text": "ALERT: Traffic incident on  WB Country Hills Bv and Stoney Tr NE, blocking the right lane.   #yyctraffic #yycroads https://t.co/q0ON2ANYeQ",
      "time": "10:38 a.m."
    },
    {
      "text": "ALERT: Traffic incident on  WB Memorial Dr and Crowchild Tr NW.   #yyctraffic #yycroads https://t.co/tbswYsl5IQ",
      "time": "10:00 a.m."
    },
    {
      "text": "SB Deerfoot Tr after Beddington Tr NW, Calgary, MVC. Drive with caution and expect delays. (9:48am) #ABRoads #yyctraffic",
      "time": "9:49 a.m."
    },
    {
      "text": "ALERT: Traffic incident on  SB Deerfoot Tr and Beddington Tr NE.   #yyctraffic #yycroads https://t.co/3ZquCqkdgL",
      "time": "9:39 a.m."
    },
    {
      "text": "ALERT: Traffic incident on  9 Ave and 12 St SE.   #yyctraffic #yycroads https://t.co/05VFxzOO8v",
      "time": "9:07 a.m."
    },
    {
      "text": "ALERT: Traffic incident on  Charleswood Dr and Crowchild Tr NW.   #yyctraffic #yycroads",
      "time": "8:57 a.m."
    },
    {
      "text": "ALERT: Traffic incident on  NB Deerfoot Tr and 130 Ave SE.   #yyctraffic #yycroads https://t.co/VjYdsQAlnc",
      "time": "7:57 a.m."
    },
    {
      "text": "ALERT: Traffic incident on  SB Stoney Tr and Glenmore Tr SE.   #yyctraffic #yycroads https://t.co/mSQBVI7RvQ",
      "time": "7:25 a.m."
    },
    {
      "text": "ALERT: Traffic incident on  NB Deerfoot Tr and Memorial Dr SE, blocking the right lane.   #yyctraffic #yycroads https://t.co/Y2qmvSyxZD",
      "time": "6:42 a.m."
    },
    {
      "text": "ALERT: Traffic incident on SB 5 St at 15 Ave SW, blocking the right lane. Expect delays in the area. #yyctraffic #yycroads https://t.co/YFoYkd5MFF",
      "time": "4:44 p.m."
    },
    {
      "text": "ALERT: Traffic incident on Falconridge Bv and Catsleridge Dr NE. Expect delays in the area. #yyctraffic #yycroads",
      "time": "4:10 p.m."
    },
    {
      "text": "ALERT: Traffic incident on  52 St and 28 Ave SE. Expect delays in the area. #yyctraffic #yycroads",
      "time": "4:07 p.m."
    },
    {
      "text": "ALERT: Traffic signals are flashing red on 29 St and Hospital Dr NW; crews have been dispatched. Please drive with caution. #yyctraffic #yycroads",
      "time": "3:05 p.m."
    },
    {
      "text": "ALERT: Traffic incident on 61 Ave and 52 St SE. Expect delays in the area. #yyctraffic #yycroads",
      "time": "2:24 p.m."
    },
    {
      "text": "ALERT: Traffic incident on EB McKnight Bv at Aviation Bv NE, blocking the left turn lane.   #yyctraffic #yycroads https://t.co/Y3TOWMcWDa",
      "time": "2:16 p.m."
    },
    {
      "text": "ALERT: Traffic incident on  SB Macleod Tr and Heritage Dr S.   #yyctraffic #yycroads https://t.co/U5XXalg1OH",
      "time": "1:25 p.m."
    },
    {
      "text": "ALERT: Traffic incident on  NB Crowchild Tr and Memorial Dr NW, blocking the left lane.   #yyctraffic #yycroads https://t.co/Hv2zsq1skW",
      "time": "12:10 p.m."
    },
    {
      "text": "ALERT: Traffic incident on  16 Ave and Centre St N, blocking the middle lane WB. and NB traffic.   #yyctraffic #yycroads https://t.co/endSB6Al0d",
      "time": "11:50 a.m."
    },
    {
      "text": "ALERT: Traffic incident on  EB Country Hills Bv and 11 St NE, blocking the right lane.   #yyctraffic #yycroads https://t.co/UTuooRA1Ku",
      "time": "11:46 a.m."
    },
    {
      "text": "ALERT: Traffic incident on  NB 36 St and 26 Ave NE, blocking the right lane.   #yyctraffic #yycroads https://t.co/rxSLUwU8N5",
      "time": "11:26 a.m."
    },
    {
      "text": "ALERT: Traffic incident on  EB Glenmore Tr and Blackfoot Tr SE.   #yyctraffic #yycroads https://t.co/YIKvpgPNN5",
      "time": "10:53 a.m."
    },
    {
      "text": "ALERT: Traffic incident on  15 St and 9 Ave SE.   #yyctraffic #yycroads",
      "time": "10:24 a.m."
    },
    {
      "text": "ALERT: Traffic incident on  NB Macleod Tr and 50 Ave SW.   #yyctraffic #yycroads https://t.co/9xZK3DinzV",
      "time": "10:22 a.m."
    },
    {
      "text": "ALERT: Traffic incident on  61 Ave and 29 St SE.   #yyctraffic #yycroads",
      "time": "10:16 a.m."
    },
    {
      "text": "ALERT: Multi-vehicle incident on  Memorial Dr and Deerfoot Tr NE, on ramp onto SB Deerfoot Trail.   #yyctraffic #yycroads https://t.co/mh9mzrTPAO",
      "time": "10:07 a.m."
    },
    {
      "text": "ALERT: Traffic incident on  37 St and 17 Ave SW.   #yyctraffic #yycroads https://t.co/qyHutlpzB7",
      "time": "9:41 a.m."
    },
    {
      "text": "ALERT: Multi-vehicle incident on  52 St and Seton Bv SE.   #yyctraffic #yycroads https://t.co/VVrqZEvedO",
      "time": "9:33 a.m."
    },
    {
      "text": "ALERT: Traffic incident on 50 St and 130 Ave SE.   #yyctraffic #yycroads",
      "time": "4:30 p.m."
    },
    {
      "text": "ALERT:  Emergency services are helping a pedestrian involved in an incident on 52 St and 17 Ave SE. Blocking multi lanes. Please go slow and watch for fellow Calgarians.   #yyctraffic #yycroads https://t.co/fZGoYh8iNs",
      "time": "4:27 p.m."
    },
    {
      "text": "ALERT: Traffic incident on Metis Tr and 80 Ave NE, blocking the SB left lane.   #yyctraffic #yycroads https://t.co/PM8BjKaDpL",
      "time": "3:42 p.m."
    },
    {
      "text": "ALERT: Traffic incident on  James McKevitt Rd and Millview Ga SW.   #yyctraffic #yycroads",
      "time": "3:42 p.m."
    },
    {
      "text": "ALERT: Two vehicle incident on  EB 17 Ave and Deerfoot Tr SE, blocking the left turn lane.   #yyctraffic #yycroads https://t.co/fNVjg6yZBz",
      "time": "3:40 p.m."
    },
    {
      "text": "ALERT:  Emergency services have been called to help a pedestrian involved in an incident on University Dr north of 16 Ave NW. Please go slow and watch for fellow Calgarians.   #yyctraffic #yycroads",
      "time": "3:25 p.m."
    },
    {
      "text": "NB Stoney Tr and 17 Ave SE, in Calgary - MVC, blocking the LH lanes. (2:36pm) via @yyctransport #yyctraffic #ABRoads",
      "time": "2:37 p.m."
    },
    {
      "text": "EB Stoney Tr after Deerfoot Tr SE, in Calgary - MVC, blocking the LH lane. (2:24pm) via @yyctransport #yyctraffic #ABRoads",
      "time": "2:24 p.m."
    },
    {
      "text": "ALERT: Traffic incident on  Stoney Tr and 17 Ave SE.   #yyctraffic #yycroads",
      "time": "2:19 p.m."
    },
    {
      "text": "ALERT: Two vehicle incident on  Beddington Bv and Beddington Tr NE, blocking the SB right lane.   #yyctraffic #yycroads https://t.co/WfH108Npfo",
      "time": "12:39 p.m."
    },
    {
      "text": "ALERT: Two vehicle incident on  Bow Tr and 33 St SW, blocking the EB right lane and SB lanes.   #yyctraffic #yycroads https://t.co/hPlABd2JH4",
      "time": "12:07 p.m."
    },
    {
      "text": "SB Deerfoot Tr at Memorial Dr E, Calgary - MVC blocking the LHL. Expect delays. (7:08am) #ABRoads #yyctraffic",
      "time": "7:08 a.m."
    },
    {
      "text": "ALERT: Multi-vehicle incident on SB Deerfoot Tr at Memorial Dr SE, blocking the left lane. Expect delays in the area. #yyctraffic #yycroads https://t.co/cjozRGJoWl",
      "time": "7:05 a.m."
    },
    {
      "text": "ALERT: Traffic incident on McKenzie Towne Bv and 52 St SE.   #yyctraffic #yycroads",
      "time": "6:50 a.m."
    },
    {
      "text": "ALERT: Traffic incident on  NB Stoney Tr north of Country Hills Bv NE.   #yyctraffic #yycroads",
      "time": "11:36 p.m."
    },
    {
      "text": "ALERT: Stalled vehicle on  WB Glenmore Tr and Crowchild SW, blocking the left exit lane from WB Glenmore Tr to NB Crowchild Tr.   #yyctraffic #yycroads https://t.co/7w7BuHAXcU",
      "time": "4:09 p.m."
    },
    {
      "text": "ALERT: Traffic incident on  SB Crowchild Tr and Glenmore Tr SW, blocking the left lane.   #yyctraffic #yycroads https://t.co/OMzLIIeyPo",
      "time": "3:12 p.m."
    },
    {
      "text": "ALERT: Traffic incident on  SB 68 St and McKnight Bv NE.   #yyctraffic #yycroads",
      "time": "1:53 p.m."
    },
    {
      "text": "ALERT: Traffic incident on Southland Dr and Elbow Dr SW.   #yyctraffic #yycroads",
      "time": "11:31 a.m."
    },
    {
      "text": "ALERT: Traffic incident on Country Hills Bv and Panorama Hills Bv NW.   #yyctraffic #yycroads",
      "time": "10:06 a.m."
    },
    {
      "text": "ALERT: Traffic incident on 42 Ave and 1 St SE, blocking the NB lane.   #yyctraffic #yycroads https://t.co/adHC7NYpW4",
      "time": "9:41 a.m."
    },
    {
      "text": "ALERT: Traffic incident on 76 Ave at 18 St SE.   #yyctraffic #yycroads https://t.co/WDj1qxpGG5",
      "time": "7:51 a.m."
    },
    {
      "text": "ALERT:  Emergency services have been called to help a pedestrian involved in an incident on Rundlehorn Dr and 52 St NE. Blocking the SB right lane. Please go slow and watch for fellow Calgarians   #yyctraffic #yycroads https://t.co/KCrqKxTbfZ",
      "time": "7:45 a.m."
    },
    {
      "text": "ALERT: Traffic incident on Old Banff Coach Rd and Patterson Bv SW.   #yyctraffic #yycroads",
      "time": "7:42 a.m."
    },
    {
      "text": "EB 16 Ave NE on-ramp to Deerfoot Tr, Calgary - disabled vehicle in the LHL. Expect delays in the area. (7:10am) #ABRoads #yyctraffic",
      "time": "7:10 a.m."
    },
    {
      "text": "ALERT: Traffic incident on  Mcknight Bv and 47 St NE, blocking the WB right lane.   #yyctraffic #yycroads https://t.co/SOCCMhjrTg",
      "time": "7:06 a.m."
    },
    {
      "text": "SB Deerfoot Tr at Stoney Tr NE - MVC blocking the left lane on the EB ramp. Expect delays. (6:57am) #ABRoads #yyctraffic",
      "time": "6:58 a.m."
    },
    {
      "text": "ALERT: Traffic incident on Deerfoot Tr and Stoney Tr NE, blocking the left lane of SB to EB ramp.   #yyctraffic #yycroads https://t.co/lxfdfN5QQ7",
      "time": "6:48 a.m."
    },
    {
      "text": "ALERT: Traffic incident on Country Hills Bv and Coventry Bv NE, blocking multi lanes.   #yyctraffic #yycroads https://t.co/0HeIe5T90e",
      "time": "6:20 a.m."
    },
    {
      "text": "ALERT: Multi-vehicle incident on NB Macleod Tr at Canyon Meadows Dr SE, blocking the right lane.   #yyctraffic #yycroads https://t.co/tvljwO2gmA",
      "time": "6:17 a.m."
    },
    {
      "text": "EB Stoney Tr off-ramp to Metis Tr NE, Calgary - intersection street light repairs, Nov.19-20, daylight hours. Expect a lane closure and speed reduction. #ABRoads #yyctraffic",
      "time": "5:00 a.m."
    },
    {
      "text": "NB Stoney Tr near Glenmore Tr SE, Calgary - MVC in the LHL. Drive with caution in the area. (4:59pm) #ABRoads #yyctraffic",
      "time": "4:59 p.m."
    },
    {
      "text": "ALERT: Two vehicle incident on  NB Stoney Tr and Glenmore Tr SE, blocking the left lane.   #yyctraffic #yycroads https://t.co/kkD8Dse2qM",
      "time": "4:45 p.m."
    },
    {
      "text": "ALERT: Traffic incident on  16 Ave and 36 St NE, blocking the WB right lane and the EB right shoulder .   #yyctraffic #yycroads https://t.co/HXsmfIhGBB",
      "time": "4:37 p.m."
    },
    {
      "text": "ALERT: Stalled vehicle on EB Glenmore Tr at Heritage Dr SE, blocking the right lane. Please drive with caution. #yyctraffic #yycroads https://t.co/ubiZlsUtrF",
      "time": "4:26 p.m."
    },
    {
      "text": "ALERT: Traffic incident on  John Laurie Bv and 14 St NW.   #yyctraffic #yycroads",
      "time": "4:25 p.m."
    },
    {
      "text": "SB Stoney Tr near Crowchild Tr NW, MVC in the RHL. Drive with caution in the area. (4:23pm) #ABRoads #yyctraffic",
      "time": "4:23 p.m."
    },
    {
      "text": "ALERT: Traffic incident on  SB Stoney Tr and Crowchild Tr NW, blocking the right lane.   #yyctraffic #yycroads https://t.co/TJAGsukUvs",
      "time": "4:22 p.m."
    },
    {
      "text": "ALERT: Traffic incident on  52 St and Savanna Bv NE.   #yyctraffic #yycroads",
      "time": "3:52 p.m."
    },
    {
      "text": "ALERT: Traffic incident on  Stoney Tr and 162 Ave SW.   #yyctraffic #yycroads",
      "time": "3:30 p.m."
    },
    {
      "text": "⚠️ WATCH OUT! Stuck/jacknifed articuled city bus on EB 32nd Ave &amp; Campus Drive N.W.! \n\nDrive safe. \n\n#yyc #yycroads #yyctraffic https://t.co/U7mCuv1rhR",
      "time": "3:03 p.m."
    },
    {
      "text": "ALERT: Traffic incident on  Stoney Tr and Old Banff Coach Rd SW.      #yyctraffic #yycroads",
      "time": "2:53 p.m."
    },
    {
      "text": "ALERT: Traffic incident on 19 St and Mcgonigal Dr NE. Expect delays in the area. #yyctraffic #yycroads",
      "time": "2:44 p.m."
    },
    {
      "text": "ALERT: Traffic incident on  Country Hills Bv and Cornerstone St NE.   #yyctraffic #yycroads",
      "time": "2:12 p.m."
    },
    {
      "text": "ALERT: Traffic incident on  Uxbridge Dr and 16 Ave NW.   #yyctraffic #yycroads",
      "time": "2:02 p.m."
    },
    {
      "text": "ALERT: Traffic incident on  Stoney Tr and Glenmore Tr SE.   #yyctraffic #yycroads https://t.co/azdDcgCKQ4",
      "time": "1:45 p.m."
    },
    {
      "text": "ALERT: Traffic incident on NB Stoney Tr at 114 Ave SE, blocking the right lane.   #yyctraffic #yycroads https://t.co/CcBBnh5dxF",
      "time": "12:56 p.m."
    },
    {
      "text": "ALERT: Traffic incident on  Stoney Tr and 16 Ave NW, partially blocking the WB on-ramp.   #yyctraffic #yycroads https://t.co/HSWOMGZBRh",
      "time": "12:35 p.m."
    },
    {
      "text": "ALERT: Multi-vehicle incident on  SB Stoney Tr approaching Crowchild Tr NW, blocking the right lanes. Expect delays in the area. #yyctraffic #yycroads https://t.co/g4g6zK4eaU",
      "time": "12:03 p.m."
    },
    {
      "text": "ALERT: Single vehicle incident on  EB Stoney Tr at Harvest Hills Bv N, blocking the left lane.   #yyctraffic #yycroads https://t.co/wDEc9LbzwU",
      "time": "11:54 a.m."
    },
    {
      "text": "ALERT: Traffic incident on  Stoney Tr and Old Banff Coach Rd SW.   #yyctraffic #yycroads",
      "time": "11:33 a.m."
    },
    {
      "text": "ALERT: Traffic incident on SB Shaganappi Tr at Crowchild Tr NW, blocking the left lane.   #yyctraffic #yycroads https://t.co/jhm6MDrMbd",
      "time": "4:48 p.m."
    },
    {
      "text": "ALERT: Traffic incident on  Beddington Bv and Bedford Dr NE, blocking the WB lanes.   #yyctraffic #yycroads https://t.co/pAtx9guEC7",
      "time": "2:54 p.m."
    },
    {
      "text": "ALERT: Traffic incident on EB 32 Ave at 29 St NE, blocking the left lanes.   #yyctraffic #yycroads https://t.co/ADsVdyFb1o",
      "time": "2:40 p.m."
    },
    {
      "text": "ALERT: Two vehicle incident on SB Stoney Tr approaching Glenmore Tr SE, blocking the left lane.   #yyctraffic #yycroads https://t.co/2OovfqhZqN",
      "time": "12:58 p.m."
    },
    {
      "text": "ALERT: Traffic signals issue on 16 Ave and 14 St NW, crew has been dispatched. Please drive with care. #yyctraffic #yycroads",
      "time": "12:55 p.m."
    },
    {
      "text": "ALERT: Traffic incident on SB Macleod Tr and 45 Ave SW, blocking the right lane.   #yyctraffic #yycroads https://t.co/8DwMPa9DS0",
      "time": "11:56 a.m."
    },
    {
      "text": "ALERT: Traffic incident on EB Glenmore Tr approaching 14 St SW, blocking the left lanes.   #yyctraffic #yycroads https://t.co/nOkuqnVKpB",
      "time": "11:54 a.m."
    },
    {
      "text": "ALERT: Traffic incident on 8 Ave and 44 St SE.   #yyctraffic #yycroads",
      "time": "11:26 a.m."
    },
    {
      "text": "Hwy566 at Crossiron Blvd, Balzac - concrete barrier work, Nov.16 from 12pm to 6pm; and Nov.18 from 8am to 4pm. Expect a lane closure in the area. #ABRoads #yyctraffic",
      "time": "10:01 a.m."
    },
    {
      "text": "ALERT: Traffic incident on  Marlborough Way north of Memorial Dr NE.   #yyctraffic #yycroads",
      "time": "1:55 a.m."
    },
    {
      "text": "ALERT: Traffic incident on  19 St and Capri Ave NW.   #yyctraffic #yycroads",
      "time": "11:56 p.m."
    },
    {
      "text": "ALERT: Traffic incident on  WB Memorial Dr approaching 12 St NE, blocking the right lane.   #yyctraffic #yycroads https://t.co/DaemMvITWS",
      "time": "10:12 p.m."
    },
    {
      "text": "ALERT: Traffic incident on  NB 52 St and Temple Dr NE, blocking the right lane.   #yyctraffic #yycroads https://t.co/eivhKNCBoX",
      "time": "9:52 p.m."
    },
    {
      "text": "ALERT: Traffic incident on  NB Metis Tr and 104 Ave NE.   #yyctraffic #yycroads https://t.co/52q668PoQb",
      "time": "8:47 p.m."
    },
    {
      "text": "ALERT: Stalled vehicle on EB Glenmore Tr after Macleod Tr S, blocking the left lane. Please drive with caution. #yyctraffic #yycroads https://t.co/ZbqAYRmv1r",
      "time": "7:22 p.m."
    },
    {
      "text": "ALERT: Traffic incident on  SB 19 St and 41 Ave NE.   #yyctraffic #yycroads",
      "time": "4:34 p.m."
    },
    {
      "text": "ALERT: Traffic incident on  Bearspaw Dam Rd and 85 St NW.   #yyctraffic #yycroads",
      "time": "4:23 p.m."
    },
    {
      "text": "ALERT: Traffic incident on  WB Memorial Dr and Edmonton Tr NE, blocking the right lane.   #yyctraffic #yycroads https://t.co/uXZphmOe44",
      "time": "2:10 p.m."
    },
    {
      "text": "ALERT: Traffic incident on  NB 14 St and 8 Ave NW.   #yyctraffic #yycroads",
      "time": "1:57 p.m."
    },
    {
      "text": "ALERT: Two vehicle incident on WB Glenmore Tr west of 14 St SW, blocking the right lane.   #yyctraffic #yycroads https://t.co/70RdbJd2Ce",
      "time": "12:25 p.m."
    },
    {
      "text": "ALERT: Traffic incident on  4 Ave approaching 1 St SE, blocking the WB left lanes.   #yyctraffic #yycroads https://t.co/8FOeq64a0Y",
      "time": "10:30 a.m."
    },
    {
      "text": "ALERT: Two vehicle incident on SB Crowchild Tr approaching 24 Ave NW, blocking the right lane.   #yyctraffic #yycroads https://t.co/qZ1OHE1rqk",
      "time": "8:02 a.m."
    },
    {
      "text": "NB Deerfoot Tr SE at the Calf Robe Br, in Calgary - traffic incident, blocking the LH lane. (7:30am) via @yyctransport #yyctraffic",
      "time": "7:30 a.m."
    },
    {
      "text": "ALERT: Traffic incident on  NB Deerfoot Tr SE at the Calf Robe Bridge, blocking the left lane. Expect delays in the area. #yyctraffic #yycroads https://t.co/VcHqtPxOnn",
      "time": "7:25 a.m."
    },
    {
      "text": "WB Stoney Tr SW to James McKevitt Rd SW, Calgary - concrete barrier work on the ramp, Nov.14 from 9am to 3pm. Expect lane closures in the area. #ABRoads #yyctraffic",
      "time": "7:01 a.m."
    },
    {
      "text": "ALERT: Multi-vehicle incident on  NB Deerfoot Tr north of Peigan Tr SE, blocking the left shoulder. Expect delays in the area. #yyctraffic #yycroads https://t.co/lfuGPESoLJ",
      "time": "6:50 a.m."
    },
    {
      "text": "ALERT: Traffic incident on  Beddington Bv and 4 St NE.   #yyctraffic #yycroads https://t.co/f1bzkJ2wk9",
      "time": "11:52 p.m."
    },
    {
      "text": "ALERT: Traffic incident on  Nose Hill Dr and Crowchild Tr NW, blocking the NB lanes.   #yyctraffic #yycroads https://t.co/Lzl64OeTvr",
      "time": "10:56 p.m."
    },
    {
      "text": "ALERT: Traffic incident on  Nose Hill Dr and 87 St NW, blocking multiple lanes.   #yyctraffic #yycroads https://t.co/sQWuCRIHh2",
      "time": "10:01 p.m."
    },
    {
      "text": "ALERT: Traffic incident on  Peigan Tr and 36 St SE.   #yyctraffic #yycroads https://t.co/VVFnPrIHK2",
      "time": "9:53 p.m."
    },
    {
      "text": "ALERT: Traffic incident on Centre St and 40 Ave NW.   #yyctraffic #yycroads",
      "time": "9:17 p.m."
    },
    {
      "text": "EB Stoney Tr from Sarcee Tr NW to Shaganappi Tr NW, Calgary  -  road maintenance operations, Nov.13 at 10pm until Nov.14 at 6am. Expect a speed reduction with a right shoulder encroachment. #ABRoads #yyctraffic",
      "time": "8:05 p.m."
    },
    {
      "text": "ALERT: Two vehicle incident on Barlow Tr and 72 Ave SE, blocking multi lanes.   #yyctraffic #yycroads https://t.co/l13tbPUYIZ",
      "time": "3:17 p.m."
    },
    {
      "text": "ALERT:  Emergency services have been called to help a pedestrian involved in an incident on 32 Ave and Carol Dr NW. Please go slow and watch for fellow Calgarians.   #yyctraffic #yycroads",
      "time": "3:04 p.m."
    },
    {
      "text": "ALERT: Two vehicle incident on EB 16 Ave and 19 St NE, blocking the right lane.   #yyctraffic #yycroads https://t.co/bouFkPylJS",
      "time": "2:15 p.m."
    },
    {
      "text": "ALERT: Traffic incident on Glenmore Tr and Stoney Tr SE, partially blocking the EB to NB ramp.   #yyctraffic #yycroads https://t.co/HvDg4iRv30",
      "time": "2:11 p.m."
    },
    {
      "text": "ALERT: Traffic incident on  EB Memorial Dr and Centre St S.   #yyctraffic #yycroads https://t.co/6GOjH0TQ6q",
      "time": "12:57 p.m."
    },
    {
      "text": "ALERT: Traffic incident on  68 St and Mcknight Bv NE.   #yyctraffic #yycroads",
      "time": "9:37 a.m."
    },
    {
      "text": "ALERT: Traffic incident on  Sarcee Tr and Sherwood Bv NW.   #yyctraffic #yycroads",
      "time": "8:21 a.m."
    },
    {
      "text": "ALERT: Multi-vehicle incident on  SB Shaganappi Tr and John Laurie Bv NW, blocking the left lane.   #yyctraffic #yycroads https://t.co/71TstIj6to",
      "time": "7:53 a.m."
    },
    {
      "text": "ALERT: Traffic incident on  Panorama Hills Bv and Country Hills Bv NW.   #yyctraffic #yycroads",
      "time": "7:41 a.m."
    },
    {
      "text": "ALERT: Traffic incident on  NB Crowchild Tr and 17 Ave SW, blocking the right lane.   #yyctraffic #yycroads https://t.co/sYPReQW2VW",
      "time": "7:33 a.m."
    },
    {
      "text": "ALERT: Traffic incident on  84 St north of 114 Ave SE.   #yyctraffic #yycroads",
      "time": "7:25 a.m."
    },
    {
      "text": "ALERT: Two vehicle incident on Old Banff Coach Rd and 85 St SW, blocking the WB lanes and NB right lane.   #yyctraffic #yycroads https://t.co/NkLeqrvuZE",
      "time": "7:12 a.m."
    },
    {
      "text": "ALERT: Traffic incident on  36 St and 30 Ave SE.   #yyctraffic #yycroads",
      "time": "6:57 a.m."
    },
    {
      "text": "ALERT: Traffic incident on  Centre Ave and Barlow Tr SE.   #yyctraffic #yycroads",
      "time": "6:46 a.m."
    },
    {
      "text": "ALERT: Traffic incident on  Falconridge Bv and Taradale Dr NE.   #yyctraffic #yycroads https://t.co/2ZKTCm4aeI",
      "time": "7:18 p.m."
    },
    {
      "text": "ALERT: Traffic incident on  14 St and 16 Ave NW.   #yyctraffic #yycroads",
      "time": "6:14 p.m."
    },
    {
      "text": "SB Deerfoot Tr just past Southland Dr -MVC. Stay to the right and expect delays. (6:13pm) #ABRoads #yyctraffic",
      "time": "6:13 p.m."
    },
    {
      "text": "ALERT: Traffic signals are blank on  53 St and Dalhousie Dr NW, power outage in the area. Please drive with caution. #yyctraffic #yycroads",
      "time": "3:33 p.m."
    },
    {
      "text": "In the Northwest, watch out for a crash on Beddington Trail at Stoney Trail, blocking lanes through that intersection, watch out for emergency crews on scene #yyctraffic https://t.co/M7113G3RFY",
      "time": "1:52 p.m."
    },
    {
      "text": "ALERT: Traffic incident on  Beddington Tr and Stoney Tr NW.   #yyctraffic #yycroads https://t.co/Bx43Dncj3L",
      "time": "1:40 p.m."
    },
    {
      "text": "ALERT: Traffic incident on  60 St and 128 Ave NE.   #yyctraffic #yycroads",
      "time": "11:26 a.m."
    },
    {
      "text": "In the SW, a collision SB Sarcee Trail at Richmond Road, blocking the left lane. #yyctraffic #yycroads https://t.co/ML10Cexxgv",
      "time": "10:16 a.m."
    },
    {
      "text": "ALERT: Two vehicle incident on  Sarcee Tr at Richmond Rd SW, blocking the SB left lanes.   #yyctraffic #yycroads https://t.co/TfFdKXUAC7",
      "time": "10:13 a.m."
    },
    {
      "text": "The following closures will be in effect for the Field of Crosses event on Remembrance Day\n\nEast &amp; westbound Riverfront Avenue access to the Centre Street Bridge will be closed from 9-noon\nEB Memorial Drive to northbound Centre Street will be closed from 9 to noon. #yyctraffic",
      "time": "9:37 a.m."
    },
    {
      "text": "In the NE, Center Street and 64thAvenue, there's collision right in the intersection. #yyctraffic #yycroads https://t.co/B1yx63GqEX",
      "time": "6:48 a.m."
    },
    {
      "text": "ALERT: Two vehicle incident on  64 Ave and Centre St N, blocking multiple lanes in the intersection.   #yyctraffic #yycroads https://t.co/MnzJ1QD7KL",
      "time": "6:43 a.m."
    },
    {
      "text": "ALERT: Traffic incident on 36 St and Marbank Dr NE, blocking the NB right lane.   #yyctraffic #yycroads https://t.co/doH1pjHa0k",
      "time": "10:35 p.m."
    },
    {
      "text": "ALERT: Two vehicle incident on  SB 14 St and Northmount Dr NW, blocking the right lane.   #yyctraffic #yycroads https://t.co/XEudjjs0ko",
      "time": "8:16 p.m."
    },
    {
      "text": "ALERT: Traffic incident on  24 Ave and 19 St NW.   #yyctraffic #yycroads",
      "time": "4:43 p.m."
    },
    {
      "text": "ALERT: Traffic incident on  Falconridge Dr and 68 St NE.   #yyctraffic #yycroads",
      "time": "3:30 p.m."
    },
    {
      "text": "NB Stoney Tr approaching Nose Hill Dr NW, Calgary -  MVC  blocking the RH lane. Drive with caution and expect delays. (3:28pm) #ABRoads #yyctraffic",
      "time": "3:29 p.m."
    },
    {
      "text": "In the Northwest, watch out for a crash on NB Stoney Trail approaching Nose Hill Drive, blocking the right-hand lanes #yyctraffic https://t.co/MRvvAlZwB6",
      "time": "3:25 p.m."
    },
    {
      "text": "ALERT: Traffic incident on  NB 18 St and Glenmore Tr SE, blocking the right lane.   #yyctraffic #yycroads https://t.co/h8EjkXSeo7",
      "time": "2:46 p.m."
    },
    {
      "text": "In the Northwest, watch out for a crash on WB Stoney Trail at Sarcee Trail, blocking the right-hand lane #yyctraffic https://t.co/5kMlJi4ZhE",
      "time": "2:01 p.m."
    },
    {
      "text": "WB Stoney Tr near Sarcee Tr NW, Calgary - MVC. Consider using an alternative route. (2:00pm) #ABRoads #yyctraffic",
      "time": "2:00 p.m."
    },
    {
      "text": "ALERT: Traffic incident on  WB Stoney Tr and Sarcee Tr NW.   #yyctraffic #yycroads https://t.co/u4hkfr4le9",
      "time": "1:56 p.m."
    },
    {
      "text": "In the Northeast, watch out for a crash on WB Country Hills Blvd just past 11th Street, blocking the right-hand lane #yyctraffic https://t.co/gn5yD1PLkG",
      "time": "11:58 a.m."
    },
    {
      "text": "ALERT: Traffic incident on WB Country Hills Bv approaching Coventry Bv NE, blocking the right lane.   #yyctraffic #yycroads https://t.co/8fFBeAEF38",
      "time": "11:43 a.m."
    },
    {
      "text": "ALERT: Traffic incident on EB Beddington Tr at Hidden Valley Li NW, blocking the right lane. Expect delays in the area. #yyctraffic #yycroads https://t.co/hNJ9q41dmT",
      "time": "10:18 a.m."
    },
    {
      "text": "ALERT: Traffic incident on 68 St and 86 Ave SE. Please drive with caution. #yyctraffic #yycroads https://t.co/ef0uizPidQ",
      "time": "7:25 a.m."
    },
    {
      "text": "ALERT: Traffic incident on  EB Stoney Tr approaching Metis Tr NE, blocking the right lanes.   #yyctraffic #yycroads https://t.co/VYim0kbVcA",
      "time": "3:51 a.m."
    },
    {
      "text": "ALERT: Traffic incident on Anderson Rd and Deerfoot Tr SE.   #yyctraffic #yycroads",
      "time": "11:10 p.m."
    },
    {
      "text": "ALERT: Traffic incident on  EB Stoney Tr and 69 St SW.   #yyctraffic #yycroads",
      "time": "9:25 p.m."
    },
    {
      "text": "ALERT: Traffic incident on  61 Ave and 44 St SE.   #yyctraffic #yycroads",
      "time": "8:54 p.m."
    },
    {
      "text": "ALERT: Traffic incident on  68 St and Applewood Dr SE.   #yyctraffic #yycroads",
      "time": "6:43 p.m."
    },
    {
      "text": "ALERT: Multi-vehicle incident on  52 St and Seton Bv SE, blocking multiple lanes.   #yyctraffic #yycroads https://t.co/tQwr7R4wwm",
      "time": "6:04 p.m."
    },
    {
      "text": "In the Southeast, watch out for a crash on WB Heritage Drive approaching Bonaventure Drive, that's blocking the right-hand lane #yyctraffic https://t.co/etDXgA1pd1",
      "time": "4:38 p.m."
    },
    {
      "text": "ALERT: Two vehicle incident on  WB Heritage Dr and Bonaventure Dr SE, blocking the right lane.   #yyctraffic #yycroads https://t.co/2YFPpfRRm3",
      "time": "4:34 p.m."
    },
    {
      "text": "In the Southeast, we have a crash on EB Glenmore Trail just past Blackfoot Trail, blocking the right-hand lane #yyctraffic https://t.co/mwGH0pqCq9",
      "time": "2:56 p.m."
    },
    {
      "text": "ALERT: Two vehicle incident on  EB Glenmore Tr and Blackfoot Tr SE, blocking the right lane.   #yyctraffic #yycroads https://t.co/1yvvJLohyc",
      "time": "2:47 p.m."
    },
    {
      "text": "In the Southeast, watch out for a crash on SB Deerfoot Trail approaching Glenmore Trail, blocking the right-hand lane #yyctraffic https://t.co/j6d5PwgZ0i",
      "time": "1:57 p.m."
    },
    {
      "text": "ALERT: Traffic incident on  SB Deerfoot Tr and Glenmore Tr SE, blocking the right lane.   #yyctraffic #yycroads https://t.co/AZJe0ckVdQ",
      "time": "1:54 p.m."
    },
    {
      "text": "ALERT: Two vehicle incident on NB 52 St approaching Stoney Tr SE, blocking the right lanes.  #yyctraffic #yycroads https://t.co/QJhZLpsJtY",
      "time": "1:17 p.m."
    },
    {
      "text": "In the Northeast, watch out for a crash on NB 52nd Street just past 4th Avenue, blocking the right-hand lane #yyctraffic https://t.co/0tw9Nh6Duv",
      "time": "1:04 p.m."
    },
    {
      "text": "ALERT: Traffic incident on NB 52 St after 4 Ave NE, blocking the right lane.   #yyctraffic #yycroads https://t.co/wYSzt2hzzB",
      "time": "12:46 p.m."
    },
    {
      "text": "In the NW, EB Memorial Drive just east of 14th Street, the right lane is blocked off due to construction. #yyctraffic #yycroads https://t.co/Gk6CUTE11V",
      "time": "10:04 a.m."
    },
    {
      "text": "ALERT:  Emergency services are helping a pedestrian involved in an incident on 5 St and 15 Ave SW. Please go slow and watch for fellow Calgarians.   #yyctraffic #yycroads",
      "time": "9:29 a.m."
    },
    {
      "text": "In the NE, NB Metis Trail approaching Stoney Trail, a collision blocking the right lane. #yyctraffic #yycroads https://t.co/u58DcwGvX1",
      "time": "7:56 a.m."
    },
    {
      "text": "ALERT: Two vehicle incident on NB Metis Tr approaching Stoney Tr NE, blocking the right lanes.   #yyctraffic #yycroads https://t.co/VhGCiGYUKl",
      "time": "7:43 a.m."
    },
    {
      "text": "In the NE, SB Deerfoot Trail at 32nd Avenue, a collision in the left lane. #yyctraffic #yycroads https://t.co/VnPIKhyWUU",
      "time": "6:37 a.m."
    },
    {
      "text": "In the NE, NB Deerfoot at McKnight Blvd, emergency vehicles in the right lane due to a collision. #yyctraffic #yycroads https://t.co/v1MJBKrQSJ",
      "time": "6:35 a.m."
    },
    {
      "text": "ALERT: Traffic incident on SB Deerfoot Tr at 32 Ave NE, blocking the left lanes. Please drive with caution. #yyctraffic #yycroads https://t.co/LoF9OqSQaF",
      "time": "6:30 a.m."
    },
    {
      "text": "NB Deerfoot Tr at McKnight Blvd NE, Calgary - MVC affecting the LHL. (6:13am) #ABRoads #yyctraffic",
      "time": "6:13 a.m."
    },
    {
      "text": "ALERT: Traffic incident on NB Deerfoot Tr at McKnight Bv NE, blocking the left lane.  #yyctraffic #yycroads https://t.co/kzQBuYdDWr",
      "time": "6:11 a.m."
    },
    {
      "text": "WB Stoney Tr approaching Deerfoot Tr SE, Calgary - road maintenance operations, Nov.7 at 11pm until Nov.8 at 1am. Expect a lane closure and speed reduced to 80km/h. #ABRoads #yyctraffic",
      "time": "11:15 p.m."
    },
    {
      "text": "SB Deerfoot Tr at Airport Tr NE, Calgary - MVC. Drive with caution in the area. (10:57pm) #ABRoads #yyctraffic",
      "time": "10:57 p.m."
    },
    {
      "text": "ALERT: Traffic incident on  14 St and 16 Ave NW.   #yyctraffic #yycroads",
      "time": "9:09 p.m."
    },
    {
      "text": "ALERT: On Symons Valley Py at Sherview Drive, there is a traffic incident that is blocking the EB right lane. #yyctraffic https://t.co/2AhPigr1BD",
      "time": "8:06 p.m."
    },
    {
      "text": "ALERT: Traffic incident on  Symons Valley Py at Sherview Dr NW, blocking the EB right lane.   #yyctraffic #yycroads https://t.co/Sija8LIVlX",
      "time": "7:50 p.m."
    },
    {
      "text": "SB Deerfoot Trail off RAMP to Peigan Trail, in Calgary - bridge repairs, Nov.7, 9pm-5am. Expect RH lane closure and speed reduced to 50km/h. #ABRoads #yyctraffic",
      "time": "7:20 p.m."
    },
    {
      "text": "ALERT: Traffic incident on  NB Deerfoot Tr approaching 16 Ave NE, blocking the right shoulder on the NB exit ramp.   #yyctraffic #yycroads https://t.co/rotj6XZSTo",
      "time": "7:16 p.m."
    },
    {
      "text": "NB Deerfoot Trail at Peigan Trail, in Calgary - bridge repairs, Nov.7, from 9pm to 5am. Expect RH lane closure and speed reduced to 50km/h. #yyctraffic #ABRoads",
      "time": "7:15 p.m."
    },
    {
      "text": "ALERT:  Emergency services are helping a pedestrian involved in an incident on 11 St b/w 9 Ave and 10 Ave SW. The road is closed.. Please go slow and watch for fellow Calgarians Please use alternate route. #yyctraffic #yycroads https://t.co/qM1YNBo0tj",
      "time": "6:57 p.m."
    },
    {
      "text": "ALERT: Traffic incident on 11 St and Aero Ga NE.   #yyctraffic #yycroads",
      "time": "6:17 p.m."
    },
    {
      "text": "ALERT: Traffic incident on 144 Ave b/w 69 St and 85 St NW.   #yyctraffic #yycroads",
      "time": "5:47 p.m."
    },
    {
      "text": "ALERT: Two vehicle incident on  EB Glenmore Tr at Stoney Tr SE, blocking the left lane.   #yyctraffic #yycroads https://t.co/3o286dChuZ",
      "time": "5:45 p.m."
    },
    {
      "text": "SB QEII approaching jct Hwy566, Balzac interchange - MVC affecting the LHL and shoulder. Expect delays. (5:37pm) #ABRoads #yyctraffic",
      "time": "5:37 p.m."
    },
    {
      "text": "ALERT: Traffic incident on  Peigan Tr and Barlow Tr SE, blocking the NB right lanes and WB to NB right turn.   #yyctraffic #yycroads https://t.co/6hdCBJwQoA",
      "time": "5:07 p.m."
    },
    {
      "text": "ALERT: Traffic incident on  WB 16 Ave at 68 St NE, blocking the left lane.   #yyctraffic #yycroads https://t.co/HaYustyp13",
      "time": "4:22 p.m."
    },
    {
      "text": "ALERT: Traffic incident on  Crowchild Tr and University Dr NW.   #yyctraffic #yycroads",
      "time": "4:03 p.m."
    },
    {
      "text": "ALERT: Traffic incident on  SB 52 St at New Brighton Dr SE, blocking the right lane.   #yyctraffic #yycroads https://t.co/000WsPXZ6H",
      "time": "3:49 p.m."
    },
    {
      "text": "ALERT: Traffic incident on  WB Kensington Rd at 23 St NW, blocking the right lane.   #yyctraffic #yycroads",
      "time": "3:35 p.m."
    },
    {
      "text": "EB &amp; WB Hwy560 at RR283, S of Chestermere - MVC. Expect flag persons and delays. (11:10pm) #ABRoads #yyctraffic",
      "time": "11:10 p.m."
    },
    {
      "text": "In the Southeast, overnight bridge construction on NB Deerfoot Trail at Peigan Trail blocking the two right-hand lanes, expect delays in that area #yyctraffic https://t.co/rB7hDSwtiY",
      "time": "9:40 p.m."
    },
    {
      "text": "In the Northeast, there's a single-vehicle incident on SB Deerfoot Trail at 32nd Avenue, blocking the right-hand lane #yyctraffic https://t.co/23BAdVpOqm",
      "time": "7:26 p.m."
    },
    {
      "text": "SB Deerfoot Tr at 32 Ave NE, in Calgary - single vehicle incident, blocking the RH lanes. (7:23pm) via @yyctransport #yyctraffic",
      "time": "7:24 p.m."
    },
    {
      "text": "ALERT: Single vehicle incident on  SB Deerfoot Tr at 32 Ave NE, blocking the right lanes. Please drive with caution. #yyctraffic #yycroads https://t.co/1mONza7Cdw",
      "time": "7:20 p.m."
    },
    {
      "text": "ALERT: Traffic incident on  80 Ave and Saddletowne Ci NE.   #yyctraffic #yycroads",
      "time": "7:06 p.m."
    },
    {
      "text": "In the Southeast, incident on EB Glenmore Trail just past Blackfoot Trail, expect delays #yyctraffic https://t.co/jJN2UjobOT",
      "time": "6:54 p.m."
    },
    {
      "text": "ALERT:  on  SB 52 St and Rundlehorn Dr NE, blocking multiple lanes.   #yyctraffic #yycroads https://t.co/w0SX1eARKQ",
      "time": "5:49 p.m."
    },
    {
      "text": "ALERT: Traffic incident on  EB Country Hills Bv and Cityscape Ga NE, blocking multiple lanes.   #yyctraffic #yycroads https://t.co/d5JlMtIZof",
      "time": "5:21 p.m."
    },
    {
      "text": "ALERT: Traffic incident on  WB 64 Ave and Deerfoot Tr NE, blocking multiple lanes.   #yyctraffic #yycroads https://t.co/MElCG0Etv0",
      "time": "4:57 p.m."
    },
    {
      "text": "ALERT: Multi-vehicle incident on  WB Southland Dr and Deerfoot Tr SE, blocking the right lane.   #yyctraffic #yycroads https://t.co/KxQk8nHIZn",
      "time": "4:49 p.m."
    },
    {
      "text": "ALERT: Traffic incident on  EB Memorial Dr and 44 St NE.   #yyctraffic #yycroads",
      "time": "4:47 p.m."
    },
    {
      "text": "ALERT: Traffic incident on Barlow Tr and 61 Ave SE.   #yyctraffic #yycroads",
      "time": "4:47 p.m."
    },
    {
      "text": "ALERT: Traffic incident on  SB 52 St and Maryvale Rd NE, blocking multiple lanes.   #yyctraffic #yycroads",
      "time": "4:45 p.m."
    },
    {
      "text": "ALERT: Multi-vehicle incident on  EB Memorial Dr and Deerfoot Tr NE, blocking multiple lanes.   #yyctraffic #yycroads https://t.co/r5MWdYRp3E",
      "time": "4:37 p.m."
    },
    {
      "text": "ALERT: Traffic incident on  Edmonton Tr and 7 Ave NE.   #yyctraffic #yycroads",
      "time": "4:32 p.m."
    },
    {
      "text": "ALERT: Traffic incident on  WB Glenmore Tr and Barlow Tr SE, blocking the left lane.   #yyctraffic #yycroads https://t.co/roX0PFvbfq",
      "time": "3:52 p.m."
    },
    {
      "text": "ALERT: Traffic incident on  25 St and 45 Ave SE.   #yyctraffic #yycroads",
      "time": "3:39 p.m."
    },
    {
      "text": "ALERT: Traffic incident on  Sarcee Tr and Symons Valley Py NW.   #yyctraffic #yycroads",
      "time": "3:05 p.m."
    },
    {
      "text": "ALERT: Traffic incident on  NB Crowchild Tr and Bow Tr SW, blocking the right lane.   #yyctraffic #yycroads https://t.co/hKO9Ci18XA",
      "time": "9:39 a.m."
    },
    {
      "text": "NB Deerfoot Tr approaching Peigan Tr SE, Calgary - MVC affecting the LHL. Expect delays. (9:26am) #ABRoads #yyctraffic",
      "time": "9:26 a.m."
    },
    {
      "text": "ALERT: Traffic incident on  NB Deerfoot Tr approaching Peigan Tr SE, blocking the left lane.   #yyctraffic #yycroads https://t.co/DiKYgeoIhY",
      "time": "9:18 a.m."
    },
    {
      "text": "ALERT: Traffic incident on  NB Deerfoot Tr and Country Hills Bv NE.   #yyctraffic #yycroads https://t.co/179JSSYIFb",
      "time": "8:45 a.m."
    },
    {
      "text": "In the NW, NB Crowchild Trail at Bow Trail, slowdowns due to a collision. Backed up to Glenmore Trail. #yyctraffic #yycroads https://t.co/wIAAkzXvY3",
      "time": "8:06 a.m."
    },
    {
      "text": "ALERT: Traffic incident on  NB Crowchild Tr approaching 17 Ave SW, blocking the right lane.   #yyctraffic #yycroads https://t.co/xlXN6KGpGT",
      "time": "8:01 a.m."
    },
    {
      "text": "ALERT: Traffic incident on WB Stoney Tr approaching Harvest Hills Bv N, blocking the right lane.   #yyctraffic #yycroads https://t.co/cgNM72iPC8",
      "time": "7:59 a.m."
    },
    {
      "text": "ALERT: Traffic incident on  WB Memorial Dr and 28 St SE, blocking the right lane.   #yyctraffic #yycroads https://t.co/YDJ1wCkSbg",
      "time": "7:51 a.m."
    },
    {
      "text": "ALERT: Traffic incident on  EB 17 Ave and 10 St SW.   #yyctraffic #yycroads https://t.co/MP0SVH0Ql8",
      "time": "7:49 a.m."
    },
    {
      "text": "ALERT: Traffic incident on  Heritage Dr and 11 St SE.   #yyctraffic #yycroads",
      "time": "7:44 a.m."
    },
    {
      "text": "ALERT: Traffic incident on  NB Deerfoot Tr and Memorial Dr SE, blocking the left lane.   #yyctraffic #yycroads https://t.co/kZL3vOYeUr",
      "time": "7:41 a.m."
    },
    {
      "text": "EB Stoney Tr approaching Deerfoot Tr NE - MVC, expect delays in the area. (7:39am) via @yyctransport #yyctraffic #ABRoads",
      "time": "7:40 a.m."
    },
    {
      "text": "ALERT: Traffic incident on NB Deerfoot Tr at Beddington Tr NE, blocking the right lane. With other incidents in the area, expect additional delays. #yyctraffic #yycroads",
      "time": "7:22 a.m."
    },
    {
      "text": "NB Deerfoot Tr at Anderson Rd SE, Calgary - MVC. Expect delays. (7:17am) #ABRoads #yyctraffic",
      "time": "7:17 a.m."
    },
    {
      "text": "ALERT: Traffic incident on NB Deerfoot Tr at Anderson Rd SE, blocking the right lane. There are considerable backups in the area. #yyctraffic #yycroads https://t.co/OUXUoGxu2m",
      "time": "7:13 a.m."
    },
    {
      "text": "NB Deerfoot Tr approaching Airport Tr NE, Calgary -  traffic incident, blocking the RH lane. (6:55am) via @yyctransport #yyctraffic",
      "time": "6:55 a.m."
    },
    {
      "text": "ALERT: Traffic signals are flashing red on  16 Ave and 14 St NW, crew has been dispatched.   #yyctraffic #yycroads",
      "time": "8:09 p.m."
    },
    {
      "text": "CLEARED: The earlier incident on  3 St at 7 Ave SE has cleared. #yyctraffic #yycroads",
      "time": "8:05 p.m."
    },
    {
      "text": "In the Northeast, incident on NB Deerfoot Trail approaching 16th Avenue, blocking the right-hand lane #yyctraffic https://t.co/pXPmyxEgtS",
      "time": "7:28 p.m."
    },
    {
      "text": "NB Deerfoot Trail at Anderson Rd, in Calgary - bridge repairs, Nov.5, from 9pm to 5am. Expect RH lane closure and speed reduced to 50km/h. #yyctraffic #ABRoads",
      "time": "7:15 p.m."
    },
    {
      "text": "NB Deerfoot Trail at Peigan Trail, in Calgary - bridge repairs, Nov.5, from 9pm to 5am. Expect RH lane closure and speed reduced to 50km/h. #yyctraffic #ABRoads",
      "time": "7:10 p.m."
    },
    {
      "text": "ALERT: Traffic incident on  36 St and Radcliffe Dr SE, blocking the NB right lane.   #yyctraffic #yycroads https://t.co/nTZ6FuVLeM",
      "time": "7:09 p.m."
    },
    {
      "text": "SB Deerfoot Trail off RAMP to Peigan Trail, in Calgary - bridge repairs, Nov.5, 9pm-5am. Expect RH lane closure and speed reduced to 50km/h. #ABRoads #yyctraffic",
      "time": "7:05 p.m."
    },
    {
      "text": "NB Deerfoot Tr approaching McKnight Blvd NE, in Calgary - Traffic incident, blocking the LH lane. (6:45pm) via @yyctransport #yyctraffic",
      "time": "6:45 p.m."
    },
    {
      "text": "ALERT: Traffic incident on  NB Deerfoot Tr approaching McKnight Bv NE, blocking the left lane. Expect delays in the area. #yyctraffic #yycroads https://t.co/fqHhefxd6W",
      "time": "6:35 p.m."
    },
    {
      "text": "ALERT: Traffic incident on  36 Ave and 32 Ave NE.   #yyctraffic #yycroads",
      "time": "6:32 p.m."
    },
    {
      "text": "ALERT: Traffic incident on  SB Crowchild Tr after 16 Ave NW. Expect delays in the area. #yyctraffic #yycroads",
      "time": "6:31 p.m."
    },
    {
      "text": "In the Northwest, a crash on SB Crowchild Trail just past 16th Avenue causing backups #yyctraffic https://t.co/IQEobYCIqF",
      "time": "6:28 p.m."
    },
    {
      "text": "SB Deerfoot Trail approaching Stoney Tr SE, in Calgary - MVC, blocking the RH lane. (6:18pm) via @yyctransport #yyctraffic #ABRoads",
      "time": "6:18 p.m."
    },
    {
      "text": "In the Northeast, a stalled vehicle on NB Deerfoot Trail approaching McKnight Blvd is blocking the left-hand lane, expect delays #yyctraffic https://t.co/7LmaSN9hMd",
      "time": "6:18 p.m."
    },
    {
      "text": "ALERT: Single vehicle incident on NB 52 St after 114 Ave SE, blocking the right lane.   #yyctraffic #yycroads https://t.co/dNSo43kqx0",
      "time": "6:10 p.m."
    }
];
const labeledTweets = [
    {
      "text": "",
      "time": "",
      "severity": 0
    },
    {
      "text": "ALERT: Traffic incident on 53 St and 146 Ave SW. Expect delays in the area. #yyctraffic #yycroads",
      "time": "5:29 p.m.",
      "severity": 1
    },
    {
      "text": "ALERT: Traffic incident on Macleod Tr and 210 Ave SE, blocking multiple lanes in the intersection. Expect delays in the area. #yyctraffic #yycroads https://t.co/k0G5x2mcEl",
      "time": "4:35 p.m.",
      "severity": 2
    },
    {
      "text": "ALERT: Traffic incident on SB Stoney Tr approaching 96 Ave NE, blocking the left lane. Expect delays in the area. #yyctraffic #yycroads https://t.co/Wehtwg2yzo",
      "time": "4:30 p.m.",
      "severity": 2
    },
    {
      "text": "ALERT: Traffic incident on 17 Ave and 26 St SW.   #yyctraffic #yycroads",
      "time": "12:56 p.m.",
      "severity": 0
    },
    {
      "text": "ALERT: Traffic incident on SB Shawville Bv at Shawville Ga SE, blocking the right lane.  #yyctraffic #yycroads https://t.co/1yZcQSfAzq",
      "time": "5:10 p.m.",
      "severity": 1
    },
    {
      "text": "ALERT: Traffic incident on Crowchild Tr and Silver Springs Ga NW, blocking the EB to SB exit.   #yyctraffic #yycroads https://t.co/PdCLUkwCRW",
      "time": "4:02 p.m.",
      "severity": 1
    },
    {
      "text": "ALERT: Traffic incident on 4 St and 27 Ave NW. Expect delays in the area. #yyctraffic #yycroads",
      "time": "2:38 p.m.",
      "severity": 0
    },
    {
      "text": "ALERT: Traffic incident on 16 Ave and Stoney Tr NW, partially blocking the WB on-ramp.   #yyctraffic #yycroads https://t.co/ZkuDO1lPoG",
      "time": "2:24 p.m.",
      "severity": 1
    },
    {
      "text": "NB Stoney Tr approaching Glenmore Tr SE, Calgary - cable barrier repairs, Nov.22, in progress. Expect a LH shoulder closure. (12:38pm) #ABRoads #yyctraffic",
      "time": "12:38 p.m.",
      "severity": 1
    },
    {
      "text": "ALERT: Traffic incident on 84 St and Peigan Tr SE.  #yyctraffic #yycroads https://t.co/oPLAGGDVbR",
      "time": "4:19 p.m.",
      "severity": 1
    },
    {
      "text": "Stoney Tr near Glenmore Tr SE, Calgary - MVC. Expect delays in the area. (4:12pm) #ABRoads #yyctraffic",
      "time": "4:12 p.m.",
      "severity": 2
    },
    {
      "text": "ALERT: Traffic incident on SB Macleod Tr at Stoney Tr SW, blocking the right lane. Expect delays in the area. #yyctraffic #yycroads https://t.co/j2f2PoX9xv",
      "time": "2:14 p.m.",
      "severity": 1
    },
    {
      "text": "ALERT: Traffic incident on 85 St and Wentworth Dr SW, blocking the SB right lane.   #yyctraffic #yycroads https://t.co/3TkxrUZrag",
      "time": "11:28 a.m.",
      "severity": 0
    },
    {
      "text": "SB Stoney Tr approaching 96 Ave NE, Calgary - MVC blocking the LHL. Keep right. (4:33pm) #ABRoads #yyctraffic",
      "time": "4:34 p.m.",
      "severity": 2
    },
    {
      "text": "ALERT: Traffic incident on 64 Ave and Deerfoot Tr NE, blocking the WB right lane.   #yyctraffic #yycroads https://t.co/du6Opab1lE",
      "time": "2:55 p.m.",
      "severity": 1
    },
    {
      "text": "NB QEII after Stoney Tr NE, N of Calgary - MVC blocking the LHL. Expect delays in the area. (9:56am) #ABRoads #yyctraffic",
      "time": "9:56 a.m.",
      "severity": 2
    },
    {
      "text": "ALERT: Two vehicle incident on  NB Crowchild Tr and Bow Tr SW, blcoking the right lane.   #yyctraffic #yycroads https://t.co/soMEArWkOF",
      "time": "6:05 p.m.",
      "severity": 2
    },
    {
      "text": "In the Southwest, stalled vehicle on WB Glenmore Trail at 37th Street, blocking the middle lane, expect major backups #yyctraffic https://t.co/btN0kx0rZK",
      "time": "5:48 p.m.",
      "severity": 2
    },
    {
      "text": "ALERT: Traffic incident on  42 Ave and 9 St SE.   #yyctraffic #yycroads",
      "time": "5:31 p.m.",
      "severity": 0
    },
    {
      "text": "ALERT: Traffic incident on  Saddletowne Ci and 60 St NE.   #yyctraffic #yycroads",
      "time": "5:26 p.m.",
      "severity": 0
    },
    {
      "text": "ALERT: Traffic incident on  NB Deerfoot Tr north of Peigan Tr SE, blocking the right lane.   #yyctraffic #yycroads https://t.co/NFGIyhAOrY",
      "time": "5:12 p.m.",
      "severity": 2
    },
    {
      "text": "ALERT: Traffic incident on  52 St and 14 Ave SE.   #yyctraffic #yycroads https://t.co/V3dwtwfcTC",
      "time": "5:07 p.m.",
      "severity": 1
    },
    {
      "text": "In the Southeast, watch out for a new crash on NB Deerfoot Trail approaching 17th Avenue, blocking the right-hand lane #yyctraffic https://t.co/IIslRuLGgG",
      "time": "5:04 p.m.",
      "severity": 2
    },
    {
      "text": "ALERT: Traffic incident on  SB 36 St and 4 Ave NE, blocking the right lane.   #yyctraffic #yycroads https://t.co/DHZvLYRgaX",
      "time": "4:50 p.m.",
      "severity": 2
    },
    {
      "text": "In the Northeast, watch out for spun out vehicles on EB Stoney Trail just east of Harvest Hills Blvd, blocking the right-hand lane #yyctraffic https://t.co/w90O2NDY0t",
      "time": "4:39 p.m.",
      "severity": 2
    },
    {
      "text": "ALERT: Multi-vehicle incident on  EB Stoney Tr and Harvest Hills Bv NE, blocking the right shoulder.   #yyctraffic #yycroads https://t.co/gRA5vFlvbG",
      "time": "4:29 p.m.",
      "severity": 2
    },
    {
      "text": "NB Deerfoot Trail approaching 17th Ave, Calgary - MVC, blocking the LH lane. (4:25pm) via @yyctransport #yyctraffic",
      "time": "4:25 p.m.",
      "severity": 2
    },
    {
      "text": "In the Northeast, watch out for a crash on WB McKnight Blvd at Deerfoot Trail, blocking the right-hand lane #yyctraffic https://t.co/GNnxAhhQHy",
      "time": "4:19 p.m.",
      "severity": 2
    },
    {
      "text": "In the Southeast, watch out for a crash on NB Deerfoot Trail approaching 17th Avenue, blocking the left-hand lane #yyctraffic https://t.co/gcDYFgxgsT",
      "time": "4:17 p.m.",
      "severity": 2
    },
    {
      "text": "ALERT: Traffic incident on  WB McKnight Bv and Deerfoot Tr NE, blocking the right lane.   #yyctraffic #yycroads https://t.co/MNv7LH4E8t",
      "time": "4:15 p.m.",
      "severity": 2
    },
    {
      "text": "In the Northwest, watch out for a crash on NB Shaganappi Trail at Crowchild Trail, blocking the right-hand lane #yyctraffic https://t.co/GwatYMnQ22",
      "time": "4:08 p.m.",
      "severity": 2
    },
    {
      "text": "In the Southeast, there's a stalled vehicle on NB Deerfoot Trail at the Ivor Strong Bridge, that's blocking the right-hand lane #yyctraffic https://t.co/64DkeTloyy",
      "time": "4:05 p.m.",
      "severity": 2
    },
    {
      "text": "ALERT: Two vehicle incident on  EB Crowchild Tr and Shaganappi Tr NW, blocking the right lane.   #yyctraffic #yycroads https://t.co/Vu528fWhfV",
      "time": "3:55 p.m.",
      "severity": 1
    },
    {
      "text": "ALERT: Multi-vehicle incident on  WB 96 Ave and Deerfoot Tr NE, blocking multiple lanes.   #yyctraffic #yycroads https://t.co/avPezVPyl1",
      "time": "6:09 p.m.",
      "severity": 2
    },
    {
      "text": "ALERT: Traffic incident on 16 Ave and 29 St NW.   #yyctraffic #yycroads",
      "time": "3:23 p.m.",
      "severity": 0
    },
    {
      "text": "ALERT: Traffic incident on 9 Ave b/w 13 St and 14 St SE.   #yyctraffic #yycroads",
      "time": "3:06 p.m.",
      "severity": 0
    },
    {
      "text": "In the Southwest, incident on NB Crowchild Trail north of 33rd Avenue has the left-hand lane blocked off, expect delays #yyctraffic https://t.co/aoRVJYYq4B",
      "time": "3:00 p.m.",
      "severity": 1
    },
    {
      "text": "SB Deerfoot Tr near 17 Ave SE, Calgary - MVC in the RHL. Drive with caution in the area. (1:44pm) #ABRoads #yyctraffic",
      "time": "1:44 p.m.",
      "severity": 1
    },
    {
      "text": "ALERT: Traffic incident on 17 Ave and 24 St SW.   #yyctraffic #yycroads",
      "time": "1:43 p.m.",
      "severity": 0
    },
    {
      "text": "ALERT: Traffic incident on SB Deerfoot Tr and 17 Ave SE, blocking the right lane.   #yyctraffic #yycroads https://t.co/KKhGLnrayl",
      "time": "1:41 p.m.",
      "severity": 1
    },
    {
      "text": "ALERT: Traffic incident on  Stoney Tr and Old Banff Coach Rd SW.   #yyctraffic #yycroads",
      "time": "1:15 p.m.",
      "severity": 0
    },
    {
      "text": "In the Southwest, police are blocking off WB Bow Trail at Sarcee Trail, the hill there is too slippery to get through, drivers need to take 17th Avenue instead #yyctraffic https://t.co/oQv70io0kF",
      "time": "1:09 p.m.",
      "severity": 1
    },
    {
      "text": "ALERT: Traffic incident on  SB Macleod Tr and 25 Ave SE, blocking multiple lanes.   #yyctraffic #yycroads https://t.co/RerfZW5Pjz",
      "time": "12:50 p.m.",
      "severity": 1
    },
    {
      "text": "ALERT: Traffic incident on  Nose Hill Dr and Tuscany Hl NW.   #yyctraffic #yycroads",
      "time": "12:19 p.m.",
      "severity": 0
    },
    {
      "text": "ALERT: Traffic incident on  WB 32 Ave and 19 St NE.   #yyctraffic #yycroads",
      "time": "12:06 p.m.",
      "severity": 0
    },
    {
      "text": "ALERT: Traffic incident on  EB 32 Ave and Barlow Tr NE, blocking the right lane.   #yyctraffic #yycroads",
      "time": "11:29 a.m.",
      "severity": 1
    },
    {
      "text": "In the NE, SB 52nd Street and 16th Avenue, there's a collision blocking multiple lanes. #yyctraffic #yycroads https://t.co/nyl3WahtZK",
      "time": "8:04 a.m.",
      "severity": 2
    },
    {
      "text": "In the Southeast, watch out for a crash on SB Macleod Trail at 99th Avenue, blocking the right-hand lane #yyctraffic https://t.co/XXcgsmplec",
      "time": "4:34 p.m.",
      "severity": 2
    },
    {
      "text": "In the Southeast, watch out for a crash on EB Southland Drive at Deerfoot Trail, blocking the right-hand lane #yyctraffic https://t.co/n3FFrTZhmY",
      "time": "4:33 p.m.",
      "severity": 2
    },
    {
      "text": "ALERT: Traffic incident on SB Macleod Tr and 99 Ave SE, blocking multiple lanes.   #yyctraffic #yycroads https://t.co/tu1KeA9Moz",
      "time": "4:25 p.m.",
      "severity": 2
    },
    {
      "text": "ALERT: Multi-vehicle incident on Southland Dr at Deerfoot Tr SE, blocking the EB right lane.   #yyctraffic #yycroads https://t.co/CH83n4eff4",
      "time": "4:13 p.m.",
      "severity": 2
    },
    {
      "text": "ALERT: Traffic incident on  Shawville Bv and Shalom Wy SE.   #yyctraffic #yycroads",
      "time": "12:31 p.m.",
      "severity": 0
    },
    {
      "text": "ALERT: Traffic incident on  36 St and 12 Ave SE.   #yyctraffic #yycroads",
      "time": "12:17 p.m.",
      "severity": 0
    },
    {
      "text": "In the SE, EB Peigan Trail at Stoney Trail, watch out for a collision. Stay right. #yyctraffic #yycroads https://t.co/Fmcjs3kGx3",
      "time": "10:22 a.m.",
      "severity": 1
    },
    {
      "text": "ALERT: Traffic incident on  EB Peigan Tr and Stoney Tr SE, blocking multiple lanes.   #yyctraffic #yycroads https://t.co/yHsCJyJC02",
      "time": "10:17 a.m.",
      "severity": 2
    },
    {
      "text": "Road conditions are \"so-so\" around Calgary. Still snow covered and icy. Here's a look at Deerfoot and 34th. Drive with care. #yyctraffic #yycroads https://t.co/MGAZJf2m7Q",
      "time": "7:58 a.m.",
      "severity": 1
    },
    {
      "text": "Good Morning! There's some improvement on the roads. Still lots of slippery sections plus there's a collision in the SW, 14th Street and Glenmore Trail WB, blocking the left lane. #yyctraffic #yycroads https://t.co/9ZZomOmuaN",
      "time": "5:54 a.m.",
      "severity": 1
    },
    {
      "text": "ALERT: Multi-vehicle incident on  WB 14 St and Glenmore Tr SW, blocking the left lane.   #yyctraffic #yycroads https://t.co/T8pL4CwjDP",
      "time": "5:49 a.m.",
      "severity": 1
    },
    {
      "text": "ALERT: Traffic incident on  SB Centre St and 44 Ave NW, blocking the right lane.   #yyctraffic #yycroads https://t.co/125JDTCays",
      "time": "5:15 a.m.",
      "severity": 0
    },
    {
      "text": "ALERT: Traffic incident on  Shaganappi Tr and Stoney Tr NW.   #yyctraffic #yycroads",
      "time": "3:34 a.m.",
      "severity": 0
    },
    {
      "text": "ALERT: Traffic incident on  33 St and 34 Ave SE.   #yyctraffic #yycroads",
      "time": "11:24 p.m.",
      "severity": 0
    },
    {
      "text": "ALERT: Traffic incident on WB 16 Ave approaching Sarcee Tr NW.   #yyctraffic #yycroads",
      "time": "7:52 p.m.",
      "severity": 0
    },
    {
      "text": "ALERT: Traffic incident on 128 Ave and Barlow Tr NE.   #yyctraffic #yycroads",
      "time": "7:31 p.m.",
      "severity": 0
    },
    {
      "text": "NB Deerfoot Tr approaching Memorial Dr SE, Calgary - Traffic incident, blocking RH lanes. (6:38pm) via @yyctransport  #yyctraffic",
      "time": "6:38 p.m.",
      "severity": 2
    },
    {
      "text": "WB Crowchild Tr NW on ramp to SB Stoney Tr, Calgary - MVC partially blocking the ramp. Expect delays. (3:57pm) #ABRoads #yyctraffic",
      "time": "3:57 p.m.",
      "severity": 1
    },
    {
      "text": "ALERT: Traffic incident on  Crowchild Tr and Stoney Tr NW, partially blocking the WB on-ramp.   #yyctraffic #yycroads https://t.co/Wn9Uw89ffI",
      "time": "3:50 p.m.",
      "severity": 1
    },
    {
      "text": "ALERT: Two vehicle incident on Country Hills Bv at Metis Tr NE, blocking the left WBLT lane.   #yyctraffic #yycroads https://t.co/D3rP6FIFat",
      "time": "3:46 p.m.",
      "severity": 0
    },
    {
      "text": "ALERT: Traffic incident on 4 St and 22 Ave NW. Expect delays in the area. #yyctraffic #yycroads",
      "time": "3:26 p.m.",
      "severity": 0
    },
    {
      "text": "ALERT: Traffic incident on  EB Glenmore Tr after Crowchild Tr SW, blocking the left lane.   #yyctraffic #yycroads https://t.co/QxU5zxT7mU",
      "time": "1:01 p.m.",
      "severity": 1
    },
    {
      "text": "ALERT: Multi-vehicle incident on  SB Stoney Tr approaching 16 Ave NW.   #yyctraffic #yycroads https://t.co/KeedxDGXto",
      "time": "12:46 p.m.",
      "severity": 1
    },
    {
      "text": "ALERT: Traffic incident on  SB 52 St and 61 Ave SE, blocking the left lane.   #yyctraffic #yycroads https://t.co/RSl6PSVu31",
      "time": "12:44 p.m.",
      "severity": 1
    },
    {
      "text": "ALERT: Traffic incident on  EB Mcknight Bv and Aviation Bv NE, blocking the left lane.   #yyctraffic #yycroads https://t.co/kfaQIlTZ6Y",
      "time": "12:26 p.m.",
      "severity": 1
    },
    {
      "text": "ALERT: Traffic incident on  NB Crowchild Tr and Bow Tr SW, blocking the left lane.   #yyctraffic #yycroads https://t.co/BGRXR5BtZW",
      "time": "12:07 p.m.",
      "severity": 1
    },
    {
      "text": "ALERT: Traffic incident on  Grey Eagle Bv and Grey Eagle Dr SW.   #yyctraffic #yycroads",
      "time": "10:49 a.m.",
      "severity": 0
    },
    {
      "text": "ALERT: Traffic incident on  WB Country Hills Bv and Stoney Tr NE, blocking the right lane.   #yyctraffic #yycroads https://t.co/q0ON2ANYeQ",
      "time": "10:38 a.m.",
      "severity": 1
    },
    {
      "text": "ALERT: Traffic incident on  WB Memorial Dr and Crowchild Tr NW.   #yyctraffic #yycroads https://t.co/tbswYsl5IQ",
      "time": "10:00 a.m.",
      "severity": 0
    },
    {
      "text": "SB Deerfoot Tr after Beddington Tr NW, Calgary, MVC. Drive with caution and expect delays. (9:48am) #ABRoads #yyctraffic",
      "time": "9:49 a.m.",
      "severity": 2
    },
    {
      "text": "ALERT: Traffic incident on  SB Deerfoot Tr and Beddington Tr NE.   #yyctraffic #yycroads https://t.co/3ZquCqkdgL",
      "time": "9:39 a.m.",
      "severity": 1
    },
    {
      "text": "ALERT: Traffic incident on  9 Ave and 12 St SE.   #yyctraffic #yycroads https://t.co/05VFxzOO8v",
      "time": "9:07 a.m.",
      "severity": 0
    },
    {
      "text": "ALERT: Traffic incident on  Charleswood Dr and Crowchild Tr NW.   #yyctraffic #yycroads",
      "time": "8:57 a.m.",
      "severity": 1
    },
    {
      "text": "ALERT: Traffic incident on  NB Deerfoot Tr and 130 Ave SE.   #yyctraffic #yycroads https://t.co/VjYdsQAlnc",
      "time": "7:57 a.m.",
      "severity": 1
    },
    {
      "text": "ALERT: Traffic incident on  SB Stoney Tr and Glenmore Tr SE.   #yyctraffic #yycroads https://t.co/mSQBVI7RvQ",
      "time": "7:25 a.m.",
      "severity": 1
    },
    {
      "text": "ALERT: Traffic incident on  NB Deerfoot Tr and Memorial Dr SE, blocking the right lane.   #yyctraffic #yycroads https://t.co/Y2qmvSyxZD",
      "time": "6:42 a.m.",
      "severity": 1
    },
    {
      "text": "ALERT: Traffic incident on SB 5 St at 15 Ave SW, blocking the right lane. Expect delays in the area. #yyctraffic #yycroads https://t.co/YFoYkd5MFF",
      "time": "4:44 p.m.",
      "severity": 1
    },
    {
      "text": "ALERT: Traffic incident on Falconridge Bv and Catsleridge Dr NE. Expect delays in the area. #yyctraffic #yycroads",
      "time": "4:10 p.m.",
      "severity": 1
    },
    {
      "text": "ALERT: Traffic incident on  52 St and 28 Ave SE. Expect delays in the area. #yyctraffic #yycroads",
      "time": "4:07 p.m.",
      "severity": 1
    },
    {
      "text": "ALERT: Traffic signals are flashing red on 29 St and Hospital Dr NW; crews have been dispatched. Please drive with caution. #yyctraffic #yycroads",
      "time": "3:05 p.m.",
      "severity": 0
    },
    {
      "text": "ALERT: Traffic incident on 61 Ave and 52 St SE. Expect delays in the area. #yyctraffic #yycroads",
      "time": "2:24 p.m.",
      "severity": 1
    },
    {
      "text": "ALERT: Traffic incident on EB McKnight Bv at Aviation Bv NE, blocking the left turn lane.   #yyctraffic #yycroads https://t.co/Y3TOWMcWDa",
      "time": "2:16 p.m.",
      "severity": 1
    },
    {
      "text": "ALERT: Traffic incident on  SB Macleod Tr and Heritage Dr S.   #yyctraffic #yycroads https://t.co/U5XXalg1OH",
      "time": "1:25 p.m.",
      "severity": 0
    },
    {
      "text": "ALERT: Traffic incident on  NB Crowchild Tr and Memorial Dr NW, blocking the left lane.   #yyctraffic #yycroads https://t.co/Hv2zsq1skW",
      "time": "12:10 p.m.",
      "severity": 1
    },
    {
      "text": "ALERT: Traffic incident on  16 Ave and Centre St N, blocking the middle lane WB. and NB traffic.   #yyctraffic #yycroads https://t.co/endSB6Al0d",
      "time": "11:50 a.m.",
      "severity": 1
    },
    {
      "text": "ALERT: Traffic incident on  EB Country Hills Bv and 11 St NE, blocking the right lane.   #yyctraffic #yycroads https://t.co/UTuooRA1Ku",
      "time": "11:46 a.m.",
      "severity": 0
    },
    {
      "text": "ALERT: Traffic incident on  NB 36 St and 26 Ave NE, blocking the right lane.   #yyctraffic #yycroads https://t.co/rxSLUwU8N5",
      "time": "11:26 a.m.",
      "severity": 1
    },
    {
      "text": "ALERT: Traffic incident on  EB Glenmore Tr and Blackfoot Tr SE.   #yyctraffic #yycroads https://t.co/YIKvpgPNN5",
      "time": "10:53 a.m.",
      "severity": 0
    },
    {
      "text": "ALERT: Traffic incident on  15 St and 9 Ave SE.   #yyctraffic #yycroads",
      "time": "10:24 a.m.",
      "severity": 0
    },
    {
      "text": "ALERT: Traffic incident on  NB Macleod Tr and 50 Ave SW.   #yyctraffic #yycroads https://t.co/9xZK3DinzV",
      "time": "10:22 a.m.",
      "severity": 0
    },
    {
      "text": "ALERT: Traffic incident on  61 Ave and 29 St SE.   #yyctraffic #yycroads",
      "time": "10:16 a.m.",
      "severity": 0
    },
    {
      "text": "ALERT: Multi-vehicle incident on  Memorial Dr and Deerfoot Tr NE, on ramp onto SB Deerfoot Trail.   #yyctraffic #yycroads https://t.co/mh9mzrTPAO",
      "time": "10:07 a.m.",
      "severity": 1
    },
    {
      "text": "ALERT: Traffic incident on  37 St and 17 Ave SW.   #yyctraffic #yycroads https://t.co/qyHutlpzB7",
      "time": "9:41 a.m.",
      "severity": 0
    },
    {
      "text": "ALERT: Multi-vehicle incident on  52 St and Seton Bv SE.   #yyctraffic #yycroads https://t.co/VVrqZEvedO",
      "time": "9:33 a.m.",
      "severity": 2
    },
    {
      "text": "ALERT: Traffic incident on 50 St and 130 Ave SE.   #yyctraffic #yycroads",
      "time": "4:30 p.m.",
      "severity": 0
    },
    {
      "text": "ALERT:  Emergency services are helping a pedestrian involved in an incident on 52 St and 17 Ave SE. Blocking multi lanes. Please go slow and watch for fellow Calgarians.   #yyctraffic #yycroads https://t.co/fZGoYh8iNs",
      "time": "4:27 p.m.",
      "severity": 2
    },
    {
      "text": "ALERT: Traffic incident on Metis Tr and 80 Ave NE, blocking the SB left lane.   #yyctraffic #yycroads https://t.co/PM8BjKaDpL",
      "time": "3:42 p.m.",
      "severity": 0
    },
    {
      "text": "ALERT: Traffic incident on  James McKevitt Rd and Millview Ga SW.   #yyctraffic #yycroads",
      "time": "3:42 p.m.",
      "severity": 0
    },
    {
      "text": "ALERT: Two vehicle incident on  EB 17 Ave and Deerfoot Tr SE, blocking the left turn lane.   #yyctraffic #yycroads https://t.co/fNVjg6yZBz",
      "time": "3:40 p.m.",
      "severity": 1
    },
    {
      "text": "ALERT:  Emergency services have been called to help a pedestrian involved in an incident on University Dr north of 16 Ave NW. Please go slow and watch for fellow Calgarians.   #yyctraffic #yycroads",
      "time": "3:25 p.m.",
      "severity": 1
    },
    {
      "text": "NB Stoney Tr and 17 Ave SE, in Calgary - MVC, blocking the LH lanes. (2:36pm) via @yyctransport #yyctraffic #ABRoads",
      "time": "2:37 p.m.",
      "severity": 1
    },
    {
      "text": "EB Stoney Tr after Deerfoot Tr SE, in Calgary - MVC, blocking the LH lane. (2:24pm) via @yyctransport #yyctraffic #ABRoads",
      "time": "2:24 p.m.",
      "severity": 1
    },
    {
      "text": "ALERT: Traffic incident on  Stoney Tr and 17 Ave SE.   #yyctraffic #yycroads",
      "time": "2:19 p.m.",
      "severity": 0
    },
    {
      "text": "ALERT: Two vehicle incident on  Beddington Bv and Beddington Tr NE, blocking the SB right lane.   #yyctraffic #yycroads https://t.co/WfH108Npfo",
      "time": "12:39 p.m.",
      "severity": 1
    },
    {
      "text": "ALERT: Two vehicle incident on  Bow Tr and 33 St SW, blocking the EB right lane and SB lanes.   #yyctraffic #yycroads https://t.co/hPlABd2JH4",
      "time": "12:07 p.m.",
      "severity": 1
    },
    {
      "text": "SB Deerfoot Tr at Memorial Dr E, Calgary - MVC blocking the LHL. Expect delays. (7:08am) #ABRoads #yyctraffic",
      "time": "7:08 a.m.",
      "severity": 2
    },
    {
      "text": "ALERT: Multi-vehicle incident on SB Deerfoot Tr at Memorial Dr SE, blocking the left lane. Expect delays in the area. #yyctraffic #yycroads https://t.co/cjozRGJoWl",
      "time": "7:05 a.m.",
      "severity": 2
    },
    {
      "text": "ALERT: Traffic incident on McKenzie Towne Bv and 52 St SE.   #yyctraffic #yycroads",
      "time": "6:50 a.m.",
      "severity": 0
    },
    {
      "text": "ALERT: Traffic incident on  NB Stoney Tr north of Country Hills Bv NE.   #yyctraffic #yycroads",
      "time": "11:36 p.m.",
      "severity": 0
    },
    {
      "text": "ALERT: Stalled vehicle on  WB Glenmore Tr and Crowchild SW, blocking the left exit lane from WB Glenmore Tr to NB Crowchild Tr.   #yyctraffic #yycroads https://t.co/7w7BuHAXcU",
      "time": "4:09 p.m.",
      "severity": 2
    },
    {
      "text": "ALERT: Traffic incident on  SB Crowchild Tr and Glenmore Tr SW, blocking the left lane.   #yyctraffic #yycroads https://t.co/OMzLIIeyPo",
      "time": "3:12 p.m.",
      "severity": 1
    },
    {
      "text": "ALERT: Traffic incident on  SB 68 St and McKnight Bv NE.   #yyctraffic #yycroads",
      "time": "1:53 p.m.",
      "severity": 0
    },
    {
      "text": "ALERT: Traffic incident on Southland Dr and Elbow Dr SW.   #yyctraffic #yycroads",
      "time": "11:31 a.m.",
      "severity": 0
    },
    {
      "text": "ALERT: Traffic incident on Country Hills Bv and Panorama Hills Bv NW.   #yyctraffic #yycroads",
      "time": "10:06 a.m.",
      "severity": 0
    },
    {
      "text": "ALERT: Traffic incident on 42 Ave and 1 St SE, blocking the NB lane.   #yyctraffic #yycroads https://t.co/adHC7NYpW4",
      "time": "9:41 a.m.",
      "severity": 1
    },
    {
      "text": "ALERT: Traffic incident on 76 Ave at 18 St SE.   #yyctraffic #yycroads https://t.co/WDj1qxpGG5",
      "time": "7:51 a.m.",
      "severity": 0
    },
    {
      "text": "ALERT:  Emergency services have been called to help a pedestrian involved in an incident on Rundlehorn Dr and 52 St NE. Blocking the SB right lane. Please go slow and watch for fellow Calgarians   #yyctraffic #yycroads https://t.co/KCrqKxTbfZ",
      "time": "7:45 a.m.",
      "severity": 2
    },
    {
      "text": "ALERT: Traffic incident on Old Banff Coach Rd and Patterson Bv SW.   #yyctraffic #yycroads",
      "time": "7:42 a.m.",
      "severity": 0
    },
    {
      "text": "EB 16 Ave NE on-ramp to Deerfoot Tr, Calgary - disabled vehicle in the LHL. Expect delays in the area. (7:10am) #ABRoads #yyctraffic",
      "time": "7:10 a.m.",
      "severity": 2
    },
    {
      "text": "ALERT: Traffic incident on  Mcknight Bv and 47 St NE, blocking the WB right lane.   #yyctraffic #yycroads https://t.co/SOCCMhjrTg",
      "time": "7:06 a.m.",
      "severity": 2
    },
    {
      "text": "SB Deerfoot Tr at Stoney Tr NE - MVC blocking the left lane on the EB ramp. Expect delays. (6:57am) #ABRoads #yyctraffic",
      "time": "6:58 a.m.",
      "severity": 1
    },
    {
      "text": "ALERT: Traffic incident on Deerfoot Tr and Stoney Tr NE, blocking the left lane of SB to EB ramp.   #yyctraffic #yycroads https://t.co/lxfdfN5QQ7",
      "time": "6:48 a.m.",
      "severity": 1
    },
    {
      "text": "ALERT: Traffic incident on Country Hills Bv and Coventry Bv NE, blocking multi lanes.   #yyctraffic #yycroads https://t.co/0HeIe5T90e",
      "time": "6:20 a.m.",
      "severity": 0
    },
    {
      "text": "ALERT: Multi-vehicle incident on NB Macleod Tr at Canyon Meadows Dr SE, blocking the right lane.   #yyctraffic #yycroads https://t.co/tvljwO2gmA",
      "time": "6:17 a.m.",
      "severity": 1
    },
    {
      "text": "EB Stoney Tr off-ramp to Metis Tr NE, Calgary - intersection street light repairs, Nov.19-20, daylight hours. Expect a lane closure and speed reduction. #ABRoads #yyctraffic",
      "time": "5:00 a.m.",
      "severity": 1
    },
    {
      "text": "NB Stoney Tr near Glenmore Tr SE, Calgary - MVC in the LHL. Drive with caution in the area. (4:59pm) #ABRoads #yyctraffic",
      "time": "4:59 p.m.",
      "severity": 2
    },
    {
      "text": "ALERT: Two vehicle incident on  NB Stoney Tr and Glenmore Tr SE, blocking the left lane.   #yyctraffic #yycroads https://t.co/kkD8Dse2qM",
      "time": "4:45 p.m.",
      "severity": 2
    },
    {
      "text": "ALERT: Traffic incident on  16 Ave and 36 St NE, blocking the WB right lane and the EB right shoulder .   #yyctraffic #yycroads https://t.co/HXsmfIhGBB",
      "time": "4:37 p.m.",
      "severity": 2
    },
    {
      "text": "ALERT: Stalled vehicle on EB Glenmore Tr at Heritage Dr SE, blocking the right lane. Please drive with caution. #yyctraffic #yycroads https://t.co/ubiZlsUtrF",
      "time": "4:26 p.m.",
      "severity": 2
    },
    {
      "text": "ALERT: Traffic incident on  John Laurie Bv and 14 St NW.   #yyctraffic #yycroads",
      "time": "4:25 p.m.",
      "severity": 1
    },
    {
      "text": "SB Stoney Tr near Crowchild Tr NW, MVC in the RHL. Drive with caution in the area. (4:23pm) #ABRoads #yyctraffic",
      "time": "4:23 p.m.",
      "severity": 2
    },
    {
      "text": "ALERT: Traffic incident on  SB Stoney Tr and Crowchild Tr NW, blocking the right lane.   #yyctraffic #yycroads https://t.co/TJAGsukUvs",
      "time": "4:22 p.m.",
      "severity": 2
    },
    {
      "text": "ALERT: Traffic incident on  52 St and Savanna Bv NE.   #yyctraffic #yycroads",
      "time": "3:52 p.m.",
      "severity": 0
    },
    {
      "text": "ALERT: Traffic incident on  Stoney Tr and 162 Ave SW.   #yyctraffic #yycroads",
      "time": "3:30 p.m.",
      "severity": 0
    },
    {
      "text": "⚠️ WATCH OUT! Stuck/jacknifed articuled city bus on EB 32nd Ave &amp; Campus Drive N.W.! \n\nDrive safe. \n\n#yyc #yycroads #yyctraffic https://t.co/U7mCuv1rhR",
      "time": "3:03 p.m.",
      "severity": 0
    },
    {
      "text": "ALERT: Traffic incident on  Stoney Tr and Old Banff Coach Rd SW.      #yyctraffic #yycroads",
      "time": "2:53 p.m.",
      "severity": 0
    },
    {
      "text": "ALERT: Traffic incident on 19 St and Mcgonigal Dr NE. Expect delays in the area. #yyctraffic #yycroads",
      "time": "2:44 p.m.",
      "severity": 0
    },
    {
      "text": "ALERT: Traffic incident on  Country Hills Bv and Cornerstone St NE.   #yyctraffic #yycroads",
      "time": "2:12 p.m.",
      "severity": 0
    },
    {
      "text": "ALERT: Traffic incident on  Uxbridge Dr and 16 Ave NW.   #yyctraffic #yycroads",
      "time": "2:02 p.m.",
      "severity": 0
    },
    {
      "text": "ALERT: Traffic incident on  Stoney Tr and Glenmore Tr SE.   #yyctraffic #yycroads https://t.co/azdDcgCKQ4",
      "time": "1:45 p.m.",
      "severity": 0
    },
    {
      "text": "ALERT: Traffic incident on NB Stoney Tr at 114 Ave SE, blocking the right lane.   #yyctraffic #yycroads https://t.co/CcBBnh5dxF",
      "time": "12:56 p.m.",
      "severity": 1
    },
    {
      "text": "ALERT: Traffic incident on  Stoney Tr and 16 Ave NW, partially blocking the WB on-ramp.   #yyctraffic #yycroads https://t.co/HSWOMGZBRh",
      "time": "12:35 p.m.",
      "severity": 1
    },
    {
      "text": "ALERT: Multi-vehicle incident on  SB Stoney Tr approaching Crowchild Tr NW, blocking the right lanes. Expect delays in the area. #yyctraffic #yycroads https://t.co/g4g6zK4eaU",
      "time": "12:03 p.m.",
      "severity": 1
    },
    {
      "text": "ALERT: Single vehicle incident on  EB Stoney Tr at Harvest Hills Bv N, blocking the left lane.   #yyctraffic #yycroads https://t.co/wDEc9LbzwU",
      "time": "11:54 a.m.",
      "severity": 1
    },
    {
      "text": "ALERT: Traffic incident on  Stoney Tr and Old Banff Coach Rd SW.   #yyctraffic #yycroads",
      "time": "11:33 a.m.",
      "severity": 0
    },
    {
      "text": "ALERT: Traffic incident on SB Shaganappi Tr at Crowchild Tr NW, blocking the left lane.   #yyctraffic #yycroads https://t.co/jhm6MDrMbd",
      "time": "4:48 p.m.",
      "severity": 2
    },
    {
      "text": "ALERT: Traffic incident on  Beddington Bv and Bedford Dr NE, blocking the WB lanes.   #yyctraffic #yycroads https://t.co/pAtx9guEC7",
      "time": "2:54 p.m.",
      "severity": 1
    },
    {
      "text": "ALERT: Traffic incident on EB 32 Ave at 29 St NE, blocking the left lanes.   #yyctraffic #yycroads https://t.co/ADsVdyFb1o",
      "time": "2:40 p.m.",
      "severity": 0
    },
    {
      "text": "ALERT: Two vehicle incident on SB Stoney Tr approaching Glenmore Tr SE, blocking the left lane.   #yyctraffic #yycroads https://t.co/2OovfqhZqN",
      "time": "12:58 p.m.",
      "severity": 1
    },
    {
      "text": "ALERT: Traffic signals issue on 16 Ave and 14 St NW, crew has been dispatched. Please drive with care. #yyctraffic #yycroads",
      "time": "12:55 p.m.",
      "severity": 0
    },
    {
      "text": "ALERT: Traffic incident on SB Macleod Tr and 45 Ave SW, blocking the right lane.   #yyctraffic #yycroads https://t.co/8DwMPa9DS0",
      "time": "11:56 a.m.",
      "severity": 1
    },
    {
      "text": "ALERT: Traffic incident on EB Glenmore Tr approaching 14 St SW, blocking the left lanes.   #yyctraffic #yycroads https://t.co/nOkuqnVKpB",
      "time": "11:54 a.m.",
      "severity": 1
    },
    {
      "text": "ALERT: Traffic incident on 8 Ave and 44 St SE.   #yyctraffic #yycroads",
      "time": "11:26 a.m.",
      "severity": 0
    },
    {
      "text": "Hwy566 at Crossiron Blvd, Balzac - concrete barrier work, Nov.16 from 12pm to 6pm; and Nov.18 from 8am to 4pm. Expect a lane closure in the area. #ABRoads #yyctraffic",
      "time": "10:01 a.m.",
      "severity": 0
    },
    {
      "text": "ALERT: Traffic incident on  Marlborough Way north of Memorial Dr NE.   #yyctraffic #yycroads",
      "time": "1:55 a.m.",
      "severity": 0
    },
    {
      "text": "ALERT: Traffic incident on  19 St and Capri Ave NW.   #yyctraffic #yycroads",
      "time": "11:56 p.m.",
      "severity": 0
    },
    {
      "text": "ALERT: Traffic incident on  WB Memorial Dr approaching 12 St NE, blocking the right lane.   #yyctraffic #yycroads https://t.co/DaemMvITWS",
      "time": "10:12 p.m.",
      "severity": 1
    },
    {
      "text": "ALERT: Traffic incident on  NB 52 St and Temple Dr NE, blocking the right lane.   #yyctraffic #yycroads https://t.co/eivhKNCBoX",
      "time": "9:52 p.m.",
      "severity": 1
    },
    {
      "text": "ALERT: Traffic incident on  NB Metis Tr and 104 Ave NE.   #yyctraffic #yycroads https://t.co/52q668PoQb",
      "time": "8:47 p.m.",
      "severity": 0
    },
    {
      "text": "ALERT: Stalled vehicle on EB Glenmore Tr after Macleod Tr S, blocking the left lane. Please drive with caution. #yyctraffic #yycroads https://t.co/ZbqAYRmv1r",
      "time": "7:22 p.m.",
      "severity": 1
    },
    {
      "text": "ALERT: Traffic incident on  SB 19 St and 41 Ave NE.   #yyctraffic #yycroads",
      "time": "4:34 p.m.",
      "severity": 0
    },
    {
      "text": "ALERT: Traffic incident on  Bearspaw Dam Rd and 85 St NW.   #yyctraffic #yycroads",
      "time": "4:23 p.m.",
      "severity": 0
    },
    {
      "text": "ALERT: Traffic incident on  WB Memorial Dr and Edmonton Tr NE, blocking the right lane.   #yyctraffic #yycroads https://t.co/uXZphmOe44",
      "time": "2:10 p.m.",
      "severity": 1
    },
    {
      "text": "ALERT: Traffic incident on  NB 14 St and 8 Ave NW.   #yyctraffic #yycroads",
      "time": "1:57 p.m.",
      "severity": 0
    },
    {
      "text": "ALERT: Two vehicle incident on WB Glenmore Tr west of 14 St SW, blocking the right lane.   #yyctraffic #yycroads https://t.co/70RdbJd2Ce",
      "time": "12:25 p.m.",
      "severity": 1
    },
    {
      "text": "ALERT: Traffic incident on  4 Ave approaching 1 St SE, blocking the WB left lanes.   #yyctraffic #yycroads https://t.co/8FOeq64a0Y",
      "time": "10:30 a.m.",
      "severity": 0
    },
    {
      "text": "ALERT: Two vehicle incident on SB Crowchild Tr approaching 24 Ave NW, blocking the right lane.   #yyctraffic #yycroads https://t.co/qZ1OHE1rqk",
      "time": "8:02 a.m.",
      "severity": 2
    },
    {
      "text": "NB Deerfoot Tr SE at the Calf Robe Br, in Calgary - traffic incident, blocking the LH lane. (7:30am) via @yyctransport #yyctraffic",
      "time": "7:30 a.m.",
      "severity": 2
    },
    {
      "text": "ALERT: Traffic incident on  NB Deerfoot Tr SE at the Calf Robe Bridge, blocking the left lane. Expect delays in the area. #yyctraffic #yycroads https://t.co/VcHqtPxOnn",
      "time": "7:25 a.m.",
      "severity": 2
    },
    {
      "text": "WB Stoney Tr SW to James McKevitt Rd SW, Calgary - concrete barrier work on the ramp, Nov.14 from 9am to 3pm. Expect lane closures in the area. #ABRoads #yyctraffic",
      "time": "7:01 a.m.",
      "severity": 1
    },
    {
      "text": "ALERT: Multi-vehicle incident on  NB Deerfoot Tr north of Peigan Tr SE, blocking the left shoulder. Expect delays in the area. #yyctraffic #yycroads https://t.co/lfuGPESoLJ",
      "time": "6:50 a.m.",
      "severity": 1
    },
    {
      "text": "ALERT: Traffic incident on  Beddington Bv and 4 St NE.   #yyctraffic #yycroads https://t.co/f1bzkJ2wk9",
      "time": "11:52 p.m.",
      "severity": 0
    },
    {
      "text": "ALERT: Traffic incident on  Nose Hill Dr and Crowchild Tr NW, blocking the NB lanes.   #yyctraffic #yycroads https://t.co/Lzl64OeTvr",
      "time": "10:56 p.m.",
      "severity": 1
    },
    {
      "text": "ALERT: Traffic incident on  Nose Hill Dr and 87 St NW, blocking multiple lanes.   #yyctraffic #yycroads https://t.co/sQWuCRIHh2",
      "time": "10:01 p.m.",
      "severity": 1
    },
    {
      "text": "ALERT: Traffic incident on  Peigan Tr and 36 St SE.   #yyctraffic #yycroads https://t.co/VVFnPrIHK2",
      "time": "9:53 p.m.",
      "severity": 0
    },
    {
      "text": "ALERT: Traffic incident on Centre St and 40 Ave NW.   #yyctraffic #yycroads",
      "time": "9:17 p.m.",
      "severity": 0
    },
    {
      "text": "EB Stoney Tr from Sarcee Tr NW to Shaganappi Tr NW, Calgary  -  road maintenance operations, Nov.13 at 10pm until Nov.14 at 6am. Expect a speed reduction with a right shoulder encroachment. #ABRoads #yyctraffic",
      "time": "8:05 p.m.",
      "severity": 0
    },
    {
      "text": "ALERT: Two vehicle incident on Barlow Tr and 72 Ave SE, blocking multi lanes.   #yyctraffic #yycroads https://t.co/l13tbPUYIZ",
      "time": "3:17 p.m.",
      "severity": 1
    },
    {
      "text": "ALERT:  Emergency services have been called to help a pedestrian involved in an incident on 32 Ave and Carol Dr NW. Please go slow and watch for fellow Calgarians.   #yyctraffic #yycroads",
      "time": "3:04 p.m.",
      "severity": 0
    },
    {
      "text": "ALERT: Two vehicle incident on EB 16 Ave and 19 St NE, blocking the right lane.   #yyctraffic #yycroads https://t.co/bouFkPylJS",
      "time": "2:15 p.m.",
      "severity": 1
    },
    {
      "text": "ALERT: Traffic incident on Glenmore Tr and Stoney Tr SE, partially blocking the EB to NB ramp.   #yyctraffic #yycroads https://t.co/HvDg4iRv30",
      "time": "2:11 p.m.",
      "severity": 1
    },
    {
      "text": "ALERT: Traffic incident on  EB Memorial Dr and Centre St S.   #yyctraffic #yycroads https://t.co/6GOjH0TQ6q",
      "time": "12:57 p.m.",
      "severity": 0
    },
    {
      "text": "ALERT: Traffic incident on  68 St and Mcknight Bv NE.   #yyctraffic #yycroads",
      "time": "9:37 a.m.",
      "severity": 1
    },
    {
      "text": "ALERT: Traffic incident on  Sarcee Tr and Sherwood Bv NW.   #yyctraffic #yycroads",
      "time": "8:21 a.m.",
      "severity": 1
    },
    {
      "text": "ALERT: Multi-vehicle incident on  SB Shaganappi Tr and John Laurie Bv NW, blocking the left lane.   #yyctraffic #yycroads https://t.co/71TstIj6to",
      "time": "7:53 a.m.",
      "severity": 2
    },
    {
      "text": "ALERT: Traffic incident on  Panorama Hills Bv and Country Hills Bv NW.   #yyctraffic #yycroads",
      "time": "7:41 a.m.",
      "severity": 0
    },
    {
      "text": "ALERT: Traffic incident on  NB Crowchild Tr and 17 Ave SW, blocking the right lane.   #yyctraffic #yycroads https://t.co/sYPReQW2VW",
      "time": "7:33 a.m.",
      "severity": 2
    },
    {
      "text": "ALERT: Traffic incident on  84 St north of 114 Ave SE.   #yyctraffic #yycroads",
      "time": "7:25 a.m.",
      "severity": 0
    },
    {
      "text": "ALERT: Two vehicle incident on Old Banff Coach Rd and 85 St SW, blocking the WB lanes and NB right lane.   #yyctraffic #yycroads https://t.co/NkLeqrvuZE",
      "time": "7:12 a.m.",
      "severity": 1
    },
    {
      "text": "ALERT: Traffic incident on  36 St and 30 Ave SE.   #yyctraffic #yycroads",
      "time": "6:57 a.m.",
      "severity": 0
    },
    {
      "text": "ALERT: Traffic incident on  Centre Ave and Barlow Tr SE.   #yyctraffic #yycroads",
      "time": "6:46 a.m.",
      "severity": 0
    },
    {
      "text": "ALERT: Traffic incident on  Falconridge Bv and Taradale Dr NE.   #yyctraffic #yycroads https://t.co/2ZKTCm4aeI",
      "time": "7:18 p.m.",
      "severity": 0
    },
    {
      "text": "ALERT: Traffic incident on  14 St and 16 Ave NW.   #yyctraffic #yycroads",
      "time": "6:14 p.m.",
      "severity": 1
    },
    {
      "text": "SB Deerfoot Tr just past Southland Dr -MVC. Stay to the right and expect delays. (6:13pm) #ABRoads #yyctraffic",
      "time": "6:13 p.m.",
      "severity": 2
    },
    {
      "text": "ALERT: Traffic signals are blank on  53 St and Dalhousie Dr NW, power outage in the area. Please drive with caution. #yyctraffic #yycroads",
      "time": "3:33 p.m.",
      "severity": 0
    },
    {
      "text": "In the Northwest, watch out for a crash on Beddington Trail at Stoney Trail, blocking lanes through that intersection, watch out for emergency crews on scene #yyctraffic https://t.co/M7113G3RFY",
      "time": "1:52 p.m.",
      "severity": 2
    },
    {
      "text": "ALERT: Traffic incident on  Beddington Tr and Stoney Tr NW.   #yyctraffic #yycroads https://t.co/Bx43Dncj3L",
      "time": "1:40 p.m.",
      "severity": 0
    },
    {
      "text": "ALERT: Traffic incident on  60 St and 128 Ave NE.   #yyctraffic #yycroads",
      "time": "11:26 a.m.",
      "severity": 0
    },
    {
      "text": "In the SW, a collision SB Sarcee Trail at Richmond Road, blocking the left lane. #yyctraffic #yycroads https://t.co/ML10Cexxgv",
      "time": "10:16 a.m.",
      "severity": 1
    },
    {
      "text": "ALERT: Two vehicle incident on  Sarcee Tr at Richmond Rd SW, blocking the SB left lanes.   #yyctraffic #yycroads https://t.co/TfFdKXUAC7",
      "time": "10:13 a.m.",
      "severity": 1
    },
    {
      "text": "The following closures will be in effect for the Field of Crosses event on Remembrance Day\n\nEast &amp; westbound Riverfront Avenue access to the Centre Street Bridge will be closed from 9-noon\nEB Memorial Drive to northbound Centre Street will be closed from 9 to noon. #yyctraffic",
      "time": "9:37 a.m.",
      "severity": 1
    },
    {
      "text": "In the NE, Center Street and 64thAvenue, there's collision right in the intersection. #yyctraffic #yycroads https://t.co/B1yx63GqEX",
      "time": "6:48 a.m.",
      "severity": 1
    },
    {
      "text": "ALERT: Two vehicle incident on  64 Ave and Centre St N, blocking multiple lanes in the intersection.   #yyctraffic #yycroads https://t.co/MnzJ1QD7KL",
      "time": "6:43 a.m.",
      "severity": 1
    },
    {
      "text": "ALERT: Traffic incident on 36 St and Marbank Dr NE, blocking the NB right lane.   #yyctraffic #yycroads https://t.co/doH1pjHa0k",
      "time": "10:35 p.m.",
      "severity": 1
    },
    {
      "text": "ALERT: Two vehicle incident on  SB 14 St and Northmount Dr NW, blocking the right lane.   #yyctraffic #yycroads https://t.co/XEudjjs0ko",
      "time": "8:16 p.m.",
      "severity": 1
    },
    {
      "text": "ALERT: Traffic incident on  24 Ave and 19 St NW.   #yyctraffic #yycroads",
      "time": "4:43 p.m.",
      "severity": 0
    },
    {
      "text": "ALERT: Traffic incident on  Falconridge Dr and 68 St NE.   #yyctraffic #yycroads",
      "time": "3:30 p.m.",
      "severity": 0
    },
    {
      "text": "NB Stoney Tr approaching Nose Hill Dr NW, Calgary -  MVC  blocking the RH lane. Drive with caution and expect delays. (3:28pm) #ABRoads #yyctraffic",
      "time": "3:29 p.m.",
      "severity": 1
    },
    {
      "text": "In the Northwest, watch out for a crash on NB Stoney Trail approaching Nose Hill Drive, blocking the right-hand lanes #yyctraffic https://t.co/MRvvAlZwB6",
      "time": "3:25 p.m.",
      "severity": 1
    },
    {
      "text": "ALERT: Traffic incident on  NB 18 St and Glenmore Tr SE, blocking the right lane.   #yyctraffic #yycroads https://t.co/h8EjkXSeo7",
      "time": "2:46 p.m.",
      "severity": 1
    },
    {
      "text": "In the Northwest, watch out for a crash on WB Stoney Trail at Sarcee Trail, blocking the right-hand lane #yyctraffic https://t.co/5kMlJi4ZhE",
      "time": "2:01 p.m.",
      "severity": 1
    },
    {
      "text": "WB Stoney Tr near Sarcee Tr NW, Calgary - MVC. Consider using an alternative route. (2:00pm) #ABRoads #yyctraffic",
      "time": "2:00 p.m.",
      "severity": 1
    },
    {
      "text": "ALERT: Traffic incident on  WB Stoney Tr and Sarcee Tr NW.   #yyctraffic #yycroads https://t.co/u4hkfr4le9",
      "time": "1:56 p.m.",
      "severity": 0
    },
    {
      "text": "In the Northeast, watch out for a crash on WB Country Hills Blvd just past 11th Street, blocking the right-hand lane #yyctraffic https://t.co/gn5yD1PLkG",
      "time": "11:58 a.m.",
      "severity": 0
    },
    {
      "text": "ALERT: Traffic incident on WB Country Hills Bv approaching Coventry Bv NE, blocking the right lane.   #yyctraffic #yycroads https://t.co/8fFBeAEF38",
      "time": "11:43 a.m.",
      "severity": 0
    },
    {
      "text": "ALERT: Traffic incident on EB Beddington Tr at Hidden Valley Li NW, blocking the right lane. Expect delays in the area. #yyctraffic #yycroads https://t.co/hNJ9q41dmT",
      "time": "10:18 a.m.",
      "severity": 1
    },
    {
      "text": "ALERT: Traffic incident on 68 St and 86 Ave SE. Please drive with caution. #yyctraffic #yycroads https://t.co/ef0uizPidQ",
      "time": "7:25 a.m.",
      "severity": 1
    },
    {
      "text": "ALERT: Traffic incident on  EB Stoney Tr approaching Metis Tr NE, blocking the right lanes.   #yyctraffic #yycroads https://t.co/VYim0kbVcA",
      "time": "3:51 a.m.",
      "severity": 1
    },
    {
      "text": "ALERT: Traffic incident on Anderson Rd and Deerfoot Tr SE.   #yyctraffic #yycroads",
      "time": "11:10 p.m.",
      "severity": 0
    },
    {
      "text": "ALERT: Traffic incident on  EB Stoney Tr and 69 St SW.   #yyctraffic #yycroads",
      "time": "9:25 p.m.",
      "severity": 0
    },
    {
      "text": "ALERT: Traffic incident on  61 Ave and 44 St SE.   #yyctraffic #yycroads",
      "time": "8:54 p.m.",
      "severity": 0
    },
    {
      "text": "ALERT: Traffic incident on  68 St and Applewood Dr SE.   #yyctraffic #yycroads",
      "time": "6:43 p.m.",
      "severity": 0
    },
    {
      "text": "ALERT: Multi-vehicle incident on  52 St and Seton Bv SE, blocking multiple lanes.   #yyctraffic #yycroads https://t.co/tQwr7R4wwm",
      "time": "6:04 p.m.",
      "severity": 2
    },
    {
      "text": "In the Southeast, watch out for a crash on WB Heritage Drive approaching Bonaventure Drive, that's blocking the right-hand lane #yyctraffic https://t.co/etDXgA1pd1",
      "time": "4:38 p.m.",
      "severity": 1
    },
    {
      "text": "ALERT: Two vehicle incident on  WB Heritage Dr and Bonaventure Dr SE, blocking the right lane.   #yyctraffic #yycroads https://t.co/2YFPpfRRm3",
      "time": "4:34 p.m.",
      "severity": 1
    },
    {
      "text": "In the Southeast, we have a crash on EB Glenmore Trail just past Blackfoot Trail, blocking the right-hand lane #yyctraffic https://t.co/mwGH0pqCq9",
      "time": "2:56 p.m.",
      "severity": 1
    },
    {
      "text": "ALERT: Two vehicle incident on  EB Glenmore Tr and Blackfoot Tr SE, blocking the right lane.   #yyctraffic #yycroads https://t.co/1yvvJLohyc",
      "time": "2:47 p.m.",
      "severity": 1
    },
    {
      "text": "In the Southeast, watch out for a crash on SB Deerfoot Trail approaching Glenmore Trail, blocking the right-hand lane #yyctraffic https://t.co/j6d5PwgZ0i",
      "time": "1:57 p.m.",
      "severity": 1
    },
    {
      "text": "ALERT: Traffic incident on  SB Deerfoot Tr and Glenmore Tr SE, blocking the right lane.   #yyctraffic #yycroads https://t.co/AZJe0ckVdQ",
      "time": "1:54 p.m.",
      "severity": 1
    },
    {
      "text": "ALERT: Two vehicle incident on NB 52 St approaching Stoney Tr SE, blocking the right lanes.  #yyctraffic #yycroads https://t.co/QJhZLpsJtY",
      "time": "1:17 p.m.",
      "severity": 1
    },
    {
      "text": "In the Northeast, watch out for a crash on NB 52nd Street just past 4th Avenue, blocking the right-hand lane #yyctraffic https://t.co/0tw9Nh6Duv",
      "time": "1:04 p.m.",
      "severity": 1
    },
    {
      "text": "ALERT: Traffic incident on NB 52 St after 4 Ave NE, blocking the right lane.   #yyctraffic #yycroads https://t.co/wYSzt2hzzB",
      "time": "12:46 p.m.",
      "severity": 1
    },
    {
      "text": "In the NW, EB Memorial Drive just east of 14th Street, the right lane is blocked off due to construction. #yyctraffic #yycroads https://t.co/Gk6CUTE11V",
      "time": "10:04 a.m.",
      "severity": 1
    },
    {
      "text": "ALERT:  Emergency services are helping a pedestrian involved in an incident on 5 St and 15 Ave SW. Please go slow and watch for fellow Calgarians.   #yyctraffic #yycroads",
      "time": "9:29 a.m.",
      "severity": 1
    },
    {
      "text": "In the NE, NB Metis Trail approaching Stoney Trail, a collision blocking the right lane. #yyctraffic #yycroads https://t.co/u58DcwGvX1",
      "time": "7:56 a.m.",
      "severity": 2
    },
    {
      "text": "ALERT: Two vehicle incident on NB Metis Tr approaching Stoney Tr NE, blocking the right lanes.   #yyctraffic #yycroads https://t.co/VhGCiGYUKl",
      "time": "7:43 a.m.",
      "severity": 2
    },
    {
      "text": "In the NE, SB Deerfoot Trail at 32nd Avenue, a collision in the left lane. #yyctraffic #yycroads https://t.co/VnPIKhyWUU",
      "time": "6:37 a.m.",
      "severity": 1
    },
    {
      "text": "In the NE, NB Deerfoot at McKnight Blvd, emergency vehicles in the right lane due to a collision. #yyctraffic #yycroads https://t.co/v1MJBKrQSJ",
      "time": "6:35 a.m.",
      "severity": 1
    },
    {
      "text": "ALERT: Traffic incident on SB Deerfoot Tr at 32 Ave NE, blocking the left lanes. Please drive with caution. #yyctraffic #yycroads https://t.co/LoF9OqSQaF",
      "time": "6:30 a.m.",
      "severity": 1
    },
    {
      "text": "NB Deerfoot Tr at McKnight Blvd NE, Calgary - MVC affecting the LHL. (6:13am) #ABRoads #yyctraffic",
      "time": "6:13 a.m.",
      "severity": 1
    },
    {
      "text": "ALERT: Traffic incident on NB Deerfoot Tr at McKnight Bv NE, blocking the left lane.  #yyctraffic #yycroads https://t.co/kzQBuYdDWr",
      "time": "6:11 a.m.",
      "severity": 1
    },
    {
      "text": "WB Stoney Tr approaching Deerfoot Tr SE, Calgary - road maintenance operations, Nov.7 at 11pm until Nov.8 at 1am. Expect a lane closure and speed reduced to 80km/h. #ABRoads #yyctraffic",
      "time": "11:15 p.m.",
      "severity": 1
    },
    {
      "text": "SB Deerfoot Tr at Airport Tr NE, Calgary - MVC. Drive with caution in the area. (10:57pm) #ABRoads #yyctraffic",
      "time": "10:57 p.m.",
      "severity": 1
    },
    {
      "text": "ALERT: Traffic incident on  14 St and 16 Ave NW.   #yyctraffic #yycroads",
      "time": "9:09 p.m.",
      "severity": 0
    },
    {
      "text": "ALERT: On Symons Valley Py at Sherview Drive, there is a traffic incident that is blocking the EB right lane. #yyctraffic https://t.co/2AhPigr1BD",
      "time": "8:06 p.m.",
      "severity": 0
    },
    {
      "text": "ALERT: Traffic incident on  Symons Valley Py at Sherview Dr NW, blocking the EB right lane.   #yyctraffic #yycroads https://t.co/Sija8LIVlX",
      "time": "7:50 p.m.",
      "severity": 0
    },
    {
      "text": "SB Deerfoot Trail off RAMP to Peigan Trail, in Calgary - bridge repairs, Nov.7, 9pm-5am. Expect RH lane closure and speed reduced to 50km/h. #ABRoads #yyctraffic",
      "time": "7:20 p.m.",
      "severity": 1
    },
    {
      "text": "ALERT: Traffic incident on  NB Deerfoot Tr approaching 16 Ave NE, blocking the right shoulder on the NB exit ramp.   #yyctraffic #yycroads https://t.co/rotj6XZSTo",
      "time": "7:16 p.m.",
      "severity": 1
    },
    {
      "text": "NB Deerfoot Trail at Peigan Trail, in Calgary - bridge repairs, Nov.7, from 9pm to 5am. Expect RH lane closure and speed reduced to 50km/h. #yyctraffic #ABRoads",
      "time": "7:15 p.m.",
      "severity": 1
    },
    {
      "text": "ALERT:  Emergency services are helping a pedestrian involved in an incident on 11 St b/w 9 Ave and 10 Ave SW. The road is closed.. Please go slow and watch for fellow Calgarians Please use alternate route. #yyctraffic #yycroads https://t.co/qM1YNBo0tj",
      "time": "6:57 p.m.",
      "severity": 1
    },
    {
      "text": "ALERT: Traffic incident on 11 St and Aero Ga NE.   #yyctraffic #yycroads",
      "time": "6:17 p.m.",
      "severity": 0
    },
    {
      "text": "ALERT: Traffic incident on 144 Ave b/w 69 St and 85 St NW.   #yyctraffic #yycroads",
      "time": "5:47 p.m.",
      "severity": 0
    },
    {
      "text": "ALERT: Two vehicle incident on  EB Glenmore Tr at Stoney Tr SE, blocking the left lane.   #yyctraffic #yycroads https://t.co/3o286dChuZ",
      "time": "5:45 p.m.",
      "severity": 2
    },
    {
      "text": "SB QEII approaching jct Hwy566, Balzac interchange - MVC affecting the LHL and shoulder. Expect delays. (5:37pm) #ABRoads #yyctraffic",
      "time": "5:37 p.m.",
      "severity": 1
    },
    {
      "text": "ALERT: Traffic incident on  Peigan Tr and Barlow Tr SE, blocking the NB right lanes and WB to NB right turn.   #yyctraffic #yycroads https://t.co/6hdCBJwQoA",
      "time": "5:07 p.m.",
      "severity": 2
    },
    {
      "text": "ALERT: Traffic incident on  WB 16 Ave at 68 St NE, blocking the left lane.   #yyctraffic #yycroads https://t.co/HaYustyp13",
      "time": "4:22 p.m.",
      "severity": 2
    },
    {
      "text": "ALERT: Traffic incident on  Crowchild Tr and University Dr NW.   #yyctraffic #yycroads",
      "time": "4:03 p.m.",
      "severity": 1
    },
    {
      "text": "ALERT: Traffic incident on  SB 52 St at New Brighton Dr SE, blocking the right lane.   #yyctraffic #yycroads https://t.co/000WsPXZ6H",
      "time": "3:49 p.m.",
      "severity": 1
    },
    {
      "text": "ALERT: Traffic incident on  WB Kensington Rd at 23 St NW, blocking the right lane.   #yyctraffic #yycroads",
      "time": "3:35 p.m.",
      "severity": 0
    },
    {
      "text": "EB &amp; WB Hwy560 at RR283, S of Chestermere - MVC. Expect flag persons and delays. (11:10pm) #ABRoads #yyctraffic",
      "time": "11:10 p.m.",
      "severity": 0
    },
    {
      "text": "In the Southeast, overnight bridge construction on NB Deerfoot Trail at Peigan Trail blocking the two right-hand lanes, expect delays in that area #yyctraffic https://t.co/rB7hDSwtiY",
      "time": "9:40 p.m.",
      "severity": 1
    },
    {
      "text": "In the Northeast, there's a single-vehicle incident on SB Deerfoot Trail at 32nd Avenue, blocking the right-hand lane #yyctraffic https://t.co/23BAdVpOqm",
      "time": "7:26 p.m.",
      "severity": 1
    },
    {
      "text": "SB Deerfoot Tr at 32 Ave NE, in Calgary - single vehicle incident, blocking the RH lanes. (7:23pm) via @yyctransport #yyctraffic",
      "time": "7:24 p.m.",
      "severity": 1
    },
    {
      "text": "ALERT: Single vehicle incident on  SB Deerfoot Tr at 32 Ave NE, blocking the right lanes. Please drive with caution. #yyctraffic #yycroads https://t.co/1mONza7Cdw",
      "time": "7:20 p.m.",
      "severity": 1
    },
    {
      "text": "ALERT: Traffic incident on  80 Ave and Saddletowne Ci NE.   #yyctraffic #yycroads",
      "time": "7:06 p.m.",
      "severity": 0
    },
    {
      "text": "In the Southeast, incident on EB Glenmore Trail just past Blackfoot Trail, expect delays #yyctraffic https://t.co/jJN2UjobOT",
      "time": "6:54 p.m.",
      "severity": 2
    },
    {
      "text": "ALERT:  on  SB 52 St and Rundlehorn Dr NE, blocking multiple lanes.   #yyctraffic #yycroads https://t.co/w0SX1eARKQ",
      "time": "5:49 p.m.",
      "severity": 2
    },
    {
      "text": "ALERT: Traffic incident on  EB Country Hills Bv and Cityscape Ga NE, blocking multiple lanes.   #yyctraffic #yycroads https://t.co/d5JlMtIZof",
      "time": "5:21 p.m.",
      "severity": 2
    },
    {
      "text": "ALERT: Traffic incident on  WB 64 Ave and Deerfoot Tr NE, blocking multiple lanes.   #yyctraffic #yycroads https://t.co/MElCG0Etv0",
      "time": "4:57 p.m.",
      "severity": 2
    },
    {
      "text": "ALERT: Multi-vehicle incident on  WB Southland Dr and Deerfoot Tr SE, blocking the right lane.   #yyctraffic #yycroads https://t.co/KxQk8nHIZn",
      "time": "4:49 p.m.",
      "severity": 2
    },
    {
      "text": "ALERT: Traffic incident on  EB Memorial Dr and 44 St NE.   #yyctraffic #yycroads",
      "time": "4:47 p.m.",
      "severity": 1
    },
    {
      "text": "ALERT: Traffic incident on Barlow Tr and 61 Ave SE.   #yyctraffic #yycroads",
      "time": "4:47 p.m.",
      "severity": 1
    },
    {
      "text": "ALERT: Traffic incident on  SB 52 St and Maryvale Rd NE, blocking multiple lanes.   #yyctraffic #yycroads",
      "time": "4:45 p.m.",
      "severity": 2
    },
    {
      "text": "ALERT: Multi-vehicle incident on  EB Memorial Dr and Deerfoot Tr NE, blocking multiple lanes.   #yyctraffic #yycroads https://t.co/r5MWdYRp3E",
      "time": "4:37 p.m.",
      "severity": 2
    },
    {
      "text": "ALERT: Traffic incident on  Edmonton Tr and 7 Ave NE.   #yyctraffic #yycroads",
      "time": "4:32 p.m.",
      "severity": 0
    },
    {
      "text": "ALERT: Traffic incident on  WB Glenmore Tr and Barlow Tr SE, blocking the left lane.   #yyctraffic #yycroads https://t.co/roX0PFvbfq",
      "time": "3:52 p.m.",
      "severity": 1
    },
    {
      "text": "ALERT: Traffic incident on  25 St and 45 Ave SE.   #yyctraffic #yycroads",
      "time": "3:39 p.m.",
      "severity": 0
    },
    {
      "text": "ALERT: Traffic incident on  Sarcee Tr and Symons Valley Py NW.   #yyctraffic #yycroads",
      "time": "3:05 p.m.",
      "severity": 0
    },
    {
      "text": "ALERT: Traffic incident on  NB Crowchild Tr and Bow Tr SW, blocking the right lane.   #yyctraffic #yycroads https://t.co/hKO9Ci18XA",
      "time": "9:39 a.m.",
      "severity": 2
    },
    {
      "text": "NB Deerfoot Tr approaching Peigan Tr SE, Calgary - MVC affecting the LHL. Expect delays. (9:26am) #ABRoads #yyctraffic",
      "time": "9:26 a.m.",
      "severity": 2
    },
    {
      "text": "ALERT: Traffic incident on  NB Deerfoot Tr approaching Peigan Tr SE, blocking the left lane.   #yyctraffic #yycroads https://t.co/DiKYgeoIhY",
      "time": "9:18 a.m.",
      "severity": 2
    },
    {
      "text": "ALERT: Traffic incident on  NB Deerfoot Tr and Country Hills Bv NE.   #yyctraffic #yycroads https://t.co/179JSSYIFb",
      "time": "8:45 a.m.",
      "severity": 1
    },
    {
      "text": "In the NW, NB Crowchild Trail at Bow Trail, slowdowns due to a collision. Backed up to Glenmore Trail. #yyctraffic #yycroads https://t.co/wIAAkzXvY3",
      "time": "8:06 a.m.",
      "severity": 2
    },
    {
      "text": "ALERT: Traffic incident on  NB Crowchild Tr approaching 17 Ave SW, blocking the right lane.   #yyctraffic #yycroads https://t.co/xlXN6KGpGT",
      "time": "8:01 a.m.",
      "severity": 2
    },
    {
      "text": "ALERT: Traffic incident on WB Stoney Tr approaching Harvest Hills Bv N, blocking the right lane.   #yyctraffic #yycroads https://t.co/cgNM72iPC8",
      "time": "7:59 a.m.",
      "severity": 2
    },
    {
      "text": "ALERT: Traffic incident on  WB Memorial Dr and 28 St SE, blocking the right lane.   #yyctraffic #yycroads https://t.co/YDJ1wCkSbg",
      "time": "7:51 a.m.",
      "severity": 2
    },
    {
      "text": "ALERT: Traffic incident on  EB 17 Ave and 10 St SW.   #yyctraffic #yycroads https://t.co/MP0SVH0Ql8",
      "time": "7:49 a.m.",
      "severity": 0
    },
    {
      "text": "ALERT: Traffic incident on  Heritage Dr and 11 St SE.   #yyctraffic #yycroads",
      "time": "7:44 a.m.",
      "severity": 0
    },
    {
      "text": "ALERT: Traffic incident on  NB Deerfoot Tr and Memorial Dr SE, blocking the left lane.   #yyctraffic #yycroads https://t.co/kZL3vOYeUr",
      "time": "7:41 a.m.",
      "severity": 2
    },
    {
      "text": "EB Stoney Tr approaching Deerfoot Tr NE - MVC, expect delays in the area. (7:39am) via @yyctransport #yyctraffic #ABRoads",
      "time": "7:40 a.m.",
      "severity": 2
    },
    {
      "text": "ALERT: Traffic incident on NB Deerfoot Tr at Beddington Tr NE, blocking the right lane. With other incidents in the area, expect additional delays. #yyctraffic #yycroads",
      "time": "7:22 a.m.",
      "severity": 2
    },
    {
      "text": "NB Deerfoot Tr at Anderson Rd SE, Calgary - MVC. Expect delays. (7:17am) #ABRoads #yyctraffic",
      "time": "7:17 a.m.",
      "severity": 2
    },
    {
      "text": "ALERT: Traffic incident on NB Deerfoot Tr at Anderson Rd SE, blocking the right lane. There are considerable backups in the area. #yyctraffic #yycroads https://t.co/OUXUoGxu2m",
      "time": "7:13 a.m.",
      "severity": 2
    },
    {
      "text": "NB Deerfoot Tr approaching Airport Tr NE, Calgary -  traffic incident, blocking the RH lane. (6:55am) via @yyctransport #yyctraffic",
      "time": "6:55 a.m.",
      "severity": 1
    },
    {
      "text": "ALERT: Traffic signals are flashing red on  16 Ave and 14 St NW, crew has been dispatched.   #yyctraffic #yycroads",
      "time": "8:09 p.m.",
      "severity": 0
    },
    {
      "text": "CLEARED: The earlier incident on  3 St at 7 Ave SE has cleared. #yyctraffic #yycroads",
      "time": "8:05 p.m.",
      "severity": 0
    },
    {
      "text": "In the Northeast, incident on NB Deerfoot Trail approaching 16th Avenue, blocking the right-hand lane #yyctraffic https://t.co/pXPmyxEgtS",
      "time": "7:28 p.m.",
      "severity": 1
    },
    {
      "text": "NB Deerfoot Trail at Anderson Rd, in Calgary - bridge repairs, Nov.5, from 9pm to 5am. Expect RH lane closure and speed reduced to 50km/h. #yyctraffic #ABRoads",
      "time": "7:15 p.m.",
      "severity": 1
    },
    {
      "text": "NB Deerfoot Trail at Peigan Trail, in Calgary - bridge repairs, Nov.5, from 9pm to 5am. Expect RH lane closure and speed reduced to 50km/h. #yyctraffic #ABRoads",
      "time": "7:10 p.m.",
      "severity": 1
    },
    {
      "text": "ALERT: Traffic incident on  36 St and Radcliffe Dr SE, blocking the NB right lane.   #yyctraffic #yycroads https://t.co/nTZ6FuVLeM",
      "time": "7:09 p.m.",
      "severity": 1
    },
    {
      "text": "SB Deerfoot Trail off RAMP to Peigan Trail, in Calgary - bridge repairs, Nov.5, 9pm-5am. Expect RH lane closure and speed reduced to 50km/h. #ABRoads #yyctraffic",
      "time": "7:05 p.m.",
      "severity": 1
    },
    {
      "text": "NB Deerfoot Tr approaching McKnight Blvd NE, in Calgary - Traffic incident, blocking the LH lane. (6:45pm) via @yyctransport #yyctraffic",
      "time": "6:45 p.m.",
      "severity": 2
    },
    {
      "text": "ALERT: Traffic incident on  NB Deerfoot Tr approaching McKnight Bv NE, blocking the left lane. Expect delays in the area. #yyctraffic #yycroads https://t.co/fqHhefxd6W",
      "time": "6:35 p.m.",
      "severity": 2
    },
    {
      "text": "ALERT: Traffic incident on  36 Ave and 32 Ave NE.   #yyctraffic #yycroads",
      "time": "6:32 p.m.",
      "severity": 0
    },
    {
      "text": "ALERT: Traffic incident on  SB Crowchild Tr after 16 Ave NW. Expect delays in the area. #yyctraffic #yycroads",
      "time": "6:31 p.m.",
      "severity": 2
    },
    {
      "text": "In the Northwest, a crash on SB Crowchild Trail just past 16th Avenue causing backups #yyctraffic https://t.co/IQEobYCIqF",
      "time": "6:28 p.m.",
      "severity": 1
    },
    {
      "text": "SB Deerfoot Trail approaching Stoney Tr SE, in Calgary - MVC, blocking the RH lane. (6:18pm) via @yyctransport #yyctraffic #ABRoads",
      "time": "6:18 p.m.",
      "severity": 2
    },
    {
      "text": "In the Northeast, a stalled vehicle on NB Deerfoot Trail approaching McKnight Blvd is blocking the left-hand lane, expect delays #yyctraffic https://t.co/7LmaSN9hMd",
      "time": "6:18 p.m.",
      "severity": 2
    },
    {
      "text": "ALERT: Single vehicle incident on NB 52 St after 114 Ave SE, blocking the right lane.   #yyctraffic #yycroads https://t.co/dNSo43kqx0",
      "time": "6:10 p.m.",
      "severity": 2
    }
]


async function saveLabeledDataset(tweets, classifier) {
    try {
        const labeledData = tweets.map(tweet => ({
            text: tweet.text,
            time: tweet.time,
            severity: classifier.assessIncidentSeverity(tweet)
        }));
    
        await fs.writeFile(
            'labeledTrainingSet.json',
            JSON.stringify(labeledData, null, 2),
            'utf-8'
        );
        console.log("Saved dataset!");
    } catch (error) {
        console.log("Error saving dataset: ", error);
    }
    
}

async function trainModel() {
    try {
        const classifier = new CrashSeverityClassifier();
        const processedTweets = tweets.map(tweet => {
            const severity = classifier.assessIncidentSeverity(tweet);
            const roadType = classifier.identifyRoadType(tweet.text);
            const hour = classifier.parseTime(tweet.time);
            const isPeakTime = classifier.isPeakTime(hour);

            return {
                ...tweet,
                severity
            }
        });

        processedTweets.forEach((tweet, index) => {
            console.log('\n' + '='.repeat(80));
            console.log('Tweet:', tweet.text);
            console.log('Time:', tweet.time);
            console.log('Road Type:', classifier.identifyRoadType(tweet.text));
            console.log('Assigned Severity:', tweet.severity, '(0=Low, 1=Medium, 2=High)');
        }) 

        saveLabeledDataset(processedTweets, classifier);
        
        console.log('\nStarting model training...');
        const history = await classifier.train(processedTweets, 15);

        console.log('\nTesting predictions on sample tweets:');
        for (let i = 0; i < 3 && i < processedTweets.length; i++) {
            const tweet = processedTweets[i];
            const prediction = await classifier.predict(tweet);
            
            console.log('\n' + '-'.repeat(80));
            console.log('Tweet:', tweet.text);
            console.log('Prediction probabilities:');
            console.log('Low severity:', (prediction[0] * 100).toFixed(1) + '%');
            console.log('Medium severity:', (prediction[1] * 100).toFixed(1) + '%');
            console.log('High severity:', (prediction[2] * 100).toFixed(1) + '%');
        }

        const predictions = await Promise.all(
            processedTweets.map(tweet => classifier.predict(tweet))
        );
        
        const actualLabels = processedTweets.map(tweet => tweet.severity);
        const predictedLabels = predictions.map(
            pred => pred.indexOf(Math.max(...pred))
        );

    } catch (error) {
        console.log("Couldn't train model: ", error);
    }

}

async function testingLoadingModel() {
    const classifier = new CrashSeverityClassifier();
    try {
        await classifier.loadModel();
    } catch (error) {
        console.log("Error loading model: ", error);
    }

    for (let i = 0; i < 3 && i < tweets.length; i++) {
        const tweet = tweets[i];
        const prediction = await classifier.predict(tweet);
        
        console.log('\n' + '-'.repeat(80));
        console.log('Tweet:', tweet.text);
        console.log('Prediction probabilities:');
        console.log('Low severity:', (prediction[0] * 100).toFixed(1) + '%');
        console.log('Medium severity:', (prediction[1] * 100).toFixed(1) + '%');
        console.log('High severity:', (prediction[2] * 100).toFixed(1) + '%');
    }
    
}

async function testing() {
    const test = {
        text: "ALERT: Multi-vehicle incident on  EB Memorial Dr and Deerfoot Tr NE, blocking multiple lanes.   #yyctraffic #yycroads https://t.co/r5MWdYRp3E",
        time: "4:37 p.m."
    }
    const classifier = new CrashSeverityClassifier();
    classifier.assessIncidentSeverity(test);
}

async function testing2() {
    const test = {
        text: "ALERT: Multi-vehicle incident on  EB Memorial Dr and Deerfoot Tr NE, blocking multiple lanes.   #yyctraffic #yycroads https://t.co/r5MWdYRp3E",
        time: "4:37 p.m."
    }
    const classifier = new CrashSeverityClassifier();
    await classifier.loadModel();
    tweets.forEach(async (tweet, index) => {
        const prediction = await classifier.predict(tweet);
        console.log("Tweet text: ", tweet.text);
        console.log("Prediction: ", prediction);
        console.log("Actual: ", labeledTweets[index].severity);

    })
    
}

trainModel();
//testingLoadingModel();
//testing();
//testing2();