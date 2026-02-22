---
layout: page
title: 3D Point Cloud Generation from Mobile Camera Images
description: End-to-end photogrammetry workflow from calibration to multi-view reconstruction.
importance: 6
category: applied-r-and-d
---

This project implements a full multi-view photogrammetry pipeline from mobile-phone images: camera calibration, keypoint detection and matching, projective reconstruction, and Euclidean refinement.

Key outcomes:
- Implemented Zhang-based mobile camera calibration and robust multi-view matching.
- Best detector/descriptor pairing: KAZE + SURF with `900` fundamental-matrix inliers and `1799` matched points.
- Generated consistent 3D point cloud reconstruction with improved reprojection error after bundle adjustment.

Tech stack:
- MATLAB
- Multi-view geometry
- Feature matching
- Bundle adjustment

Links:
- [Project report PDF](/assets/pdf/mobile_photogrammetry_report.pdf)
