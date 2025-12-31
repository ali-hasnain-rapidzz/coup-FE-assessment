import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Coup | iMessage Automation',
    short_name: 'Coup',
    description: 'iMessage Automation for Teams and AI Workflows',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#007aff',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
