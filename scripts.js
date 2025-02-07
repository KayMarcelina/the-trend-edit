// Function to toggle visibility of sections
function showSection(sectionId) {
    // Hide all sections first
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
      section.style.display = 'none';
    });
  
    // Show the selected section
    const sectionToShow = document.getElementById(sectionId);
    if (sectionToShow) {
      sectionToShow.style.display = 'block';
    }
  }
  