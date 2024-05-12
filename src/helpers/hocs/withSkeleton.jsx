import Skeleton from "../../components/Skeleton/Skeleton";

export default function withSkeleton(Component, type, count) {
    return function withSkeleton(props) {
        const { isLoading, ...restProps } = props;

        if (isLoading) return <Skeleton type={type} count={count}></Skeleton>;

        return <Component {...restProps} />
    };
}
