$(function(){
    var page = -1;
	var len = 4;
	var stop = false;

	
	function slide(){
		if(!stop){
			page++;
			if(page == len){
				page = 0;
				$(".silde").animate({"left":"0"},300);
			}
			$(".silde").animate({"left":"-"+page*666+"px"},300);
			$(".silde-page li").removeClass("on");
			$(".silde-page li").eq(page).addClass("on");
		}
		setTimeout(slide,3000);
	}
	slide();
	
	$(".focus").mouseover(function(){
		stop = true;
	}).mouseout(function(){
		stop = false;
	});
	
	$(".silde-page li").mouseover(function(){
		page = $(this).index();
		$(".silde").stop(true,true).animate({"left":"-"+page*666+"px"},300);
		$(".silde-page li").removeClass("on");
		$(".silde-page li").eq(page).addClass("on");
    });
    
    $(window).scroll(function(){
		if($(this).scrollTop()>100){
			$(".ad").hide();
			$(".rightMenu").animate({"bottom":"50px"},300);
		}else{
			$(".ad").show();
			$(".rightMenu").stop(true,true).css("bottom","-150px");
		}
	});
	rightMenu($(".menu-edu"),"700","120");
	rightMenu($(".menu-wx"),"186","96");
	$(".rightMenuHover").hover(
		function(){
			if(rightMenuTime) clearTimeout(rightMenuTime);
			$(this).show();
		},
		function(){
			$(this).hide();
		}
	);
	$(".backTop").click(function(){
		$("html,body").animate({"scrollTop":"0"},500);
	});

var rightMenuTime=null;
function rightMenu(obj,w,h){
        obj.hover(
            function(){
                if(rightMenuTime) clearTimeout(rightMenuTime);
                var index = $(".rightMenuBtn").index($(this));
                $(".rightMenuHover").hide();
                $(".rightMenuHover").eq(index).css({"width":0,"height":0,"opacity":0,"display":"block"}).stop(true,true).delay(50).animate({"width":w+"px","height":h+"px","opacity":1},300,function(){
                    $(".rightMenuHover").eq(index).attr("style","display:block")
                });
            },
            function(){
                rightMenuTime = setTimeout(function(){
                    $(".rightMenuHover").stop(true,true).hide();
                },100);
            }
        )
   }
})