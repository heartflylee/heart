//登录按钮
function login() {
    console.log("登录");
    if ($("#phone").val() != "" && $("#psw").val() != "") {
        location.href = "index.html";
    }
    else {
        alert("", "请输入手机号或密码");
    }
    return false;
}

//下一步
function signUp() {
    console.log("注册");
    if ($("#agree").is(":checked")) {
        $('#signUp').modal('hide');
        $('#company').modal('show');
    } else {
        alert("", "请同意《云客法律声明及隐私权保护协议》");
    }
    return false;
}

//注册弹框填写公司 关闭
function companyClose() {
    $(".qixinbao").removeClass("active");
    $(".company-warp").hide();
    document.getElementById("f-company").reset();
    $('#company').modal('hide');
}

//注册弹框注册信息关闭
function signClose() {
    document.getElementById("f-signUp").reset();
    $('#signUp').modal('hide');
}

//完成注册
function company() {
    console.log("完成注册");
    $('#company').modal('hide');
    return false;
}

//获取验证码
function yzmbtn() {
    var yBtn = $(".yzm-btn");
    if (yBtn.hasClass("active")) {
        return false;
    }
    //	var yBtn = $(obj);
    yBtn.addClass("active");
    var count = 10;
    yBtn.text(count + "秒");

    var yTime = setInterval(function () {
        count--;
        yBtn.text(count + "秒");
        if (count <= 0) {
            clearInterval(yTime);
            yBtn.removeClass("active");
            yBtn.text("获取验证码");
        }
    }, 1000);

}

$(function () {
    //公司名称

    var companys = ['北京联云天上发展有限公司', '北京联云天下科技有公司', '中国北京联云天上发展有限公司', '东北北京联云天上发展有限公司', '公司名称1'];
    var companyArray = $.map(companys, function (company) {
        return {value: company};
    });

    $('#company-input').autocomplete({
        lookup: companyArray,
        minChars: 2,
        onSelect: function (suggestion) {
            console.log(suggestion);
            $(".qixinbao").addClass("active");
        }

    });
    $(".qixinbao").click(function () {
        if ($(this).hasClass("active")) {
            $("#business").modal("show");
        }
    })

    // $(".company-input").bind("input propertychange", function() {
    // 	$(".company-warp").show();
    // 	$(document).one("click", function() {
    // 		$(".company-warp").hide();
    // 	});
    // });
    // $(".company-li").click(function() {
    // 	$(".company-input").val($(this).text());
    // 	$(".qixinbao").addClass("active");
    // 	$(".company-warp").hide();
    // });
    // $(".company-warp").click(function(event){
    // 	event.stopPropagation();
    // })

});

//			var handlerPopup = function (captchaObj) {
//
//      // 成功的回调
//      captchaObj.onSuccess(function () {
//          var validate = captchaObj.getValidate();
//          $.ajax({
//              url: "/pc-geetest/validate", // 进行二次验证
//              type: "post",
//              dataType: "json",
//              data: {
//                  username: $('#username1').val(),
//                  password: $('#password1').val(),
//                  geetest_challenge: validate.geetest_challenge,
//                  geetest_validate: validate.geetest_validate,
//                  geetest_seccode: validate.geetest_seccode
//              },
//              success: function (data) {
//                  if (data && (data.status === "success")) {
//                      $(document.body).html('<h1>登录成功</h1>');
//                  } else {
//                      $(document.body).html('<h1>登录失败</h1>');
//                  }
//              }
//          });
//      });
//
//      $("#popup-submit").click(function () {
//          captchaObj.show();
//      });
//
//      // 将验证码加到id为captcha的元素里
//      captchaObj.appendTo("#popup-captcha");
//      // 更多接口参考：http://www.geetest.com/install/sections/idx-client-sdk.html
//  };
//
//  // 验证开始需要向网站主后台获取id，challenge，success（是否启用failback）
//  $.ajax({
//      url: "/pc-geetest/register?t=" + (new Date()).getTime(), // 加随机数防止缓存
//      type: "get",
//      dataType: "json",
//      success: function (data) {
//          // 使用initGeetest接口
//          // 参数1：配置参数
//          // 参数2：回调，回调的第一个参数验证码对象，之后可以使用它做appendTo之类的事件
//          initGeetest({
//              gt: data.gt,
//              challenge: data.challenge,
//              product: "popup", // 产品形式，包括：float，embed，popup。注意只对PC版验证码有效
//              offline: !data.success // 表示用户后台检测极验服务器是否宕机，一般不需要关注
//              // 更多配置参数请参见：http://www.geetest.com/install/sections/idx-client-sdk.html#config
//          }, handlerPopup);
//      }
//  });