# CSharp Ticks Date Time In Javascript
How to converter the DateTime C# .NET class in ticks to date class in Javascript.

C# .NET saves the date from **1th January year 0** that is **0 tick**.

Javascript saves the date as Unix, that is from the **1th January 1970**. 
This date is 0 tick in javascript but **621355968000000000 ticks in .NET**.

So .NET uses a different start data and it uses milliseconds, we have to do two operations to convert .NET tick date in Javascript.

The formula for convert C# ticks (csDateToConverter) to Javascript ticks (jsTicks) is: 
**"jsTicks = (csTicksToconvert - csUnixStartDateTicks) / ticksPerMillisecond"**.

Then you can use **"new Date(jsTicks)"** for get the date in human readable language.
