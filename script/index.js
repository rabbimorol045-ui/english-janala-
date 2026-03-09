
const lessons = () =>{
    fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((res) => res.json())
    .then(json => displayLesson(json.data))
}
const displayLesson =(lessons)=>{
//01. get the element 
const levelContainer = document.getElementById('level-container');

levelContainer.innerHTML = "";
// 02. add eventlistener
for(let lesson of lessons){
    const btndiv = document.createElement("div");
    btndiv.innerHTML=`
    <button>
      <i  class="fa-solid fa-book-open-reader"></i>Lesson
      </button>


    `
    levelContainer.append(btndiv)
}

lessons();