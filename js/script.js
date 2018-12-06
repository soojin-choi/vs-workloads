$(document).ready(function(){
    $('.collapsible').collapsible();
    $('.tabs').tabs();
    $('.tooltipped').tooltip();
    $('.a').attr("target", "_blank");

    $('.iconz').css('opacity', 0.5);
    var prevWL = "firstLoad";
    var selectedWL;
    var hidden = true;

    $('.iconz').hover(function() {
        $(this).css('opacity', 1);
        $(this).css('cursor', 'pointer');
    }, function() {
        if (selectedWL != $(this).attr('id') || hidden) {
            $(this).css('opacity', 0.5);
        }
    });

    function hideAll() {
        $('#uwp-dev-desc').slideUp('fast');
        $('#dotnet-desktop-desc').slideUp('fast');
        $('#desktop-cpp-desc').slideUp('fast');
        $('#web-dev-desc').slideUp('fast');
        $('#azure-dev-desc').slideUp('fast');
        $('#python-dev-desc').slideUp('fast');
        $('#node-dev-desc').slideUp('fast');
        $('#data-storage-desc').slideUp('fast');
        $('#data-science-desc').slideUp('fast');
        $('#office-dev-desc').slideUp('fast');
        $('#mobile-dotnet-desc').slideUp('fast');
        $('#game-dev-desc').slideUp('fast');
        $('#mobile-cpp-desc').slideUp('fast');
        $('#game-cpp-desc').slideUp('fast');
        $('#vs-ext-desc').slideUp('fast');
        $('#linux-dev-desc').slideUp('fast');
        $('#dotnet-core-desc').slideUp('fast');
    }

    $('.iconz').on("click", function() {
        selectedWL = $(this).attr('id');
        if ($("#"+selectedWL+"-desc").is(':visible')) {
            hideAll();
            $('.iconz').css('opacity', 0.5);
            hidden = true;
        } else {
            $('.iconz').css('opacity', 0.5);
            hideAll();
            $("#"+selectedWL+"-desc").slideDown('fast');
            hidden = false;
            $("#"+selectedWL).css('opacity', 1);
            $('html, body').animate({
                scrollTop: $("#"+selectedWL).offset().top
            }, 500);
        }
    });
});