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
                    $("<li><a href='#'" + categoryname + ">" + categoryname + "</a></li>").appendTo("#categories"); //new category
                    $("<ol id='" + categoryname + "'></ol>").appendTo("#tasks"); //items for category
                    $("#tasks").tabs("refresh"); //for tab formatting
                    var numtabs = $("#tasks .ui-tabs-nav li").length;
                    $("#tasks").tabs("option", "active", numtabs-1);
                    $("#category").val("");
                    $(this).dialog("close");
                },
                "Cancel": function(){
                    $("#category").val("");
                    $(this).dialog("close");
                }
            }
        });
    });
});