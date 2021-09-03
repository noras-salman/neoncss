export function Banner(props) {
  return <div className="banner">{props.children}</div>;
}

export function BannerOverlay(props) {
  return <div className="banner-overlay">{props.children}</div>;
}

export function BannerContent(props) {
  return <div className="banner-content">{props.children}</div>;
}

export function BannerTitle(props) {
  return <div className="banner-title">{props.children}</div>;
}
