import { Skeleton } from "./skeleton";

const SermonsCardSkeleton = () => {
  return (
    <div className="w-full">
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="space-y-3">
            <Skeleton className="w-full h-60 rounded-xl" />
            <Skeleton className="h-5 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-4 w-1/3" />
            <Skeleton className="h-14 w-full rounded-full" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SermonsCardSkeleton;
