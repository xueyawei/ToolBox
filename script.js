$("#submit").click(function (e) {
    var monthArray = [
        'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
    ]
    
    var title = $("#title").val();
    var date = new Date($("#date").val());
    var link = $("#link").val();
    var text = $("#main-text").val()

    console.log(title, date, link, text)
    

    var dateText = monthArray[date.getMonth()]+" "+date.getDate().toString()+", "+date.getFullYear().toString();
    var outputText = "<div class='blog-card'>" +
        "\r\t<h1>" + title + "</h1>" +
        "\r\t<h4><strong>" + dateText + "</strong></h4>" +
        "\r\t" + text +
        "..." +
        "\r\t<a href='" + link + "'>Read More &gt;&gt;</a>" +
        "\r</div>"
    $('#output-text').val(outputText);
    
    var allText = $('#all').val();
    $('#all').val(outputText+"\r\r"+allText);
});

$("#clear").click(function(){
    $("input").val("");
    $("#main-text").val("");
    $("#output-text").val("");
});

$('#allClear').click(function(){
        $("input").val("");
    $("#main-text").val("");
    $("#output-text").val("");
    $("#all").val("");
});
