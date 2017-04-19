(function() {

    function Toggler(selector) {

        if( !(this instanceof Toggler) ) {
            return new Toggler(selector);
        }

        this.elem = document.querySelector(selector);

    }

    Toggler.prototype.getElem = function() {

        return this.elem;

    };

    Toggler.prototype.show = function() {

        this.elem.style.display = "";

    };

    Toggler.prototype.hide = function() {

        this.elem.style.display = "none";

    };

    var elem = Toggler("#section");
    var button = document.querySelector("#button");

    elem.elem;

    elem.hide();

    button.addEventListener("click", function() {

        if(elem.getElem().style.display == "none") {
            elem.show();
        } else {
            elem.hide();
        }

    }, false);

})();