use youtube;
db.usuaris.insert([
    {
        _id: 1,
        email: "lagartija@gmail.com",
        password: "MiPasswordYoutube",
        nom_usuari: "Lagartija"
    },
    {
        _id: 2,
        email: "rinoceronte@gmail.com",
        password: "ElMejorPassword",
        nom_usuari: "Rinoceronte"
    },
    {
        _id: 3,
        email: "avestruz@gmail.com",
        password: "EntraEnYoutube",
        nom_usuari: "Avestruz"
    },
    {
        _id: 4,
        email: "calamar@gmail.com",
        password: "PasswordDefinitivo",
        nom_usuari: "Calamar"
    }
]);

db.etiquetes.insert([
    {
        _id: 1,
        nom: "Natura"
    },
    {
        _id: 2,
        nom: "Mon Animal"
    },
    {
        _id: 3,
        nom: "Sang i fetge"
    },
    {
        _id: 4,
        nom: "Explicit"
    },
    {
        _id: 5,
        nom: "Imatges ofensives"
    },
    {
        _id: 6,
        nom: "Educatiu"
    }
]);

db.videos.insert([
    {
        _id: 1,
        titol: "Como cazan las lagartijas",
        grandaria: 607.23,
        nom_arxiu: "cazalagartija",
        durada: "00:15:31",
        reproduccions: 1045,
        estat: "public",
        data_publicacio: ISODate("2020-08-07 00:00:00"),
        id_usuari: 1,
        etiquetes: [
            {
                id_etiqueta: 1
            },
            {
                id_etiqueta: 2
            }
        ],
        likes: [
            {
                id_usuari: 3,
                data: ISODate("2020-07-06 14:45:46")
            }
        ],
        dislikes: [
            {
                id_usuari: 2,
                data: ISODate("2021-05-24 12:25:22")
            }
        ]
    }
    ,
    {
        _id: 2,
        titol: "Como comen las lagartijas",
        grandaria: 321.65,
        nom_arxiu: "comelagartija",
        durada: "00:10:21",
        reproduccions: 98,
        estat: "privat",
        data_publicacio: ISODate("2021-07-15 00:00:00"),
        id_usuari: 1,
        etiquetes: [
            {
                id_etiqueta: 3
            },
            {
                id_etiqueta: 4
            },
            {
                id_etiqueta: 5
            },
            {
                id_etiqueta: 6
            }
        ]
    }
    ,
    {
        _id: 3,
        titol: "Como cazan los rinocerontes",
        grandaria: 607.23,
        nom_arxiu: "cazalagartija",
        durada: "00:15:31",
        reproduccions: 2,
        estat: "public",
        data_publicacio: ISODate("2022-05-04 00:00:00"),
        id_usuari: 2,
        likes: [
            {
                id_usuari: 1,
                data: ISODate("2022-05-21 10:45:08")
            },
            {
                id_usuari: 4,
                data: ISODate("2022-09-18 16:05:08")
            }
        ]
    }
    ,
    {
        _id: 4,
        titol: "Como comen los rinocerontes",
        grandaria: 321.65,
        nom_arxiu: "comelagartija",
        durada: "00:10:21",
        reproduccions: 977,
        estat: "ocult",
        data_publicacio: ISODate("2021-12-04 00:00:00"),
        id_usuari: 2,
        dislikes: [
            {
                id_usuari: 1,
                data: ISODate("2020-04-03 10:15:11")
            }
        ]
    }
    ,
    {
        _id: 5,
        titol: "Como cazan las avestruces",
        grandaria: 607.23,
        nom_arxiu: "cazaavestruz",
        durada: "00:15:31",
        reproduccions: 54,
        estat: "ocult",
        data_publicacio: ISODate("2021-06-09 00:00:00"),
        id_usuari: 3,
        etiquetes: [
            {
                id_etiqueta: 4
            }
        ],
        likes: [
            {
                id_usuari: 1,
                data: ISODate("2021-03-12 09:48:07")
            },
            {
                id_usuari: 4,
                data: ISODate("2021-08-27 15:55:57")
            }
        ]
    }
    ,
    {
        _id: 6,
        titol: "Como comen las avestruces",
        grandaria: 321.65,
        nom_arxiu: "comeavestruz",
        durada: "00:10:21",
        reproduccions: 24504501,
        estat: "privat",
        data_publicacio: ISODate("2021-12-04 00:00:00"),
        id_usuari: 3
    }
    ,
    {
        _id: 7,
        titol: "Como cazan los calamares",
        grandaria: 607.23,
        nom_arxiu: "cazacalamar",
        durada: "00:15:31",
        reproduccions: 7845,
        estat: "public",
        data_publicacio: ISODate("2022-12-03 00:00:00"),
        id_usuari: 4,
        etiquetes: [
            {
                id_etiqueta: 2
            },
            {
                id_etiqueta: 3
            }
        ]
    }
    ,
    {
        _id: 8,
        titol: "Como comen los calamares",
        grandaria: 321.65,
        nom_arxiu: "comecalamar",
        durada: "00:10:21",
        reproduccions: 6421,
        estat: "privat",
        data_publicacio: ISODate("2020-11-04 00:00:00"),
        id_usuari: 4,
        dislikes: [
            {
                id_usuari: 2,
                data: ISODate("2022-06-15 13:35:33")
            }
        ]
    }
]);

