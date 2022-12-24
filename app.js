console.log('Hola, todo está funcionando');

const cards = [];

class Cards {
    constructor(name, img, id, elixir){
        this.name = name;
        this.img = img;
        this.id = id;
        this.elixir = elixir;
    }
}

// Tropa
const caballero = new Cards('Caballero','https://cdn.statsroyale.com/images/cards/full/knight.png','26000000',3);
const arqueras = new Cards('Arqueras','https://cdn.statsroyale.com/images/cards/full/archers.png','26000001',3);
const duendes = new Cards('Duendes','https://cdn.statsroyale.com/images/cards/full/goblins.png','26000002',2);
const gigante = new Cards('Gigante','https://cdn.statsroyale.com/images/cards/full/giant.png','26000003',5);
const pekka = new Cards('P.E.K.K.A.','https://cdn.statsroyale.com/images/cards/full/pekka.png','26000004',7);
const esbirros = new Cards('Esbirros','https://cdn.statsroyale.com/images/cards/full/minion.png','26000005',3);
const globoBombastico = new Cards('Globo Bombástico','https://cdn.statsroyale.com/images/cards/full/chr_balloon.png','26000006',5);
const bruja = new Cards('Bruja','https://cdn.statsroyale.com/images/cards/full/witch.png','26000007',5);
const barbaros = new Cards('Bárbaros','https://cdn.statsroyale.com/images/cards/full/barbarians.png','26000008',5);
const golem = new Cards('Gólem','https://cdn.statsroyale.com/images/cards/full/chr_golem.png','26000009',8);
const esqueletos = new Cards('Esqueletos','https://cdn.statsroyale.com/images/cards/full/skeletons.png','26000010',1);
const valquiria = new Cards('Valkiria','https://cdn.statsroyale.com/images/cards/full/valkyrie.png','26000011',4);
const ejercitoDeEsqueletos = new Cards('Ejército De Esqueletos','https://cdn.statsroyale.com/images/cards/full/skeleton_horde.png','26000012',3);
const bombardero = new Cards('Bombardero','https://cdn.statsroyale.com/images/cards/full/bomber.png','26000013',2);
const mosquetera = new Cards('Mosquetera','https://cdn.statsroyale.com/images/cards/full/musketeer.png','26000014',4);
const bebeDragon = new Cards('Bebé Dragón','https://cdn.statsroyale.com/images/cards/full/baby_dragon.png','26000015',4);
const principe = new Cards('Príncipe','https://cdn.statsroyale.com/images/cards/full/prince.png','26000016',5);
const mago = new Cards('Mago','https://cdn.statsroyale.com/images/cards/full/wizard.png','26000017',5);
const miniPekka = new Cards('Mini P.E.K.K.A.','https://cdn.statsroyale.com/images/cards/full/mini_pekka.png','26000018',4);
const duendesConLanza = new Cards('Duendes Con Lanza','https://cdn.statsroyale.com/images/cards/full/goblin_archer.png','26000019',2);
const esqueletoGigante = new Cards('Esqueleto Gigante','https://cdn.statsroyale.com/images/cards/full/giant_skeleton.png','26000020',6);
const montapuercos = new Cards('Montapuercos','https://cdn.statsroyale.com/images/cards/full/hog_rider.png','26000021',4);
const hordaDeEsbirros = new Cards('Horda De Esbirros','https://cdn.statsroyale.com/images/cards/full/minion_horde.png','26000022',5);
const magoDeHielo = new Cards('Mago De Hielo','https://cdn.statsroyale.com/images/cards/full/ice_wizard.png','26000023',3);
const giganteNoble = new Cards('Gigante Noble','https://cdn.statsroyale.com/images/cards/full/royalgiant.png','26000024',6);
const guardias = new Cards('Guardias','https://cdn.statsroyale.com/images/cards/full/skeleton_warriors.png','26000025', 3);
const princesa = new Cards('Princesa','https://cdn.statsroyale.com/images/cards/full/princess.png','26000026', 3);
const principeOscuro = new Cards('Principe Oscuro','https://cdn.statsroyale.com/images/cards/full/dark_prince.png','26000027',4);
const trioDeMosqueteras = new Cards('Trío De Mosqueteras','https://cdn.statsroyale.com/images/cards/full/three_musketeers.png','26000028',9);
const sabuesoDeLava = new Cards('Sabueso De Lava','https://cdn.statsroyale.com/images/cards/full/lava_hound.png','26000029',7);
const espirituDeHielo = new Cards('Espíritu De Hielo','https://cdn.statsroyale.com/images/cards/full/snow_spirits.png','26000030',1);
const espirituDeFuego = new Cards('Espíritu de Fuego','https://cdn.statsroyale.com/images/cards/full/fire_spirits.png','26000031',1);
const minero = new Cards('Minero','https://cdn.statsroyale.com/images/cards/full/miner.png','26000032',3);
const chispitas = new Cards('Chispitas','https://cdn.statsroyale.com/images/cards/full/zapMachine.png','26000033',6);
const lanzarrocas = new Cards('Lanzarrocas','https://cdn.statsroyale.com/images/cards/full/bowler.png','26000034',5);
const lenador = new Cards('Leñador','https://cdn.statsroyale.com/images/cards/full/rage_barbarian.png','26000035',4);
const arieteDeBatalla = new Cards('Ariete De Batalla','https://cdn.statsroyale.com/images/cards/full/battle_ram.png','26000036',4);
const dragonInfernal = new Cards('Dragón Infernal','https://cdn.statsroyale.com/images/cards/full/inferno_dragon.png','26000037',4);
const golemDeHielo = new Cards('Gólem De Hielo','https://cdn.statsroyale.com/images/cards/full/ice_golem.png','26000038',2);
const megaesbirro = new Cards('Mega Esbirro','https://cdn.statsroyale.com/images/cards/full/mega_minion.png','26000039',3);
const duendeLanzadardos = new Cards('Duende Lanzadardos','https://cdn.statsroyale.com/images/cards/full/blowdart_goblin.png','26000040',3);
const pandillaDeDuendes = new Cards('Pandilla De Duendes','https://cdn.statsroyale.com/images/cards/full/goblin_gang.png','26000041',3);
const magoElectrico = new Cards('Mago Eléctrico','https://cdn.statsroyale.com/images/cards/full/electro_wizard.png','26000042',4);
const barbarosDeElite = new Cards('Bárbaros De Élite','https://cdn.statsroyale.com/images/cards/full/angry_barbarian.png','26000043',6);
const cazador = new Cards('Cazador','https://cdn.statsroyale.com/images/cards/full/hunter.png','26000044',4);
const verdugo = new Cards('Verdugo','https://cdn.statsroyale.com/images/cards/full/executioner.png','26000045',5);
const bandida = new Cards('Bandida','https://cdn.statsroyale.com/images/cards/full/bandit.png','26000046',3);
const reclutasReales = new Cards('Reclutas Reales','https://cdn.statsroyale.com/images/cards/full/royal_recruits.png','26000047',7);
const brujaNocturna = new Cards('Bruja Noctruna','https://cdn.statsroyale.com/images/cards/full/nightwitch.png','26000048',4);
const murcielagos = new Cards('Murciélagos','https://cdn.statsroyale.com/images/cards/full/bats.png','26000049',2);
const fantasmaReal = new Cards('Fantasma Real','https://cdn.statsroyale.com/images/cards/full/ghost.png','26000050',3);
const montacarneros = new Cards('Montacarneros','https://cdn.statsroyale.com/images/cards/full/ram_rider.png','26000051',5);
const electrocutadores = new Cards('Electrocutadores','https://cdn.statsroyale.com/images/cards/full/zappies.png','26000052',4);
const pillos = new Cards('Pillos','https://cdn.statsroyale.com/images/cards/full/rascals.png','26000053',5);
const canonConRuedas = new Cards('Cañón Con Ruedas','https://cdn.statsroyale.com/images/cards/full/cannon_cart.png','26000054',5);
const megacaballero = new Cards('Megacaballero','https://cdn.statsroyale.com/images/cards/full/mega_knight.png','26000055',7);
const barrilDeEsqueletos = new Cards('Barril De Esqueletos','https://cdn.statsroyale.com/images/cards/full/skeleton_balloon.png','26000056',3);
const maquinaVoladora = new Cards('Máquina Voladora','https://cdn.statsroyale.com/images/cards/full/flying_machine.png','26000057',4);
const rompemuros = new Cards('Rompemuros','https://cdn.statsroyale.com/images/cards/full/wallbreaker.png','26000058',2);
const puercosReales = new Cards('Puercos Reales','https://cdn.statsroyale.com/images/cards/full/royal_hog.png','26000059',5);
const duendeGigante = new Cards('Duende Gigante','https://cdn.statsroyale.com/images/cards/full/goblin_giant.png','26000060',6);
const pescador = new Cards('Pescador','https://cdn.statsroyale.com/images/cards/full/fisherman.png','26000061',3);
const arqueroMagico = new Cards('Arquero Mágico','https://cdn.statsroyale.com/images/cards/full/magic_archer.png','26000062',4);
const dragonElectrico = new Cards('Dragón Eléctrico','https://cdn.statsroyale.com/images/cards/full/electro_dragon.png','26000063',5);
const lanzafuegos= new Cards('Lanzafuegos','https://cdn.statsroyale.com/images/cards/full/firecracker.png','26000064',3);
const granMinero = new Cards('Gran Minero','https://cdn.statsroyale.com/images/cards/full/mightyminer.png','26000065',4);
const golemDeElixir = new Cards('Gólem De Elixir','https://cdn.statsroyale.com/images/cards/full/elixir_golem.png','26000067',3);
const curanderaGuerrera = new Cards('Curandera Guerrera','https://cdn.statsroyale.com/images/cards/full/battle_healer.png','26000068',4);
const reyEsqueleto = new Cards('Rey Esqueleto','https://cdn.statsroyale.com/images/cards/full/skeletonking.png','26000069',4);
const reinaArquera = new Cards('Reina Arquera','https://cdn.statsroyale.com/images/cards/full/archerqueen.png','26000072',5);
const caballeroDorado = new Cards('Caballero Dorado','https://cdn.statsroyale.com/images/cards/full/goldenknight.png','26000074',4);
const monje = new Cards('Monje','https://cdn.statsroyale.com/images/cards/full/monk.png','26000077',5);
const dragonesEsqueleto = new Cards('Dragones Esqueleto','https://cdn.statsroyale.com/images/cards/full/skeletondragon.png','26000080',4);
const brujaMadre = new Cards('Bruja Madre','https://cdn.statsroyale.com/images/cards/full/motherwitch.png','26000083',4);
const espirituElectrico = new Cards('Espíritu Eléctrico','https://cdn.statsroyale.com/images/cards/full/electrospirit.png','26000084',1);
const giganteElectrico = new Cards('Gigante Eléctrico','https://cdn.statsroyale.com/images/cards/full/electrogiant.png','26000085',7);
const fenix = new Cards('Fénix','https://cdn.statsroyale.com/images/cards/full/phoenix.png','26000087',4);


