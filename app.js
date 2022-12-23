console.log('Hola, todo está funcionando');

const cards = [];

class Cards {
    constructor(name, img, id){
        this.name = name;
        this.img = img;
        this.id = id;
    }
}

// Tropa
/* const caballero = new Cards('Caballero','https://cdn.statsroyale.com/images/cards/full/knight.png');
const arqueras = new Cards('Arqueras','https://cdn.statsroyale.com/images/cards/full/archers.png');
const duendes = new Cards('Duendes','https://cdn.statsroyale.com/images/cards/full/goblins.png');
const gigante = new Cards('Gigante','https://cdn.statsroyale.com/images/cards/full/giant.png');
const pekka = new Cards('P.E.K.K.A.','https://cdn.statsroyale.com/images/cards/full/pekka.png');
const esbirros = new Cards('Esbirros','https://cdn.statsroyale.com/images/cards/full/minion.png');
const globoBombastico = new Cards('Globo Bombástico','https://cdn.statsroyale.com/images/cards/full/chr_balloon.png');
const bruja = new Cards('Bruja','https://cdn.statsroyale.com/images/cards/full/witch.png');
const barbaros = new Cards('Bárbaros','https://cdn.statsroyale.com/images/cards/full/barbarians.png');
const golem = new Cards('Gólem','https://cdn.statsroyale.com/images/cards/full/chr_golem.png');
const esqueletos = new Cards('Esqueletos','https://cdn.statsroyale.com/images/cards/full/skeletons.png');
const valquiria = new Cards('Valkiria','https://cdn.statsroyale.com/images/cards/full/valkyrie.png');
const ejercitoDeEsqueletos = new Cards('Ejército De Esqueletos','https://cdn.statsroyale.com/images/cards/full/skeleton_horde.png');
const bombardero = new Cards('Bombardero','https://cdn.statsroyale.com/images/cards/full/bomber.png');
const mosquetera = new Cards('Mosquetera','https://cdn.statsroyale.com/images/cards/full/musketeer.png');
const bebeDragon = new Cards('Bebé Dragón','https://cdn.statsroyale.com/images/cards/full/baby_dragon.png');
const principe = new Cards('Príncipe','https://cdn.statsroyale.com/images/cards/full/prince.png');
const mago = new Cards('Mago','https://cdn.statsroyale.com/images/cards/full/wizard.png');
const miniPekka = new Cards('Mini P.E.K.K.A.','https://cdn.statsroyale.com/images/cards/full/mini_pekka.png');
const duendesConLanza = new Cards('Duendes Con Lanza','https://cdn.statsroyale.com/images/cards/full/goblin_archer.png');
const esqueletoGigante = new Cards('Esqueleto Gigante','https://cdn.statsroyale.com/images/cards/full/giant_skeleton.png');
const montapuercos = new Cards('Montapuercos','https://cdn.statsroyale.com/images/cards/full/hog_rider.png');
const hordaDeEsbirros = new Cards('Horda De Esbirros','https://cdn.statsroyale.com/images/cards/full/minion_horde.png');
const magoDeHielo = new Cards('Mago De Hielo','https://cdn.statsroyale.com/images/cards/full/ice_wizard.png');
const giganteNoble = new Cards('Gigante Noble','https://cdn.statsroyale.com/images/cards/full/royalgiant.png');
const guardias = new Cards('Guardias','https://cdn.statsroyale.com/images/cards/full/skeleton_warriors.png');
const princesa = new Cards('Princesa','https://cdn.statsroyale.com/images/cards/full/princess.png');
const principeOscuro = new Cards('Principe Oscuro','https://cdn.statsroyale.com/images/cards/full/dark_prince.png');
const trioDeMosqueteras = new Cards('Trío De Mosqueteras','https://cdn.statsroyale.com/images/cards/full/three_musketeers.png');
const sabuesoDeLava = new Cards('Sabueso De Lava','https://cdn.statsroyale.com/images/cards/full/lava_hound.png');
const espirituDeHielo = new Cards('Espíritu De Hielo','https://cdn.statsroyale.com/images/cards/full/snow_spirits.png');
const espirituDeFuego = new Cards('Espíritu de Fuego','https://cdn.statsroyale.com/images/cards/full/fire_spirits.png');
const minero = new Cards('Minero','https://cdn.statsroyale.com/images/cards/full/miner.png');
const chispitas = new Cards('Chispitas','https://cdn.statsroyale.com/images/cards/full/zapMachine.png');
const lanzarrocas = new Cards('Lanzarrocas','https://cdn.statsroyale.com/images/cards/full/bowler.png');
const lenador = new Cards('Leñador','https://cdn.statsroyale.com/images/cards/full/rage_barbarian.png');
const arieteDeBatalla = new Cards('Ariete De Batalla','https://cdn.statsroyale.com/images/cards/full/battle_ram.png');
const dragonInfernal = new Cards('Dragón Infernal','https://cdn.statsroyale.com/images/cards/full/inferno_dragon.png');
const golemDeHielo = new Cards('Gólem De Hielo','https://cdn.statsroyale.com/images/cards/full/ice_golem.png');
const megaesbirro = new Cards('Mega Esbirro','https://cdn.statsroyale.com/images/cards/full/mega_minion.png');
const duendeLanzadardos = new Cards('Duende Lanzadardos','https://cdn.statsroyale.com/images/cards/full/blowdart_goblin.png');
const pandillaDeDuendes = new Cards('Pandilla De Duendes','https://cdn.statsroyale.com/images/cards/full/goblin_gang.png');
const magoElectrico = new Cards('Mago Eléctrico','https://cdn.statsroyale.com/images/cards/full/electro_wizard.png');
const barbarosDeElite = new Cards('Bárbaros De Élite','https://cdn.statsroyale.com/images/cards/full/angry_barbarian.png');
const cazador = new Cards('Cazador','https://cdn.statsroyale.com/images/cards/full/hunter.png');
const verdugo = new Cards('Verdugo','https://cdn.statsroyale.com/images/cards/full/executioner.png');
const bandida = new Cards('Bandida','https://cdn.statsroyale.com/images/cards/full/bandit.png');
const reclutasReales = new Cards('Reclutas Reales','https://cdn.statsroyale.com/images/cards/full/royal_recruits.png');
const brujaNocturna = new Cards('Bruja Noctruna','https://cdn.statsroyale.com/images/cards/full/nightwitch.png');
const murcielagos = new Cards('Murciélagos','https://cdn.statsroyale.com/images/cards/full/bats.png');
const fantasmaReal = new Cards('Fantasma Real','https://cdn.statsroyale.com/images/cards/full/ghost.png');
const montacarneros = new Cards('Montacarneros','https://cdn.statsroyale.com/images/cards/full/ram_rider.png');
const electrocutadores = new Cards('Electrocutadores','https://cdn.statsroyale.com/images/cards/full/zappies.png');
const pillos = new Cards('Pillos','https://cdn.statsroyale.com/images/cards/full/rascals.png');
const canonConRuedas = new Cards('Cañón Con Ruedas','https://cdn.statsroyale.com/images/cards/full/cannon_cart.png');
const megacaballero = new Cards('Megacaballero','https://cdn.statsroyale.com/images/cards/full/mega_knight.png');
const barrilDeEsqueletos = new Cards('Barril De Esqueletos','https://cdn.statsroyale.com/images/cards/full/skeleton_balloon.png');
const maquinaVoladora = new Cards('Máquina Voladora','https://cdn.statsroyale.com/images/cards/full/flying_machine.png');
const rompemuros = new Cards('Rompemuros','https://cdn.statsroyale.com/images/cards/full/wallbreaker.png');
const puercosReales = new Cards('Puercos Reales','https://cdn.statsroyale.com/images/cards/full/royal_hog.png');
const duendeGigante = new Cards('Duende Gigante','https://cdn.statsroyale.com/images/cards/full/goblin_giant.png');
const pescador = new Cards('Pescador','https://cdn.statsroyale.com/images/cards/full/fisherman.png');
const arqueroMagico = new Cards('Arquero Mágico','https://cdn.statsroyale.com/images/cards/full/magic_archer.png');
const dragonElectrico = new Cards('Dragón Eléctrico','https://cdn.statsroyale.com/images/cards/full/electro_dragon.png');
const lanzafuegos= new Cards('Lanzafuegos','https://cdn.statsroyale.com/images/cards/full/firecracker.png');
const granMinero = new Cards('Gran Minero','https://cdn.statsroyale.com/images/cards/full/mightyminer.png');
const golemDeElixir = new Cards('Gólem De Elixir','https://cdn.statsroyale.com/images/cards/full/elixir_golem.png');
const curanderaGuerrera= new Cards('Curandera Guerrera','https://cdn.statsroyale.com/images/cards/full/battle_healer.png');
const reyEsqueleto = new Cards('Rey Esqueleto','https://cdn.statsroyale.com/images/cards/full/skeletonking.png');
const reinaArquera = new Cards('Reina Arquera','https://cdn.statsroyale.com/images/cards/full/archerqueen.png');
const caballeroDorado = new Cards('Caballero Dorado','https://cdn.statsroyale.com/images/cards/full/goldenknight.png');
const monje = new Cards('Monje','https://cdn.statsroyale.com/images/cards/full/monk.png');
const dragonesEsqueleto = new Cards('Dragones Esqueleto','https://cdn.statsroyale.com/images/cards/full/skeletondragon.png');
const brujaMadre = new Cards('Bruja Madre','https://cdn.statsroyale.com/images/cards/full/motherwitch.png');
const espirituElectrico = new Cards('Espíritu Eléctrico','https://cdn.statsroyale.com/images/cards/full/electrospirit.png');
const giganteElectrico = new Cards('Gigante Eléctrico','https://cdn.statsroyale.com/images/cards/full/electrogiant.png');
const fenix = new Cards('Fénix','https://cdn.statsroyale.com/images/cards/full/phoenix.png'); */


