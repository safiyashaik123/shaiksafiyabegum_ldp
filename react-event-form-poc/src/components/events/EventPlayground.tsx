import MouseEvents from "./MouseEvents";
import KeyboardFocusEvents from "./KeyboardFocusEvents";
import FormEvents from "./FormEvents";
import EventPropagation from "./EventPropagation";

const EventPlayground = () => {
  return (
    <>
      <h1>React Event Playground</h1>

      <MouseEvents />

      <hr />

      <KeyboardFocusEvents />

      <hr />

      <FormEvents />

      <hr />

      <EventPropagation />
    </>
  );
};

export default EventPlayground;
