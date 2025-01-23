# Power Forge
## Introduction
This will be my all in one physical development platform.  I want to leverage every possible technology in order to give myself a competitive edge as well as advanced analytics on my performance and development overtime.  The application will have but will not be limited to the following features.
- Macro Food Tracker (To Replace MFP)
- Program Builder
  - Programs are made up of workouts
  - Workouts made up of sections etc
- Workout Mode
  - Allow video upload of the lifts
  - Leverage CV for bar speed
  - Leverage NLP for analysis of previous performance
- Analytics Mode
    - Allows for advanced data analytics leverging nlp to produce graphs of performance metrics overtime
    - Use supalytics as a guid on creating this
- Hositing
  - Initially self host and get a decent graphics card to allow for inference and training
  - If others want to use and it grows, move to the cloud but it'll be expensive for inference
 - Shadow / Bag Work
   - Incorperation of pose estimation on bag work as well as shadow sparring to allow for pattern recognition as well as bad habit elimination
  
## Development Idology
As a relatively inexperienced solo developer this is a massive task for me to undertake, however I do feel that I have what it takes as long as I work on building it slowly brick by brick.  My plan is to work on completing this project and refining it over the next two years.

This is a huge project requiring good knowledge of both ML and software engineering but also hardware.  Thus, I plan to go slow and incrementally develop the product iteratively.  I will initially start by building the more interesting elements to me that being the ML computer vision and NLP.  First just getting an upload portal created and then working on understanding the models as well collecting the training data required (this will take a lot of time).  I will need to be diligant in recording my own workouts in order to ge enough footage of myself.  While doing boring data collection I should build the program and workout tracking side of the app as this will be more standard and easy.  Finally when I'm ready for model training and I have a labelled dataset I can build my own PC with soem great specs and use it as a home server or alternativly I can leverage collab for training and then use post quantisation or QAT to make the model simpler for inference also I could have multiple models and also apply conepts such as pruning into the mix to make it even better.

But the idea is to move slowly and build it up step by step.  
