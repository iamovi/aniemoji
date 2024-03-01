    // jQuery document ready function
    $(document).ready(function() {
        // Click event for the icon with id "copyIcon"
        $('#copyIcon').click(function() {
          // Get the text content of the element with id "npmCommand"
          var textToCopy = $('#npmCommand').text().trim();
  
          // Create a temporary textarea
          var textarea = $('<textarea>').val(textToCopy).appendTo('body').select();
  
          // Execute the copy command
          document.execCommand('copy');
  
          // Remove the temporary textarea
          textarea.remove();
  
          // Change the icon to "bi-clipboard-check-fill"
          $('#copyIcon').removeClass('bi-clipboard').addClass('bi-clipboard-check-fill');
  
          // Set a timeout to revert the icon after 2 seconds
          setTimeout(function() {
            // Revert the icon to "bi-clipboard"
            $('#copyIcon').removeClass('bi-clipboard-check-fill').addClass('bi-clipboard');
          }, 2000);
        });
      });