//Estructura
const canon = new Cards('Cañón','https://cdn.statsroyale.com/images/cards/full/chaos_cannon.png','27000000',3);
const chozaDeDuendes = new Cards('Choza De Duendes','https://cdn.statsroyale.com/images/cards/full/fire_furnace.png','27000001',5);
const mortero = new Cards('Mortero','https://cdn.statsroyale.com/images/cards/full/building_mortar.png','27000002',4);
const torreInfernal = new Cards('Torre Infernal','https://cdn.statsroyale.com/images/cards/full/building_inferno.png','27000003',5);
const torreBombardera = new Cards('Torre Bombardera','https://cdn.statsroyale.com/images/cards/full/bomb_tower.png','27000004',4);
const chozaDeBarbaros = new Cards('Choza De Bárbaros','https://cdn.statsroyale.com/images/cards/full/barbarian_hut.png','27000005',7);
const torreTesla = new Cards('Torre Tesla','https://cdn.statsroyale.com/images/cards/full/building_tesla.png','27000006',4);
const recolectroDeElixir = new Cards('Recolectro De Elixir','https://cdn.statsroyale.com/images/cards/full/building_elixir_collector.png','27000007',6);
const ballesta = new Cards('Ballesta','https://cdn.statsroyale.com/images/cards/full/building_xbow.png','27000008',6);
const lapida = new Cards('Lápida','https://cdn.statsroyale.com/images/cards/full/tombstone.png','27000009',3);
const horno = new Cards('Horno','https://cdn.statsroyale.com/images/cards/full/firespirit_hut.png','27000010',4);
const jaulaDelForzudo = new Cards('Jaula Del Forzudo','https://cdn.statsroyale.com/images/cards/full/goblin_cage.png','27000012',4);
const excavadoraDeDuendes = new Cards('Excavadora De Duendes','https://cdn.statsroyale.com/images/cards/full/goblindrill.png','27000013',4);


