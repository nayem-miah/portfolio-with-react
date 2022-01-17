;
(function($) {
    $.fn.animeRateBar = function(options) {

        //real settings
        var settings = $.extend({}, $.fn.animeRateBar.defaults, options);

        return this.each(function(index, item) {
            var oSettings = $.extend({}, settings, $(this).data());

            oSettings.thisElement = $(this);
            oSettings.itemIndex = index;
            indefaults.settings = oSettings; //set indefaults

            loadUpdate();

            oSettings.loadInstance ? loadInstance() : null;

            return loadProgress();

        })

    }

    function loadUpdate() {
        var settings = indefaults.settings;

        //default settings
        var item = settings.thisElement;
        var runtime = settings.runtime;
        var delay = settings.delay;
        var addText = settings.addText;
        var breakPoints = settings.breakPoints;
        var breakClasses = settings.classes;
        var breakColors = settings.colors;
        var animAttrval = settings.animVal;
        var splitBar = settings.splitBar;
        var rotation = settings.rotation;
        var flatRate = settings.flatRate || true;
        var addPercent = settings.addPercent;
        var addUnit = settings.addUnit;
        var addLabel = settings.addLabel;
        var mirror = settings.mirror;
        var angle = settings.angle;

        indefaults.mirror = mirror;
        indefaults.angle = angle;
        indefaults.breakPoints = breakPoints;
        indefaults.breakColors = breakColors;
        indefaults.breakClasses = breakClasses;
        indefaults.breakClasses = breakClasses;

        //data-bkpoints = [], data-bkcolors = [] data-bkclass = []
        //calculate and update indefault.settings.(attr)
        var dataFunc = item.find("[data-func]");

        var rateBar = item.find("[data-func='progressbar']");
        var rateData = item.find("[data-func='prodata']");
        var dataToggle = item.find("[data-toggle]");
        var rateBox = item.find("[data-func='protext']");
        indefaults.settings.rateData = rateData;
        indefaults.settings.rateBar = rateBar;
        indefaults.settings.rateBox = rateBox;

        var toggleAttr = (dataToggle.data('toggle') == "") ? "class" : dataToggle.data('toggle');
        indefaults.settings.toggleAttr = settings.toggleAttr;

        var tagName = rateBar.prop("tagName").toLowerCase();
        var isPathTag = (tagName == 'path') ? true : false;
        indefaults.settings.isPathTag = isPathTag;

        //declare vars
        var startPoint, endPoint, markPoint;


        //get data marker
        if (rateData.attr("data-mark")) {
            markPoint = rateData.data('mark');
            markPoint = (markPoint == "" || markPoint == undefined) ? false : markPoint;
        } else {
            markPoint = false;
        }
        indefaults.settings.markPoint = markPoint; //set markpoint

        //get start point
        if (dataStart = rateData.attr("data-start")) {
            startPoint = (dataStart == "") ? 0 : dataStart;
        } else {
            startPoint = settings.startPoint;
        }

        //get end point
        if (dataEnd = rateData.attr("data-end")) {
            endPoint = (dataEnd == "") ? 100 : dataEnd;
        } else if (dataRate = rateData.attr("data-rate")) {
            endPoint = (dataRate == "" || dataRate == undefined) ? 100 : dataRate;
        } else {
            endPoint = settings.endPoint;
        }

        if (markPoint != false) {
            // fix start point, end point before setting them
            startPoint = fixPoint(startPoint, markPoint)
            endPoint = fixPoint(endPoint, markPoint);
        }

        //set startpoint and endpoint
        indefaults.settings.endPoint = endPoint;
        indefaults.endPoint2 = endPoint;

        indefaults.settings.startPoint = startPoint;
        indefaults.startPoint2 = startPoint;


        //get animated attr
        if (rateBar.attr("data-animval")) {
            if (dataFunc.data('animval') == "") {
                var animVal = isPathTag ? "stroke-dasharray" : null;
                animVal = (animAttrval != false && animVal == null) ? animAttrval : animVal;
            }
        } else {
            var animVal = (animAttrval != false) ? animAttrval : null;
        }
        indefaults.settings.animVal = animVal;

        //split progressbar path(only)
        if (isPathTag) {
            var barSplit = rateData.attr('data-split');
            barSplit = (barSplit == null) ? splitBar : barSplit;
            if (typeof barSplit !== "boolean") {
                barSplit = (barSplit == "true" || barSplit == "") ? true : false;
            }
            indefaults.settings.barSplit = barSplit;
        }



        //rotation
        var isRotate = rateData.attr('data-rotate');
        isRotate = (isRotate == null) ? rotation : isRotate;
        if (typeof isRotate !== "boolean") {
            isRotate = (isRotate == "true" || isRotate == "") ? true : false;
        }
        indefaults.settings.isRotate = isRotate;

        //rotation
        var isFlat = rateData.attr('data-flat');
        isFlat = (isFlat == null) ? flatRate : isFlat;
        if (typeof isRotate !== "boolean") {
            isFlat = (isFlat == "true" || isFlat == "") ? true : false;
        }

        indefaults.settings.isFlat = isFlat;

        //check for text percentage (text settings)
        var usePercent = rateData.data('percent');
        usePercent = (usePercent == null) ? addPercent : usePercent;
        if (typeof usePercent !== "boolean") {
            usePercent = (usePercent == "true") ? true : false;
        }
        var textPercent = (usePercent == true) ? (textLabel == null ? "%" : '') : '';
        indefaults.settings.addPercent = usePercent;
        indefaults.settings.textPercent = textPercent;

        var textUnit = rateData.data('unit');
        textUnit = (textUnit == null) ? addUnit : textUnit;
        indefaults.settings.textUnit = textUnit;

        var textLabel = rateData.data('label');
        textLabel = (textLabel == null) ? addLabel : textLabel;
        indefaults.settings.textLabel = textLabel;

        //check for textbox
        var rollTexts = (rateBox.length > 1) ? true : false;
        indefaults.settings.rollTexts = rollTexts;


        //reset radial progressbar to startpoint;
        if (isPathTag && animVal != null && animVal != "") {
            //get full path
            var pathIndex = item.index();
            var pathItem = item.find("path").get(0);
            var pathFull = pathItem.getTotalLength();

            var loadPoint = startPoint;

            if (isFlat) {
                var indefaultS = startPoint;
                var indefaultE = endPoint;

                loadPoint = (indefaultE > indefaultS) ? indefaultE : indefaultS;
                loadPoint = (startPoint / loadPoint) * 100;
            }

            var startRate = ((loadPoint - 0.5) / 100) * pathFull.toFixed(2);
            indefaults.settings.pathFull = pathFull;
        }
        return this;
    }

    function loadInstance() {
        //initiate animate bar

        //load instance default variables (indefaults)
        var settings = indefaults.settings;

        var item = settings.thisElement;
        var rateBar = settings.rateBar;
        var rateBox = settings.rateBox;
        var startPoint = settings.startPoint;
        var endPoint = settings.endPoint;
        var markPoint = settings.markPoint;
        var animVal = settings.animVal;
        var barSplit = settings.barSplit;
        var isPathTag = settings.isPathTag;
        var isFlat = settings.isFlat;
        var textLabel = settings.textLabel;
        var textUnit = settings.textUnit;
        var textPercent = settings.textPercent;
        var mirror = indefaults.mirror;
        var angle = indefaults.angle || '';

        var rangle = (angle != "") ? ' rotate(' + angle + 'deg) ' : "";
        var langle = (angle != "") ? ' rotate(-' + angle + 'deg) ' : "";

        if (mirror == "x") {
            //get item
            item.css({ 'transform': "scaleX(-1)" + rangle });
            item.find("xhtml").css({ 'transform': "scaleX(-1)" + langle });
        } else if (mirror == "y") {
            //get item
            item.css({ 'transform': "scaleY(-1)" + rangle });
            item.find("xhtml").css({ 'transform': "scaleY(-1)" + langle });
        } else if (mirror == "x,y" || mirror == "y,x") {
            //get item
            item.css({ 'transform': "scaleX(-1) scaleY(-1)" + rangle });
            item.find("xhtml").css({ 'transform': "scaleX(-1) scaleY(-1)" + langle });
        }

        //reset progressbar to startpoint;

        var loadPoint = startPoint;

        if (markPoint != false) {

            if (markPoint != 0 && markPoint != '0') {
                loadPoint = (startPoint / markPoint) * 100;
            } else {
                loadPoint = 0;
            }

        } else {
            if (isFlat) {
                var indefaultS = startPoint;
                var indefaultE = endPoint;

                loadPoint = (indefaultE > indefaultS) ? indefaultE : indefaultS;
                loadPoint = (loadPoint == 0) ? 1 : loadPoint;
                loadPoint = (startPoint / loadPoint) * 100;
            }
        }

        if (!isPathTag) {
            rateBar.css({ width: loadPoint + "%" });
            rateBox.html(loadPoint + textPercent + textUnit + textLabel);
        } else {
            if (animVal != null && animVal != "") {

                //get full path
                var pathIndex = item.index();
                var pathItem = item.find("path").get(0);

                var pathFull = pathItem.getTotalLength();
                var startRate = ((loadPoint - 0.5) / 100) * pathFull.toFixed(2);
                var xBar = barSplit ? startRate : pathFull;

                rateBar.attr({
                    [animVal]: startRate + "," + xBar
                });
                rateBox.html(loadPoint + textPercent + textUnit + textLabel);
            }
        }
        return this;
    }

    function isPercentage(value) {
        if (/^\d+%$/.test(value)) {
            return true;
        }
        return false;
    }

    function fixPoint(value, markPoint) {
        if (isPercentage(value)) {
            value.replace('%', '');
            value = parseFloat(value);
            if (markPoint != 0) {
                value = (value / 100) * markPoint;
            } else {
                value = 0;
            }

        }

        if (value > markPoint) {
            value = markPoint;
        }
        value.toString().replace('%', '');
        return value;
    }


    function loadProgress() {

        //load stored variables
        var iSettings = indefaults.settings;
        var item = iSettings.thisElement;
        var mirror = iSettings.mirror;
        var angle = iSettings.angle;
        var mirrorObject, textObject;

        //load values / points
        var runtime = iSettings.runtime;
        var textPercent = iSettings.textPercent;
        var textUnit = iSettings.textUnit;
        var textLabel = iSettings.textLabel;
        var startPoint = indefaults.startPoint2;
        var endPoint = indefaults.endPoint2;
        var markPoint = iSettings.markPoint;

        //add breaks (already added)
        var breakPoints = indefaults.breakPoints;
        var breakColors = indefaults.breakColors;
        var breakClasses = indefaults.breakClasses;


        //load animated boxes
        var rateBox = iSettings.rateBox;
        var rateBar = iSettings.rateBar;
        var pathFull = iSettings.pathFull;
        var rateData = iSettings.rateData;
        //console.log(pathFull)

        //load other required variables
        var tagName = iSettings.tagName;
        var isPathTag = iSettings.isPathTag;
        var isRotate = iSettings.isRotate;
        var isFlat = iSettings.isFlat;

        var barSplit = iSettings.barSplit;
        var animVal = iSettings.animVal;
        var toggleAttr = iSettings.toggleAttr;

        var settings = indefaults;

        var indefaultS = indefaults.startPoint2
        var indefaultE = indefaults.endPoint2;
        var nthPoint = (indefaultE > indefaultS) ? indefaultE : indefaultS;
        nthPoint = (markPoint != false) ? markPoint : nthPoint;

        var angle = (iSettings.angle != null) ? parseInt(iSettings.angle) : null;

        if (angle != null) {
            var rangle = ' rotate(' + (angle) + 'deg) ';
            var langle = (angle > 0) ? ' rotate(-' + (angle) + 'deg) ' : ' rotate(' + Math.abs(angle) + 'deg) ';
        } else {
            var rangle = '',
                langle = '';
        }

        if (mirror == "x") {
            if (angle != null) { langle = rangle }
            mirrorObject = { 'transform': "scaleX(-1)" + rangle };
            textObject = { 'transform': "scaleX(-1)" + langle };
        } else if (mirror == "y") {
            mirrorObject = { 'transform': "scaleY(-1)" + rangle };
            textObject = { 'transform': "scaleY(-1)" + langle };
        } else if (mirror == "xm") {
            mirrorObject = { 'transform': "scaleX(-1)" + langle };
            textObject = { 'transform': "scaleX(-1)" + rangle };
        } else if (mirror == "x,y" || mirror == "y,x") {
            mirrorObject = { 'transform': "scaleX(-1) scaleY(-1)" + rangle };
            textObject = { 'transform': "scaleX(-1) scaleY(-1)" + langle };
        } else {
            if (angle != null) {
                mirrorObject = { 'transform': rangle };
                textObject = { 'transform': langle };
            }
        }

        if (mirrorObject != null) { item.css(mirrorObject); }

        jQuery({ Counter: startPoint }).animate({ Counter: endPoint }, {
            duration: runtime,
            easing: 'swing',
            step: function() {
                indefaults.rollState = stepCounter = Math.ceil(this.Counter);

                startPoint = startPoint == -0 ? 0 : startPoint;

                if (isFlat) {
                    var nthRater = (stepCounter / nthPoint) * 100;
                } else {
                    var nthRater = stepCounter;
                }

                if (isPathTag) {
                    var $startPoint = (nthRater / 100) * pathFull;
                    var $endPoint = ((nthRater - 1) / 100) * pathFull;
                    var cBar = barSplit ? $endPoint : pathFull;

                    rateBar.attr({
                        [animVal]: $startPoint + "," + cBar
                    });
                } else {
                    var $startPoint = $endPoint = nthRater - 1;
                    rateBar.css({ width: $endPoint + "%" });
                }
                var rollangle = (nthRater / 100) * 360

                isRotate ? item.css({ "transform": "rotate(" + rollangle + "deg)" }) : null;

                var realendPoint = (startPoint > endPoint) ? nthRater - 1 : nthRater;

                var nstepCounter = stepCounter;
                if (parseFloat(endPoint) < parseFloat(startPoint)) {
                    nstepCounter = stepCounter - 1;
                } else {
                    nstepCounter = stepCounter;
                }
                rateBar.attr({ "data-point": nstepCounter });
                rateData.attr({ "data-point": nstepCounter });

                let step1 = '<div>' + nstepCounter + textPercent + textUnit + ' </div> ' + textLabel;
                let step2 = '<div>' + realendPoint + textPercent + textUnit + ' </div> ' + textLabel;

                var $textwrite = isFlat ? step1 : step2;

                //NOTE: remove text width hideLabel set as false later!!!

                if (textLabel.indexOf("text:") >= 0) {
                    textContent = textLabel.replace("text:", '');
                    //show only text
                    rateBox.html('<xhtml:span id="xhtml" class="in-block">' + textContent + '</xhtml>');
                } else {
                    if (textLabel == "rate") {
                        //show only rate (no text label)
                        $textwrite = isFlat ? nstepCounter + textPercent + textUnit : realendPoint + textPercent + textUnit;
                        rateBox.html('<xhtml:span id="xhtml" class="in-block"><span class="mybox-full xid">' + $textwrite + '</span><span class="mybox-full"></span></xhtml>');
                    } else if (textLabel == "none") {
                        //show none
                        rateBox.html('<xhtml:span id="xhtml" class="in-block"></xhtml>');
                    } else {
                        //show both
                        //if(textLabel != null){
                        var textCon = (textLabel == "") ? '<span class="in-block xid">' + $textwrite + '</span><span class="mybox"></span>' : $textwrite;
                        rateBox.html('<xhtml:span id="xhtml" class="in-block">' + textCon + '</xhtml>');
                        //}
                    }
                }

                if (textObject != null) { item.find("#xhtml").css(textObject) }

                //breakpoints
                if (breakPoints != null) {
                    if ((breakLength = breakPoints.constructor) === Array) {

                        breakPoints.forEach(function(items, index) {

                            if ((breakVal = breakPoints[index]) != null) {
                                //case1

                                if (breakVal <= nthRater) {
                                    if (breakClasses != null) {
                                        if (breakClasses[index] != null) {
                                            obClass = breakClasses[index];
                                            rateBar.attr({ "data-class": obClass });
                                            if ($(item).find('[data-toggle]').length > 0) {
                                                if (toggleAttr != null) {
                                                    $(item).find('[data-toggle]').attr({
                                                        [toggleAttr]: obClass
                                                    });
                                                }
                                            }
                                        }
                                    }

                                    if (breakColors != null) {
                                        if (breakColors[index] != null) {
                                            obColor = breakColors[index];

                                            if (isPathTag) {
                                                rateBar.css({ "stroke": obColor });
                                            } else {
                                                rateBar.css({ "background-color": obColor });
                                            }

                                        }
                                    }
                                }

                            }

                        })
                    }
                }

            }

        })
        return this;
    }

    $.fn.animeRateBar.rollTo = function(rollPoint, delay) {
        // $.fn.animeRateBar.defaults.rollInto = rollPoint;

        loadUpdate();
        indefaults.startPoint2 = indefaults.rollState; // rollState
        indefaults.endPoint2 = rollPoint; //roll To (Into)
        return loadProgress();

    }

    //defaults settings
    $.fn.animeRateBar.defaults = {
        obData: null,
        breakPoints: null,
        classes: null,
        colors: null,
        delay: false,
        runtime: 1500,
        thisElement: this,
        startPoint: 0,
        endPoint: 100,
        animVal: false,
        splitBar: false,
        addText: true,
        addPercent: false,
        addUnit: "",
        addLabel: "",
        mirror: false,
    }

    var indefaults = {
        settings: false,
        rollInto: false,
        startPoint2: false,
        endPoint2: false,
        rollState: false,
        pauseState: false,
    }

})(jQuery);

