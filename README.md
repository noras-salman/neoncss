# MicroCss

[Check the demo here](https://noras-salman.github.io/microcss/)

## Usage
CSS:
```
https://cdn.jsdelivr.net/gh/noras-salman/microcss/dist/microcss.min.css

```
JS:
```
https://cdn.jsdelivr.net/gh/noras-salman/microcss/dist/microcss.js
```


## Template
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/noras-salman/microcss/dist/microcss.js">
</head>

<body>


<script src="https://cdn.jsdelivr.net/gh/noras-salman/microcss/dist/microcss.js"></script>
</body>
</html>
```

## Components

### Theme
```css

```

### Screen support
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

### Typography
```
Todo
```

### Grid

#### Dynamic columns

column will switch to 100% when the screen is smaller than 768px
```html
<div class="row">
    <div class="col">
         Column
    </div>
    <div class="col">
         Column
    </div>
 </div>
```

#### Screen size static 12 column

`col-{x}` for all screen sizes with width 768px and above
this kind of column will switch to 100% when the screen is smaller than 768px

`col-m-{x}` screens with width between 768px  and 480px

`col-s-{x}` screens with width 480px and lower
```html
<div class="row">
    <div class="col-6 col-m-8">
         Column
    </div>
    <div class="col-2 col-m-4">
         Column
    </div>
    <div class="col-2 col-s-6">
         Column
    </div>
    <div class="col-2 col-s-6">
         Column
    </div>
 </div>
```



### Navigation
#### Navbar
```
Todo
```
#### Sidebar
```
Todo
```

### Lists
#### Vertical lists
```
Todo
```
#### Horizontal lists
```
Todo
```

### Input
```
Todo
```

### Banners
```
Todo
```

### Modals
This requires javascript.
```
Todo
```

## Build: 
    - add and edit files in src
    - cd src/_generate/
    - python combine.py => Will generate a .scss file and a js file in dist/
    - compile the scss file
    - Extra: run python minify.py

## Todo: 
    - Grid: Add screen size specific columns
    - Navbar: Add hamburger menu or similar to navigationbar
    - Sidebar: Complete sidebar 
    - Documentation: add code snippets,describe .section