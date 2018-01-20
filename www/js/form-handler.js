var API_URL="https://h6dpn6y8q0.execute-api.ap-southeast-2.amazonaws.com/prod/form";
$('#submitButton').on('click', function(){
  $.ajax({
    type: 'POST',
    url: API_URL,
    contentType: "application/json",
    success: $('#entries').append('<h2>Thanks for Voting!</h2>             <span style="display: inline-block;"><svg class="heart" viewBox="0 0 32 29.6"><path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/></svg> <p>Love from Joel Macey</p></span>'),
    data: JSON.stringify({
      'vote1artist': $('#vote1artist').val(),
      'vote1song': $('#vote1song').val(),
      'vote2artist': $('#vote2artist').val(),
      'vote2song': $('#vote2song').val(),
      'vote3artist': $('#vote3artist').val(),
      'vote3song': $('#vote3song').val(),
      'vote4artist': $('#vote4artist').val(),
      'vote4song': $('#vote4song').val(),
      'vote5artist': $('#vote5artist').val(),
      'vote5song': $('#vote5song').val(),
      'vote6artist': $('#vote6artist').val(),
      'vote6song': $('#vote6song').val(),
      'vote7artist': $('#vote7artist').val(),
      'vote7song': $('#vote7song').val(),
      'vote8artist': $('#vote8artist').val(),
      'vote8song': $('#vote8song').val(),
      'vote9artist': $('#vote9artist').val(),
      'vote9song': $('#vote9song').val(),
      'vote10artist': $('#vote10artist').val(),
      'vote10song': $('#vote10song').val()
    })   
  });
  return false;
});