//Hechizo
const bolaDeFuego = new Cards('Bola De Fuego','https://cdn.statsroyale.com/images/cards/full/fire_fireball.png','28000000',4);
const flechas = new Cards('Flechas','https://cdn.statsroyale.com/images/cards/full/order_volley.png','28000001',3);
const furia = new Cards('Furia','https://cdn.statsroyale.com/images/cards/full/rage.png','28000002',2);
const cohete = new Cards('Cohete','https://cdn.statsroyale.com/images/cards/full/rocket.png','28000003',6);
const barrilDeDuendes = new Cards('Barril De Duendes','https://cdn.statsroyale.com/images/cards/full/goblin_barrel.png','28000004',3);
const hielo = new Cards('Hielo','https://cdn.statsroyale.com/images/cards/full/freeze.png','28000005',4);
const espejo = new Cards('Espejo','https://cdn.statsroyale.com/images/cards/full/mirror.png','28000006',1.5);
const rayo = new Cards('Rayo','https://cdn.statsroyale.com/images/cards/full/lightning.png','28000007',6);
const descarga = new Cards('Descarga','https://cdn.statsroyale.com/images/cards/full/zap.png','28000008',2);
const veneno = new Cards('Veneno','https://cdn.statsroyale.com/images/cards/full/poison.png','28000009',4);
const cementerio = new Cards('Cementerio','https://cdn.statsroyale.com/images/cards/full/graveyard.png','28000010',5);
const elTronco = new Cards('El Tronco','https://cdn.statsroyale.com/images/cards/full/the_log.png','28000011',2);
const tornado = new Cards('Tornado','https://cdn.statsroyale.com/images/cards/full/tornado.png','28000012',3);
const clon = new Cards('Clon','https://cdn.statsroyale.com/images/cards/full/copy.png','28000013',3);
const terremoto = new Cards('Terremoto','https://cdn.statsroyale.com/images/cards/full/earthquake.png','28000014',3);
const barrilDeBarbaro= new Cards('Barril De Bárbaro','https://cdn.statsroyale.com/images/cards/full/barb_barrel.png','28000015',2);
const espirituSanador = new Cards('Espíritu Sanador','https://cdn.statsroyale.com/images/cards/full/healspirit.png','28000016',1);
const bolaDeNieve = new Cards('Bola De Nieve','https://cdn.statsroyale.com/images/cards/full/snowball.png','28000017',2);
const paqueteReal = new Cards('Paquete Real','https://cdn.statsroyale.com/images/cards/full/royal_delivery.png','28000018',3);

