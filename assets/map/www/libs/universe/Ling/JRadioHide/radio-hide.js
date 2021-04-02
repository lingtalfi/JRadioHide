/**
 * RadioHide
 * ===========
 * 2021-04-02
 *
 *
 * This depends on jquery.
 *
 */
if ('undefined' === typeof RadioHide) {
    (function () {
        var $ = jQuery;



        window.RadioHide = {
            init: function (options) {

                options = $.extend({
                    context: null,
                    openPane: null,
                }, options);


                var jContext = options.context;
                var openPane = options.openPane;


                if (null === jContext) {
                    jContext = $('body');
                }


                var jPanes = jContext.find('.radio-hide-pane');

                if (jPanes.length > 0) {


                    //----------------------------------------
                    // HIDE ALL PANES but the one defined in the conf
                    //----------------------------------------

                    jPanes.each(function(){
                        if (openPane === $(this).attr('data-id')) {
                            $(this).show();
                        } else {
                            $(this).hide();
                        }
                    });



                    //----------------------------------------
                    // LISTENING
                    //----------------------------------------
                    jContext.on('click.radioHide', ".radio-hide", function () {
                        var jTarget = $(this);
                        var targetPane = jTarget.attr("data-target");
                        var jTargetPane = jContext.find('.radio-hide-pane[data-id="' + targetPane + '"]');
                        if (jTargetPane.length) {
                            jPanes.each(function () {
                                if (targetPane === $(this).attr('data-id')) {
                                    $(this).show();
                                } else {
                                    $(this).hide();
                                }
                            });
                        } else {
                            throw new Error("Target pane not found with id: " + targetPane);
                        }
                    });
                } else {
                    throw new Error("No panes found in the the given context (this function then becomes useless). Aborting.");
                }
            },
        };

    })();
}