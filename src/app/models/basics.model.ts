import { Profile } from "./profile.model";
import { Location } from "./location.model";

export interface Basics {
    name: string;
    label: string;
    image: string;
    email: string;
    phone: string;
    summary: string;
    location: Location;
    profiles: Profile[];
}