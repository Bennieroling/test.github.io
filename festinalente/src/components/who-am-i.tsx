
const WhoAmI = () => {
  return (
    <section>
      <h2 className="color-effect p-8 text-center text-4xl font-bold">Wie ben ik?</h2>
      <div className={"flex w-full flex-col items-center p-4 lg:flex-row"}>
        <img className="max-h-[600px] w-[500px]" src="/c-dk.jpeg" alt="" />
        <div className={"flex flex-col md:justify-center gap-4 p-4 md:max-h-[600px] md:overflow-scroll"}>
          <p className="text-lg">
            Mijn naam is <span className="color-effect text-xl font-bold">Caroline van Dijk</span> en woonachtig in het
            mooie (bijna) altijd zonnige Den Helder.
          </p>
          <p className="text-lg">
            Ik heb een brede werkervaring in diverse werkvelden op het gebied van organisatie, HRM, juridische zaken,
            facilitair en IT-inrichting. Ik ben een analyticus, hou van aanpakken, probleemoplossend, creatief, goede
            communicatieve vaardigheden, structuur aanbrengen is een tweede natuur en ik ben politiek en bestuurlijk
            sensitief.
          </p>
          <p className="text-lg">
            Ik sta bekend als een mensenmens, betrouwbaar, loyaal en eerlijk. Met een optimistisch karakter en groot
            inlevingsvermogen kan ik mij goed in de ander verplaatsen. Van pionieren krijg ik energie en ik denk in
            mogelijkheden en kansen. Mezelf blijven ontwikkelen is voor mij een vast onderdeel van mijn leven.
          </p>
          <p className="text-lg">
            In mijn vrije tijd maak ik graag zelf kleding, probeer ik de Italiaanse taal machtig te blijven en ben ik
            graag in de natuur, wandelend door het bos of aan de waterkant met een hengel.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoAmI;
