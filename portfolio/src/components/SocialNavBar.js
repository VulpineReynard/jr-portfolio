import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library, icon } from '@fortawesome/fontawesome-svg-core';

library.add(fab, fas);
const githubIcon = icon({ prefix: 'fab', iconName: 'github' });
const twitterIcon = icon({ prefix: 'fab', iconName: 'twitter' });
const linkedinIcon = icon({ prefix: 'fab', iconName: 'linkedin' });
const resumeIcon = icon({ prefix: 'fas', iconName: 'file-alt' })

const SocialNavBar = () => {
  return (
    <div className="social-nav">
      <a href="https://github.com/VulpineReynard"><FontAwesomeIcon className="icon github-icon" icon={githubIcon}/></a>
      <a href="###"><FontAwesomeIcon className="icon twitter-icon" icon={twitterIcon}/></a>
      <a href="###"><FontAwesomeIcon className="icon linkedin-icon" icon={linkedinIcon}/></a>
      <a href="###"><FontAwesomeIcon className="icon resume-icon" icon={resumeIcon}/></a>
    </div>
  );
}

export default SocialNavBar;