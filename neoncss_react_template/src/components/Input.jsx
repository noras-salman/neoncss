export function Input(props) {
  if (props.effect) {
    return (
      <div className="input input-effect">
        <input type={props.type} placeholder=" " />
        <label>{props.label}</label>
        <span className="help-text">{props.helpText}</span>
      </div>
    );
  }

  return (
    <div className="input">
      <input type={props.type} placeholder={props.placeholder} />
      <label>{props.label}</label>
      <span className="help-text">{props.helpText}</span>
    </div>
  );
}

export function InputBox(props) {
  return <div className="input-box">{props.children}</div>;
}
