import {useTranslations} from 'next-intl';

export default function Home() {
  const t = useTranslations('HomePage');
  return (
    <> 
      <div className="sketchfab-embed-wrapper"> <iframe title="Fractal Define 7 XL Tempered Glass" frameBorder="0" allowFullScreen  allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking="true" execution-while-out-of-viewport="true" execution-while-not-rendered="true" web-share="true" src="https://sketchfab.com/models/7c89802dbaa0490587ff165aace4debe/embed?autospin=1&autostart=1&transparent=1"> </iframe> <p style={{ fontSize: 13, fontWeight: 'normal', margin: 5, color: '#4A4A4A'}}> <a href="https://sketchfab.com/3d-models/fractal-define-7-xl-tempered-glass-7c89802dbaa0490587ff165aace4debe?utm_medium=embed&utm_campaign=share-popup&utm_content=7c89802dbaa0490587ff165aace4debe" target="_blank" rel="nofollow" style={{fontWeight: 'bold', color: '#1CAAD9'}}> Fractal Define 7 XL Tempered Glass </a> by <a href="https://sketchfab.com/digitalrazor3d?utm_medium=embed&utm_campaign=share-popup&utm_content=7c89802dbaa0490587ff165aace4debe" target="_blank" rel="nofollow" style={{fontWeight: 'bold', color: '#1CAAD9'}}> digitalrazor3d </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=7c89802dbaa0490587ff165aace4debe" target="_blank" rel="nofollow" style={{fontWeight: 'bold', color: '#1CAAD9'}}>Sketchfab</a></p></div>
    </>
  );
}
