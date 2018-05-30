$(document).ready(function() {
    $("#alltasks").tabs();
    $("ul").sortable({ axis: "x", containment: "#tasks" });
    $("ol").sortable({ axis: "y", containment: "#tasks" });
    
    $("#addcategory").button()
    .click(function() {
        $("#newcategory").dialog({
            width: 300,
            resizeable: false,
            modal: true,
            buttons: {
                "Add": function() {
                    var categoryname = $("#category").val();
                    $("<li><a href='#" + categoryname + "'>" + categoryname + "</a></li>").appendTo("#categories"); //new category
                    $("<ol id='" + categoryname + "'></ol>").appendTo("#alltasks"); //items for category
                    $("#alltasks").tabs("refresh"); //for tab formatting
                    var numtabs = $("#alltasks .ui-tabs-nav li").length;
                    $("#alltasks").tabs("option", "active", numtabs-1);
                    $("#category").val("");
                    $(this).dialog("close");
                },
                "Cancel": function() {
                    $("#category").val("");
                    $(this).dialog("close");
                }
            }
        });
    });

    $("#addtask").button()
    .click(function() {
        $("#newtask").dialog({
            width: 300,
            resizeable: false,
            modal: true,
            buttons: {
                "Add": function() {
                    var taskname = $("#task").val();
                    var activetabindex = $("#alltasks").tabs("option", "active");
                    var activetab = $("#alltasks ul li a").eq(activetabindex).attr("href");
                    $("<li><input type='checkbox'>" + taskname + "</li>").appendTo(activetab);
                    $("#task").val("");
                    $(this).dialog("close");
                },
                "Cancel": function() {
                    $("#task").val("");
                    $(this).dialog("close");
                }
            }
        });
    });
});