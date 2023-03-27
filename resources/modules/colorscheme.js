const body = document.body
const root = document.querySelector(':root')




//getting theme that is already set, if not: set it
var theme = localStorage.getItem('theme');

if(theme==null){
  console.log("reset")
  theme = {
    type:"light",
    custom:{}
  }
  localStorage.setItem('theme',JSON.stringify(theme))
  setNormalTheme(theme.type)
} else{
  theme = JSON.parse(theme)
  if(theme.type == "random"){
    applyCustomColorscheme(theme.custom)
  } else {
    setNormalTheme(theme.type)
  }
}




function applyCustomColorscheme(newColorScheme){
  if(( newColorScheme[2].r*299+ newColorScheme[2].g*587+ newColorScheme[2].b*114)/1000  >  70){
    root.style.setProperty('--text-color', "0,0,0");
  } else{
    root.style.setProperty('--text-color', "255,255,255");
  }

  if(( newColorScheme[0].r*299+ newColorScheme[0].g*587+ newColorScheme[0].b*114)/1000  >  70){
    root.style.setProperty('--sec-text-color', "0,0,0");
  } else{
    root.style.setProperty('--sec-text-color', "255,255,255");
  }

  for (let i = 0; i < newColorScheme.length; i++) {
    root.style.setProperty('--color'+(i+1), `${newColorScheme[i].r},${newColorScheme[i].g},${newColorScheme[i].b}`);
  }

  //change real values and save
  body.classList = "random"
  theme.type = "random"
  theme.custom = newColorScheme
  localStorage.setItem("theme", JSON.stringify(theme))
}




async function setRandomTheme(){

  //generating custom color scheme
  let randomSeed = Math.floor(Math.random()*16777215).toString(16);
  let newColorScheme = await fetch("https://www.thecolorapi.com/scheme?count=3&hex=" + randomSeed);
  newColorScheme = await newColorScheme.json();
  newColorScheme = await newColorScheme.colors.map(function(element){return element.rgb})

  applyCustomColorscheme(newColorScheme)
}


function setNormalTheme(newTheme){
  body.classList = newTheme
  theme.type = newTheme
  localStorage.setItem("theme", JSON.stringify(theme))
}