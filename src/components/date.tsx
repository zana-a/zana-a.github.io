import { format, parseISO } from "date-fns";

export default function Date(props: {
  dateString: string;
  className?: string;
}) {
  const date = parseISO(props.dateString);
  return (
    <time dateTime={props.dateString} className={props.className}>
      {format(date, "EEEE, do LLLL yyyy")}
    </time>
  );
}
