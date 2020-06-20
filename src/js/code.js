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

