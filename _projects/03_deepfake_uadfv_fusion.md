---
layout: page
title: Deepfake Detection on UADFV (Feature Fusion)
description: Deepfake classifier combining CNN and handcrafted HAAR/Gabor features.
importance: 3
category: applied-r-and-d
---

I developed a deepfake detection pipeline that fuses CNN face features with handcrafted HAAR and Gabor descriptors. For this website, the reported result is from Task 1 only: evaluating UADFV with a model trained on UADFV.

Key outcomes:
- Two-branch architecture: resized face input (`60x60`) plus handcrafted feature vector (`30` features).
- Improved Task 1 AUC from handcrafted-only baseline (`0.84`) to fusion model (`0.93`).
- Built a full preprocessing and evaluation pipeline for frame-level prediction.

Tech stack:
- Python
- TensorFlow/Keras
- OpenCV
- Dlib
- HAAR and Gabor filters

Links:
- [Project report PDF](/assets/pdf/deepfake_detection_uadfv_report.pdf)
- Code repository link will be added after refactoring.
