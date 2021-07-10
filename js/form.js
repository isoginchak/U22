  $(".submit").on('click', function () {
    console.log("くりっくされた");
    var storename = document.getElementById("storename").value;
    var addressnum = document.getElementById("addressnum").value;
    var prefecture = $('#prefecture').val();
    var address2 = document.getElementById("address2").value;
    var address3 = document.getElementById("address3").value;
    var eki = document.getElementById("station_input").value;
    var opentime = $('#opentime').val();
    var closetime = $('#closetime').val();
    var mail = document.getElementById("mail_address").value;
    var tel = document.getElementById("phone_number").value;
    var comment = document.getElementById("comment_text").value;
    var map_img = document.getElementById("map");
    var other_holi = document.getElementById("other_holiday").value;



    //店舗名取得
    if (storename == "") {
      console.log("店舗名記入なし");
    } else {
      console.log(storename);
      $(".s_storename").text(storename);
    }

    //郵便番号取得
    if (addressnum == "") {
      console.log("郵便番号記入なし");
    } else {
      var add1 = addressnum.slice(0, 3);
      var add2 = addressnum.slice(-4);
      $(".s_addressnum").text("〒" + add1 + "-" + add2);
    }

    //県取得
    if (prefecture == "") {
      console.log("県記入なし");
    } else {
      //市区町村取得
      if (address2 == "") {
        console.log("市区町村記入なし");
      } else {
        //番地取得
        if (address3 == "") {
          console.log("番地記入なし");
        } else {
          $(".s_address").text(prefecture + address2 + address3);
          var map = "https://maps.google.co.jp/maps?output=embed&q=";
          var maptext = prefecture + address2 + address3;
          map = map + maptext;
          console.log(map);
          map_img.getElementsByTagName("iframe")[0].src = map;
          console.log(map, map_img);
        }
      }
    }

    //駅取得
    if (eki == "") {
      console.log("駅記入なし");
    } else {
      $(".s_eki").text(eki);
    }

    //営業時間取得
    if (opentime == "" || closetime == "") {
      console.log("営業時間記入なし");
    } else {
      $(".s_time").text(opentime + "~" + closetime);
    }

    //定休日取得
    var holiday = " ";

    for (var i = 0; i < document.webmakeform.regular_day_off.length; i++) {

      // i番目のチェックボックスがチェックされているかを判定
      if (document.webmakeform.regular_day_off[i].checked) {
        holiday = holiday + document.webmakeform.regular_day_off[i].value + "・";
      }
    }
    var holiday1 = holiday.slice(1);
    var holiday2 = holiday1.slice(0, -1);
    if (holiday2 == "") {
      if (other_holi == "") {
        holiday2 = "なし";
        $(".s_holiday").text(holiday2);
      } else {
        $(".s_holiday").text(other_holi);
      }

    } else {
      if (other_holi == "") {
        $(".s_holiday").text(holiday2);
      } else {
        holiday2 = holiday2 + "," + other_holi;
        $(".s_holiday").text(holiday2);
      }
    }


    //メールアドレス取得
    if (mail == "") {
      console.log("メール記入なし");
    } else {
      $(".s_mail").text(mail);
    }

    //電話番号取得
    if (tel == "") {
      console.log("電話番号記入なし");
    } else {
      $(".s_tel").text(tel);
    }

    //コメント取得
    if (comment == "") {
      console.log("コメントなし");
    } else {
      $(".s_news").text(comment);
    }


    var menu_name = [];
    var menu_price = [];
    var menu_ex = [];
    var menu_cnt = $(".menu_title").length;
    var savemenu = $(".s_menu_ul").html();


    //メニューの取得
    for (var i = 0; i < menu_cnt; i++) {
      menu_name[i] = $('.menu_title').eq(i).val();
      menu_price[i] = $('.price').eq(i).val();
      menu_ex[i] = $('.menu_ex').eq(i).val();
    }

    //メニューの作成・追加
    for (var i = 0; i < menu_cnt; i++) {
      $(".s_menu_title").eq(0).html(menu_name[i]);
      $(".s_menu_price").eq(0).html(menu_price[i]);
      $(".s_menu_ex").eq(0).html(menu_ex[i]);
      var tmp = $(".s_menu_box").eq(0).clone();
      $(tmp).appendTo('.s_menu');
    }

    //メニューの削除
    $(".s_menu_box").eq(0).remove();


    //snshtml作成
    var sns_cnt = $(".sns_choice").length;
    var url_flag1 = 0;
    var url_flag2 = 0;
    var url_flag3 = 0;
    var url_flag4 = 0;

    for (var i = 0; i < sns_cnt; i++) {
      var tmp = $('.sns_choice').eq(i).val();
      var tmp_url = $('.sns_url').eq(i).val();
      console.log(tmp);
      if (tmp == "twitter") {
        $(".twitter_url").attr('href', tmp_url);
        url_flag1 = 1;

      } else if (tmp == "instagram") {
        $(".insta_url").attr('href', tmp_url);
        url_flag2 = 1;

      } else if (tmp == "facebook") {
        $(".facebook_url").attr('href', tmp_url);
        url_flag3 = 1;
      } else {
        $(".youtube_url").attr('href', tmp_url);
        url_flag4 = 1;
      }
    }

    if (url_flag1 == 0) {
      $(".twitter_url").remove();
    }

    if (url_flag2 == 0) {
      $(".insta_url").remove();
    }
    if (url_flag3 == 0) {
      $(".facebook_url").remove();
    }
    if (url_flag4 == 0) {
      $(".youtube_url").remove();
    }



    //html保存
    var savehtml;
    $(function () {
      savehtml = $(".sample1").html();
      console.log(savehtml)
    });


  })
