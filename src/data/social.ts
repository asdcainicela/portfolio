export interface SocialLink {
    platform: string;
    url: string;
    icon: string; // CSS class for icon (e.g. 'bx bxl-github')
    username?: string;
    followers?: string;
}

export const socialLinks: SocialLink[] = [
    {
        platform: 'GitHub',
        url: 'https://github.com/asdcainicela',
        icon: 'bx bxl-github',
        followers: '50+'
    },
    {
        platform: 'LinkedIn',
        url: 'https://www.linkedin.com/in/gerald-cainicela/',
        icon: 'bx bxl-linkedin',
        followers: '500+'
    },
    {
        platform: 'YouTube',
        url: 'https://www.youtube.com/@lnx_science', // Assuming based on LNX Science project
        icon: 'bx bxl-youtube'
    },
    {
        platform: 'TikTok',
        url: 'https://www.tiktok.com/@lnx_science',
        icon: 'bx bxl-tiktok',
        followers: '5000+'
    },
    {
        platform: 'Email',
        url: 'mailto:gerald.cainicela.a@gmail.com',
        icon: 'bx bx-envelope'
    }
];
