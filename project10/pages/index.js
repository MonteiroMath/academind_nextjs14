import Head from "next/head";
import { getFeaturedEvents } from "../helpers/api-utils";
import EventList from "../components/events/event-list";

function HomePage({ featuredEvents }) {
  return (
    <div>
      <Head>
        <title>NextJS events</title>
        <meta name="description" content="Find a lot of great events that allow you to evolve..."/>
      </Head>
      <EventList items={featuredEvents} />
    </div>
  );
}

export async function getStaticProps(context) {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      featuredEvents,
    },
    revalidate: 60 * 30,
  };
}

export default HomePage;