//Estructura
/* const canon = new Cards('Cañón','https://cdn.statsroyale.com/images/cards/full/chaos_cannon.png');
const chozaDeDuendes = new Cards('Choza De Duendes','https://cdn.statsroyale.com/images/cards/full/fire_furnace.png');
const mortero = new Cards('Mortero','https://cdn.statsroyale.com/images/cards/full/building_mortar.png');
const torreInfernal = new Cards('Torre Infernal','https://cdn.statsroyale.com/images/cards/full/building_inferno.png');
const torreBombardera = new Cards('Torre Bombardera','https://cdn.statsroyale.com/images/cards/full/bomb_tower.png');
const chozaDeBarbaros = new Cards('Choza De Bárbaros','https://cdn.statsroyale.com/images/cards/full/barbarian_hut.png');
const torreTesla = new Cards('Torre Tesla','https://cdn.statsroyale.com/images/cards/full/building_tesla.png');
const recolectroDeElixir = new Cards('Recolectro De Elixir','https://cdn.statsroyale.com/images/cards/full/building_elixir_collector.png');
const ballesta = new Cards('Ballesta','https://cdn.statsroyale.com/images/cards/full/building_xbow.png');
const lapida = new Cards('Lápida','https://cdn.statsroyale.com/images/cards/full/tombstone.png');
const horno = new Cards('Horno','https://cdn.statsroyale.com/images/cards/full/firespirit_hut.png');
const jaulaDelForzudo = new Cards('Jaula Del Forzudo','https://cdn.statsroyale.com/images/cards/full/goblin_cage.png');
const excavadoraDeDuendes = new Cards('Excavadora De Duendes','https://cdn.statsroyale.com/images/cards/full/goblindrill.png'); */