function autoRatePoint(elem) {
    elem = (elem != null) ? elem : ".rate-point";
    if ($(elem).length > 0) {
        var rdata = $(this);
        $(elem).each(function() {
            var dataUpdate, ratePoint = $(this);
            dataUpdate = $(ratePoint).find("item").attr("data-self")
            if (dataUpdate != null) {
                selfUpdate = (dataUpdate < 1500) ? 1500 : parseInt(dataUpdate);
                setInterval(function() {
                    radialRateInitiate(ratePoint)
                }, selfUpdate)
            } else {
                radialRateInitiate(ratePoint)
            }

        })

    }

}

function radialRateInitiate(ratePoint) {
    var item = ratePoint.find("item");
    var runtime = (item.data("time")) ? parseInt(item.data("time")) : 4500;
    var addLabel = item.data("label") ? "<text class='data-label mybox font8 calibri'>" + item.data("label") + "</text>" : '';
    var bkPoints = item.data("bkpoints") ? item.data("bkpoints").split(" ") : false;
    var bkClass = item.data("bkclass") ? item.data("bkclass").split(" ") : false;
    var bkColors = item.data("bkcolors") ? item.data("bkcolors").split(" ") : false;
    var addText = item.data("text") || false;
    var addUnit = item.data("unit") || false;
    var mirror = item.data("mirror") || false;
    var runType = item.data("run");
    var angle = item.data("angle");
    var validRuns = ['scroll', 'load', 'none', 'load-scroll', 'auto'];
    var autoRun = validRuns.includes(runType) ? runType : 'load';
    autoRun = (autoRun == 'load-scroll') ? "load scroll" : autoRun;

    if ($(item).data('self') && item.data('point')) {
        // console.log("running");

        var dataPoint = item.attr('data-point') || 0;
        var dataOldPoint = isNaN(parseInt(dataPoint)) ? 0 : parseInt(dataPoint);
        var dataNewPoint = item.attr("data-newpoint") ? item.attr("data-newpoint") : dataOldPoint;
        dataNewPoint = isNaN(parseInt(dataNewPoint)) ? 0 : parseInt(dataNewPoint);

        ratePoint.find('item').attr({ "data-end": dataNewPoint });
        ratePoint.find('item').attr({ "data-start": dataOldPoint });

        var dataStart = ratePoint.find('item').attr("data-start");
        var dataStop = ratePoint.find('item').attr("data-end");

        if (dataStart == dataStop) { return; }

    }
    var objectItem = {
        runtime: runtime,
        obData: (item.data("obdata") || false),
        breakPoints: bkPoints,
        classes: bkClass,
        colors: bkColors,
        delay: (item.data("delay") || false),
        animVal: (item.data("animval") || 'stroke-dasharray'),
        mirror: mirror,
        addText: addText,
        addUnit: addUnit,
        addLabel: addLabel,
        mirror: mirror,
        angle: angle
    }

    if (autoRun != 'none') {

        if (autoRun == "auto") { ratePoint.animeRateBar(objectItem); return true; }
        $(window).bind(autoRun, function() {
            if (autoRun == "scroll") {
                //get distance of item from top
                var windowScrollPoint = ratePoint.scrollTop();
                var radialPoint = ratePoint.offset().top;
                var radialDistance = radialPoint - windowScrollPoint;
                if (radialDistance < 550) {
                    ratePoint.animeRateBar(objectItem);
                } else {
                    executed = false;
                }
            } else {
                ratePoint.animeRateBar(objectItem);
            }
        })
    }
}


