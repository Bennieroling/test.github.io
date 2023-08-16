import { Card } from "./slots";

const Services = () => {
  return (
    <section>
      <h2 className="color-effect p-8 text-center text-4xl font-bold">Services</h2>
      {/* <SingleService
        side="left"
        title="Counseling"
        description="Organizational advice is tailor-made, aimed at the specific question of the company or organization, with a personal approach."
      />
      <SingleService
        side="right"
        title="People & Talent"
        description="As an HR advisor, both the person behind the employee and the interests of the company are important. The entire spectrum of personnel care, policy and legal aspect."
      /> */}
      <div className="flex flex-wrap items-center justify-center gap-4 p-4">
        <Card title="Thema advies">
          <p className="text-lg">
            Organisatieadvies is maatwerk, gericht op de specifieke vraag van bedrijf of organisatie, met een
            persoonlijke insteek.
          </p>
          <p className="text-lg">
            Ik werk graag aan het structureren van een organisatie, voor beginnende bedrijven/start-ups of als men
            flinke groei doormaakt. Help graag bedrijven met organisatievraagstukken op het gebied van
          </p>
          <ul className="px-4">
            <li>Advies management en bedrijfsvoering</li>
            <li>Organisatiestructuur</li>
            <li>Governance</li>
            <li>Bedenken en implementeren nieuwe werkwijzen</li>
            <li>Organisatie advies start-ups</li>
            <li>Projectmatig werken</li>
            <li>Onderzoeksvragen formuleren.</li>
            <li>Software uitzoeken, plan van aanpak schrijven en implementeren.</li>
          </ul>
        </Card>
        <Card title="Thema HR">
          <p className="text-lg">
            Als HR-adviseur zijn zowel de mens achter de medewerker belangrijk, als de belangen van het bedrijf. Het
            gehele spectrum van personeelszorg, beleid en juridische aspecten kent geen geheimen voor mij.
          </p>
          <p className="text-lg">
            edere organisatie bestaat omdat er mensen aan het werk zijn. Deze mensen vormen mijn uitgangspunt, waarbij
            de belangen van het bedrijf niet uit het oog worden verloren.{" "}
          </p>
          <p className="text-lg">
            HR-middelen zoals bijvoorbeeld de FG-cyclus, functiebeschrijvingen, arbeidsrechtelijke zaken,
            personeelsreglement of -handboek. Arbo, verzuimbegeleiding, vertrouwenspersoon, RI&E en plan van aanpak
            RI&E, inrichting werkplek, etc.
          </p>
        </Card>
        <Card title="Thema toezicht">
          <p className="text-lg">
            Toezichthouden is voor mij teamwork met bestuur en collega toezichthouders. Vanuit mijn specifieke
            expertise, luister en stel ik vragen, deel ik ervaringen en vervul een ambassadeursrol. Ik zie mijn rol
            vooral als helpend naar het bestuur.{" "}
          </p>
        </Card>
      </div>
    </section>
  );
};

export default Services;
