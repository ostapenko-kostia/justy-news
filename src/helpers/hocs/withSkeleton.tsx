import Skeleton from "../../components/Skeleton/Skeleton";
import { TypeDirection, TypeSkeleton } from "../../interfaces";

interface IProps {
    isLoading: boolean
}

export default function withSkeleton<P extends object>(Component: React.ComponentType<P>, type?: TypeSkeleton, count?: number, direction?: TypeDirection) {
    return function withSkeleton(props: IProps & P) {
        const { isLoading, ...restProps } = props;

        if (isLoading) return <Skeleton type={type} count={count} direction={direction} />;

        return <Component {...restProps as P} />
    };
}