/**
$(".rate-pane").animeRateBar({runtime:4500,
   breakPoints:['10','30','50'],
   classes:['blue','red','green'],
   colors:['rgb(233, 236, 91)','rgb(91, 216, 236)','rgb(91, 236, 91)'],
})


sample html description

<div id="1" class="mybox radial plans silver rate-pane-silver calibri bold font16 theme-1" style="width:25%; margin:10px">
     <svg id="animated" class='theme1' data-toggle="class" viewbox="0 0 100 100"  xmlns="http://www.w3.org/2000/svg">
       <circle cx="50" cy="50" r="45"/>
       <item data-func="prodata" data-start="0" data-end="20"></item>
       <path id="1" class="bar4 cap-round" data-func="progressbar" stroke-linecap="round" stroke-dasharray="0,251.36264038085938" stroke-width="1" d="M50 10 a 30 30 0 0 1 0 80 a 30 30 0 0 1 0 -80">
       </path>
       <foreignObject data-func="protext" x="20" y="20" height="60%" width="60%" text-anchor="middle" dy="7" data-percent="false" class="text-center"></foreignObject>
     </svg>
</div>

$(".radial").animeRateBar({runtime:5000,
 breakPoints:["0",'20','50','70','100'],
 classes:["low",'normal','medium','high','complete'],
 colors:["rgb(207, 40, 4)",'rgb(207, 126, 4)','rgb(91, 200, 91)','rgb(207, 204, 4)','rgb(38, 207, 4)'],
 animVal: "stroke-dasharray",
 addUnit: "+",
 addLabel: "<br><text class='mybox font8 calibri'>Andla Rate Bar</text>"
}); 

sample html description only using autoRatePoint() as automatic loader

<div id="1" class="mybox radial rate-point plans calibri bold font16" style="width:15%; margin:10px;"> 
   <div class="theme-7">
     <svg id="animated" class='' data-toggle="class" viewbox="0 0 100 100"  xmlns="http://www.w3.org/2000/svg">
       <circle class='no-fill' cx="50" cy="50" r="45"/>
       <item 
           data-func="prodata" data-start="0" data-end="25"data-mark="50"  
           data-mirror="x,y" data-angle = "90" 
           data-unit='%' data-label="Andla Rate Bar" data-time="7000"
           data-bkpoints="0:20:50:70:100"
           data-bkcolors="rgb(207, 40, 4):rgb(207, 126, 4):rgb(91, 200, 91):rgb(207, 204, 4):rgb(38, 207, 4)"
           data-bkclass ="low:normal:medium:high:complete]"
           ></item>
       <path id="1" class="bar1 no-fill cap-round" data-rotat data-spli data-func="progressbar" stroke-linecap="round" stroke-dasharray="0,251.36264038085938" stroke-width="1" d="M50 10 a 30 30 0 0 1 0 80 a 30 30 0 0 1 0 -80">
       </path>
       <foreignObject data-func="protext" x="20" y="20" height="60%" width="60%" text-anchor="middle" dy="7" data-percent="false" class="text-center"></foreignObject>
     </svg>
   </div>
</div>


prevent auto load by setting data-run as none
}); 
*/


