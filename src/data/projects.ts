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
}

export const projects: Project[] = [
    // Smartech Latam
    {
        id: 'ruma-analytics',
        title: 'Ruma Analytics',
        company: 'Smartech Latam SAC',
        client: 'Minera Titan / Alma Perú',
        year: '2025',
        description: 'A flagship Industrial AI project designed for high-availability mining operations. Architected a system processing industrial stockpiles at 30 FPS. Integrates advanced computer vision for volumetric measurement and structural data integrity.',
        technologies: ['CUDA', 'TensorRT', 'C++', 'YOLO', 'Computer Vision'],
        images: ['assets/images/projects/ruma-analytics.jpg'],
        featured: true,
        category: 'industrial'
    },
    {
        id: 'smarttank-system',
        title: 'SmartTank System',
        company: 'Smartech Latam SAC',
        client: 'Alma Perú',
        year: '2025',
        description: 'Automated industrial inventory architecture for vertical storage facilities. Real-time visualization of material volume with custom alert logic and historical analytics.',
        technologies: ['IoT', 'MQTT', 'ESP32', 'Sensors'],
        images: ['assets/images/projects/smarttank.jpg'],
        featured: false,
        category: 'iot'
    },
    {
        id: 'face-recognition',
        title: 'Face Recognition',
        company: 'Smartech Latam SAC',
        year: '2025',
        description: 'High-performance biometric authentication system for access control. Modular architecture using state-of-the-art neural networks for reliable identification in varied lighting.',
        technologies: ['Python', 'FaceNet', 'OpenCV', 'Biometrics'],
        images: ['assets/images/projects/face-rec.jpg'],
        featured: false,
        category: 'cv'
    },
    {
        id: 'people-counting',
        title: 'People Counting',
        company: 'Smartech Latam SAC',
        client: 'CC Quinde',
        year: '2025',
        description: 'Intelligent flow analytics for high-traffic commercial environments. Edge-processed vision data to track and count occupancy in real-time.',
        technologies: ['YOLO', 'DeepSort', 'Edge AI'],
        images: ['assets/images/projects/people-count.jpg'],
        featured: false,
        category: 'cv'
    },
    {
        id: 'retail-analytics',
        title: 'Retail Analytics',
        company: 'Smartech Latam SAC',
        client: 'CC Quinde',
        year: '2025',
        description: 'Comprehensive visual analytics platform for commercial behavior mapping. Identifies patterns in customer movement and engagement to optimize spatial utilization.',
        technologies: ['Python', 'Data Analysis', 'Computer Vision'],
        images: ['assets/images/projects/retail.jpg'],
        featured: false,
        category: 'cv'
    },
    {
        id: 'iot-broker',
        title: 'IoT Broker Connection',
        company: 'Smartech Latam SAC',
        year: '2024',
        description: 'Back-end infrastructure for large-scale industrial telemetry. Centralized broker connection service standardizing data communication across diverse hardware nodes.',
        technologies: ['Node-RED', 'MQTT', 'Docker', 'Backend'],
        images: ['assets/images/projects/broker.jpg'],
        featured: false,
        category: 'iot'
    },

    // Alys Peru
    {
        id: 'visual-coin',
        title: 'Visual Coin System',
        company: 'Alys Peru SA',
        client: 'CNM (Mining)',
        year: '2024',
        description: 'Advanced visual classification system for high-speed industrial lines. Multi-language engine optimized for edge platforms with sub-millisecond precision.',
        technologies: ['C++', 'Edge AI', 'Computer Vision', 'Deep Learning'],
        images: ['assets/images/projects/visual-coin.jpg'],
        featured: true,
        category: 'automation'
    },
    {
        id: 'textile-telemetry',
        title: 'Textile Telemetry',
        company: 'Alys Peru SA',
        client: 'Iberoplast',
        year: '2024',
        description: 'Full-stack industrial telemetry architecture for large-scale machinery. Low-power wireless protocols to monitor critical production metrics like RPM and motor health.',
        technologies: ['IoT', 'Modbus', 'Python', 'Wireless'],
        images: ['assets/images/projects/textile.jpg'],
        featured: false,
        category: 'iot'
    },
    {
        id: 'shrimp-monitoring',
        title: 'Shrimp Monitoring',
        company: 'Alys Peru SA',
        client: 'MarinaSol / DC Capital',
        year: '2025',
        description: 'Large-scale industrial wireless network for sustainable aquaculture. Industrial gateways capture water quality metrics from submerged sensors.',
        technologies: ['IoT', 'LoRaWAN', 'Sensors', 'Industrial'],
        images: ['assets/images/projects/shrimp.jpg'],
        featured: false,
        category: 'iot'
    },

    // Mining Mechatronick
    {
        id: 'safety-system',
        title: 'Safety System',
        company: 'Mining Mechatronick',
        client: 'Pan American Silver (Huarón)',
        year: '2024',
        description: 'Sophisticated automated safety solution for underground mining. Proximity-based prevention using high-precision industrial sensors and robust PLC control logic.',
        technologies: ['PLC', 'Industrial Sensors', 'Automation', 'Safety'],
        images: ['assets/images/projects/safety-system.jpg'],
        featured: true,
        category: 'industrial'
    },
    {
        id: 'wireless-simulator',
        title: 'Wireless Simulator',
        company: 'Mining Mechatronick',
        client: 'Resemin (Perumin Concept)',
        year: '2024',
        description: 'High-fidelity remote operation concept. Wireless gateway synchronizing machine-level signals with interactive interfaces for low-latency remote control.',
        technologies: ['Unity', 'C#', 'Wireless', 'Simulation'],
        images: ['assets/images/projects/simulator.jpg'],
        featured: false,
        category: 'education'
    },
    {
        id: 'angle-system',
        title: 'Angle System',
        company: 'Mining Mechatronick',
        client: 'Resemin (Mina El Brocal)',
        year: '2023',
        description: 'Precision guidance system for heavy mechanized drilling rigs. Complex kinematics model based on high-resolution sensors to calculate exact boom orientation.',
        technologies: ['Embedded C', 'IMU', 'Kinematics', 'Math'],
        images: ['assets/images/projects/angle.jpg'],
        featured: false,
        category: 'automation'
    },
    {
        id: 'raptor-sim',
        title: 'Raptor Sim',
        company: 'Mining Mechatronick',
        client: 'Resemin S.A.',
        year: '2023',
        description: 'Comprehensive training platform for heavy machinery operators. Full mechanical and control hardware implementation, replicating machine systems.',
        technologies: ['Simulation', 'Hydraulics', 'Hardware', 'Control'],
        images: ['assets/images/projects/raptor.jpg'],
        featured: false,
        category: 'education'
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
        category: 'cv'
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
        category: 'education'
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
        category: 'cv'
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
        category: 'cv'
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
        category: 'cv'
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
        category: 'cv'
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
        category: 'iot'
    }
];
