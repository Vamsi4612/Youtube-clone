// GET https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=kgf2&key=[YOUR_API_KEY] HTTP/1.1
// Api-key = AIzaSyA57oW1bLs7XtMR7QiFiecuzOPaBJ2m2UM
// AIzaSyDTsEk-p3ntqOElYQUP0i1llhNIRj4kR2k
// 
// AIzaSyD6iOwejyT1Frrsua-Bk0klbEiYomz__AU
// AIzaSyCKbjCvO6gbhQVx-gzdv1aU-aDb7Xf1_Iw

const searchMovies=async ()=>{
    try{
        let userinput=document.querySelector("#input").value||"India most popular"
        console.log(userinput)
    const url=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${userinput}&key=AIzaSyCKbjCvO6gbhQVx-gzdv1aU-aDb7Xf1_Iw`
    let res = await fetch(url)
    const data =await res.json()
    
    console.log(data.items)
    appendData(data.items)
    }
    catch(err){
        console.log(err)
    }
    
}


const appendData=(data)=>{
    let maindiv = document.querySelector("#main")
    maindiv.innerHTML = null;
    data.forEach(({id:{videoId},snippet:{title,thumbnails:{high:{url}}}})=>{
        let box=document.createElement("div")
        box.id="box1"
        let videodata = {
            videoId,
            title
        }
        box.addEventListener("click" , ()=>{
            playVideo(videodata)
        })
        let image=document.createElement("img")
        image.src=url
        let box2=document.createElement("div")
        box2.id="box2"
        let heading=document.createElement("p")
        heading.innerText=title
        box2.append(heading)
        box.append(image,box2)
        maindiv.append(box)
    });
};

let userinput=document.querySelector("#input").value
if(userinput.length==0){
    searchMovies()
}

let playVideo=(x)=>{
    localStorage.setItem("videodata" , JSON.stringify(x))
    window.location.href="video.html"
}