/**
 *  Example Javascript for footnotes many to one footnote
 *  All classes and id can be named whatever, but for demo purposes this uses specific class names
 *  
 */

$(document).ready(function (event) {

    $(".singleFoot").on("click", function (event) {
        addReferenceBackToFoot($(this));
        $("#modalFootnote").animate({
            height: "20%",
        }, 1000, function () {
            $("#modalFootnote h2").focus();
            $("#modalFootnote").scrollTop(0);

        });
        return false;
    });


});


function addReferenceBackToFoot($this) {
    //  alert("help");
    var newHref = $this.attr("href").split("#")[1];
    var newHTML = $("sup a[id=" + newHref + "]").parent().next("span.reference-text").html();
    var newRefID = ("#" + $this.attr("id"));
    var newFootNum = $this.text();

    $("#modalFootnote").attr("class", "there");
    $("main").attr("aria-hidden", "true");
    $("main").addClass("nopointer");
    $("#coverAll").attr("class", "there");
    $("html, body").attr("class", "hideOverflow");
    $("#modalFootnote div#modalContent").html(newHTML);
    $("#modalFootnote").prepend("<h2 id='footnoteH2' tabindex='-1'>" + newFootNum + " Footnote</h2>");
    $("#modalFootnote button.cb").click(function () {
        $("#modalFootnote").animate({
            height: "0",
        }, 1000, function () {
            $("html, body").removeAttr("class");
            $("main").removeAttr("aria-hidden");
            $("#modalFootnote h2").remove();
            $("#modalFootnote").attr("class", "notThere");
            $("#coverAll").attr("class", "notThere");
            $("main").removeClass("nopointer");
            $(newRefID).focus();
        });
        $(this).unbind();
    });

//    $("#coverAll").click(function () {
//        $("#modalFootnote button.cb").trigger("click");
//
//    });



    var $modal = $('#modalFootnote');
    $modal.on('keydown', function (e) {
        var $cancel = $modal.find('a[href], area[href], input, select, textarea, button, iframe, object, embed, *[tabindex], *[contenteditable]').not('[tabindex=-1], [disabled], :hidden').first();
        var $close = $modal.find('a[href], area[href], input, select, textarea, button, iframe, object, embed, *[tabindex], *[contenteditable]').not('[tabindex=-1], [disabled], :hidden').last();
        var $modalH2 = $('#modalFootnote h2');
        var which = e.which;
        var target = e.target;
        if (which === 9 && e.shiftKey) {
            if (target === $cancel[0] || target === $modalH2[0]) {
                e.preventDefault();
                $close.focus();
            }
        } else if (which === 9) { // TAB
            if (target === $close[0]) {
                e.preventDefault();
                $cancel.focus();
            }
        } else if (which === 27) { // ESCAPE
            // click the cancel button which hides the modal and focuses it's trigger
            $("#modalFootnote button.cb").click();
        }
    });
};