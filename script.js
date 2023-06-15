// Carousel

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items: 3,
    loop: true,
    margin: 20,
    nav: true,
    dots: false,
    responsive:{
       0:{
          items:1
       },
       768:{
          items:2
       },
       992:{
          items:3
       }
    }
  });
});

// Sample course data
const courses = [
  {
    id: 1,
    name: "Course 1",
    description: "Description of Course 1",
    totalHours: 30,
    timeline: "2 months"
  },
  {
    id: 2,
    name: "Course 2",
    description: "Description of Course 2",
    totalHours: 40,
    timeline: "3 months"
  },
  // Add more courses here
  {
    id: 3,
    name: "Course 3",
    description: "Description of Course 2",
    totalHours: 40,
    timeline: "3 months"
  },
  {
    id: 3,
    name: "Course 3",
    description: "Description of Course 2",
    totalHours: 40,
    timeline: "3 months"
  },
  {
    id: 3,
    name: "Course 3",
    description: "Description of Course 2",
    totalHours: 40,
    timeline: "3 months"
  },
  {
    id: 3,
    name: "Course 3",
    description: "Description of Course 2",
    totalHours: 40,
    timeline: "3 months"
  },
  {
    id: 3,
    name: "Course 3",
    description: "Description of Course 2",
    totalHours: 40,
    timeline: "3 months"
  },
  {
    id: 3,
    name: "Course 3",
    description: "Description of Course 2",
    totalHours: 40,
    timeline: "3 months"
  },
];

// Function to create course cards
function createCourseCard(course) {
  const courseCard = document.createElement("div");
  courseCard.classList.add("course");
  courseCard.innerHTML = `
    <h3>${course.name}</h3>
    <p>${course.description}</p>
    <p>Total Hours: ${course.totalHours}</p>
    <p>Timeline: ${course.timeline}</p>
  `;
  return courseCard;
}

// Function to add course cards to the Courses Section
function addCourseCards() {
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
