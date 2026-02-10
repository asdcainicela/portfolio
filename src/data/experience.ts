export interface Experience {
    company: string;
    period: string;
    role: string;
    url?: string;
    projects: string[]; // IDs from projects.ts
}

export const experience: Experience[] = [
    {
        company: 'Smartech Latam SAC',
        period: '2025 - Present',
        role: 'Edge AI & IoT Engineer',
        url: 'https://www.linkedin.com/company/smartechlatam/posts/?feedView=all',
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
        period: '2025 - Present', // Backup said 2025-Present for period, but projects are 2024-2025. Keeping backup's main label.
        role: 'Computer Vision Engineer',
        url: 'https://www.alysglobal.ai/',
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
        projects: [
            'safety-system',
            'wireless-simulator',
            'angle-system',
            'raptor-sim'
        ]
    }
];
