// Console Log
function clog($m){console.log($m);}

var e = {
    stage: $('.stage'),
    stageMenu: $('.stage-menu'),
    menu: $('.menu a'),
    border: $('.border'),
    comune: $('#comune'),
    game: $('#game'),
    nome: $('input.nome'),
    gioca: $('.gioca'),
    stop: $('.stop'),
    time: $('.time'),
    info: $('.help .istruzioni'),
    segnala: $('.help .segnala a')
};

var user = {
    uniqueID: '',
    nome: '',
    answers: {}
};

var sp = ', ';
var br = '<br>';

var vocali = ['a', 'e', 'i', 'o', 'u'];
var comuni = [
    ["cagliari", 1],
    ["sassari", 1],
    ["quartu sant'elena", 5],
    ["olbia", 1],
    ["alghero", 2],
    ["nuoro", 1],
    ["oristano", 3],
    ["carbonia", 2],
    ["selargius", 2],
    ["iglesias", 2],
    ["assemini", 2],
    ["capoterra", 3],
    ["porto torres", 3],
    ["sestu", 1],
    ["monserrato", 3],
    ["sinnai", 1],
    ["sorso", 1],
    ["tempio pausania", 6],
    ["villacidro", 3],
    ["quartucciu", 3],
    ["arzachena", 3],
    ["guspini", 1],
    ["siniscola", 3],
    ["sant'antioco", 3],
    ["la maddalena", 4],
    ["tortoli", 3],
    ["ozieri", 3],
    ["macomer", 3],
    ["terralba", 2],
    ["dolianova", 4],
    ["elmas", 1],
    ["serramanna", 3],
    ["cabras", 1],
    ["ittiri", 1],
    ["san gavino monreale", 7],
    ["dorgali", 2],
    ["sanluri", 2],
    ["uta", 1],
    ["san sperate", 3],
    ["decimomannu", 4],
    ["bosa", 1],
    ["maracalagonis", 5],
    ["sennori", 1],
    ["pula", 1],
    ["oliena", 3],
    ["villasor", 3],
    ["orosei", 3],
    ["gonnosfanadiga", 4],
    ["settimo san pietro", 6],
    ["arbus", 1],
    ["domusnovas", 3],
    ["carloforte", 3],
    ["san giovanni suergiu", 7],
    ["ossi", 1],
    ["castelsardo", 3],
    ["lanusei", 3],
    ["sarroch", 2],
    ["muravera", 3],
    ["portoscuso", 3],
    ["samassi", 2],
    ["santa teresa di gallura", 8],
    ["gonnesa", 2],
    ["budoni", 2],
    ["serrenti", 2],
    ["senorbi", 3],
    ["santa giusta", 4],
    ["marrubiu", 2],
    ["villaputzu", 3],
    ["san teodoro", 4],
    ["ploaghe", 2],
    ["monastir", 3],
    ["ghilarza", 2],
    ["usini", 1],
    ["decimoputzu", 4],
    ["orgosolo", 2],
    ["mogoro", 1],
    ["ussana", 1],
    ["valledoria", 3],
    ["calangianus", 4],
    ["palau", 2],
    ["olmedo", 2],
    ["sardara", 1],
    ["fonni", 1],
    ["bari sardo", 3],
    ["arborea", 3],
    ["siliqua", 2],
    ["budduso", 3],
    ["tertenia", 3],
    ["san vito", 2],
    ["teulada", 3],
    ["baunei", 3],
    ["villamassargia", 4],
    ["villasimius", 4],
    ["bono", 1],
    ["bonorva", 2],
    ["santadi", 1],
    ["loiri porto san paolo", 7],
    ["oschiri", 1],
    ["narcao", 2],
    ["villagrande strisaili", 7],
    ["jerzu", 1],
    ["pattada", 2],
    ["osilo", 1],
    ["samugheo", 3],
    ["thiesi", 2],
    ["uri", 1],
    ["bitti", 1],
    ["orani", 2],
    ["fluminimaggiore", 6],
    ["posada", 2],
    ["torpe", 2],
    ["uras", 1],
    ["calasetta", 3],
    ["pabillonis", 3],
    ["burcei", 2],
    ["abbasanta", 3],
    ["berchidda", 2],
    ["villamar", 1],
    ["nulvi", 2],
    ["isili", 1],
    ["cuglieri", 1],
    ["san nicolo d'arcidano", 7],
    ["bolotana", 2],
    ["gavoi", 2],
    ["guasila", 3],
    ["sant'anna arresi", 5],
    ["pozzomaggiore", 5],
    ["serdiana", 3],
    ["luras", 1],
    ["nuraminis", 3],
    ["mamoiada", 4],
    ["monti", 1],
    ["galtelli", 3],
    ["san vero milis", 4],
    ["arzana", 1],
    ["orune", 2],
    ["villaspeciosa", 5],
    ["desulo", 1],
    ["solarussa", 3],
    ["santu lussurgiu", 4],
    ["perfugas", 1],
    ["ottana", 2],
    ["golfo aranci", 4],
    ["irgoli", 2],
    ["tissi", 1],
    ["orroli", 2], // Dubbio
    ["villanova monteleone", 8],
    ["telti", 1],
    ["simaxis", 2],
    ["paulilatino", 4],
    ["mandas", 1],
    ["escalaplano", 4],
    ["trinita d'agultu e vignola", 9],
    ["lotzorai", 3],
    ["nurri", 1],
    ["silanus", 2],
    ["borore", 1],
    ["sedilo", 1],
    ["riola sardo", 4],
    ["ilbono", 2],
    ["padru", 1],
    ["orotelli", 3],
    ["donori", 2], // Dubbio
    ["giba", 1],
    ["tonara", 2],
    ["villa san pietro", 5],
    ["siurgus donigala", 6], // Dubbio
    ["perdasdefogu", 4],
    ["laconi", 1],
    ["benetutti", 3],
    ["mores", 1],
    ["vallermosa", 3],
    ["ala dei sardi", 5],
    ["luogosanto", 4],
    ["soleminis", 2],
    ["meana sardo", 4],
    ["badesi", 2],
    ["cardedu", 2], // Dubbio
    ["sant'andrea frius", 5],
    ["narbolia", 2],
    ["nurachi", 2],
    ["seneghe", 1],
    ["lode", 2],
    ["sindia", 2],
    ["domus de maria", 5],
    ["lunamatrona", 4],
    ["sorgono", 1],
    ["sarule", 2],
    ["viddalba", 2],
    ["samatzai", 3], // Dubbio
    ["chiaramonti", 4],
    ["villaurbana", 4],
    ["furtei", 2],
    ["ovodda", 2],
    ["stintino", 2],
    ["nuxis", 1],
    ["bonarcado", 2],
    ["milis", 1],
    ["castiadas", 3],
    ["aggius", 1],
    ["musei", 1],
    ["tula", 1],
    ["sant'antonio di gallura", 8],
    ["scano di montiferro", 6],
    ["florinas", 2],
    ["ulassai", 3],
    ["palmas arborea", 5],
    ["gairo", 2], // Dubbio
    ["ales", 1],
    ["perdaxius", 3], // Dubbio
    ["lula", 1],
    ["santa maria coghinas", 7],
    ["villanovafranca", 5],
    ["nule", 1],
    ["selegas", 2], // Dubbio
    ["bortigali", 3],
    ["sedini", 1],
    ["busachi", 2],
    ["baratili san pietro", 7],
    ["seui", 2],
    ["ollolai", 3],
    ["codrongianos", 4],
    ["masainas", 3], // Dubbio
    ["nurallao", 3],
    ["aritzo", 2],
    ["barumini", 2],
    ["urzulei", 3],
    ["girasole", 3],
    ["san basilio", 3],
    ["gesturi", 1],
    ["gergei", 2],
    ["loceri", 2], // Dubbio
    ["ollastra", 2],
    ["silius", 2], // Dubbio
    ["segariu", 3],
    ["ortueri", 3],
    ["pimentel", 3], // Dubbio
    ["atzara", 2],
    ["aglientu", 3],
    ["norbello", 2],
    ["tresnuraghes", 3],
    ["zeddiani", 3],
    ["suelli", 2],
    ["zerfaliu", 3],
    ["villanova tulo", 5],
    ["suni", 1],
    ["barrali", 2], // Dubbio
    ["masullas", 2],
    ["triei", 2],
    ["villaperuccio", 4],
    ["tratalias", 3], // Dubbio
    ["buggerru", 2],
    ["villasalto", 3],
    ["talana", 2],
    ["tuili", 2], // Dubbio
    ["bultei", 2],
    ["guamaggiore", 5],
    ["tramatza", 2],
    ["bonnanaro", 2],
    ["torralba", 2],
    ["burgos", 1],
    ["sadali", 2], // Dubbio
    ["ortacesus", 3], // Dubbio
    ["gonnostramatza", 4],
    ["siamaggiore", 5],
    ["laerru", 2], // Dubbio
    ["nuragus", 2],
    ["fordongianus", 4],
    ["ardauli", 3],// Dubbio
    ["illorai", 3],
    ["oniferi", 3],
    ["siligo", 1],
    ["cossoine", 3],
    ["olzai", 2],
    ["seulo", 2], // Dubbio
    ["piscinas", 2],
    ["collinas", 2],
    ["gesico", 1],  // Dubbio
    ["gadoni", 2],
    ["nughedu san nicolo", 7],
    ["muros", 1],
    ["genoni", 2], // Dubbio
    ["ballao", 2], // Dubbio
    ["austis", 2],
    ["san nicolo gerrei", 6],
    ["siamanna", 3],
    ["usellus", 2], // Dubbio
    ["osini", 2],
    ["bortigiadas", 4],
    ["gonnosno", 3],
    ["ardara", 1],
    ["onifai", 3],
    ["erula", 1],
    ["morgongiori", 4], // Dubbio
    ["putifigari", 3],
    ["bottidda", 1], // Dubbio
    ["ruinas", 2],
    ["bauladu", 3],
    ["esterzili", 3],
    ["baressa", 2],
    ["teti", 1],
    ["anela", 2], // Dubbio
    ["neoneli", 3],
    ["serri", 1],  // Dubbio
    ["siddi", 1],
    ["magomadas", 3],
    ["padria", 1],
    ["belvi", 2],
    ["dualchi", 2],
    ["villanovaforru", 5],
    ["cargeghe", 2], // Dubbio
    ["mara", 1],
    ["pauli arbarei", 6],
    ["escolca", 2],
    ["banari", 2], // Dubbio
    ["tergu", 1],
    ["ussassai", 3],
    ["giave", 2],
    ["ula tirso", 3],
    ["romana", 2],
    ["elini", 2], // Dubbio
    ["birori", 1],
    ["ussaramanna", 4],
    ["ittireddu", 3],
    ["bulzi", 2],  // Dubbio
    ["lei", 1],
    ["montresta", 2],
    ["martis", 1],
    ["loculi", 1],
    ["tiana", 1],
    ["sini", 1],
    ["goni", 1],
    ["nughedu santa vittoria", 7],
    ["gonnoscodina", 4],
    ["armungia", 2],
    ["flussio", 2],
    ["aidomaggiore", 6],
    ["senis", 1], // Dubbio
    ["cheremule", 2],
    ["mogorella", 3],
    ["turri", 1],
    ["bessude", 2], // Dubbio
    ["assolo", 2], // Dubbio
    ["onani", 3],
    ["sorradile", 3],
    ["esporlatu", 3],
    ["siapiccia", 3], // Dubbio
    ["villa sant'antonio", 5],
    ["allai", 1],
    ["lodine", 2],
    ["nureci", 2],
    ["asuni", 2],
    ["genuri", 1],
    ["simala", 2], // Dubbio
    ["villa verde", 3],
    ["noragugume", 3], // Dubbio
    ["villanova truschedu", 6],
    ["curcuris", 1], // Dubbio
    ["pau", 1],
    ["borutta", 2],
    ["albagiara", 4],
    ["pompu", 1],
    ["tinnura", 2],
    ["las plassas", 2],
    ["osidda", 2],
    ["siris", 1],
    ["sagama", 1],
    ["sennariolo", 4],
    ["modolo", 1],
    ["tadasuni", 3],
    ["semestene", 2],
    ["boroneddu", 3],
    ["bidoni", 3],
    ["setzu", 1],
    ["soddi", 2], // Dubbio
    ["monteleone rocca doria", 8],
    ["baradili", 3] // Dubbio
    ];