//Hechizo
const bolaDeFuego = new Cards('Bola De Fuego','https://cdn.statsroyale.com/images/cards/full/fire_fireball.png','28000000');
const flechas = new Cards('Flechas','https://cdn.statsroyale.com/images/cards/full/order_volley.png','28000001');
const furia = new Cards('Furia','https://cdn.statsroyale.com/images/cards/full/rage.png','28000002');
const cohete = new Cards('Cohete','https://cdn.statsroyale.com/images/cards/full/rocket.png','28000003');
const barrilDeDuendes = new Cards('Barril De Duendes','https://cdn.statsroyale.com/images/cards/full/goblin_barrel.png','28000004');
const hielo = new Cards('Hielo','https://cdn.statsroyale.com/images/cards/full/freeze.png','28000005');
const espejo = new Cards('Espejo','https://cdn.statsroyale.com/images/cards/full/mirror.png','28000006');
const rayo = new Cards('Rayo','https://cdn.statsroyale.com/images/cards/full/lightning.png','28000007');
const descarga = new Cards('Descarga','https://cdn.statsroyale.com/images/cards/full/zap.png','28000008');
const veneno = new Cards('Veneno','https://cdn.statsroyale.com/images/cards/full/poison.png','28000009');
const cementerio = new Cards('Cementerio','https://cdn.statsroyale.com/images/cards/full/graveyard.png','28000010');
const elTronco = new Cards('El Tronco','https://cdn.statsroyale.com/images/cards/full/the_log.png','28000011');
const tornado = new Cards('Tornado','https://cdn.statsroyale.com/images/cards/full/tornado.png','28000012');
const clon = new Cards('Clon','https://cdn.statsroyale.com/images/cards/full/copy.png','28000013');
const terremoto = new Cards('Terremoto','https://cdn.statsroyale.com/images/cards/full/earthquake.png','28000014');
const barrilDeBarbaro= new Cards('Barril De Bárbaro','https://cdn.statsroyale.com/images/cards/full/barb_barrel.png','28000015');
const espirituSanador = new Cards('Espíritu Sanador','https://cdn.statsroyale.com/images/cards/full/healspirit.png','28000016');
const bolaDeNieve = new Cards('Bola De Nieve','https://cdn.statsroyale.com/images/cards/full/snowball.png','28000017');
const paqueteReal = new Cards('Paquete Real','https://cdn.statsroyale.com/images/cards/full/royal_delivery.png','28000018');

