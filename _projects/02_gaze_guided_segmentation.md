---
layout: page
title: Object Segmentation in the Wild with Foundation Models
description: Gaze-guided SAM adaptation for vision-assisted neuro-prostheses in cluttered real-world scenes.
importance: 2
category: research
---

This project adapts Segment Anything (SAM) to an egocentric assistive-robotics setting using gaze-fixation prompts, temporal gaze projection, and outlier filtering. Fine-tuning on domain data improves mask quality for object grasping scenarios.

Key outcomes:
- Implemented gaze-to-prompt pipeline with frame projection and DBSCAN filtering.
- Demonstrated mIoU improvements up to `+0.50` after fine-tuning.
- Example class improvement: blue bowl from `0.41` to `0.86` mIoU.

Tech stack:
- Python
- PyTorch
- Segment Anything (ViT-B)
- Homography estimation
- DBSCAN

Links:
- [IEEE entry](https://ieeexplore.ieee.org/abstract/document/10772866)
- [Paper PDF](/assets/pdf/euvip2024_sam_gaze_segmentation.pdf)
