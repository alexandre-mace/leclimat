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
import { sections } from "@/data/sections";

const sectionsBeforeFire = sections.filter(
  (s) =>
    [
      "energySources",
      "oldIssue",
      "ghe",
      "ghg",
      "hugeRise",
      "temperatureRise",
      "climateFutur",
      "consequences",
      "hyperthermia",
      "fire",
    ].includes(s.id),
);

const sectionsAfterFire = sections.filter(
  (s) =>
    [
      "drought",
      "biodiversity",
      "food",
      "glacier",
      "seaRise",
      "disease",
      "nonLinear",
      "justice",
      "inertia",
      "limitParis",
      "responsable",
      "individual-solutions",
    ].includes(s.id),
);

export default function Home() {
  return (
    <>
      <div className="relative max-w-5xl mx-auto pt-20 sm:pt-24 lg:pt-64 min-h-screen px-4 sm:px-6">
        <h1 className="text-slate-900 dark:text-slate-100 font-extrabold text-4xl sm:text-5xl lg:text-7xl tracking-tight text-center">
          Le climat en 10 minutes{" "}
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
        <p className="mt-6 text-xl sm:text-2xl lg:text-3xl leading-normal text-slate-600 dark:text-slate-300 text-center max-w-4xl mx-auto">
          S'informer sur la responsabilité humaine, les conséquences du
          changement climatique et les solutions en 10 minutes.
        </p>
        <NextSection content={"C'est parti"} anchor={"#start"} />
      </div>
      <div
        id={"start"}
        className={
          "max-w-6xl min-h-screen text-2xl sm:text-4xl mb-16 lg:mb-32 font-medium leading-normal text-center mx-auto flex px-4 sm:px-6"
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
          En 10 minutes, explorons les <b>bases essentielles</b> pour comprendre
          ce sujet vital.
          <NextSection anchor={"#energySources"} noMargin={true} />
        </div>
      </div>
      {sectionsBeforeFire.map((section) => (
        <Section key={section.id} {...section} />
      ))}
      <Example
        content={"En 2023, 1,5 fois la taille de l'Autriche a brûlé au Canada"}
        imageSrc={"/images/canadafire2023.png"}
        imageWidth={880}
        imageHeight={600}
        imageAlt={"Feu au Canada, 2023"}
      />
      <NextSection anchor={"#drought"} />
      {sectionsAfterFire.map((section) => (
        <Section key={section.id} {...section} />
      ))}
      <div
        id={"faq"}
        className={
          "mx-auto text-center mt-24 lg:mt-40 mb-10 text-3xl sm:text-6xl text-slate-900 dark:text-slate-100 font-extrabold"
        }
      >
        FAQ
      </div>
      <Accordion
        type="single"
        collapsible
        className={"max-w-3xl mx-auto px-4 sm:px-6"}
      >
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
                    className={"underline text-slate-600 dark:text-slate-300"}
                    target={"_blank"}
                    rel={"noopener noreferrer"}
                    href={link}
                  >
                    {(() => { try { return new URL(link).hostname.replace("www.", ""); } catch { return link; } })()}
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
                    className={"underline text-slate-600 dark:text-slate-300"}
                    target={"_blank"}
                    rel={"noopener noreferrer"}
                    href={link}
                  >
                    {(() => { try { return new URL(link).hostname.replace("www.", ""); } catch { return link; } })()}
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
