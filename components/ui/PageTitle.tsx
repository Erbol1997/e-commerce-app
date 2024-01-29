interface PageTitleProps {
  title: string;
  pageTitle?: string;
}

const PageTitle = ({ title, pageTitle }: PageTitleProps) => {
  return (
    <h1 className="text-lg sm:text-xl font-medium mt-2 mb-2 uppercase text-black">
      {pageTitle ? pageTitle : title}
    </h1>
  );
};

export default PageTitle;
