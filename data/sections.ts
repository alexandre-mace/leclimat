export type SectionData = {
  id: string;
  topic?: string;
  title: string;
  description: { __html: string };
  imageSrc?: string;
  imageAlt?: string;
  imageHeight?: number;
  imageWidth?: number;
  emojiSrc?: string;
  emojiAlt?: string;
  emojiHeight?: number;
  emojiWidth?: number;
  nextSection?: string;
  reverse?: boolean;
  sources: string[];
};

export const sections: SectionData[] = [
  {
    id: "energySources",
    topic: "Un peu d'histoire",
    title: "L'histoire de nos sources d'énergie",
    description: {
      __html: `<p>Pendant des millénaires, les sociétés dépendaient de la <b>force musculaire humaine et animale</b> pour leur travail, ainsi que de la <b>biomasse</b> (bois et déchets agricoles) pour la chaleur et la lumière.</p><p>Ensuite, au milieu du 19e siècle, l'invention de la machine à vapeur a marqué le début de la <b>révolution industrielle</b>, utilisant le <b>charbon</b> comme principale source d'énergie, devenu dominant jusqu'au début du 20e siècle.</p> <p>Au 20e siècle, nous avons ajouté le <b>pétrole</b> (devenu la source la plus utilisée), le <b>gaz</b> et l'énergie <b>hydraulique</b>.</p><p>Plus tard, vers les années 1960, l'<b>énergie nucléaire</b> a été intégrée, mais sa part restait relativement faible.</p> <p>Les <b>énergies renouvelables</b> modernes, comme le solaire et l'éolien, sont venues après, vers les années 1980, et bien qu'elles aient augmenté depuis lors, elles représentent toujours une part <b>relativement modeste</b> de la production totale d'énergie.</p>`,
    },
    imageSrc: "/images/global-energy-substitution.png",
    imageAlt: "Consommation globale d'énergie",
    imageHeight: 1134,
    imageWidth: 1600,
    emojiSrc:
      "https://em-content.zobj.net/source/microsoft-teams/363/woman-teacher-light-skin-tone_1f469-1f3fb-200d-1f3eb.png",
    emojiAlt: "Professeure",
    emojiHeight: 80,
    emojiWidth: 80,
    nextSection: "#oldIssue",
    sources: ["https://ourworldindata.org/global-energy-200-years"],
  },
  {
    id: "oldIssue",
    topic: "Un peu d'histoire",
    title: "Un problème de longue date",
    description: {
      __html: `<p>Au XIXe siècle, les scientifiques réalisent que l'<b>atmosphère peut affecter la température de la planète</b>. </p> <p>Joseph Fourier (grand physicien français) signe l'acte de naissance de la théorie de l'effet de serre en 1827.</p> <p>Il découvre que certains gaz, comme le dioxyde de carbone (CO2), emprisonnent la chaleur envoyée par le soleil dans l'atmosphère, créant un équilibre thermique nécessaire à la vie.</p> <p>Cependant, avec la Révolution industrielle, la combustion croissante de charbon, de pétrole et de gaz a libéré davantage de CO2 dans l'atmosphère, <b>perturbant cet équilibre</b> et entraînant un réchauffement climatique.</p> <p>Ce lien entre les émissions de gaz à effet de serre et l'utilisation d'énergies fossiles est <b>aujourd'hui bien établi</b>.</p>`,
    },
    sources: [
      "https://fr.wikipedia.org/wiki/Histoire_de_la_recherche_sur_le_changement_climatique",
    ],
    imageSrc: "/images/old-paper.png",
    imageAlt: "Warkworth, Science Notes and News",
    imageHeight: 788,
    imageWidth: 580,
    emojiSrc:
      "https://em-content.zobj.net/source/microsoft-teams/363/spiral-calendar_1f5d3-fe0f.png",
    emojiAlt: "Calendrier",
    emojiHeight: 80,
    emojiWidth: 80,
    reverse: true,
    nextSection: "#ghe",
  },
  {
    id: "ghe",
    topic: "L'effet de serre",
    title: "Qu'est-ce que l'effet de serre ?",
    description: {
      __html: `<p>L'effet de serre est un phénomène naturel : le soleil réchauffe la surface de la Terre, qui réémet de la chaleur sous forme de rayonnement infrarouge. Certains gaz présents dans l'atmosphère, appelés <b>gaz à effet de serre (GES)</b>, bloquent une partie de ce rayonnement.</p><p>Ces gaz agissent <b>comme un voile</b> qui empêche la chaleur de s'échapper vers l'espace. Sans eux, la température moyenne de la Terre serait de -18°C au lieu de +15°C : l'effet de serre est donc <b>nécessaire à la vie</b>.</p><p>Le problème survient quand les activités humaines augmentent la concentration de ces gaz, <b>intensifiant l'effet de serre</b> et provoquant un réchauffement au-delà de l'équilibre naturel.</p>`,
    },
    sources: [
      "https://www.ipcc.ch/report/ar6/wg3/downloads/report/IPCC_AR6_WGIII_FullReport.pdf#page=233",
    ],
    imageSrc: "/images/ghg.png",
    imageAlt: "L'effet de serre",
    imageHeight: 1600,
    imageWidth: 1131,
    emojiSrc:
      "https://em-content.zobj.net/source/microsoft-teams/363/dashing-away_1f4a8.png",
    emojiAlt: "Fumée",
    emojiHeight: 80,
    emojiWidth: 80,
    nextSection: "#ghg",
  },
  {
    id: "ghg",
    topic: "Gaz à effet de serre",
    title: "Nos émissions de GES ont fortement augmenté",
    description: {
      __html: `<p>Les activités humaines ont augmenté les niveaux de ces GES, intensifiant l'effet de serre et provoquant le changement climatique.</p><p>Parmi eux, le <b>dioxyde de carbone (CO2)</b> a augmenté de 50% depuis l'ère préindustrielle en raison de la combustion des combustibles fossiles, le <b>méthane (CH4)</b> a doublé en raison de l'agriculture et de la production d'énergie fossile, et l'oxyde nitreux (N2O) a augmenté de 20% en raison de l'agriculture et de la combustion de combustibles fossiles.</p>`,
    },
    sources: [
      "https://www.ipcc.ch/report/ar6/wg3/downloads/report/IPCC_AR6_WGIII_FullReport.pdf#page=233",
    ],
    imageSrc: "/images/cumulative-co2-emissions.png",
    imageAlt: "Concentration de CO2 dans l'atmosphère",
    imageHeight: 1600,
    imageWidth: 889,
    emojiSrc:
      "https://em-content.zobj.net/source/microsoft-teams/363/chart-increasing_1f4c8.png",
    emojiAlt: "Graphique croissant",
    emojiHeight: 80,
    emojiWidth: 80,
    reverse: true,
    nextSection: "#hugeRise",
  },
  {
    id: "hugeRise",
    topic: "Un problème de taille",
    title: "Une hausse sans précédent",
    description: {
      __html: `<p>L'influence humaine a réchauffé le climat à un rythme <b>sans précédent depuis au moins 2000 ans</b>.</p> <p>L'ensemble du système climatique connaît des changements sans précédent depuis plusieurs siècles à plusieurs milliers d'années.</p> <p>Les concentrations de gaz à effet de serre comme le CO2 ont atteint <b>des niveaux inégalés depuis au moins 2 millions d'années</b>, tandis que les températures à la surface du globe ont augmenté plus rapidement depuis 1970 que sur toute autre période de 50 ans au cours des 2000 dernières années.</p><p>Le changement climatique d'origine humaine influence déjà les <b>extrêmes météorologiques et climatiques mondiaux</b>, tels que les vagues de chaleur, les précipitations extrêmes et les cyclones tropicaux.</p>`,
    },
    sources: [
      "https://www.ipcc.ch/report/sixth-assessment-report-working-group-i/",
    ],
    imageSrc: "/images/hausse-temp.png",
    imageAlt: "Hausse des températures",
    imageHeight: 507,
    imageWidth: 1002,
    emojiSrc:
      "https://em-content.zobj.net/source/microsoft-teams/363/fire_1f525.png",
    emojiAlt: "Feu",
    emojiHeight: 80,
    emojiWidth: 80,
    nextSection: "#temperatureRise",
  },
  {
    id: "temperatureRise",
    topic: "L'augmentation de la température",
    title: "Quelques degrés, bonne nouvelle ?",
    description: {
      __html: `<p>Les fluctuations de température sont courantes : de 5 degrés le matin à 15 degrés l'après-midi, nous avons une fluctuation de 10 degrés et pourtant, vous étiez vivant ce matin et l'êtes toujours cette après-midi.</p><p>Cependant, <b>considérer une moyenne globale est très différent</b>. Quand nous sommes en automne en France, c'est le printemps en Australie. <b>La moyenne globale ne varie pas de 10 ou 15 degrés</b> : elle ne représente <b>pas du tout la même chose qu'une variation locale et instantanée</b>.</p><p>Prenons une comparaison parlante. <b>À gauche</b> : l'Europe il y a 20 000 ans, lors de la dernière ère glaciaire. La Scandinavie était <b>sous 3 km de glace</b>, l'océan avait baissé de 120 mètres, <b>il n'y avait pas de Manche</b>, et la France ne pouvait nourrir que 100 000 personnes. <b>À droite</b> : l'Europe préindustrielle (18e siècle), couverte de forêts et de terres agricoles.</p><p>Le passage de l'état de gauche à celui de droite s'est fait lors de la déglaciation. Ce changement <b>massif</b> de géographie n'a été provoqué que par un réchauffement de <b>4 à 5 degrés en 10 000 ans</b>. Quelques degrés de moyenne globale, c'est un changement de monde.</p>`,
    },
    sources: ["https://www.youtube.com/watch?v=0KYIjNFo4kw"],
    imageSrc: "/images/5degres-comparaison.png",
    imageAlt: "Comparaison climat 5 degrés de différence",
    imageHeight: 1536,
    imageWidth: 1048,
    emojiSrc:
      "https://em-content.zobj.net/source/microsoft-teams/363/sun_2600-fe0f.png",
    emojiAlt: "soleil",
    emojiHeight: 80,
    emojiWidth: 80,
    reverse: true,
    nextSection: "#climateFutur",
  },
  {
    id: "climateFutur",
    topic: "Futur climatique",
    title: "De combien allons-nous réchauffer la planète ?",
    description: {
      __html: `<p>Le rapport AR6 du GIEC explore les réponses climatiques à <b>cinq nouveaux scénarios d'émissions</b>.</p><p>Ces scénarios projettent les changements climatiques sur le 21e siècle pour différentes périodes et niveaux de réchauffement.</p> <p>La quantité de réchauffement climatique mondial que nous pouvons attendre au cours du prochain siècle <b>dépend du niveau d'émissions de gaz à effet de serre</b>.</p><p>Le réchauffement moyen annuel projeté sur les terres à la fin du siècle se situe dans la <b>fourchette de 0,9 à 5,6°C par rapport aux deux dernières décennies</b> du XXe siècle, en fonction du scénario d'émissions.</p>`,
    },
    sources: [
      "https://www.ipcc.ch/report/sixth-assessment-report-working-group-i/",
    ],
    imageSrc: "/images/scenarios.png",
    imageAlt: "Scénarios climatiques",
    imageHeight: 522,
    imageWidth: 1002,
    emojiSrc:
      "https://em-content.zobj.net/source/microsoft-teams/363/crystal-ball_1f52e.png",
    emojiAlt: "Boule de cristal",
    emojiHeight: 80,
    emojiWidth: 80,
    nextSection: "#consequences",
  },
  {
    id: "consequences",
    topic: "Les conséquences",
    title: "Est-ce grave docteur ?",
    description: {
      __html: `<p>Le changement climatique représente une <b>menace significative</b> pour l'humanité. Environ <b>3,3 à 3,6 milliards de personnes vivent déjà dans des contextes très vulnérables</b>.</p><p>Ses conséquences touchent tous les aspects de la vie : <b>régions rendues inhabitables</b> par la chaleur, mégafeux, sécheresses, effondrement de la biodiversité, insécurité alimentaire, fonte des glaciers, montée des eaux et propagation de maladies.</p><p>Les risques augmentent avec chaque degré de réchauffement supplémentaire, et dépendent fortement des <b>actions prises à court terme</b>.</p>`,
    },
    sources: [
      "https://www.ipcc.ch/report/ar6/wg2/downloads/report/IPCC_AR6_WGII_SummaryForPolicymakers.pdf#page=14",
      "https://www.ipcc.ch/site/assets/uploads/sites/4/2022/11/SRCCL_SPM.pdf#page=18",
      "https://www.ipcc.ch/report/ar6/wg2/downloads/report/IPCC_AR6_WGII_TechnicalSummary.pdf#page=33",
      "https://report.ipcc.ch/ar6/wg2/IPCC_AR6_WGII_FullReport.pdf#page=2430",
      "https://bonpote.com/33-milliards-detres-humains-exposes-au-changement-climatique-le-nouveau-rapport-du-giec-est-sans-appel/",
    ],
    emojiSrc:
      "https://em-content.zobj.net/source/microsoft-teams/363/woman-health-worker_1f469-200d-2695-fe0f.png",
    emojiAlt: "Docteure",
    emojiHeight: 80,
    emojiWidth: 80,
    nextSection: "#hyperthermia",
  },
  {
    id: "hyperthermia",
    topic: "Futur climatique",
    title: "Des régions inhabitables",
    description: {
      __html: `<p>Le graphique illustre le nombre de jours où les <b>conditions extérieures deviendront létales</b> (sortir à l'extérieur entraînerait la mort) selon les scénarios SSP2-4.5 (réchauffement d'environ 2,7°C) et SSP5-8.5 (réchauffement d'environ 4,4°C). </p><p>La concentration de ces conditions mortelles se situe principalement dans la bande équatoriale en raison de la saturation de l'air en humidité.</p><p> Lorsque l'air ambiant dépasse 35 degrés avec une humidité à 100%, <b>le corps ne peut plus se refroidir par évaporation</b>, ce qui conduit à l'hyperthermie et peut être mortel.</p><p>Les régions en rouge/violet, fortement peuplées, deviendront donc inadaptées à la vie, ce qui pourrait entraîner d'importants troubles géopolitiques.</p>`,
    },
    sources: [
      "https://www.ipcc.ch/report/sixth-assessment-report-working-group-ii/",
    ],
    imageSrc: "/images/hyperthermia.png",
    imageAlt: "Jours de conditions létales selon les scénarios de réchauffement",
    imageHeight: 1020,
    imageWidth: 2328,
    emojiSrc:
      "https://em-content.zobj.net/source/microsoft-teams/363/hot-face_1f975.png",
    emojiAlt: "Tête chaude",
    emojiHeight: 80,
    emojiWidth: 80,
    nextSection: "#fire",
  },
  {
    id: "fire",
    topic: "Futur climatique",
    title: "Des mégafeux",
    description: {
      __html: `<p>Le changement climatique provoque une augmentation de la fréquence et de l'intensité des événements météorologiques extrêmes, notamment les sécheresses et les conditions propices aux incendies, ce qui entraîne des <b>incendies plus fréquents et plus graves dans de nombreuses régions</b>. </p> <p>L'augmentation de la température est le lien le plus évident entre le réchauffement climatique et l'aggravation des incendies de forêt. La végétation et le sol s'assèchent, ce qui crée davantage de combustible inflammable pour que les incendies se propagent plus loin et plus vite.</p>`,
    },
    sources: [
      "https://www.ipcc.ch/report/ar6/wg2/downloads/report/IPCC_AR6_WGII_SummaryForPolicymakers.pdf",
      "https://bonpote.com/doit-on-sattendre-a-plus-de-megafeux-a-cause-du-changement-climatique/",
    ],
    imageSrc: "/images/fires.png",
    imageAlt: "Augmentation des incendies de forêt dans le monde",
    imageHeight: 1020,
    imageWidth: 2328,
    emojiSrc:
      "https://em-content.zobj.net/source/microsoft-teams/363/fire_1f525.png",
    emojiAlt: "Feu",
    emojiHeight: 80,
    emojiWidth: 80,
    reverse: true,
  },
  {
    id: "drought",
    topic: "Futur climatique",
    title: "De la sécheresse",
    description: {
      __html: `<p>Une part croissante des terres émergées va connaître une <b>augmentation de la sécheresse</b>.</p> <p>Les régions en marron illustrent celles qui deviendront plus arides, comprenant tout le pourtour du bassin méditerranéen, y compris la France. </p><p>Une vaste étendue de l'Amérique et de la Chine sera également touchée, ainsi que la <b>majeure partie de la production agricole mondiale</b>. </p>`,
    },
    sources: [
      "https://www.ipcc.ch/report/sixth-assessment-report-working-group-i/",
    ],
    imageSrc: "/images/drought.png",
    imageAlt: "Carte de l'évolution de la sécheresse dans le monde",
    imageHeight: 692,
    imageWidth: 1702,
    emojiSrc:
      "https://em-content.zobj.net/source/microsoft-teams/363/non-potable-water_1f6b1.png",
    emojiAlt: "Eau non potable",
    emojiHeight: 80,
    emojiWidth: 80,
    nextSection: "#biodiversity",
  },
  {
    id: "biodiversity",
    topic: "Futur climatique",
    title: "Un effondrement de la biodiversité",
    description: {
      __html: `<p>Dans un monde avec un réchauffement de +2 degrés, <b>environ un tiers des terres émergées subiront un effondrement de leur biodiversité</b> (pertes d'habitat pour 143 zones de haute importance pour la conservation de la biodiversité).</p><p>Le changement climatique entraîne également un réchauffement et une acidification des océans, ce qui a un impact négatif sur la vie marine. </p><p>Cela conduit à une <b>perte prévue de la biodiversité dans de nombreux écosystèmes océaniques et côtiers</b> (l'acidification des océans complique la production de carbonate de calcium par les organismes nécessitant la formation de petites coquilles, notamment une importante proportion du zooplancton et du phytoplancton, des micro-organismes marins en amont des réseaux alimentaires.)</p>`,
    },
    sources: [
      "https://www.ipcc.ch/report/ar6/wg2/downloads/report/IPCC_AR6_WGII_FullReport.pdf",
    ],
    imageSrc: "/images/biodiversity.png",
    imageAlt: "Futur de la biodiversité",
    imageHeight: 556,
    imageWidth: 1548,
    emojiSrc:
      "https://em-content.zobj.net/source/microsoft-teams/363/honeybee_1f41d.png",
    emojiAlt: "Abeille",
    emojiHeight: 80,
    emojiWidth: 80,
    nextSection: "#food",
    reverse: true,
  },
  {
    id: "food",
    topic: "Alimentation",
    title: "Insécurité alimentaire",
    description: {
      __html: `<p>Le changement climatique affecte déjà la <b>production agricole mondiale</b> : sécheresses, inondations et événements extrêmes réduisent les rendements dans de nombreuses régions.</p><p>Dès que les températures s'élèvent au-delà de 2,5 degrés, <b>l'insécurité alimentaire commence à se généraliser sur la planète</b>.</p><p>Les cultures de base comme le blé, le riz et le maïs sont particulièrement vulnérables. La hausse des températures et la modification des régimes de pluie <b>menacent les récoltes dans les zones qui nourrissent des milliards de personnes</b>, ce qui peut entraîner des hausses de prix, des famines et des instabilités politiques.</p>`,
    },
    sources: [
      "https://www.ipcc.ch/srccl/chapter/summary-for-policymakers/",
    ],
    imageSrc: "/images/food.png",
    imageAlt: "Impact sur l'alimentation",
    imageHeight: 826,
    imageWidth: 3146,
    emojiSrc:
      "https://em-content.zobj.net/source/microsoft-teams/363/fork-and-knife-with-plate_1f37d-fe0f.png",
    emojiAlt: "Assiette",
    emojiHeight: 80,
    emojiWidth: 80,
    nextSection: "#glacier",
  },
  {
    id: "glacier",
    topic: "Glacier",
    title: "Fonte des glaciers",
    description: {
      __html: `<p>Le réchauffement climatique provoque une <b>fonte généralisée des glaciers dans le monde</b>, touchant la banquise, la neige, et la masse des glaciers, à un rythme sans précédent. </p><p> Cette fonte contribue à l'élévation du niveau de la mer, augmentant le risque d'inondations côtières. Elle <b>perturbe les saisons de neige et les débits des rivières</b> à l'échelle mondiale.</p><p>De plus, la fonte des glaciers a des conséquences déséquilibrantes dans les régions arctiques, libérant des gaz à effet de serre et <b>aggravant le changement climatique</b>.</p><p>En parallèle, la fonte des glaciers <b>met en péril l'approvisionnement en eau</b> des communautés en montagne et en aval, menaçant la production d'hydroélectricité, l'irrigation, et l'approvisionnement en eau des villes. </p><p>Elle impacte également la santé et la culture des communautés arctiques, mettant en danger leurs modes de vie traditionnels de manière profonde et non seulement adaptative.</p>`,
    },
    sources: [
      "https://www.ipcc.ch/site/assets/uploads/sites/2/2022/06/SPM_version_report_LR.pdf#page=4",
      "https://www.ipcc.ch/report/ar6/wg1/downloads/report/IPCC_AR6_WGI_SPM.pdf#page=3",
      "https://www.ipcc.ch/site/assets/uploads/sites/3/2022/03/02_SROCC_TS_FINAL.pdf#page=17",
    ],
    imageSrc: "/images/ice-graph.png",
    imageAlt: "Évolution de la masse des glaciers dans le monde",
    imageHeight: 554,
    imageWidth: 1024,
    emojiSrc:
      "https://em-content.zobj.net/source/microsoft-teams/363/ice_1f9ca.png",
    emojiAlt: "Glace",
    emojiHeight: 80,
    emojiWidth: 80,
    nextSection: "#seaRise",
    reverse: true,
  },
  {
    id: "seaRise",
    topic: "Océans et mers",
    title: "Une élévation du niveau de la mer",
    description: {
      __html: `<p>D'après les rapports du GIEC, l'augmentation du niveau de la mer due au changement climatique est un <b>sujet majeur</b>. Environ 19 centimètres de hausse ont été enregistrés entre 1901 et 2010, ce qui dépasse la moyenne des deux millénaires précédents. </p><p> Cette montée est provoquée par la <b>fonte des glaciers et des calottes glaciaires</b>, ainsi que par le <b>réchauffement continu des océans </b>(dilatation thermique de l'eau).</p><p>Le GIEC prévoit que cette élévation se <b>poursuivra pendant des siècles</b> (une élévation de l'océan de plus de 15 mètres est prévue à l'échelle de plusieurs siècles), même si les émissions de gaz à effet de serre sont stoppées, à cause de la rétention continue de chaleur dans les profondeurs des océans et de la fonte des glaces du Groenland et de l'Antarctique.</p> <p>Cette élévation prévue augmente les risques d'<b>inondations côtières</b>.</p>`,
    },
    sources: [
      "https://www.ipcc.ch/site/assets/uploads/sites/3/2022/03/01_SROCC_SPM_FINAL.pdf#page=34",
      "https://www.ipcc.ch/site/assets/uploads/sites/3/2022/03/02_SROCC_TS_FINAL.pdf#page=9",
      "https://www.ipcc.ch/site/assets/uploads/sites/3/2022/03/03_SROCC_Ch01_FINAL.pdf#page=13",
    ],
    imageSrc: "/images/seaRise.png",
    imageAlt: "Montée du niveau de la mer",
    imageHeight: 1134,
    imageWidth: 1304,
    emojiSrc:
      "https://em-content.zobj.net/source/microsoft-teams/363/water-wave_1f30a.png",
    emojiAlt: "Vague",
    emojiHeight: 80,
    emojiWidth: 80,
    nextSection: "#disease",
  },
  {
    id: "disease",
    topic: "Santé",
    title: "Des maladies",
    description: {
      __html: `<p>Le changement climatique a des <b>conséquences directes sur la santé humaine</b>, tant physique que mentale, avec des risques accrus de décès prématurés et de maladies.</p><p>Les épisodes de chaleur extrême entraînent des morts, tandis que des maladies comme le paludisme et la dengue <b>s'étendent vers de nouvelles régions</b> à mesure que le climat se réchauffe. Le changement climatique favorise également l'émergence de <b>nouvelles maladies infectieuses</b> en modifiant les mouvements d'espèces vers de nouvelles populations humaines.</p><p>Enfin, les variations climatiques aggravent l'insécurité alimentaire, <b>pouvant mener à la malnutrition et à la prédisposition aux maladies</b>, surtout dans les pays à faible et moyen revenu.</p>`,
    },
    sources: [
      "https://www.ipcc.ch/report/ar6/wg2/downloads/report/IPCC_AR6_WGII_SummaryForPolicymakers.pdf#page=11",
    ],
    imageSrc: "/images/disease.png",
    imageAlt: "Microbe",
    imageHeight: 584,
    imageWidth: 1898,
    emojiSrc:
      "https://em-content.zobj.net/source/microsoft-teams/363/microbe_1f9a0.png",
    emojiAlt: "Microbe",
    emojiHeight: 80,
    emojiWidth: 80,
    nextSection: "#nonLinear",
    reverse: true,
  },
  {
    id: "nonLinear",
    topic: "Non-linéarité",
    title: "Des conséquences non linéaires",
    description: {
      __html: `<p>Dans le monde économique, nous avons l'habitude de penser de manière linéaire. Par exemple, si une action coûte 100 euros, alors deux actions coûtent 200 euros. </p><p>Cependant, il est important de comprendre que ce type de raisonnement ne s'applique pas toujours au monde naturel, qui peut être beaucoup plus complexe.</p><p>On pourrait penser que si la température augmente de 2 degrés Celsius, c'est deux fois pire qu'une augmentation d'un degré. </p><p>Mais en réalité, ce n'est pas si simple. <b>Les conséquences du changement climatique augmentent beaucoup plus rapidement que l'élévation de la température</b>. </p><p>Par exemple, le nombre de personnes exposées à des vagues de chaleur extrêmes est <b>plusieurs fois plus élevé à +2°C qu'à +1,5°C</b>. Chaque demi-degré supplémentaire peut avoir des conséquences comparables à toutes celles que nous avons déjà connues.</p><p>Il est essentiel de comprendre que les impacts du changement climatique ne <b>suivent pas une progression linéaire</b>. Chaque petit degré supplémentaire de réchauffement peut avoir des conséquences disproportionnées et graves pour notre planète et ses écosystèmes.</p><p>La différence entre 2°C et 1,5°C est très importante: on parle de centaines de millions de personnes en moins avec un accès à l'eau par exemple. Tout acte manqué, narratif favorisant le statu-quo conduit à des ⅒ de degrés supplémentaires, à des souffrances, à des morts.</p>`,
    },
    sources: [
      "https://www.ipcc.ch/report/ar6/wg1/downloads/report/IPCC_AR6_WGI_TS.pdf#page=24",
    ],
    emojiSrc:
      "https://em-content.zobj.net/source/microsoft-teams/363/rocket_1f680.png",
    emojiAlt: "Fusée",
    emojiHeight: 80,
    emojiWidth: 80,
    nextSection: "#justice",
  },
  {
    id: "justice",
    topic: "Justice climatique",
    title: "Des conséquences injustes",
    description: {
      __html: `<p>"<b>Les communautés vulnérables</b> qui ont le moins contribué au changement climatique historiquement sont <b>touchées de manière disproportionnée</b>"</p><p>Les rapports du GIEC indiquent que le changement climatique a provoqué des impacts négatifs étendus et des pertes et dommages associés à la nature et aux populations, qui sont répartis de manière inégale à travers différents systèmes, régions et secteurs. </p><p>Cela signifie que les conséquences du changement climatique ne sont pas les mêmes pour tout le monde. <b>Certaines personnes et régions sont plus touchées que d'autres</b>. Les personnes et les systèmes les plus vulnérables sont touchés de manière disproportionnée.</p>`,
    },
    sources: [
      "https://threadreaderapp.com/thread/1682449327787069443.html",
      "https://www.ipcc.ch/report/ar6/syr/downloads/report/IPCC_AR6_SYR_SPM.pdf#page=6",
      "https://www.ipcc.ch/report/ar6/syr/downloads/report/IPCC_AR6_SYR_SPM.pdf#page=33",
      "https://www.ipcc.ch/report/ar6/wg3/downloads/report/IPCC_AR6_WGIII_SummaryForPolicymakers.pdf#page=45",
    ],
    emojiSrc:
      "https://em-content.zobj.net/source/microsoft-teams/363/balance-scale_2696-fe0f.png",
    emojiAlt: "Balance",
    emojiHeight: 80,
    emojiWidth: 80,
    nextSection: "#inertia",
  },
  {
    id: "inertia",
    topic: "Inertie climatique",
    title: "La bonne nouvelle, il n'y a pas d'inertie climatique",
    description: {
      __html: `<p><b>Contrairement à une idée fausse, le climat peut changer plus rapidement que prévu si nous réduisons les émissions de CO2</b>. L'idée que le réchauffement est inévitable en raison des émissions passées est incorrecte. Si nous atteignons des émissions nettes nulles, le réchauffement devrait s'arrêter. Cela a été reconnu par la science depuis longtemps.</p><p>Cependant, d'autres gaz à effet de serre et les aérosols peuvent compliquer la situation. Si toutes les émissions, y compris ces gaz, tombent à zéro, le réchauffement pourrait être légèrement supérieur ou inférieur à zéro.</p><p>Il y a des incertitudes, mais nous avons le pouvoir de choisir notre avenir climatique en agissant maintenant pour réduire les émissions.</p>`,
    },
    sources: [
      "https://bonpote.com/existe-t-il-vraiment-une-inertie-climatique-de-20-ans/",
      "https://twitter.com/loic_giaccone/status/1681960928202334209",
    ],
    emojiSrc:
      "https://em-content.zobj.net/source/microsoft-teams/363/eight-oclock_1f557.png",
    emojiAlt: "Heure",
    emojiHeight: 80,
    emojiWidth: 80,
    nextSection: "#limitParis",
  },
  {
    id: "limitParis",
    topic: "Solution",
    title: "Limiter le réchauffement à 2 degrés (Accord de Paris)",
    description: {
      __html: `<p>L'Accord de Paris est un accord mondial adopté en 2015 par 196 pays pour lutter contre le changement climatique. </p><p>Son objectif principal est de renforcer la réponse mondiale au changement climatique en limitant le réchauffement global à moins de 2 degrés Celsius par rapport aux niveaux préindustriels, avec des efforts pour limiter à 1,5 degré Celsius. </p><p> Il encourage la coopération internationale pour des actions climatiques ambitieuses, tout en favorisant le développement durable et la réduction de la pauvreté.</p><p>Cependant, il n'y a <b>aucune obligation</b> pour les États de respecter leurs objectifs. Aucune contrainte, ou sanction. De plus, l'Accord de Paris ne <b>mentionne pas une fois les combustibles fossiles</b>.</p>`,
    },
    sources: [
      "https://www.ipcc.ch/report/ar6/wg2/downloads/report/IPCC_AR6_WGII_TechnicalSummary.pdf#page=66",
      "https://www.ipcc.ch/report/ar6/wg3/downloads/report/IPCC_AR6_WGIII_TechnicalSummary.pdf#page=86",
      "https://www.ipcc.ch/report/ar6/syr/downloads/report/IPCC_AR6_SYR_SPM.pdf#page=10",
      "https://bonpote.com/5-ans-apres-peut-on-dire-que-laccord-de-paris-na-servi-a-rien/",
      "https://ourworldindata.org/grapher/co2-mitigation-2c",
    ],
    imageSrc: "/images/2deg.png",
    imageAlt: "Réduction nécessaire pour respecter l'Accord de Paris",
    imageHeight: 1442,
    imageWidth: 2058,
    emojiSrc:
      "https://em-content.zobj.net/source/microsoft-teams/363/chart-decreasing_1f4c9.png",
    emojiAlt: "Graphique décroissant",
    emojiHeight: 80,
    emojiWidth: 80,
    nextSection: "#responsable",
  },
  {
    id: "responsable",
    topic: "Responsable",
    title:
      "Qui est responsable ? Les États, les entreprises, la population ?",
    description: {
      __html: `<p>Les activités humaines, principalement les émissions de gaz à effet de serre, ont indiscutablement provoqué le réchauffement climatique. Tous, en tant qu'individus, entreprises et politiciens, avons contribué au changement climatique.</p><p>Les émissions mondiales de gaz à effet de serre continuent d'augmenter, avec des contributions historiques et actuelles inégales dues à une <b>utilisation insoutenable de l'énergie, à l'utilisation des terres, aux modes de vie et aux habitudes de consommation et de production</b>.</p><p>Bien que les entreprises jouent un rôle clé dans la réduction du réchauffement climatique grâce à leurs engagements en faveur de l'empreinte carbone nulle et à leurs investissements dans les nouvelles technologies énergétiques et les mesures d'efficacité énergétique, elles peuvent également <b>entraver l'action climatique par des activités de lobbying ciblées et des stratégies médiatiques visant à semer le doute</b>.</p><p>Les gouvernements, les entreprises et la société civile ont réagi de plus en plus en planifiant et en prenant des mesures pour réduire les risques actuels et futurs liés au changement climatique. Cependant, les <b>politiques et actions climatiques actuelles ne suffisent pas à atteindre les objectifs fixés</b>.</p><p>Des <b>poursuites judiciaires</b> liées au changement climatique ont également été engagées contre les entreprises par des gouvernements régionaux ou locaux et des organisations non gouvernementales.</p><p><b>Les choix de consommations des individus jouent également un rôle important</b> dans les émissions de gaz à effet de serre.</p><p>En résumé, chacun de nous, en tant qu'individus, entreprises et politiciens, a contribué au changement climatique.</p>`,
    },
    sources: [
      "https://www.ipcc.ch/report/ar6/syr/downloads/report/IPCC_AR6_SYR_SPM.pdf#page=4",
      "https://www.ipcc.ch/report/ar6/wg3/downloads/report/IPCC_AR6_WGIII_TechnicalSummary.pdf#page=11",
      "https://www.ipcc.ch/report/ar6/wg3/downloads/report/IPCC_AR6_WGIII_FullReport.pdf#page=619",
      "https://report.ipcc.ch/ar6/wg2/IPCC_AR6_WGII_FullReport.pdf#page=138",
      "https://www.ipcc.ch/report/ar6/wg3/downloads/report/IPCC_AR6_WGIII_FullReport.pdf#page=1593",
    ],
    imageSrc: "/images/responsible.png",
    imageAlt: "Meme de Malheurs Actuels",
    imageHeight: 692,
    imageWidth: 1598,
    emojiSrc:
      "https://em-content.zobj.net/source/microsoft-teams/363/index-pointing-at-the-viewer_1faf5.png",
    emojiAlt: "Index pointant le visiteur",
    emojiHeight: 80,
    emojiWidth: 80,
    reverse: true,
    nextSection: "#individual-solutions",
  },
  {
    id: "individual-solutions",
    topic: "Solutions individuelles",
    title: "Que faire à mon échelle ?",
    description: {
      __html: `<p>L'empreinte carbone moyenne d'un Français se situe <b>autour de 10 tonnes CO₂e</b>, le budget maximum cible par personne pour respecter l'accord de Paris est environ de 2 tonnes.</p><p><b>Se déplacer en train et non en avion</b>. La plupart des trajets en avion ne passent pas dans le budget cible pour respecter l'accord de Paris. Paris-New York = 1,6 tonne CO₂e, le budget entier d'une personne pour se loger etc : 2 tonnes.</p><p><b>Diviser par 3 sa consommation de viande</b>. La viande pour un Français en 2019 compte en moyenne pour 920kgCO₂e. Il faut diviser ce budget par au moins 3 pour respecter le budget de 2 tonnes par personne et par an.</p><p><b>Ne plus se chauffer à l'énergie fossile</b>. Pompe à chaleur, électrique ou chauffage au bois, il est possible d'économiser 1180kgCO₂e.</p><p><b>Privilégier le vélo pour les petits trajets</b>. La voiture compte pour 2030kgCO₂e, à elle seule elle consomme plus que le budget cible total par personne et par an.</p><p><b>Pour une voiture : il faut qu'elle soit petite et électrique</b>. La littérature scientifique est claire, il faut privilégier l'électrique à la voiture thermique. Cependant, le second paramètre important à prendre en compte est le poids de la voiture. Remplacer le parc actuel par des SUV électriques n'est pas soutenable.</p><p><b>Garder ses appareils plus longtemps</b>. Lave-vaisselle : 271kgCO₂e, Réfrigérateur : 196kgCO₂e, Écran LCD (24 pouces): 431kgCO₂e. Conserver plus longtemps ses appareils, acheter d'occasion ou réparer ses appareils sont des actions qui permettent de réduire de manière non négligeable votre empreinte carbone.</p><p>Ces mesures permettent de diviser votre empreinte jusqu'à 5. Pour mesurer votre empreinte carbone, c'est sur <a target="_blank" rel="noopener noreferrer" class="underline text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100" href="https://nosgestesclimat.fr/">ce lien</a>.</p><p>Pour aller plus loin, <b>militer</b> pour pousser le gouvernement et les entreprises à prendre des mesures en faveur de la réduction de la consommation d'énergies fossiles est important.</p>`,
    },
    sources: [
      "https://www.ipcc.ch/report/ar6/wg3/downloads/report/IPCC_AR6_WGIII_SummaryForPolicymakers.pdf#page=48",
      "https://www.ipcc.ch/report/ar6/wg3/downloads/report/IPCC_AR6_WGIII_FullReport.pdf#page=619",
      "https://nosgestesclimat.fr/",
    ],
    imageSrc: "/images/reduce.png",
    imageAlt: "Capture d'écran de l'outil Reduce",
    imageHeight: 402,
    imageWidth: 3436,
    emojiSrc:
      "https://em-content.zobj.net/source/microsoft-teams/363/flexed-biceps_1f4aa.png",
    emojiAlt: "Biceps",
    emojiHeight: 80,
    emojiWidth: 80,
    nextSection: "#faq",
  },
];
