## Javascript

#### Modals

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

#### Autocomplete

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
</div>
```

Javascript

```js
getCountries((countries) => {
  let showing = [];

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
});
```
