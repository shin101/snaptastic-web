import { Helmet } from "react-helmet-async"

function PageTitle({title}){
  return (
          <Helmet>
            <title>{title} | Snaptastic</title>
          </Helmet>
  )
};

export default PageTitle;