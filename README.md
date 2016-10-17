# CSharp-Ticks-Date-Time-In-Javascript
How to converter the DateTime C# .NET class in ticks to date class in Javascript.

C# .NET save the date from **1th January year 0** that is **0 tick**.

Javascript save the date as unix from **1th January 1970** that is 0 tick in javascript but **621355968000000000 ticks for .NET**.

So .NET save in a different start data and use milliseconds so we need to do two operation for convert in Javascript tick date.

The formula for convert C# ticks (csDateToConverter) to Javascript ticks (jsTicks) is: **"jsTicks = (csTicksToconvert - csUnixStartDateTicks) / ticksPerMillisecond"**.

Then you can use **"new Date(jsTicks)"** for get the date in human readable language
