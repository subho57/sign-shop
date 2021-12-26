/*------------------------------------------------------------------------------*/
/*  Home_Page Slider
/*------------------------------------------------------------------------------*/

var revapi2,

  tpj;
  
  jQuery(function() {
    tpj = jQuery;
    if(tpj("#rev_slider_1_1").revolution == undefined){
      revslider_showDoubleJqueryError("#rev_slider_1_1");
    }else{
        revapi2 = tpj("#rev_slider_1_1").show().revolution({
        sliderType:"standard",
        visibilityLevels:"1240,1240,778,480",
        gridwidth:"1240,1240,778,480",
        gridheight:"700,700,450,350",
        spinner:"spinner0",
        perspective:600,
        perspectiveType:"local",
        editorheight:"700,768,450,350",
        responsiveLevels:"1240,1240,778,480",
        progressBar:{disableProgressBar:true},
        navigation: {
          onHoverStop:false,
          bullets: {
            enable:true,
            tmp:"<span class=\"tp-bullet-image\"></span><span class=\"tp-bullet-imageoverlay\"></span><span class=\"tp-bullet-title\">{{title}}</span>",
            style:"zeus",
            hide_onmobile:true,
            hide_under:778,
            hide_onleave:true,
            space:7
          }
        },
        fallbacks: {
          allowHTML5AutoPlayOnAndroid:true
        },
      });
    }
    
  });



  /* (homepage -2 )*/
  jQuery(function() {
    tpj = jQuery;

    if(tpj("#rev_slider_2_1").revolution == undefined){
        revslider_showDoubleJqueryError("#rev_slider_2_1");

      }else{

        revapi2 = tpj("#rev_slider_2_1").show().revolution({
        sliderType:"standard",
        visibilityLevels:"1240,1240,778,480",
        gridwidth:"1240,1240,778,480",
        gridheight:"730,730,450,350",
        spinner:"spinner0",
        perspective:600,
        perspectiveType:"local",
        editorheight:"730,768,450,350",
        responsiveLevels:"1240,1240,778,480",
        progressBar:{disableProgressBar:true},
        navigation: {
          onHoverStop:false,
          bullets: {
            enable:true,
            tmp:"",
            style:"gyges",
            hide_onmobile:true,
            hide_under:778,
            hide_onleave:true,
            h_align:"right",
            v_align:"center",
            h_offset:35,
            v_offset:0,
            direction:"vertical"
          }
        },
        fallbacks: {
          allowHTML5AutoPlayOnAndroid:true
        },
      });
    }
  });



  /* (homepage -3 )*/
  jQuery(function() {
    tpj = jQuery;

    if(tpj("#rev_slider_3_1").revolution == undefined){
        revslider_showDoubleJqueryError("#rev_slider_3_1");
        
      }else{

        revapi2 = tpj("#rev_slider_3_1").show().revolution({
        sliderType:"standard",
        visibilityLevels:"1240,1240,778,480",
        gridwidth:"1240,1240,778,480",
        gridheight:"700,700,450,350",
        spinner:"spinner0",
        perspective:600,
        perspectiveType:"local",
        editorheight:"700,768,450,350",
        responsiveLevels:"1240,1240,778,480",
        progressBar:{disableProgressBar:true},
        navigation: {
          onHoverStop:false,
          arrows: {
            enable:true,
            style:"uranus",
            hide_onmobile:true,
            hide_under:778,
            hide_onleave:true,
            left: {
              h_offset:30
            },
            right: {
              h_offset:30
            }
          }
        },
        fallbacks: {
          allowHTML5AutoPlayOnAndroid:true
        },
      });
    }
  });


  /* (homepage -3 )*/
  jQuery(function() {
    tpj = jQuery;

    if(tpj("#rev_slider_4_1").revolution == undefined){
        revslider_showDoubleJqueryError("#rev_slider_4_1");
        
      }else{

        revapi2 = tpj("#rev_slider_4_1").show().revolution({
        sliderType:"standard",
        visibilityLevels:"1240,1200,778,480",
        gridwidth:"1240,1200,778,480",
        gridheight:"830,700,450,350",
        spinner:"spinner0",
        perspective:600,
        perspectiveType:"local",
        editorheight:"830,768,450,350",
        responsiveLevels:"1240,1200,778,480",
        progressBar:{disableProgressBar:true},
        navigation: {
          onHoverStop:false,
          arrows: {
            enable:true,
            style:"uranus",
            hide_onmobile:true,
            hide_under:778,
            hide_onleave:true,
            left: {
              h_offset:30
            },
            right: {
              h_offset:30
            }
          }
        },
        fallbacks: {
          allowHTML5AutoPlayOnAndroid:true
        },
      });
    }
  });