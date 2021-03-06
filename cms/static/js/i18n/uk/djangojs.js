

(function(globals) {

  var django = globals.django || (globals.django = {});

  
  django.pluralidx = function(n) {
    var v=(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2);
    if (typeof(v) == 'boolean') {
      return v ? 1 : 0;
    } else {
      return v;
    }
  };
  

  /* gettext library */

  django.catalog = django.catalog || {};
  
  var newcatalog = {
    "%(sel)s of %(cnt)s selected": [
      "\u041e\u0431\u0440\u0430\u043d\u043e %(sel)s \u0437 %(cnt)s", 
      "\u041e\u0431\u0440\u0430\u043d\u043e %(sel)s \u0437 %(cnt)s", 
      "\u041e\u0431\u0440\u0430\u043d\u043e %(sel)s \u0437 %(cnt)s"
    ], 
    "(required):": "(\u043e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u043e)", 
    "6 a.m.": "6", 
    "6 p.m.": "18:00", 
    "After you upload new files all your previously uploaded files will be overwritten. Continue?": "\u041f\u0456\u0441\u043b\u044f \u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f \u043d\u043e\u0432\u043e\u0433\u043e \u0444\u0430\u0439\u043b\u0443 \u0443\u0441\u0456 \u0444\u0430\u0439\u043b\u0438, \u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u0456 \u0440\u0430\u043d\u0456\u0448\u0435, \u0431\u0443\u0434\u0443\u0442\u044c \u043f\u0435\u0440\u0435\u043f\u0438\u0441\u0430\u043d\u0456 \u043d\u043e\u0432\u0438\u043c\u0438. \u041f\u0440\u043e\u0434\u043e\u0432\u0436\u0438\u0442\u0438? ", 
    "April": "\u043a\u0432\u0456\u0442\u043d\u044f", 
    "Assessment": "\u0417\u0430\u0432\u0434\u0430\u043d\u043d\u044f", 
    "Assessments": "\u0417\u0430\u0432\u0434\u0430\u043d\u043d\u044f", 
    "August": "\u0441\u0435\u0440\u043f\u043d\u044f", 
    "Available %s": "\u0412 \u043d\u0430\u044f\u0432\u043d\u043e\u0441\u0442\u0456 %s", 
    "Back to Full List": "\u041d\u0430\u0437\u0430\u0434 \u0434\u043e \u043f\u043e\u0432\u043d\u043e\u0433\u043e \u0441\u043f\u0438\u0441\u043a\u0443", 
    "Block view is unavailable": "\u0411\u043b\u043e\u0447\u043d\u0438\u0439 \u0432\u0438\u0434 \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0438\u0439", 
    "Cancel": "\u0412\u0456\u0434\u043c\u0456\u043d\u0438\u0442\u0438", 
    "Changes to steps that are not selected as part of the assignment will not be saved.": "\u0417\u043c\u0456\u043d\u0438 \u0434\u043e \u043a\u0440\u043e\u043a\u0456\u0432, \u043a\u043e\u0442\u0440\u0456 \u043d\u0435 \u043e\u0431\u0440\u0430\u043d\u043e \u044f\u043a \u0447\u0430\u0441\u0442\u0438\u043d\u0438 \u0437\u0430\u0432\u0434\u0430\u043d\u043d\u044f, \u043d\u0435 \u0437\u0431\u0435\u0440\u0435\u0436\u0443\u0442\u044c\u0441\u044f.", 
    "Choose": "\u041e\u0431\u0440\u0430\u0442\u0438", 
    "Choose a Date": "\u041e\u0431\u0435\u0440\u0456\u0442\u044c \u0434\u0430\u0442\u0443", 
    "Choose a Time": "\u041e\u0431\u0435\u0440\u0456\u0442\u044c \u0447\u0430\u0441", 
    "Choose a time": "\u041e\u0431\u0435\u0440\u0456\u0442\u044c \u0447\u0430\u0441", 
    "Choose all": "\u041e\u0431\u0440\u0430\u0442\u0438 \u0432\u0441\u0456", 
    "Chosen %s": "\u041e\u0431\u0440\u0430\u043d\u043e %s", 
    "Click to choose all %s at once.": "\u041d\u0430\u0442\u0438\u0441\u043d\u0456\u0442\u044c \u0449\u043e\u0431 \u043e\u0431\u0440\u0430\u0442\u0438 \u0432\u0441\u0456 %s \u0432\u0456\u0434\u0440\u0430\u0437\u0443.", 
    "Click to remove all chosen %s at once.": "\u041d\u0430\u0442\u0438\u0441\u043d\u0456\u0442\u044c \u0449\u043e\u0431 \u0432\u0438\u0434\u0430\u043b\u0438\u0442\u0438 \u0432\u0441\u0456 \u043e\u0431\u0440\u0430\u043d\u0456 %s \u0432\u0456\u0434\u0440\u0430\u0437\u0443.", 
    "Could not retrieve download url.": "\u041d\u0435 \u0432\u0434\u0430\u043b\u043e\u0441\u044f \u043e\u0442\u0440\u0438\u043c\u0430\u0442\u0438 URL \u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f.", 
    "Could not retrieve upload url.": "\u041d\u0435 \u0432\u0434\u0430\u043b\u043e\u0441\u044f \u043e\u0442\u0440\u0438\u043c\u0430\u0442\u0438 URL \u0432\u0438\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f.", 
    "Couldn't Save This Assignment": "\u041d\u0435\u043c\u043e\u0436\u043b\u0438\u0432\u043e \u0437\u0431\u0435\u0440\u0435\u0433\u0442\u0438 \u0446\u0435 \u0437\u0430\u0432\u0434\u0430\u043d\u043d\u044f", 
    "Criterion Added": "\u041a\u0440\u0438\u0442\u0435\u0440\u0456\u0439 \u0434\u043e\u0434\u0430\u043d\u043e", 
    "Criterion Deleted": "\u041a\u0440\u0438\u0442\u0435\u0440\u0456\u0439 \u0432\u0438\u0434\u0430\u043b\u0435\u043d\u043e", 
    "December": "\u0433\u0440\u0443\u0434\u043d\u044f", 
    "Describe ": "\u041e\u043f\u0438\u0448\u0456\u0442\u044c", 
    "Do you want to upload your file before submitting?": "\u0412\u0438 \u0445\u043e\u0447\u0435\u0442\u0435 \u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0438\u0442\u0438 \u0432\u0430\u0448 \u0444\u0430\u0439\u043b \u043f\u0435\u0440\u0435\u0434 \u043f\u043e\u0434\u0430\u043d\u043d\u044f\u043c \u043d\u0430 \u043f\u0435\u0440\u0435\u0432\u0456\u0440\u043a\u0443?", 
    "Error": "\u041f\u043e\u043c\u0438\u043b\u043a\u0430", 
    "Error getting the number of ungraded responses": "\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u043f\u0456\u0434 \u0447\u0430\u0441 \u043e\u0442\u0440\u0438\u043c\u0430\u043d\u043d\u044f \u043a\u0456\u043b\u044c\u043a\u043e\u0441\u0442\u0456 \u043d\u0435 \u043f\u0435\u0440\u0435\u0432\u0456\u0440\u0435\u043d\u0438\u0445 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0435\u0439.", 
    "February": "\u043b\u044e\u0442\u043e\u0433\u043e", 
    "Feedback available for selection.": "\u0412\u0456\u0434\u0433\u0443\u043a \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0438\u0439 \u0434\u043b\u044f \u0432\u0438\u0431\u043e\u0440\u0443.", 
    "File size must be 10MB or less.": "\u0420\u043e\u0437\u043c\u0456\u0440 \u0444\u0430\u0439\u043b\u0443 \u043c\u0430\u0454 \u0431\u0443\u0442\u0438 10\u043c\u0431 \u0430\u0431\u043e \u043c\u0435\u043d\u0448\u0435. ", 
    "File type is not allowed.": "\u0426\u0435\u0439 \u0442\u0438\u043f \u0444\u0430\u0439\u043b\u0456\u0432 \u043d\u0435 \u0434\u043e\u0437\u0432\u043e\u043b\u0435\u043d\u0438\u0439.", 
    "File types can not be empty.": "\u041f\u043e\u043b\u0435 \u0442\u0438\u043f\u0456\u0432 \u0444\u0430\u0439\u043b\u0456\u0432 \u043d\u0435 \u043c\u043e\u0436\u0435 \u0431\u0443\u0442\u0438 \u043f\u0443\u0441\u0442\u0438\u043c.", 
    "Filter": "\u0424\u0456\u043b\u044c\u0442\u0440", 
    "Final Grade Received": "\u041e\u0442\u0440\u0438\u043c\u0430\u043d\u043e \u0444\u0456\u043d\u0430\u043b\u044c\u043d\u0443 \u043e\u0446\u0456\u043d\u043a\u0443", 
    "Hide": "\u0421\u0445\u043e\u0432\u0430\u0442\u0438", 
    "If you leave this page without saving or submitting your response, you will lose any work you have done on the response.": "\u042f\u043a\u0449\u043e \u0432\u0438 \u0437\u0430\u043b\u0438\u0448\u0438\u0442\u0435 \u0446\u044e \u0441\u0442\u043e\u0440\u0456\u043d\u043a\u0443 \u0431\u0435\u0437 \u0437\u0431\u0435\u0440\u0435\u0436\u0435\u043d\u043d\u044f \u0447\u0438 \u0432\u0456\u0434\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043d\u044f \u043d\u0430 \u043f\u0435\u0440\u0435\u0432\u0456\u0440\u043a\u0443 \u0432\u0430\u0448\u043e\u0457 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0456, \u0432\u0438 \u0432\u0442\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u0441\u0456 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0438 \u0440\u043e\u0431\u043e\u0442\u0438.", 
    "If you leave this page without submitting your peer assessment, you will lose any work you have done.": "\u042f\u043a\u0449\u043e \u0432\u0438 \u0437\u0430\u043b\u0438\u0448\u0438\u0442\u0435 \u0446\u044e \u0441\u0442\u043e\u0440\u0456\u043d\u043a\u0443 \u0431\u0435\u0437 \u0437\u0431\u0435\u0440\u0435\u0436\u0435\u043d\u043d\u044f \u0432\u0430\u0448\u043e\u0433\u043e \u043f\u0435\u0440\u0435\u0445\u0440\u0435\u0441\u043d\u043e\u0433\u043e \u043e\u0446\u0456\u043d\u044e\u0432\u0430\u043d\u043d\u044f, \u0432\u0438 \u0432\u0442\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u0441\u0456 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0438 \u0440\u043e\u0431\u043e\u0442\u0438", 
    "If you leave this page without submitting your self assessment, you will lose any work you have done.": "\u042f\u043a\u0449\u043e \u0432\u0438 \u0437\u0430\u043b\u0438\u0448\u0438\u0442\u0435 \u0446\u044e \u0441\u0442\u043e\u0440\u0456\u043d\u043a\u0443 \u0431\u0435\u0437 \u0437\u0431\u0435\u0440\u0435\u0436\u0435\u043d\u043d\u044f \u0432\u0430\u0448\u043e\u0433\u043e \u0441\u0430\u043c\u043e\u043e\u0446\u0456\u043d\u044e\u0432\u0430\u043d\u043d\u044f, \u0432\u0438 \u0432\u0442\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u0441\u0456 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0438 \u0440\u043e\u0431\u043e\u0442\u0438", 
    "If you leave this page without submitting your staff assessment, you will lose any work you have done.": "\u042f\u043a\u0449\u043e \u0432\u0438 \u0437\u0430\u043b\u0438\u0448\u0438\u0442\u0435 \u0446\u044e \u0441\u0442\u043e\u0440\u0456\u043d\u043a\u0443 \u0431\u0435\u0437 \u0437\u0431\u0435\u0440\u0435\u0436\u0435\u043d\u043d\u044f \u0432\u0430\u0448\u043e\u0457 \u043e\u0446\u0456\u043d\u043a\u0438 \u0432\u0438\u043a\u043b\u0430\u0434\u0430\u0447\u0430, \u0432\u0438 \u0432\u0442\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u0441\u0456 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0438 \u0440\u043e\u0431\u043e\u0442\u0438", 
    "January": "\u0441\u0456\u0447\u043d\u044f", 
    "July": "\u043b\u0438\u043f\u043d\u044f", 
    "June": "\u0447\u0435\u0440\u0432\u043d\u044f", 
    "List of Open Assessments is unavailable": "\u041f\u0435\u0440\u0435\u043b\u0456\u043a \u0432\u0456\u0434\u043a\u0440\u0438\u0442\u0438\u0445 \u0437\u0430\u0432\u0434\u0430\u043d\u044c \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0438\u0439", 
    "March": "\u0431\u0435\u0440\u0435\u0437\u043d\u044f", 
    "May": "\u0442\u0440\u0430\u0432\u043d\u044f", 
    "Midnight": "\u041f\u0456\u0432\u043d\u0456\u0447", 
    "Noon": "\u041f\u043e\u043b\u0443\u0434\u0435\u043d\u044c", 
    "Not Selected": "\u041d\u0435 \u043e\u0431\u0440\u0430\u043d\u043e", 
    "Note: You are %s hour ahead of server time.": [
      "\u041f\u0440\u0438\u043c\u0456\u0442\u043a\u0430: \u0412\u0438 \u043d\u0430 %s \u0433\u043e\u0434\u0438\u043d\u0443 \u043f\u043e\u043f\u0435\u0440\u0435\u0434\u0443 \u0441\u0435\u0440\u0432\u0435\u0440\u043d\u043e\u0433\u043e \u0447\u0430\u0441\u0443.", 
      "\u041f\u0440\u0438\u043c\u0456\u0442\u043a\u0430: \u0412\u0438 \u043d\u0430 %s \u0433\u043e\u0434\u0438\u043d\u0438 \u043f\u043e\u043f\u0435\u0440\u0435\u0434\u0443 \u0441\u0435\u0440\u0432\u0435\u0440\u043d\u043e\u0433\u043e \u0447\u0430\u0441\u0443.", 
      "\u041f\u0440\u0438\u043c\u0456\u0442\u043a\u0430: \u0412\u0438 \u043d\u0430 %s \u0433\u043e\u0434\u0438\u043d \u043f\u043e\u043f\u0435\u0440\u0435\u0434\u0443 \u0441\u0435\u0440\u0432\u0435\u0440\u043d\u043e\u0433\u043e \u0447\u0430\u0441\u0443."
    ], 
    "Note: You are %s hour behind server time.": [
      "\u041f\u0440\u0438\u043c\u0456\u0442\u043a\u0430: \u0412\u0438 \u043d\u0430 %s \u0433\u043e\u0434\u0438\u043d\u0443 \u043f\u043e\u0437\u0430\u0434\u0443 \u0441\u0435\u0440\u0432\u0435\u0440\u043d\u043e\u0433\u043e \u0447\u0430\u0441\u0443.", 
      "\u041f\u0440\u0438\u043c\u0456\u0442\u043a\u0430: \u0412\u0438 \u043d\u0430 %s \u0433\u043e\u0434\u0438\u043d\u0438 \u043f\u043e\u0437\u0430\u0434\u0443 \u0441\u0435\u0440\u0432\u0435\u0440\u043d\u043e\u0433\u043e \u0447\u0430\u0441\u0443.", 
      "\u041f\u0440\u0438\u043c\u0456\u0442\u043a\u0430: \u0412\u0438 \u043d\u0430 %s \u0433\u043e\u0434\u0438\u043d \u043f\u043e\u0437\u0430\u0434\u0443 \u0441\u0435\u0440\u0432\u0435\u0440\u043d\u043e\u0433\u043e \u0447\u0430\u0441\u0443."
    ], 
    "November": "\u043b\u0438\u0441\u0442\u043e\u043f\u0430\u0434\u0430", 
    "Now": "\u0417\u0430\u0440\u0430\u0437", 
    "October": "\u0436\u043e\u0432\u0442\u043d\u044f", 
    "One or more rescheduling tasks failed.": "\u041e\u0434\u043d\u0430 \u0430\u0431\u043e \u043a\u0456\u043b\u044c\u043a\u0430 \u0437\u0430\u0434\u0430\u0447 \u043f\u0435\u0440\u0435\u043f\u043b\u0430\u043d\u0443\u0432\u0430\u043d\u043d\u044f \u043f\u0440\u043e\u0432\u0430\u043b\u0438\u043b\u0430\u0441\u044f.", 
    "Option Deleted": "\u041e\u043f\u0446\u0456\u044e \u0432\u0438\u0434\u0430\u043b\u0435\u043d\u043e", 
    "Peer": "\u0412\u0437\u0430\u0454\u043c\u043e\u043e\u0446\u0456\u043d\u043a\u0430", 
    "Please correct the outlined fields.": "\u0412\u0456\u0434\u043a\u043e\u0440\u0438\u0433\u0443\u0439\u0442\u0435 \u043f\u043e\u0437\u043d\u0430\u0447\u0435\u043d\u0456 \u043f\u043e\u043b\u044f", 
    "Please wait": "\u0411\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430, \u0437\u0430\u0447\u0435\u043a\u0430\u0439\u0442\u0435", 
    "Remove": "\u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438", 
    "Remove all": "\u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438 \u0432\u0441\u0435", 
    "Saving...": "\u0417\u0431\u0435\u0440\u0435\u0436\u0435\u043d\u043d\u044f ...", 
    "Self": "\u0421\u0430\u043c\u043e\u043e\u0446\u0456\u043d\u043a\u0430", 
    "September": "\u0432\u0435\u0440\u0435\u0441\u043d\u044f", 
    "Server error.": "\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0443.", 
    "Show": "\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u0438", 
    "Staff": "\u041f\u0435\u0440\u0441\u043e\u043d\u0430\u043b", 
    "Start Proctored Exam": "\u0420\u043e\u0437\u043f\u043e\u0447\u0430\u0442\u0438 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u044c\u043e\u0432\u0430\u043d\u0456 \u0456\u0441\u043f\u0438\u0442\u0438", 
    "Started": "\u0420\u043e\u0437\u043f\u043e\u0447\u0430\u0432\u0441\u044f", 
    "Status of Your Response": "\u0421\u0442\u0430\u0442\u0443\u0441 \u0432\u0430\u0448\u043e\u0457 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0456", 
    "The display of ungraded and checked out responses could not be loaded.": "\u041d\u0435 \u0432\u0434\u0430\u043b\u043e\u0441\u044f \u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0438\u0442\u0438 \u0435\u043a\u0440\u0430\u043d \u043d\u0435\u043f\u0435\u0440\u0435\u0432\u0456\u0440\u0435\u043d\u0438\u0445 \u0442\u0430 \u043f\u0435\u0440\u0435\u0432\u0456\u0440\u0435\u043d\u0438\u0445 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0435\u0439.", 
    "The following file types are not allowed: ": "\u041d\u0430\u0441\u0442\u0443\u043f\u043d\u0456 \u0442\u0438\u043f\u0438 \u0444\u0430\u0439\u043b\u0456\u0432 \u043d\u0435 \u0434\u043e\u0437\u0432\u043e\u043b\u0435\u043d\u0456: ", 
    "The server could not be contacted.": "\u0421\u0435\u0440\u0432\u0435\u0440 \u043d\u0435 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0430\u0454.", 
    "The staff assessment form could not be loaded.": "\u041d\u0435 \u0432\u0434\u0430\u043b\u043e\u0441\u044f \u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0438\u0442\u0438 \u0444\u043e\u0440\u043c\u0443 \u043e\u0446\u0456\u043d\u043a\u0438 \u0432\u0438\u043a\u043b\u0430\u0434\u0430\u0447\u0430.", 
    "The submission could not be removed from the grading pool.": "\u0412\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u044c \u043d\u0435 \u043c\u043e\u0436\u0435 \u0431\u0443\u0442\u0438 \u0432\u0438\u0434\u0430\u043b\u0435\u043d\u0430 \u0437 \u0447\u0435\u0440\u0433\u0438 \u043e\u0446\u0456\u043d\u044e\u0432\u0430\u043d\u043d\u044f.", 
    "This assessment could not be submitted.": "\u041d\u0435 \u0432\u0434\u0430\u043b\u043e\u0441\u044f \u0432\u0456\u0434\u043f\u0440\u0430\u0432\u0438\u0442\u0438 \u0446\u0435 \u0437\u0430\u0432\u0434\u0430\u043d\u043d\u044f.", 
    "This feedback could not be submitted.": "\u041d\u0435 \u0432\u0434\u0430\u043b\u043e\u0441\u044f \u0432\u0456\u0434\u043f\u0440\u0430\u0432\u0438\u0442\u0438 \u0446\u0435\u0439 \u0432\u0456\u0434\u0433\u0443\u043a.", 
    "This is the list of available %s. You may choose some by selecting them in the box below and then clicking the \"Choose\" arrow between the two boxes.": "\u0426\u0435 \u0441\u043f\u0438\u0441\u043e\u043a \u0432\u0441\u0456\u0445 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0438\u0445 %s. \u0412\u0438 \u043c\u043e\u0436\u0435\u0442\u0435 \u043e\u0431\u0440\u0430\u0442\u0438 \u0434\u0435\u044f\u043a\u0456 \u0437 \u043d\u0438\u0445, \u0432\u0438\u0434\u0456\u043b\u0438\u0432\u0448\u0438 \u0457\u0445 \u0443 \u043f\u043e\u043b\u0456 \u043d\u0438\u0436\u0447\u0435 \u0456 \u043d\u0430\u0442\u0438\u0441\u043d\u0443\u0432\u0448\u0442 \u043a\u043d\u043e\u043f\u043a\u0443 \"\u041e\u0431\u0440\u0430\u0442\u0438\".", 
    "This is the list of chosen %s. You may remove some by selecting them in the box below and then clicking the \"Remove\" arrow between the two boxes.": "\u0426\u0435 \u0441\u043f\u0438\u0441\u043e\u043a \u043e\u0431\u0440\u0430\u043d\u0438\u0445 %s. \u0412\u0438 \u043c\u043e\u0436\u0435\u0442\u0435 \u0432\u0438\u0434\u0430\u043b\u0438\u0442\u0438 \u0434\u0435\u044f\u043a\u0456 \u0437 \u043d\u0438\u0445, \u0432\u0438\u0434\u0456\u043b\u0438\u0432\u0448\u0438 \u0457\u0445 \u0443 \u043f\u043e\u043b\u0456 \u043d\u0438\u0436\u0447\u0435 \u0456 \u043d\u0430\u0442\u0438\u0441\u043d\u0443\u0432\u0448\u0438 \u043a\u043d\u043e\u043f\u043a\u0443 \"\u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438\".", 
    "This problem could not be saved.": "\u041d\u0435 \u0432\u0434\u0430\u043b\u043e\u0441\u044f \u0437\u0431\u0435\u0440\u0435\u0433\u0442\u0438 \u0446\u0435 \u0437\u0430\u0432\u0434\u0430\u043d\u043d\u044f.", 
    "This problem has already been released. Any changes will apply only to future assessments.": "\u0426\u0435 \u0437\u0430\u0432\u0434\u0430\u043d\u043d\u044f \u0432\u0436\u0435 \u0431\u0443\u043b\u043e \u0437\u0430\u043f\u0443\u0449\u0435\u043d\u043e. \u0411\u0443\u0434\u044c-\u044f\u043a\u0456 \u0437\u043c\u0456\u043d\u0438 \u0431\u0443\u0434\u0443\u0442\u044c \u0437\u0430\u0441\u0442\u043e\u0441\u043e\u0432\u0443\u0432\u0430\u0442\u0438\u0441\u044f \u0442\u0456\u043b\u044c\u043a\u0438 \u0434\u043e \u043c\u0430\u0439\u0431\u0443\u0442\u043d\u0456\u0445 \u0437\u0430\u0432\u0434\u0430\u043d\u044c.", 
    "This response could not be saved.": "\u041d\u0435 \u0432\u0434\u0430\u043b\u043e\u0441\u044f \u0437\u0431\u0435\u0440\u0435\u0433\u0442\u0438 \u0446\u044e \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u044c.", 
    "This response could not be submitted.": "\u041d\u0435 \u0432\u0434\u0430\u043b\u043e\u0441\u044f \u0432\u0456\u0434\u043f\u0440\u0430\u0432\u0438\u0442\u0438 \u0446\u044e \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u044c \u043d\u0430 \u043f\u0435\u0440\u0435\u0432\u0456\u0440\u043a\u0443.", 
    "This response has been saved but not submitted.": "\u0426\u044f \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u044c \u0431\u0443\u043b\u0430 \u0437\u0431\u0435\u0440\u0435\u0436\u0435\u043d\u0430, \u0430\u043b\u0435 \u043d\u0435 \u0432\u0456\u0434\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0430 \u043d\u0430 \u043f\u0435\u0440\u0435\u0432\u0456\u0440\u043a\u0443.", 
    "This response has not been saved.": "\u0426\u044f \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u044c \u043d\u0435 \u0431\u0443\u043b\u0430 \u0437\u0431\u0435\u0440\u0435\u0436\u0435\u043d\u0430.", 
    "This section could not be loaded.": "\u041d\u0435 \u0432\u0434\u0430\u043b\u043e\u0441\u044f \u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0438\u0442\u0438 \u0446\u0435\u0439 \u0440\u043e\u0437\u0434\u0456\u043b.", 
    "Thumbnail view of ": "\u041c\u0456\u043d\u0456\u0430\u0442\u044e\u0440\u0430 \u0434\u043b\u044f", 
    "Today": "\u0421\u044c\u043e\u0433\u043e\u0434\u043d\u0456", 
    "Tomorrow": "\u0417\u0430\u0432\u0442\u0440\u0430", 
    "Total Responses": "\u0412\u0441\u044c\u043e\u0433\u043e \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0435\u0439", 
    "Training": "\u0422\u0440\u0435\u043d\u0443\u0432\u0430\u043d\u043d\u044f", 
    "Type into this box to filter down the list of available %s.": "\u041f\u043e\u0447\u043d\u0456\u0442\u044c \u0432\u0432\u043e\u0434\u0438\u0442\u0438 \u0442\u0435\u043a\u0441\u0442 \u0432 \u0446\u044c\u043e\u043c\u0443 \u043f\u043e\u043b\u0456 \u0449\u043e\u0431 \u0432\u0456\u0434\u0444\u0456\u043b\u044c\u0442\u0440\u0443\u0432\u0430\u0442\u0438 \u0441\u043f\u0438\u0441\u043e\u043a \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0438\u0445 %s.", 
    "Unable to load": "\u041d\u0435\u043c\u043e\u0436\u043b\u0438\u0432\u043e \u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0438\u0442\u0438", 
    "Unexpected server error.": "\u041d\u0435\u043e\u0447\u0456\u043a\u0443\u0432\u0430\u043d\u0430 \u043f\u043e\u043c\u0438\u043b\u043a\u0430 \u043d\u0430 \u0441\u0442\u043e\u0440\u043e\u043d\u0456 \u0441\u0435\u0440\u0432\u0435\u0440\u0443.", 
    "Unit Name": "\u041d\u0430\u0437\u0432\u0430 \u0431\u043b\u043e\u043a\u0443", 
    "Units": "\u0411\u043b\u043e\u043a\u0438", 
    "Unnamed Option": "\u041e\u043f\u0446\u0456\u044f \u0431\u0435\u0437 \u0456\u043c\u0435\u043d\u0456", 
    "Verified": "\u041f\u0435\u0440\u0435\u0432\u0456\u0440\u0435\u043d\u0438\u0439", 
    "Waiting": "\u041e\u0447\u0456\u043a\u0443\u0432\u0430\u043d\u043d\u044f", 
    "Warning": "\u041f\u043e\u043f\u0435\u0440\u0435\u0434\u0436\u0435\u043d\u043d\u044f", 
    "Yesterday": "\u0412\u0447\u043e\u0440\u0430", 
    "You can upload files with these file types: ": "\u0412\u0438 \u043c\u043e\u0436\u0435\u0442\u0435 \u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0443\u0432\u0430\u0442\u0438 \u0444\u0430\u0439\u043b\u0438 \u0442\u0430\u043a\u0438\u0445 \u0442\u0438\u043f\u0456\u0432: ", 
    "You have added a criterion. You will need to select an option for the criterion in the Learner Training step. To do this, click the Settings tab.": "\u0412\u0438 \u0434\u043e\u0434\u0430\u043b\u0438 \u043a\u0440\u0438\u0442\u0435\u0440\u0456\u0439. \u0412\u0438 \u043c\u0430\u0454\u0442\u0435 \u0432\u0438\u0431\u0440\u0430\u0442\u0438 \u043e\u043f\u0446\u0456\u044e \u0434\u043b\u044f \u0446\u044c\u043e\u0433\u043e \u043a\u0440\u0438\u0442\u0435\u0440\u0456\u044e \u043d\u0430 \u043a\u0440\u043e\u0446\u0456 \u041d\u0430\u0432\u0447\u0430\u043d\u043d\u044f \u0441\u043b\u0443\u0445\u0430\u0447\u0430. \u0429\u043e\u0431 \u0446\u0435 \u0437\u0440\u043e\u0431\u0438\u0442\u0438, \u043a\u043b\u0456\u043a\u043d\u0456\u0442\u044c \u043d\u0430 \u0432\u043a\u043b\u0430\u0434\u0446\u0456 \u041d\u0430\u043b\u0430\u0448\u0442\u0443\u0432\u0430\u043d\u043d\u044f.", 
    "You have deleted a criterion. The criterion has been removed from the example responses in the Learner Training step.": "\u0412\u0438 \u0432\u0438\u0434\u0430\u043b\u0438\u043b\u0438 \u043a\u0440\u0438\u0442\u0435\u0440\u0456\u0439. \u041a\u0440\u0438\u0442\u0435\u0440\u0456\u0439 \u0431\u0443\u043b\u043e \u0432\u0438\u043b\u0443\u0447\u0435\u043d\u043e \u0437 \u043f\u0440\u0438\u043a\u043b\u0430\u0434\u0443 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0456 \u043d\u0430 \u043a\u0440\u043e\u0446\u0456 \u041d\u0430\u0432\u0447\u0430\u043d\u043d\u044f \u0441\u043b\u0443\u0445\u0430\u0447\u0430.", 
    "You have deleted all the options for this criterion. The criterion has been removed from the sample responses in the Learner Training step.": "\u0412\u0438 \u0432\u0438\u0434\u0430\u043b\u0438\u043b\u0438 \u0432\u0441\u0456 \u043e\u043f\u0446\u0456\u0457 \u0446\u044c\u043e\u0433\u043e \u043a\u0440\u0438\u0442\u0435\u0440\u0456\u044e. \u041a\u0440\u0438\u0442\u0435\u0440\u0456\u0439 \u0431\u0443\u043b\u043e \u0432\u0438\u043b\u0443\u0447\u0435\u043d\u043e \u0437 \u043f\u0440\u0438\u043a\u043b\u0430\u0434\u0443 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0456 \u043d\u0430 \u043a\u0440\u043e\u0446\u0456 \u041d\u0430\u0432\u0447\u0430\u043d\u043d\u044f \u0441\u043b\u0443\u0445\u0430\u0447\u0430.", 
    "You have deleted an option. That option has been removed from its criterion in the sample responses in the Learner Training step. You might have to select a new option for the criterion.": "\u0412\u0438 \u0432\u0438\u0434\u0430\u043b\u0438\u043b\u0438 \u043e\u043f\u0446\u0456\u044e. \u0426\u044e \u043e\u043f\u0446\u0456\u044e \u0431\u0443\u043b\u043e \u0432\u0438\u043b\u0443\u0447\u0435\u043d\u043e \u0437 \u0457\u0457 \u043a\u0438\u0442\u0435\u0440\u0456\u044e \u0443 \u043f\u0440\u0438\u043a\u043b\u0430\u0434\u0456 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0456 \u043d\u0430 \u043a\u0440\u043e\u0446\u0456 \u041d\u0430\u0432\u0447\u0430\u043d\u043d\u044f \u0441\u043b\u0443\u0445\u0430\u0447\u0430. \u0412\u0430\u043c \u0441\u043b\u0456\u0434 \u043e\u0431\u0440\u0430\u0442\u0438 \u043d\u043e\u0432\u0443 \u043e\u043f\u0446\u0456\u044e \u0434\u043b\u044f \u0446\u044c\u043e\u0433\u043e \u043a\u0440\u0438\u0442\u0435\u0440\u0456\u044e.", 
    "You have selected an action, and you haven't made any changes on individual fields. You're probably looking for the Go button rather than the Save button.": "\u0412\u0438 \u043e\u0431\u0440\u0430\u043b\u0438 \u0434\u0456\u044e \u0456 \u043d\u0435 \u0437\u0440\u043e\u0431\u0438\u043b\u0438 \u0436\u043e\u0434\u043d\u0438\u0445 \u0437\u043c\u0456\u043d \u0443 \u043f\u043e\u043b\u044f\u0445. \u0412\u0438, \u043d\u0430\u043f\u0435\u0432\u043d\u043e, \u0448\u0443\u043a\u0430\u0454\u0442\u0435 \u043a\u043d\u043e\u043f\u043a\u0443 \"\u0412\u0438\u043a\u043e\u043d\u0430\u0442\u0438\", \u0430 \u043d\u0435 \"\u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438\".", 
    "You have selected an action, but you haven't saved your changes to individual fields yet. Please click OK to save. You'll need to re-run the action.": "\u0412\u0438 \u043e\u0431\u0440\u0430\u043b\u0438 \u0434\u0456\u044e, \u0430\u043b\u0435 \u043d\u0435 \u0437\u0431\u0435\u0440\u0435\u0433\u043b\u0438 \u0437\u043c\u0456\u043d\u0438 \u0432 \u043e\u043a\u0440\u0435\u043c\u0438\u0445 \u043f\u043e\u043b\u044f\u0445. \u0411\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430, \u043d\u0430\u0442\u0438\u0441\u043d\u0456\u0442\u044c \u041e\u041a, \u0449\u043e\u0431 \u0437\u0431\u0435\u0440\u0435\u0433\u0442\u0438. \u0412\u0430\u043c \u0434\u043e\u0432\u0435\u0434\u0435\u0442\u044c\u0441\u044f \u043f\u043e\u0432\u0442\u043e\u0440\u043d\u043e \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u0438 \u0434\u0456\u044e.", 
    "You have unsaved changes on individual editable fields. If you run an action, your unsaved changes will be lost.": "\u0412\u0438 \u0437\u0440\u043e\u0431\u0438\u043b\u0438 \u044f\u043a\u0456\u0441\u044c \u0437\u043c\u0456\u043d\u0438 \u0443 \u0434\u0435\u044f\u043a\u0438\u0445 \u043f\u043e\u043b\u044f\u0445. \u042f\u043a\u0449\u043e \u0412\u0438 \u0432\u0438\u043a\u043e\u043d\u0430\u0454\u0442\u0435 \u0446\u044e \u0434\u0456\u044e, \u0432\u0441\u0456 \u043d\u0435\u0437\u0431\u0435\u0440\u0435\u0436\u0435\u043d\u0456 \u0437\u043c\u0456\u043d\u0438 \u0431\u0443\u0434\u0435 \u0432\u0442\u0440\u0430\u0447\u0435\u043d\u043e.", 
    "You must provide a learner name.": "\u0412\u0438 \u043c\u0430\u0454\u0442\u0435 \u0432\u043a\u0430\u0437\u0430\u0442\u0438 \u0456\u043c'\u044f \u0443\u0447\u043d\u044f.", 
    "You're about to submit your response for this assignment. After you submit this response, you can't change it or submit a new response.": "\u0412\u0438 \u0432\u0456\u0434\u043f\u0440\u0430\u0432\u043b\u044f\u0454\u0442\u0435 \u043d\u0430 \u043f\u0435\u0440\u0435\u0432\u0456\u0440\u043a\u0443 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u044c \u043d\u0430 \u0446\u0435 \u0437\u0430\u0432\u0434\u0430\u043d\u043d\u044f. \u041f\u0456\u0441\u043b\u044f \u0432\u0456\u0434\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043d\u044f \u0432\u0438 \u043d\u0435 \u0437\u043c\u043e\u0436\u0435\u0442\u0435 \u0437\u043c\u0456\u043d\u0438\u0442\u0438 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u044c \u0430\u0431\u043e \u043d\u0430\u0434\u0456\u0441\u043b\u0430\u0442\u0438 \u0457\u0457 \u0449\u0435 \u0440\u0430\u0437.", 
    "one letter Friday\u0004F": "\u041f", 
    "one letter Monday\u0004M": "\u041f", 
    "one letter Saturday\u0004S": "\u0421", 
    "one letter Sunday\u0004S": "\u041d", 
    "one letter Thursday\u0004T": "\u0427", 
    "one letter Tuesday\u0004T": "\u0412", 
    "one letter Wednesday\u0004W": "\u0421"
  };
  for (var key in newcatalog) {
    django.catalog[key] = newcatalog[key];
  }
  

  if (!django.jsi18n_initialized) {
    django.gettext = function(msgid) {
      var value = django.catalog[msgid];
      if (typeof(value) == 'undefined') {
        return msgid;
      } else {
        return (typeof(value) == 'string') ? value : value[0];
      }
    };

    django.ngettext = function(singular, plural, count) {
      var value = django.catalog[singular];
      if (typeof(value) == 'undefined') {
        return (count == 1) ? singular : plural;
      } else {
        return value[django.pluralidx(count)];
      }
    };

    django.gettext_noop = function(msgid) { return msgid; };

    django.pgettext = function(context, msgid) {
      var value = django.gettext(context + '\x04' + msgid);
      if (value.indexOf('\x04') != -1) {
        value = msgid;
      }
      return value;
    };

    django.npgettext = function(context, singular, plural, count) {
      var value = django.ngettext(context + '\x04' + singular, context + '\x04' + plural, count);
      if (value.indexOf('\x04') != -1) {
        value = django.ngettext(singular, plural, count);
      }
      return value;
    };

    django.interpolate = function(fmt, obj, named) {
      if (named) {
        return fmt.replace(/%\(\w+\)s/g, function(match){return String(obj[match.slice(2,-2)])});
      } else {
        return fmt.replace(/%s/g, function(match){return String(obj.shift())});
      }
    };


    /* formatting library */

    django.formats = {
    "DATETIME_FORMAT": "d E Y \u0440. H:i", 
    "DATETIME_INPUT_FORMATS": [
      "%d.%m.%Y %H:%M:%S", 
      "%d.%m.%Y %H:%M:%S.%f", 
      "%d.%m.%Y %H:%M", 
      "%d.%m.%Y", 
      "%d %B %Y %H:%M:%S", 
      "%d %B %Y %H:%M:%S.%f", 
      "%d %B %Y %H:%M", 
      "%d %B %Y", 
      "%Y-%m-%d %H:%M:%S", 
      "%Y-%m-%d %H:%M:%S.%f", 
      "%Y-%m-%d %H:%M", 
      "%Y-%m-%d"
    ], 
    "DATE_FORMAT": "d E Y \u0440.", 
    "DATE_INPUT_FORMATS": [
      "%d.%m.%Y", 
      "%d %B %Y", 
      "%Y-%m-%d"
    ], 
    "DECIMAL_SEPARATOR": ",", 
    "FIRST_DAY_OF_WEEK": "1", 
    "MONTH_DAY_FORMAT": "d F", 
    "NUMBER_GROUPING": "3", 
    "SHORT_DATETIME_FORMAT": "d.m.Y H:i", 
    "SHORT_DATE_FORMAT": "d.m.Y", 
    "THOUSAND_SEPARATOR": "\u00a0", 
    "TIME_FORMAT": "H:i", 
    "TIME_INPUT_FORMATS": [
      "%H:%M:%S", 
      "%H:%M:%S.%f", 
      "%H:%M"
    ], 
    "YEAR_MONTH_FORMAT": "F Y"
  };

    django.get_format = function(format_type) {
      var value = django.formats[format_type];
      if (typeof(value) == 'undefined') {
        return format_type;
      } else {
        return value;
      }
    };

    /* add to global namespace */
    globals.pluralidx = django.pluralidx;
    globals.gettext = django.gettext;
    globals.ngettext = django.ngettext;
    globals.gettext_noop = django.gettext_noop;
    globals.pgettext = django.pgettext;
    globals.npgettext = django.npgettext;
    globals.interpolate = django.interpolate;
    globals.get_format = django.get_format;

    django.jsi18n_initialized = true;
  }

}(this));

