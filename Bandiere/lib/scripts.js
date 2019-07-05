bandiere = {
    "Italia": {
        "nome": 'Italia',
        "colori": ["verde", "bianco", "rosso"],
        "direzione": "verticale"

    },
    "Francia": {
        "nome": 'Francia',
        "colori": ["blu", "bianco", "rosso"],
        "direzione": "verticale"
    },
    "Belgio": {
        "nome": 'Francia',
        "colori": ["nero","giallo","rosso"],
        "direzione": "verticale"
    },

    "Irlanda": {
        "nome": 'Irlanda',
        "colori": ["verde","bianco","arancione"],
        "direzione": "verticale"
    },

    "Germania": {
        "nome": 'Germania',
        "colori": ["nero","rosso","giallo"],
        "direzione": "orizzontale"
    },

    "Gabon": {
        "nome": 'Gabon',
        "colori": ["verde", "giallo", "blue"],
        "direzione": "orizzontale"
    },

    "Armenia": {
        "nome": 'Armenia',
        "colori": ["rosso", "blu", "arancione"],
        "direzione": "orizzontale"
    },

    "Austria": {
        "nome": 'Austria',
        "colori": ["rosso", "bianco", "rosso"],
        "direzione": "orizzontale"
    },

    "Bolivia": {
        "nome": 'Bolivia',
        "colori": ["rosso", "giallo", "verde"],
        "direzione": "orizzontale"
    },

    "Bulgaria": {
        "nome": 'Bulgaria',
        "colori": ["bianco", "verdeb", "rosso"],
        "direzione": "orizzontale"
    },

     "Estonia": {
         "nome": 'Bolivia',
         "colori": ["blue", "nero", "bianco"],
         "direzione": "orizzontale"
     },

     "Romania": {
         "nome": 'Romania',
         "colori": ["blu", "giallo", "rosso"],
         "direzione": "verticale"
     },

     "Russia": {
         "nome": 'Russia',
         "colori": ["bianco", "blu", "rosso"],
         "direzione": "orizzontale"
     },

     "Lussemburgo": {
         "nome": 'Lussemburgo',
         "colori": ["rosso", "bianco", "blue"],
         "direzione": "orizzontale"
     },

     "Nigeria": {
         "nome": 'Nigeria',
         "colori": ["verdeb", "bianco", "verdeb"],
         "direzione": "verticale"
     },
 
    }

function disegnaBandiera(nazione) {
    var bandiera = document.getElementById('bandiera');
    
    if (bandiere[nazione].direzione == "verticale") {
        var colori = bandiere[nazione].colori
        var tabella = '<table>';
        tabella += '<tr>';
        for (var i = 0; i < colori.length; i++) {
            tabella += '<td class="' + colori[i] + ' verticale"></td>';
            //tabella += '<td class="' + colori[i] + '+bandiere[nazione].direzione'+"></td>";
        }
        tabella += '</tr></table>';
        bandiera.innerHTML = tabella;
    }
    else {
        var colori = bandiere[nazione].colori
        var tabella = '<table>';
        for (var i = 0; i < colori.length; i++) {
            tabella += '<tr>';
            tabella += '<td class="' + colori[i] + ' verticale"></td>';
            tabella += '</tr>';

        }
        tabella += '</table>';
        bandiera.innerHTML = tabella;
    }
}




