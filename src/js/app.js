import axios from 'axios';
import { loadingDivData } from './loadingDivData';

window.onload = () => {
  feather.replace();
  loadingMovies();
}

const loadingMovies = async () => {

  await bestWeek();
  await action();
  await documentary();
  await horror();
  await comedy();

  await mountGliders();
}

const bestWeek = async () => {
  await axios.get('https://api.themoviedb.org/3/trending/movie/week?api_key=c2684cab367c23e2526b3d1f3ac091b1')
  .then(response => {
    const { results } = response.data;
    loadingDivData('glider-1', results);
  })
  .catch(error => console.log(error));
}

const action = async () => {
  await axios.get('https://api.themoviedb.org/3/discover/movie?api_key=c2684cab367c23e2526b3d1f3ac091b1&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28&with_watch_monetization_types=flatrate')
  .then(response => {
    const { results } = response.data;
    loadingDivData('glider-2', results);
  })
  .catch(error => console.log(error));
}

const documentary = async () => {
  await axios.get('https://api.themoviedb.org/3/discover/movie?api_key=c2684cab367c23e2526b3d1f3ac091b1&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=99&with_watch_monetization_types=flatrate')
  .then(response => {
    const { results } = response.data;
    loadingDivData('glider-3', results);
  })
  .catch(error => console.log(error));
}

const horror = async () => {
  await axios.get('https://api.themoviedb.org/3/discover/movie?api_key=c2684cab367c23e2526b3d1f3ac091b1&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=27&with_watch_monetization_types=flatrate')
  .then(response => {
    const { results } = response.data;
    loadingDivData('glider-4', results);
  })
  .catch(error => console.log(error));
}

const comedy = async () => {
  await axios.get('https://api.themoviedb.org/3/discover/movie?api_key=c2684cab367c23e2526b3d1f3ac091b1&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=35&with_watch_monetization_types=flatrate')
  .then(response => {
    const { results } = response.data;
    loadingDivData('glider-5', results);
  })
  .catch(error => console.log(error));
}

const mountGliders = () => {
  const gliders = document.querySelectorAll("[id^=glider]");

  gliders.forEach((glide) => {

    const glider = document.querySelector(`#${glide.id} .glider`);
    const gliderPrev = document.querySelector(`#${glide.id} .glider-prev`);
    const gliderNext = document.querySelector(`#${glide.id} .glider-next`);
    const gliderDots = document.querySelector(`#${glide.id} .dots`);

    new Glider(glider, {
      slidesToScroll: 4,
      slidesToShow: 4.5,
      draggable: true,
      dots: false,
      arrows: {
        prev: gliderPrev,
        next: gliderNext
      }
    });
  })
}