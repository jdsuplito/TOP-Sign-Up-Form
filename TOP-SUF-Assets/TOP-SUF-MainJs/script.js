const socialMediaIcons = document.querySelectorAll('.icons-hov');
const baseAssetPath = './TOP-SUF-Assets/TOP-SUF-Media/';

const socialMediaIconImages = {
  fb: {
    in: 'Cfacebook.png',
    out: 'fb.png'
  },
  google: {
    in: 'Cgoogle.png',
    out: 'google.png'
  },
  linkedin: {
    in: 'Clinkedin.png',
    out: 'linkedin.png'
  },
  twitter: {
    in: 'Ctwitter.png',
    out: 'twitter.png'
  }
}

socialMediaIcons.forEach((icon) => {
  icon.addEventListener('mouseenter', (e) => {
    const iconImageEl = e.target.querySelector('img'); 
    const iconImageAlt = iconImageEl.alt;

    iconImageEl.src = baseAssetPath + socialMediaIconImages[iconImageAlt].in;
  });
  
  icon.addEventListener('mouseleave', (e) => {
    const iconImageEl = e.target.querySelector('img'); 
    const iconImageAlt = iconImageEl.alt;
    
    iconImageEl.src = baseAssetPath + socialMediaIconImages[iconImageAlt].out;
  });
});
