import { Skeleton } from "@/ui/Skeleton";
import cls from "./CartItem.module.scss";

const CartItemSkeleton = () => {

return (
    <article className={cls.card}>
    <Skeleton className={cls.img} width={'100%'} height={300} />

    <div className={cls.body}>
        <div className={cls.info}>
        <Skeleton width={'100%'} height={48} />
        <Skeleton width={'100%'} height={22} />
        </div>

        <div className={cls.footer}>
        <Skeleton width={135} height={50} />
        <Skeleton width={65} height={22} />
        </div>
    </div>
    </article>
);
};

export {CartItemSkeleton};