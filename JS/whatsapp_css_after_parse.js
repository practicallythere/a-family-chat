class addCSS extends Paged.Handler {
    constructor(chunker, polisher, caller) {
        super(chunker, polisher, caller);
    }

    afterPreview(pages) {

            var head  = document.getElementsByTagName('head')[0];
            var link  = document.createElement('link');
            link.rel  = 'stylesheet';
            link.type = 'text/css';
            link.href = 'http://localhost:8888/whatsapp_html/css/whatsapp_after_parse.css';
            link.media = 'all';
            head.appendChild(link);
    }
}  

// and we register the handler

Paged.registerHandlers(addCSS);
