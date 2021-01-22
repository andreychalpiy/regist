$(document).ready(function() {
    getResponse()
})

function getResponse() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => {
            posts = posts.slice(0, 10);
            for(let post of posts) {
                $('#photoTmpl').tmpl(post).appendTo('#postBlock')
            }        
        })     
    
      
  }
  