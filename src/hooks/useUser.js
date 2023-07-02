import { gql, useQuery, useReactiveVar } from "@apollo/client";
import { logUserOut, isLoggedInVar} from "../apollo";
import { useEffect } from "react";

const ME_QUERY = gql`
  query me {
    me {
      username
      avatar
    }
  }
`;

// currently just having token will log a user in so created a useUser hook to make sure the provided token is a correct one
export const useUser = () => {
  const hasToken = useReactiveVar(isLoggedInVar);
  // below is a query that is only going to run if the user is logged in via local storage token
  const { data } = useQuery(ME_QUERY, { skip: !hasToken });

  // TESTING.... UNCOMMENT THE CODE BELOW LATER 

  // useEffect(() => {
  //   if (data?.me === null) {
  //     // Means there is a token on local storage but the token did not work on the backend.. maybe user faked a token or tampered with token
  //     logUserOut();
  //   }
  // }, [data]);
  return { data };
};
