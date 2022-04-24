$(function () {
  let divWidth = $("#roomslider").width();
  let imgCount = $("#room_pic li").length;
  // alert(imgCount)

  for (let i = 0; i < imgCount; i++) {
    $("#roomslider").append(`<li></li>`);
  }

  $("#room_pic").width(divWidth * imgCount); // ul 的寬度
  $("#room_pic li").width(divWidth); // li 的寬度

  let index;
  $("#roombutton li").click(function () {
    index = $(this).index();

    $("#room_pic").animate({
      left: divWidth * index * -1,
    });
  });
});
