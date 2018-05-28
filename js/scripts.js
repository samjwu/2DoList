$(document).ready(function(){
    $("#tasks").tabs();
    $("ul").sortable({ axis: "x", containment: "#tasks" });
    $("ol").sortable({ axis: "y", containment: "#tasks" });
    
    $("#addcategory").button()
    .click(function() {
        $("#newcategory").dialog({
            width: 300,
            resizeable: false,
            modal: true,
            buttons: {
                "Add new category": function(){
                    var categoryname = $("#category").val();
                    $("<li><a href='#'" + categoryname + ">" + categoryname + "</a></li>").appendTo("#categories");
                    $("#category").val("");
                    $(this).dialog("close");
                    $("#tasks").tabs("refresh");
                },
                "Cancel": function(){
                    $("#category").val("");
                    $(this).dialog("close");
                }
            }
        });
    });
});