var ETime = [
//backup 1
    {"stopnum": 1, "time":2},
    {"stopnum": 2, "time":1},
    {"stopnum": 3, "time":1},
    {"stopnum": 4, "time":0.5 },
    {"stopnum": 5, "time":0.5},
    {"stopnum": 6, "time":0.5 },
    {"stopnum": 7, "time": 1.5},
    {"stopnum": 8, "time": 1},
    {"stopnum": 9, "time": 0.5},
    {"stopnum": 10, "time": 0.5},
    {"stopnum": 11, "time": 0.5}, //these two might be dup, gonna merge them together
    {"stopnum": 12, "time": 0.5},
    {"stopnum": 13, "time": 0.5},//make special case for these two timeer
    {"stopnum": 14, "time": 2},
    {"stopnum": 15, "time": 0.5},
    {"stopnum": 16, "time": 0.5},
    {"stopnum": 17, "time": 1},
    {"stopnum": 18, "time": 1},
    {"stopnum": 19, "time": 1},
    {"stopnum": 20, "time": 0.5},//46.752523, -117.161569
    {"stopnum": 21, "time": 0.5},
    {"stopnum": 22, "time": 0.5},
    {"stopnum": 23, "time": 0.5},
    {"stopnum": 24, "time": 3},
    {"stopnum": 25, "time": 0.5},
    {"stopnum": 26, "time": 0.5},
    {"stopnum": 27, "time": 0.5},
    {"stopnum": 28, "time": 0.5},
    {"stopnum": 29, "time": 0.5},
    {"stopnum": 30, "time": 1},
    {"stopnum": 31, "time": 1},
    {"stopnum": 32, "time": 1},
    {"stopnum": 33, "time": 3},
    {"stopnum": 34, "time": 0.5},
    {"stopnum": 35, "time": 0.5},
    {"stopnum": 36, "time": 0.5},
    {"stopnum": 37, "time": 1},
    {"stopnum": 38, "time": 1},
    {"stopnum": 39, "time": 1},
    {"stopnum": 40, "time": 1},
    {"stopnum": 41, "time": 12},
];

var ITime = [
    {"stopnum": 1, "time": 2,  "stopname": "Transfer Station"},
    {"stopnum": 2, "time": 1,  "stopname": "Golden Hills"},
    {"stopnum": 3, "time": 1,  "stopname": "Davis & Estates"},
    {"stopnum": 4, "time": 0.5,  "stopname": "Davis and Cory Ln."},
    {"stopnum": 5, "time": 0.5,  "stopname": "Davis & Parkwest"},
    {"stopnum": 6, "time": 1, "stopname": "Big Sky Court"},
    {"stopnum": 7, "time": 1,  "stopname": "Whispering Hills"},
    {"stopnum": 8, "time": 1,  "stopname": "Wawawai And Marcia"},
    {"stopnum": 9, "time": 1, "stopname": "Sunnyside Park"},
    {"stopnum": 10, "time": 0.5, "stopname": "Main And Cedar"},
    {"stopnum": 11, "time": 0.5, "stopname": "Main & Spruce"}, //these two might be dup, gonna merge them together
    {"stopnum": 12, "time": 0.5, "stopname": "Arbor & Main"},
    {"stopnum": 13, "time": 0.5, "stopname": "Arbor & Blaine"},//make special case for these two timeer
    {"stopnum": 14, "time": 0.5, "stopname": "Sunnyside Elem."},
    {"stopnum": 15, "time": 0.5, "stopname": "Fountain & Skyline"},
    {"stopnum": 16, "time": 1, "stopname": "Fountain & Center"},
    {"stopnum": 17, "time": 1, "stopname": "Cityview & James"},
    {"stopnum": 18, "time": 1, "stopname": "Fountain & Crestview"},
    {"stopnum": 19, "time": 1, "stopname": "Crestview & Staley"},
    {"stopnum": 20, "time": 0.5, "stopname": "Crestview & Grand"},//46.752523, -117.161569
    {"stopnum": 21, "time": 0.5, "stopname": "Grand & Estates"},
    {"stopnum": 22, "time": 1, "stopname": "Dairy Queen"},
    {"stopnum": 23, "time": 0.33, "stopname": "Wheatland Center on Fairmont"},
    {"stopnum": 24, "time": 0.33, "stopname": "Community Action"},
    {"stopnum": 25, "time": 0.33, "stopname": "Walmart"},
    {"stopnum": 26, "time": 1, "stopname": "Bishop @ Harvest"},
    {"stopnum": 27, "time": 0.33, "stopname": "Bishop @ Hospital"},
    {"stopnum": 28, "time": 0.33, "stopname": "Bishop @ Summit"},
    {"stopnum": 29, "time": 0.33, "stopname": "Bishop @ Cinemas"},
    {"stopnum": 30, "time": 0.5, "stopname": "Bishop @ Pro Mall"},
    {"stopnum": 31, "time": 0.5, "stopname": "Bishop & Bleasner"},
    {"stopnum": 32, "time": 1, "stopname": "Sunset Mart"},
    {"stopnum": 33, "time": 0.5, "stopname": "Main & Stadium"},
    {"stopnum": 34, "time": 0.5, "stopname": "Stephenson Hall"},
    {"stopnum": 35, "time": 1, "stopname": "Bustad Hall"},
    {"stopnum": 36, "time": 1, "stopname": "Bio-Sciecnes"},
    {"stopnum": 37, "time": 1, "stopname": "Stadium & N. Fairway"},
    {"stopnum": 38, "time": 2, "stopname": "Cougar Way @ Regents"},
    {"stopnum": 39, "time": 1, "stopname": "Colorado & Opal"},
    {"stopnum": 40, "time": 0.5, "stopname": "Maiden & Spaulding"},
    {"stopnum": 41, "time": 0.5, "stopname": "Whitman & Kamiaken"},
    {"stopnum": 42, "time": 14, "stopname": "Neil Library"},
]



