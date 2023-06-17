document.addEventListener("DOMContentLoaded", ()=>{
  let nav_list = document.querySelectorAll("li")
  let a_list  = document.querySelectorAll(".nav--link")

  for (let i = 0; i < nav_list.length; i++) {
      nav_list[i].addEventListener("click", function(){
          for (let n = 0; n <nav_list.length; n++){
              nav_list[n].classList.remove("clicked")
              a_list[n].classList.remove("clicked")          
            }
          this.classList.add("clicked")
          a_list[i].classList.add("clicked")
      })

      
    }

    document.querySelector('.burger'). addEventListener('click', function(){
      document.querySelector('ul').classList.toggle('clicked');
  })
})