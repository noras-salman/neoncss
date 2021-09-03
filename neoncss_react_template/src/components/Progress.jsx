export function Progress(props) {
  if (props.type === "spinner") {
    return (
      <div className="progress">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="progress">
      <div className="indeterminate"></div>
    </div>
  );
}

export function ContextSkeleton(props) {
  return <div className="row">{props.children}</div>;
}
export function ContextBackground(props) {
  return <div className={`context context-bg col-${props.size || 12}`}></div>;
}
export function ContextTitle(props) {
  return (
    <div className={`context context-title col-${props.size || 12}`}></div>
  );
}
export function ContextLine(props) {
  return <div className={`context context-line col-${props.size || 12}`}></div>;
}
