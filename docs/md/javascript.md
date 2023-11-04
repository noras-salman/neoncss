## Javascript

### Dropdown

<button class="btn btn-accent" action="dropdown-menu-toggle"    data="dropdown-menu-1">dropdown trigger</button>

<ul id="dropdown-menu-1" class="dropdown-menu">
  <li>Action 1</li>
  <li>Action 2</li>
</ul>

<br>

```html
<button
  class="btn btn-accent"
  action="dropdown-menu-toggle"
  data="dropdown-menu-1"
>
  dropdown trigger
</button>

<ul id="dropdown-menu-1" class="dropdown-menu">
  <li>Action 1</li>
  <li>Action 2</li>
</ul>
```

<br>
Please call to init:
```js
DropDown.init();
```

#### Avatar

<img  class="img img-mid img-circle img-cover" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAAXNSR0IArs4c6QAAEB9JREFUeF7tnQmoVVUXx5dpplbOoVk5ITlGjmXlhOaEoDmLWjlkmhkFlaJFJjmBImpOzwEVsxwiFSMVS0UtLTS1osHIUCuTHCqzNCs//ufzfd/j9e69a+9zzrv33fXfIImtfc5e/3V+95w9rV1MRK4KCxWgAgUqUIyA8MmgAokVICB8OqhAEgUICB8PKkBA+AxQAT8F+Abx0421jChAQIwEmm76KUBA/HRjLSMKEBAjgaabfgoQED/dWMuIAgTESKDppp8CBMRPN9YyogABMRJouumnAAHx0421jChAQIwEmm76KUBA/HRjLSMKEBAjgaabfgoQED/dWMuIAgTESKDppp8CBMRPN9YyogABMRJouumnAAHx0421jChAQIwEmm76KUBA/HRjLSMKEBAjgaabfgoQED/dWMuIAgTESKDppp8CBMRPN9YyogABMRJouumnAAHx0421jChAQIwEmm76KUBA/HRjLSMKEBAjgaabfgoQED/dWMuIAgTESKDppp8CBMRPN9YyogABMRJouumnAAHx0421jChAQIwEmm76KUBA/HRjLSMKEBAjgaabfgoQED/dWMuIAgTESKDppp8CBMRPN9YyogABMRJouumnAAHx0421jChAQIwEmm76KUBA/HRjLSMKEBAjgaabfgoQED/dWMuIAgTESKDppp8CBMRPN9YyogABMRJouumnAAHx0421jChAQIwEmm76KUBA/HRjLSMKEBAjgaabfgoQED/dWMuIAgTESKDppp8CBMRPN9YyogABMRJouumnAAHx0421jChAQIwEmm76KUBA/HQrMrXKlSsnQ4YMkbvuukuqVKkit9xyi1SqVEnKli0rN954oxQvXlz+/PNP+f3334M/Fy5ckLNnz8oHH3wg77zzjuzbt6/I+BpHQ7MGkO+++y4IvrbgoXnjjTe05mq7xo0by4cffqi2b9asmXz22Wdqe43hPffcI6NGjZIuXbrIrbfeqqmS0Obq1avy008/ycaNG+XFF18M/m6pZA0gly9flpIlS6pjd/HiRalQoYJcuXJFXUdj2LlzZ9m6davGNLDp2LGjvPvuu2r7ZIYjRoyQWbNmyU033RTJ9Qq6yKeffiovv/yyvPXWW7HdI5MubBYQ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" />

```html
<img id="avatar" class="img img-mid img-circle img-cover" />
```

and js

```js
avatar.src = generateAvatar(
  (text = "NS"),
  (foregroundColor = "white"),
  (backgroundColor = "black")
);
```

#### Dismissible: 1- Modals

<button class="btn btn-accent btn-round" action="modal" data="demo-modal"/>
Open Modal
</button>
<div id="demo-modal" class="modal">
   <div class="modal-box modal-box-fixed">
      <span class="modal-title">Modal title</span>
      <div class="modal-content">
         <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum
         </p>
      </div>
      <div class="modal-footer">
         <button class="btn btn-accent btn-small">ACTION</button>
         <button class="btn btn-flat btn-small" action="dismiss-modal">
         CLOSE
         </button>
      </div>
   </div>
