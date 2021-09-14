export function Button(props) {
  return <button className={`btn ${props.className}`}>{props.children}</button>;
}
