
const levellessons = () =>{
    fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((res) => res.json())
    .then(json => displayLesson(json.data))
};
const loadlevelword = (id)=>{
     const url = `https://openapi.programming-hero.com/api/level/${id}`
    fetch(url)
    .then(res =>res.json())
    .then(data => displayShowWord(data.data))
}
const displayShowWord =(words)=>{
    
    const wordContainer =document.getElementById('word-container')
    wordContainer.innerHTML = "";
    words.forEach(word => {
        
console.log(word)
    
    const card =document.createElement("div")
    card.innerHTML =`
    <p>cat</p>
    `;
    wordContainer.append(card)
    
   });


}


const displayLesson =(lessons)=>{
//01. get the element 
const levelContainer = document.getElementById('level-container');

levelContainer.innerHTML = "";
// 02. add eventlistener
for(let lesson of lessons){
    const btndiv = document.createElement("div");
    btndiv.innerHTML=`
    <button onclick="loadlevelword(${lesson.level_no})" class ="btn btn-outline btn-primary">
      <i class="fa-solid fa-book-open-reader"></i>Lesson-${lesson.level_no}
      </button>


    `
    levelContainer.append(btndiv)
}}

levellessons();