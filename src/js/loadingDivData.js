function loadingDivData(id, data) {
  let gliderMoviesOfWeek = document.getElementById(id);
  let gliderContainer = gliderMoviesOfWeek.children[0];

  data.forEach(item => {

    let div = document.createElement('div');
    let a = document.createElement('a');
    let img = document.createElement('img');
    let movieTitle = document.createElement('p');
    let movieRating = document.createElement('p');

    div.classList.add('title');

    img.src = `https://image.tmdb.org/t/p/w500/${item.poster_path}`;
    movieTitle.append(item.original_title);
    movieRating.append(`Rating ${item.vote_average}`);

    a.appendChild(img);
    a.appendChild(movieTitle)
    a.appendChild(movieRating);
    div.appendChild(a);

    gliderContainer.appendChild(div)
    
  });  
} 

export { loadingDivData };