## Colors

You can override the following colors to create your own theme

```css
:root {
  --window-color: #fff;
  --window-color-secondary: #fefefe;
  --accent-color: #348fe2;
  --accent-color-dark: #001c36;
  --accent-secondary-color: #00000099;
  --text-primary-color: #000000d9;
  --color-error: #da5e5a;
}

[data-theme="dark"] {
  --text-primary-color: #fefefe;
  --window-color: #323232;
  --accent-color: var(--accent-color-dark);
  --window-color-secondary: #292929;
}
```

##### Dark mode

You can create your own implementation of switching from and to dark mode

```js
function setDarkMode() {
  document.documentElement.setAttribute("data-theme", "dark");
}

function setLightMode() {
  document.documentElement.setAttribute("data-theme", "light");
}
```
