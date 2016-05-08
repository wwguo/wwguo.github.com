
/* ~~~~~~~~~~~~~~
 * wise.js_t
 * ~~~~~~~~~~~~~~
 *
 * Various bits of javascript driving the moving parts behind various
 * parts of the cloud theme. Handles things such as toggleable sections,
 * collapsing the sidebar, etc.
 *
 * :copyright: Copyright 2011-2012 by Assurance Technologies
 * :license: BSD
 */

$(document).ready(function (){

    // tocwrapper 
    var $toc = $( ".toc" );
    $( ".showtoc span" ).click(function() {
        $( this ).parent().hide().next().show();
        $toc.slideDown( "fast" );
    });
    $( ".hidetoc span" ).click(function() {
        $( this ).parent().hide().prev().show();
        $toc.slideUp( "fast" );
    });

    // frist page
    function switchcolor (color) {
        $(".toc ul li a").first().removeClass("blue green purple orange").addClass(color)
        $("div.body h1").removeClass("gray blue green purple orange").addClass(color)
        $("div.body h2").removeClass("gray blue green purple orange").addClass(color)
        $("div.body h3").removeClass("gray blue green purple orange").addClass(color)
        $("div.body h4").removeClass("gray blue green purple orange").addClass(color)
        $("div.body h5").removeClass("gray blue green purple orange").addClass(color)
        $("div.body p.rubric").removeClass("gray blue green purple orange").addClass(color)
        $("div.body h6").removeClass("gray blue green purple orange").addClass(color)
        $("dt").removeClass("gray blue green purple orange").addClass(color)
        $(".footnote").removeClass("gray blue green purple orange").addClass(color)
        $("table.docutils").removeClass("gray blue green purple orange").addClass(color)
        $("div.admonition").removeClass("gray blue green purple orange").addClass(color)
        $("p.deprecated").removeClass("gray blue green purple orange").addClass(color)
        $("div.note").removeClass("gray blue green purple orange").addClass(color)
        $("div.seealso").removeClass("gray blue green purple orange").addClass(color)
        $("div.warning").removeClass("gray blue green purple orange").addClass(color)
        $("div.caution").removeClass("gray blue green purple orange").addClass(color)
        $("div.todo").removeClass("gray blue green purple orange").addClass(color)
        $("div.deprecated").removeClass("gray blue green purple orange").addClass(color)
        $("pre").removeClass("gray blue green purple orange").addClass(color)
        $("tt").removeClass("gray blue green purple orange").addClass(color)
        $("div.viewcode-block").removeClass("gray blue green purple orange").addClass(color)
    }

    var pathurl = window.location.pathname.split('/');
    var key = pathurl[pathurl.length-2];

    switch (key) {
    case "algorithmic":
        switchcolor("blue")
        $("a.headlink").removeClass("present")
        $("a.headlink#alink").addClass("present")
        break;
    case "evaluative":
        $("a.headlink").removeClass("present")
        $("a.headlink#elink").addClass("present")
        switchcolor("green")
        break;
    case "visualize":
        switchcolor("purple")
        $("a.headlink").removeClass("present")
        $("a.headlink#vlink").addClass("present")
        break;
    case "managerial":
        switchcolor("orange")
        $("a.headlink").removeClass("present")
        $("a.headlink#mlink").addClass("present")
        break;
    // case "sharing":
    //     // $("div.tocwrapper").hide()
    //     switchcolor("gray")
    //     $("a.headlink").removeClass("present")
    //     $("a.headlink#glink").addClass("present")
    //     break;
    default:
        $("div.tocwrapper").hide()
        switchcolor("gray")
        $("a.headlink").removeClass("present")
        $("a.headlink#glink").addClass("present")
    }
   
});