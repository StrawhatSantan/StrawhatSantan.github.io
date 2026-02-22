---
layout: page
title: Diffusion-Based Authentication of Copy Detection Patterns
description: Multimodal diffusion framework for robust counterfeit detection in printable security codes.
importance: 1
category: research
---

Counterfeit detection systems based on simple similarity metrics are vulnerable to modern generative attacks. This project introduces a diffusion-based authentication framework that jointly conditions on the binary template, printed CDP, and printer identity to classify source-printer signatures and detect inconsistencies.

Key outcomes:
- Reformulated CDP authentication as per-printer classification with class-conditioned noise prediction.
- Achieved low balanced error on Indigo 1x1 Base (`Perr = 0.023`).
- In known-versus-unseen counterfeit evaluation, obtained `Pfa = 0.000` with `Perr = 0.012`.

Tech stack:
- Python
- PyTorch
- Stable Diffusion
- ControlNet

Links:
- [Project page](https://strawhatsantan.github.io/cdp-auth-wacv26/)
- [Paper PDF](/assets/pdf/wacv2026_cdp_auth.pdf)
