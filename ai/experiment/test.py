from ultralytics import YOLO

# Load a model
model = YOLO("yolo11n-pose.pt")  # load an official model

# Video source
source = "/content/drive/MyDrive/Training Data/bagwork-1.mp4"

# Predict with the model
results = model.track(source=source, show=True, save=True)