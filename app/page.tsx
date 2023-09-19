import Image from "next/image";
import Section from "@/components/Section";
import NextSection from "@/components/NextSection";
import Example from "@/components/Example";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Home() {
  return (
    <>
      <div className="relative max-w-5xl mx-auto pt-20 sm:pt-24 lg:pt-64 h-screen">
        <h1 className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-7xl tracking-tight text-center">
          Le climat en 5 minutes{" "}
          <Image
            className={"inline-block -translate-y-2"}
            width={60}
            height={60}
            src={
              "https://em-content.zobj.net/source/telegram/358/hourglass-done_231b.webp"
            }
            alt={"Sablier animé"}
          />
        </h1>
        <p className="mt-6 text-2xl leading-normal text-slate-600 text-center max-w-4xl mx-auto">
          S'informer sur la responsabilité humaine, les conséquences du
          changement climatique et solutions en 5 minutes.
        </p>
        <NextSection content={"C'est parti"} anchor={"#start"} />
      </div>
      <div
        id={"start"}
        className={
          "max-w-6xl h-screen text-4xl mb-60 font-medium leading-normal text-center mx-auto flex"
        }
      >
        <div className={"m-auto"}>
          Bienvenue dans le monde du changement climatique.{" "}
          <Image
            className={"inline-block -translate-y-2"}
            src={"/images/Waving Hand.png"}
            alt={"Main qui dit bonjour"}
            width={50}
            height={50}
          />
          <br />
          En 5 minutes, explorons les <b>bases essentielles</b> pour comprendre
          ce sujet vital.
          <NextSection anchor={"#energySources"} noMargin={true} />
        </div>
      </div>
      <Section
        id={"energySources"}
        topic={"Un peu d'histoire"}
        title={"L’histoire de nos sources d’énergie"}
        description={{
          __html: `<p>Pendant des millénaires, les sociétés dépendaient de la <b>force musculaire humaine et animale</b> pour leur travail, ainsi que de la <b>biomasse</b> (bois et déchets agricoles) pour la chaleur et la lumière.</p><p>Ensuite, au milieu du 19e siècle, l'invention de la machine à vapeur a marqué le début de la <b>révolution industrielle</b>, utilisant le <b>charbon</b> comme principale source d'énergie, devenu dominant jusqu'au début du 20e siècle.</p> <p>Au 20e siècle, nous avons ajouté le <b>pétrole</b> (devenue la source la plus utilisée), le <b>gaz</b> et l'énergie <b>hydraulique</b>.</p><p>Plus tard, vers les années 1960, l'<b>énergie nucléaire</b> a été intégrée, mais sa part restait relativement faible.</p> <p>Les <b>énergies renouvelables</b> modernes, comme le solaire et l'éolien, sont venues après, vers les années 1980, et bien qu'elles aient augmenté depuis lors, elles représentent toujours une part <b>relativement modeste</b> de la production totale d'énergie.</p>`,
        }}
        imageSrc={"/images/global-energy-substitution.png"}
        imageAlt={"Consommation globale d'énergie"}
        imageHeight={1134}
        imageWidth={1600}
        emojiSrc={
          "https://em-content.zobj.net/source/microsoft-teams/363/woman-teacher-light-skin-tone_1f469-1f3fb-200d-1f3eb.png"
        }
        emojiAlt={"Professeure"}
        emojiHeight={80}
        emojiWidth={80}
        nextSection={"#oldIssue"}
        sources={["https://ourworldindata.org/global-energy-200-years"]}
      />
      <Section
        id={"oldIssue"}
        topic={"Un peu d'histoire"}
        title={"Un problème de longue date"}
        description={{
          __html: `<p>Au XIXe siècle, les scientifiques réalisent que l’<b>atmosphère peut affecter la température de la planète</b>. </p> <p>Joseph Fourier (grand physicien français) signe l’acte de naissance de la théorie de l’effet de serre en 1827.</p> <p>Il découvre que certains gaz, comme le dioxyde de carbone (CO2), emprisonnent la chaleur envoyée par le soleil dans l'atmosphère, créant un équilibre thermique nécessaire à la vie.</p> <p>Cependant, avec la Révolution industrielle, la combustion croissante de charbon, de pétrole et de gaz a libéré davantage de CO2 dans l'atmosphère, <b>perturbant cet équilibre</b> et entraînant un réchauffement climatique.</p> <p>Ce lien entre les émissions de gaz à effet de serre et l'utilisation d'énergies fossiles est <b>aujourd'hui bien établi</b>.</p>`,
        }}
        sources={[
          "https://fr.wikipedia.org/wiki/Histoire_de_la_recherche_sur_le_changement_climatique",
        ]}
        imageSrc={"/images/old-paper.png"}
        imageAlt={"Warkworth, Science Notes and News"}
        imageHeight={788}
        imageWidth={580}
        emojiSrc={
          "https://em-content.zobj.net/source/microsoft-teams/363/spiral-calendar_1f5d3-fe0f.png"
        }
        emojiAlt={"Calendrier"}
        emojiHeight={80}
        emojiWidth={80}
        reverse={true}
        nextSection={"#ghe"}
      />
      <Section
        id={"ghe"}
        topic={"L'effet de serre"}
        title={"Qu'est ce que l'effet de serre ?"}
        description={{
          __html: `<p>Le GES (Gaz à Effet de Serre) est un <b>type de gaz présent dans l'atmosphère</b>. Il a la particularité de bloquer certaines longueurs d'ondes infrarouges émises par la surface de la planète.</p> <p>En d'autres termes, il agit <b>comme un voile</b> qui empêche l'énergie thermique de la Terre, sous forme de rayonnement infrarouge, de s'échapper facilement vers l'espace.</p><p>Cela a pour effet de <b>retenir la chaleur</b> dans l'atmosphère, contribuant ainsi au réchauffement de la planète, un phénomène connu sous le nom d'effet de serre.</p>`,
        }}
        sources={[
          "https://www.ipcc.ch/report/ar6/wg3/downloads/report/IPCC_AR6_WGIII_FullReport.pdf#page=233",
        ]}
        imageSrc={"/images/ghg.png"}
        imageAlt={"L'effet de serre"}
        imageHeight={1600}
        imageWidth={1131}
        emojiSrc={
          "https://em-content.zobj.net/source/microsoft-teams/363/dashing-away_1f4a8.png"
        }
        emojiAlt={"Fumée"}
        emojiHeight={80}
        emojiWidth={80}
        nextSection={"#ghg"}
      />
      {/*<Example*/}
      {/*  content={*/}
      {/*    "Les gaz à effet de serre (GES) comme le dioxyde de carbone (CO2), le méthane (CH4) et l'oxyde nitreux (N2O) sont des composés atmosphériques qui absorbent et émettent des radiations, créant l'effet de serre crucial pour la vie sur Terre."*/}
      {/*  }*/}
      {/*  imageSrc={"/images/ghg-by-percentage.png"}*/}
      {/*  imageWidth={1600}*/}
      {/*  imageHeight={1131}*/}
      {/*  imageAlt={"Les gaz à effet de serre"}*/}
      {/*/>*/}
      <Section
        id={"ghg"}
        topic={"Gaz à effet de serre"}
        title={"Nos émissions de GES ont fortement augmenté"}
        description={{
          __html: `<p>Les activités humaines ont augmenté les niveaux de ces GES, intensifiant l'effet de serre et provoquant le changement climatique.</p><p>Parmi eux, le <b>dioxyde de carbone (CO2)</b> a augmenté de 50% depuis l'ère préindustrielle en raison de la combustion des combustibles fossiles, le <b>méthane (CH4)</b> a doublé en raison de l'agriculture et de la production d'énergie fossile, et l'oxyde nitreux (N2O) a augmenté de 20% en raison de l'agriculture et de la combustion de combustibles fossiles.</p>`,
        }}
        sources={[
          "https://www.ipcc.ch/report/ar6/wg3/downloads/report/IPCC_AR6_WGIII_FullReport.pdf#page=233",
        ]}
        imageSrc={"/images/cumulative-co2-emissions.png"}
        imageAlt={"Concentration de CO2 dans l'atmosphère"}
        imageHeight={1600}
        imageWidth={889}
        emojiSrc={
          "https://em-content.zobj.net/source/microsoft-teams/363/chart-increasing_1f4c8.png"
        }
        emojiAlt={"Fumée"}
        emojiHeight={80}
        emojiWidth={80}
        reverse={true}
        nextSection={"#hugeRise"}
      />
      <Section
        id={"hugeRise"}
        topic={"Un problème de taille"}
        title={"Une hausse sans précédent"}
        description={{
          __html: `<p>L’influence humaine a réchauffé le climat à un rythme <b>sans précédent
depuis au moins 2000 ans</b>.</p> <p>L'ensemble du système climatique connaît des changements sans précédent depuis plusieurs siècles à plusieurs milliers d'années.</p> <p>Les concentrations de gaz à effet de serre comme le CO2 ont atteint <b>des niveaux inégalés depuis au moins 2 millions d'années</b>, tandis que les températures à la surface du globe ont augmenté plus rapidement depuis 1970 que sur toute autre période de 50 ans au cours des 2000 dernières années.</p><p>Le changement climatique d'origine humaine influence déjà les <b>extrêmes météorologiques et climatiques mondiaux</b>, tels que les vagues de chaleur, les précipitations extrêmes et les cyclones tropicaux.</p>`,
        }}
        sources={[
          "https://www.ipcc.ch/report/sixth-assessment-report-working-group-i/",
        ]}
        imageSrc={"/images/hausse-temp.png"}
        imageAlt={"Hausse des températures"}
        imageHeight={507}
        imageWidth={1002}
        emojiSrc={
          "https://em-content.zobj.net/source/microsoft-teams/363/fire_1f525.png"
        }
        emojiAlt={"Feu"}
        emojiHeight={80}
        emojiWidth={80}
        nextSection={"#temperatureRise"}
      />
      <Section
        id={"temperatureRise"}
        topic={"L'augmentation de la température"}
        title={"Quelques degrés, bonne nouvelle ? "}
        description={{
          __html: `<p>Les fluctuations de température sont courantes, par exemple, de 5 degrés le matin à 15 degrés l'après-midi, nous avons une fluctuation de 10 degrés et pourtant, vous étiez vivant ce matin et l’êtes toujours cette après-midi.</p> <p>Cependant, <b>considérer une moyenne est différent</b>. Lorsque nous sommes en automne en France, c'est le printemps en Australie et les températures augmentent.</p> <p><b>La moyenne globale ne varie pas de 10 ou 15 degrés</b> tous les quatre matins. Elle ne représente <b>pas du tout la même chose qu'une variation locale et instantanée</b>, même si les deux situations impliquent des changements de température.</p><p>Prenons comme exemple une comparaison sur 20 000 ans avec la dernière ère glaciaire.</p><p><b>À droite : Europe préindustrielle</b> (18e siècle). On y trouvait essentiellement des forêts, que l'on a beaucoup coupées pour y cultiver des terres ou y construire des villes. Les arbres sont les végétaux naturels d'Europe.</p><p><b>À gauche : l'Europe telle qu'elle était il y a 20 000 ans</b>. La géographie européenne était très différente de ce qu'elle est aujourd'hui. Il n'y avait pas de Suède, la Scandinavie était <b>sous 3km de glace</b>.</p><p><b>D'énormes calottes glaciaires</b> étaient posées sur le Canada et sur le nord de la Sibérie. Pour constituer ces calottes, il a fallu de l'eau, essentiellement venue de l'océan, transfert d'eau par évaporation/précipitation. </p><p>L'océan a baissé de 120 mètres, <b>il n'y avait pas de Manche</b>. Le climat était beaucoup plus froid et beaucoup plus sec, ce qui nous donnait des écosystèmes ressemblant à ce qui se trouve actuellement au nord de la Scandinavie.</p><p>La population française était de l'ordre d'une petite ville d'aujourd'hui, il y a la capacité à nourrir 100 000 personnes en France.</p><p>L’état de gauche à l’état de droite s’est opéré dans le cadre d’un réchauffement climatique global naturel qui a marqué la fin de l’ère glacière (la déglaciation).</p><p>Ce réchauffement climatique global n’a été que de <b>4 à 5 degrés en 10000 ans</b> (!!). C’est le résultat d’une expérience grandeur nature et on constate le changement massif de géographie induit.</p>`,
        }}
        sources={["https://www.youtube.com/watch?v=0KYIjNFo4kw"]}
        imageSrc={"/images/5degres-comparaison.png"}
        imageAlt={"Comparaison climat 5 degrés de différence"}
        imageHeight={1536}
        imageWidth={1048}
        emojiSrc={
          "https://em-content.zobj.net/source/microsoft-teams/363/sun_2600-fe0f.png"
        }
        emojiAlt={"soleil"}
        emojiHeight={80}
        emojiWidth={80}
        reverse={true}
        nextSection={"#climateFutur"}
      />
      <Section
        id={"climateFutur"}
        topic={"Futur climatique"}
        title={"De combien allons nous réchauffer la planète"}
        description={{
          __html: `<p>Le rapport AR6 du GIEC explore les réponses climatiques à <b>cinq nouveaux scénarios d'émissions</b>.</p><p>Ces scénarios projettent les changements climatiques sur le 21e siècle pour différentes périodes et niveaux de réchauffement.</p> <p>La quantité de réchauffement climatique mondial que nous pouvons attendre au cours du prochain siècle <b>dépend du niveau d'émissions de gaz à effet de serre</b>.</p><p>Le réchauffement moyen annuel projeté sur les terres à la fin du siècle se situe dans la <b>fourchette de 0,9 à 5,6°C par rapport aux deux dernières décennies</b> du XXe siècle, en fonction du scénario d'émissions.</p>`,
        }}
        sources={[
          "https://www.ipcc.ch/report/sixth-assessment-report-working-group-i/",
        ]}
        imageSrc={"/images/scenarios.png"}
        imageAlt={"Scénarios climatiques"}
        imageHeight={522}
        imageWidth={1002}
        emojiSrc={
          "https://em-content.zobj.net/source/microsoft-teams/363/crystal-ball_1f52e.png"
        }
        emojiAlt={"Boule de cristal"}
        emojiHeight={80}
        emojiWidth={80}
        nextSection={"#consequences"}
      />
      <Section
        id={"consequences"}
        topic={"Les conséquences"}
        title={"Est-ce grave docteur ?"}
        description={{
          __html: `<p>Le changement climatique représente une <b>menace significative</b> pour l'humanité.</p><p>Ses conséquences dépendent fortement des actions de mitigation et d'adaptation à court terme, et les risques associés augmentent avec le réchauffement global.</p><p>Environ <b>3,3 à 3,6 milliards de personnes vivent dans des contextes très vulnérables au changement climatique</b>.</p>`,
        }}
        sources={[
          "https://www.ipcc.ch/report/ar6/wg2/downloads/report/IPCC_AR6_WGII_SummaryForPolicymakers.pdf#page=14",
          "https://www.ipcc.ch/site/assets/uploads/sites/4/2022/11/SRCCL_SPM.pdf#page=18",
          "https://www.ipcc.ch/report/ar6/wg2/downloads/report/IPCC_AR6_WGII_TechnicalSummary.pdf#page=33",
          "https://report.ipcc.ch/ar6/wg2/IPCC_AR6_WGII_FullReport.pdf#page=2430",
          "https://bonpote.com/33-milliards-detres-humains-exposes-au-changement-climatique-le-nouveau-rapport-du-giec-est-sans-appel/",
        ]}
        emojiSrc={
          "https://em-content.zobj.net/source/microsoft-teams/363/woman-health-worker_1f469-200d-2695-fe0f.png"
        }
        emojiAlt={"soleil"}
        emojiHeight={80}
        emojiWidth={80}
        nextSection={"#hyperthermia"}
      />
      <Section
        id={"hyperthermia"}
        topic={"Futur climatique"}
        title={"Des régions inhabitables"}
        description={{
          __html: `<p>Le graphique illustre le nombre de jours où les <b>conditions extérieures deviendront létales</b> (sortir à l'extérieur entraînerait la mort) sur une planète dont la température s'est réchauffée de 4.5 et 8.5 degrés par rapport à aujourd'hui. </p><p>La concentration de ces conditions mortelles se situe principalement dans la bande équatoriale en raison de la saturation de l'air en humidité.</p><p> Lorsque l'air ambiant dépasse 35 degrés avec une humidité à 100%, <b>le corps ne peut plus se refroidir par évaporation</b>, ce qui conduit à l'hyperthermie et peut être mortel.</p><p>Les régions en rouge/violet, fortement peuplées, deviendront donc inadaptées à la vie, ce qui pourrait entraîner d'importants troubles géopolitiques.</p>`,
        }}
        sources={[
          "https://www.ipcc.ch/report/sixth-assessment-report-working-group-ii/",
        ]}
        imageSrc={"/images/hyperthermia.png"}
        imageAlt={"Scénarios climatiques"}
        imageHeight={1020}
        imageWidth={2328}
        emojiSrc={
          "https://em-content.zobj.net/source/microsoft-teams/363/hot-face_1f975.png"
        }
        emojiAlt={"Tête chaude"}
        emojiHeight={80}
        emojiWidth={80}
        nextSection={"#fire"}
      />
      <Section
        id={"fire"}
        topic={"Futur climatique"}
        title={"Des mégafeux"}
        description={{
          __html: `<p>Le changement climatique provoque une augmentation de la fréquence et de l'intensité des événements météorologiques extrêmes, notamment les sécheresses et les conditions propices aux incendies, ce qui entraîne des <b>incendies plus fréquents et plus graves dans de nombreuses régions</b>. </p> <p>L’augmentation de la température est le lien le plus évident entre le réchauffement climatique et l’aggravation des incendies de forêt. La végétation et le sol s’assèchent, ce qui crée davantage de combustible inflammable pour que les incendies se propagent plus loin et plus vite.</p>`,
        }}
        sources={[
          "https://www.ipcc.ch/report/ar6/wg2/downloads/report/IPCC_AR6_WGII_SummaryForPolicymakers.pdf",
          "https://bonpote.com/doit-on-sattendre-a-plus-de-megafeux-a-cause-du-changement-climatique/",
        ]}
        imageSrc={"/images/fires.png"}
        imageAlt={"Scénarios climatiques"}
        imageHeight={1020}
        imageWidth={2328}
        emojiSrc={
          "https://em-content.zobj.net/source/microsoft-teams/363/fire_1f525.png"
        }
        emojiAlt={"Tête chaude"}
        emojiHeight={80}
        emojiWidth={80}
        reverse={true}
      />
      <Example
        content={"En 2023, 1,5 fois la taille de l’Autriche a brûlé au Canada"}
        imageSrc={"/images/canadafire2023.png"}
        imageWidth={880}
        imageHeight={600}
        imageAlt={"Feu au Canada, 2023"}
      />
      <NextSection anchor={"#drought"} />
      <Section
        id={"drought"}
        topic={"Futur climatique"}
        title={"De la sécheresse"}
        description={{
          __html: `<p>Une part croissante des terres émergées va connaître une <b>augmentation de la sécheresse</b>.</p> <p>Les régions en marron illustrent celles qui deviendront plus arides, comprenant tout le pourtour du bassin méditerranéen, y compris la France. </p><p>Une vaste étendue de l'Amérique et de la Chine sera également touchée, ainsi que la <b>majeure partie de la production agricole mondiale</b>. </p>`,
        }}
        sources={[
          "https://www.ipcc.ch/report/sixth-assessment-report-working-group-i/",
        ]}
        imageSrc={"/images/drought.png"}
        imageAlt={"Scénarios climatiques"}
        imageHeight={692}
        imageWidth={1702}
        emojiSrc={
          "https://em-content.zobj.net/source/microsoft-teams/363/non-potable-water_1f6b1.png"
        }
        emojiAlt={"Tête chaude"}
        emojiHeight={80}
        emojiWidth={80}
        nextSection={"#biodiversity"}
      />
      <Section
        id={"biodiversity"}
        topic={"Futur climatique"}
        title={"Un effondrement de la biodiversité"}
        description={{
          __html: `<p>Dans un monde avec un réchauffement de +2 degrés, <b>environ un tiers des terres émergées subiront un effondrement de leur biodiversité</b> (pertes d’habitat pour 143 zones de haute importance pour la conservation de la biodiversité).</p><p>Le changement climatique entraîne également un réchauffement et une acidification des océans, ce qui a un impact négatif sur la vie marine. </p><p>Cela conduit à une <b>perte prévue de la biodiversité dans de nombreux écosystèmes océaniques et côtiers</b> (l'acidification des océans complique la production de carbonate de calcium par les organismes nécessitant la formation de petites coquilles, notamment une importante proportion du zooplancton et du phytoplancton, des micro-organismes marins en amont des réseaux alimentaires.)</p>`,
        }}
        sources={[
          "https://www.ipcc.ch/report/ar6/wg2/downloads/report/IPCC_AR6_WGII_FullReport.pdf",
        ]}
        imageSrc={"/images/biodiversity.png"}
        imageAlt={"Futur de la biodiversité"}
        imageHeight={556}
        imageWidth={1548}
        emojiSrc={
          "https://em-content.zobj.net/source/microsoft-teams/363/honeybee_1f41d.png"
        }
        emojiAlt={"Tête chaude"}
        emojiHeight={80}
        emojiWidth={80}
        nextSection={"#food"}
        reverse={true}
      />
      <Section
        id={"food"}
        topic={"Alimentation"}
        title={"Insécurité alimentaire"}
        description={{
          __html: `<p>Dès que les températures s'élèvent après 2,5 degrés, <b>l’insécurité alimentaire commence à se généraliser sur la planète</b> (ce qui peut entrainer des instabilités politiques).</p>`,
        }}
        sources={[
          "https://www.ipcc.ch/srccl/chapter/summary-for-policymakers/",
        ]}
        imageSrc={"/images/food.png"}
        imageAlt={"Impact sur l'alimentation"}
        imageHeight={826}
        imageWidth={3146}
        emojiSrc={
          "https://em-content.zobj.net/source/microsoft-teams/363/fork-and-knife-with-plate_1f37d-fe0f.png"
        }
        emojiAlt={"Assiette"}
        emojiHeight={80}
        emojiWidth={80}
        nextSection={"#glacier"}
      />
      <Section
        id={"glacier"}
        topic={"Glacier"}
        title={"Fonte des glaciers"}
        description={{
          __html: `<p>Le réchauffement climatique provoque une <b>fonte généralisée des glaciers dans le monde</b>, touchant la banquise, la neige, et la masse des glaciers, à un rythme sans précédent. </p><p> Cette fonte contribue à l'élévation du niveau de la mer, augmentant le risque d'inondations côtières. Elle <b>perturbe les saisons de neige et les débits des rivières</b> à l'échelle mondiale.</p><p>De plus, la fonte des glaciers a des conséquences déséquilibrantes dans les régions arctiques, libérant des gaz à effet de serre et <b>aggravant le changement climatique</b>.</p><p>En parallèle, la fonte des glaciers <b>met en péril l'approvisionnement en eau</b> des communautés en montagne et en aval, menaçant la production d'hydroélectricité, l'irrigation, et l'approvisionnement en eau des villes. </p><p>Elle impacte également la santé et la culture des communautés arctiques, mettant en danger leurs modes de vie traditionnels de manière profonde et non seulement adaptative.</p>`,
        }}
        sources={[
          "https://www.ipcc.ch/site/assets/uploads/sites/2/2022/06/SPM_version_report_LR.pdf#page=4",
          "https://www.ipcc.ch/report/ar6/wg1/downloads/report/IPCC_AR6_WGI_SPM.pdf#page=3",
          "https://www.ipcc.ch/site/assets/uploads/sites/3/2022/03/02_SROCC_TS_FINAL.pdf#page=17",
        ]}
        imageSrc={"/images/ice-graph.png"}
        imageAlt={"Impact sur l'alimentation"}
        imageHeight={554}
        imageWidth={1024}
        emojiSrc={
          "https://em-content.zobj.net/source/microsoft-teams/363/ice_1f9ca.png"
        }
        emojiAlt={"Glace"}
        emojiHeight={80}
        emojiWidth={80}
        nextSection={"#seaRise"}
        reverse={true}
      />
      <Section
        id={"seaRise"}
        topic={"Océans et mers"}
        title={"Une élévation du niveau de la mer"}
        description={{
          __html: `<p>D'après les rapports du GIEC, l'augmentation du niveau de la mer due au changement climatique est un <b>sujet majeur</b>. Environ 19 centimètres de hausse ont été enregistrés entre 1901 et 2010, ce qui dépasse la moyenne des deux millénaires précédents. </p><p> Cette montée est provoquée par la <b>fonte des glaciers et des calottes glaciaires</b>, ainsi que par le <b>réchauffement continu des océans </b>(dilatation thermique de l'eau).</p><p>Le GIEC prévoit que cette élévation se <b>poursuivra pendant des siècles</b> (une élévation de l'océan de plus de 15 mètres est prévue à l'échelle de plusieurs siècles), même si les émissions de gaz à effet de serre sont stoppées, à cause de la rétention continue de chaleur dans les profondeurs des océans et de la fonte des glaces du Groenland et de l'Antarctique.</p> <p>Cette élévation prévue augmente les risques d'<b>inondations côtières</b>.</p>`,
        }}
        sources={[
          "https://www.ipcc.ch/site/assets/uploads/sites/3/2022/03/01_SROCC_SPM_FINAL.pdf#page=34",
          "https://www.ipcc.ch/site/assets/uploads/sites/3/2022/03/02_SROCC_TS_FINAL.pdf#page=9",
          "https://www.ipcc.ch/site/assets/uploads/sites/3/2022/03/03_SROCC_Ch01_FINAL.pdf#page=13",
        ]}
        imageSrc={"/images/seaRise.png"}
        imageAlt={"Montée du niveau de la mer"}
        imageHeight={1134}
        imageWidth={1304}
        emojiSrc={
          "https://em-content.zobj.net/source/microsoft-teams/363/water-wave_1f30a.png"
        }
        emojiAlt={"Vague"}
        emojiHeight={80}
        emojiWidth={80}
        nextSection={"#disease"}
      />
      <Section
        id={"disease"}
        topic={"Santé"}
        title={"Des maladies"}
        description={{
          __html: `<p>Selon les rapports du GIEC, le changement climatique a des <b>conséquences négatives sur la santé humaine, incluant tant la santé physique que mentale</b>, avec des risques accrus de décès prématurés et de maladies.</p><p> Les épisodes de chaleur extrême entraînent des morts et des maladies, tandis que les maladies transmises par des vecteurs se multiplient en raison de <b>l'expansion des aires de répartition et de la reproduction accrue des vecteurs de maladies</b>.</p><p>Les risques de maladies liées à l'alimentation et à l'eau augmenteront sans adaptation supplémentaire. </p><p>Des maladies comme le paludisme et la dengue sont susceptibles d'augmenter avec le réchauffement, avec des déplacements géographiques possibles. </p><p>Le changement climatique contribue également au risque de nouvelles maladies infectieuses en influençant les mouvements d'espèces, vers de nouvelles populations humaines.</p><p>Les variations climatiques créent aussi l'insécurité alimentaire, <b>pouvant mener à la malnutrition et à la prédisposition aux maladies</b>, surtout dans les pays à faible et moyen revenu. </p><p>Cependant, dans certaines régions, le lien entre le changement climatique et l'incidence des maladies reste à démontrer en raison du manque d'études à long terme.</p>`,
        }}
        sources={[
          "https://www.ipcc.ch/report/ar6/wg2/downloads/report/IPCC_AR6_WGII_SummaryForPolicymakers.pdf#page=11",
        ]}
        imageSrc={"/images/disease.png"}
        imageAlt={"Microbe"}
        imageHeight={584}
        imageWidth={1898}
        emojiSrc={
          "https://em-content.zobj.net/source/microsoft-teams/363/microbe_1f9a0.png"
        }
        emojiAlt={"Vague"}
        emojiHeight={80}
        emojiWidth={80}
        nextSection={"#nonLinear"}
        reverse={true}
      />
      <Section
        id={"nonLinear"}
        topic={"Glacier"}
        title={"Des conséquences non linéaires"}
        description={{
          __html: `<p>Dans le monde économique, nous avons l'habitude de penser de manière linéaire. Par exemple, si une action coûte 100 euros, alors deux actions coûtent 200 euros. </p><p>Cependant, il est important de comprendre que ce type de raisonnement ne s'applique pas toujours au monde naturel, qui peut être beaucoup plus complexe.</p><p>On pourrait penser que si la température augmente de 2 degrés Celsius, c'est deux fois pire qu'une augmentation d'un degré. </p><p>Mais en réalité, ce n'est pas si simple. <b>Les conséquences du changement climatique augmentent beaucoup plus rapidement que l'élévation de la température</b>. </p><p>Un réchauffement de 2 degrés Celsius peut être 50 fois plus grave qu'un réchauffement d'un degré. Chaque demi-degré de plus peut avoir des conséquences désagréables équivalent à toutes les conséquences que nous avons déjà connues.</p><p>Il est essentiel de comprendre que les impacts du changement climatique ne <b>suivent pas une progression linéaire</b>. Chaque petit degré supplémentaire de réchauffement peut avoir des conséquences disproportionnées et graves pour notre planète et ses écosystèmes.</p><p><p>Tout acte manqué, narratif favorisant le statu-quo conduit à des ⅒ de degrés supplémentaires, à des souffrances, à des morts.</p>`,
        }}
        sources={[
          "https://www.ipcc.ch/report/ar6/wg1/downloads/report/IPCC_AR6_WGI_TS.pdf#page=24",
        ]}
        emojiSrc={
          "https://em-content.zobj.net/source/microsoft-teams/363/rocket_1f680.pngg"
        }
        emojiAlt={"Fusée"}
        emojiHeight={80}
        emojiWidth={80}
        nextSection={"#justice"}
      />
      <Section
        id={"justice"}
        topic={"Justice climatique"}
        title={"Des conséquences injustes"}
        description={{
          __html: `<p>“<b>Les communautés vulnérables</b> qui ont le moins contribués au changement climatique historiquement sont <b>touchées de manière disproportionnée</b>“</p></p><p>Les rapports du GIEC indiquent que le changement climatique a provoqué des impacts négatifs étendus et des pertes et dommages associés à la nature et aux populations, qui sont répartis de manière inégale à travers différents systèmes, régions et secteurs. </p><p>Cela signifie que les conséquences du changement climatique ne sont pas les mêmes pour tout le monde. <b>Certaines personnes et régions sont plus touchées que d'autres</b>. Les personnes et les systèmes les plus vulnérables sont touchés de manière disproportionnée</p>`,
        }}
        sources={[
          "https://threadreaderapp.com/thread/1682449327787069443.html",
          "https://www.ipcc.ch/report/ar6/syr/downloads/report/IPCC_AR6_SYR_SPM.pdf#page=6",
          "https://www.ipcc.ch/report/ar6/syr/downloads/report/IPCC_AR6_SYR_SPM.pdf#page=33",
          "https://www.ipcc.ch/report/ar6/wg3/downloads/report/IPCC_AR6_WGIII_SummaryForPolicymakers.pdf#page=45",
        ]}
        emojiSrc={
          "https://em-content.zobj.net/source/microsoft-teams/363/balance-scale_2696-fe0f.png"
        }
        emojiAlt={"Fusée"}
        emojiHeight={80}
        emojiWidth={80}
        nextSection={"#inertia"}
      />
      <Section
        id={"inertia"}
        topic={"Inertie climatique"}
        title={"La bonne nouvelle, il n’y a pas d’inertie climatique"}
        description={{
          __html: `<p><b>Contrairement à une idée fausse, le climat peut changer plus rapidement que prévu si nous réduisons les émissions de CO2</b>. L'idée que le réchauffement est inévitable en raison des émissions passées est incorrecte. Si nous atteignons des émissions nettes nulles, le réchauffement devrait s'arrêter. Cela a été reconnu par la science depuis longtemps.</p><p>Cependant, d'autres gaz à effet de serre et les aérosols peuvent compliquer la situation. Si toutes les émissions, y compris ces gaz, tombent à zéro, le réchauffement pourrait être légèrement supérieur ou inférieur à zéro.</p><p>Il y a des incertitudes, mais nous avons le pouvoir de choisir notre avenir climatique en agissant maintenant pour réduire les émissions.</p>`,
        }}
        sources={[
          "https://bonpote.com/existe-t-il-vraiment-une-inertie-climatique-de-20-ans/",
          "https://twitter.com/loic_giaccone/status/1681960928202334209",
        ]}
        emojiSrc={"https://emojipedia.org/microsoft-teams/15.0/eight-oclock"}
        emojiAlt={"Heure"}
        emojiHeight={80}
        emojiWidth={80}
        nextSection={"#limitParis"}
      />
      <Section
        id={"limitParis"}
        topic={"Solution"}
        title={"Limiter le réchauffement à 2 degrés (Accord de Paris)"}
        description={{
          __html: `<p>L'Accord de Paris est un accord mondial adopté en 2015 par 196 pays pour lutter contre le changement climatique. </p><p>Son objectif principal est de renforcer la réponse mondiale au changement climatique en limitant le réchauffement global à moins de 2 degrés Celsius par rapport aux niveaux préindustriels, avec des efforts pour limiter à 1,5 degré Celsius. </p><p> Il encourage la coopération internationale pour des actions climatiques ambitieuses, tout en favorisant le développement durable et la réduction de la pauvreté.</p><p>Cependant, il n’y a <b>aucune obligation</b> pour les États de respecter leurs objectifs. Aucune contrainte, ou sanction. De plus, l’Accord de Paris ne <b>mentionne pas une fois les combustibles fossiles</b>.</p>`,
        }}
        sources={[
          "https://www.ipcc.ch/report/ar6/wg2/downloads/report/IPCC_AR6_WGII_TechnicalSummary.pdf#page=66",
          "https://www.ipcc.ch/report/ar6/wg3/downloads/report/IPCC_AR6_WGIII_TechnicalSummary.pdf#page=86",
          "https://www.ipcc.ch/report/ar6/syr/downloads/report/IPCC_AR6_SYR_SPM.pdf#page=10",
          "https://bonpote.com/5-ans-apres-peut-on-dire-que-laccord-de-paris-na-servi-a-rien/",
          "https://ourworldindata.org/grapher/co2-mitigation-2c",
        ]}
        imageSrc={"/images/2deg.png"}
        imageAlt={"Réduction nécessaire pour respecter l'Accord de Paris"}
        imageHeight={1442}
        imageWidth={2058}
        emojiSrc={
          "https://em-content.zobj.net/source/microsoft-teams/363/chart-decreasing_1f4c9.png"
        }
        emojiAlt={"Graphique décroissant"}
        emojiHeight={80}
        emojiWidth={80}
        nextSection={"#responsable"}
      />
      <Section
        id={"responsable"}
        topic={"Responsable"}
        title={
          "Qui est responsable ? Les États, les entreprises, la population ?"
        }
        description={{
          __html: `<p>Les activités humaines, principalement les émissions de gaz à effet de serre, ont indiscutablement provoqué le réchauffement climatique. Tous, en tant qu'individus, entreprises et politiciens, avons contribué au changement climatique.</p><p>Les émissions mondiales de gaz à effet de serre continuent d'augmenter, avec des contributions historiques et actuelles inégales dues à une <b>utilisation insoutenable de l'énergie, à l'utilisation des terres, aux modes de vie et aux habitudes de consommation et de production</b>.</p><p>Bien que les entreprises jouent un rôle clé dans la réduction du réchauffement climatique grâce à leurs engagements en faveur de l'empreinte carbone nulle et à leurs investissements dans les nouvelles technologies énergétiques et les mesures d'efficacité énergétique, elles peuvent également <b>entraver l'action climatique par des activités de lobbying ciblées et des stratégies médiatiques visant à semer le doute</b>.</p><p>Les gouvernements, les entreprises et la société civile ont réagi de plus en plus en planifiant et en prenant des mesures pour réduire les risques actuels et futurs liés au changement climatique. Cependant, les <b>politiques et actions climatiques actuelles ne suffisent pas à atteindre les objectifs fixés</b>.</p><p>Des <b>poursuites judiciaires</b> liées au changement climatique ont également été engagées contre les entreprises par des gouvernements régionaux ou locaux et des organisations non gouvernementales.</p><p><b>Les choix de consommations des individus jouent également un rôle important</b> dans les émissions de gaz à effet de serre.</p><p>En résumé, chacun de nous, en tant qu'individus, entreprises et politiciens, a contribué au changement climatique</p>`,
        }}
        sources={[
          "https://www.ipcc.ch/report/ar6/syr/downloads/report/IPCC_AR6_SYR_SPM.pdf#page=4",
          "https://www.ipcc.ch/report/ar6/wg3/downloads/report/IPCC_AR6_WGIII_SummaryForPolicymakers.pdf#page=48",
          "https://www.ipcc.ch/report/ar6/wg3/downloads/report/IPCC_AR6_WGIII_TechnicalSummary.pdf#page=11",
          "https://www.ipcc.ch/report/ar6/wg3/downloads/report/IPCC_AR6_WGIII_FullReport.pdf#page=619",
          "https://report.ipcc.ch/ar6/wg2/IPCC_AR6_WGII_FullReport.pdf#page=138",
          "https://www.ipcc.ch/report/ar6/wg3/downloads/report/IPCC_AR6_WGIII_FullReport.pdf#page=1596",
          "https://www.ipcc.ch/report/ar6/wg3/downloads/report/IPCC_AR6_WGIII_FullReport.pdf#page=619",
          "https://www.ipcc.ch/report/ar6/wg3/downloads/report/IPCC_AR6_WGIII_FullReport.pdf#page=1593",
        ]}
        imageSrc={"/images/responsible.png"}
        imageAlt={"Meme de Malheurs Actuels"}
        imageHeight={692}
        imageWidth={1598}
        emojiSrc={
          "https://em-content.zobj.net/source/microsoft-teams/363/index-pointing-at-the-viewer_1faf5.png"
        }
        emojiAlt={"Index pointant le visiteur"}
        emojiHeight={80}
        emojiWidth={80}
        reverse={true}
        nextSection={"#individual-solutions"}
      />
      <Section
        id={"individual-solutions"}
        topic={"Solutions individuelles"}
        title={"Que faire à mon échelle ?"}
        description={{
          __html: `<p>L'empreinte carbone moyenne d'un Français se situe <b>autour de 10 tonnes CO₂e</b>, le budget maximum cible par personne pour respecter l'accord de Paris est environ de 2 tonnes.</p><p><b>Se déplacer en train et non en avion</b>. La plupart des trajets en avion ne passent pas dans le budget cible pour respecter l'accord de Paris. Paris-New York = 1.6 tonne CO₂e, le budget entier d'une personne pour se loger etc : 2 tonnes.</p><p><b>Diviser par 3 sa consommation de viande</b>. La viande pour un Français en 2019 compte en moyenne pour 920kgCO₂e. Il faut diviser ce budget par au moins 3 pour respecter le budget de 2 tonnes par personne et par an.</p><p><b>Ne plus se chauffer à l'énergie fossile</b>. Pompe à chaleur, électrique ou chauffage au bois, il est possible d'économiser 1180kgCO₂e.</p><p><b>Privilégier le vélo pour les petits trajets</b>. La voiture compte pour 2030kgCO₂e, à elle seule elle consomme plus que le budget cible total par personne et par an.</p><p><b>Pour une voiture : il faut qu'elle soit petite et électrique</b>. La littérature scientifique est claire, il faut privilégier l'électrique à la voiture thermique. Cependant, le second paramètre important à prendre en compte est le poids de la voiture. Remplacer le parc actuel par des SUV électriques n'est pas soutenable.</p><p><b>Garder ses appareils plus longtemps</b>. Lave-vaisselle : 271kgCO₂e, Réfrigérateur : 196kgCO₂e, Écran LCD (24 pouces): 431kgCO₂e. Conserver plus longtemps ses appareils, acheter d'occasion ou réparer ses appareils sont des actions qui permettent de réduire de manière non négligeable votre empreinte carbone.</p><p>Ces mesures permettent de diviser votre empreinte jusqu'à 5. Pour mesurer votre empreinte carbone, c'est sur <a target="_blank" class="underline" href="https://nosgestesclimat.fr/">ce lien</a>.</p><p>Pour aller plus loin, <b>militer</b> pour pousser le gouvernement et les entreprises à prendre des mesures en faveur de la réduction de la consommation d'énergies fossiles est important.</p>`,
        }}
        sources={[
          "https://www.ipcc.ch/report/ar6/syr/downloads/report/IPCC_AR6_SYR_SPM.pdf#page=4",
          "https://www.ipcc.ch/report/ar6/wg3/downloads/report/IPCC_AR6_WGIII_SummaryForPolicymakers.pdf#page=48",
          "https://www.ipcc.ch/report/ar6/wg3/downloads/report/IPCC_AR6_WGIII_TechnicalSummary.pdf#page=11",
          "https://www.ipcc.ch/report/ar6/wg3/downloads/report/IPCC_AR6_WGIII_FullReport.pdf#page=619",
          "https://report.ipcc.ch/ar6/wg2/IPCC_AR6_WGII_FullReport.pdf#page=138",
          "https://www.ipcc.ch/report/ar6/wg3/downloads/report/IPCC_AR6_WGIII_FullReport.pdf#page=1596",
          "https://www.ipcc.ch/report/ar6/wg3/downloads/report/IPCC_AR6_WGIII_FullReport.pdf#page=619",
          "https://www.ipcc.ch/report/ar6/wg3/downloads/report/IPCC_AR6_WGIII_FullReport.pdf#page=1593",
        ]}
        imageSrc={"/images/reduce.png"}
        imageAlt={"Capture d'écran de l'outil Reduce"}
        imageHeight={402}
        imageWidth={3436}
        emojiSrc={
          "https://em-content.zobj.net/source/microsoft-teams/363/flexed-biceps_1f4aa.png"
        }
        emojiAlt={"Biceps"}
        emojiHeight={80}
        emojiWidth={80}
      />
      <div
        className={
          "mx-auto text-center mb-20 mt-80 text-3xl sm:text-6xl text-slate-900 font-extrabold"
        }
      >
        FAQ
      </div>
      <Accordion type="single" collapsible className={"max-w-3xl mx-auto"}>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            Comment les scientifiques savent-ils que les activités humaines sont
            responsables du changement climatique ?
          </AccordionTrigger>
          <AccordionContent>
            <p>
              Les deux principaux facteurs naturels influençant le climat sont
              les variations de l'activité solaire et les éruptions volcaniques.
              Cependant, les principales causes du changement climatique actuel
              sont les augmentations des concentrations atmosphériques en gaz à
              effet de serre et en aérosols provenant de la combustion de
              combustibles fossiles, de l'utilisation des terres et d'autres
              sources. Les gaz à effet de serre emprisonnent la chaleur près de
              la surface, tandis que les aérosols, comme ceux produits par les
              volcans, refroidissent la surface en réfléchissant la lumière du
              soleil.
            </p>
            <p>
              Les taux actuels d'augmentation des concentrations des principaux
              gaz à effet de serre (dioxyde de carbone, méthane et oxyde
              nitreux) sont sans précédent depuis au moins 800 000 ans, et ces
              augmentations sont le résultat des activités humaines. Les modèles
              climatiques confirment que seul l'ajout de l'influence humaine
              permet de reproduire le réchauffement observé, tandis que les
              modèles basés uniquement sur des processus naturels ne parviennent
              pas à expliquer l'ampleur du réchauffement.
            </p>
            <p>
              De plus, l'impact dominant des activités humaines est visible non
              seulement dans le réchauffement de la température de surface
              mondiale, mais aussi dans les schémas de réchauffement dans
              l'atmosphère inférieure, le refroidissement dans la stratosphère,
              le réchauffement de l'océan, la fonte de la glace de mer et
              d'autres changements observés. Comparant également le taux de
              réchauffement actuel avec celui d'avant l'influence humaine, les
              données montrent que le réchauffement observé au cours des
              dernières décennies est principalement dû à l'activité humaine.
            </p>
            <div className={"mt-3"}>Sources</div>
            <ul>
              {[
                "https://report.ipcc.ch/ar6/wg1/IPCC_AR6_WGI_FullReport.pdf#page=532",
              ].map((link, index) => (
                <li key={link + index}>
                  <a
                    className={"underline text-slate-500"}
                    target={"_blank"}
                    href={link}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            La température de la Terre a varié par le passé. En quoi le
            réchauffement actuel est-il différent ?
          </AccordionTrigger>
          <AccordionContent>
            <p>
              Le climat de la Terre a toujours changé naturellement, mais à la
              fois l'étendue mondiale et la rapidité du réchauffement récent
              sont inhabituelles. Le réchauffement récent a inversé une tendance
              au refroidissement lent et de longue durée, et la recherche
              indique que la température de surface mondiale est actuellement
              plus élevée qu'elle ne l'a été depuis des millénaires.
            </p>
            <p>
              Bien que le climat puisse être caractérisé par de nombreuses
              variables, la température est un indicateur clé de l'état
              climatique global, et la température de surface mondiale est
              fondamentale pour caractériser et comprendre le changement
              climatique mondial, y compris le bilan énergétique de la Terre.
              Une grande variété de preuves géologiques montre que la
              température a varié tout au long de l'histoire de la Terre.
              Diverses archives naturelles provenant du monde entier, telles que
              les sédiments océaniques et lacustres, la glace des glaciers et
              les cernes des arbres, montrent qu'il y a eu des périodes dans le
              passé où la planète était plus froide et des périodes où elle
              était plus chaude. Bien que notre confiance dans la quantification
              des changements de température à grande échelle diminue
              généralement plus on remonte dans le temps, les scientifiques
              peuvent toujours identifier au moins quatre différences majeures
              entre le réchauffement récent et ceux du passé.
            </p>
            <p>
              1. Il se réchauffe presque partout : Au cours des décennies et des
              siècles des 2000 dernières années, certaines régions se sont
              réchauffées plus que la moyenne mondiale tandis que d'autres se
              sont refroidies. En revanche, le schéma de réchauffement de
              surface récent est globalement plus uniforme que pour d'autres
              fluctuations climatiques décennales à centennales sur au moins les
              deux derniers millénaires.
            </p>
            <p>
              2. Il se réchauffe rapidement : Au cours des 2 millions d'années
              passées, le climat de la Terre a fluctué entre des périodes
              interglaciaires relativement chaudes et des périodes glaciaires
              plus fraîches, marquées par la croissance de vastes calottes
              glaciaires sur de vastes étendues des continents du nord. Les
              périodes de réchauffement rapide ont coïncidé avec l'effondrement
              de grandes calottes glaciaires, annonçant des périodes
              interglaciaires comme l'actuel Holocène, qui a commencé il y a
              environ 12 000 ans. Au cours de la transition de la dernière
              période glaciaire à l'interglaciaire actuel, l'augmentation totale
              de la température a été d'environ 5°C. Ce changement a pris
              environ 5000 ans, avec un taux de réchauffement maximal d'environ
              1,5°C par millier d'années, bien que la transition n'ait pas été
              régulière. En revanche, la surface terrestre s'est réchauffée
              d'environ 1,1°C depuis 1850-1900. Cependant, même la meilleure
              reconstruction de la température de surface mondiale au cours de
              la dernière période de déglaciation est trop grossière pour une
              comparaison directe avec une période aussi courte que les 150
              dernières années. Mais au cours des 2000 dernières années, nous
              disposons de relevés à plus haute résolution montrant que le taux
              de réchauffement mondial au cours des 50 dernières années a
              dépassé le taux de toute autre période de 50 ans.
            </p>
            <p>
              3. Le réchauffement récent a inversé une tendance au
              refroidissement mondial à long terme : Après la dernière période
              glaciaire majeure, la température de surface mondiale a atteint
              son pic il y a environ 6 500 ans, puis a lentement diminué. La
              tendance au refroidissement à long terme a été ponctuée de
              décennies et de siècles plus chauds. Ces fluctuations étaient
              mineures par rapport au réchauffement persistant et notable qui a
              débuté au milieu du XIXe siècle lorsque la tendance au
              refroidissement millénaire a été inversée.
            </p>
            <p>
              4. Il fait longtemps qu'il n'a pas fait aussi chaud : En moyenne à
              l'échelle mondiale, les températures de surface de la décennie
              passée étaient probablement plus élevées que lorsque la longue
              tendance au refroidissement a commencé il y a environ 6 500 ans.
              Si c'est le cas, nous devons remonter au moins à la période
              interglaciaire précédente, il y a environ 125 000 ans, pour
              trouver des preuves de températures de surface mondiales
              multicentenaires plus chaudes qu'aujourd'hui.
            </p>
            <p>
              Les fluctuations de température antérieures étaient dues à des
              processus naturels à grande échelle, tandis que le réchauffement
              actuel est largement dû à des causes humaines. Cependant,
              comprendre comment et pourquoi les températures ont changé dans le
              passé est essentiel pour comprendre le réchauffement actuel et
              comment les influences humaines et naturelles interagiront pour
              déterminer ce qui se passera à l'avenir. L'étude des changements
              climatiques passés montre également que, contrairement aux
              changements climatiques précédents, les effets du réchauffement
              récent se produisent en plus des contraintes qui rendent les
              humains et la nature vulnérables aux changements de manière qu'ils
              n'ont jamais connue auparavant.
            </p>
            <div className={"mt-3"}>Sources</div>
            <ul>
              {[
                "https://report.ipcc.ch/ar6/wg1/IPCC_AR6_WGI_FullReport.pdf#page=395",
              ].map((link, index) => (
                <li key={link + index}>
                  <a
                    className={"underline text-slate-500"}
                    target={"_blank"}
                    href={link}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}
