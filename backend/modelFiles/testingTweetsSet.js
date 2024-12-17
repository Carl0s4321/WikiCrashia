const tweets = [
  {
    "text": "ALERT: Traffic incident on  16 Ave and 19 St NW.   #yyctraffic #yycroads",
    "time": "6:00 p.m."
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
    "text": "ALERT:  Emergency services have been called to help a pedestrian involved in an incident on Harvest Hills Blvd at Beddington Tr NW. Please go slow and watch for fellow Calgarians.   #yyctraffic #yycroads",
    "time": "10:24 p.m."
  },
  {
    "text": "ALERT:  Emergency services are helping a pedestrian involved in an incident on 4 Ave at 6 St SW. Blocking the WB left lanes. Please go slow and watch for fellow Calgarians   #yyctraffic #yycroads https://t.co/jFAwCkUa7V",
    "time": "7:35 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  Anderson Rd and Elbow Dr SW.   #yyctraffic #yycroads",
    "time": "6:54 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  Stoney Tr and Country Hills Bv NE, the NB exit ramp is closed. Please use alternate route. #yyctraffic #yycroads https://t.co/KukqoEIILq",
    "time": "5:24 p.m."
  },
  {
    "text": "ALERT: Two vehicle incident on  Sarcee Tr and 17 Ave SW.   #yyctraffic #yycroads https://t.co/gqjVuUvzIV",
    "time": "5:06 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  SB Deerfoot Tr approaching Peigan Tr SE, blocking the right lane. Expect delays in the area. #yyctraffic #yycroads https://t.co/A3NAoCnJuw",
    "time": "4:58 p.m."
  },
  {
    "text": "NB Deerfoot Trail at Peigan Trail, Calgary, bridge repairs, Nov.4, 9pm-5am. Expect right hand lane closure and speed reduced to 50km/h. (4:40pm) #ABRoads #yyctraffic",
    "time": "4:40 p.m."
  },
  {
    "text": "SB Deerfoot Trail off Ramp to Peigan Trail, Calgary, bridge repairs, Nov.4, 9pm-5am. Expect right lane closure and speed reduced to 50km/h. (4:36pm) #ABRoads #yyctraffic",
    "time": "4:37 p.m."
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
    "text": "ALERT: Two vehicle incident on  NB Deerfoot Tr at 64 Ave NE, blocking the left lane. Expect delays in the area. #yyctraffic #yycroads https://t.co/4kElfONQbh",
    "time": "3:04 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  68 St and Memorial Dr E.   #yyctraffic #yycroads",
    "time": "1:55 p.m."
  },
  {
    "text": "ALERT: Two vehicle incident on  EB John Laurie Bv approaching Charleswood Dr NW, blocking the right lane.   #yyctraffic #yycroads https://t.co/VEIKYviwo9",
    "time": "1:53 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  9 Ave approaching 9 St SW, blocking the left lanes.   #yyctraffic #yycroads https://t.co/wpRzEiEdYq",
    "time": "1:46 p.m."
  },
  {
    "text": "SB Stoney Tr off-ramp to WB 96 Ave NE, Calgary - ramp CLOSED due to an MVC on 96 Ave. Use alternate route. (11:48am) #ABRoads #yyctraffic",
    "time": "11:48 a.m."
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
    "text": "ALERT: Traffic incident on Centre St and Mcknight Bv NE, blocking multiple lanes.   #yyctraffic #yycroads https://t.co/j6dyIb7uQ5",
    "time": "9:05 p.m."
  },
  {
    "text": "NB Deerfoot Tr at Calf Robe Bridge SE - MVC blocking the LH lane. Expect delays. (8:38pm) #ABRoads #yyctraffic",
    "time": "8:38 p.m."
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
    "text": "NB/SB Deerfoot Tr at Peigan Tr, SB Deerfoot Tr ramp to Peigan Tr - bridge repair work, Nov3-4, 9pm to 5am. Expect lane closures and a speed reduction to 50km/h. Drive with caution and watch for crews. #ABRoads #yyctraffic",
    "time": "7:00 p.m."
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
    "text": "ALERT:  Emergency services have been called to help a pedestrian involved in an incident on Zoo Rd and Memorial Dr NE. Blocking multiple lanes. Please go slow and watch for fellow Calgarians.   #yyctraffic #yycroads https://t.co/EEicVQ6sG5",
    "time": "5:13 p.m."
  },
  {
    "text": "ALERT:  Emergency services have been called to help a pedestrian involved in an incident on Prestwick Ga and 52 St SE. Blocking the SB left lane. Please go slow and watch for fellow Calgarians   #yyctraffic #yycroads https://t.co/rMKwiOA1jp",
    "time": "4:27 p.m."
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
    "text": "ALERT: Single vehicle incident on  NB Deerfoot Tr and Peigan Tr SE, blocking the left lane.   #yyctraffic #yycroads https://t.co/ijkTiVFkZ4",
    "time": "1:24 p.m."
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
    "text": "NB Deerfoot Tr at the Calf Robe Bridge SE, Calgary - MVC. Expect delays. (9:58am) #ABRoads #yyctraffic",
    "time": "9:58 a.m."
  },
  {
    "text": "ALERT: Multi-vehicle incident on  NB Deerfoot Tr and Calf Robe Bridge SE, blocking multiple lanes.   #yyctraffic #yycroads https://t.co/UGfV9sSfci",
    "time": "9:56 a.m."
  },
  {
    "text": "NB Deerfoot Tr north of 16Ave NE MVC. Drive with caution and expect delays. (10:30pm) #ABRoads #yyctraffic",
    "time": "10:31 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  NB Deerfoot Tr after 16 Ave NE, blocking the right lane.   #yyctraffic #yycroads https://t.co/4ynTcSXwlE",
    "time": "10:21 p.m."
  },
  {
    "text": "ALERT: Traffic incident on Stoney Tr and Chaparral Bv SE, blocking the WB to NB left lane.   #yyctraffic #yycroads https://t.co/4XuhihjDay",
    "time": "8:28 p.m."
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
    "text": "ALERT: Traffic incident on Deerfoot Tr and Mckenzie Lake Bv SE.   #yyctraffic #yycroads",
    "time": "8:12 p.m."
  },
  {
    "text": "ALERT:  Emergency services are helping a pedestrian involved in an incident on Mcleod Tr at 17 Ave SE. Blocking multiple lanes. Please go slow and watch for fellow Calgarians   #yyctraffic #yycroads https://t.co/AMmYDhRsL9",
    "time": "7:40 p.m."
  },
  {
    "text": "Due to this collision, all lanes of northbound Deerfoot Trail are closed at 212 Ave SE. They will reopen once the vehicles have been safely removed. #yyctraffic",
    "time": "6:59 p.m."
  },
  {
    "text": "ALERT: Traffic incident on 2 St and 6 Ave SW, blocking the WB lanes.   #yyctraffic #yycroads https://t.co/Fh8yCvUEb8",
    "time": "6:59 p.m."
  },
  {
    "text": "ALERT: Traffic incident on SB Deerfoot Tr and McKnight Blvd NE, blocking the right lane and the left lane of ramp.   #yyctraffic #yycroads https://t.co/braukYeSs5",
    "time": "6:47 p.m."
  },
  {
    "text": "ALERT: Two vehicle incident on SB Metis Tr after Country Hills Bv NE, blocking the left lane.   #yyctraffic #yycroads https://t.co/Y9uU00eWam",
    "time": "6:28 p.m."
  },
  {
    "text": "NB Deerfoot Tr approaching 212 Ave SE, MVC. Expect delays. (5:37pm) #ABRoads #yyctraffic",
    "time": "5:37 p.m."
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
    "text": "In the Southwest, watch out for a crash on EB Glenmore Trail approaching 14th Street, blocking the right-hand lane #yyctraffic https://t.co/1iseDccpwX",
    "time": "3:40 p.m."
  },
  {
    "text": "ALERT: Multi-vehicle incident on EB Glenmore Tr approaching 14 St SW, blocking the right lane.   #yyctraffic #yycroads https://t.co/uEsOTUyORr",
    "time": "3:38 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  Mahogany Ga east of 52 St SE.   #yyctraffic #yycroads",
    "time": "3:22 p.m."
  },
  {
    "text": "ALERT: Traffic incident on Bow Tr east of Sarcee Tr SW, blocking multiple lanes.  #yyctraffic #yycroads https://t.co/NktPcD4nNo",
    "time": "10:59 p.m."
  },
  {
    "text": "ALERT: Traffic incident on 17 Ave SE and 1 St SE, EB and WB closed. Please use alternate route. #yyctraffic #yycroads https://t.co/EkoV0vb4T5",
    "time": "9:06 p.m."
  },
  {
    "text": "A new sign at the Peace Bridge today indicating that the Bow River pathway is closed along Memorial Drive, in the red part. No mention of why or for how long but guessing it'll be for a couple weeks at least? Probably some landscaping/repairs or similar. \n\n#yyc #yyctraffic https://t.co/jUZFQJkluE",
    "time": "8:11 p.m."
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
    "text": "ALERT: Traffic incident on  NB Macleod Tr at 90 Ave SE, blocking the right lane.   #yyctraffic #yycroads https://t.co/izFZAQjfWQ",
    "time": "7:27 p.m."
  },
  {
    "text": "ALERT: Traffic incident on 40 Ave and 4 St NW.   #yyctraffic #yycroads",
    "time": "7:02 p.m."
  },
  {
    "text": "EB/WB 16Ave NE, east of Stoney Tr, guard rail repairs Nov1-2, from 10pm to 6am. LH lanes closed and speed reduced to 50 km/h. Drive with caution and watch for crews. #ABRoads #yyctraffic",
    "time": "7:00 p.m."
  },
  {
    "text": "ALERT: Traffic incident on SB Stoney Tr after 90 Ave SW.   #yyctraffic #yycroads",
    "time": "6:46 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  Bannister Rd and Midlake Bv SE.   #yyctraffic #yycroads",
    "time": "5:36 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  68 St north of McKnight Bv NE.   #yyctraffic #yycroads",
    "time": "5:14 p.m."
  },
  {
    "text": "The LHL is blocked on EB Glenmore approaching 14 St SW #yyctraffic #660roads https://t.co/zeDipKXsKF",
    "time": "5:11 p.m."
  },
  {
    "text": "ALERT: Two vehicle incident on EB Glenmore Tr approaching 14 St SW, blocking the left lane.   #yyctraffic #yycroads https://t.co/ZUmQLYR6yg",
    "time": "5:00 p.m."
  },
  {
    "text": "There's a multi-vehicle collision blocking the NB Macleod Trail lanes at 99 Ave SE. Detour is in place, expect delays #yyctraffic #660roads https://t.co/8rBH0I8Gtr",
    "time": "4:49 p.m."
  },
  {
    "text": "ALERT: Multi-vehicle incident on NB Macleod Tr and 99 Ave SE, NB is closed.   #yyctraffic #yycroads https://t.co/JlRn0dSlWs",
    "time": "4:37 p.m."
  },
  {
    "text": "ALERT: Two vehicle incident on  64 Ave and Deerfoot Tr NE, partially blocking the WB to NB exit .   #yyctraffic #yycroads https://t.co/qByD00iXkL",
    "time": "4:35 p.m."
  },
  {
    "text": "SB Deerfoot Tr at Southland Dr SE, MVC blocking the RH lane. Drive with caution and expect delays. (4:11pm) #ABRoads #yyctraffic",
    "time": "4:11 p.m."
  },
  {
    "text": "ALERT: Multi-vehicle incident on SB Deerfoot Tr and Southland Dr SE, blocking the right lane.   #yyctraffic #yycroads https://t.co/M0jF5GBu8G",
    "time": "4:09 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  Heritage Dr and Fairmount Dr SE.   #yyctraffic #yycroads",
    "time": "4:04 p.m."
  },
  {
    "text": "ALERT: Two vehicle incident on  NB Crowchild Tr and Bow Tr SW, blocking the merge lane.   #yyctraffic #yycroads https://t.co/JPzg4oreFp",
    "time": "10:16 a.m."
  },
  {
    "text": "ALERT: Traffic incident on Northmount Dr and 19 St NW. Expect delays in the area. #yyctraffic #yycroads",
    "time": "10:16 a.m."
  },
  {
    "text": "ALERT: Traffic incident on WB Memorial Dr at Deerfoot Tr SE, blocking multiple lanes.   #yyctraffic #yycroads https://t.co/TpvstJWQgz",
    "time": "10:11 a.m."
  },
  {
    "text": "ALERT: Traffic incident on EB Stoney Tr after Harvest Hills Bv N, blocking the left lane. Please drive with caution. #yyctraffic #yycroads https://t.co/Ojrme4WqER",
    "time": "11:01 a.m."
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
    "text": "In the Northwest, watch out for a crash on Shaganappi Trail at Country Hills Blvd, blocking the middle of the intersection #yyctraffic https://t.co/ErGbC9d8Y0",
    "time": "1:10 p.m."
  },
  {
    "text": "ALERT: Two vehicle incident on SB Shaganappi Tr at Country Hills Bv NW, blocking multiple lanes in the intersection. Please drive with caution. #yyctraffic #yycroads https://t.co/tY64GilSQe",
    "time": "1:07 p.m."
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
    "text": "NB Stoney Trail at 17th Ave, in Calgary - MVC, blocking the RH lane. (2:36pm) via @NewsRadioCGY #yyctraffic #ABRoads",
    "time": "2:37 p.m."
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
    "text": "In the Southeast, watch out for a crash on EB Glenmore Trail at the Graves Bridge east of Deerfoot Trail, blocking the left-hand and right-hand lanes #yyctraffic https://t.co/yv2j9Nso9g",
    "time": "4:09 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  EB Glenmore Tr and 18 St SE, blocking the right lane.   #yyctraffic #yycroads https://t.co/23OPQpPlFC",
    "time": "4:05 p.m."
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
    "text": "ALERT: Traffic incident on  EB Glenmore Tr and Barlow Tr SE, blocking multiple lanes.   #yyctraffic #yycroads https://t.co/QebhOj5gPU",
    "time": "6:03 p.m."
  },
  {
    "text": "In the Northeast, watch out for a crash on SB 36th Street at 4th Avenue, blocking the right-hand lane #yyctraffic https://t.co/Qej8UccmhP",
    "time": "5:50 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  SB 36 St and 4 Ave NE.   #yyctraffic #yycroads https://t.co/nNsHQnLBDV",
    "time": "5:48 p.m."
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
    "text": "ALERT: Traffic incident on  Mcknight Bv and 4 St NW.   #yyctraffic #yycroads",
    "time": "8:39 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  Tuscany Bv and Scenic Acres Li NW.   #yyctraffic #yycroads",
    "time": "8:38 p.m."
  },
  {
    "text": "ALERT:  Emergency services are helping a pedestrian involved in an incident on 17 Ave and 5a St SW. all lanes are currently blocked. Please go slow and watch for fellow Calgarians   #yyctraffic #yycroads https://t.co/oIA6XdfaZ6",
    "time": "8:37 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  NB 52 St and Temple Dr NE.   #yyctraffic #yycroads https://t.co/bCwAhXQcXB",
    "time": "7:50 p.m."
  },
  {
    "text": "ALERT: Traffic incident on  SB 14 St and 24 Ave NW, blocking the right lane.   #yyctraffic #yycroads https://t.co/jxSO4CAq4O",
    "time": "6:45 p.m."
  }
];