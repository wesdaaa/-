//选择卡框切换
$(function(){
    $(".ss-menu ul li").click(function(){//获取被按下的li
        $(this).addClass("on").siblings().removeClass("on"); //切换选中的按钮高亮状态
        var index=$(this).index(); //获取被按下按钮的索引值，需要注意index是从0开始的
        $(".ss-box > div").eq(index).show().siblings().hide(); //在按钮选中时在下面显示相应的内容，同时隐藏不需要的框架内容
    });//搜索切换

    $(".right-2 > ul li").mouseover(function(){//获取被按下的li
        $(this).addClass("on").siblings().removeClass("on"); //切换选中的按钮高亮状态
        var index=$(this).index(); //获取被按下按钮的索引值，需要注意index是从0开始的
        $(".right-box > div").eq(index).show().siblings().hide(); //在按钮选中时在下面显示相应的内容，同时隐藏不需要的框架内容
    });//登录下公告切换

    function hmy(){
		var lxj =$("#picBox-2 .dot .current").index()+1;
        $("#tianmao i").text(lxj);
	}
	setInterval(hmy,500);//广告轮播联动
});

//广告轮播
    myFocus.set({
    	id:'picBox',
    	pattern:'mF_kdui',
    	loadIMGTimeout:"0"
    });
    myFocus.set({
    	id:'picBox-2',
    	pattern:'mF_kdui',
    	loadIMGTimeout:"0"
    });  

//滚动广告
$(function(){
	function lxj(){
		var oldTop = parseInt($(".box-2 .right .right-a .right-gun > div").css("marginTop"));
		if (oldTop>-120) {
            var newTop = (oldTop-=60)+"px";
			$(".box-2 .right .right-a .right-gun > div").animate({marginTop:newTop});
		} else{
			$(".box-2 .right .right-a .right-gun > div").animate({marginTop:"0"});
		}
	};
	var obj=setInterval(lxj, 5000);
	$(".box-2 .right .right-a .right-gun > div").hover(function(){
    clearInterval(obj);
    },
    function(){
    obj=setInterval(lxj, 5000);
    });
});

//换一批
$(function(){
	var index = $(".box-2 .right .right-b-z div").index();
    $(".box-2 .right .right-b span").click(function(){
    	if (index<2) {
    		index+=1;
    		$(".box-2 .right .right-b-z div").eq(index).show().siblings().hide();
    	}else{
    		index=0;
    		$(".box-2 .right .right-b-z div").eq(index).show().siblings().hide();
    	}
    });
});

$(function(){
    $(".ding ul li").click(function(){
    	var xj = $(".ding ul li:first-child").html();
    	var my = $(this).html();
    	$(".ding ul li:first-child").html(my);
    	$(this).html(xj);
    	if ($(".ding ul li:first-child").html()==="宝贝") {
    		$("#11").show().siblings().hide();
    		$(".ding .tab-l").css("background","#f40");
    		$(".ding button").css("background","#f40");
    	} else if($(".ding ul li:first-child").html()==="店铺"){
    		$("#22").show().siblings().hide();
    		$(".ding .tab-l").css("background","#f40");
    		$(".ding button").css("background","#f40");
    	} else if($(".ding ul li:first-child").html()==="天猫"){
    		$("#33").show().siblings().hide();
    		$(".ding .tab-l").css("background","#c40000");
    		$(".ding button").css("background","#c40000");
    	}
    });
    function go (){
    	var scrollTop = window.pageYOffset|| document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollTop<=100) {
    	    $(".ding").css("display","none");
        } else if (scrollTop>100){
    	    $(".ding").css("display","block");
        }
    };
    setInterval(go,50);//绝对定位顶部切换
});


$(window).scroll(function(){
    	        var top = window.pageYOffset|| document.documentElement.scrollTop || document.body.scrollTop;
                //var top = $(document).scrollTop();
                var menu = $("#menu");
                var items = $("body").find(".itema");
                var currentId = "";//当前所在楼层（item）#id
                items.each(function(){
                	var m = $(this);
                    var itemTop = m.offset().top;
                    if(top+200>itemTop){
                        currentId = "#" + m.attr("id");
                    }else{
                    	return false;
                    };
                    //console.log(itemTop);
                });
                //给相应的楼层a 设置current，取消其他链接的current
                var currentLink = menu.find(".current");
                if (currentId) {
                	currentLink.removeClass("current");
                	menu.find("[href='" + currentId +"']").addClass("current");
                };
                if (top>440) {
                	$("#menu").css({
                		"position":"fixed",
                		"top":"49px",
                	});
                } else if(top<=440) {
                        $("#menu").css({
                		"position":"absolute",
                		"top":"520px",
                	});
                };
                if (top>700) {
                	$("#fanhui").css("display","block");
                } else if (top<700) {
                	$("#fanhui").css("display","none");
                }
	        });//右侧固定定位

$(function(){
    $(".gb span").click(function(){
    	$(".gb").css("display","none")
    });
});