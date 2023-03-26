class progressLink{
  constructor(name, completed, linkName){
    this.name = name
    this.linkName = linkName
    this.completed = completed
  }
  get html(){
    return`
      <a 
        href="${getPath(false, this.linkName)}" 
        class="
          progressLink 
          ${this.completed ? "done":"not_done"}
        "
      >
        ${this.name}
      </a>
    `
  }
}

const wrapper = document.getElementById("progressLinkWrapper")

const progressLinks = []

for (let key of Object.keys(progress)){
  newLink = new progressLink(progress[key].name, progress[key].procentile==100, progress[key].linkName)
  wrapper.innerHTML += newLink.html
}

function ResetProgress(){
  if (confirm("Weet je zeker dat je alle progress wil resetten?")){
      localStorage.setItem("progress", false)
      location.reload()
  }
}