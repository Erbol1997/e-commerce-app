export function CategorySkeleton() {
  return <div className="w-full h-full rounded-md bg-skeleton-bg animate-pulse" />;
}

export const CategoryListSkeleton = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="bg-skeleton-bg h-5 w-[20px] rounded-md animate-pulse"></div>
      <div className="bg-skeleton-bg h-5 w-full rounded-md animate-pulse"></div>
    </div>
  );
};

export const ProductListSkeleton = () => {
  return (
    <>
      {Array.from({ length: 8 }).map((_, index) => (
        <div
          key={index}
          className="h-full w-full p-4 rounded-md border-[1px] border-border-color animate-pulse">
          <div className="h-[157px] w-[214px] mt-7 mb-7 rounded-sm bg-[#e0e0e066] animate-pulse"></div>
          <div className="text-center flex justify-center items-center gap-1 mb-2">
            <div className="h-[2px] w-[12px] bg-[#e0e0e066] rounded-sm animate-pulse"></div>
            <div className="h-[2px] w-[12px] bg-[#e0e0e066] rounded-sm animate-pulse"></div>
            <div className="h-[2px] w-[12px] bg-[#e0e0e066] rounded-sm animate-pulse"></div>
          </div>
          <div className="mt-1 w-[86px] h-[22px] rounded-sm bg-[#e0e0e066] animate-pulse"></div>
          <div className="mt-2 w-full h-[66px] rounded-sm bg-[#e0e0e066] animate-pulse"></div>
          <div className="mt-2 w-[96px] h-[20px] rounded-sm bg-[#e0e0e066] animate-pulse"></div>
          <div className="mt-1 w-[87px] h-[15px] rounded-sm bg-[#e0e0e066] animate-pulse"></div>
          <div className="mt-3 flex items-center gap-3">
            <div className="w-[103px] h-[35px] bg-[#e0e0e066] rounded-sm animate-pulse"></div>
            <div className="w-[35px] h-[35px] bg-[#e0e0e066] rounded-sm animate-pulse"></div>
          </div>
        </div>
      ))}
    </>
  );
};
