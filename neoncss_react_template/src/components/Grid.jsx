export function Row(props) {
  return <div className="row">{props.children}</div>;
}

export function Column(props) {
  return <div className={`col ${props.className}`}>{props.children}</div>;
}
