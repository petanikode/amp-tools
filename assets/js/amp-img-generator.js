var app = new Vue({
  el: '#app',
  data: {
    width: '',
    height: '',
    layout: 'responsive',
    alt: '',
    src: ''
  },
  methods: {
    getImageData: function () {
        var img = new Image();
        img.onload = function(){
			// clear ukuran
			app.width = '';
			app.height = '';
			
            // ambil ukuran gambar
            app.width = this.width;
            app.height = this.height;
        };
        img.src = this.src;
        console.log(this.src);

        var index = this.src.lastIndexOf("/") + 1;
        var filename = this.src.substr(index);
        this.alt = unescape(filename);
        console.log(filename);
    }
  }
})
