const countries = [
    {
        name: "Afghanistan",
        capital: "Kabul",
        currencies: [
                {
                code: "AFN",
                name: "Afghan afghani",
                symbol: "؋"
                }
                    ],
         flags: {
                png: "https://flagcdn.com/w320/kh.png",
                svg: "https://flagcdn.com/kh.svg"
                            },
        independent: false
    },

    {
        name: "Åland Islands",
        capital: "Mariehamn",
        currencies: [
        {
        code: "EUR",
        name: "Euro",
        symbol: "€"
        }
        ],
        independent: false
     },
    {
        name: " Islands",
        capital: "Mariehamn",
        currencies: [
        {
        code: "EUR",
        name: "Euro",
        symbol: "€"
        }
        ],
        independent: false
     },

     {  flags: {
                png: "https://flagcdn.com/w320/gh.png",
                svg: "https://flagcdn.com/gh.svg"
                },
        coatOfArms: {
                png: "https://mainfacts.com/media/images/coats_of_arms/gh.png",
                svg: "https://mainfacts.com/media/images/coats_of_arms/gh.svg"
                },
        name: {
            common: "Ghana",
            official: "Republic of Ghana",
            nativeName: {
                eng: {
                official: "Republic of Ghana",
                common: "Ghana"
                    }
                        }
            },
        tld: [
            ".gh"
            ],
        currencies: {
            GHS: {
                name: "Ghanaian cedi",
                symbol: "₵"
                }
                    },
        idd: {
            root: "+2",
            suffixes: [
            "33"
            ]
             },
        capital: [
            "Accra"
                ],
        region: "Africa",
        subregion: "Western Africa",
        languages: {
            eng: "English",
            fra: "English"
            },
        area: 238533,
        demonyms: {
                eng: {
                    f: "Ghanaian",
                    m: "Ghanaian"
                    },
                fra: {
                f: "Ghanéenne",
                m: "Ghanéen"
                }
                },
        population: 31072945
        },
];

export function getCountries() {
    return countries;
}