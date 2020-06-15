jQuery(document).ready(function ($) {

    var $container = $('#container');
    $container.isotope({
        filter: '*',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false,
        }
    });

    $('#pf-filter a').click(function () {
        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false,
            }
        });
        return false;
    });

    var $optionSets = $('#pf-filter'),
        $optionLinks = $optionSets.find('a');

    $optionLinks.click(function () {
        var $this = $(this);
        // don't proceed if already selected
        if ($this.hasClass('dq')) {
            return false;
        }
        var $optionSet = $this.parents('#pf-filter');
        $optionSet.find('.dq').removeClass('dq');
        $this.addClass('dq');
    });

    var $container2 = $('#container2');
    $container2.isotope({
        filter: 'll1',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false,
        }
    });

    $('#pf-filter2 a').click(function () {
        var selector2 = $(this).attr('data-filter');
        $container2.isotope({
            filter: selector2,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false,
            }
        });
        return false;
    });

    var $optionSets2 = $('#pf-filter2'),
        $optionLinks2 = $optionSets2.find('a');

    $optionLinks2.click(function () {
        var $this2 = $(this);
        // don't proceed if already selected
        if ($this2.hasClass('dq')) {
            return false;
        }
        var $optionSet2 = $this2.parents('#pf-filter2');
        $optionSet2.find('.dq').removeClass('dq');
        $this2.addClass('dq');
    });


});	