cards.push(caballero,arqueras,duendes,gigante,pekka,esbirros,globoBombastico,bruja,barbaros,golem,esqueletos,valquiria,ejercitoDeEsqueletos,bombardero,mosquetera,bebeDragon,
    principe,mago,miniPekka,duendesConLanza,esqueletoGigante,montapuercos,hordaDeEsbirros,magoDeHielo,giganteNoble,guardias,princesa,principeOscuro,trioDeMosqueteras,sabuesoDeLava,
    espirituDeHielo,espirituDeFuego,minero,chispitas,lanzarrocas,lenador,arieteDeBatalla,dragonInfernal,golemDeHielo,megaesbirro,duendeLanzadardos,pandillaDeDuendes,magoElectrico,
    barbarosDeElite,cazador,verdugo,bandida,reclutasReales,brujaNocturna,murcielagos,fantasmaReal,montacarneros,electrocutadores,pillos,canonConRuedas,megacaballero,barrilDeEsqueletos,
    maquinaVoladora,rompemuros,puercosReales,duendeGigante,pescador,arqueroMagico, dragonElectrico,lanzafuegos,granMinero,golemDeElixir,curanderaGuerrera,reyEsqueleto,reinaArquera,
    caballeroDorado,monje,dragonesEsqueleto,brujaMadre,espirituElectrico,giganteElectrico,fenix,espirituSanador,canon,chozaDeDuendes,mortero,torreInfernal,torreBombardera,
    chozaDeBarbaros,torreTesla,recolectroDeElixir,ballesta,lapida,horno,jaulaDelForzudo,excavadoraDeDuendes,bolaDeFuego,flechas,furia,cohete,barrilDeDuendes,hielo,espejo,
    rayo,descarga,veneno,cementerio,elTronco,tornado,clon,terremoto,barrilDeBarbaro,bolaDeNieve,paqueteReal
);

