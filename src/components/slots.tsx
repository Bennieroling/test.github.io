import { PropsWithChildren } from "react";

export const Card = ({ title, children }: PropsWithChildren<{ title: string }>) => {
  return (
    <div className="flex h-full min-h-[300px] max-w-lg flex-col gap-4 rounded-xl border shadow-md p-4">
      <h4 className="color-effect text-2xl font-semibold">{title}</h4>
      {children}
    </div>
  );
};

const Slots = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-4 p-4 md:flex-row">
      <Card title="Werkervaring">
        <p className="text-lg">
          Sinds juli 2021 ben ik lid van de Raad van Toezicht van een stichting. Sinds september 2008 werkzaam bij een
          semi publieke organisatie als bestuurssecretaris en HR adviseur, verantwoordelijk voor juridische, facilitaire
          en IT zaken.
        </p>
        <p className="text-lg">
          Eerder werkzaam geweest bij een woningcorporatie, klinisch chemisch laboratorium en bij een grote bank in
          diverse functies.
        </p>
      </Card>
      <Card title="Ambitie">
        <p className="text-lg">
          Mijn ambitie is om veel partijen, bedrijven, start-ups en mensen verder te helpen met mijn jarenlange ervaring
          en hen op weg te helpen en makkelijker te maken.
        </p>
      </Card>
    </section>
  );
};

export default Slots;
