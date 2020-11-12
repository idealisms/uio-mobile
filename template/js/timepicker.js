/* -----------------------------------------
   Time pickers
----------------------------------------- */
$(document).ready(function () {
  $(".timepicker input[type=text]").on("blur", function (e) {
    e.target.value = e.target.value.replace(/^(\d?\d):?(\d\d)?$/, function(match, hh, mm) {
      //console.log(match, hh, mm);
      var hhInt = parseInt(hh, 10);
      if (hhInt < 0 || hhInt > 23) {
        return match;
      }

      // Fill in minutes if not specified.
      if (typeof mm === "undefined") {
        mm = "00";
      }

      var mmInt = parseInt(mm, 10);
      if (mmInt < 0 || mmInt > 59) {
        return match;
      }

      var timepicker = $(e.target).parent().parent();
      // Adjust from military time.
      if (hhInt > 12) {
        timepicker.find(".form-check input[type=radio]")[1].checked = true;
        hh = (hhInt - 12).toString();
      } else if (hhInt === 0) {
        timepicker.find(".form-check input[type=radio]")[0].checked = true;
        hh = "12";
      }

      if (hh.length === 1) {
        hh = "0" + hh;
      }
      return hh + ":" + mm;
    });
  });
});
