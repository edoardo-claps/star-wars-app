import React from "react";

import { 
    gql
  } from "@apollo/client";



 export const Get_char_graph= gql`
      query Characters {
          name
      }
    `