var cn; // Totale numero comuni
var randN; // Estrae il nome di un Comune dall'array
var cs; // Comune attualmente selezionato
var cl; // Lunghezza nome Comune attualmente selezionato
var risposta; 
var punteggio = {
    giuste : 0,
    totale : -1,
    estrazione: 0
}

var FB_URL = 'https://accenti.firebaseio.com/';

var g = {
    voices: window.speechSynthesis.getVoices(),
    msg: new SpeechSynthesisUtterance()
};


function switchAccenti($t) {
    
    var v = $t.text();
    var va; 
    
    switch(v){
        case 'a' : va = 'à';
        break;
        case 'e' : va = 'è';
        break;
        case 'i' : va = 'ì';
        break;
        case 'o' : va = 'ò';
        break;
        case 'u' : va = 'ù';
        break;
    }
    
    $t.text(va);
    
}

function vocaliEvents() {
    
    var vStart;
    
    $('.vocale').on({   
        'click' : function(ev){
            ev.preventDefault();
            
            var $t = $(this);
            
            $('.vocale').not($t).each(function(i,e){
                $(e).removeClass('selected').text($(e).data('v'));
            });
            
            $t.addClass('selected').removeClass('hover');
            risposta = $t.index()+1;
            
            verificaRisposta();
            
            //setTimeout(verificaRisposta, 500);
            
            
        },
        'mouseenter' : function(){
            $(this).addClass('hover');
            switchAccenti($(this));
            //$('.vocale').addClass('disabled');
            
            
        },
        'mouseleave' : function(){
            if(!$(this).hasClass('selected')) {
                $(this).text($(this).data('v'));
            }
            $(this).removeClass('hover');
            
        }
    });
}

