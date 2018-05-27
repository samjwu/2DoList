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
                "Add new category": function(){},
                "Cancel": function(){}
            }
        });
    });
});