const randomButton = document.querySelector('.btn-generate-deck');
const divDeck = document.querySelector('.deck');
const share = document.querySelector('.share');
randomButton.addEventListener('click',(startRandom));

function startRandom(){
    //Eliminando el contenido
    divDeck.innerHTML = '';
    share.innerHTML = '';

    //Acomoda la lista de manera aleatoria, sin repetirse
    cards.sort(function() {return Math.random() - 0.5});

    //Creando un enlace para compartir el mazo
    const aShare = document.createElement('a');

    //Creando un párrafo para poner el promedio de elixir
    const pElixir = document.createElement('p');

    //Creando una imágen 'Compartir'.
    const imgShare = document.createElement('img');

    //Agregando la ruta para ver la imágen de 'Compartir'
    imgShare.src = 'https://link.clashroyale.com/deck/assets/build/0.3/images/stamp_deck@2x.png';

    //Creando arreglo con las 8 cartas únicamente
    let eightCards = [];

    //Iterando solo para obtener los primeras 8 cartas
    for(let i = 0; i<8; i++){
        const img = document.createElement('img');
        img.src = cards[i].img;
        divDeck.appendChild(img);
        eightCards.push(cards[i]);
    }
    //Agregando la url del link que se va a compartir dependiendo del mazo
    aShare.href = `https://link.clashroyale.com/deck/en?deck=${cards[0].id};${cards[1].id};${cards[2].id};${cards[3].id};${cards[4].id};${cards[5].id};${cards[6].id};${cards[7].id}`;
    aShare.target = "_blank";

    //Contador de la suma de elixir de cada carta
    let sumaElixir = 0;

    //Iteramos por cada carta de las 8 primeras que conforman el mazo
    for(let card of eightCards){
        //Le sumanos el valor de elixir de cada carta a el contador
        sumaElixir += card.elixir;
    }

    //Variable con el promedio de el valor de elixir de las cartas
    let promedio = sumaElixir / eightCards.length;
    console.log(promedio);

    //Agregamos el texto al párrafo más el promedio con solo un decimal
    pElixir.innerText = `Average Elixir cost: ${promedio.toFixed(1)}`;
    //Cambiamos el color del texto a blanco
    pElixir.style.color = '#fff';
    //Lo angregamos al html dentro de la etiqueta div class share.
    share.appendChild(pElixir);

    console.log(eightCards);

    //Agregando el enlace al div .share
    share.appendChild(aShare);

    //Agregando la imágen al enlace
    aShare.appendChild(imgShare);
}

console.log(cards.length);
/* console.log(cards); */
