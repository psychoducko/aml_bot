import filterRoutes from "./js/functions/filterRoutes";
import filterMainMenu from "./js/functions/filterMainMenu";

function altIE(){
  window.altrpAdmin.filterRoutes(filterRoutes)
  window.altrpAdmin.filterMainMenu(filterMainMenu)
}
if(window?.altrp?.adminLoaded){
  altIE()
} else {
  window.addEventListener('altrp-admin-loaded', altIE)
}