var South = [ 
    {"stopnum": 1, "time": 1, "stopname": "Porch Light"},
    {"stopnum": 2, "time": 1, "stopname": "Whiteman & Maple"},
    {"stopnum": 3, "time": 1, "stopname": "Maiden & Spauling"},
    {"stopnum": 4, "time": 1, "stopname": "Campus & Opal"},
    {"stopnum": 5, "time": 1, "stopname": "Campus & Spokane"},
    {"stopnum": 6, "time": 1, "stopname": "Campus & Thatuna"},
    {"stopnum": 7, "time": 1, "stopname": "Bohler Gyms"},
    {"stopnum": 8, "time": 1, "stopname": "Orchard @ Beasley"},
    {"stopnum": 9, "time": 1, "stopname": "Bailey Brayton"},
    {"stopnum": 10, "time":1 , "stopname": "Rec Center"},
    {"stopnum": 11, "time": 0.33 , "stopname": "N. Fairway & Terre V."}, //these two might be dup, gonna merge them together
    {"stopnum": 12, "time": 0.33, "stopname": "Northwood Manor"},
    {"stopnum": 13, "time": 0.33, "stopname": "Aspen Village"},//make special case for these two later
    {"stopnum": 14, "time": 1, "stopname": "Maple Valley"},
    {"stopnum": 15, "time": 1, "stopname": "Birch Hills"},
    {"stopnum": 16, "time": 1, "stopname": "Cougar Crest"},
    {"stopnum": 17, "time": 1, "stopname": "College Crest"},
    {"stopnum": 18, "time": 1, "stopname": "Merman & Terre View"},
    {"stopnum": 19, "time": 0.5, "stopname": "Merman & Valley"},
    {"stopnum": 20, "time": 0.5, "stopname": "Valley & Merman"},
    {"stopnum": 21, "time": 0.5, "stopname": "Valley & Orchard"},
    {"stopnum": 22, "time": 0.5, "stopname": "Rec Center"},
    {"stopnum": 23, "time": 2, "stopname": "Orchard @ Beasley"},
    {"stopnum": 24, "time": 1, "stopname": "Flag Lane"},
    {"stopnum": 25, "time": 1, "stopname": "Martin Stadium"},
    {"stopnum": 26, "time": 2, "stopname": "Troy Lane"},
    {"stopnum": 27, "time": 0.5, "stopname": "Bishop & Latah"},
    {"stopnum": 28, "time": 0.5, "stopname": "Bishop @ Bleasner"},
    {"stopnum": 29, "time": 0.5, "stopname": "Bishop @ Pro mall"},
    {"stopnum": 30, "time": 0.5, "stopname": "Crimson & Grey"},
    {"stopnum": 31, "time": 0.5, "stopname": "Bishop & Summit"},
    {"stopnum": 32, "time": 0.5, "stopname": "Bishop & Footloose"},
    {"stopnum": 33, "time": 1, "stopname": "Bishop & Zeppoz"},
    {"stopnum": 34, "time": 2, "stopname": "Bishop & Harvest"},
    {"stopnum": 35, "time": 0.5, "stopname": "Bishop @ Safeway"},
    {"stopnum": 36, "time": 0.5, "stopname": "Grand @ Shopko"},
    {"stopnum": 37, "time": 1, "stopname": "Grand & Crestview"},
    {"stopnum": 38, "time": 0, "stopname": "Jins Mart"},
    {"stopnum": 39, "time": 0, "stopname": "Thai Ginger"},
    ]