var fb = {
    init: function($obj) {

        var uniqueID = new Date().valueOf(),
            itemRef = new Firebase(FB_URL + user.nome + '_' + uniqueID);

        user.uniqueID = uniqueID;
        user.fullDate = new Date().toString();
        itemRef.set($obj);
    },
    score: function($obj) {

        var uniqueID = new Date().valueOf(),
            itemRef = new Firebase(FB_URL + user.nome + '_' + user.uniqueID + '/answers/' + uniqueID);

        itemRef.set({
            date: new Date().toString(),
            data: $obj
        });
    }
};

function UIEvents() {
    
    e.gioca.on('click', function(ev){
        ev.preventDefault();
        
        if( e.nome.val() !== '' ) {

            //clog(1);            

            localStorage.setItem('nome', e.nome.val());
            user.nome = localStorage.getItem('nome');

            fb.init(user);

            // alert(user.nome);
            $('#nome').text(user.nome);
            e.stage.toggleClass('off');
            timer();
        }
    });

    e.info.on('click', function (ev) {
        ev.preventDefault();
    });
    
    
}

function verificaRisposta() {
    
    e.comune.addClass('disabled');
    speech.talk(e.comune.text());
    
    if(risposta !== comuni[randN][1]) {
        
    }
    
    g.msg.onend = function(ev) {
        
    
        if(risposta === comuni[randN][1]){ // Giusto
            
            e.comune.addClass('corretto');

            setTimeout(function () {
                e.comune.removeClass('corretto');
                estraiComune();
                punteggio.giuste++;
                updateScore();
            }, 500);            
        
        
        } else { // Sbagliato
           
            e.comune.addClass('sbagliato');
            
            setTimeout(function () {
                e.comune.removeClass('sbagliato');
                punteggio.totale++;
                updateScore();
            }, 500);
            
            
        }

        fb.score({
            time: $('.time').text(),
            name: $('#comune').text(),
            number: $('.estrazione').text(),
            percent: $('.percent').text()
        });
        
        e.comune.removeClass('disabled');
    };
    
    
    
    
}

