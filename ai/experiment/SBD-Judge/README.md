# Powerlifiting Judge 
My goal here is to leverage computer vision to create a powerlifiting judge software that can look at video of a person performing a lift and provide the appropriate cues.

For example in the squat this would be the squat and rack commands, or for the bench press this would be the start, press and rack commands etc.  The judge should also provide insights into whether or not the lift will pass in competition based upon the video. 

I will leverage the pretrained yolov11 model provided by ultralytics, fintuning it on my own dataset of training videos, extracting the models insights and building upon them with algorithmic rules in order to get the most consistent results.  

## Squat 
For the squat I will have to look at the knees initially in order to provide the squat command, most powerlifitng rulebooks state that for the lifter to recieve the squat command they must have their knees locked (no soft / bent knees)  Next we will need to ensure that the lifter has hit depth by using the position of the hip crease relative to the knee.  Finally we can reuse a similar algorithm to the first in order to determine if the lifter has locked out and will recieve the rack command.

## Bench 
This will be the most interesting of the three lifts.  For bench we will need to look first that the elbows are locked out, second that shoulder depth is hit, third that the bar was paused on the chest and then finally that the bar is fully locked out before the rack command.

## Deadlift 
This is a more simple lift in terms of commands and the only two things we need to look at is the lockout at the top and hitching on the quads. 
