import { FC } from 'react';

export const Comfortable: FC = ({ children }) => {
    return <div className="m-auto lg:max-w-2xl">{children}</div>;
};

export const Wide: FC = ({ children }) => {
    return <div className="m-auto lg:max-w-5xl">{children}</div>;
};
