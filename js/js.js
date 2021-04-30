$(document).ready(function(){
    $(function(){
        // هاته الدالة تقوم بتحديد تاريخ اليوم
        // new Date 
        var austDay = new Date();
        // هنا قمنا بتحديد التاريخ الدي سيتوقف عنده العداد
        // الدالة getfullYear هي دالة تابعة للدالة الام new Date وهي تقوم باعطائنا سنة التاريخ
        austDay = new Date(austDay.getFullYear() + 1, 1 - 1, 26);
        // الان سنقوم بتفعيل العداد على العنصر الدي يمتلك المعرف الخاص به defaultCountdown
        // قمنا بهاته العملية عن طريق التابع او الدالة countdown
        // وعبر الخاصية until قمنا بتحديد التاريخ الدي سيتوقف فيه العد 
        // وعبر الخاصية format  قمنا بتحديد الصيغة التي نريد ان يظهر بها الوقت 
        $('#defaultCountdown').countdown({until: austDay, format: 'odHMS'});
    });

    var wow = new WOW({ mobile:false });
    wow.init();
// عندما يبتعد زر فارة المستخدم او يقوم بالضغط على مكان اخر من الصفحة غير الحقل
// هادا ما تعنيه وهادا ما تقدمه الدالة blur
    $('.form-control').blur(function(){
// الان سنقوم بتعريف متغير لكي يحتوي على القيمة التي سيدخلها المستخدم
// ودلك عبر تحديد الاسم البرمجي للنمودج الدي نتعامل معه وفي حالتنا هاته الاسم هو myform
// ثم بعده نحدد الاسم البرمجي للحقل الدي نتعامل معه وفي حالتنا هنا الاسم هو email
// وفي الاخير نستخدم الخاصية value لكي يعمل كل هادا الدي قمنا به
         var x = document.forms['myForm']['email'].value;
// الان خطوتنا التالية هي الحصول على الرمز @ ودليله 
// وهادا الكود قمنا فيه بتخزين الرمز @ في متغير ادا كان موجودا ضمن المصفوفة
// تستخدم الدالة indexOf للتحقق من تواجد حرف أو نص داخل نص آخر، تقوم الدالة بإرجاع قيمة -1 في حالة لم يكن النص يحتوي على الحرف، وتقوم بإرجاع موضع الحرف في حالة تواجده. 
         var atpos = x.indexOf('@');
// اما الدالة lastindexof فهي تقوم بارجاع او بمعنى اخر تعطينا فهرس تواجد نص ما
// وفي مثالنا هادا قمنا باستخدامها لكي تعطينا فهرس اخر نقطة ضمن المصفوفة x
// فمثلا ادا كانت توجد اكثر من نقطة فهادا التابع سوف يعطينا فهر اخر نقطة
         var dotpos = x.lastIndexOf('.');
// الان سننتقل لمرحلة اخرى الا وهي التحقق من الايميل المدخل من طرف المستخدم ودلك عن طريق الجمل الشرطية
// atpos<1 ادا كانت @ في بداية المدخل او غير موجودة
// dotpos<atpos+2 وادا كانت النقطة توجد بعد @ بحرفين
// dotpos+2>=x.length وادا كانت النقطة قبل اخر حرف او حرفين من نهاية الاميل 
// طبعا كل ها مررنا به الان هو يعتبر ايميل خاطئ 
         if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length)
         {
// this تعني العنصر ولادي هنا هو حقل الادخال
// parents وهو العنصر الاب الحاوي لهادا الحقل 
// find تقوم بتحديد العنصر الموجود داخل الحقل input-group
// وبعد تحديده نقوم باعطائه رسالة الخطا alert-danger
// اما التابع fadeIn فوظيفته هي اظهار العنصر المسند اليه وفي هاته الحالة اسندت اليه رسالة الخطا
            $(this).parents().find(".alert-success").fadeOut(200)
            $(this).parents().find(".alert-danger").fadeIn(200);             
         }
         else{
             // ادا كانت المدخلات صحيحة
             $(this).parents().find(".alert-danger").fadeOut(200); 
             $(this).parents().find(".alert-success").fadeIn(200);
         }                  
    });
    
    $('.form-control').blur(function () {
        var x = document.forms["myForm2"]["email2"].value;
        var atpos = x.indexOf("@");
        var dotpos = x.lastIndexOf(".");
        if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length){
            $(this).parent().find(".alert.alert-danger").fadeIn(200);
        }
        else{
            $(this).parent().find(".alert.alert-success").fadeIn(200);
        }
    });
});