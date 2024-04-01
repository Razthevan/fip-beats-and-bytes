import { User } from '@nextui-org/react';

const UserInformation = () => {
  return (
    <User
      name="Razvan Mirleneanu"
      description="Software Engineer"
      avatarProps={{
        size: 'md',
        name: 'RM',
        isBordered: true,
        showFallback: true,
        src: 'https://media.licdn.com/dms/image/C4D03AQFpxzxH73jX_w/profile-displayphoto-shrink_200_200/0/1517280720405?e=1717027200&v=beta&t=4CN52U-rZuIhmW_34dzEraelGnsOQmgHUmKqSX96pLY',
        imgProps: {
          loading: 'eager',
        },
      }}
    />
  );
};

export default UserInformation;
