const Netflix=document.getElementById("Tour")

function onTour(eve){
    let value=eve.target.value;
    let allDivs=[...document.querySelectorAll('.card')];

    allDivs.forEach(d=>{
        d.classList.add('d-none');
    })
    let selectedDiv=[...document.querySelectorAll('.'+value)];
    selectedDiv.forEach(d=>{
        d.classList.remove('d-none')
    })

}
Tour.addEventListener('change',onTour)