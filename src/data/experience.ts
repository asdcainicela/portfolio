export interface Experience {
    company: string;
    period: string;
    role: string;
    url?: string;
    description?: string;
    projects: string[]; // IDs from projects.ts
}

export const experience: Experience[] = [
    {
        company: 'Smartech Latam SAC',
        period: '2025 - Present',
        role: 'Edge AI & IoT Engineer',
        url: 'https://www.linkedin.com/company/smartechlatam/posts/?feedView=all',
        description: 'Architecting high-performance mining surveillance systems and industrial IoT telemetry networks for major clients like Minera Titan and Alma Perú.',
        projects: [
            'ruma-analytics',
            'smarttank-system',
            'face-recognition',
            'people-counting',
            'retail-analytics',
            'iot-broker'
        ]
    },
    {
        company: 'Alys Peru SA',
        period: '2025 - Present',
        role: 'Computer Vision Engineer',
        url: 'https://www.alysglobal.ai/',
        description: 'Developing high-speed visual classification engines and textile industrial telemetry solutions for mission-critical operations.',
        projects: [
            'visual-coin',
            'textile-telemetry',
            'shrimp-monitoring'
        ]
    },
    {
        company: 'Mining Mechatronick',
        period: '2023 - 2024',
        role: 'Mechatronics Engineer',
        url: 'https://mintronick.com/',
        description: 'Implemented automated safety systems for underground mining and engineered high-fidelity machinery simulators.',
        projects: [
            'safety-system',
            'wireless-simulator',
            'angle-system',
            'raptor-sim'
        ]
    }
];