</div>
<br><br>
Dont forget to init:
```js
Dismissible.init(["modal", "settings-bar"]);
```
<br><br>
```html
<button class="btn btn-accent btn-round" action="modal" data="demo">
  Open Modal
</button>
<div id="demo" class="modal">
  <div class="modal-box modal-box-fixed">
    <span class="modal-title">Modal title</span>
    <div class="modal-content">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum
      </p>
    </div>
    <div class="modal-footer">
      <button class="btn btn-accent btn-small">ACTION</button>
      <button class="btn btn-flat btn-small" action="dismiss-modal">
        CLOSE
      </button>
    </div>
  </div>
</div>
```

#### Dismissible: 2- Settings bar

<button
class="btn btn-accent btn-round"
action="settings-bar"
data="settings-bar-demo"> Open Settings bar
</button>

<br><br>
Dont forget to init:

```js
Dismissible.init(["modal", "settings-bar"]);
```

<br><br>

<div id="settings-bar-demo" class="settings-bar"  >
  <div class="settings-bar-box">
    <span class="settings-bar-title">Modal title</span>
    <div class="settings-bar-content">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum
      </p>
    </div>

    <div class="settings-bar-footer">
      <button class="btn btn-accent btn-small">ACTION</button>
      <button class="btn btn-flat btn-small" action="dismiss-settings-bar">
        CLOSE
      </button>
    </div>

  </div>
</div>
```html
<button
  class="btn btn-accent btn-round"
  action="settings-bar"
  data="settings-bar-demo"
>
  Open Settings bar
</button>
<div id="settings-bar-demo" class="settings-bar">
  <div class="settings-bar-box">
    <span class="settings-bar-title">Modal title</span>
    <div class="settings-bar-content">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum
      </p>
    </div>

    <div class="settings-bar-footer">
      <button class="btn btn-accent btn-small">ACTION</button>
      <button class="btn btn-flat btn-small" action="dismiss-settings-bar">
        CLOSE
      </button>
    </div>

  </div>
</div>
```

#### Autocomplete

<div class="input-box">
  <h5>Autocomplete</h5>
  <div class="divider-inline">Simple</div>
  <div class="input">
    <label>Label</label>
    <input
      id="autocomplete1"
      class="autocomplete"
      type="text"
      placeholder="Country"
    />
  </div>
  <div class="divider-inline">Custom</div>
  <div class="input">
    <label>Label</label>
    <input
      id="autocomplete2"
      class="autocomplete"
      type="text"
      placeholder="Country"
    />
  </div>
</div>

Html

```html
<div class="input-box">
  <h5>Autocomplete</h5>
  <div class="divider-inline">Simple</div>
  <div class="input">
    <label>Label</label>
    <input
      id="autocomplete1"
      class="autocomplete"
      type="text"
      placeholder="Country"
    />
  </div>
  <div class="divider-inline">Custom</div>
  <div class="input">
    <label>Label</label>
    <input
      id="autocomplete2"
      class="autocomplete"
      type="text"
      placeholder="Country"
    />
  </div>
</div>
```

Javascript

```js
getCountries((countries) => {
  let showing = [];
  /* Simple*/
  Autocomplete.init(
    "autocomplete1",
    function (value, instance) {
      if (value) {
        showing = countries.filter((c) =>
          c.name.toLowerCase().startsWith(value.toLowerCase())
        );
        instance.setItems(showing.map((c) => c.name));
      }
    },
    function (value, index, instance) {}
  );

  /* CUSTOM*/
  Autocomplete.init(
    "autocomplete2",
    function (value, instance) {
      if (value) {
        showing = countries.filter((c) =>
          c.name.toLowerCase().startsWith(value.toLowerCase())
        );
        instance.setItems(
          showing.map(
            (c) => `
   
          ${c.name}
          <img class="postfix" style="width:36px" src="docs/templates/img/flags/${c.code.toLowerCase()}.png" />
          `
          )
        );
      }
    },
    function (value, index, instance) {
      instance.getTiggerElement().value = showing[index].name;
    }
  );
});
```
