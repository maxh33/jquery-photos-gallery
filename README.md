# Image Gallery Project

This project is a image gallery where users can add images via a URL. 

## Features

- Add new images to the gallery by providing a URL
- View the full-size image by clicking on the image thumbnail
- Cancel the image addition process

## How to Use

1. Click on the "Add Image" button in the header.
2. Enter the URL of the image you want to add in the form that appears.
3. Click "Submit" to add the image to the gallery.
4. If you want to cancel the image addition process, click "Cancel".

## Code Overview

The JavaScript code uses jQuery to handle user interactions:

```javascript
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
        $(newItem).appendTo('ul');
        $(newItem).fadeIn(1000);
        $('#newImgUrl').val('') 
    });
});
