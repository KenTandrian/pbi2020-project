// For smooth scrolling from navigation bar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll back to top button
scrollBtn = document.getElementById("scroll");

window.onscroll = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
}

// Load Speakers
let speakersContainer = document.querySelector('.nara__content');
const renderSpeakers = (data) => {
    data.forEach(({ name, position, imageUrl }) => {
      let row = document.createElement('div');
      row.classList.add('col', 'col-1-of-4');

      row.innerHTML = `
        <div class="card-nara">
          <div class="card-img" style="background-image: linear-gradient(to right, rgba(0,0,0, .5), rgba(147, 41, 30,.5)), url(./assets/image/${imageUrl});" >&nbsp;</div>
          <div class="card-nara-content">
              <h3 class="card-heading">
                  ${name}
              </h3>
              <p class="card-content">
                  ${position}
              </p>
          </div>
        </div>
      `;

      speakersContainer.appendChild(row);
    });
}
console.log(speakers_data);
renderSpeakers(speakers_data);

// Load Events
let eventsContainer = document.querySelector('.kegiatan__content');
const renderEvents = (data) => {
    data.forEach(({ name, desc, icon }) => {
      let row = document.createElement('div');
      row.classList.add('col', 'col-1-of-4');

      row.innerHTML = `
        <div class="card">
            <i class="${icon} card-icon"></i>
            <div>
                <h3 class="card-heading">
                    ${name}
                </h3>
                <p class="card-content">
                    ${desc}
                </p>
            </div>
        </div>
      `;

      eventsContainer.appendChild(row);
    });
}
console.log(events_data);
renderEvents(events_data);