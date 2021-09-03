export function NavBar(props) {
  const defaultProps = {
    menuItems: [
      {
        label: "Home",
        url: "#",
      },
    ],
    color: "black-bg",
    fixed: true,
  };
  return (
    <nav
      className={`navbar ${props?.color || defaultProps.color} ${
        props?.fixed ? "fixed" : ""
      }`}
    >
      {props.children}
    </nav>
  );
}

export function NavBrand(props) {
  const defaultProps = {
    url: "/",
  };
  return (
    <div className="brand">
      <a href={props?.url || defaultProps.url}>{props.children}</a>
    </div>
  );
}

export function NavMenu(props) {
  return (
    <div className="nav-menu">
      <ul>{props.children}</ul>
    </div>
  );
}

export function NavMenuItem(props) {
  const defaultProps = {
    url: "#",
  };
  return (
    <li>
      <a href={props?.url || defaultProps.url}>{props.children}</a>
    </li>
  );
}
