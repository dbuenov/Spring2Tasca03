use spotify;

db.artistes.insert([
    {
        _id: 1,
        nom: "Raphael",
        relació: [
            {
                id_artista: 2
            },
            {
                id_artista: 3
            }
        ],
        albums: [
            {
                id_album: 1,
                titol: "Vuelve por Navidad",
                any_publicació: "2004",
                cançons: [
                    {
                        id_canço: 1,
                        titol: "Noche De Paz, Noche De Fe (Silent Night)",
                        durada: "00:01:15",
                        reproduccions: 45489
                    },
                    {
                        id_canço: 2,
                        titol: "Llegó Navidad (Happy Xmas [War Is Over])",
                        durada: "00:02:26",
                        reproduccions: 2442
                    },
                    {
                        id_canço: 3,
                        titol: "Blanca Navidad (White Christmas)",
                        durada: "00:03:07",
                        reproduccions: 45451
                    },
                    {
                        id_canço: 4,
                        titol: "La Canción Del Tamborilero",
                        durada: "00:04:38",
                        reproduccions: 654872
                    }
                ]
            }
        ]
    },
    {
        _id: 2,
        nom: "Lola Flores",
        relació: [
            {
                id_artista: 1
            }
        ],
        albums: [
            {
                id_album: 2,
                titol: "Juerga Flamenca",
                any_publicació: "1961",
                cançons: [
                    {
                        id_canço: 5,
                        titol: "Maria Belen",
                        durada: "00:02:31",
                        reproduccions: 1251
                    },
                    {
                        id_canço: 6,
                        titol: "Torcuata",
                        durada: "00:03:52",
                        reproduccions: 7215
                    },
                    {
                        id_canço: 7,
                        titol: "No, No, No Y No",
                        durada: "00:04:34",
                        reproduccions: 1457
                    }
                ]
            }
        ]
    },
    {
        _id: 3,
        nom: "C Tangana",
        relació: [
            {
                id_artista: 1
            }
        ],
        albums: [
            {
                id_album: 3,
                titol: "Ídolo",
                any_publicació: "2017",
                cançons: [
                    {
                        id_canço: 8,
                        titol: "Tiempo",
                        durada: "00:05:19",
                        reproduccions: 456541
                    },
                    {
                        id_canço: 9,
                        titol: "Inditex",
                        durada: "00:03:21",
                        reproduccions: 545412
                    },
                    {
                        id_canço: 10,
                        titol: "De pie",
                        durada: "00:02:34",
                        reproduccions: 45121
                    },
                    {
                        id_canço: 11,
                        titol: "No te pegas",
                        durada: "00:01:35",
                        reproduccions: 878754
                    }
                ]
            },
            {
                id_album: 4,
                titol: "El Madrileño",
                any_publicació: "2021",
                cançons: [
                    {
                        id_canço: 12,
                        titol: "Los Tontos",
                        durada: "00:05:27",
                        reproduccions: 1231457
                    },
                    {
                        id_canço: 13,
                        titol: "Nominao",
                        durada: "00:02:28",
                        reproduccions: 45541215
                    }
                ]
            }
        ]
    }
]);

