import { Link } from '@nextui-org/react';

const SocialInformation = () => {
  return (
    <div className="text-lg font-light">
      <p>Sharing my current FIP Radio groove and a bit about myself.</p>
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
