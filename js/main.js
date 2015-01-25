$(document).ready(function(){
    var $projects = $('.projects'),
        $aboutUs = $('.aboutMe'),
        $contactUs = $('.contactUs'),
        $details = $('#details'),
        $mask = $('.mask'),
        $triangle = $('.projects .triangle'),
        $pic = $('#pics');
    var tirangleLocations = ["0px","256px","512px","768px"];
    var firstTime = true;

    /*设置菜单点击事件*/
    $('#banner .menu-item#projects').on('click',function(){
        $aboutUs.hide();
        $projects.show(0,function(){
            $("body,html").animate({scrollTop:$projects.offset().top - 50},300);
        });
    });
    $('#banner .menu-item#about').on('click',function(){
        $projects.hide();
        $aboutUs.show(0,function(){
            $("body,html").animate({scrollTop:$aboutUs.offset().top - 100},300);
        });
    });
    $('#banner .menu-item#contact').on('click',function(){
        $mask.show();
        $contactUs.show();
    });
    $('#banner .menu-item').hover(function(){
        $(this).toggleClass("hover");
    });
    $('.contactUs #close').on('click',function(){
        $mask.hide();
        $contactUs.hide();
    });

    /* 设置职位点击事件 */
    $('.projects #positions #jobs .position .description .view').on('click',function(e){
        if(firstTime){
            $('.projects #positions').css("padding-bottom","0px");
            $triangle.show();
            $details.show();
            firstTime = false;
        }
        switch(e.target.id){
            case "engineer":
                $triangle.css("left",tirangleLocations[0]);
                renderPositions(positions['engineer']);
                break;
            case "designer":
                $triangle.css("left",tirangleLocations[1]);
                renderPositions(positions['designer']);
                break;
            case "operator":
                $triangle.css("left",tirangleLocations[2]);
                renderPositions(positions['operator']);
                break;
            case "administrator":
                $triangle.css("left",tirangleLocations[3]);
                renderPositions(positions['administrator']);
                break;
        }
    });

    renderPositions(positions['engineer']);

    /* 设置六边形点击事件 */
    $('.hexagon').on('click',function(e){
        var scroll_offset = $('#pics').offset();  
        $('body,html').animate({scrollTop:scroll_offset.top},500);
    });
    
    /* 
     * 渲染职位详情 
     * 职位介绍请编辑data.js 
     */
    function renderPositions(data){
        if(!data){
            return false;
        }
        if(data.profession){
            $details.find('.title').html(data.profession);
        }
        if(data.menu && data.menu instanceof Array){
            $details.find('.positions').html("");
            $.each(data.menu,function(index,val){
                var $newPosition = $('<div class="position">' + val.tag +'</div>');
                $newPosition.on('click',function(e){
                    var p = $details.find('.position');
                    p.removeClass("active");
                    $(e.target).addClass("active");
                    $details.find('.details .name').html(val.name);
                    $details.find('.details .item-description.duty').html(val.duty.join('<br/>'));
                    if(val.priority){
                        $details.find('.details .item-description.priority').html(val.priority.join('<br/>'));
                        $('.projects #details .details .priority').show();
                    }else{
                        $('.projects #details .details .priority').hide();
                    }
                    $details.find('.details .item-description.qulification').html(val.qulification.join('<br/>'));
                    $details.find('.details .apply a').attr("href",val.url);
                });
                $details.find('.positions').append($newPosition);
            });
            $details.find('.position:first-child').trigger('click');
            /*滚动*/
            var scroll_offset = $details.offset();  
            $("body,html").animate({scrollTop:scroll_offset.top - 327},300);
        }
    }
});