import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy-data";

import EventList from "../../components/events/event-list";

function FilteredEventsPage() {
  const router = useRouter();

  const filterData = router.query.slug;

  if (!filterData) {
    return <p className="center">Loading...</p>;
  }

  const [year, month] = filterData;

  if (isNaN(+year) || isNaN(+month)) {
    return <p>INvalid filter. Plase adjust your values!</p>;
  }

  const events = getFilteredEvents({ year: +year, month: +month });

  if (!events || events.length === 0) {
    return <p>No events found</p>;
  }

  return (
    <div>
      <EventList items={events} />
    </div>
  );
}

export default FilteredEventsPage;
