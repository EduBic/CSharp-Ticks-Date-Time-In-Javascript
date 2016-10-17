function convertInJs(){
var     epochTicks = 621355968000000000,    // the number of .net ticks at the unix epoch
        ticksPerMillisecond = 10000,        // there are 10000 .net ticks per millisecond
        jsTicks = 0,                        // ticks in javascript environment
        jsDate,                             // Date in javascript environment
        input = document.getElementById("input").value;

    jsTicks = (input - epochTicks) / ticksPerMillisecond;

    jsDate = new Date(jsTicks); // N.B. Js applies local timezone in automatic

    document.getElementById("result").innerHTML = jsDate;
}

