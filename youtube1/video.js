let data = JSON.parse( localStorage.getItem("videodata"))
// console.log(data)
// data.forEach(()=>{
    let box = document.createElement("div")
    box.id="box1"
    let frame = document.createElement("iframe")
    frame.src = `https://www.youtube.com/embed/${data.videoId}?autoplay=1&mute=1`
    frame.width = "100%"
    frame.height = "100%"
    frame.allow = "fullscreen"
    let name = document.createElement("h5")
    name.innerText=data.title
    box.append(frame,name)
    document.querySelector("#main").append(box)
// })