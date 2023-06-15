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
    name: "Computer Basic",
    description: "Computer overview, words, paint",
    totalHours: 20,
    timeline: "2 months"
  },
  {
    id: 2,
    name: "MS Office",
    description: "Word, Excel, PP",
    totalHours: 40,
    timeline: "3 months"
  },
  {
    id: 3,
    name: "JavaScript",
    description: "Make candidate ready for working in Javascript",
    totalHours: 30,
    timeline: "2 months"
  },
  {
    id: 4,
    name: "Angular",
    description: "Make candidate ready for working in Angular project",
    totalHours: 50,
    timeline: "5 months"
  },
  {
    id: 5,
    name: "NodeJs",
    description: "Make candidate ready for working in Node project",
    totalHours: 50,
    timeline: "5 months"
  },
  {
    id: 6,
    name: "Web Development",
    description: "Make candidate ready for working in web development",
    totalHours: 50,
    timeline: "5 months"
  },
  {
    id: 7,
    name: "Java",
    description: "Make candidate ready for working in Java project",
    totalHours: 60,
    timeline: "5 months"
  },
  {
    id: 8,
    name: "Database",
    description: "Make candidate ready for working with Databases",
    totalHours: 40,
    timeline: "3 months"
  },
  {
    id: 9,
    name: "IT Industrial training",
    description: "Usage of GIT, IT freshers industrial project",
    totalHours: 50,
    timeline: "5 months"
  },
  {
    id: 10,
    name: "IT Freshers Interview Preparation",
    description: "It will be a course that includes algorithm, flowchart, one computer language, database, GIT, industrial project, CV development, Job search instructions",
    totalHours: 80,
    timeline: "6 months"
  }
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
