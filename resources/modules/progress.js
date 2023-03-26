var progress = localStorage.getItem("progress")

if (progress && JSON.parse(progress)){
  progress = JSON.parse(progress)
} else{
  progress = {
    //total:0,
    Start: {
      linkName:"index",
      name:"Start",
      procentile:0
    }
  }
  localStorage.setItem("progress", JSON.stringify(progress))
}

function getProgress(key){
  if(progress[key]){
    return progress[key]
  } else {
    return 0
  }
}

function setProgress(key, procentile){
  if(progress[key]){
    progress[key].procentile = procentile
  } else{
    progress[key] = {
      linkName:key,
      name:key,
      procentile:procentile
    }
  }
  localStorage.setItem("progress", JSON.stringify(progress))
}