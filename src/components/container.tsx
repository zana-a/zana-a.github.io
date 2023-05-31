export default function Container(props: { children: JSX.Element }) {
  return <div className="container mx-auto px-4">{props.children}</div>;
}
