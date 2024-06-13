import { ReactNode } from "react";
import Pagination from "../Pagination/Pagination";
import {IPaginationProps} from '../../interfaces/index.ts'

interface IProps extends IPaginationProps {
    top?: boolean;
    bottom?: boolean;
    children: ReactNode;
}

export default function PaginationWrapper({ top, bottom, children, ...paginationProps }: IProps) {
    return (
        <>
            {top && <Pagination {...paginationProps} />}
            {children}
            {bottom && <Pagination {...paginationProps} />}
        </>
    );
}
