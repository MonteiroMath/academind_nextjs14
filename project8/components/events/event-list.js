import EventItem from "./event-item";
import classes from "./event-list.module.css";

function EventList({ items }) {
  return (
    <ul className={classes.list}>
      {items.map((event) => (
        <EventItem {...event} />
      ))}
    </ul>
  );
}

export default EventList;
