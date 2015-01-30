$(document).ready(function(){
    var $banner = $('#banner'),
        $intro = $('#intro'),
        $projects = $('.projects'),
        $aboutUs = $('.aboutMe'),
        $contactUs = $('.contactUs'),
        $details = $('#details'),
        $mask = $('.mask'),
        $triangle = $('.projects .triangle'),
        $pic = $('#pics'),
        $resume = $(".Resume"),
        $resumeWrapper = $(".Resume .wrapper");
        $resumeWrapper.load('resume.html');
    var tirangleLocations = ["0px","256px","512px","768px"];
    var firstTime = true;

    /*设置菜单点击事件*/
    $('#banner .menu-item#projects').on('click',function(){
        $aboutUs.hide();
        $resume.hide();
        shrinkBanner();
        $projects.show();
    });
    $('#banner .menu-item#about').on('click',function(){
        $projects.hide();
        $resume.hide();
        expandBanner();
        $aboutUs.show();
    });
        $('#banner .menu-item#resume').on('click',function(){
        $projects.hide();
        $aboutUs.hide();
        shrinkBanner();
        $resume.show();
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
                    if (val.duty.length > 1 && (val.duty[0] instanceof Object)){
                        var content = "<ol><li>";
                        var list = [];
                        for(var sub in val.duty){
                            var subContent = val.duty[sub]['subtitle'];
                            subContent += '<ul><li>';
                            subContent += val.duty[sub].details.join('</li><li>');
                            subContent += '</li></ul>';
                            list.push(subContent);
                        }
                        content += list.join('</li><li>');
                        content += '</li></ol>';
                        $details.find('.details .item-description.duty').html(content);
                    } else {
                        $details.find('.details .item-description.duty').html('<ul><li>' + val.duty.join('</li><li>') + '</li></ul>');
                    }
                });
                $details.find('.positions').append($newPosition);
            });
            $details.find('.position:first-child').trigger('click');
            /*滚动*/
            var scroll_offset = $details.offset();  
            $("body,html").animate({scrollTop:scroll_offset.top - 327},300);
        }
    }

    function shrinkBanner(){
        $banner.animate({'height':'120px'},500, function(){
            $intro.hide();
        });
    }
    function expandBanner(){
        $intro.show();
        $banner.animate({'height':'452px'},700, function(){
            $intro.show();
        });
    }
});