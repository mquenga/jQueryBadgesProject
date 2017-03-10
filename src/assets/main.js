$(function() {
  $.ajax({
    url: 'https://www.codeschool.com/users/2987780.json',
    dataType: 'jsonp',
    success: function(response) {
      addCourses('response', response.course.completed);

    }
  });

  function addCourses(courses){

    var badges = $('#badges');

    courses.forEach(function(course){

      var $course = $('<div />', {
        'class': 'course'
      }).appendTo($badges);
      $('<h3 />', {
        text: course.title
      }).appendTo($course);
    })
  }
});
