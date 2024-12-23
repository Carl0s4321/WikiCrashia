const tweets = [
  {
    "text": "ALERT: Traffic incident on  Country Hills Bv and Coventry Hills Bv NE.   #yyctraffic #yycroads",
    "time": "8:13 p.m."
  },
  {
    "text": "In the Northwest, watch out for a crash on SB Stoney Trail at the bridge over the Bow River approaching 16th Avenue, blocking the left-hand lane #yyctraffic https://t.co/drdKXGSUf2",
    "time": "7:39 p.m."
  },
  {
    "text": "In the Northeast, watch out for a stalled semi on SB Deerfoot Trail at Memorial Drive, blocking the right-hand lane #yyctraffic https://t.co/PleaucPWTY",
    "time": "6:19 p.m."
  },
  {
    "text": "ALERT: Two vehicle incident on 50 Ave and 23 St SE, blocking multiple lanes.  #yyctraffic #yycroads https://t.co/cooBFj5fQG",
    "time": "8:19 a.m."
  },
  {
    "text": "ALERT: Traffic incident on  Deerfoot Tr and 212 Ave SE.   #yyctraffic #yycroads",
    "time": "5:30 a.m."
  },
  {
    "text": "In the Northeast, watch out for a crash on NB Stoney Trail at Airport Trail, blocking the left-hand lane #yyctraffic https://t.co/wG0niKxdf0",
    "time": "10:06 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  NB Stoney Tr at 96 Ave NE, blocking the left lane.   #yyctraffic #yycroads https://t.co/SIkJGuUfc3",
    "time": "10:05 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  EB 16 Ave east of Deerfoot Tr NE, blocking the left lane.   #yyctraffic #yycroads https://t.co/p8KpchuoHt",
    "time": "8:08 p.m."
  },
  {
    "text": "SB Deerfoot Tr at Glenmore Tr SE, Calgary - MVC blocking the right lane. Expect delays. (7:50am) #ABRoads #yyctraffic",
    "time": "7:50 a.m."
  },
  {
    "text": "ALERT: Traffic incident on  Symons Valley Rd and Kincora Bv NW.   #yyctraffic #yycroads",
    "time": "7:09 p.m."
  },
  {
    "text": "SB Deerfoot Trail at Memorial Drive, Calgary, stalled vehicle blocking the RHL. Expect delays. (6:21pm) via @NewsRadioCGY #ABRoads #yyctraffic",
    "time": "6:21 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  11 Ave and Edmonton Tr NE.   #yyctraffic #yycroads",
    "time": "5:44 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  EB Southland Dr and Bonaventure Dr SE, blocking the right lane.   #yyctraffic #yycroads https://t.co/dbk7JVInfw",
    "time": "3:46 p.m."
  },
  {
    "text": "There's a collision at Southland Drive and Bonaventure Drive and road closures are in place.\nSB Bonaventure Drive closed between 94 Ave and Southland Drive, Southland Drive closed WB Southland Drive is closed between Bonaventure Drive and Fairmount Drive SE. #660roads #yycroads https://t.co/W8fCcg3okU",
    "time": "4:34 p.m."
  },
  {
    "text": "ALERT: Two vehicle incident on  Mcknight Bv and Deerfoot Tr NE, on ramp onto NB Deerfoot Trail.   #yyctraffic #yycroads https://t.co/3yePO6zyW4",
    "time": "12:40 p.m."
  },
  {
    "text": "ALERT: Two vehicle incident on  NB 14 St and Anderson Rd SW, blocking the merge lane.   #yyctraffic #yycroads https://t.co/hDX9inHg4V",
    "time": "5:00 p.m."
  },
  {
    "text": "ALERT:  Emergency services are helping a pedestrian involved in an incident on 4 Ave and 6 St SW. Blocking the right lane. Please go slow and watch for fellow Calgarians   #yyctraffic #yycroads https://t.co/xC6i5tlNCL",
    "time": "12:20 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  4 Ave and 4 St SW.   #yyctraffic #yycroads",
    "time": "9:57 a.m."
  },
  {
    "text": "ALERT: Traffic incident on  13 Ave and 14 St SW.   #yyctraffic #yycroads",
    "time": "6:18 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  WB 4 Ave and 3 St SE, blocking the left lane.   #yyctraffic #yycroads https://t.co/iNBFkjwZ8s",
    "time": "6:23 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  NB Macleod Tr south of 210 Ave SE.   #yyctraffic #yycroads",
    "time": "5:48 p.m."
  },
  {
    "text": "ALERT:  Emergency services are helping a pedestrian involved in an incident on 37 Ave west of Barlow Tr NE. Please go slow and watch for fellow Calgarians.   #yyctraffic #yycroads",
    "time": "6:38 p.m."
  },
  {
    "text": "In the Southeast, watch out for a crash on WB Glenmore Trail just past Deerfoot Trail, blocking the left-hand lane #yyctraffic https://t.co/hmNQt0jG4Q",
    "time": "6:21 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  68 St and Falconridge Dr NE.   #yyctraffic #yycroads",
    "time": "6:34 p.m."
  },
  {
    "text": "ALERT: Traffic incident on SB Macleod Tr and 50 Ave SW, blocking the right lane.   #yyctraffic #yycroads https://t.co/f30o48T9kj",
    "time": "6:33 p.m."
  },
  {
    "text": "ALERT: Traffic incident on NB Centre St at 68 Ave N. Expect delays in the area. #yyctraffic #yycroads",
    "time": "5:23 p.m."
  },
  {
    "text": "ALERT:  Emergency services are helping a pedestrian involved in an incident on 26 Ave and 52 St NE. Please go slow and watch for fellow Calgarians.   #yyctraffic #yycroads",
    "time": "5:10 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  Abbeydale Dr and 68 St NE.   #yyctraffic #yycroads",
    "time": "3:58 p.m."
  },
  {
    "text": "SB Deerfoot Tr approaching Peigan Tr SE, Calgary - MVC blocking the LHL. Expect delays. (2:38pm) #ABRoads #yyctraffic",
    "time": "2:38 p.m."
  },
  {
    "text": "SB Deerfoot Tr and 32 Ave NE, Calgary - MVC blocking the right lane. Expect delays. (5:46pm) #ABRoads #yyctraffic",
    "time": "5:46 p.m."
  },
  {
    "text": "ALERT: Traffic incident on WB Crowchild Tr after Stoney Tr NW, blocking the right lane. There are considerable backups in the area. #yyctraffic #yycroads https://t.co/6fjeWtMECQ",
    "time": "4:56 p.m."
  },
  {
    "text": "SB Deerfoot Tr at Calf Robe Br, Calgary - stalled vehicle in right lane. Expect delays. (4:28pm) #ABRoads #yyctraffic",
    "time": "4:28 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  NB Barlow Tr and Sunridge Bv NE, blocking the right lane.   #yyctraffic #yycroads https://t.co/s7nmiyOzlJ",
    "time": "3:43 p.m."
  },
  {
    "text": "SB Deerfoot Tr south of Peigan Tr SE, in Calgary - traffic incident, blocking the RH lane. (3:35pm) via @yyctransport  #yyctraffic",
    "time": "3:35 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  Metis Tr and Country Hills Bv NE.   #yyctraffic #yycroads https://t.co/6F7FcJ2KNT",
    "time": "3:34 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  SB Deerfoot Tr and 32 Ave NE, blocking the right lane.   #yyctraffic #yycroads https://t.co/FLD6sCaSqj",
    "time": "5:43 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  EB Airport Tr approaching 60 St NE.   #yyctraffic #yycroads https://t.co/NRtpfzeYPJ",
    "time": "5:35 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  NB Deerfoot Tr north of  Airport Tr NE, blocking the right lane.   #yyctraffic #yycroads https://t.co/TLIT3i5tEJ",
    "time": "4:15 p.m."
  },
  {
    "text": "ALERT: Traffic incident on WB 16 Ave approaching Barlow Tr NE, blocking the right lane.  #yyctraffic #yycroads https://t.co/0HGiMgG5VD",
    "time": "3:59 p.m."
  },
  {
    "text": "ALERT: Traffic signals are blank on 80 Ave west of Saddlebrook Dr NE, crews have been dispatched. Please drive with caution. #yyctraffic #yycroads https://t.co/v4r95XhwWD",
    "time": "3:42 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  SB Deerfoot Tr south of Peigan Tr SE, blocking the right shoulder.   #yyctraffic #yycroads https://t.co/JbeRvIbgZ8",
    "time": "2:52 p.m."
  },
  {
    "text": "ALERT: Traffic incident on 5 Ave Connector west of 14 St SW. Please drive with caution. #yyctraffic #yycroads https://t.co/2arzLhqWkT",
    "time": "2:41 p.m."
  },
  {
    "text": "ALERT: Multi-vehicle incident on SB Deerfoot Tr approaching Peigan Tr SE, blocking the left lane. Expect delays in the area. #yyctraffic #yycroads https://t.co/K99UhcheQi",
    "time": "2:35 p.m."
  },
  {
    "text": "NB Deerfoot Tr just north of  Airport Tr NE, in Calgary - traffic incident, blocking the RH lane. (4:18pm) via @yyctransport #yyctraffic",
    "time": "4:18 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  EB McKnight Bv and 4 St NW, blocking the left lane.   #yyctraffic #yycroads https://t.co/ZXIXhL9jNm",
    "time": "12:00 PM"
  },
  {
    "text": "ALERT: Traffic incident on Beddington Bv and 4 St NE, blocking multiple lanes.  #yyctraffic #yycroads https://t.co/TTqOWfoCuu",
    "time": "6:04 PM"
  },
  {
    "text": "ALERT: Two vehicle incident on Peigan Tr and Barlow Tr NE, blocking multiple lanes in the intersection. Please drive with caution. #yyctraffic #yycroads https://t.co/iWYynG3FQf",
    "time": "5:32 PM"
  },
  {
    "text": "In the Northwest, watch out for a crash on the ramp from Stoney Trail to WB 16th Avenue, blocking the right-hand lane #yyctraffic https://t.co/pRdeXdGQMR",
    "time": "2:34 PM"
  },
  {
    "text": "ALERT: Stalled vehicle on  NB Deerfoot Tr and 17 Ave SE, blocking the right lane.   #yyctraffic #yycroads https://t.co/57lYn3lLlW",
    "time": "1:56 AM"
  },
  {
    "text": "ALERT: Traffic incident on 5 Ave and 1 St SE, blocking the EB left lanes.   #yyctraffic #yycroads https://t.co/PobchvSsfn",
    "time": "9:05 PM"
  },
  {
    "text": "ALERT: Traffic incident on  32 Ave and Barlow Tr NE.   #yyctraffic #yycroads https://t.co/4GL2utWv6m",
    "time": "7:12 AM"
  },
  {
    "text": "ALERT: Traffic incident on EB 16 Ave at 68 St NE, blocking the left lanes.   #yyctraffic #yycroads https://t.co/Ghlf5tmvF3",
    "time": "7:27 PM"
  },
  {
    "text": "In the Southeast, watch out for a crash on WB 17th Avenue at 54th Street, blocking the left-hand lane #yyctraffic https://t.co/F5hBd9CLvb",
    "time": "1:40 PM"
  },
  {
    "text": "ALERT: Traffic incident on Centre St and 56 Ave NE, blocking the SB right lane.   #yyctraffic #yycroads https://t.co/pXQvyMMlBr",
    "time": "11:00 AM"
  },
  {
    "text": "In the NE, there's a collision in the intersection of 32nd Avenue and Barlow Trail. Expect delays. #yycroads #yyctraffic https://t.co/W5qtdypWGY",
    "time": "7:20 AM"
  },
  {
    "text": "ALERT: Traffic incident on SB 52 St at New Brighton Ga SE. Expect delays in the area. #yyctraffic #yycroads https://t.co/KJ9yZ2m4Mo",
    "time": "6:08 PM"
  },
  {
    "text": "SB Stoney Tr NW to WB Hwy1, Calgary - MVC affecting the ramp. Expect delays. (2:31pm) #ABRoads #yyctraffic",
    "time": "2:31 PM"
  },
  {
    "text": "ALERT: Traffic incident on Trans Canada Hi and Stoney Tr NW, partially blocking the WB on-ramp.  #yyctraffic #yycroads https://t.co/bGKxd4gK5z",
    "time": "2:27 PM"
  },
  {
    "text": "ALERT: Traffic incident on 17 Ave and 54 St SE, blocking the WB lanes.   #yyctraffic #yycroads https://t.co/JFF0DtFHoB",
    "time": "1:30 PM"
  },
  {
    "text": "In the Southwest, watch out for a crash on SB Elbow Drive approaching Glenmore Trail, blocking the right-hand lane #yyctraffic https://t.co/b7r3kUKPit",
    "time": "12:30 PM"
  },
  {
    "text": "ALERT: Traffic incident on 5 Ave at Crowchild Tr NW.   #yyctraffic #yycroads",
    "time": "12:59 PM"
  },
  {
    "text": "ALERT: Two vehicle incident on SB Elbow Dr approaching Glenmore Tr SW, blocking the SB lanes.   #yyctraffic #yycroads https://t.co/kcZktXOR9Y",
    "time": "12:14 PM"
  },
  {
    "text": "ALERT: Traffic incident on  26 Ave and 32 St NE.   #yyctraffic #yycroads",
    "time": "12:51 PM"
  },
  {
    "text": "ALERT: Traffic incident on 128 Ave and Redstone Bv NE.  #yyctraffic #yycroads",
    "time": "3:02 PM"
  },
  {
    "text": "ALERT: Traffic incident on   Metis Tr north of McKnight Bv  NE.   #yyctraffic #yycroads",
    "time": "1:26 PM"
  },
  {
    "text": "ALERT: Traffic incident on WB 42 Ave approaching Blackfoot Tr SE. Expect delays in the area. #yyctraffic #yycroads https://t.co/tKFjLNDSoV",
    "time": "3:48 PM"
  },
  {
    "text": "ALERT: Traffic incident on Memorial Dr and Madigan Dr E.   #yyctraffic #yycroads",
    "time": "5:07 PM"
  },
  {
    "text": "ALERT:  Emergency services are helping a pedestrian involved in an incident on 6 Ave and Centre St S. Blocking multiple lanes in the intersection. Please go slow and watch for fellow Calgarians   #yyctraffic #yycroads https://t.co/TjgME1cWFN",
    "time": "5:16 PM"
  },
  {
    "text": "ALERT: Traffic incident on EB John Laurie Bv after Brisebois Dr NW. Expect delays in the area. #yyctraffic #yycroads",
    "time": "5:18 PM"
  },
  {
    "text": "EB Stoney Tr approaching 52 St SE, Calgary - MVC blocking the RHLs. Expect delays. (5:36pm) #ABRoads #yyctraffic",
    "time": "5:36 PM"
  },
  {
    "text": "ALERT: Traffic incident on EB Stoney Tr at 52 St SE, blocking the right lanes. Expect delays in the area. #yyctraffic #yycroads https://t.co/lXsZs2OVZH",
    "time": "5:33 PM"
  },
  {
    "text": "In the Southeast, there's a crash on Barlow Trail at Peigan Trail, blocking lanes in both directions #yyctraffic https://t.co/yZjpSEXO4e",
    "time": "7:30 PM"
  },
  {
    "text": "ALERT: Traffic incident on WB 16 Ave at 68 St NE. Expect delays in the area. #yyctraffic #yycroads",
    "time": "6:30 PM"
  },
  {
    "text": "In the Northeast, watch out for a stalled vehicle on WB Memorial Drive at Edmonton Trail, blocking the left-hand lane #yyctraffic https://t.co/vN953wxpM3",
    "time": "5:59 PM"
  },
  {
    "text": "In the Northeast, watch out for a stalled vehicle on NB Deerfoot Trail approaching McKnight Blvd, blocking the left-hand lane #yyctraffic https://t.co/BvhmWHGcO0",
    "time": "8:04 PM"
  },
  {
    "text": "In the Southeast, watch out for a crash on WB Glenmore Trail at Centre Street, blocking the left-hand lane, expect delays back towards Blackfoot Trail #yyctraffic https://t.co/aQ2104LWBc",
    "time": "7:34 PM"
  },
  {
    "text": "ALERT: Traffic incident on  Peigan Tr and Barlow Tr SE, blocking multiple lanes in the intersection.   #yyctraffic #yycroads https://t.co/94PwrOdcff",
    "time": "7:04 PM"
  },
  {
    "text": "CLEARED: Traffic incident on  Metis Tr at McKnight Bv NE has been cleared.   #yyctraffic #yycroads",
    "time": "6:04 PM"
  },
  {
    "text": "ALERT: Traffic incident on Centre St at 9 Ave NE, blocking the SB lane.   #yyctraffic #yycroads",
    "time": "5:43 PM"
  },
  {
    "text": "In the Southeast, crews still working on clearing up a crash on EB Stoney Trail approaching 52nd Street, blocking the right-hand lane #yyctraffic https://t.co/D5TPkaUOpo",
    "time": "6:14 PM"
  },
  {
    "text": "ALERT: Stalled vehicle on WB Memorial Dr approaching Edmonton Tr NE, blocking the left lane. Expect delays in the area. #yyctraffic #yycroads https://t.co/7GJw4JO9oU",
    "time": "5:55 PM"
  },
  {
    "text": "ALERT: Traffic incident on WB Glenmore Tr at Centre St S. Expect delays in the area. #yyctraffic #yycroads https://t.co/d0CZJlx1oE",
    "time": "7:22 PM"
  },
  {
    "text": "Good Morning! The road is closed in the SE, SB 3rd Street at 6th Avenue. #yyctraffic #yycroads https://t.co/byt8jTtAC5",
    "time": "7:14 a.m."
  },
  {
    "text": "ALERT: Traffic signals are flashing red on  Macleod Tr and 7 Ave S.   #yyctraffic #yycroads https://t.co/ITcZw2ddfy",
    "time": "4:47 a.m."
  },
  {
    "text": "ALERT:  Emergency services are helping a pedestrian involved in an incident on SB 3 St and 6 Ave SE. Please go slow and watch for fellow Calgarians.   #yyctraffic #yycroads https://t.co/TPb6fKewFn",
    "time": "2:29 a.m."
  },
  {
    "text": "ALERT:  on  Signal Hill SW, power outage in the area. Please drive with care. #yyctraffic #yycroads",
    "time": "1:59 a.m."
  },
  {
    "text": "ALERT:  Emergency services are helping a pedestrian involved in an incident on 45 St and Westwood Dr SW. Please go slow and watch for fellow Calgarians.   #yyctraffic #yycroads",
    "time": "12:31 a.m."
  },
  {
    "text": "ALERT: Traffic incident on SB Macleod Tr approaching Glenmore Tr SW, blocking the left lanes.   #yyctraffic #yycroads https://t.co/6mRf2a6eKw",
    "time": "8:34 p.m."
  },
  {
    "text": "ALERT: Traffic incident on 11 St south of Heritage Meadows Wy SE.   #yyctraffic #yycroads",
    "time": "7:01 p.m."
  },
  {
    "text": "ALERT: Traffic incident on Castleridge Blvd and Westwind Dr NE.   #yyctraffic #yycroads",
    "time": "5:56 p.m."
  },
  {
    "text": "ALERT: Two vehicle incident on NB 36 St and 16 Ave NE, blocking the left lane.   #yyctraffic #yycroads https://t.co/6y2lNLea3P",
    "time": "5:49 p.m."
  },
  {
    "text": "ALERT: Traffic incident on 96 Ave and Harvest Rose Park NE.   #yyctraffic #yycroads",
    "time": "5:27 p.m."
  },
  {
    "text": "WB McKnight Blvd NE on-ramp to NB Deerfoot Tr, Calgary - MVC. Expect delays. (5:25pm) #ABRoads #yyctraffic",
    "time": "5:25 p.m."
  },
  {
    "text": "ALERT: Two vehicle incident on Deerfoot Tr and McKnight Blvd NE, blocking the WB to NB left lane.   #yyctraffic #yycroads https://t.co/BMOfswUHXm",
    "time": "5:22 p.m."
  },
  {
    "text": "ALERT: Traffic incident on 64 Ave and 9 St NE, blocking the EB right lane.   #yyctraffic #yycroads https://t.co/DHJONCTnfe",
    "time": "5:17 p.m."
  },
  {
    "text": "ALERT: Traffic incident on Abbercove Dr and 68 St SE.   #yyctraffic #yycroads",
    "time": "5:06 p.m."
  },
  {
    "text": "ALERT: Traffic incident on Mcknight Bv and Stoney Tr NE.   #yyctraffic #yycroads",
    "time": "4:58 p.m."
  },
  {
    "text": "Attention #Calgary #YYC Drivers!\n\n#SouthBound #DeerfootTrail at #PeiganTrail closed following serious #MVC.\n\nExpect major delays during #RushHour \n\n#MultipleVehicleCrash #yyccc #YYCTraffic #yycroads #511Alberta https://t.co/YhCafvzek5",
    "time": "3:33 p.m."
  },
  {
    "text": "SB Deerfoot Trail is CLOSED between Peigan Trail and Glenmore Trail SE, due to a serious collision. Traffic is being re-directed onto Peigan Trail.  #660roads #yycroads https://t.co/o3HfKjjDNc",
    "time": "2:59 p.m."
  },
  {
    "text": "ALERT: Traffic incident on Red Embers Ga and 128 Ave NE.   #yyctraffic #yycroads",
    "time": "2:55 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  Mckenzie Towne Dr and 52 St SE.   #yyctraffic #yycroads",
    "time": "8:31 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  52 St and McKenzie Towne Dr SE.   #yyctraffic #yycroads",
    "time": "8:31 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  Memorial Dr and Zoo Rd SE, blocking the exit ramp.   #yyctraffic #yycroads https://t.co/lZEOcT6Ps9",
    "time": "8:09 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  10 Ave and 16 St SW.   #yyctraffic #yycroads",
    "time": "8:03 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  5 St north of Glenmore Tr SW, blocking the SB lanes.   #yyctraffic #yycroads https://t.co/GF28bfZ8eJ",
    "time": "8:02 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  EB 17 Ave at St Moritz Dr SW, blocking the right lane.   #yyctraffic #yycroads https://t.co/ZCraNjSAnf",
    "time": "6:02 p.m."
  },
  {
    "text": "ALERT:  Emergency services are helping a pedestrian involved in an incident on 2 St north of 9 Ave SW. Please go slow and watch for fellow Calgarians.   #yyctraffic #yycroads",
    "time": "5:43 p.m."
  },
  {
    "text": "SB Stoney Tr approaching Airport Tr NE, Calgary - MVC blocking the right lane. Expect delays. (5:24pm) #ABRoads #yyctraffic",
    "time": "5:24 p.m."
  },
  {
    "text": "ALERT: Traffic incident on SB Crowchild Tr approaching Glenmore Tr SW, blocking the right lane. Expect delays in the area. #yyctraffic #yycroads https://t.co/DWwoSj983s",
    "time": "4:11 p.m."
  },
  {
    "text": "SB Deerfoot Tr south of 17 Ave SE, Calgary - MVC blocking the left lane. Expect delays. (3:39pm) #ABRoads #yyctraffic",
    "time": "3:39 p.m."
  },
  {
    "text": "ALERT: Two vehicle incident on  SB Deerfoot Tr south of 17 Ave SE, blocking the left lane. Expect delays in the area. #yyctraffic #yycroads https://t.co/vgIwi8emOT",
    "time": "3:33 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  EB 32 Ave at 52 St NE, blocking the left thru lane.   #yyctraffic #yycroads https://t.co/R6uU6BUADt",
    "time": "3:22 p.m."
  },
  {
    "text": "ALERT: Traffic incident on 14 St and 29 Ave SW.   #yyctraffic #yycroads",
    "time": "3:00 p.m."
  },
  {
    "text": "ALERT: Two vehicle incident on  Richmond Rd and Sarcee Tr SW, partially blocking the NB to EB merge lane and EB right lane.   #yyctraffic #yycroads https://t.co/VhorjtgFtK",
    "time": "2:46 p.m."
  },
  {
    "text": "NB Deerfoot Tr at the Ivor Strong Bridge SE, Calgary - MVC. Expect a closure of the right lane and delays. (9:41pm) #ABRoads #yyctraffic",
    "time": "9:41 p.m."
  },
  {
    "text": "NB Deerfoot Tr approaching Anderson Rd SE, Calgary - MVC blocking the RHL. (9:04pm) via @yyctransport #ABRoads #yyctraffic",
    "time": "9:05 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  NB Deerfoot Tr approaching Anderson Rd SE, blocking the right lane.   #yyctraffic #yycroads https://t.co/2oQsUFZunk",
    "time": "9:03 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  SB Deerfoot Tr approaching Mcknight Bv NE, blocking the left lane.   #yyctraffic #yycroads https://t.co/yCjeosNdJq",
    "time": "8:35 p.m."
  },
  {
    "text": "SB Deerfoot Tr at the Bow River Bridge SE, Calgary - guardrail repairs in progress, Dec.7 affecting the left shoulder. (8:01pm) #ABRoads #yyctraffic",
    "time": "8:02 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  68 St and Mcknight Bv NE.   #yyctraffic #yycroads https://t.co/mPOoAXfCtN",
    "time": "7:13 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  EB 16 Ave and 12 St NW, blocking the right lane.   #yyctraffic #yycroads https://t.co/FKjrhwivgy",
    "time": "6:50 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  EB Glenmore Tr approaching Deerfoot Tr SE, blocking the right lane.   #yyctraffic #yycroads https://t.co/yjLVGq1Puq",
    "time": "6:30 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  Madigan Dr and Madeira Wy NE.   #yyctraffic #yycroads",
    "time": "6:06 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  5 St and Manor Rd SW.   #yyctraffic #yycroads",
    "time": "5:55 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  NB Deerfoot Tr and Peigan Tr SE, blocking the left lane.   #yyctraffic #yycroads https://t.co/F3RuGbSz9p",
    "time": "5:40 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  Mcivor Bv and Copperpond Ps SE.   #yyctraffic #yycroads",
    "time": "5:23 p.m."
  },
  {
    "text": "In the Southeast, watch out for a crash on NB Macleod Trail at 61st Avenue, blocking the right-hand lane #yyctraffic https://t.co/cV6v0gSMLA",
    "time": "5:00 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  Ambleton St and 144 Ave NW.   #yyctraffic #yycroads",
    "time": "4:48 p.m."
  },
  {
    "text": "SB Deerfoot Tr approaching Peigan Tr, Calgary - MVC. Left hand lane is blocked. Expect delays. (4:47pm) #ABRoads #yyctraffic",
    "time": "4:47 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  NB Macleod Tr and 61 Ave SW, blocking the right lane.   #yyctraffic #yycroads https://t.co/zFTGvTBFZM",
    "time": "4:44 p.m."
  },
  {
    "text": "In the Southeast, watch out for a crash on SB Deerfoot Trail approaching Peigan Trail, blocking the left-hand lane #yyctraffic https://t.co/PbK903LCFZ",
    "time": "4:44 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  27 Ave and Barlow Tr NE, blocking the left lane.   #yyctraffic #yycroads https://t.co/mn3qgqPMdm",
    "time": "4:10 p.m."
  },
  {
    "text": "In the Southeast, watch out for a crash on NB Deerfoot Trail approaching the Calf Robe Bridge, blocking the right-hand lane #yyctraffic https://t.co/3AlfSqRg1W",
    "time": "3:56 p.m."
  },
  {
    "text": "NB Deerfoot Tr approaching the Calf Robe Bridge, Calgary - MVC  affecting the RHL. Expect delays. (3:51pm) #ABRoads #yyctraffic",
    "time": "3:51 p.m."
  },
  {
    "text": "NB Deerfoot Tr btwn 16 Ave and 32 Ave NE, Calgary - debris in left lane. Crews en route for pickup. Drive with caution in the area. (10:51pm) #ABRoads #yyctraffic",
    "time": "10:51 p.m."
  },
  {
    "text": "NB Stoney Tr approaching 17 Ave SW, Calgary - MVC. Drive with caution in the area. (7:35pm) #ABRoads #yyctraffic",
    "time": "7:35 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  NB Stoney Tr approaching 17 Ave SW.   #yyctraffic #yycroads",
    "time": "7:31 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  Bow Bottom Tr and Deerfoot Tr SE, blocking the right lane.   #yyctraffic #yycroads https://t.co/g1lpX0xawI",
    "time": "6:31 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  16 Ave and 52 St NE, blocking multiple lanes .   #yyctraffic #yycroads https://t.co/RzVBUNXg8H",
    "time": "6:07 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  SB Spruce Meadow Wy and Stoney Tr SW, blocking the right lane.   #yyctraffic #yycroads https://t.co/PHb5LAmbCE",
    "time": "5:43 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  26 Ave and 36 St NE.   #yyctraffic #yycroads",
    "time": "4:35 p.m."
  },
  {
    "text": "NB Deerfoot Tr near 64 Ave NE, Calgary - MVC blocking the LHL. Expect delays in the area. (3:31pm) #ABRoads #yyctraffic",
    "time": "3:32 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  NB Deerfoot approaching 64 Ave NE, blocking the left lane.   #yyctraffic #yycroads https://t.co/y1LuqoG2R3",
    "time": "3:30 p.m."
  },
  {
    "text": "In the Northeast, watch out for a crash on NB Deerfoot Trail at 64th Avenue, blocking the left-hand lane #yyctraffic https://t.co/jgKAGg61GP",
    "time": "3:29 p.m."
  },
  {
    "text": "ALERT: Traffic incident on NB Shaganappi Tr at Northland Dr NW, blocking the right lane. Expect delays in the area. #yyctraffic #yycroads https://t.co/bkB0eXD0AL",
    "time": "12:01 p.m."
  },
  {
    "text": "Good Morning! We're getting everything weather wise. A bit of rain, snow and wind. Roads are in good shape. There might be slippery sections over bridge decks. Here's a look at Stoney Trail between Nose Hill Drive and the Trans-Canada Highway in the NW. #yyctraffic #yycroads https://t.co/a4YP15U4gR",
    "time": "8:40 a.m."
  },
  {
    "text": "ALERT: Traffic incident on 90 Ave west of 14 St SW.   #yyctraffic #yycroads",
    "time": "7:01 a.m."
  },
  {
    "text": "ALERT: Traffic incident on  NB 52 St and 17 Ave ST SE, blocking the right lane.   #yyctraffic #yycroads https://t.co/mXkC3jHLXQ",
    "time": "2:57 a.m."
  },
  {
    "text": "In the Northwest, watch out for a crash on NB Shaganappi Trail north of John Laurie Blvd, expect delays #yyctraffic https://t.co/Tw7zuoWhar",
    "time": "4:06 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  Copperfield Bv and Mcivor Bv SE.   #yyctraffic #yycroads",
    "time": "3:42 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  60 St and 88 Ave NE.   #yyctraffic #yycroads",
    "time": "3:28 p.m."
  },
  {
    "text": "In the Northeast, watch out for a crash on EB 16th Avenue at 1st Street, blocking the left-hand lane in both directions #yyctraffic https://t.co/dxfeU3t7qo",
    "time": "3:26 p.m."
  },
  {
    "text": "ALERT: Two vehicle incident on  EB 16 Ave and 1 St NE, blocking the left lane.   #yyctraffic #yycroads https://t.co/Hs1Uz12xwm",
    "time": "3:23 p.m."
  },
  {
    "text": "ALERT: Multi-vehicle incident on  WB 25 Ave and Macleod Tr S, blocking the right lane.   #yyctraffic #yycroads https://t.co/qgqCwUlgEB",
    "time": "3:10 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  Memorial Dr east of Crowchild Tr NW.   #yyctraffic #yycroads",
    "time": "9:49 a.m."
  },
  {
    "text": "ALERT: Traffic incident on  162 Ave and Shawbrooke Dr SW.   #yyctraffic #yycroads",
    "time": "8:16 a.m."
  },
  {
    "text": "ALERT: Traffic incident on  16 Ave and Deerfoot Tr NE.   #yyctraffic #yycroads https://t.co/M3l47DAqEO",
    "time": "7:39 a.m."
  },
  {
    "text": "Good Morning! Expect delays downtown EB 9th Street at 1st Avenue. Construction has 3 right lanes closed. Stay right. #yyctraffic #yycroads https://t.co/gMDPsZhKPc",
    "time": "7:06 a.m."
  },
  {
    "text": "ALERT: Traffic incident on  NB Macleod Tr and 99 Ave SE, blocking multiple lanes.   #yyctraffic #yycroads https://t.co/z45rYf2smZ",
    "time": "2:04 a.m."
  },
  {
    "text": "ALERT: Multi-vehicle incident on EB Memorial Dr approaching 12 St NE, blocking the left lane. Expect delays in the area. #yyctraffic #yycroads https://t.co/XPKpvzbUL2",
    "time": "4:43 p.m."
  },
  {
    "text": "ALERT:  Emergency services are helping a pedestrian involved in an incident on 148 Ave and Lucas Bv NW. Please go slow and watch for fellow Calgarians.  #yyctraffic #yycroads",
    "time": "4:39 p.m."
  },
  {
    "text": "ALERT: Traffic incident on Country Hills Bv and Country Hills Dr NW.   #yyctraffic #yycroads",
    "time": "4:32 p.m."
  },
  {
    "text": "ALERT: Traffic incident on EB Blackfoot Tr at Ogden Rd SE. Expect delays in the area. #yyctraffic #yycroads",
    "time": "3:57 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  71 Ave and Blackfoot Tr SE.   #yyctraffic #yycroads",
    "time": "11:55 a.m."
  },
  {
    "text": "ALERT: Traffic incident on  SB Crowchild Tr and Glenmore Tr SW, blocking multiple lanes.   #yyctraffic #yycroads https://t.co/jUUUpNUnKz",
    "time": "10:13 a.m."
  },
  {
    "text": "ALERT: Traffic incident on  10 Ave east of 14 St SW.   #yyctraffic #yycroads",
    "time": "9:50 a.m."
  },
  {
    "text": "ALERT: Traffic incident on  39 Ave and 19 St NE.   #yyctraffic #yycroads",
    "time": "9:44 a.m."
  },
  {
    "text": "ALERT:  Emergency services are helping a pedestrian involved in an incident on Berkshire Bv and Sandstone Dr NW. Please go slow and watch for fellow Calgarians.   #yyctraffic #yycroads",
    "time": "7:56 a.m."
  },
  {
    "text": "ALERT:  Emergency services are helping a pedestrian involved in an incident on 8 Ave and 5 St SW. The road is closed in all directions, use alternate route. Please go slow and watch for fellow Calgarians   #yyctraffic #yycroads https://t.co/gfoPUzqkZ0",
    "time": "7:07 a.m."
  },
  {
    "text": "ALERT: Traffic incident on  Gladstone Rd and 10 St NW.   #yyctraffic #yycroads",
    "time": "10:24 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  NB 36 St and 16 Ave NE, blocking the left lane.   #yyctraffic #yycroads https://t.co/xrKhB1KgNa",
    "time": "5:19 p.m."
  },
  {
    "text": "In the Southeast, watch out for a crash on EB Glenmore Trail at Fairmount Drive, blocking the right-hand lane #yyctraffic https://t.co/dZsblbmCoZ",
    "time": "5:15 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  EB Glenmore Tr at Fairmont Dr SE, blocking the right lane. Expect delays in the area. #yyctraffic #yycroads https://t.co/nDO8o44Yf1",
    "time": "5:14 p.m."
  },
  {
    "text": "In the Northeast, watch out for a crash on NB 36th Street at 16th Avenue, blocking the left-hand lane #yyctraffic https://t.co/mieB1bUyz4",
    "time": "5:14 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  NB 36 St and 16 Ave NE, blocking the left lane.   #yyctraffic #yycroads https://t.co/7pikTE5nNS",
    "time": "5:08 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  Sheriff King St and 210 Ave SW.   #yyctraffic #yycroads",
    "time": "4:58 p.m."
  },
  {
    "text": "ALERT:  on  NB 36 St and 32 Ave NE, blocking the right lane.   #yyctraffic #yycroads https://t.co/WyJ5CLCKU6",
    "time": "4:57 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  114 Ave and 35 St SE.   #yyctraffic #yycroads",
    "time": "4:28 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  McKnight Bv and Stoney Tr NE.   #yyctraffic #yycroads",
    "time": "4:26 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  52 St and 26 Ave SE.   #yyctraffic #yycroads",
    "time": "3:15 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  SB Stoney Tr and 16 Ave NE, blocking the left shoulder.   #yyctraffic #yycroads https://t.co/gf1fqTsJ1B",
    "time": "1:59 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  SB Deerfoot Tr south of Calf Robe Bridge  SE, blocking the left lane.   #yyctraffic #yycroads https://t.co/zf7DkfIcWc",
    "time": "12:39 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  Blackfoot Tr and Manhattan Rd SE.   #yyctraffic #yycroads https://t.co/MgUfHIX6xy",
    "time": "11:21 a.m."
  },
  {
    "text": "ALERT: Traffic incident on  Memorial Dr and 28 St SE.   #yyctraffic #yycroads",
    "time": "10:12 a.m."
  },
  {
    "text": "ALERT: Traffic signals work in progress on  Country HIlls Bv and Sarcee Tr NW, police directing traffic, please proceed with caution.   #yyctraffic #yycroads",
    "time": "9:20 a.m."
  },
  {
    "text": "ALERT: Multi-vehicle incident on  Charleswood Dr and John Laurie Bv NW, blocking the NB lanes on Charleswood Dr.   #yyctraffic #yycroads https://t.co/C0JP8SEDdu",
    "time": "8:15 a.m."
  },
  {
    "text": "ALERT: Traffic incident on  Shaganappi Tr and Kincora Ga NW.   #yyctraffic #yycroads",
    "time": "7:31 a.m."
  },
  {
    "text": "ALERT: Two vehicle incident on  SB Centre St and 64 Ave NE.   #yyctraffic #yycroads https://t.co/6rPATnyV30",
    "time": "10:45 p.m."
  },
  {
    "text": "ALERT: Traffic incident on Centre St and 31 Ave N.  #yyctraffic #yycroads",
    "time": "7:32 p.m."
  },
  {
    "text": "NB Deerfoot Tr approaching McKnight Blvd NE, in Calgary - stalled vehicle, blocking the RH lane. (7:17pm) via @yyctransport #yyctraffic #ABRoads",
    "time": "7:17 p.m."
  },
  {
    "text": "ALERT: Traffic incident on NB 52 St at Dufferin Bv SE, blocking the right lane.   #yyctraffic #yycroads https://t.co/0X4ZcYmMfp",
    "time": "4:51 p.m."
  },
  {
    "text": "There's a collision NB QE II at Highway 566/Balzac overpass and the LHL is blocked. Expect heavy delays #yycroads #660roads https://t.co/g4qp7dof2F",
    "time": "4:17 p.m."
  },
  {
    "text": "ALERT: Traffic incident on NB Shawville Bv approaching 162 Ave SE, blocking the right lane.   #yyctraffic #yycroads https://t.co/jMsqdJm3KN",
    "time": "3:56 p.m."
  },
  {
    "text": "ALERT: Two vehicle incident on Edmonton Tr and 12 Ave NE, blocking multiple lanes. Expect delays in the area. #yyctraffic #yycroads https://t.co/NlYcqkKhKx",
    "time": "2:24 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  Southland Dr and 24 St SW.   #yyctraffic #yycroads",
    "time": "1:50 p.m."
  },
  {
    "text": "NB Deerfoot Tr at 64 Ave NE, Calgary - MVC blocking the right lanes. Expect delays. (1:31pm) #ABRoads #yyctraffic",
    "time": "1:31 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  NB Deerfoot Tr at 64 Ave NE, blocking the right lanes.   #yyctraffic #yycroads https://t.co/6ZVam7a5TC",
    "time": "1:27 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  17 Ave and 37 St SW.   #yyctraffic #yycroads",
    "time": "1:06 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  SB Deerfoot Tr and Glenmore Tr SE, blocking the right lane.   #yyctraffic #yycroads https://t.co/GXxHKJunc7",
    "time": "1:05 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  WB Memorial Dr approaching Deerfoot Tr SE, blocking the left lane.   #yyctraffic #yycroads https://t.co/8EJDrv8S7n",
    "time": "9:52 a.m."
  },
  {
    "text": "ALERT: Traffic incident on  NB Macleod Tr approaching 25 Ave SE.   #yyctraffic #yycroads https://t.co/xHwYU4BWmG",
    "time": "9:49 a.m."
  },
  {
    "text": "ALERT: Traffic incident on  52 St and 61 Ave SE.   #yyctraffic #yycroads",
    "time": "9:39 a.m."
  },
  {
    "text": "ALERT: Traffic incident on  SB Stoney Tr south of Nose Hill Dr NW, blocking the left lane.   #yyctraffic #yycroads https://t.co/qW0djAKSFM",
    "time": "9:03 a.m."
  },
  {
    "text": "ALERT:  Emergency services are helping a pedestrian involved in an incident on 28 St and 12 Ave SE. Please go slow and watch for fellow Calgarians.   #yyctraffic #yycroads",
    "time": "8:41 a.m."
  },
  {
    "text": "ALERT: Traffic incident on  84 St and 8 Ave NE.   #yyctraffic #yycroads",
    "time": "6:47 a.m."
  },
  {
    "text": "ALERT: Traffic incident on  Coventry Bv and Country Hills Bv NE.   #yyctraffic #yycroads",
    "time": "6:28 a.m."
  },
  {
    "text": "ALERT: Traffic incident on  17 Ave and 47 St SE.   #yyctraffic #yycroads https://t.co/m4Az5QSMN2",
    "time": "10:50 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  EB Country Hills Bv at Coventry Hills Bv NE, blocking the left lane.   #yyctraffic #yycroads https://t.co/vIlBMHZgMi",
    "time": "4:13 p.m."
  },
  {
    "text": "NB Stoney Tr approaching 114 Ave SE, Calgary - traffic incident blocking the LH lane. Expect delays. (3:15pm) #ABRoads #yyctraffic",
    "time": "3:15 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  NB Stoney Tr approaching 114 Ave SE, blocking the left lane.   #yyctraffic #yycroads https://t.co/qMhEtZ0KWi",
    "time": "3:05 p.m."
  },
  {
    "text": "ALERT: Traffic incident on 32 Ave and 49 St NW.   #yyctraffic #yycroads",
    "time": "2:46 p.m."
  },
  {
    "text": "EB Stoney Tr approaching Sarcee Tr NW, Calgary - MVC blocking the LHL. Expect delays. (2:19pm) #ABRoads #yyctraffic",
    "time": "2:20 p.m."
  },
  {
    "text": "ALERT: Single vehicle incident on  EB Stoney Tr approaching Sarcee Tr NW, blocking the left lane.   #yyctraffic #yycroads https://t.co/HaQTOPKEIz",
    "time": "2:16 p.m."
  },
  {
    "text": "ALERT: Two vehicle incident on  NB Blackfoot Tr at Glenmore Tr SE, blocking the right lanes.   #yyctraffic #yycroads https://t.co/naIJmhbC2b",
    "time": "1:45 p.m."
  },
  {
    "text": "ALERT: Two vehicle incident on NB Macleod Tr approaching Lake Fraser gate SE, blocking the right lanes.   #yyctraffic #yycroads https://t.co/3ZAmAfKFEA",
    "time": "12:28 p.m."
  },
  {
    "text": "ALERT: Traffic incident on EB Glenmore Tr after Crowchild Tr SW.   #yyctraffic #yycroads",
    "time": "11:49 a.m."
  },
  {
    "text": "ALERT: Traffic incident on Willow Park Dr and Bonaventure Dr SE.   #yyctraffic #yycroads",
    "time": "11:44 a.m."
  },
  {
    "text": "ALERT: Traffic incident on 37 St and Glenmore Tr SW.   #yyctraffic #yycroads",
    "time": "11:33 a.m."
  },
  {
    "text": "ALERT: Multi-vehicle incident on Macleod Tr and Sun Valley Bv SE, blocking the WB right turn lane.   #yyctraffic #yycroads https://t.co/zFFTivJuq5",
    "time": "11:03 a.m."
  },
  {
    "text": "ALERT: Traffic incident on 24 St and Morley Tr NW.   #yyctraffic #yycroads",
    "time": "9:53 a.m."
  },
  {
    "text": "ALERT: Stalled vehicle on WB Glenmore Tr at Blackfoot Tr SE, blocking the middle lane.   #yyctraffic #yycroads https://t.co/Am9ShBUXiN",
    "time": "8:07 a.m."
  },
  {
    "text": "ALERT:  Emergency services have been called to help a pedestrian involved in an incident on Belmont Dr and 210 Ave SW. Please go slow and watch for fellow Calgarians.   #yyctraffic #yycroads",
    "time": "7:38 a.m."
  },
  {
    "text": "ALERT: Traffic incident on Rangeview Bv at 72 St SE, blocking multiple lanes. Please drive with caution. #yyctraffic #yycroads https://t.co/RGi7M0C0xr",
    "time": "9:23 p.m."
  },
  {
    "text": "ALERT: Hazardous road condition on Crowchild Tr north of 33 Ave SW, blocking the NB and SB right lanes. Please use alternate route. #yyctraffic #yycroads https://t.co/iJkTG21YP7",
    "time": "8:34 p.m."
  },
  {
    "text": "ALERT: Traffic incident on EB 32 Ave at 23 St NE, blocking the right lane.   #yyctraffic #yycroads https://t.co/MgwlIqRU52",
    "time": "8:21 p.m."
  },
  {
    "text": "ALERT:  Emergency services are helping a pedestrian involved in an incident on 144 Ave and Howse Ri NE. Please go slow and watch for fellow Calgarians.  #yyctraffic #yycroads",
    "time": "7:31 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  John Laurie Bv and 53 St NW. Expect delays in the area. #yyctraffic #yycroads",
    "time": "7:15 p.m."
  },
  {
    "text": "ALERT: Traffic incident on Beddington Tr west of Harvest Hills Bv N.   #yyctraffic #yycroads",
    "time": "3:08 p.m."
  },
  {
    "text": "In the Northwest, construction slowing things down on WB Memorial Drive at 10th Street, the right-hand lane is being blocked off so expect delays #yyctraffic https://t.co/36M3D62cuE",
    "time": "2:40 p.m."
  },
  {
    "text": "In the Northeast, watch out for a crash on EB Country Hills Blvd at 38th Street, a detour is in place right now #yyctraffic https://t.co/XcH6xFay3e",
    "time": "1:40 p.m."
  },
  {
    "text": "ALERT: Multi-vehicle incident on Country Hills Bv and 38 St NE, blocking multi lanes.   #yyctraffic #yycroads https://t.co/qzfV8kXqZ9",
    "time": "1:22 p.m."
  },
  {
    "text": "In the Northeast, watch out for a crash on EB McKnight Blvd just past 68th Street, blocking the left-hand lane #yyctraffic https://t.co/NIltwMB7KG",
    "time": "1:07 p.m."
  },
  {
    "text": "ALERT: Traffic incident on Mcknight Bv and 68 St NE, blocking the EB left lane.   #yyctraffic #yycroads https://t.co/GuxEJbDhnJ",
    "time": "12:57 p.m."
  },
  {
    "text": "ALERT: Traffic incident on NB Deerfoot Tr approaching Anderson Rd SE, blocking the middle lane.   #yyctraffic #yycroads https://t.co/1c0pbQRVmq",
    "time": "12:56 p.m."
  },
  {
    "text": "NB Deerfoot Tr at the Ivor Strong Bridge SE, Calgary - reports of an MVC. Expect delays. (12:52pm) #ABRoads #yyctraffic",
    "time": "12:52 p.m."
  },
  {
    "text": "In the Southeast, watch out for a crash on NB Deerfoot Trail at the Ivor Strong Bridge, blocking the right-hand through lane, expect delays #yyctraffic https://t.co/vQt26BRLuv",
    "time": "12:48 p.m."
  },
  {
    "text": "ALERT: Traffic incident on Scenic Acres Bv and Scenic Hill Cl NW.   #yyctraffic #yycroads",
    "time": "12:24 p.m."
  },
  {
    "text": "In the SE, SB 52nd Street and Copperfield Gate, there's a collision that is blocking the right lane. #yyctraffic #yycroads https://t.co/9CVYZrnpMl",
    "time": "8:23 a.m."
  },
  {
    "text": "ALERT: Traffic incident on Copperfield Ga and 52 St SE, blocking the SB right lane.   #yyctraffic #yycroads https://t.co/CpPntmc0ji",
    "time": "8:05 a.m."
  },
  {
    "text": "Good Morning! In the SW, the right lane is closed Crowchild Trail NB at 33rd Avenue. Expect delays. #yyctraffic #yycroads https://t.co/XcopbHAoJN",
    "time": "6:40 a.m."
  },
  {
    "text": "ALERT: Traffic incident on  15 Ave and 6 St SW.   #yyctraffic #yycroads",
    "time": "10:48 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  SB Sarcee Tr and Richmond Rd SW, blocking multiple lanes .   #yyctraffic #yycroads https://t.co/2LfUnJh2c3",
    "time": "10:35 p.m."
  },
  {
    "text": "ALERT: Traffic incident on 162 Ave and Somercrest St SW.   #yyctraffic #yycroads",
    "time": "7:56 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  EB McKnight Bv at 47 St NE, blocking the right lane.   #yyctraffic #yycroads https://t.co/qlisNNivEH",
    "time": "6:38 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  SB Deerfoot Tr at Beddington Tr NE, blocking the left lanes. Expect delays in the area. #yyctraffic #yycroads https://t.co/SMLxb4mH9V",
    "time": "6:35 p.m."
  },
  {
    "text": "ALERT: Traffic incident on 68 St and Abbeydale Dr NE. Expect delays in the area. #yyctraffic #yycroads",
    "time": "7:04 p.m."
  },
  {
    "text": "SB Deerfoot after 16 Ave NE, in Calgary - traffic incident, blocking the RH lane. (6:10pm) via @yyctransport #yyctraffic",
    "time": "6:11 p.m."
  },
  {
    "text": "ALERT: Traffic incident on SB Deerfoot after 16 Ave NE, blocking the right lane. Expect delays in the area. #yyctraffic #yycroads https://t.co/QUDDELXFr9",
    "time": "6:05 p.m."
  },
  {
    "text": "ALERT: Traffic incident on NB Deerfoot Tr after Glenmore Tr SE, blocking the left shoulder. Expect delays in the area. #yyctraffic #yycroads https://t.co/5u6LTY7ToW",
    "time": "5:40 p.m."
  },
  {
    "text": "In the Southeast, watch out for a crash on NB Deerfoot Trail just north of Glenmore Trail, blocking the left-hand lane #yyctraffic https://t.co/PRPpbptB1m",
    "time": "5:37 p.m."
  },
  {
    "text": "ALERT: Stalled vehicle on SB Deerfoot Tr approaching Peigan Tr SE, blocking the left lane. Expect delays in the area. #yyctraffic #yycroads https://t.co/yqxbMkCwVL",
    "time": "5:25 p.m."
  },
  {
    "text": "In the Southeast, watch out for a stalled truck on SB Deerfoot Trail just past 17th Avenue, blocking the left-hand lane, expect backups getting through there #yyctraffic https://t.co/VP50FsoQSG",
    "time": "5:22 p.m."
  },
  {
    "text": "ALERT: Stalled vehicle on EB Glenmore Tr after Macleod Tr SE, blocking the left lane. Expect delays in the area. #yyctraffic #yycroads https://t.co/udhIWas2dN",
    "time": "3:35 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  SB 52 St and 32 Ave NE.   #yyctraffic #yycroads https://t.co/DGe4q3Pmj6",
    "time": "11:35 a.m."
  },
  {
    "text": "ALERT: Traffic incident on  Falconridge Dr east of  Falconridge Bv NE.   #yyctraffic #yycroads",
    "time": "11:13 a.m."
  },
  {
    "text": "ALERT: Traffic incident on  44 St and 61 Ave SE.   #yyctraffic #yycroads",
    "time": "9:02 a.m."
  },
  {
    "text": "ALERT: Traffic incident on  Westwinds Dr and 40 St NE.   #yyctraffic #yycroads",
    "time": "8:28 a.m."
  },
  {
    "text": "ALERT: Traffic incident on  24 St and Oakfield Dr SW.   #yyctraffic #yycroads https://t.co/PcV0Nt1216",
    "time": "8:10 a.m."
  },
  {
    "text": "ALERT: Traffic incident on  34 St and 39 Ave NE.   #yyctraffic #yycroads",
    "time": "6:53 a.m."
  },
  {
    "text": "NB Deerfoot Tr near McKenzie Towne Blvd SE, Calgary - MVC. Expect delays in the area. (6:40am) #ABRoads #yyctraffic",
    "time": "6:40 a.m."
  },
  {
    "text": "ALERT: Traffic incident on  NB Deerfoot Tr approaching McKenzie Towne Bv SE.   #yyctraffic #yycroads",
    "time": "6:24 a.m."
  },
  {
    "text": "NB Deerfoot Tr near Country Hills Blvd NE, Calgary - MVC. Expect delays in the area. (5:21am) #ABRoads #yyctraffic",
    "time": "5:21 a.m."
  },
  {
    "text": "ALERT: Traffic incident on  NB Deerfoot Tr and Country Hills Bv NE.   #yyctraffic #yycroads",
    "time": "5:16 a.m."
  },
  {
    "text": "ALERT: Traffic incident on  144 Ave and Rocky ridge Rd NW.   #yyctraffic #yycroads",
    "time": "12:35 a.m."
  },
  {
    "text": "In the Northeast, watch out for a crash on EB Memorial Drive at 52nd Street, blocking all the lanes #yyctraffic https://t.co/PvhBDaA3z8",
    "time": "10:44 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  Memorial Dr and 52 St NE, the road is closed EB.   #yyctraffic #yycroads https://t.co/UohmrOBNk4",
    "time": "10:40 p.m."
  },
  {
    "text": "ALERT: Traffic incident on Crowchild Tr and Twelve Mile Coulee Rd NW.   #yyctraffic #yycroads",
    "time": "9:23 p.m."
  },
  {
    "text": "ALERT: Traffic incident on SB Metis Tr approaching 88 Ave NE, blocking the left lane.   #yyctraffic #yycroads https://t.co/0XCtWGY6OD",
    "time": "4:55 p.m."
  },
  {
    "text": "ALERT: Traffic incident on 12 Ave and 36 St SE.   #yyctraffic #yycroads",
    "time": "4:26 p.m."
  },
  {
    "text": "It's slow ride for Glenmore Trail.\n\nThe LHL is blocked on EB Glenmore at Blackfoot Trail SE\nThere's also a collision on WB Glenmore on the Centre St off-ramp. Expect delays! #yycroads #660roads https://t.co/MEpxNs0lDm",
    "time": "2:57 p.m."
  },
  {
    "text": "ALERT: Traffic incident on EB Glenmore Tr approaching Blackfoot Tr SE, blocking the left lane.   #yyctraffic #yycroads https://t.co/s14k5AKP4d",
    "time": "1:49 p.m."
  },
  {
    "text": "ALERT: Multi-vehicle incident on  WB Glenmore Tr approaching Centre St N, blocking the right lane.   #yyctraffic #yycroads https://t.co/4CVxTa3i8f",
    "time": "1:42 p.m."
  },
  {
    "text": "ALERT: Multi-vehicle incident on SB Deerfoot Tr at Glenmore Tr SE, blocking the right lane.   #yyctraffic #yycroads https://t.co/uVtpWzeJgM",
    "time": "1:13 p.m."
  },
  {
    "text": "SB Deerfoot Tr approaching Memorial Dr SE, Calgary - MVC. Expect delays. (1:11pm) #ABRoads #yyctraffic",
    "time": "1:11 p.m."
  },
  {
    "text": "ALERT: Traffic incident on SB Deerfoot Tr approaching Memorial Dr SE.   #yyctraffic #yycroads",
    "time": "1:08 p.m."
  },
  {
    "text": "ALERT: Traffic incident on McKnight Blvd and Edmonton Tr NE, blocking multi lanes.   #yyctraffic #yycroads https://t.co/J2T5du382Y",
    "time": "1:01 p.m."
  },
  {
    "text": "ALERT: Traffic incident on 23 St and 27 Ave NE.   #yyctraffic #yycroads",
    "time": "12:52 p.m."
  },
  {
    "text": "ALERT: Traffic incident on 17 Ave and 84 St SE.   #yyctraffic #yycroads",
    "time": "12:05 p.m."
  },
  {
    "text": "ALERT: Two vehicle incident on 4 Ave and 1 St SW, blocking multi lanes.   #yyctraffic #yycroads https://t.co/LG1dLghyaQ",
    "time": "11:55 a.m."
  },
  {
    "text": "ALERT: Traffic incident on Saddletowne Ci and Martindale Dr NE.   #yyctraffic #yycroads",
    "time": "11:03 a.m."
  },
  {
    "text": "ALERT: Traffic incident on EB Memorial Dr at Deerfoot Tr SE.   #yyctraffic #yycroads",
    "time": "10:12 a.m."
  },
  {
    "text": "ALERT: Two vehicle incident on NB Macleod Tr approaching Southland Dr SE, blocking the left lanes.   #yyctraffic #yycroads https://t.co/0gI2qEEtue",
    "time": "10:06 a.m."
  },
  {
    "text": "ALERT: Two vehicle incident on NB Crowchild Tr and Memorial Dr NW, blocking the left lanes.   #yyctraffic #yycroads https://t.co/VULFhS5I5Q",
    "time": "9:37 a.m."
  },
  {
    "text": "ALERT: Traffic signals work in progress on Bonaventure Dr and Lake Bonavista Dr SE (N Int), CPS is directing traffic.   #yyctraffic #yycroads",
    "time": "9:13 a.m."
  },
  {
    "text": "ALERT: Traffic incident on Shaganappi Tr and Kincora Ga NW.   #yyctraffic #yycroads",
    "time": "8:59 a.m."
  },
  {
    "text": "ALERT: Multi-vehicle incident on SB 14 St approaching 24 Ave NW, blocking the right lane.   #yyctraffic #yycroads https://t.co/eB75rPLZxz",
    "time": "8:35 a.m."
  },
  {
    "text": "ALERT: Traffic incident on Mount Royal Ga at Crowchild Tr SW, blocking the WB right lane.   #yyctraffic #yycroads https://t.co/IHkjiU1N1n",
    "time": "8:27 a.m."
  },
  {
    "text": "ALERT: Traffic incident on  NB 52 St at Madigan Dr NE, blocking the right lane.   #yyctraffic #yycroads https://t.co/QuDHdQTXux",
    "time": "2:53 p.m."
  },
  {
    "text": "NB Deerfoot Tr at Southland Dr SE, Calgary - MVC blocking the RHL. Expect delays in the area. (2:39pm) #ABRoads #yyctraffic",
    "time": "2:40 p.m."
  },
  {
    "text": "ALERT: Traffic incident on NB Deerfoot Tr at Southland Dr SE, blocking the right lane.   #yyctraffic #yycroads https://t.co/lt9IZyAzGK",
    "time": "2:33 p.m."
  },
  {
    "text": "SB Deerfoot Tr near Peigan Tr SE, Calgary - MVC blocking the LHL. Drive with caution in the area. (2:15pm) #ABRoads #yyctraffic",
    "time": "2:16 p.m."
  },
  {
    "text": "ALERT: Multi-vehicle incident on Barlow Tr and Peigan Tr SE, blocking multiple lanes.   #yyctraffic #yycroads https://t.co/YcIGuU11v5",
    "time": "1:57 p.m."
  },
  {
    "text": "ALERT: Traffic incident on SB Macleod Tr and 50 Ave SW, blocking the SB lanes.   #yyctraffic #yycroads https://t.co/xE3jXITnK4",
    "time": "1:50 p.m."
  },
  {
    "text": "SB Deerfoot Tr near 16 Ave NE, Calgary - MVC blocking the right shoulder. Expect delays. (1:27pm) #ABRoads #yyctraffic",
    "time": "1:28 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  EB Peigan Tr and Barlow Tr SE, blocking multiple lanes.   #yyctraffic #yycroads https://t.co/LZUhKH1ezu",
    "time": "1:26 p.m."
  },
  {
    "text": "ALERT: Multi-vehicle incident on  SB Deerfoot Tr and 16 Ave NE, blocking the right shoulder.   #yyctraffic #yycroads https://t.co/TTsq2GBGbb",
    "time": "1:22 p.m."
  },
  {
    "text": "52 St SE on-ramp to WB Stoney Tr, Calgary - MVC. Expect a lane closure and delays. (1:18pm) #ABRoads #yyctraffic",
    "time": "1:19 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  4 St and 25 Ave NW.   #yyctraffic #yycroads",
    "time": "12:41 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  Southland Dr and Fairmount Dr SE.   #yyctraffic #yycroads",
    "time": "12:30 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  McKnight Bv and John Laurie Bv NW.   #yyctraffic #yycroads",
    "time": "10:50 a.m."
  }
];