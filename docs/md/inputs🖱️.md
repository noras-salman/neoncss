## Inputs

###### Helpers

The wrapper class `.input-box` limits the width to 300px

```html
<div class="input-box">.... ....</div>
```

The wrapper class `.input` makes the input field expand to the whole width of the parent

```html
<div class="input">.... ....</div>
```

##### Input type

```html
<div class="input-box">
  <div class="input">
    <label>Label</label>
    <input type="password" placeholder="Password" />
    <span class="help-text">Help text</span>
  </div>

  <div class="input">
    <label>Label</label>
    <input type="date" placeholder="Date" />
    <span class="help-text">Help text</span>
  </div>

  <div class="input">
    <input
      class="no-border"
      type="text"
      placeholder="Placeholder"
      value="This is a no-border input"
    />
    <span class="help-text">This is still editable</span>
  </div>
</div>
```

<div class="input-box">
    <div class="input">
    <label>Label</label>
    <input type="text" placeholder="Placeholder" />
    <span class="help-text">Help text</span>
    </div>

    <div class="input">
    <label>Label</label>
    <input type="password" placeholder="Password" />
    <span class="help-text">Help text</span>
    </div>

    <div class="input">
    <label>Label</label>
    <input type="date" placeholder="Date" />
    <span class="help-text">Help text</span>
    </div>

      <div class="input">
    <input class="no-border heading-6" type="text" placeholder="Placeholder" value="This is a no-border input" />

<span class="help-text">But it's still editable</span>

</div>

</div>

##### With effect

When using `.input-effect` the place holder should be set to be empty

```html
<div class="input input-effect">
  <input type="text" placeholder=" " />
  <label>Label</label>
  <span class="help-text">
    Important that label comes after the input and input has an empty
    placeholder
  </span>
</div>
```

<div class="input-box">
   <div class="input input-effect">
  <input type="text" placeholder=" " />
  <label>Label</label>
  <span class="help-text">
      Important that label comes after the input and input has an empty
    placeholder
  </span>
</div>
</div>

##### Validation

You can set a pattern or a type to activate validation

```html
<div class="input-box">
  <div class="input">
    <label>Email</label>
    <input type="email" placeholder="Invalid" autocomplete="off" />
    <span class="help-text">should be email</span>
  </div>

  <div class="input">
    <label>Twitter user</label>
    <input
      type="text"
      placeholder="Invalid"
      pattern="@[A-Za-z0-9]{5,50}"
      autocomplete="off"
    />
    <span class="help-text">
      Twiter User (@username) - @[A-Za-z0-9_{5,50}$
    </span>
  </div>
</div>
```

