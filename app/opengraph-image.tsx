import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
 
export const alt = 'Coup | iMessage Automation for Teams'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'
 
export default async function Image() {
  return new ImageResponse(
    (
      <div style={styles.container}>
        <div style={styles.logoWrapper}>
          <span style={styles.logoText}>Coup</span>
        </div>
        <div style={styles.textWrapper}>
          <div style={styles.title}>
            iMessage Automation
          </div>
          <div style={styles.subtitle}>
            for Teams and AI Workflows
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}

const styles = {
  container: {
    background: 'linear-gradient(to bottom, #eff8ff, #ffffff)',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'sans-serif',
  },
  logoWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#007aff',
    padding: '20px 40px',
    borderRadius: '100px',
    marginBottom: '40px',
    boxShadow: '0 10px 30px rgba(0,122,255,0.3)',
  },
  logoText: {
    fontSize: 64,
    fontWeight: 'bold',
    color: 'white',
    letterSpacing: '-0.02em',
  },
  textWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  title: {
    fontSize: 80,
    fontWeight: 'bold',
    color: '#1a1a1a',
    lineHeight: 1.1,
    letterSpacing: '-0.02em',
  },
  subtitle: {
    fontSize: 48,
    fontWeight: 'normal',
    color: '#666666',
    marginTop: 20,
  },
} as const
