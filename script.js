//Go to top
window.addEventListener('scroll', function () {
  var goToTopBtn = document.getElementById('goToTop');
  if (window.scrollY > 500) {
    goToTopBtn.classList.add('show');
  } else {
    goToTopBtn.classList.remove('show');
  }
});

document.getElementById('goToTop').addEventListener('click', function (e) {
  e.preventDefault();
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > 0) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
});


// Carousel

$(document).ready(function () {

  document.getElementById('contact-succ').style.display = 'none';
  $(".owl-carousel").owlCarousel({
    items: 3,
    loop: true,
    margin: 20,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      992: {
        items: 3
      }
    }
  });
});

// Function to create course cards
function createCourseCard(course) {
  const courseCard = document.createElement('div');
  courseCard.classList.add('course-card');

  const courseIdTag = document.createElement('div');
  courseIdTag.classList.add('course-id');
  courseIdTag.textContent = course.courseId;
  courseCard.appendChild(courseIdTag);

  const courseName = document.createElement('h3');
  courseName.textContent = course.courseName;
  courseCard.appendChild(courseName);

  const courseDescription = document.createElement('p');
  courseDescription.textContent = course.courseDescription;
  courseCard.appendChild(courseDescription);

  const courseHours = document.createElement('p');
  courseHours.textContent = `${course.totalCourseHours} Hours `;
  courseCard.appendChild(courseHours);

  const courseTimeline = document.createElement('p');
  courseTimeline.textContent = course.courseTimeline;
  courseCard.appendChild(courseTimeline);

  return courseCard;
}

// Function to add course cards to the Courses Section
async function addCourseCards() {
  const response = await fetch('courses.json');
  courses = await response.json();

  const courseGrid = document.querySelector(".course-grid");
  courseGrid.innerHTML = "";

  // Show a maximum of 6 courses initially
  const coursesToShow = courses.slice(0, 4);

  coursesToShow.forEach(course => {
    const courseCard = createCourseCard(course);
    courseGrid.appendChild(courseCard);
  });
}

// Event listener for clicking "Show More" button
document.querySelector("#show-more-btn").addEventListener("click", () => {
  const courseGrid = document.querySelector(".course-grid");

  // Remove the "Show More" button
  document.querySelector("#show-more-btn").remove();

  // Show all remaining courses
  const remainingCourses = courses.slice(4);

  remainingCourses.forEach(course => {
    const courseCard = createCourseCard(course);
    courseGrid.appendChild(courseCard);
  });
});

// Add initial course cards on page load
document.addEventListener("DOMContentLoaded", () => {
  addCourseCards();
});


// Contact form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);

  fetch(form.action, {
    method: 'POST',
    headers: {
      'Accept': 'application/json'
    },
    body: formData
  })
    .then(response => {
      if (response.ok) {
        // Form submission successful, show success message or redirect
        form.reset();
        document.getElementById('contact-succ').style.display = 'block';
      } else {
        // Form submission failed, show error message
        document.getElementById('contact-succ').style.display = 'none';
      }
    })
    .catch(error => {
      // Fetch request failed, show error message
      document.getElementById('contact-succ').style.display = 'none';
    });
}
