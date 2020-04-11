/* eslint-disable */

import $ from 'jquery'

$(document).ready(function () {

    kullanici();
    setInterval(function () {
        zaman();
        kullanici();

    }, 5000);
    setInterval(function () {

        mesaj_gor();
    }, 1500);

    function kullanici() {

        $.ajax({

            url: "inc/ajax.php?action=kullanici",

            method: "POST",

            success: function (data) {

                $('#detay').html(data);
            }
        })
    }

    function zaman() {

        $.ajax({

            url: "inc/ajax.php?action=zaman",

            success: function () {
            }
        })
    }
    function scroll() {

        var messageBody = document.querySelector('.messages');
        
        //messageBody.scrollTop = messageBody.scrollHeight - messageBody.clientHeight;
    }

    function izle_mesaj(k_id, isim) {

        var yeni =

            "                <div class=\"messanger\">\n" +

            "                    <div class=\"messages scrollbar scrollbar-info\"'  id='body" + k_id + "'>\n" +

            "                    </div>\n" +

            "                    <div class=\"sender\">\n" +

            "                            <input type=\"text\" class='chat_mesaj' id='mesaj" + k_id + "' maxlength='50' placeholder=\"Send Message\">\n" +

            "                            <a class=\"chat_send w-25\" href='#' id='gonder" + k_id + "' name=" + k_id + "><i class=\"fas fa-paper-plane etiketgonder\"></i>\n" +

            "                            </a>\n" +

            "                    </div>\n" +

            "                </div>\n";

        $('.mesaj_kutusu').html(yeni);

        $('#yazibaslik').hide();

        $('.select_admin').show();

        var input = document.getElementById('mesaj' + k_id);

        input.addEventListener("keyup", function (event) {
            if (event.keyCode === 13) {
                
                event.preventDefault();
                document.getElementById('gonder' + k_id).click();
            }

        });
    }
    function mesaj_gor() {

        scroll();

        $.ajax({

            url: "inc/ajax.php?action=mesaj_gor",

            method: "POST",

            data: {u_id: sessionStorage.getItem("gizli")},

            success: function (data) {
                $('#body' + sessionStorage.getItem("gizli")).html(data)
            }

        })

    }

    $(document).on('click', '.start_chat', function () {

        var idname = $('.idname').val();
        var idmail = $('.idmail').val();
        var kullanici_id = $(this).attr('id');
        var kullanici_isim = $(this).attr('name');
        sessionStorage.setItem("gizli", kullanici_id);

        if (!idname || !idmail) {

            $('.uyari').slideDown('slow');
            setTimeout(function () {
                $('.uyari').slideUp('slow')
            }, 3000);
        } else {

            $.ajax({
                url: "inc/login.php",
                method: "POST",
                data: {isim: idname, eposta: idmail},
                success: function () {

                    $('#livechat').slideUp('fast');
                    $('#livechat').slideDown('fast');
                    $('#admin_isim' + kullanici_id).css('color', 'rgb(192,192,192)');

                    izle_mesaj(kullanici_id, kullanici_isim);

                }
            });
     }

    });

    $(document).on('click', '.admin_sec', function () {
        var kullanici_id = $(this).attr('id');
        var kullanici_isim = $(this).attr('name');
        sessionStorage.setItem("gizli", kullanici_id);
        izle_mesaj(kullanici_id, kullanici_isim);

        $('.admin_all').css('color', 'black');
        $('#admin_isim' + kullanici_id).css('color', '#646464');
    });

    $(document).on('click', '.chat_send', function () {

        var kullanici_id2 = $(this).attr('name');
        var mesaj = $('#mesaj' + kullanici_id2).val();

        $.ajax({

            url: "inc/ajax.php?action=mesaj_ekle",
            method: "POST",
            data: {u_id: kullanici_id2, mesaj: mesaj},
            success: function (data) {
                $('#mesaj' + kullanici_id2).val("");
                $('#body' + kullanici_id2).html(data)

            }
        });
        scroll();

    });

    $(document).on('keyup', '.chat_mesaj', function () {

        var tip = 1;

        $.ajax({

            url: "inc/ajax.php?action=yazi_kontrol",
            method: "GET",
            data: {tip: tip},
            success: function (result) {
                $('.etiketgonder').css("color", "#0000fd");

            }

        })
    });

    $(document).on('blur', '.chat_mesaj', function () {

        var tip = 0;
        $.ajax({

            url: "inc/ajax.php?action=yazi_kontrol",
            method: "GET",
            data: {tip: tip},
            success: function (result) {
                $('.etiketgonder').css("color", "#a7a7a7");
            }
        });
    });

    $(document).on('keypress', function (e) {
        if (e.which === 13) {
            $('.start_chat').click();
        }
    });

    $('#icon-popup').click(function () {
        
        $('#livechat').slideDown('fast');
        $('#icon-popup').slideUp('Fast');
    });

    $('#minimizeicon').click(function () {

        $('#livechat').slideUp('fast');
        $('#icon-popup').slideDown('slow');
    });

   $('.tooltipitem').tooltip();
});



