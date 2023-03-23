function loadNav(page){
  let more = false
  if (page=="html-editor" ||page=="to-do"){more=true}
  return`
    <ul class="nav-list">
      <li class="nav-item">
        <a href="index.html" class="nav-link">
          <span class="link-text logo-text">Menu</span>
          <i class="logo-image fa fa-solid fa-arrow-circle-right"></i>
        </a>
      </li>

      <li class="nav-item">
        <a href="${page=='index' ? 'javascript:void(0)' : '../menu/menu.html'}" class="nav-link" ${page=='index' ? 'id="active"':''}>
          <i class="fa fa-solid fa-home"></i>
          <span class="link-text">Home</span>
        </a>
      </li>

      <li class="nav-item">
        <a href="${page=='about' ? 'javascript:void(0)' : '../about/about.html'}" class="nav-link" ${page=='about' ? 'id="active"':''}>
          <i class="fa fa-address-card"></i>
          <span class="link-text">About</span>
        </a>
      </li>

      <li class="nav-item">
        <a href="${page=='settings' ? 'javascript:void(0)' : '../settings/settings.html'}" class="nav-link" ${page=='settings' ? 'id="active"':''}>
          <i class="fa fa-solid fa-gear"></i>
          <span class="link-text">Settings</span>
        </a>
      </li>

      <li tabindex="0" class="nav-item has-dropdown nav-link"${more ? 'id="active"':''}>
        <div>
          <i class="fa fa-sharp fa-solid fa-list"></i>
          <span class="link-text">More</span>
        </div>
        <ul class="dropdown">
          <li class='nav-item'>
            <a ${page=='html-editor' ? 'id="active"':''} href="${page=='html-editor' ? 'javascript:void(0)' : '../html-editor/html-editor.html'} "   class="nav-link">Html-editor  </a>
          </li>
          <li class='nav-item'>
            <a ${page=='to-do' ? 'id="active"':''} href="${page=='to-do' ? 'javascript:void(0)' : '../to-do/to-do.html'} "   class="nav-link">To-do  </a>
          </li>
        </ul>
      </li>
    </ul>
  `
}