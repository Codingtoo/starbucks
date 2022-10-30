// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
//<div id="player"></div>
function onYouTubeIframeAPIReady() {
  new YT.Player('player', {
    videoId: 'An6LvWQuj_8',//소리같은것을 출력하지않고 화면만 출력하기위해 ID를 가져온다
    playerVars:{
        autoplay:true,
        loop:true,
        platlist:'An6LvWQuj_8'//loop가 true인경우에는 다시 재생할 유튜브 ID가 필요하다
    },//영상을 제어하기위한 여러가지 변수
    events:{
        onReady:function(event){
            event.target.mute()//음소거
        }
    }
  });
}