function loadNav(page){
  let more = (page=="IP" || page=="protocollen")
  const indexroute = page=="index"

  return`
    <ul class="nav-list">
      <li class="nav-item">
        <a href="${getPath(indexroute, "index")}" class="nav-link">
          <span class="link-text logo-text">Menu</span>
          <i class="logo-image fa fa-solid fa-arrow-circle-right"></i>
        </a>
      </li>

      <li class="nav-item">
        <a href="${page=='index' ? 'javascript:void(0)' : getPath(false, "index")}" class="nav-link" ${page=='index' ? 'id="active"':''}>
          <i class="fa fa-solid fa-home"></i>
          <span class="link-text">Home</span>
        </a>
      </li>

      <li class="nav-item">
        <a href="${
          page=='progress' ? 'javascript:void(0)' : getPath(indexroute, "progress")
        }" class="nav-link" ${page=='progress' ? 'id="active"':''}>
          <i class="fa fa-solid fa-list-check"></i>
          <span class="link-text">Progress</span>
        </a>
      </li>

      <li tabindex="0" class="nav-item has-dropdown nav-link" ${more ? 'id="active"':''}>
        <div>
          <i class="fa fa-sharp fa-solid fa-list"></i>
          <span class="link-text">More</span>
        </div>
        <ul class="dropdown">
          <li class='nav-item'>
            <a href="${page=='protocollen' ? 'javascript:void(0)' : getPath(indexroute, "protocollen")} "   class="nav-link ${page=='protocollen' ? 'active':''}">Protocollen  </a>
          </li>
          <li class='nav-item'>
            <a href="${page=='IP' ? 'javascript:void(0)' : getPath(indexroute, "IP")} "   class="nav-link ${page=='IP' ? 'active':''}">IP-protocol  </a>
          </li>
        </ul>
      </li>
    </ul>
  `
}