cards.push(/* caballero,arqueras,duendes,gigante,pekka,esbirros,globoBombastico,bruja,barbaros,golem,esqueletos,valquiria,ejercitoDeEsqueletos,bombardero,mosquetera,bebeDragon,
    principe,mago,miniPekka,duendesConLanza,esqueletoGigante,montapuercos,hordaDeEsbirros,magoDeHielo,giganteNoble,guardias,princesa,principeOscuro,trioDeMosqueteras,sabuesoDeLava,
    espirituDeHielo,espirituDeFuego,minero,chispitas,lanzarrocas,lenador,arieteDeBatalla,dragonInfernal,golemDeHielo,megaesbirro,duendeLanzadardos,pandillaDeDuendes,magoElectrico,
    barbarosDeElite,cazador,verdugo,bandida,reclutasReales,brujaNocturna,murcielagos,fantasmaReal,montacarneros,electrocutadores,pillos,canonConRuedas,megacaballero,barrilDeEsqueletos,
    maquinaVoladora,rompemuros,puercosReales,duendeGigante,pescador,arqueroMagico, dragonElectrico,lanzafuegos,granMinero,golemDeElixir,curanderaGuerrera,reyEsqueleto,reinaArquera,
    caballeroDorado,monje,dragonesEsqueleto,brujaMadre,espirituElectrico,giganteElectrico,fenix,espirituSanador,canon,chozaDeDuendes,mortero,torreInfernal,torreBombardera,
    chozaDeBarbaros,torreTesla,recolectroDeElixir,ballesta,lapida,horno,jaulaDelForzudo,excavadoraDeDuendes, */bolaDeFuego,flechas,furia,cohete,barrilDeDuendes,hielo,espejo,
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

    //Creando una imágen 'Compartir'.
    const imgShare = document.createElement('img');

    //Agregando la ruta para ver la imágen de 'Compartir'
    imgShare.src = 'https://link.clashroyale.com/deck/assets/build/0.3/images/stamp_deck@2x.png';

    //Iterando solo para obtener los primeras 8 cartas
    for(let i = 0; i<8; i++){
        const img = document.createElement('img');
        img.src = cards[i].img;
        divDeck.appendChild(img);
        console.log(cards[i]);
    }
    //Agregando la url del link que se va a compartir dependiendo del mazo
    aShare.href = `https://link.clashroyale.com/deck/en?deck=${cards[0].id};${cards[1].id};${cards[2].id};${cards[3].id};${cards[4].id};${cards[5].id};${cards[6].id};${cards[7].id}`;
    aShare.target = "_blank";

    //Agregando el enlace al div .share
    share.appendChild(aShare);

    //Agregando la imágen al enlace
    aShare.appendChild(imgShare);
}

console.log(cards.length);
/* console.log(cards); */
