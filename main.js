$(document).ready(function()  {
    $('header button').click(function() {
        $('form').slideDown();
    });

    $('#cancel-button').click(function() {
        $('form').slideUp();
    });

    $('form').on('submit', function(e) {
        e.preventDefault();
        const newImgUrl = $('#newImgUrl').val();
        const newItem = $('<li style="display:none"></li>');
        $(`<img src="${newImgUrl}" />`).appendTo(newItem);
        $(`
            <div class="overlay-img-link">
                <a href="${newImgUrl}" target="_blank" title="See in full size">
                    See in full size  
                </a>
            </div> 
        `).appendTo(newItem);
        $(newItem).appendTo('ul');
        $(newItem).fadeIn(1000);
        $('#newImgUrl').val('') 
    });
});