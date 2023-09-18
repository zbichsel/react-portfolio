import { gql } from "@apollo/client";

export const ADD_USER = gql`
mutation Mutation($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
  addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
    user {
      lastName
      firstName
      email
    }
  }
}
`;

// export const ADD_PLANT = gql`
//   mutation addPlant(
//     $common_name: String
//     $scientific_name: String!
//     $watering: String!
//     $sunlight: String!
//   ) {
//     addPlant(
//       common_name: $common_name
//       scientific_name: $scientific_name
//       watering: $watering
//       sunlight: $sunlight
//     ) {
//       _id
//       common_name
//       scientific_name
//       watering
//       sunlight
//     }
//   }
// `;

export const UPDATE_USER = gql`
mutation Mutation($firstName: String, $lastName: String, $email: String, $password: String) {
  updateUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
    _id
    email
    firstName
    lastName
  }
}
`;

export const DELETE_USER = gql`
mutation DeleteUser($id: ID!) {
  deleteUser(_id: $id) {
    firstName
    lastName
    email
  }
}
`;

// export const DELETE_PLANT = gql`
//   mutation deletePlant($_id: ID!) {
//     deletePlant(_id: $_id) {
//       _id
//     }
//   }
// `;

export const LOGIN = gql`
mutation Mutation($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    user {
      _id
      email
      firstName
      lastName
    }
  }
}
`;

// export const WATER_PLANT = gql`
//   mutation Mutation($plantId: ID!, $date: String!, $watered: Boolean!) {
//     waterPlant(plantId: $plantId, date: $date, watered: $watered) {
//       wateringHistory {
//         watered
//         date {
//           value
//         }
//       }
//     }
//   }
// `;

// export const ADD_PLANT_TO_GARDEN = gql`
// mutation Mutation($plant: PlantInput!) {
//   addPlantToGarden(plant: $plant) {
//     _id
//     plants {
//       _id
//       imgURL
//       common_name
//       cycle
//       description
//       growth_rate
//       hardiness
//       maintenance
//       scientific_name
//       sunlight
//       watering
//       wateringHistory {
//         date {
//           value
//         }
//         watered
//       }
//     }
//   }
// }
// `;
