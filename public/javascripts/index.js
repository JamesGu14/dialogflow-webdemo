function submitMsg() {

  var textarea = $('#console')
  var message = $('#message').val()

  $('#message').val('')
  textarea.text(textarea.text() + message + '\r\n')

}