import { Basics } from "./basics.model";
import { Work } from "./work.model";


export interface JsonData {
    basics: Basics;
    work: Work[];
    // volunteer: Volunteer[];
    // education: Education[];
    // awards: Award[];
    // publications: Publication[];
    // skills: Skill[];
    // languages: Language[];
    // interests: Interest[];
    // references: Reference[];
}