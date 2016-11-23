// Callback function
function callback(response) {
  //console.log(response);
  $("blockquote").append(response.quoteText);
  $("cite").append(response.quoteAuthor);
};

// jQuery JSONP juju
$.ajax({
  url: "http://api.forismatic.com/api/1.0/",
  dataType: "jsonp",
  jsonp: "jsonp",
  data: {
    method: "getQuote",
    lang: "en",
    format: "jsonp"
  },
  success: callback
});