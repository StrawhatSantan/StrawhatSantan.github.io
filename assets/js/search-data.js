// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "Publications and preprints.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Selected computer vision and applied R&amp;D projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Curriculum vitae of Bolutife Atoki.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "projects-diffusion-based-authentication-of-copy-detection-patterns",
          title: 'Diffusion-Based Authentication of Copy Detection Patterns',
          description: "Multimodal diffusion framework for robust counterfeit detection in printable security codes.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/01_diffusion_cdp_authentication/";
            },},{id: "projects-object-segmentation-in-the-wild-with-foundation-models",
          title: 'Object Segmentation in the Wild with Foundation Models',
          description: "Gaze-guided SAM adaptation for vision-assisted neuro-prostheses in cluttered real-world scenes.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/02_gaze_guided_segmentation/";
            },},{id: "projects-deepfake-detection-on-uadfv-feature-fusion",
          title: 'Deepfake Detection on UADFV (Feature Fusion)',
          description: "Deepfake classifier combining CNN and handcrafted HAAR/Gabor features.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/03_deepfake_uadfv_fusion/";
            },},{id: "projects-6d-pose-estimation-with-synthetic-data-and-vr-based-generation",
          title: '6D Pose Estimation with Synthetic Data and VR-Based Generation',
          description: "DenseFusion-based assistive grasping pipeline with Unity/HTC Vive synthetic data generation.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/04_pose_estimation_densefusion/";
            },},{id: "projects-ios-ar-rubik-39-s-cube-solver",
          title: 'iOS AR Rubik&amp;#39;s Cube Solver',
          description: "Real-time AR cube detection, face identification, and guided solving pipeline on iOS.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/05_ar_rubiks_solver/";
            },},{id: "projects-3d-point-cloud-generation-from-mobile-camera-images",
          title: '3D Point Cloud Generation from Mobile Camera Images',
          description: "End-to-end photogrammetry workflow from calibration to multi-view reconstruction.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/06_mobile_photogrammetry/";
            },},];
