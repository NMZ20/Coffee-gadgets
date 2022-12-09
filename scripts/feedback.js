
const ratings = document.querySelectorAll('.rating');
const ratingsContainer = document.querySelector('.ratings-container');
const sendBtn = document.querySelector('#send');
const panel =document.querySelector('#panel');



let selectedRating = 'satisfied';

ratingsContainer.addEventListener('click',e=>{
    if(e.target.parentNode.classList.contains('rating')){
        removeArchives()
        e.target.parentNode.classList.add('active')
        selsctedRating = e.target.nextElementSibling.innerHTML
    }
})
sendBtn.addEventListener('click',()=>{
panel.innerHTML=`
<p class="heart">💙</p>
<strong>Thank You!</strong>
<br>
<strong>Feedback: ${selectedRating}</strong>
`;})





function removeActives(){
    for (let i = 0; i< 5; i++){
        ratings[i].classList.remove('active')
        
    }

}
