$(function() {
    $('#yes').click(function(event) {
        modal('我爱你。(^_^)', function() {
            $('.page_one').addClass('hide');
            $('.page_two').removeClass('hide');
            // typeWrite();
            fireworks();

        });
    });
    $('#no').click(function(event) {
        modal('明人不说暗话！', A);
    });
});

function A() {
    modal('我爱你！', B);
}

function B() {
    modal('不能陪你跨年我很内疚呜呜', C);
}

function C() {
    modal('你可不能生气', D);
}

function D() {
    modal('我非你不可呀', E);
}

function E() {
    modal('我要和你结婚', F);
}

function F() {
    modal('不惹老婆生气', G);
}

function G() {
    modal('家里你最大', H);
}

function H() {
    modal('你来做饭', I);
}

function I() {
    modal('我不挑食', J)
}

function J() {
    modal('我们去民政局登记吧', function() {
        fireworks();
    });
}

function fireworks() {
    $('.page_one').addClass('hide');
    initAnimate();
}

function modal(content, callback) {
    var tpl = '<div class="container">'+
        '<div class="mask"></div>'+
        '<div class="modal">'+
        '<p>'+ content +'</p>'+
        '<button type="button" id="confirm" class="confirm">确定</button>'+
        '</div>'+
        '</div>';
    $('body').append(tpl);
    $(document).on('click', '.confirm', function() {
        $('.container').remove();
        callback();
    });
}
