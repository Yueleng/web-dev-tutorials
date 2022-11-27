// our-domain.com/
import Head from "next/head";
import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";
import { Fragment } from "react";

export const DUMMY_MEETUPS = [
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
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Montage_of_Vienna.jpg/772px-Montage_of_Vienna.jpg",
    address: "Wagramer Strasse 5, 1220 Vienna, Austria",
    description:
      "Congress of Vienna, assembly in 1814–15 that reorganized Europe after the Napoleonic Wars. It began in September 1814, five months after Napoleon I's first abdication and completed its “Final Act” in June 1815, shortly before the Waterloo campaign and the final defeat of Napoleon.",
  },
];

function HomePage({ meetups }) {
  return (
    <Fragment>
      <Head>
        <title>Next Meetups</title>
        <meta
          name="description"
          content="Browse a huge list of highly active Next meetup"
        />
      </Head>
      <MeetupList meetups={meetups} />
    </Fragment>
  );
}

// Only works in /pages
export async function getStaticProps() {
  // fetch data from an API

  // TODO: refactor needed!
  const username = "someuser";
  const password = "Zc7HzZapKVGpFAnv";
  const client = await MongoClient.connect(
    `mongodb+srv://${username}:${password}@cluster0.hdxwg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
  );

  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find().toArray();
  console.log(meetups);
  return {
    props: {
      meetups: [
        ...DUMMY_MEETUPS,
        ...meetups.map((meetup) => ({
          title: meetup.title,
          address: meetup.address,
          image: meetup.image,
          id: meetup._id.toString(),
        })),
      ],
    },
    // re-generate every 10 seconds after deployment.
    revalidate: 10,
  };
}

// export async function getServerSideProps({ req, res }) {
//   // fetch data from an API
//   //   return {
//   //     props: {
//   //       meetups: DUMMY_MEETUPS,
//   //     },
//   //   };
// }

export default HomePage;
