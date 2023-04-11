import React from 'react';
import s from "./BlockTitle.module.scss";

type BlockTitlePropsType = {
    title: string
}

export const BlockTitle: React.FC<BlockTitlePropsType> = (
    {title}
) => {
    return (
        <div className={s.container}>
            <h3 className={s.title}>{title}</h3>
        </div>
    );
};

