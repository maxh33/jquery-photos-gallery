# Image Gallery Project

This project is a image gallery where users can add images via a URL. 

## Features

- Add new images to the gallery by providing a URL
- View the full-size image by clicking on the image thumbnail
- Cancel the image addition process

## How to Use

1. Load the HTML file in your preferred web browser.
2. Click on the "Add Image" button in the header.
3. Enter the URL of the image you want to add in the form that appears.
4. Click "Submit" to add the image to the gallery.
5. If you want to cancel the image addition process, click "Cancel".

## Deployment

The application is deployed and can be accessed at [https://jquery-photos-gallery.vercel.app/](https://jquery-photos-gallery.vercel.app/)

## Cloning the Repository and Running the Application Locally

To clone the repository, use the following command in your terminal:

```bash
git clone <https://jquery-photos-gallery.vercel.app/>
```
After cloning the repository, open Visual Studio Code.
Use the `File -> Open Folder` menu item to navigate to the cloned repository and open it.
For a better experience when running the application on your local machine, you can use the Live Server extension in Visual Studio Code.

1. Install the Live Server extension from the Visual Studio Code marketplace.
2. After installation, right-click on the HTML file and select `Open with Live Server`.
3. The application will open in your default web browser, and it will automatically reload whenever you save changes to the files.

**Note:** Live Server is a simple development http server with live reload capability. It's like having a production server on your local machine. It's perfect for development and testing.

**Important**
This application does not have data persistence. Refreshing the page will result in loss of all data.

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
