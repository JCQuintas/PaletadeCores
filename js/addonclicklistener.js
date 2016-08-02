var newtext = "copiado!"
var oldElement;
var oldText;

var myFunction = function(e) {
    var attribute = e.getAttribute("data-hex");
    if (oldElement) {
      oldElement.textContent=oldText;
    }
    oldElement = e;
    oldText = e.nodeValue || e.textContent;
    var dummy = document.createElement("input");
      // Add it to the document
      document.body.appendChild(dummy);
      // Set its ID
      dummy.setAttribute("id", "dummy_id");
      // Output the array into it
      document.getElementById("dummy_id").value=attribute;
      // Select it
      dummy.select();

    try {
        // Now that we've selected the anchor text, execute the copy command
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        console.log('Copy email command was ' + msg);
      } catch(err) {
        console.log('Oops, unable to copy');
      }

      // Remove the selections - NOTE: Should use
      // removeRange(range) when it is supported
      window.getSelection().removeAllRanges();

      e.textContent=newtext;

      document.body.removeChild(dummy);
};
