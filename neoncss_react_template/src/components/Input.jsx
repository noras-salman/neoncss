export function InputWrapper(props) {
  return <div className="input">{props.children}</div>;
}

export function Input(props) {
  if (props.effect) {
    return (
      <div className="input input-effect">
        <input
          id={props.id}
          type={props.type}
          placeholder=" "
          defaultValue={props.value || ""}
        />
        <label>{props.label}</label>
        <span className={`help-text`}>{props.helpText}</span>
      </div>
    );
  }

  return (
    <div className="input">
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        defaultValue={props.value || null}
      />
      <label>{props.label}</label>
      <span className="help-text">{props.helpText}</span>
    </div>
  );
}

export function InputBox(props) {
  return <div className="input-box">{props.children}</div>;
}

export function TextArea(props) {
  return (
    <div className="input">
      <textarea id={props.id} placeholder={props.placeholder}>
        {props.value || ""}
      </textarea>
    </div>
  );
}

export function Select(props) {
  return (
    <div className="input">
      <select name={props.name} id={props.id}>
        {props.children}
      </select>
    </div>
  );
}

export function SelectOption(props) {
  return (
    <option
      value={props.value}
      disabled={props.disabled || false}
      selected={props.selected || false}
    >
      {props.children}
    </option>
  );
}

export function InputGroup(props) {
  return <div className="input-group">{props.children}</div>;
}

export function Chip(props) {
  if (props.behaviour && !["checkbox", "radio"].includes(props.behaviour)) {
    throw 'Chip behaviour should be in ["checkbox", "radio"]';
  }
  return (
    <div className="chip">
      <input
        id={props.id}
        type={props.behaviour || "checkbox"}
        name={props.group}
      />
      <label for={props.id}>{props.label}</label>
    </div>
  );
}

export function RadioButton(props) {
  return (
    <span>
      <input id={props.id} type="radio" name={props.group} />
      <label>{props.label}</label>
    </span>
  );
}

export function CheckBox(props) {
  return (
    <span>
      <input id={props.id} type="checkbox" name={props.group} />
      <label>{props.label}</label>
    </span>
  );
}
