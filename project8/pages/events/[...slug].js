import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy-data";

import ResultsTitle from "../../components/results-title/results-title";
import EventList from "../../components/events/event-list";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/events/error-alert";

function FilteredEventsPage() {
  const router = useRouter();

  const filterData = router.query.slug;

  if (!filterData) {
    return (
      <>
        <ErrorAlert>
          <p className="center">Loading...</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show all events</Button>
        </div>
      </>
    );
  }

  const [year, month] = filterData;

  if (isNaN(+year) || isNaN(+month)) {
    return <p>INvalid filter. Plase adjust your values!</p>;
  }

  const events = getFilteredEvents({ year: +year, month: +month });

  if (!events || events.length === 0) {
    return (
      <>
        <ErrorAlert>
          <p>No events found</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show all events</Button>
        </div>
      </>
    );
  }

  const date = new Date(+year, +month - 1);

  return (
    <div>
      <ResultsTitle date={date} />
      <EventList items={events} />
    </div>
  );
}

export default FilteredEventsPage;
