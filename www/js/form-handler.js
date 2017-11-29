(function () {

  function init(){
    $('#submitButton').click(submitButtonHandler);
  }

  function submitButtonHandler (evt) {
     var testForm = document.getElementById('testForm');

      //prevent form submission
      evt.preventDefault();
      evt.stopPropagation();

      $('#post-results-container').fadeOut();
      $('.ajaxLoader').css('display', 'inline-block');


      //make the AJAX call
      $.ajax({
        url: '/form',
        type: 'POST',
        data: {
          vote1: testForm.vote1.value,
          vote2: testForm.vote2.value,
          vote3: testForm.vote3.value,
          vote4: testForm.vote4.value,
          vote5: testForm.vote5.value,
          vote6: testForm.vote6.value,
          vote7: testForm.vote7.value,
          vote8: testForm.vote8.value,
          vote9: testForm.vote9.value,
          vote10: testForm.vote10.value
        },
        success: postSuccessHandler
      });
  }

  function postSuccessHandler (jsonData) {
    var $data = $('#post-results-container .data');

    //reset the UI
    $data.html('');
    $('.ajaxLoader').hide();

    //update the UI with the data returned from the AJAX call 
    $.each(jsonData, function (key, val) {
      $data.append('<li><b>' +  key + '</b>'   + val + '</li>');
    });

    $('#post-results-container').fadeIn();
  };

//init on document ready
$(document).ready(init);
})();