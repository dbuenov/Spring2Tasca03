use optica;
db.proveidors.insert([{"_id": 1,     
       "nom": "Rompetechos SL",
        "adreça": {
            "carrer": "c/ Montserrat",
            "numero": "54",
            "pis": "7",
            "porta": "3",
            "ciutat": "Badalona",
            "cp": "08916",
            "pais": "Spain"
        },
        "telèfon": "934094656",
        "fax": "934242435",
        "nif": "45136918Y"
    },
    {
        "_id": 2,
        "nom": "Veoveo SA",
        "adreça": {
            "carrer": "c/ Alella",
            "numero": "34",
            "pis": "2",
            "porta": "3",
            "ciutat": "Badalona",
            "cp": "08080",
            "pais": "Spain"
        },
        "telèfon": "934554545",
        "fax": "975489615",
        "nif": "98545697T"
    },
    {
        "_id": 3,
        "nom": "No me Mires SL",
        "adreça": {
            "carrer": "c/ Sevilla",
            "numero": "22",
            "pis": "1",
            "porta": "5",
            "ciutat": "Badalona",
            "cp": "08450",
            "pais": "Spain"
        },
        "telèfon": "933461234",
        "fax": "934513397",
        "nif": "98789718T"
    },
    {
        "_id": 4,
        "nom": "Gafas y Gafas",
        "adreça": {
            "carrer": "c/ Viladomat",
            "numero": "454",
            "pis": "1",
            "porta": "4",
            "ciutat": "Barcelona",
            "cp": "08934",
            "pais": "Spain"
        },
        "telèfon": "935561234",
        "fax": "934895642",
        "nif": "45996538A"
    }
]);
db.marques.insert([
    {
        "_id": 1,
        "nom": "Oakley", 
        "id_proveidor": 1
    },
    {
        "_id": 2,
        "nom": "Ray-Ban",
        "id_proveidor":2
    },
    {
        "_id": 3,
        "nom": "Police",
        "id_proveidor":3
    },
    {
        "_id": 4,
        "nom": "Carolina Herrera",
        "id_proveidor":2
    },
    {
        "_id": 5,
        "nom": "Arnette",
        "id_proveidor":4
    },
    {
        "_id": 6,
        "nom": "Carrera",
        "id_proveidor":3
    }
]);
db.clients.insert([
    {
        "_id": 1,
        "nom": "Joan Perez",
        "adreça": {
            "carrer": "c/ Dos de Maig", 
            "numero": "4", 
            "pis": "2", 
            "porta": "3", 
            "ciutat": "Barcelona", 
            "cp": "08342", 
            "pais": "Spain"
        },
        "telèfon": "932587944", 
        "email": "joan.perez@hotmail.com", 
        "data_registre": ISODate("2020-05-13 10:00:00")
    },
    {
        "_id": 2,
        "nom": "Pere Orozco",
        "adreça": {
            "carrer": "c/ Baluart",
            "numero":  "5", 
            "pis": "1", 
            "porta": "2", 
            "ciutat": "Barcelona", 
            "cp": "08242", 
            "pais": "Spain"
        },
        "telèfon": "937845694", 
        "email": "pereorozco@gmail.com", 
        "data_registre":ISODate("2021-04-12 10:00:00"),
        "recomanat": 1
    },
    {
        "_id": 3,
        "nom": "Dani Oltra",
        "adreça": {
            "carrer": "c/ Bonavista", 
            "numero": "534", 
            "pis": "9",
            "porta":  "1", 
            "ciutat": "Mataró", 
            "cp": "08673", 
            "pais": "Spain"
        },
        "telèfon": "932456789", 
        "email": "oltradani@gmail.com", 
        "data_registre":ISODate("2022-07-06 10:00:00"), 
        "recomanat":1
    },
    {
        "_id": 4,
        "nom": "Carme Fel",
        "adreça": {
            "carrer": "c/ Hospital", 
            "numero": "767", 
            "pis": "7", 
            "porta": "3", 
            "ciutat": "Mataró", 
            "cp": "08944", 
            "pais": "Spain"
        },
        "telèfon": "934513238", 
        "email": "carme.fel@gmail.com", 
        "data_registre":ISODate("2021-09-30 10:00:00")
    },
    {
        "_id": 5,
        "nom": "Maria Salomon", 
        "adreça": {
            "carrer": "c/ Eduard Toda", 
            "numero": "43", 
            "pis": "3", 
            "porta": "7", 
            "ciutat": "Mataró",
            "cp":  "08563", 
            "pais": "Spain"
        },
        "telèfon": "932455122", 
        "email": "mariasalo@hotmail.com",
        "data_registre":ISODate("2020-11-26 10:00:00"), 
        "recomanat": 4
    },
    {
        "_id": 6,
        "nom": "Luis Escriva", 
        "adreça": {
            "carrer": "c/ Entença", 
            "numero": "123",
            "pis":  "7", 
            "porta": "5", 
            "ciutat": "Blanes",
            "cp":  "08351", 
            "pais": "Spain"
        },
        "telèfon": "932457894", 
        "email": "escriva.luis@hotmail.com",
        "data_registre":ISODate("2020-07-19 10:00:00"), 
        "recomanat":3
    },
    {
        "_id": 7,
        "nom": "Sofia Jimenez", 
        "adreça": {
            "carrer": "c/ Estació",
            "numero":  "84",
            "pis":  "1", 
            "porta": "4", 
            "ciutat": "Blanes", 
            "cp": "08546",
            "pais":  "Spain"
        },
        "telèfon": "934541212", 
        "email": "sofia.jimenez@gmail.com", 
        "data_registre":ISODate("2021-12-27 10:00:00")
    },
    {
        "_id": 8,
        "nom": "Anna Gonzalez",
        "adreça": {
            "carrer": "c/ Encarnació",
            "numero":  "3", 
            "pis": "1", 
            "porta": "3", 
            "ciutat": "Blanes", 
            "cp": "08954", 
            "pais": "Spain"
        },
        "telèfon": "937879854", 
        "email": "anna.gonzalez@gmail.com", 
        "data_registre":ISODate("2021-08-06 10:00:00")
    },
    {
        "_id": 9,
        "nom": "Miquel Ramon",
        "adreça": {
            "carrer": "c/ Pacífic", 
            "numero": "43",
            "pis":  "5", 
            "porta": "2",
            "ciutat":  "Tarragona", 
            "cp": "08456", 
            "pais": "Spain"
        },
        "telèfon":  "934545498",
        "email":  "miguel.rar@hotmail.com", 
        "data_registre":ISODate("2022-06-30 10:00:00"), 
        "recomanat":4
    },
    {
        "_id": 10,
        "nom": "Margarita Gonzalez", 
        "adreça": {
            "carrer": "c/ Palomar", 
            "numero": "76", 
            "pis": "6", 
            "porta": "3", 
            "ciutat": "Tarragona", 
            "cp": "08873", 
            "pais": "Spain"
        },
        "telèfon": "935445786", 
        "email": "marga.gon@gmail.com", 
        "data_registre":ISODate("2022-05-24 10:00:00"), 
        "recomanat":8
    }   
]);
db.empleats.insert([
    {
        "_id": 1,
        "nom": "Ramon"
    },
    {
        "_id": 2,
        "nom": "Daniel"
    },
    {
        "_id": 3,
        "nom":"Carolina"
    },
    {
        "_id": 4,
        "nom":"Josep"
    },
]);
db.ulleres.insert([
    {
        "_id": 1,
        "id_marca":1,
        "id_client":1,
        "graduacioD":2.3,
        "graduacioE":2.2,
        "montura":"Flotant",
        "color":"Verd",
        "colorD":"Blanc",
        "colorE":"Blanc",
        "preu":120.99,
        "id_empleat":1
    },
    {
        "_id": 2,
        "id_marca":2,
        "id_client":1,
        "graduacioD":2.5,
        "graduacioE":2.4,
        "montura":"Pasta",
        "color":"Verd",
        "colorD":"Blanc",
        "colorE":"Blanc",
        "preu":100.76,
        "id_empleat":1
    },
    {
        "_id": 3,
        "id_marca":3,
        "id_client":2,
        "graduacioD":2.1,
        "graduacioE":2.4,
        "montura":"Metalica",
        "color":"Marró",
        "colorD":"Blanc",
        "colorE":"Blanc",
        "preu":125.50,
        "id_empleat":1
    },
    {
        "_id": 4,
        "id_marca":4,
        "id_client":2,
        "graduacioD":1.3,
        "graduacioE":1.2,
        "montura":"Flotant",
        "color":"Blau",
        "colorD":"Fosc", 
        "colorE":"Fosc",
        "preu":145.60,
        "id_empleat":2
    },
    {
        "_id": 5,
        "id_marca":5,
        "id_client":3,
        "graduacioD":1.1,
        "graduacioE":1.1,
        "montura":"Pasta",
        "color":"Vermell",
        "colorD":"Fosc", 
        "colorE":"Fosc",
        "preu":147.58,
        "id_empleat":2
    },
    {
        "_id": 6,
        "id_marca":6,
        "id_client":4,
        "graduacioD":3.2,
        "graduacioE":3.4,
        "montura":"Metalica",
        "color":"Negre",
        "colorD":"Blanc",
        "colorE":"Blanc",
        "preu":99.56,
        "id_empleat":2
    },
    {
        "_id": 7,
        "id_marca":2,
        "id_client":5,
        "graduacioD":4.5,
        "graduacioE":5.4,
        "montura":"Pasta",
        "color":"Blau",
        "colorD":"Fosc", 
        "colorE":"Fosc",
        "preu":124.54,
        "id_empleat":3
    },
    {
        "_id": 8,
        "id_marca":3,
        "id_client":6,
        "graduacioD":3.2,
        "graduacioE":3.2,
        "montura":"Pasta",
        "color":"Vermell",
        "colorD":"Blanc",
        "colorE":"Blanc",
        "preu":123.37,
        "id_empleat":3
    },
    {
        "_id": 9,
        "id_marca":4,
        "id_client":7,
        "graduacioD":2.3,
        "graduacioE":2.1,
        "montura":"Metalica",
        "color":"Blau",
        "colorD":"Fosc", 
        "colorE":"Fosc",
        "preu":254.78,
        "id_empleat":4
    },
    {
        "_id": 10,
        "id_marca":5,
        "id_client":8,
        "graduacioD":3.2,
        "graduacioE":3.2,
        "montura":"Flotant",
        "color":"Negre",
        "colorD":"Blanc",
        "colorE":"Blanc",
        "preu":214.45,
        "id_empleat":4
    },
    {
        "_id": 11,
        "id_marca":6,
        "id_client":9,
        "graduacioD":1.3,
        "graduacioE":1.2,
        "montura":"Pasta",
        "color":"Vermell",
        "colorD":"Blanc",
        "colorE":"Blanc",
        "preu":126.12,
        "id_empleat":3
    },
    {
        "_id": 12,
        "id_marca":2,
        "id_client":10,
        "graduacioD":1.3,
        "graduacioE":1.3,
        "montura":"Pasta",
        "color":"Vermell",
        "colorD":"Fosc", 
        "colorE":"Fosc",
        "preu":189.01,
        "id_empleat":3
    },
    {
        "_id": 13,
        "id_marca":3,
        "id_client":7,
        "graduacioD":4.4,
        "graduacioE":4.5,
        "montura":"Flotant",
        "color":"Vermell",
        "colorD":"Blanc",
        "colorE":"Blanc",
        "preu":169.45,
        "id_empleat":2
    },
    {
        "_id": 14,
        "id_marca":4,
        "id_client":6,
        "graduacioD":8.8,
        "graduacioE":8.9,
        "montura":"Pasta",
        "color":"Negre",
        "colorD":"Blanc",
        "colorE":"Blanc",
        "preu":200.45,
        "id_empleat":2
    },
    {
        "_id": 15,
        "id_marca":5,
        "id_client":5,
        "graduacioD":3.2,
        "graduacioE":3.4,
        "montura":"Metalica",
        "color":"Marró",
        "colorD":"Blanc",
        "colorE":"Blanc",
        "preu":85.60,
        "id_empleat":1
    },
    {
        "_id": 16,
        "id_marca":1,
        "id_client":4,
        "graduacioD":4.5,
        "graduacioE":4.5,
        "montura":"Metalica",
        "color":"Verd",
        "colorD":"Fosc", 
        "colorE":"Fosc",
        "preu":97.45,
        "id_empleat":2
    },
    {
        "_id": 17,
        "id_marca":2,
        "id_client":3,
        "graduacioD":1.3,
        "graduacioE":1.3,
        "montura":"Pasta",
        "color":"Vermell",
        "colorD":"Fosc", 
        "colorE":"Fosc",
        "preu":189.01,
        "id_empleat":2
    },
    {
        "_id": 18,
        "id_marca":6,
        "id_client":4,
        "graduacioD":4.4,
        "graduacioE":4.5,
        "montura":"Flotant",
        "color":"Vermell",
        "colorD":"Blanc",
        "colorE":"Blanc",
        "preu":169.45,
        "id_empleat":2
    },
    {
        "_id": 19,
        "id_marca":6,
        "id_client":3,
        "graduacioD":8.8,
        "graduacioE":8.9,
        "montura":"Pasta",
        "color":"Negre",
        "colorD":"Blanc",
        "colorE":"Blanc",
        "preu":200.45,
        "id_empleat":4
    },
    {
        "_id": 20,
        "id_marca":5,
        "id_client":10,
        "graduacioD":3.2,
        "graduacioE":3.4,
        "montura":"Metalica",
        "color":"Marró",
        "colorD":"Blanc",
        "colorE":"Blanc",
        "preu":85.60,
        "id_empleat":3
    }
]);

