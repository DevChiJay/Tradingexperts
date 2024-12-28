"use client";
import { useEffect, useState } from "react";

// Static Data
const listNames = [
  "Aaran",
  "Aaren",
  "Aarez",
  "Aarman",
  "Aaron",
  "Abaan",
  "Abbas",
  "Abdallah",
  "Abdalroof",
  "Abdihakim",
  "Abdirahman",
  "Abdisalam",
  "Abdul",
  "Abdul-Aziz",
  "Abdulbasir",
  "Abdulkadir",
  "Abdulkarem",
  "Abdulkhader",
  "Abdullah",
  "Abdul-Majeed",
  "Abdulmalik",
  "Abdul-Rehman",
  "Abdur",
  "Alvin",
  "Alyas",
  "Amaan",
  "Aman",
  "Amani",
  "Ambanimoh",
  "Ameer",
  "Amgad",
  "Ami",
  "Amin",
  "Amir",
  "Ammaar",
  "Ammar",
  "Ammer",
  "Amolpreet",
  "Amos",
  "Amrinder",
  "Amrit",
  "Amro",
  "Anay",
  "Andrea",
  "Anis",
  "Anish",
  "Anmolpreet",
  "Annan",
  "Anndra",
  "Anselm",
  "Anthony",
  "Anthony-John",
  "Antoine",
  "Anton",
  "Antoni",
  "Antonio",
  "Antony",
  "Arihant",
  "Arjuna",
  "Arlo",
  "Armaan",
  "Arman",
  "Armen",
  "Arnab",
  "Arnav",
  "Arnold",
  "Asim",
  "Aslam",
  "Asrar",
  "Ata",
  "Atal",
  "Atapattu",
  "Ateeq",
  "Athol",
  "Athon",
  "Athos-Carlos",
  "Atli",
  "Atom",
  "Ayan",
  "Aydan",
  "Ayden",
  "Aydin",
  "Aydon",
  "Ayman",
  "Ayomide",
  "Ayren",
  "Ayrton",
  "Aytug",
  "Ayub",
  "Ayyub",
  "Azaan",
  "Azedine",
  "Azeem",
  "Azim",
  "Aziz",
  "Azlan",
  "Azzam",
  "Azzedine",
  "Babatunmise",
  "Babur",
  "Bader",
  "Badr",
  "Badsha",
  "Bailee",
  "Barry",
  "Bartlomiej",
  "Bartosz",
  "Basher",
  "Basile",
  "Baxter",
  "Baye",
  "Bayley",
  "Beau",
  "Beinn",
  "Bekim",
  "Believe",
  "Ben",
  "Bendeguz",
  "Benedict",
  "Benjamin",
  "Benjamyn",
  "Benji",
  "Benn",
  "Bennett",
  "Benny",
  "Benoit",
  "Bentley",
  "Blaire",
  "Blake",
  "Blazej",
  "Blazey",
  "Blessing",
  "Blue",
  "Blyth",
  "Bo",
  "Boab",
  "Bob",
  "Bobby",
  "Bobby-Lee",
  "Bodhan",
  "Boedyn",
  "Bogdan",
  "Bohbi",
  "Bony",
  "Bowen",
  "Bowie",
  "Boyd",
  "Bracken",
  "Brad",
  "Bradan",
  "Braden",
  "Bradley",
  "Bradlie",
  "Bradly",
  "Brady",
  "Bradyn",
  "Braeden",
  "Braiden",
  "Brendon",
  "Brendyn",
  "Breogan",
  "Bret",
  "Brett",
  "Briaddon",
  "Brian",
  "Brodi",
  "Brodie",
  "Brody",
  "Brogan",
  "Broghan",
  "Brydon-Craig",
  "Bryn",
  "Brynmor",
  "Bryson",
  "Buddy",
  "Bully",
  "Burak",
  "Burhan",
  "Butali",
  "Butchi",
  "Byron",
  "Cabhan",
  "Caiden",
  "Caiden-Paul",
  "Caidyn",
  "Caie",
  "Cailaen",
  "Cailean",
  "Caileb-John",
  "Cailin",
  "Cain",
  "Caine",
  "Cairn",
  "Cal",
  "Calan",
  "Calder",
  "Cale",
  "Calean",
  "Caleb",
  "Calen",
  "Caley",
  "Calib",
  "Calin",
  "Callahan",
  "Callan",
  "Callan-Adam",
  "Calley",
  "Callie",
  "Callin",
  "Callum",
  "Callun",
  "Callyn",
  "Calum",
  "Calum-James",
  "Calvin",
  "Cambell",
  "Camerin",
  "Cameron",
  "Campbel",
  "Campbell",
  "Camron",
  "Cator",
  "Cavan",
  "Cayden",
  "Cayden-Robert",
  "Cayden-Tiamo",
  "Ceejay",
  "Ceilan",
  "Ceiran",
  "Ceirin",
  "Ceiron",
  "Cejay",
  "Celik",
  "Cephas",
  "Cesar",
  "Cesare",
  "Chad",
  "Chaitanya",
  "Chang-Ha",
  "Charles",
  "Charley",
  "Charlie",
  "Charly",
  "Chase",
  "Che",
  "Chester",
  "Chevy",
  "Chi",
  "Chibudom",
  "Chidera",
  "Chimsom",
  "Cian",
  "Ciann",
  "Ciar",
  "Ciaran",
  "Ciarian",
  "Cieran",
  "Cillian",
  "Cillin",
  "Cinar",
  "CJ",
  "C-Jay",
  "Clark",
  "Clarke",
  "Clayton",
  "Clement",
  "Clifford",
  "Clyde",
  "Cobain",
  "Coban",
  "Coben",
  "Cobi",
  "Cobie",
  "Coby",
  "Codey",
  "Codi",
  "Codie",
  "Cody",
  "Cody-Lee",
  "Coel",
  "Cohan",
  "Cohen",
  "Colby",
  "Cole",
  "Colin",
  "Coll",
  "Colm",
  "Colt",
  "Colton",
  "Colum",
  "Colvin",
  "Comghan",
  "Conal",
  "Conall",
  "Conan",
  "Conar",
  "Conghaile",
  "Conlan",
  "Conley",
  "Conli",
  "Conlin",
  "Conlly",
  "Conlon",
  "Conlyn",
  "Connal",
  "Connall",
  "Connan",
  "Connar",
  "Connel",
  "Connell",
  "Conner",
  "Connolly",
  "Connor",
  "Connor-David",
  "Conor",
  "Conrad",
  "Cooper",
  "Copeland",
  "Coray",
  "Corben",
  "Corbin",
  "Corey",
  "Corey-James",
  "Corey-Jay",
  "Cori",
  "Corie",
  "Corin",
  "Cormac",
  "Cormack",
  "Cormak",
  "Corran",
  "Corrie",
  "Cory",
  "Cosmo",
  "Coupar",
  "Craig",
  "Craig-James",
  "Crawford",
  "Creag",
  "Crispin",
  "Cristian",
  "Crombie",
  "Cruiz",
  "Cruz",
  "Cuillin",
  "Cullen",
  "Cullin",
  "Curtis",
  "Cyrus",
  "Daanyaal",
  "Daegan",
  "Daegyu",
  "Dafydd",
  "Dagon",
  "Dailey",
  "Daimhin",
  "Daithi",
  "Dakota",
  "Daksh",
  "Dale",
  "Dalong",
  "Dalton",
  "Damian",
  "Damien",
  "Damon",
  "Dan",
  "Danar",
  "Dane",
  "Danial",
  "Daniel",
  "Daniele",
  "Daniel-James",
  "Daniels",
  "Daniil",
  "Danish",
  "Daniyal",
  "Danniel",
  "Danny",
  "Dante",
  "Danyal",
  "Danyil",
  "Danys",
  "Daood",
  "Dara",
  "Darach",
  "Daragh",
  "Darcy",
  "D'arcy",
  "Dareh",
  "Daren",
  "Darien",
  "Darius",
  "Darl",
  "Darn",
  "Darrach",
  "Darragh",
  "Darrel",
  "Darrell",
  "Darren",
  "Darrie",
  "Darrius",
  "Darroch",
  "Darryl",
  "Darryn",
  "Darwyn",
  "Daryl",
  "Daryn",
  "Daud",
  "Daumantas",
  "Davi",
  "David",
  "David-Jay",
  "David-Lee",
  "Davie",
  "Davis",
  "Davy",
  "Dawid",
  "Dawson",
  "Dawud",
  "Dayem",
  "Daymian",
  "Deacon",
  "Deagan",
  "Dean",
  "Dennan",
  "Dennin",
  "Dennis",
  "Denny",
  "Dennys",
  "Denon",
  "Denton",
  "Denver",
  "Denzel",
  "Deon",
  "Derek",
  "Derick",
  "Derin",
  "Dermot",
  "Derren",
  "Derrie",
  "Derrin",
  "Derron",
  "Dex",
  "Dexter",
  "Dhani",
  "Dharam",
  "Dhavid",
  "Dhyia",
  "Diarmaid",
  "Diarmid",
  "Diarmuid",
  "Didier",
  "Diego",
  "Diesel",
  "Diesil",
  "Digby",
  "Dilan",
  "Dilano",
  "Dillan",
  "Dillon",
  "Dilraj",
  "Dimitri",
  "Dinaras",
  "Dion",
  "Dissanayake",
  "Dmitri",
  "Doire",
  "Dolan",
  "Domanic",
  "Domenico",
  "Domhnall",
  "Dominic",
  "Dominick",
  "Dominik",
  "Donald",
  "Donnacha",
  "Donnie",
  "Dorian",
  "Dougal",
  "Douglas",
  "Dougray",
  "Drakeo",
  "Dre",
  "Dregan",
  "Drew",
  "Dugald",
  "Duncan",
  "Duriel",
  "Dustin",
  "Dylan",
  "Dylan-Jack",
  "Dylan-James",
  "Dylan-John",
  "Dylan-Patrick",
  "Dylin",
  "Dyllan",
  "Dyllan-James",
  "Dyllon",
  "Eadie",
  "Eagann",
  "Eamon",
  "Eamonn",
  "Eason",
  "Eassan",
  "Easton",
  "Ebow",
  "Ed",
  "Eddie",
  "Eden",
  "Ediomi",
  "Edison",
  "Eduardo",
  "Eduards",
  "Edward",
  "Edwin",
  "Edwyn",
  "Eesa",
  "Efan",
  "Efe",
  "Ege",
  "Ehsan",
  "Ehsen",
  "Eiddon",
  "Eidhan",
  "Eihli",
  "Eimantas",
  "Eisa",
  "Eli",
  "Elias",
  "Elijah",
  "Eliot",
  "Elisau",
  "Eljay",
  "Eljon",
  "Elliot",
  "Elliott",
  "Ellis",
  "Ellisandro",
  "Elshan",
  "Elvin",
  "Elyan",
  "Emanuel",
  "Emerson",
  "Emil",
  "Emile",
  "Emir",
  "Emlyn",
  "Emmanuel",
  "Emmet",
  "Eng",
  "Eniola",
  "Enis",
  "Ennis",
  "Enrico",
  "Enrique",
  "Enzo",
  "Eoghain",
  "Eoghan",
  "Eoin",
  "Eonan",
  "Erdehan",
  "Eren",
  "Erencem",
  "Eric",
  "Ericlee",
  "Erik",
  "Eriz",
  "Ernie-Jacks",
  "Eroni",
  "Eryk",
  "Eshan",
  "Essa",
  "Esteban",
  "Ethan",
  "Etienne",
  "Etinosa",
  "Euan",
  "Eugene",
  "Evan",
  "Evann",
  "Ewan",
  "Ewen",
  "Ewing",
  "Exodi",
  "Ezekiel",
  "Ezra",
  "Fabian",
  "Fahad",
  "Faheem",
  "Faisal",
  "Faizaan",
  "Famara",
  "Fares",
  "Farhaan",
  "Farhan",
  "Farren",
  "Farzad",
  "Fauzaan",
  "Favour",
  "Fawaz",
  "Fawkes",
  "Faysal",
  "Fearghus",
  "Feden",
  "Felix",
  "Fergal",
  "Fergie",
  "Fergus",
  "Ferre",
  "Fezaan",
  "Fiachra",
  "Fikret",
  "Filip",
  "Filippo",
  "Finan",
  "Findlay",
  "Findlay-James",
  "Findlie",
  "Finlay",
  "Finley",
  "Finn",
  "Finnlay",
  "Finnley",
  "Fintan",
  "Fionn",
  "Firaaz",
  "Fletcher",
  "Flint",
  "Florin",
  "Garren",
  "Garrett",
  "Garry",
  "Gary",
  "Gavin",
  "Gavin-Lee",
  "Gene",
  "Geoff",
  "Geoffrey",
  "Geomer",
  "Geordan",
  "Geordie",
  "George",
  "Georgia",
  "Georgy",
  "Gerard",
  "Ghyll",
  "Giacomo",
  "Gian",
  "Giancarlo",
  "Gianluca",
  "Gianmarco",
  "Gideon",
  "Gil",
  "Gio",
  "Girijan",
  "Girius",
  "Gjan",
  "Glascott",
  "Glen",
  "Glenn",
  "Gordon",
  "Grady",
  "Graeme",
  "Graham",
  "Grahame",
  "Grant",
  "Harley",
  "Harman",
  "Harnek",
  "Harold",
  "Haroon",
  "Harper",
  "Harri",
  "Harrington",
  "Harris",
  "Harrison",
  "Harry",
  "Harvey",
  "Harvie",
  "Harvinder",
  "Hasan",
  "Haseeb",
  "Hashem",
  "Hashim",
  "Hassan",
  "Hassanali",
  "Hately",
  "Havila",
  "Hayden",
  "Haydn",
  "Haydon",
  "Haydyn",
  "Hcen",
  "Hector",
  "Heddle",
  "Heidar",
  "Heini",
  "Hendri",
  "Isaa",
  "Isaac",
  "Isaiah",
  "Isak",
  "Isher",
  "Ishwar",
  "Isimeli",
  "Isira",
  "Ismaeel",
  "Ismail",
  "Jaay",
  "Jac",
  "Jace",
  "Jack",
  "Jacki",
  "Jackie",
  "Jack-James",
  "Jackson",
  "Jacky",
  "Jacob",
  "Jacques",
  "Jad",
  "Jaden",
  "Jadon",
  "Jadyn",
  "Jules",
  "Julian",
  "Julien",
  "Jun",
  "Junior",
  "Jura",
  "Justan",
  "Justin",
  "Justinas",
  "Kaan",
  "Kabeer",
  "Kabir",
  "Kacey",
  "Kacper",
  "Kade",
  "Kaden",
  "Kadin",
  "Kadyn",
  "Kaeden",
  "Kael",
  "Kaelan",
  "Kaelin",
  "Kaelum",
  "Kai",
  "Kaid",
  "Kaidan",
  "Luciano",
  "Lucien",
  "Lucus",
  "Luic",
  "Luis",
  "Luk",
  "Luka",
  "Lukas",
  "Lukasz",
  "Luke",
  "Lukmaan",
  "Luqman",
  "Lyall",
  "Lyle",
  "Lyndsay",
  "Lysander",
  "Maanav",
  "Maaz",
  "Mac",
  "Macallum",
  "Macaulay",
  "Macauley",
  "Macaully",
  "Machlan",
  "Maciej",
  "Mack",
  "Mackenzie",
  "Mackenzy",
  "Mackie",
  "Macsen",
  "Macy",
  "Zijie",
  "Zinedine",
  "Zion",
  "Zishan",
  "Ziya",
  "Ziyaan",
  "Zohaib",
  "Zohair",
  "Zoubaeir",
  "Zubair",
  "Zubayr",
];
const listPlans = [
  "$750.40",
  "$51.23",
  "$157.50",
  "$28.43",
  "$107.06",
  "$206.03",
  "$315.45",
  "$340.60",
  "$401.70",
  "$812.50",
  "$620.50",
  "$125.50",
  "$95.60",
  "$122.05",
  "$715.30",
  "$51.50",
  "$155.09",
  "$130.30",
  "$178.30",
  "$260.03",
  "$315.57",
  "$343.50",
  "$175.40",
  "$151.23",
  "$147.50",
  "$128.43",
  "$177.06",
  "$256.03",
  "$515.45",
  "$840.60",
  "$431.70",
  "$312.50",
  "$650.50",
  "$334.20",
  "$143.50",
  "$651.57",
  "$140.38",
  "$743.05",
  "$460.45",
  "$335.62",
  "$154.60",
  "$165.50",
  "$355.60",
  "$132.05",
  "$215.30",
  "$511.50",
  "$115.09",
  "$150.30",
  "$168.30",
  "$267.03",
  "$215.57",
  "$313.50",
  "$426.70",
  "$215.09",
  "$621.08",
  "$442.30",
  "$113.03",
  "$151.09",
  "$226.66",
  "$752.41",
  "$151.03",
  "$57.51",
  "$128.53",
  "$137.16",
  "$206.66",
  "$325.25",
  "$342.66",
  "$421.71",
  "$81.51",
  "$624.58",
  "$38.60",
  "$473.55",
  "$231.58",
  "$165.34",
  "$235.45",
  "152.09",
  "$123.35",
  "$350.45",
  "$735.72",
  "$154.63",
  "$123.54",
  "$195.62",
  "$142.25",
  "$75.33",
  "$21.53",
  "$115.09",
  "$134.34",
  "$278.20",
  "$160.33",
  "$345.55",
  "$323.45",
  "$410.73",
  "$115.02",
  "$225.38",
  "$414.33",
  "$57.73",
  "$551.07",
  "$232.35",
  "$756.47",
  "$521.24",
  "$155.56",
  "$328.63",
  "$407.06",
  "$266.33",
  "$615.65",
  "$346.67",
  "$403.75",
  "$832.55",
  "$626.50",
  "$534.20",
  "$673.50",
  "$751.57",
  "$125.09",
  "$134.34",
  "$128.30",
  "$264.03",
  "$325.57",
  "$443.50",
  "$425.70",
  "$814.09",
  "$325.08",
  "$544.30",
  "$13.43",
  "$455.04",
];
const listActions = [
  '<span class="asset">CAD</span> to <span class="asset">CHF</span>',
  '<span class="asset">Shiba Inu</span>',
  '<span class="asset">Silver</span>',
  '<span class="asset">Gold</span>',
  '<span class="asset">Crude Oil Brent</span>',
  '<span class="asset">Crude Oil WTI</span>',
  '<span class="asset">Amazon.com Inc</span>',
  '<span class="asset">Apple Inc</span>',
  '<span class="asset">Facebook Inc</span>',
  '<span class="asset">Bitcoin</span>',
  '<span class="asset">Ethereum</span>',
  '<span class="asset">Litecoin</span>',
  '<span class="asset">EUR</span> to <span class="asset">USD</span>',
  '<span class="asset">EUR</span> to <span class="asset">USD</span>',
  '<span class="asset">GBP</span> to <span class="asset">USD</span>',
  '<span class="asset">GBP</span> to <span class="asset">JPY</span>',
  '<span class="asset">Binance Coin</span>',
  '<span class="asset">TRON</span>',
  '<span class="asset">Bitcon Cash</span>',
  '<span class="asset">Dash</span>',
  '<span class="asset">Cisco Systems Inc</span>',
  '<span class="asset">Intel Corp.</span>',
  '<span class="asset">Baidu, Inc. ADR</span>',
  '<span class="asset">Microsoft Corp.</span>',
  '<span class="asset">Alphabet Inc.</span>',
  '<span class="asset">EUR</span> to <span class="asset">GBP</span>',
  '<span class="asset">EUR</span> to <span class="asset">JPY</span>',
];
const listTimes = [
  "30 seconds",
  "31 seconds",
  "32 seconds",
  "33 seconds",
  "34 seconds",
  "35 seconds",
  "36 seconds",
  "37 seconds",
  "38 seconds",
  "39 seconds",
  "40 seconds",
  "41 seconds",
  "42 seconds",
  "43 seconds",
  "44 seconds",
  "45 seconds",
  "46 seconds",
  "47 seconds",
  "48 seconds",
  "49 seconds",
  "50 seconds",
  "51 seconds",
  "52 seconds",
  "53 seconds",
  "54 seconds",
  "55 seconds",
  "56 seconds",
  "57 seconds",
  "58 seconds",
  "59 seconds",
  "60 seconds",
  "61 seconds",
  "62 seconds",
  "63 seconds",
  "64 seconds",
  "65 seconds",
  "66 seconds",
  "67 seconds",
  "68 seconds",
  "69 seconds",
  "70 seconds",
  "71 seconds",
  "72 seconds",
  "73 seconds",
  "74 seconds",
  "75 seconds",
  "76 seconds",
  "77 seconds",
  "78 seconds",
  "79 seconds",
  "80 seconds",
  "81 seconds",
  "82 seconds",
  "83 seconds",
  "84 seconds",
  "85 seconds",
  "86 seconds",
  "87 seconds",
  "88 seconds",
  "89 seconds",
  "90 seconds",
  "91 seconds",
  "92 seconds",
  "93 seconds",
  "94 seconds",
  "95 seconds",
  "96 seconds",
  "97 seconds",
  "98 seconds",
  "99 seconds",
  "100 seconds",
  "101 seconds",
  "102 seconds",
  "103 seconds",
  "104 seconds",
  "105 seconds",
  "106 seconds",
  "107 seconds",
  "108 seconds",
  "109 seconds",
  "110 seconds",
  "111 seconds",
  "112 seconds",
  "113 seconds",
  "114 seconds",
  "115 seconds",
  "116 seconds",
  "117 seconds",
  "118 seconds",
  "119 seconds",
  "120 seconds",
  "121 seconds",
  "122 seconds",
  "123 seconds",
  "124 seconds",
  "125 seconds",
  "126 seconds",
  "127 seconds",
  "128 seconds",
  "129 seconds",
  "130 seconds",
  "131 seconds",
  "132 seconds",
  "133 seconds",
  "134 seconds",
  "135 seconds",
  "136 seconds",
  "137 seconds",
];

