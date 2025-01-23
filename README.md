# Power Forge

## Introduction

Power Forge is an all-in-one physical development platform designed to give you a competitive edge by integrating cutting-edge technologies for advanced performance tracking and analysis. The platform will leverage various tools and methodologies to track, analyse, and improve your physical performance over time. The application will include the following features, but not be limited to:

### Key Features:
- **Macro Food Tracker**  
  A replacement for MyFitnessPal (MFP), designed to help you track your food intake and macros with greater precision and customisation.
  
- **Program Builder**  
  - Programs are structured around workouts.
  - Workouts are made up of sections (e.g., warm-ups, main lifts, accessory exercises, cool-downs, etc.).
  
- **Workout Mode**  
  - Video upload functionality to capture your lifts for later analysis.
  - Integration of Computer Vision (CV) to track bar speed and other performance metrics during lifts.
  - Natural Language Processing (NLP) for analysing your previous performances and providing insightful feedback.
  
- **Analytics Mode**  
  - Advanced data analytics powered by NLP, which generates performance graphs and trends over time.
  - Insights based on performance data will be provided with the guidance of analytics frameworks like Supalytics to ensure accuracy and usability.
  
- **Hosting**  
  - Initially, the platform will be self-hosted, with the focus on acquiring a capable graphics card for local inference and model training.
  - As the platform grows, and if there’s demand from other users, the system will scale to the cloud. However, cloud inference may incur significant costs.
  
- **Shadow / Bag Work Integration**  
  - Incorporation of pose estimation technology for both shadow sparring and bag work to analyse movement patterns.
  - Use pattern recognition to identify and eliminate bad habits in your technique.
  
## Development Ideology

As an aspiring solo developer with limited experience, this project is an ambitious undertaking, but I believe it’s achievable if I approach it incrementally, building it step by step. My long-term goal is to refine and complete this project over the next two years.

### Development Plan:
This is a substantial project that requires knowledge of machine learning (ML), software engineering, and hardware systems. I will take an iterative, slow-paced approach to ensure each component is thoroughly developed and refined before moving onto the next phase. Below is my planned approach:

1. **Starting with the Core Features**  
   I’ll begin by focusing on the more technically interesting elements, such as integrating Machine Learning (ML) for computer vision and NLP. These will be key differentiators for the platform and will require a solid understanding of both the technology and data.

2. **Building the Upload Portal**  
   The first task will be setting up a simple video upload portal. This will allow me to begin gathering the data necessary to train the ML models, even before the full functionality of the app is implemented.

3. **Data Collection for Model Training**  
   Collecting data will be the most time-consuming phase, as I need footage of my workouts, lifts, and other activities for training the models. Consistent documentation of my training sessions will be critical to building a useful dataset. While gathering this data, I’ll also work on other aspects of the app that are less complex, such as the program and workout tracking features.

4. **Program and Workout Tracking**  
   This part of the app will be relatively straightforward. Users will be able to create and track their workout programs, log exercises, and monitor progress. This feature will serve as the foundation for the more advanced features later on.

5. **Building the Home Server and Hardware Setup**  
   Once I have a labelled dataset, I’ll start building a high-performance PC capable of handling model training and inference. The PC will function as a home server where I can run models locally. Alternatively, I can use Google Colab for training and implement techniques like post-quantisation or Quantisation-Aware Training (QAT) to simplify the models for more efficient inference on limited hardware.

6. **Iterative Model Improvement**  
   As I move forward with model training, I will continually improve the models. Techniques like pruning, model compression, and multi-model approaches will be explored to ensure that inference can be performed on a variety of devices with minimal latency and cost.

7. **Long-Term Scaling and Hosting Options**  
   In the event that the platform gains traction, I will consider moving to cloud hosting to scale the service. However, I’m aware that the cost of cloud inference can be high, so this will be carefully planned out in the future.

### Final Thoughts
The key to success in this project is moving slowly and steadily. I’ll focus on completing small, manageable tasks while ensuring each component is refined before moving onto the next. This iterative approach will allow me to address challenges as they arise and continuously improve the product. 

Building a platform of this complexity requires patience, dedication, and a long-term mindset. I’m prepared to take on this challenge and excited to see how the platform evolves over time.
