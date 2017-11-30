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
          vote1song: testForm.vote1song.value,
          vote1artist: testForm.vote1artist.value,
          vote2song: testForm.vote2song.value,
          vote2artist: testForm.vote2artist.value,
          vote3song: testForm.vote3song.value,
          vote3artist: testForm.vote3artist.value,
          vote4song: testForm.vote4song.value,
          vote4artist: testForm.vote4artist.value,
          vote5song: testForm.vote5song.value,
          vote5artist: testForm.vote5artist.value,
          vote6song: testForm.vote6song.value,
          vote6artist: testForm.vote6artist.value,
          vote7song: testForm.vote7song.value,
          vote7artist: testForm.vote7artist.value,
          vote8song: testForm.vote8song.value,
          vote8artist: testForm.vote8artist.value,
          vote9song: testForm.vote9song.value,
          vote9artist: testForm.vote9artist.value,
          vote10song: testForm.vote10song.value,
          vote10artist: testForm.vote10artist.value
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
      $data.append();
    });

    $('#post-results-container').fadeIn();
  };

//init on document ready
$(document).ready(init);
})();