// React Component
const WinningsReports = () => {
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    const generateMessage = () => {
      const name = listNames[Math.floor(Math.random() * listNames.length)];
      const plan = listPlans[Math.floor(Math.random() * listPlans.length)];
      const action =
        listActions[Math.floor(Math.random() * listActions.length)];
      const time = listTimes[Math.floor(Math.random() * listTimes.length)];

      return `
<div 
  class="winnings-reports__item winnings-reports__item--show" 
  style="
    position: fixed;
    left: 1.5rem;
    bottom: 0.5rem;
    z-index: 400;
    margin-top: -5px;
    padding: 10px;
    width: 100%;
    max-width: 320px;
    background: #fff;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    font-family: Arial, sans-serif;
    display: flex;
    align-items: center;
  "
>
  <div class="winnings-reports__r">
    <div 
      class="winnings-reports__fio" 
      style="font-weight: bold; font-size: 14px; color: #333;"
    >
      ${name}
    </div>
    <div 
      class="winnings-reports__info" 
      style="font-size: 12px; color: #666; margin: 5px 0;"
    >
      Earned <span 
      class="win" 
      style="color: #28a745; font-weight: bold;"
      >
      ${plan}</span> in ${time} for a correct rate change forecast of ${action}.
    </div>
    <div 
      class="winnings-reports__time-ago" 
      style="font-size: 10px; color: #999;"
    >
      a few seconds ago
    </div>
    <div 
      class="winnings-reports__buttons" 
      style="margin-top: 10px;"
    >
      <a 
        target="_blank" 
        href="/accounts/sign-in" 
        style="
          text-decoration: none;
          font-size: 12px;
          color: #fff;
          background-color: #007bff;
          padding: 5px 10px;
          border-radius: 4px;
          display: inline-block;
        "
      >
        I want to earn too
      </a>
    </div>
  </div>
</div>`;
    };

    const interval = setInterval(() => {
      const newMessage = generateMessage();
      setMessage(newMessage);

      // Clear message after 8 seconds
      setTimeout(() => setMessage(null), 8000);
    }, Math.random() * (40000 - 8000) + 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="winnings-reports-stream">
      {message && (
        <div
          className="winnings-reports__item winnings-reports__item--show"
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
    </div>
  );
};

export default WinningsReports;