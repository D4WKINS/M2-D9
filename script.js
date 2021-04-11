const createTapestry =  function(){
    for(let i = 0; i<19; i++){
        // `<img src="cover-1.webp" class="album-cover">
        let tapestry = document.getElementById('tapestry');
        let div = document.createElement('div')
        div.classList.add('col-md-4', 'col-lg-3','mb-5','px-5','px-md-3','d-flex','flex-column','align-content-center')
        let img = document.createElement('img')
        img.setAttribute('src','cover-1.webp')
        img.classList.add('album-cover' , 'img-fluid')
        tapestry.appendChild(div)
        div.appendChild(img)
    }
}
    createTapestry()



    let albums = document.getElementsByClassName('album-container')
    let overlay = document.getElementsByClassName('album-overlay')
    let overlayP = document.getElementsByClassName('overlayP')
  
    for(let i = 0; i < albums.length; i++){
        albums[i].addEventListener('click', () =>{
            if(overlayP[i].style.display === "none"){
                overlayP[i].style.display = "block"
                overlay[i].classList.add("album-info")
                overlay[i].classList.add("h-100")
                overlay[i].classList.add("w-100")
                console.log("show")
              
            }
        else{
                overlayP[i].style.display = "none"
                overlay[i].classList.remove("album-info")
                overlay[i].classList.remove("h-100")
                overlay[i].classList.remove("w-100")
                console.log("hide")
            }
        })   
    }

// const getElement = (() => {

//     let elements = document.body;
//     elements.addEventListener('click', (event)=>{
//         console.log(event.target)
//     })

// })
//     getElement()

const attachBtn = () => {
let tracks = document.querySelectorAll('tbody tr')
let tdAll = document.querySelectorAll('tbody td')
let td = document.createElement('td')
let deleteBtn = document.createElement('button')
deleteBtn.innerText = "X"
deleteBtn.setAttribute('type','button')
deleteBtn.setAttribute('onclick','deleteTrack()')
deleteBtn.classList.add('deleteBtn', 'btn', 'btn-danger')
td.appendChild(deleteBtn)
// ` <td><button type="button" class="deleteBtn btn btn-danger" onclick="deleteTrack()">X</button></td>`

// tracks.forEach(track => track.appendChild(td.cloneNode(true))) //.cloneNode(true) Cloes the appended child to all tracks

    for(let i = 0; i<tdAll.length; i++){
       if(tdAll[i].contains(deleteBtn)){
        console.log(true)
       }else if(tdAll[i].contains(deleteBtn)){
        console.log(false)
        // console.log(tdAll[i])
        // console.log(deleteBtn)
    }
}
}
    attachBtn()
  
// Display modal
window.onload = (function(){
    let addBtn = document.getElementsByClassName('addBtn')[0]
    let modal = document.getElementsByClassName('modal')[0]

    addBtn.addEventListener('click',()=>{
        modal.style.display ="block"
    })
}())

// Close modal
window.onload = function(){
    let closeBtn = document.getElementsByClassName('closeBtn');
    let modal = document.getElementsByClassName('modal')[0]

    for(let i = 0; i<closeBtn.length; i++){
    closeBtn[i].addEventListener("click",()=>{
        modal.style.display= "none"
    })
}

}
  
//Note: To clear input field set the value to null("")

const addTrack = () =>{
    let addBtn = document.getElementById('addTrackBtn')
    let number = document.getElementById('trackNumber')
    let name = document.getElementById('name')
    let feat = document.getElementById('feat')
    let length = document.getElementById('length')
    let tbody = document.querySelector('tbody')
    let track;
   
    addBtn.addEventListener('click',()=>{
        track = `<tr>
        <th scope="row" class=" number">${number.value}</th>
        <td>${name.value} + ${feat.value}</td>
        <td>${length.value}</td>`

        tbody.insertAdjacentHTML("beforeend", track)
        console.log(name.value)
        console.log(name)
    })
    attachBtn()
        
}
        addTrack()
      

const deleteTrack = function(){
    let deleteBtn = document.getElementsByClassName('deleteBtn')

    for(let i=0; i<deleteBtn.length; i++){
        let td = deleteBtn[i].parentNode; //console.log(td)
        let tr = td.parentNode
        let tBody = tr.parentNode
        deleteBtn[i].addEventListener('click',() =>{ 

            tr.classList.add('trackFade')
            setTimeout(function(){ tBody.removeChild(tr) }, 1000);
        })}
}
    deleteTrack()



   

