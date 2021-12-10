let znamenia = {
    vodnar: {
        name: "AQUARIAS",
        image: "./images/vodnar.png",
        start: "21.01.",
        end: "19.02.",
        popis: "Povinnosti vás zavalia už od rána, ale ak si ich nebudete odkladať, tak vám žiadne problémy nehrozia. Za normálnych okolností by ste sa v osobnom živote tešili z prekvapenia, ktoré vás postretne, ale dnes z neho budete mať rozporuplné pocity. Nechajte si všetko uležať v hlave.",
    },
    ryby: {
        name: "PISCES",
        image: "./images/ryby.png",
        start: "20.02.",
        end: "20.03.",
        popis: "Všetky vaše predstavy sa naplnia a tak si naplno vychutnajte pocit úspechu. Doma sa vám partner chystá povedať niečo, čo sa vám možno nebude až tak páčiť, ale zase sa hneď nemusíte čertiť. Nechajte si všetko prejsť hlavou, ráno múdrejšie večera.",
    },
    baran: {
        name: "ARIES",
        image: "./images/baran.png",
        start: "21.03.",
        end: "20.04.",
        popis: "Nedajte sa odradiť únavou, ak ste sa zle vyspali. Snažte sa len rozhýbať a načerpať energiu z ľudí alebo vecí, ktoré milujete. S optimizmom ľahšie zvládnete aj náročnejšie úlohy a zostane vám ešte aj dostatok času na zábavu.",
    },
    byk: {
        name: "TAURUS",
        image: "./images/byk.png",
        start: "21.04.",
        end: "20.05.",
        popis: "Asi sa necítite veľmi dobre, ale môžete si za to sami. Ruku na srdce, ako ste posledné dni fungovali? Musíte trochu poľaviť z pracovného tempa a začať si viac všímať signály vlastného tela. Niečo vám chce povedať a ak to budete ignorovať, trpko za všetko zaplatíte.",
    },
    blizenci: {
        name: "GEMINI",
        image: "./images/blizenci.png",
        start: "21.05.",
        end: "21.06.",
        popis: "Váš zmysel pre spravodlivosť vás často dostáva do úzkych. Naučte sa držať bokom a neriešiť problémy niekoho iného, sami máte čo robiť so svojim životom. Uvidíte, ako ľahko vám zrazu bude na duši, keď veci pôjdu okolo vás.",
    },
    rak: {
        name: "CANCER",
        image: "./images/rak.png",
        start: "22.06.",
        end: "22.07.",
        popis: "Nemali by ste sa obetovať len preto, že v tom niekto vidí osobný prospech. Ľuďom môžeme byť dlžní všeličo, ale využiť by nás nemal nik. Pokiaľ si niečím nie ste istí, jednoducho povedzte nie, do tohto nepôjdem a hotovo.",
    },
    lev: {
        name: "LEO",
        image: "./images/lev.png",
        start: "23.07.",
        end: "22.08.",
        popis: "Hneď ráno dostanete kopec perfektných nápadov, len si poriadne premyslite, do ktorých sa ihneď pustíte a ktoré si ešte chvíľu necháte len pre seba. Neuvážené kroky by vás mohli dostať do chaosu a zbytočne stratíte čas vymotaním sa späť.",
    },
    panna: {
        name: "VIRGO",
        image: "./images/panna.png",
        start: "23.08.",
        end: "22.09.",
        popis: "Nebojte sa dôverovať svojmu inštinktu, sami najlepšie viete, čo si počať. Niekedy pomôže aj obyčajná náhoda, aby sa veci pohli k lepšiemu. V rodinnom živote sa nemiešajte do sporov, netýkajú sa vás, môžete byť akurát tak radcom, ak vás o to požiadajú.",
    },
    vahy: {
        name: "LIBRA",
        image: "./images/vahy.png",
        start: "23.09.",
        end: "22.10.",
        popis: "Skúste dnes pomôcť priateľovi, ktorý na vašu radu už dlhšie čaká. Vám to tak možno nepríde, ale pre neho je to veľmi dôležité. S partnerom sa zbytočne nehádajte, aj vy si občas môžete zahryznúť do jazyka, nie? Práca bude ako vždy, hlavne si plňte povinnosti načas.",
    },
    skorpion: {
        name: "SCORPIUS",
        image: "./images/skorpion.png",
        start: "23.10.",
        end: "22.11.",
        popis: "Už od rána aby ste mali byť v pozore, zaháľanie a otáľanie by sa vám nevyplatilo. Máte za sebou niekoľko príjemných chvíľ plných oddychu, nastal čas zužitkovať všetko vo svoj prospech. Vyhnite sa konfliktom a pracujte na postupe.",
    },
    strelec: {
        name: "SAGITTARIUS",
        image: "./images/strelec.png",
        start: "23.11.",
        end: "21.12.",
        popis: "Pripravte sa menšie súboje s neprajníkmi, ak si zachováte diplomatický prístup, tak by ste všetko napokon mohli otočiť vo svoj prospech. Určite sa však nepúšťajte do žiadnych ostrých výmien názorov, pretože by ste prezradili aj to, čo ste pôvodne nechceli.",
    },
    kozorozec: {
        name: "CAPRICORN",
        image: "./images/kozorozec.png",
        start: "22.12.",
        end: "20.01.",
        popis: "Toto obdobie je vhodné na prežívanie všetkého nového a nepoznaného, prijmite ponúknuté príležitosti a nedajte sa odradiť neprajníkmi. Dnes navyše stretnete niekoho, kto bude od prvej chvíle vášmu srdcu nesmierne blízky. Nebojte sa mu otvoriť.",
    },
};

function changeDateTime(event) {
    event.preventDefault();
    const birth = document.getElementById("birthday").value;
    const znak = getZnamenie(new Date(birth));
    document.querySelector(".horoskop-image img").src = znak.image;
    document.querySelector(".horoskop-name").innerHTML = znak.name;
    document.querySelector(".custom-text").innerHTML = znak.popis;
}

function parseDate(date) {
    const part = date.split(".");
    return new Date(`${part[1]}-${part[0]}-${1978}`);
}

function getZnamenie(date) {
    for (let key in znamenia) {
        const znak = znamenia[key];
        const start = parseDate(znak.start);
        const end = parseDate(znak.end);

        if ((date.getMonth() == start.getMonth() &&
                date.getDate() >= start.getDate()) ||
            (date.getMonth() == end.getMonth() &&
                date.getDate() <= end.getDate())) {
            return znak;
        }


    }
}

