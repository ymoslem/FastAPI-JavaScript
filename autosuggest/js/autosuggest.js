var complete = function(source) {
  $.ajax({
    type: "POST",
    contentType: "application/json; charset=utf-8",
    url: "http://127.0.0.1:8000/autosuggest/",
    data: JSON.stringify({ sentence: source}),
    success: function (data) {

      // empty old translations, if any
      $("#suggested").empty();

      // Show translations on the suggestions list
      $.each(data.suggestions, function(i) {
        $("<a>", {
            id: "alternative",
            class: "dropdown-item",
            onclick: "$('#source').val($(this).val().trim()+' ').focus(); $('#suggested').hide();",
            text: data.suggestions[i],
            val: data.prefix + " " + data.suggestions[i]
        }).appendTo("#suggested");
      });

    },
    dataType: "json",
  });
}


$(document).ready(function(){
  var debounce = null;
    $('#source').on('keyup', function(e){
      e.preventDefault();

      caret = getCaretCoordinates(this, this.selectionEnd);

      $("#suggested").empty();

      clearTimeout(debounce);
      debounce = setTimeout(function(){
        var source = $("#source").val();
        var lastChar = source[source.length-1];

        if(lastChar == " " && $("#source").val().length > 1){
          complete(source);
          $("#suggested").show();
          console.log("working")

          // reposition the list of suggestions to the cursor position
          var x = $('#source').offset().left;
          var y = $('#source').offset().top;
          $("#suggested").css("left", caret.left + x*0.2);
          
          var height = $('#container').height();
          var caretPos = y + caret.height + caret.top;

          if(caretPos <= (y + height)){
            $("#suggested").css("top", caretPos);
          }
          else{
            $("#suggested").css("top", y + height);
          }
          
          
          $("#source").on("focusout", function(){
            setTimeout(function() { 
              $("#suggested").hide();
            }, 10);
          });

        }
      }, 200);

    });
});


