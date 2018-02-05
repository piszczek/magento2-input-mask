define([], function () {
    "use strict";
    return function (AbstractInput) {
        return AbstractInput.extend({
            initialize: function () {
                //call parent function
                this._super();
                //load only if inputMask is specified
                if (this.inputMask) {
                    require([
                        'Magento_Ui/js/lib/view/utils/async',
                        'Piszczek_InputMask/js/vendor/imask/inputmask.min'
                    ], this.inputMaskHandle.bind(this));
                }
                
                return this;
            },
            inputMaskHandle: function ($) {
                //wait for element rendering
                $.async(
                    'input',
                    this,
                    this.afterElemenRender.bind(this)
                );
            },
            afterElemenRender: function (input) {
                new IMask(input, this.inputMask);
            }
        });
    };
});