//Saturday Route 
var NorthTime = [
    {"stopnum": 1, "time": 2, "stopname": "Campus & Thatuna"},
    {"stopnum": 2, "time": 1, "stopname": "Colorado @ Gyms"},
    {"stopnum": 3, "time": 1, "stopname": "Orchard @ Beasley"},
    {"stopnum": 4, "time": 0.5, "stopname": "Rec. Center"},
    {"stopnum": 5, "time": 0.5, "stopname": "Valley & Orchard"},
    {"stopnum": 6, "time": 1, "stopname": "Valley & Merman"},
    {"stopnum": 7, "time": 1, "stopname": "Merman & Terre View"},
    {"stopnum": 8, "time": 0.5, "stopname": "Cougar Crest"},
    {"stopnum": 9, "time": 0.5, "stopname": "Pine Ridge"},
    {"stopnum": 10, "time": 1, "stopname": "Birch Hill"},
    {"stopnum": 11, "time": 0.5, "stopname": "Maple Valley"},
    {"stopnum": 12, "time": 0.5, "stopname": "Aspen Village"},
    {"stopnum": 13, "time": 0.5, "stopname": "Cougar Ridge"},
    {"stopnum": 14, "time": 0.5, "stopname": "Terre View & Merman"},
    {"stopnum": 15, "time": 1, "stopname": "Terre View & CCN"},
    {"stopnum": 16, "time": 0.5, "stopname" : "Research Park"},
    {"stopnum": 17, "time": 0.5, "stopname": "Schweitzer"},
    {"stopnum": 18, "time": 0.5, "stopname": "Schweitzer Mfg."},
    {"stopnum": 19, "time": 0.5, "stopname": "Hopkins Court"},//46.752523, -117.161569
    {"stopnum": 20, "time": 0.5, "stopname": "Science Center"},
    {"stopnum": 21, "time": 0.5, "stopname": "Hopkins @ Amplicon"},
    {"stopnum": 22, "time": 1, "stopname": "Palouse Trace Apts."},
    {"stopnum": 23, "time": 0.5, "stopname": "Terre View & Brandi"},
    {"stopnum": 24, "time": 0.5, "stopname": "Terre View @ CSS"},
    {"stopnum": 25, "time": 0.5, "stopname": "Merman & Valley"},
    {"stopnum": 26, "time": 0.5, "stopname": "Emerald Downs"},
    {"stopnum": 27, "time": 0.5, "stopname": "Providence Court"},
    {"stopnum": 28, "time": 0.5, "stopname": "Stadium @ McDonalds"},
    {"stopnum": 29, "time": 2, "stopname": "Jack in the Box"},
    {"stopnum": 30, "time": 0.5, "stopname": "Larry & Friel"},
    {"stopnum": 31, "time": 0.5, "stopname": "Larry & Turner"},
    {"stopnum": 32, "time": 0.5, "stopname": "Aquatic Center"},
    {"stopnum": 33, "time": 0.5, "stopname": "Hall & Orion"},
    {"stopnum": 34, "time": 0.5, "stopname": "Janet & State"},
    {"stopnum": 35, "time": 0.5, "stopname": "State & Timothy"},
    {"stopnum": 36, "time": 1, "stopname": "State & True"},
    {"stopnum": 37, "time": 1, "stopname": "Dissmores"},
    {"stopnum": 38, "time": 0.5, "stopname": "Stadium @ Starbucks"},
    {"stopnum": 39, "time": 0.5, "stopname": "Harvey Duncan"},
    {"stopnum": 40, "time": 1, "stopname": "Stadium & Colorado"},
    {"stopnum": 41, "time": 0.5, "stopname": "Stadium & Flag Ln."},
    {"stopnum": 42, "time": 0.5, "stopname": "Martin Stadium"},
    {"stopnum": 43, "time": 2, "stopname": "Troy Lane"},
    {"stopnum": 44, "time": 1, "stopname": "Spokane & Washington"},
    {"stopnum": 45, "time": 1, "stopname": "Spokane & College"},
    {"stopnum": 46, "time": 12, "stopname": "Honors Hall"},
    ]

exports.ETime = ETime
exports.ITime = ITime
exports.South = South
exports.NorthTime = NorthTime