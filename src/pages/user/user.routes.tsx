import {RouteObject} from "react-router";
import UserKYC from "./kyc/kyc";
import User from "./user";
import PersonalInformation from "./personal-information/personal-information";

const userRoutes: RouteObject[] = [
    {
        path: 'user',
        element: <User/>,
        children: [
            {
                path: ':id/pi',
                element: <PersonalInformation/>
            },
            {
                path: ':id/kyc',
                element: <UserKYC></UserKYC>
            }
        ]
    }
]

export default userRoutes;