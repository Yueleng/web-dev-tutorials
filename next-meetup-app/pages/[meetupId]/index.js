import { Fragment } from "react";
import Head from "next/head";
import MeetupDetails from "../../components/meetups/MeetupDetails";
import { DUMMY_MEETUPS } from "../index";
import { MongoClient, ObjectId } from "mongodb";

function MeetupDetailPage(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
      </Head>
      <MeetupDetails {...props} />
    </Fragment>
  );
}

export async function getStaticPaths() {
  // TODO: refactor needed!
  const username = "someuser";
  const password = "Zc7HzZapKVGpFAnv";
  const client = await MongoClient.connect(
    `mongodb+srv://${username}:${password}@cluster0.hdxwg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
  );

  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  // find all documents but only with _id attribute
  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    // {fallback: true} is very useful,
    // it not only pre-generates those pages during build time
    // but, it also tries to dynamic pre-rendering those pages with meetupId not included.
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
      ...meetups.map((meetup) => ({
        params: {
          meetupId: meetup._id.toString(),
        },
      })),
    ],
  };
}

export async function getStaticProps(context) {
  // fetch data for a single meetup
  const meetupId = context.params.meetupId;

  if (meetupId === "m1" || meetupId === "m2") {
    const matchedMeetup = DUMMY_MEETUPS.filter(
      (meetupItem) => meetupItem.id === meetupId
    );
    const meetupData = matchedMeetup.length === 1 ? matchedMeetup[0] : {};
    return {
      props: {
        ...meetupData,
      },
    };
  }

  // TODO: refactor needed!
  const username = "someuser";
  const password = "Zc7HzZapKVGpFAnv";
  const client = await MongoClient.connect(
    `mongodb+srv://${username}:${password}@cluster0.hdxwg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
  );

  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  // find all documents but only with _id attribute
  const meetup = await meetupsCollection.findOne({ _id: ObjectId(meetupId) });
  meetup._id = meetup._id.toString();
  client.close();

  return {
    props: {
      ...meetup,
      id: meetup._id,
    },
  };
}

export default MeetupDetailPage;
