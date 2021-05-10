class getAverage extends Paged.Handler {
    constructor(chunker, polisher, caller) {
        super(chunker, polisher, caller);
    }

    afterPreview(pages) {


        var fac = new FastAverageColor();


        const imageWrappers = document.querySelectorAll('.pagedjs_chat_page .pagedjs_sheet');

        imageWrappers.forEach(imageWrapper => {

            fac.getColorAsync(imageWrapper.querySelector('img'))
                .then(color => {
                    imageWrapper.style.backgroundColor = color.rgba;
                    imageWrapper.style.color = color.isDark ? 'rgba(255,255,255,.8)' : 'rgba(0,0,0,.5)';
                    // imageWrapper.style.backgroundImage = color.isDark ? 'url(assets/whatsapp_bg_pix_inv.png)' : 'url(assets/whatsapp_bg_pix.png)';
                })
                .catch(e => {
                    console.log(e);
                });


        });

        const imageWrappers2 = document.querySelectorAll('.pagedjs_media_page .pagedjs_sheet');

        imageWrappers2.forEach(imageWrapper2 => {

            fac.getColorAsync(imageWrapper2.querySelector('img'))
                .then(color => {
                    imageWrapper2.style.backgroundColor = color.rgba;
                    imageWrapper2.style.color = color.isDark ? 'rgba(255,255,255,.8)' : 'rgba(0,0,0,.5)';
                    imageWrapper.style.backgroundImage = color.isDark ? 'none' : 'none';
                })
                .catch(e => {
                    console.log(e);
                });


        });



    }
}

// and we register the handler

Paged.registerHandlers(getAverage);