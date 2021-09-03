export function Card(props) {
  return (
    <div className={`${props.isColumn ? "col" : ""} card`}>
      {props.children}
    </div>
  );
}

export function CardBody(props) {
  return <div className="card-body">{props.children}</div>;
}

/**
 * Takes (full as a prop)
 * @param {*} props
 * @returns
 */
export function CardCover(props) {
  return (
    <div className={`card-cover ${props.full ? "card-cover-full" : ""}`}>
      {props.children}
    </div>
  );
}

export function CardCoverTitle(props) {
  return <div className="card-cover-title">{props.children}</div>;
}
