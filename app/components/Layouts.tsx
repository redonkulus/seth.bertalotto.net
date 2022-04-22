import type { FC, ReactNode } from 'react';

type Props = {
    children: ReactNode;
};

export const Comfortable: FC<Props> = ({ children }) => {
    return <div className="m-auto lg:max-w-2xl">{children}</div>;
};

export const Wide: FC<Props> = ({ children }) => {
    return <div className="m-auto lg:max-w-5xl">{children}</div>;
};
