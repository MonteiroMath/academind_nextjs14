import { getFeaturedEvents } from "../helpers/api-utils";
import EventList from "../components/events/event-list";

function HomePage({ featuredEvents }) {
  //const featuredEvents = getFeaturedEvents();

  return (
    <div>
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