db.comentaris.insert([
    {
        _id: 1,
        text: "M'ha agradat molt la visió realista",
        data: ISODate("2020-09-08 12:45:07"),
        id_usuari: 2,
        id_video: 1,
        likes: [
            {
                id_usuari: 1,
                data: ISODate("2022-05-21 10:45:08")
            }
        ],
        dislikes: [
            {
                id_usuari: 3,
                data: ISODate("2020-07-06 14:45:46")
            }
        ]
    },
    {
        _id: 2,
        text: "Repugnant",
        data: ISODate("2020-10-18 10:23:01"),
        id_usuari: 3,
        id_video: 1,
        likes: [
            {
                id_usuari: 4,
                data: ISODate("2021-08-27 15:55:57")
            }
        ],
        dislikes: [
            {
                id_usuari: 1,
                data: ISODate("2021-03-12 09:48:07")
            }
        ]
    },
    {
        _id: 3,
        text: "Pole",
        data: ISODate("2020-08-07 01:12:08"),
        id_usuari: 4,
        id_video: 1,
        likes: [
            {
                id_usuari: 1,
                data: ISODate("2020-04-03 10:15:11")
            }
        ],
        dislikes: [
            {
                id_usuari: 4,
                data: ISODate("2022-09-18 16:05:08")
            }
        ]
    },
    {
        _id: 4,
        text: "No m'ho havia imaginat mai aixó",
        data: ISODate("2022-09-08 12:45:07"),
        id_usuari: 1,
        id_video: 7,
        likes: [
            {
                id_usuari: 2,
                data: ISODate("2021-05-24 12:25:22")
            }
        ]
    },
    {
        _id: 5,
        text: "Aixó es una copia del meu canal, et denunciaré!!!",
        data: ISODate("2022-09-08 12:45:07"),
        id_usuari: 4,
        id_video: 4,
        likes: [
            {
                id_usuari: 1,
                data: ISODate("2022-05-21 10:45:08")
            }
        ],
        dislikes: [
            {
                id_usuari: 2,
                data: ISODate("2022-06-15 13:35:33")
            }
        ]
    }
]);

db.canals.insert([
    {
        _id:1,
        nom:"Vida de lagartijas", 
        data_creació:ISODate("2020-05-07 00:00:00"),
        id_usuari:1,
        suscriptors:[
            {
                id_usuari:2
            },
            {
                id_usuari:3
            },
            {
                id_usuari:4
            }            
        ]
    },
    {
        _id:2,
        nom:"Accesorios para lagartijas", 
        data_creació:ISODate("2021-07-02 00:00:00"),
        id_usuari:1
    },
    {
        _id:3,
        nom:"La vida secreta de los calamares", 
        data_creació:ISODate("2019-04-01 00:00:00"),
        id_usuari:4,
        suscriptors:[
            {
                id_usuari:1
            },
            {
                id_usuari:3
            }            
        ]
    }
]);

db.playlists.insert([
    {
        _id:1,
        nom:"animales del mundo", 
        data:ISODate("2021-09-30 00:00:00"),
        estat: "publica",
        id_usuario:2, 
        videos:[
            {
                id_video:1
            },
            {
                id_video:2
            },
            {
                id_video:5
            }
        ]
    },
    {
        _id:2,
        nom:"como comen los animales", 
        data:ISODate("2021-10-07 00:00:00"), 
        estat:"privada",
        id_usuario:2, 
        videos:[
            {
                id_video:2
            },
            {
                id_video:4
            },
            {
                id_video:6
            }
        ]
    },
    {
        _id:3,
        nom:"animales", 
        data:ISODate("2020-05-21 00:00:00"),
        id_usuario:4, 
        videos:[
            {
                id_video:1
            },
            {
                id_video:2
            },
            {
                id_video:3
            },
            {
                id_video:4
            },
            {
                id_video:5
            },
            {
                id_video:6
            }
        ]
    }

])
