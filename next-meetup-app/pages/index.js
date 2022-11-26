// our-domain.com/
import Layout from "../components/layout/Layout";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "Munich Old Town",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/640px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Frauenplatz 12, Munich, Bavaria, Germany",
    description:
      "Munich (/ˈmjuːnɪk/ MEW-nik; German: München [ˈmʏnçn̩] (listen); Bavarian: Minga [ˈmɪŋ(ː)ɐ] (listen)) is the capital and most populous city of the German state of Bavaria. With a population of 1,558,395 inhabitants as of 31 July 2020,[4] it is the third-largest city in Germany, after Berlin and Hamburg, and thus the largest which does not constitute its own state, as well as the 11th-largest city in the European Union. The city's metropolitan region is home to 6 million people.[5] Straddling the banks of the River Isar (a tributary of the Danube) north of the Bavarian Alps, Munich is the seat of the Bavarian administrative region of Upper Bavaria, while being the most densely populated municipality in Germany (4,500 people per km2). Munich is the second-largest city in the Bavarian dialect area, after the Austrian capital of Vienna.",
  },
  {
    id: "m2",
    title: "Congress of Viena",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/640px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Wagramer Strasse 5, 1220 Vienna, Austria",
    description:
      "Congress of Vienna, assembly in 1814–15 that reorganized Europe after the Napoleonic Wars. It began in September 1814, five months after Napoleon I's first abdication and completed its “Final Act” in June 1815, shortly before the Waterloo campaign and the final defeat of Napoleon.",
  },
];

function HomePage() {
  return (
    <Layout>
      <MeetupList meetups={DUMMY_MEETUPS} />
    </Layout>
  );
}

export default HomePage;
