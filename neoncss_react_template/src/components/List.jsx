export function List(props) {
  return <ul className="list">{props.children}</ul>;
}

export function ListItem(props) {
  return (
    <li className={`${props.active ? "active" : ""} ${props.className}`}>
      {props.children}
    </li>
  );
}

export function SubList(props) {
  return <ul className="list sublist">{props.children}</ul>;
}
