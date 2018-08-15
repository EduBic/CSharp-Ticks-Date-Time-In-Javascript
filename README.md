# CSharp Ticks Date Time In Javascript
How to converter the DateTime C# .NET class in ticks to date class in Javascript.

C# .NET saves the date from **1th January year 0** that is **0 tick**.

Javascript saves the date as unix, that is from the **1th January 1970**. This date is 0 tick in javascript but **621355968000000000 ticks in .NET**.

So .NET uses a different start data and also use milliseconds, we need to do two operation to convert in Javascript tick date.

The formula for convert C# ticks (csDateToConverter) to Javascript ticks (jsTicks) is: 
**"jsTicks = (csTicksToconvert - csUnixStartDateTicks) / ticksPerMillisecond"**.

Then you can use **"new Date(jsTicks)"** for get the date in human readable language.
