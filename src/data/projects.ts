export interface Project {
    id: string;
    title: string;
    company: string;
    client?: string;
    year: string;
    description: string;
    technologies: string[];
    images: string[];
    githubUrl?: string; // null if private
    featured: boolean;
    category: 'industrial' | 'iot' | 'cv' | 'education' | 'automation';
    icon: string;
}

export const projects: Project[] = [
    // Smartech Latam
    {
        id: 'ruma-analytics',
        title: 'Ruma Analytics',
        company: 'Smartech Latam SAC',
        client: 'Minera Titan / Alma Perú',
        year: '2025',
        description: 'A flagship Industrial AI project designed for high-availability mining operations. I architected a high-performance system capable of processing industrial stockpiles at 30 FPS with high data stability. The solution integrates advanced computer vision algorithms protected by an intelligent guard system to ensure precise volumetric measurement and structural data integrity under harsh environmental conditions.',
        technologies: ['CUDA', 'TensorRT', 'C++', 'YOLO', 'Computer Vision'],
        images: ['assets/images/projects/ruma-analytics.jpg'],
        featured: false,
        category: 'industrial',
        icon: 'bx-layer'
    },
    {
        id: 'smarttank-system',
        title: 'SmartTank System',
        company: 'Smartech Latam SAC',
        client: 'Alma Perú',
        year: '2025',
        description: 'An automated industrial inventory architecture for vertical storage facilities. I implemented a robust end-to-end pipeline that captures high-precision sensor data and provides real-time visualization of material volume. The system features custom alert logic and historical analytics, optimized for massive data ingestion and precise resource management in mission-critical environments.',
        technologies: ['IoT', 'MQTT', 'ESP32', 'Sensors'],
        images: ['assets/images/projects/smarttank.jpg'],
        featured: false,
        category: 'iot',
        icon: 'bx-cylinder'
    },
    {
        id: 'face-recognition',
        title: 'Face Recognition',
        company: 'Smartech Latam SAC',
        year: '2025',
        description: 'High-performance biometric authentication system designed for access control. I implemented a modular architecture utilizing state-of-the-art neural networks for reliable identification in varied lighting conditions. The system features low-latency processing and high-accuracy vector matching, providing a scalable foundation for secure facility management and employee verification.',
        technologies: ['Python', 'FaceNet', 'OpenCV', 'Biometrics'],
        images: ['assets/images/projects/face-rec.jpg'],
        featured: false,
        category: 'cv',
        icon: 'bx-user-voice'
    },
    {
        id: 'people-counting',
        title: 'People Counting',
        company: 'Smartech Latam SAC',
        client: 'CC Quinde',
        year: '2025',
        description: 'Intelligent flow analytics for high-traffic commercial environments. I engineered a robust spatial monitoring solution that utilizes edge-processed vision data to track and count occupancy in real-time. By implementing advanced filtering algorithms, the system delivers high accuracy despite environmental noise, enabling data-driven optimization of facility operations.',
        technologies: ['YOLO', 'DeepSort', 'Edge AI'],
        images: ['assets/images/projects/people-count.jpg'],
        featured: false,
        category: 'cv',
        icon: 'bx-group'
    },
    {
        id: 'retail-analytics',
        title: 'Retail Analytics',
        company: 'Smartech Latam SAC',
        client: 'CC Quinde',
        year: '2025',
        description: 'A comprehensive visual analytics platform for commercial behavior mapping. I developed a high-fidelity monitoring system that identifies patterns in customer movement and engagement within retail spaces. The architecture transforms raw vision pipelines into actionable business intelligence, allowing operators to visualize traffic heatmaps and optimize spatial utilization.',
        technologies: ['Python', 'Data Analysis', 'Computer Vision'],
        images: ['assets/images/projects/retail.jpg'],
        featured: false,
        category: 'cv',
        icon: 'bx-shopping-bag'
    },
    {
        id: 'iot-broker',
        title: 'IoT Broker Connection',
        company: 'Smartech Latam SAC',
        year: '2024',
        description: 'Back-end infrastructure for large-scale industrial telemetry. I architected a centralized broker connection service that standardizes data communication across diverse hardware nodes. By implementing robust protocol handling and buffering logic, the system ensures seamless integration between field sensors and cloud-based analytics platforms for real-time monitoring.',
        technologies: ['Node-RED', 'MQTT', 'Docker', 'Backend'],
        images: ['assets/images/projects/broker.jpg'],
        featured: false,
        category: 'iot',
        icon: 'bx-broadcast'
    },

    // Alys Peru
    {
        id: 'visual-coin',
        title: 'Visual Coin System',
        company: 'Alys Peru SA',
        client: 'CNM (Mining)',
        year: '2024',
        description: 'An advanced visual classification system for high-speed industrial lines. I developed a multi-language processing engine optimized for high-performance edge platforms, utilizing neural networks for real-time object detection and quality control. This architecture delivers sub-millisecond precision in identifying and counting mineral components on conveyor belts in mission-critical mining environments.',
        technologies: ['C++', 'Edge AI', 'Computer Vision', 'Deep Learning'],
        images: ['assets/images/projects/visual-coin.jpg'],
        featured: false,
        category: 'automation',
        icon: 'bx-cube'
    },
    {
        id: 'textile-telemetry',
        title: 'Textile Telemetry',
        company: 'Alys Peru SA',
        client: 'Iberoplast',
        year: '2024',
        description: 'Full-stack industrial telemetry architecture designed for large-scale machinery. I engineered an end-to-end data pipeline leveraging low-power wireless protocols to monitor critical production metrics such as RPM and motor health. The system synchronizes real-time data with cloud-integrated analytics for predictive maintenance, significantly optimizing energy consumption and operational yield.',
        technologies: ['IoT', 'Modbus', 'Python', 'Wireless'],
        images: ['assets/images/projects/textile.jpg'],
        featured: false,
        category: 'iot',
        icon: 'bx-broadcast'
    },
    {
        id: 'shrimp-monitoring',
        title: 'Shrimp Monitoring',
        company: 'Alys Peru SA',
        client: 'MarinaSol / DC Capital',
        year: '2025',
        description: 'I designed a large-scale industrial wireless network for sustainable aquaculture operations. The system utilizes industrial-grade gateways to capture and process critical water quality metrics from specialized submerged sensors. Featuring automated calibration logic and comprehensive monitoring dashboards, this project ensures high-survival rates and biological stability for large-scale breeding facilities.',
        technologies: ['IoT', 'LoRaWAN', 'Sensors', 'Industrial'],
        images: ['assets/images/projects/shrimp.jpg'],
        featured: false,
        category: 'iot',
        icon: 'bx-water'
    },

    // Mining Mechatronick
    {
        id: 'safety-system',
        title: 'Safety System',
        company: 'Mining Mechatronick',
        client: 'Pan American Silver (Huarón)',
        year: '2024',
        description: 'A sophisticated automated safety solution for underground mining activities. I implemented a proximity-based prevention system using high-precision industrial sensors and robust PLC control logic. The system monitors operational perimeters in real-time and executes automated safety overrides to prevent mechanical hazards, ensuring human protection in mechanized drilling environments.',
        technologies: ['PLC', 'Industrial Sensors', 'Automation', 'Safety'],
        images: ['assets/images/projects/safety-system.jpg'],
        featured: false,
        category: 'industrial',
        icon: 'bx-shield-quarter'
    },
    {
        id: 'wireless-simulator',
        title: 'Wireless Simulator',
        company: 'Mining Mechatronick',
        client: 'Resemin (Perumin Concept)',
        year: '2024',
        description: 'A high-fidelity remote operation concept developed for international mining conventions. I engineered a wireless gateway that synchronizes machine-level signals with interactive interfaces, allowing low-latency remote control of heavy mining equipment from safety. This project highlights the intersection of industrial reliability and advanced wireless communication protocols for future mining.',
        technologies: ['Unity', 'C#', 'Wireless', 'Simulation'],
        images: ['assets/images/projects/simulator.jpg'],
        featured: false,
        category: 'education',
        icon: 'bx-joystick'
    },
    {
        id: 'angle-system',
        title: 'Angle System',
        company: 'Mining Mechatronick',
        client: 'Resemin (Mina El Brocal)',
        year: '2023',
        description: 'A precision guidance system for heavy mechanized drilling rigs. I developed a complex kinematics model based on high-resolution position sensors to calculate the exact orientation of industrial booms. This mathematical approach provides operators with sub-degree numerical precision, significantly improving the accuracy of drilling patterns and excavation efficiency in underground operations.',
        technologies: ['Embedded C', 'IMU', 'Kinematics', 'Math'],
        images: ['assets/images/projects/angle.jpg'],
        featured: false,
        category: 'automation',
        icon: 'bx-ruler'
    },
    {
        id: 'raptor-sim',
        title: 'Raptor Sim',
        company: 'Mining Mechatronick',
        client: 'Resemin S.A.',
        year: '2023',
        description: 'A comprehensive training platform for heavy machinery operators. I led the full mechanical and control hardware implementation, creating a high-fidelity operational replica of machine systems. By integrating industrial-grade interfaces with virtual environments, the platform provides a safe and cost-effective method for training personnel on complex mechanized maneuvers.',
        technologies: ['Simulation', 'Hydraulics', 'Hardware', 'Control'],
        images: ['assets/images/projects/raptor.jpg'],
        featured: false,
        category: 'education',
        icon: 'bx-cog'
    },

    // Personal / Featured
    {
        id: 'qt-face-auth',
        title: 'QtFaceAuth',
        company: 'Personal',
        year: '2024',
        description: 'Hands-free biometric authentication system built with C++, Qt, and OpenCV. Features liveness detection and secure user management.',
        technologies: ['C++', 'Qt', 'OpenCV', 'Security'],
        images: ['assets/images/projects/qtfaceauth.jpg'],
        githubUrl: 'https://github.com/asdcainicela/QtFaceAuth',
        featured: true,
        category: 'cv',
        icon: 'bx-user-check'
    },
    {
        id: 'lnx-science',
        title: 'LNX Science',
        company: 'Personal',
        year: '2023',
        description: 'Educational channel visualizing Calculus & Engineering with Manim (Python).',
        technologies: ['Manim', 'Python', 'Education', 'Math'],
        images: ['assets/images/projects/lnx-science.jpg'],
        githubUrl: undefined,
        featured: true,
        category: 'education',
        icon: 'bxl-youtube'
    },
    {
        id: 'zero-copy-ipc',
        title: 'Zero-Copy IPC',
        company: 'Personal',
        year: '2024',
        description: 'High-performance Shared Memory for 4K video on Jetson AGX (C++/CUDA).',
        technologies: ['C++', 'CUDA', 'Shared Memory', 'High Performance'],
        images: ['assets/images/projects/ipc.jpg'],
        featured: true,
        category: 'cv',
        icon: 'bx-transfer'
    },
    {
        id: 'drowsiness-ai',
        title: 'Drowsiness AI',
        company: 'Personal',
        year: '2023',
        description: 'Real-time edge detection on Jetson Nano. Optimized OpenCV pipeline.',
        technologies: ['OpenCV', 'Jetson Nano', 'Edge AI'],
        images: ['assets/images/projects/drowsiness.jpg'],
        featured: true,
        category: 'cv',
        icon: 'bxs-user-voice'
    },
    {
        id: 'ruma-segmentation',
        title: 'Ruma Segmentation',
        company: 'Personal',
        year: '2024',
        description: 'Automated material pile analysis using HQ-SAM and computer vision.',
        technologies: ['HQ-SAM', 'Computer Vision', 'AI'],
        images: ['assets/images/projects/ruma-seg.jpg'],
        featured: true,
        category: 'cv',
        icon: 'bx-layer'
    },
    {
        id: 'matlab-coins',
        title: 'Matlab Coins',
        company: 'Personal',
        year: '2023',
        description: 'Coin counting & detection GUI App built with Image Processing Toolbox.',
        technologies: ['Matlab', 'Image Processing', 'GUI'],
        images: ['assets/images/projects/coins.jpg'],
        featured: true,
        category: 'cv',
        icon: 'bxs-coin-stack'
    },
    {
        id: 'iot-sensors',
        title: 'IoT & Sensors',
        company: 'Personal',
        year: '2023',
        description: 'ESP32/Arduino integration with Bluetooth, WiFi, Servos & Steppers.',
        technologies: ['ESP32', 'Arduino', 'Sensors', 'Electronics'],
        images: ['assets/images/projects/sensors.jpg'],
        featured: true,
        category: 'iot',
        icon: 'bx-station'
    }
];
