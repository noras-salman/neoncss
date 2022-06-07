## Grid

#### Conainer

##### Normal (contained)

```html
<div class="container"></div>
```

<div class="container card">
   
</div>
##### Fixed
```html
<div class="container-fixed"></div>
```

<div class="container-fixed card"></div>

#### Dynamic columns

column will switch to 100% when the screen is smaller than 768px

```html
<div class="row">
  <div class="col card">Column</div>
  <div class="col card">Column</div>
  <div class="col card">Column</div>
  <div class="col card">Column</div>
</div>
```

<div class="row">
  <div class="col card">Column</div>
  <div class="col card">Column</div>
  <div class="col card">Column</div>
  <div class="col card">Column</div>
</div>

#### Screen size static 12 column

`col-{x}` for all screen sizes with width 768px and above
this kind of column will switch to 100% when the screen is smaller than 768px

`col-m-{x}` screens with width between 768px and 480px

`col-s-{x}` screens with width 480px and lower

```html
<div class="row">
  <div class="col-6 col-m-8 card">Column</div>
  <div class="col-2 col-m-4 card">Column</div>
  <div class="col-2 col-s-6 card">Column</div>
  <div class="col-2 col-s-6 card">Column</div>
</div>
```

<div class="row">
  <div class="col-6 col-m-8 card">Column</div>
  <div class="col-2 col-m-4 card">Column</div>
  <div class="col-2 col-s-6 card">Column</div>
  <div class="col-2 col-s-6 card">Column</div>
</div>

#### Screen support

Screen sizes

```css
@media (max-width: 1024px) {
  /* On large screens*/
}

@media (max-width: 768px) {
  /* On medium screens*/
}

@media (max-width: 480px) {
  /* On small screens*/
}
```
