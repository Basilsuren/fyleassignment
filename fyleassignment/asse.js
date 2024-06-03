$(document).ready(function() {
    $('#contactButton').on('click', function() {
      $('#contactModal').modal('show');
    });
  
    // Change project image based on content hover
    $('.project-content').hover(function() {
      var index = $(this).index();
      $('#projectImage').attr('src', 'project' + (index + 1) + '.jpg');
    });
  
    // Hover effect on carousel images
    $('.carousel-item img').hover(function() {
      var imgSrc = $(this).attr('src');
      $(this).attr('src', 'design_overlay.jpg'); // Replace with your overlay image path
    }, function() {
      $(this).attr('src', imgSrc);
    });
    $('.growth-image').click(function() {
        // Remove highlight from all images
        $('.growth-image').removeClass('highlight');
        // Highlight the clicked image
        $(this).addClass('highlight');
      });
  
    // Open Fylehq in new tab on 'Read more' button click
    $('.read-more-btn').on('click', function() {
      window.open('https://www.fylehq.com', '_blank');
    });
  });
  