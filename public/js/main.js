window.onscroll = MyScrool;

function MyScrool() {
      let scroll = document.body.scrollTop || document.documentElement.scrollTop;
      let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      let scrolled = (scroll / height) * 100;
      if (scroll <= 150) {
            document.querySelector(".__navegacion").classList.remove("__nav-scroll");
            document.querySelector(".__navegacion").classList.add("__nav-scroll-remove");
            document.querySelector(".__item-logo").style.color = "#FFF";
            let menu_ite = document.getElementsByClassName("__menu-item");
            for (let i = 0; i < menu_ite.length; i++) {
                  menu_ite[i].classList.remove("text-blue");
            }
            // ocultar btn ir arriba
            document.querySelector(".__subir").classList.remove("__subir_scroll");
            document.querySelector(".__subir").classList.add("__subir_none_scroll");
            // //cambiar a blanco el btn de menu
            document.querySelector(".__responsive__menu-btn").classList.remove("text-blue");
            document.querySelector(".__responsive__menu-btn").classList.add("text-white");

      } else {
            document.querySelector(".__navegacion").classList.remove("__nav-scroll-remove");
            document.querySelector(".__navegacion").classList.add("__nav-scroll");
            document.querySelector(".__item-logo").style.color = "#2A2B5F";
            let menu_item = document.getElementsByClassName("__menu-item");
            for (let index = 0; index < menu_item.length; index++) {
                  menu_item[index].classList.add("text-blue");
            }

            // mostrar btn ir arriba
            document.querySelector(".__subir").classList.remove("__subir_none_scroll");
            document.querySelector(".__subir").classList.add("__subir_scroll");

            // cambiar de color del boton de menu
            document.querySelector(".__responsive__menu-btn").classList.remove("text-white");
            document.querySelector(".__responsive__menu-btn").classList.add("text-blue");
      }
}

document.querySelector(".__subir").addEventListener("click",()=>{
      document.documentElement.scrollTop=0;
});