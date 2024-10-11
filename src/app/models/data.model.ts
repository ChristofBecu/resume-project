import { Basics } from "./basics.model";
import { Education } from "./education.model";
import { Work } from "./work.model";


export interface JsonData {
    basics: Basics;
    work: Work[];
    education: Education[];
    // volunteer: Volunteer[];
    // awards: Award[];
    // publications: Publication[];
    // skills: Skill[];
    // languages: Language[];
    // interests: Interest[];
    // references: Reference[];
}