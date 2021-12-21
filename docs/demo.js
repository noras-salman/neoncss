document.addEventListener("DOMContentLoaded", () => {
  build();
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

    /** Build documentaion */
    let docIndex = 0;
    for (let doc of docs) {
      docIndex++;
      const element = document.createElement("div");
      element.setAttribute("id", doc.file);
      element.setAttribute("class", "section");
      document.getElementById("documentation").appendChild(element);
      loadDocumenation("docs/md/" + doc.file, doc.file);
      if (docIndex != docs.length) {
        const divider = document.createElement("div");
        divider.setAttribute("class", "divider");
        document.getElementById("documentation").appendChild(divider);
      }
    }
  });
}

function getDocs(callback) {
  fetch("docs/docs.json")
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

function loadDocumenation(path, holder) {
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
