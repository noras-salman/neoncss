const htmlEncode = (html)=>{
    html=html+"\n";
    let code= html.replace(/[\u00A0-\u9999<>\&]/gim, function(i) {
        return '&#'+i.charCodeAt(0)+';';
     });
     
     return code.replace(/(?:\r\n|\r|\n)/g, '<br>');
  };

 


/** INIT */
const codes = document.querySelectorAll(".code");
for (i = 0; i < codes.length; i++) {
    codes[i].innerHTML=htmlEncode(codes[i].innerHTML);
}


document.addEventListener("DOMContentLoaded", () => {
  const modals = document.querySelectorAll(".modal");
  const modalsTriggers = document.querySelectorAll('*[action="modal"]');
  const modalsCloseTriggers = document.querySelectorAll(
    '*[action="dismiss-modal"]'
  );

  for (i = 0; i < modalsTriggers.length; i++) {
    modalsTriggers[i].addEventListener("click", function (e) {
      const target = e.target.getAttribute("data");
      document.getElementById(target).classList.add("modal-visible");
    });
  }

  for (i = 0; i < modalsCloseTriggers.length; i++) {
    modalsCloseTriggers[i].addEventListener("click", function (e) {
      closeAllModals();
    });
  }

  for (i = 0; i < modals.length; i++) {
    modals[i].addEventListener("click", function (e) {
  
      if (e.target.classList.contains("modal")) {
        /** Clicked outside the box */
        closeAllModals();
      }
    });
  }
});

const closeAllModals = () => {
  for (i = 0; i < modals.length; i++) {
    modals[i].classList.remove("modal-visible");
  }
};

