document.addEventListener("DOMContentLoaded", () => {
  build();
  initDarkmode();
  setTimeout(() => {
    initAutocomplete();
    Dismissible.init(["modal", "settings-bar"]);
  }, 3000);
});

function build() {
  const docs = getDocs(function (docs) {
    /** Build sidebar */
    document.getElementById("sidebarlist").innerHTML = docs
      .map((d) => {
        return `
                <li>
                  <a href="#${d.file}">${d.name}</a>  
                </li>
              `;
      })
      .join("");
    document.getElementById("sidebarlistMobile").innerHTML =
      document.getElementById("sidebarlist").innerHTML;
    /** Build documentation */
    let docIndex = 0;
    for (let doc of docs) {
      docIndex++;
      const element = document.createElement("div");
      element.setAttribute("id", doc.file);
      element.setAttribute("class", "section");
      document.getElementById("documentation").appendChild(element);
      loadDocumentation("docs/md/" + doc.file, doc.file);
      if (docIndex != docs.length) {
        const divider = document.createElement("div");
        divider.setAttribute("class", "divider");
        document.getElementById("documentation").appendChild(divider);
      }
    }
  });
}

function getDocs(callback) {
  fetch("docs/data/docs.json")
    .then((response) => response.json())
    .then((response) => {
      callback(
        response.map((d) => {
          return {
            file: d,
            name: makeName(d),
          };
        })
      );
    });
}

function makeName(file) {
  const removeOrder = file.replace(/[0-9][.]/g, "");

  return capitalizeFirstLetter(
    removeOrder.substring(0, removeOrder.indexOf(".")).replace("-", " ")
  );
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function loadDocumentation(path, holder) {
  var converter = new showdown.Converter({
    extensions: (function () {
      function htmlunencode(text) {
        return text
          .replace(/&amp;/g, "&")
          .replace(/&lt;/g, "<")
          .replace(/&gt;/g, ">");
      }
      return [
        {
          type: "output",
          filter: function (text, converter, options) {
            // use new shodown's regexp engine to conditionally parse codeblocks
            var left = "<pre><code\\b[^>]*>",
              right = "</code></pre>",
              flags = "g",
              replacement = function (wholeMatch, match, left, right) {
                // unescape match to prevent double escaping
                match = htmlunencode(match);
                return left + hljs.highlightAuto(match).value + right;
              };
            return showdown.helper.replaceRecursiveRegExp(
              text,
              replacement,
              left,
              right,
              flags
            );
          },
        },
      ];
    })(),
  });
  fetch(path)
    .then((response) => response.text())
    .then((response) => {
      document.getElementById(holder).innerHTML = converter.makeHtml(response);
    });

  highlight();
}

function highlight() {
  if (hljs) {
    document.querySelectorAll("pre code").forEach((element) => {
      element.innerHTML = element.innerHTML
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
      hljs.highlightElement(element);
    });
  }
}

function getCountries(callback) {
  fetch("docs/data/countries.json")
    .then((response) => response.json())
    .then((data) => {
      callback(data);
    });
}

function initAutocomplete() {
  getCountries((countries) => {
    let showing = [];

    const ac = Autocomplete.init(
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

    const ac2 = Autocomplete.init(
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
}

function initDarkmode() {
  const mode = localStorage.getItem("mode") || "light";
  if (mode === "dark") {
    setDarkMode();
  } else {
    setLightMode();
  }

  document
    .getElementById("dark_mode_toggle")
    .addEventListener("click", function (e) {
      const mode = localStorage.getItem("mode") || "light";
      if (mode === "light") {
        setDarkMode();
      } else {
        setLightMode();
      }
    });
}

function setDarkMode() {
  localStorage.setItem("mode", "dark");
  document.documentElement.setAttribute("data-theme", "dark");
  document.getElementById("dark_mode_toggle_badge").innerHTML = "ON";
}

function setLightMode() {
  localStorage.setItem("mode", "light");
  document.documentElement.setAttribute("data-theme", "light");
  document.getElementById("dark_mode_toggle_badge").innerHTML = "OFF";
}