/* animation for a rate line bar*/
;
(function($) {
    $.fn.animeRateLine = function(options) {

        //defaults settings
        var defaults = {
            obData: null,
            breakPoints: null,
            classes: null,
            colors: null,
            delay: 0,
            runtime: 1500,
            addText: true,
            thisElement: this,
            startPoint: 0,
        }

        //real settings
        settings = $.extend(defaults, options);

        runRate(settings);
    }


    function runRate(settings) {

        let item = $(settings.thisElement);
        let obData = settings.obData;
        let delay = settings.delay;

        let itemData = item.find(".rate-bar");

        let runtime = itemData.attr('data-runtime') || settings.runtime;
        let addText = itemData.attr('data-text') || settings.addText;
        let startPoint = +itemData.attr('data-start') || settings.startPoint;

        let breakPoints = settings.breakPoints;
        let breakClasses = settings.classes || [];
        let breakColors = settings.colors;


        let rateBar = item.find(".rate-bar");
        let rateBox = item.find(".rate-value");
        let dataRate = rateBox.attr('data-rate'); //endPoint

        if (rateBar.attr('class') === undefined) { console.log("rate bar not found"); return false; }
        if (rateBox.attr('class') === undefined) { console.log("rate bar value not supplied"); return false; }
        if (dataRate == undefined || dataRate == null) { console.log("rate bar data missing"); return false; }

        //reset bar width to default 0;
        rateBar.css({ width: startPoint });

        //condition for colors
        let rollTexts = false;
        if (addText === true) {
            rollTexts = true;
        }

        //start a counter
        jQuery({ Counter: startPoint }).animate({ Counter: dataRate }, {
            duration: runtime,
            easing: 'swing',
            step: function() {

                //dynamic variables
                let progressPane = item;
                let progressPath = item.find(".rate-bar").parent();
                let progressBar = item.find(".rate-bar")

                let pathWidth = progressPath.width();
                let progressRate = progressBar.width();

                let percentCount = Math.round(this.Counter);

                if (percentCount > 100) { percentCount = 100; }

                let percentFill = percentCount + "%";
                let textFill = this.Counter.toFixed(2) + "%";
                let realRate = ((progressBar.width() / (pathWidth - 4)) * 100);

                progressBar.css({ width: percentFill });

                itemData.attr({ 'data-start': percentCount })
                if (rollTexts === true) {
                    rateBox.text(textFill); //add percentage texts
                }

                if (breakPoints != null) {
                    if ((breakLength = breakPoints.constructor) === Array) {

                        breakPoints.forEach(function(item, index) {

                            if ((breakVal = breakPoints[index]) != null) {
                                //case1

                                if (breakVal <= realRate) {
                                    console.log(breakVal, realRate.toFixed(1))
                                    if (breakClasses[index] != null) {
                                        obClass = breakClasses[index];
                                        progressBar.attr({ "data-class": obClass })
                                    }
                                    if (breakColors[index] != null) {
                                        obColor = breakColors[index];
                                        progressBar.css({ "background-color": obColor });
                                    }
                                }


                            }

                        })
                    }
                }

            },
            complete: function() {}
        });
    }

})(jQuery);

/**
$(".rate-pane").animeRateLine({runtime:10000,
  obData:[{color:"blue",class:"blue",value:"10"},
     {color:"rgb(0, 255, 192)",classes:"red",breakPoints:"20"},
     {color:"rgb(0, 192, 255)",classes:"red",breakPoints:"30"},
     {color:"rgb(255, 243, 0);",classes:"red",breakPoints:"40"},
     {color:"rgb(255, 189, 0);",classes:"red",breakPoints:"60"},
    ]})

    Or (*use animeRateLine instead!!!)
$(".rate-pane").animeRateBar({runtime:4500,
   breakPoints:["10",'30','50'],
   classes:["blue",'red','green'],
   colors:["rgb(233, 236, 91);",'rgb(91, 216, 236)','rgb(91, 236, 91)'],
})
*/