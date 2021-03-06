module.exports = {
    page_title: 'Forus platform',
    page_state_titles: {
        home: 'Forus platform',
        funds: 'Fondsen',
        products: 'Aanbiedingen',
        "products-show": 'Aanbieding',
        "products-apply": "Aanbieding kopen",
        vouchers: 'Mijn vouchers',
        voucher: 'Mijn voucher',
        records: 'Eigenschappen', 
        "record-validate": 'Valideer eigenschap',
        "record-validations": 'Validaties',
        "record-create": 'Eigenschap toevoegen',
        "funds-apply": 'Meld je aan voor een fonds',
        "restore-email": 'Inloggen via e-mail',
    },
    languages: {
        en: 'English',
        nl: 'Dutch',
    },
    // PAGES
    // APPLY FOR FUNDS = fund-apply.pug
    fund_apply: {
        header: {
            title: "Mee doen",
            criteria: "Voowaarden (4)",
        },
        buttons: {
            join: "DOE MEE",
        }
    },    

    // FUNDS = funds.pug
    funds: {
        header: {
            title: "Beschikbare fondsen",
        },
        labels: {
            categorie: "CATEGORIEËN",
            criteria: "Voorwaarden (4)",
            location: "Locatie",
            office: "Zuidhorn Gemeente",
            children: "Kinderen",
            count: "1",
            agelimit: "Leeftijdsgrens",
            age: "< 18 jaar oud",
            income: "Inkomensgrens",
            amount: "< € 1118.46",
        },
        buttons: {
            join: "Doe mee",
            more: "BEKIJK MEER",
        },
        status: {
            active: "Actief",
        }
    },

    // HOME = home.pug
    home: {
        header: {
            title: "Generieke webshop voor gemeentelijke regelingen",
            subtitle: "Op deze webshop kun je je aanmelden voor een fonds, vervolgens kun je met een voucher langs winkels, sportverenigingen en/of culturele instellingen gaan.",
            button: 'LEES MEER OVER HOE HET SYSTEEM WERKT',
        },
        blog: {
            title: "Onze blog",
            name: "Blog: Nieuw fonds Kindpakket 2019 Zuidhorn",
            more: "Lees meer",
            button: "BEKIJK MEER",
        },
        product: {
            title: "Aanbiedingen",
            select: "Selecteer categorie...",
            search: "Zoek naar een aanbieding",
        },
        map: {
            title: "Overzicht van alle leveranciers",
            subtitle: "Binnen het Forus platform werken sponsoren en leveranciers samen om de beste diensten en producten te leveren voor het publieke domein.",
            button: 'BEKIJK DE KAART',
        }
    },

    // APPLY FOR PRODUCT = product-apply.pug
    product_apply: {
        header: {
            title: "Kies voucher",
        },
        labels: {
            transactions: "Transacties",
            last: "Laatste transactie",
            subtract: "(Af)",
            none: "Geen",
            example: "Welke tekst komt hier ?",
        },
        buttons: {
            use: "Gebruik",
        }
    },

    // PRODUCT = product.pug
    product: {
        labels: {
            fund: "Fonds",
            find: "Je kan ons hier vinden",      
        },
        status: {
            active: "Actief",
        },
        buttons: {
            buy: "KOOP",
        }
    },

    // PRODUCTS = Products.pug
    // No translations needed

    // CREATE A RECORD  = record.create.pug
    records_create: {
        header: {
            title: "Eigenschappen aanmaken",
         },        
        buttons: {
            choose: {
                description: "Selecteer de categorie waaraan je de eigenschap wil toevoegen.",
                c_description: "Kies het type eigenschap dat je wil aanmaken.",
                category: "Kies categorie",
                type: "Kies type",
                    },
            cancel: "ANNULEER",
            next: "VOLGENDE",
            type: "EIGENSCHAP TYPE",
            text: "TEKST",
            back: "TERUG",
            confirm: "BEVESTIG",
            }
    },

    // VALIDATE A RECORD = record-validate.pug
    records_validate: {
        header: { 
            title: "Mijn eigenschappen",
        },
        labels: {
            validators: "Validators",
        },
        status: {
            hold: "Wachten",
        },
        buttons: {
            send: "VERZENDEN",
        }
    },

    // VALIDATIONS OF THE RECORDS = record-validations.pug
    records_validations: {
        header: { 
            title: "Mijn eigenschappen",
        },
        labels: {
            count: "validaties",
            validations: "Validaties",
        },
        buttons: {
            send: "Verstuur een validatieverzoek",
        }
    },

    // RECORDS = records.pug
    records: {
        header: { 
            title: "Mijn eigenschappen",
        },
        labels: {
            count: "validaties",
        },
        buttons: {
            validate: "Valideer",
            create: "Eigenschap aanmaken",
        }
    },

    // VOUCHER = voucher.pug
    voucher: {
        header: {
            title: "Voucher details",
        },
        buttons: {
            send: "E-MAIL NAAR MIJ",
            details: "Bekijk details",
        },
        labels: {
            transactions: "Transacties",
            subtract: "Af",
            fund: "Fonds",
            expire: "VERVALDATUM",
            office: "Locatie van de leverancier",
            voucher: "Je kunt je voucher besteden in de winkels op deze locaties",
            shopdetail: "Informatie over de aanbieder",
            productdetail: "INFORMATIE OVER DE AANBIEDING",
        }
    },


    // VOUCHERs = vouchers.pug
    vouchers: {
        header: {
            title: "Mijn vouchers",
        },
        labels: {
            transactions: "Transacties",
            last: "Laatste transactie",
            subtract: "(Af)",
            none: "Geen",
            used: "GEBRUIKT",
            generated: "AANGEMAAKT",
        }
    },

// DIRECTIVES
    // PRODUCT BLOCKS = block-products.pug
    block_products: {
        header: {
            title: "Aanbieding",
        },
        input : {
            placeholder: "Zoek naar een aanbieding",
        },
        labels: {
            discount: "KORTING",
            old: "VAN",
            new: "VOOR",
            title: "Er zijn geen aanbiedingen",
            subtitle: "Op dit moment zijn er geen aanbiedingen beschikbaar",
        },
        buttons: {
            more: "BEKIJK MEER",
        }
    },
    // CONTACT FORM = contact-form.pug
    contact: {
        header: {
            title: "contact",
            subtitle: "CONTACTGEGEVENS",
        },
        labels: {
            address:"Hooiweg 9, 9801 AJ Zuidhorn",
            phone:"(0594) 508888",
            mail: "kindpakket@zuidhorn.nl",
            follow: "Volg ons",
            name: "Naam",
            usermail: "E-mail",
            userphone: "Telefoon",
            organisation: "Organisatie",
            message: "Bericht",
        },
        buttons: {
            send: "VERZENDEN",
        }
    },
    // PRODUCT BLOCK IF IT'S EMPTY = empty-block.pug
    empty_block: {
        guide: "Gebruik de activatie code",
    },
    
    // CRITERIA FOR FUNDS = fund-criterion.pug
    fund_criterion: {
        labels: {
            location: "Zuidhorn",
            value: "Eigenschap waarde",
        },
        buttons: {
            validate: "Valideer",
            add: "Voeg een eigenschap toe",
        },
        status: {
            invalid: "Ongeldig",
            valid: "Geldig",
        }
    },

    // GOOGLE MAPS = google-map.pug
    maps: {
        cancel: "Annuleren",
    },

    // PINCODE CHECK = pincode-control.pug
    // No translations needed

    // AUTHENTICATION POPUP = popup-auth.pug
    popup_auth: {
        header: {
            title: "Inloggen op platform Forus",
            subtitle: "Scan de QR-code met de Me App of log in met je e-mail adres",
        },
        notifications: {
            confirmation: "Het is gelukt!",
            link: "Er is een link naar je e-mailadres gestuurd. Klik op de link om verder te gaan.",
            invalid: "De activatiecode is ongeldig of al gebruikt.",
            voucher_email: "Je voucher is verstuurd naar je mail.",
        },
        buttons: {
            qrcode: "Log in via QR-Code",
            mail: "Log in via e-mail",
            submit: "VOLGENDE",
            cancel: "ANNULEREN",
            confirm: "VOLGENDE",
        },
        labels: {
            timelimit: "Je kunt tot 14:55 uur (Nederlandse tijd) inloggen. Daarna verloopt je sessie.",
            warning: "Sluit dit venster en klik op 'Login' als je de activatiecode al eens hebt gebruikt.",
            join: "Aanmelden",
            scancode: "Scan deze QR-Code met een ander apparaat waar je al op aangemeld bent.",
            mobilecode: "Vul je toegangscode van de Me App in.",
            mail: "Heb je een brief van de gemeente ontvangen met een activatiecode en deze nog niet gebruikt? Ga dan verder. Heb je deze al wel gebruikt? Sluit dan dit venster en klik op 'login'.",
            link: "Vul je e-mailadres in om een link te ontvangen waarmee je kunt inloggen.",
            code: "Vul de activatiecode in die je per brief hebt ontvangen.",
            voucher_email: "Het is gelukt!",
        },
        input: {
            mail: "Vul je e-mail adres in",
            code: "Activatiecode",
            mailing: "E-mail",
        }
    },

    // POPUP OFFICES = popup-offices.pug
    popup_offices: {
        header: {
            title: "We hebben vijf leveranciers gevonden",
            subtitle: "Selecteer een om meer informatie te zien",
        },
        labels: {
            mail: "E-MAIL",
            address: "ADRES",
            hours: "OPENINGSTIJDEN",
            none: "Geen data",
        },
    },
    
    // PROFILE CARD = profile-card.pug
    profile_card: {
        header: {
            title: "Jouw persoonlijke QR-code",
            subtitle: "Laat jouw persoonlijke QR-code scannen door een validator.",
        },
        labels: {
            address: "Adres:",
        },
        buttons: {
            share: "Deel",
            copy: "Kopieer",
            vouchers: "VOUCHERS",
            records: "EIGENSCHAPPEN",
        },
    },

    // MENU = top-navbar.pug
    topnavbar: {
        items: {
            funds:"FONDSEN",
            products:"PRODUCTEN",
            identity:"Identiteit",
        },
        buttons: {
            activate:"Activatiecode",
            login:"Login",
            voucher:"Mijn vouchers",
            records: "Mijn eigenschappen",
            authorize:"Autoriseer apparaat",
            logout:"Uitloggen",
            products:"Producten",
            funds: "Fondsen",
        },
    },
};