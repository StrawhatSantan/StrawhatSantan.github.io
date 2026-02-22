---
layout: page
title: 6D Pose Estimation with Synthetic Data and VR-Based Generation
description: DenseFusion-based assistive grasping pipeline with Unity/HTC Vive synthetic data generation.
importance: 4
category: research
---

This project focuses on 6D object pose estimation for assistive grasping. The workflow combines DenseFusion with a synthetic-data pipeline generated from Unity and HTC Vive captures, then evaluates pose estimation quality on a bottle-class setup.

Key outcomes:
- Built synthetic data workflow: frame generation, mask extraction, and LineMOD-style formatting.
- Integrated DenseFusion fine-tuning and evaluation on custom data.
- Achieved `60.2%` correct prediction rate on synthetic bottle-class evaluation.

Tech stack:
- Python
- DenseFusion
- Unity
- HTC Vive
- Detectron2
- MiDaS

Links:
- [Project report PDF](/assets/pdf/pose_estimation_densefusion_report.pdf)
