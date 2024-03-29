'use client';
import { Link } from '@nextui-org/react';

const SocialInformation = ({ fallbackMode }: { fallbackMode?: boolean }) => {
  return (
    <div className="text-lg font-light">
      <p>
        Sharing{' '}
        <span className={fallbackMode ? 'line-through' : ''}>
          my current FIP Radio groove and{' '}
        </span>{' '}
        a bit about myself.
      </p>
      <p>
        I am a software engineer who loves taking projects from idea to launch,
        and building strong teams along the way.
      </p>
      <p className="pb-1">Find me on: </p>
      <span className="flex items-center content-center">
        <Link
          isBlock
          size="lg"
          isExternal
          showAnchorIcon
          color="primary"
          href="https://github.com/Razthevan"
        >
          Github
        </Link>
        <Link
          isBlock
          size="lg"
          isExternal
          showAnchorIcon
          color="primary"
          href="https://linkedin.com/in/razvan-mirleneanu"
        >
          Linkedin
        </Link>
      </span>
    </div>
  );
};

export default SocialInformation;
