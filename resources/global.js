function getPath(indexPath, page){
  if(indexPath){
    if(page=="index"){
      return `./index.html`
    } else{
      return `resources/${page}/${page}.html`
    }
  } else{
    if(page == "index"){
      return "../../index.html"
    }
    return `../${page}/${page}.html`
  }
}
