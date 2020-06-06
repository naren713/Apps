$(document).ready(function() {
    $("#main").tabs();
    $("ul").sortable({ axis: "x", containment: "#main" })
    $("ol").sortable({ axis: "y", containment: "#main" })
    $("#main").on("click", "input[type=checkbox]", function() {
        $(this).closest("li").slideUp(function() {
            $(this).remove()
        });
    })

    $("#main").on("click", "span.ui-icon-close", function() {
        var index = $(this).closest("li").index();
        var id = $("#tabs li:eq(" + index + ")a").attr("href");
        $("#tabs li:eq(" + index + ")").remove();
        $(id).remove();
        $("#main").tabs("refresh");
    });

    $("#task").button();
    $("#task").click(function() {
        $("#TaskDialogBox").dialog({
            width: 400,
            resizable: false,
            modal: true,
            buttons: {
                "Add New Task": function() {
                    $("#main").tabs("refresh")
                    var activeTab = $("#main").tabs("option", "active");
                    var title = $("#tabs > li:nth-child(" + (activeTab + 1) + ")>a").attr("href")
                    $("#main " + title).append("<li><input type='checkbox'>" + $("#NewTasks").val() + "</li>");
                    $("#NewTasks").val("");
                    $(this).dialog("close");
                }, // end AddNewTask
                "Cancel": function() {
                        $("#NewTasks").val("")
                        $(this).dialog("close")
                    } // end Cancel
            }
        });
    }); // end task click
    $("#ToBeDone").button();
    $("#ToBeDone").click(function() {
        $("#dialogBox").dialog({
            width: 400,
            // height: 200,
            resizable: false,
            modal: true,
            buttons: {
                "Add New List": function() {
                    var NewTask = $("#NewTask").val();
                    var replaceName = NewTask.split(" ").join("_")
                    $("<li><a href='#" + replaceName + "'>" + NewTask + "</a><span class='ui - icon ui - icon - close'></span></li>").appendTo("#tabs");
                    $("<ol id='" + replaceName + "'></ol>").appendTo("#main").sortable()
                    $("#main").tabs("refresh");
                    var tabCount = $("#main .ui-tabs-nav li").length;
                    $("#main").tabs("option", "active", tabCount - 1);
                    $("#NewTask").val("");
                    $(this).dialog("close");
                },
                "Cancel": function() {
                        $("#NewTask").val("");
                        $(this).dialog("close")
                    } // end cancel
            } // end buttons object
        }); // end dialog method
    });


}); //end ready