document.addEventListener("DOMContentLoaded", () => {
  const closeAllModals = () => {
    for (i = 0; i < modals.length; i++) {
      modals[i].classList.remove("modal-visible");
    }
  };

  const modals = document.querySelectorAll(".modal");
  const modalsTriggers = document.querySelectorAll('*[action="modal"]');
  const modalsCloseTriggers = document.querySelectorAll(
    '*[action="dismiss-modal"]'
  );

  for (i = 0; i < modalsTriggers.length; i++) {
    modalsTriggers[i].addEventListener("click",  (e)=> {
      const target = e.target.getAttribute("data");
      document.getElementById(target).classList.add("modal-visible");
    });
  }

  for (i = 0; i < modalsCloseTriggers.length; i++) {
  
    modalsCloseTriggers[i].addEventListener("click",   (e)=> {

      closeAllModals();
    });
  }

  for (i = 0; i < modals.length; i++) {
    modals[i].addEventListener("click",  (e) =>{
      const dismissable = e.target.getAttribute("dismissable");
       
      if (e.target.classList.contains("modal") && dismissable) {
        /** Clicked outside the box */
      
        closeAllModals();
      }
    });
  }
});


