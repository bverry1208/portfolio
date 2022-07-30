<script>

var s = skrollr.init({
    smoothScrolling: true
  });

  function scroll(){
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    document.querySelector(".scrollfixed").innerHTML = parseInt(scrollTop);
    requestAnimationFrame(scroll);
  }
  scroll();

</script>