function updateScore() {
    $('.percent').text(Math.ceil(100 / (punteggio.totale/punteggio.giuste)) + '%');
    $('.estrazione').text(punteggio.estrazione);
    $('.giuste').text(punteggio.giuste);
    $('.totale').text(punteggio.totale);
}


function estraiComune() {
    
    reset();
    
    cn = comuni.length;
        
    // Random
    randN = Math.floor(Math.random()*cn);
    cs = comuni[randN][0]; // Comune estratto casualmente  

    

    //cs = 'lei';
    
    cl = cs.length; // Lunghezza nome Comune
    var lcArr = cs.split(''); // Array contenente le lettere del Comune
   
    for (var i=0; i<cl; i++) {
        
        var aOpen = '<a href="#">';
        var aOpenVocale = '<a href="#" class="vocale" data-v="' + lcArr[i] + '">';
        var aClose = '</a>';
        
        if( $.inArray(lcArr[i], vocali) >= 0 ) {
            e.comune.append(aOpenVocale + lcArr[i] + aClose); 
        } else {
            e.comune.append(lcArr[i]);
        }
        
    }
    
    vocaliEvents();
    fontSize();
    
    // Incrementa contatore
    punteggio.totale += 1;
    punteggio.estrazione += 1;
    
}

function fontSize() {
    e.comune.css('font-size', (100/cl) + 'vw');
}

function reset() {
    e.comune.empty();
    risposta = '';
    comuni.splice(randN,1);
}

var speech = {
    init: function() {
        //g.msg.voice = g.voices[10]; // Note: some voices don't support altering params
        g.msg.voice = speechSynthesis.getVoices().filter(function(voice) { return voice.name == 'Whisper'; })[0]
        g.msg.voiceURI = 'native';
        g.msg.volume = .5; // 0 to 1
        g.msg.rate = 1; // 0.1 to 10
        g.msg.pitch = 1; //0 to 2
        g.msg.lang = 'it-IT';
        
        
    },
    talk: function($m){
        g.msg.text = $m;
        speechSynthesis.speak(g.msg);
    }
}; 

var timer = function() {
   
    var t = 0;
    var m = function() {
        if (t<600) {
            return '0' + Math.floor(t/60);
        } else {
            return Math.floor(t/60);
        }
    };
    var s = function() {
        var m = Math.floor(t/60);
        var s = t-(60*m);
        
        if (s<10) {
            return '0' + s;
        } else {
            return s;    
        }    
    };
    
    
    var int = setInterval(function(){
        e.time.text(m() + ':' + s());
        t += 1;    
    }, 1000);
    
};



$(function(){
    UIEvents();
    speech.init();
    estraiComune();
    
});

