$(document).ready(function(){
  document.getElementById("selectName")
      .addEventListener("keyup", function(event) {
      event.preventDefault();
      if (event.keyCode == 13) {
          document.getElementById("nameSelectBtn").click();
      }
  });
  $('[data-toggle="tooltip"]').tooltip({
      show: false,
      hide: false,
      html:true,
      trigger:"hover",
  }).click(function(){
       $('.tooltip').remove();
  });
});
