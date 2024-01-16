import { ComponentProps } from "react";
import style from './Avatar.module.scss';
import clsx from 'clsx';

export default function Avatar({ name, icon, className, ...props }: { name: string, icon: string } & ComponentProps<'div'>) {
    return <div className={clsx(style.avatar, className??'')} {...props}>
        {icon ? <img src={icon} alt={"name"} /> : <div>{name.charAt(0).toLocaleUpperCase()}</div>}
    </div>
}