
# Create a Simple Work Day Scheduler

## Fifth Challenge for the UT-Austin Full Stack Development Bootcamp


___


This project was assigned as an introduction to using more third-party APIs in our work, like moment.js.  The goal is to have a page that will let the user schedule events during their day and have them persist the next time they open the page.

I added a few more details beyond the brief, like the ability to delete events, updating events, and restricting the adding of events to only events in the future. There are a few other changes made but it's best to understand how the page works.

[You can see it live here](https://markgatx.github.io/ModuleFourChallenge/)


___



## How to use

When you open up the page, you'll see the current date and time in the header. Below you'll see multiple rows of times available. These rows are color coded based on the time.
- Grey means the time listed is in the past.
- Red means it's the current hour.
- Green means the time is in the future.

![Workday Scheduler with Times](./assets/images/workday%20image.jpg)

To the right of each row are two buttons.
- The button on the far right will let you save an event you just typed on that row.
- The button next to it with DELETE the event currently on that row.

![Wokday Scheduler with Save and Delete buttons](./assets/images/workday%20save%20and%20delete.jpg)

To add an event, simply click in the empty space next to the hour you want to schedule the event.
Type the information and click the "Save" button to the right.

**Note: You can not add a new event to any times in the past. If you try, you'll get a notification pop-up and the text will clear from the field.**

If you need to change the details of an event, click on the event and make your changes. Then click on "Save." Your updated event will be listed.

If you need to delete an event, simply click the delete button at the right of the row.

If you leave the page and come back, your events will still be listed for you to keep track of.



___


## Changes Made and Lessons Learned

- The original layout in the challenge documentation stayed as the inspiration for the overall look of the page. I did change the color scheme in some places to add more contrast.

- I added the option to delete an event. There's currently no confirmation for deletion so once you click the button, the event is gone.

 - We used moment.js to keep track of time in the app and determine if times we before or after the current time. Moment is considered legacy code at this time so in the future I'll use some other tools to keep track of time, like Day.js. 



___



## Possible Future Changes

- Clear all events that are from the previous day upon first page load
- Verify deletion of an event before removing it.
- Create delegated event listeners?


___



## Credits


The original visual concept of the scheduler was created by staff of the UT Austin Full Stack Development Bootcamp. Thanks to Leah, Ian, Negin, Diem, and all the students who work with me daily to keep improving. 


___



## License

MIT License

Copyright (c) 2022 Mark Gardner

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.