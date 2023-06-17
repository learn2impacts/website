// Carousel

$(document).ready(function () {
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
  const courseCard = document.createElement("div");
  courseCard.classList.add("course");
  courseCard.innerHTML = `
    <h3>${course.courseName}</h3>
    <p>${course.courseDescription}</p>
    <p>Total Hours: ${course.totalCourseHours}</p>
    <p>Timeline: ${course.courseTimeline}</p>
  `;
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
