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
    var source = $("#source").val();

    console.log(title, date, link, text)
    

    var dateText = monthArray[date.getMonth()]+" "+date.getDate().toString()+", "+date.getFullYear().toString();
    
    // get output text type;
    var outputText;
    var flag = $("#blog-type").prop("checked");
    if(!flag){
        outputText = "<div class='blog-card'>" +
        "\r\t<h4><strong><em>"+source+"</em> | " + dateText + "</strong></h4>" +
        "\r\t<h1>" + title + "</h1>" +
        "\r\t" + text +
        "..." +
        "\r\t<a href='" + link + "'>Read More &gt;&gt;</a>" +
        "\r</div>";
    }else{
        outputText = "<div class='blog-card'>" +
        "\r\t<h1>" + title + "</h1>" +
        "\r\t<h4><strong>" + dateText + "</strong></h4>" +
        "\r\t" + text +
        "..." +
        "\r\t<a href='" + link + "'>Read More &gt;&gt;</a>" +
        "\r</div>";
    }
    
    console.log(outputText);
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

$("#media-type").on("click",function(){
    if($("#media-type").prop("checked")){
        $("#source").prop("disabled",false);
    }
   
});

$("#blog-type").click(function(){
    $("#source").prop("disabled",true);
})