<div class="input-box">
  <div class="input">
    <label>Email</label>
    <input type="email" placeholder="Invalid" autocomplete="off" />
    <span class="help-text">should be email</span>
  </div>

  <div class="input">
    <label>Twitter user</label>
    <input
      type="text"
      placeholder="Invalid"
      pattern="@[A-Za-z0-9]{5,50}"
      autocomplete="off"
    />
    <span class="help-text">
      Twiter User (@username) - @[A-Za-z0-9_{5,50}$
    </span>
  </div>
</div>

##### Textareas

```html
<div class="input-box">
  <div class="input">
    <textarea placeholder="Placeholder"></textarea>
  </div>
</div>
```

<div class="input-box">
    <div class="input">
        <textarea placeholder="Placeholder"></textarea>
    </div>
</div>

##### Selects

```html
<div class="input-box">
  <div class="input">
    <select name="" id="">
      <option value="" disabled selected>Select your option</option>
      <option value="">Test</option>
    </select>
  </div>
</div>
```

<div class="input-box">
  <div class="input">
    <select name="" id="">
      <option value="" disabled selected>Select your option</option>
      <option value="">Test</option>
    </select>
  </div>
</div>

##### Checkboxes

Checkboxes have three types depending on the class you add:
You can dicide not to add a class then it will appear normally.
You can add the class `.chip`.
You can add the class `.chip-big` to have a look of a normal button but the behaviour of a checkbox.

```html
<div class="input-box">
  <!---------NORMAL------------->
  <div class="input">
    <div class="input-group">
      <input type="checkbox" name="checkgroup1" />
      <label>label</label>
      <input type="checkbox" name="checkgroup1" />
      <label>label</label>
    </div>
  </div>
  <!---------NORMAL END------------->
  <!---------chip------------->
  <div class="input">
    <div class="input-group">
      <div class="chip">
        <input id="checkchoice1" type="checkbox" name="checkgroup2" />
        <label for="checkchoice1">label</label>
      </div>

      <div class="chip">
        <input id="checkchoice2" type="checkbox" name="checkgroup2" />
        <label for="checkchoice2">label</label>
      </div>
    </div>
  </div>
  <!---------chip END------------->
  <!---------chip-big------------->
  <div class="input">
    <div class="input-group">
      <div class="chip-big">
        <input id="checkchoice3" type="checkbox" name="checkgroup3" />
        <label for="checkchoice3">label</label>
      </div>
      <div class="chip-big">
        <input id="checkchoice4" type="checkbox" name="checkgroup3" />
        <label for="checkchoice4">label</label>
      </div>
    </div>
  </div>
  <!---------chip-big END------------->
</div>
```

<div class="input-box">
  <div class="divider-inline">Normal</div>
  <div class="input">
    <div class="input-group">
      <input type="checkbox" name="checkgroup1" />
      <label>label</label>

      <input type="checkbox" name="checkgroup1" />
      <label>label</label>
    </div>

  </div>
  <div class="divider-inline">Chip</div>
  <div class="input">
    <div class="input-group">
      <div class="chip">
        <input id="checkchoice1" type="checkbox" name="checkgroup2" />
        <label for="checkchoice1">label</label>
      </div>

      <div class="chip">
        <input id="checkchoice2" type="checkbox" name="checkgroup2" />
        <label for="checkchoice2">label</label>
      </div>
    </div>

  </div>
  <div class="divider-inline">Chip-big</div>
  <div class="input">
    <div class="input-group">
      <div class="chip-big">
        <input id="checkchoice3" type="checkbox" name="checkgroup3" />
        <label for="checkchoice3">label</label>
      </div>
      <div class="chip-big">
        <input id="checkchoice4" type="checkbox" name="checkgroup3" />
        <label for="checkchoice4">label</label>
      </div>
    </div>
  </div>
<div class="divider-inline">Chip-big+img</div>
    <div class="input">
    <div class="input-group">
      <div class="chip-big">
        <input id="checkchoice5" type="checkbox" name="checkgroup4" />
        <label for="checkchoice5">
          <img
            src="https://www.pngrepo.com/png/303658/512/nodejs-1-logo.png"
            alt=""
          />
          v10</label
        >
      </div>

      <div class="chip-big">
        <input id="checkchoice6" type="checkbox" name="checkgroup4" />

        <label for="checkchoice6">
          <img
            src="https://www.pngrepo.com/png/303658/512/nodejs-1-logo.png"
            alt=""
          />
          v14</label
        >
      </div>
    </div>

  </div>
</div>

##### Radio buttons

Have the same styles as chckboxes

```html
<div class="input-box">
  <!---------NORMAL------------->
  <div class="input">
    <div class="input-group">
      <input type="radio" name="group1" />
      <label>label</label>

      <input type="radio" name="group1" />
      <label>label</label>
    </div>
  </div>
  <!---------NORMAL END------------->
  <!---------CHIP------------->
  <div class="input">
    <div class="input-group">
      <div class="chip">
        <input id="choice1" type="radio" name="group2" />
        <label for="choice1">label</label>
      </div>

      <div class="chip">
        <input id="choice2" type="radio" name="group2" />
        <label for="choice2">label</label>
      </div>
    </div>
  </div>
  <!---------CHIP END------------->
  <!---------CHIP BIG------------->

  <div class="input">
    <div class="input-group">
      <div class="chip-big">
        <input id="choice3" type="radio" name="group3" />
        <label for="choice3"> label</label>
      </div>

      <div class="chip-big">
        <input id="choice4" type="radio" name="group3" />
        <label for="choice4"> label</label>
      </div>
    </div>
  </div>
  <!---------CHIP BIG END------------->
  <!---------CHIP BIG + IMG------------->
  <div class="input">
    <div class="input-group">
      <div class="chip-big">
        <input id="choice5" type="radio" name="group4" />
        <label for="choice5">
          <img
            src="https://www.pngrepo.com/png/303658/512/nodejs-1-logo.png"
            alt=""
          />
          v10
        </label>
      </div>

      <div class="chip-big">
        <input id="choice6" type="radio" name="group4" />

        <label for="choice6">
          <img
            src="https://www.pngrepo.com/png/303658/512/nodejs-1-logo.png"
            alt=""
          />
          v14
        </label>
      </div>
    </div>
  </div>
  <!---------CHIP BIG + IMG END------------->
</div>
```

<div class="input-box">
  <div class="input">
    <div class="input-group">
      <input type="radio" name="group1" />
      <label>label</label>

      <input type="radio" name="group1" />
      <label>label</label>
    </div>

  </div>

  <div class="divider-inline">Chip</div>
  <div class="input">
    <div class="input-group">
      <div class="chip">
        <input id="choice1" type="radio" name="group2" />
        <label for="choice1">label</label>
      </div>

      <div class="chip">
        <input id="choice2" type="radio" name="group2" />
        <label for="choice2">label</label>
      </div>
    </div>

  </div>

  <div class="divider-inline">Chip-Big</div>

  <div class="input">
    <div class="input-group">
      <div class="chip-big">
        <input id="choice3" type="radio" name="group3" />
        <label for="choice3"> label</label>
      </div>

      <div class="chip-big">
        <input id="choice4" type="radio" name="group3" />
        <label for="choice4"> label</label>
      </div>
    </div>

  </div>
  <div class="divider-inline">Chip-Big+Img</div>
  <div class="input">
    <div class="input-group">
      <div class="chip-big">
        <input id="choice5" type="radio" name="group4" />
        <label for="choice5">
          <img
            src="https://www.pngrepo.com/png/303658/512/nodejs-1-logo.png"
            alt=""
          />
          v10</label
        >
      </div>

      <div class="chip-big">
        <input id="choice6" type="radio" name="group4" />

        <label for="choice6">
          <img
            src="https://www.pngrepo.com/png/303658/512/nodejs-1-logo.png"
            alt=""
          />
          v14</label
        >
      </div>
    </div>

  </div>
</div>