db.usuaris.insert([
    {
        _id: 1,
        email: "pepe@hotmail.com",
        nom_usuari: "pepeWay",
        password: "PasswordChulo",
        suscripcio: {
            data_inici: "2021-12-04",
            data_final: "2022-12-04",
            forma_pagament: {
                paypal: {
                    usuari: "pepe@hotmail.com"
                }
            },
            pagaments: [
                {
                    _id: 1,
                    data: "2020-10-09",
                    total: 9.99
                },
                {
                    _id: 2,
                    data: "2021-10-09",
                    total: 19.99
                }
            ],
            artistes_que_segueixes: [
                {
                    id_artista: 1
                },
                {
                    id_artista: 2
                }
            ],
            albums_favorits: [
                {
                    id_album: 1
                },
                {
                    id_album: 2
                }
            ],
            cançons_favorites: [
                {
                    id_canço: 6
                },
                {
                    id_canço: 7
                },
                {
                    id_canço: 8
                }
            ]

        }
    },
    {
        _id: 2,
        email: "luis@hotmail.com",
        nom_usuari: "luisiluisa",
        password: "PasswordInfinito",
        suscripcio: {
            data_inici: "2021-06-07",
            data_final: "2022-06-07",
            forma_pagament: {
                targeta: {
                    numero: 1234567890123456,
                    mes: "juny",
                    any: "2023",
                    codi_seguretat: "521"
                }
            },
            pagaments: [
                {
                    _id: 3,
                    data: "2018-12-08",
                    total: 9.99
                },
                {
                    _id: 4,
                    data: "2019-12-08",
                    total: 19.99
                },
                {
                    _id: 5,
                    data: "2020-12-08",
                    total: 9.99
                },
                {
                    _id: 6,
                    data: "2021-12-08",
                    total: 9.99
                }
            ],
            artistes_que_segueixes: [
                {
                    id_artista: 3
                },
                {
                    id_artista: 1
                }
            ],
            albums_favorits: [
                {
                    id_album: 3
                },
                {
                    id_album: 4
                }
            ],
            cançons_favorites: [
                {
                    id_canço: 10
                },
                {
                    id_canço: 11
                },
                {
                    id_canço: 12
                }
            ]

        }
    },
    {
        _id: 3,
        email: "maria@gmail.com",
        nom_usuari: "maria_1992",
        password: "ElMejorPassword",
        suscripcio: {
            data_inici: "2021-10-09",
            data_final: "2022-10-09",
            forma_pagament: {
                targeta: {
                    numero: 6543210987654321,
                    mes: "maig",
                    any: "2024",
                    codi_seguretat: "745"
                }
            },
            pagaments: [
                {
                    _id: 7,
                    data: "2021-06-07",
                    total: 19.99
                }
            ],
            artistes_que_segueixes: [
                {
                    id_artista: 2
                },
                {
                    id_artista: 3
                }
            ],
            albums_favorits: [
                {
                    id_album: 1
                },
                {
                    id_album: 2
                }
            ],
            cançons_favorites: [
                {
                    id_canço: 1
                },
                {
                    id_canço: 2
                },
                {
                    id_canço: 3
                }
            ]

        }
    },
    {
        _id: 4,
        email: "joan@hotmail.com",
        nom_usuari: "ErJoan",
        password: "NoPongasPassword",
        artistes_que_segueixes: [
            {
                id_artista: 1
            },
            {
                id_artista: 2
            }
        ],
        albums_favorits: [
            {
                id_album: 3
            },
            {
                id_album: 4
            }
        ],
        cançons_favorites: [
            {
                id_canço: 8
            },
            {
                id_canço: 9
            },
            {
                id_canço: 10
            }
        ]

    },    
    {
        _id: 5,
        email: "javier@gmail.com",
        nom_usuari: "javierte",
        password: "MiPasswordParaSpotify",
        artistes_que_segueixes: [
            {
                id_artista: 2
            },
            {
                id_artista: 3
            }
        ],
        albums_favorits: [
            {
                id_album: 1
            },
            {
                id_album: 2
            }
        ],
        cançons_favorites: [
            {
                id_canço: 1
            },
            {
                id_canço: 2
            },
            {
                id_canço: 3
            }
        ]

    }
]);

db.playlists.insert([
    {
        _id:1,
        titol:"lista para correr", 
        data_creacio:"2021-04-07", 
        compartida: false,
        llista_cançons:[
            {
                id_canço:1,
                id_usuari:1
            },
            {
                id_canço:2,
                id_usuari:1
            },
            {
                id_canço:3,
                id_usuari:1
            },
            {
                id_canço:4,
                id_usuari:1
            }
        ]
    },
    {
        _id:2,
        titol:"lista para cocinar", 
        data_creacio:"2021-02-09", 
        compartida: true,
        llista_cançons:[
            {
                id_canço:10,
                id_usuari:1
            },
            {
                id_canço:11,
                id_usuari:2
            },
            {
                id_canço:12,
                id_usuari:4
            },
            {
                id_canço:13,
                id_usuari:1
            }
        ]
    },
    {
        _id:3,
        titol:"lista para estudiar", 
        data_creacio:"2021-04-07", 
        compartida: true,
        llista_cançons:[
            {
                id_canço:7,
                id_usuari:2
            },
            {
                id_canço:8,
                id_usuari:1
            },
            {
                id_canço:9,
                id_usuari:3
            },
            {
                id_canço:10,
                id_usuari:2
            }
        ]
    },
    {
        _id:4,
        titol:"lista para trabajar", 
        data_creacio:"2020-10-13",
        esborrada:{
            data:"2021-11-04"
        },
        compartida:false,
        llista_cançons:[
            {
                id_canço:5,
                id_usuari:5
            },
            {
                id_canço:6,
                id_usuari:5
            },
            {
                id_canço:7,
                id_usuari:5
            },
            {
                id_canço:8,
                id_usuari:5
            }
        ]
    }

])

