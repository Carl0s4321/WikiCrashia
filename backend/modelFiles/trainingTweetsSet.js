const tweets = [
  {
    "text": "ALERT: Traffic incident on 53 St and 146 Ave SW. Expect delays in the area. #yyctraffic #yycroads",
    "time": "5:29 p.m."
  },
  {
    "text": "ALERT: Traffic incident on SB Shawville Bv at Shawville Ga SE, blocking the right lane.  #yyctraffic #yycroads https://t.co/1yZcQSfAzq",
    "time": "5:10 p.m."
  },
  {
    "text": "ALERT: Traffic incident on Macleod Tr and 210 Ave SE, blocking multiple lanes in the intersection. Expect delays in the area. #yyctraffic #yycroads https://t.co/k0G5x2mcEl",
    "time": "4:35 p.m."
  },
  {
    "text": "SB Stoney Tr approaching 96 Ave NE, Calgary - MVC blocking the LHL. Keep right. (4:33pm) #ABRoads #yyctraffic",
    "time": "4:34 p.m."
  },
  {
    "text": "ALERT: Traffic incident on SB Stoney Tr approaching 96 Ave NE, blocking the left lane. Expect delays in the area. #yyctraffic #yycroads https://t.co/Wehtwg2yzo",
    "time": "4:30 p.m."
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
    "text": "ALERT: Traffic incident on Crowchild Tr and Silver Springs Ga NW, blocking the EB to SB exit.   #yyctraffic #yycroads https://t.co/PdCLUkwCRW",
    "time": "4:02 p.m."
  },
  {
    "text": "ALERT: Traffic incident on 64 Ave and Deerfoot Tr NE, blocking the WB right lane.   #yyctraffic #yycroads https://t.co/du6Opab1lE",
    "time": "2:55 p.m."
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
    "text": "ALERT: Traffic incident on SB Macleod Tr at Stoney Tr SW, blocking the right lane. Expect delays in the area. #yyctraffic #yycroads https://t.co/j2f2PoX9xv",
    "time": "2:14 p.m."
  },
  {
    "text": "ALERT: Traffic incident on 17 Ave and 26 St SW.   #yyctraffic #yycroads",
    "time": "12:56 p.m."
  },
  {
    "text": "NB Stoney Tr approaching Glenmore Tr SE, Calgary - cable barrier repairs, Nov.22, in progress. Expect a LH shoulder closure. (12:38pm) #ABRoads #yyctraffic",
    "time": "12:38 p.m."
  },
  {
    "text": "ALERT: Traffic incident on 85 St and Wentworth Dr SW, blocking the SB right lane.   #yyctraffic #yycroads https://t.co/3TkxrUZrag",
    "time": "11:28 a.m."
  },
  {
    "text": "NB QEII after Stoney Tr NE, N of Calgary - MVC blocking the LHL. Expect delays in the area. (9:56am) #ABRoads #yyctraffic",
    "time": "9:56 a.m."
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
    "text": "NB Deerfoot Trail approaching 17th Ave, Calgary - MVC, blocking the LH lane. (4:25pm) via @yyctransport #yyctraffic",
    "time": "4:25 p.m."
  },
  {
    "text": "ALERT: Two vehicle incident on  EB Crowchild Tr and Shaganappi Tr NW, blocking the right lane.   #yyctraffic #yycroads https://t.co/Vu528fWhfV",
    "time": "3:55 p.m."
  },
  {
    "text": "ALERT: Two vehicle incident on  NB Crowchild Tr and Bow Tr SW, blcoking the right lane.   #yyctraffic #yycroads https://t.co/soMEArWkOF",
    "time": "6:05 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  42 Ave and 9 St SE.   #yyctraffic #yycroads",
    "time": "5:31 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  52 St and 14 Ave SE.   #yyctraffic #yycroads https://t.co/V3dwtwfcTC",
    "time": "5:07 p.m."
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
    "text": "In the Southwest, stalled vehicle on WB Glenmore Trail at 37th Street, blocking the middle lane, expect major backups #yyctraffic https://t.co/btN0kx0rZK",
    "time": "5:48 p.m."
  },
  {
    "text": "In the Southeast, watch out for a new crash on NB Deerfoot Trail approaching 17th Avenue, blocking the right-hand lane #yyctraffic https://t.co/IIslRuLGgG",
    "time": "5:04 p.m."
  },
  {
    "text": "ALERT: Multi-vehicle incident on  EB Stoney Tr and Harvest Hills Bv NE, blocking the right shoulder.   #yyctraffic #yycroads https://t.co/gRA5vFlvbG",
    "time": "4:29 p.m."
  },
  {
    "text": "In the Northeast, watch out for a crash on WB McKnight Blvd at Deerfoot Trail, blocking the right-hand lane #yyctraffic https://t.co/GNnxAhhQHy",
    "time": "4:19 p.m."
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
    "text": "In the Southeast, watch out for a crash on NB Deerfoot Trail approaching 17th Avenue, blocking the left-hand lane #yyctraffic https://t.co/gcDYFgxgsT",
    "time": "4:17 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  WB McKnight Bv and Deerfoot Tr NE, blocking the right lane.   #yyctraffic #yycroads https://t.co/MNv7LH4E8t",
    "time": "4:15 p.m."
  },
  {
    "text": "ALERT: Multi-vehicle incident on  WB 96 Ave and Deerfoot Tr NE, blocking multiple lanes.   #yyctraffic #yycroads https://t.co/avPezVPyl1",
    "time": "6:09 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  Stoney Tr and Old Banff Coach Rd SW.   #yyctraffic #yycroads",
    "time": "1:15 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  Nose Hill Dr and Tuscany Hl NW.   #yyctraffic #yycroads",
    "time": "12:19 p.m."
  },
  {
    "text": "ALERT: Traffic incident on 16 Ave and 29 St NW.   #yyctraffic #yycroads",
    "time": "3:23 p.m."
  },
  {
    "text": "In the Southwest, incident on NB Crowchild Trail north of 33rd Avenue has the left-hand lane blocked off, expect delays #yyctraffic https://t.co/aoRVJYYq4B",
    "time": "3:00 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  EB 32 Ave and Barlow Tr NE, blocking the right lane.   #yyctraffic #yycroads",
    "time": "11:29 a.m."
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
    "text": "ALERT: Traffic incident on  WB 32 Ave and 19 St NE.   #yyctraffic #yycroads",
    "time": "12:06 p.m."
  },
  {
    "text": "ALERT: Traffic incident on 9 Ave b/w 13 St and 14 St SE.   #yyctraffic #yycroads",
    "time": "3:06 p.m."
  },
  {
    "text": "SB Deerfoot Tr near 17 Ave SE, Calgary - MVC in the RHL. Drive with caution in the area. (1:44pm) #ABRoads #yyctraffic",
    "time": "1:44 p.m."
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
    "text": "In the NE, SB 52nd Street and 16th Avenue, there's a collision blocking multiple lanes. #yyctraffic #yycroads https://t.co/nyl3WahtZK",
    "time": "8:04 a.m."
  },
  {
    "text": "In the Southeast, watch out for a crash on SB Macleod Trail at 99th Avenue, blocking the right-hand lane #yyctraffic https://t.co/XXcgsmplec",
    "time": "4:34 p.m."
  },
  {
    "text": "ALERT: Traffic incident on SB Macleod Tr and 99 Ave SE, blocking multiple lanes.   #yyctraffic #yycroads https://t.co/tu1KeA9Moz",
    "time": "4:25 p.m."
  },
  {
    "text": "Good Morning! There's some improvement on the roads. Still lots of slippery sections plus there's a collision in the SW, 14th Street and Glenmore Trail WB, blocking the left lane. #yyctraffic #yycroads https://t.co/9ZZomOmuaN",
    "time": "5:54 a.m."
  },
  {
    "text": "ALERT: Traffic incident on WB 16 Ave approaching Sarcee Tr NW.   #yyctraffic #yycroads",
    "time": "7:52 p.m."
  },
  {
    "text": "NB Deerfoot Tr approaching Memorial Dr SE, Calgary - Traffic incident, blocking RH lanes. (6:38pm) via @yyctransport  #yyctraffic",
    "time": "6:38 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  36 St and 12 Ave SE.   #yyctraffic #yycroads",
    "time": "12:17 p.m."
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
    "text": "ALERT: Traffic incident on 128 Ave and Barlow Tr NE.   #yyctraffic #yycroads",
    "time": "7:31 p.m."
  },
  {
    "text": "In the Southeast, watch out for a crash on EB Southland Drive at Deerfoot Trail, blocking the right-hand lane #yyctraffic https://t.co/n3FFrTZhmY",
    "time": "4:33 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  Shawville Bv and Shalom Wy SE.   #yyctraffic #yycroads",
    "time": "12:31 p.m."
  },
  {
    "text": "ALERT: Multi-vehicle incident on  WB 14 St and Glenmore Tr SW, blocking the left lane.   #yyctraffic #yycroads https://t.co/T8pL4CwjDP",
    "time": "5:49 a.m."
  },
  {
    "text": "ALERT: Multi-vehicle incident on Southland Dr at Deerfoot Tr SE, blocking the EB right lane.   #yyctraffic #yycroads https://t.co/CH83n4eff4",
    "time": "4:13 p.m."
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
    "text": "ALERT: Traffic incident on  33 St and 34 Ave SE.   #yyctraffic #yycroads",
    "time": "11:24 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  Grey Eagle Bv and Grey Eagle Dr SW.   #yyctraffic #yycroads",
    "time": "10:49 a.m."
  },
  {
    "text": "ALERT: Traffic incident on  SB Deerfoot Tr and Beddington Tr NE.   #yyctraffic #yycroads https://t.co/3ZquCqkdgL",
    "time": "9:39 a.m."
  },
  {
    "text": "ALERT: Traffic incident on  NB Deerfoot Tr and Memorial Dr SE, blocking the right lane.   #yyctraffic #yycroads https://t.co/Y2qmvSyxZD",
    "time": "6:42 a.m."
  },
  {
    "text": "ALERT: Traffic incident on  SB 52 St and 61 Ave SE, blocking the left lane.   #yyctraffic #yycroads https://t.co/RSl6PSVu31",
    "time": "12:44 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  WB Country Hills Bv and Stoney Tr NE, blocking the right lane.   #yyctraffic #yycroads https://t.co/q0ON2ANYeQ",
    "time": "10:38 a.m."
  },
  {
    "text": "SB Deerfoot Tr after Beddington Tr NW, Calgary, MVC. Drive with caution and expect delays. (9:48am) #ABRoads #yyctraffic",
    "time": "9:49 a.m."
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
    "text": "ALERT: Traffic incident on 4 St and 22 Ave NW. Expect delays in the area. #yyctraffic #yycroads",
    "time": "3:26 p.m."
  },
  {
    "text": "ALERT: Multi-vehicle incident on  SB Stoney Tr approaching 16 Ave NW.   #yyctraffic #yycroads https://t.co/KeedxDGXto",
    "time": "12:46 p.m."
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
    "text": "ALERT: Traffic incident on  EB Glenmore Tr after Crowchild Tr SW, blocking the left lane.   #yyctraffic #yycroads https://t.co/QxU5zxT7mU",
    "time": "1:01 p.m."
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
    "text": "ALERT: Traffic incident on  WB Memorial Dr and Crowchild Tr NW.   #yyctraffic #yycroads https://t.co/tbswYsl5IQ",
    "time": "10:00 a.m."
  },
  {
    "text": "ALERT: Traffic incident on  9 Ave and 12 St SE.   #yyctraffic #yycroads https://t.co/05VFxzOO8v",
    "time": "9:07 a.m."
  },
  {
    "text": "ALERT: Traffic incident on  SB Stoney Tr and Glenmore Tr SE.   #yyctraffic #yycroads https://t.co/mSQBVI7RvQ",
    "time": "7:25 a.m."
  },
  {
    "text": "ALERT: Traffic incident on 61 Ave and 52 St SE. Expect delays in the area. #yyctraffic #yycroads",
    "time": "2:24 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  16 Ave and Centre St N, blocking the middle lane WB. and NB traffic.   #yyctraffic #yycroads https://t.co/endSB6Al0d",
    "time": "11:50 a.m."
  },
  {
    "text": "ALERT: Traffic incident on  37 St and 17 Ave SW.   #yyctraffic #yycroads https://t.co/qyHutlpzB7",
    "time": "9:41 a.m."
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
    "text": "ALERT: Traffic incident on  EB Country Hills Bv and 11 St NE, blocking the right lane.   #yyctraffic #yycroads https://t.co/UTuooRA1Ku",
    "time": "11:46 a.m."
  },
  {
    "text": "ALERT: Traffic incident on  EB Glenmore Tr and Blackfoot Tr SE.   #yyctraffic #yycroads https://t.co/YIKvpgPNN5",
    "time": "10:53 a.m."
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
    "text": "ALERT: Traffic incident on  15 St and 9 Ave SE.   #yyctraffic #yycroads",
    "time": "10:24 a.m."
  },
  {
    "text": "ALERT: Traffic incident on  NB Macleod Tr and 50 Ave SW.   #yyctraffic #yycroads https://t.co/9xZK3DinzV",
    "time": "10:22 a.m."
  },
  {
    "text": "ALERT: Multi-vehicle incident on  Memorial Dr and Deerfoot Tr NE, on ramp onto SB Deerfoot Trail.   #yyctraffic #yycroads https://t.co/mh9mzrTPAO",
    "time": "10:07 a.m."
  },
  {
    "text": "ALERT: Multi-vehicle incident on  52 St and Seton Bv SE.   #yyctraffic #yycroads https://t.co/VVrqZEvedO",
    "time": "9:33 a.m."
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
    "text": "ALERT: Traffic incident on EB McKnight Bv at Aviation Bv NE, blocking the left turn lane.   #yyctraffic #yycroads https://t.co/Y3TOWMcWDa",
    "time": "2:16 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  NB 36 St and 26 Ave NE, blocking the right lane.   #yyctraffic #yycroads https://t.co/rxSLUwU8N5",
    "time": "11:26 a.m."
  },
  {
    "text": "ALERT: Traffic incident on  61 Ave and 29 St SE.   #yyctraffic #yycroads",
    "time": "10:16 a.m."
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
    "text": "ALERT: Two vehicle incident on  EB 17 Ave and Deerfoot Tr SE, blocking the left turn lane.   #yyctraffic #yycroads https://t.co/fNVjg6yZBz",
    "time": "3:40 p.m."
  },
  {
    "text": "ALERT: Two vehicle incident on  Bow Tr and 33 St SW, blocking the EB right lane and SB lanes.   #yyctraffic #yycroads https://t.co/hPlABd2JH4",
    "time": "12:07 p.m."
  },
  {
    "text": "ALERT: Multi-vehicle incident on SB Deerfoot Tr at Memorial Dr SE, blocking the left lane. Expect delays in the area. #yyctraffic #yycroads https://t.co/cjozRGJoWl",
    "time": "7:05 a.m."
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
    "text": "ALERT: Two vehicle incident on  Beddington Bv and Beddington Tr NE, blocking the SB right lane.   #yyctraffic #yycroads https://t.co/WfH108Npfo",
    "time": "12:39 p.m."
  },
  {
    "text": "SB Deerfoot Tr at Memorial Dr E, Calgary - MVC blocking the LHL. Expect delays. (7:08am) #ABRoads #yyctraffic",
    "time": "7:08 a.m."
  },
  {
    "text": "ALERT: Traffic incident on  NB Stoney Tr north of Country Hills Bv NE.   #yyctraffic #yycroads",
    "time": "11:36 p.m."
  },
  {
    "text": "ALERT: Traffic incident on 50 St and 130 Ave SE.   #yyctraffic #yycroads",
    "time": "4:30 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  James McKevitt Rd and Millview Ga SW.   #yyctraffic #yycroads",
    "time": "3:42 p.m."
  },
  {
    "text": "ALERT:  Emergency services have been called to help a pedestrian involved in an incident on University Dr north of 16 Ave NW. Please go slow and watch for fellow Calgarians.   #yyctraffic #yycroads",
    "time": "3:25 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  Stoney Tr and 17 Ave SE.   #yyctraffic #yycroads",
    "time": "2:19 p.m."
  },
  {
    "text": "ALERT: Traffic incident on McKenzie Towne Bv and 52 St SE.   #yyctraffic #yycroads",
    "time": "6:50 a.m."
  },
  {
    "text": "ALERT: Traffic incident on 76 Ave at 18 St SE.   #yyctraffic #yycroads https://t.co/WDj1qxpGG5",
    "time": "7:51 a.m."
  },
  {
    "text": "ALERT: Traffic incident on Old Banff Coach Rd and Patterson Bv SW.   #yyctraffic #yycroads",
    "time": "7:42 a.m."
  },
  {
    "text": "SB Deerfoot Tr at Stoney Tr NE - MVC blocking the left lane on the EB ramp. Expect delays. (6:57am) #ABRoads #yyctraffic",
    "time": "6:58 a.m."
  },
  {
    "text": "ALERT: Stalled vehicle on  WB Glenmore Tr and Crowchild SW, blocking the left exit lane from WB Glenmore Tr to NB Crowchild Tr.   #yyctraffic #yycroads https://t.co/7w7BuHAXcU",
    "time": "4:09 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  SB 68 St and McKnight Bv NE.   #yyctraffic #yycroads",
    "time": "1:53 p.m."
  },
  {
    "text": "ALERT:  Emergency services have been called to help a pedestrian involved in an incident on Rundlehorn Dr and 52 St NE. Blocking the SB right lane. Please go slow and watch for fellow Calgarians   #yyctraffic #yycroads https://t.co/KCrqKxTbfZ",
    "time": "7:45 a.m."
  },
  {
    "text": "EB 16 Ave NE on-ramp to Deerfoot Tr, Calgary - disabled vehicle in the LHL. Expect delays in the area. (7:10am) #ABRoads #yyctraffic",
    "time": "7:10 a.m."
  },
  {
    "text": "ALERT: Traffic incident on Country Hills Bv and Coventry Bv NE, blocking multi lanes.   #yyctraffic #yycroads https://t.co/0HeIe5T90e",
    "time": "6:20 a.m."
  },
  {
    "text": "EB Stoney Tr off-ramp to Metis Tr NE, Calgary - intersection street light repairs, Nov.19-20, daylight hours. Expect a lane closure and speed reduction. #ABRoads #yyctraffic",
    "time": "5:00 a.m."
  },
  {
    "text": "ALERT: Traffic incident on  SB Crowchild Tr and Glenmore Tr SW, blocking the left lane.   #yyctraffic #yycroads https://t.co/OMzLIIeyPo",
    "time": "3:12 p.m."
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
    "text": "ALERT: Traffic incident on  Mcknight Bv and 47 St NE, blocking the WB right lane.   #yyctraffic #yycroads https://t.co/SOCCMhjrTg",
    "time": "7:06 a.m."
  },
  {
    "text": "ALERT: Traffic incident on Deerfoot Tr and Stoney Tr NE, blocking the left lane of SB to EB ramp.   #yyctraffic #yycroads https://t.co/lxfdfN5QQ7",
    "time": "6:48 a.m."
  },
  {
    "text": "ALERT: Multi-vehicle incident on NB Macleod Tr at Canyon Meadows Dr SE, blocking the right lane.   #yyctraffic #yycroads https://t.co/tvljwO2gmA",
    "time": "6:17 a.m."
  },
  {
    "text": "ALERT: Traffic incident on  John Laurie Bv and 14 St NW.   #yyctraffic #yycroads",
    "time": "4:25 p.m."
  },
  {
    "text": "⚠️ WATCH OUT! Stuck/jacknifed articuled city bus on EB 32nd Ave &amp; Campus Drive N.W.! \n\nDrive safe. \n\n#yyc #yycroads #yyctraffic https://t.co/U7mCuv1rhR",
    "time": "3:03 p.m."
  },
  {
    "text": "ALERT: Traffic incident on NB Stoney Tr at 114 Ave SE, blocking the right lane.   #yyctraffic #yycroads https://t.co/CcBBnh5dxF",
    "time": "12:56 p.m."
  },
  {
    "text": "ALERT: Multi-vehicle incident on  SB Stoney Tr approaching Crowchild Tr NW, blocking the right lanes. Expect delays in the area. #yyctraffic #yycroads https://t.co/g4g6zK4eaU",
    "time": "12:03 p.m."
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
    "text": "ALERT: Traffic incident on  Stoney Tr and 16 Ave NW, partially blocking the WB on-ramp.   #yyctraffic #yycroads https://t.co/HSWOMGZBRh",
    "time": "12:35 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  Uxbridge Dr and 16 Ave NW.   #yyctraffic #yycroads",
    "time": "2:02 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  Stoney Tr and Old Banff Coach Rd SW.   #yyctraffic #yycroads",
    "time": "11:33 a.m."
  },
  {
    "text": "NB Stoney Tr near Glenmore Tr SE, Calgary - MVC in the LHL. Drive with caution in the area. (4:59pm) #ABRoads #yyctraffic",
    "time": "4:59 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  Stoney Tr and 162 Ave SW.   #yyctraffic #yycroads",
    "time": "3:30 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  Stoney Tr and Glenmore Tr SE.   #yyctraffic #yycroads https://t.co/azdDcgCKQ4",
    "time": "1:45 p.m."
  },
  {
    "text": "ALERT: Single vehicle incident on  EB Stoney Tr at Harvest Hills Bv N, blocking the left lane.   #yyctraffic #yycroads https://t.co/wDEc9LbzwU",
    "time": "11:54 a.m."
  },
  {
    "text": "ALERT: Traffic signals issue on 16 Ave and 14 St NW, crew has been dispatched. Please drive with care. #yyctraffic #yycroads",
    "time": "12:55 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  Marlborough Way north of Memorial Dr NE.   #yyctraffic #yycroads",
    "time": "1:55 a.m."
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
    "text": "ALERT: Two vehicle incident on SB Stoney Tr approaching Glenmore Tr SE, blocking the left lane.   #yyctraffic #yycroads https://t.co/2OovfqhZqN",
    "time": "12:58 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  19 St and Capri Ave NW.   #yyctraffic #yycroads",
    "time": "11:56 p.m."
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
    "text": "ALERT: Traffic incident on SB Macleod Tr and 45 Ave SW, blocking the right lane.   #yyctraffic #yycroads https://t.co/8DwMPa9DS0",
    "time": "11:56 a.m."
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
    "text": "ALERT: Stalled vehicle on EB Glenmore Tr after Macleod Tr S, blocking the left lane. Please drive with caution. #yyctraffic #yycroads https://t.co/ZbqAYRmv1r",
    "time": "7:22 p.m."
  },
  {
    "text": "ALERT: Traffic incident on EB Glenmore Tr approaching 14 St SW, blocking the left lanes.   #yyctraffic #yycroads https://t.co/nOkuqnVKpB",
    "time": "11:54 a.m."
  },
  {
    "text": "ALERT: Traffic incident on  WB Memorial Dr approaching 12 St NE, blocking the right lane.   #yyctraffic #yycroads https://t.co/DaemMvITWS",
    "time": "10:12 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  WB Memorial Dr and Edmonton Tr NE, blocking the right lane.   #yyctraffic #yycroads https://t.co/uXZphmOe44",
    "time": "2:10 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  NB Deerfoot Tr SE at the Calf Robe Bridge, blocking the left lane. Expect delays in the area. #yyctraffic #yycroads https://t.co/VcHqtPxOnn",
    "time": "7:25 a.m."
  },
  {
    "text": "ALERT: Multi-vehicle incident on  NB Deerfoot Tr north of Peigan Tr SE, blocking the left shoulder. Expect delays in the area. #yyctraffic #yycroads https://t.co/lfuGPESoLJ",
    "time": "6:50 a.m."
  },
  {
    "text": "ALERT: Traffic incident on  Bearspaw Dam Rd and 85 St NW.   #yyctraffic #yycroads",
    "time": "4:23 p.m."
  },
  {
    "text": "NB Deerfoot Tr SE at the Calf Robe Br, in Calgary - traffic incident, blocking the LH lane. (7:30am) via @yyctransport #yyctraffic",
    "time": "7:30 a.m."
  },
  {
    "text": "ALERT: Traffic incident on  Nose Hill Dr and 87 St NW, blocking multiple lanes.   #yyctraffic #yycroads https://t.co/sQWuCRIHh2",
    "time": "10:01 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  SB 19 St and 41 Ave NE.   #yyctraffic #yycroads",
    "time": "4:34 p.m."
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
    "text": "WB Stoney Tr SW to James McKevitt Rd SW, Calgary - concrete barrier work on the ramp, Nov.14 from 9am to 3pm. Expect lane closures in the area. #ABRoads #yyctraffic",
    "time": "7:01 a.m."
  },
  {
    "text": "ALERT: Traffic incident on  Nose Hill Dr and Crowchild Tr NW, blocking the NB lanes.   #yyctraffic #yycroads https://t.co/Lzl64OeTvr",
    "time": "10:56 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  Peigan Tr and 36 St SE.   #yyctraffic #yycroads https://t.co/VVFnPrIHK2",
    "time": "9:53 p.m."
  },
  {
    "text": "ALERT: Two vehicle incident on SB Crowchild Tr approaching 24 Ave NW, blocking the right lane.   #yyctraffic #yycroads https://t.co/qZ1OHE1rqk",
    "time": "8:02 a.m."
  },
  {
    "text": "ALERT: Traffic incident on  Beddington Bv and 4 St NE.   #yyctraffic #yycroads https://t.co/f1bzkJ2wk9",
    "time": "11:52 p.m."
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
    "text": "ALERT: Two vehicle incident on EB 16 Ave and 19 St NE, blocking the right lane.   #yyctraffic #yycroads https://t.co/bouFkPylJS",
    "time": "2:15 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  84 St north of 114 Ave SE.   #yyctraffic #yycroads",
    "time": "7:25 a.m."
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
    "text": "ALERT: Traffic incident on  EB Memorial Dr and Centre St S.   #yyctraffic #yycroads https://t.co/6GOjH0TQ6q",
    "time": "12:57 p.m."
  },
  {
    "text": "ALERT: Two vehicle incident on Old Banff Coach Rd and 85 St SW, blocking the WB lanes and NB right lane.   #yyctraffic #yycroads https://t.co/NkLeqrvuZE",
    "time": "7:12 a.m."
  },
  {
    "text": "ALERT: Traffic incident on  Falconridge Bv and Taradale Dr NE.   #yyctraffic #yycroads https://t.co/2ZKTCm4aeI",
    "time": "7:18 p.m."
  },
  {
    "text": "SB Deerfoot Tr just past Southland Dr -MVC. Stay to the right and expect delays. (6:13pm) #ABRoads #yyctraffic",
    "time": "6:13 p.m."
  },
  {
    "text": "ALERT: Traffic incident on Glenmore Tr and Stoney Tr SE, partially blocking the EB to NB ramp.   #yyctraffic #yycroads https://t.co/HvDg4iRv30",
    "time": "2:11 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  Sarcee Tr and Sherwood Bv NW.   #yyctraffic #yycroads",
    "time": "8:21 a.m."
  },
  {
    "text": "ALERT: Traffic incident on  Panorama Hills Bv and Country Hills Bv NW.   #yyctraffic #yycroads",
    "time": "7:41 a.m."
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
    "text": "ALERT: Traffic incident on  14 St and 16 Ave NW.   #yyctraffic #yycroads",
    "time": "6:14 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  68 St and Mcknight Bv NE.   #yyctraffic #yycroads",
    "time": "9:37 a.m."
  },
  {
    "text": "ALERT: Multi-vehicle incident on  SB Shaganappi Tr and John Laurie Bv NW, blocking the left lane.   #yyctraffic #yycroads https://t.co/71TstIj6to",
    "time": "7:53 a.m."
  },
  {
    "text": "ALERT: Traffic incident on  NB Crowchild Tr and 17 Ave SW, blocking the right lane.   #yyctraffic #yycroads https://t.co/sYPReQW2VW",
    "time": "7:33 a.m."
  },
  {
    "text": "In the Northwest, watch out for a crash on Beddington Trail at Stoney Trail, blocking lanes through that intersection, watch out for emergency crews on scene #yyctraffic https://t.co/M7113G3RFY",
    "time": "1:52 p.m."
  },
  {
    "text": "In the Northwest, watch out for a crash on NB Stoney Trail approaching Nose Hill Drive, blocking the right-hand lanes #yyctraffic https://t.co/MRvvAlZwB6",
    "time": "3:25 p.m."
  },
  {
    "text": "In the Northwest, watch out for a crash on WB Stoney Trail at Sarcee Trail, blocking the right-hand lane #yyctraffic https://t.co/5kMlJi4ZhE",
    "time": "2:01 p.m."
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
    "text": "ALERT: Two vehicle incident on  SB 14 St and Northmount Dr NW, blocking the right lane.   #yyctraffic #yycroads https://t.co/XEudjjs0ko",
    "time": "8:16 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  24 Ave and 19 St NW.   #yyctraffic #yycroads",
    "time": "4:43 p.m."
  },
  {
    "text": "NB Stoney Tr approaching Nose Hill Dr NW, Calgary -  MVC  blocking the RH lane. Drive with caution and expect delays. (3:28pm) #ABRoads #yyctraffic",
    "time": "3:29 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  NB 18 St and Glenmore Tr SE, blocking the right lane.   #yyctraffic #yycroads https://t.co/h8EjkXSeo7",
    "time": "2:46 p.m."
  },
  {
    "text": "ALERT: Traffic signals are blank on  53 St and Dalhousie Dr NW, power outage in the area. Please drive with caution. #yyctraffic #yycroads",
    "time": "3:33 p.m."
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
    "text": "ALERT: Traffic incident on  Falconridge Dr and 68 St NE.   #yyctraffic #yycroads",
    "time": "3:30 p.m."
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
    "text": "ALERT: Two vehicle incident on  Sarcee Tr at Richmond Rd SW, blocking the SB left lanes.   #yyctraffic #yycroads https://t.co/TfFdKXUAC7",
    "time": "10:13 a.m."
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
    "text": "In the Northeast, watch out for a crash on WB Country Hills Blvd just past 11th Street, blocking the right-hand lane #yyctraffic https://t.co/gn5yD1PLkG",
    "time": "11:58 a.m."
  },
  {
    "text": "ALERT: Traffic incident on  EB Stoney Tr approaching Metis Tr NE, blocking the right lanes.   #yyctraffic #yycroads https://t.co/VYim0kbVcA",
    "time": "3:51 a.m."
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
    "text": "ALERT: Traffic incident on 68 St and 86 Ave SE. Please drive with caution. #yyctraffic #yycroads https://t.co/ef0uizPidQ",
    "time": "7:25 a.m."
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
    "text": "ALERT: Traffic incident on WB Country Hills Bv approaching Coventry Bv NE, blocking the right lane.   #yyctraffic #yycroads https://t.co/8fFBeAEF38",
    "time": "11:43 a.m."
  },
  {
    "text": "ALERT: Traffic incident on EB Beddington Tr at Hidden Valley Li NW, blocking the right lane. Expect delays in the area. #yyctraffic #yycroads https://t.co/hNJ9q41dmT",
    "time": "10:18 a.m."
  },
  {
    "text": "ALERT: Traffic incident on  61 Ave and 44 St SE.   #yyctraffic #yycroads",
    "time": "8:54 p.m."
  },
  {
    "text": "In the Southeast, watch out for a crash on SB Deerfoot Trail approaching Glenmore Trail, blocking the right-hand lane #yyctraffic https://t.co/j6d5PwgZ0i",
    "time": "1:57 p.m."
  },
  {
    "text": "In the NW, EB Memorial Drive just east of 14th Street, the right lane is blocked off due to construction. #yyctraffic #yycroads https://t.co/Gk6CUTE11V",
    "time": "10:04 a.m."
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
    "text": "ALERT: Two vehicle incident on  WB Heritage Dr and Bonaventure Dr SE, blocking the right lane.   #yyctraffic #yycroads https://t.co/2YFPpfRRm3",
    "time": "4:34 p.m."
  },
  {
    "text": "ALERT: Two vehicle incident on  EB Glenmore Tr and Blackfoot Tr SE, blocking the right lane.   #yyctraffic #yycroads https://t.co/1yvvJLohyc",
    "time": "2:47 p.m."
  },
  {
    "text": "ALERT: Two vehicle incident on NB 52 St approaching Stoney Tr SE, blocking the right lanes.  #yyctraffic #yycroads https://t.co/QJhZLpsJtY",
    "time": "1:17 p.m."
  },
  {
    "text": "ALERT: Traffic incident on NB Deerfoot Tr at McKnight Bv NE, blocking the left lane.  #yyctraffic #yycroads https://t.co/kzQBuYdDWr",
    "time": "6:11 a.m."
  },
  {
    "text": "In the Southeast, watch out for a crash on WB Heritage Drive approaching Bonaventure Drive, that's blocking the right-hand lane #yyctraffic https://t.co/etDXgA1pd1",
    "time": "4:38 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  SB Deerfoot Tr and Glenmore Tr SE, blocking the right lane.   #yyctraffic #yycroads https://t.co/AZJe0ckVdQ",
    "time": "1:54 p.m."
  },
  {
    "text": "ALERT: Traffic incident on NB 52 St after 4 Ave NE, blocking the right lane.   #yyctraffic #yycroads https://t.co/wYSzt2hzzB",
    "time": "12:46 p.m."
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
    "text": "NB Deerfoot Tr at McKnight Blvd NE, Calgary - MVC affecting the LHL. (6:13am) #ABRoads #yyctraffic",
    "time": "6:13 a.m."
  },
  {
    "text": "In the Southeast, we have a crash on EB Glenmore Trail just past Blackfoot Trail, blocking the right-hand lane #yyctraffic https://t.co/mwGH0pqCq9",
    "time": "2:56 p.m."
  },
  {
    "text": "In the Northeast, watch out for a crash on NB 52nd Street just past 4th Avenue, blocking the right-hand lane #yyctraffic https://t.co/0tw9Nh6Duv",
    "time": "1:04 p.m."
  },
  {
    "text": "ALERT: Two vehicle incident on NB Metis Tr approaching Stoney Tr NE, blocking the right lanes.   #yyctraffic #yycroads https://t.co/VhGCiGYUKl",
    "time": "7:43 a.m."
  },
  {
    "text": "ALERT: Traffic incident on SB Deerfoot Tr at 32 Ave NE, blocking the left lanes. Please drive with caution. #yyctraffic #yycroads https://t.co/LoF9OqSQaF",
    "time": "6:30 a.m."
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
    "text": "SB Deerfoot Trail off RAMP to Peigan Trail, in Calgary - bridge repairs, Nov.7, 9pm-5am. Expect RH lane closure and speed reduced to 50km/h. #ABRoads #yyctraffic",
    "time": "7:20 p.m."
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
    "text": "ALERT: Traffic incident on 144 Ave b/w 69 St and 85 St NW.   #yyctraffic #yycroads",
    "time": "5:47 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  NB Deerfoot Tr approaching 16 Ave NE, blocking the right shoulder on the NB exit ramp.   #yyctraffic #yycroads https://t.co/rotj6XZSTo",
    "time": "7:16 p.m."
  },
  {
    "text": "SB QEII approaching jct Hwy566, Balzac interchange - MVC affecting the LHL and shoulder. Expect delays. (5:37pm) #ABRoads #yyctraffic",
    "time": "5:37 p.m."
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
    "text": "ALERT: Traffic incident on 11 St and Aero Ga NE.   #yyctraffic #yycroads",
    "time": "6:17 p.m."
  },
  {
    "text": "ALERT: Two vehicle incident on  EB Glenmore Tr at Stoney Tr SE, blocking the left lane.   #yyctraffic #yycroads https://t.co/3o286dChuZ",
    "time": "5:45 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  Peigan Tr and Barlow Tr SE, blocking the NB right lanes and WB to NB right turn.   #yyctraffic #yycroads https://t.co/6hdCBJwQoA",
    "time": "5:07 p.m."
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
    "text": "WB Stoney Tr approaching Deerfoot Tr SE, Calgary - road maintenance operations, Nov.7 at 11pm until Nov.8 at 1am. Expect a lane closure and speed reduced to 80km/h. #ABRoads #yyctraffic",
    "time": "11:15 p.m."
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
    "text": "ALERT: Traffic incident on  25 St and 45 Ave SE.   #yyctraffic #yycroads",
    "time": "3:39 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  Sarcee Tr and Symons Valley Py NW.   #yyctraffic #yycroads",
    "time": "3:05 p.m."
  },
  {
    "text": "EB &amp; WB Hwy560 at RR283, S of Chestermere - MVC. Expect flag persons and delays. (11:10pm) #ABRoads #yyctraffic",
    "time": "11:10 p.m."
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
    "text": "ALERT: Traffic incident on  WB Glenmore Tr and Barlow Tr SE, blocking the left lane.   #yyctraffic #yycroads https://t.co/roX0PFvbfq",
    "time": "3:52 p.m."
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
    "text": "ALERT: Traffic incident on  EB Memorial Dr and 44 St NE.   #yyctraffic #yycroads",
    "time": "4:47 p.m."
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
    "text": "ALERT: Traffic incident on Barlow Tr and 61 Ave SE.   #yyctraffic #yycroads",
    "time": "4:47 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  SB 52 St and Maryvale Rd NE, blocking multiple lanes.   #yyctraffic #yycroads",
    "time": "4:45 p.m."
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
    "text": "ALERT: Traffic incident on  EB 17 Ave and 10 St SW.   #yyctraffic #yycroads https://t.co/MP0SVH0Ql8",
    "time": "7:49 a.m."
  },
  {
    "text": "In the NW, NB Crowchild Trail at Bow Trail, slowdowns due to a collision. Backed up to Glenmore Trail. #yyctraffic #yycroads https://t.co/wIAAkzXvY3",
    "time": "8:06 a.m."
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
    "text": "NB Deerfoot Tr approaching Peigan Tr SE, Calgary - MVC affecting the LHL. Expect delays. (9:26am) #ABRoads #yyctraffic",
    "time": "9:26 a.m."
  },
  {
    "text": "ALERT: Traffic incident on WB Stoney Tr approaching Harvest Hills Bv N, blocking the right lane.   #yyctraffic #yycroads https://t.co/cgNM72iPC8",
    "time": "7:59 a.m."
  },
  {
    "text": "ALERT: Traffic incident on NB Deerfoot Tr at Beddington Tr NE, blocking the right lane. With other incidents in the area, expect additional delays. #yyctraffic #yycroads",
    "time": "7:22 a.m."
  },
  {
    "text": "ALERT: Traffic incident on  NB Crowchild Tr and Bow Tr SW, blocking the right lane.   #yyctraffic #yycroads https://t.co/hKO9Ci18XA",
    "time": "9:39 a.m."
  },
  {
    "text": "ALERT: Traffic incident on  NB Crowchild Tr approaching 17 Ave SW, blocking the right lane.   #yyctraffic #yycroads https://t.co/xlXN6KGpGT",
    "time": "8:01 a.m."
  },
  {
    "text": "ALERT: Traffic incident on  WB Memorial Dr and 28 St SE, blocking the right lane.   #yyctraffic #yycroads https://t.co/YDJ1wCkSbg",
    "time": "7:51 a.m."
  },
  {
    "text": "EB Stoney Tr approaching Deerfoot Tr NE - MVC, expect delays in the area. (7:39am) via @yyctransport #yyctraffic #ABRoads",
    "time": "7:40 a.m."
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
    "text": "NB Deerfoot Trail at Peigan Trail, in Calgary - bridge repairs, Nov.5, from 9pm to 5am. Expect RH lane closure and speed reduced to 50km/h. #yyctraffic #ABRoads",
    "time": "7:10 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  36 Ave and 32 Ave NE.   #yyctraffic #yycroads",
    "time": "6:32 p.m."
  },
  {
    "text": "SB Deerfoot Trail approaching Stoney Tr SE, in Calgary - MVC, blocking the RH lane. (6:18pm) via @yyctransport #yyctraffic #ABRoads",
    "time": "6:18 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  16 Ave and 19 St NW.   #yyctraffic #yycroads",
    "time": "6:00 p.m."
  },
  {
    "text": "ALERT: Traffic signals are flashing red on  16 Ave and 14 St NW, crew has been dispatched.   #yyctraffic #yycroads",
    "time": "8:09 p.m."
  },
  {
    "text": "NB Deerfoot Trail at Anderson Rd, in Calgary - bridge repairs, Nov.5, from 9pm to 5am. Expect RH lane closure and speed reduced to 50km/h. #yyctraffic #ABRoads",
    "time": "7:15 p.m."
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
    "text": "ALERT: Single vehicle incident on NB 52 St after 114 Ave SE, blocking the right lane.   #yyctraffic #yycroads https://t.co/dNSo43kqx0",
    "time": "6:10 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  Chaparral Dr and 194 Ave SE.   #yyctraffic #yycroads",
    "time": "5:49 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  SB Deerfoot Tr approaching Stoney Tr SE, blocking the right lanes. Expect delays in the area. #yyctraffic #yycroads https://t.co/8qJEFGolxG",
    "time": "5:35 p.m."
  },
  {
    "text": "ALERT:  Emergency services are helping a pedestrian involved in an incident on 3 St at 7 Ave SE. Bocking the NB right lane. Please go slow and watch for fellow Calgarians   #yyctraffic #yycroads https://t.co/KNsyv8ZVk4",
    "time": "5:33 p.m."
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
    "text": "In the Northeast, a stalled vehicle on NB Deerfoot Trail approaching McKnight Blvd is blocking the left-hand lane, expect delays #yyctraffic https://t.co/7LmaSN9hMd",
    "time": "6:18 p.m."
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
    "text": "ALERT: Traffic incident on  36 St and Radcliffe Dr SE, blocking the NB right lane.   #yyctraffic #yycroads https://t.co/nTZ6FuVLeM",
    "time": "7:09 p.m."
  },
  {
    "text": "SB Deerfoot Trail off RAMP to Peigan Trail, in Calgary - bridge repairs, Nov.5, 9pm-5am. Expect RH lane closure and speed reduced to 50km/h. #ABRoads #yyctraffic",
    "time": "7:05 p.m."
  },
  {
    "text": "ALERT:  Emergency services are helping a pedestrian involved in an incident on 4 Ave at 6 St SW. Blocking the WB left lanes. Please go slow and watch for fellow Calgarians   #yyctraffic #yycroads https://t.co/jFAwCkUa7V",
    "time": "7:35 p.m."
  },
  {
    "text": "NB Deerfoot Trail at Peigan Trail, Calgary, bridge repairs, Nov.4, 9pm-5am. Expect right hand lane closure and speed reduced to 50km/h. (4:40pm) #ABRoads #yyctraffic",
    "time": "4:40 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  68 St and Memorial Dr E.   #yyctraffic #yycroads",
    "time": "1:55 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  Stoney Tr and Country Hills Bv NE, the NB exit ramp is closed. Please use alternate route. #yyctraffic #yycroads https://t.co/KukqoEIILq",
    "time": "5:24 p.m."
  },
  {
    "text": "SB Stoney Tr off-ramp to WB 96 Ave NE, Calgary - ramp CLOSED due to an MVC on 96 Ave. Use alternate route. (11:48am) #ABRoads #yyctraffic",
    "time": "11:48 a.m."
  },
  {
    "text": "ALERT: Two vehicle incident on  Sarcee Tr and 17 Ave SW.   #yyctraffic #yycroads https://t.co/gqjVuUvzIV",
    "time": "5:06 p.m."
  },
  {
    "text": "CLEARED: Traffic incident on 96 Ave and 60 St NE has been cleared. #yyctraffic #yycroads",
    "time": "3:28 p.m."
  },
  {
    "text": "NB Deerfoot Tr at 64 Ave NE, in Calgary - MVC, blocking the left lane. (3:08pm) via @yyctransport #yyctraffic",
    "time": "3:08 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  9 Ave approaching 9 St SW, blocking the left lanes.   #yyctraffic #yycroads https://t.co/wpRzEiEdYq",
    "time": "1:46 p.m."
  },
  {
    "text": "ALERT:  Emergency services have been called to help a pedestrian involved in an incident on Harvest Hills Blvd at Beddington Tr NW. Please go slow and watch for fellow Calgarians.   #yyctraffic #yycroads",
    "time": "10:24 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  Anderson Rd and Elbow Dr SW.   #yyctraffic #yycroads",
    "time": "6:54 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  SB Deerfoot Tr approaching Peigan Tr SE, blocking the right lane. Expect delays in the area. #yyctraffic #yycroads https://t.co/A3NAoCnJuw",
    "time": "4:58 p.m."
  },
  {
    "text": "SB Deerfoot Trail off Ramp to Peigan Trail, Calgary, bridge repairs, Nov.4, 9pm-5am. Expect right lane closure and speed reduced to 50km/h. (4:36pm) #ABRoads #yyctraffic",
    "time": "4:37 p.m."
  },
  {
    "text": "ALERT: Two vehicle incident on  NB Deerfoot Tr at 64 Ave NE, blocking the left lane. Expect delays in the area. #yyctraffic #yycroads https://t.co/4kElfONQbh",
    "time": "3:04 p.m."
  },
  {
    "text": "ALERT: Two vehicle incident on  EB John Laurie Bv approaching Charleswood Dr NW, blocking the right lane.   #yyctraffic #yycroads https://t.co/VEIKYviwo9",
    "time": "1:53 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  57 Ave and 3 St SW.   #yyctraffic #yycroads",
    "time": "11:22 a.m."
  },
  {
    "text": "ALERT: Traffic incident on  Airport Tr and 60 St NE, blocking multiple lanes.   #yyctraffic #yycroads https://t.co/Vhc79NaDHa",
    "time": "11:12 a.m."
  },
  {
    "text": "ALERT: Traffic incident on  NB 10 St and Memorial Dr NW, blocking the right lane.   #yyctraffic #yycroads https://t.co/6oRhSWZM2Z",
    "time": "9:36 a.m."
  },
  {
    "text": "ALERT: Traffic incident on NB Deerfoot Tr at Calf Robe Bridge SE, blocking the left lane.   #yyctraffic #yycroads https://t.co/PxctNEznIM",
    "time": "8:36 p.m."
  },
  {
    "text": "ALERT: Two vehicle incident on James Mckevitt Rd at Stoney Tr SW, blocking the SB right lane.   #yyctraffic #yycroads https://t.co/d8IWbNk70I",
    "time": "7:09 p.m."
  },
  {
    "text": "ALERT: Traffic incident on SB Deerfoot Tr and 11 St SE.   #yyctraffic #yycroads https://t.co/pZA0p42uW8",
    "time": "6:35 p.m."
  },
  {
    "text": "ALERT: Traffic incident on Beddington Blvd and Bedford Dr NE, blocking the SB right lanes.   #yyctraffic #yycroads https://t.co/cnnTx5jyEb",
    "time": "5:26 p.m."
  },
  {
    "text": "ALERT: Multi-vehicle incident on  NB Deerfoot Tr and Calf Robe Bridge SE, blocking multiple lanes.   #yyctraffic #yycroads https://t.co/UGfV9sSfci",
    "time": "9:56 a.m."
  },
  {
    "text": "ALERT: Traffic incident on Centre St and Mcknight Bv NE, blocking multiple lanes.   #yyctraffic #yycroads https://t.co/j6dyIb7uQ5",
    "time": "9:05 p.m."
  },
  {
    "text": "ALERT: Single vehicle incident on  NB Deerfoot Tr and Peigan Tr SE, blocking the left lane.   #yyctraffic #yycroads https://t.co/ijkTiVFkZ4",
    "time": "1:24 p.m."
  },
  {
    "text": "NB Deerfoot Tr at Calf Robe Bridge SE - MVC blocking the LH lane. Expect delays. (8:38pm) #ABRoads #yyctraffic",
    "time": "8:38 p.m."
  },
  {
    "text": "ALERT: Traffic incident on Metis Tr and 80 Ave NE.   #yyctraffic #yycroads",
    "time": "3:17 p.m."
  },
  {
    "text": "In the Southwest, watch out for a crash on EB Glenmore Trail approaching 14th Street, blocking the right-hand lane #yyctraffic https://t.co/6gIQUJQ6mW",
    "time": "2:13 p.m."
  },
  {
    "text": "ALERT: Two vehicle incident on EB Glenmore Tr approaching 14 St SW, blocking the right lane.   #yyctraffic #yycroads https://t.co/2oL7SxLHsc",
    "time": "2:11 p.m."
  },
  {
    "text": "ALERT: Traffic incident on Woodview Dr and Woodpark Blvd SW.   #yyctraffic #yycroads",
    "time": "1:46 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  16 Ave and Centre St N, blocking multiple lanes.   #yyctraffic #yycroads https://t.co/FwWccdYplB",
    "time": "1:32 p.m."
  },
  {
    "text": "NB Deerfoot Tr after Peigan Tr SE, Calgary - vehicle with a flat tire in the LHL. Drive with caution in the area and keep right. (1:13pm) #ABRoads #yyctraffic",
    "time": "1:14 p.m."
  },
  {
    "text": "In the Southeast, watch out for a vehicle with a blown tire on NB Deerfoot Trail just past Peigan Trail, blocking the left-hand lane #yyctraffic https://t.co/5JGP2doo0o",
    "time": "1:10 p.m."
  },
  {
    "text": "NB/SB Deerfoot Tr at Peigan Tr, SB Deerfoot Tr ramp to Peigan Tr - bridge repair work, Nov3-4, 9pm to 5am. Expect lane closures and a speed reduction to 50km/h. Drive with caution and watch for crews. #ABRoads #yyctraffic",
    "time": "7:00 p.m."
  },
  {
    "text": "ALERT:  Emergency services have been called to help a pedestrian involved in an incident on Zoo Rd and Memorial Dr NE. Blocking multiple lanes. Please go slow and watch for fellow Calgarians.   #yyctraffic #yycroads https://t.co/EEicVQ6sG5",
    "time": "5:13 p.m."
  },
  {
    "text": "ALERT:  Emergency services have been called to help a pedestrian involved in an incident on Prestwick Ga and 52 St SE. Blocking the SB left lane. Please go slow and watch for fellow Calgarians   #yyctraffic #yycroads https://t.co/rMKwiOA1jp",
    "time": "4:27 p.m."
  },
  {
    "text": "NB Deerfoot Tr at the Calf Robe Bridge SE, Calgary - MVC. Expect delays. (9:58am) #ABRoads #yyctraffic",
    "time": "9:58 a.m."
  },
  {
    "text": "ALERT: Traffic incident on 17 Ave and 48 St SE, blocking the EB left lane.   #yyctraffic #yycroads https://t.co/Eu9mdxoVqi",
    "time": "8:20 p.m."
  },
  {
    "text": "ALERT: Multi-vehicle incident on  5 St and Glenmore Tr SW, blocking multiple lanes.   #yyctraffic #yycroads https://t.co/puF8TtRlu4",
    "time": "8:18 p.m."
  },
  {
    "text": "ALERT: Traffic incident on 2 St and 6 Ave SW, blocking the WB lanes.   #yyctraffic #yycroads https://t.co/Fh8yCvUEb8",
    "time": "6:59 p.m."
  },
  {
    "text": "ALERT: Two vehicle incident on SB Metis Tr after Country Hills Bv NE, blocking the left lane.   #yyctraffic #yycroads https://t.co/Y9uU00eWam",
    "time": "6:28 p.m."
  },
  {
    "text": "NB Deerfoot Tr north of 16Ave NE MVC. Drive with caution and expect delays. (10:30pm) #ABRoads #yyctraffic",
    "time": "10:31 p.m."
  },
  {
    "text": "ALERT: Traffic incident on Stoney Tr and Chaparral Bv SE, blocking the WB to NB left lane.   #yyctraffic #yycroads https://t.co/4XuhihjDay",
    "time": "8:28 p.m."
  },
  {
    "text": "Due to this collision, all lanes of northbound Deerfoot Trail are closed at 212 Ave SE. They will reopen once the vehicles have been safely removed. #yyctraffic",
    "time": "6:59 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  Mahogany Ga east of 52 St SE.   #yyctraffic #yycroads",
    "time": "3:22 p.m."
  },
  {
    "text": "ALERT:  Emergency services are helping a pedestrian involved in an incident on Mcleod Tr at 17 Ave SE. Blocking multiple lanes. Please go slow and watch for fellow Calgarians   #yyctraffic #yycroads https://t.co/AMmYDhRsL9",
    "time": "7:40 p.m."
  },
  {
    "text": "ALERT: Traffic incident on Deerfoot Tr and 212 Ave SE.   #yyctraffic #yycroads",
    "time": "5:34 p.m."
  },
  {
    "text": "ALERT: Traffic incident on 17 Ave and 84 St SE.   #yyctraffic #yycroads",
    "time": "5:02 p.m."
  },
  {
    "text": "ALERT: Traffic incident on Santana Rd at Berkshire Bv NW.   #yyctraffic #yycroads",
    "time": "4:41 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  NB Deerfoot Tr after 16 Ave NE, blocking the right lane.   #yyctraffic #yycroads https://t.co/4ynTcSXwlE",
    "time": "10:21 p.m."
  },
  {
    "text": "ALERT: Traffic incident on Deerfoot Tr and Mckenzie Lake Bv SE.   #yyctraffic #yycroads",
    "time": "8:12 p.m."
  },
  {
    "text": "ALERT: Traffic incident on SB Deerfoot Tr and McKnight Blvd NE, blocking the right lane and the left lane of ramp.   #yyctraffic #yycroads https://t.co/braukYeSs5",
    "time": "6:47 p.m."
  },
  {
    "text": "NB Deerfoot Tr approaching 212 Ave SE, MVC. Expect delays. (5:37pm) #ABRoads #yyctraffic",
    "time": "5:37 p.m."
  },
  {
    "text": "In the Southwest, watch out for a crash on EB Glenmore Trail approaching 14th Street, blocking the right-hand lane #yyctraffic https://t.co/1iseDccpwX",
    "time": "3:40 p.m."
  },
  {
    "text": "ALERT: Multi-vehicle incident on EB Glenmore Tr approaching 14 St SW, blocking the right lane.   #yyctraffic #yycroads https://t.co/uEsOTUyORr",
    "time": "3:38 p.m."
  },
  {
    "text": "A new sign at the Peace Bridge today indicating that the Bow River pathway is closed along Memorial Drive, in the red part. No mention of why or for how long but guessing it'll be for a couple weeks at least? Probably some landscaping/repairs or similar. \n\n#yyc #yyctraffic https://t.co/jUZFQJkluE",
    "time": "8:11 p.m."
  },
  {
    "text": "EB/WB 16Ave NE, east of Stoney Tr, guard rail repairs Nov1-2, from 10pm to 6am. LH lanes closed and speed reduced to 50 km/h. Drive with caution and watch for crews. #ABRoads #yyctraffic",
    "time": "7:00 p.m."
  },
  {
    "text": "There's a multi-vehicle collision blocking the NB Macleod Trail lanes at 99 Ave SE. Detour is in place, expect delays #yyctraffic #660roads https://t.co/8rBH0I8Gtr",
    "time": "4:49 p.m."
  },
  {
    "text": "SB Deerfoot Tr at Southland Dr SE, MVC blocking the RH lane. Drive with caution and expect delays. (4:11pm) #ABRoads #yyctraffic",
    "time": "4:11 p.m."
  },
  {
    "text": "ALERT: Traffic incident on Bow Tr east of Sarcee Tr SW, blocking multiple lanes.  #yyctraffic #yycroads https://t.co/NktPcD4nNo",
    "time": "10:59 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  NB Macleod Tr at 90 Ave SE, blocking the right lane.   #yyctraffic #yycroads https://t.co/izFZAQjfWQ",
    "time": "7:27 p.m."
  },
  {
    "text": "ALERT: Traffic incident on 40 Ave and 4 St NW.   #yyctraffic #yycroads",
    "time": "7:02 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  68 St north of McKnight Bv NE.   #yyctraffic #yycroads",
    "time": "5:14 p.m."
  },
  {
    "text": "ALERT: Two vehicle incident on EB Glenmore Tr approaching 14 St SW, blocking the left lane.   #yyctraffic #yycroads https://t.co/ZUmQLYR6yg",
    "time": "5:00 p.m."
  },
  {
    "text": "ALERT: Multi-vehicle incident on NB Macleod Tr and 99 Ave SE, NB is closed.   #yyctraffic #yycroads https://t.co/JlRn0dSlWs",
    "time": "4:37 p.m."
  },
  {
    "text": "ALERT: Multi-vehicle incident on SB Deerfoot Tr and Southland Dr SE, blocking the right lane.   #yyctraffic #yycroads https://t.co/M0jF5GBu8G",
    "time": "4:09 p.m."
  },
  {
    "text": "ALERT: Traffic incident on 17 Ave SE and 1 St SE, EB and WB closed. Please use alternate route. #yyctraffic #yycroads https://t.co/EkoV0vb4T5",
    "time": "9:06 p.m."
  },
  {
    "text": "ALERT: Stalled vehicle on  NB Deerfoot Tr approaching McKnight Bv NE, blocking the left lane.   #yyctraffic #yycroads https://t.co/VGrfVeNLcd",
    "time": "8:08 p.m."
  },
  {
    "text": "ALERT: Traffic incident on SB 52 St approaching 16 Ave NE, blocking the left lane.   #yyctraffic #yycroads https://t.co/GBQs1xryv9",
    "time": "7:29 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  Bannister Rd and Midlake Bv SE.   #yyctraffic #yycroads",
    "time": "5:36 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  Heritage Dr and Fairmount Dr SE.   #yyctraffic #yycroads",
    "time": "4:04 p.m."
  },
  {
    "text": "ALERT: Traffic incident on SB Stoney Tr after 90 Ave SW.   #yyctraffic #yycroads",
    "time": "6:46 p.m."
  },
  {
    "text": "The LHL is blocked on EB Glenmore approaching 14 St SW #yyctraffic #660roads https://t.co/zeDipKXsKF",
    "time": "5:11 p.m."
  },
  {
    "text": "ALERT: Two vehicle incident on  64 Ave and Deerfoot Tr NE, partially blocking the WB to NB exit .   #yyctraffic #yycroads https://t.co/qByD00iXkL",
    "time": "4:35 p.m."
  },
  {
    "text": "ALERT: Traffic incident on Northmount Dr and 19 St NW. Expect delays in the area. #yyctraffic #yycroads",
    "time": "10:16 a.m."
  },
  {
    "text": "ALERT: Two vehicle incident on  NB Crowchild Tr and Bow Tr SW, blocking the merge lane.   #yyctraffic #yycroads https://t.co/JPzg4oreFp",
    "time": "10:16 a.m."
  },
  {
    "text": "ALERT: Traffic incident on WB Memorial Dr at Deerfoot Tr SE, blocking multiple lanes.   #yyctraffic #yycroads https://t.co/TpvstJWQgz",
    "time": "10:11 a.m."
  },
  {
    "text": "NB Deerfoot Tr at Beddington Tr NW, Calgary - MVC affecting the right hand lane. Expect delays. (10:57am) #ABRoads #yyctraffic",
    "time": "10:58 a.m."
  },
  {
    "text": "ALERT: Multi-vehicle incident on  NB Deerfoot Tr and Beddington Tr NE, blocking the right lane.   #yyctraffic #yycroads https://t.co/01oi3j0ojM",
    "time": "10:53 a.m."
  },
  {
    "text": "ALERT: Traffic incident on  NB Crowchild Tr and Bow Tr NW, blocking the right lane.   #yyctraffic #yycroads https://t.co/NrcCX66UTG",
    "time": "7:48 a.m."
  },
  {
    "text": "ALERT: Traffic incident on EB Stoney Tr after Harvest Hills Bv N, blocking the left lane. Please drive with caution. #yyctraffic #yycroads https://t.co/Ojrme4WqER",
    "time": "11:01 a.m."
  },
  {
    "text": "In the Northeast, a vehicle has hit the median on NB Deerfoot Trail at Airport Trail, blocking the left-hand lane #yyctraffic https://t.co/HZaGILiAsn",
    "time": "12:40 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  11 St and Heritage Meadows Wy SE.   #yyctraffic #yycroads",
    "time": "12:28 p.m."
  },
  {
    "text": "In the NE, NB Deerfoot Trail just past 64th Avenue, there's emergency vehicles in the right lane. Lots of back-ups. #yyctraffic #yycroads https://t.co/0AXcVNLAw0",
    "time": "11:14 a.m."
  },
  {
    "text": "ALERT: Traffic incident on  16 Ave and Stoney Tr NE.   #yyctraffic #yycroads",
    "time": "12:55 p.m."
  },
  {
    "text": "NB Deerfoot Tr approaching Country Hills Blvd NE, Calgary - MVC blocking the left lane. Expect delays. (12:50pm) via @yyctransport #ABRoads #yyctraffic",
    "time": "12:50 p.m."
  },
  {
    "text": "ALERT: Traffic incident on NB Deerfoot Tr north of Airport Tr NE, blocking the left lane. Expect delays in the area. #yyctraffic #yycroads https://t.co/MmjjOQvCR1",
    "time": "12:44 p.m."
  },
  {
    "text": "In the Northwest, watch out for a crash on Shaganappi Trail at Country Hills Blvd, blocking the middle of the intersection #yyctraffic https://t.co/ErGbC9d8Y0",
    "time": "1:10 p.m."
  },
  {
    "text": "ALERT: Two vehicle incident on SB Shaganappi Tr at Country Hills Bv NW, blocking multiple lanes in the intersection. Please drive with caution. #yyctraffic #yycroads https://t.co/tY64GilSQe",
    "time": "1:07 p.m."
  },
  {
    "text": "In the Southeast, watch out for a crash involving a semi on NB Stoney Trail at 17th Avenue, blocking the right-hand lane #yyctraffic https://t.co/AUSmjD3wzf",
    "time": "2:34 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  NB Stoney Tr and 17 Ave SE.   #yyctraffic #yycroads https://t.co/iOZi4zKzmF",
    "time": "2:23 p.m."
  },
  {
    "text": "In the Northwest, watch out for a crash on NB Stoney Trail at Crowchild Trail, blocking the left-hand lane #yyctraffic https://t.co/SSxlAYckba",
    "time": "1:57 p.m."
  },
  {
    "text": "NB Stoney Trail and Crowchild Tr NW, in Calgary - MVC, expect delays. (1:56pm) via @yyctransport  #yyctraffic #ABRoads",
    "time": "1:56 p.m."
  },
  {
    "text": "NB Stoney Trail at 17th Ave, in Calgary - MVC, blocking the RH lane. (2:36pm) via @NewsRadioCGY #yyctraffic #ABRoads",
    "time": "2:37 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  128 Ave and Metis Tr NE.   #yyctraffic #yycroads",
    "time": "3:44 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  NB Stoney Tr and Crowchild Tr NW.   #yyctraffic #yycroads https://t.co/1zu6Nc6MtV",
    "time": "1:52 p.m."
  },
  {
    "text": "In the Southeast, watch out for a crash on EB Glenmore Trail at the Graves Bridge east of Deerfoot Trail, blocking the left-hand and right-hand lanes #yyctraffic https://t.co/yv2j9Nso9g",
    "time": "4:09 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  EB Glenmore Tr and 18 St SE, blocking the right lane.   #yyctraffic #yycroads https://t.co/23OPQpPlFC",
    "time": "4:05 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  SB 36 St and 4 Ave NE.   #yyctraffic #yycroads https://t.co/nNsHQnLBDV",
    "time": "5:48 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  EB Glenmore Tr and Barlow Tr SE, blocking multiple lanes.   #yyctraffic #yycroads https://t.co/QebhOj5gPU",
    "time": "6:03 p.m."
  },
  {
    "text": "In the Southeast, crash on EB Heritage Drive over top of Deerfoot Trail, blocking the left-hand lane #yyctraffic https://t.co/OjquWXYtpz",
    "time": "5:27 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  Heritage Dr East of 11 St SE.   #yyctraffic #yycroads https://t.co/HC5cn8c4CF",
    "time": "5:26 p.m."
  },
  {
    "text": "NB Stoney Tr after 69 St SW, Calgary - disabled vehicle blocking the RHL. Drive with caution in the area. (5:22pm) #ABRoads #yyctraffic",
    "time": "5:22 p.m."
  },
  {
    "text": "In the Southwest, watch out for a vehicle with a blown tire on NB Stoney Trail around the Hwy 8 interchange, blocking the right-hand lane #yyctraffic https://t.co/Y2DTHK6Jmq",
    "time": "5:18 p.m."
  },
  {
    "text": "NB Deerfoot Tr, north and south of Country Hills Blvd NE - 2 MVCs causing delays in the area. (2:18pm) #ABRoads #yyctraffic",
    "time": "2:18 p.m."
  },
  {
    "text": "In the Northeast, watch out for a crash on SB 36th Street at 4th Avenue, blocking the right-hand lane #yyctraffic https://t.co/Qej8UccmhP",
    "time": "5:50 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  Tuscany Bv and Scenic Acres Li NW.   #yyctraffic #yycroads",
    "time": "8:38 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  NB 52 St and Temple Dr NE.   #yyctraffic #yycroads https://t.co/bCwAhXQcXB",
    "time": "7:50 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  Mcknight Bv and 4 St NW.   #yyctraffic #yycroads",
    "time": "8:39 p.m."
  },
  {
    "text": "ALERT:  Emergency services are helping a pedestrian involved in an incident on 17 Ave and 5a St SW. all lanes are currently blocked. Please go slow and watch for fellow Calgarians   #yyctraffic #yycroads https://t.co/oIA6XdfaZ6",
    "time": "8:37 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  SB 14 St and 24 Ave NW, blocking the right lane.   #yyctraffic #yycroads https://t.co/jxSO4CAq4O",
    "time": "6:45 p.m."
  },
  {
    "text": "In the Southeast, crash on WB Glenmore Trail at Blackfoot Trail, blocking the right-hand lane #yyctraffic https://t.co/k6Sscl3H3p",
    "time": "5:21 p.m."
  },
  {
    "text": "In the Northwest, watch out for a crash on 64th Avenue at 14th Street, blocking the EB RHL and the turn lane from NB 14th #yyctraffic https://t.co/QVhxVaTJV0",
    "time": "12:38 p.m."
  },
  {
    "text": "NB Deerfoot Tr near 17 Ave SE, Calgary - MVC blocking the RHL. Drive with caution in the area. (10:16pm) #ABRoads #yyctraffic",
    "time": "10:16 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  5 St and Glenmore Tr SW, blocking the WB right exit lane.   #yyctraffic #yycroads https://t.co/P7y0tdb2BI",
    "time": "10:09 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  14 St approaching Berkley Gate NW.   #yyctraffic #yycroads",
    "time": "7:42 a.m."
  },
  {
    "text": "Good Morning! It's cold out there! The roads look to be in good shape. Some slippery sections and fog in the area. Here's a look at Deerfoot Trail SB at 64th Avenue. Drive to the conditions. #yyctraffic #yycroads https://t.co/HV5D5oD6T6",
    "time": "7:41 a.m."
  },
  {
    "text": "ALERT: Traffic incident on  NB Stoney Tr north of Crowchild Tr NW, blocking the left lane.   #yyctraffic #yycroads https://t.co/POYWQyjwDB",
    "time": "4:43 a.m."
  },
  {
    "text": "ALERT: Traffic incident on EB McKnight Bv b/w 52 St and 68 St NE, blocking the right lane.   #yyctraffic #yycroads https://t.co/ILgAY8mBJa",
    "time": "4:18 a.m."
  },
  {
    "text": "ALERT: Traffic incident on  Southland Dr and 5 St SE.   #yyctraffic #yycroads",
    "time": "12:59 a.m."
  },
  {
    "text": "ALERT: Two vehicle incident on  WB Glenmore Tr and Blackfoot Tr SE, blocking the right shoulder.   #yyctraffic #yycroads https://t.co/ZbZiKaa9Mp",
    "time": "5:17 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  WB 16 Ave and 2 St NW, lane closures b/w 2 St and 4 St NW.   #yyctraffic #yycroads",
    "time": "3:52 p.m."
  },
  {
    "text": "ALERT: Two vehicle incident on  64 Ave and 14 St NW.   #yyctraffic #yycroads https://t.co/UZl3tmkZN4",
    "time": "12:20 p.m."
  },
  {
    "text": "In the Southwest, the LRT arms are malfunctioning on 162nd Avenue at Shawville Way, avoid the area if possible #yyctraffic https://t.co/zckoWSpRNH",
    "time": "12:00 p.m."
  },
  {
    "text": "ALERT: Traffic signals issue on  Shawville Way and 162 Ave SW. Avoid the area if possible. #yyctraffic #yycroads https://t.co/9wdj1QQ9SA",
    "time": "11:48 a.m."
  },
  {
    "text": "ALERT: Traffic incident on  64 Ave and Metis Tr NE.   #yyctraffic #yycroads",
    "time": "11:17 p.m."
  },
  {
    "text": "ALERT: Single vehicle incident on NB Deerfoot Tr at 17 Ave SE, blocking the right lane. Expect delays in the area. #yyctraffic #yycroads https://t.co/IRP2DNB1sW",
    "time": "10:12 p.m."
  },
  {
    "text": "ALERT: Traffic signals issue on  36 St and 12 Ave NE. Avoid the area if possible. #yyctraffic #yycroads https://t.co/7XczamHJWC",
    "time": "12:14 p.m."
  },
  {
    "text": "ALERT: Traffic incident on Centre St and 12 Ave NW, blocking the SB right lane.   #yyctraffic #yycroads https://t.co/Tw7YEVVXz4",
    "time": "10:07 p.m."
  },
  {
    "text": "ALERT:  Emergency services are helping a pedestrian involved in an incident on EB McKnight Bv and Centre St N. Blocking the WB lanes. Please go slow and watch for fellow Calgarians   #yyctraffic #yycroads https://t.co/P9gxR1ps5d",
    "time": "8:08 p.m."
  },
  {
    "text": "EB Stoney Tr near Sarcee Tr SW, Calgary - MVC. Expect delays in the area. (7:09pm) #ABRoads #yyctraffic",
    "time": "7:09 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  EB Stoney Tr and Sarcee Tr SW.   #yyctraffic #yycroads",
    "time": "7:02 p.m."
  },
  {
    "text": "ALERT: Two vehicle incident on EB 16 Ave at Deerfoot Tr NE, blocking the left lane.   #yyctraffic #yycroads https://t.co/KMncIJ7xcv",
    "time": "10:50 p.m."
  },
  {
    "text": "EB Stoney Tr on-ramp to NB Deerfoot Tr SE, Calgary - bridge deck snow removal, Nov.30, in progress. Expect a RHL closure and speed reduced to 80km/h. (9:50pm) #ABRoads #yyctraffic",
    "time": "9:50 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  NB Crowchild Tr and 33 Ave SW.   #yyctraffic #yycroads https://t.co/kIHIOn2y5Q",
    "time": "7:30 p.m."
  },
  {
    "text": "NB Deerfoot Tr at the Calf Robe Bridge SE, Calgary - bridge repairs, Dec.1 at 9pm until Dec.2 at 5am. Expect a double LHL closure and speed reduced to 50km/h. #ABRoads #yyctraffic",
    "time": "7:00 p.m."
  },
  {
    "text": "WB Stoney Trail approaching Spruce Meadows Way SW, Calgary - MVC, blocking the LH lane. (3:54pm) via @yyctransport #yyctraffic #ABRoads",
    "time": "3:54 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  WB Stoney Tr approaching Spruce Meadows Wy SW, blocking the left lane. Please drive with caution. #yyctraffic #yycroads https://t.co/qh3H658FmX",
    "time": "3:52 p.m."
  },
  {
    "text": "In the Southeast, watch out for a crash on EB Glenmore Trail at 14th Street, blocking the right-hand lane #yyctraffic https://t.co/gmzDlDiFQs",
    "time": "3:33 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  37 St and 30 Ave SW.   #yyctraffic #yycroads",
    "time": "12:46 p.m."
  },
  {
    "text": "In the NE, there's collision at 16th Avenue and Deerfoot Trail, blocking SB and EB lanes. #yyctraffic #yycroads https://t.co/5v59jdp6Xa",
    "time": "8:25 a.m."
  },
  {
    "text": "ALERT: Traffic incident on  SB 36 St and 32 Ave NE, blocking multiple lanes.   #yyctraffic #yycroads https://t.co/rO0RJkeZHV",
    "time": "7:06 a.m."
  },
  {
    "text": "ALERT: Traffic incident on  Charleswood Dr and Charleswood Dr NW, blocking the right lane.   #yyctraffic #yycroads https://t.co/gWqWNU5Osm",
    "time": "8:19 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  88 Ave and 46 St NE.   #yyctraffic #yycroads",
    "time": "5:00 p.m."
  },
  {
    "text": "In the Southeast, watch out for a crash on EB Glenmore Trail at Deerfoot Trail, blocking the right-hand lane #yyctraffic https://t.co/pW0KqNJQm2",
    "time": "4:25 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  East Hills Bv and 84 St SE.   #yyctraffic #yycroads",
    "time": "11:24 a.m."
  },
  {
    "text": "In the NE, SB 32nd Street at 36nd Avenue, emergency vehicles are in the right turn lane. #yyctraffic #yycroads https://t.co/m4hBO0keyP",
    "time": "7:27 a.m."
  },
  {
    "text": "ALERT: Traffic incident on  EB Country Hills Bv and Cityscape Ga NE, blocking the right lane.   #yyctraffic #yycroads https://t.co/YG5hNk3Siy",
    "time": "8:55 p.m."
  },
  {
    "text": "WB Stoney Tr to Sarcee Tr NW, Calgary - guardrail repairs, Dec.1 at 10pm until Dec.2 at 6am. Expect a LHL closure and speed reduced to 50km/h. #ABRoads #yyctraffic",
    "time": "7:10 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  Deerfoot Tr and 212 Ave SE.   #yyctraffic #yycroads",
    "time": "6:47 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  Edmonton Tr and 35 Ave NE.   #yyctraffic #yycroads",
    "time": "5:55 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  EB Glenmore Tr at NB Deerfoot Ramp SE, blocking the right lane. Avoid the area if possible. #yyctraffic #yycroads https://t.co/i11UoqYlIn",
    "time": "4:24 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  16 Ave and Deerfoot Tr, blocking multiple lanes.   #yyctraffic #yycroads https://t.co/Qf0qrg2CON",
    "time": "8:20 a.m."
  },
  {
    "text": "ALERT: Traffic incident on  EB Glenmore Tr and 14 St SW, blocking the right lane.   #yyctraffic #yycroads https://t.co/TumhGHTXFC",
    "time": "3:30 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  Heritage Ga and Heritage Dr SE.   #yyctraffic #yycroads",
    "time": "2:04 p.m."
  },
  {
    "text": "As you probably know, EB Stoney TR SE is closed at Deerfoot TR SE. All traffic is being diverted into Deerfoot. I expect this closure to remain in effect for most of the morning as crews work to safely right the flipped truck, &amp; clean up the scene. #yyctraffic https://t.co/U1gPMg5FeB",
    "time": "7:51 a.m."
  },
  {
    "text": "ALERT: Traffic incident on  EB 90 Ave and 19 St SW, blocking the left lane.   #yyctraffic #yycroads https://t.co/iPQvvzKhjT",
    "time": "10:52 a.m."
  },
  {
    "text": "ALERT: Traffic incident on  NB 14 St and Heritage Dr SW.   #yyctraffic #yycroads https://t.co/yiwPBzKJ0v",
    "time": "6:12 a.m."
  },
  {
    "text": "ALERT: Traffic signals are flashing red on  Ogden Rd and Glenmore Tr SE.   #yyctraffic #yycroads",
    "time": "7:01 a.m."
  },
  {
    "text": "ALERT: Traffic incident on  144 Ave and Evanston Hl NW.   #yyctraffic #yycroads",
    "time": "12:40 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  Southport Rd and Southland Dr SW.   #yyctraffic #yycroads https://t.co/ptLS0qSFu9",
    "time": "9:33 a.m."
  },
  {
    "text": "ALERT: Traffic incident on  8 Ave and 14 St NW.   #yyctraffic #yycroads",
    "time": "8:30 a.m."
  },
  {
    "text": "EB Stoney Tr approaching Deerfoot Tr SE, Calgary - MVC blocking multiple lanes. Drive with caution in the area. (5:18am) #ABRoads #yyctraffic",
    "time": "5:18 a.m."
  },
  {
    "text": "ALERT: Traffic incident on Shaganappi Tr and John Laurie Blvd NW, bocking the NB right lanes.   #yyctraffic #yycroads https://t.co/GjOoyzXWzI",
    "time": "10:53 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  14 St and 8 Ave NW.   #yyctraffic #yycroads",
    "time": "2:35 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  45 St and Bow Tr SW.   #yyctraffic #yycroads",
    "time": "4:22 p.m."
  },
  {
    "text": "ALERT:  on  6 Ave and 8 St SW, the Rd closure WB due to emergency incident in the area. Please use alternate route. #yyctraffic #yycroads https://t.co/SzHsPZKFCy",
    "time": "1:40 p.m."
  },
  {
    "text": "NB Deerfoot Tr on the Calf Robe Bridge, Calgary, disabled vehicle. Drive with caution. Crews responding.\n10:30am) #ABRoads #yyctraffic",
    "time": "10:30 a.m."
  },
  {
    "text": "ALERT: Traffic incident on  32 Ave and Rundleside Dr NE.   #yyctraffic #yycroads https://t.co/uMIjWx3hgD",
    "time": "8:05 p.m."
  },
  {
    "text": "In the Southwest, watch out for a crash on WB Bow Trail at Pumphouse Road, blocking the left-hand lane #yyctraffic https://t.co/qs0ON3PO7s",
    "time": "6:00 p.m."
  },
  {
    "text": "NB Stoney Tr at 17 Ave SE, Calgary - cable barrier repairs in progress, Dec.2 for approx. 2 hours. Left lane closure in effect with speed reduced to 80km/h. #ABRoads #yyctraffic",
    "time": "10:57 p.m."
  },
  {
    "text": "In the Northeast, watch out for a crash on SB 36th Street just past Airport Trail, blocking the right-hand lane #yyctraffic https://t.co/TCsdiljeMo",
    "time": "10:23 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  WB Stoney Tr west of 52 St SE, blocking the right lane.   #yyctraffic #yycroads https://t.co/37IIC1nB3Z",
    "time": "6:52 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  Shawville Bv north of Shawnessy Bv SW.   #yyctraffic #yycroads https://t.co/VWVnYG1Svf",
    "time": "6:05 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  NB Stoney Tr north of 114 Ave SE.   #yyctraffic #yycroads https://t.co/6eDMX2zhLw",
    "time": "7:29 p.m."
  },
  {
    "text": "In the Southeast, crews dealing with a crash on WB Stoney Trail just west of 52nd Street, blocking the right-hand lanes #yyctraffic https://t.co/qpA6EjcyWf",
    "time": "6:59 p.m."
  },
  {
    "text": "In the Northeast, watch out for a stalled vehicle on SB 36th Street at Memorial Drive, blocking the right-hand lane of the turn lane to EB Memorial #yyctraffic https://t.co/WA1qiAWq5k",
    "time": "6:25 p.m."
  },
  {
    "text": "NB &amp; SB Deerfoot Tr at Peigan Tr SE, Calgary - barrier repairs, Dec.2 at 9pm until Dec.3 at 5am. Expect a double LHL closure and speed reduced to 50km/h. #ABRoads #yyctraffic",
    "time": "6:05 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  WB 32 Ave at 26 St NE, blocking the right lane.   #yyctraffic #yycroads https://t.co/5JjuYMD6Zt",
    "time": "5:39 p.m."
  },
  {
    "text": "ALERT: Traffic incident on 36 St and Airport Tr NE, blocking the SB right lane.   #yyctraffic #yycroads https://t.co/P9Fz8tc1Xz",
    "time": "10:12 p.m."
  },
  {
    "text": "In the Southeast, watch out for a crash on NB Stoney Trail just north of 114th Avenue, emergency crews on scene #yyctraffic https://t.co/U9PPLBvNIj",
    "time": "7:39 p.m."
  },
  {
    "text": "WB Stoney Trail just west of 52 St SE, in Calgary - traffic incident, blocking the RH lane. (6:54pm) via @yyctransport #yyctraffic #ABRoads",
    "time": "6:55 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  WB Bow Tr and Pumphouse Rd SW, blocking the left lane.   #yyctraffic #yycroads https://t.co/lw6iatUcyQ",
    "time": "5:51 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  EB 16 Ave and 4 St NW.   #yyctraffic #yycroads https://t.co/nN5qrZ2DS5",
    "time": "6:54 a.m."
  },
  {
    "text": "ALERT: Traffic incident on  Peigan Tr and Barlow Tr SE.   #yyctraffic #yycroads https://t.co/MXvqRvmdGl",
    "time": "1:25 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  17 Ave and Stoney Tr NE.   #yyctraffic #yycroads",
    "time": "12:34 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  EB Memorial Dr after Centre St NE.   #yyctraffic #yycroads https://t.co/oBKaJRBzTe",
    "time": "10:21 a.m."
  },
  {
    "text": "SB Deerfoot Tr and 64 Ave NE. Calgary, MVC -  Drive with caution and expect delays. (7:10am) #ABRoads #yyctraffic",
    "time": "7:10 a.m."
  },
  {
    "text": "ALERT: Traffic incident on  SB Deerfoot Tr and 64 Ave NE.   #yyctraffic #yycroads https://t.co/oHiR6wrPj1",
    "time": "7:03 a.m."
  },
  {
    "text": "ALERT: Traffic incident on  SB 36 St and 104 Ave NE, blocking the right lane.   #yyctraffic #yycroads https://t.co/Hi0yQwUn9U",
    "time": "9:37 a.m."
  },
  {
    "text": "ALERT: Traffic incident on Premier Wy and 8 St SW.   #yyctraffic #yycroads",
    "time": "8:34 a.m."
  },
  {
    "text": "ALERT: Traffic incident on SB Deerfoot Tr at Glenmore Tr SE, blocking the right lane. Expect delays in the area. #yyctraffic #yycroads https://t.co/yo5BG0OPyd",
    "time": "7:48 a.m."
  },
  {
    "text": "East of the city, there's a crash on Glenmore Trail at Range Rd 284. Traffic is taking turns getting through EB and WB, expect delays #yyctraffic https://t.co/xfnNLRp4XT",
    "time": "6:50 p.m."
  },
  {
    "text": "NB Deerfoot Tr at 212 Ave SE, in Calgary - traffic incident, expect delays in the area. (6:03am) via @yyctransport #yyctraffic",
    "time": "6:03 a.m."
  }
];